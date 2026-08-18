import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 9 — per a1-master-lesson-table-v04.md row 9:
// Vocab: Animals | Grammar: Plural formation | Dialogue A: visiting a zoo
// with a child | Dialogue B: talking about pets you have owned | Song:
// "Old MacDonald Had a Farm" — genuinely translatable, animal sounds are
// close to universal.
//
// Same 9-block shape as lessonJapanese2/7.ts (has a song).
//
// Grammar: Japanese has no regular plural marking the way German/English
// do — nouns are number-neutral by default, plurality comes from context,
// counters+numbers, or the animate-pluralizing suffix たち (limited to
// people/animals: こどもたち "children", いぬたち "dogs"). This IS the
// correct A1-level Japanese answer to "plural formation" — the absence
// of regular marking plus たち is the real teaching point, not a gap.
//
// Pronunciation: two concepts — youon (contracted sounds ゃゅょ, e.g.
// きゃ/しゅ/ちょ), introduced here for the first time, and pitch accent
// reinforced with a further fresh pair set.
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui/Hiro — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja9-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "どうぶつ", en: "Animals", de: "Tiere" },
  spokenIntro: {
    ja: "ようこそ！きょうは どうぶつについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about animals.",
    de: "Willkommen! Heute lernen wir Wörter rund um Tiere.",
  },
  content: {
    text: { ja: "だい9か — どうぶつ", en: "Lesson 9 — Animals", de: "Lektion 9 — Tiere" },
  },
};

