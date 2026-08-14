import { useEffect, useState } from "react";
import { adjustRateOffset, getRates, subscribeRate, RATE_MIN, RATE_MAX, RATE_STEP } from "../engine/speech";

// Global speech-rate control — persistent across the whole session (not
// per-block), so it lives in the right-hand rail alongside the avatars
// rather than in any single block's footer. The target (learning)
// language reads slower, the source (student's own) language reads
// faster — Faster/Slower here shifts both together, preserving that
// gap, rather than offering two separate controls (simpler for the
// student, and the gap itself is the actual pedagogical point).
export function RateControls() {
  const [rates, setRates] = useState(getRates());

  useEffect(() => subscribeRate(setRates), []);

  const atMin = rates.target <= RATE_MIN + 1e-9;
  const atMax = rates.target >= RATE_MAX - 1e-9 || rates.source >= RATE_MAX - 1e-9;

  return (
    <div className="rate-controls">
      <button disabled={atMin} onClick={() => adjustRateOffset(-RATE_STEP)} title="Slower">
        🐢 Slower
      </button>
      <span className="rate-value">
        target {rates.target.toFixed(2)}× · source {rates.source.toFixed(2)}×
      </span>
      <button disabled={atMax} onClick={() => adjustRateOffset(RATE_STEP)} title="Faster">
        🐇 Faster
      </button>
    </div>
  );
}
