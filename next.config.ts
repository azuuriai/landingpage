import type { NextConfig } from "next";

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

// Relaxed CSP for the standalone /clinic concept demo (Aurea Clinic).
// It relies on the Tailwind Play CDN + Google Fonts, so those origins are
// allowed here only — the main site keeps the strict policy above.
const clinicContentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com",
  "connect-src 'self' https://cdn.tailwindcss.com",
  "upgrade-insecure-requests",
].join("; ");

// Security headers shared by every route except the Content-Security-Policy,
// which differs between the main site (strict) and /clinic (relaxed).
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
  async rewrites() {
    return [
      // Serve the static Aurea concept demo at the clean /clinic URL.
      { source: "/clinic", destination: "/clinic/index.html" },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: baseSecurityHeaders,
      },
      {
        // Strict CSP everywhere except the /clinic concept demo.
        source: "/((?!clinic).*)",
        headers: [{ key: "Content-Security-Policy", value: contentSecurityPolicy }],
      },
      {
        // Relaxed CSP for the standalone /clinic demo and its assets.
        source: "/clinic/:path*",
        headers: [
          { key: "Content-Security-Policy", value: clinicContentSecurityPolicy },
        ],
      },
      {
        source: "/clinic",
        headers: [
          { key: "Content-Security-Policy", value: clinicContentSecurityPolicy },
        ],
      },
    ];
  },
};

export default nextConfig;
