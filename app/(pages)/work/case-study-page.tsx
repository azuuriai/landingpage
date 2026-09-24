import type { ReactNode } from "react";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  BackLink,
  Chips,
  ContactBand,
  JsonLd,
} from "@/app/_components/site-chrome";
import { PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/app/_components/button-styles";
import type { ProjectData } from "@/app/projects-data";
import { absoluteUrl, pageMetadata, SITE_URL } from "@/app/seo";
import { ProjectMedia } from "./project-media";

export function caseStudyMetadata(project: ProjectData): Metadata {
  return pageMetadata({
    path: project.path,
    title: project.metaTitle,
    description: project.metaDescription,
  });
}

function caseStudyJsonLd(project: ProjectData) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${project.path}#webpage`,
        url: absoluteUrl(project.path),
        name: project.metaTitle,
        description: project.metaDescription,
        inLanguage: "de-AT",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}${project.path}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${SITE_URL}${project.path}#project`,
        name: project.name,
        description: project.summary,
        url: project.links[0].href,
        creator: { "@id": `${SITE_URL}/#person` },
      },
    ],
  };
}

export function ExternalButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group ${secondary ? SECONDARY_BUTTON : PRIMARY_BUTTON}`}
    >
      {children}
      <ArrowUpRight
        size={15}
        className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export function CaseStudyPage({
  project,
  closing,
  children,
}: {
  project: ProjectData;
  closing: string;
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={caseStudyJsonLd(project)} />
      <section className="mx-auto grid w-full max-w-[1180px] gap-12 px-6 pb-12 pt-8 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16 lg:px-10 lg:pb-20 lg:pt-10">
        <div className="rise min-w-0">
          <BackLink href="/work" label="Alle Projekte" />
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#006f68]">
            {project.eyebrow}
          </p>
          <h1 className="mt-5 max-w-[15ch] text-balance font-display text-[40px] font-semibold leading-[1] tracking-[-0.03em] text-[#181811] sm:text-[54px] lg:text-[58px]">
            {project.title}
          </h1>
          <p className="mt-6 max-w-[56ch] text-[16px] leading-7 text-[#6c6c61] sm:text-[17px] sm:leading-8">
            {project.description}
          </p>
          <Chips items={project.chips} />
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link, index) => (
              <ExternalButton key={link.href} href={link.href} secondary={index > 0}>
                {link.label}
              </ExternalButton>
            ))}
          </div>
        </div>
        <div className="rise min-w-0" style={{ animationDelay: "0.1s" }}>
          <ProjectMedia project={project} priority />
        </div>
      </section>
      {children}
      <ContactBand heading={closing} />
    </>
  );
}
