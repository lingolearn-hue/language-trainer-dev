import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 2 — per a1-master-lesson-table-v02.md row 2:
// Vocab: Body | Grammar: Personal pronouns | Dialogue A: at the doctor,
// pointing out symptoms | Dialogue B: describing yourself and a friend
// physically | Song: "Head Shoulders Knees and Toes" in the German
// track — genuinely translatable here (unlike most other rows) since
// it's literally a body-parts song, matching this lesson's own topic.
//
// REPLACES the original lessonJapanese2.ts content: that version predated
// the master table and used generic, untagged vocabulary/grammar with no
// relationship to what row 2 actually specifies — it was never realigned
// after the table was adopted, while every other Japanese lesson (1, 3,
// 4, 5, 8, 10) does follow the table. Rebuilt here to match, and to keep
// exactly one "Lesson 2" rather than one that's out of step with the
// rest of the course. The pitch-accent / long-vs-short-vowel
// pronunciation content is carried over unchanged from the old version —
// it's generic sound practice, not tied to any particular vocab topic,
// so there was no reason to replace it.
//
// Grammar: personal pronouns (わたし, あなた, かれ, かのじょ, わたしたち,
// かれら) plus は-marking — the natural first-lesson-after-copula grammar
// point, and directly useful for Dialogue B's "describing yourself and a
// friend" contrast (かれは.../かのじょは...).
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja2-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "からだ", en: "Body" },
  spokenIntro: {
    ja: "ようこそ！きょうは からだの ぶぶんについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about parts of the body.",
  },
  content: {
    text: { ja: "だい2か — からだ", en: "Lesson 2 — Body" },
  },
};

