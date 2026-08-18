import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 12 — per a1-master-lesson-table-v04.md
// row 12: Vocab: Directions | Grammar: Prepositions of place | Dialogue
// A: giving directions to a lost tourist | Dialogue B: describing where
// your office is located | Song: "London Bridge is Falling Down" —
// translated here, a well-known simple children's song.
//
// Same 9-block shape as the other built Japanese lessons with a song.
//
// Grammar: Japanese has no true prepositions — location relative to
// something else is expressed with a locational noun (まえ front, うしろ
// back, なか inside, うえ above, した below, となり next to) followed by
// の and に: つくえの うえに ("on top of the desk"). This IS the real
// Japanese equivalent of "prepositions of place."
//
// Pronunciation: two concepts — long/short い vowel reinforced a fourth
// time with fresh pairs, and pitch accent reinforced a further time —
// deliberate heavy reinforcement, matching the master table's own German
// track pattern of reusing the same core contrasts across many lessons.
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui/Hiro — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja12-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "ほうこう", en: "Directions", de: "Wegbeschreibung" },
  spokenIntro: {
    ja: "ようこそ！きょうは ほうこうと ばしょについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about directions and place.",
    de: "Willkommen! Heute lernen wir Wörter rund um Richtungen und Orte.",
  },
  content: {
    text: { ja: "だい12か — ほうこう", en: "Lesson 12 — Directions", de: "Lektion 12 — Wegbeschreibung" },
  },
};

