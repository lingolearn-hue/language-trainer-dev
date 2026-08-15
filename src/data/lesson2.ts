import type { LessonPlan, Block } from "../types";

// Source: Deutsch_2.pdf ("Gegenstände und Eigenschaften", "Regelmäßige Verben",
// "Fragen", "Bruder Jakob") + one pronunciation block reused from Deutsch_3.pdf
// ("Aussprachetraining" — ei/eu/ch minimal pairs), since lesson 2 itself has no
// dedicated pronunciation slide. zh from original course PDFs; en added for the
// de/en/zh matrix validation pass.
//
// NOTE: lessons only get ONE song each. "Alle meine Entchen" and "Alle meine
// Käntchen" were generated during content-modeling but are NOT part of the
// lesson-2 block sequence — kept below as standalone exports in case they're
// useful later (e.g. reused elsewhere), just not wired into `lesson2.blocks`.

export const titleBlock: Block = {
  id: "l2-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { de: "Deutsch für Anfänger", en: "German for Beginners", zh: "德语入门" },
  spokenIntro: {
    de: "Willkommen zu deiner zweiten Deutschstunde!",
    en: "Welcome to your second German lesson!",
    zh: "欢迎来到你的第二堂德语课！",
  },
  content: {
    text: {
      de: "Ihre ersten Schritte im Deutschen — Kurs-Einführung",
      en: "Your first steps in German — Course introduction",
      zh: "德语学习的第一步——课程介绍",
    },
  },
};

export const agendaBlock: Block = {
  id: "l2-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { de: "Ablauf", en: "Agenda", zh: "介绍" },
  // Free-form spoken framing — the only narration for this slide (the
  // list itself is never read aloud verbatim, see BlockType note).
  spokenIntro: {
    de: "Heute beginnen wir mit einer kurzen Einführung. Danach erweitern wir deinen Wortschatz, schauen uns an, wie regelmäßige Verben funktionieren, üben, wie man Fragen stellt, und klären die Wortstellung im Satz. Zum Abschluss gibt es einen Dialog im Café, etwas Ausspracheübung und, wie immer, ein Lied.",
    en: "Today we'll start with a short intro. After that we'll build up your vocabulary, look at how regular verbs work, practice asking questions, and sort out word order. We'll wrap up with a café dialogue, some pronunciation practice, and finish, as always, with a song.",
    zh: "今天我们先做一个简短的介绍。然后我们会扩展词汇量，学习规则动词的用法，练习如何提问，并理清句子的语序。最后我们会有一段咖啡馆对话、一些发音练习，并像往常一样以一首歌结束。",
  },
  content: {
    items: [
      { id: "a1", translations: { de: "Einführung", en: "Introduction", zh: "介绍" } },
      { id: "a2", translations: { de: "Wortschatz", en: "Vocabulary", zh: "词汇" } },
      { id: "a3", translations: { de: "Grammatik: Verben", en: "Grammar: Verbs", zh: "语法：动词" } },
      { id: "a4", translations: { de: "Grammatik: Fragen", en: "Grammar: Questions", zh: "语法：问句" } },
      { id: "a5", translations: { de: "Grammatik: Satzstellung", en: "Grammar: Word Order", zh: "语法：语序" } },
      { id: "a6", translations: { de: "Dialog: Im Café", en: "Dialogue: At the Café", zh: "对话：在咖啡馆" } },
      { id: "a7", translations: { de: "Aussprache", en: "Pronunciation", zh: "发音" } },
      { id: "a8", translations: { de: "Lied", en: "Song", zh: "歌曲" } },
    ],
  },
};

