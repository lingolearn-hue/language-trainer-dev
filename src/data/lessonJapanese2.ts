import type { LessonPlan, Block } from "../types";

// Japanese-from-English beginner lesson — a structural conversion of
// lesson2.ts (German), reusing the same 10-block shape: title -> agenda
// -> warm-up -> vocab -> grammar x3 -> dialogue -> reading practice ->
// song. Unlike Lesson 2, most content here is pulled from an existing
// corpus rather than authored from a PDF:
// - Vocab, grammar explanations, and the dialogue are sourced from
//   lingolearn-hue/vocab-games-dev's public/{vocab,grammar,dialogues}/ja-en.json
//   (JLPT N5 level — the beginner tier, analogous to CEFR A1). Grammar
//   example sentences are newly written using this lesson's own vocab
//   selection; explanations are lightly adapted from the source.
// - Target text is written in hiragana rather than kanji throughout,
//   matching both the source data's own style and N5 teaching practice —
//   this app has no furigana/ruby-text rendering, so kanji without a
//   reading aid would be unusable for an absolute beginner.
// - The "reading practice" block (no direct source-data equivalent, same
//   situation as lesson2's reused pronunciation slide) covers real,
//   well-known Japanese homophone pairs — genuine content, not invented.
// - The closing song is original (no source-data song content exists,
//   and no existing song was reused/translated) — same approach as the
//   English C1 course's closing song.
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja2-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "にほんごにゅうもん", en: "Japanese for Beginners" },
  spokenIntro: {
    ja: "ようこそ！にほんごの べんきょうを はじめましょう。",
    en: "Welcome! Let's start learning Japanese.",
  },
  content: {
    text: {
      ja: "はじめての にほんご — コースの しょうかい",
      en: "Your first steps in Japanese — Course introduction",
    },
  },
};

