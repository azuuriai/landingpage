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
    "AI-native product builder crafting polished websites, web apps, internal tools and AI-powered workflows from concept to launch.",
  metadataBase: new URL("https://lukaskaffer.com"),
  openGraph: {
    title: "Lukas Kaffer | AI-native Product Builder",
    description:
      "Premium websites, full-stack products, internal tools and AI workflows for founders and small businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Kaffer | AI-native Product Builder",
    description:
      "Turning rough ideas into polished digital products from concept to launch.",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-ink font-sans text-bone antialiased`}>
        {children}
      </body>
    </html>
  );
}
