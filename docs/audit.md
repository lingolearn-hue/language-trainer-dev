# Lesson Audit / Review Guide

Methodology for auditing topic lessons (`src/data/topics/topic-*.ts`),
compiled from the checks that have actually caught real bugs across
past sessions. Run these whenever asked to "audit," "review," or
"check" lessons — not just after building something new.

## 0. Build verification — do this first, always

```
npx tsc -b --noEmit
```

**Never use plain `npx tsc --noEmit`** — this repo's `tsconfig.json`
uses project references (`"files": []` + `"references"`), so the bare
command compiles nothing and silently reports success regardless of
real errors. This was discovered mid-session after it let a genuine
structural bug through (a misplaced object landed outside its parent
field) for several edits before being caught. Every "type-check clean"
claim in this project's history should be read with this in mind if it
predates that discovery — see `docs/ARCHIVE.md` / session history
around the German-grammar-authoring work for the incident.

For a final confidence check after a large batch of edits, force a
full rebuild rather than relying on incremental caching:

```
npx tsc -b --noEmit --force
```

## 1. Duplicate-word scan (pronunciation drills, vocab, any items array)

The most common real bug found across audits: the same word appearing
twice within one `items` array, usually because it was reused across
two different phonetic/grammatical categories without noticing.

```python
import re, glob

for f in glob.glob("src/data/topics/topic-*.ts"):
    text = open(f).read()
    blocks = re.findall(r'items:\s*\[(.*?)\n\s*\]', text, re.S)
    for i, b in enumerate(blocks):
        words = re.findall(r'ja:\s*"([^"]+)"', b)  # or de: for German-target content
        seen = {}
        for w in words: seen[w] = seen.get(w, 0) + 1
        dups = [(w, c) for w, c in seen.items() if c > 1]
        if dups:
            print(f, "block", i, "dups:", dups)
```

**Fix by replacing one instance with a genuinely different word** —
not by just changing the category. When picking a replacement, always
re-run the scan afterward: it's very easy to fix one duplicate by
introducing a new one elsewhere in the same list (this happened
multiple times across sessions — always verify the fix, don't assume
it worked).

**One legitimate exception**: a word can appear twice if it genuinely
has two independent phonetic/grammatical features being separately
demonstrated (e.g. a word with both a specific pitch pattern *and* a
vowel-length feature). Judge case by case — this is rare and should be
the exception, not the excuse.

## 2. Phonetic/word-class categorization accuracy

Don't just trust that a word was filed under the right category —
verify the actual kana against the claimed sound. Real errors found
this way in past audits: a word placed in a "T" column that actually
started with "ST-" (should be its own cluster category), a word tagged
`adjective` that was actually an adverb, a word claimed to demonstrate
"ん before K" where the ん was word-final with nothing following it.

Example check for a ん-assimilation category:

```python
import re

kgyou = set("かきくけこ")
text = open("src/data/topics/topic-XX-name.ts").read()
entries = re.findall(r'category:\s*"nk",\s*translations:\s*\{\s*ja:\s*"([^"]+)"', text)
for word in entries:
    idx = word.find("ん")
    if idx == -1 or idx + 1 >= len(word) or word[idx + 1] not in kgyou:
        print("MISMATCH:", word)
```

Adapt the character-set check to whatever category is being verified
(R-row hiragana, S-row vs SH-row, etc.).

## 3. Unnecessary commentary in drill items

Established policy: pronunciation-drill and grammar-drill **items**
should be plain word + gloss, nothing else. No inline explanatory
annotations like `"(this lesson's own vocab)"`, `"(long おう)"`,
`"— new word, single pattern"`, or English disambiguation notes like
`"cool (weather)"`. The grouping/column header already carries the
phonetic-concept information; repeating it per-item is clutter.

```python
import re, glob

for f in glob.glob("src/data/topics/topic-*.ts"):
    text = open(f).read()
    blocks = re.findall(r'items:\s*\[(.*?)\n\s*\]', text, re.S)
    for b in blocks:
        for lang in ["en", "de", "zh"]:
            hits = re.findall(rf'{lang}:\s*"([^"]*[\(（—][^"]*)"', b)
            # exclude legitimate German gender-suffix notation, e.g. "Lehrer(in)"
            hits = [h for h in hits if not re.search(r'\w\(in\)$', h)]
            if hits:
                print(f, lang, hits)
```

**One genuine exception**: pitch-accent items where the parenthetical
encodes the actual pattern being taught (e.g. `"chopsticks (HL) /
bridge (LH)"`) — that's content, not commentary, and should stay.

## 4. Kanji (`jaKanji`) audit

When authoring or reviewing kanji coverage:

- **No redundant entries** — `jaKanji` should never equal `ja` (if a
  word has no useful kanji form, just omit the field entirely rather
  than duplicating the kana).
- **Cross-topic consistency** — the same kana word should map to the
  same kanji everywhere it's reused, *unless* it's genuinely two
  different words that happen to share a kana spelling (e.g. とる can
  be 取る "to take" or 撮る "to take a photo" — both are correct, just
  for different meanings; verify the English gloss to confirm which is
  intended before treating a mismatch as a bug).
- **No structural bugs**: check for double-inserted `jaKanji` on one
  object, or an orphaned `jaKanji` with no preceding `ja` field (both
  indicate a broken find-and-replace pass).
- **grammarDrills integrity** — if a topic's `grammarDrills` already
  had kanji authored before a vocab/dialogue kanji pass, verify the
  line count still matches the kanji-entry count 1:1 afterward
  (confirms nothing got overwritten or duplicated).

```python
import re, glob
from collections import defaultdict

word_to_kanji = defaultdict(set)
for f in glob.glob("src/data/topics/topic-*.ts"):
    text = open(f).read()
    for ja, kanji in re.findall(r'ja:\s*"([^"]+)",\s*jaKanji:\s*"([^"]+)"', text):
        if ja == kanji:
            print(f, "REDUNDANT:", ja)
        word_to_kanji[ja].add(kanji)

for w, kanjis in word_to_kanji.items():
    if len(kanjis) > 1:
        print("INCONSISTENT:", w, kanjis)  # verify by hand — may be legitimate
```

## 5. Doc staleness (when asked to update docs, not just code)

Docs drift fast in this project because lesson-building sessions move
faster than doc updates. When asked to update docs:

- **Cross-check numbers across all docs at once** — topic counts,
  built-vs-target ratios, per-language coverage — rather than fixing
  one doc in isolation. A number fixed in one file but left stale in
  another is a common failure mode (found repeatedly across sessions).
- **Distrust old "status" or "summary" sections specifically** — these
  are the parts most likely to have been written once and never
  revisited, even when a "Build status" table elsewhere in the same
  file was kept current. If two sections in the same doc disagree,
  the newer/more detailed one is usually right — verify against the
  actual code before trusting either.
- **Move genuinely historical content to `docs/ARCHIVE.md`** rather
  than deleting it outright, if it has some record-keeping value (e.g.
  a superseded status snapshot, an old changelog). Simple stale
  numbers can just be corrected in place — archiving is for content
  that's interesting as history, not just wrong.

## General principle

None of these checks are optional "nice to have" passes — every single
one has caught a real, shipped bug at least once in this project's
history. Run the relevant ones every time, not just when something
seems off.
