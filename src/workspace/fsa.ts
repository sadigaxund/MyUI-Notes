import type { FileContent, Workspace, WorkspaceEntry } from "./types";

/** Cap on the size of files read as text; larger files are reported as binary. */
export const TEXT_READ_LIMIT = 1.5 * 1024 * 1024;

const IMAGE_EXTENSIONS = new Set([
  "avif",
  "bmp",
  "gif",
  "ico",
  "jpeg",
  "jpg",
  "png",
  "svg",
  "webp",
]);

function extensionOf(path: string): string {
  const base = path.split("/").pop() ?? "";
  const dot = base.lastIndexOf(".");
  return dot >= 0 ? base.slice(dot + 1).toLowerCase() : "";
}

/**
 * Opens a workspace via the browser File System Access API. Returns null when
 * the user cancels the picker. Throws when the API is unavailable — either the
 * browser lacks it or the page is not in a secure context (the API only works
 * over HTTPS or http://localhost).
 */
export async function openFSAWorkspace(): Promise<Workspace | null> {
  const pick = window.showDirectoryPicker;
  if (!pick) {
    if (window.isSecureContext) {
      throw new Error(
        "This browser does not support the File System Access API — use Chrome or Edge."
      );
    }
    throw new Error(
      "The File System Access API requires a secure context. Open the app via http://localhost or an HTTPS URL (a bare host IP over http will not work)."
    );
  }
  const handle = await pick();
  return new FSAWorkspace(handle);
}

class FSAWorkspace implements Workspace {
  readonly name: string;

  constructor(private readonly root: FileSystemDirectoryHandle) {
    this.name = root.name;
  }

  async list(path: string): Promise<WorkspaceEntry[]> {
    const dir = await this.resolveDirectory(path);
    const entries: WorkspaceEntry[] = [];
    for await (const [name, handle] of dir.entries()) {
      const entryPath = path === "" ? name : `${path}/${name}`;
      entries.push({
        name,
        path: entryPath,
        kind: handle.kind === "directory" ? "directory" : "file",
      });
    }
    entries.sort((a, b) => {
      if (a.kind !== b.kind) return a.kind === "directory" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    return entries;
  }

  async read(path: string): Promise<FileContent> {
    const file = await this.resolveFile(path);
    const fileHandle = await file.getFile();

    if (IMAGE_EXTENSIONS.has(extensionOf(path))) {
      return { kind: "image", url: URL.createObjectURL(fileHandle) };
    }

    if (fileHandle.size > TEXT_READ_LIMIT) {
      return {
        kind: "binary",
        reason: `File is ${fileHandle.size.toLocaleString()} bytes; text preview is limited to ${TEXT_READ_LIMIT.toLocaleString()} bytes.`,
      };
    }

    const buffer = new Uint8Array(await fileHandle.arrayBuffer());
    const head = buffer.subarray(0, Math.min(buffer.length, 4096));
    if (head.includes(0)) {
      return { kind: "binary" };
    }
    return { kind: "text", text: new TextDecoder().decode(buffer) };
  }

  private async resolveDirectory(path: string): Promise<FileSystemDirectoryHandle> {
    return this.navigate(path);
  }

  private async resolveFile(path: string): Promise<FileSystemFileHandle> {
    const segments = path.split("/").filter(Boolean);
    const name = segments.pop();
    if (!name) {
      throw new Error(`Invalid file path: ${path}`);
    }
    const parent = await this.resolveDirectory(segments.join("/"));
    return parent.getFileHandle(name);
  }

  private async navigate(path: string): Promise<FileSystemDirectoryHandle> {
    const segments = path.split("/").filter(Boolean);
    let dir: FileSystemDirectoryHandle = this.root;
    for (const segment of segments) {
      dir = await dir.getDirectoryHandle(segment);
    }
    return dir;
  }
}