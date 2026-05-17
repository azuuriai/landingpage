"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, X } from "lucide-react";

type Panel = {
  id: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  headline: string;
  description: string;
  chips: string[];
  details: string[];
  detailHref?: string;
};

const panels: Panel[] = [
  {
    id: "work",
    title: "Vienna Event Radar",
    subtitle: "Full-stack product case study",
    eyebrow: "Featured work",
    headline: "From idea to shipped product.",
    description:
      "Built from zero to launch with Next.js, Supabase, auth, RLS, admin flows, AI-assisted research and Vercel deployment.",
    chips: ["Full-stack", "AI pipeline", "iOS extension"],
    details: [
      "Full-stack web product built from zero to launch.",
      "Supabase auth, database structure and RLS policies.",
      "AI-assisted event research pipeline with admin review workflows.",
      "Mobile-first dashboard, SEO/security polish and Vercel deployment.",
      "Extended toward a companion iOS app experience.",
    ],
    detailHref: "/work",
  },
  {
    id: "services",
    title: "Services",
    subtitle: "Websites, MVPs and AI workflows",
    eyebrow: "What I build",
    headline: "Premium digital products without handoff drag.",
    description:
      "Mobile-first websites, MVPs, internal tools, AI automations and focused UX/UI audits for founders and small teams.",
    chips: ["Landing pages", "MVPs", "Automations"],
    details: [
      "Premium mobile-first websites and landing pages with strong first-impression design.",
      "MVPs and full-stack web apps with auth, data, dashboard and deployment.",
      "AI automations and internal tools that reduce repetitive work.",
      "UX/UI and conversion audits for pages that need clearer structure and trust.",
    ],
    detailHref: "/services",
  },
  {
    id: "process",
    title: "Process",
    subtitle: "From rough idea to launch",
    eyebrow: "How it works",
    headline: "Shape, design, build, launch.",
    description:
      "A compact workflow that clarifies scope, designs the interaction, ships the stack and iterates from real feedback.",
    chips: ["Shape", "Design", "Build", "Launch"],
    details: [
      "Shape the offer, target user, core workflow and launch scope.",
      "Design the interface, interaction rhythm and responsive system.",
      "Build with a clean stack and AI-assisted implementation speed.",
      "Launch, check SEO/security basics and iterate from real feedback.",
    ],
    detailHref: "/process",
  },
  {
    id: "about",
    title: "About",
    subtitle: "Product taste and full-stack execution",
    eyebrow: "Lukas Kaffer",
    headline: "Product taste with implementation depth.",
    description:
      "I combine product thinking, UX/UI, full-stack implementation and AI-native workflows to move ideas into polished reality.",
    chips: ["Next.js", "Supabase", "Design engineering"],
    details: [
      "Product thinking before implementation: what should exist, why and for whom.",
      "Design engineering taste: calm interfaces, crisp layout and motion restraint.",
      "Full-stack execution with Next.js, React, TypeScript, Supabase and Vercel.",
      "AI-native workflows for faster building, research and operational systems.",
    ],
    detailHref: "/about",
  },
  {
    id: "contact",
    title: "Contact",
    subtitle: "Start a focused build",
    eyebrow: "Start here",
    headline: "Have a rough product idea?",
    description:
      "Send the idea, current bottleneck or page that needs to work harder. I will help shape the next move.",
    chips: ["Email", "Project brief", "Next step"],
    details: [
      "Best starting point: one paragraph about what you want to launch.",
      "Include who it is for, what exists today and where the friction is.",
      "For small projects, the first useful step is usually a focused scope and prototype.",
      "Email: hello@lukaskaffer.com",
    ],
    detailHref: "/contact",
  },
];

