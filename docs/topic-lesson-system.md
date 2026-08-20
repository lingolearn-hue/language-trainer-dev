# Topic-Based Lesson System

**Status: all 13 built Japanese lessons (rows 1–13) migrated to this
system. German (Lessons 2, 11) and English (Voices from Orbit) remain
hand-written — see "Known gaps" below.**

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

A lesson has two genuinely different kinds of content:

| Shareable across target languages | NOT shareable — must be authored per target language |
|---|---|
| Vocab list | Grammar (Japanese teaches に/へ/で; German teaches wo/wohin cases — not translations of each other, different mechanics) |
| Both dialogues | Pronunciation (pitch accent has no German equivalent; umlaut length has no Japanese equivalent) |
| Song | |
| Framing text (title, agenda, warm-up, "let's look at some words about X") — turns out to follow a *strict, consistent template* across every lesson built so far | |

That last row was the real find: framing text isn't actually
language-specific content, it's a template with the topic name and a
couple of block titles substituted in. That means it can be **generated**,
not hand-translated, for any language that has a template function.

## How it works

**`src/data/topicTypes.ts`** — defines `TopicLesson`: one file per topic,
holding vocab/dialogueA/dialogueB/song ONCE (already full `{ja, en, de,
zh}` Translations objects — genuinely shared data, not "Japanese content
with translations bolted on"), plus `grammar` and `pronunciation` as
`Partial<Record<LangCode, ...>>` — populated only for languages that
actually have real content authored.

**`src/data/phraseTemplates.ts`** — one `PhraseSet` per language (currently
`ja`, `de`) with functions like `welcomeTitle(topic)`,
`agendaSpoken(topic, grammarTitle)`, `vocabIntro(topic)`. These generate
every piece of framing text a lesson needs, in that language, for any
topic — this is what makes framing text free once a language has a
`PhraseSet`, instead of being retyped per lesson.

**`src/engine/buildLesson.ts`** — `buildLessonPlan(topic, targetLang,
sourceLang, courseId)` assembles a real `LessonPlan` (the exact same type
every hand-written lesson file already produces) by:
1. Checking `topic.grammar[targetLang]` and `topic.pronunciation[targetLang]`
   both exist — returns `null` if not (can't build a lesson without them,
   no matter how well-translated the vocab is)
2. Generating the title/agenda/warm-up blocks from phrase templates
3. Slotting in the shared vocab/dialogueA/dialogueB/song as-is
4. Slotting in that target language's own grammar/pronunciation content

**Critically: `Session.tsx`, `VocabDrillBlock.tsx`, `ReadalongBlock.tsx`,
and every other consumer needed ZERO changes.** They only ever cared about
`LessonPlan`/`Block`, and `buildLessonPlan()` produces exactly that. This
is why the blast radius of adding this system was small enough to prove
out safely alongside the existing 15 lessons.

## Migration: all 13 Japanese lessons (rows 1–13)

Migrated mechanically via `scripts/migrateLesson.mjs` — imports each
hand-written lesson module directly (real typed objects, not regex
parsing) and emits the equivalent `TopicLesson` source file. This
restructures existing, already-correct content; it doesn't author
anything new.

Every migration was verified programmatically (not just "it compiles")
by deep-equality-checking the generated `LessonPlan`'s vocab, both
dialogues, grammar, pronunciation, and song against the original
hand-written file's blocks — all 13 passed with zero mismatches. The 13
original hand-written `lessonJapaneseN.ts` files were then deleted;
confirmed unused first (`grep` for any remaining import), and the build
size was identical before/after deletion (confirms they were truly dead
code by that point, not silently still referenced somewhere).

**Real structural gap found and fixed along the way**: Japanese Lesson 8
(Shopping) has an extra vocab-drill slide beyond the standard
vocab+pronunciation pair (a number/R-sound practice slide). `TopicLesson`
didn't have anywhere to put a third per-language drill slide. Added
`extraDrills?: Partial<Record<LangCode, TopicExtraDrill[]>>` to
`topicTypes.ts`, and `buildLessonPlan()` now inserts any extra drills
right after the pronunciation block. Verified the same way — a dedicated
deep-equality check confirmed the extra drill's content survived the
migration unchanged.

## Proof of concept: `topic-05-food.ts`

Built from `lessonJapanese5.ts`'s existing vocab (34 items) and both
dialogues (already had full ja/en/de/zh). Japanese grammar/pronunciation
carried over unchanged. German grammar (present tense: regular/irregular
`essen→isst`/modal `möchten`) and pronunciation (S voiced vs Z as "ts")
were newly authored, per `a1-master-lesson-table-v04.md` row 5's actual
German-track assignment.

Verified programmatically (not just "it compiles"):
- Both a `ja`-target and a `de`-target `LessonPlan` build successfully
  from the one topic file
- Both share the identical 34-item vocab and 14-line dialogues
- Grammar/pronunciation content is genuinely different and correct per
  language (げんざいけい vs Präsens; ん-assimilation vs S/Z)

## A real bug this surfaced and fixed

`ReadalongLine.speaker` was a plain string. A shared dialogue's role
label ("waiter") would have leaked the *original* language's word
(てんいん) into a German-target lesson instead of showing "Kellner."
Fixed: `speaker` now accepts `string | Translations` — existing lesson
files (plain strings) are unaffected; new topic-based dialogues can use
a real `Translations` object for role labels. Character *names* (Ai,
Ken) are left as plain strings since they're proper nouns, not role
labels that need translating.

## Known gaps — not yet resolved

- **Only `ja` and `de` have phrase templates.** A topic with vocab
  translated into `en`/`zh` still can't generate an `en`- or `zh`-target
  lesson — `buildLessonPlan` would need `en`/`zh` `PhraseSet`s added to
  `phraseTemplates.ts` first. Framing text for those languages currently
  falls back to the bare topic name (no "Lesson N —" wrapper), rather
  than breaking outright.
- **Only Food (topic-05) has German grammar/pronunciation authored.**
  The other 12 Japanese-topic files have vocab/dialogue/song already
  translated into de/en/zh (inherited from the original hand-written
  files), but `buildLessonPlan(topic, "de", ...)` returns `null` for all
  of them until real German grammar/pronunciation gets written per
  topic — this is genuine content-authoring work, not migration.
- **German Lessons 2/11 and the English C1 lesson remain hand-written.**
  Lesson 2 predates the master table and doesn't map cleanly to a single
  row; Lesson 11 and the English lesson could be extracted into topics
  the same mechanical way the Japanese lessons were, but haven't been
  yet.
- **`fr`/`es` have no lessons or phrase templates at all** — the topic
  system's `LangCode` type already supports them structurally (same
  `Partial<Record<LangCode, ...>>` pattern), but nothing has been
  authored.
- Generated lessons now fully replace their hand-written equivalents for
  all 13 Japanese topics (no more duplicate registration) — Food's
  German version is additionally registered as its own lesson entry
  alongside the Japanese one, since it's a second target language for
  the same topic, not a duplicate.

## For a future session picking this up

The fastest path to "every built topic works for every trainer pair" is:
1. Add `en` and `zh` `PhraseSet`s to `phraseTemplates.ts` (same shape as
   `ja`/`de`, straightforward translation work)
2. For each of the 12 non-Food Japanese topics: author the missing
   German grammar/pronunciation (or `en`/`zh`, once templates exist) —
   this is the only genuinely new content-authoring work now that the
   migration itself is done
3. Extract German Lesson 11 and the English C1 lesson into topic files
   the same mechanical way (`scripts/migrateLesson.mjs` should work
   as-is or with minor adjustment)
