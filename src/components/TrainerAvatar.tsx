import type { Trainer } from "../data/trainers";

const AVATAR_COLOR: Record<Trainer["avatarType"], string> = {
  male: "#4f6bff",
  female: "#ff6b9d",
  orb: "#6be0ff",
};

function initials(name: string) {
  return name.slice(0, 2).toUpperCase();
}

// Shared avatar circle — used on the trainer-select grid and again in the
// in-lesson corner badge. Placeholder (initials/orb glow) until real photos
// are available; swapping in a photo later only touches this component.
export function TrainerAvatar({
  trainer,
  size = 84,
}: {
  trainer: Trainer;
  size?: number;
}) {
  return (
    <div
      className={`trainer-avatar avatar-${trainer.avatarType}`}
      style={{
        background: AVATAR_COLOR[trainer.avatarType],
        width: size,
        height: size,
        fontSize: size * 0.32,
      }}
    >
      {trainer.avatarType === "orb" ? (
        <span className="orb-glow" />
      ) : (
        initials(trainer.name)
      )}
    </div>
  );
}
