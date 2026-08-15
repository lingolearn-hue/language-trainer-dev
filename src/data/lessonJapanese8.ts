import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 8 — per a1-master-lesson-table-v02.md row 8:
// Vocab: Shopping | Grammar: Numbers and quantity | Dialogue A: buying
// groceries at the market | Dialogue B: haggling over prices at a shop |
// Song: "This Old Man" in the German example track — no Japanese-specific
// song has been researched yet (known open item, see
// a1-master-lesson-table-v02.md), so this lesson has no song block for
// now rather than forcing an untranslated placeholder.
//
// Same 8-block shape as lessonJapanese5.ts / lessonJapanese10.ts: title ->
// agenda -> warm-up -> vocab -> grammar -> dialogue A -> dialogue B ->
// pronunciation.
//
// Grammar: Japanese numbers 1-10, the generic counter つ (hitotsu,
// futatsu...) for small round objects, and price/yen reading — the A1-
// appropriate slice of "numbers and quantity."
//
// Pronunciation: two NEW concepts, both genuinely tied to this lesson's
// own grammar/vocab rather than generic filler —
//   - R-sound (ら row): common shopping-context words, since Japanese r
//     is a single tap, distinct from English r/l/d and a well-known
//     trouble spot for English speakers
//   - the ほん counter's irregular sokuon: いっぽん/ろっぽん/はっぽん/
//     じゅっぽん genuinely take a small っ while に/さん/よん/ご/なな/
//     きゅう don't — a real, well-documented A1 pain point, and directly
//     reinforces this lesson's own "numbers and quantity" grammar point
//     rather than being an unrelated add-on.
// Target text is hiragana-only, matching the established rule (no
// furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja8-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "かいもの", de: "Einkaufen", en: "Shopping" },
  spokenIntro: {
    ja: "ようこそ！きょうは かいものについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about shopping.",
  },
  content: {
    text: {
      ja: "だい8か — かいもの",
      en: "Lesson 8 — Shopping",
    },
  },
};

