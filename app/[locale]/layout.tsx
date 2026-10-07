import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { localeFromParams, type LocaleParams } from "@/app/locale";
import { siteMetadata } from "@/app/seo";
import "../globals.css";

// Loaded with its optical-size axis: large headlines automatically use
// Inter's tighter display drawing, small text keeps the readable text cut.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  axes: ["opsz"],
});

// Both languages are rendered at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(props: LocaleParams): Promise<Metadata> {
  return siteMetadata(await localeFromParams(props));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode }> & LocaleParams) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} bg-[#f2f2f0] font-sans text-[#181811] antialiased`}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
