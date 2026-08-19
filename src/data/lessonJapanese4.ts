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
  title: { ja: "きもち", zh: "情绪", de: "Gefühle", en: "Emotions" },
  spokenIntro: {
    ja: "ようこそ！きょうは きもちについて べんきょうしましょう。",
    zh: "欢迎！今天我们学习情绪相关的词汇。",
    de: "Willkommen! Heute lernen wir Wörter für Gefühle.",
    en: "Welcome! Today we'll learn about emotions.",
  },
  content: {
    text: { ja: "だい4か — きもち", zh: "第4课 — 情绪", de: "Lektion 4 — Gefühle", en: "Lesson 4 — Emotions" },
  },
};

export const agendaBlock: Block = {
  id: "ja4-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", zh: "介绍", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから きもちの たんごを べんきょうします。そのあと ひていけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    zh: "今天我们先简单介绍，然后学习情绪词汇。之后学习否定形，练习两段对话，最后进行发音练习。",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu Gefühlen. Danach schauen wir uns die Verneinung an, üben zwei Dialoge und schließen mit Aussprachetraining ab.",
    en: "Today we'll start with a short introduction, then learn emotion vocabulary. After that we'll look at negation, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", zh: "介绍", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：きもち", zh: "词汇：情绪", de: "Wortschatz: Gefühle", en: "Vocabulary: Emotions" } },
      { id: "a3", translations: { ja: "ぶんぽう：ひていけい", zh: "语法：否定形", de: "Grammatik: Verneinung", en: "Grammar: Negation" } },
      { id: "a4", translations: { ja: "かいわ：ともだちを なぐさめる", zh: "对话A：安慰朋友", de: "Dialog A: Einen Freund trösten", en: "Dialogue A: Comforting a Friend" } },
      { id: "a5", translations: { ja: "かいわ：ぐあいが わるい りゆう", zh: "对话B：解释身体不适", de: "Dialog B: Erklären, dass es einem nicht gut geht", en: "Dialogue B: Explaining You're Unwell" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja4-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", zh: "热身", de: "Aufwärmen", en: "Warm-up" },
  spokenIntro: {
    ja: "はじめる まえに、すこし はなしましょう。",
    zh: "开始之前，我们先聊聊。",
    de: "Bevor wir anfangen, lass uns kurz reden.",
    en: "Before we start, let's talk a little.",
  },
  content: {
    text: {
      ja: "きょうは どんな きもちですか？",
      zh: "你今天感觉怎么样？",
      de: "Wie fühlst du dich heute?",
      en: "How are you feeling today?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja4-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：きもち", zh: "词汇：情绪", de: "Wortschatz: Gefühle", en: "Vocabulary: Emotions" },
  spokenIntro: {
    ja: "きもちに かんけいする たんごを みてみましょう。",
    zh: "我们来看一些情绪相关的词汇。",
    de: "Schauen wir uns ein paar Wörter für Gefühle an.",
    en: "Let's look at some emotion-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "きもち", zh: "感觉", de: "Gefühl", en: "feeling" } },
      { id: "v02", category: "noun", translations: { ja: "げんいん", zh: "原因", de: "Ursache, Grund", en: "cause, reason" } },
      { id: "v03", category: "noun", translations: { ja: "なみだ", zh: "泪", de: "Tränen", en: "tears" } },
      { id: "v04", category: "noun", translations: { ja: "えがお", zh: "笑脸", de: "lächelndes Gesicht", en: "smiling face" } },
      { id: "v05", category: "noun", translations: { ja: "ストレス", zh: "压力", de: "Stress", en: "stress" } },
      { id: "v06", category: "noun", translations: { ja: "しんぱいごと", zh: "担心", de: "eine Sorge", en: "a worry, concern" } },

      { id: "v07", category: "verb", translations: { ja: "なく", zh: "哭", de: "weinen", en: "to cry" } },
      { id: "v08", category: "verb", translations: { ja: "わらう", zh: "笑", de: "lachen, lächeln", en: "to laugh, smile" } },
      { id: "v09", category: "verb", translations: { ja: "おこる", zh: "生气", de: "wütend werden", en: "to get angry" } },
      { id: "v10", category: "verb", translations: { ja: "しんぱいする", zh: "担心", de: "sich sorgen", en: "to worry" } },
      { id: "v11", category: "verb", translations: { ja: "なぐさめる", zh: "安慰", de: "trösten", en: "to comfort" } },
      { id: "v12", category: "verb", translations: { ja: "おちつく", zh: "冷静", de: "sich beruhigen", en: "to calm down" } },
      { id: "v13", category: "verb", translations: { ja: "つかれる", zh: "累", de: "müde werden", en: "to get tired" } },
      { id: "v14", category: "verb", translations: { ja: "きんちょうする", zh: "紧张", de: "nervös werden", en: "to get nervous" } },
      { id: "v15", category: "verb", translations: { ja: "リラックスする", zh: "放松", de: "entspannen", en: "to relax" } },
      { id: "v16", category: "verb", translations: { ja: "がまんする", zh: "忍耐", de: "aushalten, zurückhalten", en: "to endure, hold back" } },

      { id: "v17", category: "adjective", translations: { ja: "うれしい", zh: "高兴", de: "glücklich, froh", en: "happy, glad" } },
      { id: "v18", category: "adjective", translations: { ja: "かなしい", zh: "难过", de: "traurig", en: "sad" } },
      { id: "v19", category: "adjective", translations: { ja: "さびしい", zh: "孤独", de: "einsam", en: "lonely" } },
      { id: "v20", category: "adjective", translations: { ja: "たのしい", zh: "开心", de: "lustig, angenehm", en: "fun, enjoyable" } },
      { id: "v21", category: "adjective", translations: { ja: "こわい", zh: "可怕", de: "beängstigend, ängstlich", en: "scary, afraid" } },
      { id: "v22", category: "adjective", translations: { ja: "はずかしい", zh: "尴尬", de: "peinlich berührt", en: "embarrassed" } },
      { id: "v23", category: "adjective", translations: { ja: "うらやましい", zh: "羡慕", de: "neidisch", en: "envious" } },
      { id: "v24", category: "adjective", translations: { ja: "つらい", zh: "难受", de: "schmerzhaft, schwer zu ertragen", en: "painful, hard to bear" } },
      { id: "v25", category: "adjective", translations: { ja: "ふあん", zh: "不安", de: "ängstlich, unruhig", en: "anxious, uneasy" } },
      { id: "v26", category: "adjective", translations: { ja: "らく", zh: "舒服", de: "entspannt, bequem", en: "at ease, comfortable" } },
      { id: "v27", category: "adjective", translations: { ja: "しんぱい", zh: "担心", de: "besorgt", en: "worried" } },
      { id: "v28", category: "adjective", translations: { ja: "げんき", zh: "有精神", de: "wohlauf, energisch", en: "well, energetic" } },
      { id: "v29", category: "adjective", translations: { ja: "たいへん", zh: "艰难", de: "hart, schwierig", en: "tough, difficult" } },
      { id: "v30", category: "adjective", translations: { ja: "だいじょうぶ", zh: "没关系", de: "okay, in Ordnung", en: "okay, fine" } },

      // Added after an audit found these appear in the lesson's own
      // dialogues but were missing from the vocab slide.
      { id: "v31", category: "noun", translations: { ja: "しごと", zh: "工作", de: "Arbeit, Job", en: "work, job" } },
      { id: "v32", category: "noun", translations: { ja: "たべもの", zh: "食物", de: "Essen", en: "food" } },
      { id: "v33", category: "verb", translations: { ja: "しっぱいする", zh: "失败", de: "scheitern, einen Fehler machen", en: "to fail, make a mistake" } },
      { id: "v34", category: "verb", translations: { ja: "がんばる", zh: "努力", de: "sich anstrengen, sein Bestes geben", en: "to try hard, do one's best" } },
      { id: "v35", category: "verb", translations: { ja: "おもう", zh: "想", de: "denken", en: "to think" } },
      { id: "v36", category: "verb", translations: { ja: "やすむ", zh: "休息", de: "sich ausruhen", en: "to rest" } },
      { id: "v37", category: "verb", translations: { ja: "むりを する", zh: "过度", de: "sich überanstrengen", en: "to overdo it" } },
      { id: "v38", category: "verb", translations: { ja: "きを つける", zh: "小心", de: "aufpassen, vorsichtig sein", en: "to be careful" } },
    ],
  },
};

export const grammarNegationBlock: Block = {
  id: "ja4-grammar-negation",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ひていけい", zh: "否定形", de: "Verneinung", en: "Negation" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、ひていけいの つくりかたです。",
    zh: "今天的语法是如何把句子变成否定句。",
    de: "Die heutige Grammatik ist, wie man Sätze verneint.",
    en: "Today's grammar is how to make sentences negative.",
  },
  content: {
    explanation: {
      ja: "どうしの ていねいな ひていけいは「〜ません」です。い-けいようしの ひていは「〜くない」、な-けいようしと めいしの ひていは「〜じゃない」です。かこの ひていは「〜ませんでした」に なります。",
      zh: "动词礼貌形的否定是「〜ません」。い形容词的否定是「〜くない」，な形容词和名词的否定是「〜じゃない」。动词过去形的否定是「〜ませんでした」。",
      de: "Die höfliche Verneinung eines Verbs ist 〜ません. い-Adjektive werden mit 〜くない verneint. な-Adjektive und Nomen werden mit 〜じゃない verneint. Die verneinte Vergangenheit eines Verbs wird zu 〜ませんでした.",
      en: "The polite negative of a verb is 〜ません. い-adjectives negate with 〜くない. な-adjectives and nouns negate with 〜じゃない. The past negative of a verb becomes 〜ませんでした.",
    },
    chunks: [
      { id: "g1", translations: { ja: "しんぱいしません。", zh: "我不会担心的。（动词，礼貌否定）", de: "Ich werde mir keine Sorgen machen. (Verb, höfliche Verneinung)", en: "I won't worry. (verb, polite negative)" } },
      { id: "g2", translations: { ja: "さびしくないです。", zh: "我不孤独。（い形容词否定）", de: "Ich bin nicht einsam. (い-Adjektiv, verneint)", en: "I'm not lonely. (い-adj negative)" } },
      { id: "g3", translations: { ja: "げんきじゃないです。", zh: "我状态不好。（な形容词否定）", de: "Mir geht es nicht gut. (な-Adjektiv, verneint)", en: "I'm not well. (な-adj negative)" } },
      { id: "g4", translations: { ja: "だいじょうぶじゃないです。", zh: "这样不行。（な形容词否定）", de: "Es ist nicht in Ordnung. (な-Adjektiv, verneint)", en: "It's not okay. (な-adj negative)" } },
      { id: "g5", translations: { ja: "きのう よく ねませんでした。", zh: "我昨天没睡好。（动词，过去否定）", de: "Ich habe gestern nicht gut geschlafen. (Verb, verneinte Vergangenheit)", en: "I didn't sleep well yesterday. (verb, past negative)" } },
      { id: "g6", translations: { ja: "なにも たべませんでした。", zh: "我什么都没吃。（动词，过去否定）", de: "Ich habe nichts gegessen. (Verb, verneinte Vergangenheit)", en: "I didn't eat anything. (verb, past negative)" } },
    ],
  },
};

export const dialogueComfortingBlock: Block = {
  id: "ja4-dialogue-comforting",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ともだちを なぐさめる", zh: "对话A：安慰朋友", de: "Dialog A: Einen Freund trösten", en: "Dialogue A: Comforting a Friend" },
  spokenIntro: {
    ja: "かなしい ともだちを なぐさめる かいわを ききましょう。",
    zh: "我们来听听有人安慰一位伤心的朋友。",
    de: "Hören wir uns an, wie jemand einen traurigen Freund tröstet.",
    en: "Let's listen to someone comforting an upset friend.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "だいじょうぶ？かなしそうですね。", zh: "你还好吗？看起来很难过。", de: "Geht es dir gut? Du siehst traurig aus.", en: "Are you okay? You look sad." } },
      { id: "d2", speaker: "けん", translations: { ja: "うん、あまり だいじょうぶじゃないです。", zh: "嗯，其实不太好。", de: "Ja, mir geht es nicht wirklich gut.", en: "Yeah, I'm not really okay." } },
      { id: "d3", speaker: "あい", translations: { ja: "なにが あったんですか？", zh: "发生什么事了？", de: "Was ist passiert?", en: "What happened?" } },
      { id: "d4", speaker: "けん", translations: { ja: "しごとで しっぱいしました。", zh: "我工作上出错了。", de: "Mir ist bei der Arbeit ein Fehler passiert.", en: "I made a mistake at work." } },
      { id: "d5", speaker: "あい", translations: { ja: "そうですか。それは つらいですね。", zh: "原来如此。真不容易。", de: "Verstehe. Das ist hart.", en: "I see. That's tough." } },
      { id: "d6", speaker: "けん", translations: { ja: "はずかしくて、なきたい きもちです。", zh: "我很尴尬，都想哭了。", de: "Es ist mir peinlich, und ich könnte weinen.", en: "I'm embarrassed, and I feel like crying." } },
      { id: "d7", speaker: "あい", translations: { ja: "だれでも しっぱいします。しんぱいしないで。", zh: "每个人都会犯错。别担心。", de: "Jeder macht Fehler. Mach dir keine Sorgen.", en: "Everyone makes mistakes. Don't worry." } },
      { id: "d8", speaker: "けん", translations: { ja: "ありがとう。すこし らくに なりました。", zh: "谢谢，我感觉舒服多了。", de: "Danke. Ich fühle mich schon etwas entspannter.", en: "Thank you. I feel a little more at ease." } },
      { id: "d9", speaker: "あい", translations: { ja: "いっしょに コーヒーでも のみましょう。", zh: "我们一起去喝杯咖啡吧。", de: "Lass uns zusammen einen Kaffee trinken gehen.", en: "Let's go get some coffee together." } },
      { id: "d10", speaker: "けん", translations: { ja: "いいですね。ありがとうございます。", zh: "好啊，谢谢。", de: "Das klingt gut. Danke.", en: "That sounds good. Thank you." } },
      { id: "d11", speaker: "あい", translations: { ja: "つぎは うまく いきますよ。", zh: "下次一定会顺利的。", de: "Beim nächsten Mal klappt es bestimmt.", en: "It'll go well next time." } },
      { id: "d12", speaker: "けん", translations: { ja: "そう おもいたいです。", zh: "我很想相信这一点。", de: "Das möchte ich gerne glauben.", en: "I want to believe that." } },
      { id: "d13", speaker: "あい", translations: { ja: "がんばってる ことは わかっています。", zh: "我知道你一直很努力。", de: "Ich weiß, dass du dich sehr anstrengst.", en: "I know you've been trying hard." } },
      { id: "d14", speaker: "けん", translations: { ja: "うれしいです。ありがとう。", zh: "这让我很开心。谢谢。", de: "Das macht mich glücklich. Danke.", en: "That makes me happy. Thank you." } },
    ],
  },
};

