export type SocialLink = {
  /** Icon image URL (absolute or path under /public) shown beside the title. */
  icon: string;
  /** Optional variant of the icon used in dark mode. */
  iconDark?: string;
  title: string;
  /** External profile URL opened when the item is clicked. */
  href: string;
};