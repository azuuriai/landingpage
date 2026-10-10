import type { ServiceMedia } from "./content/types";

// The Leistungen / Services page: three product forms, each backed by a
// project that is live today. The stills are the same in both languages;
// their descriptions come from app/content/<locale>/services.ts.

const stills = {
  websites: { src: "/case-studies/indeed-unique/news-stage.jpg", width: 1152, height: 720 },
  "web-apps": { src: "/case-studies/vienna-event-radar/radar-assistant.jpg", width: 1152, height: 720 },
  discover: { src: "/case-studies/vienna-event-radar/app-discover.jpg", width: 540, height: 1170 },
  map: { src: "/case-studies/vienna-event-radar/app-map.jpg", width: 540, height: 1170 },
};

export function websitesMedia(alt: string): ServiceMedia {
  return {
    kind: "web",
    domain: "indeedunique.com",
    // Hero thumbnail: treatment cards from the Aurea Clinic design concept.
    thumb: { src: "/case-studies/aurea/treatments.jpg" },
    still: { ...stills.websites, alt },
  };
}

export function webAppsMedia(alt: string): ServiceMedia {
  return {
    kind: "web",
    domain: "viennaeventradar.at",
    thumb: { src: stills["web-apps"].src, zoomFocus: "42% 22%" },
    still: { ...stills["web-apps"], alt },
  };
}

export function iosAppsMedia(discoverAlt: string, mapAlt: string): ServiceMedia {
  return {
    kind: "app",
    stills: [
      { ...stills.discover, alt: discoverAlt },
      { ...stills.map, alt: mapAlt },
    ],
  };
}
