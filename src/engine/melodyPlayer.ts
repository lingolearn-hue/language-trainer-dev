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

// Schedules a group of notes starting right now (ctx.currentTime),
// back-to-back per their own beat durations — used both by
// playMelodyLine (the whole line, melody-only mode) and by
// speakLineWithMelody in engine/speech.ts (one word's worth of notes at
// a time, anchored to real onboundary event timing, for the voice+
// melody overlay mode). Returns how long the group takes to play, in ms.
export function playNoteGroup(bpm: number, notes: MelodyNote[]): number {
  const ctx = getCtx();
  if (!ctx || notes.length === 0) return 0;

  const beatSec = 60 / bpm;
  let cursor = ctx.currentTime;
  const startedAt = cursor;

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
      currentStopFns.push(() => {
        try {
          osc.stop();
        } catch {
          /* already stopped */
        }
      });
    }
    cursor += dur;
  }

  return (cursor - startedAt) * 1000;
}

// Splits an ordered note list into `groupCount` groups, as evenly as
// possible, using every note exactly once — e.g. 7 notes into 3 groups
// gives [3, 2, 2] rather than an uneven [1, 1, 5]. Used to map a line's
// melody notes onto its words for the voice+melody overlay mode, since
// melody data is written one note per syllable while word-boundary
// events only give word-level timing — see engine/speech.ts's
// speakLineWithMelody for the honest limitation this implies.
export function distributeNotes<T>(notes: T[], groupCount: number): T[][] {
  const groups: T[][] = [];
  let idx = 0;
  for (let g = 1; g <= groupCount; g++) {
    const end = Math.round((g * notes.length) / groupCount);
    groups.push(notes.slice(idx, end));
    idx = end;
  }
  return groups;
}

// Plays one line's note sequence and resolves once it's done playing —
// awaited the same way speak() is, so it drops into ReadalongBlock's
// existing phase loop (pauses, cancellation checks, etc.) with no other
// changes needed there.
export function playMelodyLine(melody: SongMelody, lineId: string): Promise<void> {
  const notes = melody.lines[lineId];
  if (!notes) return Promise.resolve();
  currentStopFns = []; // fresh line — previous line's (already-finished) stop fns don't need to accumulate forever
  const durationMs = playNoteGroup(melody.bpm, notes);
  return new Promise((resolve) => setTimeout(resolve, durationMs));
}
