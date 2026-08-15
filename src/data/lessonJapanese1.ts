import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 1 — per a1-master-lesson-table-v02.md row 1:
// Vocab: Family | Grammar: To be / to have, basic | Dialogue A: introducing
// your family at a gathering | Dialogue B: describing who lives in your
// house | Song: "Frere Jacques" in the German track — no Japanese-specific
// song researched yet (known open item), so no song block for now.
//
// Same 8-block shape as lessonJapanese5/8/10.ts.
//
// Grammar: です (copula, "to be"), います/あります (the animate/inanimate
// "to have/exist" split — a genuine, unavoidable A1 distinction that
// doesn't exist in English "have" at all), plus family-headcount phrases
// as a natural home for both.
//
// Pronunciation: two concepts — だくてん/はんだくてん (voiced/semi-voiced
// consonant marks: か→が, は→ば→ぱ etc.), a genuine Japanese parallel to
// the master table's German "voiced vs unvoiced" concept for this row,
// and pitch accent reinforced with a fresh pair set (none repeated from
// L2/L5).
// Target text is hiragana-only, matching the established rule (no
// furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja1-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "かぞく", de: "Familie", en: "Family" },
  spokenIntro: {
    ja: "ようこそ！きょうは かぞくについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about family.",
  },
  content: {
    text: { ja: "だい1か — かぞく", de: "Lektion 1 — Familie", en: "Lesson 1 — Family" },
  },
};

export const agendaBlock: Block = {
  id: "ja1-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから かぞくの たんごを べんきょうします。そのあと「です」と「います」を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn family vocabulary. After that we'll look at です and います, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：かぞく", de: "Wortschatz: Familie", en: "Vocabulary: Family" } },
      { id: "a3", translations: { ja: "ぶんぽう：「です」と「います」", de: "Grammatik: Sein / Haben", en: "Grammar: To Be / To Have" } },
      { id: "a4", translations: { ja: "かいわ：かぞくを しょうかいする", de: "Dialog A: Die Familie vorstellen", en: "Dialogue A: Introducing Family" } },
      { id: "a5", translations: { ja: "かいわ：いえに すんでいる ひと", de: "Dialog B: Wer zu Hause wohnt", en: "Dialogue B: Who Lives at Home" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja1-intro",
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
      ja: "かぞくは なんにんですか？きょうだいが いますか？",
      en: "How many people are in your family? Do you have siblings?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja1-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：かぞく", de: "Wortschatz: Familie", en: "Vocabulary: Family" },
  spokenIntro: {
    ja: "かぞくに かんけいする たんごを みてみましょう。",
    en: "Let's look at some family-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "かぞく", de: "Familie", en: "family" } },
      { id: "v02", category: "noun", translations: { ja: "おとうさん", de: "Vater (fremder / eigener, in Anrede)", en: "father (someone else's / addressing your own)" } },
      { id: "v03", category: "noun", translations: { ja: "おかあさん", de: "Mutter (fremde / eigene, in Anrede)", en: "mother (someone else's / addressing your own)" } },
      { id: "v04", category: "noun", translations: { ja: "おにいさん", de: "älterer Bruder (fremder / eigener, in Anrede)", en: "older brother (someone else's / addressing your own)" } },
      { id: "v05", category: "noun", translations: { ja: "おねえさん", de: "ältere Schwester (fremde / eigene, in Anrede)", en: "older sister (someone else's / addressing your own)" } },
      { id: "v06", category: "noun", translations: { ja: "おとうと", de: "jüngerer Bruder (eigener)", en: "younger brother (own)" } },
      { id: "v07", category: "noun", translations: { ja: "いもうと", de: "jüngere Schwester (eigene)", en: "younger sister (own)" } },
      { id: "v08", category: "noun", translations: { ja: "そふ", de: "Großvater (eigener)", en: "grandfather (own)" } },
      { id: "v09", category: "noun", translations: { ja: "そぼ", de: "Großmutter (eigene)", en: "grandmother (own)" } },
      { id: "v10", category: "noun", translations: { ja: "むすこ", de: "Sohn", en: "son" } },
      { id: "v11", category: "noun", translations: { ja: "むすめ", de: "Tochter", en: "daughter" } },
      { id: "v12", category: "noun", translations: { ja: "おっと", de: "Ehemann (eigener)", en: "husband (own)" } },
      { id: "v13", category: "noun", translations: { ja: "つま", de: "Ehefrau (eigene)", en: "wife (own)" } },
      { id: "v14", category: "noun", translations: { ja: "きょうだい", de: "Geschwister", en: "siblings" } },
      { id: "v15", category: "noun", translations: { ja: "りょうしん", de: "Eltern", en: "parents" } },
      { id: "v16", category: "noun", translations: { ja: "ペット", de: "Haustier", en: "pet" } },

      { id: "v17", category: "verb", translations: { ja: "いる", de: "haben / existieren (belebt)", en: "to have / to exist (animate)" } },
      { id: "v18", category: "verb", translations: { ja: "ある", de: "haben / existieren (unbelebt)", en: "to have / to exist (inanimate)" } },
      { id: "v19", category: "verb", translations: { ja: "すむ", de: "wohnen", en: "to live (reside)" } },
      { id: "v20", category: "verb", translations: { ja: "しょうかいする", de: "vorstellen", en: "to introduce" } },
      { id: "v21", category: "verb", translations: { ja: "にる", de: "ähneln", en: "to resemble" } },
      { id: "v22", category: "verb", translations: { ja: "そだてる", de: "großziehen", en: "to raise (a child)" } },
      { id: "v23", category: "verb", translations: { ja: "あう", de: "treffen", en: "to meet" } },
      { id: "v24", category: "verb", translations: { ja: "はなす", de: "reden, sprechen", en: "to talk" } },

      { id: "v25", category: "adjective", translations: { ja: "おおきい", de: "groß (Familie, Haus)", en: "big (family, house)" } },
      { id: "v26", category: "adjective", translations: { ja: "ちいさい", de: "klein", en: "small" } },
      { id: "v27", category: "adjective", translations: { ja: "やさしい", de: "freundlich", en: "kind" } },
      { id: "v28", category: "adjective", translations: { ja: "きびしい", de: "streng", en: "strict" } },
      { id: "v29", category: "adjective", translations: { ja: "にぎやか", de: "lebhaft", en: "lively" } },
      { id: "v30", category: "adjective", translations: { ja: "しずか", de: "ruhig", en: "quiet" } },
    ],
  },
};

