import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fuerPages, getFuerPage } from "@/app/fuer-data";
import { FuerContent } from "./fuer-content";

// Unlisted: reached only through a personal mail, never indexed and never
// in the sitemap. The shared SubpageHero renders nothing for this path.
export const dynamicParams = false;

export function generateStaticParams() {
  return fuerPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getFuerPage(slug);
  return {
    title: page ? `Ein Entwurf für ${page.studio}` : "Entwurf",
    robots: { index: false, follow: false, nocache: true },
  };
}

export default async function FuerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getFuerPage(slug);
  if (!page) notFound();
  return <FuerContent page={page} />;
}
