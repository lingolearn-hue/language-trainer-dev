import { useEffect, useState } from "react";
import {
  adjustRateMultiplier,
  getRateMultiplier,
  subscribeRate,
  RATE_MIN,
  RATE_MAX,
  RATE_STEP,
} from "../engine/speech";

// Global speech-rate control — persistent across the whole session (not
// per-block), so it lives in the right-hand rail alongside the avatars
// rather than in any single block's footer. Adjusts a multiplier applied
// on top of each trainer's own base rate (see engine/speech.ts).
export function RateControls() {
  const [rate, setRate] = useState(getRateMultiplier());

  useEffect(() => subscribeRate(setRate), []);

  return (
    <div className="rate-controls">
      <button
        disabled={rate <= RATE_MIN + 1e-9}
        onClick={() => adjustRateMultiplier(-RATE_STEP)}
        title="Slower"
      >
        🐢 Slower
      </button>
      <span className="rate-value">{rate.toFixed(2)}×</span>
      <button
        disabled={rate >= RATE_MAX - 1e-9}
        onClick={() => adjustRateMultiplier(RATE_STEP)}
        title="Faster"
      >
        🐇 Faster
      </button>
    </div>
  );
}
