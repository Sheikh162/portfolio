import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links";
import { Reveal } from "@/components/motion/reveal";
import { SocialLinkItem } from "./social-link-item";

/**
 * Social icon strip — the first block inside the "Socials" panel.
 *
 * It draws no rule of its own: the line above it is the panel header's bottom
 * rule, and the block below owns the next one. Painting a rule here as well
 * would put two rules on one boundary (see `screen-line-before` in globals.css).
 */
export function SocialLinks() {
  return (
    <>
      <h2 className="sr-only">Social links</h2>

      <Reveal className="flex items-center justify-between gap-2 px-4 py-4">
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link, index) => (
            <SocialLinkItem key={index} {...link} />
          ))}
        </div>
        <span className="font-display text-lg italic text-muted-foreground">
          Socials
        </span>
      </Reveal>
    </>
  );
}