export const agendaBlock: Block = {
  id: "ja9-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda", de: "Ablauf" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから どうぶつの たんごを べんきょうします。そのあと ふくすうけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    en: "Today we'll start with a short introduction, then learn animal vocabulary. After that we'll look at plurals, practice two dialogues, and finish with pronunciation practice and a song.",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu Tieren. Danach schauen wir uns den Plural an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction", de: "Einführung" } },
      { id: "a2", translations: { ja: "たんご：どうぶつ", en: "Vocabulary: Animals", de: "Wortschatz: Tiere" } },
      { id: "a3", translations: { ja: "ぶんぽう：ふくすうけい", en: "Grammar: Plurals", de: "Grammatik: Plural" } },
      { id: "a4", translations: { ja: "かいわ：こどもと どうぶつえんへ", en: "Dialogue A: Visiting the Zoo", de: "Dialog A: Zoobesuch" } },
      { id: "a5", translations: { ja: "かいわ：かってた ペット", en: "Dialogue B: Pets You've Had", de: "Dialog B: Frühere Haustiere" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" } },
      { id: "a7", translations: { ja: "うた", en: "Song", de: "Lied" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja9-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", en: "Warm-up", de: "Aufwärmen" },
  spokenIntro: {
    ja: "はじめる まえに、すこし はなしましょう。",
    en: "Before we start, let's talk a little.",
    de: "Bevor wir anfangen, lass uns kurz reden.",
  },
  content: {
    text: {
      ja: "どうぶつが すきですか？どんな どうぶつが すきですか？",
      en: "Do you like animals? What kind of animals do you like?",
      de: "Magst du Tiere? Welche Tiere magst du?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja9-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：どうぶつ", en: "Vocabulary: Animals", de: "Wortschatz: Tiere" },
  spokenIntro: {
    ja: "どうぶつに かんけいする たんごを みてみましょう。",
    en: "Let's look at some animal-related words.",
    de: "Schauen wir uns ein paar Wörter rund um Tiere an.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "いぬ", en: "dog", de: "Hund" } },
      { id: "v02", category: "noun", translations: { ja: "ねこ", en: "cat", de: "Katze" } },
      { id: "v03", category: "noun", translations: { ja: "とり", en: "bird", de: "Vogel" } },
      { id: "v04", category: "noun", translations: { ja: "うさぎ", en: "rabbit", de: "Kaninchen" } },
      { id: "v05", category: "noun", translations: { ja: "ぞう", en: "elephant", de: "Elefant" } },
      { id: "v06", category: "noun", translations: { ja: "ライオン", en: "lion", de: "Löwe" } },
      { id: "v07", category: "noun", translations: { ja: "さる", en: "monkey", de: "Affe" } },
      { id: "v08", category: "noun", translations: { ja: "くま", en: "bear", de: "Bär" } },
      { id: "v09", category: "noun", translations: { ja: "うま", en: "horse", de: "Pferd" } },
      { id: "v10", category: "noun", translations: { ja: "ひつじ", en: "sheep", de: "Schaf" } },
      { id: "v11", category: "noun", translations: { ja: "ぶた", en: "pig", de: "Schwein" } },
      { id: "v12", category: "noun", translations: { ja: "にわとり", en: "chicken", de: "Huhn" } },
      { id: "v13", category: "noun", translations: { ja: "きりん", en: "giraffe", de: "Giraffe" } },
      { id: "v14", category: "noun", translations: { ja: "パンダ", en: "panda", de: "Panda" } },
      { id: "v15", category: "noun", translations: { ja: "どうぶつえん", en: "zoo", de: "Zoo" } },

      { id: "v16", category: "verb", translations: { ja: "かう", en: "to keep (a pet)", de: "halten (Haustier)" } },
      { id: "v17", category: "verb", translations: { ja: "えさを やる", en: "to feed (an animal)", de: "füttern" } },
      { id: "v18", category: "verb", translations: { ja: "なつく", en: "to become attached, tame", de: "zutraulich werden" } },
      { id: "v19", category: "verb", translations: { ja: "ほえる", en: "to bark", de: "bellen" } },
      { id: "v20", category: "verb", translations: { ja: "なく", en: "to cry, make an animal sound", de: "Laute von sich geben" } },
      { id: "v21", category: "verb", translations: { ja: "そだてる", en: "to raise", de: "aufziehen" } },
      { id: "v22", category: "verb", translations: { ja: "さわる", en: "to touch", de: "berühren" } },
      { id: "v23", category: "verb", translations: { ja: "みる", en: "to look at, watch", de: "ansehen" } },

      { id: "v24", category: "adjective", translations: { ja: "かわいい", en: "cute", de: "süß" } },
      { id: "v25", category: "adjective", translations: { ja: "こわい", en: "scary", de: "gruselig" } },
      { id: "v26", category: "adjective", translations: { ja: "おとなしい", en: "gentle, docile", de: "sanft, zahm" } },
      { id: "v27", category: "adjective", translations: { ja: "げんき", en: "energetic, healthy", de: "energisch, gesund" } },
      { id: "v28", category: "adjective", translations: { ja: "おおきい", en: "big", de: "groß" } },
      { id: "v29", category: "adjective", translations: { ja: "ちいさい", en: "small", de: "klein" } },
      { id: "v30", category: "adjective", translations: { ja: "はやい", en: "fast", de: "schnell" } },
    ],
  },
};

export const grammarPluralsBlock: Block = {
  id: "ja9-grammar-plurals",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ふくすうけい", en: "Plurals", de: "Plural" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、にほんごの ふくすうの かんがえかたです。",
    en: "Today's grammar is how Japanese handles plurals.",
    de: "Die heutige Grammatik ist, wie das Japanische mit dem Plural umgeht.",
  },
  content: {
    explanation: {
      ja: "にほんごの めいしは えいごの「-s」のような きまった ふくすうけいが ありません。「いぬ」は「1ぴきの いぬ」にも「たくさんの いぬ」にも つかえます。ひとや どうぶつには「たち」を つけて ふくすうを あらわす ことも あります：こどもたち、いぬたち。",
      en: "Japanese nouns don't have a fixed plural form like English \"-s.\" いぬ (dog) can mean \"one dog\" or \"dogs\" — context or a number+counter makes it clear. For people and animals, たち can be added to explicitly show plurality: こどもたち (children), いぬたち (dogs).",
      de: "Japanische Nomen haben keine feste Pluralform wie das deutsche „-e/-en\". いぬ (Hund) kann „ein Hund\" oder „Hunde\" bedeuten — der Kontext oder eine Zahl mit Zähler macht es klar. Bei Personen und Tieren kann たち angehängt werden, um den Plural explizit zu zeigen: こどもたち (Kinder), いぬたち (Hunde).",
    },
    chunks: [
      { id: "g1", translations: { ja: "いぬが います。", en: "There is a dog. / There are dogs. (number-neutral)", de: "Es gibt einen Hund. / Es gibt Hunde. (zahlneutral)" } },
      { id: "g2", translations: { ja: "いぬが さんびき います。", en: "There are three dogs. (number+counter makes it explicit)", de: "Es gibt drei Hunde. (Zahl+Zähler macht es eindeutig)" } },
      { id: "g3", translations: { ja: "こどもたちが どうぶつを みています。", en: "The children are looking at the animals. (たち — explicit plural, people)", de: "Die Kinder schauen sich die Tiere an. (たち — expliziter Plural, Personen)" } },
      { id: "g4", translations: { ja: "いぬたちが ほえています。", en: "The dogs are barking. (たち — explicit plural, animals)", de: "Die Hunde bellen. (たち — expliziter Plural, Tiere)" } },
      { id: "g5", translations: { ja: "つくえが みっつ あります。", en: "There are three desks. (objects use number+counter, not たち)", de: "Es gibt drei Tische. (Gegenstände: Zahl+Zähler, nicht たち)" } },
      { id: "g6", translations: { ja: "せんせいたちは やさしいです。", en: "The teachers are kind. (たち on a person-noun)", de: "Die Lehrer sind freundlich. (たち bei einem Personen-Nomen)" } },
    ],
  },
};

export const dialogueZooBlock: Block = {
  id: "ja9-dialogue-zoo",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：こどもと どうぶつえんへ", en: "Dialogue A: Visiting the Zoo", de: "Dialog A: Zoobesuch" },
  spokenIntro: {
    ja: "こどもと どうぶつえんへ いく かいわを ききましょう。",
    en: "Let's listen to someone visiting the zoo with a child.",
    de: "Hören wir uns an, wie jemand mit einem Kind den Zoo besucht.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "こども", translations: { ja: "ぞうを みたい！", en: "I want to see the elephants!", de: "Ich möchte die Elefanten sehen!" } },
      { id: "d2", speaker: "おかあさん", translations: { ja: "いいよ。あっちに いるよ。", en: "Okay. They're over there.", de: "Gut. Sie sind dort drüben." } },
      { id: "d3", speaker: "こども", translations: { ja: "わあ、おおきいね！", en: "Wow, they're big!", de: "Wow, sie sind groß!" } },
      { id: "d4", speaker: "おかあさん", translations: { ja: "そうだね。つぎは ライオンを みようか。", en: "That's right. Should we see the lions next?", de: "Genau. Sollen wir als Nächstes die Löwen sehen?" } },
      { id: "d5", speaker: "こども", translations: { ja: "うん！ライオンは こわい？", en: "Yeah! Are lions scary?", de: "Ja! Sind Löwen gruselig?" } },
      { id: "d6", speaker: "おかあさん", translations: { ja: "だいじょうぶ、ガラスの むこうに いるよ。", en: "It's okay, they're behind glass.", de: "Kein Problem, sie sind hinter Glas." } },
      { id: "d7", speaker: "こども", translations: { ja: "うさぎたちも みたい。", en: "I want to see the rabbits too.", de: "Ich möchte auch die Kaninchen sehen." } },
      { id: "d8", speaker: "おかあさん", translations: { ja: "うさぎは さわっても いいんだよ。", en: "You're allowed to touch the rabbits.", de: "Du darfst die Kaninchen berühren." } },
      { id: "d9", speaker: "こども", translations: { ja: "ほんとう？やってみたい！", en: "Really? I want to try!", de: "Wirklich? Das möchte ich probieren!" } },
      { id: "d10", speaker: "おかあさん", translations: { ja: "とても おとなしい どうぶつだよ。", en: "They're very gentle animals.", de: "Es sind sehr sanfte Tiere." } },
      { id: "d11", speaker: "こども", translations: { ja: "パンダも いる？", en: "Are there pandas too?", de: "Gibt es auch Pandas?" } },
      { id: "d12", speaker: "おかあさん", translations: { ja: "うん、あの たてものの なかに いるよ。", en: "Yes, they're inside that building.", de: "Ja, sie sind in diesem Gebäude." } },
      { id: "d13", speaker: "こども", translations: { ja: "はやく みたい！", en: "I want to see them quickly!", de: "Ich möchte sie schnell sehen!" } },
      { id: "d14", speaker: "おかあさん", translations: { ja: "いこうか。きょうは たのしい ひだね。", en: "Shall we go? Today's a fun day.", de: "Sollen wir gehen? Heute ist ein schöner Tag." } },
    ],
  },
};

export const dialoguePetsBlock: Block = {
  id: "ja9-dialogue-pets",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：かってた ペット", en: "Dialogue B: Pets You've Had", de: "Dialog B: Frühere Haustiere" },
  spokenIntro: {
    ja: "むかし かっていた ペットの はなしを ききましょう。",
    en: "Let's listen to a conversation about pets people used to have.",
    de: "Hören wir uns ein Gespräch über frühere Haustiere an.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "ペットを かったことが ある？", en: "Have you ever had a pet?", de: "Hattest du schon mal ein Haustier?" } },
      { id: "e2", speaker: "けん", translations: { ja: "うん、いぬを かっていたよ。", en: "Yeah, I had a dog.", de: "Ja, ich hatte einen Hund." } },
      { id: "e3", speaker: "みか", translations: { ja: "どんな いぬだった？", en: "What kind of dog was it?", de: "Was für ein Hund war es?" } },
      { id: "e4", speaker: "けん", translations: { ja: "ちいさくて、とても げんきな いぬだったよ。", en: "It was small and a very energetic dog.", de: "Er war klein und ein sehr energischer Hund." } },
      { id: "e5", speaker: "みか", translations: { ja: "なまえは なんだったの？", en: "What was its name?", de: "Wie hieß er?" } },
      { id: "e6", speaker: "けん", translations: { ja: "ポチだったよ。みかさんは？", en: "Pochi. What about you, Mika?" , de: "Pochi. Und du, Mika?"} },
      { id: "e7", speaker: "みか", translations: { ja: "わたしは ねこを にひき かっていたの。", en: "I had two cats.", de: "Ich hatte zwei Katzen." } },
      { id: "e8", speaker: "けん", translations: { ja: "なかは よかった？", en: "Did they get along?", de: "Haben sie sich gut verstanden?" } },
      { id: "e9", speaker: "みか", translations: { ja: "うん、しまいの ねこたちだったから。", en: "Yes, because they were sister cats.", de: "Ja, weil es Schwesterkatzen waren." } },
      { id: "e10", speaker: "けん", translations: { ja: "とりを かったことは ある？", en: "Have you ever had a bird?", de: "Hattest du schon mal einen Vogel?" } },
      { id: "e11", speaker: "みか", translations: { ja: "ううん、ないよ。とりは かわいい？", en: "No, never. Are birds cute?", de: "Nein, noch nie. Sind Vögel süß?" } },
      { id: "e12", speaker: "けん", translations: { ja: "うん、とても かわいいよ。よく なくけどね。", en: "Yeah, very cute. Though they make noise a lot.", de: "Ja, sehr süß. Auch wenn sie viel Lärm machen." } },
      { id: "e13", speaker: "みか", translations: { ja: "また ペットを かいたい？", en: "Do you want another pet?", de: "Möchtest du wieder ein Haustier?" } },
      { id: "e14", speaker: "けん", translations: { ja: "うん、いつか また いぬを かいたいな。", en: "Yeah, I'd like another dog someday.", de: "Ja, irgendwann möchte ich wieder einen Hund." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja9-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" },
  spokenIntro: {
    ja: "ようおんと アクセントを れんしゅうしましょう。",
    en: "Let's practice contracted sounds (youon) and reinforce pitch accent.",
    de: "Üben wir zusammengezogene Laute (Yōon) und vertiefen den Tonhöhenakzent.",
  },
  content: {
    groupLabels: {
      youon: { ja: "ようおん（ゃゅょ）", en: "Contracted sounds (ゃゅょ)", de: "Zusammengezogene Laute (ゃゅょ)" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)" },
    },
    items: [
      // Youon — small ゃゅょ combine with the preceding kana into a
      // single mora (きゃ is one beat, not two) — a genuinely new
      // concept, not covered by any earlier lesson.
      { id: "y1", category: "youon", translations: { ja: "きゃ", en: "kya (one mora, not \"ki-ya\")", de: "kya (eine Mora, nicht „ki-ya\")" } },
      { id: "y2", category: "youon", translations: { ja: "しゃしん", en: "photo (しゃ = one mora)", de: "Foto (しゃ = eine Mora)" } },
      { id: "y3", category: "youon", translations: { ja: "しゅくだい", en: "homework (しゅ = one mora)", de: "Hausaufgabe (しゅ = eine Mora)" } },
      { id: "y4", category: "youon", translations: { ja: "びょういん", en: "hospital (びょ = one mora)", de: "Krankenhaus (びょ = eine Mora)" } },
      { id: "y5", category: "youon", translations: { ja: "ちょきん", en: "savings (ちょ = one mora)", de: "Ersparnisse (ちょ = eine Mora)" } },
      { id: "y6", category: "youon", translations: { ja: "きょう", en: "today (きょ = one mora)", de: "heute (きょ = eine Mora)" } },
      // Pitch accent — further fresh pairs.
      { id: "p1", category: "pitch", translations: { ja: "とり", en: "bird (LH) — new word, single pattern", de: "Vogel (LH) — neues Wort, einzelnes Muster" } },
      { id: "p2", category: "pitch", translations: { ja: "くま", en: "bear (LH) — new word, single pattern", de: "Bär (LH) — neues Wort, einzelnes Muster" } },
      { id: "p3", category: "pitch", translations: { ja: "なく", en: "to cry / animal sound (LH) — new word", de: "weinen / Tierlaut (LH) — neues Wort" } },
      { id: "p4", category: "pitch", translations: { ja: "かう", en: "to keep a pet (HL) / to buy (LH) — reinforced a third time, contrast now with L5", de: "ein Haustier halten (HL) / kaufen (LH) — zum dritten Mal vertieft, Kontrast zu L5" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja9-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true,
  title: { ja: "マクドナルドじいさんの のうじょう", en: "Old MacDonald Had a Farm", de: "Onkel Jörg hat einen Bauernhof" },
  spokenIntro: {
    ja: "さいごに、のうじょうの うたを うたいましょう。",
    en: "To finish, let's sing a song about a farm.",
    de: "Zum Abschluss singen wir ein Lied über einen Bauernhof.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "マクドナルドじいさんの のうじょうで", en: "Old MacDonald had a farm", de: "Onkel Jörg hat einen Bauernhof" } },
      { id: "sg2", translations: { ja: "イーアイ イーアイ オー", en: "E-I-E-I-O", de: "Ija-ija-oh" } },
      { id: "sg3", translations: { ja: "そこには いぬが いて", en: "And on that farm he had a dog", de: "Und auf dem Hof, da hat er einen Hund" } },
      { id: "sg4", translations: { ja: "イーアイ イーアイ オー", en: "E-I-E-I-O", de: "Ija-ija-oh" } },
      { id: "sg5", translations: { ja: "ワンワン ここで、ワンワン そこで", en: "With a woof-woof here and a woof-woof there", de: "Hier wau-wau, da wau-wau" } },
      { id: "sg6", translations: { ja: "マクドナルドじいさんの のうじょうで", en: "Old MacDonald had a farm", de: "Onkel Jörg hat einen Bauernhof" } },
    ],
  },
};

export const lessonJapanese9: LessonPlan = {
  id: "lesson-ja-9",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 9,
  title: { ja: "どうぶつ", en: "Animals", de: "Tiere" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarPluralsBlock,
    dialogueZooBlock,
    dialoguePetsBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
