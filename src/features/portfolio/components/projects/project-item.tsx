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
        {/* Preview */}
        <div className="relative aspect-video w-full overflow-hidden border-b border-edge bg-muted">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-mono text-xs text-muted-foreground">
              no preview
            </div>
          )}
        </div>

        {/* Header: index + title + external link */}
        <CardHeader className="flex flex-row items-center justify-between gap-3 border-b border-edge/60 px-4 py-3">
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
        </CardContent>

        {/* Footer: tags as mono text */}
        <CardFooter className="mt-auto border-t border-edge/60 px-4 py-2.5 font-mono text-xs text-muted-foreground">
          <span className="truncate">{project.tags.join(" / ")}</span>
        </CardFooter>
      </Link>
    </Card>
  );
}