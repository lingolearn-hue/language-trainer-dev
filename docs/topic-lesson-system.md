# Topic-Based Lesson System

**Status: 48 topics built. 19 are the A1 master table (rows 1–19), all
with full Japanese content; all 19 also have German grammar, and all
19 now also have German pronunciation (base + drill) — see the
per-feature status list in "A2 topics" below for what's still missing
per topic. 22 are A2 (see "A2 topics" below). 7 are C1, Chinese-target
only so far (see "C1 topics" below). German Lessons 2/11 and the
English C1 lesson remain hand-written, outside this system. Topic
files/ids are level-prefixed and level-relative
(`topic-a1-06-home.ts`, `topic-a2-14-conjunctions.ts`,
`topic-c1-03-politics.ts`) specifically so adding more lessons to one
level can never collide with another level's numbering — see "Topic
id/lessonNumber scheme" below.**

## Terminology: primers vs. drills

Each topic authors two paired concepts per target language:

- **Grammar primer** (`TopicGrammarPrimer`, field `grammar`) — the
  explanation + short example chunks shown once, and its reinforcement
  counterpart, **grammar drill** (`TopicGrammarDrill`, field
  `grammarDrills`) — dialogue-format slides with ~10 flowing example
  sentences per grammar sub-concept.
- **Pronunciation primer** (`TopicPronunciationPrimer`, field
  `pronunciation`) — the first, smaller word-list slide, and its
  reinforcement counterpart, **pronunciation drill**
  (`TopicPronunciationDrill`, field `pronunciationDrills`) — the full
  4×14 (56-word) second pronunciation slide.

These were previously named `extraReadalongs`/`TopicExtraReadalong` and
`extraDrills`/`TopicExtraDrill` respectively; renamed so the
primer/drill pairing for each of grammar and pronunciation is clear
from the name alone.

## Topic id/lessonNumber scheme

Every topic's file name, `id`, and `lessonNumber` follow a
level-prefixed, level-relative pattern: `topic-{level}-{NN}-{name}.ts`,
e.g. `topic-a1-06-home.ts`, `topic-a2-14-conjunctions.ts`,
`topic-c1-03-politics.ts`, with `lessonNumber` matching the `{NN}` (6,
14, 3 respectively) — i.e. `lessonNumber` **resets to 1 at the start of
each level** rather than counting up globally across all levels.

This wasn't the original scheme. Topics were originally numbered
globally and sequentially regardless of level (A1 = files/ids/numbers
1–19, A2 continued at 20–41, C1 continued at 42–48). That scheme had a
real, imminent problem: A1's master table still has 15 unbuilt rows
(20–34, the review lessons — see "A2 topics" below for the equivalent
A2 situation), and building them would have produced A1 topics
numbered 20–34, directly colliding with A2's existing 20–41 range.
Renamed everything to the level-relative scheme before that could
happen, rather than after.

`lessonNumber` is what `LessonSelect.tsx` sorts and displays by (as a
combined `A1-06`-style label — see its own comment for why the display
no longer needs a separate level line below the number). Sorting is
level-first, `lessonNumber`-second, so level-relative numbers sort
identically to what globally sequential numbers would have — the
rename is invisible to sort order, only to the actual numeric values
and file/id strings.

**If you add a new topic**, follow the same pattern: pick the next
`{NN}` within that topic's own level (not the next number overall),
name the file and `id` to match, and set `lessonNumber` to that same
`{NN}`. A quick sanity check after adding one: grep all topic files
for `lessonNumber` grouped by level prefix and confirm no duplicates
within a level — collisions across different levels are no longer
possible by construction, but a duplicate *within* one level (e.g. two
A2 topics both claiming `lessonNumber: 14`) would still be a real bug.

One side effect worth knowing about: this rename means any
`localStorage`-persisted lesson mastery/hidden status a real user had
already saved (see `engine/lessonStatus.ts`) is now keyed to a dead
id and orphaned — those lessons will simply reappear in the default
lesson list. Not fixable from the codebase (it's inherent to renaming
persistent-state keys); only relevant once this app has real users
with saved progress, which it doesn't yet during dev.

## Vocab slide categories

