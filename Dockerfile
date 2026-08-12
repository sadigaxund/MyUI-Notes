# syntax=docker/dockerfile:1

# code-server (vsnote) — build and run from source.
#
# Build:
#   VSCODE_COMMIT="$(git ls-tree HEAD lib/vscode | awk '{print $3}')"
#   docker build --build-arg VSCODE_COMMIT="$VSCODE_COMMIT" -t sakhund/vsnote .
#
# Run:
#   docker run -it --rm -p 8080:8080 \
#     -e PASSWORD=secret -e PUID="$(id -u)" -e PGID="$(id -g)" \
#     -v /home/you/workspace:/workspace -e WORKSPACE=/workspace \
#     sakhund/vsnote
#
# Layer order matters for rebuild speed:
#   - code-server source changes        -> only "npm run build" (~minutes)
#   - code-server dependency changes    -> re-runs "npm ci"
#   - VS Code pin (VSCODE_COMMIT) bump  -> full VS Code rebuild (unavoidable)

ARG VSCODE_COMMIT=df53daabb18cd157bdb08c7f01c34df936cf12f4
ARG VERSION=0.0.0
ARG NODE_IMAGE=node:24.18.0-bookworm-slim
ARG RUNTIME_IMAGE=debian:bookworm-slim

###############################################################################
# Build stage: compile VS Code and code-server
###############################################################################
FROM ${NODE_IMAGE} AS build

ARG VSCODE_COMMIT
ARG VERSION

# Native module build dependencies for lib/vscode (node-pty, kerberos,
# native-keymap, native-watchdog, @vscode/sqlite3, ...) plus quilt for the
# patches/, and jq/git for build-vscode.sh.
RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    build-essential \
    python3 \
    pkg-config \
    libx11-dev \
    libxkbfile-dev \
    libsecret-1-dev \
    libkrb5-dev \
    quilt \
    git \
    ca-certificates \
    curl \
    jq \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /src

###############################################################################
# Layer: code-server dependencies.
# Cached unless ci/ or a lockfile/package.json changes.
# SKIP_SUBMODULE_DEPS defers lib/vscode's install to its own layer.
###############################################################################
COPY ci ./ci
COPY package.json package-lock.json ./
COPY test/package.json test/package-lock.json ./test/
COPY test/e2e/extensions/test-extension/package.json \
     test/e2e/extensions/test-extension/package-lock.json \
     ./test/e2e/extensions/test-extension/
RUN --mount=type=cache,target=/root/.npm SKIP_SUBMODULE_DEPS=1 npm ci

###############################################################################
# Layer: inputs to the VS Code build (patches, fake git repo for
# BUILD_SOURCEVERSION).  Cached unless patches/ or the files above change.
###############################################################################
COPY patches ./patches
RUN git init -q \
  && git config user.email "build@local" \
  && git config user.name "build" \
  && git add -A \
  && git commit -q -m build

###############################################################################
# Layer: the pinned VS Code source.
# Cached per VSCODE_COMMIT value; only refetched when the pin changes.
###############################################################################
RUN git init -q lib/vscode \
  && git -C lib/vscode remote add origin https://github.com/microsoft/vscode.git \
  && git -C lib/vscode fetch --depth 1 origin "${VSCODE_COMMIT}" \
  && git -C lib/vscode checkout -q FETCH_HEAD \
  && git -C lib/vscode reset -q --hard FETCH_HEAD

###############################################################################
# Layer: apply the fork's patches, then install lib/vscode's dependencies
# (including building its native modules).  Cached per VSCODE_COMMIT.
###############################################################################
RUN quilt push -a

RUN --mount=type=cache,target=/root/.npm npm --prefix lib/vscode install

###############################################################################
# Layer: build VS Code (reh-web, minified) and code-server.
# The expensive one; only re-runs when VS Code/patches/deps change.
###############################################################################
RUN VERSION="${VERSION}" npm run build:vscode \
  && npm run build

###############################################################################
# Layer: the rest of the tree (code-server sources).  Any change here only
# invalidates the final build layer below (~minutes), never the VS Code build.
###############################################################################
COPY . .

RUN npm run build

# Slash build-only artifacts before copying to the runtime stage.
RUN rm -rf \
    lib/vscode/.git \
    lib/vscode/out-build \
    lib/vscode/out-vscode \
    lib/vscode-reh-web-linux-x64 \
    lib/vscode-reh-web-linux-arm64 \
    test

###############################################################################
# Runtime stage
###############################################################################
FROM ${NODE_IMAGE} AS node-runtime

FROM ${RUNTIME_IMAGE} AS runtime

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    dumb-init \
    passwd \
    ca-certificates \
    curl \
    git \
    git-lfs \
    openssh-client \
    procps \
    locales \
    libkrb5-3 \
  && git lfs install \
  && sed -i 's/# en_US.UTF-8/en_US.UTF-8/' /etc/locale.gen \
  && locale-gen \
  && rm -rf /var/lib/apt/lists/*

ENV LANG=en_US.UTF-8 \
    LC_ALL=en_US.UTF-8

# Node.js runtime for the server and extension hosts.
COPY --from=node-runtime /usr/local/bin/node /usr/local/bin/node

COPY --from=build /src/out /usr/local/lib/code-server/out
COPY --from=build /src/node_modules /usr/local/lib/code-server/node_modules
COPY --from=build /src/package.json /usr/local/lib/code-server/package.json
COPY --from=build /src/lib/vscode /usr/local/lib/code-server/lib/vscode
COPY --from=build /src/src/browser/pages /usr/local/lib/code-server/src/browser/pages
COPY docker-entrypoint.sh /usr/local/bin/entrypoint.sh

RUN chmod +x /usr/local/bin/entrypoint.sh

WORKDIR /usr/local/lib/code-server

# --- runtime configuration (all overridable via -e) --------------------------
ENV PUID=1000 \
    PGID=1000 \
    AUTH=password \
    PORT=8080 \
    BIND_ADDR=0.0.0.0 \
    USER_DATA_DIR=/var/lib/code-server/data \
    EXTENSIONS_DIR=/var/lib/code-server/data/extensions \
    CONFIG=/var/lib/code-server/config.yaml \
    DISABLE_TELEMETRY=false

VOLUME ["/var/lib/code-server"]

EXPOSE 8080

HEALTHCHECK CMD curl -fsS "http://127.0.0.1:${PORT}/healthz" || exit 1

ENTRYPOINT ["dumb-init", "--", "/usr/local/bin/entrypoint.sh"]