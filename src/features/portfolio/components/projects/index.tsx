import { PROJECTS } from "@/features/portfolio/data/projects";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";
import { ProjectItem } from "./project-item";

export function Projects() {
  return (
    <Panel id="projects">
      <PanelHeader>
        <PanelTitle>Projects</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}