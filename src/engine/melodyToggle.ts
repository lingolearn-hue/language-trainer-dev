// Shared state for the song-slide toggle — 3 modes now instead of a
// boolean: "lyrics" (spoken, no melody — the old off), "melody" (tones
// only, no voice — the old on), and "both" (spoken AND melody together,
// notes anchored to real word-boundary timing — see
// engine/melodyPlayer.ts's speakLineWithMelody). Same lightweight
// pub/sub pattern as engine/speech.ts's rate controls.
export type MelodyMode = "lyrics" | "melody" | "both";

type Listener = (mode: MelodyMode) => void;
const listeners = new Set<Listener>();
let mode: MelodyMode = "lyrics";

export function getMelodyMode(): MelodyMode {
  return mode;
}

export function setMelodyMode(next: MelodyMode): void {
  mode = next;
  listeners.forEach((l) => l(next));
}

export function cycleMelodyMode(): void {
  const order: MelodyMode[] = ["lyrics", "melody", "both"];
  setMelodyMode(order[(order.indexOf(mode) + 1) % order.length]);
}

export function subscribeMelody(listener: Listener): () => void {
  listeners.add(listener);
  listener(mode);
  return () => listeners.delete(listener);
}

// Back-compat shim for any remaining boolean-style checks —
// "on" now means either melody-only or overlay mode, since both
// involve the melody actually sounding.
export function isMelodyOn(): boolean {
  return mode !== "lyrics";
}
