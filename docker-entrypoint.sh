#!/usr/bin/env bash
set -euo pipefail

# ---------------------------------------------------------------------------
# Runtime configuration.  Everything can be overridden via environment
# variables (docker run -e ...).
# ---------------------------------------------------------------------------
PUID="${PUID:-1000}"                 # user id the server runs as
PGID="${PGID:-1000}"                 # group id the server runs as
AUTH="${AUTH:-password}"             # password | none
PORT="${PORT:-8080}"                 # container port
BIND_ADDR="${BIND_ADDR:-0.0.0.0}"    # host/ip to bind
USER_DATA_DIR="${USER_DATA_DIR:-/var/lib/code-server/data}"   # VS Code data
EXTENSIONS_DIR="${EXTENSIONS_DIR:-${USER_DATA_DIR}/extensions}"
CONFIG="${CONFIG:-/var/lib/code-server/config.yaml}"
DISABLE_TELEMETRY="${DISABLE_TELEMETRY:-false}"
CERT="${CERT:-}"                     # TLS cert path, or "true" to auto-generate
CERT_KEY="${CERT_KEY:-}"             # TLS cert key path
CERT_HOST="${CERT_HOST:-}"           # host for auto-generated certs
LOCALE="${LOCALE:-}"                 # VS Code locale
WORKSPACE="${WORKSPACE:-}"           # folder/workspace to open
EXTRA_ARGS="${EXTRA_ARGS:-}"         # extra CLI flags, space-separated
PRESET_DIR="${PRESET_DIR:-/opt/vsnote/preset}"  # baked-in settings/extensions

# ---------------------------------------------------------------------------
# Authentication.  code-server only accepts the password via $PASSWORD or the
# config file, so pass it through the environment.
# ---------------------------------------------------------------------------
if [[ "${AUTH}" == "password" ]]; then
  if [[ -n "${HASHED_PASSWORD:-}" ]]; then
    export HASHED_PASSWORD
  elif [[ -n "${PASSWORD:-}" ]]; then
    export PASSWORD
  else
    PASSWORD="$(head -c 16 /dev/urandom | base64 | tr -dc 'A-Za-z0-9' | head -c 16)"
    export PASSWORD
    echo "No PASSWORD set; generated random password: ${PASSWORD}"
  fi
fi

# ---------------------------------------------------------------------------
# Data/config directories.
# ---------------------------------------------------------------------------
mkdir -p "${USER_DATA_DIR}" "${EXTENSIONS_DIR}" "$(dirname "${CONFIG}")"

if [[ -n "${WORKSPACE}" ]] && [[ ! -e "${WORKSPACE}" ]]; then
  mkdir -p "${WORKSPACE}"
fi

# ---------------------------------------------------------------------------
# First-run seeding from the baked-in preset.  Runs only when the target files
# are absent, so it also works when the data dir is a mounted volume.
# ---------------------------------------------------------------------------
if [[ -n "${PRESET_DIR}" ]] && [[ -d "${PRESET_DIR}" ]]; then
  mkdir -p "${USER_DATA_DIR}/User"
  if [[ ! -f "${USER_DATA_DIR}/User/settings.json" ]] && [[ -f "${PRESET_DIR}/settings.json" ]]; then
    cp "${PRESET_DIR}/settings.json" "${USER_DATA_DIR}/User/settings.json"
    echo "Seeded preset settings.json into ${USER_DATA_DIR}/User"
  fi
  if [[ -d "${PRESET_DIR}/extensions" ]]; then
    local_ext="$(shopt -s nullglob; printf '%s\n' "${PRESET_DIR}"/extensions/*)"
    if [[ -n "${local_ext}" ]]; then
      for ext in "${PRESET_DIR}"/extensions/*; do
        [[ -d "${ext}" ]] || continue
        name="$(basename "${ext}")"
        if [[ ! -d "${EXTENSIONS_DIR}/${name}" ]]; then
          cp -r "${ext}" "${EXTENSIONS_DIR}/${name}"
          echo "Seeded extension: ${name}"
        fi
      done
    fi
  fi
fi

# ---------------------------------------------------------------------------
# Runtime user/group (drop privileges unless PUID=0).
# ---------------------------------------------------------------------------
RUNNER=()
if [[ "${PUID}" != "0" ]]; then
  if ! getent group "${PGID}" >/dev/null 2>&1; then
    groupadd -g "${PGID}" coder
  fi
  run_user="$(getent passwd "${PUID}" 2>/dev/null | cut -d: -f1 || true)"
  if [[ -z "${run_user}" ]]; then
    useradd -m -u "${PUID}" -g "${PGID}" -s /bin/bash coder
    run_user="coder"
  fi
  chown -R "${PUID}:${PGID}" \
    "${USER_DATA_DIR}" "${EXTENSIONS_DIR}" "$(dirname "${CONFIG}")"
  if [[ -n "${WORKSPACE}" ]]; then
    chown "${PUID}:${PGID}" "${WORKSPACE}"
  fi
  RUNNER=(setpriv --reuid "${PUID}" --regid "${PGID}" --init-groups env HOME="/home/${run_user}")
else
  RUNNER=(env HOME=/root)
fi

# ---------------------------------------------------------------------------
# Build the CLI args.
# ---------------------------------------------------------------------------
args=()
if [[ "${AUTH}" == "none" ]]; then
  args+=(--auth none)
fi
args+=(--bind-addr "${BIND_ADDR}:${PORT}")
args+=(--user-data-dir "${USER_DATA_DIR}")
args+=(--extensions-dir "${EXTENSIONS_DIR}")
args+=(--config "${CONFIG}")
if [[ "${DISABLE_TELEMETRY}" == "true" ]]; then
  args+=(--disable-telemetry)
fi
[[ -n "${CERT}" ]] && args+=(--cert "${CERT}")
[[ -n "${CERT_KEY}" ]] && args+=(--cert-key "${CERT_KEY}")
[[ -n "${CERT_HOST}" ]] && args+=(--cert-host "${CERT_HOST}")
[[ -n "${LOCALE}" ]] && args+=(--locale "${LOCALE}")
if [[ -n "${WORKSPACE}" ]]; then
  args+=("${WORKSPACE}")
fi
# shellcheck disable=SC2086
read -r -a extra_args <<< "${EXTRA_ARGS}"
args+=("${extra_args[@]}")

exec "${RUNNER[@]}" node /usr/local/lib/code-server/out/node/entry.js "${args[@]}"
