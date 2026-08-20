import type { SongMelody } from "../engine/melodyPlayer";

// Plain note-sequence transcriptions of well-known, centuries-old public
// domain children's melodies — written directly here rather than sourced
// from any external MIDI file. See docs and the conversation history for
// why: a specific MIDI file is often someone's copyrighted arrangement
// even when the underlying melody is public domain, and MIDI archive
// sites aren't reachable from this environment's network access anyway.
// A plain transcription of a public-domain tune's notes has neither
// problem.
//
// Keyed by the song BLOCK's id (not the lesson id), and each melody's
// `lines` record is keyed by that block's own lyric LINE ids — see each
// lesson file's songBlock for the source of truth. Intentionally
// simplified/approximate rather than note-perfect transcriptions; the
// goal is a recognizable backing tune for the melody toggle, not sheet
// music.
export const SONG_MELODIES: Record<string, SongMelody> = {
  // Row, Row, Row Your Boat — shared identical melody for both the
  // German (lesson11.ts) and Japanese (lessonJapanese11.ts) versions,
  // since it's the same tune either way.
  "de11-song": {
    bpm: 100,
    lines: {
      sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 2 }],
      sg2: [{ pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "G4", beats: 2 }],
      sg3: [{ pitch: "C5", beats: 0.5 }, { pitch: "C5", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }],
      sg4: [{ pitch: "G4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "C4", beats: 2 }],
    },
  },
  "ja11-song": {
    bpm: 100,
    lines: {
      sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 2 }],
      sg2: [{ pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "G4", beats: 2 }],
      sg3: [{ pitch: "C5", beats: 0.5 }, { pitch: "C5", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }],
      sg4: [{ pitch: "G4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "C4", beats: 2 }],
    },
  },

  // Frère Jacques / Bruder Jakob (lesson2.ts)
  "l2-readalong-bruderjakob": {
    bpm: 108,
    lines: {
      r1: [{ pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
      r2: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      r3: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      r4: [{ pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
      r5: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
      r6: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
    },
  },

  // Alle meine Entchen (lesson2.ts)
  "l2-readalong-entchen": {
    bpm: 108,
    lines: {
      e1: [{ pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      e2: [{ pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 4 }],
      e3: [{ pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 4 }],
      e4: [{ pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 4 }],
      e5: [{ pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 4 }],
    },
  },

  // London Bridge Is Falling Down (lessonJapanese12.ts)
  "ja12-song": {
    bpm: 112,
    lines: {
      sg1: [{ pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg2: [{ pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 2 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg3: [{ pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg4: [{ pitch: "G4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 2 }],
    },
  },

  // Twinkle Twinkle Little Star (lessonJapanese13.ts)
  "ja13-song": {
    bpm: 100,
    lines: {
      sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg2: [{ pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 2 }],
      sg3: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
      sg4: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
    },
  },

  // Head, Shoulders, Knees and Toes (lessonJapanese2.ts)
  "ja2-song": {
    bpm: 120,
    lines: {
      sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }],
      sg2: [{ pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
      sg3: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }],
      sg4: [{ pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
      sg5: [{ pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 1 }],
      sg6: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 2 }],
    },
  },

  // Itsy Bitsy Spider (lessonJapanese7.ts)
  "ja7-song": {
    bpm: 110,
    lines: {
      sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
      sg2: [{ pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
      sg3: [{ pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
      sg4: [{ pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
    },
  },

  // Old MacDonald Had a Farm (lessonJapanese9.ts)
  "ja9-song": {
    bpm: 116,
    lines: {
      sg1: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
      sg2: [{ pitch: "B4", beats: 1 }, { pitch: "B4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg3: [{ pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg4: [{ pitch: "B4", beats: 1 }, { pitch: "B4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
      sg5: [{ pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }],
      sg6: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
    },
  },
};
