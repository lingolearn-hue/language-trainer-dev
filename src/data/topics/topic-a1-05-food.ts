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
  id: "topic-a1-05-food",
  lessonNumber: 5,
  topicName: { ja: "たべもの", zh: "食物", de: "Essen", en: "Food" },

  vocab: [
    { id: "v01", category: "noun", translations: { ja: "ごはん", zh: "米饭", de: "Reis, Mahlzeit", en: "rice, meal", fr: "riz, repas" } },
    { id: "v02", category: "noun", translations: { ja: "パン", zh: "面包", de: "Brot", en: "bread", fr: "pain" } },
    { id: "v03", category: "noun", translations: { ja: "みず", zh: "水", de: "Wasser", en: "water", fr: "eau" } },
    { id: "v04", category: "noun", translations: { ja: "おちゃ", zh: "茶", de: "Tee", en: "tea", fr: "thé" } },
    { id: "v05", category: "noun", translations: { ja: "にく", zh: "肉", de: "Fleisch", en: "meat", fr: "viande" } },
    { id: "v06", category: "noun", translations: { ja: "さかな", zh: "鱼", de: "Fisch", en: "fish", fr: "poisson" } },
    { id: "v07", category: "noun", translations: { ja: "やさい", zh: "蔬菜", de: "Gemüse", en: "vegetables", fr: "légumes" } },
    { id: "v08", category: "noun", translations: { ja: "くだもの", zh: "水果", de: "Obst", en: "fruit", fr: "fruits" } },
    { id: "v09", category: "noun", translations: { ja: "たまご", zh: "蛋", de: "Ei", en: "egg", fr: "œuf" } },
    { id: "v10", category: "noun", translations: { ja: "スープ", zh: "汤", de: "Suppe", en: "soup", fr: "soupe" } },
    { id: "v11", category: "noun", translations: { ja: "メニュー", zh: "菜单", de: "Speisekarte", en: "menu", fr: "menu" } },
    { id: "v12", category: "noun", translations: { ja: "レストラン", zh: "餐厅", de: "Restaurant", en: "restaurant", fr: "restaurant" } },
    { id: "v13", category: "noun", translations: { ja: "あさごはん", zh: "早饭", de: "Frühstück", en: "breakfast", fr: "petit-déjeuner" } },
    { id: "v14", category: "noun", translations: { ja: "ひるごはん", zh: "午饭", de: "Mittagessen", en: "lunch", fr: "déjeuner" } },
    { id: "v15", category: "noun", translations: { ja: "ばんごはん", zh: "晚餐", de: "Abendessen", en: "dinner", fr: "dîner" } },
    { id: "v16", category: "noun", translations: { ja: "デザート", zh: "点心", de: "Nachtisch", en: "dessert", fr: "dessert" } },
    { id: "v17", category: "verb", translations: { ja: "たべる", zh: "吃", de: "essen", en: "to eat", fr: "manger" } },
    { id: "v18", category: "verb", translations: { ja: "のむ", zh: "喝", de: "trinken", en: "to drink", fr: "boire" } },
    { id: "v19", category: "verb", translations: { ja: "つくる", zh: "做", de: "machen, zubereiten", en: "to make", fr: "préparer, faire" } },
    { id: "v20", category: "verb", translations: { ja: "ちゅうもんする", zh: "点", de: "bestellen", en: "to order", fr: "commander" } },
    { id: "v21", category: "verb", translations: { ja: "はらう", zh: "付钱", de: "bezahlen", en: "to pay", fr: "payer" } },
    { id: "v22", category: "verb", translations: { ja: "たりる", zh: "够", de: "reichen, genug sein", en: "to be enough", fr: "suffire" } },
    { id: "v23", category: "verb", translations: { ja: "すく", zh: "饿", de: "hungrig werden (おなかが すく)", en: "to become hungry (おなかが すく)", fr: "avoir faim" } },
    { id: "v24", category: "verb", translations: { ja: "のどが かわく", zh: "渴", de: "durstig werden", en: "to become thirsty", fr: "avoir soif" } },
    { id: "v25", category: "adjective", translations: { ja: "おいしい", zh: "好吃", de: "lecker", en: "delicious", fr: "délicieux(se)" } },
    { id: "v26", category: "adjective", translations: { ja: "まずい", zh: "难吃", de: "schlecht schmeckend", en: "bad-tasting", fr: "mauvais(e) (au goût)" } },
    { id: "v27", category: "adjective", translations: { ja: "あまい", zh: "甜", de: "süß", en: "sweet", fr: "sucré(e)" } },
    { id: "v28", category: "adjective", translations: { ja: "からい", zh: "辣", de: "scharf", en: "spicy", fr: "épicé(e)" } },
    { id: "v29", category: "adjective", translations: { ja: "しょっぱい", zh: "咸", de: "salzig", en: "salty", fr: "salé(e)" } },
    { id: "v30", category: "adjective", translations: { ja: "あつい", zh: "热", de: "heiß (Temperatur)", en: "hot (temperature)", fr: "chaud(e) (température)" } },
    { id: "v31", category: "noun", translations: { ja: "すし", zh: "寿司", de: "Sushi", en: "sushi", fr: "sushi" } },
    { id: "v32", category: "noun", translations: { ja: "かいしゃ", zh: "公司", de: "Firma, Büro", en: "company, office", fr: "entreprise, bureau" } },
    { id: "v33", category: "noun", translations: { ja: "じぶん", zh: "自己", de: "man selbst", en: "oneself", fr: "soi-même" } },
    { id: "v34", category: "adjective", translations: { ja: "すき", zh: "喜欢", de: "mögen (な-Adjektiv)", en: "to like, be fond of (な-adj)", fr: "aimer" } },
  ],

  dialogueA: {
    title: { ja: "かいわ：レストランで", zh: "对话A：在餐厅", de: "Dialog A: Im Restaurant", en: "Dialogue A: At the Restaurant", fr: "Dialogue A : Au restaurant" },
    lines: [
      { id: "d1", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "いらっしゃいませ。なんめいさまですか？", zh: "欢迎光临。请问几位？", de: "Willkommen. Wie viele Personen?", en: "Welcome. How many people?", fr: "Bienvenue. Combien de personnes ?" } },
      { id: "d2", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "ふたりです。", zh: "两位。", de: "Zwei Personen.", en: "Two people.", fr: "Deux personnes." } },
      { id: "d3", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "こちらへ どうぞ。メニューです。", zh: "这边请。这是菜单。", de: "Hier entlang, bitte. Hier ist die Speisekarte.", en: "This way, please. Here's the menu.", fr: "Par ici, s'il vous plaît. Voici le menu." } },
      { id: "d4", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "ありがとうございます。", zh: "谢谢。", de: "Danke.", en: "Thank you.", fr: "Merci." } },
      { id: "d5", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "ごちゅうもんは おきまりですか？", zh: "您决定好点什么了吗？", de: "Haben Sie schon gewählt?", en: "Have you decided your order?", fr: "Avez-vous choisi ?" } },
      { id: "d6", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "すしと スープを おねがいします。", zh: "请给我寿司和汤。", de: "Sushi und Suppe, bitte.", en: "Sushi and soup, please.", fr: "Des sushis et une soupe, s'il vous plaît." } },
      { id: "d7", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "おのみものは？", zh: "要喝点什么吗？", de: "Und etwas zu trinken?", en: "What about a drink?", fr: "Et pour boire ?" } },
      { id: "d8", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "おちゃを ください。", zh: "请给我茶。", de: "Tee, bitte.", en: "Tea, please.", fr: "Du thé, s'il vous plaît." } },
      { id: "d9", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "かしこまりました。すこし おまちください。", zh: "好的，请稍等。", de: "Verstanden. Einen Moment bitte.", en: "Understood. Please wait a moment.", fr: "Très bien. Un instant, s'il vous plaît." } },
      { id: "d10", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "すみません、これは からいですか？", zh: "请问，这个辣吗？", de: "Entschuldigung, ist das scharf?", en: "Excuse me, is this spicy?", fr: "Excusez-moi, est-ce que c'est épicé ?" } },
      { id: "d11", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "いいえ、あまり からくないです。", zh: "不辣，不是很辣。", de: "Nein, es ist nicht sehr scharf.", en: "No, it's not very spicy.", fr: "Non, ce n'est pas très épicé." } },
      { id: "d12", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "よかった。それを ちゅうもんします。", zh: "太好了，那我就点这个。", de: "Gut. Das bestelle ich.", en: "Great. I'll order that.", fr: "Parfait. Je vais commander ça." } },
      { id: "d13", speaker: { ja: "てんいん", en: "Waiter", de: "Kellner", zh: "服务员" }, translations: { ja: "かしこまりました。", zh: "明白了。", de: "Verstanden.", en: "Understood.", fr: "Très bien." } },
      { id: "d14", speaker: { ja: "きゃく", en: "Customer", de: "Gast", zh: "顾客" }, translations: { ja: "とても おいしかったです。ごちそうさまでした。", zh: "非常好吃。谢谢款待。", de: "Es war sehr lecker. Danke für das Essen.", en: "It was very delicious. Thank you for the meal.", fr: "C'était très délicieux. Merci pour ce repas." } },
    ],
  },

  dialogueB: {
    title: { ja: "かいわ：まいにちの しょくじ", zh: "对话B：日常饮食习惯", de: "Dialog B: Tägliche Essgewohnheiten", en: "Dialogue B: Daily Eating Habits", fr: "Dialogue B : Habitudes alimentaires quotidiennes" },
    lines: [
      { id: "e1", speaker: "あい", translations: { ja: "まいあさ なにを たべますか？", zh: "你每天早上吃什么？", de: "Was isst du jeden Morgen?", en: "What do you eat every morning?", fr: "Qu'est-ce que tu manges chaque matin ?" } },
      { id: "e2", speaker: "けん", translations: { ja: "パンと たまごを たべます。", zh: "我吃面包和鸡蛋。", de: "Ich esse Brot und Eier.", en: "I eat bread and eggs.", fr: "Je mange du pain et des œufs." } },
      { id: "e3", speaker: "あい", translations: { ja: "おちゃも のみますか？", zh: "你也喝茶吗？", de: "Trinkst du auch Tee?", en: "Do you also drink tea?", fr: "Tu bois aussi du thé ?" } },
      { id: "e4", speaker: "けん", translations: { ja: "はい、まいあさ のみます。", zh: "是的，我每天早上都喝。", de: "Ja, ich trinke ihn jeden Morgen.", en: "Yes, I drink it every morning.", fr: "Oui, j'en bois tous les matins." } },
      { id: "e5", speaker: "あい", translations: { ja: "ひるごはんは どこで たべますか？", zh: "你在哪里吃午饭？", de: "Wo isst du zu Mittag?", en: "Where do you eat lunch?", fr: "Où est-ce que tu déjeunes ?" } },
      { id: "e6", speaker: "けん", translations: { ja: "かいしゃで たべます。", zh: "我在公司吃。", de: "Ich esse im Büro.", en: "I eat at the office.", fr: "Je mange au bureau." } },
      { id: "e7", speaker: "あい", translations: { ja: "じぶんで つくりますか？", zh: "是你自己做的吗？", de: "Machst du es selbst?", en: "Do you make it yourself?", fr: "Tu le prépares toi-même ?" } },
      { id: "e8", speaker: "けん", translations: { ja: "はい、あさ つくります。", zh: "是的，我早上做的。", de: "Ja, ich mache es morgens.", en: "Yes, I make it in the morning.", fr: "Oui, je le prépare le matin." } },
      { id: "e9", speaker: "あい", translations: { ja: "ばんごはんは？", zh: "晚饭呢？", de: "Und zum Abendessen?", en: "What about dinner?", fr: "Et pour le dîner ?" } },
      { id: "e10", speaker: "けん", translations: { ja: "レストランで たべることが おおいです。", zh: "我经常在餐厅吃。", de: "Ich esse oft in einem Restaurant.", en: "I often eat at a restaurant.", fr: "Je mange souvent au restaurant." } },
      { id: "e11", speaker: "あい", translations: { ja: "からい たべものが すきですか？", zh: "你喜欢吃辣的吗？", de: "Magst du scharfes Essen?", en: "Do you like spicy food?", fr: "Tu aimes la nourriture épicée ?" } },
      { id: "e12", speaker: "けん", translations: { ja: "はい、とても すきです。あいさんは？", zh: "是的，我很喜欢。爱，你呢？", de: "Ja, sehr gerne. Und du, Ai?", en: "Yes, I like it a lot. What about you, Ai?", fr: "Oui, j'aime beaucoup ça. Et toi, Ai ?" } },
      { id: "e13", speaker: "あい", translations: { ja: "わたしは あまい ものが すきです。", zh: "我喜欢甜的。", de: "Ich mag süße Sachen.", en: "I like sweet things.", fr: "J'aime les choses sucrées." } },
      { id: "e14", speaker: "けん", translations: { ja: "なるほど。でざーとが すきなんですね。", zh: "原来如此，你喜欢甜点啊。", de: "Verstehe. Du magst also Nachtisch.", en: "I see. So you like dessert.", fr: "Je vois. Donc tu aimes le dessert." } },
    ],
  },

  song: {
    // Row 5 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song.
    title: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, Shoulders, Knees and Toes", fr: "Tête, épaules, genoux et pieds" },
    lines: [
      { id: "sg1", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes", fr: "Tête, épaules, genoux et pieds" } },
      { id: "sg2", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes", fr: "Genoux et pieds" } },
      { id: "sg3", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes", fr: "Tête, épaules, genoux et pieds" } },
      { id: "sg4", translations: { ja: "ひざ あし", zh: "膝盖、脚趾", de: "Knie und Zehen", en: "Knees and toes", fr: "Genoux et pieds" } },
      { id: "sg5", translations: { ja: "め と みみと くちと はな", zh: "眼睛、耳朵、嘴巴、鼻子", de: "Augen und Ohren und Mund und Nase", en: "Eyes and ears and mouth and nose", fr: "Et les yeux, les oreilles, la bouche et le nez" } },
      { id: "sg6", translations: { ja: "あたま かた ひざ あし", zh: "头、肩膀、膝盖、脚趾", de: "Kopf, Schultern, Knie und Zehen", en: "Head, shoulders, knees and toes", fr: "Tête, épaules, genoux et pieds" } }
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
    // French grammar mirrors German's approach: present tense covering
    // a regular -er verb, an irregular verb, and a modal-like polite
    // form (je voudrais), matching the table's three-part slot
    // (regular/irregular/modal) the same way German's essen/möchten
    // pairing does.
    fr: {
      title: { fr: "Le présent", en: "Present Tense", de: "Präsens", ja: "げんざいけい", zh: "现在时" },
      explanation: {
        fr: "Le présent des verbes réguliers en -er se forme avec le radical + terminaison (-e, -es, -e, -ons, -ez, -ent), comme manger. Certains verbes sont irréguliers, comme boire (je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent). « Je voudrais » (de vouloir) exprime un souhait poli, proche de « I would like ».",
        en: "The present tense of regular -er verbs is formed with the stem + ending (-e, -es, -e, -ons, -ez, -ent), like manger (to eat). Some verbs are irregular, like boire (to drink: je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent). \"Je voudrais\" (from vouloir, to want) expresses a polite wish, similar to \"I would like\".",
        de: "Das Präsens regelmäßiger -er-Verben wird mit Stamm + Endung (-e, -es, -e, -ons, -ez, -ent) gebildet, wie bei manger (essen). Einige Verben sind unregelmäßig, wie boire (trinken: je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent). „Je voudrais\" (von vouloir, wollen) drückt einen höflichen Wunsch aus, ähnlich wie „möchte\".",
        ja: "きそくてきな -er どうし（manger「たべる」など）の げんざいけいは、ごかん＋ごび（-e, -es, -e, -ons, -ez, -ent）で つくります。boire「のむ」の ような ふきそくどうしも あります（je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent）。「Je voudrais」（vouloir「ほしい」から）は、ていねいな きぼうを あらわし、「〜したいのですが」に ちかい ひょうげんです。",
        zh: "规则的-er动词（如manger「吃」）的现在时由词干+词尾（-e, -es, -e, -ons, -ez, -ent）构成。也有不规则动词，如boire「喝」（je bois, tu bois, il boit, nous buvons, vous buvez, ils boivent）。「Je voudrais」（来自vouloir「想要」）表达礼貌的愿望，类似「我想要」。"
      },
      chunks: [
        { id: "g1", translations: { fr: "Je mange du pain tous les jours.", en: "I eat bread every day. (regular je-form)", de: "Ich esse jeden Tag Brot. (reguläre je-Form)", ja: "わたしは まいにち パンを たべます。（きそく：je-form）", zh: "我每天吃面包。（规则je形）" } },
        { id: "g2", translations: { fr: "Il aime boire du thé.", en: "He likes to drink tea. (irregular: boire)", de: "Er trinkt gern Tee. (unregelmäßig: boire)", ja: "かれは おちゃを のむのが すきです。（ふきそく：boire）", zh: "他喜欢喝茶。（不规则：boire）" } },
        { id: "g3", translations: { fr: "Nous buvons de l'eau.", en: "We drink water. (irregular, nous-form)", de: "Wir trinken Wasser. (unregelmäßig, nous-Form)", ja: "わたしたちは みずを のみます。（ふきそく、nous-form）", zh: "我们喝水。（不规则，nous形）" } },
        { id: "g4", translations: { fr: "Je voudrais manger des sushis.", en: "I would like to eat sushi. (modal-like: je voudrais)", de: "Ich möchte Sushi essen. (modalähnlich: je voudrais)", ja: "すしを たべたいです。（じょどうしてき：je voudrais）", zh: "我想吃寿司。（类情态动词：je voudrais）" } },
        { id: "g5", translations: { fr: "Voudrais-tu boire quelque chose aussi ?", en: "Would you like to drink something too? (modal-like, question form)", de: "Möchtest du auch etwas trinken? (modalähnlich, Fragesatz)", ja: "なにか のみたいですか？（じょどうしてき、しつもんけい）", zh: "你也想喝点什么吗？（类情态动词，疑问形）" } },
        { id: "g6", translations: { fr: "Elle commande une soupe.", en: "She orders a soup. (regular elle-form)", de: "Sie bestellt eine Suppe. (reguläre sie-Form)", ja: "かのじょは スープを ちゅうもんします。（きそく：elle-form）", zh: "她点了一份汤。（规则elle形）" } },
      ],
    },
  },

  grammarDrills: {
    de: [
      {
        id: "grammar-drill-praesens",
        title: { de: "Übung: Präsens", en: "Practice: Present Tense", ja: "れんしゅう：げんざいけい", zh: "练习：现在时" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze im Präsens.",
          en: "Next, let's practice example sentences in the present tense.",
          ja: "つぎは、げんざいけいを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用现在时的例句。"
        },
        lines: [
          { id: "pr1", translations: { de: "Ich esse jeden Tag Brot.", en: "I eat bread every day. (regular ich-form)", ja: "わたしは まいにち パンを たべます。（きそく：ich-form）", zh: "我每天吃面包。（规则ich形）" } },
          { id: "pr2", translations: { de: "Er isst gern Fisch.", en: "He likes to eat fish. (irregular: essen → isst)", ja: "かれは さかなを たべるのが すきです。（ふきそく：essen → isst）", zh: "他喜欢吃鱼。（不规则：essen → isst）" } },
          { id: "pr3", translations: { de: "Wir trinken Wasser.", en: "We drink water. (regular wir-form)", ja: "わたしたちは みずを のみます。（きそく：wir-form）", zh: "我们喝水。（规则wir形）" } },
          { id: "pr4", translations: { de: "Du bestellst die Suppe.", en: "You order the soup. (regular du-form)", ja: "あなたは スープを ちゅうもんします。（きそく：du-form）", zh: "你点了汤。（规则du形）" } },
          { id: "pr5", translations: { de: "Sie macht das Frühstück.", en: "She prepares breakfast. (regular sie-form)", ja: "かのじょは あさごはんを つくります。（きそく：sie-form）", zh: "她准备早餐。（规则sie形）" } },
          { id: "pr6", translations: { de: "Ich möchte Reis essen.", en: "I would like to eat rice. (möchten + infinitive)", ja: "わたしは ごはんを たべたいです。（möchten + ふていし）", zh: "我想吃米饭。（möchten + 不定式）" } },
          { id: "pr7", translations: { de: "Wir bezahlen im Restaurant.", en: "We pay at the restaurant. (regular wir-form)", ja: "わたしたちは レストランで はらいます。（きそく：wir-form）", zh: "我们在餐厅付款。（规则wir形）" } },
          { id: "pr8", translations: { de: "Er trinkt gern Tee.", en: "He likes to drink tea. (regular er-form)", ja: "かれは おちゃを のむのが すきです。（きそく：er-form）", zh: "他喜欢喝茶。（规则er形）" } },
          { id: "pr9", translations: { de: "Möchtest du Nachtisch?", en: "Would you like dessert? (möchten, question)", ja: "デザートを たべたいですか？（möchten、しつもん）", zh: "你想吃甜点吗？（möchten，疑问句）" } },
          { id: "pr10", translations: { de: "Ich esse Gemüse und Obst.", en: "I eat vegetables and fruit. (regular ich-form)", ja: "わたしは やさいと くだものを たべます。（きそく：ich-form）", zh: "我吃蔬菜和水果。（规则ich形）" } }
        ]
      }
    ],
    fr: [
      {
        id: "grammar-drill-present",
        title: { fr: "Exercice : le présent", en: "Practice: Present Tense", de: "Übung: Präsens", ja: "れんしゅう：げんざいけい", zh: "练习：现在时" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases au présent.",
          en: "Next, let's practice example sentences in the present tense.",
          de: "Als Nächstes üben wir Beispielsätze im Präsens.",
          ja: "つぎは、げんざいけいを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用现在时的例句。"
        },
        lines: [
          { id: "pr1", translations: { fr: "Je mange du pain tous les jours.", en: "I eat bread every day. (regular je-form)", de: "Ich esse jeden Tag Brot. (reguläre je-Form)", ja: "わたしは まいにち パンを たべます。（きそく：je-form）", zh: "我每天吃面包。（规则je形）" } },
          { id: "pr2", translations: { fr: "Il aime manger du poisson.", en: "He likes to eat fish. (regular il-form)", de: "Er isst gern Fisch. (reguläre er-Form)", ja: "かれは さかなを たべるのが すきです。（きそく：il-form）", zh: "他喜欢吃鱼。（规则il形）" } },
          { id: "pr3", translations: { fr: "Nous buvons de l'eau.", en: "We drink water. (irregular, nous-form)", de: "Wir trinken Wasser. (unregelmäßig, nous-Form)", ja: "わたしたちは みずを のみます。（ふきそく、nous-form）", zh: "我们喝水。（不规则，nous形）" } },
          { id: "pr4", translations: { fr: "Tu commandes la soupe.", en: "You order the soup. (regular tu-form)", de: "Du bestellst die Suppe. (reguläre du-Form)", ja: "あなたは スープを ちゅうもんします。（きそく：tu-form）", zh: "你点了汤。（规则tu形）" } },
          { id: "pr5", translations: { fr: "Elle prépare le petit-déjeuner.", en: "She prepares breakfast. (regular elle-form)", de: "Sie macht das Frühstück. (reguläre sie-Form)", ja: "かのじょは あさごはんを つくります。（きそく：elle-form）", zh: "她准备早餐。（规则elle形）" } },
          { id: "pr6", translations: { fr: "Je voudrais manger du riz.", en: "I would like to eat rice. (je voudrais + infinitive)", de: "Ich möchte Reis essen. (möchten + Infinitiv)", ja: "わたしは ごはんを たべたいです。（je voudrais + ふていし）", zh: "我想吃米饭。（je voudrais + 不定式）" } },
          { id: "pr7", translations: { fr: "Nous payons au restaurant.", en: "We pay at the restaurant. (regular nous-form)", de: "Wir bezahlen im Restaurant. (reguläre wir-Form)", ja: "わたしたちは レストランで はらいます。（きそく：nous-form）", zh: "我们在餐厅付款。（规则nous形）" } },
          { id: "pr8", translations: { fr: "Il boit du thé avec plaisir.", en: "He likes to drink tea. (irregular il-form)", de: "Er trinkt gern Tee. (unregelmäßig, er-Form)", ja: "かれは おちゃを のむのが すきです。（ふきそく：il-form）", zh: "他喜欢喝茶。（不规则il形）" } },
          { id: "pr9", translations: { fr: "Voudrais-tu un dessert ?", en: "Would you like dessert? (je voudrais, question)", de: "Möchtest du Nachtisch? (möchten, Frage)", ja: "デザートを たべたいですか？（je voudrais、しつもん）", zh: "你想吃甜点吗？（je voudrais，疑问句）" } },
          { id: "pr10", translations: { fr: "Je mange des légumes et des fruits.", en: "I eat vegetables and fruit. (regular je-form)", de: "Ich esse Gemüse und Obst. (reguläre ich-Form)", ja: "わたしは やさいと くだものを たべます。（きそく：je-form）", zh: "我吃蔬菜和水果。（规则je形）" } }
        ]
      }
    ]
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
    // French pronunciation: silent vs. pronounced final consonants —
    // one of the first things a French learner has to internalize,
    // since it's the opposite of most alphabetic-script languages'
    // default assumption (that written final letters are spoken).
    // Food vocab supplies plenty of clean examples of both patterns.
    fr: {
      title: { fr: "Exercice de prononciation", en: "Pronunciation Practice", de: "Aussprachetraining", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        silent: { fr: "Consonne finale muette", en: "Silent final consonant", de: "Stummer Endkonsonant", ja: "ごびの しいん が むおん", zh: "词尾辅音不发音" },
        pronounced: { fr: "Consonne finale prononcée", en: "Pronounced final consonant", de: "Ausgesprochener Endkonsonant", ja: "ごびの しいん が はつおんされる", zh: "词尾辅音发音" }
      },
      items: [
        { id: "sl1", category: "silent", translations: { fr: "chaud", en: "hot (final d silent)", de: "heiß (Schluss-d stumm)", ja: "あつい（ごびの d は むおん）", zh: "热的（词尾d不发音）" } },
        { id: "sl2", category: "silent", translations: { fr: "lait", en: "milk (final t silent)", de: "Milch (Schluss-t stumm)", ja: "ぎゅうにゅう（ごびの t は むおん）", zh: "牛奶（词尾t不发音）" } },
        { id: "sl3", category: "silent", translations: { fr: "gâteau", en: "cake (final u/eau group silent-ish, no final consonant sound)", de: "Kuchen (Endung ohne Konsonantenlaut)", ja: "ケーキ（ごびに しいんの おとが ない）", zh: "蛋糕（词尾无辅音音）" } },
        { id: "sl4", category: "silent", translations: { fr: "riz", en: "rice (final z silent)", de: "Reis (Schluss-z stumm)", ja: "ごはん（ごびの z は むおん）", zh: "米饭（词尾z不发音）" } },
        { id: "pr1", category: "pronounced", translations: { fr: "soupe", en: "soup (final e makes the p audible)", de: "Suppe (Schluss-e macht p hörbar)", ja: "スープ（ごびの e が p を はつおんさせる）", zh: "汤（词尾e使p发音）" } },
        { id: "pr2", category: "pronounced", translations: { fr: "salade", en: "salad (final e makes the d audible)", de: "Salat (Schluss-e macht d hörbar)", ja: "サラダ（ごびの e が d を はつおんさせる）", zh: "沙拉（词尾e使d发音）" } },
        { id: "pr3", category: "pronounced", translations: { fr: "tarte", en: "tart, pie (final e makes the t audible)", de: "Kuchen, Torte (Schluss-e macht t hörbar)", ja: "タルト（ごびの e が t を はつおんさせる）", zh: "馅饼（词尾e使t发音）" } },
        { id: "pr4", category: "pronounced", translations: { fr: "carotte", en: "carrot (final e makes the t audible)", de: "Karotte (Schluss-e macht t hörbar)", ja: "にんじん（ごびの e が t を はつおんさせる）", zh: "胡萝卜（词尾e使t发音）" } }
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
