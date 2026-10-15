"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image with a soft settle-in: fades from transparent on decode
 * (or immediately if already cached) instead of popping into the layout.
 */
export function FadeImage({ className, ...props }: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (ref.current?.complete && ref.current.naturalWidth > 0) {
      setLoaded(true);
    }
  }, []);

  return (
    <Image
      ref={ref}
      {...props}
      onLoad={() => setLoaded(true)}
      className={cn(
        "transition-opacity duration-500",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
    />
  );
}