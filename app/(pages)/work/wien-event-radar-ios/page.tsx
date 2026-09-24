import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { RECORDINGS } from "@/app/media";
import { iosApp } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { WienEventRadarIosCaseStudy } from "./wien-event-radar-ios-case-study";

export const metadata = caseStudyMetadata(iosApp);

export default function WienEventRadarIosPage() {
  return (
    <CaseStudyPage
      study={iosApp}
      media={
        <div className="mx-auto w-[62%] max-w-[300px] drop-shadow-[0_34px_44px_rgba(17,18,17,0.26)]">
          <PhoneFrame>
            <AutoplayVideo
              recording={RECORDINGS.viennaEventRadarApp}
              label="Wien Event Radar für iOS: Entdecken, Eventdetails, Merken und Karte"
              preload="auto"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      }
      closing="Dein Produkt gehört aufs iPhone? Schreib mir."
    >
      <WienEventRadarIosCaseStudy />
    </CaseStudyPage>
  );
}
