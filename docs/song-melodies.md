# Song Melody Playback

## Why not real MIDI files

The obvious approach — download a MIDI file of each song and play it —
doesn't work cleanly here for two real reasons:

1. **Network access.** This environment can only reach package
   registries (npm, PyPI, GitHub, etc.), not general-purpose MIDI
   archive sites.
2. **Licensing, even for public-domain tunes.** The *melody* of these
   songs (Frère Jacques, Twinkle Twinkle, etc.) is centuries old and
   genuinely public domain. But a specific **MIDI file** is usually
   someone's *arrangement/performance* of that melody — instrumentation,
   timing, harmony choices — and that arrangement can carry its own
   copyright separately from the tune. Checked this directly against a
   real MIDI archive site's own terms during development: "these MIDI
   performance files are not in the Public Domain," despite the
   underlying songs being centuries-old folk tunes.

## The actual approach: plain note transcriptions

Each melody is written directly as a note sequence in
`src/data/songMelodies.ts` — pitch + relative duration, nothing else.
This is a plain transcription of a public-domain tune's notes, not a
copy of anyone's specific arrangement or recording, so it carries none
of the risk above. It also means:

- No external file dependency, no network fetch, works fully offline
  (consistent with the app's PWA design)
- Small bundle footprint — a melody is a few dozen small JS objects, not
  an audio file or a soundfont
- Playback is synthesized live via the Web Audio API
  (`src/engine/melodyPlayer.ts`) using simple sine-wave oscillator tones

## How it's wired to the lyrics

Melody data is keyed by the song **block's own id**, and each melody's
`lines` object is keyed by that block's own **lyric line ids** — the
exact same ids already used for the spoken/displayed lyric text in
`content.lines`. This means:

- The melody plays in sync with whichever line is currently active,
  using the same phase/pause structure the app already has for
  dialogues and songs (echo/shadow/silent)
- Lyric text stays visible on screen exactly as before, regardless of
  which mode (spoken or melody) is active
- Adding a new song's melody data can't accidentally desync from its
  lyrics, because both point at the same ids

```ts
// src/data/songMelodies.ts
export const SONG_MELODIES: Record<string, SongMelody> = {
  "topic-13-time-ja-song": {
    bpm: 100,
    lines: {
      sg1: [{ pitch: "C4", beats: 1 }, { pitch: "C4", beats: 1 }, /* ... */],
      sg2: [/* ... */],
    },
  },
};
```

Named constants (e.g. `HEAD_SHOULDERS`, `ALOUETTE`) hold each melody
once; the exported `SONG_MELODIES` map then aliases every block id that
reuses that song to the same constant, rather than copy-pasting the note
data per repeat — see songMelodies.ts's own comments for which topic
originated each song and which topics repeat it.

## The toggle

`src/engine/melodyToggle.ts` is a small on/off pub/sub store (same
pattern as the rate-control store in `engine/speech.ts`). A button
appears in a song block's footer **only if melody data exists for that
block's id** — no melody data, no button, graceful fallback to
spoken-lyric playback only.

## Current coverage

**Every one of the 19 topics has a song, and every one of those songs
has working melody data** — verified programmatically (every lyric line
id has a matching melody entry, zero gaps, checked separately for each
topic's ja and de variant where both exist). 8 distinct real songs in
total: Frère Jacques / Bruder Jakob, Head Shoulders Knees and Toes,
Alouette, Itsy Bitsy Spider, This Old Man, Old MacDonald Had a Farm, Row
Row Row Your Boat, London Bridge Is Falling Down, Twinkle Twinkle Little
Star, Ten Little Fingers, Happy Birthday to You (plus lesson2.ts's own
Alle meine Entchen, a standalone hand-written lesson outside the topic
system). See `docs/a1-master-lesson-table-v05.md` for the full per-row
assignment, including which topics repeat another topic's song to
ensure full coverage, and the one deliberate lyric substitution (Topic
15: "Ten Little Fingers" instead of the traditional "Ten Little
Indians," whose lyrics are built on ethnic caricature — same melody and
counting-song structure, different words).

## Adding a melody for a new song

1. Find the song block's `id` and its lyric lines' `id`s in the lesson
   file
2. Add an entry to `SONG_MELODIES` keyed by that block id, with a `bpm`
   and one note array per lyric line id
3. Notes are `{ pitch: "C4" | null, beats: number }` — `pitch: null` is
   a rest; `beats` is relative to the melody's own `bpm` (1 = one beat)
4. No other code changes needed — the toggle button appears
   automatically once the block id has an entry
