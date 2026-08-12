// Sync the my-you-eye dist JS into vendor/ so Tailwind v4 can scan it.
//
// Why: the oxide scanner applies .gitignore rules to @source paths, so a
// path inside node_modules (and crossing the `dist` folder) is never
// scanned, even with an explicit @source directive (tailwindlabs
// tailwindcss#16669, #18418). A copy outside node_modules is scanned
// normally. Run automatically on `npm install` (postinstall).

import { mkdir, copyFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const src = path.join(root, "node_modules/my-you-eye/dist/index.js");
const destDir = path.join(root, "vendor/my-you-eye");
const dest = path.join(destDir, "index.js");

try {
  await mkdir(destDir, { recursive: true });
  await copyFile(src, dest);
  console.log(`[sync-my-you-eye] copied ${src} -> ${dest}`);
} catch (err) {
  console.error(`[sync-my-you-eye] failed: ${err.message}`);
  process.exitCode = 1;
}
