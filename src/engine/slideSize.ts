// Tracks the ACTUAL rendered pixel size of the current slide (after
// fit-to-screen scaling) — not the size of its outer container, which
// is often larger due to letterboxing when the container's aspect ratio
// doesn't match the slide's fixed 16:10. Slide.tsx reports its computed
// size here on every resize; Session.tsx subscribes to size and
// position the caption/footer overlay exactly over the visible slide
// graphic instead of the outer box (which could leave them floating in
// empty letterbox space below/beside the actual slide).
export interface SlideRect {
  width: number;
  height: number;
}

let currentSize: SlideRect = { width: 0, height: 0 };
type Listener = (size: SlideRect) => void;
const listeners = new Set<Listener>();

export function reportSlideSize(width: number, height: number) {
  if (currentSize.width === width && currentSize.height === height) return;
  currentSize = { width, height };
  listeners.forEach((l) => l(currentSize));
}

export function getSlideSize(): SlideRect {
  return currentSize;
}

export function subscribeSlideSize(listener: Listener): () => void {
  listeners.add(listener);
  listener(currentSize);
  return () => listeners.delete(listener);
}
