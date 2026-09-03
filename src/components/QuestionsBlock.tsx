import { useEffect, useState } from "react";
import type { Block, QuestionsContent, LanguageSettings } from "../types";
import type { Trainer } from "../data/trainers";
import { speak } from "../engine/speech";
import { Slide } from "./Slide";
import { useShowAlternateScript } from "../hooks/useShowAlternateScript";
import { resolveDisplayText } from "../engine/scriptDisplay";

// Reading-comprehension questions tied to a preceding article-style
// readalong (see TopicArticle/TopicQuestionSet in topicTypes.ts).
// Multiple-choice only, self-checked, never a precise score — same
// philosophy as ReadalongBlock's speech self-check (see its file
// header): this tells the student "right"/"try again", nothing more
// exact than that.
//
// Unlike most blocks, this one does NOT auto-complete once narration
// finishes — genuine comprehension checking means waiting for the
// student to actually pick an answer for every question, not just
// listening passively. autoPlay here only narrates each question (and
// its options) once when it becomes current; advancing past a question
// always requires a real click, and the final "Continue →" is always
// manual, matching GrammarBlock's stance (narration ends, the person
// still clicks through).
export function QuestionsBlock({
  block,
  lang,
  trainer,
  autoPlay,
  onComplete,
}: {
  block: Block;
  lang: LanguageSettings;
  trainer: Trainer;
  autoPlay: boolean;
  onComplete: () => void;
}) {
  const content = block.content as QuestionsContent;
  const showAlt = useShowAlternateScript();
  const [current, setCurrent] = useState(0);
  // Selected option index per question id — undefined means "not yet
  // answered". Kept across the whole block (not reset per question) so
  // going back-and-forth via manual navigation, if ever added, wouldn't
  // lose earlier answers; for now navigation is strictly forward.
  const [selected, setSelected] = useState<Record<string, number>>({});

  const question = content.questions[current];
  const isLast = current === content.questions.length - 1;
  const hasAnswered = question ? selected[question.id] !== undefined : false;

  // Narrate the question and its options once when it becomes current —
  // deliberately NOT chained into an auto-advance sequence (see file
  // header): after narration, the student must click an option
  // themselves, there's no next step to auto-run.
  useEffect(() => {
    if (!autoPlay || !question) return;
    let cancelled = false;
    (async () => {
      const qText = question.question[lang.targetLang];
      if (qText) await speak(qText, lang.targetLang, trainer.voiceProfile);
      for (const opt of question.options) {
        if (cancelled) return;
        const optText = opt[lang.targetLang];
        if (optText) await speak(optText, lang.targetLang, trainer.voiceProfile);
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoPlay, block.id, current]);

  function pickOption(optionIndex: number) {
    if (!question || hasAnswered) return; // one answer per question, no changing your mind — keeps the "right/try again" feedback meaningful
    setSelected((s) => ({ ...s, [question.id]: optionIndex }));
  }

  function nextQuestion() {
    if (!isLast) setCurrent(current + 1);
  }

  useEffect(() => {
    setCurrent(0);
    setSelected({});
  }, [block.id]);

  if (!question) {
    // Defensive fallback — an empty questions array shouldn't happen in
    // authored content, but this avoids a blank/broken slide if it does.
    return (
      <Slide title={resolveDisplayText(block.title ?? {}, lang.targetLang, showAlt) ?? block.title?.en}>
        <p>No questions available.</p>
      </Slide>
    );
  }

  const answeredCorrectly = hasAnswered && selected[question.id] === question.correctIndex;

  return (
    <Slide
      fontScale={block.fontScale}
      title={resolveDisplayText(block.title ?? {}, lang.targetLang, showAlt) ?? block.title?.en}
      footer={
        <>
          <span className="phase-label">
            Question {current + 1} of {content.questions.length}
          </span>
          {hasAnswered && !isLast && <button onClick={nextQuestion}>Next question →</button>}
          {hasAnswered && isLast && <button onClick={onComplete}>Continue →</button>}
        </>
      }
    >
      <div className="question-block">
        <p className="target">{resolveDisplayText(question.question, lang.targetLang, showAlt)}</p>
        <p className="source">{resolveDisplayText(question.question, lang.sourceLang, showAlt)}</p>
        <div className="options">
          {question.options.map((opt, i) => {
            const isSelected = selected[question.id] === i;
            const isCorrect = i === question.correctIndex;
            const showFeedback = hasAnswered && (isSelected || isCorrect);
            const stateClass = !hasAnswered
              ? ""
              : isSelected && isCorrect
              ? " correct"
              : isSelected && !isCorrect
              ? " incorrect"
              : isCorrect
              ? " reveal-correct"
              : "";
            return (
              <button
                key={i}
                className={`option-btn${stateClass}`}
                onClick={() => pickOption(i)}
                disabled={hasAnswered}
              >
                <span className="target">{resolveDisplayText(opt, lang.targetLang, showAlt)}</span>
                <span className="source">{resolveDisplayText(opt, lang.sourceLang, showAlt)}</span>
                {showFeedback && (isSelected ? (isCorrect ? " ✅" : " ❌") : isCorrect ? " ✅" : "")}
              </button>
            );
          })}
        </div>
        {hasAnswered && (
          <p className={`feedback ${answeredCorrectly ? "match" : "no-match"}`}>
            {answeredCorrectly ? "Correct!" : "Not quite — the correct answer is marked above."}
          </p>
        )}
      </div>
    </Slide>
  );
}
