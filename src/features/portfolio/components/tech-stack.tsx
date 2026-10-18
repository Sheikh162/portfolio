import Image from "next/image";
import { cn } from "@/lib/utils";
import { TECH_STACK } from "../data/tech-stack";
import type { TechStackItem } from "../types/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

const ICON_BASE = "https://cdn.simpleicons.org";

/**
 * Brand mark for a stack item: a simple-icons SVG, or a monochrome glyph when
 * the technology has no mark (see `TechStackItem.icon`).
 */
function TechStackIcon({ item }: { item: TechStackItem }) {
  if (item.icon) {
    const Glyph = item.icon;
    return <Glyph className="size-3.5 shrink-0" aria-hidden />;
  }

  const src = `${ICON_BASE}/${item.key}`;

  if (item.theme) {
    return (
      <>
        <Image
          src={`${src}/white`}
          alt=""
          width={16}
          height={16}
          className="hidden size-3.5 shrink-0 dark:block"
          unoptimized
        />
        <Image
          src={src}
          alt=""
          width={16}
          height={16}
          className="size-3.5 shrink-0 dark:hidden"
          unoptimized
        />
      </>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={16}
      height={16}
      className="size-3.5 shrink-0"
      unoptimized
    />
  );
}

export function TechStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent
        className={cn(
          // These classes create the subtle dot pattern background
          "[--pattern-foreground:var(--color-primary)]/5 dark:[--pattern-foreground:var(--color-white)]/5",
          "bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center",
          "bg-background/95",
          // p-0 lets the row rules run the full width of the panel; the cells
          // below carry their own padding instead.
          "p-0"
        )}
      >
        <ul className="divide-y divide-edge">
          {TECH_STACK.map((group, index) => (
            <li
              key={group.title}
              className="grid grid-cols-[7.5rem_1fr] items-start sm:grid-cols-[10.5rem_1fr]"
            >
              <div className="h-full border-r border-edge px-4 py-3">
                <span className="font-mono text-xs text-muted-foreground">
                  <span className="text-muted-foreground/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>{" "}
                  {group.title}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 px-4 py-3">
                {group.items.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex items-center gap-1.5 border border-edge bg-muted/50 px-2 py-1",
                      "font-mono text-xs text-muted-foreground transition-colors",
                      "hover:bg-accent hover:text-foreground"
                    )}
                  >
                    <TechStackIcon item={item} />
                    {item.title}
                  </a>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
