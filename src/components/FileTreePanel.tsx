import { Button, EmptyState, ScrollArea, Spinner, Toolbar } from "my-you-eye";
import { FileTree, type FileTreeNode } from "./FileTree";

interface FileTreePanelProps {
  workspaceName: string | null;
  loading: boolean;
  error: string | null;
  tree: FileTreeNode[];
  expandedKeys: Set<string>;
  selectedId: string | null;
  onOpenFolder: () => void;
  onToggle: (id: string) => void;
  onSelect: (id: string) => void;
}

export function FolderIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path
        d="M1.5 3.5h4l1.5 2h7.5v7a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FileIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden>
      <path
        d="M4 1.5h5.5L13 5v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.8"
      />
      <path d="M9 1.5V5h3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function FileTreePanel({
  workspaceName,
  loading,
  error,
  tree,
  expandedKeys,
  selectedId,
  onOpenFolder,
  onToggle,
  onSelect,
}: FileTreePanelProps) {
  return (
    <div className="flex h-full min-h-0 flex-col">
      <Toolbar className="shrink-0">
        <span className="min-w-0 flex-1 truncate px-1 text-sm font-medium">
          {workspaceName ?? "vsnote"}
        </span>
        <Button variant="secondary" size="sm" onClick={onOpenFolder}>
          Open folder
        </Button>
      </Toolbar>
      <ScrollArea className="min-h-0 flex-1 p-1.5">
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <Spinner size="md" />
          </div>
        ) : error ? (
          <EmptyState title="Could not read workspace" description={error} />
        ) : workspaceName === null ? (
          <EmptyState
            title="No workspace"
            description="Pick a folder to start browsing files."
            action={
              <Button variant="primary" size="sm" onClick={onOpenFolder}>
                Open folder
              </Button>
            }
          />
        ) : (
          <FileTree
            nodes={tree}
            expandedKeys={expandedKeys}
            selectedId={selectedId}
            onToggle={onToggle}
            onSelect={onSelect}
          />
        )}
      </ScrollArea>
    </div>
  );
}