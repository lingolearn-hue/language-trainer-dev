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
// Named so the "repeat this song on another topic" reuse below can alias
// multiple block ids to the exact same melody object, rather than
// copy-pasting the note data again (and risking a transcription typo
// creeping in on the copy).
const ROW_ROW_ROW_YOUR_BOAT: SongMelody = {
  bpm: 100,
  lines: {
    sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "C4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 2 }],
    sg2: [{ pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "C5", beats: 0.5 }, { pitch: "C5", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }],
    sg4: [{ pitch: "G4", beats: 0.75 }, { pitch: "F4", beats: 0.25 }, { pitch: "E4", beats: 0.75 }, { pitch: "D4", beats: 0.25 }, { pitch: "C4", beats: 2 }],
  },
};

const BRUDER_JAKOB: SongMelody = {
  bpm: 108,
  lines: {
    r1: [{ pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
    r2: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    r3: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    r4: [{ pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
    r5: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
    r6: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
  },
};

const ALLE_MEINE_ENTCHEN: SongMelody = {
  bpm: 108,
  lines: {
    e1: [{ pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    e2: [{ pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 4 }],
    e3: [{ pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 4 }],
    e4: [{ pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 4 }],
    e5: [{ pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 4 }],
  },
};

const LONDON_BRIDGE: SongMelody = {
  bpm: 112,
  lines: {
    sg1: [{ pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg2: [{ pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 2 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg4: [{ pitch: "G4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 2 }],
  },
};

const TWINKLE_TWINKLE: SongMelody = {
  bpm: 100,
  lines: {
    sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg2: [{ pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 2 }],
    sg3: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
    sg4: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
  },
};

const HEAD_SHOULDERS: SongMelody = {
  bpm: 120,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }],
    sg2: [{ pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
    sg3: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }],
    sg4: [{ pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
    sg5: [{ pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 1 }],
    sg6: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 2 }],
  },
};

const ITSY_BITSY_SPIDER: SongMelody = {
  bpm: 110,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
    sg2: [{ pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
    sg3: [{ pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 1 }],
    sg4: [{ pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
  },
};

const OLD_MACDONALD: SongMelody = {
  bpm: 116,
  lines: {
    sg1: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
    sg2: [{ pitch: "B4", beats: 1 }, { pitch: "B4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg4: [{ pitch: "B4", beats: 1 }, { pitch: "B4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg5: [{ pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }],
    sg6: [{ pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 2 }],
  },
};

// Same tune as BRUDER_JAKOB below, but keyed sg1-sg6 (matching the
// topic-system's line-id convention) instead of r1-r6 (lesson2.ts's own
// convention) — needed since topic-01-family/topic-04-emotions's song
// lines use sg1-sg6 ids, reusing lesson2's exact lyrics but as a fresh
// block with the topic system's usual naming.
const BRUDER_JAKOB_SG: SongMelody = {
  bpm: 108,
  lines: {
    sg1: [{ pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
    sg2: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "E4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg4: [{ pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }, { pitch: "C4", beats: 1 }],
    sg5: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
    sg6: [{ pitch: "C4", beats: 1 }, { pitch: "G3", beats: 1 }, { pitch: "C4", beats: 2 }],
  },
};

// Alouette (traditional French) — approximate transcription of the
// well-known melody, 5 phrases matching the 5 lyric lines used here.
const ALOUETTE: SongMelody = {
  bpm: 116,
  lines: {
    sg1: [{ pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
    sg2: [{ pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 2 }],
    sg3: [{ pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }],
    sg4: [{ pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 1 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 1 }],
    sg5: [{ pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 1 }, { pitch: "E4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "C4", beats: 2 }],
  },
};

// This Old Man (traditional English) — simple stepwise children's tune.
const THIS_OLD_MAN: SongMelody = {
  bpm: 120,
  lines: {
    sg1: [{ pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "G4", beats: 1 }, { pitch: "E4", beats: 1 }],
    sg2: [{ pitch: "A4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
    sg3: [{ pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C5", beats: 1 }, { pitch: "A4", beats: 1 }],
    sg4: [{ pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }],
    sg5: [{ pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C4", beats: 2 }],
  },
};

// Ten Little Fingers — same simple ascending counting-song melody
// traditionally used for "Ten Little Indians" (see topic-15-landscape.ts
// for why the lyrics were substituted).
const TEN_LITTLE_FINGERS: SongMelody = {
  bpm: 112,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "D4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 1 }],
    sg2: [{ pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 1 }],
    sg3: [{ pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "B4", beats: 1 }],
    sg4: [{ pitch: "C5", beats: 0.5 }, { pitch: "B4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "C4", beats: 2 }],
  },
};

// Happy Birthday to You — confirmed public domain (Good Morning to You
// Productions Corp. v. Warner/Chappell Music, 2015-2016). Real melody,
// approximate transcription.
const HAPPY_BIRTHDAY: SongMelody = {
  bpm: 100,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.75 }, { pitch: "C4", beats: 0.25 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 2 }],
    sg2: [{ pitch: "C4", beats: 0.75 }, { pitch: "C4", beats: 0.25 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 2 }],
    sg3: [{ pitch: "C4", beats: 0.75 }, { pitch: "C4", beats: 0.25 }, { pitch: "C5", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }],
    sg4: [{ pitch: "A#4", beats: 0.75 }, { pitch: "A#4", beats: 0.25 }, { pitch: "A4", beats: 1 }, { pitch: "F4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "F4", beats: 2 }],
  },
};

// If You're Happy and You Know It — traditional, simple repeating tune.
const IF_YOURE_HAPPY: SongMelody = {
  bpm: 120,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg2: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "C5", beats: 0.5 }, { pitch: "C5", beats: 0.5 }, { pitch: "C5", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "A4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 1 }],
    sg4: [{ pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "C4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "A4", beats: 1 }, { pitch: "A4", beats: 1 }, { pitch: "G4", beats: 2 }],
  },
};

// The Wheels on the Bus — traditional, simple repeating tune.
const WHEELS_ON_THE_BUS: SongMelody = {
  bpm: 112,
  lines: {
    sg1: [{ pitch: "C4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 2 }],
    sg2: [{ pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 2 }],
    sg3: [{ pitch: "C4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "E4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "G4", beats: 2 }],
    sg4: [{ pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "F4", beats: 0.5 }, { pitch: "C4", beats: 2 }],
  },
};

// Mary Had a Little Lamb — traditional, simple stepwise tune.
const MARY_HAD_A_LITTLE_LAMB: SongMelody = {
  bpm: 110,
  lines: {
    sg1: [{ pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 2 }],
    sg2: [{ pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "D4", beats: 2 }, { pitch: "E4", beats: 1 }, { pitch: "G4", beats: 1 }, { pitch: "G4", beats: 2 }],
    sg3: [{ pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "E4", beats: 1 }],
    sg4: [{ pitch: "D4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "E4", beats: 1 }, { pitch: "D4", beats: 1 }, { pitch: "C4", beats: 4 }],
  },
};

export const SONG_MELODIES: Record<string, SongMelody> = {
  // Row, Row, Row Your Boat — Topic 11 (Travel, original home) and
  // German lesson11, repeated onto Topic 16 (Traffic) since row 16 is
  // an open slot in the master table.
  "de11-song": ROW_ROW_ROW_YOUR_BOAT,
  "topic-11-travel-ja-song": ROW_ROW_ROW_YOUR_BOAT,
  "topic-11-travel-de-song": ROW_ROW_ROW_YOUR_BOAT,
  "topic-24-hobbies-ja-song": ROW_ROW_ROW_YOUR_BOAT,
  "topic-16-traffic-ja-song": ROW_ROW_ROW_YOUR_BOAT,

  // Frère Jacques / Bruder Jakob — lesson2.ts's own block keeps its
  // original r1-r6 line ids; Topic 1 (Family, its documented home) and
  // Topic 4 (Emotions, an open slot filled with a repeat) use the
  // sg1-sg6-keyed version of the exact same tune.
  "l2-readalong-bruderjakob": BRUDER_JAKOB,
  "topic-01-family-ja-song": BRUDER_JAKOB_SG,
  "topic-01-family-de-song": BRUDER_JAKOB_SG,
  "topic-04-emotions-ja-song": BRUDER_JAKOB_SG,
  "topic-04-emotions-de-song": BRUDER_JAKOB_SG,

  // Alle meine Entchen (lesson2.ts) — not currently repeated elsewhere.
  "l2-readalong-entchen": ALLE_MEINE_ENTCHEN,

  // London Bridge Is Falling Down — Topic 12 (Directions, original
  // home), repeated onto Topic 17 (Work, an open slot).
  "topic-12-directions-ja-song": LONDON_BRIDGE,
  "topic-12-directions-de-song": LONDON_BRIDGE,
  "topic-17-work-ja-song": LONDON_BRIDGE,

  // Twinkle Twinkle Little Star — Topic 13 (Time, original home). Not
  // currently repeated elsewhere.
  "topic-13-time-ja-song": TWINKLE_TWINKLE,
  "topic-13-time-de-song": TWINKLE_TWINKLE,
  "topic-23-routine-ja-song": TWINKLE_TWINKLE,

  // Head, Shoulders, Knees and Toes — Topic 2 (Body, original home),
  // repeated onto Topic 5 (Food, an open slot).
  "topic-02-body-ja-song": HEAD_SHOULDERS,
  "topic-02-body-de-song": HEAD_SHOULDERS,
  "topic-05-food-ja-song": HEAD_SHOULDERS,
  "topic-05-food-de-song": HEAD_SHOULDERS,

  // Itsy Bitsy Spider — Topic 7 (Clothing, original home). Not currently
  // repeated elsewhere.
  "topic-07-clothing-ja-song": ITSY_BITSY_SPIDER,
  "topic-07-clothing-de-song": ITSY_BITSY_SPIDER,

  // Old MacDonald Had a Farm — Topic 9 (Animals, original home),
  // repeated onto Topic 14 (Countries, an open slot).
  "topic-09-animals-ja-song": OLD_MACDONALD,
  "topic-09-animals-de-song": OLD_MACDONALD,
  "topic-14-countries-ja-song": OLD_MACDONALD,

  // Alouette — Topic 3 (Appearance, documented home), reused exactly at
  // Topic 19 (Weather, per the master table's own explicit note), and
  // repeated onto Topic 6 (Home, an open slot).
  "topic-03-appearance-ja-song": ALOUETTE,
  "topic-03-appearance-de-song": ALOUETTE,
  "topic-06-home-ja-song": ALOUETTE,
  "topic-06-home-de-song": ALOUETTE,
  "topic-19-weather-ja-song": ALOUETTE,

  // This Old Man — Topic 8 (Shopping, documented home — fits its
  // numbers/quantity grammar), repeated onto Topic 10 (Health, an open
  // slot).
  "topic-08-shopping-ja-song": THIS_OLD_MAN,
  "topic-08-shopping-de-song": THIS_OLD_MAN,
  "topic-10-health-ja-song": THIS_OLD_MAN,
  "topic-10-health-de-song": THIS_OLD_MAN,

  // Ten Little Fingers (see topic-15-landscape.ts for the lyric
  // substitution note) — Topic 15 (Landscape, documented home for "Ten
  // Little Indians"). Not currently repeated elsewhere.
  "topic-15-landscape-ja-song": TEN_LITTLE_FINGERS,

  // Happy Birthday to You — Topic 18 (School, documented home). Not
  // currently repeated elsewhere.
  "topic-18-school-ja-song": HAPPY_BIRTHDAY,

  // A2 topics each get their own song, not a repeat of an A1 one.
  "topic-20-weekend-ja-song": IF_YOURE_HAPPY,
  "topic-21-abilities-ja-song": WHEELS_ON_THE_BUS,
  "topic-22-conditional-ja-song": MARY_HAD_A_LITTLE_LAMB,
};