// Source: Deutsch_2.pdf, slide 3 ("Selbstvorstellung"). The slide itself is
// German-only, no on-screen translation anywhere — "名字"/"家乡" in the PDF
// are Chinese *instructions* ("name"/"hometown") for the live blank, not a
// translation of the sentence. Left column (template) is read 3x
// (echo/shadow/silent) like any readalong. Right column (reason options)
// is narrated once per line, immediately followed by a SPOKEN translation
// in the source language (never shown as text) — then a spoken prompt
// inviting the student to choose their own reason.
export const selfIntroBlock: Block = {
  id: "l2-self-intro",
  type: "selfIntro",
  displayMode: "face",
  estimatedMinutes: 4,
  title: { de: "Selbstvorstellung", en: "Self-Introduction", zh: "自我介绍" },
  spokenIntro: {
    de: "Bevor wir anfangen, stellen wir uns kurz vor.",
    en: "Before we start, let's introduce ourselves briefly.",
    zh: "在开始之前，我们先简单地自我介绍一下。",
  },
  content: {
    template: [
      { id: "si1", translations: { de: "Guten Tag!" } },
      { id: "si2", translations: { de: "Ich bin [Name]." } },
      { id: "si3", translations: { de: "Ich komme aus [Heimatort]." } },
      { id: "si4", translations: { de: "[Heimatort] ist in China." } },
      { id: "si5", translations: { de: "Ich spreche Chinesisch." } },
      { id: "si6", translations: { de: "Ich spreche auch Deutsch." } },
    ],
    optionsIntro: {
      de: "Ich lerne Deutsch, weil ...",
      en: "I'm learning German because ...",
      zh: "我学习德语是因为……",
    },
    options: [
      {
        id: "so1",
        translations: { de: "... ich Philosophie mag.", en: "...I like philosophy.", zh: "……我喜欢哲学。" },
      },
      {
        id: "so2",
        translations: { de: "... ich Deutschland mag.", en: "...I like Germany.", zh: "……我喜欢德国。" },
      },
      {
        id: "so3",
        translations: { de: "... ich deutsche Musik mag.", en: "...I like German music.", zh: "……我喜欢德国音乐。" },
      },
      {
        id: "so4",
        translations: { de: "... ich deutsche Autos mag.", en: "...I like German cars.", zh: "……我喜欢德国汽车。" },
      },
      {
        id: "so5",
        translations: { de: "... ich Sprachen mag.", en: "...I like languages.", zh: "……我喜欢语言。" },
      },
      {
        id: "so6",
        translations: {
          de: "... ich in Deutschland arbeiten möchte.",
          en: "...I want to work in Germany.",
          zh: "……我想在德国工作。",
        },
      },
      {
        id: "so7",
        translations: {
          de: "... ich in Deutschland studieren möchte.",
          en: "...I want to study in Germany.",
          zh: "……我想在德国留学。",
        },
      },
    ],
    choosePrompt: {
      de: "Und du? Du kannst jetzt deinen eigenen Grund wählen.",
      en: "And you? You can now choose your own reason.",
      zh: "你呢？现在你可以选择你自己的理由了。",
    },
  },
};

