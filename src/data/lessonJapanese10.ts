import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 10 — per a1-master-lesson-table-v02.md row 10:
// Vocab: Health | Grammar: Imperatives | Dialogue A: doctor giving instructions
// to a patient | Dialogue B: giving first aid advice to a friend | Song: open
// slot (none in the master table for this lesson — not omitted by mistake).
//
// Same 9-block shape as lessonJapanese2.ts, minus the closing song (this
// lesson genuinely has none per the table) and with TWO dialogues instead of
// one, per the now-confirmed "two dialogues per lesson" target agreed for
// all future lessons: title -> agenda -> warm-up -> vocab -> grammar ->
// dialogue A -> dialogue B -> reading practice.
//
// Grammar choice: Japanese imperatives for a health/instruction context are
// naturally the polite request form (て-form + ください) rather than the
// blunt plain imperative (which is stronger/commanding and not how a doctor
// or a friend would actually speak) — こうしてください / やめてください
// etc. This matches how N5 courses actually introduce "imperatives" in
// practice (te-form + ください is the first form taught, not the harsher
// plain command form), while still directly covering the master table's
// "Imperatives" grammar slot.
// Target text is hiragana-only, matching lessonJapanese2.ts's own stated
// rule (no furigana/ruby-text rendering exists in the app yet).
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja10-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "びょうきと けんこう", en: "Health & Instructions" },
  spokenIntro: {
    ja: "ようこそ！きょうは けんこうについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about health.",
  },
  content: {
    text: {
      ja: "だい10か — びょうきと けんこう",
      en: "Lesson 10 — Health & Instructions",
    },
  },
};

export const agendaBlock: Block = {
  id: "ja10-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから けんこうの たんごを べんきょうします。そのあと めいれいけいを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn health vocabulary. After that we'll look at the imperative/request form, practice two dialogues, and finish with reading practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：けんこう", en: "Vocabulary: Health" } },
      { id: "a3", translations: { ja: "ぶんぽう：めいれいけい", en: "Grammar: Imperatives / Requests" } },
      { id: "a4", translations: { ja: "かいわ：びょういんで", en: "Dialogue A: At the Doctor" } },
      { id: "a5", translations: { ja: "かいわ：おうきゅうしょち", en: "Dialogue B: First Aid" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja10-intro",
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
      ja: "さいきん、げんきですか？びょうきに なったことが ありますか？",
      en: "Have you been well lately? Have you ever been sick?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja10-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：けんこう", en: "Vocabulary: Health" },
  spokenIntro: {
    ja: "けんこうに かんけいする たんごを みてみましょう。",
    en: "Let's look at some health-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "びょうき", en: "illness, sickness" } },
      { id: "v02", category: "noun", translations: { ja: "ねつ", en: "fever" } },
      { id: "v03", category: "noun", translations: { ja: "せき", en: "cough" } },
      { id: "v04", category: "noun", translations: { ja: "あたま", en: "head" } },
      { id: "v05", category: "noun", translations: { ja: "おなか", en: "stomach" } },
      { id: "v06", category: "noun", translations: { ja: "のど", en: "throat" } },
      { id: "v07", category: "noun", translations: { ja: "くすり", en: "medicine" } },
      { id: "v08", category: "noun", translations: { ja: "びょういん", en: "hospital, clinic" } },
      { id: "v09", category: "noun", translations: { ja: "いしゃ", en: "doctor" } },
      { id: "v10", category: "noun", translations: { ja: "かんごし", en: "nurse" } },
      { id: "v11", category: "noun", translations: { ja: "きゅうきゅうしゃ", en: "ambulance" } },
      { id: "v12", category: "noun", translations: { ja: "けが", en: "injury" } },
      { id: "v13", category: "noun", translations: { ja: "ばんそうこう", en: "bandage, plaster" } },
      { id: "v14", category: "noun", translations: { ja: "たいおん", en: "body temperature" } },
      { id: "v15", category: "noun", translations: { ja: "アレルギー", en: "allergy" } },
      { id: "v16", category: "noun", translations: { ja: "びょうしつ", en: "hospital room" } },

      { id: "v17", category: "verb", translations: { ja: "いたい", en: "to hurt (adjective, used verbally)" } },
      { id: "v18", category: "verb", translations: { ja: "やすむ", en: "to rest" } },
      { id: "v19", category: "verb", translations: { ja: "ねる", en: "to sleep, lie down" } },
      { id: "v20", category: "verb", translations: { ja: "くすりを のむ", en: "to take medicine" } },
      { id: "v21", category: "verb", translations: { ja: "びょういんへ いく", en: "to go to the hospital" } },
      { id: "v22", category: "verb", translations: { ja: "みてもらう", en: "to be examined (by a doctor)" } },
      { id: "v23", category: "verb", translations: { ja: "しんぱいする", en: "to worry" } },
      { id: "v24", category: "verb", translations: { ja: "なおる", en: "to recover, heal" } },

      { id: "v25", category: "adjective", translations: { ja: "だいじょうぶ", en: "okay, fine" } },
      { id: "v26", category: "adjective", translations: { ja: "げんき", en: "healthy, well" } },
      { id: "v27", category: "adjective", translations: { ja: "しんぱい", en: "worried" } },
      { id: "v28", category: "adjective", translations: { ja: "つらい", en: "painful, hard to bear" } },
      { id: "v29", category: "adjective", translations: { ja: "きけん", en: "dangerous" } },
      { id: "v30", category: "adjective", translations: { ja: "あんぜん", en: "safe" } },
    ],
  },
};

