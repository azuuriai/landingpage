import Image from "next/image";
import type { OperationsAppCopy } from "@/app/content/types";
import { CapabilityList, CaseSection, FigureRow, PhoneFeature, SectionHeading } from "../case-study-blocks";

function screen(name: string, alt: string) {
  return { src: `/case-studies/operations-app/${name}.jpg`, alt, width: 603, height: 1311 };
}

// The words live in app/content/<locale>/case-studies.ts; this file only
// decides which screen goes where.
export function OperationsAppCaseStudy({ copy }: { copy: OperationsAppCopy }) {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading stacked title={copy.areas.title} intro={copy.areas.intro} />
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {copy.areas.items.map((item) => (
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
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              {copy.studio.title}
            </h2>
            <div className="mt-8">
              <CapabilityList items={copy.studio.items} columns={1} />
            </div>
          </div>
          <StoryStrip stories={copy.studio.stories} />
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

// Three real story exports, the middle one raised, like a carousel in motion.
function StoryStrip({ stories }: { stories: OperationsAppCopy["studio"]["stories"] }) {
  return (
    <div className="grid min-w-0 grid-cols-3 items-center gap-3 sm:gap-5">
      {stories.map((story, index) => (
        <figure
          key={story.image}
          className={`overflow-hidden rounded-[14px] border border-[#181811]/10 bg-[#f6f6f4] shadow-[0_34px_90px_-50px_rgba(17,18,17,0.5)] ${
            index === 1 ? "-translate-y-6 sm:-translate-y-10" : ""
          }`}
        >
          <Image
            src={`/case-studies/operations-app/${story.image}.jpg`}
            alt={story.alt}
            width={720}
            height={1280}
            sizes="(min-width: 1024px) 220px, 30vw"
            className="block h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}