export const agendaBlock: Block = {
  id: "ja8-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから かいものの たんごを べんきょうします。そのあと すうじと かずを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn shopping vocabulary. After that we'll look at numbers and quantity, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：かいもの", de: "Wortschatz: Einkaufen", en: "Vocabulary: Shopping" } },
      { id: "a3", translations: { ja: "ぶんぽう：すうじと かず", de: "Grammatik: Zahlen und Mengen", en: "Grammar: Numbers and Quantity" } },
      { id: "a4", translations: { ja: "かいわ：しじょうで", de: "Dialog A: Auf dem Markt", en: "Dialogue A: At the Market" } },
      { id: "a5", translations: { ja: "かいわ：ねだんの こうしょう", de: "Dialog B: Über den Preis verhandeln", en: "Dialogue B: Haggling Over Price" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja8-intro",
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
      ja: "よく かいものを しますか？どこで かいものを しますか？",
      en: "Do you shop often? Where do you shop?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja8-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：かいもの", de: "Wortschatz: Einkaufen", en: "Vocabulary: Shopping" },
  spokenIntro: {
    ja: "かいものに かんけいする たんごを みてみましょう。",
    en: "Let's look at some shopping-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "みせ", de: "Geschäft, Laden", en: "shop, store" } },
      { id: "v02", category: "noun", translations: { ja: "しじょう", de: "Markt", en: "market" } },
      { id: "v03", category: "noun", translations: { ja: "おかね", de: "Geld", en: "money" } },
      { id: "v04", category: "noun", translations: { ja: "ねだん", de: "Preis", en: "price" } },
      { id: "v05", category: "noun", translations: { ja: "レシート", de: "Kassenbon", en: "receipt" } },
      { id: "v06", category: "noun", translations: { ja: "おつり", de: "Wechselgeld", en: "change (money)" } },
      { id: "v07", category: "noun", translations: { ja: "ふくろ", de: "Tasche, Tüte", en: "bag" } },
      { id: "v08", category: "noun", translations: { ja: "レジ", de: "Kasse", en: "cash register, checkout" } },
      { id: "v09", category: "noun", translations: { ja: "てんいん", de: "Verkäufer(in)", en: "shop clerk" } },
      { id: "v10", category: "noun", translations: { ja: "きゃく", de: "Kunde, Kundin", en: "customer" } },
      { id: "v11", category: "noun", translations: { ja: "セール", de: "Sonderangebot", en: "sale" } },
      { id: "v12", category: "noun", translations: { ja: "えん", de: "Yen", en: "yen" } },
      { id: "v13", category: "noun", translations: { ja: "やおや", de: "Gemüseladen", en: "vegetable shop" } },
      { id: "v14", category: "noun", translations: { ja: "スーパー", de: "Supermarkt", en: "supermarket" } },
      { id: "v15", category: "noun", translations: { ja: "かご", de: "Einkaufskorb", en: "shopping basket" } },
      { id: "v16", category: "noun", translations: { ja: "わりびき", de: "Rabatt", en: "discount" } },

      { id: "v17", category: "verb", translations: { ja: "かう", de: "kaufen", en: "to buy" } },
      { id: "v18", category: "verb", translations: { ja: "うる", de: "verkaufen", en: "to sell" } },
      { id: "v19", category: "verb", translations: { ja: "はらう", de: "bezahlen", en: "to pay" } },
      { id: "v20", category: "verb", translations: { ja: "えらぶ", de: "auswählen", en: "to choose" } },
      { id: "v21", category: "verb", translations: { ja: "さがす", de: "suchen", en: "to look for" } },
      { id: "v22", category: "verb", translations: { ja: "まける", de: "den Preis senken (feilschen)", en: "to lower a price (haggling)" } },
      { id: "v23", category: "verb", translations: { ja: "つつむ", de: "einpacken", en: "to wrap" } },
      { id: "v24", category: "verb", translations: { ja: "くらべる", de: "vergleichen", en: "to compare" } },

      { id: "v25", category: "adjective", translations: { ja: "たかい", de: "teuer", en: "expensive" } },
      { id: "v26", category: "adjective", translations: { ja: "やすい", de: "günstig", en: "cheap" } },
      { id: "v27", category: "adjective", translations: { ja: "おおい", de: "viel(e)", en: "many, a lot" } },
      { id: "v28", category: "adjective", translations: { ja: "すくない", de: "wenig(e)", en: "few, a little" } },
      { id: "v29", category: "adjective", translations: { ja: "べんり", de: "praktisch", en: "convenient" } },
      { id: "v30", category: "adjective", translations: { ja: "しんせん", de: "frisch", en: "fresh" } },

      // Added after an audit found these appear in the lesson's own
      // dialogues but were missing from the vocab slide.
      { id: "v31", category: "noun", translations: { ja: "やさい", de: "Gemüse", en: "vegetables" } },
      { id: "v32", category: "noun", translations: { ja: "トマト", de: "Tomate", en: "tomato" } },
      { id: "v33", category: "noun", translations: { ja: "たまご", de: "Ei", en: "egg" } },
      { id: "v34", category: "noun", translations: { ja: "かばん", de: "Tasche", en: "bag" } },
      { id: "v35", category: "noun", translations: { ja: "げんきん", de: "Bargeld", en: "cash" } },
      { id: "v36", category: "noun", translations: { ja: "カード", de: "Karte", en: "card" } },
      { id: "v37", category: "noun", translations: { ja: "サービス", de: "gratis, aufs Haus", en: "complimentary, on the house" } },
      { id: "v38", category: "verb", translations: { ja: "いる", de: "brauchen, benötigen", en: "to need" } },
      { id: "v39", category: "adjective", translations: { ja: "ほしい", de: "möchten, haben wollen (い-Adjektiv)", en: "to want (い-adj)" } },
    ],
  },
};

