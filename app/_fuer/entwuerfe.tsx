import type { ComponentType } from "react";
import { DanceItHome } from "./dance-it/home";
import { DanceItKurs } from "./dance-it/kurs";

// One hand-made website draft per studio, keyed by the slug in fuer-data.
// Each draft has a few pages; "" is its homepage. Every page gets the
// draft's base path so its links stay inside the draft.
type DraftPage = ComponentType<{ base: string }>;

export const entwuerfe: Record<string, Record<string, DraftPage>> = {
  "dance-it-7kq3": {
    "": DanceItHome,
    "kurse/paartanz": DanceItKurs,
  },
};
