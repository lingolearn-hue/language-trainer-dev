// Plays a song's melody via the Web Audio API (simple oscillator tones),
// synced line-by-line to the SAME lyric lines already in each song
// block's content — no external audio/MIDI files needed at all. See
// data/songMelodies.ts for why: MIDI archive sites aren't reachable from
// here, and a specific MIDI file is often someone's copyrighted
// arrangement even when the underlying melody (these are all centuries-
// old public domain tunes) isn't. A plain note-sequence transcription
// avoids that entirely.
export interface MelodyNote {
  pitch: string | null; // e.g. "C4"; null = rest
  beats: number; // relative duration, e.g. 1 = quarter note at the song's bpm
}

export interface SongMelody {
  bpm: number;
  lines: Record<string, MelodyNote[]>; // keyed by the song block's own line ids
}

const NOTE_FREQ: Record<string, number> = (() => {
  const names = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const freqs: Record<string, number> = {};
  for (let octave = 3; octave <= 6; octave++) {
    names.forEach((name, i) => {
      const midi = (octave + 1) * 12 + i;
      freqs[`${name}${octave}`] = 440 * Math.pow(2, (midi - 69) / 12);
    });
  }
  return freqs;
})();

let audioCtx: AudioContext | null = null;
function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const AC = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AC) return null;
  if (!audioCtx) audioCtx = new AC();
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

let currentStopFns: Array<() => void> = [];

// Stops any notes currently sounding — called when a block changes or
// the melody toggle is switched off mid-line, same cancellation
// philosophy as cancelSpeech() in engine/speech.ts.
export function stopMelody(): void {
  currentStopFns.forEach((stop) => stop());
  currentStopFns = [];
}

// Plays one line's note sequence and resolves once it's done playing —
// awaited the same way speak() is, so it drops into ReadalongBlock's
// existing phase loop (pauses, cancellation checks, etc.) with no other
// changes needed there.
export function playMelodyLine(melody: SongMelody, lineId: string): Promise<void> {
  const notes = melody.lines[lineId];
  const ctx = getCtx();
  if (!notes || !ctx) return Promise.resolve();

  const beatSec = 60 / melody.bpm;
  let cursor = ctx.currentTime;
  const stopFns: Array<() => void> = [];

  for (const note of notes) {
    const dur = note.beats * beatSec;
    if (note.pitch && NOTE_FREQ[note.pitch]) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = NOTE_FREQ[note.pitch];
      // Short fade in/out per note avoids audible clicking between notes.
      const fade = Math.min(0.03, dur / 4);
      gain.gain.setValueAtTime(0, cursor);
      gain.gain.linearRampToValueAtTime(0.22, cursor + fade);
      gain.gain.setValueAtTime(0.22, cursor + dur - fade);
      gain.gain.linearRampToValueAtTime(0, cursor + dur);
      osc.connect(gain).connect(ctx.destination);
      osc.start(cursor);
      osc.stop(cursor + dur);
      stopFns.push(() => {
        try {
          osc.stop();
        } catch {
          /* already stopped */
        }
      });
    }
    cursor += dur;
  }

  currentStopFns = stopFns;
  const totalMs = (cursor - ctx.currentTime) * 1000;
  return new Promise((resolve) => setTimeout(resolve, Math.max(0, totalMs)));
}
