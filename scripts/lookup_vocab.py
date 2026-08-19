#!/usr/bin/env python3
"""
lookup_vocab.py — cross-reference English glosses against the real vocab
databases in vocab-games-dev (zh-en.json, de-en.json, ja-en.json,
fr-en.json, es-en.json) to source translations for a new lesson's vocab
list, instead of composing translations from scratch.

This is a REVIEW AID, not a fully automatic pipeline — see the
conversation notes on why: English gloss text is a bad unique key
(polysemy causes real false positives — "chest" matched a suitcase word
once), some basic words have no exact-gloss entry at all, and a few DB
entries have outright wrong glosses/readings. Every suggestion here still
needs a human pick, same bar as before — this just does the searching
and ranking so that pick is fast instead of requiring a fresh Python
one-off script each time.

Usage (as a script):
    python3 scripts/lookup_vocab.py --lang zh --cat body \
        head eyes "to hurt" strong

Usage (as a module, for batch lesson-building sessions):
    from lookup_vocab import search, load_db
    db = load_db("zh")
    hits = search(db, "head", want_cat="body")

Level ordering: CJK languages (zh, ja) use HSK/JLPT (lower = easier,
1 = easiest); Latin-script languages (de, fr, es) in this dataset use
CEFR (A1 easiest -> C2 hardest). Both are normalized to a single
"easier is better" sort key so candidates are ranked by simplicity
regardless of which scale the language uses.
"""
import json
import re
import argparse
from pathlib import Path

VOCAB_DIR = Path("/home/claude/vocab-games-dev/vocab")

LEVEL_ORDER = {}
for i in range(1, 10):
    LEVEL_ORDER[f"HSK{i}"] = i          # Chinese
    LEVEL_ORDER[f"N{6-i}" if 1 <= i <= 5 else f"N{i}"] = i  # rough JLPT fallback, not primary
for i, cefr in enumerate(["A1", "A2", "B1", "B2", "C1", "C2"], start=1):
    LEVEL_ORDER[cefr] = i               # German/French/Spanish

# JLPT is N5 (easiest) to N1 (hardest) — opposite numeric direction from
# HSK, so map explicitly rather than relying on the generic loop above.
LEVEL_ORDER.update({"N5": 1, "N4": 2, "N3": 3, "N2": 4, "N1": 5})


def load_db(lang_code: str) -> dict:
    """lang_code: zh, de, ja, fr, es (matches the vocab-games-dev filename)."""
    path = VOCAB_DIR / f"{lang_code}-en.json"
    if not path.exists():
        raise FileNotFoundError(f"No vocab DB for '{lang_code}' at {path}")
    return json.load(open(path, encoding="utf-8"))


def _norm(w: str) -> str:
    w = w.strip().lower()
    w = re.sub(r"^(the|a|an)\s+", "", w)
    if w.startswith("to "):
        return w
    if w.endswith("es") and w[:-2] in ("touch", "wash", "watch"):
        return w[:-2]
    if w.endswith("s") and not w.endswith("ss") and len(w) > 3:
        return w[:-1]
    return w


def search(db: dict, query: str, want_cat: str | None = None, want_pos: str | None = None, top_n: int = 3):
    """Returns up to top_n candidates as dicts, ranked easiest-level first,
    with category/POS matches preferred. Each candidate: word, reading,
    glosses, pos, cats, level — exactly what to eyeball before picking."""
    q = _norm(query)
    cands = []
    for e in db["entries"]:
        word, reading, glosses, pos, cats, level = e[0], e[1], e[2], e[3], e[4], e[5]
        for g in glosses:
            if _norm(g) == q:
                cands.append({"word": word, "reading": reading, "glosses": glosses, "pos": pos, "cats": cats, "level": level})
                break

    def score(c):
        s = 0
        if want_cat and c["cats"] and want_cat in c["cats"]:
            s -= 10
        if want_pos and c["pos"] == want_pos:
            s -= 5
        s += LEVEL_ORDER.get(c["level"], 99)
        return s

    cands.sort(key=score)
    return cands[:top_n]


def search_all(words: list[str], lang_code: str, want_cat: str | None = None, want_pos: str | None = None):
    """Batch helper — one DB load, many queries. Returns {query: [candidates]}."""
    db = load_db(lang_code)
    return {w: search(db, w, want_cat, want_pos) for w in words}


def _format_candidate(c: dict) -> str:
    reading = f" ({c['reading']})" if c.get("reading") else ""
    return f"{c['word']}{reading} [{c['pos']}, {c['level']}, cats={c['cats']}] — {', '.join(c['glosses'][:3])}"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Look up real vocab-database translations for a list of English words.")
    parser.add_argument("--lang", required=True, help="Target language code: zh, de, ja, fr, es")
    parser.add_argument("--cat", default=None, help="Preferred semantic category tag (e.g. body, food, travel)")
    parser.add_argument("--pos", default=None, help="Preferred part of speech (e.g. noun, verb, adj)")
    parser.add_argument("--top", type=int, default=3, help="Candidates to show per word")
    parser.add_argument("words", nargs="+", help="English words/glosses to look up")
    args = parser.parse_args()

    db = load_db(args.lang)
    for w in args.words:
        hits = search(db, w, args.cat, args.pos, args.top)
        print(f"\n{w!r}:")
        if not hits:
            print("  NONE — no exact-gloss match, needs a manual translation")
        for c in hits:
            print(f"  {_format_candidate(c)}")
