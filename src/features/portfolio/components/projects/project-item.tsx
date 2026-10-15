"use client"
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "../../types/projects";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card
        className={cn(
          "group relative flex h-full flex-col gap-0 overflow-hidden rounded-none",
          "border-edge py-0 shadow-none",
          "transition-colors duration-300 hover:border-foreground/25 focus-within:border-foreground/25"
        )}
      >
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-full flex-col outline-none"
        >
          {/* Preview (only when a screenshot exists) */}
          {project.image && (
            <div className="relative aspect-video w-full overflow-hidden border-b border-edge bg-muted">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 384px"
              />
            </div>
          )}

          {/* Header: title with tech stack beneath, both left-aligned */}
          <CardHeader
            className={cn(
              "flex flex-col items-start gap-1 px-4 py-3 text-left",
              project.image && "border-b border-edge/60"
            )}
          >
            <CardTitle className="w-full truncate text-base font-medium">
              {project.title}
            </CardTitle>
            <p className="w-full truncate font-mono text-xs text-muted-foreground">
              {project.tags.join(" / ")}
            </p>
          </CardHeader>

          <CardContent className="px-4 py-3">
            <p className="line-clamp-2 text-base leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          </CardContent>
        </Link>
      </Card>
    </motion.div>
  );
}