import { Tabs, TabsList, TabsTrigger } from "my-you-eye";
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
}

/**
 * Open-file strip built on my-you-eye's Tabs (filing variant — the
 * "file cabinet" look). Each tab carries a close affordance; closing stops
 * propagation so it doesn't switch tabs.
 */
export function TabBar({ tabs, activePath, onActivate, onClose }: TabBarProps) {
  if (tabs.length === 0) return null;
  return (
    <Tabs
      variant="filing"
      value={activePath ?? undefined}
      onValueChange={onActivate}
      className="shrink-0"
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
    </Tabs>
  );
}