import { USER } from "@/features/portfolio/data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../panel";

/**
 * "$whoami" — short first-person intro. Copy lives in `data/user.ts`
 * (`introBullets`) so it stays a single editable block.
 *
 * The bullets reuse the experience-panel list styling: a 4px square marker and
 * an optional bold lead-in.
 */
export function WhoAmI() {
  return (
    <Panel id="whoami">
      <PanelHeader>
        <PanelTitle>$whoami</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="space-y-1.5 text-base text-muted-foreground">
          {USER.introBullets.map((bullet, index) => (
            <li key={index} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-[8px] size-1 shrink-0 bg-muted-foreground/60"
              />
              <span className="text-pretty">
                {bullet.lead && (
                  <strong className="font-medium text-foreground">
                    {bullet.lead}:{" "}
                  </strong>
                )}
                {bullet.text}
              </span>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
