import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Use Link for internal nav, or <a> for external

import { Badge } from "@/components/ui/badge";
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
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted text-muted-foreground">
              <span className="text-sm">No Image</span>
            </div>
          )}
        </div>

        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            {project.title}
            <ArrowUpRightIcon className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
          </CardTitle>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-md px-1.5 py-0.5 text-xs font-normal text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}