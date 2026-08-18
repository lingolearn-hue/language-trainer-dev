import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 7 — per a1-master-lesson-table-v04.md row 7:
// Vocab: Clothing | Grammar: Demonstratives (this/that) | Dialogue A:
// shopping for clothes with a friend | Dialogue B: choosing an outfit
// for an event | Song: "Itsy Bitsy Spider" — v04 moved this here as the
// song's actual origin (was incorrectly a review-lesson-only song in
// v03, see the master table's own changelog); translated here since
// it's a simple, repetitive children's song like the others already
// adapted.
//
// Same 9-block shape as lessonJapanese2.ts (has a song).
//
// Grammar: the full こそあど demonstrative system — これ/それ/あれ/どれ
// (things), この/その/あの/どの (this/that + noun), covering exactly
// "this/that" per the table's own grammar slot.
//
// Pronunciation: two concepts — pitch accent reinforced again (a further
// fresh pair set) and small っ reinforced again (fresh pairs, none
// repeated from L10).
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui/Hiro — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja7-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "ふく", en: "Clothing", de: "Kleidung" },
  spokenIntro: {
    ja: "ようこそ！きょうは ふくについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about clothing.",
    de: "Willkommen! Heute lernen wir Wörter rund um Kleidung.",
  },
  content: {
    text: { ja: "だい7か — ふく", en: "Lesson 7 — Clothing", de: "Lektion 7 — Kleidung" },
  },
};

