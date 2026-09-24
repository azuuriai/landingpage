import type { ReactNode } from "react";
import { AutoplayVideo } from "@/app/_components/autoplay-video";
import { PhoneFrame } from "@/app/_components/phone-frame";
import { projectDomain, type ProjectData } from "@/app/projects-data";

export function BrowserFrame({ domain, children }: { domain: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-[#181811]/10 bg-[#f6f6f4] shadow-[0_34px_90px_-40px_rgba(17,18,17,0.45)]">
      <div className="flex items-center justify-center border-b border-black/[0.06] py-2">
        <span className="rounded-full bg-black/[0.05] px-4 py-0.5 text-[11px] text-[#5f5f56]">
          {domain}
        </span>
      </div>
      {children}
    </div>
  );
}

// Desktop recording in a browser frame with the phone version leaning in front
// of it — the same composition as the homepage device desk, at page scale.
// Without `withPhone` the browser stands alone (the phone clip of Vienna Event
// Radar is the iOS app, which has its own page).
export function ProjectMedia({
  project,
  priority = false,
  withPhone = true,
}: {
  project: ProjectData;
  priority?: boolean;
  withPhone?: boolean;
}) {
  const domain = projectDomain(project);

  return (
    <div className={withPhone ? "relative pb-[9%] pr-[7%] sm:pr-[11%]" : "relative"}>
      <BrowserFrame domain={domain}>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#fbf9f7]">
          <AutoplayVideo
            recording={project.desktop}
            label={`${project.name} – Aufnahme der Website am Desktop`}
            preload={priority ? "auto" : "metadata"}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        </div>
      </BrowserFrame>
      {withPhone ? (
        <div className="absolute bottom-0 right-0 w-[23%] min-w-[92px] max-w-[190px] drop-shadow-[0_26px_32px_rgba(17,18,17,0.26)]">
          <PhoneFrame>
            <AutoplayVideo
              recording={project.phone}
              label={`${project.name} – Aufnahme auf dem iPhone`}
              className="h-full w-full object-cover"
            />
          </PhoneFrame>
        </div>
      ) : null}
    </div>
  );
}
