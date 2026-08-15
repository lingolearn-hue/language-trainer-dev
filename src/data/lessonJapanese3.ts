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
  title: { ja: "みため", en: "Appearance" },
  spokenIntro: {
    ja: "ようこそ！きょうは みための とくちょうについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about describing appearance.",
  },
  content: {
    text: { ja: "だい3か — みため", en: "Lesson 3 — Appearance" },
  },
};

export const agendaBlock: Block = {
  id: "ja3-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから みための たんごを べんきょうします。そのあと けいようしを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn appearance vocabulary. After that we'll look at adjectives, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：みため", en: "Vocabulary: Appearance" } },
      { id: "a3", translations: { ja: "ぶんぽう：けいようし", en: "Grammar: Adjectives" } },
      { id: "a4", translations: { ja: "かいわ：けいさつに とくちょうを つたえる", en: "Dialogue A: Describing to Police" } },
      { id: "a5", translations: { ja: "かいわ：くうこうで ひとを さがす", en: "Dialogue B: Finding Someone at the Airport" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja3-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", en: "Warm-up" },
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
  title: { ja: "たんご：みため", en: "Vocabulary: Appearance" },
  spokenIntro: {
    ja: "みための とくちょうに かんけいする たんごを みてみましょう。",
    en: "Let's look at some appearance-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "せ", en: "height" } },
      { id: "v02", category: "noun", translations: { ja: "かみ", en: "hair" } },
      { id: "v03", category: "noun", translations: { ja: "め", en: "eyes" } },
      { id: "v04", category: "noun", translations: { ja: "かお", en: "face" } },
      { id: "v05", category: "noun", translations: { ja: "めがね", en: "glasses" } },
      { id: "v06", category: "noun", translations: { ja: "ひげ", en: "beard, mustache" } },
      { id: "v07", category: "noun", translations: { ja: "ふく", en: "clothes" } },
      { id: "v08", category: "noun", translations: { ja: "いろ", en: "color" } },
      { id: "v09", category: "noun", translations: { ja: "とくちょう", en: "characteristic, feature" } },
      { id: "v10", category: "noun", translations: { ja: "ねんれい", en: "age" } },
      { id: "v11", category: "noun", translations: { ja: "たいけい", en: "build (body type)" } },

      { id: "v12", category: "verb", translations: { ja: "みえる", en: "to appear, look like" } },
      { id: "v13", category: "verb", translations: { ja: "きる", en: "to wear (clothes)" } },
      { id: "v14", category: "verb", translations: { ja: "かける", en: "to wear (glasses)" } },
      { id: "v15", category: "verb", translations: { ja: "さがす", en: "to search for" } },
      { id: "v16", category: "verb", translations: { ja: "みつける", en: "to find" } },
      { id: "v17", category: "verb", translations: { ja: "せつめいする", en: "to explain, describe" } },
      { id: "v18", category: "verb", translations: { ja: "おぼえる", en: "to remember" } },
      { id: "v19", category: "verb", translations: { ja: "まちがえる", en: "to mistake" } },

      { id: "v20", category: "adjective", translations: { ja: "たかい", en: "tall (い-adjective)" } },
      { id: "v21", category: "adjective", translations: { ja: "ひくい", en: "short, low (い-adjective)" } },
      { id: "v22", category: "adjective", translations: { ja: "ながい", en: "long (い-adjective)" } },
      { id: "v23", category: "adjective", translations: { ja: "みじかい", en: "short (length) (い-adjective)" } },
      { id: "v24", category: "adjective", translations: { ja: "ふとい", en: "thick, heavy-set (い-adjective)" } },
      { id: "v25", category: "adjective", translations: { ja: "ほそい", en: "thin, slender (い-adjective)" } },
      { id: "v26", category: "adjective", translations: { ja: "わかい", en: "young (い-adjective)" } },
      { id: "v27", category: "adjective", translations: { ja: "きれい", en: "pretty, neat (な-adjective)" } },
      { id: "v28", category: "adjective", translations: { ja: "げんき", en: "energetic-looking (な-adjective)" } },
      { id: "v29", category: "adjective", translations: { ja: "しんせつ", en: "kind-looking (な-adjective)" } },
      { id: "v30", category: "adjective", translations: { ja: "はで", en: "flashy, showy (な-adjective)" } },
    ],
  },
};

