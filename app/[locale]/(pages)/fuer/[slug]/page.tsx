import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fuerPages, getFuerPage } from "@/app/fuer-data";
import { resolveLocale } from "@/app/locale";
import { FuerContent } from "./fuer-content";

// Unlisted: reached only through a personal mail, never indexed and never
// in the sitemap. German only: the pages are written for one studio each,
// and /en/fuer/… redirects to the German URL (next.config.ts). The shared
// SubpageHero renders nothing for this path.
type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

// German only: the locale is filled in here, so no English version is
// generated and /en/fuer/… is a 404 behind the redirect in next.config.ts.
export function generateStaticParams() {
  return fuerPages.map((page) => ({ locale: "de", slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getFuerPage(slug);
  return {
    title: page ? `Ein Entwurf für ${page.studio}` : "Entwurf",
    robots: { index: false, follow: false, nocache: true },
    alternates: { canonical: null },
  };
}

export default async function FuerPage(props: Props) {
  const locale = await resolveLocale(props);
  const { slug } = await props.params;
  const page = getFuerPage(slug);
  if (!page || locale !== "de") notFound();
  return <FuerContent page={page} />;
}
