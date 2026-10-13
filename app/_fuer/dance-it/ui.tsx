"use client";

import { useEffect, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { isLocalHost, paletteVars, VARIANTE, varianteAus, type Variante } from "./farben";

// Shared pieces of the Dance it draft, second version: a daylight dance
// floor. Orange is a signal only (the moving foot, active states, a few
// numbers). Tokens, see Business Studio OS/…/dance-it/designplan.md:
// the ground comes from farben.ts (--di-ground, --di-band, --di-floor; warm
// white or sand, see there), Weiss, Graphit #1e1d1c, Stein #8c8783, Orange
// #ff5a14, Orange for small text #c2410c. Interactive controls are pills,
// cards have a 16 px radius.

export const ORANGE = "#ff5a14";
// Orange for large type on the light ground (3:1) and for button text
// and small type (4.5:1); the bright brand orange stays for signals.
export const ORANGE_LARGE = "#ea4c0c";
export const ORANGE_TEXT = "#c2410c";

// The outline of every button, taken from Indeed Unique (stage.css,
// .ft-social-glow): a second layer that shows only as a 1.5 px frame
// (mask) and is uncovered from left to right on hover, then covered
// again on leave, 700 ms, easing out. Here in orange; the frame follows
// the button's own radius.
export function Ring() {
  return <span aria-hidden="true" className="di-glow" />;
}

export const DISPLAY: CSSProperties = {
  fontFamily: "var(--font-di-display), Arial Narrow, sans-serif",
};

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="inline-flex flex-col leading-none" aria-label="Dance it, Tanzschule">
      <span className="text-[32px] font-extrabold tracking-[-0.02em]" style={DISPLAY}>
        <span style={{ color: ORANGE }}>dance</span>
        <span className={`ml-[0.12em] ${light ? "text-white/55" : "text-[#8c8783]"}`}>it</span>
      </span>
      <span className={`mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.2em] ${light ? "text-white/80" : "text-[#1e1d1c]"}`}>
        Tanzschule
      </span>
    </span>
  );
}

// Primary action: a light pill with orange text; on hover its outline is
// drawn in orange (see Ring).
export function ActionLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "quiet" }) {
  if (variant === "quiet") {
    return (
      <Link href={href} className="di-link inline-flex items-center gap-2 text-[16px] font-semibold">
        {children}
        <ArrowRight size={17} aria-hidden="true" className="di-arrow" />
      </Link>
    );
  }
  return (
    <Link href={href} className="di-btn">
      <Ring />
      {children}
      <ArrowRight size={17} aria-hidden="true" className="di-arrow" />
    </Link>
  );
}

export function Header({ base }: { base: string }) {
  const links: [string, string][] = [
    ["Wochenplan", `${base}#woche`],
    ["Anlässe", `${base}#anlaesse`],
    ["Everdance®", `${base}#everdance`],
    ["Saal mieten", `${base}#saal`],
    ["Team", `${base}#team`],
  ];
  return (
    <header className="di-header sticky top-0 z-30 border-b border-[#1e1d1c]/[0.07] backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between gap-6 px-5 md:px-10">
        <Link href={base} className="rounded-[6px]">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-8 text-[15px] font-medium lg:flex">
          {links.map(([label, href]) => (
            <Link key={label} href={href} className="di-nav">
              {label}
            </Link>
          ))}
        </nav>
        {/* The header's one action is the phone: many students are 60 plus. */}
        <a href="tel:+41443646566" className="di-pill">
          <Ring />
          <Phone size={15} aria-hidden="true" />
          <span className="md:hidden">Anrufen</span>
          <span className="hidden md:inline">044 364 65 66</span>
        </a>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1e1d1c] text-white">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr_1fr] md:px-10">
        <Logo light />
        <p className="text-[15px] leading-7 text-white/75">
          Stäblistrasse 2
          <br />
          Eingang Gladbachstrasse
          <br />
          8006 Zürich, beim Rigiplatz
        </p>
        <p className="text-[15px] leading-7 text-white/75">
          Bus 33 bis Vogelsangstrasse,
          <br />
          direkt vor der Tür.
          <br />
          Tram 9 und 10 bis Winkelriedstrasse.
        </p>
        <p className="text-[15px] leading-7 text-white/75">
          044 364 65 66
          <br />
          WhatsApp 079 542 58 07
          <br />
          info@dance-it.ch
        </p>
      </div>
    </footer>
  );
}

// Always visible, also in the mail picture: this is a sketch.
export function DraftBadge() {
  return (
    <p className="fixed bottom-3 left-3 z-40 rounded-full bg-[#1e1d1c] px-3.5 py-1.5 text-[12px] font-medium text-white shadow-lg ring-1 ring-white/40">
      Entwurf von Lukas Kaffer, nicht die Website von Dance it
    </p>
  );
}

