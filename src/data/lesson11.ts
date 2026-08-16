import type { LessonPlan, Block } from "../types";

// German-from-English, Lesson 11 — per a1-master-lesson-table-v03.md row 11:
// Vocab: Travel | Grammar: Direction / location | Dialogue A: asking for
// directions to a hotel | Dialogue B: planning a trip itinerary with a
// friend | Song: "Row Row Row Your Boat" — genuinely translatable (simple,
// repetitive children's song), adapted into German rather than left as an
// open slot.
//
// Same 9-block shape as the built Japanese lessons: title -> agenda ->
// warm-up -> vocab -> grammar -> dialogue A -> dialogue B -> pronunciation
// -> song. This is the first German lesson built directly from the
// master table (Lesson 2 predates it) — uses that same unified shape
// rather than lesson2's older 3-separate-grammar-block structure, for
// consistency with every lesson built since.
//
// Grammar: wo (location, dative) vs wohin (direction, accusative) with
// two-way prepositions (in, auf, an, zu, nach) — the actual German
// equivalent of "direction/location" as a grammar point, and a genuine
// A1-level challenge (two-way prepositions taking different cases
// depending on motion vs static location).
//
// Register: Dialogue A (asking a stranger for directions) uses formal
// Sie, matching the café dialogue's own precedent in lesson2.ts.
// Dialogue B (planning a trip with a friend) uses informal du.
//
// Pronunciation: two concepts per the master table — initial consonant
// clusters (Str-/Schl-/Schw-) vs a simple single-consonant onset, and the
// SCHW-/SCHR- cluster specifically, since German's own Concept 2 is
// explicitly "SCHW-/SCHR- clusters" per the table.
// courseId: "german-beginner" — taught by Max, Jonas, or Orb-A (see
// data/trainers.ts; all three teach this course, no new trainer needed).

export const titleBlock: Block = {
  id: "de11-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { de: "Reisen", en: "Travel", zh: "旅行" },
  spokenIntro: {
    de: "Willkommen! Heute lernen wir Wörter rund ums Reisen.",
    en: "Welcome! Today we'll learn about travel.",
    zh: "欢迎！今天我们学习旅行相关的词汇。",
  },
  content: {
    text: { de: "Lektion 11 — Reisen", en: "Lesson 11 — Travel", zh: "第11课 — 旅行" },
  },
};

export const agendaBlock: Block = {
  id: "de11-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { de: "Ablauf", en: "Agenda", zh: "介绍" },
  spokenIntro: {
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zum Reisen. Danach schauen wir uns Richtung und Ort an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
    en: "Today we'll start with a short introduction, then learn travel vocabulary. After that we'll look at direction and location, practice two dialogues, and finish with pronunciation practice and a song.",
    zh: "今天我们先简单介绍，然后学习旅行词汇。之后学习方向和位置，练习两段对话，最后进行发音练习并唱一首歌。",
  },
  content: {
    items: [
      { id: "a1", translations: { de: "Einführung", en: "Introduction", zh: "介绍" } },
      { id: "a2", translations: { de: "Wortschatz: Reisen", en: "Vocabulary: Travel", zh: "词汇：旅行" } },
      { id: "a3", translations: { de: "Grammatik: Richtung und Ort", en: "Grammar: Direction and Location", zh: "语法：方向和位置" } },
      { id: "a4", translations: { de: "Dialog: Nach dem Hotel fragen", en: "Dialogue A: Asking for the Hotel", zh: "对话A：问路去酒店" } },
      { id: "a5", translations: { de: "Dialog: Eine Reise planen", en: "Dialogue B: Planning a Trip", zh: "对话B：计划旅行" } },
      { id: "a6", translations: { de: "Aussprachetraining", en: "Pronunciation Practice", zh: "发音练习" } },
      { id: "a7", translations: { de: "Lied", en: "Song", zh: "歌曲" } },
    ],
  },
};

export const introBlock: Block = {
  id: "de11-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { de: "Aufwärmen", en: "Warm-up", zh: "热身" },
  spokenIntro: {
    de: "Bevor wir anfangen, lass uns kurz reden.",
    en: "Before we start, let's talk a little.",
    zh: "开始之前，我们先聊聊。",
  },
  content: {
    text: {
      de: "Reist du gern? Wohin fährst du am liebsten?",
      en: "Do you like to travel? Where do you like to go most?",
      zh: "你喜欢旅行吗？你最喜欢去哪里？",
    },
  },
};

