import { cn } from "my-you-eye";
import type { IconTone } from "../lib/fileType";

const TONES: Record<IconTone, string> = {
  primary: "text-primary",
  success: "text-success",
  warning: "text-warning",
  muted: "text-muted",
};

export function FolderIcon({ open }: { open?: boolean }) {
  return open ? (
    <svg viewBox="0 0 16 16" aria-hidden className="size-4 shrink-0 text-primary">
      <path
        d="M1.5 5a1 1 0 0 1 1-1h3l1.5 2h6.5a1 1 0 0 1 1 1v5.5a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-7.5z"
        fill="currentColor"
      />
      <path d="M1.5 5a1 1 0 0 1 1-1h3l1.5 2h6.5a1 1 0 0 1 1 1v.5h-13z" fill="black" opacity="0.25" />
    </svg>
  ) : (
    <svg viewBox="0 0 16 16" aria-hidden className="size-4 shrink-0 text-primary">
      <path
        d="M1.5 3.5h4l1.5 2h7.5v7a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export function FileIcon({ tone = "muted" }: { tone?: IconTone }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className={cn("size-4 shrink-0", TONES[tone])}>
      <path
        d="M4 1.5h5.5L13 5v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M4 1.5h5.5L13 5v8.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path d="M9 1.5V5h3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}