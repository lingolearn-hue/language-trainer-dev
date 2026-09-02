import type { TopicLesson } from "../topicTypes";

// A2 — row 21 of docs/a2-master-lesson-table-v01.md. Grammar:
// giving/receiving with physical objects (あげる／くれる／もらう with
// nouns, not actions) + polite requests (〜てもらえますか／
// 〜ていただけますか). Pronunciation 1/2 (B vs P, M vs N) kept
// exactly as assigned.

export const topicGifts: TopicLesson = {
  id: "topic-39-gifts",
  lessonNumber: 39,
  level: "A2",
  topicName: {
    ja: "プレゼント",
    en: "Gifts",
    de: "Geschenke",
    zh: "礼物"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "プレゼント", en: "present", de: "Geschenk", zh: "礼物" } },
    { id: "v02", category: "noun", translations: { ja: "おくりもの", jaKanji: "贈り物", en: "gift", de: "Geschenk", zh: "礼品" } },
    { id: "v03", category: "noun", translations: { ja: "きねんび", jaKanji: "記念日", en: "anniversary", de: "Jahrestag", zh: "纪念日" } },
    { id: "v04", category: "noun", translations: { ja: "おいわい", jaKanji: "お祝い", en: "celebration, congratulatory gift", de: "Feier, Geschenk", zh: "祝贺，贺礼" } },
    { id: "v05", category: "noun", translations: { ja: "おかえし", jaKanji: "お返し", en: "return gift", de: "Gegengeschenk", zh: "回礼" } },
    { id: "v06", category: "noun", translations: { ja: "ラッピング", en: "gift wrapping", de: "Geschenkverpackung", zh: "包装" } },
    { id: "v07", category: "noun", translations: { ja: "リボン", en: "ribbon", de: "Schleife", zh: "丝带" } },
    { id: "v08", category: "noun", translations: { ja: "カード", en: "card", de: "Karte", zh: "卡片" } },
    { id: "v09", category: "noun", translations: { ja: "てがみ", jaKanji: "手紙", en: "letter", de: "Brief", zh: "信" } },
    { id: "v10", category: "verb", translations: { ja: "わたす", jaKanji: "渡す", en: "to hand over", de: "übergeben", zh: "交给" } },
    { id: "v11", category: "verb", translations: { ja: "うけとる", jaKanji: "受け取る", en: "to receive", de: "erhalten", zh: "收到" } },
    { id: "v12", category: "verb", translations: { ja: "えらぶ", jaKanji: "選ぶ", en: "to choose", de: "wählen", zh: "选择" } },
    { id: "v13", category: "verb", translations: { ja: "つつむ", jaKanji: "包む", en: "to wrap", de: "einpacken", zh: "包装" } },
    { id: "v14", category: "verb", translations: { ja: "かざる", jaKanji: "飾る", en: "to decorate", de: "schmücken", zh: "装饰" } },
    { id: "v15", category: "verb", translations: { ja: "よろこぶ", jaKanji: "喜ぶ", en: "to be pleased", de: "sich freuen", zh: "高兴" } },
    { id: "v16", category: "verb", translations: { ja: "いわう", jaKanji: "祝う", en: "to celebrate", de: "feiern", zh: "庆祝" } },
    { id: "v17", category: "verb", translations: { ja: "かんしゃする", jaKanji: "感謝する", en: "to thank", de: "danken", zh: "感谢" } },
    { id: "v18", category: "verb", translations: { ja: "ねがう", jaKanji: "願う", en: "to wish, hope", de: "sich wünschen", zh: "祈愿" } },
    { id: "v19", category: "verb", translations: { ja: "たのむ", jaKanji: "頼む", en: "to ask a favor", de: "bitten", zh: "拜托" } },
    { id: "v20", category: "verb", translations: { ja: "おねがいする", jaKanji: "お願いする", en: "to request politely", de: "höflich bitten", zh: "拜托，请求" } },
    { id: "v21", category: "verb", translations: { ja: "かりる", jaKanji: "借りる", en: "to borrow", de: "leihen", zh: "借" } },
    { id: "v22", category: "verb", translations: { ja: "かす", jaKanji: "貸す", en: "to lend", de: "verleihen", zh: "借出" } },
    { id: "v23", category: "verb", translations: { ja: "あげる", jaKanji: "あげる", en: "to give (to someone else)", de: "geben (an jemand anderen)", zh: "给（别人）" } },
    { id: "v24", category: "verb", translations: { ja: "くれる", jaKanji: "くれる", en: "to give (to me)", de: "geben (an mich)", zh: "给（我）" } },
    { id: "v25", category: "verb", translations: { ja: "もらう", jaKanji: "もらう", en: "to receive", de: "erhalten", zh: "接受" } },
    { id: "v26", category: "adjective", translations: { ja: "うれしい", jaKanji: "嬉しい", en: "happy, glad", de: "froh", zh: "高兴" } },
    { id: "v27", category: "adjective", translations: { ja: "とくべつな", jaKanji: "特別な", en: "special", de: "besonders", zh: "特别的" } },
    { id: "v28", category: "adjective", translations: { ja: "たいせつな", jaKanji: "大切な", en: "important, precious", de: "wichtig", zh: "重要的" } },
    { id: "v29", category: "adverb", translations: { ja: "ぜひ", jaKanji: "ぜひ", en: "by all means", de: "unbedingt", zh: "一定" } },
    { id: "v30", category: "adverb", translations: { ja: "こころから", jaKanji: "心から", en: "from the heart", de: "von Herzen", zh: "真心地" } }
  ],
  dialogueA: {
    title: { ja: "だれかに プレゼントを あげる", en: "Giving Someone a Present", de: "Jemandem ein Geschenk geben", zh: "给某人礼物" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "これは たんじょうびの プレゼントです。どうぞ。", jaKanji: "これは誕生日のプレゼントです。どうぞ。", en: "This is a birthday present. Here you go.", de: "Das ist ein Geburtstagsgeschenk. Bitte schön.", zh: "这是生日礼物。请收下。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "わあ、ありがとうございます！なにが はいって いるんですか？", jaKanji: "わあ、ありがとうございます！何が入っているんですか？", en: "Wow, thank you! What's inside?", de: "Wow, vielen Dank! Was ist drin?", zh: "哇，谢谢你！里面是什么呀？" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "あけて みて ください。じかんを かけて えらんだんです。", jaKanji: "開けてみてください。時間をかけて選んだんです。", en: "Please open it and see. I spent time choosing it.", de: "Öffnen Sie es doch. Ich habe mir Zeit genommen, es auszusuchen.", zh: "打开看看吧。我花了很长时间挑选的。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "とけいですね！すごく うれしいです。", jaKanji: "時計ですね！すごく嬉しいです。", en: "It's a watch! I'm so happy.", de: "Es ist eine Uhr! Ich freue mich riesig.", zh: "是手表呢！我太高兴了。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きに いって もらえて うれしいです。", jaKanji: "気に入ってもらえて嬉しいです。", en: "I'm glad you like it.", de: "Ich freue mich, dass es Ihnen gefällt.", zh: "很高兴你喜欢。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "こんなに とくべつな プレゼントを もらったのは はじめてです。", jaKanji: "こんなに特別なプレゼントをもらったのは初めてです。", en: "This is the first time I've received such a special present.", de: "Das ist das erste Mal, dass ich ein so besonderes Geschenk bekomme.", zh: "第一次收到这么特别的礼物。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こころから おいわい したかったんです。", jaKanji: "心からお祝いしたかったんです。", en: "I wanted to celebrate with you from the heart.", de: "Ich wollte von Herzen mit Ihnen feiern.", zh: "我真心想为你庆祝。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "おかえしに、なにか あげたいです。", jaKanji: "お返しに、何かあげたいです。", en: "As a return gift, I'd like to give you something.", de: "Als Gegengeschenk möchte ich Ihnen etwas geben.", zh: "作为回礼，我想给你点什么。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "おかえしは いりませんよ。よろこんで もらえれば じゅうぶんです。", jaKanji: "お返しはいりませんよ。喜んでもらえれば十分です。", en: "You don't need a return gift. It's enough that you're pleased.", de: "Sie brauchen kein Gegengeschenk. Es reicht, dass Sie sich freuen.", zh: "不需要回礼哦。你高兴就足够了。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でも、なにか かんしゃの きもちを つたえたいです。", jaKanji: "でも、何か感謝の気持ちを伝えたいです。", en: "But I want to convey my gratitude somehow.", de: "Aber ich möchte irgendwie meine Dankbarkeit ausdrücken.", zh: "不过我想表达一下感谢之情。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "じゃあ、いつか おちゃを おごって ください。", jaKanji: "じゃあ、いつかお茶をおごってください。", en: "Then treat me to tea sometime.", de: "Dann laden Sie mich irgendwann zu Tee ein.", zh: "那下次请我喝茶吧。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ぜひ！らいしゅう じかんが あったら いきましょう。", jaKanji: "ぜひ！来週時間があったら行きましょう。", en: "Definitely! Let's go if we have time next week.", de: "Unbedingt! Lass uns nächste Woche gehen, wenn wir Zeit haben.", zh: "一定！下周有时间的话就去吧。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たのしみに して います。", jaKanji: "楽しみにしています。", en: "I'm looking forward to it.", de: "Ich freue mich darauf.", zh: "很期待呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "この とけい、たいせつに つかいますね。", jaKanji: "この時計、大切に使いますね。", en: "I'll take good care of this watch.", de: "Ich werde diese Uhr gut pflegen.", zh: "我会好好珍惜这块手表的。" } }
    ]
  },
  dialogueB: {
    title: { ja: "だれかに なにかを たのむ", en: "Asking Someone to Do Something", de: "Jemanden um etwas bitten", zh: "拜托某人做事" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "すみません、プレゼントを えらんで もらえますか？", jaKanji: "すみません、プレゼントを選んでもらえますか？", en: "Excuse me, could you help me choose a present?", de: "Entschuldigung, könnten Sie mir helfen, ein Geschenk auszuwählen?", zh: "不好意思，能帮我选个礼物吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいですよ。だれの プレゼントですか？", jaKanji: "いいですよ。誰のプレゼントですか？", en: "Sure. Who's the present for?", de: "Klar. Für wen ist das Geschenk?", zh: "好的。是给谁的礼物？" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ははの きねんびの プレゼントです。", jaKanji: "母の記念日のプレゼントです。", en: "It's a present for my mother's anniversary.", de: "Es ist ein Geschenk für den Jahrestag meiner Mutter.", zh: "是妈妈纪念日的礼物。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "すてきですね。ラッピングも して いただけますか？", jaKanji: "素敵ですね。ラッピングもしていただけますか？", en: "That's lovely. Could you also gift-wrap it for me?", de: "Wie schön. Könnten Sie es auch einpacken?", zh: "真好呢。也能帮忙包装一下吗？" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、もちろんです。リボンも つけましょうか？", jaKanji: "はい、もちろんです。リボンも付けましょうか？", en: "Yes, of course. Shall I add a ribbon too?", de: "Ja, natürlich. Soll ich auch eine Schleife anbringen?", zh: "是的，当然。也要加上丝带吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、おねがいします。カードも かいて いただけますか？", jaKanji: "はい、お願いします。カードも書いていただけますか？", en: "Yes, please. Could you also write a card?", de: "Ja, bitte. Könnten Sie auch eine Karte schreiben?", zh: "好的，拜托了。也能帮忙写张卡片吗？" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、なんと かきましょうか？", jaKanji: "はい、何と書きましょうか？", en: "Yes, what shall I write?", de: "Ja, was soll ich schreiben?", zh: "好的，写什么呢？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "「きねんび おめでとう」と かいて もらえますか？", jaKanji: "「記念日おめでとう」と書いてもらえますか？", en: "Could you write \"Happy anniversary\"?", de: "Könnten Sie „Herzlichen Glückwunsch zum Jahrestag“ schreiben?", zh: "能写「纪念日快乐」吗？" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、かきました。てがみも いっしょに いれますか？", jaKanji: "はい、書きました。手紙も一緒に入れますか？", en: "Yes, I wrote it. Shall I put a letter in with it too?", de: "Ja, geschrieben. Soll ich auch einen Brief dazulegen?", zh: "好的，写好了。要一起放张信吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、たのみます。ははは きっと よろこぶと おもいます。", jaKanji: "はい、頼みます。母はきっと喜ぶと思います。", en: "Yes, please. I think my mother will surely be pleased.", de: "Ja, bitte. Ich glaube, meine Mutter wird sich sicher freuen.", zh: "好的，拜托了。妈妈一定会很高兴的。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "できました。かくにんして いただけますか？", jaKanji: "できました。確認していただけますか？", en: "It's done. Could you check it?", de: "Fertig. Könnten Sie es überprüfen?", zh: "做好了。能确认一下吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わあ、すてきです！ほんとうに ありがとうございます。", jaKanji: "わあ、素敵です！本当にありがとうございます。", en: "Wow, it's lovely! Thank you so much.", de: "Wow, wunderschön! Vielen herzlichen Dank.", zh: "哇，太漂亮了！真的非常感谢。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いいえ、また いつでも たのんで くださいね。", jaKanji: "いいえ、またいつでも頼んでくださいね。", en: "Not at all, please ask me anytime again.", de: "Gern geschehen, bitten Sie mich jederzeit wieder.", zh: "不客气，随时都可以拜托我哦。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ぜひ そう します。おかえしに ケーキを もって きます。", jaKanji: "ぜひそうします。お返しにケーキを持ってきます。", en: "I definitely will. I'll bring you a cake in return.", de: "Das werde ich unbedingt tun. Als Gegenleistung bringe ich einen Kuchen mit.", zh: "一定会的。作为回报我会带蛋糕来的。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "もの の やりもらい と ていねいな おねがい", en: "Giving/Receiving Objects and Polite Requests", de: "Geben/Nehmen von Gegenständen und höfliche Bitten", zh: "物品的授受与礼貌请求" },
      explanation: {
        ja: "あげる／くれる／もらうは、こうどう（〜て＋あげる／くれる／もらう）だけでなく、もの じたいにも つかえます（「プレゼントを あげます」「プレゼントを もらいました」）。ひとに ていねいに おねがいする ときは、「〜て もらえますか」（カジュアルより ていねい）や「〜て いただけますか」（もっと フォーマル）を つかいます。「〜て くださいますか」も おなじように フォーマルな おねがいで つかえます。",
        en: "Ageru/kureru/morau apply not just to actions (~te + ageru/kureru/morau) but to objects themselves (\"プレゼントを あげます\" = I'll give a present, \"プレゼントを もらいました\" = I received a present). To make a polite request, use ~te moraemasu ka (more polite than casual) or ~te itadakemasu ka (more formal still). ~te kudasaimasu ka can also be used similarly for a formal request.",
        de: "Ageru/kureru/morau gelten nicht nur für Handlungen (~te + ageru/kureru/morau), sondern auch für Gegenstände selbst (\"プレゼントを あげます\" = ich gebe ein Geschenk, \"プレゼントを もらいました\" = ich habe ein Geschenk erhalten). Für eine höfliche Bitte verwendet man ~te moraemasu ka (höflicher als locker) oder ~te itadakemasu ka (noch formeller). ~te kudasaimasu ka kann ebenfalls für eine formelle Bitte verwendet werden.",
        zh: "あげる／くれる／もらう不仅用于动作（〜て＋あげる／くれる／もらう），也可以用于物品本身（「プレゼントを あげます」＝我送礼物，「プレゼントを もらいました」＝我收到了礼物）。礼貌地请求他人时，使用〜てもらえますか（比随意更礼貌）或〜ていただけますか（更正式）。〜てくださいますか也可以用于类似的正式请求。"
      },
      chunks: [
        { id: "g1", translations: { ja: "たんじょうびに プレゼントを あげました。", jaKanji: "誕生日にプレゼントをあげました。", en: "I gave a present for the birthday.", de: "Ich habe zum Geburtstag ein Geschenk gegeben.", zh: "生日的时候送了礼物。" } },
        { id: "g2", translations: { ja: "ともだちに プレゼントを もらいました。", jaKanji: "友達にプレゼントをもらいました。", en: "I received a present from a friend.", de: "Ich habe von einem Freund ein Geschenk bekommen.", zh: "从朋友那里收到了礼物。" } },
        { id: "g3", translations: { ja: "えらんで もらえますか？", jaKanji: "選んでもらえますか？", en: "Could you choose it for me?", de: "Könnten Sie es für mich auswählen?", zh: "能帮我选一下吗？" } },
        { id: "g4", translations: { ja: "ラッピングして いただけますか？", jaKanji: "ラッピングしていただけますか？", en: "Could you gift-wrap it for me?", de: "Könnten Sie es für mich einpacken?", zh: "能帮我包装一下吗？" } },
        { id: "g5", translations: { ja: "カードに かいて くださいますか？", jaKanji: "カードに書いてくださいますか？", en: "Could you write on the card?", de: "Könnten Sie auf die Karte schreiben?", zh: "能在卡片上写字吗？" } },
        { id: "g6", translations: { ja: "そぼから とけいを もらいました。", jaKanji: "祖母から時計をもらいました。", en: "I received a watch from my grandmother.", de: "Ich habe von meiner Großmutter eine Uhr bekommen.", zh: "从奶奶那里收到了手表。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        b: { ja: "B", en: "B", de: "B", zh: "B" },
        p: { ja: "P", en: "P", de: "P", zh: "P" },
        m: { ja: "M", en: "M", de: "M", zh: "M" },
        n: { ja: "N", en: "N", de: "N", zh: "N" }
      },
      items: [
        { id: "b1", category: "b", translations: { ja: "びっくりする", en: "to be surprised", de: "überrascht sein", zh: "吃惊" } },
        { id: "b2", category: "b", translations: { ja: "べんきょう", en: "study", de: "Lernen", zh: "学习" } },
        { id: "b3", category: "b", translations: { ja: "ばんごう", en: "number", de: "Nummer", zh: "号码" } },
        { id: "b4", category: "b", translations: { ja: "ぶんしょ", en: "document", de: "Dokument", zh: "文件" } },
        { id: "p1", category: "p", translations: { ja: "パーティー", en: "party", de: "Party", zh: "派对" } },
        { id: "p2", category: "p", translations: { ja: "ぴったり", en: "exactly, perfectly", de: "genau", zh: "正好" } },
        { id: "p3", category: "p", translations: { ja: "プレゼント", en: "present", de: "Geschenk", zh: "礼物" } },
        { id: "p4", category: "p", translations: { ja: "ぺらぺら", en: "fluent", de: "fließend", zh: "流利" } },
        { id: "m1", category: "m", translations: { ja: "まいにち", en: "every day", de: "jeden Tag", zh: "每天" } },
        { id: "m2", category: "m", translations: { ja: "みせ", en: "shop", de: "Geschäft", zh: "商店" } },
        { id: "m3", category: "m", translations: { ja: "むかし", en: "long ago", de: "vor langer Zeit", zh: "从前" } },
        { id: "m4", category: "m", translations: { ja: "もくてき", en: "purpose", de: "Zweck", zh: "目的" } },
        { id: "n1", category: "n", translations: { ja: "なまえ", en: "name", de: "Name", zh: "名字" } },
        { id: "n2", category: "n", translations: { ja: "にっき", en: "diary", de: "Tagebuch", zh: "日记" } },
        { id: "n3", category: "n", translations: { ja: "ぬの", en: "cloth", de: "Stoff", zh: "布料" } },
        { id: "n4", category: "n", translations: { ja: "ねだん", en: "price", de: "Preis", zh: "价格" } }
      ]
    }
  },
  pronunciationDrills: {
    ja: [
      {
        id: "sound-drill",
        title: {
          ja: "はつおんの れんしゅう２",
          en: "Pronunciation Practice 2",
          de: "Aussprachetraining 2",
          zh: "发音练习2"
        },
        spokenIntro: {
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          en: "Next, let's practice with a lot more examples.",
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          b: { ja: "B", en: "B", de: "B", zh: "B" },
          p: { ja: "P", en: "P", de: "P", zh: "P" },
          m: { ja: "M", en: "M", de: "M", zh: "M" },
          n: { ja: "N", en: "N", de: "N", zh: "N" }
        },
        items: [
          { id: "b5", category: "b", translations: { ja: "ばんぐみ", en: "TV program", de: "Fernsehprogramm", zh: "节目" } },
          { id: "b6", category: "b", translations: { ja: "びしょう", en: "smile", de: "Lächeln", zh: "微笑" } },
          { id: "b7", category: "b", translations: { ja: "ぶちょう", en: "department head", de: "Abteilungsleiter(in)", zh: "部长" } },
          { id: "b8", category: "b", translations: { ja: "べつべつに", en: "separately", de: "getrennt", zh: "分别" } },
          { id: "b9", category: "b", translations: { ja: "ぼしゅう", en: "recruitment", de: "Ausschreibung", zh: "招募" } },
          { id: "b10", category: "b", translations: { ja: "ばいてん", en: "kiosk, shop stand", de: "Kiosk", zh: "小卖部" } },
          { id: "b11", category: "b", translations: { ja: "びじゅつ", en: "art", de: "Kunst", zh: "美术" } },
          { id: "b12", category: "b", translations: { ja: "ぶんめい", en: "civilization", de: "Zivilisation", zh: "文明" } },
          { id: "b13", category: "b", translations: { ja: "べんり", en: "convenient", de: "praktisch", zh: "方便" } },
          { id: "b14", category: "b", translations: { ja: "ぼうし", en: "hat", de: "Hut", zh: "帽子" } },
          { id: "b15", category: "b", translations: { ja: "ばあい", en: "case, situation", de: "Fall", zh: "情况" } },
          { id: "b16", category: "b", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
          { id: "b17", category: "b", translations: { ja: "ぶどう", en: "grapes", de: "Trauben", zh: "葡萄" } },
          { id: "b18", category: "b", translations: { ja: "べんとう", en: "boxed lunch", de: "Lunchpaket", zh: "便当" } },

          { id: "p5", category: "p", translations: { ja: "パソコン", en: "personal computer", de: "PC", zh: "电脑" } },
          { id: "p6", category: "p", translations: { ja: "ピアノ", en: "piano", de: "Klavier", zh: "钢琴" } },
          { id: "p7", category: "p", translations: { ja: "プール", en: "pool", de: "Schwimmbad", zh: "游泳池" } },
          { id: "p8", category: "p", translations: { ja: "ペンキ", en: "paint", de: "Farbe", zh: "油漆" } },
          { id: "p9", category: "p", translations: { ja: "ポスト", en: "mailbox", de: "Briefkasten", zh: "邮筒" } },
          { id: "p10", category: "p", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "p11", category: "p", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "p12", category: "p", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "p13", category: "p", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔" } },
          { id: "p14", category: "p", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
          { id: "p15", category: "p", translations: { ja: "はっぱ", en: "leaf", de: "Blatt", zh: "叶子" } },
          { id: "p16", category: "p", translations: { ja: "せんぱい", en: "senior (school/work)", de: "Senior", zh: "前辈" } },
          { id: "p17", category: "p", translations: { ja: "きんぱつ", en: "blond hair", de: "blondes Haar", zh: "金发" } },
          { id: "p18", category: "p", translations: { ja: "たんぽぽ", en: "dandelion", de: "Löwenzahn", zh: "蒲公英" } },

          { id: "m5", category: "m", translations: { ja: "まんぞく", en: "satisfaction", de: "Zufriedenheit", zh: "满足" } },
          { id: "m6", category: "m", translations: { ja: "みらい", en: "future", de: "Zukunft", zh: "未来" } },
          { id: "m7", category: "m", translations: { ja: "むりょう", en: "free of charge", de: "kostenlos", zh: "免费" } },
          { id: "m8", category: "m", translations: { ja: "めいわく", en: "nuisance", de: "Belästigung", zh: "麻烦" } },
          { id: "m9", category: "m", translations: { ja: "もくひょう", en: "goal", de: "Ziel", zh: "目标" } },
          { id: "m10", category: "m", translations: { ja: "まわり", en: "surroundings", de: "Umgebung", zh: "周围" } },
          { id: "m11", category: "m", translations: { ja: "みかた", en: "ally, supporter", de: "Verbündete(r)", zh: "支持者" } },
          { id: "m12", category: "m", translations: { ja: "むすぶ", en: "to tie, connect", de: "verbinden", zh: "连接" } },
          { id: "m13", category: "m", translations: { ja: "めうえ", en: "senior in rank", de: "Rangälterer", zh: "长辈" } },
          { id: "m14", category: "m", translations: { ja: "もちろん", en: "of course", de: "natürlich", zh: "当然" } },
          { id: "m15", category: "m", translations: { ja: "まかせる", en: "to entrust, leave to", de: "anvertrauen", zh: "委托" } },
          { id: "m16", category: "m", translations: { ja: "みとめる", en: "to acknowledge, approve", de: "anerkennen", zh: "承认" } },
          { id: "m17", category: "m", translations: { ja: "むかえる", en: "to welcome, greet", de: "empfangen", zh: "迎接" } },
          { id: "m18", category: "m", translations: { ja: "めぐまれる", en: "to be blessed", de: "gesegnet sein", zh: "被眷顾" } },

          { id: "n5", category: "n", translations: { ja: "なやみ", en: "worry, trouble", de: "Sorge", zh: "烦恼" } },
          { id: "n6", category: "n", translations: { ja: "にんき", en: "popularity", de: "Beliebtheit", zh: "人气" } },
          { id: "n7", category: "n", translations: { ja: "ぬすむ", en: "to steal", de: "stehlen", zh: "偷" } },
          { id: "n8", category: "n", translations: { ja: "ねっしん", en: "enthusiastic", de: "begeistert", zh: "热心" } },
          { id: "n9", category: "n", translations: { ja: "のうりょく", en: "ability", de: "Fähigkeit", zh: "能力" } },
          { id: "n10", category: "n", translations: { ja: "なっとく", en: "understanding, agreement", de: "Verständnis", zh: "认同" } },
          { id: "n11", category: "n", translations: { ja: "にがて", en: "poor at, weak point", de: "schwach in", zh: "不擅长" } },
          { id: "n12", category: "n", translations: { ja: "ぬる", en: "to paint, apply", de: "auftragen", zh: "涂抹" } },
          { id: "n13", category: "n", translations: { ja: "ねんれい", en: "age", de: "Alter", zh: "年龄" } },
          { id: "n14", category: "n", translations: { ja: "のぞむ", en: "to wish, desire", de: "wünschen", zh: "希望" } },
          { id: "n15", category: "n", translations: { ja: "なかなおり", en: "reconciliation", de: "Versöhnung", zh: "和好" } },
          { id: "n16", category: "n", translations: { ja: "にっちゅう", en: "daytime", de: "tagsüber", zh: "白天" } },
          { id: "n17", category: "n", translations: { ja: "ぬけだす", en: "to slip away", de: "sich davonschleichen", zh: "溜走" } },
          { id: "n18", category: "n", translations: { ja: "ねぼう", en: "oversleeping", de: "Verschlafen", zh: "睡过头" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-mono",
        title: { ja: "れんしゅう：ものの やりもらい", en: "Practice: Giving/Receiving Objects", de: "Übung: Geben/Nehmen von Gegenständen", zh: "练习：物品的授受" },
        spokenIntro: {
          ja: "つぎは、ものを あげたり もらったり する れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences about giving and receiving objects.",
          de: "Als Nächstes üben wir Beispielsätze über das Geben und Nehmen von Gegenständen.",
          zh: "接下来，让我们练习关于给予和接受物品的例句。"
        },
        lines: [
          { id: "mo1", translations: { ja: "たんじょうびに プレゼントを あげました。", jaKanji: "誕生日にプレゼントをあげました。", en: "I gave a present for the birthday.", de: "Ich habe zum Geburtstag ein Geschenk gegeben.", zh: "生日的时候送了礼物。" } },
          { id: "mo2", translations: { ja: "ともだちに プレゼントを もらいました。", jaKanji: "友達にプレゼントをもらいました。", en: "I received a present from a friend.", de: "Ich habe von einem Freund ein Geschenk bekommen.", zh: "从朋友那里收到了礼物。" } },
          { id: "mo3", translations: { ja: "そぼから とけいを もらいました。", jaKanji: "祖母から時計をもらいました。", en: "I received a watch from my grandmother.", de: "Ich habe von meiner Großmutter eine Uhr bekommen.", zh: "从奶奶那里收到了手表。" } },
          { id: "mo4", translations: { ja: "ともだちは わたしに はなを くれました。", jaKanji: "友達は私に花をくれました。", en: "My friend gave me flowers.", de: "Mein Freund hat mir Blumen gegeben.", zh: "朋友给了我花。" } },
          { id: "mo5", translations: { ja: "こどもに おかしを あげました。", jaKanji: "子供にお菓子をあげました。", en: "I gave the child some sweets.", de: "Ich habe dem Kind Süßigkeiten gegeben.", zh: "给孩子了糖果。" } },
          { id: "mo6", translations: { ja: "せんせいに ほんを もらいました。", jaKanji: "先生に本をもらいました。", en: "I received a book from my teacher.", de: "Ich habe von meinem Lehrer ein Buch bekommen.", zh: "从老师那里收到了书。" } },
          { id: "mo7", translations: { ja: "かのじょは わたしに カードを くれました。", jaKanji: "彼女は私にカードをくれました。", en: "She gave me a card.", de: "Sie hat mir eine Karte gegeben.", zh: "她给了我一张卡片。" } },
          { id: "mo8", translations: { ja: "りょうしんに おかねを もらいました。", jaKanji: "両親にお金をもらいました。", en: "I received money from my parents.", de: "Ich habe von meinen Eltern Geld bekommen.", zh: "从父母那里收到了钱。" } },
          { id: "mo9", translations: { ja: "どうりょうに おみやげを あげました。", jaKanji: "同僚にお土産をあげました。", en: "I gave my colleague a souvenir.", de: "Ich habe meinem Kollegen ein Souvenir gegeben.", zh: "给同事送了伴手礼。" } },
          { id: "mo10", translations: { ja: "むすめは わたしに えを くれました。", jaKanji: "娘は私に絵をくれました。", en: "My daughter gave me a drawing.", de: "Meine Tochter hat mir ein Bild gegeben.", zh: "女儿给了我一幅画。" } }
        ]
      },
      {
        id: "grammar-drill-request",
        title: { ja: "れんしゅう：ていねいな おねがい", en: "Practice: Polite Requests", de: "Übung: Höfliche Bitten", zh: "练习：礼貌请求" },
        spokenIntro: {
          ja: "つぎは、ていねいな おねがいの れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences with polite requests.",
          de: "Als Nächstes üben wir Beispielsätze mit höflichen Bitten.",
          zh: "接下来，让我们练习礼貌请求的例句。"
        },
        lines: [
          { id: "rq1", translations: { ja: "えらんで もらえますか？", jaKanji: "選んでもらえますか？", en: "Could you choose it for me?", de: "Könnten Sie es für mich auswählen?", zh: "能帮我选一下吗？" } },
          { id: "rq2", translations: { ja: "ラッピングして いただけますか？", jaKanji: "ラッピングしていただけますか？", en: "Could you gift-wrap it for me?", de: "Könnten Sie es für mich einpacken?", zh: "能帮我包装一下吗？" } },
          { id: "rq3", translations: { ja: "カードに かいて くださいますか？", jaKanji: "カードに書いてくださいますか？", en: "Could you write on the card?", de: "Könnten Sie auf die Karte schreiben?", zh: "能在卡片上写字吗？" } },
          { id: "rq4", translations: { ja: "しゃしんを とって もらえますか？", jaKanji: "写真を撮ってもらえますか？", en: "Could you take a photo for me?", de: "Könnten Sie ein Foto für mich machen?", zh: "能帮我拍张照吗？" } },
          { id: "rq5", translations: { ja: "みちを おしえて いただけますか？", jaKanji: "道を教えていただけますか？", en: "Could you tell me the way?", de: "Könnten Sie mir den Weg zeigen?", zh: "能告诉我路怎么走吗？" } },
          { id: "rq6", translations: { ja: "すこし まって もらえますか？", jaKanji: "少し待ってもらえますか？", en: "Could you wait a little?", de: "Könnten Sie kurz warten?", zh: "能稍等一下吗？" } },
          { id: "rq7", translations: { ja: "もういちど せつめいして いただけますか？", jaKanji: "もう一度説明していただけますか？", en: "Could you explain it once more?", de: "Könnten Sie es noch einmal erklären?", zh: "能再解释一次吗？" } },
          { id: "rq8", translations: { ja: "でんわばんごうを おしえて もらえますか？", jaKanji: "電話番号を教えてもらえますか？", en: "Could you tell me your phone number?", de: "Könnten Sie mir Ihre Telefonnummer geben?", zh: "能告诉我电话号码吗？" } },
          { id: "rq9", translations: { ja: "かさを かして いただけますか？", jaKanji: "傘を貸していただけますか？", en: "Could you lend me an umbrella?", de: "Könnten Sie mir einen Regenschirm leihen?", zh: "能借我一把伞吗？" } },
          { id: "rq10", translations: { ja: "しずかに して くださいますか？", jaKanji: "静かにしてくださいますか？", en: "Could you please be quiet?", de: "Könnten Sie bitte leise sein?", zh: "能安静一点吗？" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "こころを こめて", en: "With All My Heart", de: "Von ganzem Herzen" },
    lines: [
      { id: "sg1", translations: { ja: "あなたに あげたい もの", en: "Something I want to give you", de: "Etwas, das ich dir geben möchte" } },
      { id: "sg2", translations: { ja: "こころを こめて えらんだ", en: "I chose it with all my heart", de: "Ich habe es von ganzem Herzen ausgewählt" } },
      { id: "sg3", translations: { ja: "よろこんで くれると いいな", en: "I hope it makes you happy", de: "Ich hoffe, es macht dich glücklich" } },
      { id: "sg4", translations: { ja: "ありがとうの きもちを こめて", en: "With feelings of gratitude", de: "Mit Gefühlen der Dankbarkeit" } }
    ]
  }
};
