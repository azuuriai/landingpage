import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { RECORDINGS } from "@/app/media";
import { operationsApp } from "@/app/projects-data";
import { CaseStudyPage, caseStudyMetadata } from "../case-study-page";
import { OperationsAppCaseStudy } from "./operations-app-case-study";

export const metadata = caseStudyMetadata(operationsApp);

export default function OperationsAppPage() {
  return (
    <CaseStudyPage
      study={operationsApp}
      media={
        <div className="mx-auto w-[62%] max-w-[300px] drop-shadow-[0_34px_44px_rgba(17,18,17,0.26)]">
          <PhoneFrame>
            <AutoplayVideo
              recording={RECORDINGS.operationsAppTour}
              label="Operations-App: Monitor, Social Studio mit vier Slides und Top Picks"
              preload="auto"
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      }
      closing="Dein Team braucht ein Werkzeug für wiederkehrende Abläufe? Schreib mir."
    >
      <OperationsAppCaseStudy />
    </CaseStudyPage>
  );
}
