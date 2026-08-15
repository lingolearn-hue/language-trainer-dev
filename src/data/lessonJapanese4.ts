import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 4 — per a1-master-lesson-table-v02.md row 4:
// Vocab: Emotions | Grammar: Negation | Dialogue A: comforting a friend
// who is upset | Dialogue B: explaining why you're not feeling well |
// Song: open slot (none in the master table for this lesson).
//
// Same 8-block shape as the other Japanese lessons.
//
// Grammar: negation across all three word classes that need it —
// verbs (〜ません polite / 〜ない plain), い-adjectives (〜くない), and
// な-adjectives/nouns (〜じゃない) — plus past negative (〜ませんでした),
// since "explaining why you're not feeling well" naturally needs past
// tense ("I didn't sleep well").
//
// Pronunciation: two concepts — devoicing reinforced specifically with
// negation-grammar words (ません, ではありません — directly reinforces
// this lesson's own grammar point, not generic filler), and mora-timing
// introduced as a new concept (Japanese rhythm is mora-timed, not
// syllable-timed — a genuinely important, previously uncovered feature).
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja4-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "きもち", en: "Emotions" },
  spokenIntro: {
    ja: "ようこそ！きょうは きもちについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about emotions.",
  },
  content: {
    text: { ja: "だい4か — きもち", en: "Lesson 4 — Emotions" },
  },
};

export const agendaBlock: Block = {
  id: "ja4-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから きもちの たんごを べんきょうします。そのあと ひていけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn emotion vocabulary. After that we'll look at negation, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：きもち", en: "Vocabulary: Emotions" } },
      { id: "a3", translations: { ja: "ぶんぽう：ひていけい", en: "Grammar: Negation" } },
      { id: "a4", translations: { ja: "かいわ：ともだちを なぐさめる", en: "Dialogue A: Comforting a Friend" } },
      { id: "a5", translations: { ja: "かいわ：ぐあいが わるい りゆう", en: "Dialogue B: Explaining You're Unwell" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja4-intro",
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
      ja: "きょうは どんな きもちですか？",
      en: "How are you feeling today?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja4-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：きもち", en: "Vocabulary: Emotions" },
  spokenIntro: {
    ja: "きもちに かんけいする たんごを みてみましょう。",
    en: "Let's look at some emotion-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "きもち", en: "feeling" } },
      { id: "v02", category: "noun", translations: { ja: "げんいん", en: "cause, reason" } },
      { id: "v03", category: "noun", translations: { ja: "なみだ", en: "tears" } },
      { id: "v04", category: "noun", translations: { ja: "えがお", en: "smiling face" } },
      { id: "v05", category: "noun", translations: { ja: "ストレス", en: "stress" } },
      { id: "v06", category: "noun", translations: { ja: "しんぱいごと", en: "a worry, concern" } },

      { id: "v07", category: "verb", translations: { ja: "なく", en: "to cry" } },
      { id: "v08", category: "verb", translations: { ja: "わらう", en: "to laugh, smile" } },
      { id: "v09", category: "verb", translations: { ja: "おこる", en: "to get angry" } },
      { id: "v10", category: "verb", translations: { ja: "しんぱいする", en: "to worry" } },
      { id: "v11", category: "verb", translations: { ja: "なぐさめる", en: "to comfort" } },
      { id: "v12", category: "verb", translations: { ja: "おちつく", en: "to calm down" } },
      { id: "v13", category: "verb", translations: { ja: "つかれる", en: "to get tired" } },
      { id: "v14", category: "verb", translations: { ja: "きんちょうする", en: "to get nervous" } },
      { id: "v15", category: "verb", translations: { ja: "リラックスする", en: "to relax" } },
      { id: "v16", category: "verb", translations: { ja: "がまんする", en: "to endure, hold back" } },

      { id: "v17", category: "adjective", translations: { ja: "うれしい", en: "happy, glad (い-adj)" } },
      { id: "v18", category: "adjective", translations: { ja: "かなしい", en: "sad (い-adj)" } },
      { id: "v19", category: "adjective", translations: { ja: "さびしい", en: "lonely (い-adj)" } },
      { id: "v20", category: "adjective", translations: { ja: "たのしい", en: "fun, enjoyable (い-adj)" } },
      { id: "v21", category: "adjective", translations: { ja: "こわい", en: "scary, afraid (い-adj)" } },
      { id: "v22", category: "adjective", translations: { ja: "はずかしい", en: "embarrassed (い-adj)" } },
      { id: "v23", category: "adjective", translations: { ja: "うらやましい", en: "envious (い-adj)" } },
      { id: "v24", category: "adjective", translations: { ja: "つらい", en: "painful, hard to bear (い-adj)" } },
      { id: "v25", category: "adjective", translations: { ja: "ふあん", en: "anxious, uneasy (な-adj)" } },
      { id: "v26", category: "adjective", translations: { ja: "らく", en: "at ease, comfortable (な-adj)" } },
      { id: "v27", category: "adjective", translations: { ja: "しんぱい", en: "worried (な-adj)" } },
      { id: "v28", category: "adjective", translations: { ja: "げんき", en: "well, energetic (な-adj)" } },
      { id: "v29", category: "adjective", translations: { ja: "たいへん", en: "tough, difficult (な-adj)" } },
      { id: "v30", category: "adjective", translations: { ja: "だいじょうぶ", en: "okay, fine (な-adj)" } },
    ],
  },
};

