import { useEffect, useRef, useState } from "react";
import type { FormEvent } from "react";
import { Alert, Badge, Breadcrumbs, CodeBlock, EmptyState, Markdown, ScrollArea, Skeleton } from "my-you-eye";
import type { FileContent } from "../workspace/types";
import { canHighlight, fileKind, languageFor } from "../lib/fileType";

interface FileViewerProps {
  file: { path: string; name: string; data: FileContent } | null;
  loading: boolean;
  error: string | null;
  workspaceName?: string | null;
}

function pathSegments(path: string): string[] {
  return path.split("/").filter(Boolean);
}

/** Tracks edits in the editable code body without re-rendering on each key. */
function useEditableText(path: string, initial: string) {
  const [text, setText] = useState(initial);
  const textRef = useRef(initial);

  useEffect(() => {
    textRef.current = initial;
    setText(initial);
  }, [path, initial]);

  return { text, setText, textRef };
}

function CodeBody({ path, name, text }: { path: string; name: string; text: string }) {
  const language = languageFor(path);
  const { text: currentText, setText, textRef } = useEditableText(path, text);

  // The library renders one <div> per line inside <code>; empty lines are a
  // single space. Rebuild the raw text with newlines between them.
  const syncFromDom = (event: FormEvent<HTMLPreElement>) => {
    const code = event.currentTarget.querySelector("code");
    if (!code) return;
    textRef.current = [...code.children]
      .map((line) => (line.textContent ?? "").replace(/^ $/, ""))
      .join("\n");
  };

  return (
    <div className="flex min-h-full flex-col">
      <CodeBlock
        code={currentText}
        language={language}
        header={name}
        highlight={canHighlight(language)}
        showLineNumbers={language !== undefined}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        onInput={syncFromDom}
        onBlur={() => setText(textRef.current)}
        className="codeview-clean flex-1"
      />
    </div>
  );
}

function View({ file }: { file: NonNullable<FileViewerProps["file"]> }) {
  const kind = fileKind(file.path);

  if (file.data.kind === "image") {
    return (
      <div className="flex h-full items-start justify-center overflow-auto p-6">
        <img
          src={file.data.url}
          alt={file.name}
          className="max-h-full max-w-full rounded-ui-md object-contain shadow-elevated"
        />
      </div>
    );
  }

  if (file.data.kind === "binary") {
    return (
      <EmptyState
        title="Binary or unreadable file"
        description={
          file.data.reason ?? `${file.name} does not appear to be a text file.`
        }
      />
    );
  }

  if (kind === "markdown") {
    return (
      <div className="mx-auto max-w-3xl select-text p-6">
        <Markdown content={file.data.text} />
      </div>
    );
  }

  return <CodeBody path={file.path} name={file.name} text={file.data.text} />;
}

export function FileViewer({ file, loading, error, workspaceName }: FileViewerProps) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    if (!loading) {
      setShowSkeleton(false);
      return;
    }
    const timer = setTimeout(() => setShowSkeleton(true), 120);
    return () => clearTimeout(timer);
  }, [loading]);

  if (error) {
    return (
      <div className="flex h-full items-start justify-center p-6">
        <Alert variant="danger" title="Could not open file">
          {error}
        </Alert>
      </div>
    );
  }

  if (loading && !showSkeleton) {
    return null;
  }

  if (showSkeleton) {
    return (
      <div className="space-y-2 p-6">
        <Skeleton shape="text" />
        <Skeleton shape="text" />
        <Skeleton shape="rect" className="h-64" />
      </div>
    );
  }

  if (!file) {
    return (
      <EmptyState
        title="No file open"
        description="Select a file from the tree on the left to preview it."
      />
    );
  }

  const language = languageFor(file.path);
  const kind = fileKind(file.path);
  const label =
    kind === "markdown"
      ? "Markdown"
      : kind === "image"
        ? "Image"
        : language
          ? language
          : "Text";

  return (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex shrink-0 items-center gap-2 border-b border-border px-4 py-2">
        <Breadcrumbs
          separator="›"
          items={[workspaceName, ...pathSegments(file.path)]
            .filter((label): label is string => Boolean(label))
            .map((label) => ({ label }))}
        />
        <span className="flex-1" />
        <Badge variant="neutral">{label}</Badge>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <View file={file} />
      </ScrollArea>
    </div>
  );
}
