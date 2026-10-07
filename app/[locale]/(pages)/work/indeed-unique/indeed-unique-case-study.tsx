import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import type { IndeedUniqueCopy } from "@/app/content/types";
import { RECORDINGS } from "@/app/media";
import {
  CapabilityList,
  CaseSection,
  FigureRow,
  SectionHeading,
  VideoFeature,
} from "../case-study-blocks";

// The words live in app/content/<locale>/case-studies.ts; this file only
// decides which recording goes where.
export function IndeedUniqueCaseStudy({ copy }: { copy: IndeedUniqueCopy }) {
  return (
    <>
      <CaseSection tone="tinted">
        <SectionHeading title={copy.tour.title} intro={copy.tour.intro} stacked />
        {/* Four recordings of the live site side by side, one size each. */}
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-5">
          <VideoFeature recording={RECORDINGS.indeedUniqueEntry} {...copy.tour.entry} />
          <VideoFeature recording={RECORDINGS.indeedUniqueNews} {...copy.tour.news} />
          <VideoFeature recording={RECORDINGS.indeedUniqueArchive} {...copy.tour.archive} />
          <VideoFeature recording={RECORDINGS.indeedUniqueBooking} {...copy.tour.booking} />
        </div>
      </CaseSection>

      <CaseSection tone="dark">
        <SectionHeading dark title={copy.cms.title} />
        <div className="mt-12">
          <FigureRow items={copy.cms.figures} />
        </div>
        <div className="mt-12">
          <CapabilityList dark items={copy.cms.tools} />
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading title={copy.booking.title} intro={copy.booking.intro} />
        <div className="mt-12">
          <CapabilityList items={copy.booking.items} />
        </div>
      </CaseSection>

      <CaseSection tone="tinted">
        <div className="grid items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(220px,300px)] lg:gap-20">
          <div>
            <h2 className="text-pretty font-display text-[31px] font-semibold leading-[1.04] tracking-[-0.025em] text-[#181811] sm:text-[42px]">
              {copy.mobile.title}
            </h2>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-7 text-[#5f5f56] sm:text-[16px]">
              {copy.mobile.text}
            </p>
          </div>
          <div className="mx-auto w-full max-w-[260px] drop-shadow-[0_30px_40px_rgba(17,18,17,0.22)]">
            <PhoneFrame>
              <AutoplayVideo
                recording={RECORDINGS.indeedUniqueMobile}
                label={copy.mobile.label}
                className="h-full w-full object-cover"
              />
            </PhoneFrame>
          </div>
        </div>
      </CaseSection>

      <CaseSection>
        <SectionHeading title={copy.operations.title} intro={copy.operations.intro} />
        <div className="mt-12">
          <CapabilityList items={copy.operations.items} />
        </div>
      </CaseSection>
    </>
  );
}