export const grammarToBeToHaveBlock: Block = {
  id: "ja1-grammar-tobe",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "「です」と「います」", de: "Sein / Haben", en: "To Be / To Have" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、「です」と「います」の つかいかたです。",
    en: "Today's grammar is how to use です and います/あります.",
  },
  content: {
    explanation: {
      ja: "「です」は「〜だ」の ていねいな かたちで、なにかを せつめいする ときに つかいます。「いる」は ひとや どうぶつが いる とき、「ある」は ものが ある ときに つかいます。えいごの「have」は にほんごでは かならず どちらかに わかれます。",
      de: "です ist die höfliche Form von „sein\" und wird benutzt, um etwas zu beschreiben oder zu identifizieren. います wird für Menschen und Tiere benutzt („haben/existieren\", belebt), あります für Gegenstände („haben/existieren\", unbelebt). Das deutsche „haben\" teilt sich im Japanischen immer in eine von diesen beiden auf — es gibt keine einzelne Entsprechung.",
      en: "です is the polite form of \"to be,\" used to describe or identify something. います is used for people and animals (\"to have/exist,\" animate), while あります is used for objects (\"to have/exist,\" inanimate). English \"have\" always splits into one of these two in Japanese — there's no single equivalent.",
    },
    chunks: [
      { id: "g1", translations: { ja: "これは かぞくの しゃしんです。", de: "Das ist ein Foto meiner Familie. (です — sein)", en: "This is a photo of my family. (です — to be)" } },
      { id: "g2", translations: { ja: "かぞくは よにんです。", de: "Meine Familie hat vier Personen. (です — beschreiben)", en: "My family has four people. (です — describing)" } },
      { id: "g3", translations: { ja: "いもうとが います。", de: "Ich habe eine jüngere Schwester. (います — belebt)", en: "I have a younger sister. (います — animate)" } },
      { id: "g4", translations: { ja: "ねこが います。", de: "Ich habe eine Katze. (います — belebt)", en: "I have a cat. (います — animate)" } },
      { id: "g5", translations: { ja: "くるまが あります。", de: "Ich habe ein Auto. (あります — unbelebt)", en: "I have a car. (あります — inanimate)" } },
      { id: "g6", translations: { ja: "おおきい いえが あります。", de: "Ich habe ein großes Haus. (あります — unbelebt)", en: "I have a big house. (あります — inanimate)" } },
    ],
  },
};

