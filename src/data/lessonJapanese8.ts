import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 8 — per a1-master-lesson-table-v02.md row 8:
// Vocab: Shopping | Grammar: Numbers and quantity | Dialogue A: buying
// groceries at the market | Dialogue B: haggling over prices at a shop |
// Song: "This Old Man" in the German example track — no Japanese-specific
// song has been researched yet (known open item, see
// a1-master-lesson-table-v02.md), so this lesson has no song block for
// now rather than forcing an untranslated placeholder.
//
// Same 8-block shape as lessonJapanese5.ts / lessonJapanese10.ts: title ->
// agenda -> warm-up -> vocab -> grammar -> dialogue A -> dialogue B ->
// pronunciation.
//
// Grammar: Japanese numbers 1-10, the generic counter つ (hitotsu,
// futatsu...) for small round objects, and price/yen reading — the A1-
// appropriate slice of "numbers and quantity."
//
// Pronunciation: two NEW concepts, both genuinely tied to this lesson's
// own grammar/vocab rather than generic filler —
//   - R-sound (ら row): common shopping-context words, since Japanese r
//     is a single tap, distinct from English r/l/d and a well-known
//     trouble spot for English speakers
//   - the ほん counter's irregular sokuon: いっぽん/ろっぽん/はっぽん/
//     じゅっぽん genuinely take a small っ while に/さん/よん/ご/なな/
//     きゅう don't — a real, well-documented A1 pain point, and directly
//     reinforces this lesson's own "numbers and quantity" grammar point
//     rather than being an unrelated add-on.
// Target text is hiragana-only, matching the established rule (no
// furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja8-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "かいもの", en: "Shopping" },
  spokenIntro: {
    ja: "ようこそ！きょうは かいものについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about shopping.",
  },
  content: {
    text: {
      ja: "だい8か — かいもの",
      en: "Lesson 8 — Shopping",
    },
  },
};

export const agendaBlock: Block = {
  id: "ja8-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから かいものの たんごを べんきょうします。そのあと すうじと かずを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn shopping vocabulary. After that we'll look at numbers and quantity, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：かいもの", en: "Vocabulary: Shopping" } },
      { id: "a3", translations: { ja: "ぶんぽう：すうじと かず", en: "Grammar: Numbers and Quantity" } },
      { id: "a4", translations: { ja: "かいわ：しじょうで", en: "Dialogue A: At the Market" } },
      { id: "a5", translations: { ja: "かいわ：ねだんの こうしょう", en: "Dialogue B: Haggling Over Price" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja8-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", en: "Warm-up" },
  spokenIntro: {
    ja: "はじめる まえに、すこし はなしましょう。",
    en: "Before we start, let's talk a little.",
  },
  content: {
    text: {
      ja: "よく かいものを しますか？どこで かいものを しますか？",
      en: "Do you shop often? Where do you shop?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja8-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：かいもの", en: "Vocabulary: Shopping" },
  spokenIntro: {
    ja: "かいものに かんけいする たんごを みてみましょう。",
    en: "Let's look at some shopping-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "みせ", en: "shop, store" } },
      { id: "v02", category: "noun", translations: { ja: "しじょう", en: "market" } },
      { id: "v03", category: "noun", translations: { ja: "おかね", en: "money" } },
      { id: "v04", category: "noun", translations: { ja: "ねだん", en: "price" } },
      { id: "v05", category: "noun", translations: { ja: "レシート", en: "receipt" } },
      { id: "v06", category: "noun", translations: { ja: "おつり", en: "change (money)" } },
      { id: "v07", category: "noun", translations: { ja: "ふくろ", en: "bag" } },
      { id: "v08", category: "noun", translations: { ja: "レジ", en: "cash register, checkout" } },
      { id: "v09", category: "noun", translations: { ja: "てんいん", en: "shop clerk" } },
      { id: "v10", category: "noun", translations: { ja: "きゃく", en: "customer" } },
      { id: "v11", category: "noun", translations: { ja: "セール", en: "sale" } },
      { id: "v12", category: "noun", translations: { ja: "えん", en: "yen" } },
      { id: "v13", category: "noun", translations: { ja: "やおや", en: "vegetable shop" } },
      { id: "v14", category: "noun", translations: { ja: "スーパー", en: "supermarket" } },
      { id: "v15", category: "noun", translations: { ja: "かご", en: "shopping basket" } },
      { id: "v16", category: "noun", translations: { ja: "わりびき", en: "discount" } },

      { id: "v17", category: "verb", translations: { ja: "かう", en: "to buy" } },
      { id: "v18", category: "verb", translations: { ja: "うる", en: "to sell" } },
      { id: "v19", category: "verb", translations: { ja: "はらう", en: "to pay" } },
      { id: "v20", category: "verb", translations: { ja: "えらぶ", en: "to choose" } },
      { id: "v21", category: "verb", translations: { ja: "さがす", en: "to look for" } },
      { id: "v22", category: "verb", translations: { ja: "まける", en: "to lower a price (haggling)" } },
      { id: "v23", category: "verb", translations: { ja: "つつむ", en: "to wrap" } },
      { id: "v24", category: "verb", translations: { ja: "くらべる", en: "to compare" } },

      { id: "v25", category: "adjective", translations: { ja: "たかい", en: "expensive" } },
      { id: "v26", category: "adjective", translations: { ja: "やすい", en: "cheap" } },
      { id: "v27", category: "adjective", translations: { ja: "おおい", en: "many, a lot" } },
      { id: "v28", category: "adjective", translations: { ja: "すくない", en: "few, a little" } },
      { id: "v29", category: "adjective", translations: { ja: "べんり", en: "convenient" } },
      { id: "v30", category: "adjective", translations: { ja: "しんせん", en: "fresh" } },
    ],
  },
};

export const grammarNumbersBlock: Block = {
  id: "ja8-grammar-numbers",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "すうじと かず", en: "Numbers and Quantity" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、すうじと ものの かぞえかたです。",
    en: "Today's grammar is numbers and how to count things.",
  },
  content: {
    explanation: {
      ja: "にほんごの すうじ 1から10は：いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう です。まるい ものや ちいさい ものを かぞえる とき、「〜つ」を つかいます：ひとつ、ふたつ、みっつ、よっつ、いつつ。ねだんは「〜えん」で いいます。",
      en: "Japanese numbers 1-10 are: いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. To count round or small objects generically, use 〜つ: ひとつ (one), ふたつ (two), みっつ (three), よっつ (four), いつつ (five). Prices are said with 〜えん (yen).",
    },
    chunks: [
      { id: "n1", translations: { ja: "りんごを ふたつ ください。", en: "Two apples, please. (ふたつ = two, generic counter)" } },
      { id: "n2", translations: { ja: "これは ひゃくえんです。", en: "This is one hundred yen." } },
      { id: "n3", translations: { ja: "たまごを ろくこ ください。", en: "Six eggs, please. (ろっこ/ろくこ — item counter)" } },
      { id: "n4", translations: { ja: "ぜんぶで さんびゃくえんです。", en: "It's three hundred yen in total." } },
      { id: "n5", translations: { ja: "もう すこし やすく できますか？", en: "Can you make it a little cheaper?" } },
      { id: "n6", translations: { ja: "みっつで にひゃくえんです。", en: "Three for two hundred yen." } },
    ],
  },
};