export const grammarAdjectivesBlock: Block = {
  id: "ja3-grammar-adjectives",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "けいようし", en: "Adjectives" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、けいようしの ふたつの タイプです。",
    en: "Today's grammar is the two types of Japanese adjectives.",
  },
  content: {
    explanation: {
      ja: "にほんごの けいようしには ふたつ タイプが あります。い-けいようし（たかい）は そのまま めいしの まえに つきます。な-けいようし（きれい）は めいしの まえで「な」が ひつようです。ひていけいは い-けいようしが「〜くない」、な-けいようしが「〜じゃない」です。",
      en: "Japanese adjectives come in two types. い-adjectives (like たかい) attach directly before a noun. な-adjectives (like きれい) need な inserted before a noun. Negation differs too: い-adjectives become 〜くない, な-adjectives become 〜じゃない.",
    },
    chunks: [
      { id: "g1", translations: { ja: "せが たかいです。", en: "(They are) tall. (い-adj, predicate)" } },
      { id: "g2", translations: { ja: "たかい ひとです。", en: "A tall person. (い-adj directly modifies noun)" } },
      { id: "g3", translations: { ja: "せが たかくないです。", en: "(They are) not tall. (い-adj negative)" } },
      { id: "g4", translations: { ja: "きれいです。", en: "(They are) pretty/neat. (な-adj, predicate)" } },
      { id: "g5", translations: { ja: "きれいな ひとです。", en: "A pretty person. (な-adj needs な before noun)" } },
      { id: "g6", translations: { ja: "きれいじゃないです。", en: "(They are) not pretty. (な-adj negative)" } },
    ],
  },
};

export const dialoguePoliceBlock: Block = {
  id: "ja3-dialogue-police",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：けいさつに とくちょうを つたえる", en: "Dialogue A: Describing to Police" },
  spokenIntro: {
    ja: "いなくなった ひとの とくちょうを けいさつに つたえる かいわを ききましょう。",
    en: "Let's listen to someone describing a missing person to the police.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "けいかん", translations: { ja: "みための とくちょうを おしえてください。", en: "Please tell me about their appearance." } },
      { id: "d2", speaker: "じょせい", translations: { ja: "はい。せが たかくて、かみが みじかいです。", en: "Yes. They're tall, and have short hair." } },
      { id: "d3", speaker: "けいかん", translations: { ja: "めがねを かけていますか？", en: "Are they wearing glasses?" } },
      { id: "d4", speaker: "じょせい", translations: { ja: "はい、めがねを かけています。", en: "Yes, they're wearing glasses." } },
      { id: "d5", speaker: "けいかん", translations: { ja: "なんさいぐらいですか？", en: "About how old are they?" } },
      { id: "d6", speaker: "じょせい", translations: { ja: "たぶん にじゅうさいぐらいです。わかいです。", en: "Probably around twenty. They're young." } },
      { id: "d7", speaker: "けいかん", translations: { ja: "ふくの いろは おぼえていますか？", en: "Do you remember the color of their clothes?" } },
      { id: "d8", speaker: "じょせい", translations: { ja: "あおい ふくを きていました。", en: "They were wearing blue clothes." } },
      { id: "d9", speaker: "けいかん", translations: { ja: "たいけいは どうでしたか？", en: "What was their build like?" } },
      { id: "d10", speaker: "じょせい", translations: { ja: "ほそくて、あまり おおきくなかったです。", en: "Thin, and not very big." } },
      { id: "d11", speaker: "けいかん", translations: { ja: "ほかに とくちょうは ありますか？", en: "Any other characteristics?" } },
      { id: "d12", speaker: "じょせい", translations: { ja: "とても しんせつそうな ひとでした。", en: "They seemed like a very kind person." } },
      { id: "d13", speaker: "けいかん", translations: { ja: "ありがとうございます。さがします。", en: "Thank you. We'll search for them." } },
      { id: "d14", speaker: "じょせい", translations: { ja: "おねがいします。しんぱいです。", en: "Please. I'm worried." } },
    ],
  },
};

