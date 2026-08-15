import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 1 — per a1-master-lesson-table-v02.md row 1:
// Vocab: Family | Grammar: To be / to have, basic | Dialogue A: introducing
// your family at a gathering | Dialogue B: describing who lives in your
// house | Song: "Frere Jacques" in the German track — no Japanese-specific
// song researched yet (known open item), so no song block for now.
//
// Same 8-block shape as lessonJapanese5/8/10.ts.
//
// Grammar: です (copula, "to be"), います/あります (the animate/inanimate
// "to have/exist" split — a genuine, unavoidable A1 distinction that
// doesn't exist in English "have" at all), plus family-headcount phrases
// as a natural home for both.
//
// Pronunciation: two concepts — だくてん/はんだくてん (voiced/semi-voiced
// consonant marks: か→が, は→ば→ぱ etc.), a genuine Japanese parallel to
// the master table's German "voiced vs unvoiced" concept for this row,
// and pitch accent reinforced with a fresh pair set (none repeated from
// L2/L5).
// Target text is hiragana-only, matching the established rule (no
// furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja1-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "かぞく", en: "Family" },
  spokenIntro: {
    ja: "ようこそ！きょうは かぞくについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about family.",
  },
  content: {
    text: { ja: "だい1か — かぞく", en: "Lesson 1 — Family" },
  },
};

export const agendaBlock: Block = {
  id: "ja1-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから かぞくの たんごを べんきょうします。そのあと「です」と「います」を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn family vocabulary. After that we'll look at です and います, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：かぞく", en: "Vocabulary: Family" } },
      { id: "a3", translations: { ja: "ぶんぽう：「です」と「います」", en: "Grammar: To Be / To Have" } },
      { id: "a4", translations: { ja: "かいわ：かぞくを しょうかいする", en: "Dialogue A: Introducing Family" } },
      { id: "a5", translations: { ja: "かいわ：いえに すんでいる ひと", en: "Dialogue B: Who Lives at Home" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja1-intro",
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
      ja: "かぞくは なんにんですか？きょうだいが いますか？",
      en: "How many people are in your family? Do you have siblings?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja1-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：かぞく", en: "Vocabulary: Family" },
  spokenIntro: {
    ja: "かぞくに かんけいする たんごを みてみましょう。",
    en: "Let's look at some family-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "かぞく", en: "family" } },
      { id: "v02", category: "noun", translations: { ja: "おとうさん", en: "father (someone else's / addressing your own)" } },
      { id: "v03", category: "noun", translations: { ja: "おかあさん", en: "mother (someone else's / addressing your own)" } },
      { id: "v04", category: "noun", translations: { ja: "おにいさん", en: "older brother (someone else's / addressing your own)" } },
      { id: "v05", category: "noun", translations: { ja: "おねえさん", en: "older sister (someone else's / addressing your own)" } },
      { id: "v06", category: "noun", translations: { ja: "おとうと", en: "younger brother (own)" } },
      { id: "v07", category: "noun", translations: { ja: "いもうと", en: "younger sister (own)" } },
      { id: "v08", category: "noun", translations: { ja: "そふ", en: "grandfather (own)" } },
      { id: "v09", category: "noun", translations: { ja: "そぼ", en: "grandmother (own)" } },
      { id: "v10", category: "noun", translations: { ja: "むすこ", en: "son" } },
      { id: "v11", category: "noun", translations: { ja: "むすめ", en: "daughter" } },
      { id: "v12", category: "noun", translations: { ja: "おっと", en: "husband (own)" } },
      { id: "v13", category: "noun", translations: { ja: "つま", en: "wife (own)" } },
      { id: "v14", category: "noun", translations: { ja: "きょうだい", en: "siblings" } },
      { id: "v15", category: "noun", translations: { ja: "りょうしん", en: "parents" } },
      { id: "v16", category: "noun", translations: { ja: "ペット", en: "pet" } },

      { id: "v17", category: "verb", translations: { ja: "いる", en: "to have / to exist (animate)" } },
      { id: "v18", category: "verb", translations: { ja: "ある", en: "to have / to exist (inanimate)" } },
      { id: "v19", category: "verb", translations: { ja: "すむ", en: "to live (reside)" } },
      { id: "v20", category: "verb", translations: { ja: "しょうかいする", en: "to introduce" } },
      { id: "v21", category: "verb", translations: { ja: "にる", en: "to resemble" } },
      { id: "v22", category: "verb", translations: { ja: "そだてる", en: "to raise (a child)" } },
      { id: "v23", category: "verb", translations: { ja: "あう", en: "to meet" } },
      { id: "v24", category: "verb", translations: { ja: "はなす", en: "to talk" } },

      { id: "v25", category: "adjective", translations: { ja: "おおきい", en: "big (family, house)" } },
      { id: "v26", category: "adjective", translations: { ja: "ちいさい", en: "small" } },
      { id: "v27", category: "adjective", translations: { ja: "やさしい", en: "kind" } },
      { id: "v28", category: "adjective", translations: { ja: "きびしい", en: "strict" } },
      { id: "v29", category: "adjective", translations: { ja: "にぎやか", en: "lively" } },
      { id: "v30", category: "adjective", translations: { ja: "しずか", en: "quiet" } },
    ],
  },
};