export const vocabObjectsBlock: Block = {
  id: "l2-vocab-objects",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 5,
  title: { de: "Wortschatz", en: "Vocabulary", zh: "词汇" },
  spokenIntro: {
    de: "Jetzt schauen wir uns wichtige Wörter an: Nomen, Verben und Adjektive.",
    en: "Now let's look at some important words: nouns, verbs, and adjectives.",
    zh: "现在我们来看一些重要的词：名词、动词和形容词。",
  },
  content: {
    items: [
      // Nouns (16) — "Gegenstände und Eigenschaften"
      { id: "v01", category: "noun", translations: { de: "das Buch", en: "the book", zh: "书" } },
      { id: "v02", category: "noun", translations: { de: "das Haus", en: "the house", zh: "房子" } },
      { id: "v03", category: "noun", translations: { de: "der Tisch", en: "the table", zh: "桌子" } },
      { id: "v04", category: "noun", translations: { de: "die Lampe", en: "the lamp", zh: "灯" } },
      { id: "v05", category: "noun", translations: { de: "der Stuhl", en: "the chair", zh: "椅子" } },
      { id: "v06", category: "noun", translations: { de: "die Uhr", en: "the clock", zh: "钟表" } },
      { id: "v07", category: "noun", translations: { de: "das Auto", en: "the car", zh: "汽车" } },
      { id: "v08", category: "noun", translations: { de: "die Tasche", en: "the bag", zh: "包" } },
      { id: "v09", category: "noun", translations: { de: "das Handy", en: "the phone", zh: "手机" } },
      { id: "v10", category: "noun", translations: { de: "der Schlüssel", en: "the key", zh: "钥匙" } },
      { id: "v11", category: "noun", translations: { de: "die Tür", en: "the door", zh: "门" } },
      { id: "v12", category: "noun", translations: { de: "der Ball", en: "the ball", zh: "球" } },
      { id: "v13", category: "noun", translations: { de: "das Fenster", en: "the window", zh: "窗户" } },
      { id: "v14", category: "noun", translations: { de: "das Fahrrad", en: "the bicycle", zh: "自行车" } },
      { id: "v15", category: "noun", translations: { de: "der Computer", en: "the computer", zh: "电脑" } },
      { id: "v16", category: "noun", translations: { de: "die Schule", en: "the school", zh: "学校" } },
      // Verbs (10) — "Regelmäßige Verben" + Bruder Jakob / Alle meine Entchen
      { id: "v17", category: "verb", translations: { de: "lernen", en: "to learn", zh: "学习" } },
      { id: "v18", category: "verb", translations: { de: "arbeiten", en: "to work", zh: "工作" } },
      { id: "v19", category: "verb", translations: { de: "machen", en: "to make/do", zh: "做" } },
      { id: "v20", category: "verb", translations: { de: "wohnen", en: "to live (reside)", zh: "居住" } },
      { id: "v21", category: "verb", translations: { de: "spielen", en: "to play", zh: "玩" } },
      { id: "v22", category: "verb", translations: { de: "kommen", en: "to come", zh: "来" } },
      { id: "v23", category: "verb", translations: { de: "schwimmen", en: "to swim", zh: "游泳" } },
      { id: "v24", category: "verb", translations: { de: "fliegen", en: "to fly", zh: "飞" } },
      { id: "v25", category: "verb", translations: { de: "finden", en: "to find", zh: "找到" } },
      { id: "v26", category: "verb", translations: { de: "hören", en: "to hear", zh: "听见" } },
      // Adjectives (12)
      { id: "v27", category: "adjective", translations: { de: "rot", en: "red", zh: "红色" } },
      { id: "v28", category: "adjective", translations: { de: "groß", en: "big", zh: "大" } },
      { id: "v29", category: "adjective", translations: { de: "blau", en: "blue", zh: "蓝色" } },
      { id: "v30", category: "adjective", translations: { de: "klein", en: "small", zh: "小" } },
      { id: "v31", category: "adjective", translations: { de: "grün", en: "green", zh: "绿色" } },
      { id: "v32", category: "adjective", translations: { de: "gut", en: "good", zh: "好" } },
      { id: "v33", category: "adjective", translations: { de: "gelb", en: "yellow", zh: "黄色" } },
      { id: "v34", category: "adjective", translations: { de: "schlecht", en: "bad", zh: "不好" } },
      { id: "v35", category: "adjective", translations: { de: "schwarz", en: "black", zh: "黑色" } },
      { id: "v36", category: "adjective", translations: { de: "neu", en: "new", zh: "新" } },
      { id: "v37", category: "adjective", translations: { de: "weiß", en: "white", zh: "白色" } },
      { id: "v38", category: "adjective", translations: { de: "alt", en: "old", zh: "旧" } },
    ],
  },
};

