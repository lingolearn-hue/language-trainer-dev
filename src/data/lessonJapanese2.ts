import type { LessonPlan, Block } from "../types";

// Japanese-from-English, Lesson 2 — per a1-master-lesson-table-v02.md row 2:
// Vocab: Body | Grammar: Personal pronouns | Dialogue A: at the doctor,
// pointing out symptoms | Dialogue B: describing yourself and a friend
// physically | Song: "Head Shoulders Knees and Toes" in the German
// track — genuinely translatable here (unlike most other rows) since
// it's literally a body-parts song, matching this lesson's own topic.
//
// REPLACES the original lessonJapanese2.ts content: that version predated
// the master table and used generic, untagged vocabulary/grammar with no
// relationship to what row 2 actually specifies — it was never realigned
// after the table was adopted, while every other Japanese lesson (1, 3,
// 4, 5, 8, 10) does follow the table. Rebuilt here to match, and to keep
// exactly one "Lesson 2" rather than one that's out of step with the
// rest of the course. The pitch-accent / long-vs-short-vowel
// pronunciation content is carried over unchanged from the old version —
// it's generic sound practice, not tied to any particular vocab topic,
// so there was no reason to replace it.
//
// Grammar: personal pronouns (わたし, あなた, かれ, かのじょ, わたしたち,
// かれら) plus は-marking — the natural first-lesson-after-copula grammar
// point, and directly useful for Dialogue B's "describing yourself and a
// friend" contrast (かれは.../かのじょは...).
// Target text is hiragana-only, matching the established rule.
// courseId: "japanese-beginner", taught by Yui (ja-en) — see data/trainers.ts.

export const titleBlock: Block = {
  id: "ja2-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { ja: "からだ", zh: "身体", de: "Körper", en: "Body" },
  spokenIntro: {
    ja: "ようこそ！きょうは からだの ぶぶんについて べんきょうしましょう。",
    zh: "欢迎！今天我们学习身体部位相关的词汇。",
    de: "Willkommen! Heute lernen wir Körperteile.",
    en: "Welcome! Today we'll learn about parts of the body.",
  },
  content: {
    text: { ja: "だい2か — からだ", zh: "第2课 — 身体", de: "Lektion 2 — Körper", en: "Lesson 2 — Body" },
  },
};

