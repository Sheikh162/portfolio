import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { Panel } from "../panel";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel className="border-t-0">
      <h2 className="sr-only">Social Links</h2>

      {/* Compact icon strip */}
      <div className="flex items-center gap-2 p-3">
        {SOCIAL_LINKS.map((link, index) => (
          <SocialLinkItem key={index} {...link} />
        ))}
      </div>
    </Panel>
  );
}