export const grammarNumbersBlock: Block = {
  id: "ja8-grammar-numbers",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "すうじと かず", de: "Zahlen und Mengen", en: "Numbers and Quantity" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、すうじと ものの かぞえかたです。",
    en: "Today's grammar is numbers and how to count things.",
  },
  content: {
    explanation: {
      ja: "にほんごの すうじ 1から10は：いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう です。まるい ものや ちいさい ものを かぞえる とき、「〜つ」を つかいます：ひとつ、ふたつ、みっつ、よっつ、いつつ。ねだんは「〜えん」で いいます。",
      de: "Die japanischen Zahlen 1-10 sind: いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. Um runde oder kleine Gegenstände allgemein zu zählen, benutzt man 〜つ: ひとつ (eins), ふたつ (zwei), みっつ (drei), よっつ (vier), いつつ (fünf). Preise werden mit 〜えん (Yen) angegeben.",
      en: "Japanese numbers 1-10 are: いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. To count round or small objects generically, use 〜つ: ひとつ (one), ふたつ (two), みっつ (three), よっつ (four), いつつ (five). Prices are said with 〜えん (yen).",
    },
    chunks: [
      { id: "n1", translations: { ja: "りんごを ふたつ ください。", de: "Zwei Äpfel, bitte. (ふたつ = zwei, allgemeiner Zähler)", en: "Two apples, please. (ふたつ = two, generic counter)" } },
      { id: "n2", translations: { ja: "これは ひゃくえんです。", de: "Das kostet hundert Yen.", en: "This is one hundred yen." } },
      { id: "n3", translations: { ja: "たまごを ろくこ ください。", de: "Sechs Eier, bitte. (ろっこ/ろくこ — Stückzähler)", en: "Six eggs, please. (ろっこ/ろくこ — item counter)" } },
      { id: "n4", translations: { ja: "ぜんぶで さんびゃくえんです。", de: "Das macht insgesamt dreihundert Yen.", en: "It's three hundred yen in total." } },
      { id: "n5", translations: { ja: "もう すこし やすく できますか？", de: "Können Sie es etwas günstiger machen?", en: "Can you make it a little cheaper?" } },
      { id: "n6", translations: { ja: "みっつで にひゃくえんです。", de: "Drei für zweihundert Yen.", en: "Three for two hundred yen." } },
    ],
  },
};

export const dialogueMarketBlock: Block = {
  id: "ja8-dialogue-market",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：しじょうで", de: "Dialog A: Auf dem Markt", en: "Dialogue A: At the Market" },
  spokenIntro: {
    ja: "しじょうで やさいを かう かいわを ききましょう。",
    en: "Let's listen to someone buying vegetables at the market.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "てんいん", translations: { ja: "いらっしゃいませ！なにか さがしていますか？", de: "Willkommen! Suchen Sie etwas Bestimmtes?", en: "Welcome! Are you looking for something?" } },
      { id: "d2", speaker: "きゃく", translations: { ja: "はい、しんせんな やさいが ほしいです。", de: "Ja, ich möchte etwas frisches Gemüse.", en: "Yes, I want some fresh vegetables." } },
      { id: "d3", speaker: "てんいん", translations: { ja: "この トマトは とても しんせんですよ。", de: "Diese Tomaten sind sehr frisch.", en: "These tomatoes are very fresh." } },
      { id: "d4", speaker: "きゃく", translations: { ja: "いくらですか？", de: "Wie viel kostet das?", en: "How much is it?" } },
      { id: "d5", speaker: "てんいん", translations: { ja: "ひとつ ひゃくえんです。", de: "Hundert Yen pro Stück.", en: "One hundred yen each." } },
      { id: "d6", speaker: "きゃく", translations: { ja: "じゃあ、みっつ ください。", de: "Dann bitte drei.", en: "Then, three please." } },
      { id: "d7", speaker: "てんいん", translations: { ja: "ほかに なにか いかがですか？", de: "Möchten Sie noch etwas?", en: "Would you like anything else?" } },
      { id: "d8", speaker: "きゃく", translations: { ja: "たまごも ありますか？", de: "Haben Sie auch Eier?", en: "Do you have eggs too?" } },
      { id: "d9", speaker: "てんいん", translations: { ja: "はい、ろっこで にひゃくえんです。", de: "Ja, sechs für zweihundert Yen.", en: "Yes, six for two hundred yen." } },
      { id: "d10", speaker: "きゃく", translations: { ja: "それも ください。", de: "Das nehme ich auch.", en: "I'll take that too." } },
      { id: "d11", speaker: "てんいん", translations: { ja: "ぜんぶで ごひゃくえんです。", de: "Insgesamt fünfhundert Yen.", en: "Five hundred yen in total." } },
      { id: "d12", speaker: "きゃく", translations: { ja: "はい、どうぞ。", de: "Bitte sehr.", en: "Here you are." } },
      { id: "d13", speaker: "てんいん", translations: { ja: "おつりは ありません。", de: "Es gibt kein Wechselgeld (passend gezahlt).", en: "There's no change (exact amount)." } },
      { id: "d14", speaker: "きゃく", translations: { ja: "ありがとうございます！", de: "Danke!", en: "Thank you!" } },
    ],
  },
};