`VocabItem.category` is a free-form string, but `VocabDrillBlock.tsx`
groups items into columns by it and has a fixed set of default column
labels: `noun`, `verb`, `adjective`, `conjunction`, `other`. Items
tagged `adverb` are merged into the same column as `adjective` (headed
"Adjectives/Adverbs" in the UI) via a `CATEGORY_MERGE` step — there
usually aren't enough adverbs in one lesson to justify a dedicated
column, and adjectives/adverbs read fine grouped together.
Conjunctions get their own column since they're a distinct part of
speech worth calling out (e.g. `topic-a2-14-conjunctions`). When
tagging vocab, use the
part of speech that's actually true for the word — the merge only
affects rendering.

## Goal: every lesson complete

A **complete** lesson has all of the following, not just the minimum
6-block spine (title, intro, agenda, vocab, grammar, two dialogues,
pronunciation) that every topic already has:

1. **Self-introduction slide** — fill-in-the-blank template, plus a
   silent word bank for any blank with a natural finite category (e.g.
   eye color, sport)
2. **Grammar drill slide(s)** — dialogue-format, ~10 example
   sentences per grammar sub-concept, one slide per concept (never
   crammed into a single dense table)
3. **Second pronunciation drill — full 4 columns × 14 words (56 total)**,
   not a smaller or uneven set. Row-paired comparison (`pairedColumns`)
   where the columns are genuine minimal pairs (e.g. pitch-accent
   contrasts); otherwise four independent 14-word lists is the standard
   shape regardless.
4. **Song** — real melody data, not just lyrics
5. **Kanji authored** for every `ja` string outside pronunciation-focused
   content (vocab, dialogue, grammar, self-intro — not the pronunciation
   drills themselves, where kana is the actual point)

This is the target for every topic, not just the ones that happen to
have it already. See the per-feature status list in "A2 topics" below
for exactly which topics are still missing which pieces.

## The problem this solves

Every lesson so far was authored as a single file for ONE target language
(e.g. `lessonJapanese5.ts` teaches Food *in Japanese*, with en/de/zh
stored alongside as translations). Building a German version of the same
topic meant either:

- copy-pasting the whole file and retranslating everything (wasteful —
  the vocab and dialogues are already fully translated into German
  inside the Japanese file), or
- writing it from scratch (loses the free reuse entirely).

Neither scales as more languages and lesson pairs get added.

## The actual insight: not everything in a lesson is language-specific

A lesson has several genuinely different kinds of content:

| Shareable across target languages | NOT shareable — must be authored per target language |
|---|---|
| Vocab list | Grammar (Japanese teaches に/へ/で; German teaches wo/wohin cases — not translations of each other, different mechanics) |
| Both dialogues | Pronunciation (pitch accent has no German equivalent; consonant clusters like SCHW-/SCHR- have no Japanese equivalent) |
| Song (when present) | Self-introduction template + word bank (fill-in-the-blank phrasing is language-specific; topics without one just skip the slide) |
| Framing text (title, agenda, intro, "let's look at some words about X") — follows a *strict, consistent template* across every lesson | Drill slides (grammar drills and pronunciation drills) — practice content is inherently language-specific |

That framing-text row was the real find: it isn't actually
language-specific content, it's a template with the topic name and a
couple of block titles substituted in. That means it can be **generated**,
not hand-translated, for any language that has a template function.

## How it works