export const agendaBlock: Block = {
  id: "ja7-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda", de: "Ablauf" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから ふくの たんごを べんきょうします。そのあと こそあどを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    en: "Today we'll start with a short introduction, then learn clothing vocabulary. After that we'll look at demonstratives, practice two dialogues, and finish with pronunciation practice and a song.",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu Kleidung. Danach schauen wir uns Demonstrativpronomen an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction", de: "Einführung" } },
      { id: "a2", translations: { ja: "たんご：ふく", en: "Vocabulary: Clothing", de: "Wortschatz: Kleidung" } },
      { id: "a3", translations: { ja: "ぶんぽう：こそあど", en: "Grammar: Demonstratives", de: "Grammatik: Demonstrativpronomen" } },
      { id: "a4", translations: { ja: "かいわ：ともだちと ふくを かう", en: "Dialogue A: Shopping for Clothes", de: "Dialog A: Kleidung kaufen" } },
      { id: "a5", translations: { ja: "かいわ：ふくそうを えらぶ", en: "Dialogue B: Choosing an Outfit", de: "Dialog B: Ein Outfit wählen" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" } },
      { id: "a7", translations: { ja: "うた", en: "Song", de: "Lied" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja7-intro",
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
      ja: "きょう なにを きていますか？",
      en: "What are you wearing today?",
      de: "Was trägst du heute?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja7-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：ふく", en: "Vocabulary: Clothing", de: "Wortschatz: Kleidung" },
  spokenIntro: {
    ja: "ふくに かんけいする たんごを みてみましょう。",
    en: "Let's look at some clothing-related words.",
    de: "Schauen wir uns ein paar Wörter rund um Kleidung an.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "シャツ", en: "shirt", de: "Hemd" } },
      { id: "v02", category: "noun", translations: { ja: "ズボン", en: "pants", de: "Hose" } },
      { id: "v03", category: "noun", translations: { ja: "スカート", en: "skirt", de: "Rock" } },
      { id: "v04", category: "noun", translations: { ja: "ドレス", en: "dress", de: "Kleid" } },
      { id: "v05", category: "noun", translations: { ja: "くつ", en: "shoes", de: "Schuhe" } },
      { id: "v06", category: "noun", translations: { ja: "くつした", en: "socks", de: "Socken" } },
      { id: "v07", category: "noun", translations: { ja: "ぼうし", en: "hat", de: "Hut, Mütze" } },
      { id: "v08", category: "noun", translations: { ja: "コート", en: "coat", de: "Mantel" } },
      { id: "v09", category: "noun", translations: { ja: "セーター", en: "sweater", de: "Pullover" } },
      { id: "v10", category: "noun", translations: { ja: "てぶくろ", en: "gloves", de: "Handschuhe" } },
      { id: "v11", category: "noun", translations: { ja: "ネクタイ", en: "necktie", de: "Krawatte" } },
      { id: "v12", category: "noun", translations: { ja: "かさ", en: "umbrella", de: "Regenschirm" } },
      { id: "v13", category: "noun", translations: { ja: "サイズ", en: "size", de: "Größe" } },
      { id: "v14", category: "noun", translations: { ja: "しちゃくしつ", en: "fitting room", de: "Umkleidekabine" } },

      { id: "v15", category: "verb", translations: { ja: "きる", en: "to wear (upper body)", de: "tragen (Oberkörper)" } },
      { id: "v16", category: "verb", translations: { ja: "はく", en: "to wear (lower body, shoes)", de: "tragen (Beine, Schuhe)" } },
      { id: "v17", category: "verb", translations: { ja: "ぬぐ", en: "to take off (clothes)", de: "ausziehen" } },
      { id: "v18", category: "verb", translations: { ja: "しちゃくする", en: "to try on", de: "anprobieren" } },
      { id: "v19", category: "verb", translations: { ja: "かえる", en: "to exchange, return", de: "umtauschen" } },
      { id: "v20", category: "verb", translations: { ja: "つける", en: "to put on (accessories)", de: "anlegen (Accessoires)" } },
      { id: "v21", category: "verb", translations: { ja: "えらぶ", en: "to choose", de: "auswählen" } },
      { id: "v22", category: "verb", translations: { ja: "にあう", en: "to suit, look good on", de: "gut stehen" } },

      { id: "v23", category: "adjective", translations: { ja: "おおきい", en: "big", de: "groß" } },
      { id: "v24", category: "adjective", translations: { ja: "ちいさい", en: "small", de: "klein" } },
      { id: "v25", category: "adjective", translations: { ja: "きつい", en: "tight", de: "eng" } },
      { id: "v26", category: "adjective", translations: { ja: "ゆるい", en: "loose", de: "locker" } },
      { id: "v27", category: "adjective", translations: { ja: "はで", en: "flashy, showy", de: "auffällig" } },
      { id: "v28", category: "adjective", translations: { ja: "じみ", en: "plain, subdued", de: "schlicht" } },
      { id: "v29", category: "adjective", translations: { ja: "おしゃれ", en: "stylish", de: "modisch" } },
      { id: "v30", category: "adjective", translations: { ja: "あたたかい", en: "warm", de: "warm" } },
    ],
  },
};

export const grammarDemonstrativesBlock: Block = {
  id: "ja7-grammar-demonstratives",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "こそあど", en: "Demonstratives", de: "Demonstrativpronomen" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、こそあどの つかいかたです。",
    en: "Today's grammar is how to use the こそあど demonstrative system.",
    de: "Die heutige Grammatik ist die Verwendung des こそあど-Systems.",
  },
  content: {
    explanation: {
      ja: "「これ・それ・あれ・どれ」は もの、「この・その・あの・どの」は めいしの まえで つかいます。こ＝はなしてに ちかい、そ＝あいてに ちかい、あ＝りょうほうから とおい、ど＝しつもん です。",
      en: "これ/それ/あれ/どれ stand alone (\"this one/that one/that one over there/which one\"), while この/その/あの/どの come before a noun (\"this X/that X\"). こ- = near the speaker, そ- = near the listener, あ- = far from both, ど- = the question form.",
      de: "これ/それ/あれ/どれ stehen allein („dieses/jenes/jenes dort/welches\"), während この/その/あの/どの vor einem Nomen stehen („dieses X/jenes X\"). こ- = nah beim Sprecher, そ- = nah beim Zuhörer, あ- = weit von beiden entfernt, ど- = die Frageform.",
    },
    chunks: [
      { id: "g1", translations: { ja: "これは いくらですか？", en: "How much is this? (near the speaker)", de: "Wie viel kostet das hier? (nah beim Sprecher)" } },
      { id: "g2", translations: { ja: "それを みせてください。", en: "Please show me that. (near the listener)", de: "Bitte zeigen Sie mir das. (nah beim Zuhörer)" } },
      { id: "g3", translations: { ja: "あのシャツは すてきです。", en: "That shirt over there is nice. (far from both)", de: "Das Hemd dort drüben ist schön. (weit von beiden entfernt)" } },
      { id: "g4", translations: { ja: "どのくつが すきですか？", en: "Which shoes do you like? (question form)", de: "Welche Schuhe magst du? (Frageform)" } },
      { id: "g5", translations: { ja: "この ぼうしは わたしのです。", en: "This hat is mine.", de: "Dieser Hut ist meiner." } },
      { id: "g6", translations: { ja: "そのセーターは たかいですか？", en: "Is that sweater expensive?", de: "Ist dieser Pullover teuer?" } },
    ],
  },
};

export const dialogueShoppingBlock: Block = {
  id: "ja7-dialogue-shopping",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ともだちと ふくを かう", en: "Dialogue A: Shopping for Clothes", de: "Dialog A: Kleidung kaufen" },
  spokenIntro: {
    ja: "ともだちと いっしょに ふくを かう かいわを ききましょう。",
    en: "Let's listen to two friends shopping for clothes together.",
    de: "Hören wir uns an, wie zwei Freunde zusammen Kleidung kaufen.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "この シャツ、かわいいね。", en: "This shirt is cute.", de: "Dieses Hemd ist süß." } },
      { id: "d2", speaker: "けん", translations: { ja: "うん、いろも いいね。", en: "Yeah, the color's nice too.", de: "Ja, die Farbe ist auch schön." } },
      { id: "d3", speaker: "あい", translations: { ja: "しちゃくしても いいですか？", en: "May I try it on?", de: "Darf ich es anprobieren?" } },
      { id: "d4", speaker: "てんいん", translations: { ja: "はい、どうぞ。しちゃくしつは あちらです。", en: "Yes, please. The fitting room is over there.", de: "Ja, bitte. Die Umkleidekabine ist dort drüben." } },
      { id: "d5", speaker: "あい", translations: { ja: "どうかな？すこし きついかも。", en: "How is it? Maybe a bit tight.", de: "Wie sieht es aus? Vielleicht etwas eng." } },
      { id: "d6", speaker: "けん", translations: { ja: "うん、もう すこし おおきい サイズは ありますか？", en: "Yeah, is there a bigger size?", de: "Ja, gibt es eine größere Größe?" } },
      { id: "d7", speaker: "てんいん", translations: { ja: "はい、こちらは いかがですか？", en: "Yes, how about this one?", de: "Ja, wie wäre es mit diesem hier?" } },
      { id: "d8", speaker: "あい", translations: { ja: "あ、これは ちょうど いいです！", en: "Oh, this is just right!", de: "Oh, das passt genau!" } },
      { id: "d9", speaker: "けん", translations: { ja: "にあってるよ！", en: "It suits you!", de: "Es steht dir!" } },
      { id: "d10", speaker: "あい", translations: { ja: "ほんとう？ありがとう。", en: "Really? Thank you.", de: "Wirklich? Danke." } },
      { id: "d11", speaker: "あい", translations: { ja: "これを ください。", en: "I'll take this.", de: "Ich nehme das hier." } },
      { id: "d12", speaker: "てんいん", translations: { ja: "かしこまりました。げんきんですか、カードですか？", en: "Understood. Cash or card?", de: "Verstanden. Bar oder Karte?" } },
      { id: "d13", speaker: "あい", translations: { ja: "カードで おねがいします。", en: "Card, please.", de: "Mit Karte, bitte." } },
      { id: "d14", speaker: "けん", translations: { ja: "たのしい かいものだったね。", en: "That was fun shopping.", de: "Das war ein schönes Einkaufen." } },
    ],
  },
};

