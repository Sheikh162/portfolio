import { Slot as SlotPrimitive } from "@radix-ui/react-slot";
import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

const Slot = SlotPrimitive;

/**
 * The vertical rails belong to the page container (`src/app/page.tsx`), which
 * sits on exactly the same 1px column as the sticky header. Panels do not draw
 * their own `border-x`: as a child, that border would land one pixel inside the
 * container's and the rail would read as a 2px line.
 */
function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn("screen-line-before screen-line-after", className)}
      {...props}
    />
  );
}

function PanelHeader({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header
      data-slot="panel-header"
      className={cn("screen-line-after px-4", className)}
      {...props}
    />
  );
}

function PanelTitle({
  className,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"h2"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "h2";
  return (
    <Comp
      data-slot="panel-title"
      className={cn("font-display text-3xl tracking-display", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

function PanelContent({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div data-slot="panel-body" className={cn("p-4", className)} {...props}>
      <Reveal>{children}</Reveal>
    </div>
  );
}

export { Panel, PanelContent, PanelHeader, PanelTitle };