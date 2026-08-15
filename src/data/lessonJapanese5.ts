import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 5 — per a1-master-lesson-table-v02.md row 5:
// Vocab: Food | Grammar: Present tense (regular/irregular/modal) |
// Dialogue A: ordering food at a restaurant | Dialogue B: talking about
// your daily eating habits | Song: open slot (none — matches the master
// table; no Japanese-specific song has been researched yet, see the
// "known open items" list in a1-master-lesson-table-v02.md).
//
// Same 8-block shape as lessonJapanese10.ts: title -> agenda -> warm-up ->
// vocab -> grammar -> dialogue A -> dialogue B -> pronunciation.
//
// Grammar choice: "present tense (regular/irregular/modal)" maps onto
// Japanese as: the ます-form (polite non-past, regular pattern across all
// verb types), the two true irregular verbs する/くる (the only two in the
// language), and たい (want-to, the closest A1-level equivalent to a
// "modal" — extremely common in food contexts, "食べたい" etc.) — this
// covers all three parenthetical items in the master table's grammar
// slot with material that's genuinely core A1 content, not padding.
//
// Pronunciation: two NEW concepts (not reused from L2/L10) — ん
// (moraic nasal) assimilating differently depending on the sound that
// follows it, and pitch accent reinforced with a fresh set of pairs
// (different words from L2's set, same real/standard-textbook-example
// bar). See lessonJapanese10.ts's pronunciation block for the small-っ /
// long-vowel concepts already covered elsewhere.
// Target text is hiragana-only, matching the established rule (no
// furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja5-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "たべもの", en: "Food" },
  spokenIntro: {
    ja: "ようこそ！きょうは たべものについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about food.",
  },
  content: {
    text: {
      ja: "だい5か — たべもの",
      en: "Lesson 5 — Food",
    },
  },
};

export const agendaBlock: Block = {
  id: "ja5-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから たべものの たんごを べんきょうします。そのあと げんざいけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn food vocabulary. After that we'll look at the present tense, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：たべもの", en: "Vocabulary: Food" } },
      { id: "a3", translations: { ja: "ぶんぽう：げんざいけい", en: "Grammar: Present Tense" } },
      { id: "a4", translations: { ja: "かいわ：レストランで", en: "Dialogue A: At the Restaurant" } },
      { id: "a5", translations: { ja: "かいわ：まいにちの しょくじ", en: "Dialogue B: Daily Eating Habits" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja5-intro",
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
      ja: "なにを たべるのが すきですか？けさ なにを たべましたか？",
      en: "What do you like to eat? What did you eat this morning?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja5-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：たべもの", en: "Vocabulary: Food" },
  spokenIntro: {
    ja: "たべものに かんけいする たんごを みてみましょう。",
    en: "Let's look at some food-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "ごはん", en: "rice, meal" } },
      { id: "v02", category: "noun", translations: { ja: "パン", en: "bread" } },
      { id: "v03", category: "noun", translations: { ja: "みず", en: "water" } },
      { id: "v04", category: "noun", translations: { ja: "おちゃ", en: "tea" } },
      { id: "v05", category: "noun", translations: { ja: "にく", en: "meat" } },
      { id: "v06", category: "noun", translations: { ja: "さかな", en: "fish" } },
      { id: "v07", category: "noun", translations: { ja: "やさい", en: "vegetables" } },
      { id: "v08", category: "noun", translations: { ja: "くだもの", en: "fruit" } },
      { id: "v09", category: "noun", translations: { ja: "たまご", en: "egg" } },
      { id: "v10", category: "noun", translations: { ja: "スープ", en: "soup" } },
      { id: "v11", category: "noun", translations: { ja: "メニュー", en: "menu" } },
      { id: "v12", category: "noun", translations: { ja: "レストラン", en: "restaurant" } },
      { id: "v13", category: "noun", translations: { ja: "あさごはん", en: "breakfast" } },
      { id: "v14", category: "noun", translations: { ja: "ひるごはん", en: "lunch" } },
      { id: "v15", category: "noun", translations: { ja: "ばんごはん", en: "dinner" } },
      { id: "v16", category: "noun", translations: { ja: "デザート", en: "dessert" } },

      { id: "v17", category: "verb", translations: { ja: "たべる", en: "to eat" } },
      { id: "v18", category: "verb", translations: { ja: "のむ", en: "to drink" } },
      { id: "v19", category: "verb", translations: { ja: "つくる", en: "to make" } },
      { id: "v20", category: "verb", translations: { ja: "ちゅうもんする", en: "to order" } },
      { id: "v21", category: "verb", translations: { ja: "はらう", en: "to pay" } },
      { id: "v22", category: "verb", translations: { ja: "たりる", en: "to be enough" } },
      { id: "v23", category: "verb", translations: { ja: "すく", en: "to become hungry (おなかが すく)" } },
      { id: "v24", category: "verb", translations: { ja: "のどが かわく", en: "to become thirsty" } },

      { id: "v25", category: "adjective", translations: { ja: "おいしい", en: "delicious" } },
      { id: "v26", category: "adjective", translations: { ja: "まずい", en: "bad-tasting" } },
      { id: "v27", category: "adjective", translations: { ja: "あまい", en: "sweet" } },
      { id: "v28", category: "adjective", translations: { ja: "からい", en: "spicy" } },
      { id: "v29", category: "adjective", translations: { ja: "しょっぱい", en: "salty" } },
      { id: "v30", category: "adjective", translations: { ja: "あつい", en: "hot (temperature)" } },
    ],
  },
};

