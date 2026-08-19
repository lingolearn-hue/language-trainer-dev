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
  title: { ja: "かぞく", zh: "家庭", de: "Familie", en: "Family" },
  spokenIntro: {
    ja: "ようこそ！きょうは かぞくについて べんきょうしましょう。",
    en: "Welcome! Today we'll learn about family.",
  },
  content: {
    text: { ja: "だい1か — かぞく", zh: "第1课 — 家庭", de: "Lektion 1 — Familie", en: "Lesson 1 — Family" },
  },
};

export const agendaBlock: Block = {
  id: "ja1-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { ja: "ながれ", zh: "介绍", de: "Ablauf", en: "Agenda" },
  spokenIntro: {
    ja: "きょうは まず じこしょうかい、それから かぞくの たんごを べんきょうします。そのあと「です」と「います」を みて、ふたつの かいわを れんしゅうし、さいごに はつおんの れんしゅうを します。",
    en: "Today we'll start with a short introduction, then learn family vocabulary. After that we'll look at です and います, practice two dialogues, and finish with pronunciation practice.",
  },
  content: {
    items: [
      { id: "a1", translations: { ja: "じこしょうかい", zh: "介绍", de: "Einführung", en: "Introduction" } },
      { id: "a2", translations: { ja: "たんご：かぞく", zh: "词汇：家庭", de: "Wortschatz: Familie", en: "Vocabulary: Family" } },
      { id: "a3", translations: { ja: "ぶんぽう：「です」と「います」", zh: "语法：是／有", de: "Grammatik: Sein / Haben", en: "Grammar: To Be / To Have" } },
      { id: "a4", translations: { ja: "かいわ：かぞくを しょうかいする", zh: "对话A：介绍家人", de: "Dialog A: Die Familie vorstellen", en: "Dialogue A: Introducing Family" } },
      { id: "a5", translations: { ja: "かいわ：いえに すんでいる ひと", zh: "对话B：谁住在家里", de: "Dialog B: Wer zu Hause wohnt", en: "Dialogue B: Who Lives at Home" } },
      { id: "a6", translations: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" } },
    ],
  },
};

export const introBlock: Block = {
  id: "ja1-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 2,
  title: { ja: "じこしょうかい", zh: "热身", de: "Aufwärmen", en: "Warm-up" },
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
  title: { ja: "たんご：かぞく", zh: "词汇：家庭", de: "Wortschatz: Familie", en: "Vocabulary: Family" },
  spokenIntro: {
    ja: "かぞくに かんけいする たんごを みてみましょう。",
    en: "Let's look at some family-related words.",
  },
  content: {
    items: [
      { id: "v01", category: "noun", translations: { ja: "かぞく", zh: "家庭", de: "Familie", en: "family" } },
      { id: "v02", category: "noun", translations: { ja: "おとうさん", zh: "爸爸（他人的／称呼自己的）", de: "Vater (fremder / eigener, in Anrede)", en: "father (someone else's / addressing your own)" } },
      { id: "v03", category: "noun", translations: { ja: "おかあさん", zh: "妈妈（他人的／称呼自己的）", de: "Mutter (fremde / eigene, in Anrede)", en: "mother (someone else's / addressing your own)" } },
      { id: "v04", category: "noun", translations: { ja: "おにいさん", zh: "哥哥（他人的／称呼自己的）", de: "älterer Bruder (fremder / eigener, in Anrede)", en: "older brother (someone else's / addressing your own)" } },
      { id: "v05", category: "noun", translations: { ja: "おねえさん", zh: "姐姐（他人的／称呼自己的）", de: "ältere Schwester (fremde / eigene, in Anrede)", en: "older sister (someone else's / addressing your own)" } },
      { id: "v06", category: "noun", translations: { ja: "おとうと", zh: "弟弟（自己的）", de: "jüngerer Bruder (eigener)", en: "younger brother (own)" } },
      { id: "v07", category: "noun", translations: { ja: "いもうと", zh: "妹妹（自己的）", de: "jüngere Schwester (eigene)", en: "younger sister (own)" } },
      { id: "v08", category: "noun", translations: { ja: "そふ", zh: "爷爷（自己的）", de: "Großvater (eigener)", en: "grandfather (own)" } },
      { id: "v09", category: "noun", translations: { ja: "そぼ", zh: "奶奶（自己的）", de: "Großmutter (eigene)", en: "grandmother (own)" } },
      { id: "v10", category: "noun", translations: { ja: "むすこ", zh: "儿子", de: "Sohn", en: "son" } },
      { id: "v11", category: "noun", translations: { ja: "むすめ", zh: "女儿", de: "Tochter", en: "daughter" } },
      { id: "v12", category: "noun", translations: { ja: "おっと", zh: "丈夫（自己的）", de: "Ehemann (eigener)", en: "husband (own)" } },
      { id: "v13", category: "noun", translations: { ja: "つま", zh: "妻子（自己的）", de: "Ehefrau (eigene)", en: "wife (own)" } },
      { id: "v14", category: "noun", translations: { ja: "きょうだい", zh: "兄弟姐妹", de: "Geschwister", en: "siblings" } },
      { id: "v15", category: "noun", translations: { ja: "りょうしん", zh: "父母", de: "Eltern", en: "parents" } },
      { id: "v16", category: "noun", translations: { ja: "ペット", zh: "宠物", de: "Haustier", en: "pet" } },

      { id: "v17", category: "verb", translations: { ja: "いる", zh: "有／存在（有生命）", de: "haben / existieren (belebt)", en: "to have / to exist (animate)" } },
      { id: "v18", category: "verb", translations: { ja: "ある", zh: "有／存在（无生命）", de: "haben / existieren (unbelebt)", en: "to have / to exist (inanimate)" } },
      { id: "v19", category: "verb", translations: { ja: "すむ", zh: "居住", de: "wohnen", en: "to live (reside)" } },
      { id: "v20", category: "verb", translations: { ja: "しょうかいする", zh: "介绍", de: "vorstellen", en: "to introduce" } },
      { id: "v21", category: "verb", translations: { ja: "にる", zh: "相似", de: "ähneln", en: "to resemble" } },
      { id: "v22", category: "verb", translations: { ja: "そだてる", zh: "抚养", de: "großziehen", en: "to raise (a child)" } },
      { id: "v23", category: "verb", translations: { ja: "あう", zh: "见面", de: "treffen", en: "to meet" } },
      { id: "v24", category: "verb", translations: { ja: "はなす", zh: "说话", de: "reden, sprechen", en: "to talk" } },

      { id: "v25", category: "adjective", translations: { ja: "おおきい", zh: "大（家庭、房子）", de: "groß (Familie, Haus)", en: "big (family, house)" } },
      { id: "v26", category: "adjective", translations: { ja: "ちいさい", zh: "小", de: "klein", en: "small" } },
      { id: "v27", category: "adjective", translations: { ja: "やさしい", zh: "友善", de: "freundlich", en: "kind" } },
      { id: "v28", category: "adjective", translations: { ja: "きびしい", zh: "严格", de: "streng", en: "strict" } },
      { id: "v29", category: "adjective", translations: { ja: "にぎやか", zh: "热闹", de: "lebhaft", en: "lively" } },
      { id: "v30", category: "adjective", translations: { ja: "しずか", zh: "安静", de: "ruhig", en: "quiet" } },

      // Added after an audit found these appear in the lesson's own
      // dialogues but were missing from the vocab slide (e.g. はたらく
      // "to work" — flagged directly; the rest found via the same
      // cross-check of dialogue text against the vocab list).
      { id: "v31", category: "noun", translations: { ja: "ちち", zh: "爸爸（自己的，对外人说时用）", de: "Vater (eigener)", en: "father (own, used when talking about your own to others)" } },
      { id: "v32", category: "noun", translations: { ja: "はは", zh: "妈妈（自己的，对外人说时用）", de: "Mutter (eigene)", en: "mother (own, used when talking about your own to others)" } },
      { id: "v33", category: "noun", translations: { ja: "がくせい", zh: "学生", de: "Student(in), Schüler(in)", en: "student" } },
      { id: "v34", category: "noun", translations: { ja: "せんせい", zh: "老师", de: "Lehrer(in)", en: "teacher" } },
      { id: "v35", category: "noun", translations: { ja: "なまえ", zh: "名字", de: "Name", en: "name" } },
      { id: "v36", category: "noun", translations: { ja: "いぬ", zh: "狗", de: "Hund", en: "dog" } },
      { id: "v37", category: "noun", translations: { ja: "ねこ", zh: "猫", de: "Katze", en: "cat" } },
      { id: "v38", category: "verb", translations: { ja: "はたらく", zh: "工作", de: "arbeiten", en: "to work" } },
      { id: "v39", category: "verb", translations: { ja: "さんぽする", zh: "散步", de: "spazieren gehen", en: "to take a walk" } },
      { id: "v40", category: "adjective", translations: { ja: "かわいい", zh: "可爱", de: "süß, niedlich", en: "cute" } },
    ],
  },
};

export const grammarToBeToHaveBlock: Block = {
  id: "ja1-grammar-tobe",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { ja: "「です」と「います」", zh: "是／有", de: "Sein / Haben", en: "To Be / To Have" },
  spokenIntro: {
    ja: "きょうの ぶんぽうは、「です」と「います」の つかいかたです。",
    en: "Today's grammar is how to use です and います/あります.",
  },
  content: {
    explanation: {
      ja: "「です」は「〜だ」の ていねいな かたちで、なにかを せつめいする ときに つかいます。「いる」は ひとや どうぶつが いる とき、「ある」は ものが ある ときに つかいます。えいごの「have」は にほんごでは かならず どちらかに わかれます。",
      zh: "です是「〜だ」的礼貌形式，用于说明或描述某事物。います用于人和动物（「拥有／存在」，有生命），あります用于物品（「拥有／存在」，无生命）。英语的「have」在日语中总是要分成这两种情况之一，没有单一的对应词。",
      de: "です ist die höfliche Form von „sein\" und wird benutzt, um etwas zu beschreiben oder zu identifizieren. います wird für Menschen und Tiere benutzt („haben/existieren\", belebt), あります für Gegenstände („haben/existieren\", unbelebt). Das deutsche „haben\" teilt sich im Japanischen immer in eine von diesen beiden auf — es gibt keine einzelne Entsprechung.",
      en: "です is the polite form of \"to be,\" used to describe or identify something. います is used for people and animals (\"to have/exist,\" animate), while あります is used for objects (\"to have/exist,\" inanimate). English \"have\" always splits into one of these two in Japanese — there's no single equivalent.",
    },
    chunks: [
      { id: "g1", translations: { ja: "これは かぞくの しゃしんです。", zh: "这是我家的照片。（です — 是）", de: "Das ist ein Foto meiner Familie. (です — sein)", en: "This is a photo of my family. (です — to be)" } },
      { id: "g2", translations: { ja: "かぞくは よにんです。", zh: "我家有四口人。（です — 描述）", de: "Meine Familie hat vier Personen. (です — beschreiben)", en: "My family has four people. (です — describing)" } },
      { id: "g3", translations: { ja: "いもうとが います。", zh: "我有一个妹妹。（います — 有生命）", de: "Ich habe eine jüngere Schwester. (います — belebt)", en: "I have a younger sister. (います — animate)" } },
      { id: "g4", translations: { ja: "ねこが います。", zh: "我有一只猫。（います — 有生命）", de: "Ich habe eine Katze. (います — belebt)", en: "I have a cat. (います — animate)" } },
      { id: "g5", translations: { ja: "くるまが あります。", zh: "我有一辆车。（あります — 无生命）", de: "Ich habe ein Auto. (あります — unbelebt)", en: "I have a car. (あります — inanimate)" } },
      { id: "g6", translations: { ja: "おおきい いえが あります。", zh: "我有一栋大房子。（あります — 无生命）", de: "Ich habe ein großes Haus. (あります — unbelebt)", en: "I have a big house. (あります — inanimate)" } },
    ],
  },
};

export const dialogueIntroducingFamilyBlock: Block = {
  id: "ja1-dialogue-introducing",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：かぞくを しょうかいする", zh: "对话A：介绍家人", de: "Dialog A: Die Familie vorstellen", en: "Dialogue A: Introducing Family" },
  spokenIntro: {
    ja: "パーティーで かぞくを しょうかいする かいわを ききましょう。",
    en: "Let's listen to someone introducing their family at a party.",
  },
  content: {
    lines: [
      { id: "d1", speaker: "あい", translations: { ja: "これは わたしの かぞくの しゃしんです。", zh: "这是我家的照片。", de: "Das ist ein Foto meiner Familie.", en: "This is a photo of my family." } },
      { id: "d2", speaker: "けん", translations: { ja: "いいですね！なんにん かぞくですか？", zh: "真好！你家有几口人？", de: "Schön! Wie viele Personen hat deine Familie?", en: "Nice! How many people are in your family?" } },
      { id: "d3", speaker: "あい", translations: { ja: "よにんです。ちちと ははと おとうとです。", zh: "四口人。我爸爸、我妈妈和我弟弟。", de: "Vier Personen. Mein Vater, meine Mutter und mein jüngerer Bruder.", en: "Four people. My father, my mother, and my younger brother." } },
      { id: "d4", speaker: "けん", translations: { ja: "おとうとさんは いま なんさいですか？", zh: "你弟弟现在多大了？", de: "Wie alt ist dein jüngerer Bruder jetzt?", en: "How old is your younger brother now?" } },
      { id: "d5", speaker: "あい", translations: { ja: "じゅうごさいです。がくせいです。", zh: "他十五岁。他是学生。", de: "Er ist fünfzehn. Er ist Schüler.", en: "He's fifteen. He's a student." } },
      { id: "d6", speaker: "けん", translations: { ja: "おとうさんは なにを していますか？", zh: "你爸爸是做什么工作的？", de: "Was macht dein Vater beruflich?", en: "What does your father do?" } },
      { id: "d7", speaker: "あい", translations: { ja: "いしゃです。びょういんで はたらいています。", zh: "他是医生。他在医院工作。", de: "Er ist Arzt. Er arbeitet in einem Krankenhaus.", en: "He's a doctor. He works at a hospital." } },
      { id: "d8", speaker: "けん", translations: { ja: "すごいですね。おかあさんは？", zh: "真厉害。你妈妈呢？", de: "Das ist beeindruckend. Und deine Mutter?", en: "That's impressive. What about your mother?" } },
      { id: "d9", speaker: "あい", translations: { ja: "がっこうの せんせいです。とても やさしいです。", zh: "她是学校老师。她非常友善。", de: "Sie ist Lehrerin. Sie ist sehr freundlich.", en: "She's a school teacher. She's very kind." } },
      { id: "d10", speaker: "けん", translations: { ja: "ペットは いますか？", zh: "你有宠物吗？", de: "Hast du ein Haustier?", en: "Do you have a pet?" } },
      { id: "d11", speaker: "あい", translations: { ja: "はい、いぬが いっぴき います。", zh: "有，我有一只狗。", de: "Ja, ich habe einen Hund.", en: "Yes, I have one dog." } },
      { id: "d12", speaker: "けん", translations: { ja: "かわいいですね。なまえは？", zh: "真可爱。它叫什么名字？", de: "Wie süß. Wie heißt er?", en: "That's cute. What's its name?" } },
      { id: "d13", speaker: "あい", translations: { ja: "ももです。とても げんきです。", zh: "桃子。她非常有活力。", de: "Momo. Sie ist sehr lebhaft.", en: "Momo. She's very energetic." } },
      { id: "d14", speaker: "けん", translations: { ja: "たのしそうな かぞくですね！", zh: "听起来是个有趣的家庭！", de: "Klingt nach einer lustigen Familie!", en: "Sounds like a fun family!" } },
    ],
  },
};

export const dialogueWhoLivesAtHomeBlock: Block = {
  id: "ja1-dialogue-who-lives",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 6,
  title: { ja: "かいわ：いえに すんでいる ひと", zh: "对话B：谁住在家里", de: "Dialog B: Wer zu Hause wohnt", en: "Dialogue B: Who Lives at Home" },
  spokenIntro: {
    ja: "いえに だれが すんでいるかを はなす かいわを ききましょう。",
    en: "Let's listen to a conversation about who lives in someone's house.",
  },
  content: {
    lines: [
      { id: "e1", speaker: "みか", translations: { ja: "けんさんの いえには だれが すんでいますか？", zh: "健，谁住在你家？", de: "Wer wohnt bei dir zu Hause, Ken?", en: "Who lives in your house, Ken?" } },
      { id: "e2", speaker: "けん", translations: { ja: "りょうしんと そふが すんでいます。", zh: "我父母和我爷爷住在那里。", de: "Meine Eltern und mein Großvater wohnen dort.", en: "My parents and my grandfather live there." } },
      { id: "e3", speaker: "みか", translations: { ja: "そぼは いますか？", zh: "你奶奶也在吗？", de: "Ist deine Großmutter auch dort?", en: "Is your grandmother there too?" } },
      { id: "e4", speaker: "けん", translations: { ja: "いいえ、そぼは いません。もう いません。", zh: "不，我奶奶不在了。她已经去世了。", de: "Nein, meine Großmutter nicht. Sie ist verstorben.", en: "No, my grandmother isn't. She's passed away." } },
      { id: "e5", speaker: "みか", translations: { ja: "そうですか。そふは げんきですか？", zh: "原来如此。你爷爷身体好吗？", de: "Verstehe. Geht es deinem Großvater gut?", en: "I see. Is your grandfather doing well?" } },
      { id: "e6", speaker: "けん", translations: { ja: "はい、とても げんきです。まいにち さんぽします。", zh: "很好。他每天都散步。", de: "Ja, sehr gut. Er macht jeden Tag einen Spaziergang.", en: "Yes, very well. He takes a walk every day." } },
      { id: "e7", speaker: "みか", translations: { ja: "みかさんの いえは どうですか？", zh: "美香，你家怎么样？", de: "Und wie ist es bei dir zu Hause, Mika?", en: "What about your house, Mika?" } },
      { id: "e8", speaker: "みか", translations: { ja: "わたしは おっとと むすめと すんでいます。", zh: "我和丈夫、女儿住在一起。", de: "Ich wohne mit meinem Mann und meiner Tochter.", en: "I live with my husband and daughter." } },
      { id: "e9", speaker: "けん", translations: { ja: "むすめさんは なんさいですか？", zh: "你女儿多大了？", de: "Wie alt ist deine Tochter?", en: "How old is your daughter?" } },
      { id: "e10", speaker: "みか", translations: { ja: "さんさいです。とても にぎやかです。", zh: "三岁。她非常活泼。", de: "Drei Jahre alt. Sie ist sehr lebhaft.", en: "Three years old. She's very lively." } },
      { id: "e11", speaker: "けん", translations: { ja: "ペットも いますか？", zh: "你也有宠物吗？", de: "Hast du auch ein Haustier?", en: "Do you have a pet too?" } },
      { id: "e12", speaker: "みか", translations: { ja: "はい、ねこが にひき います。", zh: "有，我有两只猫。", de: "Ja, ich habe zwei Katzen.", en: "Yes, I have two cats." } },
      { id: "e13", speaker: "けん", translations: { ja: "しずかな いえですか？", zh: "你家安静吗？", de: "Ist es bei euch ruhig zu Hause?", en: "Is your house quiet?" } },
      { id: "e14", speaker: "みか", translations: { ja: "いいえ、むすめが いるので にぎやかです！", zh: "不，因为我女儿在，很热闹！", de: "Nein, es ist lebhaft wegen meiner Tochter!", en: "No, it's lively because of my daughter!" } },
    ],
  },
};

export const pronunciationBlock: Block = {
  id: "ja1-pronunciation",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" },
  spokenIntro: {
    ja: "だくてんと はんだくてん、それから アクセントを れんしゅうしましょう。",
    en: "Let's practice voiced/semi-voiced consonant marks, and reinforce pitch accent.",
  },
  content: {
    groupLabels: {
      dakuten: { ja: "だくてん・はんだくてん", zh: "浊音／半浊音符号（゛゜）", de: "Stimmhafte / halbstimmhafte Zeichen (゛゜)", en: "Voiced / semi-voiced marks (゛゜)" },
      pitch: { ja: "アクセント（ふくしゅう）", zh: "声调重音（巩固，新词对）", de: "Tonhöhenakzent (vertieft, neue Paare)", en: "Pitch accent (reinforced, new pairs)" },
    },
    items: [
      // だくてん — Japanese's own parallel to "voiced vs unvoiced," marked
      // visually with ゛(voiced) or ゜(semi-voiced), a real literacy point
      // as much as a pronunciation one.
      { id: "dk1", category: "dakuten", translations: { ja: "か → が", zh: "ka → ga（清音 → 浊音）", de: "ka → ga (stimmlos → stimmhaft)", en: "ka → ga (unvoiced → voiced)" } },
      { id: "dk2", category: "dakuten", translations: { ja: "た → だ", zh: "ta → da（清音 → 浊音）", de: "ta → da (stimmlos → stimmhaft)", en: "ta → da (unvoiced → voiced)" } },
      { id: "dk3", category: "dakuten", translations: { ja: "さ → ざ", zh: "sa → za（清音 → 浊音）", de: "sa → za (stimmlos → stimmhaft)", en: "sa → za (unvoiced → voiced)" } },
      { id: "dk4", category: "dakuten", translations: { ja: "は → ば → ぱ", zh: "ha → ba → pa（清音 → 浊音 → 半浊音）", de: "ha → ba → pa (stimmlos → stimmhaft → halbstimmhaft)", en: "ha → ba → pa (unvoiced → voiced → semi-voiced)" } },
      { id: "dk5", category: "dakuten", translations: { ja: "かぞく → がぞう", zh: "家庭／图像（最小对立对，か对が）", de: "Familie / Bild (Minimalpaar, か vs が)", en: "family / image (minimal pair, か vs が)" } },
      { id: "dk6", category: "dakuten", translations: { ja: "たいがく → だいがく", zh: "（非单词）／大学（た对だ）", de: "(kein Wort) / Universität (た vs だ)", en: "(not a word) / university (た vs だ)" } },
      // Pitch accent — fresh pairs, none repeated from L2/L5.
      { id: "p1", category: "pitch", translations: { ja: "いま", zh: "现在（低高）／客厅（高低）", de: "jetzt (LH) / Wohnzimmer (HL)", en: "now (LH) / living room (HL)" } },
      { id: "p2", category: "pitch", translations: { ja: "しろ", zh: "白色（低高）／城堡（高低）", de: "weiß (LH) / Burg (HL)", en: "white (LH) / castle (HL)" } },
      { id: "p3", category: "pitch", translations: { ja: "は", zh: "牙齿（高低）／叶子（低高）", de: "Zahn (HL) / Blatt (LH)", en: "tooth (HL) / leaf (LH)" } },
      { id: "p4", category: "pitch", translations: { ja: "あき", zh: "秋天（低高）／空闲（高低）", de: "Herbst (LH) / leer, frei (HL)", en: "autumn (LH) / vacant, empty (HL)" } },
    ],
  },
};

export const lessonJapanese1: LessonPlan = {
  id: "lesson-ja-1",
  courseId: "japanese-beginner",
  language: "Japanese",
  level: "A1",
  lessonNumber: 1,
  title: { ja: "かぞく", zh: "家庭", de: "Familie", en: "Family" },
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
