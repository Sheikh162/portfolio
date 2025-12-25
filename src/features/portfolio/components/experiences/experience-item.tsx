"use client"
import Image from "next/image";
import React from "react";
import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-background p-1">
          {experience.companyLogo ? (
            <Image
              src={experience.companyLogo}
              alt={experience.companyName}
              width={40}
              height={40}
              className="rounded-full object-contain"
              unoptimized
            />
          ) : (
            <div className="size-full rounded-full bg-muted" />
          )}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-none">
            {experience.companyName}
          </h3>
          <a 
            href={experience.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-muted-foreground hover:underline"
          >
            {experience.url?.replace(/^https?:\/\//, '')}
          </a>
        </div>
      </div>

      {/* Vertical line connecting positions */}
      <div className="relative ml-5 space-y-6 border-l border-border pl-6 pb-2">
        {experience.positions.map((position) => (
          <ExperiencePositionItem key={position.id} position={position} />
        ))}
      </div>
    </div>
  );
}