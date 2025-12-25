"use client"
import React from "react";
import { EXPERIENCES } from "../../data/experiences";
import { Panel, PanelHeader, PanelTitle, PanelContent } from "../panel";
import { ExperienceItem } from "./experience-item";

export function Experiences() {
  return (
    <Panel id="experience">
      <PanelHeader>
        <PanelTitle>Experience & Education</PanelTitle>
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