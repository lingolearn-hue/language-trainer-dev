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
  title: { ja: "たべもの", de: "Essen", en: "Food" },
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
  title: { ja: "ながれ", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから たべものの たんごを べんきょうします。そのあと げんざいけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn food vocabulary. After that we'll look at the present tense, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：たべもの", de: "Wortschatz: Essen", en: "Vocabulary: Food" } },
      { id: "a3", translations: { ja: "ぶんぽう：げんざいけい", de: "Grammatik: Gegenwartsform", en: "Grammar: Present Tense" } },
      { id: "a4", translations: { ja: "かいわ：レストランで", de: "Dialog A: Im Restaurant", en: "Dialogue A: At the Restaurant" } },
      { id: "a5", translations: { ja: "かいわ：まいにちの しょくじ", de: "Dialog B: Tägliche Essgewohnheiten", en: "Dialogue B: Daily Eating Habits" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja5-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", de: "Aufwärmen", en: "Warm-up" },
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
  title: { ja: "たんご：たべもの", de: "Wortschatz: Essen", en: "Vocabulary: Food" },
  spokenIntro: {
    ja: "たべものに かんけいする たんごを みてみましょう。",
    en: "Let's look at some food-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "ごはん", de: "Reis, Mahlzeit", en: "rice, meal" } },
      { id: "v02", category: "noun", translations: { ja: "パン", de: "Brot", en: "bread" } },
      { id: "v03", category: "noun", translations: { ja: "みず", de: "Wasser", en: "water" } },
      { id: "v04", category: "noun", translations: { ja: "おちゃ", de: "Tee", en: "tea" } },
      { id: "v05", category: "noun", translations: { ja: "にく", de: "Fleisch", en: "meat" } },
      { id: "v06", category: "noun", translations: { ja: "さかな", de: "Fisch", en: "fish" } },
      { id: "v07", category: "noun", translations: { ja: "やさい", de: "Gemüse", en: "vegetables" } },
      { id: "v08", category: "noun", translations: { ja: "くだもの", de: "Obst", en: "fruit" } },
      { id: "v09", category: "noun", translations: { ja: "たまご", de: "Ei", en: "egg" } },
      { id: "v10", category: "noun", translations: { ja: "スープ", de: "Suppe", en: "soup" } },
      { id: "v11", category: "noun", translations: { ja: "メニュー", de: "Speisekarte", en: "menu" } },
      { id: "v12", category: "noun", translations: { ja: "レストラン", de: "Restaurant", en: "restaurant" } },
      { id: "v13", category: "noun", translations: { ja: "あさごはん", de: "Frühstück", en: "breakfast" } },
      { id: "v14", category: "noun", translations: { ja: "ひるごはん", de: "Mittagessen", en: "lunch" } },
      { id: "v15", category: "noun", translations: { ja: "ばんごはん", de: "Abendessen", en: "dinner" } },
      { id: "v16", category: "noun", translations: { ja: "デザート", de: "Nachtisch", en: "dessert" } },

      { id: "v17", category: "verb", translations: { ja: "たべる", de: "essen", en: "to eat" } },
      { id: "v18", category: "verb", translations: { ja: "のむ", de: "trinken", en: "to drink" } },
      { id: "v19", category: "verb", translations: { ja: "つくる", de: "machen, zubereiten", en: "to make" } },
      { id: "v20", category: "verb", translations: { ja: "ちゅうもんする", de: "bestellen", en: "to order" } },
      { id: "v21", category: "verb", translations: { ja: "はらう", de: "bezahlen", en: "to pay" } },
      { id: "v22", category: "verb", translations: { ja: "たりる", de: "reichen, genug sein", en: "to be enough" } },
      { id: "v23", category: "verb", translations: { ja: "すく", de: "hungrig werden (おなかが すく)", en: "to become hungry (おなかが すく)" } },
      { id: "v24", category: "verb", translations: { ja: "のどが かわく", de: "durstig werden", en: "to become thirsty" } },

      { id: "v25", category: "adjective", translations: { ja: "おいしい", de: "lecker", en: "delicious" } },
      { id: "v26", category: "adjective", translations: { ja: "まずい", de: "schlecht schmeckend", en: "bad-tasting" } },
      { id: "v27", category: "adjective", translations: { ja: "あまい", de: "süß", en: "sweet" } },
      { id: "v28", category: "adjective", translations: { ja: "からい", de: "scharf", en: "spicy" } },
      { id: "v29", category: "adjective", translations: { ja: "しょっぱい", de: "salzig", en: "salty" } },
      { id: "v30", category: "adjective", translations: { ja: "あつい", de: "heiß (Temperatur)", en: "hot (temperature)" } },
    ],
  },
};

export const grammarPresentTenseBlock: Block = {
  id: "ja5-grammar-present",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "げんざいけい", de: "Gegenwartsform", en: "Present Tense" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、げんざいけいの つかいかたです。",
    en: "Today's grammar is how to use the present tense.",
  },
  content: {
    explanation: {
      ja: "どうしの ます形は、ていねいな げんざい・みらいけいです。にほんごには ふきそくな どうしが ふたつだけ あります：する と くる。「〜たい」は「〜したい」で「〜が したい」という きもちを あらわします。",
      de: "Die ます-Form eines Verbs ist die höfliche Gegenwarts-/Zukunftsform. Im Japanischen gibt es nur zwei wirklich unregelmäßige Verben: する (tun) und くる (kommen). Das Anhängen von たい an einen Verbstamm (wie in 〜たい) drückt „möchte\" aus — das kommt einem Modalverb im Japanischen auf diesem Niveau am nächsten.",
      en: "The polite present/future tense uses the ます-form of a verb. Japanese has only two truly irregular verbs: する (to do) and くる (to come). Adding たい to a verb stem (as in 〜たい) expresses \"want to\" — the closest thing Japanese has to a modal at this level.",
    },
    chunks: [
      { id: "g1", translations: { ja: "まいにち ごはんを たべます。", de: "Ich esse jeden Tag Reis. (reguläre ます-Form)", en: "I eat rice every day. (regular ます-form)" } },
      { id: "g2", translations: { ja: "みずを のみます。", de: "Ich trinke Wasser. (reguläre ます-Form)", en: "I drink water. (regular ます-form)" } },
      { id: "g3", translations: { ja: "べんきょうを します。", de: "Ich lerne. (unregelmäßig: する)", en: "I study. (irregular: する)" } },
      { id: "g4", translations: { ja: "ともだちが うちへ きます。", de: "Ein Freund kommt zu mir nach Hause. (unregelmäßig: くる)", en: "A friend comes to my house. (irregular: くる)" } },
      { id: "g5", translations: { ja: "すしが たべたいです。", de: "Ich möchte Sushi essen. (たい — „möchte\")", en: "I want to eat sushi. (たい — \"want to\")" } },
      { id: "g6", translations: { ja: "みずが のみたいです。", de: "Ich möchte Wasser trinken. (たい — „möchte\")", en: "I want to drink water. (たい — \"want to\")" } },
    ],
  },
};

