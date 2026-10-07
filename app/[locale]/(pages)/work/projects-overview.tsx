import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { ICON_UP, PRIMARY_BUTTON, TEXT_LINK } from "@/app/_components/button-styles";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { withName } from "@/app/site";
import type { ShowcaseEntry, UiCopy } from "@/app/content/types";
import { BrowserFrame } from "./project-media";

// Equal entries in three columns: what each one is and does, never whose it is.
export function ProjectsOverview({ entries, ui }: { entries: ShowcaseEntry[]; ui: UiCopy }) {
  return (
    <section className="border-t border-[#deded8]">
      <div className="mx-auto grid w-full max-w-[1180px] gap-x-10 gap-y-16 px-6 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-3 lg:px-10 lg:py-20">
        {entries.map((entry) => (
          <article key={entry.id} className="reveal-on-scroll flex min-w-0 flex-col">
            <EntryMedia entry={entry} ui={ui} />

            <h2 className="mt-8 font-display text-[26px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#181811]">
              {entry.name}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-[#5f5f56]">{entry.summary}</p>

            <dl className="mt-6 border-t border-[#deded8]">
              {entry.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-b border-[#e6e6e1] py-2.5"
                >
                  <dt className="text-[13px] leading-5 text-[#6c6c61]">{fact.label}</dt>
                  <dd className="text-[14px] leading-5 text-[#181811]">{fact.value}</dd>
                </div>
              ))}
            </dl>

            {/* mt-auto keeps every entry's actions on one line. */}
            <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
              <Link href={entry.href} className={PRIMARY_BUTTON}>
                {ui.learnMore}
              </Link>
              {entry.live ? (
                <a
                  href={entry.live.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${TEXT_LINK} text-[14px] text-[#006f68]`}
                >
                  {entry.live.label}
                  <ArrowUpRight size={14} aria-hidden="true" className={ICON_UP} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Same stage height for every entry, so the cards line up.
function EntryMedia({ entry, ui }: { entry: ShowcaseEntry; ui: UiCopy }) {
  const { media } = entry;

  if (media.kind === "app") {
    return (
      <div className="flex aspect-[5/4] items-end justify-center">
        <div className="h-full drop-shadow-[0_26px_32px_rgba(17,18,17,0.24)]">
          <PhoneFrame className="h-full">
            <AutoplayVideo
              recording={media.phone}
              label={withName(ui.appRecording, entry.name)}
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex aspect-[5/4] items-center">
      {/* Every browser frame gets the full width; a phone recording overlaps
          its lower right corner instead of shrinking it. */}
      <div className="w-full">
        <BrowserFrame domain={media.domain}>
          <div className="relative aspect-[16/10] overflow-hidden bg-[#fbf9f7]">
            <AutoplayVideo
              recording={media.desktop}
              label={withName(ui.siteRecording, entry.name)}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </div>
        </BrowserFrame>
      </div>
      {media.phone ? (
        <div className="absolute bottom-[2%] right-[-4%] w-[24%] drop-shadow-[0_22px_28px_rgba(17,18,17,0.24)]">
          <PhoneFrame>
            <AutoplayVideo
              recording={media.phone}
              label={withName(ui.phoneRecording, entry.name)}
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      ) : null}
    </div>
  );
}
