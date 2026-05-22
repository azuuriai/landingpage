import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lukas Kaffer · Webprodukte und iOS Apps aus einer Hand",
  description:
    "Ich konzipiere, designe und baue Webprodukte und native iOS Apps. Solo, von der Idee bis in den App Store. Kurze Wege, direkter Kontakt, ohne Agentur dazwischen.",
  metadataBase: new URL("https://lukaskaffer.com"),
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
    description:
      "Webprodukte und iOS Apps, gebaut bis in den App Store statt bis zum Mockup. Vienna Event Radar online und in Apples Store.",
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Kaffer · Idee bis App Store",
    description: "Aus deiner Idee wird ein Produkt, das wirklich live geht.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
