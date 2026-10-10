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
