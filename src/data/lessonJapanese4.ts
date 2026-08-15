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
  title: { ja: "きもち", de: "Gefühle", en: "Emotions" },
  spokenIntro: {
    ja: "ようこそ！きょうは きもちについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about emotions.",
  },
  content: {
    text: { ja: "だい4か — きもち", de: "Lektion 4 — Gefühle", en: "Lesson 4 — Emotions" },
  },
};

export const agendaBlock: Block = {
  id: "ja4-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから きもちの たんごを べんきょうします。そのあと ひていけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn emotion vocabulary. After that we'll look at negation, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：きもち", de: "Wortschatz: Gefühle", en: "Vocabulary: Emotions" } },
      { id: "a3", translations: { ja: "ぶんぽう：ひていけい", de: "Grammatik: Verneinung", en: "Grammar: Negation" } },
      { id: "a4", translations: { ja: "かいわ：ともだちを なぐさめる", de: "Dialog A: Einen Freund trösten", en: "Dialogue A: Comforting a Friend" } },
      { id: "a5", translations: { ja: "かいわ：ぐあいが わるい りゆう", de: "Dialog B: Erklären, dass es einem nicht gut geht", en: "Dialogue B: Explaining You're Unwell" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja4-intro",
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
  title: { ja: "たんご：きもち", de: "Wortschatz: Gefühle", en: "Vocabulary: Emotions" },
  spokenIntro: {
    ja: "きもちに かんけいする たんごを みてみましょう。",
    en: "Let's look at some emotion-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "きもち", de: "Gefühl", en: "feeling" } },
      { id: "v02", category: "noun", translations: { ja: "げんいん", de: "Ursache, Grund", en: "cause, reason" } },
      { id: "v03", category: "noun", translations: { ja: "なみだ", de: "Tränen", en: "tears" } },
      { id: "v04", category: "noun", translations: { ja: "えがお", de: "lächelndes Gesicht", en: "smiling face" } },
      { id: "v05", category: "noun", translations: { ja: "ストレス", de: "Stress", en: "stress" } },
      { id: "v06", category: "noun", translations: { ja: "しんぱいごと", de: "eine Sorge", en: "a worry, concern" } },

      { id: "v07", category: "verb", translations: { ja: "なく", de: "weinen", en: "to cry" } },
      { id: "v08", category: "verb", translations: { ja: "わらう", de: "lachen, lächeln", en: "to laugh, smile" } },
      { id: "v09", category: "verb", translations: { ja: "おこる", de: "wütend werden", en: "to get angry" } },
      { id: "v10", category: "verb", translations: { ja: "しんぱいする", de: "sich sorgen", en: "to worry" } },
      { id: "v11", category: "verb", translations: { ja: "なぐさめる", de: "trösten", en: "to comfort" } },
      { id: "v12", category: "verb", translations: { ja: "おちつく", de: "sich beruhigen", en: "to calm down" } },
      { id: "v13", category: "verb", translations: { ja: "つかれる", de: "müde werden", en: "to get tired" } },
      { id: "v14", category: "verb", translations: { ja: "きんちょうする", de: "nervös werden", en: "to get nervous" } },
      { id: "v15", category: "verb", translations: { ja: "リラックスする", de: "entspannen", en: "to relax" } },
      { id: "v16", category: "verb", translations: { ja: "がまんする", de: "aushalten, zurückhalten", en: "to endure, hold back" } },

      { id: "v17", category: "adjective", translations: { ja: "うれしい", de: "glücklich, froh (い-Adjektiv)", en: "happy, glad (い-adj)" } },
      { id: "v18", category: "adjective", translations: { ja: "かなしい", de: "traurig (い-Adjektiv)", en: "sad (い-adj)" } },
      { id: "v19", category: "adjective", translations: { ja: "さびしい", de: "einsam (い-Adjektiv)", en: "lonely (い-adj)" } },
      { id: "v20", category: "adjective", translations: { ja: "たのしい", de: "lustig, angenehm (い-Adjektiv)", en: "fun, enjoyable (い-adj)" } },
      { id: "v21", category: "adjective", translations: { ja: "こわい", de: "beängstigend, ängstlich (い-Adjektiv)", en: "scary, afraid (い-adj)" } },
      { id: "v22", category: "adjective", translations: { ja: "はずかしい", de: "peinlich berührt (い-Adjektiv)", en: "embarrassed (い-adj)" } },
      { id: "v23", category: "adjective", translations: { ja: "うらやましい", de: "neidisch (い-Adjektiv)", en: "envious (い-adj)" } },
      { id: "v24", category: "adjective", translations: { ja: "つらい", de: "schmerzhaft, schwer zu ertragen (い-Adjektiv)", en: "painful, hard to bear (い-adj)" } },
      { id: "v25", category: "adjective", translations: { ja: "ふあん", de: "ängstlich, unruhig (な-Adjektiv)", en: "anxious, uneasy (な-adj)" } },
      { id: "v26", category: "adjective", translations: { ja: "らく", de: "entspannt, bequem (な-Adjektiv)", en: "at ease, comfortable (な-adj)" } },
      { id: "v27", category: "adjective", translations: { ja: "しんぱい", de: "besorgt (な-Adjektiv)", en: "worried (な-adj)" } },
      { id: "v28", category: "adjective", translations: { ja: "げんき", de: "wohlauf, energisch (な-Adjektiv)", en: "well, energetic (な-adj)" } },
      { id: "v29", category: "adjective", translations: { ja: "たいへん", de: "hart, schwierig (な-Adjektiv)", en: "tough, difficult (な-adj)" } },
      { id: "v30", category: "adjective", translations: { ja: "だいじょうぶ", de: "okay, in Ordnung (な-Adjektiv)", en: "okay, fine (な-adj)" } },
    ],
  },
};

