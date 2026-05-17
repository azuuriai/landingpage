import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lukas Kaffer | AI-native Product Builder",
  description:
    "AI-native Product Builder für polierte Websites, Web Apps, interne Tools und KI-gestützte Workflows von Konzept bis Launch.",
  metadataBase: new URL("https://lukaskaffer.com"),
  openGraph: {
    title: "Lukas Kaffer | AI-native Product Builder",
    description:
      "Premium Websites, Full-Stack Produkte, interne Tools und KI-Workflows für Gründer und kleine Unternehmen.",
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Kaffer | AI-native Product Builder",
    description:
      "Von groben Ideen zu polierten digitalen Produkten.",
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
      <body className={`${inter.variable} bg-ink font-sans text-bone antialiased`}>
        {children}
      </body>
    </html>
  );
}