export const dialogueMarketBlock: Block = {
  id: "ja8-dialogue-market",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：しじょうで", en: "Dialogue A: At the Market" },
  spokenIntro: {
    ja: "しじょうで やさいを かう かいわを ききましょう。",
    en: "Let's listen to someone buying vegetables at the market.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "てんいん", translations: { ja: "いらっしゃいませ！なにか さがしていますか？", en: "Welcome! Are you looking for something?" } },
      { id: "d2", speaker: "きゃく", translations: { ja: "はい、しんせんな やさいが ほしいです。", en: "Yes, I want some fresh vegetables." } },
      { id: "d3", speaker: "てんいん", translations: { ja: "この トマトは とても しんせんですよ。", en: "These tomatoes are very fresh." } },
      { id: "d4", speaker: "きゃく", translations: { ja: "いくらですか？", en: "How much is it?" } },
      { id: "d5", speaker: "てんいん", translations: { ja: "ひとつ ひゃくえんです。", en: "One hundred yen each." } },
      { id: "d6", speaker: "きゃく", translations: { ja: "じゃあ、みっつ ください。", en: "Then, three please." } },
      { id: "d7", speaker: "てんいん", translations: { ja: "ほかに なにか いかがですか？", en: "Would you like anything else?" } },
      { id: "d8", speaker: "きゃく", translations: { ja: "たまごも ありますか？", en: "Do you have eggs too?" } },
      { id: "d9", speaker: "てんいん", translations: { ja: "はい、ろっこで にひゃくえんです。", en: "Yes, six for two hundred yen." } },
      { id: "d10", speaker: "きゃく", translations: { ja: "それも ください。", en: "I'll take that too." } },
      { id: "d11", speaker: "てんいん", translations: { ja: "ぜんぶで ごひゃくえんです。", en: "Five hundred yen in total." } },
      { id: "d12", speaker: "きゃく", translations: { ja: "はい、どうぞ。", en: "Here you are." } },
      { id: "d13", speaker: "てんいん", translations: { ja: "おつりは ありません。", en: "There's no change (exact amount)." } },
      { id: "d14", speaker: "きゃく", translations: { ja: "ありがとうございます！", en: "Thank you!" } },
    ],
  },
};

