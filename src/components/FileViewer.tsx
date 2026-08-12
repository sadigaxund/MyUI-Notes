import { useEffect, useMemo, useRef, useState } from "react";
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

interface MarkdownBlock {
  id: string;
  type: "code" | "table" | "list" | "blockquote" | "paragraph" | "empty";
  startLine: number;
  endLine: number;
}

function parseBlocks(lines: string[]): MarkdownBlock[] {
  const blocks: MarkdownBlock[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (trimmed === "") {
      const start = i;
      while (i < lines.length && lines[i].trim() === "") {
        i++;
      }
      blocks.push({
        id: `empty-${start}`,
        type: "empty",
        startLine: start,
        endLine: i - 1,
      });
      continue;
    }

    if (trimmed.startsWith("```")) {
      const start = i;
      i++;
      while (i < lines.length && !lines[i].trim().startsWith("```")) {
        i++;
      }
      if (i < lines.length) {
        i++;
      }
      blocks.push({
        id: `code-${start}`,
        type: "code",
        startLine: start,
        endLine: i - 1,
      });
      continue;
    }

    if (trimmed.startsWith(">")) {
      const start = i;
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        i++;
      }
      blocks.push({
        id: `quote-${start}`,
        type: "blockquote",
        startLine: start,
        endLine: i - 1,
      });
      continue;
    }

    if (trimmed.startsWith("|")) {
      const start = i;
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        i++;
      }
      blocks.push({
        id: `table-${start}`,
        type: "table",
        startLine: start,
        endLine: i - 1,
      });
      continue;
    }

    const isListLine = (l: string) => {
      const t = l.trim();
      return t.startsWith("- ") || t.startsWith("* ") || t.startsWith("+ ") || /^\d+\.\s/.test(t);
    };

    if (isListLine(line)) {
      const start = i;
      while (i < lines.length && (isListLine(lines[i]) || (lines[i].trim() !== "" && lines[i].startsWith("  ")))) {
        i++;
      }
      blocks.push({
        id: `list-${start}`,
        type: "list",
        startLine: start,
        endLine: i - 1,
      });
      continue;
    }

    const start = i;
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].trim().startsWith("```") &&
      !lines[i].trim().startsWith(">") &&
      !lines[i].trim().startsWith("|") &&
      !isListLine(lines[i])
    ) {
      i++;
    }
    blocks.push({
      id: `para-${start}`,
      type: "paragraph",
      startLine: start,
      endLine: i - 1,
    });
  }
  return blocks;
}

