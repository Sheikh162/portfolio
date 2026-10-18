import { cn } from "@/lib/utils"

export function SectionSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full",
        "before:absolute before:-left-[100vw] before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        // The band owns the rule at the top of every hatch. Panels no longer
        // draw a bottom rule, so this single line is what a panel→hatch
        // boundary shows — and for the first band it is also the rule under
        // the profile header, which has none of its own.
        "after:absolute after:top-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-edge",
        className
      )}
    />
  )
}