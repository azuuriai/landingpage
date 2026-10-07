import Image from "next/image";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { ViennaEventRadarCopy } from "@/app/content/types";
import { IOS_APP_PATH } from "@/app/projects-data";
import { ProjectButton } from "../case-study-page";
import { CapabilityList, CaseSection, Feature, SectionHeading } from "../case-study-blocks";

function still(image: string, alt: string) {
  return { src: `/case-studies/vienna-event-radar/${image}.jpg`, alt, width: 1152, height: 720 };
}

// The words live in app/content/<locale>/case-studies.ts; this file only
// decides which image goes where.
export function ViennaEventRadarCaseStudy({ copy }: { copy: ViennaEventRadarCopy }) {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading title={copy.features.title} intro={copy.features.intro} />
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
          {copy.features.items.map((feature) => (
            <Feature
              key={feature.image}
              still={still(feature.image, feature.alt)}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading title={copy.platform.title} intro={copy.platform.intro} />
        <div className="mt-12">
          <CapabilityList items={copy.platform.items} />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark title={copy.backstage.title} intro={copy.backstage.intro} />
        <div className="mt-12">
          <CapabilityList dark items={copy.backstage.items} />
        </div>
        <p className="mt-8 text-[13.5px] leading-6 text-[#aeb8b3]">{copy.backstage.stack}</p>
      </CaseSection>

      <CaseSection tone="tinted">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              {copy.ios.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              {copy.ios.text}
            </p>
            <div className="mt-8">
              <ProjectButton link={{ label: copy.ios.button, href: IOS_APP_PATH, internal: true }} />
            </div>
          </div>
          <div className="flex items-end justify-center gap-[6%]">
            {[
              { screen: "entdecken", alt: copy.ios.discoverAlt },
              { screen: "karte", alt: copy.ios.mapAlt },
            ].map(({ screen, alt }, index) => (
              <div
                key={screen}
                className={`w-[44%] max-w-[190px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.22)] ${index === 1 ? "mb-[8%]" : ""}`}
              >
                <PhoneFrame>
                  <Image
                    src={`/case-studies/wien-event-radar-ios/${screen}.jpg`}
                    alt={alt}
                    fill
                    sizes="190px"
                    className="object-cover"
                  />
                </PhoneFrame>
              </div>
            ))}
          </div>
        </div>
      </CaseSection>
    </>
  );
}
