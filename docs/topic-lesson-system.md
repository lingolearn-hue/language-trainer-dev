# Topic-Based Lesson System

**Status: 28 topics built. 19 are the A1 master table (rows 1–19), all
with full Japanese content, 13 (rows 1–13) also German. 9 are A2 (see
"A2 topics" below). German Lessons 2/11 and the English C1 lesson
remain hand-written, outside this system — see "Known gaps" below.**

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
have it already. See "Known gaps" below for exactly which topics are
still missing which pieces.

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
   pronunciation focus at scale (e.g. Topic 1's B/P/d→t/g→k drill,
   56 words across 4 columns) — pulled from real German-course slide
   material the project owner authored directly, translated into the
   other 3 languages.
2. Row-by-row pitch-accent comparison (see next section).

**Current status against the 4×14 standard:**
- **Full 56-word, 4-column drills**: Topic 1 (de), Topic 3 (ja), Topic 6
  (de), Topic 9 (ja), Topic 11 (de), Topic 13 (de), and all 9 A2 topics
  (20–28, ja)
- **Below standard, needs expansion**: Topic 2's ja drill (48 words —
  its short/long-vowel columns have 12 each instead of 14); Topic 8's ja
  drill (45 words across only 3 columns instead of 4)
- **Missing entirely**: Topics 4, 5, 7, 10, 12, 14, 16, 17, 18, 19, and
  the `de` side of Topics 2, 3, 8, 9 (these currently only have a `ja`
  drill, or vice versa)

Items are kept to the plain word + gloss — no inline explanatory
annotations (e.g. "(long vowel)", "— new word, single pattern"). The
grouping/column headers already carry that information; repeating it
per-item added clutter without adding recognition value. The one
exception is pitch-accent minimal-pair items (Topics 2, 9) where the
parenthetical (e.g. "chopsticks (HL) / bridge (LH)") encodes the actual
pitch pattern being taught, not commentary about it.

A duplicate-word audit (same word appearing twice within one drill's
`items` array under two different categories) was run across all A2
topics in the same session that renamed these fields; found and fixed
~24 real duplicates across Topics 20–22, plus 2 in Topic 23. Topic 26's
triple use of ふく (服/吹く/拭く, genuine homophones) was left as
intentional. Worth re-running the same audit against the A1 topics
(1, 2, 3, 11, 13, 16) at some point — spot-checked, not yet fixed.

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
German course: Topic 8's shared shopping dialogue prices everything in
Yen (correct for the Japanese course) — overridden to Euro amounts for
German, keeping the same internal math. Topic 5's shared rice/meal vocab
gloss is overridden to the more general "Mahlzeit" for German (bread is
already taught separately).

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