export const vocabBlock: Block = {
  id: "de11-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { de: "Wortschatz: Reisen", en: "Vocabulary: Travel", zh: "词汇：旅行" },
  spokenIntro: {
    de: "Schauen wir uns ein paar Wörter rund ums Reisen an.",
    en: "Let's look at some travel-related words.",
    zh: "我们来看一些旅行相关的词汇。",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { de: "die Reise", en: "trip, journey", zh: "旅行" } },
      { id: "v02", category: "noun", translations: { de: "der Zug", en: "train", zh: "火车" } },
      { id: "v03", category: "noun", translations: { de: "das Flugzeug", en: "airplane", zh: "飞机" } },
      { id: "v04", category: "noun", translations: { de: "die Fahrkarte", en: "ticket", zh: "车票" } },
      { id: "v05", category: "noun", translations: { de: "der Koffer", en: "suitcase", zh: "行李箱" } },
      { id: "v06", category: "noun", translations: { de: "das Gepäck", en: "luggage", zh: "行李" } },
      { id: "v07", category: "noun", translations: { de: "der Bahnhof", en: "train station", zh: "火车站" } },
      { id: "v08", category: "noun", translations: { de: "der Flughafen", en: "airport", zh: "机场" } },
      { id: "v09", category: "noun", translations: { de: "das Hotel", en: "hotel", zh: "酒店" } },
      { id: "v10", category: "noun", translations: { de: "die Reservierung", en: "reservation", zh: "预订" } },
      { id: "v11", category: "noun", translations: { de: "der Reisepass", en: "passport", zh: "护照" } },
      { id: "v12", category: "noun", translations: { de: "die Grenze", en: "border", zh: "边境" } },
      { id: "v13", category: "noun", translations: { de: "der Reiseführer", en: "travel guide (book or person)", zh: "旅游指南" } },
      { id: "v14", category: "noun", translations: { de: "die Ankunft", en: "arrival", zh: "到达" } },
      { id: "v15", category: "noun", translations: { de: "die Abfahrt", en: "departure", zh: "出发" } },

      { id: "v16", category: "verb", translations: { de: "reisen", en: "to travel", zh: "旅行" } },
      { id: "v17", category: "verb", translations: { de: "buchen", en: "to book", zh: "预订" } },
      { id: "v18", category: "verb", translations: { de: "abfahren", en: "to depart", zh: "出发" } },
      { id: "v19", category: "verb", translations: { de: "ankommen", en: "to arrive", zh: "到达" } },
      { id: "v20", category: "verb", translations: { de: "packen", en: "to pack", zh: "打包" } },
      { id: "v21", category: "verb", translations: { de: "reservieren", en: "to reserve", zh: "预定" } },
      { id: "v22", category: "verb", translations: { de: "übernachten", en: "to stay overnight", zh: "过夜" } },
      { id: "v23", category: "verb", translations: { de: "einchecken", en: "to check in", zh: "办理登机/入住" } },

      { id: "v24", category: "adjective", translations: { de: "schnell", en: "fast", zh: "快的" } },
      { id: "v25", category: "adjective", translations: { de: "langsam", en: "slow", zh: "慢的" } },
      { id: "v26", category: "adjective", translations: { de: "direkt", en: "direct", zh: "直接的" } },
      { id: "v27", category: "adjective", translations: { de: "voll", en: "full, crowded", zh: "拥挤的" } },
      { id: "v28", category: "adjective", translations: { de: "günstig", en: "affordable, cheap", zh: "实惠的" } },
      { id: "v29", category: "adjective", translations: { de: "pünktlich", en: "punctual, on time", zh: "准时的" } },
      { id: "v30", category: "adjective", translations: { de: "verspätet", en: "delayed", zh: "延误的" } },
    ],
  },
};

