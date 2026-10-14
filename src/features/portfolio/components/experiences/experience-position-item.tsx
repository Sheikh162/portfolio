"use client"
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import {
  Collapsible,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { formatDuration } from "@/lib/duration";
import { ExperienceIcon } from "./experience-position-icon";
import type { Experience, ExperiencePosition } from "../../types/experiences";
import { useState } from "react";

export function ExperiencePositionItem({
  experience,
  position,
}: {
  experience: Experience;
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const duration = formatDuration(start, end);
  const [isOpen, setIsOpen] = useState(position.isExpanded || false);
  const hasDetail =
    (position.highlights?.length ?? 0) > 0 || (position.skills?.length ?? 0) > 0;

  const header = (
    <div className="flex items-start gap-3">
      <div className="min-w-0 flex-1">
        <h4 className="font-medium leading-snug text-sm sm:text-base">
          {position.title}
        </h4>
        <a
          href={experience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-0.5 block truncate text-sm text-muted-foreground hover:underline"
        >
          {experience.companyName}
          {position.employmentType ? ` - ${position.employmentType}` : ""}
        </a>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>{start}</span>
          <span aria-hidden>-</span>
          <span className={cn(!end && "font-medium text-foreground")}>
            {end ?? "Present"}
          </span>
          {duration && (
            <>
              <span aria-hidden className="text-muted-foreground/50">·</span>
              <span className="font-mono text-[11px]">{duration}</span>
            </>
          )}
          {position.location && (
            <>
              <span aria-hidden className="text-muted-foreground/50">·</span>
              <span>{position.location}</span>
            </>
          )}
        </div>
      </div>

      {hasDetail && (
        <ChevronDownIcon
          className={cn(
            "mt-1 size-4 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      )}
    </div>
  );

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex items-start gap-4">
        {/* Company logo tile */}
        <div className="relative flex size-10 shrink-0 items-center justify-center border border-border bg-background p-1">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={40}
              height={40}
              className="object-contain"
              unoptimized
            />
          ) : (
            <div className="flex size-full items-center justify-center bg-muted">
              <ExperienceIcon className="size-4" icon={position.icon} />
            </div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          {hasDetail ? (
            <CollapsibleTrigger className="group block w-full text-left">
              {header}
            </CollapsibleTrigger>
          ) : (
            header
          )}

          {/* Spring height animation (2026 motion standard) */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 34 }}
                className="overflow-hidden"
              >
                <div className="pt-3 text-sm text-muted-foreground">
              {position.highlights && position.highlights.length > 0 && (
                <ul className="space-y-1.5">
                  {position.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[8px] size-1 shrink-0 bg-muted-foreground/60"
                      />
                      <span className="text-balance">
                        {highlight.lead && (
                          <strong className="font-medium text-foreground">
                            {highlight.lead}:{" "}
                          </strong>
                        )}
                        {highlight.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {position.skills && position.skills.length > 0 && (
                <p className="mt-3 font-mono text-xs text-muted-foreground/80">
                  {position.skills.join(" / ")}
                </p>
              )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Collapsible>
  );
}