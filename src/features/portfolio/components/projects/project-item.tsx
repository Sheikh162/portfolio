"use client"
import { motion } from "motion/react";
import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Project } from "../../types/projects";

interface ProjectItemProps {
  project: Project;
  index: number;
}

export function ProjectItem({ project, index }: ProjectItemProps) {
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

          {/* Header: index + title + repo link */}
          <CardHeader
            className={cn(
              "flex flex-row items-center justify-between gap-3 px-4 py-3",
              project.image && "border-b border-edge/60"
            )}
          >
            <div className="flex min-w-0 items-baseline gap-3">
              <span className="font-mono text-xs text-muted-foreground/70">
                {String(index + 1).padStart(2, "0")}
              </span>
              <CardTitle className="truncate text-base font-medium">
                {project.title}
              </CardTitle>
            </div>
            <ArrowUpRightIcon className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </CardHeader>

          <CardContent className="px-4 py-3">
            <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
            {project.metric && (
              <p className="mt-2 font-mono text-xs text-muted-foreground/80">
                {project.metric}
              </p>
            )}
          </CardContent>

          {/* Footer: tags as mono text */}
          <CardFooter className="mt-auto border-t border-edge/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
            <span className="truncate">{project.tags.join(" / ")}</span>
          </CardFooter>
        </Link>
      </Card>
    </motion.div>
  );
}