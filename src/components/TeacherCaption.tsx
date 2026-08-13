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
  framingLanguage = "target",
  onFinished,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  framingLanguage?: "source" | "target";
  onFinished?: () => void;
}) {
  const [speaking, setSpeaking] = useState(false);

  // Which language the framing line is actually SPOKEN in — "source" for
  // beginner courses (student can't yet follow target-language
  // instructions), "target" otherwise. The other language's line, if
  // present, is still shown as a secondary caption but not spoken.
  const spokenLangCode = framingLanguage === "source" ? lang.sourceLang : lang.targetLang;
  const otherLangCode = framingLanguage === "source" ? lang.targetLang : lang.sourceLang;

  const text = block.spokenIntro?.[spokenLangCode];
  const otherText = block.spokenIntro?.[otherLangCode];

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
    speak(text, spokenLangCode, trainer.voiceProfile).then(() => {
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
    speak(text, spokenLangCode, trainer.voiceProfile).then(() => setSpeaking(false));
  }

  if (!text) return null;

  return (
    <div className={`teacher-caption${speaking ? " speaking" : ""}`}>
      <button className="caption-replay" onClick={replay} title="Replay">
        🔊
      </button>
      <div className="caption-text">
        <div className="primary">{text}</div>
        {otherText && otherText !== text && (
          <div className="secondary">{otherText}</div>
        )}
      </div>
    </div>
  );
}
