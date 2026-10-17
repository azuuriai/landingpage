import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const isDevelopment = process.env.NODE_ENV === "development";

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  isDevelopment
    ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
    : "script-src 'self' 'unsafe-inline'",
  isDevelopment
    ? "connect-src 'self' ws: http: https://api.web3forms.com"
    : "connect-src 'self' https://api.web3forms.com",
  "upgrade-insecure-requests",
].join("; ");

// Studio Yogabriel, draft version 3 (static files in public/): the draft
// shows the studio's own pictures and its radio interview straight from
// yogabriel.ch and calm stock videos from Pexels and Pixabay until the studio
// has chosen its media. Only this draft path allows these hosts (Lukas,
// 16.10.2026); the fonts are self-hosted next to the draft.
const yogabrielMedia = "https://www.yogabriel.ch https://videos.pexels.com https://cdn.pixabay.com";
const yogabrielImages = "https://www.yogabriel.ch https://images.pexels.com https://cdn.pixabay.com";
const yogabrielDraftPolicy = contentSecurityPolicy
  .replace("frame-ancestors 'none'", "frame-ancestors 'self'")
  .replace("img-src 'self' data: blob:", `img-src 'self' data: blob: ${yogabrielImages}`)
  .replace("media-src 'self'", `media-src 'self' ${yogabrielMedia}`);

// Pilates Zug, draft as one scroll page (static files in public/): the
// studio's own photos come straight from pilateszug.ch, teacher portraits
// from bsport, and the timetable reads the public bsport API in the browser.
// Only this draft path allows these hosts (Lukas, 17.10.2026); the fonts are
// self-hosted next to the draft.
const pilatesZugDraftPolicy = contentSecurityPolicy
  .replace("frame-ancestors 'none'", "frame-ancestors 'self'")
  .replace("img-src 'self' data: blob:", "img-src 'self' data: blob: https://www.pilateszug.ch https://assets.production.bsport.io")
  .replace(/connect-src 'self'/, "connect-src 'self' https://api.production.bsport.io");

// Security headers shared by every route.
const baseSecurityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  async redirects() {
    return [
      // Legacy links to the former concept demo land on the showcase.
      { source: "/clinic", destination: "/work", permanent: false },
      { source: "/clinic/index.html", destination: "/work", permanent: false },
      // The single image of the German-only site; link previews may still
      // reference it.
      { source: "/opengraph-image", destination: "/opengraph-image/de", permanent: true },
      // The personal preview pages exist in German only.
      { source: "/en/fuer/:path*", destination: "/fuer/:path*", permanent: false },
      // Studio Yogabriel, draft version 3 as static files: the links for the
      // mail, version B (homepage with subpages) and A (everything on one page).
      { source: "/fuer/yogabriel-version-b", destination: "/fuer/yogabriel-version-b/index.html", permanent: false },
      { source: "/fuer/yogabriel-version-a", destination: "/fuer/yogabriel-version-a/index.html", permanent: false },
      // Pilates Zug, draft as one scroll page (English, German in de.html).
      { source: "/fuer/pilates-zug", destination: "/fuer/pilates-zug/index.html", permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: baseSecurityHeaders,
      },
      {
        source: "/(.*)",
        headers: [{ key: "Content-Security-Policy", value: contentSecurityPolicy }],
      },
      {
        // Personal preview pages for single studios: unlisted, never indexed.
        source: "/fuer/:slug",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        // The studio's draft is framed on its own preview page (same origin
        // only). Later rules override the same keys set above.
        source: "/fuer/:slug/entwurf/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy.replace("frame-ancestors 'none'", "frame-ancestors 'self'"),
          },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Studio Yogabriel, static draft version 3 (versions A and B): its
        // media hosts, see above; unlisted and never indexed.
        source: "/fuer/:version(yogabriel-version-a|yogabriel-version-b)/:path*",
        headers: [
          { key: "Content-Security-Policy", value: yogabrielDraftPolicy },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // Pilates Zug, static draft: its photo hosts and the bsport API, see
        // above; unlisted and never indexed.
        source: "/fuer/pilates-zug/:path*",
        headers: [
          { key: "Content-Security-Policy", value: pilatesZugDraftPolicy },
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        // The mail pictures of the drafts, a local helper.
        source: "/fuer/:slug/bild",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

// Registers i18n/request.ts, which resolves the locale of every request.
const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

export default withNextIntl(nextConfig);
