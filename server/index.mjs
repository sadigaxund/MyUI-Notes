import express from "express";
import { promises as fs } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT || 3000);
const ROOT = path.resolve(process.env.WORKSPACE_DIR || process.cwd());
const TEXT_LIMIT = 1.5 * 1024 * 1024;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.resolve(__dirname, "../dist");

const app = express();

function resolvePath(relative = "") {
  const abs = path.resolve(ROOT, relative);
  if (abs !== ROOT && !abs.startsWith(ROOT + path.sep)) {
    const err = new Error("Path escapes the workspace");
    err.status = 403;
    throw err;
  }
  return abs;
}

function fileType(abs) {
  const base = path.basename(abs);
  const dot = base.lastIndexOf(".");
  return dot >= 0 ? base.slice(dot + 1).toLowerCase() : "";
}

app.get("/api/workspace", (req, res) => {
  res.json({ name: path.basename(ROOT) });
});

app.get("/api/list", async (req, res) => {
  try {
    const relative = String(req.query.path ?? "");
    const abs = resolvePath(relative);
    const dirents = await fs.readdir(abs, { withFileTypes: true });
    const entries = dirents
      .map((d) => ({
        name: d.name,
        path: relative === "" ? d.name : `${relative}/${d.name}`,
        kind: d.isDirectory() ? "directory" : "file",
      }))
      .sort((a, b) => {
        if (a.kind !== b.kind) return a.kind === "directory" ? -1 : 1;
        return a.name.localeCompare(b.name);
      });
    res.json({ entries });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

app.get("/api/read", async (req, res) => {
  try {
    const abs = resolvePath(String(req.query.path ?? ""));
    const stat = await fs.stat(abs);
    if (!stat.isFile()) {
      return res.status(400).json({ error: "Not a file" });
    }
    if (stat.size > TEXT_LIMIT) {
      return res.json({
        kind: "binary",
        reason: `File is ${stat.size.toLocaleString()} bytes; text preview is limited to ${TEXT_LIMIT.toLocaleString()} bytes.`,
      });
    }
    const buffer = new Uint8Array(await fs.readFile(abs));
    const head = buffer.subarray(0, Math.min(buffer.length, 4096));
    if (head.includes(0)) {
      return res.json({ kind: "binary" });
    }
    res.json({ kind: "text", text: new TextDecoder().decode(buffer) });
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

app.get("/api/file", async (req, res) => {
  try {
    const abs = resolvePath(String(req.query.path ?? ""));
    res.sendFile(abs);
  } catch (err) {
    res.status(err.status || 500).json({ error: err.message });
  }
});

// Serve the built app when present (production / Docker model). The SPA
// fallback must not swallow /api routes.
app.use(express.static(DIST_DIR));
app.use((req, res, next) => {
  if (req.method !== "GET" || req.path.startsWith("/api")) {
    return next();
  }
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`vsnote server on http://0.0.0.0:${PORT}, workspace: ${ROOT}`);
});
