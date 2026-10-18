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
 *
 * Panels also draw only the rule at their *top*. The line below a panel is
 * owned by whatever comes next — the next panel's top rule or the hatch band's
 * top rule — so a boundary is never painted by two elements. See the
 * `screen-line-before` note in `globals.css` for why doubles misrender.
 */
function Panel({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="panel"
      className={cn("screen-line-before", className)}
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