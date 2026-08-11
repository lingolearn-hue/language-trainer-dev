import type { ReactNode } from "react";

// Beamer-style slide frame: fixed 16:9 canvas, title bar, dense content area,
// footer with lesson/slide counter. Scales to fit viewport (letterboxed),
// same idea as projecting an actual .beamer deck. Content components are
// responsible for their own density — this just gives them a consistent
// full-slide surface instead of a scrolling card.
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
    <div className="slide-viewport">
      <div className="slide-frame">
        {title && <h2 className="slide-title">{title}</h2>}
        <div className="slide-content">{children}</div>
        {footer && <div className="slide-footer">{footer}</div>}
      </div>
    </div>
  );
}
