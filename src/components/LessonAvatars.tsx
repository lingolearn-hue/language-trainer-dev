import { useEffect, useState } from "react";
import type { Trainer } from "../data/trainers";
import { TrainerAvatar } from "./TrainerAvatar";
import { subscribeSpeaking, subscribeStudentTurn } from "../engine/speech";

// Top-right in-lesson corner: trainer avatar + name (top), generic
// student silhouette + name (below). Wired to actual speech state: a
// blue ring appears around the trainer's avatar while any speak() call
// is active; a green ring appears around the student's silhouette during
// the windows where it's genuinely their turn to talk (echo-repeat pause,
// silent-phase reading — see engine/speech.ts's studentTurn store, set by
// ReadalongBlock/SelfIntroBlock). Orb avatars pulse while speaking, static
// (male/female) avatars swap to the real Lorelei "mouth open" variant (via
// TrainerAvatar's mouthOpen prop) on a simple alternating timer — a
// lightweight stand-in for true amplitude analysis or boundary events.
const AVATAR_SIZE = 56; // fixed regardless of slide mode (face/content) or orientation — no more resizing mid-lesson

export function LessonAvatars({ trainer }: { trainer: Trainer }) {
  const [speaking, setSpeaking] = useState(false);
  const [studentTurn, setStudentTurnState] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);

  useEffect(() => subscribeSpeaking(setSpeaking), []);
  useEffect(() => subscribeStudentTurn(setStudentTurnState), []);

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
      <div className={`lesson-avatar-slot user${studentTurn ? " your-turn" : ""}`}>
        <div className="student-silhouette" style={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            <circle cx="50" cy="50" r="50" fill="#d5d5db" />
            <circle cx="50" cy="38" r="18" fill="#9a9aa2" />
            <path d="M50 58 C25 58 12 78 12 100 L88 100 C88 78 75 58 50 58 Z" fill="#9a9aa2" />
          </svg>
        </div>
        <span className="lesson-avatar-name">You</span>
      </div>
    </div>
  );
}
