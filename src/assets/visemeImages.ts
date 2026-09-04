// Cropped from a single 22-photo reference sheet (same model, same
// lighting/pose throughout — see src/assets/visemes/README.md) so
// swapping between them at runtime never causes a lighting/head-angle
// jump, only the mouth region visibly changes. Each viseme has two
// photo variants (1/2) except neutral/laughing; VisemeAvatar.tsx
// alternates between them for a touch of natural variation at no cost.

import neutral from "./visemes/neutral.jpg";
import laughing from "./visemes/laughing.jpg";
import aa1 from "./visemes/aa_1.jpg";
import aa2 from "./visemes/aa_2.jpg";
import ee1 from "./visemes/ee_1.jpg";
import ee2 from "./visemes/ee_2.jpg";
import ih1 from "./visemes/ih_1.jpg";
import ih2 from "./visemes/ih_2.jpg";
import oh1 from "./visemes/oh_1.jpg";
import oh2 from "./visemes/oh_2.jpg";
import oo1 from "./visemes/oo_1.jpg";
import oo2 from "./visemes/oo_2.jpg";
import ou1 from "./visemes/ou_1.jpg";
import ou2 from "./visemes/ou_2.jpg";
import fv1 from "./visemes/fv_1.jpg";
import fv2 from "./visemes/fv_2.jpg";
import l1 from "./visemes/l_1.jpg";
import l2 from "./visemes/l_2.jpg";
import mbp1 from "./visemes/mbp_1.jpg";
import mbp2 from "./visemes/mbp_2.jpg";
import rest1 from "./visemes/rest_1.jpg";
import rest2 from "./visemes/rest_2.jpg";

// The 10 mouth-shape categories (Preston Blair-style viseme set) plus
// two special faces. "REST" is the default/closed-mouth state used for
// silence, spaces, and punctuation.
export type VisemeKey =
  | "NEUTRAL"
  | "LAUGHING"
  | "AA"
  | "EE"
  | "IH"
  | "OH"
  | "OO"
  | "OU"
  | "FV"
  | "L"
  | "MBP"
  | "REST";

export const VISEME_IMAGES: Record<VisemeKey, [string] | [string, string]> = {
  NEUTRAL: [neutral],
  LAUGHING: [laughing],
  AA: [aa1, aa2],
  EE: [ee1, ee2],
  IH: [ih1, ih2],
  OH: [oh1, oh2],
  OO: [oo1, oo2],
  OU: [ou1, ou2],
  FV: [fv1, fv2],
  L: [l1, l2],
  MBP: [mbp1, mbp2],
  REST: [rest1, rest2],
};