export default function Home() {
  const [activeId, setActiveId] = useState(panels[0].id);
  const [modalPanel, setModalPanel] = useState<Panel | null>(null);
  const activePanel = panels.find((panel) => panel.id === activeId) ?? panels[0];

  useEffect(() => {
    if (!modalPanel) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setModalPanel(null);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [modalPanel]);

  return (
    <main className="min-h-svh overflow-hidden bg-[#f7f8f6] text-[#1b1c1a]">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(52,124,118,0.065),transparent_31%),linear-gradient(180deg,rgba(255,255,255,0.84),rgba(247,248,246,0.9))]" />
      <div className="relative mx-auto grid min-h-svh w-full max-w-[1160px] grid-cols-1 px-6 py-8 lg:grid-cols-[410px_1fr] lg:items-center lg:gap-24 lg:px-0 lg:py-0">
        <section className="flex flex-col justify-center pt-10 lg:min-h-[720px] lg:pt-0">
          <p className="text-[21px] font-semibold tracking-[-0.03em] text-[#1b1c1a]">
            Lukas Kaffer
          </p>
          <h1 className="mt-3 max-w-[360px] text-[29px] font-medium leading-[1.25] tracking-[-0.045em] text-[#50534f]">
            AI-native product builder crafting polished digital products.
          </h1>
          <p className="mt-6 max-w-[335px] text-[15px] leading-7 text-[#747872]">
            Websites, MVPs, internal tools and AI-powered workflows from concept to launch.
          </p>

          <div className="mt-8 flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#9a9e98]">
            <span className="h-px w-8 bg-[#d9ddd8]" />
            Studio index
          </div>

          <nav className="mt-10 flex flex-col gap-2" aria-label="Portfolio preview controls">
            {panels.map((item, index) => {
              const isActive = item.id === activePanel.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`group grid min-h-[64px] w-full grid-cols-[38px_1fr_28px] items-center gap-3 rounded-[20px] border px-3 py-3 text-left transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#347c76]/18 ${
                    isActive
                      ? "border-[#d9ddd8] bg-white/88 text-[#1b1c1a] shadow-[0_18px_54px_rgba(20,24,22,0.07)]"
                      : "border-transparent text-[#9a9e98] hover:border-[#e1e4df] hover:bg-white/62 hover:text-[#1b1c1a]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-semibold transition ${
                      isActive ? "bg-[#1b1c1a] text-white" : "bg-[#edf0ec] text-[#9a9e98]"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold tracking-[-0.02em]">
                      {item.title}
                    </span>
                    <span className="mt-1 hidden text-[12px] font-medium text-[#9fa39d] sm:block">
                      {item.subtitle}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={15}
                    className={`transition ${
                      isActive
                        ? "opacity-70"
                        : "opacity-35 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </section>

        <section className="relative mt-14 min-h-[420px] lg:mt-0 lg:min-h-[720px]" aria-label="Interactive product desk preview">
          <DeviceDesk panel={activePanel} onOpenDetails={() => setModalPanel(activePanel)} />
        </section>
      </div>

      <footer className="fixed bottom-5 right-6 hidden items-center gap-5 text-[13px] font-medium text-[#a2a6a0] lg:flex">
        <a className="transition hover:text-[#1b1c1a]" href="mailto:hello@lukaskaffer.com">
          Email
        </a>
        <a className="transition hover:text-[#1b1c1a]" href="https://viennaeventradar.at">
          Product
        </a>
        <button
          type="button"
          onClick={() => setModalPanel(activePanel)}
          className="transition hover:text-[#1b1c1a]"
        >
          Details
        </button>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/62 text-[#747872]">
          <Mail size={14} />
        </span>
      </footer>

      {modalPanel ? <DetailModal panel={modalPanel} onClose={() => setModalPanel(null)} /> : null}
    </main>
  );
}

function DeviceDesk({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <div className="relative mx-auto flex min-h-[520px] max-w-[720px] items-center justify-center lg:min-h-[720px] xl:max-w-[820px] xl:translate-x-8 2xl:translate-x-16">
      <div className="absolute left-1/2 top-[43%] h-[460px] w-[880px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e1e6e2] blur-3xl" />
      <div className="absolute bottom-[64px] left-[52%] h-[138px] w-[870px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(155,165,160,0.22),rgba(247,248,246,0)_66%)]" />
      <div className="absolute bottom-[110px] left-[52%] h-px w-[820px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d9ddd8] to-transparent" />

      <div className="relative w-full max-w-[720px] xl:max-w-[760px]">
        <div className="absolute -left-1 bottom-[72px] z-20 w-[128px] rotate-[-2deg] sm:-left-8 sm:w-[148px] lg:-left-12">
          <IPhone panel={panel} onOpenDetails={onOpenDetails} />
        </div>

        <div className="relative z-10 ml-auto w-[89%] max-w-[620px] xl:max-w-[660px]">
          <MacBook panel={panel} onOpenDetails={onOpenDetails} />
        </div>
      </div>
    </div>
  );
}

function MacBook({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <div className="relative">
      <div className="relative rounded-t-[19px] border-[7px] border-[#111211] bg-[#111211] shadow-[0_32px_96px_rgba(17,18,17,0.24)]">
        <span className="absolute left-1/2 top-1.5 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#2a2b29] ring-1 ring-white/10" />
        <div className="aspect-[16/10] overflow-hidden rounded-[10px] bg-[radial-gradient(circle_at_82%_18%,rgba(52,124,118,0.18),transparent_34%),linear-gradient(135deg,#fbfbf8_0%,#eef2ee_56%,#dcebe8_100%)] p-[22px]">
          <div className="relative h-full overflow-hidden rounded-[18px] border border-white/72 bg-white/82 p-4 shadow-[0_20px_54px_rgba(17,24,22,0.13)] backdrop-blur">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/54 to-transparent" />
            <ScreenPanel
              key={`desktop-${panel.id}`}
              panel={panel}
              onOpenDetails={onOpenDetails}
            />
          </div>
        </div>
      </div>
      <div className="relative -mx-8 h-[20px] rounded-b-[30px] bg-gradient-to-b from-[#e2e4df] via-[#cfd3cc] to-[#b8beb5] shadow-[0_22px_48px_rgba(17,18,17,0.14)]">
        <div className="absolute left-1/2 top-0 h-[6px] w-28 -translate-x-1/2 rounded-b-full bg-[#b8beb5] shadow-[inset_0_-1px_2px_rgba(255,255,255,0.35)]" />
        <div className="absolute inset-x-8 top-0 h-px bg-white/70" />
      </div>
      <div className="mx-auto h-[62px] w-[84%] rounded-b-[42px] bg-[radial-gradient(ellipse_at_top,rgba(135,145,139,0.2),transparent_64%)]" />
    </div>
  );
}

function IPhone({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpenDetails}
      className="group relative block w-full rounded-[34px] bg-[linear-gradient(135deg,#cdd2cc,#f5f6f3_24%,#272826_29%,#10110f_100%)] p-[2px] text-left shadow-[0_30px_74px_rgba(17,18,17,0.22)] transition hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#347c76]/18"
      aria-label={`Open details for ${panel.title}`}
    >
      <span className="absolute -left-[3px] top-[23%] h-10 w-[3px] rounded-l-full bg-[#c4cac2]" />
      <span className="absolute -left-[3px] top-[36%] h-8 w-[3px] rounded-l-full bg-[#151614]" />
      <span className="absolute -right-[3px] top-[34%] h-14 w-[3px] rounded-r-full bg-[#151614]" />
      <div className="rounded-[33px] bg-[#0d0d0c] p-[5px]">
        <div className="relative aspect-[9/19.7] overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,#ffffff_0%,#eef1ed_50%,#d7efeb_152%)] px-3 pb-3 pt-4">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/62 to-transparent" />
          <div className="absolute left-1/2 top-2.5 z-20 h-[15px] w-[58px] -translate-x-1/2 rounded-full bg-[#10100f] shadow-[inset_10px_0_18px_rgba(255,255,255,0.04)]" />
          <div className="absolute left-[calc(50%+20px)] top-[15px] z-20 h-1.5 w-1.5 rounded-full bg-[#2c2c2b]" />
          <PhoneScreen key={`phone-${panel.id}`} panel={panel} />
        </div>
      </div>
    </button>
  );
}

function PhoneScreen({ panel }: { panel: Panel }) {
  return (
    <div className="flex h-full animate-[softReveal_0.34s_cubic-bezier(0.22,1,0.36,1)_both] flex-col justify-between pt-8">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[7px] font-bold tracking-[-0.02em] text-[#1b1c1a]/80">9:41</span>
          <span className="h-1.5 w-6 rounded-full bg-[#1b1c1a]/18" />
        </div>
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-[#347c76]" />
          <span className="text-[8px] font-bold text-[#1b1c1a]">{panel.eyebrow}</span>
        </div>
        <h3 className="text-[16px] font-semibold leading-[0.98] tracking-[-0.05em] text-[#1b1c1a]">
          {panel.title}
        </h3>
        <p className="mt-3 text-[9px] leading-4 text-[#6b6f69]">{panel.subtitle}</p>
      </div>

      <div className="space-y-1.5">
        {panel.chips.slice(0, 3).map((chip, index) => (
          <div
            key={chip}
            className="rounded-[13px] border border-white/68 bg-white/54 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.58)]"
          >
            <div className="mb-1 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b1c1a]/28" />
              <span className="text-[7px] font-semibold text-[#747872]">0{index + 1}</span>
            </div>
            <span className="text-[8px] font-semibold text-[#5f645e]">{chip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenPanel({ panel, onOpenDetails }: { panel: Panel; onOpenDetails: () => void }) {
  return (
    <div className="relative flex h-full animate-[softReveal_0.34s_cubic-bezier(0.22,1,0.36,1)_both] flex-col">
      <div className="mb-4 flex items-center justify-between rounded-full border border-white/64 bg-white/34 px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.62)]">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#347c76]" />
          <span className="text-[11px] font-semibold text-[#1b1c1a]">{panel.eyebrow}</span>
        </div>
        <div className="hidden items-center gap-1.5 sm:flex">
          <span className="h-1.5 w-8 rounded-full bg-[#1b1c1a]/10" />
          <span className="h-1.5 w-5 rounded-full bg-[#1b1c1a]/10" />
        </div>
        <button
          type="button"
          onClick={onOpenDetails}
          className="rounded-full border border-[#e1e4df] bg-white/72 px-3 py-1 text-[10px] font-semibold text-[#747872] transition hover:bg-white hover:text-[#1b1c1a]"
        >
          More details
        </button>
      </div>

      <div className="grid flex-1 grid-cols-[1fr_96px] gap-3">
        <div className="flex flex-col justify-center rounded-[18px] border border-[#e7ebe5] bg-white/48 px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.72)]">
          <p className="max-w-[275px] text-[13px] font-medium text-[#747872]">{panel.subtitle}</p>
          <h2 className="mt-2 max-w-[350px] text-[31px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#1b1c1a]">
            {panel.headline}
          </h2>
          <p className="mt-5 max-w-[350px] text-[13px] leading-6 text-[#646963]">
            {panel.description}
          </p>
        </div>

        <div className="hidden flex-col gap-3 md:flex">
          <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-white/58 bg-white/36 p-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8f948e]">
              Scope
            </span>
            <span className="text-[26px] font-semibold tracking-[-0.06em] text-[#1b1c1a]">01</span>
          </div>
          <div className="flex flex-1 flex-col justify-between rounded-[18px] border border-white/58 bg-[#1b1c1a]/[0.05] p-3">
            <span className="text-[9px] font-semibold uppercase tracking-[0.13em] text-[#8f948e]">
              Ship
            </span>
            <span className="h-7 w-7 rounded-full bg-[#347c76]/82 shadow-[0_10px_24px_rgba(52,124,118,0.12)]" />
          </div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {panel.chips.slice(0, 3).map((label) => (
          <button
            key={label}
            type="button"
            onClick={onOpenDetails}
            className="rounded-[14px] border border-[#e7ebe5] bg-[#f6f8f5] px-3 py-4 text-left transition hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_12px_32px_rgba(20,24,22,0.07)] focus:outline-none focus:ring-2 focus:ring-[#347c76]/16"
          >
            <span className="text-[11px] font-semibold text-[#626762]">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function DetailModal({ panel, onClose }: { panel: Panel; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex animate-[modalFade_0.22s_ease-out_both] items-center justify-center bg-[#f7f8f6]/60 px-5 backdrop-blur-[14px]"
      onClick={onClose}
    >
      <article
        className="w-full max-w-[660px] animate-[modalIn_0.34s_cubic-bezier(0.22,1,0.36,1)_both] overflow-hidden rounded-[34px] border border-[#d9ddd8] bg-white/94 shadow-[0_34px_130px_rgba(20,24,22,0.14)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="border-b border-[#e7ebe5] bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(238,242,238,0.7))] p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#969b95]">
                {panel.eyebrow}
              </p>
              <h2 className="mt-3 max-w-[500px] text-[34px] font-semibold leading-[1] tracking-[-0.05em] text-[#1b1c1a] sm:text-[44px]">
                {panel.headline}
              </h2>
            </div>
            <button
              type="button"
              aria-label="Close modal"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d9ddd8] bg-white/70 text-[#747872] transition hover:bg-[#1b1c1a] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#347c76]/16"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-5 max-w-[540px] text-[16px] leading-8 text-[#646963]">
            {panel.description}
          </p>
        </div>

        <div className="p-5 sm:p-6">
          <div className="grid gap-3">
            {panel.details.map((detail, index) => (
              <div
                key={detail}
                className="grid grid-cols-[34px_1fr] gap-3 rounded-[20px] border border-[#e7ebe5] bg-white/62 px-4 py-4 text-[15px] font-medium leading-6 text-[#50544f]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#eef1ed] text-[11px] font-semibold text-[#747872]">
                  {index + 1}
                </span>
                <span>{detail}</span>
              </div>
            ))}
          </div>

          {panel.id === "contact" ? (
            <a
              href="mailto:hello@lukaskaffer.com"
              className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#1b1c1a] px-5 text-[14px] font-semibold text-white transition hover:bg-black"
            >
              Write an email
            </a>
          ) : null}
        </div>
      </article>
    </div>
  );
}
