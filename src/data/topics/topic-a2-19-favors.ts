import type { TopicLesson } from "../topicTypes";

// A2 — row 20 of docs/a2-master-lesson-table-v01.md. Grammar:
// 〜てあげる／〜てくれる／〜てもらう (giving/receiving verbs for
// actions) + 〜てほしい (wanting someone to do something).
// Pronunciation 1/2 (K vs G, S vs SH) kept exactly as assigned.

export const topicFavors: TopicLesson = {
  id: "topic-a2-19-favors",
  lessonNumber: 19,
  level: "A2",
  topicName: {
    ja: "たすけあい",
    en: "Favors",
    de: "Gefälligkeiten",
    zh: "帮忙"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "てつだい", jaKanji: "手伝い", en: "help", de: "Hilfe", zh: "帮忙" } },
    { id: "v02", category: "noun", translations: { ja: "おねがい", jaKanji: "お願い", en: "request, favor", de: "Bitte", zh: "请求" } },
    { id: "v03", category: "noun", translations: { ja: "おれい", jaKanji: "お礼", en: "thanks, token of gratitude", de: "Dank", zh: "谢礼" } },
    { id: "v04", category: "verb", translations: { ja: "かりる", jaKanji: "借りる", en: "to borrow", de: "leihen (von)", zh: "借" } },
    { id: "v05", category: "verb", translations: { ja: "かす", jaKanji: "貸す", en: "to lend", de: "verleihen", zh: "借出" } },
    { id: "v06", category: "verb", translations: { ja: "てつだう", jaKanji: "手伝う", en: "to help", de: "helfen", zh: "帮忙" } },
    { id: "v07", category: "verb", translations: { ja: "おしえる", jaKanji: "教える", en: "to teach, tell", de: "lehren, sagen", zh: "教，告诉" } },
    { id: "v08", category: "verb", translations: { ja: "おくる", jaKanji: "送る", en: "to send", de: "schicken", zh: "寄送" } },
    { id: "v09", category: "verb", translations: { ja: "かえす", jaKanji: "返す", en: "to return something", de: "zurückgeben", zh: "归还" } },
    { id: "v10", category: "verb", translations: { ja: "もつ", jaKanji: "持つ", en: "to hold, carry", de: "halten", zh: "拿，持有" } },
    { id: "v11", category: "verb", translations: { ja: "はこぶ", jaKanji: "運ぶ", en: "to carry, transport", de: "transportieren", zh: "搬运" } },
    { id: "v12", category: "verb", translations: { ja: "なおす", jaKanji: "直す", en: "to fix", de: "reparieren", zh: "修理" } },
    { id: "v13", category: "verb", translations: { ja: "みせる", jaKanji: "見せる", en: "to show", de: "zeigen", zh: "展示" } },
    { id: "v14", category: "verb", translations: { ja: "つくる", jaKanji: "作る", en: "to make", de: "machen", zh: "制作" } },
    { id: "v15", category: "verb", translations: { ja: "あげる", jaKanji: "あげる", en: "to give (to someone else)", de: "geben (an jemand anderen)", zh: "给（别人）" } },
    { id: "v16", category: "verb", translations: { ja: "くれる", jaKanji: "くれる", en: "to give (to me)", de: "geben (an mich)", zh: "给（我）" } },
    { id: "v17", category: "verb", translations: { ja: "もらう", jaKanji: "もらう", en: "to receive", de: "erhalten", zh: "接受" } },
    { id: "v18", category: "verb", translations: { ja: "かんしゃする", jaKanji: "感謝する", en: "to thank, be grateful", de: "danken", zh: "感谢" } },
    { id: "v19", category: "verb", translations: { ja: "たすける", jaKanji: "助ける", en: "to help, save", de: "helfen, retten", zh: "帮助，救助" } },
    { id: "v20", category: "verb", translations: { ja: "やくにたつ", jaKanji: "役に立つ", en: "to be useful", de: "nützlich sein", zh: "有用" } },
    { id: "v21", category: "verb", translations: { ja: "めいわくをかける", jaKanji: "迷惑をかける", en: "to cause trouble", de: "Ärger machen", zh: "添麻烦" } },
    { id: "v22", category: "verb", translations: { ja: "きをつかう", jaKanji: "気を使う", en: "to be considerate", de: "rücksichtsvoll sein", zh: "费心" } },
    { id: "v23", category: "verb", translations: { ja: "えんりょする", jaKanji: "遠慮する", en: "to hold back, be reserved", de: "sich zurückhalten", zh: "客气" } },
    { id: "v24", category: "verb", translations: { ja: "たのむ", jaKanji: "頼む", en: "to ask a favor", de: "bitten", zh: "拜托" } },
    { id: "v25", category: "adjective", translations: { ja: "しんせつな", jaKanji: "親切な", en: "kind", de: "freundlich", zh: "亲切的" } },
    { id: "v26", category: "adjective", translations: { ja: "かんたんな", jaKanji: "簡単な", en: "easy", de: "einfach", zh: "简单的" } },
    { id: "v27", category: "adjective", translations: { ja: "たいへんな", jaKanji: "大変な", en: "difficult, tough", de: "schwierig", zh: "辛苦的" } },
    { id: "v28", category: "adjective", translations: { ja: "ひつような", jaKanji: "必要な", en: "necessary", de: "notwendig", zh: "必要的" } },
    { id: "v29", category: "adverb", translations: { ja: "ぜひ", jaKanji: "ぜひ", en: "by all means", de: "unbedingt", zh: "一定" } },
    { id: "v30", category: "adverb", translations: { ja: "とくに", jaKanji: "特に", en: "especially", de: "besonders", zh: "特别" } }
  ],
  dialogueA: {
    title: { ja: "だれかに たすけを たのむ", en: "Asking Someone for Help", de: "Jemanden um Hilfe bitten", zh: "请求帮助" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "すみません、ちょっと てつだって もらえますか？", jaKanji: "すみません、ちょっと手伝ってもらえますか？", en: "Excuse me, could you help me for a moment?", de: "Entschuldigung, könnten Sie mir kurz helfen?", zh: "不好意思，能帮我一下吗？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "もちろんです。なにを して ほしいですか？", jaKanji: "もちろんです。何をしてほしいですか？", en: "Of course. What would you like me to do?", de: "Natürlich. Was möchten Sie, dass ich tue?", zh: "当然。你想让我做什么？" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "この にもつを はこんで ほしいんです。", jaKanji: "この荷物を運んでほしいんです。", en: "I'd like you to carry this luggage.", de: "Ich möchte, dass Sie dieses Gepäck tragen.", zh: "想请你搬一下这个行李。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいですよ。ほかに なにか てつだいましょうか？", jaKanji: "いいですよ。他に何か手伝いましょうか？", en: "Sure. Shall I help with anything else too?", de: "Klar. Soll ich Ihnen auch bei etwas anderem helfen?", zh: "好的。还需要帮别的忙吗？" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "パソコンの つかいかたを おしえて もらえますか？", jaKanji: "パソコンの使い方を教えてもらえますか？", en: "Could you teach me how to use the computer?", de: "Könnten Sie mir zeigen, wie man den Computer benutzt?", zh: "能教我一下怎么用电脑吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、おしえて あげますよ。かんたんですから。", jaKanji: "はい、教えてあげますよ。簡単ですから。", en: "Sure, I'll teach you. It's easy.", de: "Ja, ich zeige es Ihnen. Es ist einfach.", zh: "好，我教你。因为很简单。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ありがとうございます。たすかります。", jaKanji: "ありがとうございます。助かります。", en: "Thank you. That's a big help.", de: "Danke schön. Das hilft mir sehr.", zh: "谢谢你。真是帮了大忙。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "えんりょしないで、なんでも たのんで くださいね。", jaKanji: "遠慮しないで、何でも頼んでくださいね。", en: "Don't hold back, ask me for anything.", de: "Seien Sie nicht zurückhaltend, bitten Sie mich um alles.", zh: "别客气，什么都可以拜托我。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "けんさんは いつも しんせつに して くれますね。", jaKanji: "健さんはいつも親切にしてくれますね。", en: "Ken, you're always so kind to me.", de: "Ken, Sie sind immer so freundlich zu mir.", zh: "健总是很亲切呢。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいえ、いつも たすけて もらって いますから。", jaKanji: "いいえ、いつも助けてもらっていますから。", en: "No, it's because you always help me too.", de: "Nein, weil Sie mir auch immer helfen.", zh: "不，因为你也总是帮助我。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "おれいに、なにか つくって あげたいです。", jaKanji: "お礼に、何か作ってあげたいです。", en: "As thanks, I'd like to make something for you.", de: "Als Dank möchte ich etwas für Sie machen.", zh: "作为答谢，我想给你做点什么。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きを つかわないで ください。ともだちですから。", jaKanji: "気を使わないでください。友達ですから。", en: "Please don't worry about it. We're friends.", de: "Machen Sie sich bitte keine Gedanken. Wir sind Freunde.", zh: "不用费心。我们是朋友嘛。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "でも、ぜひ かんしゃの きもちを つたえたいです。", jaKanji: "でも、ぜひ感謝の気持ちを伝えたいです。", en: "But I really want to convey my gratitude.", de: "Aber ich möchte unbedingt meine Dankbarkeit ausdrücken.", zh: "不过我真的很想表达一下感谢之情。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じゃあ、こんど おいしい ものを たべに いきましょう。", jaKanji: "じゃあ、今度おいしいものを食べに行きましょう。", en: "Then let's go eat something delicious together sometime.", de: "Dann lass uns mal etwas Leckeres essen gehen.", zh: "那下次一起去吃点好吃的吧。" } }
    ]
  },
  dialogueB: {
    title: { ja: "たすけあった ことを せつめいする", en: "Explaining a Favor", de: "Eine Gefälligkeit erklären", zh: "说明帮忙的事情" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きのう、どうりょうに てつだって もらいました。", jaKanji: "昨日、同僚に手伝ってもらいました。", en: "Yesterday, a colleague helped me out.", de: "Gestern hat mir ein Kollege geholfen.", zh: "昨天，同事帮了我的忙。" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "どんな ことを して もらったんですか？", jaKanji: "どんなことをしてもらったんですか？", en: "What did they do for you?", de: "Was hat er/sie für Sie getan?", zh: "他帮你做了什么？" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しりょうを つくるのを てつだって くれました。", jaKanji: "資料を作るのを手伝ってくれました。", en: "They helped me make some materials.", de: "Er/Sie hat mir geholfen, Unterlagen zu erstellen.", zh: "帮我做了资料。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "やさしい どうりょうですね。", jaKanji: "優しい同僚ですね。", en: "That's a kind colleague.", de: "Das ist ein netter Kollege.", zh: "真是个亲切的同事呢。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、パソコンが こわれた ときも なおして くれました。", jaKanji: "はい、パソコンが壊れた時も直してくれました。", en: "Yes, they also fixed my computer when it broke.", de: "Ja, er/sie hat auch meinen Computer repariert, als er kaputt ging.", zh: "是的，电脑坏了的时候也帮我修了。" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そらさんは その どうりょうに なにか して あげましたか？", jaKanji: "そらさんはその同僚に何かしてあげましたか？", en: "Wait, did you do anything for that colleague?", de: "Haben Sie diesem Kollegen auch etwas gegeben?", zh: "空，你给那位同事做过什么吗？" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、わたしは かれに ほんを かして あげました。", jaKanji: "はい、私は彼に本を貸してあげました。", en: "Yes, I lent them a book.", de: "Ja, ich habe ihm ein Buch geliehen.", zh: "是的，我借给他一本书。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "たすけあって いるんですね。", jaKanji: "助け合っているんですね。", en: "You're helping each other out, aren't you.", de: "Sie helfen sich gegenseitig, oder?", zh: "你们在互相帮助呢。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、おたがいに たすけて もらって います。", jaKanji: "はい、お互いに助けてもらっています。", en: "Yes, we help each other.", de: "Ja, wir helfen uns gegenseitig.", zh: "是的，我们互相帮助。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わたしも だれかに てつだって もらいたいです。", jaKanji: "私も誰かに手伝ってもらいたいです。", en: "I'd like someone to help me too.", de: "Ich möchte auch, dass mir jemand hilft.", zh: "我也想请人帮帮忙。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "なにか こまって いる ことが あるんですか？", jaKanji: "何か困っていることがあるんですか？", en: "Is there something you're having trouble with?", de: "Gibt es etwas, mit dem Sie Schwierigkeiten haben?", zh: "有什么正在为难的事吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、ほうこくしょが むずかしくて、てつだって ほしいです。", jaKanji: "はい、報告書が難しくて、手伝ってほしいです。", en: "Yes, the report is difficult, and I'd like some help.", de: "Ja, der Bericht ist schwierig, und ich hätte gerne Hilfe.", zh: "是的，报告很难，希望有人帮忙。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしで よければ、てつだって あげますよ。", jaKanji: "私でよければ、手伝ってあげますよ。", en: "If I'll do, I'll help you.", de: "Wenn ich recht bin, helfe ich Ihnen gerne.", zh: "如果我可以的话，我来帮你吧。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ほんとうですか？ありがとう ございます！たすかります。", jaKanji: "本当ですか？ありがとうございます！助かります。", en: "Really? Thank you! That's a big help.", de: "Wirklich? Vielen Dank! Das hilft mir sehr.", zh: "真的吗？谢谢你！真是帮了大忙。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "あげる／くれる／もらう＋〜てほしい：やりもらいの どうし", en: "Ageru/Kureru/Morau + ~Tehoshii: Giving and Receiving Verbs", de: "Ageru/Kureru/Morau + ~Tehoshii: Geben-und-Nehmen-Verben", zh: "あげる／くれる／もらう＋〜てほしい：授受动词" },
      explanation: {
        ja: "「〜てあげる」は、じぶんや じぶんの グループの ひとが、ほかの ひとの ために なにかを する ことを あらわします（そとへの ほうこう）。「〜てくれる」は、ほかの ひとが じぶんの ために なにかを して くれる ことを あらわします（うちへの ほうこう）。「〜てもらう」は、じぶんが ほかの ひとに たのんで／おかげで なにかを して もらう ことを あらわします。「〜てほしい」は「〜して ほしい」で、あいてに ある こうどうを して ほしいと いう きぼうを あらわします。",
        en: "~te ageru expresses that you (or someone in your group) do something for someone else — the direction is \"outward.\" ~te kureru expresses that someone else does something for you — the direction is \"inward.\" ~te morau expresses that you receive an action done by someone else (often through asking them). ~te hoshii expresses wanting someone else to do a certain action.",
        de: "~te ageru drückt aus, dass Sie (oder jemand aus Ihrer Gruppe) etwas für jemand anderen tun — die Richtung ist \"nach außen.\" ~te kureru drückt aus, dass jemand anderes etwas für Sie tut — die Richtung ist \"nach innen.\" ~te morau drückt aus, dass Sie eine Handlung erhalten, die jemand anderes ausgeführt hat (oft durch Bitten). ~te hoshii drückt den Wunsch aus, dass jemand anderes eine bestimmte Handlung ausführt.",
        zh: "〜てあげる表示你（或你这一方的人）为别人做某事——方向是\"向外\"。〜てくれる表示别人为你做某事——方向是\"向内\"。〜てもらう表示你（通常通过请求）从别人那里得到某个动作。〜てほしい表示希望别人做某个动作。"
      },
      chunks: [
        { id: "g1", translations: { ja: "わたしは ともだちに ほんを かして あげました。", jaKanji: "私は友達に本を貸してあげました。", en: "I lent my friend a book.", de: "Ich habe meinem Freund ein Buch geliehen.", zh: "我借给朋友一本书。" } },
        { id: "g2", translations: { ja: "ともだちは わたしに ほんを かして くれました。", jaKanji: "友達は私に本を貸してくれました。", en: "My friend lent me a book.", de: "Mein Freund hat mir ein Buch geliehen.", zh: "朋友借给我一本书。" } },
        { id: "g3", translations: { ja: "わたしは ともだちに ほんを かして もらいました。", jaKanji: "私は友達に本を貸してもらいました。", en: "I got my friend to lend me a book.", de: "Mein Freund hat mir ein Buch geliehen (ich habe es bekommen).", zh: "我请朋友借给我一本书。" } },
        { id: "g4", translations: { ja: "てつだって ほしいです。", jaKanji: "手伝ってほしいです。", en: "I want you to help me.", de: "Ich möchte, dass Sie mir helfen.", zh: "希望你帮我。" } },
        { id: "g5", translations: { ja: "せんせいは がくせいに にほんごを おしえて くれました。", jaKanji: "先生は学生に日本語を教えてくれました。", en: "The teacher taught the students Japanese.", de: "Der Lehrer hat den Schülern Japanisch beigebracht.", zh: "老师教了学生们日语。" } },
        { id: "g6", translations: { ja: "もっと はやく きて ほしかったです。", jaKanji: "もっと早く来てほしかったです。", en: "I wanted you to come earlier.", de: "Ich hätte gewollt, dass Sie früher kommen.", zh: "希望你早点来。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        k: { ja: "K", en: "K", de: "K", zh: "K" },
        g: { ja: "G", en: "G", de: "G", zh: "G" },
        s: { ja: "S", en: "S", de: "S", zh: "S" },
        sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" }
      },
      items: [
        { id: "k1", category: "k", translations: { ja: "かぞく", en: "family", de: "Familie", zh: "家人" } },
        { id: "k2", category: "k", translations: { ja: "きせつ", en: "season", de: "Jahreszeit", zh: "季节" } },
        { id: "k3", category: "k", translations: { ja: "かいしゃ", en: "company", de: "Firma", zh: "公司" } },
        { id: "k4", category: "k", translations: { ja: "きもち", en: "feeling", de: "Gefühl", zh: "心情" } },
        { id: "g1", category: "g", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
        { id: "g2", category: "g", translations: { ja: "げんき", en: "healthy, energetic", de: "gesund", zh: "健康" } },
        { id: "g3", category: "g", translations: { ja: "ごはん", en: "rice, meal", de: "Reis, Mahlzeit", zh: "饭" } },
        { id: "g4", category: "g", translations: { ja: "ぎゅうにゅう", en: "milk", de: "Milch", zh: "牛奶" } },
        { id: "s1", category: "s", translations: { ja: "せわ", en: "care, looking after", de: "Fürsorge", zh: "照顾" } },
        { id: "s2", category: "s", translations: { ja: "そうだん", en: "consultation", de: "Beratung", zh: "商量" } },
        { id: "s3", category: "s", translations: { ja: "さんか", en: "participation", de: "Teilnahme", zh: "参加" } },
        { id: "s4", category: "s", translations: { ja: "すいえい", en: "swimming", de: "Schwimmen", zh: "游泳" } },
        { id: "sh1", category: "sh", translations: { ja: "しんせつな", en: "kind", de: "freundlich", zh: "亲切的" } },
        { id: "sh2", category: "sh", translations: { ja: "しつもん", en: "question", de: "Frage", zh: "问题" } },
        { id: "sh3", category: "sh", translations: { ja: "しゅみ", en: "hobby", de: "Hobby", zh: "爱好" } },
        { id: "sh4", category: "sh", translations: { ja: "しょうかい", en: "introduction", de: "Vorstellung", zh: "介绍" } }
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
          k: { ja: "K", en: "K", de: "K", zh: "K" },
          g: { ja: "G", en: "G", de: "G", zh: "G" },
          s: { ja: "S", en: "S", de: "S", zh: "S" },
          sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" }
        },
        items: [
          { id: "k5", category: "k", translations: { ja: "かいけつする", en: "to solve", de: "lösen", zh: "解决" } },
          { id: "k6", category: "k", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验" } },
          { id: "k7", category: "k", translations: { ja: "こうかい", en: "regret", de: "Bedauern", zh: "后悔" } },
          { id: "k8", category: "k", translations: { ja: "きぼう", en: "hope, wish", de: "Hoffnung", zh: "希望" } },
          { id: "k9", category: "k", translations: { ja: "けっしん", en: "determination", de: "Entschlossenheit", zh: "决心" } },
          { id: "k10", category: "k", translations: { ja: "こうどう", en: "action, behavior", de: "Verhalten", zh: "行动" } },
          { id: "k11", category: "k", translations: { ja: "かんり", en: "management", de: "Verwaltung", zh: "管理" } },
          { id: "k12", category: "k", translations: { ja: "きょうつう", en: "common, shared", de: "gemeinsam", zh: "共同" } },
          { id: "k13", category: "k", translations: { ja: "けんり", en: "right (entitlement)", de: "Recht", zh: "权利" } },
          { id: "k14", category: "k", translations: { ja: "こんなん", en: "difficulty", de: "Schwierigkeit", zh: "困难" } },
          { id: "k15", category: "k", translations: { ja: "かんがえる", en: "to think, consider", de: "nachdenken", zh: "思考" } },
          { id: "k16", category: "k", translations: { ja: "きんちょうする", en: "to get nervous", de: "nervös werden", zh: "紧张" } },
          { id: "k17", category: "k", translations: { ja: "けっか", en: "result", de: "Ergebnis", zh: "结果" } },
          { id: "k18", category: "k", translations: { ja: "こまる", en: "to be in trouble", de: "in Schwierigkeiten sein", zh: "为难" } },

          { id: "g5", category: "g", translations: { ja: "がいねん", en: "concept", de: "Konzept", zh: "概念" } },
          { id: "g6", category: "g", translations: { ja: "ぎむ", en: "duty, obligation", de: "Pflicht", zh: "义务" } },
          { id: "g7", category: "g", translations: { ja: "ぐたいてきな", en: "concrete, specific", de: "konkret", zh: "具体的" } },
          { id: "g8", category: "g", translations: { ja: "げんじつ", en: "reality", de: "Realität", zh: "现实" } },
          { id: "g9", category: "g", translations: { ja: "ごかい", en: "misunderstanding", de: "Missverständnis", zh: "误解" } },
          { id: "g10", category: "g", translations: { ja: "がまん", en: "patience, endurance", de: "Geduld", zh: "忍耐" } },
          { id: "g11", category: "g", translations: { ja: "ぎろん", en: "discussion, debate", de: "Diskussion", zh: "讨论" } },
          { id: "g12", category: "g", translations: { ja: "ぐうぜん", en: "coincidence", de: "Zufall", zh: "偶然" } },
          { id: "g13", category: "g", translations: { ja: "げんじょう", en: "current state", de: "aktueller Zustand", zh: "现状" } },
          { id: "g14", category: "g", translations: { ja: "ごうい", en: "agreement, consensus", de: "Einigung", zh: "达成一致" } },
          { id: "g15", category: "g", translations: { ja: "がっかりする", en: "to be disappointed", de: "enttäuscht sein", zh: "失望" } },
          { id: "g16", category: "g", translations: { ja: "ぎじゅつ", en: "technology, skill", de: "Technik", zh: "技术" } },
          { id: "g17", category: "g", translations: { ja: "ぐたい", en: "concreteness", de: "Konkretheit", zh: "具体" } },
          { id: "g18", category: "g", translations: { ja: "げんそく", en: "principle", de: "Prinzip", zh: "原则" } },

          { id: "s5", category: "s", translations: { ja: "さくぶん", en: "composition, essay", de: "Aufsatz", zh: "作文" } },
          { id: "s6", category: "s", translations: { ja: "せいかつ", en: "life, lifestyle", de: "Leben", zh: "生活" } },
          { id: "s7", category: "s", translations: { ja: "そつぎょう", en: "graduation", de: "Abschluss", zh: "毕业" } },
          { id: "s8", category: "s", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "s9", category: "s", translations: { ja: "すずしい", en: "cool (weather)", de: "kühl", zh: "凉爽" } },
          { id: "s10", category: "s", translations: { ja: "せまい", en: "narrow, cramped", de: "eng", zh: "狭窄" } },
          { id: "s11", category: "s", translations: { ja: "そだてる", en: "to raise, grow", de: "aufziehen", zh: "养育" } },
          { id: "s12", category: "s", translations: { ja: "さがす", en: "to search", de: "suchen", zh: "寻找" } },
          { id: "s13", category: "s", translations: { ja: "すごす", en: "to spend time", de: "verbringen", zh: "度过" } },
          { id: "s14", category: "s", translations: { ja: "そろえる", en: "to arrange, align", de: "ordnen", zh: "备齐" } },
          { id: "s15", category: "s", translations: { ja: "さいふ", en: "wallet", de: "Geldbörse", zh: "钱包" } },
          { id: "s16", category: "s", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
          { id: "s17", category: "s", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
          { id: "s18", category: "s", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },

          { id: "sh5", category: "sh", translations: { ja: "しちがつ", en: "July", de: "Juli", zh: "七月" } },
          { id: "sh6", category: "sh", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
          { id: "sh7", category: "sh", translations: { ja: "しょうらい", en: "future", de: "Zukunft", zh: "将来" } },
          { id: "sh8", category: "sh", translations: { ja: "しゅうかん", en: "habit", de: "Gewohnheit", zh: "习惯" } },
          { id: "sh9", category: "sh", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef", zh: "总经理" } },
          { id: "sh10", category: "sh", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "sh11", category: "sh", translations: { ja: "しっぱい", en: "failure", de: "Misserfolg", zh: "失败" } },
          { id: "sh12", category: "sh", translations: { ja: "しゅうしょく", en: "finding employment", de: "Berufseinstieg", zh: "就业" } },
          { id: "sh13", category: "sh", translations: { ja: "しょうぼう", en: "firefighting", de: "Feuerwehr", zh: "消防" } },
          { id: "sh14", category: "sh", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
          { id: "sh15", category: "sh", translations: { ja: "しゅっせき", en: "attendance", de: "Anwesenheit", zh: "出席" } },
          { id: "sh16", category: "sh", translations: { ja: "しょうたい", en: "invitation", de: "Einladung", zh: "邀请" } },
          { id: "sh17", category: "sh", translations: { ja: "しゅうり", en: "repair", de: "Reparatur", zh: "修理" } },
          { id: "sh18", category: "sh", translations: { ja: "しんぱん", en: "referee, judgment", de: "Schiedsrichter", zh: "裁判" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-agekure",
        title: { ja: "れんしゅう：あげる／くれる／もらう", en: "Practice: Ageru / Kureru / Morau", de: "Übung: Ageru / Kureru / Morau", zh: "练习：あげる／くれる／もらう" },
        spokenIntro: {
          ja: "つぎは、あげる・くれる・もらうを つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ageru, kureru, and morau.",
          de: "Als Nächstes üben wir Beispielsätze mit ageru, kureru und morau.",
          zh: "接下来，让我们练习使用あげる、くれる、もらう的例句。"
        },
        lines: [
          { id: "ag1", translations: { ja: "わたしは ともだちに ほんを かして あげました。", jaKanji: "私は友達に本を貸してあげました。", en: "I lent my friend a book.", de: "Ich habe meinem Freund ein Buch geliehen.", zh: "我借给朋友一本书。" } },
          { id: "ag2", translations: { ja: "ともだちは わたしに ほんを かして くれました。", jaKanji: "友達は私に本を貸してくれました。", en: "My friend lent me a book.", de: "Mein Freund hat mir ein Buch geliehen.", zh: "朋友借给我一本书。" } },
          { id: "ag3", translations: { ja: "わたしは ともだちに ほんを かして もらいました。", jaKanji: "私は友達に本を貸してもらいました。", en: "I got my friend to lend me a book.", de: "Ich habe mir von meinem Freund ein Buch leihen lassen.", zh: "我请朋友借给我一本书。" } },
          { id: "ag4", translations: { ja: "せんせいは わたしに にほんごを おしえて くれました。", jaKanji: "先生は私に日本語を教えてくれました。", en: "The teacher taught me Japanese.", de: "Der Lehrer hat mir Japanisch beigebracht.", zh: "老师教了我日语。" } },
          { id: "ag5", translations: { ja: "わたしは いもうとに おかしを あげました。", jaKanji: "私は妹にお菓子をあげました。", en: "I gave my younger sister some sweets.", de: "Ich habe meiner jüngeren Schwester Süßigkeiten gegeben.", zh: "我给妹妹了糖果。" } },
          { id: "ag6", translations: { ja: "ははは わたしに おべんとうを つくって くれました。", jaKanji: "母は私にお弁当を作ってくれました。", en: "My mother made me a lunch box.", de: "Meine Mutter hat mir ein Lunchpaket gemacht.", zh: "妈妈给我做了便当。" } },
          { id: "ag7", translations: { ja: "どうりょうに しごとを てつだって もらいました。", jaKanji: "同僚に仕事を手伝ってもらいました。", en: "I got a colleague to help me with work.", de: "Ich habe mir von einem Kollegen bei der Arbeit helfen lassen.", zh: "我请同事帮我做了工作。" } },
          { id: "ag8", translations: { ja: "こどもに えを かいて あげました。", jaKanji: "子供に絵を描いてあげました。", en: "I drew a picture for the child.", de: "Ich habe für das Kind ein Bild gemalt.", zh: "我给孩子画了一幅画。" } },
          { id: "ag9", translations: { ja: "ともだちが わたしに でんわを かけて くれました。", jaKanji: "友達が私に電話をかけてくれました。", en: "My friend called me on the phone.", de: "Mein Freund hat mich angerufen.", zh: "朋友给我打了电话。" } },
          { id: "ag10", translations: { ja: "じょうしに アドバイスを もらいました。", jaKanji: "上司にアドバイスをもらいました。", en: "I got advice from my boss.", de: "Ich habe von meinem Chef einen Rat bekommen.", zh: "我从上司那里得到了建议。" } }
        ]
      },
      {
        id: "grammar-drill-tehoshii",
        title: { ja: "れんしゅう：〜てほしい", en: "Practice: ~Te Hoshii", de: "Übung: ~Te Hoshii", zh: "练习：〜てほしい" },
        spokenIntro: {
          ja: "つぎは、「〜てほしい」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~te hoshii.",
          de: "Als Nächstes üben wir Beispielsätze mit ~te hoshii.",
          zh: "接下来，让我们练习使用「〜てほしい」的例句。"
        },
        lines: [
          { id: "th1", translations: { ja: "てつだって ほしいです。", jaKanji: "手伝ってほしいです。", en: "I want you to help me.", de: "Ich möchte, dass Sie mir helfen.", zh: "希望你帮我。" } },
          { id: "th2", translations: { ja: "もっと はやく きて ほしかったです。", jaKanji: "もっと早く来てほしかったです。", en: "I wanted you to come earlier.", de: "Ich hätte gewollt, dass Sie früher kommen.", zh: "希望你早点来。" } },
          { id: "th3", translations: { ja: "しずかに して ほしいです。", jaKanji: "静かにしてほしいです。", en: "I want you to be quiet.", de: "Ich möchte, dass Sie leise sind.", zh: "希望你安静一点。" } },
          { id: "th4", translations: { ja: "もっと れんしゅうして ほしいです。", jaKanji: "もっと練習してほしいです。", en: "I want you to practice more.", de: "Ich möchte, dass Sie mehr üben.", zh: "希望你多练习。" } },
          { id: "th5", translations: { ja: "わすれないで ほしいです。", jaKanji: "忘れないでほしいです。", en: "I want you not to forget.", de: "Ich möchte, dass Sie es nicht vergessen.", zh: "希望你不要忘记。" } },
          { id: "th6", translations: { ja: "いっしょに きて ほしいです。", jaKanji: "一緒に来てほしいです。", en: "I want you to come with me.", de: "Ich möchte, dass Sie mitkommen.", zh: "希望你一起来。" } },
          { id: "th7", translations: { ja: "はっきり いって ほしいです。", jaKanji: "はっきり言ってほしいです。", en: "I want you to say it clearly.", de: "Ich möchte, dass Sie es klar sagen.", zh: "希望你说清楚。" } },
          { id: "th8", translations: { ja: "しょうじきに はなして ほしいです。", jaKanji: "正直に話してほしいです。", en: "I want you to speak honestly.", de: "Ich möchte, dass Sie ehrlich sprechen.", zh: "希望你老实说。" } },
          { id: "th9", translations: { ja: "げんきに なって ほしいです。", jaKanji: "元気になってほしいです。", en: "I want you to get well.", de: "Ich möchte, dass es Ihnen wieder gut geht.", zh: "希望你恢复健康。" } },
          { id: "th10", translations: { ja: "しあわせに なって ほしいです。", jaKanji: "幸せになってほしいです。", en: "I want you to be happy.", de: "Ich möchte, dass Sie glücklich werden.", zh: "希望你幸福。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "たすけあおう", en: "Let's Help Each Other", de: "Lass uns einander helfen" },
    lines: [
      { id: "sg1", translations: { ja: "こまった ときは たすけて", en: "When you're in trouble, help me", de: "Wenn ich Schwierigkeiten habe, hilf mir" } },
      { id: "sg2", translations: { ja: "わたしも あなたを たすけるよ", en: "I'll help you too", de: "Ich helfe dir auch" } },
      { id: "sg3", translations: { ja: "おたがいさま だから", en: "Because it goes both ways", de: "Weil es auf Gegenseitigkeit beruht" } },
      { id: "sg4", translations: { ja: "いつも ありがとう", en: "Thank you always", de: "Danke immer" } }
    ]
  }
};
