import { useEffect, useState } from "react";
import { adjustRateOffset, getRates, subscribeRate, RATE_MIN, RATE_MAX, RATE_STEP } from "../engine/speech";

// Global speech-rate control — persistent across the whole session (not
// per-block), so it lives in the right-hand rail alongside the avatars
// rather than in any single block's footer. Always visible, including in
// declutter mode (see App.css .chrome-hidden rule) — important enough
// that it shouldn't be hideable. The target (learning) language reads
// slower, the source (student's own) language reads faster —
// Faster/Slower here shifts both together, preserving that gap, rather
// than offering two separate controls (simpler for the student, and the
// gap itself is the actual pedagogical point). Displayed percentage is
// the target-language rate only, as one representative number.
export function RateControls() {
  const [rates, setRates] = useState(getRates());

  useEffect(() => subscribeRate(setRates), []);

  const atMin = rates.target <= RATE_MIN + 1e-9;
  const atMax = rates.target >= RATE_MAX - 1e-9 || rates.source >= RATE_MAX - 1e-9;

  return (
    <div className="rate-controls">
      <span className="rate-label">speed</span>
      <div className="rate-row">
        <button
          className="rate-btn"
          disabled={atMax}
          onClick={() => adjustRateOffset(RATE_STEP)}
          title="Faster"
          aria-label="Faster"
        >
          +
        </button>
        <span className="rate-value">{Math.round(rates.target * 100)}%</span>
        <button
          className="rate-btn"
          disabled={atMin}
          onClick={() => adjustRateOffset(-RATE_STEP)}
          title="Slower"
          aria-label="Slower"
        >
          −
        </button>
      </div>
    </div>
  );
}
