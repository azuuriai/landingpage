import type { AppPathname } from "@/i18n/routing";
import { RECORDINGS, type Recording } from "./media";
import { caseStudyBase } from "./projects-data";

// The /studios page: a website offer for owner-run dance and movement
// studios and everyone else who teaches classes. The words live in
// app/content/<locale>/studios.ts; this is the structure both languages
// share. The recordings come from a studio website Lukas built and are
// shown as examples, not as a template.

export const STUDIOS_PATH = "/studios" satisfies AppPathname;
export const STUDIOS_LAST_MODIFIED = new Date("2026-10-11T00:00:00.000Z");

// The contact form reads ?thema=studio and asks studio-specific questions.
export const STUDIO_CONTACT_HREF = { pathname: "/contact", query: { thema: "studio" } } as const;

// The case study the examples come from, and its two recordings in the
// order of the example tiles (content: studios.examples.tiles).
export const STUDIO_EXAMPLES: { caseStudyPath: AppPathname; recordings: Recording[] } = {
  caseStudyPath: caseStudyBase["indeed-unique"].path,
  recordings: [RECORDINGS.indeedUniqueBooking, RECORDINGS.indeedUniqueNews],
};