export const dialogueOutfitBlock: Block = {
  id: "ja7-dialogue-outfit",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ふくそうを えらぶ", en: "Dialogue B: Choosing an Outfit", de: "Dialog B: Ein Outfit wählen" },
  spokenIntro: {
    ja: "パーティーの ふくそうを えらぶ かいわを ききましょう。",
    en: "Let's listen to someone choosing an outfit for a party.",
    de: "Hören wir uns an, wie jemand ein Outfit für eine Party auswählt.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "こんばんの パーティーに なにを きようかな。", en: "What should I wear to tonight's party?", de: "Was soll ich zur heutigen Party anziehen?" } },
      { id: "e2", speaker: "けん", translations: { ja: "あの ドレスは どう？", en: "How about that dress?", de: "Wie wäre es mit dem Kleid dort?" } },
      { id: "e3", speaker: "みか", translations: { ja: "うーん、ちょっと はでかな。", en: "Hmm, maybe a bit flashy.", de: "Hmm, vielleicht etwas zu auffällig." } },
      { id: "e4", speaker: "けん", translations: { ja: "じゃあ、この セーターは？", en: "Then how about this sweater?", de: "Und wie wäre es mit diesem Pullover?" } },
      { id: "e5", speaker: "みか", translations: { ja: "それは カジュアルすぎるかも。", en: "That might be too casual.", de: "Der könnte zu leger sein." } },
      { id: "e6", speaker: "けん", translations: { ja: "パーティーは どんな パーティー？", en: "What kind of party is it?", de: "Was für eine Party ist es?" } },
      { id: "e7", speaker: "みか", translations: { ja: "しごとの パーティーだから、ちょっと フォーマルが いい。", en: "It's a work party, so something a bit formal is good.", de: "Es ist eine Arbeitsparty, also wäre etwas Formelleres gut." } },
      { id: "e8", speaker: "けん", translations: { ja: "じみな いろの ドレスは どう？", en: "How about a dress in a subdued color?", de: "Wie wäre es mit einem Kleid in gedeckter Farbe?" } },
      { id: "e9", speaker: "みか", translations: { ja: "いいね！あの くろい ドレスに する。", en: "Good idea! I'll go with that black dress.", de: "Gute Idee! Ich nehme das schwarze Kleid." } },
      { id: "e10", speaker: "けん", translations: { ja: "くつは どうする？", en: "What about shoes?", de: "Was ist mit Schuhen?" } },
      { id: "e11", speaker: "みか", translations: { ja: "この くろい くつが あうと おもう。", en: "I think these black shoes will go well.", de: "Ich glaube, diese schwarzen Schuhe passen gut." } },
      { id: "e12", speaker: "けん", translations: { ja: "さむいから コートも もっていって。", en: "It's cold, so bring a coat too.", de: "Es ist kalt, also nimm auch einen Mantel mit." } },
      { id: "e13", speaker: "みか", translations: { ja: "そうだね。あたたかい コートを えらぶよ。", en: "Good point. I'll choose a warm coat.", de: "Stimmt. Ich wähle einen warmen Mantel." } },
      { id: "e14", speaker: "けん", translations: { ja: "きっと すてきに なるよ！", en: "You'll definitely look great!", de: "Du wirst bestimmt toll aussehen!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja7-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" },
  spokenIntro: {
    ja: "アクセントと ちいさい「っ」を ふくしゅうしましょう。",
    en: "Let's reinforce pitch accent and the small っ.",
    de: "Vertiefen wir den Tonhöhenakzent und das kleine っ.",
  },
  content: {
    groupLabels: {
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)" },
      sokuon: { ja: "「っ」（ふくしゅう）", en: "Small っ (reinforced, new pairs)", de: "Kleines っ (vertieft, neue Paare)" },
    },
    items: [
      { id: "p1", category: "pitch", translations: { ja: "くも", en: "cloud (HL) — reinforced from L2, new sentence context", de: "Wolke (HL) — vertieft aus L2, neuer Kontext" } },
      { id: "p2", category: "pitch", translations: { ja: "にあう", en: "to suit — new word, single pitch pattern to notice", de: "gut stehen — neues Wort, einzelnes Tonmuster" } },
      { id: "p3", category: "pitch", translations: { ja: "かう", en: "to buy (LH) — reinforced, clothing context now", de: "kaufen (LH) — vertieft, jetzt im Kontext Kleidung" } },
      { id: "p4", category: "pitch", translations: { ja: "きる", en: "to wear (HL) / to cut (LH) — reinforced a third time", de: "tragen (HL) / schneiden (LH) — zum dritten Mal vertieft" } },
      { id: "s1", category: "sokuon", translations: { ja: "せかい", en: "world (no っ)", de: "Welt (kein っ)" } },
      { id: "s2", category: "sokuon", translations: { ja: "せっかい", en: "unsolicited advice (with っ)", de: "ungebetener Rat (mit っ)" } },
      { id: "s3", category: "sokuon", translations: { ja: "がか", en: "painter (no っ)", de: "Maler(in) (kein っ)" } },
      { id: "s4", category: "sokuon", translations: { ja: "がっか", en: "disappointment (with っ)", de: "Enttäuschung (mit っ)" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja7-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true,
  title: { ja: "ちいさな くも", en: "Itsy Bitsy Spider", de: "Die kleine Spinne" },
  spokenIntro: {
    ja: "さいごに、くもの うたを うたいましょう。",
    en: "To finish, let's sing a song about a little spider.",
    de: "Zum Abschluss singen wir ein Lied über eine kleine Spinne.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "ちいさな くもが といを のぼる", en: "The itsy bitsy spider climbed up the water spout", de: "Die kleine Spinne klettert die Regenrinne hoch" } },
      { id: "sg2", translations: { ja: "あめが ふって くもは おちた", en: "Down came the rain and washed the spider out", de: "Der Regen kam und spülte die Spinne herunter" } },
      { id: "sg3", translations: { ja: "おひさま でて みずが かわいた", en: "Out came the sun and dried up all the rain", de: "Die Sonne kam heraus und trocknete den Regen" } },
      { id: "sg4", translations: { ja: "ちいさな くもが また のぼる", en: "So the itsy bitsy spider climbed up again", de: "Also klettert die kleine Spinne wieder hoch" } },
    ],
  },
};

export const lessonJapanese7: LessonPlan = {
  id: "lesson-ja-7",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 7,
  title: { ja: "ふく", en: "Clothing", de: "Kleidung" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarDemonstrativesBlock,
    dialogueShoppingBlock,
    dialogueOutfitBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
