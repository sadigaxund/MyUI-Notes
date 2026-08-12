import type { FileContent, Workspace, WorkspaceEntry } from "./types";
import { fileKind } from "../lib/fileType";

async function api<T>(url: string): Promise<T> {
  const res = await fetch(url);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error ?? `Request failed (${res.status})`);
  }
  return data;
}

/**
 * Workspace backed by the small Node server (server/index.mjs). Used whenever
 * the app is served by the backend (production/Docker) or proxied in dev —
 * works in every browser, no File System Access API needed.
 */
export class HttpWorkspace implements Workspace {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  async list(path: string): Promise<WorkspaceEntry[]> {
    const data = await api<{ entries: WorkspaceEntry[] }>(
      `/api/list?path=${encodeURIComponent(path)}`
    );
    return data.entries;
  }

  async read(path: string): Promise<FileContent> {
    const data = await api<FileContent>(`/api/read?path=${encodeURIComponent(path)}`);
    if (data.kind === "text") return data;
    if (fileKind(path) === "image") {
      return { kind: "image", url: `/api/file?path=${encodeURIComponent(path)}` };
    }
    return data;
  }
}

/** Probes for a reachable backend; returns null when there is none. */
export async function probeBackendWorkspace(): Promise<Workspace | null> {
  try {
    const data = await api<{ name: string }>("/api/workspace");
    return new HttpWorkspace(data.name);
  } catch {
    return null;
  }
}