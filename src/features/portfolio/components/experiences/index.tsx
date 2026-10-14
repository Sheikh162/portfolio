import {
  EDUCATION,
  EXPERIENCES,
} from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle index="03">Experience</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="divide-y divide-border/50">
          {EXPERIENCES.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}

export function Education() {
  return (
    <Panel id="education">
      <PanelHeader>
        <PanelTitle index="05">Education</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <div className="divide-y divide-border/50">
          {EDUCATION.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </PanelContent>
    </Panel>
  );
}