export const grammarVerbsBlock: Block = {
  id: "l2-grammar-verbs",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 5,
  title: { de: "Regelmäßige Verben", en: "Regular Verbs", zh: "规则动词" },
  spokenIntro: {
    de: "Sehen wir uns an, wie regelmäßige Verben konjugiert werden.",
    en: "Let's look at how regular verbs are conjugated.",
    zh: "我们来看看规则动词是如何变位的。",
  },
  content: {
    explanation: {
      de: "Regelmäßige Verben ändern die Endung je nach Person, der Wortstamm bleibt gleich.",
      en: "Regular verbs change their ending depending on the person; the stem stays the same.",
      zh: "规则动词的词干不变，词尾根据人称变化。",
    },
    chunks: [
      { id: "g1", translations: { de: "ich lerne", en: "I learn", zh: "我学习" } },
      { id: "g2", translations: { de: "du lernst", en: "you learn", zh: "你学习" } },
      { id: "g3", translations: { de: "er/sie/es lernt", en: "he/she/it learns", zh: "他/她/它学习" } },
      { id: "g4", translations: { de: "wir lernen", en: "we learn", zh: "我们学习" } },
      { id: "g5", translations: { de: "ihr lernt", en: "you (pl.) learn", zh: "你们学习" } },
      { id: "g6", translations: { de: "sie/Sie lernen", en: "they/you (formal) learn", zh: "他们/您学习" } },
      { id: "g7", translations: { de: "Ich lerne Deutsch.", en: "I am learning German.", zh: "我学习德语。" } },
      { id: "g8", translations: { de: "Wir lernen Deutsch.", en: "We are learning German.", zh: "我们学习德语。" } },
      { id: "g9", translations: { de: "Ich wohne in China.", en: "I live in China.", zh: "我住在中国。" } },
    ],
  },
};

export const grammarFragenBlock: Block = {
  id: "l2-grammar-fragen",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 5,
  title: { de: "Fragen", en: "Questions", zh: "问句" },
  spokenIntro: {
    de: "Wie bildet man im Deutschen eine Ja-Nein-Frage?",
    en: "How do you form a yes-no question in German?",
    zh: "德语中如何构成是非问句？",
  },
  content: {
    explanation: {
      de: "Ja/Nein-Fragen: das Verb steht am Satzanfang, vor dem Subjekt.",
      en: "Yes/no questions: the verb goes first, before the subject.",
      zh: "是非问句：动词放在句首，主语之后。",
    },
    chunks: [
      { id: "f1", translations: { de: "Du bist Student. → Bist du Student?", en: "You are a student. → Are you a student?", zh: "你是学生。→ 你是学生吗？" } },
      { id: "f2", translations: { de: "Du kommst aus China. → Kommst du aus China?", en: "You come from China. → Do you come from China?", zh: "你来自中国。→ 你来自中国吗？" } },
      { id: "f3", translations: { de: "Du sprichst Deutsch. → Sprichst du Deutsch?", en: "You speak German. → Do you speak German?", zh: "你说德语。→ 你说德语吗？" } },
      { id: "f4", translations: { de: "Du lernst Deutsch. → Lernst du Deutsch?", en: "You learn German. → Do you learn German?", zh: "你学习德语。→ 你学习德语吗？" } },
      { id: "f5", translations: { de: "Das Auto ist neu. → Ist das Auto neu?", en: "The car is new. → Is the car new?", zh: "这辆车是新的。→ 这辆车是新的吗？" } },
    ],
  },
};

