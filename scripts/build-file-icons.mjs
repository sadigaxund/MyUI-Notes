#!/usr/bin/env node
/**
 * Generates src/lib/fileIcons.ts + copies a curated subset of Material Icon
 * Theme (MIT, https://github.com/PKief/vscode-material-icon-theme) SVGs into
 * public/icons/.
 *
 * Usage: node scripts/build-file-icons.mjs <path-to-extracted-vsix-extension>
 *
 * The vsix can be fetched with:
 *   gh release download -R PKief/vscode-material-icon-theme --pattern '*.vsix'
 *   unzip material-icon-theme-*.vsix -d /tmp/mit
 * then pass /tmp/mit/extension.
 */

import { cpSync, mkdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT_ICONS = join(ROOT, "public", "icons");
const OUT_TS = join(ROOT, "src", "lib", "fileIcons.ts");

const [extDir] = process.argv.slice(2);
if (!extDir || !existsSync(join(extDir, "dist", "material-icons.json"))) {
  console.error(
    "usage: node scripts/build-file-icons.mjs <extracted-vsix-extension-dir>",
  );
  process.exit(1);
}

const mapping = JSON.parse(
  readFileSync(join(extDir, "dist", "material-icons.json"), "utf8"),
);
const svgRoot = join(extDir, "icons");

function defToSvg(defKey) {
  const def = mapping.iconDefinitions[defKey];
  if (!def) return null;
  const match = /\.\.\/(icons\/[^"]+\.svg)/.exec(def.iconPath);
  return match ? match[1] : null;
}

function collect(key, names, out, missing) {
  const table = Object.fromEntries(
    Object.entries(mapping[key] ?? {}).map(([k, v]) => [k.toLowerCase(), v]),
  );
  for (const name of names) {
    const defKey = table[name.toLowerCase()];
    if (!defKey) {
      missing.push(`${key}: ${name}`);
      continue;
    }
    out[name] = defToSvg(defKey);
  }
}

const EXTENSIONS = [
  "ts", "tsx", "mts", "cts", "js", "jsx", "mjs", "cjs", "json", "jsonc",
  "md", "mdx", "txt", "log", "csv", "yaml", "yml", "toml", "ini", "conf",
  "xml", "html", "htm", "css", "scss", "sass", "less", "svg", "png", "jpg",
  "jpeg", "gif", "webp", "ico", "avif", "py", "pyw", "ipynb", "go", "rs",
  "java", "jar", "c", "h", "cpp", "hpp", "cc", "cxx", "cs", "rb", "php",
  "sh", "bash", "zsh", "fish", "ps1", "bat", "cmd", "swift", "kt", "kts",
  "dart", "lua", "pl", "r", "scala", "zig", "vue", "svelte", "astro",
  "sql", "db", "sqlite", "lock", "env", "npmrc", "dockerignore",
  "dockerfile", "makefile", "gradle", "cmake", "tf", "hcl", "nix", "tex",
  "bib", "pdf", "doc", "docx", "xls", "xlsx", "ppt", "pptx", "zip", "tar",
  "gz", "7z", "rar", "bin", "exe", "deb", "rpm", "iso", "mp3", "wav",
  "flac", "ogg", "mp4", "mkv", "webm", "mov", "avi", "woff", "woff2",
  "ttf", "otf", "eot", "map", "d.ts", "d.mts", "psd", "ai", "pem",
  "styl", "sqlite3",
];

const FILE_NAMES = [
  "package.json", "package-lock.json", "pnpm-lock.yaml", "yarn.lock",
  "tsconfig.json", "tsconfig.app.json", "tsconfig.node.json", "vite.config.ts",
  "vite.config.js", "vitest.config.ts", "jest.config.ts", "jest.config.js",
  "eslint.config.js", "eslint.config.mjs", ".eslintrc.json", ".eslintrc.js",
  ".prettierrc", ".prettierrc.json", ".prettierrc.js", ".prettierrc.yaml",
  "prettier.config.js", "prettier.config.mjs", ".prettierignore",
  ".gitignore", ".gitattributes", ".gitmodules", ".editorconfig",
  ".npmrc", ".yarnrc", ".yarnrc.yml", ".nvmrc", ".node-version",
  "dockerfile", "dockerfile.prod", "docker-compose.yml", "compose.yml",
  "docker-compose.yaml", "compose.yaml", "makefile", "readme", "readme.md",
  "readme.rst", "license", "license.md", "license.txt", "changelog",
  "changelog.md", "contributing", "code_of_conduct", "gemfile", "pipfile",
  "pyproject.toml", "requirements.txt", "procfile", "cmakelists.txt",
  "gradlew", "gradlew.bat", "gradle.properties", "todo.md", "renovate.json",
  "vercel.json", "netlify.toml", "flakes.nix", "flake.lock",
];

// The theme has no icon for these; map to visually sensible ones.
const FILE_NAME_ALIASES = { "AGENTS.md": "readme", ".dockerignore": "docker", ".env": "tune" };

const FOLDERS = [
  "src", "lib", "test", "tests", "spec", "__tests__", "docs", "doc",
  "node_modules", "dist", "build", "out", "public", "static", "assets",
  "components", "pages", "hooks", "utils", "api", "config", "scripts",
  ".github", ".git", ".vscode", ".idea", ".husky", ".cache", ".next",
  ".nuxt", "bin", "coverage", "data", "db", "migrations", "seeds",
  "controllers", "models", "views", "routes", "middleware", "store",
  "stores", "app", "core", "shared", "ui", "types", "typings", "i18n",
  "locale", "locales", "images", "img", "fonts", "audio", "video", "svg",
  "icons", "css", "scss", "sass", "less", "styles", "themes", "theme",
  "vendor", "third-party", "packages", "examples", "sample", "samples",
  "template", "templates", "tools", "admin", "backup", "backups", "logs",
  "tmp", "temp", "uploads", "downloads", "media", "certs", "keys",
  "private", "server", "client", "dashboard", "env", "envs", "settings",
];

const fileExtIcons = {};
const fileNameIcons = {};
const folderIcons = {};
const folderOpenIcons = {};
const missing = [];

collect("fileExtensions", EXTENSIONS, fileExtIcons, missing);
collect("fileNames", FILE_NAMES, fileNameIcons, missing);
for (const [name, defKey] of Object.entries(FILE_NAME_ALIASES)) {
  const svg = defToSvg(defKey);
  if (!svg) {
    missing.push(`alias: ${name}`);
    continue;
  }
  fileNameIcons[name] = svg;
}
collect("folderNames", FOLDERS, folderIcons, missing);
collect("folderNamesExpanded", FOLDERS, folderOpenIcons, missing);

const defaultFile = defToSvg(mapping.file);
const defaultFolder = defToSvg(mapping.folder);
const defaultFolderOpen = defToSvg(mapping.folderExpanded);

const allSvgs = new Set(
  [defaultFile, defaultFolder, defaultFolderOpen]
    .concat(Object.values(fileExtIcons))
    .concat(Object.values(fileNameIcons))
    .concat(Object.values(folderIcons))
    .concat(Object.values(folderOpenIcons)),
);

mkdirSync(OUT_ICONS, { recursive: true });
let copied = 0;
for (const rel of allSvgs) {
  const src = join(svgRoot, rel.replace("icons/", ""));
  const dst = join(OUT_ICONS, rel.replace("icons/", ""));
  cpSync(src, dst);
  copied++;
}

const ts = `/**
 * Generated by scripts/build-file-icons.mjs — do not edit by hand.
 * Icons: Material Icon Theme, MIT, https://github.com/PKief/vscode-material-icon-theme
 * Maps file extensions / file names / folder names to SVGs in /icons (public/icons).
 */

export const FILE_EXT_ICONS: Record<string, string> = ${JSON.stringify(fileExtIcons, null, 2)};

export const FILE_NAME_ICONS: Record<string, string> = ${JSON.stringify(fileNameIcons, null, 2)};

export const FOLDER_ICONS: Record<string, string> = ${JSON.stringify(folderIcons, null, 2)};

export const FOLDER_OPEN_ICONS: Record<string, string> = ${JSON.stringify(folderOpenIcons, null, 2)};

export const DEFAULT_FILE_ICON = ${JSON.stringify(defaultFile)};
export const DEFAULT_FOLDER_ICON = ${JSON.stringify(defaultFolder)};
export const DEFAULT_FOLDER_OPEN_ICON = ${JSON.stringify(defaultFolderOpen)};

export function fileIconPath(name: string): string {
  const ext = name.toLowerCase().split(".").pop() ?? "";
  const mapped = FILE_NAME_ICONS[name.toLowerCase()] ?? FILE_EXT_ICONS[ext] ?? FILE_EXT_ICONS["." + ext];
  return mapped ? "/" + mapped : "/" + DEFAULT_FILE_ICON;
}

export function folderIconPath(name: string, open: boolean): string {
  const mapped = (open ? FOLDER_OPEN_ICONS : FOLDER_ICONS)[name.toLowerCase()];
  return mapped ? "/" + mapped : "/" + (open ? DEFAULT_FOLDER_OPEN_ICON : DEFAULT_FOLDER_ICON);
}
`;

writeFileSync(OUT_TS, ts);
console.log(
  `copied ${copied} svg(s) -> ${OUT_ICONS.replace(ROOT, ".")}\n` +
    `wrote ${OUT_TS.replace(ROOT, ".")}\n` +
    `missing mappings (${missing.length}): ${missing.join(", ")}`,
);
