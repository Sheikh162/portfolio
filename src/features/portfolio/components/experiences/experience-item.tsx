"use client"
import type { Experience } from "../../types/experiences";
import { ExperiencePositionItem } from "./experience-position-item";

export function ExperienceItem({ experience }: { experience: Experience }) {
  return (
    <div className="py-6 first:pt-0 last:pb-0">
      {experience.positions.map((position) => (
        <ExperiencePositionItem
          key={position.id}
          experience={experience}
          position={position}
        />
      ))}
    </div>
  );
}