export const grammarPresentTenseBlock: Block = {
  id: "ja5-grammar-present",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "げんざいけい", en: "Present Tense" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、げんざいけいの つかいかたです。",
    en: "Today's grammar is how to use the present tense.",
  },
  content: {
    explanation: {
      ja: "どうしの ます形は、ていねいな げんざい・みらいけいです。にほんごには ふきそくな どうしが ふたつだけ あります：する と くる。「〜たい」は「〜したい」で「〜が したい」という きもちを あらわします。",
      en: "The polite present/future tense uses the ます-form of a verb. Japanese has only two truly irregular verbs: する (to do) and くる (to come). Adding たい to a verb stem (as in 〜たい) expresses \"want to\" — the closest thing Japanese has to a modal at this level.",
    },
    chunks: [
      { id: "g1", translations: { ja: "まいにち ごはんを たべます。", en: "I eat rice every day. (regular ます-form)" } },
      { id: "g2", translations: { ja: "みずを のみます。", en: "I drink water. (regular ます-form)" } },
      { id: "g3", translations: { ja: "べんきょうを します。", en: "I study. (irregular: する)" } },
      { id: "g4", translations: { ja: "ともだちが うちへ きます。", en: "A friend comes to my house. (irregular: くる)" } },
      { id: "g5", translations: { ja: "すしが たべたいです。", en: "I want to eat sushi. (たい — \"want to\")" } },
      { id: "g6", translations: { ja: "みずが のみたいです。", en: "I want to drink water. (たい — \"want to\")" } },
    ],
  },
};

export const dialogueRestaurantBlock: Block = {
  id: "ja5-dialogue-restaurant",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：レストランで", en: "Dialogue A: At the Restaurant" },
  spokenIntro: {
    ja: "レストランで ちゅうもんする かいわを ききましょう。",
    en: "Let's listen to someone ordering food at a restaurant.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "てんいん", translations: { ja: "いらっしゃいませ。なんめいさまですか？", en: "Welcome. How many people?" } },
      { id: "d2", speaker: "きゃく", translations: { ja: "ふたりです。", en: "Two people." } },
      { id: "d3", speaker: "てんいん", translations: { ja: "こちらへ どうぞ。メニューです。", en: "This way, please. Here's the menu." } },
      { id: "d4", speaker: "きゃく", translations: { ja: "ありがとうございます。", en: "Thank you." } },
      { id: "d5", speaker: "てんいん", translations: { ja: "ごちゅうもんは おきまりですか？", en: "Have you decided your order?" } },
      { id: "d6", speaker: "きゃく", translations: { ja: "すしと スープを おねがいします。", en: "Sushi and soup, please." } },
      { id: "d7", speaker: "てんいん", translations: { ja: "おのみものは？", en: "What about a drink?" } },
      { id: "d8", speaker: "きゃく", translations: { ja: "おちゃを ください。", en: "Tea, please." } },
      { id: "d9", speaker: "てんいん", translations: { ja: "かしこまりました。すこし おまちください。", en: "Understood. Please wait a moment." } },
      { id: "d10", speaker: "きゃく", translations: { ja: "すみません、これは からいですか？", en: "Excuse me, is this spicy?" } },
      { id: "d11", speaker: "てんいん", translations: { ja: "いいえ、あまり からくないです。", en: "No, it's not very spicy." } },
      { id: "d12", speaker: "きゃく", translations: { ja: "よかった。それを ちゅうもんします。", en: "Great. I'll order that." } },
      { id: "d13", speaker: "てんいん", translations: { ja: "かしこまりました。", en: "Understood." } },
      { id: "d14", speaker: "きゃく", translations: { ja: "とても おいしかったです。ごちそうさまでした。", en: "It was very delicious. Thank you for the meal." } },
    ],
  },
};

