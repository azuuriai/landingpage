import type { Recording } from "../media";
import { projectDomain, projects, type ProjectSlug } from "../projects-data";

export const HERO = {
  descriptor: "Websites, Web-Apps und iOS-Apps, Wien",
  approach: "AI-gestützt entwickelt",
  headline: "Von der Idee zum Produkt. Launch inklusive.",
};

export const HOME_LINKS = [
  { label: "Showcase", href: "/work" },
  { label: "Leistungen", href: "/services" },
  { label: "Über mich", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export type ShowcaseItem = {
  slug: string;
  name: string;
  href: string;
  domain: string;
  desktop: Recording;
  phone: Recording;
};

// Order of the homepage showcase: web platform with its iOS app first, then
// the studio website. Each takes an equal, unlabelled turn.
const SHOWCASE_ORDER: ProjectSlug[] = ["vienna-event-radar", "indeed-unique"];

export const SHOWCASE: ShowcaseItem[] = SHOWCASE_ORDER.map((slug) => {
  const project = projects[slug];
  return {
    slug,
    name: project.name,
    href: project.path,
    domain: projectDomain(project),
    desktop: project.desktop,
    phone: project.phone,
  };
});
