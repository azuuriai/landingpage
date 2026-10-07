import type { CaseStudyPath, Content, ProjectSlug } from "../content/types";
import { withName } from "../content";
import { projectDomain } from "../projects-data";
import type { Recording } from "../media";

export type ShowcaseItem = {
  slug: ProjectSlug;
  name: string;
  href: CaseStudyPath;
  domain: string;
  desktop: Recording;
  phone: Recording;
  // Accessible labels of the link and the desktop recording.
  linkLabel: string;
  tourLabel: string;
};

// Order of the homepage showcase: web platform with its iOS app first, then
// the studio website. Each takes an equal, unlabelled turn.
const SHOWCASE_ORDER: ProjectSlug[] = ["vienna-event-radar", "indeed-unique"];

export function showcaseItems({ projects, ui }: Content): ShowcaseItem[] {
  return SHOWCASE_ORDER.map((slug) => {
    const project = projects[slug];
    return {
      slug,
      name: project.name,
      href: project.path,
      domain: projectDomain(project),
      desktop: project.desktop,
      phone: project.phone,
      linkLabel: withName(ui.caseStudyLink, project.name),
      tourLabel: withName(ui.siteTour, project.name),
    };
  });
}

// The page list under the headline: every navigation page except Kontakt,
// which has the running head and the button.
export function homeLinks({ detailPages }: Content) {
  return detailPages
    .filter((page) => page.slug !== "contact")
    .map((page) => ({ label: page.navLabel, href: page.path }));
}
