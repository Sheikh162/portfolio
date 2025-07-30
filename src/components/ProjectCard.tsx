import { Github, ArrowUpRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <Card className="flex flex-col justify-between h-full transition-all hover:border-primary/50">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center gap-4">
        {demoLink && demoLink !== '#' && (
          <Button asChild variant="outline">
            <a href={demoLink} target="_blank" rel="noopener noreferrer">
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Demo
            </a>
          </Button>
        )}
        {githubLink && (
          <Button asChild variant="outline">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}