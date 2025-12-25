"use client"
import { ChevronDownIcon, InfinityIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ExperienceIcon } from "./experience-position-icon";
import { ExperiencePosition } from "../../types/experiences";
import { useState } from "react";

export function ExperiencePositionItem({
  position,
}: {
  position: ExperiencePosition;
}) {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  const [isOpen, setIsOpen] = useState(position.isExpanded || false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className={cn(
            "block w-full text-left group",
            "relative p-2 rounded-lg hover:bg-muted/50 transition-colors"
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn(
                "flex size-8 shrink-0 items-center justify-center rounded-lg",
                "bg-muted text-muted-foreground",
                "border border-border"
              )}
            >
              <ExperienceIcon className="size-4" icon={position.icon} />
            </div>

            <div className="flex-1">
              <h4 className="font-medium text-sm sm:text-base">{position.title}</h4>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span>{start}</span>
                  <span>—</span>
                  {isOngoing ? (
                    <span className="text-foreground font-medium">Present</span>
                  ) : (
                    <span>{end}</span>
                  )}
                </div>
              </div>
            </div>

            <ChevronDownIcon
              className={cn(
                "size-4 text-muted-foreground transition-transform duration-200",
                isOpen && "rotate-180"
              )}
            />
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down">
          <div className="pl-12 pr-2 pb-2 pt-1 text-sm text-muted-foreground space-y-2">
            {/* Render Markdown description as simple text with newlines for now */}
            <div className="whitespace-pre-wrap">{position.description}</div>

            {position.skills && position.skills.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-2">
                {position.skills.map((skill) => (
                  <Badge key={skill} variant="outline" className="text-xs font-normal">
                    {skill}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}