export const grammarNegationBlock: Block = {
  id: "ja4-grammar-negation",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ひていけい", en: "Negation" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、ひていけいの つくりかたです。",
    en: "Today's grammar is how to make sentences negative.",
  },
  content: {
    explanation: {
      ja: "どうしの ていねいな ひていけいは「〜ません」です。い-けいようしの ひていは「〜くない」、な-けいようしと めいしの ひていは「〜じゃない」です。かこの ひていは「〜ませんでした」に なります。",
      en: "The polite negative of a verb is 〜ません. い-adjectives negate with 〜くない. な-adjectives and nouns negate with 〜じゃない. The past negative of a verb becomes 〜ませんでした.",
    },
    chunks: [
      { id: "g1", translations: { ja: "しんぱいしません。", en: "I won't worry. (verb, polite negative)" } },
      { id: "g2", translations: { ja: "さびしくないです。", en: "I'm not lonely. (い-adj negative)" } },
      { id: "g3", translations: { ja: "げんきじゃないです。", en: "I'm not well. (な-adj negative)" } },
      { id: "g4", translations: { ja: "だいじょうぶじゃないです。", en: "It's not okay. (な-adj negative)" } },
      { id: "g5", translations: { ja: "きのう よく ねませんでした。", en: "I didn't sleep well yesterday. (verb, past negative)" } },
      { id: "g6", translations: { ja: "なにも たべませんでした。", en: "I didn't eat anything. (verb, past negative)" } },
    ],
  },
};

export const dialogueComfortingBlock: Block = {
  id: "ja4-dialogue-comforting",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ともだちを なぐさめる", en: "Dialogue A: Comforting a Friend" },
  spokenIntro: {
    ja: "かなしい ともだちを なぐさめる かいわを ききましょう。",
    en: "Let's listen to someone comforting an upset friend.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "だいじょうぶ？かなしそうですね。", en: "Are you okay? You look sad." } },
      { id: "d2", speaker: "けん", translations: { ja: "うん、あまり だいじょうぶじゃないです。", en: "Yeah, I'm not really okay." } },
      { id: "d3", speaker: "あい", translations: { ja: "なにが あったんですか？", en: "What happened?" } },
      { id: "d4", speaker: "けん", translations: { ja: "しごとで しっぱいしました。", en: "I made a mistake at work." } },
      { id: "d5", speaker: "あい", translations: { ja: "そうですか。それは つらいですね。", en: "I see. That's tough." } },
      { id: "d6", speaker: "けん", translations: { ja: "はずかしくて、なきたい きもちです。", en: "I'm embarrassed, and I feel like crying." } },
      { id: "d7", speaker: "あい", translations: { ja: "だれでも しっぱいします。しんぱいしないで。", en: "Everyone makes mistakes. Don't worry." } },
      { id: "d8", speaker: "けん", translations: { ja: "ありがとう。すこし らくに なりました。", en: "Thank you. I feel a little more at ease." } },
      { id: "d9", speaker: "あい", translations: { ja: "いっしょに コーヒーでも のみましょう。", en: "Let's go get some coffee together." } },
      { id: "d10", speaker: "けん", translations: { ja: "いいですね。ありがとうございます。", en: "That sounds good. Thank you." } },
      { id: "d11", speaker: "あい", translations: { ja: "つぎは うまく いきますよ。", en: "It'll go well next time." } },
      { id: "d12", speaker: "けん", translations: { ja: "そう おもいたいです。", en: "I want to believe that." } },
      { id: "d13", speaker: "あい", translations: { ja: "がんばってる ことは わかっています。", en: "I know you've been trying hard." } },
      { id: "d14", speaker: "けん", translations: { ja: "うれしいです。ありがとう。", en: "That makes me happy. Thank you." } },
    ],
  },
};