`docs/a2-master-lesson-table-v01.md` — a 34-row A2 plan, saved verbatim
as given except two rows' pronunciation-2 wording (see below). 9 A2
topics built so far (lesson numbers 20–28), using the same
`TopicLesson.level` field (defaults to the target language's usual
level when unset, so A1 topics didn't need any change).

- **Topics 20–22 (Weekend/past-tense, Abilities/potential-form,
  Conditional/たら-form)** were built *before* the A2 table existed,
  picked ad hoc from `docs/grammar-items-a1-to-c2-v01.md`'s A2 grammar
  list. They don't match the table's actual row 8 (Travel, potential
  form) or row 27 (Environment, たら) — themes and vocab differ. Not
  reconciled yet; flagged for a future session.
- **Topics 23–28 (Routine, Hobbies, Transport, Cooking, Seasons,
  Learning)** are built directly from the table's rows 1, 2, 4, 6, 7,
  and 11 respectively (rows 3/5/8/9/10 were skipped — each conflicts
  with an existing A1 topic name/theme: Home=Topic 6, Clothing=Topic 7,
  Travel=Topic 11, Health=Topic 10, Work=Topic 17). These are the
  reference examples for what a table-aligned A2 lesson looks like.
- The table's "Japanese R vs L" pronunciation wording was corrected to
  "Japanese R (two ら-row sets)" for rows 6 and 11 (the two rows
  authored so far that used it) — Japanese has no true L phoneme, so
  the drill actually contrasts two sets of ら-row words rather than a
  genuine R/L distinction. Rows 22 and 31 still say "Japanese R vs L"
  in the table since those aren't authored yet; apply the same fix
  when building them.

All 9 A2 topics have the full 56-word (4×14) pronunciation drill built
directly, plus base pronunciation, full vocab/dialogue/grammar, a song,
and — as of this session — a grammar drill slide (10 sentences per
grammar sub-concept, kana+kanji both authored). None yet have a
self-intro slide or non-pronunciation-drill kanji (vocab/dialogue/
grammar are still kana-only for all 9).

The previously-proposed "pronunciation-drill repeat-fix" (the A2 table
reuses several basic contrasts — K vs G, S vs SH, long/short vowels —
up to 6 times each with no "reinforced" marking) has not been applied;
still worth doing once more rows are built and repeats start to matter.



Against the "every lesson complete" standard above, per-feature status:

- **Kanji**: only Topic 3 has `jaKanji` authored for vocab/dialogue/
  grammar (all 41 vocab items, both dialogues, grammar). Topics 20–28
  additionally have kanji in their grammar-drill lines only (not
  vocab/dialogue/grammar-primer). The other 17 A1 topics are fully
  kana-only — see `engine/scriptDisplay.ts` for the toggle mechanism,
  already built and ready to receive kanji for any topic.
- **Self-introduction slides**: only Topics 1 and 2 have one.
- **Grammar drills (`grammarDrills`)**: Topic 15 (4 slides, より/の
  ほうが/いちばん/ほど〜ない, 10 sentences each) and all of Topics
  20–28 (1–3 slides each depending on how many grammar sub-concepts
  that topic's point has).
- **Pronunciation drills (`pronunciationDrills`)**: see the dedicated
  section above for exact per-topic status — 15 topics meet the full
  4×14 standard (6 from A1, all 9 from A2), 2 are below it, the rest
  have none at all.
- **Songs**: all 19 A1 topics have one (see `docs/song-melodies.md`),
  and all 19 have real melody data (verified directly against
  `src/data/songMelodies.ts` — `song-melodies.md`'s "zero gaps" claim is
  the accurate one; an earlier version of this doc incorrectly claimed
  Topics 10/19 were missing melody data). All 9 A2 topics also have a
  song, melody data not yet added for any of them.
- **Only `ja` and `de` have phrase templates**, and only those two
  languages have any grammar/pronunciation authored anywhere. A topic
  with vocab translated into `en`/`zh` still can't generate an `en`- or
  `zh`-target lesson.
- **Rows 14–19 (Countries, Landscape, Traffic, Work, School, Weather)
  have no German content.** Vocab/dialogue/song are already fully
  translated into de/en/ja/zh (ready for it), but grammar/pronunciation
  need to be authored per topic — genuine content work, not migration.
- **Topics 6–13 have no Chinese vocab/dialogue/song at all** — a gap
  that predates the topic-14+ additions and hasn't been backfilled.
  (Topics 1–5 and 14–19 do have full zh coverage.) A2 topics 20–28 are
  ja-only entirely (no de/en/zh vocab/dialogue/song yet).
- **German Lessons 2/11 and the English C1 lesson remain hand-written**,
  outside this system.
- **`fr`/`es` have no lessons or phrase templates at all** — the topic
  system's `LangCode` type already supports them structurally, but
  nothing has been authored.

## For a future session picking this up

Toward "every lesson complete" (see that section above), in rough
priority order:
1. Bring every topic's second pronunciation drill up to the full 4×14
   standard — expand Topic 2 (48→56) and Topic 8 (3 cols→4), then author
   one from scratch for the 11 topics that have none, on both `ja` and
   `de` sides wherever that topic has German content.
2. Author self-introduction slides for the A1 topics that don't have
   one yet (grammar drill slides are now done for Topics 15 and
   20–28; still missing for the remaining A1 topics).
3. Author kanji for the remaining 18 topics, one at a time, same process
   as Topic 3 (vocab, then dialogue, then grammar — never pronunciation
   content).
4. Author melody data for all 9 A2 topics' songs (none have any yet).

Separately, the fastest path to "every built topic works for every
trainer pair" is:
1. Author German grammar/pronunciation for topics 14–19 (same pattern as
   1–13 — substitute genuinely German-native grammar/pronunciation
   concepts where the master table's assigned concept doesn't map,
   exactly as topics 14–19's Japanese content already substituted for
   the table's German-centric default assignments)
2. Add `en` and `zh` `PhraseSet`s to `phraseTemplates.ts`, then author
   English/Chinese grammar+pronunciation per topic, to make Vincent's
   and Yui's stated language coverage real rather than aspirational
3. Backfill Chinese vocab/dialogue/song for topics 6–13
4. Extract German Lesson 11 and the English C1 lesson into topic files
