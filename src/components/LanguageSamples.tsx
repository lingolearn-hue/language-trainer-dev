import { useState } from "react";
import type { Trainer } from "../data/trainers";
import type { LangCode } from "../types";
import { languageSamplesFor } from "../data/languageSamples";
import { speak } from "../engine/speech";

const LANG_NAME: Record<LangCode, string> = {
  de: "German", en: "English", zh: "Chinese", ja: "Japanese", fr: "French", es: "Spanish",
};

// Shown on the lesson-chooser screen, right after picking a trainer: one
// playable sample sentence per language the trainer actually speaks, so
// the student can hear both voices before committing to a lesson.
export function LanguageSamples({ trainer }: { trainer: Trainer }) {
  const samples = languageSamplesFor(trainer);
  const [playingLang, setPlayingLang] = useState<LangCode | null>(null);

  async function play(lang: LangCode, text: string) {
    setPlayingLang(lang);
    await speak(text, lang, trainer.voiceProfile);
    setPlayingLang(null);
  }

  return (
    <div className="language-samples">
      <p className="language-samples-label">Hear {trainer.name} speak:</p>
      <div className="language-samples-list">
        {samples.map((s) => (
          <button
            key={s.lang}
            className="language-sample-btn"
            disabled={playingLang === s.lang}
            onClick={() => play(s.lang, s.text)}
          >
            {playingLang === s.lang ? "🔊 Playing…" : `▶ ${LANG_NAME[s.lang] ?? s.lang}`}
          </button>
        ))}
      </div>
    </div>
  );
}
