"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

/**
 * 1px scroll progress hairline (§3.8 "feels finished" signal).
 * Foreground color, spring-smoothed, sits above the grain overlay.
 */
export function ScrollProgress() {
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 320,
    damping: 40,
    mass: 0.5,
  });

  if (prefersReduced) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-foreground"
      style={{ scaleX }}
    />
  );
}