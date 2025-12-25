"use client";

import { AnimatePresence, motion, type Transition, type Variants } from "motion/react";
import { Children, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  initial: { y: -10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 10, opacity: 0 },
};

// Allow animating standard HTML elements or Motion elements
type MotionElement = typeof motion.p | typeof motion.span | typeof motion.div;

type Props = {
  as?: MotionElement;
  className?: string;
  children: React.ReactNode[];
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
};

export function FlipSentences({
  as: Component = motion.p, // Default to a paragraph tag
  className,
  children,
  interval = 3, // Seconds between flips
  transition = { duration: 0.5, ease: "easeInOut" },
  variants = defaultVariants,
  onIndexChange,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    // Timer to switch to the next sentence
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(timer);
  }, [items.length, interval, onIndexChange]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Component
        key={currentIndex} // Key change triggers the animation
        className={cn("inline-block", className)}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={transition}
        variants={variants}
      >
        {items[currentIndex]}
      </Component>
    </AnimatePresence>
  );
}