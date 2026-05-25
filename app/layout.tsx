import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  googleSiteVerification,
  OG_DESCRIPTION,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "./seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: SITE_NAME,
  title: "Lukas Kaffer · Webprodukte und iOS Apps aus einer Hand",
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  category: "technology",
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: [
    "Webentwicklung Wien",
    "iOS App Entwicklung",
    "SwiftUI Entwickler",
    "Next.js Entwickler",
    "MVP Entwicklung",
    "Landing Page Wien",
    "Lukas Kaffer",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Lukas Kaffer · Idee bis App Store",
    description: OG_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lukas Kaffer · Webprodukte und native iOS Apps",
      },
    ],
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Kaffer · Idee bis App Store",
    description: "Aus deiner Idee wird ein Produkt, das wirklich live geht.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body
        className={`${inter.variable} bg-[#f2f2f0] font-sans text-[#181811] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