export const dialogueAirportBlock: Block = {
  id: "ja3-dialogue-airport",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：くうこうで ひとを さがす", en: "Dialogue B: Finding Someone at the Airport" },
  spokenIntro: {
    ja: "くうこうで はじめて あう ひとを とくちょうで みつける かいわを ききましょう。",
    en: "Let's listen to a conversation about finding someone by description at the airport.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "けん", translations: { ja: "もしもし、いま くうこうに つきました。", en: "Hello, I just arrived at the airport." } },
      { id: "e2", speaker: "あい", translations: { ja: "わたしも すぐ つきます。みための とくちょうを おしえます。", en: "I'll arrive soon too. Let me tell you my appearance." } },
      { id: "e3", speaker: "けん", translations: { ja: "おねがいします。", en: "Please do." } },
      { id: "e4", speaker: "あい", translations: { ja: "せが ひくくて、かみが ながいです。", en: "I'm short, and have long hair." } },
      { id: "e5", speaker: "けん", translations: { ja: "ふくの いろは なんですか？", en: "What color are your clothes?" } },
      { id: "e6", speaker: "あい", translations: { ja: "あかい ふくを きています。", en: "I'm wearing red clothes." } },
      { id: "e7", speaker: "けん", translations: { ja: "めがねを かけていますか？", en: "Are you wearing glasses?" } },
      { id: "e8", speaker: "あい", translations: { ja: "いいえ、めがねは かけていません。", en: "No, I'm not wearing glasses." } },
      { id: "e9", speaker: "けん", translations: { ja: "わかりました。わたしは くろい ふくで、せが たかいです。", en: "Understood. I'm wearing black clothes, and I'm tall." } },
      { id: "e10", speaker: "あい", translations: { ja: "ひげは ありますか？", en: "Do you have a beard?" } },
      { id: "e11", speaker: "けん", translations: { ja: "はい、みじかい ひげが あります。", en: "Yes, I have a short beard." } },
      { id: "e12", speaker: "あい", translations: { ja: "わかりました。でぐちで まっています。", en: "Understood. I'll wait at the exit." } },
      { id: "e13", speaker: "けん", translations: { ja: "ありがとうございます。すぐ いきます。", en: "Thank you. I'll be right there." } },
      { id: "e14", speaker: "あい", translations: { ja: "あ、みえました！しんせつそうな ひとですね！", en: "Oh, I can see you! You look kind!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja3-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "「い」と「う」の むせいかと、アクセントを れんしゅうしましょう。",
    en: "Let's practice devoicing of い and う, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      devoice: { ja: "「い」「う」の むせいか", en: "Devoicing of い/う between voiceless consonants" },
      pitch: { ja: "アクセント（ふくしゅう）", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // Devoicing — a real, very common feature: い/う nearly disappear
      // between two voiceless consonants (k,s,t,h,p). です sounds much
      // closer to [des] than [de-su] in natural speech.
      { id: "de1", category: "devoice", translations: { ja: "です", en: "sounds like [des], not [de-su]" } },
      { id: "de2", category: "devoice", translations: { ja: "ます", en: "sounds like [mas], not [ma-su]" } },
      { id: "de3", category: "devoice", translations: { ja: "すき", en: "sounds like [ski], not [su-ki]" } },
      { id: "de4", category: "devoice", translations: { ja: "した", en: "sounds like [shta], not [shi-ta]" } },
      { id: "de5", category: "devoice", translations: { ja: "ひと", en: "sounds like [hto]-ish, u nearly silent" } },
      { id: "de6", category: "devoice", translations: { ja: "くつ", en: "sounds like [kts], both vowels weakened" } },
      // Pitch accent — further fresh pairs, none repeated from L1/L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "め", en: "eye (HL) / bud, sprout (LH)" } },
      { id: "p2", category: "pitch", translations: { ja: "いろ", en: "color (LH) — pairs with いろいろ (various, different pitch pattern)" } },
      { id: "p3", category: "pitch", translations: { ja: "かける", en: "to wear glasses (LH) / to run (HL)" } },
      { id: "p4", category: "pitch", translations: { ja: "きる", en: "to wear (HL) / to cut (LH) — reinforced from L2, now with appearance context" } },
    ],
  },
};

export const lessonJapanese3: LessonPlan = {
  id: "lesson-ja-3",
  courseId: "japanese-beginner",
  title: { ja: "みため", en: "Appearance" },
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