export const agendaBlock: Block = {
  id: "ja2-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから たんごを べんきょうします。そのあと ぶんぽうを みっつ みて、かいわの れんしゅうと よみかたの れんしゅうを して、さいごに うたを うたいます。",
    en: "Today we'll start with a short introduction, then build up some vocabulary. After that we'll look at three grammar points, practice a dialogue and some reading, and finish with a song.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご", en: "Vocabulary" } },
      { id: "a3", translations: { ja: "ぶんぽう：は", en: "Grammar: Topic Particle は" } },
      { id: "a4", translations: { ja: "ぶんぽう：ます形", en: "Grammar: Polite Verb Form" } },
      { id: "a5", translations: { ja: "ぶんぽう：ごじゅん", en: "Grammar: Word Order" } },
      { id: "a6", translations: { ja: "かいわ：いちばで", en: "Dialogue: At the Market" } },
      { id: "a7", translations: { ja: "よみかたの れんしゅう", en: "Reading Practice" } },
      { id: "a8", translations: { ja: "うた", en: "Song" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja2-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 3,
  title: { ja: "じこしょうかい", en: "Warm-up" },
  spokenIntro: {
    ja: "はじめる まえに、すこし じこしょうかいを しましょう。",
    en: "Before we start, let's introduce ourselves a little.",
  },
  content: {
    text: {
      ja: "わたしは にほんごを べんきょうしたいです。なぜなら... あなたは？どうして にほんごを べんきょうしますか？",
      en: "I want to learn Japanese because... And you? Why are you learning Japanese?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja2-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご", en: "Vocabulary" },
  spokenIntro: {
    ja: "だいじな たんごを みてみましょう。",
    en: "Let's look at some important words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "コーヒー", en: "coffee" } },
      { id: "v02", category: "noun", translations: { ja: "おちゃ", en: "tea" } },
      { id: "v03", category: "noun", translations: { ja: "パン", en: "bread" } },
      { id: "v04", category: "noun", translations: { ja: "みず", en: "water" } },
      { id: "v05", category: "noun", translations: { ja: "おさら", en: "plate" } },
      { id: "v06", category: "noun", translations: { ja: "コップ", en: "glass, cup" } },
      { id: "v07", category: "noun", translations: { ja: "テーブル", en: "table" } },
      { id: "v08", category: "noun", translations: { ja: "いす", en: "chair" } },
      { id: "v09", category: "noun", translations: { ja: "おかね", en: "money" } },
      { id: "v10", category: "noun", translations: { ja: "がっこう", en: "school" } },
      { id: "v11", category: "noun", translations: { ja: "せんせい", en: "teacher" } },
      { id: "v12", category: "noun", translations: { ja: "ともだち", en: "friend" } },
      { id: "v13", category: "noun", translations: { ja: "いえ", en: "house, home" } },
      { id: "v14", category: "noun", translations: { ja: "でんわ", en: "telephone" } },
      { id: "v15", category: "noun", translations: { ja: "ほん", en: "book" } },
      { id: "v16", category: "noun", translations: { ja: "じかん", en: "time" } },

      { id: "v17", category: "verb", translations: { ja: "たべる", en: "to eat" } },
      { id: "v18", category: "verb", translations: { ja: "のむ", en: "to drink" } },
      { id: "v19", category: "verb", translations: { ja: "はなす", en: "to speak" } },
      { id: "v20", category: "verb", translations: { ja: "よむ", en: "to read" } },
      { id: "v21", category: "verb", translations: { ja: "かく", en: "to write" } },
      { id: "v22", category: "verb", translations: { ja: "かう", en: "to buy" } },
      { id: "v23", category: "verb", translations: { ja: "いく", en: "to go" } },
      { id: "v24", category: "verb", translations: { ja: "みる", en: "to see, to look" } },
      { id: "v25", category: "verb", translations: { ja: "まつ", en: "to wait" } },
      { id: "v26", category: "verb", translations: { ja: "わかる", en: "to understand" } },

      { id: "v27", category: "adjective", translations: { ja: "おおきい", en: "big" } },
      { id: "v28", category: "adjective", translations: { ja: "ちいさい", en: "small" } },
      { id: "v29", category: "adjective", translations: { ja: "あたらしい", en: "new" } },
      { id: "v30", category: "adjective", translations: { ja: "ふるい", en: "old (objects)" } },
      { id: "v31", category: "adjective", translations: { ja: "おいしい", en: "delicious" } },
      { id: "v32", category: "adjective", translations: { ja: "たかい", en: "expensive, tall" } },
      { id: "v33", category: "adjective", translations: { ja: "やすい", en: "cheap" } },
      { id: "v34", category: "adjective", translations: { ja: "いそがしい", en: "busy" } },
      { id: "v35", category: "adjective", translations: { ja: "たのしい", en: "fun, enjoyable" } },
      { id: "v36", category: "adjective", translations: { ja: "むずかしい", en: "difficult" } },
      { id: "v37", category: "adjective", translations: { ja: "やさしい", en: "easy" } },
      { id: "v38", category: "adjective", translations: { ja: "げんき", en: "healthy, energetic" } },
    ],
  },
};

export const grammarWaBlock: Block = {
  id: "ja2-grammar-wa",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "は — トピックの じょし", en: "は — Topic Particle" },
  spokenIntro: {
    ja: "さいしょの ぶんぽうは、とても だいじな じょし「は」です。",
    en: "Our first grammar point is a very important particle: は.",
  },
  content: {
    explanation: {
      ja: "「は」は、ぶんの トピック（なにについて はなしているか）を しめします。",
      en: "は marks the topic of the sentence — what the sentence is about. It often replaces が or を when something is the topic rather than just the subject or object.",
    },
    chunks: [
      { id: "w1", translations: { ja: "わたしは がくせいです。", en: "I am a student." } },
      { id: "w2", translations: { ja: "これは ほんです。", en: "This is a book." } },
      { id: "w3", translations: { ja: "あれは がっこうです。", en: "That is a school." } },
      { id: "w4", translations: { ja: "コーヒーは おいしいです。", en: "The coffee is delicious." } },
      { id: "w5", translations: { ja: "ともだちは げんきです。", en: "My friend is well." } },
      { id: "w6", translations: { ja: "この ほんは あたらしいです。", en: "This book is new." } },
    ],
  },
};

export const grammarMasuBlock: Block = {
  id: "ja2-grammar-masu",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ます形", en: "The ます Form" },
  spokenIntro: {
    ja: "つぎは、どうしの ていねいな かたち「ます形」です。",
    en: "Next, the polite verb form — the ます form.",
  },
  content: {
    explanation: {
      ja: "「ます形」は どうしの ていねいな げんざい・みらいけいです。しゅうかんや じょうたい、みらいの よてい を あらわします。",
      en: "The ます form is the polite non-past form of a verb. It expresses present habits, states, and future intentions.",
    },
    chunks: [
      { id: "m1", translations: { ja: "わたしは パンを たべます。", en: "I eat bread." } },
      { id: "m2", translations: { ja: "わたしは おちゃを のみます。", en: "I drink tea." } },
      { id: "m3", translations: { ja: "わたしは にほんごを はなします。", en: "I speak Japanese." } },
      { id: "m4", translations: { ja: "わたしは ほんを よみます。", en: "I read a book." } },
      { id: "m5", translations: { ja: "わたしは まいにち がっこうへ いきます。", en: "I go to school every day." } },
      { id: "m6", translations: { ja: "わたしは せんせいを まちます。", en: "I wait for the teacher." } },
    ],
  },
};