export const grammarNegationBlock: Block = {
  id: "ja4-grammar-negation",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ひていけい", de: "Verneinung", en: "Negation" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、ひていけいの つくりかたです。",
    en: "Today's grammar is how to make sentences negative.",
  },
  content: {
    explanation: {
      ja: "どうしの ていねいな ひていけいは「〜ません」です。い-けいようしの ひていは「〜くない」、な-けいようしと めいしの ひていは「〜じゃない」です。かこの ひていは「〜ませんでした」に なります。",
      de: "Die höfliche Verneinung eines Verbs ist 〜ません. い-Adjektive werden mit 〜くない verneint. な-Adjektive und Nomen werden mit 〜じゃない verneint. Die verneinte Vergangenheit eines Verbs wird zu 〜ませんでした.",
      en: "The polite negative of a verb is 〜ません. い-adjectives negate with 〜くない. な-adjectives and nouns negate with 〜じゃない. The past negative of a verb becomes 〜ませんでした.",
    },
    chunks: [
      { id: "g1", translations: { ja: "しんぱいしません。", de: "Ich werde mir keine Sorgen machen. (Verb, höfliche Verneinung)", en: "I won't worry. (verb, polite negative)" } },
      { id: "g2", translations: { ja: "さびしくないです。", de: "Ich bin nicht einsam. (い-Adjektiv, verneint)", en: "I'm not lonely. (い-adj negative)" } },
      { id: "g3", translations: { ja: "げんきじゃないです。", de: "Mir geht es nicht gut. (な-Adjektiv, verneint)", en: "I'm not well. (な-adj negative)" } },
      { id: "g4", translations: { ja: "だいじょうぶじゃないです。", de: "Es ist nicht in Ordnung. (な-Adjektiv, verneint)", en: "It's not okay. (な-adj negative)" } },
      { id: "g5", translations: { ja: "きのう よく ねませんでした。", de: "Ich habe gestern nicht gut geschlafen. (Verb, verneinte Vergangenheit)", en: "I didn't sleep well yesterday. (verb, past negative)" } },
      { id: "g6", translations: { ja: "なにも たべませんでした。", de: "Ich habe nichts gegessen. (Verb, verneinte Vergangenheit)", en: "I didn't eat anything. (verb, past negative)" } },
    ],
  },
};

