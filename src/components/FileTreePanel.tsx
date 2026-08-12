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
        {workspaceName === null && (
          <Button variant="secondary" size="sm" onClick={onOpenFolder}>
            Open folder
          </Button>
        )}
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