export const grammarDirectionBlock: Block = {
  id: "de11-grammar-direction",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { de: "Richtung und Ort", en: "Direction and Location", zh: "方向和位置" },
  spokenIntro: {
    de: "Die heutige Grammatik ist der Unterschied zwischen Richtung und Ort.",
    en: "Today's grammar is the difference between direction and location.",
    zh: "今天的语法是方向和位置的区别。",
  },
  content: {
    explanation: {
      de: "Bei den Wechselpräpositionen (in, an, auf, ...) fragt man mit „wo?\" nach dem Ort (Dativ) und mit „wohin?\" nach der Richtung (Akkusativ). Für Städte und Länder benutzt man meistens „nach\", für Personen oder Orte mit Artikel „zu\".",
      en: "With two-way prepositions (in, an, auf, ...), \"wo?\" asks about a static location (dative), and \"wohin?\" asks about a direction of movement (accusative). For cities and countries, \"nach\" is usually used; for people or places that take an article, \"zu\" is used instead.",
      zh: "对于双向介词（in、an、auf等），„wo?\"（哪里）询问静止的位置（第三格），„wohin?\"（去哪里）询问移动的方向（第四格）。对于城市和国家，通常用„nach\"；对于人或带冠词的地点，用„zu\"。",
    },
    chunks: [
      { id: "g1", translations: { de: "Wo ist der Bahnhof?", en: "Where is the train station? (wo — location)", zh: "火车站在哪里？（位置）" } },
      { id: "g2", translations: { de: "Wie komme ich zum Bahnhof?", en: "How do I get to the train station? (zu + dative — direction)", zh: "我怎么去火车站？（方向）" } },
      { id: "g3", translations: { de: "Ich fahre nach Berlin.", en: "I'm traveling to Berlin. (nach + city — direction)", zh: "我要去柏林。（方向）" } },
      { id: "g4", translations: { de: "Das Hotel ist in der Stadtmitte.", en: "The hotel is in the city center. (in + dative — location)", zh: "酒店在市中心。（位置）" } },
      { id: "g5", translations: { de: "Wir gehen ins Hotel.", en: "We're going into the hotel. (in + accusative — direction)", zh: "我们要进酒店。（方向）" } },
      { id: "g6", translations: { de: "Der Zug kommt um zehn Uhr an.", en: "The train arrives at ten o'clock.", zh: "火车十点到达。" } },
    ],
  },
};

export const dialogueHotelBlock: Block = {
  id: "de11-dialogue-hotel",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { de: "Dialog: Nach dem Hotel fragen", en: "Dialogue A: Asking for the Hotel", zh: "对话A：问路去酒店" },
  spokenIntro: {
    de: "Hören wir uns an, wie jemand nach dem Weg zu einem Hotel fragt.",
    en: "Let's listen to someone asking for directions to a hotel.",
    zh: "我们来听听有人问路去酒店。",
  },
  content: {
    lines: [
      { id: "d1", speaker: "Touristin", translations: { de: "Entschuldigung, wie komme ich zum Hotel Adler?", en: "Excuse me, how do I get to the Hotel Adler?", zh: "打扰一下，我怎么去阿德勒酒店？" } },
      { id: "d2", speaker: "Passant", translations: { de: "Das ist nicht weit von hier.", en: "That's not far from here.", zh: "离这里不远。" } },
      { id: "d3", speaker: "Touristin", translations: { de: "Können Sie mir den Weg zeigen?", en: "Can you show me the way?", zh: "您能告诉我怎么走吗？" } },
      { id: "d4", speaker: "Passant", translations: { de: "Gehen Sie hier geradeaus.", en: "Go straight ahead here.", zh: "从这里一直往前走。" } },
      { id: "d5", speaker: "Touristin", translations: { de: "Und dann?", en: "And then?", zh: "然后呢？" } },
      { id: "d6", speaker: "Passant", translations: { de: "An der Ampel biegen Sie links ab.", en: "Turn left at the traffic light.", zh: "在红绿灯处左转。" } },
      { id: "d7", speaker: "Touristin", translations: { de: "Links an der Ampel, verstanden.", en: "Left at the traffic light, understood.", zh: "红绿灯左转，明白了。" } },
      { id: "d8", speaker: "Passant", translations: { de: "Das Hotel ist dann auf der rechten Seite.", en: "The hotel is then on the right side.", zh: "酒店就在右边。" } },
      { id: "d9", speaker: "Touristin", translations: { de: "Wie weit ist das zu Fuß?", en: "How far is that on foot?", zh: "走路要多远？" } },
      { id: "d10", speaker: "Passant", translations: { de: "Nur fünf Minuten.", en: "Only five minutes.", zh: "只要五分钟。" } },
      { id: "d11", speaker: "Touristin", translations: { de: "Gibt es einen Bus dorthin?", en: "Is there a bus there?", zh: "有公共汽车去那里吗？" } },
      { id: "d12", speaker: "Passant", translations: { de: "Ja, aber zu Fuß ist es schneller.", en: "Yes, but it's faster on foot.", zh: "有，但走路更快。" } },
      { id: "d13", speaker: "Touristin", translations: { de: "Vielen Dank für Ihre Hilfe!", en: "Thank you very much for your help!", zh: "非常感谢您的帮助！" } },
      { id: "d14", speaker: "Passant", translations: { de: "Gern geschehen. Gute Reise!", en: "You're welcome. Have a good trip!", zh: "不客气。旅途愉快！" } },
    ],
  },
};

