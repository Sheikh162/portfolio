"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  )
}

export { Separator }

// const Separator = React.forwardRef<
//   React.ElementRef<typeof SeparatorPrimitive>,
//   React.ComponentPropsWithoutRef<typeof SeparatorPrimitive>
// >(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
//   <div className={cn(
//     "relative flex w-full border-x border-edge", 
//     orientation === "horizontal" ? "h-8" : "h-auto w-px",
//     className
//   )}>
//      <div className={cn(
//         "absolute inset-0 w-full",
//         "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
//         "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56"
//      )} />
//      {/* Actual separator line if needed, but the pattern usually replaces it in this design */}
//   </div>
// ))
// Separator.displayName = SeparatorPrimitive.displayName

