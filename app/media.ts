export type Recording = { src: string; poster: string; durationMs: number };

// Recordings ship as H.264 MP4 only: it decodes everywhere, and at these sizes
// VP9 saved almost nothing. A WebM listed first is risky, because a browser
// that claims VP9 support but fails to decode it never falls back to the next
// <source>. A project's desktop and phone clips share one length, which is
// also how long the project stays on screen in the homepage showcase.
// Posters are WebP (cwebp -q 82), about half the size of the JPEGs.
function recording(basePath: string, durationMs: number): Recording {
  return { src: `${basePath}.mp4`, poster: `${basePath}-poster.webp`, durationMs };
}

export const RECORDINGS = {
  indeedUniqueDesktop: recording("/case-studies/indeed-unique/desktop-tour", 28_600),
  indeedUniqueMobile: recording("/case-studies/indeed-unique/mobile-tour", 28_600),
  // The entry animation on its own, until the logo has stood for a moment.
  indeedUniqueEntry: recording("/case-studies/indeed-unique/entry", 4_133),
  // Homepage: posts turning in the tablet, then the shelf travelling right.
  indeedUniqueNews: recording("/case-studies/indeed-unique/news", 23_500),
  // Video archive: the 3D film gallery turning while the page scrolls.
  indeedUniqueArchive: recording("/case-studies/indeed-unique/archive", 11_266),
  // Eversports widgets: schedule, semester blocks and voucher purchase.
  indeedUniqueBooking: recording("/case-studies/indeed-unique/booking", 26_200),
  viennaEventRadarDesktop: recording("/case-studies/vienna-event-radar/web-tour", 26_400),
  viennaEventRadarApp: recording("/case-studies/vienna-event-radar/app-tour", 26_400),
  // Operations app in its preview mode (sample data): lossless iOS Simulator
  // screenshots joined by crossfades, since the simulator's own screen
  // recording stutters. Monitor, the Social Studio editor across four slides,
  // Top Picks.
  operationsAppTour: recording("/case-studies/operations-app/tour", 18_800),
  // The Sanity studio behind Indeed Unique, served locally in the light
  // theme and captured frame by frame: Start, a picture with its crop
  // preview, the building-block menu, the page picker, days off.
  indeedUniqueStudio: recording("/case-studies/indeed-unique-redaktion/tour", 25_933),
} satisfies Record<string, Recording>;
