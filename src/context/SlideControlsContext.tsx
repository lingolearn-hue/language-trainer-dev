import { createContext, useContext } from "react";

// DOM node that Slide's footer (phase controls, "Continue" button, etc.)
// portals into when set — lets the controls render at full size in the
// right-hand rail (landscape mode) instead of scaling down along with
// the slide's own transform. When null (portrait, or before the rail
// mounts), Slide falls back to rendering the footer inline under the
// slide content, same as before this existed.
export const SlideControlsContext = createContext<HTMLDivElement | null>(null);

export function useSlideControlsTarget(): HTMLDivElement | null {
  return useContext(SlideControlsContext);
}
