// Interaction system shared by every control. The mechanics live in
// globals.css (.ui-link, .ui-button, .ui-nav, .ui-row): a thin teal line that
// draws in from the left, a colour sweep through button text, an icon nudge.
// Controls are never filled with colour. Radius 8 px — "neither round nor
// square", like Indeed Unique's --radius-control.

const BUTTON_BASE =
  "ui-button inline-flex h-12 w-fit shrink-0 items-center justify-center gap-2 px-6 text-[15px] font-medium";

// Teal hairline frame; the sweep marks it as the main action.
export const PRIMARY_BUTTON = `${BUTTON_BASE} disabled:cursor-not-allowed disabled:opacity-60`;

// Same body with a grey hairline frame.
export const SECONDARY_BUTTON = `${BUTTON_BASE} ui-button--secondary`;

// Inline text link with an arrow or without: grey hairline, teal line on hover.
export const TEXT_LINK = "ui-link inline-flex items-center gap-1.5 font-medium";

// Quiet links (footer, running head): same line, inherits size and colour.
export const QUIET_LINK = "ui-link";

// Menu entries: the line grows under the word, the active entry keeps it.
export const NAV_LINK = "ui-nav";

// Icon direction classes for the nudge on hover.
export const ICON_UP = "ui-icon-up";
export const ICON_RIGHT = "ui-icon-right";
export const ICON_LEFT = "ui-icon-left";