export const dialogueIntroducingFamilyBlock: Block = {
  id: "ja1-dialogue-introducing",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：かぞくを しょうかいする", de: "Dialog A: Die Familie vorstellen", en: "Dialogue A: Introducing Family" },
  spokenIntro: {
    ja: "パーティーで かぞくを しょうかいする かいわを ききましょう。",
    en: "Let's listen to someone introducing their family at a party.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "これは わたしの かぞくの しゃしんです。", de: "Das ist ein Foto meiner Familie.", en: "This is a photo of my family." } },
      { id: "d2", speaker: "けん", translations: { ja: "いいですね！なんにん かぞくですか？", de: "Schön! Wie viele Personen hat deine Familie?", en: "Nice! How many people are in your family?" } },
      { id: "d3", speaker: "あい", translations: { ja: "よにんです。ちちと ははと おとうとです。", de: "Vier Personen. Mein Vater, meine Mutter und mein jüngerer Bruder.", en: "Four people. My father, my mother, and my younger brother." } },
      { id: "d4", speaker: "けん", translations: { ja: "おとうとさんは いま なんさいですか？", de: "Wie alt ist dein jüngerer Bruder jetzt?", en: "How old is your younger brother now?" } },
      { id: "d5", speaker: "あい", translations: { ja: "じゅうごさいです。がくせいです。", de: "Er ist fünfzehn. Er ist Schüler.", en: "He's fifteen. He's a student." } },
      { id: "d6", speaker: "けん", translations: { ja: "おとうさんは なにを していますか？", de: "Was macht dein Vater beruflich?", en: "What does your father do?" } },
      { id: "d7", speaker: "あい", translations: { ja: "いしゃです。びょういんで はたらいています。", de: "Er ist Arzt. Er arbeitet in einem Krankenhaus.", en: "He's a doctor. He works at a hospital." } },
      { id: "d8", speaker: "けん", translations: { ja: "すごいですね。おかあさんは？", de: "Das ist beeindruckend. Und deine Mutter?", en: "That's impressive. What about your mother?" } },
      { id: "d9", speaker: "あい", translations: { ja: "がっこうの せんせいです。とても やさしいです。", de: "Sie ist Lehrerin. Sie ist sehr freundlich.", en: "She's a school teacher. She's very kind." } },
      { id: "d10", speaker: "けん", translations: { ja: "ペットは いますか？", de: "Hast du ein Haustier?", en: "Do you have a pet?" } },
      { id: "d11", speaker: "あい", translations: { ja: "はい、いぬが いっぴき います。", de: "Ja, ich habe einen Hund.", en: "Yes, I have one dog." } },
      { id: "d12", speaker: "けん", translations: { ja: "かわいいですね。なまえは？", de: "Wie süß. Wie heißt er?", en: "That's cute. What's its name?" } },
      { id: "d13", speaker: "あい", translations: { ja: "ももです。とても げんきです。", de: "Momo. Sie ist sehr lebhaft.", en: "Momo. She's very energetic." } },
      { id: "d14", speaker: "けん", translations: { ja: "たのしそうな かぞくですね！", de: "Klingt nach einer lustigen Familie!", en: "Sounds like a fun family!" } },
    ],
  },
};

