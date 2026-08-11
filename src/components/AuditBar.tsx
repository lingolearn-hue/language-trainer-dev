import { useState } from "react";
import { useSession } from "../context/SessionContext";
import { getSpokenLines } from "../engine/spokenLines";

// Not part of the real session UX — a review/QA tool for scrubbing through
// every slide of a lesson quickly, and inspecting exactly what text a
// trainer would speak on the current slide without playing audio.
export function AuditBar() {
  const { state, dispatch } = useSession();
  const { lesson, blockIndex, lang } = state;
  const [showOverlay, setShowOverlay] = useState(false);
  const [showJumpList, setShowJumpList] = useState(false);

  const currentBlock = lesson.blocks[blockIndex];
  const spoken = currentBlock ? getSpokenLines(currentBlock, lang.targetLang) : [];

  return (
    <>
      <div className="audit-bar">
        <button
          onClick={() => dispatch({ type: "GOTO_BLOCK", index: blockIndex - 1 })}
          disabled={blockIndex === 0}
          title="Previous slide"
        >
          ◀
        </button>

        <button className="audit-jump-label" onClick={() => setShowJumpList((s) => !s)}>
          Slide {blockIndex + 1} / {lesson.blocks.length}: {currentBlock?.type}
        </button>

        <button
          onClick={() => dispatch({ type: "GOTO_BLOCK", index: blockIndex + 1 })}
          disabled={blockIndex === lesson.blocks.length - 1}
          title="Next slide"
        >
          ▶
        </button>

        <button
          className={showOverlay ? "active" : ""}
          onClick={() => setShowOverlay((s) => !s)}
          title="Show verbal explanation for this slide"
        >
          🗨 Verbal text
        </button>
      </div>

      {showJumpList && (
        <div className="audit-jump-list">
          {lesson.blocks.map((b, i) => (
            <button
              key={b.id}
              className={i === blockIndex ? "active" : ""}
              onClick={() => {
                dispatch({ type: "GOTO_BLOCK", index: i });
                setShowJumpList(false);
              }}
            >
              {i + 1}. {b.title?.[lang.targetLang] ?? b.title?.en ?? b.id} ({b.type})
            </button>
          ))}
        </div>
      )}

      {showOverlay && (
        <div className="audit-overlay" onClick={() => setShowOverlay(false)}>
          <div className="audit-overlay-panel" onClick={(e) => e.stopPropagation()}>
            <h3>
              Verbal content — slide {blockIndex + 1} ({currentBlock?.type})
            </h3>
            {spoken.length === 0 && <p>No spoken text on this slide.</p>}
            <ul>
              {spoken.map((line) => (
                <li key={line.label}>
                  <span className="label">{line.label}</span>
                  <span className="text">{line.text}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => setShowOverlay(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