export const grammarWordOrderBlock: Block = {
  id: "ja2-grammar-order",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ぶんの ごじゅん", en: "Word Order" },
  spokenIntro: {
    ja: "さいごの ぶんぽうは、にほんごの ぶんの ならびかたです。",
    en: "Our last grammar point is how Japanese sentences are ordered.",
  },
  content: {
    explanation: {
      ja: "にほんごは 「だれが・なにを・どうする」の じゅんばんです。どうしは いつも さいごに きます。じかんと ばしょは どうしの まえに きます。",
      en: "Japanese follows Subject-Object-Verb order — the verb always comes last. Time and place expressions come before the verb, usually with time before place.",
    },
    chunks: [
      { id: "o1", translations: { ja: "わたしは りんごを たべます。", en: "I eat an apple. (subject-object-verb)" } },
      { id: "o2", translations: { ja: "わたしは まいにち がっこうで にほんごを べんきょうします。", en: "I study Japanese at school every day. (time-place-object-verb)" } },
      { id: "o3", translations: { ja: "わたしは あさ コーヒーを のみます。", en: "I drink coffee in the morning." } },
      { id: "o4", translations: { ja: "せんせいは きょうしつに います。", en: "The teacher is in the classroom." } },
      { id: "o5", translations: { ja: "あの たかい たてものは ぎんこうです。", en: "That tall building is a bank. (adjective before noun)" } },
    ],
  },
};

export const dialogueMarketBlock: Block = {
  id: "ja2-dialogue-market",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 8,
  title: { ja: "かいわ：いちばで", en: "Dialogue: At the Market" },
  spokenIntro: {
    ja: "いちばでの かいわを ききましょう。",
    en: "Let's listen to a conversation at the market.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "けんた", translations: { ja: "すみません！りんごは いくらですか？", en: "Excuse me! How much are the apples?" } },
      { id: "d2", speaker: "うりて", translations: { ja: "いらっしゃいませ！ひとつ ひゃくえんです。", en: "Welcome! They are one hundred yen each." } },
      { id: "d3", speaker: "けんた", translations: { ja: "じゃあ、みっつ ください。", en: "Then, I'll take three, please." } },
      { id: "d4", speaker: "うりて", translations: { ja: "ありがとうございます。さんびゃくえん です。", en: "Thank you. That is three hundred yen." } },
      { id: "d5", speaker: "けんた", translations: { ja: "はい、どうぞ。ありがとう！", en: "Here you are. Thank you!" } },
      { id: "d6", speaker: "うりて", translations: { ja: "ありがとうございました！またどうぞ！", en: "Thank you very much! Please come again!" } },
    ],
  },
};

export const readingPracticeBlock: Block = {
  id: "ja2-reading-practice",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "よみかたの れんしゅう", en: "Reading Practice: Homophones" },
  spokenIntro: {
    ja: "おなじ よみかたで いみが ちがう ことばを れんしゅうしましょう。",
    en: "Let's practice words that sound the same but mean different things.",
  },
  content: {
    groupLabels: {
      pair: { ja: "おなじ よみかた・ちがう いみ", en: "Same reading, different meaning" },
    },
    items: [
      { id: "h1", category: "pair", translations: { ja: "はし", en: "chopsticks / bridge (different pitch accent)" } },
      { id: "h2", category: "pair", translations: { ja: "あめ", en: "rain / candy (different pitch accent)" } },
      { id: "h3", category: "pair", translations: { ja: "かみ", en: "paper / hair (different pitch accent)" } },
      { id: "h4", category: "pair", translations: { ja: "くも", en: "cloud / spider (different pitch accent)" } },
      { id: "h5", category: "pair", translations: { ja: "かき", en: "persimmon / oyster (different pitch accent)" } },
      { id: "h6", category: "pair", translations: { ja: "はな", en: "flower / nose (different pitch accent)" } },
      { id: "h7", category: "pair", translations: { ja: "きる", en: "to wear / to cut (different pitch accent)" } },
      { id: "h8", category: "pair", translations: { ja: "とる", en: "to take (a photo) / to take (a class) — same word, context distinguishes" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja2-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  isSong: true, // see types/index.ts — explicit flag, not positional inference
  title: { ja: "ちいさな うた", en: "A Little Song" },
  spokenIntro: {
    ja: "さいごに、みじかい うたを うたいましょう。",
    en: "To finish, let's sing a short song.",
  },
  content: {
    lines: [
      { id: "s1", translations: { ja: "そらは あおい", en: "The sky is blue" } },
      { id: "s2", translations: { ja: "くもは しろい", en: "The clouds are white" } },
      { id: "s3", translations: { ja: "はなは きれい", en: "The flowers are pretty" } },
      { id: "s4", translations: { ja: "みんな げんき", en: "Everyone is well" } },
    ],
  },
};

export const lessonJapanese2: LessonPlan = {
  id: "lesson-ja-2",
  courseId: "japanese-beginner",
  title: { ja: "にほんごにゅうもん", en: "Japanese for Beginners" },
  framingLanguage: "source", // beginner course — same rule as lesson2 (German)
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarWaBlock,
    grammarMasuBlock,
    grammarWordOrderBlock,
    dialogueMarketBlock,
    readingPracticeBlock,
    songBlock, // song always closes the lesson
  ],
};
