import { useEffect, useState } from "react";
import type { Trainer } from "../data/trainers";
import { TrainerAvatar } from "./TrainerAvatar";
import { subscribeSpeaking } from "../engine/speech";

// Top-right in-lesson corner: trainer avatar + name (top), student's own
// placeholder avatar + name (below) — same size and rendering for both,
// via TrainerAvatar's shared seed-based rendering. Wired to actual speech
// state: orb avatars pulse while any speak() call is active, static
// (male/female) avatars swap to the real Lorelei "mouth open" variant
// (via TrainerAvatar's mouthOpen prop) on a simple alternating timer — a
// lightweight stand-in for true amplitude analysis or boundary events.
const AVATAR_SIZE = 56; // fixed regardless of slide mode (face/content) or orientation — no more resizing mid-lesson
const STUDENT_AVATAR_SEED = "student-default"; // no real user profile yet — one fixed generic placeholder face

export function LessonAvatars({ trainer }: { trainer: Trainer }) {
  const [speaking, setSpeaking] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);

  useEffect(() => subscribeSpeaking(setSpeaking), []);

  useEffect(() => {
    if (!speaking) {
      setMouthOpen(false);
      return;
    }
    const interval = setInterval(() => setMouthOpen((o) => !o), 220);
    return () => clearInterval(interval);
  }, [speaking]);

  return (
    <div className="lesson-avatars">
      <div className={`lesson-avatar-slot${speaking ? " speaking" : ""}`}>
        <div className={`avatar-anim ${trainer.avatarType === "orb" ? "orb-pulse" : mouthOpen ? "mouth-open" : "mouth-closed"}`}>
          <TrainerAvatar
            avatarSeed={trainer.avatarSeed}
            avatarType={trainer.avatarType}
            size={AVATAR_SIZE}
            mouthOpen={speaking && mouthOpen}
          />
        </div>
        <span className="lesson-avatar-name">{trainer.name}</span>
      </div>
      <div className="lesson-avatar-slot user">
        <TrainerAvatar avatarSeed={STUDENT_AVATAR_SEED} avatarType="female" size={AVATAR_SIZE} />
        <span className="lesson-avatar-name">You</span>
      </div>
    </div>
  );
}