export const agendaBlock: Block = {
  id: "ja2-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", zh: "介绍", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから からだの たんごを べんきょうします。そのあと にんしょうだいめいしを みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうと うたを します。",
    zh: "今天我们先简单介绍，然后学习身体词汇。之后学习人称代词，练习两段对话，最后进行发音练习并唱一首歌。",
    de: "Heute beginnen wir mit einer kurzen Einführung und lernen dann Wortschatz zum Körper. Danach schauen wir uns Personalpronomen an, üben zwei Dialoge und schließen mit Aussprachetraining und einem Lied ab.",
    en: "Today we'll start with a short introduction, then learn body vocabulary. After that we'll look at personal pronouns, practice two dialogues, and finish with pronunciation practice and a song.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", zh: "介绍", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：からだ", zh: "词汇：身体", de: "Wortschatz: Körper", en: "Vocabulary: Body" } },
      { id: "a3", translations: { ja: "ぶんぽう：にんしょうだいめいし", zh: "语法：人称代词", de: "Grammatik: Personalpronomen", en: "Grammar: Personal Pronouns" } },
      { id: "a4", translations: { ja: "かいわ：いしゃに しょうじょうを つたえる", zh: "对话A：在医院", de: "Dialog A: Beim Arzt", en: "Dialogue A: At the Doctor" } },
      { id: "a5", translations: { ja: "かいわ：じぶんと ともだちの とくちょう", zh: "对话B：描述自己和朋友", de: "Dialog B: Sich selbst und einen Freund beschreiben", en: "Dialogue B: Describing Yourself and a Friend" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" } },
      { id: "a7", translations: { ja: "うた", zh: "歌曲", de: "Lied", en: "Song" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja2-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", zh: "热身", de: "Aufwärmen", en: "Warm-up" },
  spokenIntro: {
    ja: "はじめる まえに、すこし はなしましょう。",
    zh: "开始之前，我们先聊聊。",
    de: "Bevor wir anfangen, lass uns kurz reden.",
    en: "Before we start, let's talk a little.",
  },
  content: {
    text: {
      ja: "きょう どこか いたい ところが ありますか？",
      zh: "今天有哪里疼吗？",
      de: "Tut dir heute irgendwo etwas weh?",
      en: "Does anywhere hurt today?",
    },
  },
};

export const vocabBlock: Block = {
  id: "ja2-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "たんご：からだ", zh: "词汇：身体", de: "Wortschatz: Körper", en: "Vocabulary: Body" },
  spokenIntro: {
    ja: "からだの ぶぶんに かんけいする たんごを みてみましょう。",
    zh: "我们来看一些身体部位相关的词汇。",
    de: "Schauen wir uns ein paar Wörter für Körperteile an.",
    en: "Let's look at some words for parts of the body.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "からだ", zh: "身体", de: "Körper", en: "body" } },
      { id: "v02", category: "noun", translations: { ja: "あたま", zh: "头", de: "Kopf", en: "head" } },
      { id: "v03", category: "noun", translations: { ja: "かお", zh: "脸", de: "Gesicht", en: "face" } },
      { id: "v04", category: "noun", translations: { ja: "め", zh: "眼睛", de: "Augen", en: "eyes" } },
      { id: "v05", category: "noun", translations: { ja: "みみ", zh: "耳朵", de: "Ohren", en: "ears" } },
      { id: "v06", category: "noun", translations: { ja: "はな", zh: "鼻子", de: "Nase", en: "nose" } },
      { id: "v07", category: "noun", translations: { ja: "くち", zh: "嘴", de: "Mund", en: "mouth" } },
      { id: "v08", category: "noun", translations: { ja: "は", zh: "牙齿", de: "Zähne", en: "teeth" } },
      { id: "v09", category: "noun", translations: { ja: "くび", zh: "脖子", de: "Hals", en: "neck" } },
      { id: "v10", category: "noun", translations: { ja: "かた", zh: "肩", de: "Schultern", en: "shoulders" } },
      { id: "v11", category: "noun", translations: { ja: "て", zh: "手", de: "Hände, Arme", en: "hands, arms" } },
      { id: "v12", category: "noun", translations: { ja: "ゆび", zh: "手指", de: "Finger", en: "fingers" } },
      { id: "v13", category: "noun", translations: { ja: "むね", zh: "胸部", de: "Brust", en: "chest" } },
      { id: "v14", category: "noun", translations: { ja: "おなか", zh: "肚子", de: "Bauch", en: "stomach" } },
      { id: "v15", category: "noun", translations: { ja: "せなか", zh: "背", de: "Rücken", en: "back" } },
      { id: "v16", category: "noun", translations: { ja: "あし", zh: "腿", de: "Beine, Füße", en: "legs, feet" } },
      { id: "v17", category: "noun", translations: { ja: "ひざ", zh: "膝盖", de: "Knie", en: "knees" } },

      { id: "v18", category: "verb", translations: { ja: "うごかす", zh: "移", de: "bewegen (etwas)", en: "to move (something)" } },
      { id: "v19", category: "verb", translations: { ja: "いたむ", zh: "疼", de: "wehtun, schmerzen", en: "to hurt, ache" } },
      { id: "v20", category: "verb", translations: { ja: "のばす", zh: "伸", de: "dehnen", en: "to stretch" } },
      { id: "v21", category: "verb", translations: { ja: "まげる", zh: "弯", de: "beugen", en: "to bend" } },
      { id: "v22", category: "verb", translations: { ja: "さわる", zh: "动", de: "berühren", en: "to touch" } },
      { id: "v23", category: "verb", translations: { ja: "あらう", zh: "清洗", de: "waschen", en: "to wash" } },
      { id: "v24", category: "verb", translations: { ja: "つかう", zh: "用", de: "benutzen", en: "to use" } },

      { id: "v25", category: "adjective", translations: { ja: "つよい", zh: "强壮", de: "stark", en: "strong" } },
      { id: "v26", category: "adjective", translations: { ja: "よわい", zh: "弱", de: "schwach", en: "weak" } },
      { id: "v27", category: "adjective", translations: { ja: "ながい", zh: "长", de: "lang", en: "long" } },
      { id: "v28", category: "adjective", translations: { ja: "みじかい", zh: "短", de: "kurz", en: "short" } },
      { id: "v29", category: "adjective", translations: { ja: "おおきい", zh: "大", de: "groß", en: "big" } },
      { id: "v30", category: "adjective", translations: { ja: "ちいさい", zh: "小", de: "klein", en: "small" } },

      // Added after an audit found these appear in the lesson's own
      // dialogues but were missing from the vocab slide.
      { id: "v31", category: "noun", translations: { ja: "のど", zh: "嗓子", de: "Hals, Kehle", en: "throat" } },
      { id: "v32", category: "noun", translations: { ja: "せ", zh: "个子", de: "Körpergröße", en: "height" } },
      { id: "v33", category: "noun", translations: { ja: "くすり", zh: "药", de: "Medikament", en: "medicine" } },
      { id: "v34", category: "verb", translations: { ja: "にる", zh: "像", de: "ähneln", en: "to resemble" } },
      { id: "v35", category: "adjective", translations: { ja: "たかい", zh: "高", de: "groß, hoch", en: "tall, high" } },
      { id: "v36", category: "adjective", translations: { ja: "ひくい", zh: "矮", de: "klein, niedrig", en: "short, low" } },
      { id: "v37", category: "adjective", translations: { ja: "どんな", zh: "什么样", de: "was für ein(e)", en: "what kind of" } },
    ],
  },
};

export const grammarPronounsBlock: Block = {
  id: "ja2-grammar-pronouns",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "にんしょうだいめいし", zh: "人称代词", de: "Personalpronomen", en: "Personal Pronouns" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、にんしょうだいめいしと「は」の つかいかたです。",
    zh: "今天的语法是人称代词以及如何搭配は使用。",
    de: "Die heutige Grammatik sind Personalpronomen und wie man は mit ihnen benutzt.",
    en: "Today's grammar is personal pronouns and how to use は with them.",
  },
  content: {
    explanation: {
      ja: "にほんごの にんしょうだいめいしは：わたし（わたくし）、あなた、かれ、かのじょ、わたしたち、かれら です。「あなた」は じっさいには あまり つかわず、なまえを よぶ ほうが しぜんです。だいめいしの あとに「は」を つけて、しゅだいを しめします。",
      zh: "日语的人称代词有：わたし（我）、あなた（你）、かれ（他）、かのじょ（她）、わたしたち（我们）、かれら（他们）。实际使用中「あなた」用得比较少，直接称呼对方的名字更自然。代词后面加「は」表示句子的主题。",
      de: "Die japanischen Personalpronomen sind: わたし (ich), あなた (du/Sie), かれ (er), かのじょ (sie), わたしたち (wir), かれら (sie, Plural). あなた wird in der Praxis seltener benutzt als im Englischen oder Deutschen — den Namen der Person direkt zu benutzen ist meist natürlicher. は nach einem Pronomen markiert es als Thema des Satzes.",
      en: "Japanese personal pronouns: わたし (I), あなた (you), かれ (he), かのじょ (she), わたしたち (we), かれら (they). あなた is used less than English \"you\" in practice — using someone's name directly is usually more natural. は after a pronoun marks it as the topic of the sentence.",
    },
    chunks: [
      { id: "g1", translations: { ja: "わたしは がくせいです。", zh: "我是学生。（わたし + は）", de: "Ich bin Student. (わたし + は)", en: "I am a student. (わたし + は)" } },
      { id: "g2", translations: { ja: "かれは せが たかいです。", zh: "他个子高。（かれ + は）", de: "Er ist groß. (かれ + は)", en: "He is tall. (かれ + は)" } },
      { id: "g3", translations: { ja: "かのじょは かみが ながいです。", zh: "她的头发很长。（かのじょ + は）", de: "Sie hat langes Haar. (かのじょ + は)", en: "She has long hair. (かのじょ + は)" } },
      { id: "g4", translations: { ja: "わたしたちは ともだちです。", zh: "我们是朋友。（わたしたち + は）", de: "Wir sind Freunde. (わたしたち + は)", en: "We are friends. (わたしたち + は)" } },
      { id: "g5", translations: { ja: "かれらは きょうだいです。", zh: "他们是兄弟姐妹。（かれら + は）", de: "Sie sind Geschwister. (かれら + は)", en: "They are siblings. (かれら + は)" } },
      { id: "g6", translations: { ja: "たなかさんは いしゃです。", zh: "田中先生是医生。（用名字代替あなた，更自然）", de: "Herr Tanaka ist Arzt. (Name statt あなた, natürlicher)", en: "Mr. Tanaka is a doctor. (name instead of あなた, more natural)" } },
    ],
  },
};

export const dialogueDoctorSymptomsBlock: Block = {
  id: "ja2-dialogue-doctor",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いしゃに しょうじょうを つたえる", zh: "对话A：在医院", de: "Dialog A: Beim Arzt", en: "Dialogue A: At the Doctor" },
  spokenIntro: {
    ja: "いしゃに どこが いたいかを つたえる かいわを ききましょう。",
    zh: "我们来听听有人告诉医生哪里疼。",
    de: "Hören wir uns an, wie jemand einem Arzt sagt, wo es wehtut.",
    en: "Let's listen to someone telling a doctor where it hurts.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "いしゃ", translations: { ja: "どうしましたか？", zh: "怎么了？", de: "Was fehlt Ihnen?", en: "What's wrong?" } },
      { id: "d2", speaker: "かんじゃ", translations: { ja: "あたまが いたいです。", zh: "我头疼。", de: "Mein Kopf tut weh.", en: "My head hurts." } },
      { id: "d3", speaker: "いしゃ", translations: { ja: "ほかに いたい ところは ありますか？", zh: "还有别的地方疼吗？", de: "Tut noch etwas anderes weh?", en: "Does anywhere else hurt?" } },
      { id: "d4", speaker: "かんじゃ", translations: { ja: "はい、のども いたいです。", zh: "是的，我嗓子也疼。", de: "Ja, mein Hals tut auch weh.", en: "Yes, my throat hurts too." } },
      { id: "d5", speaker: "いしゃ", translations: { ja: "おなかは どうですか？", zh: "你的肚子呢？", de: "Und Ihr Bauch?", en: "What about your stomach?" } },
      { id: "d6", speaker: "かんじゃ", translations: { ja: "おなかは だいじょうぶです。", zh: "我的肚子没事。", de: "Mein Bauch ist in Ordnung.", en: "My stomach is fine." } },
      { id: "d7", speaker: "いしゃ", translations: { ja: "せなかは？", zh: "你的背呢？", de: "Und dein Rücken?", en: "What about your back?" } },
      { id: "d8", speaker: "かんじゃ", translations: { ja: "すこし いたいです。", zh: "有点疼。", de: "Es tut ein bisschen weh.", en: "It hurts a little." } },
      { id: "d9", speaker: "いしゃ", translations: { ja: "てを うごかせますか？", zh: "你能动一下手吗？", de: "Können Sie Ihre Hand bewegen?", en: "Can you move your hand?" } },
      { id: "d10", speaker: "かんじゃ", translations: { ja: "はい、うごかせます。", zh: "可以，我能动。", de: "Ja, ich kann sie bewegen.", en: "Yes, I can move it." } },
      { id: "d11", speaker: "いしゃ", translations: { ja: "ゆびは？", zh: "你的手指呢？", de: "Und Ihre Finger?", en: "What about your fingers?" } },
      { id: "d12", speaker: "かんじゃ", translations: { ja: "ゆびも うごかせます。", zh: "我的手指也能动。", de: "Ich kann auch meine Finger bewegen.", en: "I can move my fingers too." } },
      { id: "d13", speaker: "いしゃ", translations: { ja: "わかりました。くすりを だします。", zh: "明白了。我给您开点药。", de: "Verstanden. Ich verschreibe Ihnen ein Medikament.", en: "Understood. I'll prescribe some medicine." } },
      { id: "d14", speaker: "かんじゃ", translations: { ja: "ありがとうございます。", zh: "谢谢。", de: "Danke.", en: "Thank you." } },
    ],
  },
};

export const dialogueDescribingBlock: Block = {
  id: "ja2-dialogue-describing",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：じぶんと ともだちの とくちょう", zh: "对话B：描述自己和朋友", de: "Dialog B: Sich selbst und einen Freund beschreiben", en: "Dialogue B: Describing Yourself and a Friend" },
  spokenIntro: {
    ja: "じぶんと ともだちの みための とくちょうを はなす かいわを ききましょう。",
    zh: "我们来听一段描述自己和朋友外貌的对话。",
    de: "Hören wir uns ein Gespräch an, in dem jemand sich selbst und einen Freund körperlich beschreibt.",
    en: "Let's listen to a conversation describing yourself and a friend physically.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "わたしは せが ひくいです。", zh: "我个子矮。", de: "Ich bin klein.", en: "I am short." } },
      { id: "e2", speaker: "けん", translations: { ja: "わたしは せが たかいです。", zh: "我个子高。", de: "Ich bin groß.", en: "I am tall." } },
      { id: "e3", speaker: "あい", translations: { ja: "かのじょは どんな ひとですか？", zh: "她是什么样的人？", de: "Wie ist sie?", en: "What is she like?" } },
      { id: "e4", speaker: "けん", translations: { ja: "かのじょは かみが みじかいです。", zh: "她的头发很短。", de: "Sie hat kurzes Haar.", en: "She has short hair." } },
      { id: "e5", speaker: "あい", translations: { ja: "めは おおきいですか？", zh: "她的眼睛大吗？", de: "Sind ihre Augen groß?", en: "Are her eyes big?" } },
      { id: "e6", speaker: "けん", translations: { ja: "はい、めが とても おおきいです。", zh: "是的，她的眼睛很大。", de: "Ja, ihre Augen sind sehr groß.", en: "Yes, her eyes are very big." } },
      { id: "e7", speaker: "けん", translations: { ja: "かれは どんな ひとですか？", zh: "他是什么样的人？", de: "Wie ist er?", en: "What is he like?" } },
      { id: "e8", speaker: "あい", translations: { ja: "かれは てが おおきいです。", zh: "他的手很大。", de: "Er hat große Hände.", en: "He has big hands." } },
      { id: "e9", speaker: "けん", translations: { ja: "つよそうですね。", zh: "他看起来很强壮。", de: "Er sieht stark aus.", en: "He looks strong." } },
      { id: "e10", speaker: "あい", translations: { ja: "はい、とても つよいです。", zh: "是的，他非常强壮。", de: "Ja, er ist sehr stark.", en: "Yes, he's very strong." } },
      { id: "e11", speaker: "けん", translations: { ja: "わたしたちは にていますか？", zh: "我们长得像吗？", de: "Sehen wir uns ähnlich?", en: "Do we look alike?" } },
      { id: "e12", speaker: "あい", translations: { ja: "いいえ、ぜんぜん にていません。", zh: "不，一点也不像。", de: "Nein, überhaupt nicht.", en: "No, not at all." } },
      { id: "e13", speaker: "けん", translations: { ja: "あしは どうですか？おなじ くらい ながいですか？", zh: "腿呢？长度差不多吗？", de: "Und die Beine? Sind sie ungefähr gleich lang?", en: "What about legs? Are they about the same length?" } },
      { id: "e14", speaker: "あい", translations: { ja: "けんさんの あしの ほうが ながいです。", zh: "健，你的腿更长。", de: "Deine Beine sind länger, Ken.", en: "Your legs are longer, Ken." } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja2-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "にほんごの むずかしい おとを れんしゅうしましょう。",
    zh: "我们来练习两个日语发音中的难点。",
    de: "Üben wir zwei knifflige Dinge der japanischen Aussprache.",
    en: "Let's practice two tricky things about Japanese pronunciation.",
  },
  content: {
    groupLabels: {
      pitch: { ja: "アクセント（たかさ）", zh: "声调重音（同拼写，不同意思）", de: "Tonhöhenakzent (gleiche Schreibweise, andere Bedeutung)", en: "Pitch accent (same spelling, different meaning)" },
      short: { ja: "みじかい (短)", zh: "短", de: "Kurz", en: "Short" },
      long: { ja: "ながい (長)", zh: "长", de: "Lang", en: "Long" },
    },
    items: [
      { id: "p1", category: "pitch", translations: { ja: "はし", zh: "筷子（高低）／桥（低高）", de: "Essstäbchen (HL) / Brücke (LH)", en: "chopsticks (HL) / bridge (LH)" } },
      { id: "p2", category: "pitch", translations: { ja: "あめ", zh: "雨（高低）／糖果（低高）", de: "Regen (HL) / Bonbon (LH)", en: "rain (HL) / candy (LH)" } },
      { id: "p3", category: "pitch", translations: { ja: "かみ", zh: "纸（高低）／头发（低高）", de: "Papier (HL) / Haare (LH)", en: "paper (HL) / hair (LH)" } },
      { id: "p4", category: "pitch", translations: { ja: "くも", zh: "云（高低）／蜘蛛（低高）", de: "Wolke (HL) / Spinne (LH)", en: "cloud (HL) / spider (LH)" } },
      { id: "p5", category: "pitch", translations: { ja: "かき", zh: "柿子（高低）／牡蛎（低高）", de: "Kaki (HL) / Auster (LH)", en: "persimmon (HL) / oyster (LH)" } },
      { id: "p6", category: "pitch", translations: { ja: "はな", zh: "花（低高）／鼻子（高低）", de: "Blume (LH) / Nase (HL)", en: "flower (LH) / nose (HL)" } },
      { id: "p7", category: "pitch", translations: { ja: "きる", zh: "穿（高低）／剪（低高）", de: "tragen (HL) / schneiden (LH)", en: "to wear (HL) / to cut (LH)" } },
      { id: "p8", category: "pitch", translations: { ja: "かえる", zh: "青蛙（低高）／返回（高低）", de: "Frosch (LH) / zurückkehren (HL)", en: "frog (LH) / to return (HL)" } },
      { id: "s1", category: "short", translations: { ja: "おばさん", zh: "阿姨", de: "Tante", en: "aunt" } },
      { id: "s2", category: "short", translations: { ja: "おじさん", zh: "叔叔", de: "Onkel", en: "uncle" } },
      { id: "s3", category: "short", translations: { ja: "ゆき", zh: "雪", de: "Schnee", en: "snow" } },
      { id: "s4", category: "short", translations: { ja: "え", zh: "图画", de: "Bild", en: "picture" } },
      { id: "n1", category: "long", translations: { ja: "おばあさん", zh: "奶奶", de: "Großmutter", en: "grandmother" } },
      { id: "n2", category: "long", translations: { ja: "おじいさん", zh: "爷爷", de: "Großvater", en: "grandfather" } },
      { id: "n3", category: "long", translations: { ja: "ゆうき", zh: "勇气", de: "Mut", en: "courage" } },
      { id: "n4", category: "long", translations: { ja: "ええ", zh: "嗯（口语）", de: "ja (locker)", en: "yes (casual)" } },
    ],
  },
};

export const songBlock: Block = {
  id: "ja2-song",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 4,
  isSong: true, // see types/index.ts — explicit flag, not positional inference
  title: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, Shoulders, Knees and Toes" },
  spokenIntro: {
    ja: "さいごに、からだの うたを うたいましょう。",
    zh: "最后我们来唱一首关于身体的歌。",
    de: "Zum Abschluss singen wir ein Lied über den Körper.",
    en: "To finish, let's sing a song about the body.",
  },
  content: {
    lines: [
      { id: "sg1", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } },
      { id: "sg2", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes" } },
      { id: "sg3", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } },
      { id: "sg4", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes" } },
      { id: "sg5", translations: { ja: "め と みみと くちと はな", zh: "眼睛、耳朵、嘴巴、鼻子", de: "Augen und Ohren und Mund und Nase", en: "Eyes and ears and mouth and nose" } },
      { id: "sg6", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } },
    ],
  },
};

export const lessonJapanese2: LessonPlan = {
  id: "lesson-ja-2",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 2,
  title: { ja: "からだ", zh: "身体", de: "Körper", en: "Body" },
  framingLanguage: "source", // beginner course — same rule as the other Japanese lessons
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarPronounsBlock,
    dialogueDoctorSymptomsBlock,
    dialogueDescribingBlock,
    pronunciationBlock,
    songBlock, // song always closes the lesson
  ],
};
