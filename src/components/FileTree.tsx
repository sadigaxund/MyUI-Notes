import { useCallback, useMemo, useRef } from "react";
import type { ReactNode } from "react";
import { cn } from "my-you-eye";

export interface FileTreeNode {
  /** Workspace-relative path ("" for the workspace root). */
  id: string;
  label: string;
  kind: "directory" | "file";
  icon?: ReactNode;
  /** Empty array for directories whose children have not been loaded yet. */
  children?: FileTreeNode[];
  /** Whether directory children have been fetched from the workspace. */
  loaded?: boolean;
}

interface FileTreeProps {
  nodes: FileTreeNode[];
  expandedKeys: Set<string>;
  selectedId: string | null;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden
      className={cn(
        "size-3.5 shrink-0 text-muted transition-transform",
        expanded && "rotate-90"
      )}
    >
      <path
        d="M6 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface RowProps {
  node: FileTreeNode;
  depth: number;
  expanded: boolean;
  selected: boolean;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}

function Row({ node, depth, expanded, selected, onToggle, onSelect }: RowProps) {
  const isDirectory = node.kind === "directory";
  const handleClick = () => {
    if (isDirectory) onToggle(node.id);
    onSelect(node.id);
  };
  return (
    <div
      role="treeitem"
      aria-expanded={isDirectory ? expanded : undefined}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      onClick={handleClick}
      className={cn(
        "group flex min-w-0 cursor-pointer items-stretch rounded-ui-sm outline-none",
        "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
        "hover:bg-surface-hover",
        selected && "bg-surface-active",
        "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-ring focus-visible:ring-inset"
      )}
    >
      <span
        className="flex shrink-0 items-center justify-center"
        style={{ width: 12 + depth * 16 }}
      >
        {isDirectory ? (
          <ChevronIcon expanded={expanded} />
        ) : null}
      </span>
      {node.icon ? (
        <span className="mr-1.5 flex size-4 shrink-0 items-center justify-center text-muted">
          {node.icon}
        </span>
      ) : null}
      <span
        className={cn(
          "min-w-0 flex-1 truncate py-1 pr-2 text-sm leading-normal",
          node.kind === "directory" && "font-medium"
        )}
      >
        {node.label}
      </span>
    </div>
  );
}

/**
 * Custom file tree (user-approved deviation): my-you-eye's TreeView only
 * reports expansion toggles and has no way to select/open a file, so rows
 * are rendered here with click-to-select, styled with the same design tokens.
 */
export function FileTree({
  nodes,
  expandedKeys,
  selectedId,
  onToggle,
  onSelect,
}: FileTreeProps) {
  const listRef = useRef<HTMLUListElement>(null);

  const visible = useMemo(() => {
    const out: FileTreeNode[] = [];
    const walk = (list: FileTreeNode[]) => {
      for (const node of list) {
        out.push(node);
        if (node.kind === "directory" && expandedKeys.has(node.id) && node.children) {
          walk(node.children);
        }
      }
    };
    walk(nodes);
    return out;
  }, [nodes, expandedKeys]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const index = visible.findIndex((n) => n.id === selectedId);
    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();
        const next = visible[Math.min(index + 1, visible.length - 1)];
        if (next) onSelect(next.id);
        break;
      }
      case "ArrowUp": {
        event.preventDefault();
        const next = visible[Math.max(index - 1, 0)];
        if (next) onSelect(next.id);
        break;
      }
      case "ArrowRight": {
        event.preventDefault();
        const node = visible[index];
        if (node && node.kind === "directory" && !expandedKeys.has(node.id)) {
          onToggle(node.id);
        }
        break;
      }
      case "ArrowLeft": {
        event.preventDefault();
        const node = visible[index];
        if (node && node.kind === "directory" && expandedKeys.has(node.id)) {
          onToggle(node.id);
        }
        break;
      }
      case "Enter": {
        event.preventDefault();
        const node = visible[index];
        if (node?.kind === "directory") onToggle(node.id);
        break;
      }
    }
  };

  const renderRows = useCallback(
    (list: FileTreeNode[], depth: number) =>
      list.map((node) => {
        const isDirectory = node.kind === "directory";
        const expanded = isDirectory && expandedKeys.has(node.id);
        return (
          <li key={node.id} role="none">
            <Row
              node={node}
              depth={depth}
              expanded={expanded}
              selected={node.id === selectedId}
              onToggle={onToggle}
              onSelect={onSelect}
            />
            {expanded && node.children ? (
              <ul role="group" className="m-0 list-none p-0">
                {renderRows(node.children, depth + 1)}
              </ul>
            ) : null}
          </li>
        );
      }),
    [expandedKeys, selectedId, onToggle, onSelect]
  );

  return (
    <ul
      ref={listRef}
      role="tree"
      className="m-0 list-none p-0 outline-none"
      onKeyDown={handleKeyDown}
    >
      {renderRows(nodes, 0)}
    </ul>
  );
}