export const grammarImperativeBlock: Block = {
  id: "ja10-grammar-imperative",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "めいれいけい・おねがい", en: "Imperatives / Requests" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、だれかに なにかを おねがいする かたちです。",
    en: "Today's grammar is how to ask someone to do something.",
  },
  content: {
    explanation: {
      ja: "だれかに なにかを して ほしい とき、どうしの て形に「ください」を つけます。「て形 + ください」は、ていねいな おねがいや めいれいに なります。",
      en: "To ask someone to do something, add ください to the te-form of a verb. \"Te-form + ください\" makes a polite request or instruction — this is how doctors, nurses, and friends actually give instructions in Japanese, rather than the blunter plain command form.",
    },
    chunks: [
      { id: "i1", translations: { ja: "やすんで ください。", en: "Please rest." } },
      { id: "i2", translations: { ja: "くすりを のんで ください。", en: "Please take the medicine." } },
      { id: "i3", translations: { ja: "びょういんへ いって ください。", en: "Please go to the hospital." } },
      { id: "i4", translations: { ja: "ねて ください。", en: "Please lie down / sleep." } },
      { id: "i5", translations: { ja: "しんぱいしないで ください。", en: "Please don't worry. (negative request)" } },
      { id: "i6", translations: { ja: "むりを しないで ください。", en: "Please don't overdo it." } },
    ],
  },
};

export const dialogueDoctorBlock: Block = {
  id: "ja10-dialogue-doctor",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：びょういんで", en: "Dialogue A: At the Doctor" },
  spokenIntro: {
    ja: "いしゃが かんじゃに しじを だす かいわを ききましょう。",
    en: "Let's listen to a doctor giving instructions to a patient.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "いしゃ", translations: { ja: "どうしましたか？", en: "What's wrong?" } },
      { id: "d2", speaker: "かんじゃ", translations: { ja: "あたまが いたくて、ねつも あります。", en: "My head hurts, and I have a fever too." } },
      { id: "d3", speaker: "いしゃ", translations: { ja: "いつから ですか？", en: "Since when?" } },
      { id: "d4", speaker: "かんじゃ", translations: { ja: "きのうの よるから です。", en: "Since last night." } },
      { id: "d5", speaker: "いしゃ", translations: { ja: "せきも ありますか？", en: "Do you have a cough too?" } },
      { id: "d6", speaker: "かんじゃ", translations: { ja: "いいえ、せきは ありません。", en: "No, I don't have a cough." } },
      { id: "d7", speaker: "いしゃ", translations: { ja: "わかりました。そうですか。この くすりを のんで ください。", en: "I see. Please take this medicine." } },
      { id: "d8", speaker: "かんじゃ", translations: { ja: "はい。いつ のみますか？", en: "Okay. When should I take it?" } },
      { id: "d9", speaker: "いしゃ", translations: { ja: "まいにち あさと よる、のんで ください。", en: "Take it every day, morning and evening." } },
      { id: "d10", speaker: "かんじゃ", translations: { ja: "しごとを やすんだ ほうが いいですか？", en: "Should I take a day off work?" } },
      { id: "d11", speaker: "いしゃ", translations: { ja: "はい、きょうは やすんで ください。", en: "Yes, please rest today." } },
      { id: "d12", speaker: "かんじゃ", translations: { ja: "わかりました。あした びょういんへ きても いいですか？", en: "Understood. May I come back to the hospital tomorrow?" } },
      { id: "d13", speaker: "いしゃ", translations: { ja: "もし まだ ねつが あったら、きて ください。", en: "If you still have a fever, please come." } },
      { id: "d14", speaker: "かんじゃ", translations: { ja: "はい、わかりました。ありがとうございます。", en: "Okay, understood. Thank you." } },
    ],
  },
};