export const dialogueRestaurantBlock: Block = {
  id: "ja5-dialogue-restaurant",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：レストランで", de: "Dialog A: Im Restaurant", en: "Dialogue A: At the Restaurant" },
  spokenIntro: {
    ja: "レストランで ちゅうもんする かいわを ききましょう。",
    en: "Let's listen to someone ordering food at a restaurant.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "てんいん", translations: { ja: "いらっしゃいませ。なんめいさまですか？", de: "Willkommen. Wie viele Personen?", en: "Welcome. How many people?" } },
      { id: "d2", speaker: "きゃく", translations: { ja: "ふたりです。", de: "Zwei Personen.", en: "Two people." } },
      { id: "d3", speaker: "てんいん", translations: { ja: "こちらへ どうぞ。メニューです。", de: "Hier entlang, bitte. Hier ist die Speisekarte.", en: "This way, please. Here's the menu." } },
      { id: "d4", speaker: "きゃく", translations: { ja: "ありがとうございます。", de: "Danke.", en: "Thank you." } },
      { id: "d5", speaker: "てんいん", translations: { ja: "ごちゅうもんは おきまりですか？", de: "Haben Sie schon gewählt?", en: "Have you decided your order?" } },
      { id: "d6", speaker: "きゃく", translations: { ja: "すしと スープを おねがいします。", de: "Sushi und Suppe, bitte.", en: "Sushi and soup, please." } },
      { id: "d7", speaker: "てんいん", translations: { ja: "おのみものは？", de: "Und etwas zu trinken?", en: "What about a drink?" } },
      { id: "d8", speaker: "きゃく", translations: { ja: "おちゃを ください。", de: "Tee, bitte.", en: "Tea, please." } },
      { id: "d9", speaker: "てんいん", translations: { ja: "かしこまりました。すこし おまちください。", de: "Verstanden. Einen Moment bitte.", en: "Understood. Please wait a moment." } },
      { id: "d10", speaker: "きゃく", translations: { ja: "すみません、これは からいですか？", de: "Entschuldigung, ist das scharf?", en: "Excuse me, is this spicy?" } },
      { id: "d11", speaker: "てんいん", translations: { ja: "いいえ、あまり からくないです。", de: "Nein, es ist nicht sehr scharf.", en: "No, it's not very spicy." } },
      { id: "d12", speaker: "きゃく", translations: { ja: "よかった。それを ちゅうもんします。", de: "Gut. Das bestelle ich.", en: "Great. I'll order that." } },
      { id: "d13", speaker: "てんいん", translations: { ja: "かしこまりました。", de: "Verstanden.", en: "Understood." } },
      { id: "d14", speaker: "きゃく", translations: { ja: "とても おいしかったです。ごちそうさまでした。", de: "Es war sehr lecker. Danke für das Essen.", en: "It was very delicious. Thank you for the meal." } },
    ],
  },
};

