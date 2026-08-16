import { useEffect, useRef, useState } from "react";
import { checkForUpdate, forceUpdate, subscribeUpdateAvailable } from "../pwa";

// "Check for updates" on the front page — forces the service worker to
// check the network for a new build (browsers throttle this
// automatically otherwise) and, if one's found, activates it and
// reloads immediately. If nothing new is found, just gives brief
// feedback rather than silently doing nothing.
export function UpdateCheckButton() {
  const [status, setStatus] = useState<"idle" | "checking" | "up-to-date">("idle");
  const updateAvailableRef = useRef(false);

  useEffect(() => subscribeUpdateAvailable((available) => (updateAvailableRef.current = available)), []);

  async function handleClick() {
    setStatus("checking");
    await checkForUpdate();
    // The service worker reports a new version asynchronously
    // (onNeedRefresh) — give it a moment before deciding there's
    // nothing to update.
    await new Promise((r) => setTimeout(r, 1200));
    if (updateAvailableRef.current) {
      await forceUpdate(); // activates the new SW and reloads
      return;
    }
    setStatus("up-to-date");
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <button className="update-check-button" onClick={handleClick} disabled={status === "checking"}>
      {status === "checking" ? "Checking…" : status === "up-to-date" ? "Up to date ✓" : "🔄 Check for updates"}
    </button>
  );
}