export const grammarToBeToHaveBlock: Block = {
  id: "ja1-grammar-tobe",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "「です」と「います」", en: "To Be / To Have" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、「です」と「います」の つかいかたです。",
    en: "Today's grammar is how to use です and います/あります.",
  },
  content: {
    explanation: {
      ja: "「です」は「〜だ」の ていねいな かたちで、なにかを せつめいする ときに つかいます。「いる」は ひとや どうぶつが いる とき、「ある」は ものが ある ときに つかいます。えいごの「have」は にほんごでは かならず どちらかに わかれます。",
      en: "です is the polite form of \"to be,\" used to describe or identify something. います is used for people and animals (\"to have/exist,\" animate), while あります is used for objects (\"to have/exist,\" inanimate). English \"have\" always splits into one of these two in Japanese — there's no single equivalent.",
    },
    chunks: [
      { id: "g1", translations: { ja: "これは かぞくの しゃしんです。", en: "This is a photo of my family. (です — to be)" } },
      { id: "g2", translations: { ja: "かぞくは よにんです。", en: "My family has four people. (です — describing)" } },
      { id: "g3", translations: { ja: "いもうとが います。", en: "I have a younger sister. (います — animate)" } },
      { id: "g4", translations: { ja: "ねこが います。", en: "I have a cat. (います — animate)" } },
      { id: "g5", translations: { ja: "くるまが あります。", en: "I have a car. (あります — inanimate)" } },
      { id: "g6", translations: { ja: "おおきい いえが あります。", en: "I have a big house. (あります — inanimate)" } },
    ],
  },
};

export const dialogueIntroducingFamilyBlock: Block = {
  id: "ja1-dialogue-introducing",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：かぞくを しょうかいする", en: "Dialogue A: Introducing Family" },
  spokenIntro: {
    ja: "パーティーで かぞくを しょうかいする かいわを ききましょう。",
    en: "Let's listen to someone introducing their family at a party.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "これは わたしの かぞくの しゃしんです。", en: "This is a photo of my family." } },
      { id: "d2", speaker: "けん", translations: { ja: "いいですね！なんにん かぞくですか？", en: "Nice! How many people are in your family?" } },
      { id: "d3", speaker: "あい", translations: { ja: "よにんです。ちちと ははと おとうとです。", en: "Four people. My father, my mother, and my younger brother." } },
      { id: "d4", speaker: "けん", translations: { ja: "おとうとさんは いま なんさいですか？", en: "How old is your younger brother now?" } },
      { id: "d5", speaker: "あい", translations: { ja: "じゅうごさいです。がくせいです。", en: "He's fifteen. He's a student." } },
      { id: "d6", speaker: "けん", translations: { ja: "おとうさんは なにを していますか？", en: "What does your father do?" } },
      { id: "d7", speaker: "あい", translations: { ja: "いしゃです。びょういんで はたらいています。", en: "He's a doctor. He works at a hospital." } },
      { id: "d8", speaker: "けん", translations: { ja: "すごいですね。おかあさんは？", en: "That's impressive. What about your mother?" } },
      { id: "d9", speaker: "あい", translations: { ja: "がっこうの せんせいです。とても やさしいです。", en: "She's a school teacher. She's very kind." } },
      { id: "d10", speaker: "けん", translations: { ja: "ペットは いますか？", en: "Do you have a pet?" } },
      { id: "d11", speaker: "あい", translations: { ja: "はい、いぬが いっぴき います。", en: "Yes, I have one dog." } },
      { id: "d12", speaker: "けん", translations: { ja: "かわいいですね。なまえは？", en: "That's cute. What's its name?" } },
      { id: "d13", speaker: "あい", translations: { ja: "ももです。とても げんきです。", en: "Momo. She's very energetic." } },
      { id: "d14", speaker: "けん", translations: { ja: "たのしそうな かぞくですね！", en: "Sounds like a fun family!" } },
    ],
  },
};

