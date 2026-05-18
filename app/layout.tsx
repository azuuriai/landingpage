import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lukas Kaffer | AI-first Web & Native iOS",
  description:
    "Lukas Kaffer designs and builds polished websites, full-stack products, backend logic, AI-first workflows and native iOS 26 Apple app experiences.",
  metadataBase: new URL("https://lukaskaffer.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    title: "Lukas Kaffer | AI-first Web & Native iOS",
    description:
      "Personal portfolio for polished web products, native iOS 26 Apple apps, backend logic, internal tools and AI-first workflows.",
    type: "website",
    locale: "de_AT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lukas Kaffer | AI-first Web & Native iOS",
    description:
      "Turning rough ideas into polished digital products, from web to native iOS.",
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