export const agendaBlock: Block = {
  id: "ja12-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda", de: "Ablauf" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから ほうこうの たんごを べんきょうします。そのあと ばしょの ひょうげんを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    en: "Today we'll start with a short introduction, then learn direction vocabulary. After that we'll look at expressing location, practice two dialogues, and finish with pronunciation practice and a song.",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zu Richtungen. Danach schauen wir uns Ortsangaben an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction", de: "Einführung" } },
      { id: "a2", translations: { ja: "たんご：ほうこう", en: "Vocabulary: Directions", de: "Wortschatz: Richtungen" } },
      { id: "a3", translations: { ja: "ぶんぽう：ばしょの ひょうげん", en: "Grammar: Expressing Location", de: "Grammatik: Ortsangaben" } },
      { id: "a4", translations: { ja: "かいわ：みちに まよった かんこうきゃく", en: "Dialogue A: A Lost Tourist", de: "Dialog A: Ein verirrter Tourist" } },
      { id: "a5", translations: { ja: "かいわ：じむしょの ばしょ", en: "Dialogue B: Where the Office Is", de: "Dialog B: Wo das Büro ist" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" } },
      { id: "a7", translations: { ja: "うた", en: "Song", de: "Lied" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja12-intro",
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
      ja: "みちに まよったことが ありますか？",
      en: "Have you ever gotten lost?",
      de: "Hast du dich schon mal verlaufen?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja12-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：ほうこう", en: "Vocabulary: Directions", de: "Wortschatz: Richtungen" },
  spokenIntro: {
    ja: "ほうこうに かんけいする たんごを みてみましょう。",
    en: "Let's look at some direction-related words.",
    de: "Schauen wir uns ein paar Wörter rund um Richtungen an.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "みち", en: "road, way", de: "Straße, Weg" } },
      { id: "v02", category: "noun", translations: { ja: "かど", en: "corner", de: "Ecke" } },
      { id: "v03", category: "noun", translations: { ja: "しんごう", en: "traffic light", de: "Ampel" } },
      { id: "v04", category: "noun", translations: { ja: "こうさてん", en: "intersection", de: "Kreuzung" } },
      { id: "v05", category: "noun", translations: { ja: "ちず", en: "map", de: "Karte" } },
      { id: "v06", category: "noun", translations: { ja: "めじるし", en: "landmark", de: "Orientierungspunkt" } },
      { id: "v07", category: "noun", translations: { ja: "ほうこう", en: "direction", de: "Richtung" } },
      { id: "v08", category: "noun", translations: { ja: "きた", en: "north", de: "Norden" } },
      { id: "v09", category: "noun", translations: { ja: "みなみ", en: "south", de: "Süden" } },
      { id: "v10", category: "noun", translations: { ja: "ひがし", en: "east", de: "Osten" } },
      { id: "v11", category: "noun", translations: { ja: "にし", en: "west", de: "Westen" } },
      { id: "v12", category: "noun", translations: { ja: "まえ", en: "front", de: "vorne" } },
      { id: "v13", category: "noun", translations: { ja: "うしろ", en: "back", de: "hinten" } },
      { id: "v14", category: "noun", translations: { ja: "となり", en: "next to", de: "daneben" } },

      { id: "v15", category: "verb", translations: { ja: "まがる", en: "to turn", de: "abbiegen" } },
      { id: "v16", category: "verb", translations: { ja: "わたる", en: "to cross", de: "überqueren" } },
      { id: "v17", category: "verb", translations: { ja: "すすむ", en: "to go straight, proceed", de: "vorwärtsgehen" } },
      { id: "v18", category: "verb", translations: { ja: "もどる", en: "to go back", de: "zurückgehen" } },
      { id: "v19", category: "verb", translations: { ja: "つづく", en: "to continue", de: "sich fortsetzen" } },
      { id: "v20", category: "verb", translations: { ja: "みつかる", en: "to be found", de: "gefunden werden" } },
      { id: "v21", category: "verb", translations: { ja: "まよう", en: "to get lost", de: "sich verirren" } },

      { id: "v22", category: "adjective", translations: { ja: "ちかい", en: "close, near", de: "nah" } },
      { id: "v23", category: "adjective", translations: { ja: "とおい", en: "far", de: "weit" } },
      { id: "v24", category: "adjective", translations: { ja: "まっすぐ", en: "straight", de: "gerade" } },
      { id: "v25", category: "adjective", translations: { ja: "べんり", en: "convenient", de: "praktisch" } },
      { id: "v26", category: "adjective", translations: { ja: "わかりやすい", en: "easy to understand", de: "leicht verständlich" } },
      { id: "v27", category: "adjective", translations: { ja: "ふくざつ", en: "complicated", de: "kompliziert" } },
      { id: "v28", category: "adjective", translations: { ja: "しずか", en: "quiet", de: "ruhig" } },
      { id: "v29", category: "adjective", translations: { ja: "にぎやか", en: "lively, bustling", de: "belebt" } },
      { id: "v30", category: "adjective", translations: { ja: "あんぜん", en: "safe", de: "sicher" } },
    ],
  },
};

export const grammarLocationBlock: Block = {
  id: "ja12-grammar-location",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "ばしょの ひょうげん", en: "Expressing Location", de: "Ortsangaben" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、ものの いちを あらわす かたちです。",
    en: "Today's grammar is how to express where something is.",
    de: "Die heutige Grammatik ist, wie man ausdrückt, wo sich etwas befindet.",
  },
  content: {
    explanation: {
      ja: "にほんごには えいごの「in/on/under」のような まえおきしが ありません。かわりに「めいし＋の＋ばしょの めいし＋に」を つかいます。たとえば「つくえの うえに」（つくえ＋の＋うえ＋に）で「つくえの うえで」を あらわします。",
      en: "Japanese doesn't have prepositions like English \"in/on/under.\" Instead, NOUN + の + LOCATION NOUN + に is used. For example, つくえの うえに (desk + の + top + に) expresses \"on the desk.\"",
      de: "Im Japanischen gibt es keine Präpositionen wie im Deutschen „in/auf/unter\". Stattdessen wird NOMEN + の + ORTS-NOMEN + に benutzt. Zum Beispiel drückt つくえの うえに (Tisch + の + oben + に) „auf dem Tisch\" aus.",
    },
    chunks: [
      { id: "g1", translations: { ja: "ぎんこうは えきの まえに あります。", en: "The bank is in front of the station.", de: "Die Bank ist vor dem Bahnhof." } },
      { id: "g2", translations: { ja: "コンビニは ホテルの となりに あります。", en: "The convenience store is next to the hotel.", de: "Der Convenience-Store ist neben dem Hotel." } },
      { id: "g3", translations: { ja: "こうえんは がっこうの うしろに あります。", en: "The park is behind the school.", de: "Der Park ist hinter der Schule." } },
      { id: "g4", translations: { ja: "ねこは いすの したに います。", en: "The cat is under the chair.", de: "Die Katze ist unter dem Stuhl." } },
      { id: "g5", translations: { ja: "じむしょは ビルの なかに あります。", en: "The office is inside the building.", de: "Das Büro ist im Gebäude." } },
      { id: "g6", translations: { ja: "しんごうの ちかくで まってください。", en: "Please wait near the traffic light.", de: "Bitte warten Sie in der Nähe der Ampel." } },
    ],
  },
};

export const dialogueLostTouristBlock: Block = {
  id: "ja12-dialogue-lost-tourist",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：みちに まよった かんこうきゃく", en: "Dialogue A: A Lost Tourist", de: "Dialog A: Ein verirrter Tourist" },
  spokenIntro: {
    ja: "みちに まよった かんこうきゃくに みちあんないする かいわを ききましょう。",
    en: "Let's listen to someone giving directions to a lost tourist.",
    de: "Hören wir uns an, wie jemand einem verirrten Touristen den Weg zeigt.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "かんこうきゃく", translations: { ja: "すみません、みちに まよってしまいました。", en: "Excuse me, I've gotten lost.", de: "Entschuldigung, ich habe mich verirrt." } },
      { id: "d2", speaker: "じゅうみん", translations: { ja: "だいじょうぶですか？どこへ いきたいですか？", en: "Are you okay? Where do you want to go?", de: "Geht es Ihnen gut? Wohin möchten Sie?" } },
      { id: "d3", speaker: "かんこうきゃく", translations: { ja: "びじゅつかんを さがしています。", en: "I'm looking for the museum.", de: "Ich suche das Museum." } },
      { id: "d4", speaker: "じゅうみん", translations: { ja: "ああ、びじゅつかんですね。こうえんの となりに あります。", en: "Ah, the museum. It's next to the park.", de: "Ah, das Museum. Es ist neben dem Park." } },
      { id: "d5", speaker: "かんこうきゃく", translations: { ja: "こうえんは どこですか？", en: "Where's the park?", de: "Wo ist der Park?" } },
      { id: "d6", speaker: "じゅうみん", translations: { ja: "このみちを きたへ すすんでください。", en: "Please go north along this road.", de: "Gehen Sie diese Straße nach Norden." } },
      { id: "d7", speaker: "かんこうきゃく", translations: { ja: "こうさてんで まがりますか？", en: "Do I turn at the intersection?", de: "Muss ich an der Kreuzung abbiegen?" } },
      { id: "d8", speaker: "じゅうみん", translations: { ja: "はい、こうさてんで みぎに まがってください。", en: "Yes, turn right at the intersection.", de: "Ja, biegen Sie an der Kreuzung rechts ab." } },
      { id: "d9", speaker: "かんこうきゃく", translations: { ja: "それから まっすぐですか？", en: "Then straight ahead?", de: "Und dann geradeaus?" } },
      { id: "d10", speaker: "じゅうみん", translations: { ja: "はい、こうえんが みえるまで まっすぐです。", en: "Yes, straight until you see the park.", de: "Ja, geradeaus, bis Sie den Park sehen." } },
      { id: "d11", speaker: "かんこうきゃく", translations: { ja: "びじゅつかんは わかりやすい ばしょに ありますか？", en: "Is the museum in an easy-to-find place?", de: "Ist das Museum leicht zu finden?" } },
      { id: "d12", speaker: "じゅうみん", translations: { ja: "はい、おおきい たてものなので すぐ みつかりますよ。", en: "Yes, since it's a big building, you'll find it right away.", de: "Ja, da es ein großes Gebäude ist, finden Sie es sofort." } },
      { id: "d13", speaker: "かんこうきゃく", translations: { ja: "たすかりました。ありがとうございます。", en: "That's a big help. Thank you.", de: "Das hilft sehr. Vielen Dank." } },
      { id: "d14", speaker: "じゅうみん", translations: { ja: "どういたしまして。きを つけて！", en: "You're welcome. Take care!", de: "Gern geschehen. Passen Sie auf sich auf!" } },
    ],
  },
};

