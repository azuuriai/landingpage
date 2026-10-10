import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { entwuerfe } from "@/app/_fuer/entwuerfe";
import { getFuerPage } from "@/app/fuer-data";
import { resolveLocale } from "@/app/locale";

// A studio's website draft as real, responsive pages: its homepage and a
// few subpages. Framed on the personal page (laptop and phone) and open
// full size. Outside the (pages) layout on purpose: no Lukas Kaffer chrome.
// German only, like the personal page it belongs to.

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-di-display",
  display: "swap",
});

const text = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-di-text",
  display: "swap",
});

type Props = { params: Promise<{ locale: string; slug: string; pfad?: string[] }> };

export const dynamicParams = false;

// German only, like the personal pages: the locale is filled in here, so
// nothing is generated under /en.
export function generateStaticParams() {
  return Object.entries(entwuerfe).flatMap(([slug, pages]) =>
    Object.keys(pages).map((path) => ({ locale: "de", slug, pfad: path ? path.split("/") : [] })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFuerPage(slug);
  return {
    title: page ? `Entwurf für ${page.studio}` : "Entwurf",
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: null },
  };
}

export default async function EntwurfPage(props: Props) {
  const locale = await resolveLocale(props);
  const { slug, pfad = [] } = await props.params;
  const Page = entwuerfe[slug]?.[pfad.join("/")];
  if (!Page || locale !== "de") notFound();

  return (
    <div className={`${display.variable} ${text.variable}`}>
      <Page base={`/fuer/${slug}/entwurf`} />
    </div>
  );
}
