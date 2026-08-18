import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 6 — per a1-master-lesson-table-v04.md row 6:
// Vocab: Home | Grammar: Possessives | Dialogue A: giving a house tour to
// a guest | Dialogue B: arguing about whose things are whose | Song: open
// slot (none — matches the table).
//
// Same 8-block shape as the other Japanese lessons.
//
// Grammar: Japanese has no separate possessive-pronoun class the way
// German/English do — possession is just NOUN + の + NOUN (わたしの ほん
// = "my book"), which also directly covers "whose is this" exchanges,
// the exact scenario Dialogue B needs.
//
// Pronunciation: two concepts — ん before s/z/t/d/n/r (a genuinely
// different assimilation case from L5's p/b/m and k/g pairs, not a
// repeat), and pitch accent reinforced with a further fresh pair set.
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui/Hiro — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja6-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "いえ", en: "Home", de: "Zuhause" },
  spokenIntro: {
    ja: "ようこそ！きょうは いえについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about the home.",
    de: "Willkommen! Heute lernen wir Wörter rund ums Zuhause.",
  },
  content: {
    text: { ja: "だい6か — いえ", en: "Lesson 6 — Home", de: "Lektion 6 — Zuhause" },
  },
};

export const agendaBlock: Block = {
  id: "ja6-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda", de: "Ablauf" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから いえの たんごを べんきょうします。そのあと「の」を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn home vocabulary. After that we'll look at の, practice two dialogues, and finish with pronunciation practice.",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zum Zuhause. Danach schauen wir uns の an, üben zwei Dialoge und schließen mit Aussprachetraining ab.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction", de: "Einführung" } },
      { id: "a2", translations: { ja: "たんご：いえ", en: "Vocabulary: Home", de: "Wortschatz: Zuhause" } },
      { id: "a3", translations: { ja: "ぶんぽう：「の」（しょゆう）", en: "Grammar: の (Possession)", de: "Grammatik: の (Besitz)" } },
      { id: "a4", translations: { ja: "かいわ：いえを あんないする", en: "Dialogue A: House Tour", de: "Dialog A: Hausführung" } },
      { id: "a5", translations: { ja: "かいわ：だれの もの？", en: "Dialogue B: Whose Is It?", de: "Dialog B: Wem gehört das?" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja6-intro",
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
      ja: "あなたの いえは どんな いえですか？",
      en: "What is your home like?",
      de: "Wie ist dein Zuhause?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja6-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：いえ", en: "Vocabulary: Home", de: "Wortschatz: Zuhause" },
  spokenIntro: {
    ja: "いえに かんけいする たんごを みてみましょう。",
    en: "Let's look at some home-related words.",
    de: "Schauen wir uns ein paar Wörter rund ums Zuhause an.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "へや", en: "room", de: "Zimmer" } },
      { id: "v02", category: "noun", translations: { ja: "だいどころ", en: "kitchen", de: "Küche" } },
      { id: "v03", category: "noun", translations: { ja: "ふろば", en: "bathroom (bath)", de: "Badezimmer" } },
      { id: "v04", category: "noun", translations: { ja: "トイレ", en: "toilet", de: "Toilette" } },
      { id: "v05", category: "noun", translations: { ja: "にわ", en: "garden, yard", de: "Garten" } },
      { id: "v06", category: "noun", translations: { ja: "ドア", en: "door", de: "Tür" } },
      { id: "v07", category: "noun", translations: { ja: "まど", en: "window", de: "Fenster" } },
      { id: "v08", category: "noun", translations: { ja: "かぎ", en: "key", de: "Schlüssel" } },
      { id: "v09", category: "noun", translations: { ja: "でんき", en: "electricity, light", de: "Strom, Licht" } },
      { id: "v10", category: "noun", translations: { ja: "かがみ", en: "mirror", de: "Spiegel" } },
      { id: "v11", category: "noun", translations: { ja: "ベッド", en: "bed", de: "Bett" } },
      { id: "v12", category: "noun", translations: { ja: "テーブル", en: "table", de: "Tisch" } },
      { id: "v13", category: "noun", translations: { ja: "いす", en: "chair", de: "Stuhl" } },
      { id: "v14", category: "noun", translations: { ja: "ほんだな", en: "bookshelf", de: "Bücherregal" } },
      { id: "v15", category: "noun", translations: { ja: "れいぞうこ", en: "refrigerator", de: "Kühlschrank" } },

      { id: "v16", category: "verb", translations: { ja: "すむ", en: "to live (reside)", de: "wohnen" } },
      { id: "v17", category: "verb", translations: { ja: "そうじする", en: "to clean", de: "putzen" } },
      { id: "v18", category: "verb", translations: { ja: "かたづける", en: "to tidy up", de: "aufräumen" } },
      { id: "v19", category: "verb", translations: { ja: "かりる", en: "to borrow, rent", de: "leihen, mieten" } },
      { id: "v20", category: "verb", translations: { ja: "かす", en: "to lend", de: "verleihen" } },
      { id: "v21", category: "verb", translations: { ja: "もつ", en: "to have, hold", de: "besitzen, halten" } },
      { id: "v22", category: "verb", translations: { ja: "さがす", en: "to look for", de: "suchen" } },
      { id: "v23", category: "verb", translations: { ja: "なくす", en: "to lose (an object)", de: "verlieren" } },

      { id: "v24", category: "adjective", translations: { ja: "きれい", en: "clean, pretty", de: "sauber, hübsch" } },
      { id: "v25", category: "adjective", translations: { ja: "きたない", en: "dirty", de: "schmutzig" } },
      { id: "v26", category: "adjective", translations: { ja: "ひろい", en: "spacious", de: "geräumig" } },
      { id: "v27", category: "adjective", translations: { ja: "せまい", en: "narrow, cramped", de: "eng" } },
      { id: "v28", category: "adjective", translations: { ja: "あかるい", en: "bright", de: "hell" } },
      { id: "v29", category: "adjective", translations: { ja: "くらい", en: "dark", de: "dunkel" } },
      { id: "v30", category: "adjective", translations: { ja: "べんり", en: "convenient", de: "praktisch" } },
    ],
  },
};

