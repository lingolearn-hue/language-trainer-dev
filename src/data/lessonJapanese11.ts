import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 11 — per a1-master-lesson-table-v04.md
// row 11: Vocab: Travel | Grammar: Direction/location | Dialogue A:
// asking for directions to a hotel | Dialogue B: planning a trip
// itinerary with a friend | Song: "Row Row Row Your Boat" — already
// translated for German (lesson11.ts); a separate Japanese translation
// here, since target-language content isn't shared across lesson files
// (see the standing conversation note on this).
//
// Same 9-block shape as the other built Japanese lessons with a song.
//
// Grammar: に (existence location AND direction/destination) vs へ
// (direction, softer "toward") vs で (location where an action happens)
// — the real Japanese three-way particle split behind "direction and
// location," not a translated version of German's own two-way-
// preposition system.
//
// Pronunciation: two concepts, both genuinely tied to this lesson's own
// grammar rather than generic filler — topic-marker は pronounced わ,
// and direction-particle へ pronounced え. Both are real, well-known
// beginner-trips-people-up spelling/pronunciation mismatches, and both
// happen to be exactly the particles this lesson's grammar block covers.
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui/Hiro — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja11-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "りょこう", en: "Travel", de: "Reisen" },
  spokenIntro: {
    ja: "ようこそ！きょうは りょこうについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about travel.",
    de: "Willkommen! Heute lernen wir Wörter rund ums Reisen.",
  },
  content: {
    text: { ja: "だい11か — りょこう", en: "Lesson 11 — Travel", de: "Lektion 11 — Reisen" },
  },
};

