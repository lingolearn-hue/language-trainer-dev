import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 3 — per a1-master-lesson-table-v02.md row 3:
// Vocab: Appearance | Grammar: Adjective basics + agreement | Dialogue A:
// describing a missing person to police | Dialogue B: meeting someone at
// the airport by description | Song: open slot (none in the master table
// for this lesson — not omitted by mistake).
//
// Same 8-block shape as the other Japanese lessons.
//
// Grammar: the core A1 Japanese adjective split — い-adjectives (たかい)
// vs な-adjectives (きれい), covering present/negative forms and how each
// type modifies a following noun differently (い-adjectives attach
// directly, な-adjectives need な inserted) — this IS the Japanese
// equivalent of "adjective agreement," since Japanese doesn't inflect
// adjectives for gender/number like German does, but it does have this
// two-class agreement-like behavior that trips up A1 learners.
//
// Pronunciation: two concepts — devoicing of い/う between voiceless
// consonants (introduced here, a real and very common feature — です is
// usually pronounced closer to [des]), and pitch accent reinforced with
// a further fresh pair set (no repeats from L1/L2/L5).
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja3-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "みため", de: "Aussehen", en: "Appearance" },
  spokenIntro: {
    ja: "ようこそ！きょうは みための とくちょうについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about describing appearance.",
  },
  content: {
    text: { ja: "だい3か — みため", de: "Lektion 3 — Aussehen", en: "Lesson 3 — Appearance" },
  },
};