export const grammarPossessiveBlock: Block = {
  id: "ja6-grammar-possessive",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "「の」（しょゆう）", en: "の (Possession)", de: "の (Besitz)" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、「の」で しょゆうを あらわす かたちです。",
    en: "Today's grammar is how to show possession with の.",
    de: "Die heutige Grammatik ist, wie man mit の Besitz ausdrückt.",
  },
  content: {
    explanation: {
      ja: "にほんごには えいごの「my/your」のような べつの しょゆうだいめいしが ありません。かわりに「めいし＋の＋めいし」を つかいます。だいめいしも おなじ かたちです：わたしの、あなたの、かれの。",
      en: "Japanese doesn't have a separate class of possessive pronouns like English \"my/your.\" Instead, NOUN + の + NOUN expresses possession. Pronouns work the same way: わたしの (my), あなたの (your), かれの (his).",
      de: "Im Japanischen gibt es keine eigene Klasse von Possessivpronomen wie im Deutschen „mein/dein\". Stattdessen drückt NOMEN + の + NOMEN Besitz aus. Pronomen funktionieren genauso: わたしの (mein), あなたの (dein), かれの (sein).",
    },
    chunks: [
      { id: "g1", translations: { ja: "これは わたしの ほんです。", en: "This is my book.", de: "Das ist mein Buch." } },
      { id: "g2", translations: { ja: "それは だれの かばんですか？", en: "Whose bag is that?", de: "Wessen Tasche ist das?" } },
      { id: "g3", translations: { ja: "これは わたしのです。", en: "This is mine. (の alone stands in for the noun)", de: "Das ist meins. (の allein ersetzt das Nomen)" } },
      { id: "g4", translations: { ja: "これは あなたの かぎですか？", en: "Is this your key?", de: "Ist das dein Schlüssel?" } },
      { id: "g5", translations: { ja: "いいえ、それは かれのです。", en: "No, that's his.", de: "Nein, das ist seins." } },
      { id: "g6", translations: { ja: "これは たなかさんの いえです。", en: "This is Mr. Tanaka's house.", de: "Das ist Herrn Tanakas Haus." } },
    ],
  },
};

