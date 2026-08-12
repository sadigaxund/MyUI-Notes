import { useEffect, useRef, useState } from "react";
import { FileTreePanel } from "./components/FileTreePanel";
import type { FileTreeNode } from "./components/FileTree";
import { TabBar } from "./components/TabBar";
import { FileViewer } from "./components/FileViewer";
import { openFSAWorkspace } from "./workspace/fsa";
import { probeBackendWorkspace } from "./workspace/http";
import type { Workspace, WorkspaceEntry } from "./workspace/types";
import type { FileContent } from "./workspace/types";

function entriesToNodes(entries: WorkspaceEntry[]): FileTreeNode[] {
  return entries.map((entry) => ({
    id: entry.path,
    label: entry.name,
    kind: entry.kind,
    children: entry.kind === "directory" ? [] : undefined,
  }));
}

function withChildren(nodes: FileTreeNode[], path: string, children: FileTreeNode[]): FileTreeNode[] {
  return nodes.map((node) => {
    if (node.id === path) {
      return { ...node, children, loaded: true };
    }
    if (node.children && node.children.length > 0) {
      return { ...node, children: withChildren(node.children, path, children) };
    }
    return node;
  });
}

function findNode(nodes: FileTreeNode[], path: string): FileTreeNode | null {
  for (const node of nodes) {
    if (node.id === path) return node;
    if (node.children) {
      const found = findNode(node.children, path);
      if (found) return found;
    }
  }
  return null;
}

export default function App() {
  const [workspaceName, setWorkspaceName] = useState<string | null>(null);
  const [tree, setTree] = useState<FileTreeNode[]>([]);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const [tabs, setTabs] = useState<{ path: string; name: string; data: FileContent }[]>([]);
  const [activePath, setActivePath] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [panelError, setPanelError] = useState<string | null>(null);

  const workspaceRef = useRef<Workspace | null>(null);
  const workspaceEpoch = useRef(0);
  const loadedDirs = useRef(new Set<string>());
  const backendProbed = useRef(false);

  const loadWorkspace = async (workspace: Workspace) => {
    workspaceRef.current = workspace;
    loadedDirs.current.clear();
    workspaceEpoch.current += 1;
    setWorkspaceName(workspace.name);
    const entries = await workspace.list("");
    setTree(entriesToNodes(entries));
    setExpanded(new Set());
    setTabs([]);
    setActivePath(null);
  };

  const handleOpenFolder = async () => {
    setLoading(true);
    setPanelError(null);
    setError(null);
    try {
      const workspace = await openFSAWorkspace();
      if (!workspace) {
        return;
      }
      await loadWorkspace(workspace);
    } catch (err) {
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }
      setPanelError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (backendProbed.current) return;
    backendProbed.current = true;
    void (async () => {
      try {
        const workspace = await probeBackendWorkspace();
        if (workspace) {
          await loadWorkspace(workspace);
        }
      } catch {
        // no backend reachable — fall back to the manual folder picker
      }
    })();
  }, []);

  const handleToggle = async (id: string) => {
    if (expanded.has(id)) {
      setExpanded((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      return;
    }
    setExpanded((prev) => new Set(prev).add(id));
    const workspace = workspaceRef.current;
    if (!workspace || loadedDirs.current.has(id)) return;
    loadedDirs.current.add(id);
    try {
      const epoch = workspaceEpoch.current;
      const entries = await workspace.list(id);
      if (epoch !== workspaceEpoch.current) return;
      setTree((prev) => withChildren(prev, id, entriesToNodes(entries)));
    } catch (err) {
      setPanelError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleSelect = async (id: string) => {
    setActivePath(id);
    const node = findNode(tree, id);
    if (!node || node.kind === "directory") return;
    if (tabs.some((tab) => tab.path === id)) return;
    const workspace = workspaceRef.current;
    if (!workspace) return;
    const epoch = workspaceEpoch.current;
    setLoading(true);
    setError(null);
    try {
      const data = await workspace.read(id);
      if (epoch !== workspaceEpoch.current) return;
      setTabs((prev) => [...prev, { path: id, name: node.label, data }]);
    } catch (err) {
      if (epoch !== workspaceEpoch.current) return;
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      if (epoch === workspaceEpoch.current) setLoading(false);
    }
  };

  const handleCloseTab = (path: string) => {
    setTabs((prev) => {
      const index = prev.findIndex((tab) => tab.path === path);
      if (index === -1) return prev;
      const next = prev.filter((tab) => tab.path !== path);
      if (path === activePath) {
        const neighbor = next[Math.min(index, next.length - 1)];
        setActivePath(neighbor ? neighbor.path : null);
      }
      return next;
    });
  };

  const activeTab = tabs.find((tab) => tab.path === activePath) ?? null;

  return (
    <div className="flex h-screen min-h-0 w-full overflow-hidden bg-bg text-fg">
      <aside className="w-72 shrink-0 border-r border-border">
        <FileTreePanel
          workspaceName={workspaceName}
          loading={loading}
          error={panelError}
          tree={tree}
          expandedKeys={expanded}
          selectedId={activePath}
          onOpenFolder={handleOpenFolder}
          onToggle={handleToggle}
          onSelect={handleSelect}
        />
      </aside>
      <main className="flex min-w-0 flex-1 flex-col">
        <TabBar
          tabs={tabs}
          activePath={activePath}
          onActivate={setActivePath}
          onClose={handleCloseTab}
        />
        <div className="min-h-0 flex-1">
          <FileViewer file={activeTab} loading={loading} error={error} />
        </div>
      </main>
    </div>
  );
}