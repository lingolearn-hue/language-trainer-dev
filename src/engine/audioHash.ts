import type { LangCode } from "../types";

// Content-addressed, not ID-addressed: the audio file for an utterance
// is named after a hash of (voiceId, lang, text) itself, not after the
// topic/block id that happens to produce that text right now. This
// matters a lot in a codebase where wording gets corrected constantly
// (this project's whole history is full of "shortened this note",
// "fixed this translation", "removed this Japanese-comparison aside") —
// with ID-keyed audio, every one of those edits would silently leave a
// stale, mismatched clip sitting there with nothing to flag it. With
// content-addressed audio, an edited line's hash simply changes, the
// old file stops matching, playback falls back to WebSpeech
// automatically, and it shows up in the next manifest diff as
// "needs generation" — staleness becomes structurally impossible
// rather than something that has to be remembered.
//
// Isomorphic on purpose: both the browser runtime (speech.ts, checking
// "do I have a pre-generated clip for this?") and the Node generation
// script (scripts/tts-manifest.ts, deciding what to hand the TTS
// engine) need to compute the *exact same* hash for the exact same
// input, or lookups silently miss. Rather than maintain two
// implementations that could drift, this uses Web Crypto's
// crypto.subtle.digest, which is natively available both in every
// modern browser and in Node (18.19+ via globalThis.crypto, no
// separate 'crypto' module import needed) — one implementation, two
// environments.

// Same voiceProfile (lang/pitch/rate/voicesByLang) sounds identical
// regardless of which trainer object happens to hold it, so audio is
// legitimately shareable in that case, not just coincidentally alike.
// Keyed on content, not on trainer.id, for the same reason utterance
// audio itself is content-keyed rather than id-keyed above.
export function voiceIdFor(preference: {
  lang?: string;
  pitch?: number;
  rate?: number;
  voicesByLang?: Partial<Record<LangCode, string | string[]>>;
} | undefined): string {
  if (!preference) return "default";
  // Sorted keys so JSON.stringify is deterministic regardless of the
  // object literal's own property order at each call site.
  const voicesByLang = preference.voicesByLang ?? {};
  const sortedVoices = Object.keys(voicesByLang)
    .sort()
    .reduce<Record<string, string | string[]>>((acc, k) => {
      acc[k] = voicesByLang[k as LangCode]!;
      return acc;
    }, {});
  return JSON.stringify({
    lang: preference.lang ?? "",
    pitch: preference.pitch ?? 1,
    rate: preference.rate ?? 1,
    voicesByLang: sortedVoices,
  });
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

// 16 hex chars (64 bits) — astronomically more than enough to avoid
// collision across a few thousand short utterances, short enough to
// keep filenames and the bundled index compact.
const HASH_LENGTH = 16;

export async function audioHash(voiceId: string, lang: LangCode, text: string): Promise<string> {
  const input = `${voiceId}|${lang}|${text}`;
  const bytes = new TextEncoder().encode(input);
  const digest = await crypto.subtle.digest("SHA-256", bytes);
  return toHex(digest).slice(0, HASH_LENGTH);
}