export const dialogueHagglingBlock: Block = {
  id: "ja8-dialogue-haggling",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ねだんの こうしょう", en: "Dialogue B: Haggling Over Price" },
  spokenIntro: {
    ja: "おみせで ねだんを こうしょうする かいわを ききましょう。",
    en: "Let's listen to someone negotiating a price at a shop.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "きゃく", translations: { ja: "この かばんは いくらですか？", en: "How much is this bag?" } },
      { id: "e2", speaker: "てんいん", translations: { ja: "さんぜんえんです。", en: "It's three thousand yen." } },
      { id: "e3", speaker: "きゃく", translations: { ja: "ちょっと たかいですね。", en: "That's a bit expensive." } },
      { id: "e4", speaker: "てんいん", translations: { ja: "そうですか。でも、とても べんりですよ。", en: "Is that so? But it's very convenient." } },
      { id: "e5", speaker: "きゃく", translations: { ja: "もう すこし やすく できますか？", en: "Can you make it a little cheaper?" } },
      { id: "e6", speaker: "てんいん", translations: { ja: "うーん、にせんごひゃくえんは どうですか？", en: "Hmm, how about two thousand five hundred yen?" } },
      { id: "e7", speaker: "きゃく", translations: { ja: "にせんえんは だめですか？", en: "Is two thousand yen no good?" } },
      { id: "e8", speaker: "てんいん", translations: { ja: "うーん、わかりました。にせんえんで いいです。", en: "Hmm, okay. Two thousand yen is fine." } },
      { id: "e9", speaker: "きゃく", translations: { ja: "ありがとうございます！", en: "Thank you!" } },
      { id: "e10", speaker: "てんいん", translations: { ja: "げんきんですか、カードですか？", en: "Cash or card?" } },
      { id: "e11", speaker: "きゃく", translations: { ja: "げんきんで はらいます。", en: "I'll pay in cash." } },
      { id: "e12", speaker: "てんいん", translations: { ja: "かしこまりました。", en: "Understood." } },
      { id: "e13", speaker: "きゃく", translations: { ja: "ふくろは いりますか？", en: "Wait, do I need a bag?" } },
      { id: "e14", speaker: "てんいん", translations: { ja: "はい、サービスです。どうぞ。", en: "Yes, it's on the house. Here you go." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja8-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "ら行の おとと、かぞえかたの「っ」を れんしゅうしましょう。",
    en: "Let's practice the Japanese R-sound and the small っ in counters.",
  },
  content: {
    groupLabels: {
      rsound: { ja: "ら行の おと", en: "The Japanese R-sound (ら row)" },
      counter_no: { ja: "「ほん」ふつう", en: "ほん counter — regular (no っ)" },
      counter_soku: { ja: "「ほん」とくべつ", en: "ほん counter — irregular (with っ)" },
    },
    items: [
      // R-sound — a single quick tap of the tongue, distinct from both
      // English R and L/D. Common shopping-context words, not forced.
      { id: "r1", category: "rsound", translations: { ja: "いくら", en: "how much" } },
      { id: "r2", category: "rsound", translations: { ja: "りんご", en: "apple" } },
      { id: "r3", category: "rsound", translations: { ja: "ください", en: "please give me" } },
      { id: "r4", category: "rsound", translations: { ja: "これ", en: "this" } },
      { id: "r5", category: "rsound", translations: { ja: "それ", en: "that" } },
      { id: "r6", category: "rsound", translations: { ja: "あれ", en: "that (over there)" } },
      { id: "r7", category: "rsound", translations: { ja: "いらっしゃいませ", en: "welcome (shopkeeper's greeting)" } },
      { id: "r8", category: "rsound", translations: { ja: "ありがとう", en: "thank you" } },
      // ほん counter (long thin objects) — genuinely irregular: 1, 6, 8,
      // 10 take a small っ (and shift the counter's consonant), the rest
      // don't. A real, well-known A1 pain point, directly reinforcing
      // this lesson's numbers/quantity grammar.
      { id: "c1", category: "counter_no", translations: { ja: "にほん", en: "two (long objects)" } },
      { id: "c2", category: "counter_no", translations: { ja: "さんぼん", en: "three (long objects)" } },
      { id: "c3", category: "counter_no", translations: { ja: "ごほん", en: "five (long objects)" } },
      { id: "c4", category: "counter_no", translations: { ja: "ななほん", en: "seven (long objects)" } },
      { id: "s1", category: "counter_soku", translations: { ja: "いっぽん", en: "one (long objects)" } },
      { id: "s2", category: "counter_soku", translations: { ja: "ろっぽん", en: "six (long objects)" } },
      { id: "s3", category: "counter_soku", translations: { ja: "はっぽん", en: "eight (long objects)" } },
      { id: "s4", category: "counter_soku", translations: { ja: "じゅっぽん", en: "ten (long objects)" } },
    ],
  },
};

export const lessonJapanese8: LessonPlan = {
  id: "lesson-ja-8",
  courseId: "japanese-beginner",
  title: { ja: "かいもの", en: "Shopping" },
  framingLanguage: "source", // beginner course — same rule as lessons 2, 5, and 10
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarNumbersBlock,
    dialogueMarketBlock,
    dialogueHagglingBlock,
    pronunciationBlock,
    // No song block — German track has "This Old Man" here, but no
    // Japanese-specific song has been researched yet (known open item).
  ],
};
