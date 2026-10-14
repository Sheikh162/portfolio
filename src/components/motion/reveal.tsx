"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Spring-based scroll reveal (2026 motion standard).
 * Fades + rises on first scroll-into-view; renders statically
 * when the visitor prefers reduced motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 120, damping: 26, delay }}
    >
      {children}
    </motion.div>
  );
}