export const dialogueEatingHabitsBlock: Block = {
  id: "ja5-dialogue-eating-habits",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：まいにちの しょくじ", en: "Dialogue B: Daily Eating Habits" },
  spokenIntro: {
    ja: "まいにちの しょくじについて はなす かいわを ききましょう。",
    en: "Let's listen to a conversation about daily eating habits." },
  content: {
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "まいあさ なにを たべますか？", en: "What do you eat every morning?" } },
      { id: "e2", speaker: "けん", translations: { ja: "パンと たまごを たべます。", en: "I eat bread and eggs." } },
      { id: "e3", speaker: "あい", translations: { ja: "おちゃも のみますか？", en: "Do you also drink tea?" } },
      { id: "e4", speaker: "けん", translations: { ja: "はい、まいあさ のみます。", en: "Yes, I drink it every morning." } },
      { id: "e5", speaker: "あい", translations: { ja: "ひるごはんは どこで たべますか？", en: "Where do you eat lunch?" } },
      { id: "e6", speaker: "けん", translations: { ja: "かいしゃで たべます。", en: "I eat at the office." } },
      { id: "e7", speaker: "あい", translations: { ja: "じぶんで つくりますか？", en: "Do you make it yourself?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、あさ つくります。", en: "Yes, I make it in the morning." } },
      { id: "e9", speaker: "あい", translations: { ja: "ばんごはんは？", en: "What about dinner?" } },
      { id: "e10", speaker: "けん", translations: { ja: "レストランで たべることが おおいです。", en: "I often eat at a restaurant." } },
      { id: "e11", speaker: "あい", translations: { ja: "からい たべものが すきですか？", en: "Do you like spicy food?" } },
      { id: "e12", speaker: "けん", translations: { ja: "はい、とても すきです。あいさんは？", en: "Yes, I like it a lot. What about you, Ai?" } },
      { id: "e13", speaker: "あい", translations: { ja: "わたしは あまい ものが すきです。", en: "I like sweet things." } },
      { id: "e14", speaker: "けん", translations: { ja: "なるほど。でざーとが すきなんですね。", en: "I see. So you like dessert." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja5-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「ん」の おとの ちがいと、アクセントを れんしゅうしましょう。",
    en: "Let's practice how ん changes sound, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      n_pb: { ja: "「ん」＋ p/b/m → m の おと", en: "ん before p/b/m → sounds like \"m\"" },
      n_kg: { ja: "「ん」＋ k/g → ng の おと", en: "ん before k/g → sounds like \"ng\"" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // ん assimilation — a real, well-documented beginner point: ん is
      // not a single fixed sound, it shifts toward the place of
      // articulation of whatever consonant follows it.
      { id: "m1", category: "n_pb", translations: { ja: "さんぽ", en: "walk (ん before p)" } },
      { id: "m2", category: "n_pb", translations: { ja: "かんぱい", en: "cheers (ん before p)" } },
      { id: "m3", category: "n_pb", translations: { ja: "せんぱい", en: "senior (ん before p)" } },
      { id: "m4", category: "n_pb", translations: { ja: "えんぴつ", en: "pencil (ん before p)" } },
      { id: "ng1", category: "n_kg", translations: { ja: "おんがく", en: "music (ん before g)" } },
      { id: "ng2", category: "n_kg", translations: { ja: "にほんご", en: "Japanese language (ん before g)" } },
      { id: "ng3", category: "n_kg", translations: { ja: "まんが", en: "manga (ん before g)" } },
      { id: "ng4", category: "n_kg", translations: { ja: "げんき", en: "healthy, well (ん before k)" } },
      // Pitch accent — fresh, standard textbook pairs, none repeated from L2.
      { id: "p1", category: "pitch", translations: { ja: "かう", en: "to buy (LH) / to keep a pet (HL)" } },
      { id: "p2", category: "pitch", translations: { ja: "あさ", en: "morning (LH) / hemp (HL)" } },
      { id: "p3", category: "pitch", translations: { ja: "はる", en: "spring (LH) / to stick, paste (HL)" } },
      { id: "p4", category: "pitch", translations: { ja: "き", en: "tree (HL) / spirit, feeling (LH)" } },
    ],
  },
};

export const lessonJapanese5: LessonPlan = {
  id: "lesson-ja-5",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 5,
  title: { ja: "たべもの", en: "Food" },
  framingLanguage: "source", // beginner course — same rule as lessons 2 and 10
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarPresentTenseBlock,
    dialogueRestaurantBlock,
    dialogueEatingHabitsBlock,
    pronunciationBlock,
    // No song block — Lesson 5 is an "open slot" in a1-master-lesson-table-v02.md
  ],
};
