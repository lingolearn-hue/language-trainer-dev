import { useEffect, useState } from "react";
import type { Block, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, cancelSpeech } from "../engine/speech";

// Audio playback for the trainer, delivered as a subtitle first (real TTS
// speech + on-screen caption) rather than a full avatar/lip-sync system.
// Each slide can carry a short spoken framing line (`spokenIntro`) that is
// distinct from the slide's own visible content — this component plays it
// automatically when the block mounts and displays it as a caption. The
// caption sits below the slide frame; on narrow/portrait layouts this is
// the primary place a person reads it, since the slide itself is
// compressed there.
//
// `onFinished` fires once the spoken intro is done playing (or immediately
// if there is none) — Session uses this to know when it's safe to start
// narrating the slide's actual content, so the two never overlap.
export function TeacherCaption({
  block,
  lang,
  trainer,
  onFinished,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  onFinished?: () => void;
}) {
  const [speaking, setSpeaking] = useState(false);

  const text = block.spokenIntro?.[lang.targetLang];
  const sourceText = block.spokenIntro?.[lang.sourceLang];

  useEffect(() => {
    let cancelled = false;
    if (!text) {
      // No spoken intro on this block — signal "done" immediately so the
      // rest of the auto-play sequence (content narration) isn't stuck
      // waiting on something that will never fire.
      onFinished?.();
      return;
    }
    setSpeaking(true);
    speak(text, lang.targetLang, trainer.voiceProfile).then(() => {
      if (!cancelled) {
        setSpeaking(false);
        onFinished?.();
      }
    });
    return () => {
      cancelled = true;
      cancelSpeech();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.id]);

  function replay() {
    if (!text) return;
    cancelSpeech();
    setSpeaking(true);
    speak(text, lang.targetLang, trainer.voiceProfile).then(() => setSpeaking(false));
  }

  if (!text) return null;

  return (
    <div className={`teacher-caption${speaking ? " speaking" : ""}`}>
      <button className="caption-replay" onClick={replay} title="Replay">
        🔊
      </button>
      <div className="caption-text">
        <div className="target">{text}</div>
        {sourceText && sourceText !== text && (
          <div className="source">{sourceText}</div>
        )}
      </div>
    </div>
  );
}
