import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { GitHubContributions } from "../github-contributions";
import { Overview } from "../overview";
import { SocialLinkItem } from "./social-link-item";

/**
 * "Socials": one panel with the icon row in its own header and two blocks
 * underneath.
 *
 *   1. the contact / details grid
 *   2. the GitHub contribution graph
 *
 * The header paints the rule below the title, so the first block under it
 * draws no rule of its own. The second block owns the divider between them,
 * which keeps every boundary in here painted once.
 */
export function Socials() {
  return (
    <Panel id="socials">
      <PanelHeader className="flex items-center justify-between gap-4">
        <PanelTitle>Socials</PanelTitle>

        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLinkItem key={index} {...link} />
          ))}
        </div>
      </PanelHeader>

      <Overview />
      <GitHubContributions />
    </Panel>
  );
}
