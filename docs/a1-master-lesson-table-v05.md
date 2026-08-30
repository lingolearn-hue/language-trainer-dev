# A1 MASTER Lesson Table — v05 — 2026-08-20 (German track example)

**Supersedes the earlier 10-lesson mapping** (new grammar: 1,2,3,5,8,9,10 / consolidation:
4,6,7). This 34-lesson plan is the current authoritative A1 structure.

Complete per-lesson overview: vocab category, grammar item, two dialogue topics (A/B —
two dialogues per lesson is now the confirmed target, not one), pronunciation focus
(type + two paired concepts), and song assignment. Pronunciation/song content shown is
the German-specific example track — other language tracks reuse the same lesson
skeleton with language-specific substitutions where noted.

**Changes from v03:**
- **Song placement rule now fully enforced**: every song originates in a new-grammar
  lesson (1–18) and is only ever reused in a review lesson (19–34) — never the other
  way around. This was already true for 6 of 10 song-reuse pairs but broken for 4:
  Alouette, Itsy Bitsy Spider, and Ten Little Indians each originated in a REVIEW
  lesson (19, 24, 33) with no new-grammar lesson ever introducing them first, and
  Happy Birthday originated in L34 (also a review lesson). All four are moved to a
  new-grammar lesson instead:
  - Alouette: L19 → **L3** (matches L19's own existing "paired concept: L3 Adjective
    agreement" note — this pairing already existed, it just had the origin and reuse
    backwards)
  - Itsy Bitsy Spider: L24 → **L7** (same story — L24 already noted "paired concept:
    L7 Demonstratives")
  - Ten Little Indians: L33 → **L15**, not L8 as L33's own old note suggested — L8's
    song (This Old Man) is already at its 2-use cap (L8 + L21), so L33 pairs against
    the Comparatives half of its own grammar mix (L15) instead of the Numbers half
  - Happy Birthday: L34 → **L18** — no natural grammar-based pairing partner exists
    for L34 (it's a full-course recap, not tied to one specific point), so it simply
    moves to the next available open new-grammar slot
  - L19, L24, L33 keep the *same song* as before — only the origin/reuse direction
    changed, so no re-recording or re-translation of already-built content is needed
    for these three
  - L34 loses its song entirely and has no replacement — see reasoning above; this is
    consistent with it being marked "meta, optional" already
- Net effect: 11 of 18 new-grammar lessons now have a song (was 7), 9 of 16 review
  lessons reuse one (was 10 — L34 dropped out, not replaced). Total lesson-slots with
  a song: 20 of 34 (was 17), 14 remain open (was 17).
- No built lesson content changes as a result of this — the only built lesson whose
  table song assignment actually changed is none (L2/L11 unaffected); L3, L7, L15, L18
  now have a song assignment for the first time, but none of those rows are built yet
  for German, and Japanese L3 (built, currently open/no song) would need a Japanese
  translation of Alouette if this row's song is added there later — not done in this
  version, flagged as follow-up work.

## Build status (as of v05a — see changelog below)

| Course | Lessons built | Notes |
|---|---|---|
| German (A1) | 1–13 (all, via topic system) + 2, 11 (standalone, predate the table) | See docs/topic-lesson-system.md |
| English (C1) | 1 | Standalone "Voices from Orbit" space course, not on the A1 track |
| Japanese (A1) | 1–19 (all) | Rows 1–19 complete. All have ja; 1–13 also have de. zh done for 1–5 and 14–19, still pending for 6–13. |

**Every lesson complete is the goal** (self-intro slide, grammar drill
slide(s), a full 4×14 second pronunciation drill, a song with real
melody, kanji authored) — see `docs/topic-lesson-system.md`'s "Goal:
every lesson complete" section for the exact standard and current
per-topic status against it.

**Songs — implemented status (v05a):** every one of rows 1–19 now has a
song, using only the real songs already assigned somewhere in this
table (rows 1–19's own assignments, or reused from another row) — no
invented songs. This required two kinds of changes to the plan below:

1. **7 rows that were "open slot" in v05 (4, 5, 6, 10, 14, 16, 17) were
   filled with a repeat**, since every lesson needing a song took
   priority over strictly preserving which rows stay songless. These
   repeats aren't tied to any particular grammar/theme pairing — they're
   simply distributed round-robin across the already-assigned real
   songs. If a more deliberate pairing is wanted later, these seven are
   the ones to revisit first.
2. **Row 15's "Ten Little Indians" was substituted with "Ten Little
   Fingers,"** a well-documented neutral variant using the identical
   counting-song melody and structure. The original's traditional
   lyrics are built on ethnic caricature of Native Americans; the
   substitute teaches the same numbers without that content. Not a
   silent swap — flagged here and in the source file
   (`topic-15-landscape.ts`).

Final assignment actually implemented:

| Row | Song | Status |
|---|---|---|
| 1 | Frère Jacques / Bruder Jakob | as planned |
| 2 | Head, Shoulders, Knees and Toes | as planned |
| 3 | Alouette | as planned |
| 4 | Bruder Jakob *(repeat)* | filled, was open slot |
| 5 | Head, Shoulders, Knees and Toes *(repeat)* | filled, was open slot |
| 6 | Alouette *(repeat)* | filled, was open slot |
| 7 | Itsy Bitsy Spider | as planned |
| 8 | This Old Man | as planned |
| 9 | Old MacDonald Had a Farm | as planned |
| 10 | This Old Man *(repeat)* | filled, was open slot |
| 11 | Row, Row, Row Your Boat | as planned |
| 12 | London Bridge Is Falling Down | as planned |
| 13 | Twinkle Twinkle Little Star | as planned |
| 14 | Old MacDonald Had a Farm *(repeat)* | filled, was open slot |
| 15 | **Ten Little Fingers** | substituted, see above |
| 16 | Row, Row, Row Your Boat *(repeat)* | filled, was open slot |
| 17 | London Bridge Is Falling Down *(repeat)* | filled, was open slot |
| 18 | Happy Birthday to You | as planned |
| 19 | Alouette *(reused from row 3, as planned)* | as planned |

All 19 rows now have both lyrics and a working melody transcription —
see `docs/song-melodies.md` for the full melody-coverage list.

Trainers: 3 total (Vincent, Max, Yui) as of the trainer-roster
consolidation — see README.md. The "9 trainers" note in the v05
changelog below predates that consolidation.

**Changes from v04:**
- Japanese build-out completed through row 13 (was 1,2,3,4,5,8,10 — added
  6, 7, 9, 11, 12, 13). All 13 follow this table's row assignments.
- Songs now have real melody playback, not just spoken/sung-as-text
  lyrics — see `docs/song-melodies.md`. All songs currently assigned to
  a built lesson (rows 1, 2, 7, 9, 11–13, plus German rows 2\*/11) have
  melody data; this doesn't change any song *assignment* in the table
  below, just adds a real audio capability on top of what's already
  planned here.
- This file is now tracked in the repo itself (`docs/`) instead of only
  existing in ephemeral session workspace — future updates should land
  here directly.

| # | Vocab | Grammar | Dialogue A | Dialogue B | Pron type | Pron concept 1 | Pron concept 2 | Song |
|---|---|---|---|---|---|---|---|---|
| 1 | Family | To be / to have, basic | Introducing your family at a gathering | Describing who lives in your house | Consonant | Voiced vs unvoiced: B vs P | Final devoicing (b/d/g to p/t/k at word end) | Frere Jacques / Bruder Jakob |
| 2 | Body | Personal pronouns | At the doctor, pointing out symptoms | Describing yourself and a friend physically | Consonant | Voiced vs unvoiced: D vs T | SP/ST pronounced shp/sht word-initial | Head Shoulders Knees and Toes |
| 3 | Appearance | Adjective basics + agreement | Describing a missing person to police | Meeting someone at the airport by description | Consonant | Voiced vs unvoiced: G vs K | PF cluster | Alouette |
| 4 | Emotions | Negation | Comforting a friend who is upset | Explaining why you are not feeling well | Vowel | A -- long vs short | AU diphthong | -- (open slot) |
| 5 | Food | Present tense (regular/irregular/modal) | Ordering food at a restaurant | Talking about your daily eating habits | Consonant | S vs Z | German Z pronounced ts | -- (open slot) |
| 6 | Home | Possessives | Giving a house tour to a guest | Arguing about whose things are whose | Consonant | F vs V | German W pronounced like English V | -- (open slot) |
| 7 | Clothing | Demonstratives (this/that) | Shopping for clothes with a friend | Choosing an outfit for an event | Consonant | L vs R | German uvular R vs English-style R | Itsy Bitsy Spider |
| 8 | Shopping | Numbers and quantity | Buying groceries at the market | Haggling over prices at a shop | Vowel | E -- long vs short | EI diphthong | This Old Man |
| 9 | Animals | Plural formation | Visiting a zoo with a child | Talking about pets you have owned | Consonant | Sh vs S vs Ch (three-way) | Ich-laut vs Ach-laut | Old MacDonald Had a Farm |
| 10 | Health | Imperatives | Doctor giving instructions to a patient | Giving first aid advice to a friend | Consonant | N vs NG | Final devoicing, reinforced with new words | -- (open slot) |
| 11 | Travel | Direction / location | Asking for directions to a hotel | Planning a trip itinerary with a friend | Consonant | Initial clusters vs single consonant | SCHW-/SCHR- clusters | Row Row Row Your Boat |
| 12 | Directions | Prepositions of place | Giving directions to a lost tourist | Describing where your office is located | Vowel | I -- long vs short | EU/AEU diphthong | London Bridge is Falling Down |
| 13 | Time | Prepositions of time | Making a weekly schedule with a colleague | Arranging a meeting time with a friend | Consonant | H presence vs absence | CH in Buch vs ich, revisited | Twinkle Twinkle Little Star |
| 14 | Countries | Yes/no and wh-questions | Interviewing someone about their travels | Asking a new acquaintance where they're from | Consonant | Voiced vs unvoiced: B vs P, reinforced | PF cluster, reinforced | -- (open slot) |
| 15 | Landscape | Comparatives and superlatives, basic | Comparing two vacation destinations | Describing the view from a mountain hike | Consonant | S vs Z, reinforced | Z pronounced ts, reinforced | Ten Little Indians (counting) |
| 16 | Traffic | Direction / location (movement verbs) | Giving a taxi driver directions | Describing your daily commute | Vowel | O -- long vs short | Umlaut O -- long vs short | -- (open slot) |
| 17 | Work | German: Case/declension, introductory | Talking about your job at a party | Complaining about a difficult coworker | Consonant | L vs R, reinforced | Uvular R, reinforced | -- (open slot) |
| 18 | School | German: Separable verbs, introductory | Discussing homework with a classmate | Talking to a teacher about grades | Consonant | Sh vs Ch, reinforced | Ich-laut vs Ach-laut, reinforced | Happy Birthday to You |
| 19 | Weather | Adjective agreement + Comparatives | Small talk about today's weather | Comparing weather in two cities | Consonant | F vs V, reinforced | W as V, reinforced | Alouette *(reused from L3)* |
| 20 | Plants | Plural formation + Prepositions of place | Buying plants for a garden | Describing plants in a park | Vowel | U -- long vs short | Umlaut U -- long vs short | Old MacDonald Had a Farm *(reused from L9)* |
| 21 | Economy | Present tense + Numbers/quantity | Discussing prices rising at the market | Talking about saving money | Consonant | Initial clusters, expanded | SP/ST shp/sht, expanded vocabulary | This Old Man *(reused from L8)* |
| 22 | Sports | Personal pronouns + Present tense + Negation | Discussing your favorite sports team | Explaining why you dislike a sport | Consonant | N vs NG, reinforced | Final devoicing, further reinforced | Head Shoulders Knees and Toes *(reused from L2)* |
| 23 | Politics | Yes/no and wh-questions + Possessives | Asking someone's opinion on an election | Debating a local community issue | Consonant | Voiced vs unvoiced: D vs T, reinforced | PF cluster, further reinforced | -- (open — nearest matches L14/L6 both already songless) |
| 24 | Music | Demonstratives + Comparatives | Recommending a song to a friend | Comparing two music genres | Vowel | Umlaut A -- long vs short | IE (long I spelling) vs short I | Itsy Bitsy Spider *(reused from L7)* |
| 25 | Art | Adjective agreement + Direction/location | Describing a painting in a museum | Giving directions to an art gallery | Consonant | H presence vs absence, reinforced | CH contrast, further reinforced | Row Row Row Your Boat *(reused from L11)* |
| 26 | Media | Prepositions of time + Negation | Talking about a TV show schedule | Explaining why you don't watch the news | Consonant | Three-way Sh/S/Ch, expanded | Uvular R, expanded vocabulary | Twinkle Twinkle Little Star *(reused from L13)* |
| 27 | Physics | Numbers/quantity + Plural formation | Explaining a simple science experiment | Discussing measurements in a classroom | Consonant | Consonant clusters review, mixed | Z as ts, expanded vocabulary | -- (open — L8 "This Old Man" and L9 "Old MacDonald" both already at 2/2 uses) |
| 28 | Chemistry | Present tense + Prepositions of place | Describing a lab safety procedure | Talking about where chemicals are stored | Vowel | Vowel length before M/N | Diphthong review: AU vs EI contrast | London Bridge is Falling Down *(reused from L12)* |
| 29 | Biology | Personal pronouns + Adjective agreement + Possessives | Describing a pet's characteristics | Discussing human body systems simply | Consonant | Voiced/unvoiced full recap (B/P, D/T, G/K) | Ich-laut/Ach-laut full recap | -- (open — L2 "Head Shoulders..." already at 2/2 uses) |
| 30 | Technology | Direction/location + Yes/no questions | Asking for tech support help | Giving instructions to set up a device | Consonant | L/R and Sh/S/Ch combined recap | Diphthong-adjacent consonant clusters | -- (open — L11 "Row Row Row..." already at 2/2 uses) |
| 31 | Verbs | Full present-tense consolidation | Describing your daily routine start to finish | Interviewing someone about their typical day | Consonant | F/V and N/NG combined recap | SCHW-/SCHR- expanded review | -- (open slot — paired concept L5, itself songless) |
| 32 | Function Words | Prepositions + Demonstratives consolidation | Giving detailed directions using landmarks | Describing a room layout in detail | Vowel | Unstressed E (schwa, -e endings) | Full diphthong recap: AU, EI, EU mixed | -- (open — L12/L13 both already at 2/2 uses) |
| 33 | Quantity | Numbers/quantity + Comparatives consolidation | Comparing prices while shopping | Splitting a bill among friends | Consonant | Full consonant recap, mixed vocabulary | Full German-specific recap: R, Z, ich-laut/ach-laut mixed | Ten Little Indians (counting) *(reused from L15)* |
| 34 | Grammar (meta, optional) | Full-course grammar recap | Explaining grammar rules to a beginner | Quiz-style conversation reviewing the course | Consonant | Final German consonant spot-check, new vocabulary | Uvular R + Z (ts) mixed final recap | -- (open — no clean single-lesson reuse partner; L34 reviews everything at once, see "Changes from v03") |

## Current status

See the "Build status" section near the top of this file (accurate as
of v05a) and `docs/topic-lesson-system.md` for full per-topic detail —
19 Japanese A1 rows built (13 also German), 9 A2 topics built. An
earlier "Status summary"/"Known open items" pair that lived here was
found to be a stale pre-v05a snapshot directly contradicting the Build
status table above (it claimed only 7 lessons built); moved to
`docs/ARCHIVE.md`.

Remaining genuinely open items (carried forward, still accurate):
- A2–C2 vocab-to-grammar mapping is now underway for A2 (see
  `docs/a2-master-lesson-table-v01.md`), not yet started for B1+
- Real per-category word counts checked for only 3 of 34 A1 categories
  (Food, Shopping, Health); the other 31 are still unverified against
  the actual tagged vocab corpus
- Chinese vocab/dialogue/song still missing for A1 topics 6–13 (see
  `docs/topic-lesson-system.md`'s "Known gaps")
- 14 of the 34 A1 song slots still have no song assigned at all (rows
  4, 5, 6, 10, 14, 16, 17, 23, 27, 29, 30, 31, 32, 34) — candidates for
  new native-language song research
