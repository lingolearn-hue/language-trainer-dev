import { useEffect, useState } from "react";
import type { Block, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, cancelSpeech, splitIntoSentences } from "../engine/speech";

// Audio playback for the trainer, delivered as a subtitle first (real TTS
// speech + on-screen caption) rather than a full avatar/lip-sync system.
// Each slide can carry a short spoken framing line (`spokenIntro`) that is
// distinct from the slide's own visible content — this component plays it
// automatically when the block mounts and displays it as a caption.
//
// Subtitles are only meant for text that ISN'T already visible on the
// slide (that's their whole purpose — narrating something the student
// can't otherwise read). For the agenda block specifically, spokenIntro
// narrates essentially the same sequence the visible agenda list already
// shows — so the caption bubble is suppressed there (via
// `showCaptionText=false`) while the audio itself still plays normally.
// Every other block type's spokenIntro is genuinely distinct from its
// visible content (a welcome line, a warm-up question, a short framing
// sentence — none of which duplicate on-screen text), so they keep the
// caption as before.
//
// The full spokenIntro is broken into individual sentences (see
// splitIntoSentences) and stepped through one at a time — narrated and
// captioned in sync — rather than shown as one multi-sentence block.
// Keeps the on-screen caption to a real subtitle's worth of text (max
// ~2 thin lines, see .teacher-caption CSS) instead of a paragraph.
//
// `onFinished` fires once every sentence has finished playing (or
// immediately if there is no spokenIntro at all) — Session uses this to
// know when it's safe to start narrating the slide's actual content, so
// the two never overlap.
export function TeacherCaption({
  block,
  lang,
  trainer,
  framingLanguage = "target",
  showCaptionText = true,
  onFinished,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  framingLanguage?: "source" | "target";
  showCaptionText?: boolean;
  onFinished?: () => void;
}) {
  const [speaking, setSpeaking] = useState(false);
  const [sentenceIdx, setSentenceIdx] = useState(0);
  // Without this, the caption kept showing the LAST intro sentence for
  // the entire rest of the block (through the whole vocab drill,
  // dialogue, etc.) once `speaking` went false — it only stopped
  // narrating, it never actually disappeared. Subtitles should only be
  // visible for the short intro itself.
  const [finished, setFinished] = useState(false);

  // Which language the framing line is actually SPOKEN in — "source" for
  // beginner courses (student can't yet follow target-language
  // instructions), "target" otherwise. The other language's line, if
  // present, is still shown as a secondary caption but not spoken.
  const spokenLangCode = framingLanguage === "source" ? lang.sourceLang : lang.targetLang;
  const otherLangCode = framingLanguage === "source" ? lang.targetLang : lang.sourceLang;

  const text = block.spokenIntro?.[spokenLangCode];
  const otherText = block.spokenIntro?.[otherLangCode];

  const sentences = text ? splitIntoSentences(text) : [];
  // Best-effort: the secondary (non-spoken) language's sentences, matched
  // by index — if the two texts don't split into the same number of
  // sentences, later indices just show nothing extra rather than a
  // mismatched line.
  const otherSentences = otherText && otherText !== text ? splitIntoSentences(otherText) : [];

  useEffect(() => {
    let cancelled = false;
    setSentenceIdx(0);
    setFinished(false);

    if (sentences.length === 0) {
      // No spoken intro on this block — signal "done" immediately so the
      // rest of the auto-play sequence (content narration) isn't stuck
      // waiting on something that will never fire.
      onFinished?.();
      return;
    }

    (async () => {
      setSpeaking(true);
      for (let i = 0; i < sentences.length; i++) {
        if (cancelled) return;
        setSentenceIdx(i);
        await speak(sentences[i], spokenLangCode, trainer.voiceProfile);
      }
      if (!cancelled) {
        setSpeaking(false);
        setFinished(true);
        onFinished?.();
      }
    })();

    return () => {
      cancelled = true;
      cancelSpeech();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [block.id]);

  async function replay() {
    if (sentences.length === 0) return;
    cancelSpeech();
    setFinished(false);
    setSpeaking(true);
    for (let i = 0; i < sentences.length; i++) {
      setSentenceIdx(i);
      await speak(sentences[i], spokenLangCode, trainer.voiceProfile);
    }
    setSpeaking(false);
    setFinished(true);
  }

  if (sentences.length === 0) return null;
  if (!showCaptionText) return null; // audio already played above; no visible bubble for this block
  if (finished) return null; // intro's done — don't linger through the rest of the block's content

  const currentText = sentences[sentenceIdx];
  const currentOther = otherSentences[sentenceIdx];

  return (
    <div className={`teacher-caption${speaking ? " speaking" : ""}`}>
      <button className="caption-replay" onClick={replay} title="Replay">
        🔊
      </button>
      <div className="caption-text">
        <div className="primary">{currentText}</div>
        {currentOther && currentOther !== currentText && (
          <div className="secondary">{currentOther}</div>
        )}
      </div>
    </div>
  );
}