// Reused from Deutsch_3.pdf "Aussprachetraining" (page 4/14) — lesson 2 has
// no pronunciation slide of its own. Full slide content, all 4 sound-group
// columns as printed: ei / eu-äu / soft ch (ich-Laut) / hard ch (ach-Laut),
// ~15 words each, each with its zh translation from the source PDF; en
// added for the matrix.
export const pronunciationBlock: Block = {
  id: "l2-pronunciation-reused",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { de: "Aussprachetraining", en: "Pronunciation Practice", zh: "发音" },
  spokenIntro: {
    de: "Üben wir jetzt ein paar knifflige Laute.",
    en: "Let's practice a few tricky sounds now.",
    zh: "现在我们来练习一些不容易发的音。",
  },
  content: {
    groupLabels: {
      ei: { de: "ei", en: "\"ei\" sound", zh: "ei 音" },
      eu: { de: "eu / äu", en: "\"eu/äu\" sound", zh: "eu/äu 音" },
      ch_soft: { de: "weiches ch (ich-Laut)", en: "soft ch (ich-sound)", zh: "软 ch（ich 音）" },
      ch_hard: { de: "hartes ch (ach-Laut)", en: "hard ch (ach-sound)", zh: "硬 ch（ach 音）" },
    },
    items: [
      // ei
      { id: "p-ei-01", category: "ei", translations: { de: "eins", en: "one", zh: "一" } },
      { id: "p-ei-02", category: "ei", translations: { de: "zwei", en: "two", zh: "二" } },
      { id: "p-ei-03", category: "ei", translations: { de: "drei", en: "three", zh: "三" } },
      { id: "p-ei-04", category: "ei", translations: { de: "nein", en: "no", zh: "不" } },
      { id: "p-ei-05", category: "ei", translations: { de: "mein", en: "my", zh: "我的" } },
      { id: "p-ei-06", category: "ei", translations: { de: "dein", en: "your", zh: "你的" } },
      { id: "p-ei-07", category: "ei", translations: { de: "sein", en: "to be / his", zh: "是" } },
      { id: "p-ei-08", category: "ei", translations: { de: "heiß", en: "hot", zh: "热的" } },
      { id: "p-ei-09", category: "ei", translations: { de: "weiß", en: "white", zh: "白色的" } },
      { id: "p-ei-10", category: "ei", translations: { de: "klein", en: "small", zh: "小的" } },
      { id: "p-ei-11", category: "ei", translations: { de: "bleiben", en: "to stay", zh: "停留" } },
      { id: "p-ei-12", category: "ei", translations: { de: "arbeiten", en: "to work", zh: "工作" } },
      { id: "p-ei-13", category: "ei", translations: { de: "Reise", en: "trip", zh: "旅行" } },
      { id: "p-ei-14", category: "ei", translations: { de: "Fleisch", en: "meat", zh: "肉" } },
      { id: "p-ei-15", category: "ei", translations: { de: "Zeit", en: "time", zh: "时间" } },
      // eu / äu
      { id: "p-eu-01", category: "eu", translations: { de: "heute", en: "today", zh: "今天" } },
      { id: "p-eu-02", category: "eu", translations: { de: "Leute", en: "people", zh: "人们" } },
      { id: "p-eu-03", category: "eu", translations: { de: "Freund", en: "friend", zh: "朋友" } },
      { id: "p-eu-04", category: "eu", translations: { de: "Europa", en: "Europe", zh: "欧洲" } },
      { id: "p-eu-05", category: "eu", translations: { de: "neu", en: "new", zh: "新的" } },
      { id: "p-eu-06", category: "eu", translations: { de: "teuer", en: "expensive", zh: "昂贵的" } },
      { id: "p-eu-07", category: "eu", translations: { de: "Häuser", en: "houses", zh: "房屋（复数）" } },
      { id: "p-eu-08", category: "eu", translations: { de: "Bäume", en: "trees", zh: "树木（复数）" } },
      { id: "p-eu-09", category: "eu", translations: { de: "träumen", en: "to dream", zh: "做梦" } },
      { id: "p-eu-10", category: "eu", translations: { de: "Feuer", en: "fire", zh: "火" } },
      { id: "p-eu-11", category: "eu", translations: { de: "euer", en: "your (pl.)", zh: "你们的" } },
      { id: "p-eu-12", category: "eu", translations: { de: "neun", en: "nine", zh: "九" } },
      { id: "p-eu-13", category: "eu", translations: { de: "Zeug", en: "stuff", zh: "东西" } },
      { id: "p-eu-14", category: "eu", translations: { de: "Freude", en: "joy", zh: "快乐" } },
      { id: "p-eu-15", category: "eu", translations: { de: "Deutsch", en: "German", zh: "德语" } },
      // soft ch (ich-Laut)
      { id: "p-chs-01", category: "ch_soft", translations: { de: "ich", en: "I", zh: "我" } },
      { id: "p-chs-02", category: "ch_soft", translations: { de: "mich", en: "me (acc.)", zh: "我（宾格）" } },
      { id: "p-chs-03", category: "ch_soft", translations: { de: "dich", en: "you (acc.)", zh: "你（宾格）" } },
      { id: "p-chs-04", category: "ch_soft", translations: { de: "sich", en: "oneself", zh: "自己" } },
      { id: "p-chs-05", category: "ch_soft", translations: { de: "nicht", en: "not", zh: "不" } },
      { id: "p-chs-06", category: "ch_soft", translations: { de: "richtig", en: "correct", zh: "正确的" } },
      { id: "p-chs-07", category: "ch_soft", translations: { de: "wichtig", en: "important", zh: "重要的" } },
      { id: "p-chs-08", category: "ch_soft", translations: { de: "Bücher", en: "books", zh: "书（复数）" } },
      { id: "p-chs-09", category: "ch_soft", translations: { de: "Mädchen", en: "girl", zh: "女孩" } },
      { id: "p-chs-10", category: "ch_soft", translations: { de: "welche", en: "which", zh: "哪一个" } },
      { id: "p-chs-11", category: "ch_soft", translations: { de: "manche", en: "some", zh: "一些" } },
      { id: "p-chs-12", category: "ch_soft", translations: { de: "China", en: "China", zh: "中国" } },
      { id: "p-chs-13", category: "ch_soft", translations: { de: "Chemie", en: "chemistry", zh: "化学" } },
      { id: "p-chs-14", category: "ch_soft", translations: { de: "Kirche", en: "church", zh: "教堂" } },
      // hard ch (ach-Laut)
      { id: "p-chh-01", category: "ch_hard", translations: { de: "machen", en: "to make/do", zh: "做" } },
      { id: "p-chh-02", category: "ch_hard", translations: { de: "Nacht", en: "night", zh: "夜晚" } },
      { id: "p-chh-03", category: "ch_hard", translations: { de: "Bach", en: "stream", zh: "小河" } },
      { id: "p-chh-04", category: "ch_hard", translations: { de: "lachen", en: "to laugh", zh: "笑" } },
      { id: "p-chh-05", category: "ch_hard", translations: { de: "Sache", en: "thing", zh: "事情" } },
      { id: "p-chh-06", category: "ch_hard", translations: { de: "Sprache", en: "language", zh: "语言" } },
      { id: "p-chh-07", category: "ch_hard", translations: { de: "Buch", en: "book", zh: "书" } },
      { id: "p-chh-08", category: "ch_hard", translations: { de: "noch", en: "still", zh: "还" } },
      { id: "p-chh-09", category: "ch_hard", translations: { de: "auch", en: "also", zh: "也" } },
      { id: "p-chh-10", category: "ch_hard", translations: { de: "Koch", en: "cook", zh: "厨师" } },
      { id: "p-chh-11", category: "ch_hard", translations: { de: "Tochter", en: "daughter", zh: "女儿" } },
      { id: "p-chh-12", category: "ch_hard", translations: { de: "Woche", en: "week", zh: "星期" } },
      { id: "p-chh-13", category: "ch_hard", translations: { de: "Loch", en: "hole", zh: "洞" } },
      { id: "p-chh-14", category: "ch_hard", translations: { de: "suchen", en: "to search", zh: "寻找" } },
      { id: "p-chh-15", category: "ch_hard", translations: { de: "brauchen", en: "to need", zh: "需要" } },
    ],
  },
};

