import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { ScaledFrame } from "@/app/_components/scaled-frame";
import { fuerPages, getFuerPage } from "@/app/fuer-data";
import { BrowserFrame } from "@/app/(pages)/work/project-media";

// Pictures for the personal mail, captured at 1200 × 720 with
// scripts/fuer-bild.sh. Lukas' choice: the personal page shows the
// homepage only, the mail carries a few pictures of further pages.
//   ?motiv=start      homepage on laptop and phone (default)
//   ?motiv=woche      the timetable on a laptop
//   ?motiv=anmeldung  course page with booking on laptop and phone
// Local helper, noindex.
export const dynamicParams = false;

export function generateStaticParams() {
  return fuerPages.map((page) => ({ slug: page.slug }));
}

export const metadata: Metadata = {
  title: "Entwurfsbild",
  robots: { index: false, follow: false, nocache: true },
};

type Motiv = "start" | "woche" | "anmeldung";

export default async function BildPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ motiv?: string }>;
}) {
  const { slug } = await params;
  const { motiv: requested } = await searchParams;
  const page = getFuerPage(slug);
  if (!page) notFound();
  const draft = `/fuer/${page.slug}/entwurf`;
  const motiv: Motiv = requested === "woche" || requested === "anmeldung" ? requested : "start";

  const shots: Record<Motiv, { laptop: string; phone?: string }> = {
    start: { laptop: draft, phone: draft },
    woche: { laptop: `${draft}?ansicht=stundenplan` },
    anmeldung: { laptop: `${draft}/kurse/paartanz?ansicht=anmelden`, phone: `${draft}/kurse/paartanz?ansicht=anmelden` },
  };
  const shot = shots[motiv];

  return (
    <div className="flex h-[720px] w-[1200px] items-center justify-center gap-10 bg-[#f2f2f0]">
      <div className={shot.phone ? "w-[840px]" : "w-[1060px]"}>
        <BrowserFrame domain={page.domain}>
          <ScaledFrame src={shot.laptop} title="" width={1280} height={800} />
        </BrowserFrame>
      </div>
      {shot.phone ? (
        <div className="w-[238px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.26)]">
          <PhoneFrame>
            <ScaledFrame src={shot.phone} title="" width={402} height={874} />
          </PhoneFrame>
        </div>
      ) : null}
    </div>
  );
}
