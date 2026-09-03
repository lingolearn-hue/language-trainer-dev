import type { TopicLesson } from "../topicTypes";

// A2 — row 19 of docs/a2-master-lesson-table-v01.md. Grammar:
// 〜ませんか／〜ましょう／〜よう (invitations and suggestions).
// Pronunciation 1/2 (E vs EE, I vs II) kept exactly as assigned.

export const topicInvitations: TopicLesson = {
  id: "topic-a2-18-invitations",
  lessonNumber: 18,
  level: "A2",
  topicName: {
    ja: "さそい",
    en: "Invitations",
    de: "Einladungen",
    zh: "邀请"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しょくじかい", jaKanji: "食事会", en: "dining gathering", de: "Essenstreffen", zh: "聚餐" } },
    { id: "v02", category: "noun", translations: { ja: "のみかい", jaKanji: "飲み会", en: "drinking party", de: "Trinkgelage", zh: "聚会喝酒" } },
    { id: "v03", category: "noun", translations: { ja: "ばしょ", jaKanji: "場所", en: "place", de: "Ort", zh: "地方" } },
    { id: "v04", category: "noun", translations: { ja: "よやく", jaKanji: "予約", en: "reservation", de: "Reservierung", zh: "预约" } },
    { id: "v05", category: "noun", translations: { ja: "さそい", jaKanji: "誘い", en: "invitation", de: "Einladung", zh: "邀请" } },
    { id: "v06", category: "noun", translations: { ja: "へんじ", jaKanji: "返事", en: "reply", de: "Antwort", zh: "回复" } },
    { id: "v07", category: "noun", translations: { ja: "きょうみ", jaKanji: "興味", en: "interest", de: "Interesse", zh: "兴趣" } },
    { id: "v08", category: "noun", translations: { ja: "つごう", jaKanji: "都合", en: "convenience, circumstances", de: "Gelegenheit", zh: "方便与否" } },
    { id: "v09", category: "noun", translations: { ja: "きゅうよう", jaKanji: "急用", en: "urgent business", de: "dringende Angelegenheit", zh: "急事" } },
    { id: "v10", category: "noun", translations: { ja: "よてい", jaKanji: "予定", en: "schedule, plan", de: "Termin", zh: "日程" } },
    { id: "v11", category: "verb", translations: { ja: "のむ", jaKanji: "飲む", en: "to drink", de: "trinken", zh: "喝" } },
    { id: "v12", category: "verb", translations: { ja: "たべる", jaKanji: "食べる", en: "to eat", de: "essen", zh: "吃" } },
    { id: "v13", category: "verb", translations: { ja: "あそぶ", jaKanji: "遊ぶ", en: "to play, hang out", de: "spielen", zh: "玩" } },
    { id: "v14", category: "verb", translations: { ja: "さそう", jaKanji: "誘う", en: "to invite", de: "einladen", zh: "邀请" } },
    { id: "v15", category: "verb", translations: { ja: "ことわる", jaKanji: "断る", en: "to decline", de: "ablehnen", zh: "拒绝" } },
    { id: "v16", category: "verb", translations: { ja: "うけいれる", jaKanji: "受け入れる", en: "to accept", de: "annehmen", zh: "接受" } },
    { id: "v17", category: "verb", translations: { ja: "かんがえる", jaKanji: "考える", en: "to think", de: "nachdenken", zh: "思考" } },
    { id: "v18", category: "verb", translations: { ja: "きめる", jaKanji: "決める", en: "to decide", de: "entscheiden", zh: "决定" } },
    { id: "v19", category: "verb", translations: { ja: "へんじする", jaKanji: "返事する", en: "to reply", de: "antworten", zh: "回复" } },
    { id: "v20", category: "verb", translations: { ja: "よやくする", jaKanji: "予約する", en: "to reserve", de: "reservieren", zh: "预约" } },
    { id: "v21", category: "adjective", translations: { ja: "つごうがいい", jaKanji: "都合がいい", en: "convenient", de: "günstig", zh: "方便" } },
    { id: "v22", category: "adjective", translations: { ja: "つごうがわるい", jaKanji: "都合が悪い", en: "inconvenient", de: "ungünstig", zh: "不方便" } },
    { id: "v23", category: "adjective", translations: { ja: "ひまな", jaKanji: "暇な", en: "free (time)", de: "frei (Zeit)", zh: "空闲" } },
    { id: "v24", category: "adjective", translations: { ja: "いそがしい", jaKanji: "忙しい", en: "busy", de: "beschäftigt", zh: "忙" } },
    { id: "v25", category: "adjective", translations: { ja: "たのしみな", jaKanji: "楽しみな", en: "looking forward to", de: "sich freuend auf", zh: "期待的" } },
    { id: "v26", category: "adjective", translations: { ja: "ざんねんな", jaKanji: "残念な", en: "unfortunate, disappointing", de: "schade", zh: "遗憾的" } },
    { id: "v27", category: "noun", translations: { ja: "かんげいかい", jaKanji: "歓迎会", en: "welcome party", de: "Willkommensfeier", zh: "欢迎会" } },
    { id: "v28", category: "noun", translations: { ja: "どうりょう", jaKanji: "同僚", en: "colleague", de: "Kollege/Kollegin", zh: "同事" } },
    { id: "v29", category: "adverb", translations: { ja: "ぜひ", jaKanji: "ぜひ", en: "by all means", de: "unbedingt", zh: "一定" } },
    { id: "v30", category: "adverb", translations: { ja: "もし", jaKanji: "もし", en: "if", de: "falls", zh: "如果" } }
  ],
  dialogueA: {
    title: { ja: "ともだちを さそう", en: "Inviting a Friend Out", de: "Einen Freund einladen", zh: "邀请朋友出去" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こんしゅうの しゅうまつ、いっしょに しょくじしませんか？", jaKanji: "今週の週末、一緒に食事しませんか？", en: "Would you like to have a meal together this weekend?", de: "Möchten Sie dieses Wochenende zusammen essen gehen?", zh: "这周末要不要一起吃饭？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいですね！どこに いきましょうか？", jaKanji: "いいですね！どこに行きましょうか？", en: "Sounds good! Where shall we go?", de: "Klingt gut! Wohin sollen wir gehen?", zh: "好啊！去哪里呢？" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しんしい レストランが あります。そこに いきませんか？", jaKanji: "新しいレストランがあります。そこに行きませんか？", en: "There's a new restaurant. Shall we go there?", de: "Es gibt ein neues Restaurant. Sollen wir dort hingehen?", zh: "有一家新餐厅。要不要去那里？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいですね。よやくしましょうか？", jaKanji: "いいですね。予約しましょうか？", en: "Good idea. Shall we make a reservation?", de: "Gute Idee. Sollen wir reservieren?", zh: "好啊。要预约吗？" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、よやくしましょう。なんじが つごう いいですか？", jaKanji: "はい、予約しましょう。何時が都合いいですか？", en: "Yes, let's make a reservation. What time is convenient for you?", de: "Ja, lass uns reservieren. Welche Uhrzeit passt Ihnen?", zh: "好的，我们预约吧。几点方便呢？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しちじは どうですか？", jaKanji: "7時はどうですか？", en: "How about seven o'clock?", de: "Wie wäre es mit sieben Uhr?", zh: "七点怎么样？" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいですね。ほかの ひとも さそいましょうか？", jaKanji: "いいですね。他の人も誘いましょうか？", en: "Sounds good. Shall we invite other people too?", de: "Klingt gut. Sollen wir auch andere Leute einladen?", zh: "好啊。要不要也邀请其他人？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。どうりょうも さそいましょう。", jaKanji: "そうですね。同僚も誘いましょう。", en: "Good idea. Let's invite our colleagues too.", de: "Gute Idee. Lass uns auch die Kollegen einladen.", zh: "好啊。也邀请同事吧。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "みんな きょうみを もって くれると いいですね。", jaKanji: "みんな興味を持ってくれるといいですね。", en: "It would be nice if everyone shows interest.", de: "Es wäre schön, wenn sich alle dafür interessieren.", zh: "希望大家都感兴趣呢。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "もし つごうが わるかったら、また こんど さそいましょう。", jaKanji: "もし都合が悪かったら、また今度誘いましょう。", en: "If it's inconvenient for them, let's invite them another time.", de: "Wenn es ungünstig für sie ist, laden wir sie ein anderes Mal ein.", zh: "如果不方便的话，下次再邀请吧。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たのしみですね。はやく へんじを もらいたいです。", jaKanji: "楽しみですね。早く返事をもらいたいです。", en: "I'm looking forward to it. I want to hear back soon.", de: "Ich freue mich darauf. Ich möchte bald eine Antwort bekommen.", zh: "很期待呢。想早点得到回复。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きょう メッセージを おくりましょう。", jaKanji: "今日メッセージを送りましょう。", en: "Let's send a message today.", de: "Lass uns heute eine Nachricht schicken.", zh: "今天发消息吧。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ぜひ みんなで あつまりたいですね。", jaKanji: "ぜひみんなで集まりたいですね。", en: "I really hope we can all gather together.", de: "Ich möchte unbedingt, dass wir alle zusammenkommen.", zh: "真的很希望大家能聚在一起呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きっと たのしい しょくじかいに なりますよ。", jaKanji: "きっと楽しい食事会になりますよ。", en: "It'll surely turn into a fun dining gathering.", de: "Es wird bestimmt ein schönes Essenstreffen.", zh: "一定会是个愉快的聚餐哦。" } }
    ]
  },
  dialogueB: {
    title: { ja: "けいかくを こうしょうする", en: "Negotiating a Plan", de: "Einen Plan aushandeln", zh: "商量计划" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "らいしゅうの すいようび、あいて いますか？", jaKanji: "来週の水曜日、空いていますか？", en: "Are you free next Wednesday?", de: "Haben Sie nächsten Mittwoch Zeit?", zh: "下周三有空吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "すみません、すいようびは きゅうようが あります。", jaKanji: "すみません、水曜日は急用があります。", en: "Sorry, I have urgent business on Wednesday.", de: "Entschuldigung, am Mittwoch habe ich Dringendes zu erledigen.", zh: "不好意思，周三有急事。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そうですか。じゃあ、もくようびは どうですか？", jaKanji: "そうですか。じゃあ、木曜日はどうですか？", en: "I see. Then how about Thursday?", de: "Verstehe. Wie wäre es dann mit Donnerstag?", zh: "是吗。那周四怎么样？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "もくようびなら、つごうが いいです。", jaKanji: "木曜日なら、都合がいいです。", en: "If it's Thursday, that's convenient.", de: "Wenn es Donnerstag ist, passt es.", zh: "如果是周四的话，方便。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "よかったです。なんじに あいましょうか？", jaKanji: "よかったです。何時に会いましょうか？", en: "Great. What time shall we meet?", de: "Schön. Wann sollen wir uns treffen?", zh: "太好了。几点见面呢？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ごご ろくじに しませんか？", jaKanji: "午後6時にしませんか？", en: "Shall we make it six in the evening?", de: "Sollen wir sechs Uhr abends machen?", zh: "定在下午六点怎么样？" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いいですよ。えきの まえで あいましょう。", jaKanji: "いいですよ。駅の前で会いましょう。", en: "Sounds good. Let's meet in front of the station.", de: "Klingt gut. Lass uns vor dem Bahnhof treffen.", zh: "好的。我们在车站前见面吧。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わかりました。なにか たべませんか？", jaKanji: "分かりました。何か食べませんか？", en: "Understood. Shall we eat something?", de: "Verstanden. Möchten wir etwas essen?", zh: "明白了。要不要吃点什么？" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いいですね。にほんりょうりを たべに いきましょう。", jaKanji: "いいですね。日本料理を食べに行きましょう。", en: "Sounds good. Let's go eat Japanese food.", de: "Klingt gut. Lass uns japanisches Essen essen gehen.", zh: "好啊。去吃日本料理吧。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "もし じかんが あったら、えいがも みませんか？", jaKanji: "もし時間があったら、映画も見ませんか？", en: "If we have time, shall we also watch a movie?", de: "Wenn wir Zeit haben, sollen wir auch einen Film schauen?", zh: "如果有时间的话，要不要也看个电影？" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いいですね！じかんを かくにんして おきます。", jaKanji: "いいですね！時間を確認しておきます。", en: "Sounds good! I'll check the timing beforehand.", de: "Klingt gut! Ich werde die Zeit vorher überprüfen.", zh: "好啊！我先确认一下时间。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "へんじを まって いますね。", jaKanji: "返事を待っていますね。", en: "I'll be waiting for your reply.", de: "Ich warte auf Ihre Antwort.", zh: "等你的回复哦。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きょうじゅうに れんらくします。", jaKanji: "今日中に連絡します。", en: "I'll contact you sometime today.", de: "Ich melde mich noch heute.", zh: "今天之内会联系你的。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "たのしみに して います。それでは、また あとで。", jaKanji: "楽しみにしています。それでは、また後で。", en: "I'm looking forward to it. See you later then.", de: "Ich freue mich darauf. Also, bis später.", zh: "很期待呢。那就一会儿见。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ませんか／〜ましょう／〜よう：さそいと ていあん", en: "~Masenka / ~Mashou / ~You: Invitations and Suggestions", de: "~Masenka / ~Mashou / ~You: Einladungen und Vorschläge", zh: "〜ませんか／〜ましょう／〜よう：邀请与提议" },
      explanation: {
        ja: "「〜ませんか」は「いっしょに Aしませんか」と、あいてに ていねいに さそう ときに つかいます（あいての こたえを まつ かんじ）。「〜ましょう」は「いっしょに Aしましょう」と、じぶんから ていあんし、じっこうする ことを つよく つたえます。「〜よう」は「〜ましょう」の カジュアルな けい（ともだち どうし）で、いこうけいと おなじ かたちです。",
        en: "~masenka means \"won't you do A together?\" — a polite way to invite someone (has a nuance of waiting for their answer). ~mashou means \"let's do A together\" — you're proposing it yourself and expressing that you'll carry it out. ~you is the casual version of ~mashou (used between friends), and shares the same form as the volitional.",
        de: "~masenka bedeutet \"möchten wir nicht zusammen A tun?\" — eine höfliche Art, jemanden einzuladen (mit der Nuance, auf eine Antwort zu warten). ~mashou bedeutet \"lass uns zusammen A tun\" — man schlägt es selbst vor und drückt aus, dass man es umsetzen wird. ~you ist die lockere Version von ~mashou (unter Freunden), und hat dieselbe Form wie der Volitiv.",
        zh: "〜ませんか意为\"要不要一起做A呢\"——礼貌地邀请对方的说法（带有等待对方回答的语气）。〜ましょう意为\"一起做A吧\"——自己主动提议并强烈表示会执行。〜よう是〜ましょう的随意形式（朋友之间使用），与意志形形式相同。"
      },
      chunks: [
        { id: "g1", translations: { ja: "いっしょに しょくじしませんか？", jaKanji: "一緒に食事しませんか？", en: "Won't you have a meal with me?", de: "Möchten Sie nicht mit mir essen?", zh: "要不要一起吃饭？" } },
        { id: "g2", translations: { ja: "えいがを みに いきませんか？", jaKanji: "映画を見に行きませんか？", en: "Won't you go watch a movie?", de: "Möchten Sie nicht einen Film schauen gehen?", zh: "要不要去看电影？" } },
        { id: "g3", translations: { ja: "いっしょに いきましょう。", jaKanji: "一緒に行きましょう。", en: "Let's go together.", de: "Lass uns zusammen gehen.", zh: "一起去吧。" } },
        { id: "g4", translations: { ja: "よやくしましょう。", jaKanji: "予約しましょう。", en: "Let's make a reservation.", de: "Lass uns reservieren.", zh: "我们预约吧。" } },
        { id: "g5", translations: { ja: "がんばろう。", jaKanji: "頑張ろう。", en: "Let's do our best.", de: "Geben wir unser Bestes.", zh: "加油吧。" } },
        { id: "g6", translations: { ja: "はやく かえろう。", jaKanji: "早く帰ろう。", en: "Let's go home early.", de: "Lass uns früh nach Hause gehen.", zh: "早点回家吧。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        e_short: { ja: "E — みじかい", en: "E — short", de: "E — kurz", zh: "E——短音" },
        e_long: { ja: "E — ながい", en: "E — long", de: "E — lang", zh: "E——长音" },
        i_short: { ja: "I — みじかい", en: "I — short", de: "I — kurz", zh: "I——短音" },
        i_long: { ja: "I — ながい", en: "I — long", de: "I — lang", zh: "I——长音" }
      },
      items: [
        { id: "es1", category: "e_short", translations: { ja: "てがみ", en: "letter", de: "Brief", zh: "信" } },
        { id: "es2", category: "e_short", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
        { id: "es3", category: "e_short", translations: { ja: "ねこ", en: "cat", de: "Katze", zh: "猫" } },
        { id: "es4", category: "e_short", translations: { ja: "めがね", en: "glasses", de: "Brille", zh: "眼镜" } },
        { id: "el1", category: "e_long", translations: { ja: "おねえさん", en: "older sister (polite)", de: "ältere Schwester (höflich)", zh: "姐姐（礼貌）" } },
        { id: "el2", category: "e_long", translations: { ja: "ええ", en: "yes (casual)", de: "ja (locker)", zh: "是（口语）" } },
        { id: "el3", category: "e_long", translations: { ja: "せんせい", en: "teacher", de: "Lehrer(in)", zh: "老师" } },
        { id: "el4", category: "e_long", translations: { ja: "けいたい", en: "cell phone", de: "Handy", zh: "手机" } },
        { id: "is1", category: "i_short", translations: { ja: "いぬ", en: "dog", de: "Hund", zh: "狗" } },
        { id: "is2", category: "i_short", translations: { ja: "みず", en: "water", de: "Wasser", zh: "水" } },
        { id: "is3", category: "i_short", translations: { ja: "ひと", en: "person", de: "Person", zh: "人" } },
        { id: "is4", category: "i_short", translations: { ja: "きく", en: "to listen", de: "hören", zh: "听" } },
        { id: "il1", category: "i_long", translations: { ja: "おにいさん", en: "older brother (polite)", de: "älterer Bruder (höflich)", zh: "哥哥（礼貌）" } },
        { id: "il2", category: "i_long", translations: { ja: "いいえ", en: "no", de: "nein", zh: "不" } },
        { id: "il3", category: "i_long", translations: { ja: "おいしい", en: "delicious", de: "lecker", zh: "好吃" } },
        { id: "il4", category: "i_long", translations: { ja: "ちいさい", en: "small", de: "klein", zh: "小的" } }
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
          e_short: { ja: "E — みじかい", en: "E — short", de: "E — kurz", zh: "E——短音" },
          e_long: { ja: "E — ながい", en: "E — long", de: "E — lang", zh: "E——长音" },
          i_short: { ja: "I — みじかい", en: "I — short", de: "I — kurz", zh: "I——短音" },
          i_long: { ja: "I — ながい", en: "I — long", de: "I — lang", zh: "I——长音" }
        },
        pairedColumns: [["e_short", "e_long"], ["i_short", "i_long"]],
        items: [
          { id: "es5", category: "e_short", translations: { ja: "え", en: "picture", de: "Bild", zh: "画" } },
          { id: "el5", category: "e_long", translations: { ja: "けいかく", en: "plan", de: "Plan", zh: "计划" } },
          { id: "es6", category: "e_short", translations: { ja: "えき", en: "station", de: "Bahnhof", zh: "车站" } },
          { id: "el6", category: "e_long", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验" } },
          { id: "es7", category: "e_short", translations: { ja: "えん", en: "yen", de: "Yen", zh: "日元" } },
          { id: "el7", category: "e_long", translations: { ja: "れいぞうこ", en: "refrigerator", de: "Kühlschrank", zh: "冰箱" } },
          { id: "es8", category: "e_short", translations: { ja: "えらぶ", en: "to choose", de: "wählen", zh: "选择" } },
          { id: "el8", category: "e_long", translations: { ja: "へいき", en: "fine, calm", de: "gelassen", zh: "没事儿" } },
          { id: "es9", category: "e_short", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
          { id: "el9", category: "e_long", translations: { ja: "めいし", en: "business card", de: "Visitenkarte", zh: "名片" } },
          { id: "es10", category: "e_short", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
          { id: "el10", category: "e_long", translations: { ja: "せいかつ", en: "life", de: "Leben", zh: "生活" } },
          { id: "es11", category: "e_short", translations: { ja: "せなか", en: "back (body)", de: "Rücken", zh: "背部" } },
          { id: "el11", category: "e_long", translations: { ja: "えいが", en: "movie", de: "Film", zh: "电影" } },
          { id: "es12", category: "e_short", translations: { ja: "てんき", en: "weather", de: "Wetter", zh: "天气" } },
          { id: "el12", category: "e_long", translations: { ja: "えいご", en: "English", de: "Englisch", zh: "英语" } },
          { id: "es13", category: "e_short", translations: { ja: "ねだん", en: "price", de: "Preis", zh: "价格" } },
          { id: "el13", category: "e_long", translations: { ja: "ていねい", en: "polite", de: "höflich", zh: "礼貌" } },
          { id: "es14", category: "e_short", translations: { ja: "べんきょう", en: "study", de: "Lernen", zh: "学习" } },
          { id: "el14", category: "e_long", translations: { ja: "れいぎ", en: "manners", de: "Manieren", zh: "礼仪" } },
          { id: "es15", category: "e_short", translations: { ja: "めんせつ", en: "interview", de: "Vorstellungsgespräch", zh: "面试" } },
          { id: "el15", category: "e_long", translations: { ja: "せいこう", en: "success", de: "Erfolg", zh: "成功" } },
          { id: "es16", category: "e_short", translations: { ja: "へや", en: "room", de: "Zimmer", zh: "房间" } },
          { id: "el16", category: "e_long", translations: { ja: "めいわく", en: "nuisance", de: "Belästigung", zh: "麻烦" } },
          { id: "es17", category: "e_short", translations: { ja: "けしき", en: "scenery", de: "Landschaft", zh: "风景" } },
          { id: "el17", category: "e_long", translations: { ja: "へいわ", en: "peace", de: "Frieden", zh: "和平" } },
          { id: "es18", category: "e_short", translations: { ja: "げんき", en: "healthy, energetic", de: "gesund", zh: "健康" } },
          { id: "el18", category: "e_long", translations: { ja: "せいと", en: "student", de: "Schüler(in)", zh: "学生" } },

          { id: "is5", category: "i_short", translations: { ja: "いろ", en: "color", de: "Farbe", zh: "颜色" } },
          { id: "il5", category: "i_long", translations: { ja: "たのしい", en: "fun", de: "lustig", zh: "开心" } },
          { id: "is6", category: "i_short", translations: { ja: "いす", en: "chair", de: "Stuhl", zh: "椅子" } },
          { id: "il6", category: "i_long", translations: { ja: "うれしい", en: "happy", de: "froh", zh: "高兴" } },
          { id: "is7", category: "i_short", translations: { ja: "いみ", en: "meaning", de: "Bedeutung", zh: "意思" } },
          { id: "il7", category: "i_long", translations: { ja: "かなしい", en: "sad", de: "traurig", zh: "悲伤" } },
          { id: "is8", category: "i_short", translations: { ja: "きた", en: "north", de: "Norden", zh: "北方" } },
          { id: "il8", category: "i_long", translations: { ja: "さびしい", en: "lonely", de: "einsam", zh: "孤独" } },
          { id: "is9", category: "i_short", translations: { ja: "ひくい", en: "low", de: "niedrig", zh: "低" } },
          { id: "il9", category: "i_long", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙" } },
          { id: "is10", category: "i_short", translations: { ja: "みなみ", en: "south", de: "Süden", zh: "南方" } },
          { id: "il10", category: "i_long", translations: { ja: "むずかしい", en: "difficult", de: "schwierig", zh: "困难" } },
          { id: "is11", category: "i_short", translations: { ja: "きもち", en: "feeling", de: "Gefühl", zh: "心情" } },
          { id: "il11", category: "i_long", translations: { ja: "やさしい", en: "kind, easy", de: "freundlich", zh: "亲切" } },
          { id: "is12", category: "i_short", translations: { ja: "しつもん", en: "question", de: "Frage", zh: "问题" } },
          { id: "il12", category: "i_long", translations: { ja: "きびしい", en: "strict", de: "streng", zh: "严格" } },
          { id: "is13", category: "i_short", translations: { ja: "ちかい", en: "near", de: "nah", zh: "近" } },
          { id: "il13", category: "i_long", translations: { ja: "はげしい", en: "intense", de: "heftig", zh: "激烈" } },
          { id: "is14", category: "i_short", translations: { ja: "にく", en: "meat", de: "Fleisch", zh: "肉" } },
          { id: "il14", category: "i_long", translations: { ja: "すばらしい", en: "wonderful", de: "wunderbar", zh: "精彩" } },
          { id: "is15", category: "i_short", translations: { ja: "ひろい", en: "wide", de: "geräumig", zh: "宽敞" } },
          { id: "il15", category: "i_long", translations: { ja: "あたらしい", en: "new", de: "neu", zh: "新的" } },
          { id: "is16", category: "i_short", translations: { ja: "みせ", en: "shop", de: "Geschäft", zh: "商店" } },
          { id: "il16", category: "i_long", translations: { ja: "かわいい", en: "cute", de: "niedlich", zh: "可爱" } },
          { id: "is17", category: "i_short", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },
          { id: "il17", category: "i_long", translations: { ja: "きいろい", en: "yellow", de: "gelb", zh: "黄色" } },
          { id: "is18", category: "i_short", translations: { ja: "しごと", en: "work", de: "Arbeit", zh: "工作" } },
          { id: "il18", category: "i_long", translations: { ja: "おとなしい", en: "quiet, gentle", de: "ruhig, sanft", zh: "老实" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-masenka",
        title: { ja: "れんしゅう：〜ませんか", en: "Practice: ~Masenka", de: "Übung: ~Masenka", zh: "练习：〜ませんか" },
        spokenIntro: {
          ja: "つぎは、「〜ませんか」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~masenka.",
          de: "Als Nächstes üben wir Beispielsätze mit ~masenka.",
          zh: "接下来，让我们练习使用「〜ませんか」的例句。"
        },
        lines: [
          { id: "mk1", translations: { ja: "いっしょに しょくじしませんか？", jaKanji: "一緒に食事しませんか？", en: "Won't you have a meal with me?", de: "Möchten Sie nicht mit mir essen?", zh: "要不要一起吃饭？" } },
          { id: "mk2", translations: { ja: "えいがを みに いきませんか？", jaKanji: "映画を見に行きませんか？", en: "Won't you go watch a movie?", de: "Möchten Sie nicht einen Film schauen gehen?", zh: "要不要去看电影？" } },
          { id: "mk3", translations: { ja: "こうえんを さんぽしませんか？", jaKanji: "公園を散歩しませんか？", en: "Won't you take a walk in the park?", de: "Möchten Sie nicht im Park spazieren gehen?", zh: "要不要在公园散步？" } },
          { id: "mk4", translations: { ja: "コーヒーを のみませんか？", jaKanji: "コーヒーを飲みませんか？", en: "Won't you have some coffee?", de: "Möchten Sie nicht einen Kaffee trinken?", zh: "要不要喝咖啡？" } },
          { id: "mk5", translations: { ja: "にほんりょうりを たべませんか？", jaKanji: "日本料理を食べませんか？", en: "Won't you eat Japanese food?", de: "Möchten Sie nicht japanisches Essen essen?", zh: "要不要吃日本料理？" } },
          { id: "mk6", translations: { ja: "パーティーに きませんか？", jaKanji: "パーティーに来ませんか？", en: "Won't you come to the party?", de: "Möchten Sie nicht zur Party kommen?", zh: "要不要来派对？" } },
          { id: "mk7", translations: { ja: "いっしょに べんきょうしませんか？", jaKanji: "一緒に勉強しませんか？", en: "Won't you study together?", de: "Möchten Sie nicht zusammen lernen?", zh: "要不要一起学习？" } },
          { id: "mk8", translations: { ja: "しゃしんを とりませんか？", jaKanji: "写真を撮りませんか？", en: "Won't you take a photo?", de: "Möchten Sie nicht ein Foto machen?", zh: "要不要拍照？" } },
          { id: "mk9", translations: { ja: "しゅうまつ どこかに いきませんか？", jaKanji: "週末どこかに行きませんか？", en: "Won't you go somewhere this weekend?", de: "Möchten Sie am Wochenende nicht irgendwohin gehen?", zh: "周末要不要去哪里？" } },
          { id: "mk10", translations: { ja: "おんがくを ききませんか？", jaKanji: "音楽を聞きませんか？", en: "Won't you listen to music?", de: "Möchten Sie nicht Musik hören?", zh: "要不要听音乐？" } }
        ]
      },
      {
        id: "grammar-drill-mashou",
        title: { ja: "れんしゅう：〜ましょう／〜よう", en: "Practice: ~Mashou / ~You", de: "Übung: ~Mashou / ~You", zh: "练习：〜ましょう／〜よう" },
        spokenIntro: {
          ja: "つぎは、「〜ましょう」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~mashou.",
          de: "Als Nächstes üben wir Beispielsätze mit ~mashou.",
          zh: "接下来，让我们练习使用「〜ましょう」的例句。"
        },
        lines: [
          { id: "ms1", translations: { ja: "いっしょに いきましょう。", jaKanji: "一緒に行きましょう。", en: "Let's go together.", de: "Lass uns zusammen gehen.", zh: "一起去吧。" } },
          { id: "ms2", translations: { ja: "よやくしましょう。", jaKanji: "予約しましょう。", en: "Let's make a reservation.", de: "Lass uns reservieren.", zh: "我们预约吧。" } },
          { id: "ms3", translations: { ja: "がんばろう。", jaKanji: "頑張ろう。", en: "Let's do our best.", de: "Geben wir unser Bestes.", zh: "加油吧。" } },
          { id: "ms4", translations: { ja: "はやく かえろう。", jaKanji: "早く帰ろう。", en: "Let's go home early.", de: "Lass uns früh nach Hause gehen.", zh: "早点回家吧。" } },
          { id: "ms5", translations: { ja: "しゃしんを とりましょう。", jaKanji: "写真を撮りましょう。", en: "Let's take a photo.", de: "Lass uns ein Foto machen.", zh: "拍张照片吧。" } },
          { id: "ms6", translations: { ja: "たのしみましょう。", jaKanji: "楽しみましょう。", en: "Let's enjoy ourselves.", de: "Lass uns Spaß haben.", zh: "享受一下吧。" } },
          { id: "ms7", translations: { ja: "きめよう。", jaKanji: "決めよう。", en: "Let's decide.", de: "Lass uns entscheiden.", zh: "决定吧。" } },
          { id: "ms8", translations: { ja: "みんなを さそいましょう。", jaKanji: "みんなを誘いましょう。", en: "Let's invite everyone.", de: "Lass uns alle einladen.", zh: "邀请大家吧。" } },
          { id: "ms9", translations: { ja: "つぎの えきで おりましょう。", jaKanji: "次の駅で降りましょう。", en: "Let's get off at the next station.", de: "Lass uns an der nächsten Station aussteigen.", zh: "在下一站下车吧。" } },
          { id: "ms10", translations: { ja: "しんせんな さかなを たべよう。", jaKanji: "新鮮な魚を食べよう。", en: "Let's eat fresh fish.", de: "Lass uns frischen Fisch essen.", zh: "吃新鲜的鱼吧。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "いっしょに いきませんか", en: "Won't You Come With Me?", de: "Kommst du nicht mit mir?" },
    lines: [
      { id: "sg1", translations: { ja: "たのしい ばしょへ いきましょう", en: "Let's go to a fun place", de: "Lass uns zu einem schönen Ort gehen" } },
      { id: "sg2", translations: { ja: "いっしょに たべませんか", en: "Won't you eat with me?", de: "Möchtest du nicht mit mir essen?" } },
      { id: "sg3", translations: { ja: "しょくじも おしゃべりも", en: "Both the meal and the conversation", de: "Sowohl das Essen als auch das Plaudern" } },
      { id: "sg4", translations: { ja: "たのしみに して います", en: "I'm looking forward to it", de: "Ich freue mich darauf" } }
    ]
  }
};
