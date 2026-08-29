import type { TopicLesson } from "../topicTypes";

// New A2 topic — first lesson past the A1 master table (rows 1-19).
// No A1-style master table exists for A2 yet; grammar item chosen from
// docs/grammar-items-a1-to-c2-v01.md's A2 list: #1 (past tense) + #16
// (plain vs polite contrast, Japanese-only) combined into one lesson,
// since Japanese past tense naturally comes in exactly these two
// registers. ja-only for now (matches how every A1 topic started).

export const topicWeekend: TopicLesson = {
  id: "topic-20-weekend",
  lessonNumber: 20,
  level: "A2",
  topicName: {
    ja: "しゅうまつ",
    en: "Weekend",
    de: "Wochenende",
    zh: "周末"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
    { id: "v02", category: "noun", translations: { ja: "どようび", en: "Saturday", de: "Samstag", zh: "星期六" } },
    { id: "v03", category: "noun", translations: { ja: "にちようび", en: "Sunday", de: "Sonntag", zh: "星期日" } },
    { id: "v04", category: "noun", translations: { ja: "やすみ", en: "day off", de: "freier Tag", zh: "休息日" } },
    { id: "v05", category: "noun", translations: { ja: "えいが", en: "movie", de: "Film", zh: "电影" } },
    { id: "v06", category: "noun", translations: { ja: "かいもの", en: "shopping", de: "Einkaufen", zh: "购物" } },
    { id: "v07", category: "noun", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
    { id: "v08", category: "noun", translations: { ja: "そうじ", en: "cleaning", de: "Putzen", zh: "打扫" } },
    { id: "v09", category: "noun", translations: { ja: "せんたく", en: "laundry", de: "Wäsche", zh: "洗衣服" } },
    { id: "v10", category: "noun", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "做饭" } },
    { id: "v11", category: "noun", translations: { ja: "どくしょ", en: "reading", de: "Lesen", zh: "读书" } },
    { id: "v12", category: "noun", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
    { id: "v13", category: "noun", translations: { ja: "パーティー", en: "party", de: "Party", zh: "派对" } },
    { id: "v14", category: "noun", translations: { ja: "コンサート", en: "concert", de: "Konzert", zh: "音乐会" } },
    { id: "v15", category: "noun", translations: { ja: "びじゅつかん", en: "art museum", de: "Kunstmuseum", zh: "美术馆" } },
    { id: "v16", category: "noun", translations: { ja: "はくぶつかん", en: "museum", de: "Museum", zh: "博物馆" } },
    { id: "v17", category: "noun", translations: { ja: "こうえん", en: "park", de: "Park", zh: "公园" } },
    { id: "v18", category: "noun", translations: { ja: "テレビ", en: "TV", de: "Fernseher", zh: "电视" } },
    { id: "v19", category: "noun", translations: { ja: "ゲーム", en: "game", de: "Spiel", zh: "游戏" } },
    { id: "v20", category: "verb", translations: { ja: "やすむ", en: "to rest", de: "sich ausruhen", zh: "休息" } },
    { id: "v21", category: "verb", translations: { ja: "あそぶ", en: "to play, hang out", de: "spielen, sich treffen", zh: "玩" } },
    { id: "v22", category: "verb", translations: { ja: "でかける", en: "to go out", de: "ausgehen", zh: "外出" } },
    { id: "v23", category: "verb", translations: { ja: "かえる", en: "to return home", de: "nach Hause gehen", zh: "回家" } },
    { id: "v24", category: "verb", translations: { ja: "ねる", en: "to sleep", de: "schlafen", zh: "睡觉" } },
    { id: "v25", category: "verb", translations: { ja: "おきる", en: "to wake up", de: "aufwachen", zh: "起床" } },
    { id: "v26", category: "verb", translations: { ja: "のんびりする", en: "to relax, take it easy", de: "entspannen", zh: "放松" } },
    { id: "v27", category: "adjective", translations: { ja: "たのしい", en: "fun, enjoyable", de: "unterhaltsam, lustig", zh: "开心的" } },
    { id: "v28", category: "adjective", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙碌的" } },
    { id: "v29", category: "verb", translations: { ja: "つかれる", en: "to get tired", de: "müde werden", zh: "累" } },
    { id: "v30", category: "adjective", translations: { ja: "しずかな", en: "quiet", de: "ruhig", zh: "安静的" } }
  ],
  dialogueA: {
    title: { ja: "ともだちと しゅうまつの はなし", en: "Talking About the Weekend with a Friend (Casual)", de: "Über das Wochenende mit einem Freund sprechen (informell)", zh: "和朋友聊周末（口语）" },
    lines: [
      { id: "d1", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "しゅうまつ なにを した？", en: "What did you do this weekend?", de: "Was hast du am Wochenende gemacht?", zh: "周末做什么了？" } },
      { id: "d2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "えいがを みた。すごく たのしかった。", en: "I watched a movie. It was really fun.", de: "Ich habe einen Film gesehen. Es hat richtig Spaß gemacht.", zh: "看电影了。特别有意思。" } },
      { id: "d3", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "いいね！どこで みたの？", en: "Nice! Where did you watch it?", de: "Schön! Wo hast du ihn gesehen?", zh: "真好！在哪里看的？" } },
      { id: "d4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "うちで みた。ゆきは？", en: "I watched it at home. What about you?", de: "Ich habe ihn zu Hause gesehen. Und du?", zh: "在家看的。你呢？" } },
      { id: "d5", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "わたしは こうえんを さんぽした。とても しずかだった。", en: "I took a walk in the park. It was very quiet.", de: "Ich bin im Park spazieren gegangen. Es war sehr ruhig.", zh: "我在公园散步了。特别安静。" } },
      { id: "d6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうじも した？", en: "Did you also clean?", de: "Hast du auch geputzt?", zh: "也打扫了吗？" } },
      { id: "d7", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "うん、そうじと せんたくを した。ちょっと つかれた。", en: "Yeah, I cleaned and did laundry. I got a bit tired.", de: "Ja, ich habe geputzt und Wäsche gewaschen. Ich wurde etwas müde.", zh: "嗯，打扫了还洗了衣服。有点累了。" } },
      { id: "d8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "パーティーには いかなかったの？", en: "Didn't you go to the party?", de: "Bist du nicht zur Party gegangen?", zh: "没去派对吗？" } },
      { id: "d9", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "いかなかった。いそがしかったから。", en: "I didn't go. Because I was busy.", de: "Ich bin nicht gegangen. Weil ich beschäftigt war.", zh: "没去。因为很忙。" } },
      { id: "d10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そっか。でんわぐらい できたでしょ。", en: "I see. You could've at least called though.", de: "Verstehe. Du hättest wenigstens anrufen können.", zh: "这样啊。至少能打个电话吧。" } },
      { id: "d11", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "ごめん、はやく ねちゃったんだ。", en: "Sorry, I went to sleep early.", de: "Sorry, ich bin früh eingeschlafen.", zh: "对不起，我早早就睡了。" } },
      { id: "d12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "なんじに おきたの？", en: "What time did you wake up?", de: "Um wie viel Uhr bist du aufgewacht?", zh: "几点起的床？" } },
      { id: "d13", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "くじに おきて、のんびりした。", en: "I woke up at nine and relaxed.", de: "Ich bin um neun aufgewacht und habe entspannt.", zh: "九点起床，然后放松了一下。" } },
      { id: "d14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いい しゅうまつだったね！", en: "Sounds like a nice weekend!", de: "Klingt nach einem schönen Wochenende!", zh: "真是个不错的周末啊！" } }
    ]
  },
  dialogueB: {
    title: { ja: "どうりょうと しゅうまつの はなし", en: "Talking About the Weekend with a Coworker (Polite)", de: "Über das Wochenende mit einem Kollegen sprechen (höflich)", zh: "和同事聊周末（礼貌）" },
    lines: [
      { id: "e1", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "しゅうまつは なにを しましたか？", en: "What did you do this weekend?", de: "Was haben Sie am Wochenende gemacht?", zh: "周末做什么了？" } },
      { id: "e2", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "かぞくと りょこうを しました。とても たのしかったです。", en: "I went on a trip with my family. It was very fun.", de: "Ich bin mit meiner Familie verreist. Es hat sehr viel Spaß gemacht.", zh: "和家人一起旅行了。非常开心。" } },
      { id: "e3", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "どこに いきましたか？", en: "Where did you go?", de: "Wo sind Sie hingefahren?", zh: "去哪里了？" } },
      { id: "e4", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "はくぶつかんと びじゅつかんに いきました。", en: "We went to a museum and an art museum.", de: "Wir waren in einem Museum und einem Kunstmuseum.", zh: "去了博物馆和美术馆。" } },
      { id: "e5", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "それは よかったですね。てんきは どうでしたか？", en: "That's great. How was the weather?", de: "Das ist schön. Wie war das Wetter?", zh: "那太好了。天气怎么样？" } },
      { id: "e6", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "とても いい てんきでした。あかるくて しずかでした。", en: "The weather was very nice. It was bright and quiet.", de: "Das Wetter war sehr schön. Es war hell und ruhig.", zh: "天气非常好。明亮又安静。" } },
      { id: "e7", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "たなかさんは しゅうまつ なにを しましたか？", en: "What did you do this weekend, Mr. Tanaka?", de: "Und was haben Sie am Wochenende gemacht, Herr Tanaka?", zh: "田中先生周末做了什么？" } },
      { id: "e8", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "わたしは うちで そうじと りょうりを しました。", en: "I cleaned and cooked at home.", de: "Ich habe zu Hause geputzt und gekocht.", zh: "我在家打扫和做饭了。" } },
      { id: "e9", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "どんな りょうりを つくりましたか？", en: "What kind of food did you cook?", de: "Was für ein Gericht haben Sie gekocht?", zh: "做了什么菜？" } },
      { id: "e10", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "にほんりょうりを つくりました。すこし むずかしかったです。", en: "I made Japanese food. It was a bit difficult.", de: "Ich habe japanisches Essen gekocht. Es war etwas schwierig.", zh: "做了日本料理。有点难。" } },
      { id: "e11", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "げつようびは いそがしいですか？", en: "Are you busy on Monday?", de: "Sind Sie am Montag beschäftigt?", zh: "星期一忙吗？" } },
      { id: "e12", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "はい、すこし いそがしいです。かいぎが あります。", en: "Yes, a bit busy. I have a meeting.", de: "Ja, etwas beschäftigt. Ich habe eine Besprechung.", zh: "是的，有点忙。有个会议。" } },
      { id: "e13", speaker: { ja: "やまださん", en: "Ms. Yamada", de: "Frau Yamada", zh: "山田女士" }, translations: { ja: "そうですか。がんばってくださいね。", en: "I see. Good luck with it.", de: "Verstehe. Viel Erfolg dabei.", zh: "这样啊。加油哦。" } },
      { id: "e14", speaker: { ja: "たなかさん", en: "Mr. Tanaka", de: "Herr Tanaka", zh: "田中先生" }, translations: { ja: "ありがとうございます。よい いっしゅうかんを！", en: "Thank you. Have a good week!", de: "Danke schön. Eine gute Woche!", zh: "谢谢。祝你一周愉快！" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "かこけい：ふつうけい と ていねいけい", en: "Past Tense: Plain vs Polite Form", de: "Vergangenheit: Plain-Form und höfliche Form", zh: "过去时：简体与敬体" },
      explanation: {
        ja: "にほんごの かこけいには ふたつの スタイルが あります。ていねいけい（ました、〜かったです、〜でした）は しごとや しらない ひとに つかいます。ふつうけい（た、〜かった、〜だった）は かぞくや ともだちに つかいます。どちらも いみは おなじで、つかう ばめんが ちがいます。",
        en: "Japanese past tense has two styles. The polite form (ました, 〜かったです, 〜でした) is used at work or with people you don't know well. The plain form (た, 〜かった, 〜だった) is used with family or friends. Both mean the same thing — the difference is the social context they're used in.",
        de: "Die Vergangenheit im Japanischen hat zwei Stile. Die höfliche Form (ました, 〜かったです, 〜でした) wird bei der Arbeit oder mit fremden Personen verwendet. Die Plain-Form (た, 〜かった, 〜だった) wird mit Familie oder Freunden verwendet. Beide bedeuten dasselbe — der Unterschied liegt im sozialen Kontext.",
        zh: "日语的过去时有两种文体。敬体（ました、〜かったです、〜でした）用于工作场合或不熟悉的人。简体（た、〜かった、〜だった）用于家人或朋友之间。两者意思相同，区别在于使用的场合。"
      },
      chunks: [
        { id: "g1", translations: { ja: "えいがを みました。", en: "I watched a movie. (polite)", de: "Ich habe einen Film gesehen. (höflich)", zh: "看电影了。（敬体）" } },
        { id: "g2", translations: { ja: "えいがを みた。", en: "I watched a movie. (plain, casual)", de: "Ich habe einen Film gesehen. (Plain-Form, informell)", zh: "看电影了。（简体，口语）" } },
        { id: "g3", translations: { ja: "たのしかったです。", en: "It was fun. (polite)", de: "Es hat Spaß gemacht. (höflich)", zh: "很开心。（敬体）" } },
        { id: "g4", translations: { ja: "たのしかった。", en: "It was fun. (plain, casual)", de: "Es hat Spaß gemacht. (Plain-Form, informell)", zh: "很开心。（简体，口语）" } },
        { id: "g5", translations: { ja: "しずかでした。", en: "It was quiet. (polite)", de: "Es war ruhig. (höflich)", zh: "很安静。（敬体）" } },
        { id: "g6", translations: { ja: "しずかだった。", en: "It was quiet. (plain, casual)", de: "Es war ruhig. (Plain-Form, informell)", zh: "很安静。（简体，口语）" } }
      ]
    }
  },
  extraReadalongs: {
    ja: [
      {
        id: "grammar-drill-polite",
        title: { ja: "れんしゅう：ていねいけい", en: "Practice: Polite Past Tense", de: "Übung: Höfliche Vergangenheitsform", zh: "练习：敬体过去时" },
        spokenIntro: {
          ja: "つぎは、ていねいけいの かこけいを れんしゅうしましょう。",
          en: "Next, let's practice the polite past tense.",
          de: "Als Nächstes üben wir die höfliche Vergangenheitsform.",
          zh: "接下来，让我们练习敬体的过去时。"
        },
        lines: [
          { id: "pl1", translations: { ja: "えいがを みました。", jaKanji: "映画を見ました。", en: "I watched a movie.", de: "Ich habe einen Film gesehen.", zh: "看电影了。" } },
          { id: "pl2", translations: { ja: "こうえんを さんぽしました。", jaKanji: "公園を散歩しました。", en: "I took a walk in the park.", de: "Ich bin im Park spazieren gegangen.", zh: "在公园散步了。" } },
          { id: "pl3", translations: { ja: "そうじを しました。", jaKanji: "掃除をしました。", en: "I did the cleaning.", de: "Ich habe geputzt.", zh: "打扫了。" } },
          { id: "pl4", translations: { ja: "せんたくを しました。", jaKanji: "洗濯をしました。", en: "I did the laundry.", de: "Ich habe Wäsche gewaschen.", zh: "洗衣服了。" } },
          { id: "pl5", translations: { ja: "かいものに いきました。", jaKanji: "買い物に行きました。", en: "I went shopping.", de: "Ich bin einkaufen gegangen.", zh: "去购物了。" } },
          { id: "pl6", translations: { ja: "りょうりを つくりました。", jaKanji: "料理を作りました。", en: "I made a meal.", de: "Ich habe eine Mahlzeit zubereitet.", zh: "做饭了。" } },
          { id: "pl7", translations: { ja: "ほんを よみました。", jaKanji: "本を読みました。", en: "I read a book.", de: "Ich habe ein Buch gelesen.", zh: "读书了。" } },
          { id: "pl8", translations: { ja: "パーティーに いきました。", jaKanji: "パーティーに行きました。", en: "I went to a party.", de: "Ich bin auf eine Party gegangen.", zh: "去派对了。" } },
          { id: "pl9", translations: { ja: "とても たのしかったです。", jaKanji: "とても楽しかったです。", en: "It was very fun.", de: "Es hat sehr viel Spaß gemacht.", zh: "非常开心。" } },
          { id: "pl10", translations: { ja: "しずかな しゅうまつでした。", jaKanji: "静かな週末でした。", en: "It was a quiet weekend.", de: "Es war ein ruhiges Wochenende.", zh: "是个安静的周末。" } }
        ]
      },
      {
        id: "grammar-drill-plain",
        title: { ja: "れんしゅう：ふつうけい", en: "Practice: Plain Past Tense", de: "Übung: Plain-Vergangenheitsform", zh: "练习：简体过去时" },
        spokenIntro: {
          ja: "つぎは、ふつうけいの かこけいを れんしゅうしましょう。",
          en: "Next, let's practice the plain past tense.",
          de: "Als Nächstes üben wir die Plain-Vergangenheitsform.",
          zh: "接下来，让我们练习简体的过去时。"
        },
        lines: [
          { id: "pn1", translations: { ja: "えいがを みた。", jaKanji: "映画を見た。", en: "I watched a movie.", de: "Ich habe einen Film gesehen.", zh: "看电影了。" } },
          { id: "pn2", translations: { ja: "こうえんを さんぽした。", jaKanji: "公園を散歩した。", en: "I took a walk in the park.", de: "Ich bin im Park spazieren gegangen.", zh: "在公园散步了。" } },
          { id: "pn3", translations: { ja: "そうじを した。", jaKanji: "掃除をした。", en: "I did the cleaning.", de: "Ich habe geputzt.", zh: "打扫了。" } },
          { id: "pn4", translations: { ja: "せんたくを した。", jaKanji: "洗濯をした。", en: "I did the laundry.", de: "Ich habe Wäsche gewaschen.", zh: "洗衣服了。" } },
          { id: "pn5", translations: { ja: "かいものに いった。", jaKanji: "買い物に行った。", en: "I went shopping.", de: "Ich bin einkaufen gegangen.", zh: "去购物了。" } },
          { id: "pn6", translations: { ja: "りょうりを つくった。", jaKanji: "料理を作った。", en: "I made a meal.", de: "Ich habe eine Mahlzeit zubereitet.", zh: "做饭了。" } },
          { id: "pn7", translations: { ja: "ほんを よんだ。", jaKanji: "本を読んだ。", en: "I read a book.", de: "Ich habe ein Buch gelesen.", zh: "读书了。" } },
          { id: "pn8", translations: { ja: "パーティーに いった。", jaKanji: "パーティーに行った。", en: "I went to a party.", de: "Ich bin auf eine Party gegangen.", zh: "去派对了。" } },
          { id: "pn9", translations: { ja: "すごく たのしかった。", jaKanji: "すごく楽しかった。", en: "It was really fun.", de: "Es hat echt Spaß gemacht.", zh: "特别开心。" } },
          { id: "pn10", translations: { ja: "しずかな しゅうまつだった。", jaKanji: "静かな週末だった。", en: "It was a quiet weekend.", de: "Es war ein ruhiges Wochenende.", zh: "是个安静的周末。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        rendaku: { ja: "れんだく（じゅくごの にごり）", en: "Rendaku (sequential voicing in compounds)", de: "Rendaku (Stimmhaftigkeit in Komposita)", zh: "连浊（复合词浊化）" },
        no_rendaku: { ja: "れんだく なし（さんこう）", en: "No rendaku (for comparison)", de: "Ohne Rendaku (zum Vergleich)", zh: "无连浊（对比参考）" }
      },
      items: [
        { id: "r1", category: "rendaku", translations: { ja: "おりがみ", en: "origami (紙 kami → がみ)", de: "Origami (紙 kami → がみ)", zh: "折纸（紙 kami→がみ）" } },
        { id: "r2", category: "rendaku", translations: { ja: "てがみ", en: "letter (紙 kami → がみ)", de: "Brief (紙 kami → がみ)", zh: "信（紙 kami→がみ）" } },
        { id: "r3", category: "rendaku", translations: { ja: "はなび", en: "fireworks (火 hi → び)", de: "Feuerwerk (火 hi → び)", zh: "烟花（火 hi→び）" } },
        { id: "r4", category: "rendaku", translations: { ja: "あおぞら", en: "blue sky (空 sora → ぞら)", de: "blauer Himmel (空 sora → ぞら)", zh: "蓝天（空 sora→ぞら）" } },
        { id: "no1", category: "no_rendaku", translations: { ja: "かいもの", en: "shopping (もの stays unvoiced — not every compound triggers rendaku)", de: "Einkaufen (もの bleibt unverändert — nicht jedes Kompositum löst Rendaku aus)", zh: "购物（もの未浊化——并非所有复合词都会连浊）" } },
        { id: "no2", category: "no_rendaku", translations: { ja: "こうえん", en: "park (not a compound — no rendaku to compare)", de: "Park (kein Kompositum — kein Rendaku zum Vergleich)", zh: "公园（非复合词——无连浊现象）" } }
      ]
    }
  },
  extraDrills: {
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
          youon: { ja: "拗音（ようおん）", en: "Youon (contracted sounds)", de: "Youon (zusammengezogene Laute)", zh: "拗音" },
          sokuon: { ja: "促音（そくおん）", en: "Sokuon (small っ)", de: "Sokuon (kleines っ)", zh: "促音" },
          pitch: { ja: "アクセント", en: "Pitch accent", de: "Tonhöhenakzent", zh: "声调重音" },
          vowel_length: { ja: "ぼいんの ながさ", en: "Vowel length", de: "Vokallänge", zh: "元音长度" }
        },
        items: [
          { id: "yo1", category: "youon", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
          { id: "yo2", category: "youon", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
          { id: "yo3", category: "youon", translations: { ja: "びじゅつかん", en: "art museum", de: "Kunstmuseum", zh: "美术馆" } },
          { id: "yo4", category: "youon", translations: { ja: "きょう", en: "today", de: "heute", zh: "今天" } },
          { id: "yo5", category: "youon", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程" } },
          { id: "yo6", category: "youon", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
          { id: "yo7", category: "youon", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
          { id: "yo8", category: "youon", translations: { ja: "ちゃいろ", en: "brown", de: "braun", zh: "棕色" } },
          { id: "yo9", category: "youon", translations: { ja: "しょくじ", en: "meal", de: "Mahlzeit", zh: "用餐" } },
          { id: "yo10", category: "youon", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "做饭" } },
          { id: "yo11", category: "youon", translations: { ja: "きゃく", en: "guest, customer", de: "Gast, Kunde", zh: "客人" } },
          { id: "yo12", category: "youon", translations: { ja: "ひゃく", en: "hundred", de: "hundert", zh: "百" } },
          { id: "yo13", category: "youon", translations: { ja: "ぎゅうにゅう", en: "milk", de: "Milch", zh: "牛奶" } },
          { id: "yo14", category: "youon", translations: { ja: "じてんしゃ", en: "bicycle", de: "Fahrrad", zh: "自行车" } },

          { id: "so1", category: "sokuon", translations: { ja: "けっこん", en: "marriage", de: "Heirat", zh: "结婚" } },
          { id: "so2", category: "sokuon", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "so3", category: "sokuon", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
          { id: "so4", category: "sokuon", translations: { ja: "ざっし", en: "magazine", de: "Zeitschrift", zh: "杂志" } },
          { id: "so5", category: "sokuon", translations: { ja: "せっけん", en: "soap", de: "Seife", zh: "肥皂" } },
          { id: "so6", category: "sokuon", translations: { ja: "しっぱい", en: "failure", de: "Misserfolg", zh: "失败" } },
          { id: "so7", category: "sokuon", translations: { ja: "きって", en: "stamp", de: "Briefmarke", zh: "邮票" } },
          { id: "so8", category: "sokuon", translations: { ja: "ざっか", en: "sundries, general goods", de: "Haushaltswaren", zh: "杂货" } },
          { id: "so9", category: "sokuon", translations: { ja: "らっしゅあわー", en: "rush hour", de: "Stoßzeit", zh: "高峰时段" } },
          { id: "so10", category: "sokuon", translations: { ja: "けっせき", en: "absence", de: "Abwesenheit", zh: "缺席" } },
          { id: "so11", category: "sokuon", translations: { ja: "サッカー", en: "soccer", de: "Fußball", zh: "足球" } },
          { id: "so12", category: "sokuon", translations: { ja: "みっつ", en: "three (things)", de: "drei (Dinge)", zh: "三个" } },
          { id: "so13", category: "sokuon", translations: { ja: "あさって", en: "the day after tomorrow", de: "übermorgen", zh: "后天" } },
          { id: "so14", category: "sokuon", translations: { ja: "こっち", en: "this way, here", de: "hierher", zh: "这边" } },

          { id: "p1", category: "pitch", translations: { ja: "はし", en: "chopsticks (HL) / bridge (LH) — reinforced contrast", de: "Essstäbchen (HL) / Brücke (LH) — vertiefter Kontrast", zh: "筷子（高低）／桥（低高）——巩固对比" } },
          { id: "p2", category: "pitch", translations: { ja: "あめ", en: "rain (HL) / candy (LH) — reinforced contrast", de: "Regen (HL) / Süßigkeit (LH) — vertiefter Kontrast", zh: "雨（高低）／糖果（低高）——巩固对比" } },
          { id: "p3", category: "pitch", translations: { ja: "しゅみ", en: "hobby — new word, single pattern", de: "Hobby — neues Wort, einzelnes Muster", zh: "爱好——新词，单一声调" } },
          { id: "p4", category: "pitch", translations: { ja: "どようび", en: "Saturday — new word, single pattern", de: "Samstag — neues Wort, einzelnes Muster", zh: "星期六——新词，单一声调" } },
          { id: "p5", category: "pitch", translations: { ja: "でかける", en: "to go out — new word, single pattern", de: "ausgehen — neues Wort, einzelnes Muster", zh: "外出——新词，单一声调" } },
          { id: "p6", category: "pitch", translations: { ja: "のんびり", en: "leisurely, relaxed — new word, single pattern", de: "entspannt — neues Wort, einzelnes Muster", zh: "悠闲——新词，单一声调" } },
          { id: "p7", category: "pitch", translations: { ja: "パーティー", en: "party — new word, single pattern", de: "Party — neues Wort, einzelnes Muster", zh: "派对——新词，单一声调" } },
          { id: "p8", category: "pitch", translations: { ja: "コンサート", en: "concert — new word, single pattern", de: "Konzert — neues Wort, einzelnes Muster", zh: "音乐会——新词，单一声调" } },
          { id: "p9", category: "pitch", translations: { ja: "やすむ", en: "to rest — new word, single pattern", de: "sich ausruhen — neues Wort, einzelnes Muster", zh: "休息——新词，单一声调" } },
          { id: "p10", category: "pitch", translations: { ja: "たのしい", en: "fun — new word, single pattern", de: "unterhaltsam — neues Wort, einzelnes Muster", zh: "开心——新词，单一声调" } },
          { id: "p11", category: "pitch", translations: { ja: "そうじ", en: "cleaning — new word, single pattern", de: "Putzen — neues Wort, einzelnes Muster", zh: "打扫——新词，单一声调" } },
          { id: "p12", category: "pitch", translations: { ja: "せんたく", en: "laundry — new word, single pattern", de: "Wäsche — neues Wort, einzelnes Muster", zh: "洗衣服——新词，单一声调" } },
          { id: "p13", category: "pitch", translations: { ja: "どくしょ", en: "reading — new word, single pattern", de: "Lesen — neues Wort, einzelnes Muster", zh: "读书——新词，单一声调" } },
          { id: "p14", category: "pitch", translations: { ja: "さんぽ", en: "walk, stroll — new word, single pattern", de: "Spaziergang — neues Wort, einzelnes Muster", zh: "散步——新词，单一声调" } },

          { id: "vl1", category: "vowel_length", translations: { ja: "ノート", en: "notebook (long ー)", de: "Notizbuch (langes ー)", zh: "笔记本（长音ー）" } },
          { id: "vl2", category: "vowel_length", translations: { ja: "スポーツ", en: "sports (long ー)", de: "Sport (langes ー)", zh: "体育运动（长音ー）" } },
          { id: "vl3", category: "vowel_length", translations: { ja: "べんきょう", en: "study (long きょう)", de: "Lernen (langes きょう)", zh: "学习（长音きょう）" } },
          { id: "vl4", category: "vowel_length", translations: { ja: "はくぶつかん", en: "museum (short vowels)", de: "Museum (kurze Vokale)", zh: "博物馆（短元音）" } },
          { id: "vl5", category: "vowel_length", translations: { ja: "こうえん", en: "park (long おう)", de: "Park (langes おう)", zh: "公园（长音おう）" } },
          { id: "vl6", category: "vowel_length", translations: { ja: "からだ", en: "body (short vowels)", de: "Körper (kurze Vokale)", zh: "身体（短元音）" } },
          { id: "vl7", category: "vowel_length", translations: { ja: "にちようび", en: "Sunday (long ちよ)", de: "Sonntag (langes ちよ)", zh: "星期日（长音）" } },
          { id: "vl8", category: "vowel_length", translations: { ja: "ゆうめい", en: "famous (long ゆう and えい)", de: "berühmt (langes ゆう und えい)", zh: "有名（长音ゆう和えい）" } },
          { id: "vl9", category: "vowel_length", translations: { ja: "きのう", en: "yesterday (long のう)", de: "gestern (langes のう)", zh: "昨天（长音のう）" } },
          { id: "vl10", category: "vowel_length", translations: { ja: "とうきょう", en: "Tokyo (long とう and きょう)", de: "Tokio (langes とう und きょう)", zh: "东京（长音とう和きょう）" } },
          { id: "vl11", category: "vowel_length", translations: { ja: "おうえん", en: "cheering, support (long おう)", de: "Anfeuern, Unterstützung (langes おう)", zh: "加油，支持（长音おう）" } },
          { id: "vl12", category: "vowel_length", translations: { ja: "せんせい", en: "teacher (long せい)", de: "Lehrer (langes せい)", zh: "老师（长音せい）" } },
          { id: "vl13", category: "vowel_length", translations: { ja: "とけい", en: "clock, watch (long けい)", de: "Uhr (langes けい)", zh: "钟表（长音けい）" } },
          { id: "vl14", category: "vowel_length", translations: { ja: "でんしゃ", en: "train (short vowels)", de: "Zug (kurze Vokale)", zh: "电车（短元音）" } }
        ]
      }
    ]
  },
  song: {
    // Real, well-known Japanese localized version of "If You're Happy
    // and You Know It" (幸せなら手をたたこう) — not an original
    // translation, this is the actual lyrics commonly taught in Japan.
    title: { ja: "しあわせなら てを たたこう", en: "If You're Happy and You Know It", de: "Wenn du glücklich bist" },
    lines: [
      { id: "sg1", translations: { ja: "しあわせなら てを たたこう", en: "If you're happy, clap your hands", de: "Wenn du glücklich bist, klatsch in die Hände" } },
      { id: "sg2", translations: { ja: "しあわせなら てを たたこう", en: "If you're happy, clap your hands", de: "Wenn du glücklich bist, klatsch in die Hände" } },
      { id: "sg3", translations: { ja: "しあわせなら たいどで しめそうよ", en: "If you're happy, show it with how you act", de: "Wenn du glücklich bist, zeig es mit deiner Haltung" } },
      { id: "sg4", translations: { ja: "そら みんなで てを たたこう", en: "Come on, everyone, clap your hands", de: "Los, alle zusammen, klatscht in die Hände" } }
    ]
  }
};
