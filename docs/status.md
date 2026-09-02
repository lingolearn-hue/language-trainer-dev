# Build Status

This file documents how to read and regenerate the language/level
coverage table, so it stays a live, checkable artifact rather than a
claim someone has to trust. See `docs/topic-lesson-system.md` for the
full architecture and per-topic detail; this file is just the
methodology and the current numbers.

## The table

| Language | A1 (target: 34) | A2 (target: 35) | B1+ |
|---|---|---|---|
| ja | 56% / 56% | 40% / 40% | — |
| de | 56% / 56% | 40% / 0% | — |
| en | 56% / 0% | 40% / 0% | — |
| zh | 56% / 0% | 40% / 0% | — |
| fr | 0% / 0% | 0% / 0% | — |
| es | 0% / 0% | 0% / 0% | — |

Each cell reads **vocab/dialogue % / grammar+pronunciation %**.

## Denominator: target lesson count, not built count

A1 is a 34-row master-table plan; A2 is a 35-row plan (34 in the
original table plus row 35, Conjunctions, added when no existing row
covered discourse-level sentence connectors — see
`docs/a2-master-lesson-table-v01.md`). Every percentage in this table
is **(topics meeting the criterion) / (that level's row count)** — not
a percentage of what's currently built. This means a language can
show, say, 56% even though every topic actually built for that
language is 100% complete; the gap to 100% reflects lessons that don't
exist yet at all, not partial/broken lessons.

B1+ shows "—" rather than 0% because no master table exists for it yet
— there's no denominator to divide by, so a percentage would imply a
target that hasn't been set.

## What each half of the cell measures

**Vocab/dialogue %**: for each target lesson slot, does a built topic
exist with that language's vocab AND both dialogues authored (checked
directly against the `TopicLesson` vocab and dialogueA/dialogueB
translation objects — not inferred from file presence). Song is
checked separately, not folded into this number, because song-language
coverage lags vocab/dialogue coverage in practice (see "Known
asymmetry" below).

**Grammar+pronunciation %**: for each target lesson slot, does a built
topic exist with that language's `grammar` field AND `pronunciation`
field both populated (i.e. the language actually appears as a key in
both, not just present as a type possibility). This is what actually
gates whether `buildLesson.ts` can generate a session for that
language/topic pair — vocab/dialogue alone isn't enough to produce a
working lesson.

## Known asymmetry: vocab/dialogue outpaces grammar/pronunciation

Every topic built so far authors vocab/dialogue/song in `ja`, `de`,
`en`, and `zh` from the start (it's cheap to do while the vocab list is
already being written), but grammar/pronunciation is only authored for
the language(s) actually being used as a *target* in a real lesson.
This is why every built topic shows full vocab/dialogue coverage
across all 4 authored languages, but grammar/pronunciation coverage
drops to 0% the moment a language isn't a target for that level (e.g.
`en`/`zh` for both A1 and A2, `de` for A2).

Concretely: an `en`-target or `zh`-target A1/A2 lesson can't be
generated today even though the vocab is sitting right there ready to
go — `phraseTemplates.ts` has no `en`/`zh` `PhraseSet`, and no topic
has `en`/`zh` grammar or pronunciation authored. Closing this gap is
authoring work (writing grammar explanations and pronunciation
contrasts in a new target language), not migration work.

## Regenerating the numbers

To recompute after adding topics, for each level and language, count
topics (out of that level's row count — 34 for A1, 35 for A2) where:
- vocab/dialogue: `vocab` items and both `dialogueA`/`dialogueB` lines
  have that language key populated
- grammar/pronunciation: both `grammar[lang]` and `pronunciation[lang]`
  exist

Divide each count by the row count and round to the nearest percent.
Do this per-language, not in aggregate — a topic can have vocab in 4
languages and grammar in only 1.

## Current per-level build count (for context)

- A1: 19 of 34 topics built. Rows 20–34 are documented as *review*
  lessons in the master table (recombining grammar from rows 1–18,
  reusing songs) rather than new grammar points — cheaper to build
  than rows 1–19 were, but not yet started.
- A2: 14 of 35 topics built. Every remaining row introduces a
  genuinely new grammar point — no review-lesson shortcut here, same
  authoring cost per lesson as what's already built.
- B1+: no master table exists yet.

Last updated: 2026-08-30 (v99).
