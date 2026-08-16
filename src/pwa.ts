// PWA service-worker registration + update handling. registerType is
// 'prompt' (see vite.config.ts) — a new service worker installs in the
// background but never takes over silently; it only activates when
// forceUpdate() is called (wired to the "Check for updates" button on
// the front page), so a lesson in progress is never swapped out from
// under someone.
import { registerSW } from "virtual:pwa-register";

let updateAvailable = false;
let updateFn: ((reload?: boolean) => Promise<void>) | null = null;
type Listener = (available: boolean) => void;
const listeners = new Set<Listener>();

export function initPWA() {
  if (updateFn) return; // already initialized
  updateFn = registerSW({
    onNeedRefresh() {
      updateAvailable = true;
      listeners.forEach((l) => l(true));
    },
  });
}

export function subscribeUpdateAvailable(listener: Listener): () => void {
  listeners.add(listener);
  listener(updateAvailable);
  return () => listeners.delete(listener);
}

// Browsers throttle automatic service-worker update checks, so a manual
// "Check for updates" button needs to explicitly ask the existing
// registration to check the network for a new version.
export async function checkForUpdate(): Promise<void> {
  if (!("serviceWorker" in navigator)) return;
  const reg = await navigator.serviceWorker.getRegistration();
  if (reg) await reg.update();
}

// Activates a pending update (skip-waiting) and reloads. If no update is
// actually pending, just reloads — harmless either way, and gives a
// predictable "the button always does something" behavior.
export async function forceUpdate(): Promise<void> {
  if (updateFn) {
    await updateFn(true);
  } else {
    window.location.reload();
  }
}
