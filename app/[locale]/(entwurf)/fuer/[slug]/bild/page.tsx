import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrowserFrame } from "@/app/[locale]/(pages)/work/project-media";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { ScaledFrame } from "@/app/_components/scaled-frame";
import { isVariante, PALETTES, varianteAus } from "@/app/_fuer/dance-it/farben";
import { fuerPages, getFuerPage } from "@/app/fuer-data";
import { resolveLocale } from "@/app/locale";

// Pictures for the personal mail, captured at 1200 × 720 with
// scripts/fuer-bild.sh. Lukas' choice: the personal page shows the
// homepage only, the mail carries a few pictures of further pages.
//   ?motiv=start      homepage on laptop and phone (default)
//   ?motiv=woche      the timetable on a laptop
//   ?motiv=anmeldung  course page with booking on laptop and phone
//   ?variante=sand    a colour variant of the draft, local servers only
//                     (see app/_fuer/dance-it/farben.ts); the picture's
//                     ground follows the draft's palette.
// Local helper, noindex, German only like the pages it pictures.
type Props = {
  params: Promise<{ locale: string; slug: string }>;
  searchParams: Promise<{ motiv?: string; variante?: string }>;
};

export const dynamicParams = false;

// German only: the locale is filled in here, so no English version is
// generated and /en/fuer/… is a 404 behind the redirect in next.config.ts.
export function generateStaticParams() {
  return fuerPages.map((page) => ({ locale: "de", slug: page.slug }));
}

export const metadata: Metadata = {
  title: "Entwurfsbild",
  robots: { index: false, follow: false, nocache: true },
  alternates: { canonical: null },
};

type Motiv = "start" | "woche" | "anmeldung";

export default async function BildPage(props: Props) {
  const locale = await resolveLocale(props);
  const { slug } = await props.params;
  const { motiv: requested, variante: requestedVariante } = await props.searchParams;
  const page = getFuerPage(slug);
  if (!page || locale !== "de") notFound();
  const draft = `/fuer/${page.slug}/entwurf`;
  const motiv: Motiv = requested === "woche" || requested === "anmeldung" ? requested : "start";
  // The switch is local: a Vercel build pictures the fixed variant. The
  // framed pages read the same parameter, so it is passed on to them.
  const lokal = !process.env.VERCEL;
  const palette = PALETTES[varianteAus(requestedVariante, lokal)];
  const query = lokal && isVariante(requestedVariante) ? `variante=${requestedVariante}` : "";
  const withVariante = (url: string) => (query ? `${url}${url.includes("?") ? "&" : "?"}${query}` : url);

  const shots: Record<Motiv, { laptop: string; phone?: string }> = {
    start: { laptop: draft, phone: draft },
    woche: { laptop: `${draft}?ansicht=stundenplan` },
    anmeldung: {
      laptop: `${draft}/kurse/paartanz?ansicht=anmelden`,
      phone: `${draft}/kurse/paartanz?ansicht=anmelden`,
    },
  };
  const shot = {
    laptop: withVariante(shots[motiv].laptop),
    phone: shots[motiv].phone ? withVariante(shots[motiv].phone) : undefined,
  };

  return (
    <div className="flex h-[720px] w-[1200px] items-center justify-center gap-10" style={{ background: palette.picture }}>
      <div className={`rounded-[12px] ${shot.phone ? "w-[840px]" : "w-[1060px]"}`} style={{ boxShadow: palette.pictureShadow }}>
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