export const agendaBlock: Block = {
  id: "ja11-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda", de: "Ablauf" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから りょこうの たんごを べんきょうします。そのあと ほうこうと ばしょの じょしを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    en: "Today we'll start with a short introduction, then learn travel vocabulary. After that we'll look at direction/location particles, practice two dialogues, and finish with pronunciation practice and a song.",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zum Reisen. Danach schauen wir uns Richtungs- und Ortspartikel an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction", de: "Einführung" } },
      { id: "a2", translations: { ja: "たんご：りょこう", en: "Vocabulary: Travel", de: "Wortschatz: Reisen" } },
      { id: "a3", translations: { ja: "ぶんぽう：に・へ・で", en: "Grammar: に, へ, で", de: "Grammatik: に, へ, で" } },
      { id: "a4", translations: { ja: "かいわ：ホテルへの みちを きく", en: "Dialogue A: Asking for the Hotel", de: "Dialog A: Nach dem Hotel fragen" } },
      { id: "a5", translations: { ja: "かいわ：りょこうの けいかくを たてる", en: "Dialogue B: Planning a Trip", de: "Dialog B: Eine Reise planen" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" } },
      { id: "a7", translations: { ja: "うた", en: "Song", de: "Lied" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja11-intro",
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
      ja: "りょこうが すきですか？どこへ いきたいですか？",
      en: "Do you like traveling? Where do you want to go?",
      de: "Reist du gern? Wohin möchtest du fahren?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja11-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：りょこう", en: "Vocabulary: Travel", de: "Wortschatz: Reisen" },
  spokenIntro: {
    ja: "りょこうに かんけいする たんごを みてみましょう。",
    en: "Let's look at some travel-related words.",
    de: "Schauen wir uns ein paar Wörter rund ums Reisen an.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "りょこう", en: "trip, journey", de: "Reise" } },
      { id: "v02", category: "noun", translations: { ja: "でんしゃ", en: "train", de: "Zug" } },
      { id: "v03", category: "noun", translations: { ja: "ひこうき", en: "airplane", de: "Flugzeug" } },
      { id: "v04", category: "noun", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte" } },
      { id: "v05", category: "noun", translations: { ja: "スーツケース", en: "suitcase", de: "Koffer" } },
      { id: "v06", category: "noun", translations: { ja: "にもつ", en: "luggage", de: "Gepäck" } },
      { id: "v07", category: "noun", translations: { ja: "えき", en: "station", de: "Bahnhof" } },
      { id: "v08", category: "noun", translations: { ja: "ホテル", en: "hotel", de: "Hotel" } },
      { id: "v09", category: "noun", translations: { ja: "パスポート", en: "passport", de: "Reisepass" } },
      { id: "v10", category: "noun", translations: { ja: "こっきょう", en: "border", de: "Grenze" } },
      { id: "v11", category: "noun", translations: { ja: "ガイドブック", en: "travel guidebook", de: "Reiseführer" } },
      { id: "v12", category: "noun", translations: { ja: "とうちゃく", en: "arrival", de: "Ankunft" } },
      { id: "v13", category: "noun", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt" } },

      { id: "v14", category: "verb", translations: { ja: "りょこうする", en: "to travel", de: "reisen" } },
      { id: "v15", category: "verb", translations: { ja: "よやくする", en: "to reserve, book", de: "reservieren" } },
      { id: "v16", category: "verb", translations: { ja: "しゅっぱつする", en: "to depart", de: "abfahren" } },
      { id: "v17", category: "verb", translations: { ja: "とうちゃくする", en: "to arrive", de: "ankommen" } },
      { id: "v18", category: "verb", translations: { ja: "にづくりする", en: "to pack", de: "packen" } },
      { id: "v19", category: "verb", translations: { ja: "とまる", en: "to stay overnight", de: "übernachten" } },
      { id: "v20", category: "verb", translations: { ja: "チェックインする", en: "to check in", de: "einchecken" } },

      { id: "v21", category: "adjective", translations: { ja: "はやい", en: "fast", de: "schnell" } },
      { id: "v22", category: "adjective", translations: { ja: "おそい", en: "slow", de: "langsam" } },
      { id: "v23", category: "adjective", translations: { ja: "ちょくつう", en: "direct (no transfers)", de: "direkt" } },
      { id: "v24", category: "adjective", translations: { ja: "こんざつ", en: "crowded", de: "überfüllt" } },
      { id: "v25", category: "adjective", translations: { ja: "やすい", en: "cheap, affordable", de: "günstig" } },
      { id: "v26", category: "adjective", translations: { ja: "じかんどおり", en: "punctual, on time", de: "pünktlich" } },
      { id: "v27", category: "adjective", translations: { ja: "ちえん", en: "delayed", de: "verspätet" } },
    ],
  },
};

export const grammarDirectionBlock: Block = {
  id: "ja11-grammar-direction",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "に・へ・で", en: "に, へ, で", de: "に, へ, で" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、ばしょと ほうこうの じょしです。",
    en: "Today's grammar is location and direction particles.",
    de: "Die heutige Grammatik sind Orts- und Richtungspartikel.",
  },
  content: {
    explanation: {
      ja: "「に」は そんざいの ばしょ（〜に います/あります）と、いきさきを あらわします。「へ」は「に」より やわらかい「〜の ほうへ」という いみで、いきさきに つかいます。「で」は どうさが おこなわれる ばしょを あらわします。",
      en: "に marks where something exists (〜に います/あります) and also a destination. へ is a softer \"toward\" version used for destinations too. で marks the location where an action takes place.",
      de: "に markiert, wo etwas existiert (〜に います/あります), und auch ein Reiseziel. へ ist eine weichere Version von „in Richtung von\" und wird ebenfalls für Reiseziele benutzt. で markiert den Ort, an dem eine Handlung stattfindet.",
    },
    chunks: [
      { id: "g1", translations: { ja: "ホテルに とまります。", en: "I'll stay at the hotel. (に — existence/location)", de: "Ich übernachte im Hotel. (に — Existenz/Ort)" } },
      { id: "g2", translations: { ja: "とうきょうへ いきます。", en: "I'm going to Tokyo. (へ — softer direction)", de: "Ich fahre nach Tokio. (へ — sanftere Richtung)" } },
      { id: "g3", translations: { ja: "えきに つきました。", en: "I arrived at the station. (に — destination reached)", de: "Ich bin am Bahnhof angekommen. (に — erreichtes Ziel)" } },
      { id: "g4", translations: { ja: "レストランで たべます。", en: "I'll eat at the restaurant. (で — where the action happens)", de: "Ich esse im Restaurant. (で — wo die Handlung stattfindet)" } },
      { id: "g5", translations: { ja: "ホテルで やすみます。", en: "I'll rest at the hotel. (で — action location)", de: "Ich ruhe mich im Hotel aus. (で — Handlungsort)" } },
      { id: "g6", translations: { ja: "きっぷは どこで かいますか？", en: "Where do I buy tickets? (で — action location)", de: "Wo kaufe ich Fahrkarten? (で — Handlungsort)" } },
    ],
  },
};

export const dialogueHotelBlock: Block = {
  id: "ja11-dialogue-hotel",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ホテルへの みちを きく", en: "Dialogue A: Asking for the Hotel", de: "Dialog A: Nach dem Hotel fragen" },
  spokenIntro: {
    ja: "ホテルへの いきかたを きく かいわを ききましょう。",
    en: "Let's listen to someone asking for directions to a hotel.",
    de: "Hören wir uns an, wie jemand nach dem Weg zum Hotel fragt.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "りょこうしゃ", translations: { ja: "すみません、さくらホテルへの みちを おしえてください。", en: "Excuse me, could you tell me the way to Sakura Hotel?", de: "Entschuldigung, können Sie mir den Weg zum Sakura-Hotel zeigen?" } },
      { id: "d2", speaker: "つうこうにん", translations: { ja: "ああ、それなら ここから ちかいですよ。", en: "Ah, that's close from here.", de: "Ah, das ist von hier aus nah." } },
      { id: "d3", speaker: "りょこうしゃ", translations: { ja: "どう いけば いいですか？", en: "How should I go?", de: "Wie soll ich gehen?" } },
      { id: "d4", speaker: "つうこうにん", translations: { ja: "この みちを まっすぐ いってください。", en: "Go straight along this road.", de: "Gehen Sie diese Straße geradeaus." } },
      { id: "d5", speaker: "りょこうしゃ", translations: { ja: "はい、それから？", en: "Okay, and then?", de: "Gut, und dann?" } },
      { id: "d6", speaker: "つうこうにん", translations: { ja: "えきの まえで みぎに まがってください。", en: "Turn right in front of the station.", de: "Biegen Sie vor dem Bahnhof rechts ab." } },
      { id: "d7", speaker: "りょこうしゃ", translations: { ja: "えきの まえで みぎ、わかりました。", en: "Right in front of the station, understood.", de: "Vor dem Bahnhof rechts, verstanden." } },
      { id: "d8", speaker: "つうこうにん", translations: { ja: "ホテルは その さきに あります。", en: "The hotel is further ahead from there.", de: "Das Hotel ist weiter voraus." } },
      { id: "d9", speaker: "りょこうしゃ", translations: { ja: "あるいて どのくらい かかりますか？", en: "How long does it take on foot?", de: "Wie lange dauert es zu Fuß?" } },
      { id: "d10", speaker: "つうこうにん", translations: { ja: "じゅっぷんぐらいです。", en: "About ten minutes.", de: "Etwa zehn Minuten." } },
      { id: "d11", speaker: "りょこうしゃ", translations: { ja: "タクシーで いった ほうが いいですか？", en: "Would it be better to go by taxi?", de: "Wäre es besser, mit dem Taxi zu fahren?" } },
      { id: "d12", speaker: "つうこうにん", translations: { ja: "いいえ、あるいても だいじょうぶですよ。", en: "No, walking is fine.", de: "Nein, zu Fuß geht das gut." } },
      { id: "d13", speaker: "りょこうしゃ", translations: { ja: "わかりました。ありがとうございます。", en: "Understood. Thank you.", de: "Verstanden. Vielen Dank." } },
      { id: "d14", speaker: "つうこうにん", translations: { ja: "どういたしまして。よい たびを！", en: "You're welcome. Have a good trip!", de: "Gern geschehen. Gute Reise!" } },
    ],
  },
};

export const dialogueTripPlanningBlock: Block = {
  id: "ja11-dialogue-trip-planning",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：りょこうの けいかくを たてる", en: "Dialogue B: Planning a Trip", de: "Dialog B: Eine Reise planen" },
  spokenIntro: {
    ja: "ともだちと りょこうの けいかくを たてる かいわを ききましょう。",
    en: "Let's listen to two friends planning a trip.",
    de: "Hören wir uns an, wie zwei Freunde eine Reise planen.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "なつやすみに どこかへ りょこうしない？", en: "Should we travel somewhere during summer vacation?", de: "Sollen wir in den Sommerferien irgendwohin reisen?" } },
      { id: "e2", speaker: "けん", translations: { ja: "いいね！どこへ いきたい？", en: "Sounds good! Where do you want to go?", de: "Klingt gut! Wohin möchtest du?" } },
      { id: "e3", speaker: "みか", translations: { ja: "おきなわへ いきたいな。", en: "I'd like to go to Okinawa.", de: "Ich möchte nach Okinawa." } },
      { id: "e4", speaker: "けん", translations: { ja: "ひこうきで いく？でんしゃで いく？", en: "Should we go by plane or by train?", de: "Fliegen wir oder fahren wir mit dem Zug?" } },
      { id: "e5", speaker: "みか", translations: { ja: "ひこうきの ほうが はやいよ。", en: "The plane is faster.", de: "Das Flugzeug ist schneller." } },
      { id: "e6", speaker: "けん", translations: { ja: "じゃあ、きっぷを よやくするね。", en: "Then I'll reserve the tickets.", de: "Dann reserviere ich die Tickets." } },
      { id: "e7", speaker: "みか", translations: { ja: "ホテルも よやくしたほうが いいね。", en: "We should reserve a hotel too.", de: "Wir sollten auch ein Hotel reservieren." } },
      { id: "e8", speaker: "けん", translations: { ja: "うみの ちかくの ホテルが いいな。", en: "A hotel near the sea would be nice.", de: "Ein Hotel in Meeresnähe wäre schön." } },
      { id: "e9", speaker: "みか", translations: { ja: "なんにち とまる よてい？", en: "How many days are we planning to stay?", de: "Wie viele Tage sind wir geplant zu bleiben?" } },
      { id: "e10", speaker: "けん", translations: { ja: "よっかぐらいは とまりたいな。", en: "I'd like to stay about four days.", de: "Ich möchte etwa vier Tage bleiben." } },
      { id: "e11", speaker: "みか", translations: { ja: "にもつは なにを もっていく？", en: "What luggage should we bring?", de: "Welches Gepäck sollen wir mitnehmen?" } },
      { id: "e12", speaker: "けん", translations: { ja: "スーツケースと ガイドブックだね。", en: "A suitcase and a guidebook.", de: "Einen Koffer und einen Reiseführer." } },
      { id: "e13", speaker: "みか", translations: { ja: "パスポートも わすれないでね。", en: "Don't forget your passport either.", de: "Vergiss auch deinen Reisepass nicht." } },
      { id: "e14", speaker: "けん", translations: { ja: "うん！たのしみに してるよ。", en: "Yeah! I'm looking forward to it.", de: "Ja! Ich freue mich darauf." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja11-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining" },
  spokenIntro: {
    ja: "「は」と「へ」が じょしの ときの とくべつな よみかたを れんしゅうしましょう。",
    en: "Let's practice how は and へ are read differently when used as particles.",
    de: "Üben wir, wie は und へ als Partikel anders gelesen werden.",
  },
  content: {
    groupLabels: {
      ha_wa: { ja: "じょしの「は」→ わ", en: "Topic particle は → read \"wa\"", de: "Themenpartikel は → gelesen „wa\"" },
      he_e: { ja: "じょしの「へ」→ え", en: "Direction particle へ → read \"e\"", de: "Richtungspartikel へ → gelesen „e\"" },
    },
    items: [
      { id: "hw1", category: "ha_wa", translations: { ja: "わたしは がくせいです。", en: "I am a student. (は read as \"wa\")", de: "Ich bin Student. (は gelesen als „wa\")" } },
      { id: "hw2", category: "ha_wa", translations: { ja: "これは きっぷです。", en: "This is a ticket. (は read as \"wa\")", de: "Das ist eine Fahrkarte. (は gelesen als „wa\")" } },
      { id: "hw3", category: "ha_wa", translations: { ja: "ホテルは ちかいです。", en: "The hotel is close. (は read as \"wa\")", de: "Das Hotel ist nah. (は gelesen als „wa\")" } },
      { id: "hw4", category: "ha_wa", translations: { ja: "はな", en: "flower (は here is NOT the particle — normal \"ha\")", de: "Blume (は ist hier KEIN Partikel — normales „ha\")" } },
      { id: "he1", category: "he_e", translations: { ja: "とうきょうへ いきます。", en: "I'm going to Tokyo. (へ read as \"e\")", de: "Ich fahre nach Tokio. (へ gelesen als „e\")" } },
      { id: "he2", category: "he_e", translations: { ja: "えきへ むかいます。", en: "I'm heading to the station. (へ read as \"e\")", de: "Ich gehe zum Bahnhof. (へ gelesen als „e\")" } },
      { id: "he3", category: "he_e", translations: { ja: "ホテルへの みち", en: "the way to the hotel (へ read as \"e\")", de: "der Weg zum Hotel (へ gelesen als „e\")" } },
      { id: "he4", category: "he_e", translations: { ja: "へや", en: "room (へ here is NOT the particle — normal \"he\")", de: "Zimmer (へ ist hier KEIN Partikel — normales „he\")" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja11-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true,
  title: { ja: "こげよ マイケル", en: "Row, Row, Row Your Boat", de: "Rudert, rudert" },
  spokenIntro: {
    ja: "さいごに、ボートの うたを うたいましょう。",
    en: "To finish, let's sing a song about a boat.",
    de: "Zum Abschluss singen wir ein Lied über ein Boot.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "こげ こげ ボートを", en: "Row, row, row your boat", de: "Rudert, rudert, rudert das Boot" } },
      { id: "sg2", translations: { ja: "しずかに かわを くだる", en: "Gently down the stream", de: "sanft den Fluss hinab" } },
      { id: "sg3", translations: { ja: "たのしく たのしく たのしく たのしく", en: "Merrily, merrily, merrily, merrily", de: "Fröhlich, fröhlich, fröhlich, fröhlich" } },
      { id: "sg4", translations: { ja: "じんせいは ゆめの よう", en: "Life is but a dream", de: "das Leben ist ein Traum" } },
    ],
  },
};

export const lessonJapanese11: LessonPlan = {
  id: "lesson-ja-11",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 11,
  title: { ja: "りょこう", en: "Travel", de: "Reisen" },
  framingLanguage: "source",
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
