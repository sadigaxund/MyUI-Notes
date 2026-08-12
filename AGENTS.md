# AGENTS.md

## Project

vsnote — a web-based file explorer + editor (markdown and code viewing, more
features planned). Built on React 19 + Vite + Tailwind v4, with UI coming from
the `my-you-eye` component library.

## Mandatory rule: reuse my-you-eye

Any UI component that can be imported and reused from the `my-you-eye` npm
package **must** be used. Writing a custom component that duplicates
functionality already provided by `my-you-eye` requires explicit confirmation
from the user.

The package provides 54 components across 9 groups, including:

- `TreeView` (file/data trees, controlled expansion) — use for the file tree
- `Markdown` — use for rendering `.md`/`.mdx` files
- `CodeBlock` (syntax highlight, line numbers, headers) — use for code viewing
- `PageShell`, `Toolbar`, `Breadcrumbs`, `Tabs`, `Drawer`, `Dialog`
- `EmptyState`, `ScrollArea`, `Badge`, `Button`, `Kbd`, `Separator`, `Spinner`
- `FileDrop`, `Input`, `Textarea`, `Select`, `Combobox`, `Switch`, `Checkbox`
- `DataTable`, `DataList`, `StatCard`, `Progress`, `Alert`, `Toast`
- `CommandPalette`, `DropdownMenu`, `Popover`, `Tooltip`, `Skeleton`
- `Canvas`, `Graph`, `GraphNode`, `Port` (node-based canvas editor)

The full, authoritative manifest ships with the package at
`node_modules/my-you-eye/COMPONENTS.md` (component names, variants, and demo
names). Demo/source code is **not** packaged — it lives in the library repo:
https://github.com/sadigaxund/my-you-eye

The my-you-eye skill (`my-you-eye`) is registered in
`.opencode/skills/my-you-eye/` — load it before building any UI so you pick an
existing component instead of hand-rolling one.

## Using my-you-eye

```tsx
import { Button, TreeView } from "my-you-eye";
import "my-you-eye/styles.css";
```

- Requires Tailwind v4 (`@tailwindcss/vite`). The package's `styles.css`
  contains `@import "tailwindcss"`; the utility classes used inside the package
  must be scanned — keep the `@source "../vendor/my-you-eye";` directive in
  `src/styles/global.css`.
  - The scanner applies `.gitignore` rules to `@source` paths, so
    `node_modules/my-you-eye/dist` can never be scanned (tailwindlabs
    tailwindcss#16669/#18418). Instead, `scripts/sync-my-you-eye.mjs`
    (run via `postinstall`) copies the package's dist JS to
    `vendor/my-you-eye/index.js`, which is scanned normally. Rerun
    `npm run postinstall` after bumping the `my-you-eye` version.
- Themes are CSS token overrides: `.dark` class on `<html>` for dark mode,
  `data-theme="..."` (`neon`, `contrast`, `glass`, `comic`, ...) for other
  themes. Token overrides belong in CSS, never in component code.
- The package's font files are not shipped; `/fonts/*.woff2` requests 404 and
  the browser falls back to system fonts. Do not treat that as an error.
- Component props are typed in `node_modules/my-you-eye/dist/index.d.ts`.

## Architecture rules

- All file access goes through the `Workspace` interface in `src/workspace/`.
  There are two implementations:
  - `HttpWorkspace` (`http.ts`) — talks to the small Node backend in
    `server/index.mjs` (`/api/list`, `/api/read`, `/api/file`). Used whenever
    the app is served by the backend (production/Docker model, `npm run start`,
    `WORKSPACE_DIR`/`PORT` env vars) or proxied in dev (`/api` → port 3000).
  - `FSAWorkspace` (`fsa.ts`) — browser File System Access API; only works in
    Chrome/Edge over HTTPS or localhost, and needs a manual folder pick.
  The app probes the backend on load and only falls back to the picker when
  no backend is reachable. Components must never touch fetch/FSA directly —
  they only see the `Workspace` interface.
- Keep feature components in `src/components/`, built from `my-you-eye`
  primitives. Do not introduce UI dependencies beyond React + `my-you-eye`.

## Tooling

- Node is pinned at 24.18.0 (`.node-version`).
- `npm run dev` — Vite dev server (HTTPS, `/api` proxied to the backend)
- `npm run start` — Node backend + built app on one port (PORT, WORKSPACE_DIR)
- `npm run build` — `tsc -b && vite build`
