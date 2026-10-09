import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { MissionControlCopy } from "@/app/content/types";
import { CapabilityList, CaseSection, Feature, FigureRow, SectionHeading } from "../case-study-blocks";

// Stills of the demo mode (headless Chrome at 2880×1800, saved at
// 1600×1000). The words live in app/content/<locale>/case-studies.ts; this
// file only decides which screen goes where.
function screen(name: string, alt: string) {
  return { src: `/case-studies/mission-control/${name}.jpg`, alt, width: 1600, height: 1000 };
}

export function MissionControlCaseStudy({ copy }: { copy: MissionControlCopy }) {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading stacked title={copy.screens.title} intro={copy.screens.intro} />
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:gap-x-10">
          {copy.screens.items.map((item) => (
            <Feature
              key={item.image}
              still={screen(item.image, item.alt)}
              title={item.title}
              text={item.text}
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              {copy.mobile.title}
            </h2>
            <div className="mt-8">
              <CapabilityList items={copy.mobile.items} columns={1} />
            </div>
          </div>
          {/* The phone screen of the showreel's Telegram scene (cut from the
              1080p frame at 53.3 s, the film's own corners and island
              blacked out), standing free in the site's own bezel. */}
          <div className="mx-auto w-[62%] max-w-[280px] drop-shadow-[0_34px_44px_rgba(17,18,17,0.26)]">
            <PhoneFrame>
              <Image
                src="/case-studies/mission-control/telegram-chat.jpg"
                alt={copy.mobile.alt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </CaseSection>

      <CaseSection tone="tinted">
        <SectionHeading stacked title={copy.guards.title} />
        <div className="mt-12">
          <CapabilityList items={copy.guards.items} />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark stacked title={copy.foundation.title} />
        <div className="mt-10">
          <FigureRow items={copy.foundation.figures} />
        </div>
        <div className="mt-10">
          <CapabilityList dark items={copy.foundation.items} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">{copy.foundation.stack}</p>
      </CaseSection>
    </>
  );
}
