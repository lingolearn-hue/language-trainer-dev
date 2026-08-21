import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import type { Trainer } from "../data/trainers";

// Real generated avatar, not a placeholder anymore — Lorelei style (Lisa
// Wischofsky, CC0), keyed by trainer.avatarSeed so the same trainer always
// renders the same face. Mouth options are the exact pair hand-picked in
// AvatarStyleComparison.tsx (closed: happy01, open: sad01) so the talking
// animation in LessonAvatars.tsx swaps to a real mouth-open variant
// instead of only the CSS scaleY stand-in.
const MOUTH_CLOSED = { mouth: ["happy01"] };
const MOUTH_OPEN = { mouth: ["sad01"] };

function avatarSvg(seed: string, size: number, mouthOpen: boolean): string {
  return createAvatar(lorelei, {
    seed,
    size,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(mouthOpen ? MOUTH_OPEN : MOUTH_CLOSED),
  } as any).toString();
}

// Shared avatar circle — used on the trainer-select grid and again in the
// in-lesson corner badge.
export function TrainerAvatar({
  trainer,
  size = 84,
  mouthOpen = false,
}: {
  trainer: Trainer;
  size?: number;
  mouthOpen?: boolean;
}) {
  const svg = avatarSvg(trainer.avatarSeed, size, mouthOpen);
  return (
    <div
      className={`trainer-avatar avatar-${trainer.avatarType}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
