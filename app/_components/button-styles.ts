// Interaction style borrowed from Indeed Unique: controls are never filled
// with colour. On hover or keyboard focus a teal ring (the logo teal) draws in
// from outside and settles on the element's edge. Radius 8 px — "neither round
// nor square", like Indeed Unique's --radius-control.
export const HOVER_RING =
  "rounded-lg outline outline-2 outline-offset-[6px] outline-transparent transition-[outline-color,outline-offset,border-color] duration-300 ease-out hover:outline-[#00b8ad] hover:outline-offset-0 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00b8ad] focus-visible:outline-offset-0";

const BASE = `inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 px-6 text-[15px] font-medium text-[#181811] ${HOVER_RING}`;

export const PRIMARY_BUTTON = `${BASE} border border-[#181811]/20 bg-white/70 hover:border-transparent disabled:cursor-not-allowed disabled:opacity-60`;

export const SECONDARY_BUTTON = `${BASE} border border-[#181811]/10 bg-transparent hover:border-transparent`;