export const dialogueHouseTourBlock: Block = {
  id: "ja6-dialogue-house-tour",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いえを あんないする", en: "Dialogue A: House Tour", de: "Dialog A: Hausführung" },
  spokenIntro: {
    ja: "おきゃくさんに いえを あんないする かいわを ききましょう。",
    en: "Let's listen to someone giving a house tour to a guest.",
    de: "Hören wir uns an, wie jemand einem Gast das Haus zeigt.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "どうぞ、はいってください。", en: "Please, come in.", de: "Bitte, kommen Sie herein." } },
      { id: "d2", speaker: "けん", translations: { ja: "おじゃまします。ひろい いえですね。", en: "Excuse me for intruding. What a spacious house.", de: "Entschuldigen Sie die Störung. Was für ein geräumiges Haus." } },
      { id: "d3", speaker: "あい", translations: { ja: "ありがとう。こちらが リビングです。", en: "Thank you. This is the living room.", de: "Danke. Hier ist das Wohnzimmer." } },
      { id: "d4", speaker: "けん", translations: { ja: "とても あかるいですね。", en: "It's very bright.", de: "Es ist sehr hell." } },
      { id: "d5", speaker: "あい", translations: { ja: "はい、まどが おおいです。こちらは だいどころです。", en: "Yes, there are a lot of windows. This is the kitchen.", de: "Ja, es gibt viele Fenster. Hier ist die Küche." } },
      { id: "d6", speaker: "けん", translations: { ja: "きれいな だいどころですね。", en: "What a clean kitchen.", de: "Was für eine saubere Küche." } },
      { id: "d7", speaker: "あい", translations: { ja: "いつも そうじしています。", en: "I always clean it.", de: "Ich putze sie immer." } },
      { id: "d8", speaker: "けん", translations: { ja: "にかいには なにが ありますか？", en: "What's upstairs?", de: "Was ist im Obergeschoss?" } },
      { id: "d9", speaker: "あい", translations: { ja: "わたしの へやと しんしつが あります。", en: "My room and the bedroom are there.", de: "Mein Zimmer und das Schlafzimmer sind dort." } },
      { id: "d10", speaker: "けん", translations: { ja: "あなたの へやを みても いいですか？", en: "May I see your room?", de: "Darf ich dein Zimmer sehen?" } },
      { id: "d11", speaker: "あい", translations: { ja: "もちろん。すこし せまいですが。", en: "Of course. Though it's a bit small.", de: "Natürlich. Auch wenn es etwas eng ist." } },
      { id: "d12", speaker: "けん", translations: { ja: "でも とても べんりそうです。", en: "But it looks very convenient.", de: "Aber es sieht sehr praktisch aus." } },
      { id: "d13", speaker: "あい", translations: { ja: "にわも あります。みますか？", en: "There's a garden too. Want to see it?", de: "Es gibt auch einen Garten. Möchtest du ihn sehen?" } },
      { id: "d14", speaker: "けん", translations: { ja: "はい、ぜひ みたいです！", en: "Yes, I'd love to see it!", de: "Ja, das möchte ich unbedingt sehen!" } },
    ],
  },
};