// Reused from Deutsch_3.pdf "Dialog: Im Café" — lesson 2 has no dialogue of
// its own (only lessons 3+ do), so this is borrowed to validate that the
// `readalong` block type genuinely covers dialogue content, not just songs.
// zh from the original PDF; en added for the matrix.
export const dialogueCafeBlock: Block = {
  id: "l2-dialogue-cafe-reused",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { de: "Dialog: Im Café", en: "Dialogue: At the Café", zh: "咖啡馆里" },
  spokenIntro: {
    de: "Hören wir uns ein Gespräch im Café an.",
    en: "Let's listen to a conversation at a café.",
    zh: "我们来听一段咖啡馆里的对话。",
  },
  content: {
    lines: [
      { id: "c1", speaker: "Kellner", translations: { de: "Guten Tag!", en: "Good day!", zh: "你好！" } },
      { id: "c2", speaker: "Gast A", translations: { de: "Guten Tag!", en: "Good day!", zh: "你好！" } },
      { id: "c3", speaker: "Kellner", translations: { de: "Was möchten Sie?", en: "What would you like?", zh: "您想要什么？" } },
      { id: "c4", speaker: "Gast A", translations: { de: "Ich möchte einen Kaffee, bitte.", en: "I'd like a coffee, please.", zh: "我要一杯咖啡，谢谢。" } },
      { id: "c5", speaker: "Kellner", translations: { de: "Mit Milch und Zucker?", en: "With milk and sugar?", zh: "加牛奶和糖吗？" } },
      { id: "c6", speaker: "Gast A", translations: { de: "Ja, mit Milch und Zucker.", en: "Yes, with milk and sugar.", zh: "是的，加牛奶和糖。" } },
      { id: "c7", speaker: "Kellner", translations: { de: "Und Sie?", en: "And you?", zh: "您呢？" } },
      { id: "c8", speaker: "Gast B", translations: { de: "Ich möchte einen Tee.", en: "I'd like a tea.", zh: "我要一杯茶。" } },
      { id: "c9", speaker: "Kellner", translations: { de: "Schwarz oder grün?", en: "Black or green?", zh: "红茶还是绿茶？" } },
      { id: "c10", speaker: "Gast B", translations: { de: "Schwarz, bitte.", en: "Black, please.", zh: "红茶，谢谢。" } },
      { id: "c11", speaker: "Kellner", translations: { de: "Möchten Sie auch einen Kuchen?", en: "Would you also like some cake?", zh: "您还要蛋糕吗？" } },
      { id: "c12", speaker: "Gast A", translations: { de: "Ja, ein Stück Apfelkuchen, bitte.", en: "Yes, one piece of apple cake, please.", zh: "好的，请给我一块苹果蛋糕。" } },
      { id: "c13", speaker: "Kellner", translations: { de: "Kommt sofort!", en: "Coming right up!", zh: "马上就来！" } },
      { id: "c14", speaker: "Gast B", translations: { de: "Die Rechnung, bitte.", en: "The bill, please.", zh: "请给我账单。" } },
    ],
  },
};

