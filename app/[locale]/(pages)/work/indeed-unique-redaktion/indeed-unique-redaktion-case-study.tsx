import type { IndeedUniqueStudioCopy } from "@/app/content/types";
import { CapabilityList, CaseSection, Feature, FigureRow, SectionHeading } from "../case-study-blocks";

// Stills of the production studio (light theme, 1152×720 at 2x, saved at
// 1600×1000). The words live in app/content/<locale>/case-studies.ts; this
// file only decides which screen goes where.
function screen(name: string, alt: string) {
  return { src: `/case-studies/indeed-unique-redaktion/${name}.jpg`, alt, width: 1600, height: 1000 };
}

export function IndeedUniqueStudioCaseStudy({ copy }: { copy: IndeedUniqueStudioCopy }) {
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