export const agendaBlock: Block = {
  id: "ja3-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから みための たんごを べんきょうします。そのあと けいようしを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn appearance vocabulary. After that we'll look at adjectives, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：みため", de: "Wortschatz: Aussehen", en: "Vocabulary: Appearance" } },
      { id: "a3", translations: { ja: "ぶんぽう：けいようし", de: "Grammatik: Adjektive", en: "Grammar: Adjectives" } },
      { id: "a4", translations: { ja: "かいわ：けいさつに とくちょうを つたえる", de: "Dialog A: Beschreibung für die Polizei", en: "Dialogue A: Describing to Police" } },
      { id: "a5", translations: { ja: "かいわ：くうこうで ひとを さがす", de: "Dialog B: Jemanden am Flughafen finden", en: "Dialogue B: Finding Someone at the Airport" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja3-intro",
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
      ja: "あなたの みための とくちょうは なんですか？",
      en: "What are your physical characteristics?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja3-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：みため", de: "Wortschatz: Aussehen", en: "Vocabulary: Appearance" },
  spokenIntro: {
    ja: "みための とくちょうに かんけいする たんごを みてみましょう。",
    en: "Let's look at some appearance-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "せ", de: "Körpergröße", en: "height" } },
      { id: "v02", category: "noun", translations: { ja: "かみ", de: "Haare", en: "hair" } },
      { id: "v03", category: "noun", translations: { ja: "め", de: "Augen", en: "eyes" } },
      { id: "v04", category: "noun", translations: { ja: "かお", de: "Gesicht", en: "face" } },
      { id: "v05", category: "noun", translations: { ja: "めがね", de: "Brille", en: "glasses" } },
      { id: "v06", category: "noun", translations: { ja: "ひげ", de: "Bart, Schnurrbart", en: "beard, mustache" } },
      { id: "v07", category: "noun", translations: { ja: "ふく", de: "Kleidung", en: "clothes" } },
      { id: "v08", category: "noun", translations: { ja: "いろ", de: "Farbe", en: "color" } },
      { id: "v09", category: "noun", translations: { ja: "とくちょう", de: "Merkmal", en: "characteristic, feature" } },
      { id: "v10", category: "noun", translations: { ja: "ねんれい", de: "Alter", en: "age" } },
      { id: "v11", category: "noun", translations: { ja: "たいけい", de: "Körperbau", en: "build (body type)" } },

      { id: "v12", category: "verb", translations: { ja: "みえる", de: "aussehen, erscheinen", en: "to appear, look like" } },
      { id: "v13", category: "verb", translations: { ja: "きる", de: "tragen (Kleidung)", en: "to wear (clothes)" } },
      { id: "v14", category: "verb", translations: { ja: "かける", de: "tragen (Brille)", en: "to wear (glasses)" } },
      { id: "v15", category: "verb", translations: { ja: "さがす", de: "suchen", en: "to search for" } },
      { id: "v16", category: "verb", translations: { ja: "みつける", de: "finden", en: "to find" } },
      { id: "v17", category: "verb", translations: { ja: "せつめいする", de: "erklären, beschreiben", en: "to explain, describe" } },
      { id: "v18", category: "verb", translations: { ja: "おぼえる", de: "sich erinnern", en: "to remember" } },
      { id: "v19", category: "verb", translations: { ja: "まちがえる", de: "verwechseln", en: "to mistake" } },

      { id: "v20", category: "adjective", translations: { ja: "たかい", de: "groß (い-Adjektiv)", en: "tall (い-adjective)" } },
      { id: "v21", category: "adjective", translations: { ja: "ひくい", de: "klein, niedrig (い-Adjektiv)", en: "short, low (い-adjective)" } },
      { id: "v22", category: "adjective", translations: { ja: "ながい", de: "lang (い-Adjektiv)", en: "long (い-adjective)" } },
      { id: "v23", category: "adjective", translations: { ja: "みじかい", de: "kurz (Länge) (い-Adjektiv)", en: "short (length) (い-adjective)" } },
      { id: "v24", category: "adjective", translations: { ja: "ふとい", de: "kräftig, füllig (い-Adjektiv)", en: "thick, heavy-set (い-adjective)" } },
      { id: "v25", category: "adjective", translations: { ja: "ほそい", de: "dünn, schlank (い-Adjektiv)", en: "thin, slender (い-adjective)" } },
      { id: "v26", category: "adjective", translations: { ja: "わかい", de: "jung (い-Adjektiv)", en: "young (い-adjective)" } },
      { id: "v27", category: "adjective", translations: { ja: "きれい", de: "hübsch, gepflegt (な-Adjektiv)", en: "pretty, neat (な-adjective)" } },
      { id: "v28", category: "adjective", translations: { ja: "げんき", de: "energisch wirkend (な-Adjektiv)", en: "energetic-looking (な-adjective)" } },
      { id: "v29", category: "adjective", translations: { ja: "しんせつ", de: "freundlich wirkend (な-Adjektiv)", en: "kind-looking (な-adjective)" } },
      { id: "v30", category: "adjective", translations: { ja: "はで", de: "auffällig, extravagant (な-Adjektiv)", en: "flashy, showy (な-adjective)" } },

      // Added after an audit found these appear in the lesson's own
      // dialogues but were missing from the vocab slide.
      { id: "v31", category: "noun", translations: { ja: "くうこう", de: "Flughafen", en: "airport" } },
      { id: "v32", category: "noun", translations: { ja: "でぐち", de: "Ausgang", en: "exit" } },
      { id: "v33", category: "noun", translations: { ja: "ひと", de: "Person, Mensch", en: "person" } },
      { id: "v34", category: "verb", translations: { ja: "つく", de: "ankommen", en: "to arrive" } },
      { id: "v35", category: "verb", translations: { ja: "まつ", de: "warten", en: "to wait" } },
      { id: "v36", category: "verb", translations: { ja: "いく", de: "gehen", en: "to go" } },
      { id: "v37", category: "adjective", translations: { ja: "おおきい", de: "groß (い-Adjektiv)", en: "big (い-adj)" } },
      { id: "v38", category: "adjective", translations: { ja: "あおい", de: "blau (い-Adjektiv)", en: "blue (い-adj)" } },
      { id: "v39", category: "adjective", translations: { ja: "あかい", de: "rot (い-Adjektiv)", en: "red (い-adj)" } },
      { id: "v40", category: "adjective", translations: { ja: "くろい", de: "schwarz (い-Adjektiv)", en: "black (い-adj)" } },
      { id: "v41", category: "adjective", translations: { ja: "しんぱい", de: "besorgt (な-Adjektiv)", en: "worried (な-adj)" } },
    ],
  },
};

