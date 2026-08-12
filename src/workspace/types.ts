export interface WorkspaceEntry {
  name: string;
  /** Workspace-relative path, "" for the root directory. */
  path: string;
  kind: "file" | "directory";
}

export type FileContent =
  | { kind: "text"; text: string }
  | { kind: "image"; url: string }
  | { kind: "binary"; reason?: string };

/**
 * All file access goes through this interface so the UI never touches the
 * File System Access API (or any future backend) directly. The browser
 * implementation lives in fsa.ts; a Node/Docker backend can be added later
 * as a second implementation without changing any component.
 */
export interface Workspace {
  readonly name: string;
  list(path: string): Promise<WorkspaceEntry[]>;
  read(path: string): Promise<FileContent>;
}