export const dialogueUnwellBlock: Block = {
  id: "ja4-dialogue-unwell",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ぐあいが わるい りゆう", zh: "对话B：解释身体不适", de: "Dialog B: Erklären, dass es einem nicht gut geht", en: "Dialogue B: Explaining You're Unwell" },
  spokenIntro: {
    ja: "ぐあいが わるい りゆうを せつめいする かいわを ききましょう。",
    zh: "我们来听听有人解释自己为什么不舒服。",
    de: "Hören wir uns an, wie jemand erklärt, warum es ihm nicht gut geht.",
    en: "Let's listen to someone explaining why they're not feeling well.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "げんきが ないですね。だいじょうぶですか？", zh: "你看起来很沮丧，还好吗？", de: "Du wirkst niedergeschlagen. Geht es dir gut?", en: "You seem down. Are you okay?" } },
      { id: "e2", speaker: "けん", translations: { ja: "あまり げんきじゃないです。", zh: "我不太舒服。", de: "Mir geht es nicht wirklich gut.", en: "I'm not really well." } },
      { id: "e3", speaker: "みか", translations: { ja: "どうしたんですか？", zh: "怎么了？", de: "Was ist los?", en: "What's wrong?" } },
      { id: "e4", speaker: "けん", translations: { ja: "きのう よく ねませんでした。", zh: "我昨天没睡好。", de: "Ich habe gestern nicht gut geschlafen.", en: "I didn't sleep well yesterday." } },
      { id: "e5", speaker: "みか", translations: { ja: "どうして ねませんでしたか？", zh: "你为什么没睡好？", de: "Warum hast du nicht geschlafen?", en: "Why didn't you sleep?" } },
      { id: "e6", speaker: "けん", translations: { ja: "しごとの ことで きんちょうしていました。", zh: "我因为工作的事很紧张。", de: "Ich war wegen der Arbeit nervös.", en: "I was nervous about work." } },
      { id: "e7", speaker: "みか", translations: { ja: "ストレスが おおいですか？", zh: "你压力很大吗？", de: "Hast du viel Stress?", en: "Do you have a lot of stress?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、さいきん ストレスが たまっています。", zh: "是的，最近压力一直在积累。", de: "Ja, in letzter Zeit baut sich viel Stress bei mir auf.", en: "Yes, I've been building up stress recently." } },
      { id: "e9", speaker: "みか", translations: { ja: "たべものは たべましたか？", zh: "你吃东西了吗？", de: "Hast du etwas gegessen?", en: "Did you eat anything?" } },
      { id: "e10", speaker: "けん", translations: { ja: "いいえ、あさから なにも たべませんでした。", zh: "没有，从早上到现在什么都没吃。", de: "Nein, ich habe seit heute Morgen nichts gegessen.", en: "No, I haven't eaten anything since morning." } },
      { id: "e11", speaker: "みか", translations: { ja: "それは よくないですよ。すこし やすんで。", zh: "那可不好。请休息一下吧。", de: "Das ist nicht gut. Ruh dich ein bisschen aus.", en: "That's not good. Please rest a little." } },
      { id: "e12", speaker: "けん", translations: { ja: "そうですね。すこし リラックスします。", zh: "你说得对，我会放松一下的。", de: "Du hast recht. Ich werde mich etwas entspannen.", en: "You're right. I'll relax a bit." } },
      { id: "e13", speaker: "みか", translations: { ja: "むりを しないで くださいね。", zh: "请不要太勉强自己。", de: "Bitte überanstreng dich nicht.", en: "Please don't push yourself too hard." } },
      { id: "e14", speaker: "けん", translations: { ja: "ありがとう。きを つけます。", zh: "谢谢，我会小心的。", de: "Danke. Ich werde vorsichtig sein.", en: "Thank you. I'll be careful." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja4-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「ません」の むせいかと、はくの リズムを れんしゅうしましょう。",
    zh: "我们来练习ません中的清化，以及日语的音拍节奏。",
    de: "Üben wir die Entstimmhaftung in ません und den moratimierten Rhythmus des Japanischen.",
    en: "Let's practice devoicing in ません, and the mora-timed rhythm of Japanese.",
  },
  content: {
    groupLabels: {
      devoice: { ja: "「ません」の むせいか（ふくしゅう）", zh: "ません中的清化（巩固，否定形专项）", de: "Entstimmhaftung in ません (vertieft, verneinungsspezifisch)", en: "Devoicing in ません (reinforced, negation-specific)" },
      mora: { ja: "はくの リズム", zh: "音拍节奏", de: "Moratimierter Rhythmus", en: "Mora-timed rhythm" },
    },
    items: [
      // Devoicing reinforced specifically with negation-grammar words,
      // directly tied to today's own grammar point rather than filler.
      { id: "de1", category: "devoice", translations: { ja: "しんぱいしません", zh: "读作[...shimasen]，す几乎不发音", de: "klingt wie [...shimasen], す fast stumm", en: "sounds like [...shimasen], す nearly silent" } },
      { id: "de2", category: "devoice", translations: { ja: "げんきじゃないです", zh: "结尾的です被清化，读作[...naides]", de: "das abschließende です entstimmt, klingt wie [...naides]", en: "final です devoiced, sounds like [...naides]" } },
      { id: "de3", category: "devoice", translations: { ja: "たべませんでした", zh: "读作[...masendeshta]", de: "klingt wie [...masendeshta]", en: "sounds like [...masendeshta]" } },
      { id: "de4", category: "devoice", translations: { ja: "すきじゃないです", zh: "开头的す被清化，读作[ski...]", de: "す am Anfang entstimmt, klingt wie [ski...]", en: "す devoiced at the start, sounds like [ski...]" } },
      // Mora-timed rhythm — new concept: Japanese beats are counted by
      // mora (roughly one kana = one beat), not by syllable the way
      // English/German are — a word can "look" short in syllables but
      // take several beats to say.
      { id: "m1", category: "mora", translations: { ja: "きょう", zh: "今天——2个音拍（きょ・う），不是1个音节", de: "heute — 2 Morae (きょ・う), nicht 1 Silbe", en: "today — 2 morae (きょ・う), not 1 syllable" } },
      { id: "m2", category: "mora", translations: { ja: "とうきょう", zh: "东京——4个音拍（と・う・きょ・う）", de: "Tokio — 4 Morae (と・う・きょ・う)", en: "Tokyo — 4 morae (と・う・きょ・う)" } },
      { id: "m3", category: "mora", translations: { ja: "がっこう", zh: "学校——4个音拍，小っ算作独立的一拍", de: "Schule — 4 Morae, das kleine っ zählt als eigener Schlag", en: "school — 4 morae, the small っ counts as its own beat" } },
      { id: "m4", category: "mora", translations: { ja: "しんぱい", zh: "担心——4个音拍，ん算作独立的一拍", de: "Sorge — 4 Morae, ん zählt als eigener Schlag", en: "worry — 4 morae, ん counts as its own beat" } },
    ],
  },
};

export const lessonJapanese4: LessonPlan = {
  id: "lesson-ja-4",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 4,
  title: { ja: "きもち", zh: "情绪", de: "Gefühle", en: "Emotions" },
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
