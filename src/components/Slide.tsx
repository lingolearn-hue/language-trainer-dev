import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { useSlideControlsTarget } from "../context/SlideControlsContext";
import { reportSlideSize } from "../engine/slideSize";

const BASE_WIDTH = 960;
const BASE_HEIGHT = 600; // 16:10 (960x600) — was 16:9 (960x540); a bit taller/tighter, especially for portrait

// Beamer-style slide: the internal layout/typography is still fixed at a
// literal 960x540 "beamer" coordinate system (same title/content/footer
// structure, same fixed font sizes) — that part hasn't changed. What's new
// is that the whole thing is scaled via CSS transform to always fully fill
// either the available width or the available height (whichever is the
// tighter constraint), like a PDF viewer's "fit to screen". No cropping,
// no partial overflow, no manual scrolling to see the rest of a slide.
export function Slide({
  title,
  footer,
  children,
  fontScale,
}: {
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
  fontScale?: number; // extra content-only scale, for phone-style split slides — independent of the fit-to-screen scale below, doesn't affect reportSlideSize
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const [isPortrait, setIsPortrait] = useState(false);
  const controlsTarget = useSlideControlsTarget();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      // Fit-to-screen: scale by whichever dimension is tighter, so the
      // slide always fits fully inside its container with no overflow
      // and no wasted gap. Portrait is the exception: preserving the
      // fixed 16:10 BASE_WIDTH/BASE_HEIGHT ratio in a tall narrow
      // container means width is always the binding constraint, which
      // forces a short, small, vertically-centered slide with a lot of
      // empty space above/below — not what "fill the screen" should
      // mean on a phone. Portrait skips the transform-scale system
      // altogether (scale locked at 1) and lets .slide-frame's own
      // width:100%/height:100% (see the portrait override in App.css)
      // fill the container directly — content sizes at its own normal
      // CSS px values rather than a proportionally-scaled fixed canvas.
      const nextIsPortrait = height > width;
      const nextScale = nextIsPortrait ? 1 : Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);
      setScale(nextScale);
      setIsPortrait(nextIsPortrait);
      // Reported for Session.tsx to position the caption/nav-footer
      // overlay exactly over the visible slide graphic, not the outer
      // (often larger, letterboxed) container — see engine/slideSize.ts.
      // In portrait, the frame fills the container directly (no
      // transform-scale involved — see above), so the "visible slide
      // graphic" size IS the container's own measured size, not a
      // BASE_WIDTH/BASE_HEIGHT-derived figure (which would wrongly
      // report 960x600 now that nextScale is locked to 1 there).
      reportSlideSize(nextIsPortrait ? width : BASE_WIDTH * nextScale, nextIsPortrait ? height : BASE_HEIGHT * nextScale);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // fontScale (phone-style split slides, see phoneStyle.ts) is an
  // *additional* content-only zoom on top of whatever .slide-frame's own
  // scale is doing — meant to make phone-style's already-large-relative
  // text look a bit bigger still. In landscape that's harmless: the
  // whole frame (including .slide-title, a sibling of .slide-content)
  // is being proportionally scaled together by the fit-to-screen system
  // above, so an extra content-only bump just makes text modestly
  // larger within its own box. In portrait it's actively broken: scale
  // is locked to 1 there (nothing else is shrinking the frame down for
  // this to compensate for), .slide-title sits OUTSIDE .slide-content
  // as a sibling and is unaffected by this transform, and
  // transformOrigin "center center" grows the content box in every
  // direction from its middle — so a 1.3x zoom on content that already
  // fills its container pushes it up and out, overlapping the title
  // above it (this was the actual cause of "the noun/verb headline
  // clips the title" on phone-style portrait vocab slides — nothing to
  // do with the vocab-group-label's own CSS). Portrait's own font-size
  // logic (ReadalongBlock.tsx/VocabDrillBlock.tsx's isPortrait-aware
  // budget) already sizes text appropriately without this, so just
  // skip it there.
  const applyFontScale = fontScale && fontScale !== 1 && !isPortrait;

  return (
    <div className="slide-fit-container" ref={containerRef}>
      <div
        className="slide-frame"
        style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
      >
        {title && <h2 className="slide-title">{title}</h2>}
        <div
          className="slide-content"
          style={applyFontScale ? { transform: `scale(${fontScale})`, transformOrigin: "center center" } : undefined}
        >
          {children}
        </div>
        {/* Landscape: footer portals into the right-hand rail (see
            SlideControlsContext) so buttons render at real size, not
            scaled down with the slide transform above. Portrait (or no
            rail mounted yet): falls back to inline, under the content,
            same as always. */}
        {footer && !controlsTarget && <div className="slide-footer">{footer}</div>}
      </div>
      {footer && controlsTarget && createPortal(<div className="slide-footer">{footer}</div>, controlsTarget)}
    </div>
  );
}
