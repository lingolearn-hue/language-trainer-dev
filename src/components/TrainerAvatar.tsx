import { createAvatar } from "@dicebear/core";
import { lorelei } from "@dicebear/collection";
import type { AvatarType } from "../data/trainers";

// Real generated avatar, not a placeholder anymore — Lorelei style (Lisa
// Wischofsky, CC0), keyed by avatarSeed so the same seed always renders
// the same face. Mouth options are the exact pair originally hand-picked
// by rendering several variants and visually confirming which read as
// "mouth closed" (happy01) vs "mouth open / talking" (sad01).
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

// Shared avatar circle — used for both trainers (trainer-select grid,
// in-lesson corner badge) and the student's own placeholder avatar
// (in-lesson corner, below the trainer). Takes just a seed + avatarType
// rather than a full Trainer so the student placeholder — which has no
// Trainer record at all — can render through the exact same component,
// guaranteeing identical size/style rather than a hand-matched copy.
export function TrainerAvatar({
  avatarSeed,
  avatarType,
  size = 84,
  mouthOpen = false,
}: {
  avatarSeed: string;
  avatarType: AvatarType;
  size?: number;
  mouthOpen?: boolean;
}) {
  const svg = avatarSvg(avatarSeed, size, mouthOpen);
  return (
    <div
      className={`trainer-avatar avatar-${avatarType}`}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