export const agendaBlock: Block = {
  id: "ja2-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから からだの たんごを べんきょうします。そのあと にんしょうだいめいしを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    en: "Today we'll start with a short introduction, then learn body vocabulary. After that we'll look at personal pronouns, practice two dialogues, and finish with pronunciation practice and a song.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：からだ", en: "Vocabulary: Body" } },
      { id: "a3", translations: { ja: "ぶんぽう：にんしょうだいめいし", en: "Grammar: Personal Pronouns" } },
      { id: "a4", translations: { ja: "かいわ：いしゃに しょうじょうを つたえる", en: "Dialogue A: At the Doctor" } },
      { id: "a5", translations: { ja: "かいわ：じぶんと ともだちの とくちょう", en: "Dialogue B: Describing Yourself and a Friend" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
      { id: "a7", translations: { ja: "うた", en: "Song" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja2-intro",
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
      ja: "きょう どこか いたい ところが ありますか？",
      en: "Does anywhere hurt today?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja2-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：からだ", en: "Vocabulary: Body" },
  spokenIntro: {
    ja: "からだの ぶぶんに かんけいする たんごを みてみましょう。",
    en: "Let's look at some words for parts of the body.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "からだ", en: "body" } },
      { id: "v02", category: "noun", translations: { ja: "あたま", en: "head" } },
      { id: "v03", category: "noun", translations: { ja: "かお", en: "face" } },
      { id: "v04", category: "noun", translations: { ja: "め", en: "eyes" } },
      { id: "v05", category: "noun", translations: { ja: "みみ", en: "ears" } },
      { id: "v06", category: "noun", translations: { ja: "はな", en: "nose" } },
      { id: "v07", category: "noun", translations: { ja: "くち", en: "mouth" } },
      { id: "v08", category: "noun", translations: { ja: "は", en: "teeth" } },
      { id: "v09", category: "noun", translations: { ja: "くび", en: "neck" } },
      { id: "v10", category: "noun", translations: { ja: "かた", en: "shoulders" } },
      { id: "v11", category: "noun", translations: { ja: "て", en: "hands, arms" } },
      { id: "v12", category: "noun", translations: { ja: "ゆび", en: "fingers" } },
      { id: "v13", category: "noun", translations: { ja: "むね", en: "chest" } },
      { id: "v14", category: "noun", translations: { ja: "おなか", en: "stomach" } },
      { id: "v15", category: "noun", translations: { ja: "せなか", en: "back" } },
      { id: "v16", category: "noun", translations: { ja: "あし", en: "legs, feet" } },
      { id: "v17", category: "noun", translations: { ja: "ひざ", en: "knees" } },

      { id: "v18", category: "verb", translations: { ja: "うごかす", en: "to move (something)" } },
      { id: "v19", category: "verb", translations: { ja: "いたむ", en: "to hurt, ache" } },
      { id: "v20", category: "verb", translations: { ja: "のばす", en: "to stretch" } },
      { id: "v21", category: "verb", translations: { ja: "まげる", en: "to bend" } },
      { id: "v22", category: "verb", translations: { ja: "さわる", en: "to touch" } },
      { id: "v23", category: "verb", translations: { ja: "あらう", en: "to wash" } },
      { id: "v24", category: "verb", translations: { ja: "つかう", en: "to use" } },

      { id: "v25", category: "adjective", translations: { ja: "つよい", en: "strong (い-adj)" } },
      { id: "v26", category: "adjective", translations: { ja: "よわい", en: "weak (い-adj)" } },
      { id: "v27", category: "adjective", translations: { ja: "ながい", en: "long (い-adj)" } },
      { id: "v28", category: "adjective", translations: { ja: "みじかい", en: "short (い-adj)" } },
      { id: "v29", category: "adjective", translations: { ja: "おおきい", en: "big (い-adj)" } },
      { id: "v30", category: "adjective", translations: { ja: "ちいさい", en: "small (い-adj)" } },
    ],
  },
};

export const grammarPronounsBlock: Block = {
  id: "ja2-grammar-pronouns",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "にんしょうだいめいし", en: "Personal Pronouns" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、にんしょうだいめいしと「は」の つかいかたです。",
    en: "Today's grammar is personal pronouns and how to use は with them.",
  },
  content: {
    explanation: {
      ja: "にほんごの にんしょうだいめいしは：わたし（わたくし）、あなた、かれ、かのじょ、わたしたち、かれら です。「あなた」は じっさいには あまり つかわず、なまえを よぶ ほうが しぜんです。だいめいしの あとに「は」を つけて、しゅだいを しめします。",
      en: "Japanese personal pronouns: わたし (I), あなた (you), かれ (he), かのじょ (she), わたしたち (we), かれら (they). あなた is used less than English \"you\" in practice — using someone's name directly is usually more natural. は after a pronoun marks it as the topic of the sentence.",
    },
    chunks: [
      { id: "g1", translations: { ja: "わたしは がくせいです。", en: "I am a student. (わたし + は)" } },
      { id: "g2", translations: { ja: "かれは せが たかいです。", en: "He is tall. (かれ + は)" } },
      { id: "g3", translations: { ja: "かのじょは かみが ながいです。", en: "She has long hair. (かのじょ + は)" } },
      { id: "g4", translations: { ja: "わたしたちは ともだちです。", en: "We are friends. (わたしたち + は)" } },
      { id: "g5", translations: { ja: "かれらは きょうだいです。", en: "They are siblings. (かれら + は)" } },
      { id: "g6", translations: { ja: "たなかさんは いしゃです。", en: "Mr. Tanaka is a doctor. (name instead of あなた, more natural)" } },
    ],
  },
};

export const dialogueDoctorSymptomsBlock: Block = {
  id: "ja2-dialogue-doctor",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いしゃに しょうじょうを つたえる", en: "Dialogue A: At the Doctor" },
  spokenIntro: {
    ja: "いしゃに どこが いたいかを つたえる かいわを ききましょう。",
    en: "Let's listen to someone telling a doctor where it hurts.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "いしゃ", translations: { ja: "どうしましたか？", en: "What's wrong?" } },
      { id: "d2", speaker: "かんじゃ", translations: { ja: "あたまが いたいです。", en: "My head hurts." } },
      { id: "d3", speaker: "いしゃ", translations: { ja: "ほかに いたい ところは ありますか？", en: "Does anywhere else hurt?" } },
      { id: "d4", speaker: "かんじゃ", translations: { ja: "はい、のども いたいです。", en: "Yes, my throat hurts too." } },
      { id: "d5", speaker: "いしゃ", translations: { ja: "おなかは どうですか？", en: "What about your stomach?" } },
      { id: "d6", speaker: "かんじゃ", translations: { ja: "おなかは だいじょうぶです。", en: "My stomach is fine." } },
      { id: "d7", speaker: "いしゃ", translations: { ja: "せなかは？", en: "What about your back?" } },
      { id: "d8", speaker: "かんじゃ", translations: { ja: "すこし いたいです。", en: "It hurts a little." } },
      { id: "d9", speaker: "いしゃ", translations: { ja: "てを うごかせますか？", en: "Can you move your hand?" } },
      { id: "d10", speaker: "かんじゃ", translations: { ja: "はい、うごかせます。", en: "Yes, I can move it." } },
      { id: "d11", speaker: "いしゃ", translations: { ja: "ゆびは？", en: "What about your fingers?" } },
      { id: "d12", speaker: "かんじゃ", translations: { ja: "ゆびも うごかせます。", en: "I can move my fingers too." } },
      { id: "d13", speaker: "いしゃ", translations: { ja: "わかりました。くすりを だします。", en: "Understood. I'll prescribe some medicine." } },
      { id: "d14", speaker: "かんじゃ", translations: { ja: "ありがとうございます。", en: "Thank you." } },
    ],
  },
};