**`src/data/topicTypes.ts`** — defines `TopicLesson`: one file per topic,
holding vocab/dialogueA/dialogueB/song ONCE (already full `{ja, en, de,
zh}` Translations objects — genuinely shared data, not "Japanese content
with translations bolted on"), plus `grammar`, `pronunciation`,
`pronunciationDrills`, `grammarDrills`, and `selfIntro` as
`Partial<Record<LangCode, ...>>` — populated only for languages that
actually have real content authored.

**`src/data/phraseTemplates.ts`** — one `PhraseSet` per language (currently
`ja`, `de`) with functions like `welcomeTitle(topic)`,
`agendaSpoken(topic, grammarTitle)`, `vocabIntro(topic)`, plus the fixed
`introTransition`/`introMonologue` text for the intro slide (see below).
These generate every piece of framing text a lesson needs, in that
language, for any topic.

**`src/engine/buildLesson.ts`** — `buildLessonPlan(topic, targetLang,
sourceLang, courseId)` assembles a real `LessonPlan` (the exact same type
every hand-written lesson file already produces) by:
1. Checking `topic.grammar[targetLang]` and `topic.pronunciation[targetLang]`
   both exist — returns `null` if not (can't build a lesson without them,
   no matter how well-translated the vocab is)
2. Generating the title/agenda/intro blocks from phrase templates
3. Building an optional self-introduction block, only if
   `topic.selfIntro[targetLang]` exists
4. Slotting in the shared vocab/dialogueA/dialogueB/song as-is (via
   `applyOverrides` — see "Mini-fork overrides" below)
5. Slotting in that target language's own grammar/pronunciation content,
   plus any `pronunciationDrills` for that language

**Critically: `Session.tsx`, `VocabDrillBlock.tsx`, `ReadalongBlock.tsx`,
`SelfIntroBlock.tsx`, and every other consumer needed ~zero structural
changes.** They only ever cared about `LessonPlan`/`Block`, and
`buildLessonPlan()` produces exactly that.

## The intro slide: bilingual framing + a real read-along

Every generated lesson's intro block is `type: "readalong"` (not a bare
static caption): it opens with a short framing message spoken in BOTH
languages in sequence (source fully, then target fully — see
`TeacherCaption`'s `bilingual` prop and `Block.spokenIntroBilingual`),
ending with a fixed transition phrase ("We'll first read my proposal
together..."), then runs a 14-line monologue as a normal 3-phase
(echo/shadow/silent) read-along, reusing the same rendering path as
dialogues (target left, source right — that layout already triggers
whenever a readalong has no speaker labels).

The monologue is currently one generic trainer-introduction text, shared
across every lesson (`phraseTemplates.ts`'s `introMonologue`), not
authored per topic.

## Self-introduction slides (fill-in-the-blank + word bank)

An optional block, `type: "selfIntro"`, appearing right after the intro
when a topic has one authored. Two panels:

- **Left (template):** a short target-language-only script with
  `［placeholders］` the student fills in with their own info while
  reading it aloud (echo/shadow/silent, same as any read-along) — no
  translation shown, since it's meant to be personalized live, not
  translated.
- **Right:** an optional silent **word bank** (`SelfIntroWordBankGroup`
  — a labelled word list for one blank, e.g. eye color or sport, shown
  target+source together, never spoken), followed by a spoken "reasons"
  demonstration (`options` — narrated once each in target then source,
  never displayed on screen) ending with a `choosePrompt` inviting the
  student to pick and say their own reason.

Currently authored for topics 1 (Family, no word bank — its blanks are
open-ended) and 2 (Body, 2 word-bank groups: eye color, sport/exercise).

## Pronunciation drill slides (second pronunciation practice)

`topic.pronunciationDrills[lang]` — an array of additional
`vocabDrill`-type slides beyond the standard vocab+pronunciation pair,
appended right after the pronunciation block. **Standard shape: 4
columns × 14 words = 56 total**, not a smaller or uneven set — see
"Goal: every lesson complete" above. Two uses so far:
1. A hand-curated word list reinforcing that lesson's specific
   pronunciation focus at scale (e.g. A1 topic 1's B/P/d→t/g→k drill,
   56 words across 4 columns) — pulled from real German-course slide
   material the project owner authored directly, translated into the
   other 3 languages.
2. Row-by-row pitch-accent comparison (see next section).

**Current status against the 4×14 standard:**
- **Full 56-word, 4-column drills**: A1 topics 1 (de), 3 (ja), 6
  (de), 9 (ja), 11 (de), 13 (de), 14–19 (de), and all 22 A2 topics
  (`topic-a2-01` through `topic-a2-22`, ja)
- **Below standard, needs expansion**: A1 topic 2's ja drill (48 words
  — its short/long-vowel columns have 12 each instead of 14); A1
  topic 8's ja drill (45 words across only 3 columns instead of 4)
- **Missing entirely**: the `ja` side of A1 topics 4, 5, 7, 10, 12,
  14–19 (these currently only have `de`), and the `de` side of A1
  topics 2, 3, 8, 9 (these currently only have `ja`)

Items are kept to the plain word + gloss — no inline explanatory
annotations (e.g. "(long vowel)", "— new word, single pattern"). The
grouping/column headers already carry that information; repeating it
per-item added clutter without adding recognition value. The one
exception is pitch-accent minimal-pair items (A1 topics 2, 9) where the
parenthetical (e.g. "chopsticks (HL) / bridge (LH)") encodes the actual
pitch pattern being taught, not commentary about it.

A duplicate-word audit (same word appearing twice within one drill's
`items` array under two different categories) was run across all A2
topics in the same session that renamed these fields; found and fixed
~24 real duplicates across topics 1–3 (Weekend/Abilities/Conditional,
now `topic-a2-01` through `topic-a2-03`), plus 2 in topic 4 (Routine,
now `topic-a2-04`). `topic-a2-07` (Cooking)'s triple use
of ふく (服/吹く/拭く, genuine homophones) was left as intentional.
Worth re-running the same audit against the A1 topics (1, 2, 3, 11,
13, 16 — i.e. `topic-a1-01`, `topic-a1-02`, `topic-a1-03`,
`topic-a1-11`, `topic-a1-13`, `topic-a1-16`) at some point —
spot-checked, not yet fixed.

## Row-by-row comparison columns (`pairedColumns`)

By default, `VocabDrillContent`'s columns (grouped by `category`) are
independent lists — column length and order don't need to match across
columns. But for a genuine minimal-pair contrast (e.g. はし as HL-pitch
"chopsticks" vs はし as LH-pitch "bridge"), showing them side by side,
row-aligned, is the actual pedagogical point.

`VocabDrillContent.pairedColumns?: [string, string][]` declares which two
category keys should merge into one table with shared rows instead of
two separately-flowing columns. `VocabItem.tag?: string` adds a small
disambiguating label next to a word (e.g. the kanji form) when the kana
alone doesn't distinguish the pair. Both computer-mode (the merged table)
and phone-mode (see below — a paired group stays together as ONE slide,
never split across two) respect this.

Currently declared for topics 2 and 9's HL/LH pitch-accent drills, and
topic 23's short/long vowel contrast drill.

## Mini-fork overrides (per-target-language content patches)

`topic.overrides?: Partial<Record<LangCode, Record<itemId, string>>>` —
lets a single shared vocab/dialogue/song item's text be patched for ONE
target language only, without forking the whole shared item (which would
duplicate everything else about it and drift out of sync). Applied via
`applyOverrides()` in `buildLesson.ts`.

Used for two real Japan-context values that shouldn't leak into the
German course: A1 topic 8's shared shopping dialogue prices everything
in Yen (correct for the Japanese course) — overridden to Euro amounts
for German, keeping the same internal math. A1 topic 5's shared
rice/meal vocab gloss is overridden to the more general "Mahlzeit" for
German (bread is already taught separately).

## Computer / Phone display style

A student-chosen toggle (`Trainer.defaultStyle`, session-level override
via `LessonSelect`'s compact chip row), persisted per-device. "Computer"
is the lesson exactly as authored. "Phone" (`engine/phoneStyle.ts`)
splits multi-column vocab/pronunciation slides so each column becomes
its own single-column slide at a higher font scale — genuinely by
category, not an arbitrary even split. A declared `pairedColumns` group
stays together as one slide (splitting a row-by-row comparison across
two slides would defeat the point). Dialogue and grammar blocks have no
column concept, so they still split into an even 3 parts. Landscape and
portrait orientation are a completely separate CSS mechanism — both
display styles support both orientations.

## Trainers

3 trainers cover all 4 languages bidirectionally: **Vincent**
(en/zh/de), **Max** (ja/de — the only trainer whose full language set
already has matching lesson content on both sides), **Yui** (ja/en/zh).
`Trainer.languages` is a plain list (not a fixed pair), and the
trainer-select filters already work generically off `.includes()`.
`Trainer.courseIds` reflects what content actually exists today — no
Chinese-target or English-beginner course has been authored yet, so
Vincent's/Yui's zh/en coverage is real in `languages` (correct for
filtering) but has no lessons behind it.

Avatars are real generated art (Lorelei/DiceBear, CC0), keyed by
`avatarSeed`, not placeholders. A blue ring appears around the trainer's
avatar while speaking; a green ring appears around the student's
(plain grey silhouette, not a generated face) during genuine "your turn"
windows — the echo-repeat pause and the silent-read window, via
`engine/speech.ts`'s `studentTurn` pub/sub store.

## Voice selection

`Trainer.voiceProfile.voicesByLang?: Partial<Record<LangCode, string |
string[]>>` — ordered candidate voice names PER LANGUAGE (not one flat
list), since a multi-language trainer needs real preference coverage for
every language they speak, not just their nominal "primary" one. Voice
naming isn't stable across OS versions, so each list has multiple
fallback names to try, in priority order — first one actually installed
on the device wins, otherwise falls through to that device's default
voice for the language (usually female, on most platforms/locales,
unless the user has downloaded an alternative — see
`VoiceHelpOverlay.tsx`).

## A real speak() hang bug, and its fix

`speakSegment()`'s promise used to resolve only via the browser's
`onend`/`onerror` events. On some browsers/conditions those events can
silently never fire, and since every block's auto-play is a sequential
`await speak(...)` chain, one stuck utterance anywhere stalls the whole
chain permanently — no error, just "the next slide never arrives." Fixed
by racing the speech promise against a generous length-scaled timeout
(4s floor, 20s ceiling); the utterance itself isn't cancelled on timeout,
so a merely-slow (not truly stuck) utterance keeps playing harmlessly in
the background rather than getting audibly clipped.

## A2 topics

`docs/a2-master-lesson-table-v01.md` — originally a 34-row A2 plan,
saved verbatim as given except two rows' pronunciation-2 wording (see
below); now 35 rows after adding row 35 (Conjunctions) this session,
since no existing row covered discourse-level sentence connectors
(しかし/だから/それで/それに) — distinct from the sentence-internal
connectors (〜たら, 〜ので, etc.) other rows already cover. 22 A2
topics built so far (`topic-a2-01` through `topic-a2-22` — see "Topic
id/lessonNumber scheme" above for why file numbers are level-relative
rather than the globally sequential 20–41 they used to be), using the
same `TopicLesson.level` field (defaults to the target language's
usual level when unset, so A1 topics didn't need any change).

- **`topic-a2-01` through `topic-a2-03` (Weekend/past-tense,
  Abilities/potential-form, Conditional/たら-form)** were built
  *before* the A2 table existed, picked ad hoc from
  `docs/grammar-items-a1-to-c2-v01.md`'s A2 grammar list. They don't
  match the table's actual row 8 (Travel, potential form) or row 27
  (Environment, たら) — themes and vocab differ. Not reconciled yet;
  flagged for a future session.
- **`topic-a2-04` through `topic-a2-14` (Routine, Hobbies, Transport,
  Cooking, Seasons, Learning, Relationships, Experiences, Memories,
  Recommendations, Conjunctions)** are built directly from the
  table's rows 1, 2, 4, 6, 7, 11, 12, 13, 14, 15, and 35 respectively
  (rows 3/5/8/9/10 were skipped — each conflicts with an existing A1
  topic name/theme: Home=`topic-a1-06`, Clothing=`topic-a1-07`,
  Travel=`topic-a1-11`, Health=`topic-a1-10`, Work=`topic-a1-17`).
  These are the reference examples for what a table-aligned A2 lesson
  looks like.
- **`topic-a2-15` through `topic-a2-22` (Conditions, Communication,
  Plans, Invitations, Favors, Gifts, Technology, Entertainment)** are
  built directly from the table's rows 16–23 in sequence, with
  matching grammar and pronunciation assignments verified row-by-row
  against the table.
- The table's "Japanese R vs L" pronunciation wording was corrected to
  "Japanese R (two ら-row sets)" for every row built so far that used
  it (rows 6, 11, and 22) — Japanese has no true L phoneme, so the
  drill actually contrasts two sets of ら-row words rather than a
  genuine R/L distinction. Row 31 still says "Japanese R vs L" in the
  table since it isn't authored yet; apply the same fix when building
  it.

22 of the table's 35 rows are now built (63%).

All 22 A2 topics have the full 56-word (4×14) pronunciation drill
built directly, plus base pronunciation, full vocab/dialogue/grammar,
a song, and a grammar drill slide (10 sentences per grammar
sub-concept, kana+kanji both authored). None yet have a self-intro
slide. **Kanji coverage: all 22 A2 topics (20–41) have full `jaKanji`**
(vocab, dialogue, grammar primer, on top of the grammar-drill kanji
every A2 topic already had).

The previously-proposed "pronunciation-drill repeat-fix" (the A2 table
reuses several basic contrasts — K vs G, S vs SH, long/short vowels —
up to 6 times each with no "reinforced" marking) has not been applied;
still worth doing once more rows are built and repeats start to matter.

Against the "every lesson complete" standard above, per-feature status:

- **Kanji**: A1 topic 3 and all 22 A2 topics (`topic-a2-01` through
  `topic-a2-22`) have full `jaKanji` coverage (vocab, both dialogues,
  grammar primer). All other A1 topics (everything except topic 3) are
  fully kana-only outside their grammar drills. See
  `engine/scriptDisplay.ts` for the toggle mechanism.
- **Self-introduction slides**: only A1 topics 1 and 2 have one.
- **Grammar drills (`grammarDrills`)**: A1 topic 15 has both a `ja` set
  (4 slides — より/のほうが/いちばん/ほど〜ない, 10 sentences each) and
  a `de` set (2 slides — Komparativ/Superlativ, 10 sentences each,
  reusing the same Japanese-column vocab). All 19 A1 topics have a
  `de` set (1–2 slides depending on the grammar point). A1 topic 17's
  `de` grammar (Nominativ/Akkusativ) and topic 18's (Trennbare Verben)
  restore the master table's originally-documented German concepts
  rather than mirroring their Japanese te-form/permission-prohibition
  content — see each file's own header comment for the reasoning. All
  22 A2 topics have a `ja` set (1–3 slides depending on how many
  grammar sub-concepts that topic's point has), and all 7 C1 topics
  have a `zh` set on the same principle (see "C1 topics" above).
- **Pronunciation drills (`pronunciationDrills`)**: 35 topics meet the
  full 4×14 standard (6 from A1 pre-existing, all 22 from A2, all 7
  from C1), 2 are below it (A1 topics 2, 8), the rest have none. All
  19 A1 topics now have German base pronunciation; topics 14–19 got
  theirs in an
  earlier session (J-as-Y/loanword stress, Ä/Ü-Ö, V-as-F/W-as-V,
  CH-as-SCH/CH-as-K, long/short U, long/short O) with reasoning
  documented in each file's header comment, same substitution approach
  as their grammar.
- **Songs**: all 19 A1 topics have one, all with real melody data
  (verified directly against `src/data/songMelodies.ts`). All 22 A2
  topics also have a song; melody data not yet added for any of them.
- **Only `ja` and `de` have phrase templates**, and only those two
  languages have any grammar/pronunciation authored anywhere. A topic
  with vocab translated into `en`/`zh` still can't generate an `en`- or
  `zh`-target lesson.
- **Chinese vocab/dialogue/song is complete for all 19 A1 topics**
  (topicName, all vocab, both dialogues, songs) — Chinese can be used
  as a *source* language for every A1 German-target lesson. A2 topics
  also have full `de`/`en`/`zh` vocab/dialogue/song (all 22, from the
  first one built onward) — only A2's `grammar`/`pronunciation` are
  ja-only; an earlier version of this doc incorrectly claimed A2 was
  ja-only *entirely*, contradicting `docs/status.md`'s 63%
  vocab/dialogue coverage for every one of `ja`/`de`/`en`/`zh` at the
  A2 level.
- **German Lessons 2/11 and the English C1 lesson remain hand-written**,
  outside this system.
- **`fr`/`es` have no lessons or phrase templates at all** — the topic
  system's `LangCode` type already supports them structurally, but
  nothing has been authored.

## C1 topics

`docs/c1-master-lesson-table-v01.md` — a 34-row C1 plan (English,
Japanese, Chinese, German, French, Spanish columns), saved verbatim.
Structurally richer than A1/A2's tables: it adds an **Article** column
(a reading passage per lesson) and a **Questions** column
(comprehension-check questions), neither of which the A1/A2 tables
have. Building from it required new infrastructure — see
`data/topicTypes.ts`'s `TopicArticle`/`TopicQuestionSet` and
`types/index.ts`'s `ComprehensionQuestion`/`QuestionsContent`/the new
`"questions"` `BlockType`, plus the new `QuestionsBlock.tsx` component
(multiple-choice only, self-checked, never a precise score — matching
`ReadalongBlock`'s existing stance on speech self-check). `TopicArticle`
needed no new rendering component — it reuses the ordinary `readalong`
block type, since a reading passage is mechanically identical to a
dialogue's 3-phase echo/shadow/silent readalong, just narrated as
continuous prose instead of back-and-forth speakers.

7 C1 topics built so far (rows 1–7: Education, Society, Politics,
Economy, Environment, Technology, Media), all Chinese-target, all
`zh`/`en` only — no `ja`/`de` at all, not even in vocab/dialogue. This
was a deliberate scope decision (see each C1 topic file's own header
comment) to keep the first C1 lessons manageable while the level's
content shape was still being figured out, rather than 4x-ing
translation effort immediately. See `docs/status.md`'s "Known
asymmetry" section for why this makes C1's `ja`/`de` columns different
from A1/A2's (0% because nothing was authored there at all, not
because grammar/pronunciation lagged behind vocab like A1/A2's
`en`/`zh` columns do).

The C1 table's per-language grammar cells are often richer than a
single grammar point — e.g. row 20 (Diplomacy)'s Japanese column lists
five separate keigo patterns in one cell. Where a built topic's
grammar point naturally has 2+ distinct sub-forms (e.g. C1 topic 3
(Politics)'s 是……的／正是……／……才是……, or C1 topic 7 (Media)'s
之／其／于／乃／遂), that's
handled the same way A2 lessons with multi-form grammar points
already are: multiple `grammarDrills` slides, one grouping per
sub-form, rather than trying to cram every sub-form into one slide.

Because the table's "Pronunciation 1"/"Pronunciation 2" columns are
often prosody-level concepts (stress placement, chunking, register,
intonation contour) rather than simple phonetic word-pairs, every
built C1 topic's pronunciation items are short marked phrases or full
sentences demonstrating the concept — not single words like most
A1/A2 pronunciation items are. Each topic's file header comment
explains the specific adaptation for that lesson's assigned concepts.

New trainer course: Yui (the only trainer who speaks `zh`) has
`chinese-c1` added to her `courseIds`, alongside her existing
`japanese-beginner`. `App.tsx` builds C1 lessons from a separate
`C1_TOPICS` array via `buildLessonPlan(topic, "zh", "en",
"chinese-c1")`, independent of the `ALL_TOPICS`/ja+de pipeline the
A1/A2 topics go through — folding C1 into `ALL_TOPICS` would just
always produce `null` there (no `ja`/`de` grammar authored for C1
topics), the same way A1/A2 topics already produce `null` against
`zh`/`en`.

## For a future session picking this up

Toward "every lesson complete" (see that section above), in rough
priority order:
1. Author kanji for the remaining 17 A1 topics (everything except
   A1 topic 3) — same process as A1 topic 3: vocab, then dialogue,
   then grammar primer, never pronunciation content. (All 22 A2 topics
   are done. `jaKanji` doesn't apply to C1 at all — those topics are
   Chinese-target with no Japanese content.)
2. Bring A1 topic 2's pronunciation drill up to the full 4×14 standard
   (48→56 words) and A1 topic 8's (3 columns→4), then author one from
   scratch for the 11 A1 topics that have none.
3. Author self-introduction slides for the A1 topics that don't have
   one yet.
4. Author melody data for all 22 A2 topics' songs (none have any yet).

Separately, the fastest path to "every built topic works for every
trainer pair" is:
1. Add `en` and `zh` `PhraseSet`s to `phraseTemplates.ts`, then author
   English/Chinese grammar+pronunciation per topic, to make Vincent's
   and Yui's stated language coverage real rather than aspirational.
2. Reconcile A2 topics 1–3 (`topic-a2-01-weekend.ts` through
   `topic-a2-03-conditional.ts`) with the master table's actual rows
   for their grammar points (they were built before the table
   existed — see the A2 topics section above).
3. Extract German Lesson 11 and the English C1 lesson into topic files.

Toward continuing C1 specifically:
1. Build C1 rows 8–34 (27 remaining) from
   `docs/c1-master-lesson-table-v01.md`, following the same
   `zh`/`en`-only scope decision as rows 1–7 unless there's a specific
   reason to widen it for a later batch.
2. Once there's real signal on whether the `zh`/`en`-only scope was
   the right call, decide whether to backfill `ja`/`de` for the C1
   topics already built, or keep deferring that the way rows 8+ do —
   this is a real open question, not a settled plan.
3. Author melody data for C1 topics' songs, if C1 lessons end up
   wanting songs at all — the C1 table has no song column (unlike
   A1/A2), so none of the 7 built C1 topics have one; worth deciding
   deliberately rather than by default before adding one.
