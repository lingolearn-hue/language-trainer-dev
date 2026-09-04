import { VISEME_IMAGES, type VisemeKey } from "../assets/visemeImages";

// Renders the current viseme as a photo. Alternates between the two
// available photo variants each time the SAME viseme key repeats
// back-to-back (e.g. two AA frames in a row) so it doesn't look like a
// frozen single image during a held vowel — purely cosmetic, costs
// nothing since it's just picking index 0 vs 1 out of an array already
// in memory.
export function VisemeAvatar({
  viseme,
  variantToggle,
  size = 320,
}: {
  viseme: VisemeKey;
  variantToggle: boolean; // flip this each frame from the caller; which variant shows just tracks its parity
  size?: number;
}) {
  const variants = VISEME_IMAGES[viseme];
  const src = variants.length > 1 ? variants[variantToggle ? 1 : 0] : variants[0];
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