// Framed on the personal page, a draft opens at a section via ?ansicht=<id>.
// A #hash would also scroll the page around the frame; this scrolls only
// the draft's own window.
function OpenAtSection() {
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("ansicht");
    const target = id ? document.getElementById(id) : null;
    if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 88, behavior: "instant" });
  }, []);
  return null;
}

// The palette is read once per page load. The draft pages are static HTML,
// so the server renders the fixed variant and the browser switches to the
// one from the URL after hydration (local servers only, see farben.ts).
const noop = () => () => {};
function useVariante() {
  return useSyncExternalStore(
    noop,
    () => varianteAus(new URLSearchParams(window.location.search).get("variante"), isLocalHost(window.location.hostname)),
    () => VARIANTE,
  );
}

const INTERACTION_CSS = `
  .di-page { --di-orange: #ff5a14; --di-ink: #1e1d1c; }
  .di-header { background-color: var(--di-ground); background-color: color-mix(in srgb, var(--di-ground) 85%, transparent); }
  .di-page a:focus-visible, .di-page button:focus-visible, .di-page input:focus-visible, .di-page select:focus-visible {
    outline: 2px solid var(--di-ink); outline-offset: 2px; box-shadow: 0 0 0 5px #ffffff;
  }
  .di-btn, .di-pill {
    position: relative; display: inline-flex; align-items: center; border-radius: 999px;
    background: rgba(255,255,255,.7); color: #c2410c; font-weight: 600;
    box-shadow: inset 0 0 0 1px rgba(30,29,28,.14);
    transition: background-color .35s ease, color .35s ease, transform .2s ease;
  }
  .di-btn { gap: .6rem; height: 3.25rem; padding: 0 1.6rem; font-size: 16px; }
  .di-pill { gap: .5rem; height: 2.5rem; padding: 0 1.05rem; font-size: 15px; }
  .di-btn:hover, .di-pill:hover { background: #ffffff; }
  .di-glow {
    position: absolute; inset: -1px; border-radius: inherit; pointer-events: none;
    clip-path: inset(0 100% 0 0);
    transition: clip-path 700ms cubic-bezier(0.16, 1, 0.3, 1);
  }
  .di-glow::before {
    content: ""; position: absolute; inset: 0; padding: 1.5px; border-radius: inherit;
    background: var(--di-orange);
    -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  }
  .di-btn:is(:hover, :focus-visible) .di-glow, .di-pill:is(:hover, :focus-visible) .di-glow { clip-path: inset(0 0 0 0); }
  .di-arrow { transition: transform .35s cubic-bezier(.22,1,.36,1); }
  .di-btn:hover .di-arrow, .di-link:hover .di-arrow { transform: translateX(4px); }
  .di-btn:active, .di-pill:active, .di-card:active { transform: scale(.98); }
  .di-link {
    padding-bottom: 3px;
    background-image: linear-gradient(var(--di-orange), var(--di-orange)), linear-gradient(rgba(30,29,28,.2), rgba(30,29,28,.2));
    background-size: 0 2px, 100% 2px; background-position: 0 100%, 0 100%; background-repeat: no-repeat;
    transition: background-size .45s cubic-bezier(.22,1,.36,1);
  }
  .di-link:hover { background-size: 100% 2px, 100% 2px; }
  .di-nav { position: relative; padding: 6px 0; }
  .di-nav::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: 0; height: 2px; background: var(--di-orange);
    transform: scaleX(0); transform-origin: right; transition: transform .4s cubic-bezier(.22,1,.36,1);
  }
  .di-nav:hover::after { transform: scaleX(1); transform-origin: left; }
  .di-card {
    transition: transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s, border-color .3s;
  }
  .di-card:hover {
    transform: translateY(-3px); border-color: rgba(255,90,20,.45);
    box-shadow: 0 22px 44px -28px rgba(30,29,28,.35);
  }
  @media (prefers-reduced-motion: reduce) {
    .di-glow { transition: none; }
    .di-page *, .di-page *::before, .di-page *::after { transition-duration: 0s !important; }
    .di-card:hover { transform: none; }
    .di-btn:active, .di-pill:active, .di-card:active { transform: none; }
  }
`;

export function Page({ base, children }: { base: string; children: ReactNode }) {
  const variante: Variante = useVariante();
  return (
    <div
      className="di-page min-h-svh bg-[color:var(--di-ground)] text-[#1e1d1c] antialiased"
      data-variante={variante}
      style={{ ...paletteVars(variante), fontFamily: "var(--font-di-text), Arial, sans-serif" }}
    >
      <style>{INTERACTION_CSS}</style>
      <OpenAtSection />
      <Header base={base} />
      {children}
      <Footer />
      <DraftBadge />
    </div>
  );
}

// Section frame with the shared width and rhythm.
export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`scroll-mt-[72px] ${className}`}>
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-24">{children}</div>
    </section>
  );
}

export function Heading({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2 className={`max-w-[18ch] text-[36px] font-semibold leading-[1.02] tracking-[-0.02em] md:text-[54px] ${light ? "text-white" : ""}`}>
      {children}
    </h2>
  );
}