export const dialogueUnwellBlock: Block = {
  id: "ja4-dialogue-unwell",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ぐあいが わるい りゆう", en: "Dialogue B: Explaining You're Unwell" },
  spokenIntro: {
    ja: "ぐあいが わるい りゆうを せつめいする かいわを ききましょう。",
    en: "Let's listen to someone explaining why they're not feeling well.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "げんきが ないですね。だいじょうぶですか？", en: "You seem down. Are you okay?" } },
      { id: "e2", speaker: "けん", translations: { ja: "あまり げんきじゃないです。", en: "I'm not really well." } },
      { id: "e3", speaker: "みか", translations: { ja: "どうしたんですか？", en: "What's wrong?" } },
      { id: "e4", speaker: "けん", translations: { ja: "きのう よく ねませんでした。", en: "I didn't sleep well yesterday." } },
      { id: "e5", speaker: "みか", translations: { ja: "どうして ねませんでしたか？", en: "Why didn't you sleep?" } },
      { id: "e6", speaker: "けん", translations: { ja: "しごとの ことで きんちょうしていました。", en: "I was nervous about work." } },
      { id: "e7", speaker: "みか", translations: { ja: "ストレスが おおいですか？", en: "Do you have a lot of stress?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、さいきん ストレスが たまっています。", en: "Yes, I've been building up stress recently." } },
      { id: "e9", speaker: "みか", translations: { ja: "たべものは たべましたか？", en: "Did you eat anything?" } },
      { id: "e10", speaker: "けん", translations: { ja: "いいえ、あさから なにも たべませんでした。", en: "No, I haven't eaten anything since morning." } },
      { id: "e11", speaker: "みか", translations: { ja: "それは よくないですよ。すこし やすんで。", en: "That's not good. Please rest a little." } },
      { id: "e12", speaker: "けん", translations: { ja: "そうですね。すこし リラックスします。", en: "You're right. I'll relax a bit." } },
      { id: "e13", speaker: "みか", translations: { ja: "むりを しないで くださいね。", en: "Please don't push yourself too hard." } },
      { id: "e14", speaker: "けん", translations: { ja: "ありがとう。きを つけます。", en: "Thank you. I'll be careful." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja4-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「ません」の むせいかと、はくの リズムを れんしゅうしましょう。",
    en: "Let's practice devoicing in ません, and the mora-timed rhythm of Japanese.",
  },
  content: {
    groupLabels: {
      devoice: { ja: "「ません」の むせいか（ふくしゅう）", en: "Devoicing in ません (reinforced, negation-specific)" },
      mora: { ja: "はくの リズム", en: "Mora-timed rhythm" },
    },
    items: [
      // Devoicing reinforced specifically with negation-grammar words,
      // directly tied to today's own grammar point rather than filler.
      { id: "de1", category: "devoice", translations: { ja: "しんぱいしません", en: "sounds like [...shimasen], す nearly silent" } },
      { id: "de2", category: "devoice", translations: { ja: "げんきじゃないです", en: "final です devoiced, sounds like [...naides]" } },
      { id: "de3", category: "devoice", translations: { ja: "たべませんでした", en: "sounds like [...masendeshta]" } },
      { id: "de4", category: "devoice", translations: { ja: "すきじゃないです", en: "す devoiced at the start, sounds like [ski...]" } },
      // Mora-timed rhythm — new concept: Japanese beats are counted by
      // mora (roughly one kana = one beat), not by syllable the way
      // English/German are — a word can "look" short in syllables but
      // take several beats to say.
      { id: "m1", category: "mora", translations: { ja: "きょう", en: "today — 2 morae (きょ・う), not 1 syllable" } },
      { id: "m2", category: "mora", translations: { ja: "とうきょう", en: "Tokyo — 4 morae (と・う・きょ・う)" } },
      { id: "m3", category: "mora", translations: { ja: "がっこう", en: "school — 4 morae, the small っ counts as its own beat" } },
      { id: "m4", category: "mora", translations: { ja: "しんぱい", en: "worry — 4 morae, ん counts as its own beat" } },
    ],
  },
};

export const lessonJapanese4: LessonPlan = {
  id: "lesson-ja-4",
  courseId: "japanese-beginner",
  title: { ja: "きもち", en: "Emotions" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarNegationBlock,
    dialogueComfortingBlock,
    dialogueUnwellBlock,
    pronunciationBlock,
    // No song block — Lesson 4 is an "open slot" in a1-master-lesson-table-v02.md
  ],
};
