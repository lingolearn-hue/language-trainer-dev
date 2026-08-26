import type { TopicLesson } from "../topicTypes";

// PROOF OF CONCEPT for the topic-based lesson system (see engine/buildLesson.ts).
// Vocab, both dialogues, and the topic name are extracted verbatim from
// lessonJapanese5.ts — already fully translated into ja/en/de/zh, so
// this is genuinely the SAME data, not re-authored. Japanese grammar/
// pronunciation are also carried over from that file unchanged. German
// grammar/pronunciation are newly authored here — per
// a1-master-lesson-table-v04.md row 5: Grammar = present tense
// (regular/irregular/modal), Pronunciation = S vs Z / German Z as "ts" —
// this is what proves the split actually works: the same vocab/dialogue
// data now backs two structurally different target-language lessons.
// No song — row 5 is an open slot in the master table.

export const topicFood: TopicLesson = {
  id: "topic-05-food",
  lessonNumber: 5,
  topicName: { ja: "たべもの", zh: "食物", de: "Essen", en: "Food" },

  vocab: [
    { id: "v01", category: "noun", translations: { ja: "ごはん", zh: "米饭", de: "Reis, Mahlzeit", en: "rice, meal" } },
    { id: "v02", category: "noun", translations: { ja: "パン", zh: "面包", de: "Brot", en: "bread" } },
    { id: "v03", category: "noun", translations: { ja: "みず", zh: "水", de: "Wasser", en: "water" } },
    { id: "v04", category: "noun", translations: { ja: "おちゃ", zh: "茶", de: "Tee", en: "tea" } },
    { id: "v05", category: "noun", translations: { ja: "にく", zh: "肉", de: "Fleisch", en: "meat" } },
    { id: "v06", category: "noun", translations: { ja: "さかな", zh: "鱼", de: "Fisch", en: "fish" } },
    { id: "v07", category: "noun", translations: { ja: "やさい", zh: "蔬菜", de: "Gemüse", en: "vegetables" } },
    { id: "v08", category: "noun", translations: { ja: "くだもの", zh: "水果", de: "Obst", en: "fruit" } },
    { id: "v09", category: "noun", translations: { ja: "たまご", zh: "蛋", de: "Ei", en: "egg" } },
    { id: "v10", category: "noun", translations: { ja: "スープ", zh: "汤", de: "Suppe", en: "soup" } },
    { id: "v11", category: "noun", translations: { ja: "メニュー", zh: "菜单", de: "Speisekarte", en: "menu" } },
    { id: "v12", category: "noun", translations: { ja: "レストラン", zh: "餐厅", de: "Restaurant", en: "restaurant" } },
    { id: "v13", category: "noun", translations: { ja: "あさごはん", zh: "早饭", de: "Frühstück", en: "breakfast" } },
    { id: "v14", category: "noun", translations: { ja: "ひるごはん", zh: "午饭", de: "Mittagessen", en: "lunch" } },
    { id: "v15", category: "noun", translations: { ja: "ばんごはん", zh: "晚餐", de: "Abendessen", en: "dinner" } },
    { id: "v16", category: "noun", translations: { ja: "デザート", zh: "点心", de: "Nachtisch", en: "dessert" } },
    { id: "v17", category: "verb", translations: { ja: "たべる", zh: "吃", de: "essen", en: "to eat" } },
    { id: "v18", category: "verb", translations: { ja: "のむ", zh: "喝", de: "trinken", en: "to drink" } },
    { id: "v19", category: "verb", translations: { ja: "つくる", zh: "做", de: "machen, zubereiten", en: "to make" } },
    { id: "v20", category: "verb", translations: { ja: "ちゅうもんする", zh: "点", de: "bestellen", en: "to order" } },
    { id: "v21", category: "verb", translations: { ja: "はらう", zh: "付钱", de: "bezahlen", en: "to pay" } },
    { id: "v22", category: "verb", translations: { ja: "たりる", zh: "够", de: "reichen, genug sein", en: "to be enough" } },
    { id: "v23", category: "verb", translations: { ja: "すく", zh: "饿", de: "hungrig werden (おなかが すく)", en: "to become hungry (おなかが すく)" } },
    { id: "v24", category: "verb", translations: { ja: "のどが かわく", zh: "渴", de: "durstig werden", en: "to become thirsty" } },
    { id: "v25", category: "adjective", translations: { ja: "おいしい", zh: "好吃", de: "lecker", en: "delicious" } },
    { id: "v26", category: "adjective", translations: { ja: "まずい", zh: "难吃", de: "schlecht schmeckend", en: "bad-tasting" } },
    { id: "v27", category: "adjective", translations: { ja: "あまい", zh: "甜", de: "süß", en: "sweet" } },
    { id: "v28", category: "adjective", translations: { ja: "からい", zh: "辣", de: "scharf", en: "spicy" } },
    { id: "v29", category: "adjective", translations: { ja: "しょっぱい", zh: "咸", de: "salzig", en: "salty" } },
    { id: "v30", category: "adjective", translations: { ja: "あつい", zh: "热", de: "heiß (Temperatur)", en: "hot (temperature)" } },
    { id: "v31", category: "noun", translations: { ja: "すし", zh: "寿司", de: "Sushi", en: "sushi" } },
    { id: "v32", category: "noun", translations: { ja: "かいしゃ", zh: "公司", de: "Firma, Büro", en: "company, office" } },
    { id: "v33", category: "noun", translations: { ja: "じぶん", zh: "自己", de: "man selbst", en: "oneself" } },
    { id: "v34", category: "adjective", translations: { ja: "すき", zh: "喜欢", de: "mögen (な-Adjektiv)", en: "to like, be fond of (な-adj)" } },
  ],

  dialogueA: {
    title: { ja: "かいわ：レストランで", zh: "对话A：在餐厅", de: "Dialog A: Im Restaurant", en: "Dialogue A: At the Restaurant" },
    lines: [
      { id: "d1", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "いらっしゃいませ。なんめいさまですか？", zh: "欢迎光临。请问几位？", de: "Willkommen. Wie viele Personen?", en: "Welcome. How many people?" } },
      { id: "d2", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "ふたりです。", zh: "两位。", de: "Zwei Personen.", en: "Two people." } },
      { id: "d3", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "こちらへ どうぞ。メニューです。", zh: "这边请。这是菜单。", de: "Hier entlang, bitte. Hier ist die Speisekarte.", en: "This way, please. Here's the menu." } },
      { id: "d4", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "ありがとうございます。", zh: "谢谢。", de: "Danke.", en: "Thank you." } },
      { id: "d5", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "ごちゅうもんは おきまりですか？", zh: "您决定好点什么了吗？", de: "Haben Sie schon gewählt?", en: "Have you decided your order?" } },
      { id: "d6", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "すしと スープを おねがいします。", zh: "请给我寿司和汤。", de: "Sushi und Suppe, bitte.", en: "Sushi and soup, please." } },
      { id: "d7", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "おのみものは？", zh: "要喝点什么吗？", de: "Und etwas zu trinken?", en: "What about a drink?" } },
      { id: "d8", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "おちゃを ください。", zh: "请给我茶。", de: "Tee, bitte.", en: "Tea, please." } },
      { id: "d9", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "かしこまりました。すこし おまちください。", zh: "好的，请稍等。", de: "Verstanden. Einen Moment bitte.", en: "Understood. Please wait a moment." } },
      { id: "d10", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "すみません、これは からいですか？", zh: "请问，这个辣吗？", de: "Entschuldigung, ist das scharf?", en: "Excuse me, is this spicy?" } },
      { id: "d11", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "いいえ、あまり からくないです。", zh: "不辣，不是很辣。", de: "Nein, es ist nicht sehr scharf.", en: "No, it's not very spicy." } },
      { id: "d12", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "よかった。それを ちゅうもんします。", zh: "太好了，那我就点这个。", de: "Gut. Das bestelle ich.", en: "Great. I'll order that." } },
      { id: "d13", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "かしこまりました。", zh: "明白了。", de: "Verstanden.", en: "Understood." } },
      { id: "d14", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "とても おいしかったです。ごちそうさまでした。", zh: "非常好吃。谢谢款待。", de: "Es war sehr lecker. Danke für das Essen.", en: "It was very delicious. Thank you for the meal." } },
    ],
  },

  dialogueB: {
    title: { ja: "かいわ：まいにちの しょくじ", zh: "对话B：日常饮食习惯", de: "Dialog B: Tägliche Essgewohnheiten", en: "Dialogue B: Daily Eating Habits" },
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "まいあさ なにを たべますか？", zh: "你每天早上吃什么？", de: "Was isst du jeden Morgen?", en: "What do you eat every morning?" } },
      { id: "e2", speaker: "けん", translations: { ja: "パンと たまごを たべます。", zh: "我吃面包和鸡蛋。", de: "Ich esse Brot und Eier.", en: "I eat bread and eggs." } },
      { id: "e3", speaker: "あい", translations: { ja: "おちゃも のみますか？", zh: "你也喝茶吗？", de: "Trinkst du auch Tee?", en: "Do you also drink tea?" } },
      { id: "e4", speaker: "けん", translations: { ja: "はい、まいあさ のみます。", zh: "是的，我每天早上都喝。", de: "Ja, ich trinke ihn jeden Morgen.", en: "Yes, I drink it every morning." } },
      { id: "e5", speaker: "あい", translations: { ja: "ひるごはんは どこで たべますか？", zh: "你在哪里吃午饭？", de: "Wo isst du zu Mittag?", en: "Where do you eat lunch?" } },
      { id: "e6", speaker: "けん", translations: { ja: "かいしゃで たべます。", zh: "我在公司吃。", de: "Ich esse im Büro.", en: "I eat at the office." } },
      { id: "e7", speaker: "あい", translations: { ja: "じぶんで つくりますか？", zh: "是你自己做的吗？", de: "Machst du es selbst?", en: "Do you make it yourself?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、あさ つくります。", zh: "是的，我早上做的。", de: "Ja, ich mache es morgens.", en: "Yes, I make it in the morning." } },
      { id: "e9", speaker: "あい", translations: { ja: "ばんごはんは？", zh: "晚饭呢？", de: "Und zum Abendessen?", en: "What about dinner?" } },
      { id: "e10", speaker: "けん", translations: { ja: "レストランで たべることが おおいです。", zh: "我经常在餐厅吃。", de: "Ich esse oft in einem Restaurant.", en: "I often eat at a restaurant." } },
      { id: "e11", speaker: "あい", translations: { ja: "からい たべものが すきですか？", zh: "你喜欢吃辣的吗？", de: "Magst du scharfes Essen?", en: "Do you like spicy food?" } },
      { id: "e12", speaker: "けん", translations: { ja: "はい、とても すきです。あいさんは？", zh: "是的，我很喜欢。爱，你呢？", de: "Ja, sehr gerne. Und du, Ai?", en: "Yes, I like it a lot. What about you, Ai?" } },
      { id: "e13", speaker: "あい", translations: { ja: "わたしは あまい ものが すきです。", zh: "我喜欢甜的。", de: "Ich mag süße Sachen.", en: "I like sweet things." } },
      { id: "e14", speaker: "けん", translations: { ja: "なるほど。でざーとが すきなんですね。", zh: "原来如此，你喜欢甜点啊。", de: "Verstehe. Du magst also Nachtisch.", en: "I see. So you like dessert." } },
    ],
  },

  song: {
    // Row 5 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song.
    title: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, Shoulders, Knees and Toes" },
    lines: [
      { id: "sg1", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } },
      { id: "sg2", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes" } },
      { id: "sg3", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } },
      { id: "sg4", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes" } },
      { id: "sg5", translations: { ja: "め と みみと くちと はな", zh: "眼睛、耳朵、嘴巴、鼻子", de: "Augen und Ohren und Mund und Nase", en: "Eyes and ears and mouth and nose" } },
      { id: "sg6", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes" } }
    ]
  },

  grammar: {
    ja: {
      title: { ja: "げんざいけい", zh: "现在时", de: "Gegenwartsform", en: "Present Tense" },
      explanation: {
        ja: "どうしの ます形は、ていねいな げんざい・みらいけいです。にほんごには ふきそくな どうしが ふたつだけ あります：する と くる。「〜たい」は「〜したい」で「〜が したい」という きもちを あらわします。",
        zh: "动词的ます形是礼貌的现在／将来时。日语中只有两个真正不规则的动词：する（做）和くる（来）。在动词词干后加たい（如〜たい）表示「想要」——这是日语在这个阶段最接近情态动词的表达方式。",
        de: "Die ます-Form eines Verbs ist die höfliche Gegenwarts-/Zukunftsform. Im Japanischen gibt es nur zwei wirklich unregelmäßige Verben: する (tun) und くる (kommen). Das Anhängen von たい an einen Verbstamm (wie in 〜たい) drückt „möchte\" aus — das kommt einem Modalverb im Japanischen auf diesem Niveau am nächsten.",
        en: "The polite present/future tense uses the ます-form of a verb. Japanese has only two truly irregular verbs: する (to do) and くる (to come). Adding たい to a verb stem (as in 〜たい) expresses \"want to\" — the closest thing Japanese has to a modal at this level.",
      },
      chunks: [
        { id: "g1", translations: { ja: "まいにち ごはんを たべます。", zh: "我每天吃饭。（规则ます形）", de: "Ich esse jeden Tag Reis. (reguläre ます-Form)", en: "I eat rice every day. (regular ます-form)" } },
        { id: "g2", translations: { ja: "みずを のみます。", zh: "我喝水。（规则ます形）", de: "Ich trinke Wasser. (reguläre ます-Form)", en: "I drink water. (regular ます-form)" } },
        { id: "g3", translations: { ja: "べんきょうを します。", zh: "我学习。（不规则动词：する）", de: "Ich lerne. (unregelmäßig: する)", en: "I study. (irregular: する)" } },
        { id: "g4", translations: { ja: "ともだちが うちへ きます。", zh: "朋友来我家。（不规则动词：くる）", de: "Ein Freund kommt zu mir nach Hause. (unregelmäßig: くる)", en: "A friend comes to my house. (irregular: くる)" } },
        { id: "g5", translations: { ja: "すしが たべたいです。", zh: "我想吃寿司。（たい —「想要」）", de: "Ich möchte Sushi essen. (たい — „möchte\")", en: "I want to eat sushi. (たい — \"want to\")" } },
        { id: "g6", translations: { ja: "みずが のみたいです。", zh: "我想喝水。（たい —「想要」）", de: "Ich möchte Wasser trinken. (たい — „möchte\")", en: "I want to drink water. (たい — \"want to\")" } },
      ],
    },
    // Newly authored — per a1-master-lesson-table-v04.md row 5: German
    // grammar = present tense (regular/irregular/modal). Uses essen
    // (stem-vowel-change irregular, e→i) and möchten (modal) so all
    // three parenthetical items in the table's grammar slot are covered
    // with genuinely core A1 content, mirroring how the Japanese side
    // covers all three with ます-form/する·くる/たい.
    de: {
      title: { de: "Präsens", en: "Present Tense", ja: "現在形", zh: "现在时" },
      explanation: {
        de: "Das deutsche Präsens wird meist regelmäßig gebildet: Verbstamm + Endung (-e, -st, -t, -en, -t, -en). Einige Verben ändern dabei den Stammvokal, z. B. essen → er/sie isst (e → i). Modalverben wie möchten drücken einen Wunsch aus, ähnlich wie \"would like to\".",
        en: "German present tense is mostly regular: verb stem + ending (-e, -st, -t, -en, -t, -en). Some verbs change their stem vowel, e.g. essen (to eat) → er/sie isst (e → i). Modal verbs like möchten express a wish, similar to \"would like to\".",
        ja: "ドイツ語の現在形は、ほとんど 語幹＋語尾（-e, -st, -t, -en, -t, -en）で つくります。いくつかの どうしは 語幹の ぼいんが かわります（例：essen → er/sie isst）。möchten の ような じょどうしは「〜したい」という きもちを あらわします。",
        zh: "德语现在时大多是规则的：动词词干＋词尾（-e、-st、-t、-en、-t、-en）。一些动词的词干元音会变化，例如essen（吃）→ er/sie isst（e变i）。像möchten这样的情态动词表示愿望，类似「想要」。",
      },
      chunks: [
        { id: "g1", translations: { de: "Ich esse jeden Tag Brot.", en: "I eat bread every day. (regular ich-form)", ja: "わたしは まいにち パンを たべます。（きそく：ich-form）", zh: "我每天吃面包。（规则ich形）" } },
        { id: "g2", translations: { de: "Er isst gern Fisch.", en: "He likes to eat fish. (irregular: essen → isst, stem vowel e→i)", ja: "かれは さかなを たべるのが すきです。（ふきそく：essen → isst）", zh: "他喜欢吃鱼。（不规则：essen → isst，词干元音e变i）" } },
        { id: "g3", translations: { de: "Wir trinken Wasser.", en: "We drink water. (regular wir-form)", ja: "わたしたちは みずを のみます。（きそく：wir-form）", zh: "我们喝水。（规则wir形）" } },
        { id: "g4", translations: { de: "Ich möchte Sushi essen.", en: "I would like to eat sushi. (modal: möchten)", ja: "すしを たべたいです。（じょどうし：möchten）", zh: "我想吃寿司。（情态动词：möchten）" } },
        { id: "g5", translations: { de: "Möchtest du auch etwas trinken?", en: "Would you like to drink something too? (modal, question form)", ja: "なにか のみたいですか？（じょどうし、しつもんけい）", zh: "你也想喝点什么吗？（情态动词，疑问形）" } },
        { id: "g6", translations: { de: "Sie bestellt eine Suppe.", en: "She orders a soup. (regular sie-form)", ja: "かのじょは スープを ちゅうもんします。（きそく：sie-form）", zh: "她点了一份汤。（规则sie形）" } },
      ],
    },
  },

  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", zh: "发音练习", de: "Aussprachetraining", en: "Pronunciation Practice" },
      groupLabels: {
        n_pb: { ja: "「ん」＋ p/b/m → m の おと", zh: "ん在p/b/m前 → 读作「m」", de: "ん vor p/b/m → klingt wie „m\"", en: "ん before p/b/m → sounds like \"m\"" },
        n_kg: { ja: "「ん」＋ k/g → ng の おと", zh: "ん在k/g前 → 读作「ng」", de: "ん vor k/g → klingt wie „ng\"", en: "ん before k/g → sounds like \"ng\"" },
        pitch: { ja: "アクセント（ふくしゅう）", zh: "声调重音（巩固，新词对）", de: "Tonhöhenakzent (vertieft, neue Paare)", en: "Pitch accent (reinforced, new pairs)" },
      },
      items: [
        { id: "m1", category: "n_pb", translations: { ja: "さんぽ", zh: "散步（ん在p前）", de: "Spaziergang (ん vor p)", en: "walk (ん before p)" } },
        { id: "m2", category: "n_pb", translations: { ja: "かんぱい", zh: "干杯（ん在p前）", de: "Prost (ん vor p)", en: "cheers (ん before p)" } },
        { id: "m3", category: "n_pb", translations: { ja: "せんぱい", zh: "前辈（ん在p前）", de: "Senior, älterer Kollege (ん vor p)", en: "senior (ん before p)" } },
        { id: "m4", category: "n_pb", translations: { ja: "えんぴつ", zh: "铅笔（ん在p前）", de: "Bleistift (ん vor p)", en: "pencil (ん before p)" } },
        { id: "ng1", category: "n_kg", translations: { ja: "おんがく", zh: "音乐（ん在g前）", de: "Musik (ん vor g)", en: "music (ん before g)" } },
        { id: "ng2", category: "n_kg", translations: { ja: "にほんご", zh: "日语（ん在g前）", de: "japanische Sprache (ん vor g)", en: "Japanese language (ん before g)" } },
        { id: "ng3", category: "n_kg", translations: { ja: "まんが", zh: "漫画（ん在g前）", de: "Manga (ん vor g)", en: "manga (ん before g)" } },
        { id: "ng4", category: "n_kg", translations: { ja: "げんき", zh: "健康（ん在k前）", de: "gesund, wohlauf (ん vor k)", en: "healthy, well (ん before k)" } },
        { id: "p1", category: "pitch", translations: { ja: "かう", zh: "买（低高）／养（宠物）（高低）", de: "kaufen (LH) / (ein Haustier) halten (HL)", en: "to buy (LH) / to keep a pet (HL)" } },
        { id: "p2", category: "pitch", translations: { ja: "あさ", zh: "早晨（低高）／麻（高低）", de: "Morgen (LH) / Hanf (HL)", en: "morning (LH) / hemp (HL)" } },
        { id: "p3", category: "pitch", translations: { ja: "はる", zh: "春天（低高）／粘贴（高低）", de: "Frühling (LH) / kleben (HL)", en: "spring (LH) / to stick, paste (HL)" } },
        { id: "p4", category: "pitch", translations: { ja: "き", zh: "树（高低）／精神、感觉（低高）", de: "Baum (HL) / Geist, Gefühl (LH)", en: "tree (HL) / spirit, feeling (LH)" } },
      ],
    },
    // Newly authored — per a1-master-lesson-table-v04.md row 5: German
    // pronunciation = S vs Z, plus German Z pronounced "ts". Both
    // concepts use real food-context words where possible.
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        s_voiced: { de: "S am Wortanfang (stimmhaft, wie engl. Z)", en: "S at word start (voiced, like English Z)", ja: "ごとうの S（ゆうせいおん、えいごの Z のよう）", zh: "词首的S（浊音，类似英语Z）" },
        z_ts: { de: "Z ausgesprochen wie \"ts\"", en: "Z pronounced like \"ts\"", ja: "Z は「ts」と はつおん", zh: "Z发音为「ts」" },
      },
      items: [
        { id: "s1", category: "s_voiced", translations: { de: "Suppe", en: "soup (S voiced)", ja: "スープ（ゆうせいの S）", zh: "汤（浊音S）" } },
        { id: "s2", category: "s_voiced", translations: { de: "Saft", en: "juice (S voiced)", ja: "ジュース（ゆうせいの S）", zh: "果汁（浊音S）" } },
        { id: "s3", category: "s_voiced", translations: { de: "Salz", en: "salt (S voiced)", ja: "しお（ゆうせいの S）", zh: "盐（浊音S）" } },
        { id: "s4", category: "s_voiced", translations: { de: "Soße", en: "sauce (S voiced)", ja: "ソース（ゆうせいの S）", zh: "酱汁（浊音S）" } },
        { id: "z1", category: "z_ts", translations: { de: "Zucker", en: "sugar (Z = ts)", ja: "さとう（Z は「ts」）", zh: "糖（Z发音为ts）" } },
        { id: "z2", category: "z_ts", translations: { de: "Zitrone", en: "lemon (Z = ts)", ja: "レモン（Z は「ts」）", zh: "柠檬（Z发音为ts）" } },
        { id: "z3", category: "z_ts", translations: { de: "Zwiebel", en: "onion (Z = ts)", ja: "たまねぎ（Z は「ts」）", zh: "洋葱（Z发音为ts）" } },
        { id: "z4", category: "z_ts", translations: { de: "würzig", en: "spicy, flavorful (Z-adjacent zw/z sound family)", ja: "あじわい ゆたかな（Z けいの おと）", zh: "味道浓郁的（Z相关音）" } },
      ],
    },
  },
  // Mini-fork: v01's shared translations correctly gloss ごはん (rice/meal)
  // for the Japanese course, but German-target learners don't need the
  // rice-specific half of that gloss (v02 already teaches "Brot" — bread
  // — separately). Overriding just the German field to the more general
  // "Mahlzeit" (meal) avoids that overlap without touching the Japanese
  // course's own translation. See topicTypes.ts.
  overrides: {
    de: {
      v01: "Mahlzeit",
    },
  },
};