export const grammarSatzstellungBlock: Block = {
  id: "l2-grammar-satzstellung",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { de: "Frage vs. Aussage", en: "Question vs. Statement", zh: "问句与陈述句" },
  spokenIntro: {
    de: "Ein kleiner philosophischer Gedanke von Immanuel Kant zum Abschluss.",
    en: "A small philosophical thought from Immanuel Kant to wrap up.",
    zh: "最后来看一个来自康德的小小哲学思考。",
  },
  content: {
    explanation: {
      de: "Frage: Verb + Subjekt. Aussage: Subjekt + Verb.",
      en: "Question: verb + subject. Statement: subject + verb.",
      zh: "问句：动词 + 主语。陈述句：主语 + 动词。",
    },
    chunks: [
      { id: "s1", translations: { de: "Sollen alle Menschen immer schnell Auto fahren?", en: "Should everyone always drive fast?", zh: "所有人都应该总是开快车吗？" } },
      { id: "s2", translations: { de: "Also fahre ich langsam.", en: "So I drive slowly.", zh: "所以我开得慢。" } },
    ],
  },
};

export const readalongBruderJakobBlock: Block = {
  id: "l2-readalong-bruderjakob",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 10,
  isSong: true, // see types/index.ts — explicit flag, not positional inference
  title: { de: "Bruder Jakob", en: "Brother John", zh: "雅各弟兄" },
  spokenIntro: {
    de: "Zum Schluss singen wir gemeinsam ein Lied.",
    en: "To finish, let's sing a song together.",
    zh: "最后，让我们一起唱首歌。",
  },
  content: {
    lines: [
      { id: "r1", translations: { de: "Bruder Jakob, Bruder Jakob,", en: "Brother John, Brother John,", zh: "雅各弟兄，雅各弟兄，" } },
      { id: "r2", translations: { de: "schläfst du noch?", en: "are you sleeping?", zh: "你还在睡觉吗？" } },
      { id: "r3", translations: { de: "schläfst du noch?", en: "are you sleeping?", zh: "你还在睡觉吗？" } },
      { id: "r4", translations: { de: "Hörst du nicht die Glocken?", en: "Don't you hear the bells?", zh: "你没听见钟声吗？" } },
      { id: "r5", translations: { de: "Ding, dang, dong.", en: "Ding, dang, dong.", zh: "叮，当，咚。" } },
      { id: "r6", translations: { de: "Ding, dang, dong.", en: "Ding, dang, dong.", zh: "叮，当，咚。" } },
    ],
  },
};

