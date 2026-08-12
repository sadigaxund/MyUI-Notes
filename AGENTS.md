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

## Using my-you-eye

```tsx
import { Button, TreeView } from "my-you-eye";
import "my-you-eye/styles.css";
```

- Requires Tailwind v4 (`@tailwindcss/vite`). The package's `styles.css`
  contains `@import "tailwindcss"`; the utility classes used inside the package
  must be scanned — keep the `@source "../node_modules/my-you-eye/dist";`
  directive in `src/styles/global.css`.
- Themes are CSS token overrides: `.dark` class on `<html>` for dark mode,
  `data-theme="..."` (`neon`, `contrast`, `glass`, `comic`, ...) for other
  themes. Token overrides belong in CSS, never in component code.
- The package's font files are not shipped; `/fonts/*.woff2` requests 404 and
  the browser falls back to system fonts. Do not treat that as an error.
- Component props are typed in `node_modules/my-you-eye/dist/index.d.ts`.

## Architecture rules

- All file access goes through the `Workspace` interface in `src/workspace/`
  (currently implemented by the browser File System Access API). Components
  must never touch the File System API directly — this keeps the door open for
  a Node backend implementation later (Docker/container model).
- Keep feature components in `src/components/`, built from `my-you-eye`
  primitives. Do not introduce UI dependencies beyond React + `my-you-eye`.

## Tooling

- Node is pinned at 24.18.0 (`.node-version`).
- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build`
