import { useEffect, useRef, useState } from "react";
import { createAvatar } from "@dicebear/core";
import { lorelei, notionists, openPeeps } from "@dicebear/collection";

// TEMPORARY dev/comparison tool — not a permanent feature. Lets us look
// at real generated trainer-avatar candidates directly in the deployed
// app (a standalone HTML file wasn't opening reliably) instead of
// needing a downloaded file. Safe to delete this whole file + its entry
// point once a style is picked and the real avatars are wired in.
//
// All three styles are CC0 (public domain, no attribution required —
// more permissive than MIT): Lorelei (Lisa Wischofsky, hand-drawn line
// art), Notionists (flat illustrated), Open Peeps (Pablo Stanley).

const STYLES: Array<{ id: string; name: string; license: string; collection: unknown }> = [
  { id: "lorelei", name: "Lorelei", license: "CC0 — Lisa Wischofsky (hand-drawn line art)", collection: lorelei },
  { id: "notionists", name: "Notionists", license: "CC0 — flat illustrated style", collection: notionists },
  { id: "open-peeps", name: "Open Peeps", license: "CC0 — Pablo Stanley (illustrated people)", collection: openPeeps },
];

const SEEDS = [
  { seed: "t-max", name: "Max" },
  { seed: "t-jonas", name: "Jonas" },
  { seed: "t-lena", name: "Lena" },
  { seed: "t-mei", name: "Mei" },
  { seed: "t-yui", name: "Yui" },
  { seed: "t-hiro", name: "Hiro" },
];

// Two option keys/values per style — hand-picked earlier by rendering
// several variants and visually confirming which read as "mouth closed"
// vs "mouth open / talking".
const MOUTH_OPTIONS: Record<string, { closed: Record<string, string[]>; open: Record<string, string[]> }> = {
  lorelei: { closed: { mouth: ["happy01"] }, open: { mouth: ["sad01"] } },
  notionists: { closed: { lips: ["variant01"] }, open: { lips: ["variant15"] } },
  "open-peeps": { closed: { face: ["calm"] }, open: { face: ["explaining"] } },
};

function svgFor(collection: unknown, seed: string, extra: Record<string, string[]>): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return createAvatar(collection as any, { seed, size: 110, ...extra }).toString();
}

function AnimatedAvatar({ collection, styleId, seed }: { collection: unknown; styleId: string; seed: string }) {
  const [talking, setTalking] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const opts = MOUTH_OPTIONS[styleId];

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function toggle() {
    if (talking) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTalking(false);
      setMouthOpen(false);
      return;
    }
    setTalking(true);
    intervalRef.current = setInterval(() => setMouthOpen((o) => !o), 220);
  }

  const svg = svgFor(collection, seed, mouthOpen ? opts.open : opts.closed);

  return (
    <div className="avatar-compare-card">
      <button className="avatar-compare-talk-btn" onClick={toggle}>
        {talking ? "⏸ Stop" : "▶ Animate"}
      </button>
      <div className="avatar-compare-circle" dangerouslySetInnerHTML={{ __html: svg }} />
    </div>
  );
}

export function AvatarStyleComparison({ onClose }: { onClose: () => void }) {
  return (
    <div className="avatar-compare-overlay">
      <div className="avatar-compare-panel">
        <button className="avatar-compare-close" onClick={onClose}>
          ✕ Close
        </button>
        <h1>Trainer Avatar Style Comparison</h1>
        <p className="avatar-compare-subtitle">
          All CC0 (public domain, no attribution required). Tap "Animate" under any face for the talking
          (mouth open/closed swap) preview.
        </p>

        {STYLES.map((style) => (
          <div key={style.id} className="avatar-compare-section">
            <div className="avatar-compare-header">
              <h2>{style.name}</h2>
              <span className="avatar-compare-license">{style.license}</span>
            </div>

            <div className="avatar-compare-row-label">Static</div>
            <div className="avatar-compare-grid">
              {SEEDS.map(({ seed, name }) => (
                <div key={seed} className="avatar-compare-card">
                  <div
                    className="avatar-compare-circle"
                    dangerouslySetInnerHTML={{ __html: svgFor(style.collection, seed, MOUTH_OPTIONS[style.id].closed) }}
                  />
                  <div className="avatar-compare-name">{name}</div>
                </div>
              ))}
            </div>

            <div className="avatar-compare-row-label">Animated (talking)</div>
            <div className="avatar-compare-grid">
              {SEEDS.map(({ seed, name }) => (
                <div key={seed}>
                  <AnimatedAvatar collection={style.collection} styleId={style.id} seed={seed} />
                  <div className="avatar-compare-name">{name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
