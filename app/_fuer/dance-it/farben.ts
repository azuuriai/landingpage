import type { CSSProperties } from "react";

// The ground colours of the Dance it draft as one token set. Page, header,
// filter tracks, initials, course page and the mail picture read the CSS
// variables set from the palette chosen here (Page in ui.tsx, bild/page.tsx)
// instead of scattered hex values.
//
// Two variants for Lukas to choose from (13.10.2026, after his note that the
// cool grey #f1f1ef did not make the page friendly enough):
//   tageslicht  warm white ground #faf7f2; the sections that lay on the
//               ground (Haltung, Anlässe, Team) get a slightly warmer band
//               #f4efe7; cards stay white; the mail picture sits on the same
//               warm white, lifted by a soft shadow.
//   sand        warm sand #f6efe5 as the ground everywhere (band = ground);
//               white sections and cards stay white; the mail picture sits on
//               a slightly darker sand #efe5d6.
// The floor (#faf7f2, the near-white inside white cards: step board,
// timetable, hall plan, date cards) is the same in both.
//
// Contrast (WCAG) of the orange text #c2410c and the motto orange #ea4c0c:
//   #faf7f2  4.85 : 1 and 3.55 : 1      #f4efe7  4.52 : 1 and 3.31 : 1
//   #f6efe5  4.54 : 1 and 3.32 : 1      (#f5eee4 would give 4.50, just under)
// The picture ground #efe5d6 carries no text. Grey #8c8783 stays for the
// logo's "it" and side notes; orange stays a signal, never a surface.

export type Variante = "tageslicht" | "sand";

export type Palette = {
  // Seitengrund: page, header, hero.
  ground: string;
  // Tinted sections and tinted surfaces on white (filter tracks, initials,
  // the booking box).
  band: string;
  // Near-white floor inside white cards.
  floor: string;
  // Ground of the mail picture.
  picture: string;
  // Extra shadow under the laptop in the mail picture, where the ground
  // alone would not lift it.
  pictureShadow?: string;
};

export const PALETTES: Record<Variante, Palette> = {
  tageslicht: {
    ground: "#faf7f2",
    band: "#f4efe7",
    floor: "#faf7f2",
    picture: "#faf7f2",
    pictureShadow: "0 40px 100px -24px rgba(30,29,28,0.32), 0 12px 32px -14px rgba(30,29,28,0.16)",
  },
  sand: {
    ground: "#f6efe5",
    band: "#f6efe5",
    floor: "#faf7f2",
    picture: "#efe5d6",
  },
};

// The variant that is built and published: change this line to fix the choice.
export const VARIANTE: Variante = "tageslicht";

export function isVariante(value: unknown): value is Variante {
  return value === "tageslicht" || value === "sand";
}

// ?variante=<id> on a draft or picture URL switches the palette for a
// comparison. It works on a local server only; on lukaskaffer.com the fixed
// VARIANTE applies.
export function varianteAus(value: string | null | undefined, lokal: boolean): Variante {
  return lokal && isVariante(value) ? value : VARIANTE;
}

export function isLocalHost(hostname: string) {
  return /^(localhost|127\.0\.0\.1|\[::1\])$/.test(hostname);
}

// The palette as CSS variables for an element's style.
export function paletteVars(variante: Variante): CSSProperties {
  const palette = PALETTES[variante];
  return {
    "--di-ground": palette.ground,
    "--di-band": palette.band,
    "--di-floor": palette.floor,
  } as CSSProperties;
}