export const dialogueWhoLivesAtHomeBlock: Block = {
  id: "ja1-dialogue-who-lives",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いえに すんでいる ひと", en: "Dialogue B: Who Lives at Home" },
  spokenIntro: {
    ja: "いえに だれが すんでいるかを はなす かいわを ききましょう。",
    en: "Let's listen to a conversation about who lives in someone's house.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "けんさんの いえには だれが すんでいますか？", en: "Who lives in your house, Ken?" } },
      { id: "e2", speaker: "けん", translations: { ja: "りょうしんと そふが すんでいます。", en: "My parents and my grandfather live there." } },
      { id: "e3", speaker: "みか", translations: { ja: "そぼは いますか？", en: "Is your grandmother there too?" } },
      { id: "e4", speaker: "けん", translations: { ja: "いいえ、そぼは いません。もう いません。", en: "No, my grandmother isn't. She's passed away." } },
      { id: "e5", speaker: "みか", translations: { ja: "そうですか。そふは げんきですか？", en: "I see. Is your grandfather doing well?" } },
      { id: "e6", speaker: "けん", translations: { ja: "はい、とても げんきです。まいにち さんぽします。", en: "Yes, very well. He takes a walk every day." } },
      { id: "e7", speaker: "みか", translations: { ja: "みかさんの いえは どうですか？", en: "What about your house, Mika?" } },
      { id: "e8", speaker: "みか", translations: { ja: "わたしは おっとと むすめと すんでいます。", en: "I live with my husband and daughter." } },
      { id: "e9", speaker: "けん", translations: { ja: "むすめさんは なんさいですか？", en: "How old is your daughter?" } },
      { id: "e10", speaker: "みか", translations: { ja: "さんさいです。とても にぎやかです。", en: "Three years old. She's very lively." } },
      { id: "e11", speaker: "けん", translations: { ja: "ペットも いますか？", en: "Do you have a pet too?" } },
      { id: "e12", speaker: "みか", translations: { ja: "はい、ねこが にひき います。", en: "Yes, I have two cats." } },
      { id: "e13", speaker: "けん", translations: { ja: "しずかな いえですか？", en: "Is your house quiet?" } },
      { id: "e14", speaker: "みか", translations: { ja: "いいえ、むすめが いるので にぎやかです！", en: "No, it's lively because of my daughter!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja1-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "だくてんと はんだくてん、それから アクセントを れんしゅうしましょう。",
    en: "Let's practice voiced/semi-voiced consonant marks, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      dakuten: { ja: "だくてん・はんだくてん", en: "Voiced / semi-voiced marks (゛゜)" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // だくてん — Japanese's own parallel to "voiced vs unvoiced," marked
      // visually with ゛(voiced) or ゜(semi-voiced), a real literacy point
      // as much as a pronunciation one.
      { id: "dk1", category: "dakuten", translations: { ja: "か → が", en: "ka → ga (unvoiced → voiced)" } },
      { id: "dk2", category: "dakuten", translations: { ja: "た → だ", en: "ta → da (unvoiced → voiced)" } },
      { id: "dk3", category: "dakuten", translations: { ja: "さ → ざ", en: "sa → za (unvoiced → voiced)" } },
      { id: "dk4", category: "dakuten", translations: { ja: "は → ば → ぱ", en: "ha → ba → pa (unvoiced → voiced → semi-voiced)" } },
      { id: "dk5", category: "dakuten", translations: { ja: "かぞく → がぞう", en: "family / image (minimal pair, か vs が)" } },
      { id: "dk6", category: "dakuten", translations: { ja: "たいがく → だいがく", en: "(not a word) / university (た vs だ)" } },
      // Pitch accent — fresh pairs, none repeated from L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "いま", en: "now (LH) / living room (HL)" } },
      { id: "p2", category: "pitch", translations: { ja: "しろ", en: "white (LH) / castle (HL)" } },
      { id: "p3", category: "pitch", translations: { ja: "は", en: "tooth (HL) / leaf (LH)" } },
      { id: "p4", category: "pitch", translations: { ja: "あき", en: "autumn (LH) / vacant, empty (HL)" } },
    ],
  },
};

export const lessonJapanese1: LessonPlan = {
  id: "lesson-ja-1",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 1,
  title: { ja: "かぞく", en: "Family" },
  framingLanguage: "source", // beginner course — same rule as lessons 2, 5, 8, 10
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarToBeToHaveBlock,
    dialogueIntroducingFamilyBlock,
    dialogueWhoLivesAtHomeBlock,
    pronunciationBlock,
    // No song block — German track has "Frere Jacques" here, but no
    // Japanese-specific song has been researched yet (known open item).
  ],
};
