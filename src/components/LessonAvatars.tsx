import { useEffect, useState } from "react";
import type { Trainer } from "../data/trainers";
import { TrainerAvatar } from "./TrainerAvatar";
import { subscribeSpeaking } from "../engine/speech";

// Top-right in-lesson corner: trainer avatar + name (top), generic student
// placeholder avatar (below). Wired to actual speech state: orb avatars
// pulse while any speak() call is active, static (male/female) avatars
// swap to the real Lorelei "mouth open" variant (via TrainerAvatar's
// mouthOpen prop) on a simple alternating timer — a lightweight stand-in
// for true amplitude analysis or boundary events, but now a real generated
// mouth variant rather than only a CSS scaleY illusion.
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
          <TrainerAvatar trainer={trainer} size={48} mouthOpen={speaking && mouthOpen} />
        </div>
        <span className="lesson-avatar-name">{trainer.name}</span>
      </div>
      <div className="lesson-avatar-slot user">
        <div className="user-avatar-placeholder">You</div>
      </div>
    </div>
  );
}
