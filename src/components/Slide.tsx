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
  fontScale?: number; // extra content-only scale, for flexible-style split slides — independent of the fit-to-screen scale below, doesn't affect reportSlideSize
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
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
      // and no wasted gap. (A height-only scale previously caused
      // portrait overflow — a narrow-tall container would scale the
      // fixed 960-wide slide up past the container's actual width.)
      const nextScale = Math.min(width / BASE_WIDTH, height / BASE_HEIGHT);
      setScale(nextScale);
      // Reported for Session.tsx to position the caption/nav-footer
      // overlay exactly over the visible slide graphic, not the outer
      // (often larger, letterboxed) container — see engine/slideSize.ts.
      reportSlideSize(BASE_WIDTH * nextScale, BASE_HEIGHT * nextScale);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="slide-fit-container" ref={containerRef}>
      <div
        className="slide-frame"
        style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
      >
        {title && <h2 className="slide-title">{title}</h2>}
        <div
          className="slide-content"
          style={fontScale && fontScale !== 1 ? { transform: `scale(${fontScale})`, transformOrigin: "center center" } : undefined}
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
