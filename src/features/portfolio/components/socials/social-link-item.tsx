"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/features/portfolio/types/social-links";

export function SocialLinkItem({ icon, iconDark, title, href }: SocialLink) {
  return (
    <motion.a
      className={cn(
        "group/link flex size-7 items-center justify-center",
        "border border-edge bg-muted/50 transition-colors hover:bg-accent"
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={title}
      whileHover={{ scale: 1.06 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <span className="sr-only">{title}</span>
      {iconDark ? (
        <>
          <Image
            src={icon}
            alt=""
            width={18}
            height={18}
            className="size-4.5 block dark:hidden"
            unoptimized
          />
          <Image
            src={iconDark}
            alt=""
            width={18}
            height={18}
            className="hidden size-4.5 dark:block"
            unoptimized
          />
        </>
      ) : (
        <Image
          src={icon}
          alt=""
          width={18}
          height={18}
          className="size-4.5"
          unoptimized
        />
      )}
    </motion.a>
  );
}