export const dialogueWhoseIsItBlock: Block = {
  id: "ja6-dialogue-whose",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：だれの もの？", en: "Dialogue B: Whose Is It?", de: "Dialog B: Wem gehört das?" },
  spokenIntro: {
    ja: "だれの ものかで けんかする かいわを ききましょう。",
    en: "Let's listen to a conversation arguing about whose things are whose.",
    de: "Hören wir uns ein Gespräch darüber an, wem was gehört.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "これ、だれの かぎ？", en: "Whose key is this?", de: "Wessen Schlüssel ist das?" } },
      { id: "e2", speaker: "けん", translations: { ja: "それは ぼくのだよ。", en: "That's mine.", de: "Das ist meiner." } },
      { id: "e3", speaker: "みか", translations: { ja: "ほんとう？わたしのに にてるね。", en: "Really? It looks like mine.", de: "Wirklich? Er sieht meinem ähnlich." } },
      { id: "e4", speaker: "けん", translations: { ja: "いや、ぼくのには しるしが あるよ。", en: "No, mine has a mark on it.", de: "Nein, meiner hat eine Markierung." } },
      { id: "e5", speaker: "みか", translations: { ja: "あ、ほんとうだ。ごめん。", en: "Oh, you're right. Sorry.", de: "Oh, stimmt. Entschuldigung." } },
      { id: "e6", speaker: "けん", translations: { ja: "だいじょうぶ。これは だれの かばん？", en: "It's okay. Whose bag is this?", de: "Kein Problem. Wessen Tasche ist das?" } },
      { id: "e7", speaker: "みか", translations: { ja: "それは わたしのよ。", en: "That's mine.", de: "Die ist meine." } },
      { id: "e8", speaker: "けん", translations: { ja: "じゃあ、この ほんは？", en: "Then what about this book?", de: "Und was ist mit diesem Buch?" } },
      { id: "e9", speaker: "みか", translations: { ja: "それは たぶん おとうとのよ。", en: "That's probably my brother's.", de: "Das gehört wahrscheinlich meinem Bruder." } },
      { id: "e10", speaker: "けん", translations: { ja: "なんで ここに あるの？", en: "Why is it here?", de: "Warum ist es hier?" } },
      { id: "e11", speaker: "みか", translations: { ja: "わからない。かれに きいてみる。", en: "I don't know. I'll ask him.", de: "Ich weiß nicht. Ich frage ihn." } },
      { id: "e12", speaker: "けん", translations: { ja: "この かさも かれのかな？", en: "Is this umbrella his too?", de: "Gehört dieser Regenschirm auch ihm?" } },
      { id: "e13", speaker: "みか", translations: { ja: "ううん、それは わたしたちのよ。", en: "No, that's ours.", de: "Nein, der gehört uns." } },
      { id: "e14", speaker: "けん", translations: { ja: "なるほど。ぜんぶ わかったよ。", en: "I see. Now I understand everything.", de: "Verstehe. Jetzt habe ich alles verstanden." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja6-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" },
  spokenIntro: {
    ja: "「ん」の べつの おとと、アクセントを れんしゅうしましょう。",
    en: "Let's practice another way ん changes sound, and reinforce pitch accent.",
    de: "Üben wir eine weitere Art, wie sich ん verändert, und vertiefen den Tonhöhenakzent.",
  },
  content: {
    groupLabels: {
      n_szdnr: { ja: "「ん」＋ s/z/t/d/n/r → n の おと", en: "ん before s/z/t/d/n/r → sounds like \"n\"", de: "ん vor s/z/t/d/n/r → klingt wie „n\"" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)" },
    },
    items: [
      // ん before s/z/t/d/n/r — a genuinely different assimilation case
      // from L5's p/b/m and k/g pairs, not a repeat of the same sound.
      { id: "n1", category: "n_szdnr", translations: { ja: "せんせい", en: "teacher (ん before s)", de: "Lehrer(in) (ん vor s)" } },
      { id: "n2", category: "n_szdnr", translations: { ja: "かんじ", en: "kanji (ん before j)", de: "Kanji (ん vor j)" } },
      { id: "n3", category: "n_szdnr", translations: { ja: "ほんだな", en: "bookshelf (ん before d)", de: "Bücherregal (ん vor d)" } },
      { id: "n4", category: "n_szdnr", translations: { ja: "でんわ", en: "telephone (ん before w, nasalized vowel)", de: "Telefon (ん vor w, nasalierter Vokal)" } },
      // Pitch accent — fresh pairs, none repeated from L1/L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "かう", en: "to buy (LH) — reinforced, contrast with next", de: "kaufen (LH) — vertieft, Kontrast zum nächsten" } },
      { id: "p2", category: "pitch", translations: { ja: "かみ", en: "hair (LH) / paper (HL) — reinforced from L2, new context", de: "Haare (LH) / Papier (HL) — vertieft aus L2, neuer Kontext" } },
      { id: "p3", category: "pitch", translations: { ja: "にわ", en: "garden (LH) / (counting two, unrelated homophone HL)", de: "Garten (LH) / (Zählwort „zwei\", unabhängiges Homophon HL)" } },
      { id: "p4", category: "pitch", translations: { ja: "かぎ", en: "key (LH) — new word, single pitch pattern to notice", de: "Schlüssel (LH) — neues Wort, einzelnes Tonmuster" } },
    ],
  },
};

export const lessonJapanese6: LessonPlan = {
  id: "lesson-ja-6",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 6,
  title: { ja: "いえ", en: "Home", de: "Zuhause" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarPossessiveBlock,
    dialogueHouseTourBlock,
    dialogueWhoseIsItBlock,
    pronunciationBlock,
    // No song block — Lesson 6 is an "open slot" in a1-master-lesson-table-v04.md
  ],
};
