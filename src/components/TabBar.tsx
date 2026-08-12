import type { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "my-you-eye";
import { fileIconPath } from "../lib/fileIcons";

export interface OpenTab {
  path: string;
  name: string;
}

interface TabBarProps {
  tabs: OpenTab[];
  activePath: string | null;
  onActivate: (path: string) => void;
  onClose: (path: string) => void;
  children: ReactNode;
}

/**
 * Open-file cabinet built on my-you-eye's Tabs, exactly as the library's own
 * showcase composes it: a filing-variant TabsList with the content panel
 * (TabsContent) underneath, so the active tab merges seamlessly into the
 * panel below it. forceMount keeps the panel alive across switches, so the
 * viewer keeps its state (scroll, copy) instead of remounting.
 */
export function TabBar({ tabs, activePath, onActivate, onClose, children }: TabBarProps) {
  return (
    <Tabs
      variant="filing"
      value={activePath ?? ""}
      onValueChange={onActivate}
      className="flex min-h-0 flex-1 flex-col"
    >
      <TabsList className="w-full justify-start">
        {tabs.map((tab) => (
          <TabsTrigger key={tab.path} value={tab.path} className="group max-w-56">
            <span className="flex min-w-0 items-center gap-1.5">
              <img
                src={fileIconPath(tab.path)}
                alt=""
                className="size-4 shrink-0"
              />
              <span className="truncate">{tab.name}</span>
            </span>
            <span
              role="button"
              tabIndex={-1}
              aria-label={`Close ${tab.name}`}
              onClick={(event) => {
                event.stopPropagation();
                onClose(tab.path);
              }}
              className="ml-1 shrink-0 rounded-ui-sm px-1 text-muted opacity-0 transition-opacity hover:bg-surface-hover hover:text-fg group-hover:opacity-100"
            >
              ×
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <TabsContent
        forceMount
        value={activePath ?? ""}
        className="min-h-0 flex-1 p-0"
      >
        {children}
      </TabsContent>
    </Tabs>
  );
}