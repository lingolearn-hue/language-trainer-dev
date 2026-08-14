import { useEffect, useState } from "react";

// Tracks orientation via matchMedia so layout decisions (e.g. where slide
// controls render — see SlideControlsContext) can react live to rotation
// / window resize, not just on mount.
export function useIsLandscape(): boolean {
  const [landscape, setLandscape] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(orientation: landscape)").matches
      : true
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(orientation: landscape)");
    const handler = () => setLandscape(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return landscape;
}