export const dialogueDescribingBlock: Block = {
  id: "ja2-dialogue-describing",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：じぶんと ともだちの とくちょう", en: "Dialogue B: Describing Yourself and a Friend" },
  spokenIntro: {
    ja: "じぶんと ともだちの みための とくちょうを はなす かいわを ききましょう。",
    en: "Let's listen to a conversation describing yourself and a friend physically.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "わたしは せが ひくいです。", en: "I am short." } },
      { id: "e2", speaker: "けん", translations: { ja: "わたしは せが たかいです。", en: "I am tall." } },
      { id: "e3", speaker: "あい", translations: { ja: "かのじょは どんな ひとですか？", en: "What is she like?" } },
      { id: "e4", speaker: "けん", translations: { ja: "かのじょは かみが みじかいです。", en: "She has short hair." } },
      { id: "e5", speaker: "あい", translations: { ja: "めは おおきいですか？", en: "Are her eyes big?" } },
      { id: "e6", speaker: "けん", translations: { ja: "はい、めが とても おおきいです。", en: "Yes, her eyes are very big." } },
      { id: "e7", speaker: "けん", translations: { ja: "かれは どんな ひとですか？", en: "What is he like?" } },
      { id: "e8", speaker: "あい", translations: { ja: "かれは てが おおきいです。", en: "He has big hands." } },
      { id: "e9", speaker: "けん", translations: { ja: "つよそうですね。", en: "He looks strong." } },
      { id: "e10", speaker: "あい", translations: { ja: "はい、とても つよいです。", en: "Yes, he's very strong." } },
      { id: "e11", speaker: "けん", translations: { ja: "わたしたちは にていますか？", en: "Do we look alike?" } },
      { id: "e12", speaker: "あい", translations: { ja: "いいえ、ぜんぜん にていません。", en: "No, not at all." } },
      { id: "e13", speaker: "けん", translations: { ja: "あしは どうですか？おなじ くらい ながいですか？", en: "What about legs? Are they about the same length?" } },
      { id: "e14", speaker: "あい", translations: { ja: "けんさんの あしの ほうが ながいです。", en: "Your legs are longer, Ken." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja2-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "にほんごの むずかしい おとを れんしゅうしましょう。",
    en: "Let's practice two tricky things about Japanese pronunciation.",
  },
  content: {
    groupLabels: {
      pitch: { ja: "アクセント（たかさ）", en: "Pitch accent (same spelling, different meaning)" },
      short: { ja: "みじかい (短)", en: "Short" },
      long: { ja: "ながい (長)", en: "Long" },
    },
    items: [
      { id: "p1", category: "pitch", translations: { ja: "はし", en: "chopsticks (HL) / bridge (LH)" } },
      { id: "p2", category: "pitch", translations: { ja: "あめ", en: "rain (HL) / candy (LH)" } },
      { id: "p3", category: "pitch", translations: { ja: "かみ", en: "paper (HL) / hair (LH)" } },
      { id: "p4", category: "pitch", translations: { ja: "くも", en: "cloud (HL) / spider (LH)" } },
      { id: "p5", category: "pitch", translations: { ja: "かき", en: "persimmon (HL) / oyster (LH)" } },
      { id: "p6", category: "pitch", translations: { ja: "はな", en: "flower (LH) / nose (HL)" } },
      { id: "p7", category: "pitch", translations: { ja: "きる", en: "to wear (HL) / to cut (LH)" } },
      { id: "p8", category: "pitch", translations: { ja: "かえる", en: "frog (LH) / to return (HL)" } },
      { id: "s1", category: "short", translations: { ja: "おばさん", en: "aunt" } },
      { id: "s2", category: "short", translations: { ja: "おじさん", en: "uncle" } },
      { id: "s3", category: "short", translations: { ja: "ゆき", en: "snow" } },
      { id: "s4", category: "short", translations: { ja: "え", en: "picture" } },
      { id: "n1", category: "long", translations: { ja: "おばあさん", en: "grandmother" } },
      { id: "n2", category: "long", translations: { ja: "おじいさん", en: "grandfather" } },
      { id: "n3", category: "long", translations: { ja: "ゆうき", en: "courage" } },
      { id: "n4", category: "long", translations: { ja: "ええ", en: "yes (casual)" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja2-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true, // see types/index.ts — explicit flag, not positional inference
  title: { ja: "あたま かた ひざ あし", en: "Head, Shoulders, Knees and Toes" },
  spokenIntro: {
    ja: "さいごに、からだの うたを うたいましょう。",
    en: "To finish, let's sing a song about the body.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "あたま かた ひざ あし", en: "Head, shoulders, knees and toes" } },
      { id: "sg2", translations: { ja: "ひざ あし", en: "Knees and toes" } },
      { id: "sg3", translations: { ja: "あたま かた ひざ あし", en: "Head, shoulders, knees and toes" } },
      { id: "sg4", translations: { ja: "ひざ あし", en: "Knees and toes" } },
      { id: "sg5", translations: { ja: "め と みみと くちと はな", en: "Eyes and ears and mouth and nose" } },
      { id: "sg6", translations: { ja: "あたま かた ひざ あし", en: "Head, shoulders, knees and toes" } },
    ],
  },
};

export const lessonJapanese2: LessonPlan = {
  id: "lesson-ja-2",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 2,
  title: { ja: "からだ", en: "Body" },
  framingLanguage: "source", // beginner course — same rule as the other Japanese lessons
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarPronounsBlock,
    dialogueDoctorSymptomsBlock,
    dialogueDescribingBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
