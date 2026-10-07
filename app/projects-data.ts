import type {
  CaseStudyData,
  CaseStudyPath,
  CaseStudySlug,
  ProjectSlug,
  ShowcaseId,
  ShowcaseMedia,
} from "./content/types";
import { RECORDINGS, type Recording } from "./media";

// Everything about the projects that is the same in both languages: paths,
// dates, live URLs and recordings. The words live in app/content.

export const INDEED_UNIQUE_URL = "https://indeedunique.com";
export const VIENNA_EVENT_RADAR_URL = "https://viennaeventradar.at";
export const APP_STORE_URL = "https://apps.apple.com/at/app/wien-event-radar/id6771109823";

export const IOS_APP_PATH = "/work/wien-event-radar-ios" satisfies CaseStudyPath;
export const VER_PATH = "/work/vienna-event-radar" satisfies CaseStudyPath;

// Path and last change of every case study page.
export const caseStudyBase = {
  "indeed-unique": {
    slug: "indeed-unique",
    path: "/work/indeed-unique",
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
  "vienna-event-radar": {
    slug: "vienna-event-radar",
    path: VER_PATH,
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
  "wien-event-radar-ios": {
    slug: "wien-event-radar-ios",
    path: IOS_APP_PATH,
    lastModified: new Date("2026-09-24T00:00:00.000Z"),
  },
  // Facts come from the radar-admin-ios repository (build 26, README and
  // test suite, October 2026); the screens are its preview mode with sample
  // data.
  "operations-app": {
    slug: "operations-app",
    path: "/work/operations-app",
    lastModified: new Date("2026-10-06T00:00:00.000Z"),
  },
} satisfies Record<CaseStudySlug, { slug: CaseStudySlug; path: CaseStudyPath; lastModified: Date }>;

// The two web projects' recordings, used on the homepage and in the openings.
export const projectRecordings: Record<ProjectSlug, { desktop: Recording; phone: Recording }> = {
  "indeed-unique": {
    desktop: RECORDINGS.indeedUniqueDesktop,
    phone: RECORDINGS.indeedUniqueMobile,
  },
  "vienna-event-radar": {
    desktop: RECORDINGS.viennaEventRadarDesktop,
    phone: RECORDINGS.viennaEventRadarApp,
  },
};

// What each Showcase entry plays. The iOS app gets its own entry next to the
// web platform it belongs to.
export const showcaseMedia: Record<ShowcaseId, ShowcaseMedia> = {
  "indeed-unique": {
    kind: "web",
    domain: "indeedunique.com",
    desktop: RECORDINGS.indeedUniqueDesktop,
    phone: RECORDINGS.indeedUniqueMobile,
  },
  "vienna-event-radar-web": {
    kind: "web",
    domain: "viennaeventradar.at",
    desktop: RECORDINGS.viennaEventRadarDesktop,
  },
  "vienna-event-radar-ios": { kind: "app", phone: RECORDINGS.viennaEventRadarApp },
  "operations-app": { kind: "app", phone: RECORDINGS.operationsAppTour },
};

// "indeedunique.com" from the live link, for browser bars and link labels.
export function projectDomain(project: CaseStudyData) {
  return new URL(project.links[0].href).host;
}
