import { useEffect, useState } from "react";
import type { Block, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak, cancelSpeech, splitIntoSentences } from "../engine/speech";
import { useShowAlternateScript } from "../hooks/useShowAlternateScript";
import { pinyin } from "pinyin-pro";

// TeacherCaption already extracts individual sentences as raw strings
// tied to a known langCode (not full Translations objects), so it can't
// reuse engine/scriptDisplay.ts's resolveDisplayText directly. Chinese
// is still straightforward — convert the extracted sentence on the fly.
// Japanese is intentionally left as kana here: block.spokenIntro is
// framing/announcement text (not the vocab/dialogue content kanji is
// being authored for), and even if a kanji form existed, splitting it
// into sentences independently wouldn't reliably line up 1:1 with the
// kana version's own sentence boundaries.
function displaySentence(sentence: string | undefined, lang: LanguageSettings["targetLang"], showAlt: boolean): string | undefined {
  if (!sentence || !showAlt || lang !== "zh") return sentence;
  return pinyin(sentence, { toneType: "symbol" });
}

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
  bilingual = false,
  onFinished,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  framingLanguage?: "source" | "target";
  showCaptionText?: boolean;
  // When true, BOTH languages of spokenIntro are actually spoken, one
  // after the other (source fully, then target fully) — not just one
  // spoken with the other shown as an unspoken secondary caption line.
  // Used for the intro block's framing message, which is meant to be
  // heard in both languages before the block's own content narration
  // begins. framingLanguage still decides which one speaks FIRST.
  bilingual?: boolean;
  onFinished?: () => void;
}) {
  const [speaking, setSpeaking] = useState(false);
  const showAlt = useShowAlternateScript();
  const [sentenceIdx, setSentenceIdx] = useState(0);
  const [stage, setStage] = useState<"spoken" | "other">("spoken"); // which language is currently playing, bilingual mode only
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

    (async () => {
      // Real bug fix: on some browsers, the first speech utterance after
      // navigating to a new slide is silently dropped — audio doesn't
      // play, but the returned promise still resolves normally (onend/
      // onerror both fire), so timing/sequencing was never actually
      // wrong. It just LOOKS like vocab narration jumped ahead of the
      // intro, because the intro's audio was inaudible while its timing
      // slot was still consumed correctly.
      //
      // Fix: always speak the block's own title first — in the target
      // language, then the source language if it's meaningfully
      // different — before anything else, on every block, regardless of
      // whether spokenIntro exists. The title is already shown as
      // on-screen text (the slide's own <h2>), so if THIS particular
      // utterance gets silently dropped instead, nothing is lost — the
      // student can already read it. Real spoken content (the actual
      // intro, then the block's content narration) only ever plays
      // after this sacrificial utterance, once the speech engine is
      // reliably warmed up for this navigation.
      const targetTitle = block.title?.[lang.targetLang];
      const sourceTitle = block.title?.[lang.sourceLang];
      if (targetTitle) {
        await speak(targetTitle, lang.targetLang, trainer.voiceProfile);
      }
      if (cancelled) return;
      if (sourceTitle && sourceTitle !== targetTitle) {
        await speak(sourceTitle, lang.sourceLang, trainer.voiceProfile);
      }
      if (cancelled) return;

      if (sentences.length === 0 && (!bilingual || otherSentences.length === 0)) {
        // No spoken intro on this block — signal "done" now that the
        // title primer has run, so the rest of the auto-play sequence
        // (content narration) isn't stuck waiting on something that
        // will never fire.
        onFinished?.();
        return;
      }

      setSpeaking(true);
      setStage("spoken");
      for (let i = 0; i < sentences.length; i++) {
        if (cancelled) return;
        setSentenceIdx(i);
        await speak(sentences[i], spokenLangCode, trainer.voiceProfile);
      }
      if (bilingual && otherSentences.length > 0) {
        if (cancelled) return;
        setStage("other");
        for (let i = 0; i < otherSentences.length; i++) {
          if (cancelled) return;
          setSentenceIdx(i);
          await speak(otherSentences[i], otherLangCode, trainer.voiceProfile);
        }
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
    if (sentences.length === 0 && (!bilingual || otherSentences.length === 0)) return;
    cancelSpeech();
    setFinished(false);
    setSpeaking(true);
    setStage("spoken");
    for (let i = 0; i < sentences.length; i++) {
      setSentenceIdx(i);
      await speak(sentences[i], spokenLangCode, trainer.voiceProfile);
    }
    if (bilingual && otherSentences.length > 0) {
      setStage("other");
      for (let i = 0; i < otherSentences.length; i++) {
        setSentenceIdx(i);
        await speak(otherSentences[i], otherLangCode, trainer.voiceProfile);
      }
    }
    setSpeaking(false);
    setFinished(true);
  }

  if (sentences.length === 0 && (!bilingual || otherSentences.length === 0)) return null;
  if (!showCaptionText) return null; // audio already played above; no visible bubble for this block
  if (finished) return null; // intro's done — don't linger through the rest of the block's content

  const currentText = displaySentence(
    bilingual ? (stage === "spoken" ? sentences[sentenceIdx] : otherSentences[sentenceIdx]) : sentences[sentenceIdx],
    bilingual ? (stage === "spoken" ? spokenLangCode : otherLangCode) : spokenLangCode,
    showAlt
  );
  const currentOther = bilingual ? undefined : displaySentence(otherSentences[sentenceIdx], otherLangCode, showAlt); // bilingual mode shows one language at a time, full-size, not a primary/secondary pair

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