export const grammarAdjectivesBlock: Block = {
  id: "ja3-grammar-adjectives",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "けいようし", de: "Adjektive", en: "Adjectives" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、けいようしの ふたつの タイプです。",
    en: "Today's grammar is the two types of Japanese adjectives.",
  },
  content: {
    explanation: {
      ja: "にほんごの けいようしには ふたつ タイプが あります。い-けいようし（たかい）は そのまま めいしの まえに つきます。な-けいようし（きれい）は めいしの まえで「な」が ひつようです。ひていけいは い-けいようしが「〜くない」、な-けいようしが「〜じゃない」です。",
      de: "Japanische Adjektive gibt es in zwei Arten. い-Adjektive (wie たかい) stehen direkt vor einem Nomen. な-Adjektive (wie きれい) brauchen ein eingefügtes な vor dem Nomen. Auch die Verneinung unterscheidet sich: い-Adjektive werden zu 〜くない, な-Adjektive zu 〜じゃない.",
      en: "Japanese adjectives come in two types. い-adjectives (like たかい) attach directly before a noun. な-adjectives (like きれい) need な inserted before a noun. Negation differs too: い-adjectives become 〜くない, な-adjectives become 〜じゃない.",
    },
    chunks: [
      { id: "g1", translations: { ja: "せが たかいです。", de: "(Sie/Er ist) groß. (い-Adjektiv, Prädikat)", en: "(They are) tall. (い-adj, predicate)" } },
      { id: "g2", translations: { ja: "たかい ひとです。", de: "Eine große Person. (い-Adjektiv steht direkt vor dem Nomen)", en: "A tall person. (い-adj directly modifies noun)" } },
      { id: "g3", translations: { ja: "せが たかくないです。", de: "(Sie/Er ist) nicht groß. (い-Adjektiv, verneint)", en: "(They are) not tall. (い-adj negative)" } },
      { id: "g4", translations: { ja: "きれいです。", de: "(Sie/Er ist) hübsch/gepflegt. (な-Adjektiv, Prädikat)", en: "(They are) pretty/neat. (な-adj, predicate)" } },
      { id: "g5", translations: { ja: "きれいな ひとです。", de: "Eine hübsche Person. (な-Adjektiv braucht な vor dem Nomen)", en: "A pretty person. (な-adj needs な before noun)" } },
      { id: "g6", translations: { ja: "きれいじゃないです。", de: "(Sie/Er ist) nicht hübsch. (な-Adjektiv, verneint)", en: "(They are) not pretty. (な-adj negative)" } },
    ],
  },
};

