import { VISEME_IMAGES, type VisemeKey } from "../assets/visemeImages";

// Renders the current viseme as a photo. variantIndex picks which
// photo shows via variants[variantIndex % variants.length] — purely
// cosmetic, costs nothing since it's just indexing an array already in
// memory. The caller decides what variantIndex means: during active
// speech it's flipped every frame the SAME viseme key repeats
// back-to-back (0/1 alternation, so a held vowel doesn't look like a
// frozen single image); for NEUTRAL specifically, the caller instead
// runs a slow, randomized idle-cycling timer (see
// LipSyncTestPage.tsx) across however many idle variants exist — the
// modulo here is what makes that safe regardless of array length.
export function VisemeAvatar({
  viseme,
  variantIndex,
  size = 320,
}: {
  viseme: VisemeKey;
  variantIndex: number;
  size?: number;
}) {
  const variants = VISEME_IMAGES[viseme];
  const src = variants[variantIndex % variants.length];
  return (
    <img
      src={src}
      alt={`Viseme: ${viseme}`}
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "cover", borderRadius: "50%", display: "block" }}
    />
  );
}
