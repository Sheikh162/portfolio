"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Spring-based scroll reveal (2026 motion standard).
 * Fades + rises on first scroll-into-view; renders statically
 * when the visitor prefers reduced motion, or when the element
 * is already in view on mount (no pointless on-load animation).
 *
 * The animated branch is gated on `mounted` so that the server and the first
 * client render always emit identical markup. Picking the branch during that
 * first render (from `useReducedMotion` alone) disagrees with the server's
 * `initial={{ opacity: 0 }}` style, and the stale inline `opacity: 0` survives
 * hydration, leaving reduced-motion visitors with a blank page.
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
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [visibleOnMount, setVisibleOnMount] = useState(false);

  useEffect(() => setMounted(true), []);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisibleOnMount(true);
    }
  }, []);

  if (!mounted || prefersReduced || visibleOnMount) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
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