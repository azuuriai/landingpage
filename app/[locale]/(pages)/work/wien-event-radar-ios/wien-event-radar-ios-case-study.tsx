import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { WienEventRadarIosCopy } from "@/app/content/types";
import { CapabilityList, CaseSection, PhoneFeature, SectionHeading } from "../case-study-blocks";

function screen(name: string, alt: string) {
  return { src: `/case-studies/wien-event-radar-ios/${name}.jpg`, alt, width: 603, height: 1311 };
}

// The words live in app/content/<locale>/case-studies.ts; this file only
// decides which screen goes where.
export function WienEventRadarIosCaseStudy({ copy }: { copy: WienEventRadarIosCopy }) {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading title={copy.tabs.title} intro={copy.tabs.intro} />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {copy.tabs.items.map((item) => (
            <PhoneFeature
              key={item.image}
              still={screen(item.image, item.alt)}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              {copy.system.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              {copy.system.text}
            </p>
            <div className="mt-8">
              <CapabilityList items={copy.system.items} columns={1} />
            </div>
          </div>
          <div className="mx-auto w-full max-w-[280px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)]">
            <PhoneFrame>
              <Image
                src="/case-studies/wien-event-radar-ios/live-activity.jpg"
                alt={copy.system.liveActivityAlt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark title={copy.foundation.title} intro={copy.foundation.intro} />
        <div className="mt-12">
          <CapabilityList dark items={copy.foundation.items} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">{copy.foundation.stack}</p>
      </CaseSection>
    </>
  );
}
