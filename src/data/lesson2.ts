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

export const introBlock: Block = {
  id: "l2-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 3,
  title: { de: "Willkommen", en: "Welcome", zh: "欢迎" },
  content: {
    text: {
      de: "Ich lerne Deutsch, weil ... Und du? Erzähl mir kurz, warum du Deutsch lernst.",
      en: "I'm learning German because ... And you? Tell me briefly why you're learning German.",
      zh: "我学习德语是因为……你呢？简单说说你为什么学德语。",
    },
  },
};

export const vocabObjectsBlock: Block = {
  id: "l2-vocab-objects",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 5,
  title: { de: "Gegenstände und Eigenschaften", en: "Objects and Properties", zh: "物品与性质" },
  content: {
    items: [
      { id: "v01", translations: { de: "das Buch", en: "the book", zh: "书" } },
      { id: "v02", translations: { de: "das Haus", en: "the house", zh: "房子" } },
      { id: "v03", translations: { de: "der Tisch", en: "the table", zh: "桌子" } },
      { id: "v04", translations: { de: "die Lampe", en: "the lamp", zh: "灯" } },
      { id: "v05", translations: { de: "der Stuhl", en: "the chair", zh: "椅子" } },
      { id: "v06", translations: { de: "die Uhr", en: "the clock", zh: "钟表" } },
      { id: "v07", translations: { de: "das Auto", en: "the car", zh: "汽车" } },
      { id: "v08", translations: { de: "die Tasche", en: "the bag", zh: "包" } },
      { id: "v09", translations: { de: "das Handy", en: "the phone", zh: "手机" } },
      { id: "v10", translations: { de: "der Schlüssel", en: "the key", zh: "钥匙" } },
      { id: "v11", translations: { de: "die Tür", en: "the door", zh: "门" } },
      { id: "v12", translations: { de: "der Ball", en: "the ball", zh: "球" } },
      { id: "v13", translations: { de: "das Fenster", en: "the window", zh: "窗户" } },
      { id: "v14", translations: { de: "das Fahrrad", en: "the bicycle", zh: "自行车" } },
      { id: "v15", translations: { de: "der Computer", en: "the computer", zh: "电脑" } },
      { id: "v16", translations: { de: "die Schule", en: "the school", zh: "学校" } },
      { id: "v17", translations: { de: "rot", en: "red", zh: "红色" } },
      { id: "v18", translations: { de: "groß", en: "big", zh: "大" } },
      { id: "v19", translations: { de: "blau", en: "blue", zh: "蓝色" } },
      { id: "v20", translations: { de: "klein", en: "small", zh: "小" } },
      { id: "v21", translations: { de: "grün", en: "green", zh: "绿色" } },
      { id: "v22", translations: { de: "gut", en: "good", zh: "好" } },
      { id: "v23", translations: { de: "gelb", en: "yellow", zh: "黄色" } },
      { id: "v24", translations: { de: "schlecht", en: "bad", zh: "不好" } },
      { id: "v25", translations: { de: "schwarz", en: "black", zh: "黑色" } },
      { id: "v26", translations: { de: "neu", en: "new", zh: "新" } },
      { id: "v27", translations: { de: "weiß", en: "white", zh: "白色" } },
      { id: "v28", translations: { de: "alt", en: "old", zh: "旧" } },
    ],
  },
};

export const grammarVerbsBlock: Block = {
  id: "l2-grammar-verbs",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 5,
  title: { de: "Regelmäßige Verben", en: "Regular Verbs", zh: "规则动词" },
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

// Reused from Deutsch_3.pdf "Aussprachetraining" (ei / eu-äu / soft ch minimal
// pairs) — lesson 2 has no pronunciation slide of its own.
export const pronunciationBlock: Block = {
  id: "l2-pronunciation-reused",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { de: "Aussprachetraining", en: "Pronunciation Practice", zh: "发音" },
  content: {
    items: [
      { id: "p01", translations: { de: "eins", en: "one (ei)", zh: "一" } },
      { id: "p02", translations: { de: "heute", en: "today (eu)", zh: "今天" } },
      { id: "p03", translations: { de: "ich", en: "I (soft ch)", zh: "我" } },
      { id: "p04", translations: { de: "machen", en: "to make (hard ch)", zh: "做" } },
      { id: "p05", translations: { de: "mein", en: "my (ei)", zh: "我的" } },
      { id: "p06", translations: { de: "Europa", en: "Europe (eu)", zh: "欧洲" } },
      { id: "p07", translations: { de: "nicht", en: "not (soft ch)", zh: "不" } },
      { id: "p08", translations: { de: "Nacht", en: "night (hard ch)", zh: "夜晚" } },
    ],
  },
};

export const grammarSatzstellungBlock: Block = {
  id: "l2-grammar-satzstellung",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { de: "Frage vs. Aussage", en: "Question vs. Statement", zh: "问句与陈述句" },
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
  title: { de: "Bruder Jakob", en: "Brother John", zh: "雅各弟兄" },
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
  title: { de: "Lektion 2", en: "Lesson 2", zh: "第二课" },
  blocks: [
    introBlock,
    vocabObjectsBlock,
    grammarVerbsBlock,
    grammarFragenBlock,
    pronunciationBlock,
    grammarSatzstellungBlock,
    readalongBruderJakobBlock, // the one song for this lesson
  ],
};
