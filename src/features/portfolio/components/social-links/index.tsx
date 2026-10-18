import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { Panel } from "../panel";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinkItem } from "./social-link-item";

export function SocialLinks() {
  return (
    <Panel>
      <h2 className="sr-only">Social Links</h2>

      {/* Icon strip with subtle label — boxed by the panel's plain screen lines */}
      <Reveal className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLinkItem key={index} {...link} />
          ))}
        </div>
        <span className="font-display text-lg italic text-muted-foreground">
          Follow me
        </span>
      </Reveal>
    </Panel>
  );
}