function LiveMarkdownEditor({
  text,
  onChange,
}: {
  text: string;
  onChange: (val: string) => void;
}) {
  const lines = useMemo(() => text.split("\n"), [text]);
  const blocks = useMemo(() => parseBlocks(lines), [lines]);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const [focusPosition, setFocusPosition] = useState<{ blockId: string; cursor: "start" | "end" | number } | null>(null);

  return (
    <div
      className="space-y-2 pb-32 min-h-[400px] cursor-text"
      onClick={(e) => {
        if (e.target === e.currentTarget && blocks.length > 0) {
          const lastBlock = blocks[blocks.length - 1];
          setActiveBlockId(lastBlock.id);
        }
      }}
    >
      {blocks.map((block) => {
        const isActive = activeBlockId === block.id;
        const blockText = lines.slice(block.startLine, block.endLine + 1).join("\n");

        if (isActive) {
          return (
            <div key={block.id} className="my-2">
              <textarea
                defaultValue={blockText}
                autoFocus
                ref={(el) => {
                  if (el) {
                    el.style.height = "auto";
                    el.style.height = `${el.scrollHeight}px`;
                    if (focusPosition && focusPosition.blockId === block.id) {
                      if (focusPosition.cursor === "start") {
                        el.setSelectionRange(0, 0);
                      } else if (focusPosition.cursor === "end") {
                        const len = el.value.length;
                        el.setSelectionRange(len, len);
                      } else if (typeof focusPosition.cursor === "number") {
                        el.setSelectionRange(focusPosition.cursor, focusPosition.cursor);
                      }
                      setFocusPosition(null);
                    }
                  }
                }}
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = "auto";
                  el.style.height = `${el.scrollHeight}px`;
                }}
                onChange={(e) => {
                  const val = e.target.value;
                  const newLines = val.split("\n");
                  const updated = [
                    ...lines.slice(0, block.startLine),
                    ...newLines,
                    ...lines.slice(block.endLine + 1),
                  ];
                  onChange(updated.join("\n"));
                }}
                onBlur={() => {
                  setActiveBlockId(null);
                }}
                onKeyDown={(e) => {
                  const el = e.currentTarget;
                  const start = el.selectionStart;
                  const end = el.selectionEnd;
                  const val = el.value;

                  if (e.key === "ArrowUp" && start === 0 && end === 0) {
                    e.preventDefault();
                    const idx = blocks.findIndex((b) => b.id === block.id);
                    if (idx > 0) {
                      const prevBlock = blocks[idx - 1];
                      setActiveBlockId(prevBlock.id);
                      setFocusPosition({ blockId: prevBlock.id, cursor: "end" });
                    }
                  } else if (e.key === "ArrowDown" && start === val.length && end === val.length) {
                    e.preventDefault();
                    const idx = blocks.findIndex((b) => b.id === block.id);
                    if (idx < blocks.length - 1) {
                      const nextBlock = blocks[idx + 1];
                      setActiveBlockId(nextBlock.id);
                      setFocusPosition({ blockId: nextBlock.id, cursor: "start" });
                    }
                  } else if (e.key === "Backspace" && start === 0 && end === 0) {
                    e.preventDefault();
                    const idx = blocks.findIndex((b) => b.id === block.id);
                    if (idx > 0) {
                      const prevBlock = blocks[idx - 1];
                      const prevText = lines.slice(prevBlock.startLine, prevBlock.endLine + 1).join("\n");
                      const mergedText = prevText + (prevText.endsWith("\n") || val.startsWith("\n") ? "" : "\n") + val;

                      const updated = [
                        ...lines.slice(0, prevBlock.startLine),
                        ...mergedText.split("\n"),
                        ...lines.slice(block.endLine + 1),
                      ];
                      onChange(updated.join("\n"));
                      setActiveBlockId(prevBlock.id);
                      setFocusPosition({ blockId: prevBlock.id, cursor: prevText.length });
                    }
                  } else if (e.key === "Enter" && !e.shiftKey && block.type !== "code") {
                    e.preventDefault();
                    const leftText = val.slice(0, start);
                    const rightText = val.slice(start);

                    const leftLines = leftText.split("\n");
                    const rightLines = rightText.split("\n");

                    const updated = [
                      ...lines.slice(0, block.startLine),
                      ...leftLines,
                      ...rightLines,
                      ...lines.slice(block.endLine + 1),
                    ];
                    onChange(updated.join("\n"));

                    setTimeout(() => {
                      const newBlocks = parseBlocks(updated);
                      const idx = blocks.findIndex((b) => b.id === block.id);
                      const nextBlock = newBlocks[idx + 1];
                      if (nextBlock) {
                        setActiveBlockId(nextBlock.id);
                        setFocusPosition({ blockId: nextBlock.id, cursor: "start" });
                      }
                    }, 0);
                  }
                }}
                className="w-full font-mono text-sm bg-transparent border-none outline-none resize-none overflow-hidden p-0 focus:ring-0"
              />
            </div>
          );
        }

        return (
          <div
            key={block.id}
            onClick={() => setActiveBlockId(block.id)}
            className="cursor-text my-2"
          >
            {block.type === "empty" ? (
              <div className="h-4 select-none" />
            ) : (
              <Markdown content={blockText} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function View({
  file,
  viewMode,
  markdownText,
  setMarkdownText,
}: {
  file: NonNullable<FileViewerProps["file"]>;
  viewMode: "read" | "edit";
  markdownText: string;
  setMarkdownText: (val: string) => void;
}) {
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
    if (viewMode === "read") {
      return (
        <div className="markdown-body mx-auto max-w-3xl select-text p-6">
          <Markdown content={markdownText} />
        </div>
      );
    } else {
      return (
        <div className="mx-auto max-w-3xl p-6">
          <LiveMarkdownEditor text={markdownText} onChange={setMarkdownText} />
        </div>
      );
    }
  }

  return <CodeBody path={file.path} name={file.name} text={file.data.kind === "text" ? file.data.text : ""} />;
}

export function FileViewer({ file, loading, error, workspaceName }: FileViewerProps) {
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [viewMode, setViewMode] = useState<"read" | "edit">("read");
  const [markdownText, setMarkdownText] = useState("");

  useEffect(() => {
    if (!loading) {
      setShowSkeleton(false);
      return;
    }
    const timer = setTimeout(() => setShowSkeleton(true), 120);
    return () => clearTimeout(timer);
  }, [loading]);

  const initialText = file?.data.kind === "text" ? file.data.text : "";

  useEffect(() => {
    setViewMode("read");
    setMarkdownText(initialText);
  }, [file?.path, initialText]);

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
  const isMarkdown = kind === "markdown";

  const label =
    isMarkdown
      ? viewMode === "read"
        ? "Read Mode"
        : "Edit Mode"
      : kind === "image"
        ? "Image"
        : language
          ? language
          : "Text";

  const badgeVariant =
    isMarkdown
      ? viewMode === "read"
        ? "neutral"
        : "primary"
      : "neutral";

  const handleBadgeClick = () => {
    if (isMarkdown) {
      setViewMode((prev) => (prev === "read" ? "edit" : "read"));
    }
  };

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
        <Badge
          variant={badgeVariant}
          className={
            isMarkdown
              ? "cursor-pointer hover:opacity-90 active:scale-95 transition-all select-none"
              : ""
          }
          onClick={handleBadgeClick}
        >
          {label}
        </Badge>
      </div>
      <ScrollArea className="min-h-0 flex-1">
        <View
          file={file}
          viewMode={viewMode}
          markdownText={markdownText}
          setMarkdownText={setMarkdownText}
        />
      </ScrollArea>
    </div>
  );
}