export const dialogueTripPlanningBlock: Block = {
  id: "de11-dialogue-trip-planning",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { de: "Dialog: Eine Reise planen", en: "Dialogue B: Planning a Trip", zh: "对话B：计划旅行" },
  spokenIntro: {
    de: "Hören wir uns an, wie zwei Freunde eine Reise planen.",
    en: "Let's listen to two friends planning a trip.",
    zh: "我们来听两个朋友计划旅行。",
  },
  content: {
    lines: [
      { id: "e1", speaker: "Lena", translations: { de: "Wohin fahren wir im Sommer?", en: "Where should we go in the summer?", zh: "我们夏天去哪里？" } },
      { id: "e2", speaker: "Tom", translations: { de: "Ich möchte nach Italien fahren.", en: "I'd like to go to Italy.", zh: "我想去意大利。" } },
      { id: "e3", speaker: "Lena", translations: { de: "Gute Idee! Fahren wir mit dem Zug oder mit dem Flugzeug?", en: "Good idea! Should we go by train or plane?", zh: "好主意！我们坐火车还是飞机？" } },
      { id: "e4", speaker: "Tom", translations: { de: "Der Zug ist günstiger, aber langsamer.", en: "The train is cheaper, but slower.", zh: "火车更便宜，但更慢。" } },
      { id: "e5", speaker: "Lena", translations: { de: "Das Flugzeug ist schneller. Ich buche die Tickets.", en: "The plane is faster. I'll book the tickets.", zh: "飞机更快。我来订票。" } },
      { id: "e6", speaker: "Tom", translations: { de: "Perfekt. Wo übernachten wir?", en: "Perfect. Where should we stay overnight?", zh: "太好了。我们住哪里？" } },
      { id: "e7", speaker: "Lena", translations: { de: "Ich reserviere ein Hotel in der Stadtmitte.", en: "I'll reserve a hotel in the city center.", zh: "我预订市中心的酒店。" } },
      { id: "e8", speaker: "Tom", translations: { de: "Wie lange bleiben wir?", en: "How long are we staying?", zh: "我们待多久？" } },
      { id: "e9", speaker: "Lena", translations: { de: "Eine Woche, denke ich.", en: "A week, I think.", zh: "我想一个星期。" } },
      { id: "e10", speaker: "Tom", translations: { de: "Ich muss noch meinen Koffer packen.", en: "I still need to pack my suitcase.", zh: "我还需要打包行李箱。" } },
      { id: "e11", speaker: "Lena", translations: { de: "Vergiss deinen Reisepass nicht!", en: "Don't forget your passport!", zh: "别忘了带护照！" } },
      { id: "e12", speaker: "Tom", translations: { de: "Keine Sorge, der ist schon im Koffer.", en: "Don't worry, it's already in the suitcase.", zh: "别担心，已经放行李箱里了。" } },
      { id: "e13", speaker: "Lena", translations: { de: "Wann fliegen wir denn genau?", en: "So when exactly do we fly?", zh: "那我们具体什么时候飞？" } },
      { id: "e14", speaker: "Tom", translations: { de: "Am fünfzehnten Juli, ganz früh am Morgen.", en: "On the fifteenth of July, very early in the morning.", zh: "七月十五日，一大早。" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "de11-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { de: "Aussprachetraining", en: "Pronunciation Practice", zh: "发音练习" },
  spokenIntro: {
    de: "Üben wir Konsonantenhäufungen am Wortanfang, besonders schw- und schr-.",
    en: "Let's practice initial consonant clusters, especially schw- and schr-.",
    zh: "我们来练习词首辅音丛，尤其是schw-和schr-。",
  },
  content: {
    groupLabels: {
      cluster: { de: "Anfangshäufung vs. einfacher Konsonant", en: "Initial cluster vs single consonant", zh: "词首辅音丛与单辅音对比" },
      schwschr: { de: "schw- / schr-", en: "schw- / schr- clusters", zh: "schw-/schr-辅音丛" },
    },
    items: [
      // Initial clusters (str-/schl-/schw-) contrasted against a plain
      // single-consonant onset — real travel-adjacent words where
      // possible, not forced.
      { id: "c1", category: "cluster", translations: { de: "Zug", en: "train (single consonant Z)", zh: "火车（单辅音Z）" } },
      { id: "c2", category: "cluster", translations: { de: "Straße", en: "street (cluster Str-)", zh: "街道（辅音丛Str-）" } },
      { id: "c3", category: "cluster", translations: { de: "Bahnhof", en: "train station (single consonant B)", zh: "火车站（单辅音B）" } },
      { id: "c4", category: "cluster", translations: { de: "Schlüssel", en: "key (cluster Schl-)", zh: "钥匙（辅音丛Schl-）" } },
      { id: "c5", category: "cluster", translations: { de: "Koffer", en: "suitcase (single consonant K)", zh: "行李箱（单辅音K）" } },
      { id: "c6", category: "cluster", translations: { de: "Sprache", en: "language (cluster Spr-)", zh: "语言（辅音丛Spr-）" } },
      // schw-/schr- specifically — the master table's own Concept 2 for
      // this lesson.
      { id: "s1", category: "schwschr", translations: { de: "schwer", en: "heavy, difficult", zh: "重的，困难的" } },
      { id: "s2", category: "schwschr", translations: { de: "schwarz", en: "black", zh: "黑色" } },
      { id: "s3", category: "schwschr", translations: { de: "schweben", en: "to float, hover", zh: "漂浮" } },
      { id: "s4", category: "schwschr", translations: { de: "schreiben", en: "to write", zh: "写" } },
      { id: "s5", category: "schwschr", translations: { de: "der Schrank", en: "cupboard, wardrobe", zh: "柜子" } },
      { id: "s6", category: "schwschr", translations: { de: "schreien", en: "to scream", zh: "尖叫" } },
    ],
  },
};

export const songBlock: Block = {
  id: "de11-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true,
  title: { de: "Rudert, rudert", en: "Row, Row, Row Your Boat", zh: "划呀划呀划船" },
  spokenIntro: {
    de: "Zum Abschluss singen wir ein Lied über ein Boot.",
    en: "To finish, let's sing a song about a boat.",
    zh: "最后我们来唱一首关于小船的歌。",
  },
  content: {
    lines: [
      { id: "sg1", translations: { de: "Rudert, rudert, rudert das Boot", en: "Row, row, row your boat", zh: "划呀划呀划船" } },
      { id: "sg2", translations: { de: "sanft den Fluss hinab.", en: "Gently down the stream.", zh: "轻轻顺流而下" } },
      { id: "sg3", translations: { de: "Fröhlich, fröhlich, fröhlich, fröhlich,", en: "Merrily, merrily, merrily, merrily,", zh: "快乐地，快乐地，快乐地，快乐地" } },
      { id: "sg4", translations: { de: "das Leben ist ein Traum.", en: "Life is but a dream.", zh: "生活就像一场梦" } },
    ],
  },
};

export const lesson11: LessonPlan = {
  id: "lesson-de-11",
  courseId: "german-beginner",
  language: "German",
  level: "A1",
  lessonNumber: 11,
  title: { de: "Reisen", en: "Travel", zh: "旅行" },
  framingLanguage: "source", // beginner course — same rule as lesson2.ts
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarDirectionBlock,
    dialogueHotelBlock,
    dialogueTripPlanningBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
