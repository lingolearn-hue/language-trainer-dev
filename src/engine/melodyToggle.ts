// Shared on/off state for the "play melody instead of spoken lyrics"
// toggle shown on song slides — same lightweight pub/sub pattern as
// engine/speech.ts's rate controls, so any component can read/set it
// without prop-drilling.
type Listener = (on: boolean) => void;
const listeners = new Set<Listener>();
let melodyOn = false;

export function isMelodyOn(): boolean {
  return melodyOn;
}

export function setMelodyOn(on: boolean): void {
  melodyOn = on;
  listeners.forEach((l) => l(on));
}

export function toggleMelody(): void {
  setMelodyOn(!melodyOn);
}

export function subscribeMelody(listener: Listener): () => void {
  listeners.add(listener);
  listener(melodyOn);
  return () => listeners.delete(listener);
}
