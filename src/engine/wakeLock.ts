// Screen Wake Lock — sessions run 45-90 minutes with long stretches of
// passive listening (readalong/song phases especially), so the device
// screen must not auto-dim or lock mid-lesson. Uses the standard Wake
// Lock API where available; feature-detected since Safari/older browsers
// don't support it — the lesson still works there, just without this
// guarantee (same graceful-degradation pattern as engine/recognition.ts).
//
// Minimal self-contained typing instead of relying on lib.dom's
// WakeLockSentinel, which isn't consistently available across TS/lib
// configurations (same issue hit in recognition.ts).
interface MinimalWakeLockSentinel {
  released: boolean;
  release(): Promise<void>;
  addEventListener(type: "release", listener: () => void): void;
}

interface MinimalWakeLock {
  request(type: "screen"): Promise<MinimalWakeLockSentinel>;
}

function getWakeLockApi(): MinimalWakeLock | null {
  const nav = navigator as Navigator & { wakeLock?: MinimalWakeLock };
  return nav.wakeLock ?? null;
}

export function isWakeLockSupported(): boolean {
  return getWakeLockApi() !== null;
}

let currentLock: MinimalWakeLockSentinel | null = null;

export async function acquireWakeLock(): Promise<boolean> {
  const api = getWakeLockApi();
  if (!api) return false;
  try {
    // Browsers auto-release the lock when a tab loses visibility; re-request
    // rather than assume a stale sentinel is still valid.
    if (currentLock && !currentLock.released) return true;
    currentLock = await api.request("screen");
    currentLock.addEventListener("release", () => {
      currentLock = null;
    });
    return true;
  } catch {
    // Request can reject (e.g. low battery, permissions) — non-fatal.
    currentLock = null;
    return false;
  }
}

export async function releaseWakeLock(): Promise<void> {
  if (currentLock && !currentLock.released) {
    try {
      await currentLock.release();
    } catch {
      // ignore — already released or unreleasable
    }
  }
  currentLock = null;
}
