// Shared on/off state for the kanji/kana (Japanese) and Hanzi/Pinyin
// (Chinese) display toggle — same lightweight pub/sub pattern as
// engine/speech.ts's rate-control store, so any component can read/set
// it without prop-drilling. See engine/scriptDisplay.ts for how this
// actually changes what text renders.
type Listener = (showAlternateScript: boolean) => void;
const listeners = new Set<Listener>();
let showAlternateScript = false;

export function getShowAlternateScript(): boolean {
  return showAlternateScript;
}

export function setShowAlternateScript(value: boolean): void {
  showAlternateScript = value;
  listeners.forEach((l) => l(value));
}

export function toggleAlternateScript(): void {
  setShowAlternateScript(!showAlternateScript);
}

export function subscribeScriptMode(listener: Listener): () => void {
  listeners.add(listener);
  listener(showAlternateScript);
  return () => listeners.delete(listener);
}