export const dialoguePoliceBlock: Block = {
  id: "ja3-dialogue-police",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：けいさつに とくちょうを つたえる", de: "Dialog A: Beschreibung für die Polizei", en: "Dialogue A: Describing to Police" },
  spokenIntro: {
    ja: "いなくなった ひとの とくちょうを けいさつに つたえる かいわを ききましょう。",
    en: "Let's listen to someone describing a missing person to the police.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "けいかん", translations: { ja: "みための とくちょうを おしえてください。", de: "Bitte beschreiben Sie mir das Aussehen der Person.", en: "Please tell me about their appearance." } },
      { id: "d2", speaker: "じょせい", translations: { ja: "はい。せが たかくて、かみが みじかいです。", de: "Ja. Sie ist groß und hat kurze Haare.", en: "Yes. They're tall, and have short hair." } },
      { id: "d3", speaker: "けいかん", translations: { ja: "めがねを かけていますか？", de: "Trägt sie eine Brille?", en: "Are they wearing glasses?" } },
      { id: "d4", speaker: "じょせい", translations: { ja: "はい、めがねを かけています。", de: "Ja, sie trägt eine Brille.", en: "Yes, they're wearing glasses." } },
      { id: "d5", speaker: "けいかん", translations: { ja: "なんさいぐらいですか？", de: "Wie alt ist sie ungefähr?", en: "About how old are they?" } },
      { id: "d6", speaker: "じょせい", translations: { ja: "たぶん にじゅうさいぐらいです。わかいです。", de: "Wahrscheinlich um die zwanzig. Sie ist jung.", en: "Probably around twenty. They're young." } },
      { id: "d7", speaker: "けいかん", translations: { ja: "ふくの いろは おぼえていますか？", de: "Erinnern Sie sich an die Farbe ihrer Kleidung?", en: "Do you remember the color of their clothes?" } },
      { id: "d8", speaker: "じょせい", translations: { ja: "あおい ふくを きていました。", de: "Sie trug blaue Kleidung.", en: "They were wearing blue clothes." } },
      { id: "d9", speaker: "けいかん", translations: { ja: "たいけいは どうでしたか？", de: "Wie war ihr Körperbau?", en: "What was their build like?" } },
      { id: "d10", speaker: "じょせい", translations: { ja: "ほそくて、あまり おおきくなかったです。", de: "Schlank, und nicht sehr groß.", en: "Thin, and not very big." } },
      { id: "d11", speaker: "けいかん", translations: { ja: "ほかに とくちょうは ありますか？", de: "Noch weitere Merkmale?", en: "Any other characteristics?" } },
      { id: "d12", speaker: "じょせい", translations: { ja: "とても しんせつそうな ひとでした。", de: "Sie wirkte wie ein sehr freundlicher Mensch.", en: "They seemed like a very kind person." } },
      { id: "d13", speaker: "けいかん", translations: { ja: "ありがとうございます。さがします。", de: "Danke. Wir werden nach ihr suchen.", en: "Thank you. We'll search for them." } },
      { id: "d14", speaker: "じょせい", translations: { ja: "おねがいします。しんぱいです。", de: "Bitte. Ich mache mir Sorgen.", en: "Please. I'm worried." } },
    ],
  },
};

