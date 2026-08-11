import type { Trainer } from "../data/trainers";
import { TrainerAvatar } from "./TrainerAvatar";

// Top-right in-lesson corner: trainer avatar + name (top), generic student
// placeholder avatar (below). Decorative/contextual only for now — not
// wired to mouth-state or speech-boundary animation yet.
export function LessonAvatars({ trainer }: { trainer: Trainer }) {
  return (
    <div className="lesson-avatars">
      <div className="lesson-avatar-slot">
        <TrainerAvatar trainer={trainer} size={48} />
        <span className="lesson-avatar-name">{trainer.name}</span>
      </div>
      <div className="lesson-avatar-slot user">
        <div className="user-avatar-placeholder">You</div>
      </div>
    </div>
  );
}
