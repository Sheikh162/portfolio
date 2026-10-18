import { Panel, PanelHeader, PanelTitle } from "../panel";
import { GitHubContributions } from "../github-contributions";
import { Overview } from "../overview";
import { SocialLinks } from "../social-links";

/**
 * "Socials" — one panel, three stacked blocks:
 *
 *   1. the social icon strip (no rule of its own — the header rule is above it)
 *   2. the contact / details grid
 *   3. the GitHub contribution graph
 *
 * Each block after the first owns the rule at its top, so every boundary in
 * here is painted once.
 */
export function Socials() {
  return (
    <Panel id="socials">
      <PanelHeader>
        <PanelTitle>Socials</PanelTitle>
      </PanelHeader>

      <SocialLinks />
      <Overview />
      <GitHubContributions />
    </Panel>
  );
}
