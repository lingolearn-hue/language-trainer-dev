import type { ReactNode } from "react";

// Beamer-style slide frame: fixed size, actual Beamer proportions (4:3),
// rendered at its natural size — no scale-to-fit/letterboxing. If content
// or viewport doesn't fit, it scrolls; the slide itself never shrinks or
// stretches to fill the screen. This matches how a real .beamer PDF looks
// when placed in a page rather than a "responsive" web layout.
export function Slide({
  title,
  footer,
  children,
}: {
  title?: ReactNode;
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="slide-frame">
      {title && <h2 className="slide-title">{title}</h2>}
      <div className="slide-content">{children}</div>
      {footer && <div className="slide-footer">{footer}</div>}
    </div>
  );
}