export const dialogueAirportBlock: Block = {
  id: "ja3-dialogue-airport",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：くうこうで ひとを さがす", de: "Dialog B: Jemanden am Flughafen finden", en: "Dialogue B: Finding Someone at the Airport" },
  spokenIntro: {
    ja: "くうこうで はじめて あう ひとを とくちょうで みつける かいわを ききましょう。",
    en: "Let's listen to a conversation about finding someone by description at the airport.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "けん", translations: { ja: "もしもし、いま くうこうに つきました。", de: "Hallo, ich bin gerade am Flughafen angekommen.", en: "Hello, I just arrived at the airport." } },
      { id: "e2", speaker: "あい", translations: { ja: "わたしも すぐ つきます。みための とくちょうを おしえます。", de: "Ich komme auch bald an. Ich beschreibe dir, wie ich aussehe.", en: "I'll arrive soon too. Let me tell you my appearance." } },
      { id: "e3", speaker: "けん", translations: { ja: "おねがいします。", de: "Gerne.", en: "Please do." } },
      { id: "e4", speaker: "あい", translations: { ja: "せが ひくくて、かみが ながいです。", de: "Ich bin klein und habe lange Haare.", en: "I'm short, and have long hair." } },
      { id: "e5", speaker: "けん", translations: { ja: "ふくの いろは なんですか？", de: "Welche Farbe hat deine Kleidung?", en: "What color are your clothes?" } },
      { id: "e6", speaker: "あい", translations: { ja: "あかい ふくを きています。", de: "Ich trage rote Kleidung.", en: "I'm wearing red clothes." } },
      { id: "e7", speaker: "けん", translations: { ja: "めがねを かけていますか？", de: "Trägst du eine Brille?", en: "Are you wearing glasses?" } },
      { id: "e8", speaker: "あい", translations: { ja: "いいえ、めがねは かけていません。", de: "Nein, ich trage keine Brille.", en: "No, I'm not wearing glasses." } },
      { id: "e9", speaker: "けん", translations: { ja: "わかりました。わたしは くろい ふくで、せが たかいです。", de: "Verstanden. Ich trage schwarze Kleidung und bin groß.", en: "Understood. I'm wearing black clothes, and I'm tall." } },
      { id: "e10", speaker: "あい", translations: { ja: "ひげは ありますか？", de: "Hast du einen Bart?", en: "Do you have a beard?" } },
      { id: "e11", speaker: "けん", translations: { ja: "はい、みじかい ひげが あります。", de: "Ja, ich habe einen kurzen Bart.", en: "Yes, I have a short beard." } },
      { id: "e12", speaker: "あい", translations: { ja: "わかりました。でぐちで まっています。", de: "Verstanden. Ich warte am Ausgang.", en: "Understood. I'll wait at the exit." } },
      { id: "e13", speaker: "けん", translations: { ja: "ありがとうございます。すぐ いきます。", de: "Danke. Ich bin gleich da.", en: "Thank you. I'll be right there." } },
      { id: "e14", speaker: "あい", translations: { ja: "あ、みえました！しんせつそうな ひとですね！", de: "Oh, ich sehe dich! Du siehst freundlich aus!", en: "Oh, I can see you! You look kind!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja3-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「い」と「う」の むせいかと、アクセントを れんしゅうしましょう。",
    en: "Let's practice devoicing of い and う, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      devoice: { ja: "「い」「う」の むせいか", de: "Entstimmhaftung von い/う zwischen stimmlosen Konsonanten", en: "Devoicing of い/う between voiceless consonants" },
      pitch: { ja: "アクセント（ふくしゅう）", de: "Tonhöhenakzent (vertieft, neue Paare)", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // Devoicing — a real, very common feature: い/う nearly disappear
      // between two voiceless consonants (k,s,t,h,p). です sounds much
      // closer to [des] than [de-su] in natural speech.
      { id: "de1", category: "devoice", translations: { ja: "です", de: "klingt wie [des], nicht [de-su]", en: "sounds like [des], not [de-su]" } },
      { id: "de2", category: "devoice", translations: { ja: "ます", de: "klingt wie [mas], nicht [ma-su]", en: "sounds like [mas], not [ma-su]" } },
      { id: "de3", category: "devoice", translations: { ja: "すき", de: "klingt wie [ski], nicht [su-ki]", en: "sounds like [ski], not [su-ki]" } },
      { id: "de4", category: "devoice", translations: { ja: "した", de: "klingt wie [shta], nicht [shi-ta]", en: "sounds like [shta], not [shi-ta]" } },
      { id: "de5", category: "devoice", translations: { ja: "ひと", de: "klingt ungefähr wie [hto], das u fast stumm", en: "sounds like [hto]-ish, u nearly silent" } },
      { id: "de6", category: "devoice", translations: { ja: "くつ", de: "klingt wie [kts], beide Vokale abgeschwächt", en: "sounds like [kts], both vowels weakened" } },
      // Pitch accent — further fresh pairs, none repeated from L1/L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "め", de: "Auge (HL) / Knospe, Trieb (LH)", en: "eye (HL) / bud, sprout (LH)" } },
      { id: "p2", category: "pitch", translations: { ja: "いろ", de: "Farbe (LH) — vgl. いろいろ (verschieden, anderes Tonmuster)", en: "color (LH) — pairs with いろいろ (various, different pitch pattern)" } },
      { id: "p3", category: "pitch", translations: { ja: "かける", de: "eine Brille tragen (LH) / rennen (HL)", en: "to wear glasses (LH) / to run (HL)" } },
      { id: "p4", category: "pitch", translations: { ja: "きる", de: "tragen (HL) / schneiden (LH) — vertieft aus L2, jetzt im Kontext Aussehen", en: "to wear (HL) / to cut (LH) — reinforced from L2, now with appearance context" } },
    ],
  },
};

export const lessonJapanese3: LessonPlan = {
  id: "lesson-ja-3",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 3,
  title: { ja: "みため", de: "Aussehen", en: "Appearance" },
  framingLanguage: "source",
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarAdjectivesBlock,
    dialoguePoliceBlock,
    dialogueAirportBlock,
    pronunciationBlock,
    // No song block — Lesson 3 is an "open slot" in a1-master-lesson-table-v02.md
  ],
};