export const dialogueComfortingBlock: Block = {
  id: "ja4-dialogue-comforting",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ともだちを なぐさめる", de: "Dialog A: Einen Freund trösten", en: "Dialogue A: Comforting a Friend" },
  spokenIntro: {
    ja: "かなしい ともだちを なぐさめる かいわを ききましょう。",
    en: "Let's listen to someone comforting an upset friend.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "だいじょうぶ？かなしそうですね。", de: "Geht es dir gut? Du siehst traurig aus.", en: "Are you okay? You look sad." } },
      { id: "d2", speaker: "けん", translations: { ja: "うん、あまり だいじょうぶじゃないです。", de: "Ja, mir geht es nicht wirklich gut.", en: "Yeah, I'm not really okay." } },
      { id: "d3", speaker: "あい", translations: { ja: "なにが あったんですか？", de: "Was ist passiert?", en: "What happened?" } },
      { id: "d4", speaker: "けん", translations: { ja: "しごとで しっぱいしました。", de: "Mir ist bei der Arbeit ein Fehler passiert.", en: "I made a mistake at work." } },
      { id: "d5", speaker: "あい", translations: { ja: "そうですか。それは つらいですね。", de: "Verstehe. Das ist hart.", en: "I see. That's tough." } },
      { id: "d6", speaker: "けん", translations: { ja: "はずかしくて、なきたい きもちです。", de: "Es ist mir peinlich, und ich könnte weinen.", en: "I'm embarrassed, and I feel like crying." } },
      { id: "d7", speaker: "あい", translations: { ja: "だれでも しっぱいします。しんぱいしないで。", de: "Jeder macht Fehler. Mach dir keine Sorgen.", en: "Everyone makes mistakes. Don't worry." } },
      { id: "d8", speaker: "けん", translations: { ja: "ありがとう。すこし らくに なりました。", de: "Danke. Ich fühle mich schon etwas entspannter.", en: "Thank you. I feel a little more at ease." } },
      { id: "d9", speaker: "あい", translations: { ja: "いっしょに コーヒーでも のみましょう。", de: "Lass uns zusammen einen Kaffee trinken gehen.", en: "Let's go get some coffee together." } },
      { id: "d10", speaker: "けん", translations: { ja: "いいですね。ありがとうございます。", de: "Das klingt gut. Danke.", en: "That sounds good. Thank you." } },
      { id: "d11", speaker: "あい", translations: { ja: "つぎは うまく いきますよ。", de: "Beim nächsten Mal klappt es bestimmt.", en: "It'll go well next time." } },
      { id: "d12", speaker: "けん", translations: { ja: "そう おもいたいです。", de: "Das möchte ich gerne glauben.", en: "I want to believe that." } },
      { id: "d13", speaker: "あい", translations: { ja: "がんばってる ことは わかっています。", de: "Ich weiß, dass du dich sehr anstrengst.", en: "I know you've been trying hard." } },
      { id: "d14", speaker: "けん", translations: { ja: "うれしいです。ありがとう。", de: "Das macht mich glücklich. Danke.", en: "That makes me happy. Thank you." } },
    ],
  },
};