export const dialogueWhoLivesAtHomeBlock: Block = {
  id: "ja1-dialogue-who-lives",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いえに すんでいる ひと", de: "Dialog B: Wer zu Hause wohnt", en: "Dialogue B: Who Lives at Home" },
  spokenIntro: {
    ja: "いえに だれが すんでいるかを はなす かいわを ききましょう。",
    en: "Let's listen to a conversation about who lives in someone's house.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "けんさんの いえには だれが すんでいますか？", de: "Wer wohnt bei dir zu Hause, Ken?", en: "Who lives in your house, Ken?" } },
      { id: "e2", speaker: "けん", translations: { ja: "りょうしんと そふが すんでいます。", de: "Meine Eltern und mein Großvater wohnen dort.", en: "My parents and my grandfather live there." } },
      { id: "e3", speaker: "みか", translations: { ja: "そぼは いますか？", de: "Ist deine Großmutter auch dort?", en: "Is your grandmother there too?" } },
      { id: "e4", speaker: "けん", translations: { ja: "いいえ、そぼは いません。もう いません。", de: "Nein, meine Großmutter nicht. Sie ist verstorben.", en: "No, my grandmother isn't. She's passed away." } },
      { id: "e5", speaker: "みか", translations: { ja: "そうですか。そふは げんきですか？", de: "Verstehe. Geht es deinem Großvater gut?", en: "I see. Is your grandfather doing well?" } },
      { id: "e6", speaker: "けん", translations: { ja: "はい、とても げんきです。まいにち さんぽします。", de: "Ja, sehr gut. Er macht jeden Tag einen Spaziergang.", en: "Yes, very well. He takes a walk every day." } },
      { id: "e7", speaker: "みか", translations: { ja: "みかさんの いえは どうですか？", de: "Und wie ist es bei dir zu Hause, Mika?", en: "What about your house, Mika?" } },
      { id: "e8", speaker: "みか", translations: { ja: "わたしは おっとと むすめと すんでいます。", de: "Ich wohne mit meinem Mann und meiner Tochter.", en: "I live with my husband and daughter." } },
      { id: "e9", speaker: "けん", translations: { ja: "むすめさんは なんさいですか？", de: "Wie alt ist deine Tochter?", en: "How old is your daughter?" } },
      { id: "e10", speaker: "みか", translations: { ja: "さんさいです。とても にぎやかです。", de: "Drei Jahre alt. Sie ist sehr lebhaft.", en: "Three years old. She's very lively." } },
      { id: "e11", speaker: "けん", translations: { ja: "ペットも いますか？", de: "Hast du auch ein Haustier?", en: "Do you have a pet too?" } },
      { id: "e12", speaker: "みか", translations: { ja: "はい、ねこが にひき います。", de: "Ja, ich habe zwei Katzen.", en: "Yes, I have two cats." } },
      { id: "e13", speaker: "けん", translations: { ja: "しずかな いえですか？", de: "Ist es bei euch ruhig zu Hause?", en: "Is your house quiet?" } },
      { id: "e14", speaker: "みか", translations: { ja: "いいえ、むすめが いるので にぎやかです！", de: "Nein, es ist lebhaft wegen meiner Tochter!", en: "No, it's lively because of my daughter!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja1-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "だくてんと はんだくてん、それから アクセントを れんしゅうしましょう。",
    en: "Let's practice voiced/semi-voiced consonant marks, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      dakuten: { ja: "だくてん・はんだくてん", de: "Stimmhafte / halbstimmhafte Zeichen (゛゜)", en: "Voiced / semi-voiced marks (゛゜)" },
      pitch: { ja: "アクセント（ふくしゅう）", de: "Tonhöhenakzent (vertieft, neue Paare)", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // だくてん — Japanese's own parallel to "voiced vs unvoiced," marked
      // visually with ゛(voiced) or ゜(semi-voiced), a real literacy point
      // as much as a pronunciation one.
      { id: "dk1", category: "dakuten", translations: { ja: "か → が", de: "ka → ga (stimmlos → stimmhaft)", en: "ka → ga (unvoiced → voiced)" } },
      { id: "dk2", category: "dakuten", translations: { ja: "た → だ", de: "ta → da (stimmlos → stimmhaft)", en: "ta → da (unvoiced → voiced)" } },
      { id: "dk3", category: "dakuten", translations: { ja: "さ → ざ", de: "sa → za (stimmlos → stimmhaft)", en: "sa → za (unvoiced → voiced)" } },
      { id: "dk4", category: "dakuten", translations: { ja: "は → ば → ぱ", de: "ha → ba → pa (stimmlos → stimmhaft → halbstimmhaft)", en: "ha → ba → pa (unvoiced → voiced → semi-voiced)" } },
      { id: "dk5", category: "dakuten", translations: { ja: "かぞく → がぞう", de: "Familie / Bild (Minimalpaar, か vs が)", en: "family / image (minimal pair, か vs が)" } },
      { id: "dk6", category: "dakuten", translations: { ja: "たいがく → だいがく", de: "(kein Wort) / Universität (た vs だ)", en: "(not a word) / university (た vs だ)" } },
      // Pitch accent — fresh pairs, none repeated from L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "いま", de: "jetzt (LH) / Wohnzimmer (HL)", en: "now (LH) / living room (HL)" } },
      { id: "p2", category: "pitch", translations: { ja: "しろ", de: "weiß (LH) / Burg (HL)", en: "white (LH) / castle (HL)" } },
      { id: "p3", category: "pitch", translations: { ja: "は", de: "Zahn (HL) / Blatt (LH)", en: "tooth (HL) / leaf (LH)" } },
      { id: "p4", category: "pitch", translations: { ja: "あき", de: "Herbst (LH) / leer, frei (HL)", en: "autumn (LH) / vacant, empty (HL)" } },
    ],
  },
};

export const lessonJapanese1: LessonPlan = {
  id: "lesson-ja-1",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 1,
  title: { ja: "かぞく", de: "Familie", en: "Family" },
  framingLanguage: "source", // beginner course — same rule as lessons 2, 5, 8, 10
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarToBeToHaveBlock,
    dialogueIntroducingFamilyBlock,
    dialogueWhoLivesAtHomeBlock,
    pronunciationBlock,
    // No song block — German track has "Frere Jacques" here, but no
    // Japanese-specific song has been researched yet (known open item).
  ],
};