export const dialogueFirstAidBlock: Block = {
  id: "ja10-dialogue-firstaid",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：おうきゅうしょち", en: "Dialogue B: First Aid" },
  spokenIntro: {
    ja: "ともだちに おうきゅうしょちを おしえる かいわを ききましょう。",
    en: "Let's listen to someone giving a friend first aid advice.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "ゆうた", translations: { ja: "いたい！てを けがしました。", en: "Ow! I hurt my hand." } },
      { id: "e2", speaker: "みか", translations: { ja: "だいじょうぶ？みせて。", en: "Are you okay? Let me see." } },
      { id: "e3", speaker: "ゆうた", translations: { ja: "ちょっと いたいです。", en: "It hurts a little." } },
      { id: "e4", speaker: "みか", translations: { ja: "ちが でていますね。", en: "You're bleeding." } },
      { id: "e5", speaker: "ゆうた", translations: { ja: "ちょっと きけんかもしれません。", en: "It might be a bit dangerous (serious)." } },
      { id: "e6", speaker: "みか", translations: { ja: "だいじょうぶです。まず、ここに すわって ください。", en: "It's okay. First, please sit here." } },
      { id: "e7", speaker: "ゆうた", translations: { ja: "はい、すわりました。", en: "Okay, I'm sitting." } },
      { id: "e8", speaker: "みか", translations: { ja: "それから、みずで あらって ください。", en: "Then, please wash it with water." } },
      { id: "e9", speaker: "ゆうた", translations: { ja: "わかりました。", en: "Understood." } },
      { id: "e10", speaker: "みか", translations: { ja: "つぎに、ばんそうこうを はって ください。", en: "Next, please put on a bandage." } },
      { id: "e11", speaker: "ゆうた", translations: { ja: "はい。ありがとう。", en: "Okay. Thank you." } },
      { id: "e12", speaker: "みか", translations: { ja: "まだ いたいですか？", en: "Does it still hurt?" } },
      { id: "e13", speaker: "ゆうた", translations: { ja: "すこし いたいです。", en: "A little." } },
      { id: "e14", speaker: "みか", translations: { ja: "まだ いたかったら、びょういんへ いって ください。", en: "If it still hurts, please go to the hospital." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja10-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "ながい おとと みじかい おと、それから ちいさい「っ」を れんしゅうしましょう。",
    en: "Let's practice long vs short vowels, reinforced from last time, plus a new one: the small っ.",
  },
  content: {
    groupLabels: {
      longvowel: { ja: "ながい・みじかい ぼいん（ふくしゅう）", en: "Long vs short vowels (reinforced)" },
      sokuon: { ja: "ちいさい「っ」", en: "Small っ (doubled consonant)" },
    },
    items: [
      // Long vs short vowels — reinforced from Lesson 2, new health-themed pairs.
      { id: "l1", category: "longvowel", translations: { ja: "びょういん", en: "hospital (long おう)" } },
      { id: "l2", category: "longvowel", translations: { ja: "びよういん", en: "beauty salon (お + separate う)" } },
      { id: "l3", category: "longvowel", translations: { ja: "とる", en: "to take (short お)" } },
      { id: "l4", category: "longvowel", translations: { ja: "とおる", en: "to pass through (long とお)" } },
      { id: "l5", category: "longvowel", translations: { ja: "せき", en: "cough (short い)" } },
      { id: "l6", category: "longvowel", translations: { ja: "せいき", en: "century (long せい)" } },
      // Small っ — a beat of silence before the next consonant; genuinely
      // changes the word, not a subtle nuance. Well-known textbook pairs.
      { id: "s1", category: "sokuon", translations: { ja: "きて", en: "come (te-form, no っ)" } },
      { id: "s2", category: "sokuon", translations: { ja: "きって", en: "stamp (with っ)" } },
      { id: "s3", category: "sokuon", translations: { ja: "かた", en: "shoulder / way of doing (no っ)" } },
      { id: "s4", category: "sokuon", translations: { ja: "かった", en: "bought, past tense (with っ)" } },
      { id: "s5", category: "sokuon", translations: { ja: "おと", en: "sound (no っ)" } },
      { id: "s6", category: "sokuon", translations: { ja: "おっと", en: "husband (with っ)" } },
      { id: "s7", category: "sokuon", translations: { ja: "また", en: "again (no っ)" } },
      { id: "s8", category: "sokuon", translations: { ja: "まった", en: "waited, past tense (with っ)" } },
    ],
  },
};

export const lessonJapanese10: LessonPlan = {
  id: "lesson-ja-10",
  courseId: "japanese-beginner",
  title: { ja: "びょうきと けんこう", en: "Health & Instructions" },
  framingLanguage: "source", // beginner course — same rule as lessons 2 (German) and ja-2
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarImperativeBlock,
    dialogueDoctorBlock,
    dialogueFirstAidBlock,
    pronunciationBlock,
    // No song block — Lesson 10 is an "open slot" in a1-master-lesson-table-v02.md
  ],
};