// --- Generated but NOT used in lesson2.blocks (kept for possible reuse) ---

export const readalongEntchenBlock: Block = {
  id: "l2-readalong-entchen",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 10,
  title: { de: "Alle meine Entchen", en: "All My Little Ducklings", zh: "我的小鸭子们" },
  content: {
    lines: [
      { id: "e1", translations: { de: "Alle meine Entchen", en: "All my little ducklings", zh: "所有的小鸭子" } },
      { id: "e2", translations: { de: "schwimmen auf dem See,", en: "swim on the lake,", zh: "在湖上游泳，" } },
      { id: "e3", translations: { de: "schwimmen auf dem See,", en: "swim on the lake,", zh: "在湖上游泳，" } },
      { id: "e4", translations: { de: "Köpfchen in das Wasser,", en: "little heads in the water,", zh: "小脑袋伸进水里，" } },
      { id: "e5", translations: { de: "Schwänzchen in die Höh'.", en: "little tails up in the air.", zh: "小尾巴翘向天空。" } },
    ],
  },
};

export const readalongKantchenBlock: Block = {
  id: "l2-readalong-kantchen",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 8,
  title: { de: "Alle meine Käntchen", en: "All My Little Kants", zh: "我的小康德们" },
  content: {
    lines: [
      { id: "k1", translations: { de: "Alle meine Käntchen", en: "All my little Kants", zh: "所有的小康德们" } },
      { id: "k2", translations: { de: "denken Tag und Nacht,", en: "think day and night,", zh: "日夜思考，" } },
      { id: "k3", translations: { de: "denken Tag und Nacht,", en: "think day and night,", zh: "日夜思考，" } },
      { id: "k4", translations: { de: "\"Wär's eine gute Sache,", en: "\"Would it be a good thing,", zh: "“这是否是一件好事，" } },
      { id: "k5", translations: { de: "wenn das jeder macht?\"", en: "if everyone did that?\"", zh: "如果人人都这么做？”" } },
    ],
  },
};

export const lesson2: LessonPlan = {
  id: "lesson-2",
  courseId: "german-beginner",
  language: "German",
  level: "A1",
  lessonNumber: 2,
  title: { de: "Lektion 2", en: "Lesson 2", zh: "第二课" },
  framingLanguage: "source", // beginner course — trainer framing lines spoken in the student's own language
  blocks: [
    titleBlock,
    agendaBlock,
    selfIntroBlock,
    vocabObjectsBlock,
    grammarVerbsBlock,
    grammarFragenBlock,
    grammarSatzstellungBlock,
    dialogueCafeBlock, // reused from Deutsch_3.pdf — validates readalong-as-dialogue
    pronunciationBlock, // reused from Deutsch_3.pdf — not native to lesson 2
    readalongBruderJakobBlock, // song always closes the lesson
  ],
};