export const dialogueEatingHabitsBlock: Block = {
  id: "ja5-dialogue-eating-habits",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：まいにちの しょくじ", de: "Dialog B: Tägliche Essgewohnheiten", en: "Dialogue B: Daily Eating Habits" },
  spokenIntro: {
    ja: "まいにちの しょくじについて はなす かいわを ききましょう。",
    en: "Let's listen to a conversation about daily eating habits." },
  content: {
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "まいあさ なにを たべますか？", de: "Was isst du jeden Morgen?", en: "What do you eat every morning?" } },
      { id: "e2", speaker: "けん", translations: { ja: "パンと たまごを たべます。", de: "Ich esse Brot und Eier.", en: "I eat bread and eggs." } },
      { id: "e3", speaker: "あい", translations: { ja: "おちゃも のみますか？", de: "Trinkst du auch Tee?", en: "Do you also drink tea?" } },
      { id: "e4", speaker: "けん", translations: { ja: "はい、まいあさ のみます。", de: "Ja, ich trinke ihn jeden Morgen.", en: "Yes, I drink it every morning." } },
      { id: "e5", speaker: "あい", translations: { ja: "ひるごはんは どこで たべますか？", de: "Wo isst du zu Mittag?", en: "Where do you eat lunch?" } },
      { id: "e6", speaker: "けん", translations: { ja: "かいしゃで たべます。", de: "Ich esse im Büro.", en: "I eat at the office." } },
      { id: "e7", speaker: "あい", translations: { ja: "じぶんで つくりますか？", de: "Machst du es selbst?", en: "Do you make it yourself?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、あさ つくります。", de: "Ja, ich mache es morgens.", en: "Yes, I make it in the morning." } },
      { id: "e9", speaker: "あい", translations: { ja: "ばんごはんは？", de: "Und zum Abendessen?", en: "What about dinner?" } },
      { id: "e10", speaker: "けん", translations: { ja: "レストランで たべることが おおいです。", de: "Ich esse oft in einem Restaurant.", en: "I often eat at a restaurant." } },
      { id: "e11", speaker: "あい", translations: { ja: "からい たべものが すきですか？", de: "Magst du scharfes Essen?", en: "Do you like spicy food?" } },
      { id: "e12", speaker: "けん", translations: { ja: "はい、とても すきです。あいさんは？", de: "Ja, sehr gerne. Und du, Ai?", en: "Yes, I like it a lot. What about you, Ai?" } },
      { id: "e13", speaker: "あい", translations: { ja: "わたしは あまい ものが すきです。", de: "Ich mag süße Sachen.", en: "I like sweet things." } },
      { id: "e14", speaker: "けん", translations: { ja: "なるほど。でざーとが すきなんですね。", de: "Verstehe. Du magst also Nachtisch.", en: "I see. So you like dessert." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja5-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「ん」の おとの ちがいと、アクセントを れんしゅうしましょう。",
    en: "Let's practice how ん changes sound, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      n_pb: { ja: "「ん」＋ p/b/m → m の おと", de: "ん vor p/b/m → klingt wie „m\"", en: "ん before p/b/m → sounds like \"m\"" },
      n_kg: { ja: "「ん」＋ k/g → ng の おと", de: "ん vor k/g → klingt wie „ng\"", en: "ん before k/g → sounds like \"ng\"" },
      pitch: { ja: "アクセント（ふくしゅう）", de: "Tonhöhenakzent (vertieft, neue Paare)", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // ん assimilation — a real, well-documented beginner point: ん is
      // not a single fixed sound, it shifts toward the place of
      // articulation of whatever consonant follows it.
      { id: "m1", category: "n_pb", translations: { ja: "さんぽ", de: "Spaziergang (ん vor p)", en: "walk (ん before p)" } },
      { id: "m2", category: "n_pb", translations: { ja: "かんぱい", de: "Prost (ん vor p)", en: "cheers (ん before p)" } },
      { id: "m3", category: "n_pb", translations: { ja: "せんぱい", de: "Senior, älterer Kollege (ん vor p)", en: "senior (ん before p)" } },
      { id: "m4", category: "n_pb", translations: { ja: "えんぴつ", de: "Bleistift (ん vor p)", en: "pencil (ん before p)" } },
      { id: "ng1", category: "n_kg", translations: { ja: "おんがく", de: "Musik (ん vor g)", en: "music (ん before g)" } },
      { id: "ng2", category: "n_kg", translations: { ja: "にほんご", de: "japanische Sprache (ん vor g)", en: "Japanese language (ん before g)" } },
      { id: "ng3", category: "n_kg", translations: { ja: "まんが", de: "Manga (ん vor g)", en: "manga (ん before g)" } },
      { id: "ng4", category: "n_kg", translations: { ja: "げんき", de: "gesund, wohlauf (ん vor k)", en: "healthy, well (ん before k)" } },
      // Pitch accent — fresh, standard textbook pairs, none repeated from L2.
      { id: "p1", category: "pitch", translations: { ja: "かう", de: "kaufen (LH) / (ein Haustier) halten (HL)", en: "to buy (LH) / to keep a pet (HL)" } },
      { id: "p2", category: "pitch", translations: { ja: "あさ", de: "Morgen (LH) / Hanf (HL)", en: "morning (LH) / hemp (HL)" } },
      { id: "p3", category: "pitch", translations: { ja: "はる", de: "Frühling (LH) / kleben (HL)", en: "spring (LH) / to stick, paste (HL)" } },
      { id: "p4", category: "pitch", translations: { ja: "き", de: "Baum (HL) / Geist, Gefühl (LH)", en: "tree (HL) / spirit, feeling (LH)" } },
    ],
  },
};

export const lessonJapanese5: LessonPlan = {
  id: "lesson-ja-5",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 5,
  title: { ja: "たべもの", de: "Essen", en: "Food" },
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