export const dialogueOfficeLocationBlock: Block = {
  id: "ja12-dialogue-office-location",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：じむしょの ばしょ", en: "Dialogue B: Where the Office Is", de: "Dialog B: Wo das Büro ist" },
  spokenIntro: {
    ja: "じむしょが どこに あるかを せつめいする かいわを ききましょう。",
    en: "Let's listen to someone describing where their office is located.",
    de: "Hören wir uns an, wie jemand beschreibt, wo sein Büro liegt.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "けん", translations: { ja: "あなたの じむしょは どこに ありますか？", en: "Where is your office?", de: "Wo ist dein Büro?" } },
      { id: "e2", speaker: "みか", translations: { ja: "えきの まえの ビルの なかに あります。", en: "It's inside the building in front of the station.", de: "Es ist im Gebäude vor dem Bahnhof." } },
      { id: "e3", speaker: "けん", translations: { ja: "なんかいに ありますか？", en: "What floor is it on?", de: "In welchem Stockwerk ist es?" } },
      { id: "e4", speaker: "みか", translations: { ja: "ごかいです。エレベーターの となりです。", en: "The fifth floor. Next to the elevator.", de: "Fünfter Stock. Neben dem Fahrstuhl." } },
      { id: "e5", speaker: "けん", translations: { ja: "えきから ちかいですか？", en: "Is it close from the station?", de: "Ist es nah vom Bahnhof?" } },
      { id: "e6", speaker: "みか", translations: { ja: "はい、あるいて さんぷんぐらいです。", en: "Yes, about three minutes on foot.", de: "Ja, etwa drei Minuten zu Fuß." } },
      { id: "e7", speaker: "けん", translations: { ja: "べんりな ばしょですね。", en: "That's a convenient location.", de: "Das ist eine praktische Lage." } },
      { id: "e8", speaker: "みか", translations: { ja: "はい、でも あたりは すこし にぎやかです。", en: "Yes, but the area is a bit lively.", de: "Ja, aber die Gegend ist etwas belebt." } },
      { id: "e9", speaker: "けん", translations: { ja: "ちかくに レストランは ありますか？", en: "Are there restaurants nearby?", de: "Gibt es Restaurants in der Nähe?" } },
      { id: "e10", speaker: "みか", translations: { ja: "はい、ビルの したに いくつか あります。", en: "Yes, there are a few below the building.", de: "Ja, unter dem Gebäude gibt es einige." } },
      { id: "e11", speaker: "けん", translations: { ja: "ちゅうしゃじょうは ありますか？", en: "Is there a parking lot?", de: "Gibt es einen Parkplatz?" } },
      { id: "e12", speaker: "みか", translations: { ja: "はい、ビルの うしろに あります。", en: "Yes, it's behind the building.", de: "Ja, er ist hinter dem Gebäude." } },
      { id: "e13", speaker: "けん", translations: { ja: "こんど あそびに いっても いい？", en: "Can I come visit sometime?", de: "Darf ich dich mal besuchen kommen?" } },
      { id: "e14", speaker: "みか", translations: { ja: "もちろん！いつでも きてね。", en: "Of course! Come anytime.", de: "Natürlich! Komm jederzeit." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja12-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" },
  spokenIntro: {
    ja: "ながい「い」と みじかい「い」、それから アクセントを ふくしゅうしましょう。",
    en: "Let's reinforce long vs short い, and pitch accent.",
    de: "Vertiefen wir langes und kurzes い sowie den Tonhöhenakzent.",
  },
  content: {
    groupLabels: {
      short: { ja: "みじかい い", en: "Short い", de: "Kurzes い" },
      long: { ja: "ながい い", en: "Long い", de: "Langes い" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)" },
    },
    items: [
      // Long vs short い specifically — fourth overall reinforcement of
      // this concept, but fresh pairs, and the first time narrowed
      // specifically to い (previous passes mixed several vowels).
      { id: "s1", category: "short", translations: { ja: "おじさん", en: "uncle (short じ)", de: "Onkel (kurzes じ)" } },
      { id: "s2", category: "short", translations: { ja: "とる", en: "to take (unrelated to this pair, kept for symmetry)", de: "nehmen (unabhängig, für Symmetrie beibehalten)" } },
      { id: "s3", category: "short", translations: { ja: "きた", en: "north (short き)", de: "Norden (kurzes き)" } },
      { id: "n1", category: "long", translations: { ja: "おじいさん", en: "grandfather (long いい)", de: "Großvater (langes いい)" } },
      { id: "n2", category: "long", translations: { ja: "とおい", en: "far (long とお)", de: "weit (langes とお)" } },
      { id: "n3", category: "long", translations: { ja: "きいろ", en: "yellow (long きい)", de: "gelb (langes きい)" } },
      // Pitch accent — further fresh pairs.
      { id: "p1", category: "pitch", translations: { ja: "まえ", en: "front (LH) — new word, single pattern", de: "vorne (LH) — neues Wort, einzelnes Muster" } },
      { id: "p2", category: "pitch", translations: { ja: "みち", en: "road (LH) — new word, single pattern", de: "Straße (LH) — neues Wort, einzelnes Muster" } },
      { id: "p3", category: "pitch", translations: { ja: "まがる", en: "to turn (LHL) — new word, single pattern", de: "abbiegen (LHL) — neues Wort, einzelnes Muster" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja12-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true,
  title: { ja: "ロンドンばし", en: "London Bridge is Falling Down", de: "Die London Bridge fällt herunter" },
  spokenIntro: {
    ja: "さいごに、はしの うたを うたいましょう。",
    en: "To finish, let's sing a song about a bridge.",
    de: "Zum Abschluss singen wir ein Lied über eine Brücke.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "ロンドンばしが おちる", en: "London Bridge is falling down", de: "Die London Bridge fällt herunter" } },
      { id: "sg2", translations: { ja: "おちる おちる", en: "Falling down, falling down", de: "fällt herunter, fällt herunter" } },
      { id: "sg3", translations: { ja: "ロンドンばしが おちる", en: "London Bridge is falling down", de: "Die London Bridge fällt herunter" } },
      { id: "sg4", translations: { ja: "マイ フェア レディー", en: "My fair lady", de: "meine schöne Dame" } },
    ],
  },
};

export const lessonJapanese12: LessonPlan = {
  id: "lesson-ja-12",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 12,
  title: { ja: "ほうこう", en: "Directions", de: "Wegbeschreibung" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarLocationBlock,
    dialogueLostTouristBlock,
    dialogueOfficeLocationBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
