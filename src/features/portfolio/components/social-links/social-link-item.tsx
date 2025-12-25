import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/features/portfolio/types/social-links";

export function SocialLinkItem({ icon, title, description, href }: SocialLink) {
  return (
    <a
      className={cn(
        "group/link flex cursor-pointer items-center gap-4 p-4 pr-2 transition-colors hover:bg-accent/50",
        // These classes handle the borders between items in the grid
        "max-sm:screen-line-before max-sm:screen-line-after",
        "sm:nth-[2n+1]:screen-line-before sm:nth-[2n+1]:screen-line-after"
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative size-12 shrink-0">
        {/* Icon Container */}
        <div className="flex size-full items-center justify-center rounded-xl bg-muted/50">
             <Image
              src={icon}
              alt={title}
              width={32}
              height={32}
              className="size-8"
              unoptimized // Recommended for SVGs
            />
        </div>
      </div>

      <div className="flex-1">
        <h3 className="flex items-center font-medium underline-offset-4 group-hover/link:underline">
          {title}
        </h3>

        {description && (
          <p className="text-sm text-muted-foreground line-clamp-1">{description}</p>
        )}
      </div>

      <ArrowUpRightIcon className="size-4 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
    </a>
  );
}