export const dialogueHagglingBlock: Block = {
  id: "ja8-dialogue-haggling",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：ねだんの こうしょう", de: "Dialog B: Über den Preis verhandeln", en: "Dialogue B: Haggling Over Price" },
  spokenIntro: {
    ja: "おみせで ねだんを こうしょうする かいわを ききましょう。",
    en: "Let's listen to someone negotiating a price at a shop.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "きゃく", translations: { ja: "この かばんは いくらですか？", de: "Wie viel kostet diese Tasche?", en: "How much is this bag?" } },
      { id: "e2", speaker: "てんいん", translations: { ja: "さんぜんえんです。", de: "Sie kostet dreitausend Yen.", en: "It's three thousand yen." } },
      { id: "e3", speaker: "きゃく", translations: { ja: "ちょっと たかいですね。", de: "Das ist etwas teuer.", en: "That's a bit expensive." } },
      { id: "e4", speaker: "てんいん", translations: { ja: "そうですか。でも、とても べんりですよ。", de: "Ach so? Aber sie ist sehr praktisch.", en: "Is that so? But it's very convenient." } },
      { id: "e5", speaker: "きゃく", translations: { ja: "もう すこし やすく できますか？", de: "Können Sie es etwas günstiger machen?", en: "Can you make it a little cheaper?" } },
      { id: "e6", speaker: "てんいん", translations: { ja: "うーん、にせんごひゃくえんは どうですか？", de: "Hmm, wie wäre es mit zweitausendfünfhundert Yen?", en: "Hmm, how about two thousand five hundred yen?" } },
      { id: "e7", speaker: "きゃく", translations: { ja: "にせんえんは だめですか？", de: "Geht zweitausend Yen nicht?", en: "Is two thousand yen no good?" } },
      { id: "e8", speaker: "てんいん", translations: { ja: "うーん、わかりました。にせんえんで いいです。", de: "Hmm, gut. Zweitausend Yen sind in Ordnung.", en: "Hmm, okay. Two thousand yen is fine." } },
      { id: "e9", speaker: "きゃく", translations: { ja: "ありがとうございます！", de: "Danke!", en: "Thank you!" } },
      { id: "e10", speaker: "てんいん", translations: { ja: "げんきんですか、カードですか？", de: "Bar oder Karte?", en: "Cash or card?" } },
      { id: "e11", speaker: "きゃく", translations: { ja: "げんきんで はらいます。", de: "Ich zahle bar.", en: "I'll pay in cash." } },
      { id: "e12", speaker: "てんいん", translations: { ja: "かしこまりました。", de: "Verstanden.", en: "Understood." } },
      { id: "e13", speaker: "きゃく", translations: { ja: "ふくろは いりますか？", de: "Moment, brauche ich eine Tüte?", en: "Wait, do I need a bag?" } },
      { id: "e14", speaker: "てんいん", translations: { ja: "はい、サービスです。どうぞ。", de: "Ja, die ist gratis. Bitte sehr.", en: "Yes, it's on the house. Here you go." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja8-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "ら行の おとと、かぞえかたの「っ」を れんしゅうしましょう。",
    en: "Let's practice the Japanese R-sound and the small っ in counters.",
  },
  content: {
    groupLabels: {
      rsound: { ja: "ら行の おと", de: "Der japanische R-Laut (ら-Reihe)", en: "The Japanese R-sound (ら row)" },
      counter_no: { ja: "「ほん」ふつう", de: "Zähler ほん — regulär (kein っ)", en: "ほん counter — regular (no っ)" },
      counter_soku: { ja: "「ほん」とくべつ", de: "Zähler ほん — unregelmäßig (mit っ)", en: "ほん counter — irregular (with っ)" },
    },
    items: [
      // R-sound — a single quick tap of the tongue, distinct from both
      // English R and L/D. Common shopping-context words, not forced.
      { id: "r1", category: "rsound", translations: { ja: "いくら", de: "wie viel", en: "how much" } },
      { id: "r2", category: "rsound", translations: { ja: "りんご", de: "Apfel", en: "apple" } },
      { id: "r3", category: "rsound", translations: { ja: "ください", de: "geben Sie mir bitte", en: "please give me" } },
      { id: "r4", category: "rsound", translations: { ja: "これ", de: "dies, das hier", en: "this" } },
      { id: "r5", category: "rsound", translations: { ja: "それ", de: "das", en: "that" } },
      { id: "r6", category: "rsound", translations: { ja: "あれ", de: "das (dort drüben)", en: "that (over there)" } },
      { id: "r7", category: "rsound", translations: { ja: "いらっしゃいませ", de: "willkommen (Begrüßung des Verkäufers)", en: "welcome (shopkeeper's greeting)" } },
      { id: "r8", category: "rsound", translations: { ja: "ありがとう", de: "danke", en: "thank you" } },
      // ほん counter (long thin objects) — genuinely irregular: 1, 6, 8,
      // 10 take a small っ (and shift the counter's consonant), the rest
      // don't. A real, well-known A1 pain point, directly reinforcing
      // this lesson's numbers/quantity grammar.
      { id: "c1", category: "counter_no", translations: { ja: "にほん", de: "zwei (lange Gegenstände)", en: "two (long objects)" } },
      { id: "c2", category: "counter_no", translations: { ja: "さんぼん", de: "drei (lange Gegenstände)", en: "three (long objects)" } },
      { id: "c3", category: "counter_no", translations: { ja: "ごほん", de: "fünf (lange Gegenstände)", en: "five (long objects)" } },
      { id: "c4", category: "counter_no", translations: { ja: "ななほん", de: "sieben (lange Gegenstände)", en: "seven (long objects)" } },
      { id: "s1", category: "counter_soku", translations: { ja: "いっぽん", de: "eins (lange Gegenstände)", en: "one (long objects)" } },
      { id: "s2", category: "counter_soku", translations: { ja: "ろっぽん", de: "sechs (lange Gegenstände)", en: "six (long objects)" } },
      { id: "s3", category: "counter_soku", translations: { ja: "はっぽん", de: "acht (lange Gegenstände)", en: "eight (long objects)" } },
      { id: "s4", category: "counter_soku", translations: { ja: "じゅっぽん", de: "zehn (lange Gegenstände)", en: "ten (long objects)" } },
    ],
  },
};

export const lessonJapanese8: LessonPlan = {
  id: "lesson-ja-8",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 8,
  title: { ja: "かいもの", de: "Einkaufen", en: "Shopping" },
  framingLanguage: "source", // beginner course — same rule as lessons 2, 5, and 10
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarNumbersBlock,
    dialogueMarketBlock,
    dialogueHagglingBlock,
    pronunciationBlock,
    // No song block — German track has "This Old Man" here, but no
    // Japanese-specific song has been researched yet (known open item).
  ],
};