export const dialogueUnwellBlock: Block = {
  id: "ja4-dialogue-unwell",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ぐあいが わるい りゆう", de: "Dialog B: Erklären, dass es einem nicht gut geht", en: "Dialogue B: Explaining You're Unwell" },
  spokenIntro: {
    ja: "ぐあいが わるい りゆうを せつめいする かいわを ききましょう。",
    en: "Let's listen to someone explaining why they're not feeling well.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "げんきが ないですね。だいじょうぶですか？", de: "Du wirkst niedergeschlagen. Geht es dir gut?", en: "You seem down. Are you okay?" } },
      { id: "e2", speaker: "けん", translations: { ja: "あまり げんきじゃないです。", de: "Mir geht es nicht wirklich gut.", en: "I'm not really well." } },
      { id: "e3", speaker: "みか", translations: { ja: "どうしたんですか？", de: "Was ist los?", en: "What's wrong?" } },
      { id: "e4", speaker: "けん", translations: { ja: "きのう よく ねませんでした。", de: "Ich habe gestern nicht gut geschlafen.", en: "I didn't sleep well yesterday." } },
      { id: "e5", speaker: "みか", translations: { ja: "どうして ねませんでしたか？", de: "Warum hast du nicht geschlafen?", en: "Why didn't you sleep?" } },
      { id: "e6", speaker: "けん", translations: { ja: "しごとの ことで きんちょうしていました。", de: "Ich war wegen der Arbeit nervös.", en: "I was nervous about work." } },
      { id: "e7", speaker: "みか", translations: { ja: "ストレスが おおいですか？", de: "Hast du viel Stress?", en: "Do you have a lot of stress?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、さいきん ストレスが たまっています。", de: "Ja, in letzter Zeit baut sich viel Stress bei mir auf.", en: "Yes, I've been building up stress recently." } },
      { id: "e9", speaker: "みか", translations: { ja: "たべものは たべましたか？", de: "Hast du etwas gegessen?", en: "Did you eat anything?" } },
      { id: "e10", speaker: "けん", translations: { ja: "いいえ、あさから なにも たべませんでした。", de: "Nein, ich habe seit heute Morgen nichts gegessen.", en: "No, I haven't eaten anything since morning." } },
      { id: "e11", speaker: "みか", translations: { ja: "それは よくないですよ。すこし やすんで。", de: "Das ist nicht gut. Ruh dich ein bisschen aus.", en: "That's not good. Please rest a little." } },
      { id: "e12", speaker: "けん", translations: { ja: "そうですね。すこし リラックスします。", de: "Du hast recht. Ich werde mich etwas entspannen.", en: "You're right. I'll relax a bit." } },
      { id: "e13", speaker: "みか", translations: { ja: "むりを しないで くださいね。", de: "Bitte überanstreng dich nicht.", en: "Please don't push yourself too hard." } },
      { id: "e14", speaker: "けん", translations: { ja: "ありがとう。きを つけます。", de: "Danke. Ich werde vorsichtig sein.", en: "Thank you. I'll be careful." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja4-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「ません」の むせいかと、はくの リズムを れんしゅうしましょう。",
    en: "Let's practice devoicing in ません, and the mora-timed rhythm of Japanese.",
  },
  content: {
    groupLabels: {
      devoice: { ja: "「ません」の むせいか（ふくしゅう）", de: "Entstimmhaftung in ません (vertieft, verneinungsspezifisch)", en: "Devoicing in ません (reinforced, negation-specific)" },
      mora: { ja: "はくの リズム", de: "Moratimierter Rhythmus", en: "Mora-timed rhythm" },
    },
    items: [
      // Devoicing reinforced specifically with negation-grammar words,
      // directly tied to today's own grammar point rather than filler.
      { id: "de1", category: "devoice", translations: { ja: "しんぱいしません", de: "klingt wie [...shimasen], す fast stumm", en: "sounds like [...shimasen], す nearly silent" } },
      { id: "de2", category: "devoice", translations: { ja: "げんきじゃないです", de: "das abschließende です entstimmt, klingt wie [...naides]", en: "final です devoiced, sounds like [...naides]" } },
      { id: "de3", category: "devoice", translations: { ja: "たべませんでした", de: "klingt wie [...masendeshta]", en: "sounds like [...masendeshta]" } },
      { id: "de4", category: "devoice", translations: { ja: "すきじゃないです", de: "す am Anfang entstimmt, klingt wie [ski...]", en: "す devoiced at the start, sounds like [ski...]" } },
      // Mora-timed rhythm — new concept: Japanese beats are counted by
      // mora (roughly one kana = one beat), not by syllable the way
      // English/German are — a word can "look" short in syllables but
      // take several beats to say.
      { id: "m1", category: "mora", translations: { ja: "きょう", de: "heute — 2 Morae (きょ・う), nicht 1 Silbe", en: "today — 2 morae (きょ・う), not 1 syllable" } },
      { id: "m2", category: "mora", translations: { ja: "とうきょう", de: "Tokio — 4 Morae (と・う・きょ・う)", en: "Tokyo — 4 morae (と・う・きょ・う)" } },
      { id: "m3", category: "mora", translations: { ja: "がっこう", de: "Schule — 4 Morae, das kleine っ zählt als eigener Schlag", en: "school — 4 morae, the small っ counts as its own beat" } },
      { id: "m4", category: "mora", translations: { ja: "しんぱい", de: "Sorge — 4 Morae, ん zählt als eigener Schlag", en: "worry — 4 morae, ん counts as its own beat" } },
    ],
  },
};

export const lessonJapanese4: LessonPlan = {
  id: "lesson-ja-4",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 4,
  title: { ja: "きもち", de: "Gefühle", en: "Emotions" },
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
