export type FileKind = "markdown" | "code" | "image" | "plain" | "binary";
export type IconTone = "primary" | "success" | "warning" | "muted";

const MARKDOWN_EXTENSIONS = new Set(["md", "mdx", "markdown"]);

const IMAGE_EXTENSIONS = new Set([
  "avif",
  "bmp",
  "gif",
  "ico",
  "jpeg",
  "jpg",
  "png",
  "svg",
  "webp",
]);

const CONFIG_EXTENSIONS = new Set([
  "env",
  "gitignore",
  "ini",
  "json",
  "jsonc",
  "lock",
  "toml",
  "yaml",
  "yml",
]);

/** Extensions that my-you-eye's CodeBlock can syntax-highlight. */
const HIGHLIGHTABLE = new Set(["bash", "js", "json", "ts", "tsx"]);

const CODE_LANGUAGES: Record<string, string> = {
  c: "c",
  cc: "cpp",
  "c++": "cpp",
  cpp: "cpp",
  css: "css",
  csv: "csv",
  go: "go",
  h: "c",
  hpp: "cpp",
  htm: "html",
  html: "html",
  ini: "ini",
  java: "java",
  js: "js",
  json: "json",
  jsonc: "json",
  jsx: "jsx",
  lock: "json",
  log: "text",
  lua: "lua",
  makefile: "makefile",
  php: "php",
  py: "python",
  python: "python",
  rb: "ruby",
  rs: "rust",
  scss: "scss",
  sh: "bash",
  sql: "sql",
  svg: "xml",
  toml: "toml",
  ts: "ts",
  tsx: "tsx",
  txt: "text",
  vim: "vim",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
  zig: "zig",
};

export function fileKind(path: string): FileKind {
  const ext = extensionOf(path);
  if (MARKDOWN_EXTENSIONS.has(ext)) return "markdown";
  if (IMAGE_EXTENSIONS.has(ext)) return "image";
  if (ext in CODE_LANGUAGES) return "code";
  return ext === "" ? "plain" : "plain";
}

export function languageFor(path: string): string | undefined {
  return CODE_LANGUAGES[extensionOf(path)];
}

export function canHighlight(language: string | undefined): boolean {
  return language !== undefined && HIGHLIGHTABLE.has(language);
}

export function extensionOf(path: string): string {
  const base = path.split("/").pop() ?? "";
  const dot = base.lastIndexOf(".");
  return dot >= 0 ? base.slice(dot + 1).toLowerCase() : "";
}

/** Theme-aware accent for the file icon in the tree. */
export function iconTone(path: string): IconTone {
  const ext = extensionOf(path);
  if (MARKDOWN_EXTENSIONS.has(ext)) return "primary";
  if (IMAGE_EXTENSIONS.has(ext)) return "success";
  if (CONFIG_EXTENSIONS.has(ext)) return "warning";
  return "muted";
}