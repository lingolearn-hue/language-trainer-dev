import type { TopicLesson } from "../topicTypes";

// A2 — row 23 of docs/a2-master-lesson-table-v01.md. Grammar: 〜よう
// だ／〜みたい (looks like, seems like — based on visual evidence or
// inference). Pronunciation 1/2 (S vs SH, Z vs J) kept exactly as
// assigned.

export const topicEntertainment: TopicLesson = {
  id: "topic-41-entertainment",
  lessonNumber: 41,
  level: "A2",
  topicName: {
    ja: "エンターテインメント",
    en: "Entertainment",
    de: "Unterhaltung",
    zh: "娱乐"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "えいが", jaKanji: "映画", en: "movie", de: "Film", zh: "电影" } },
    { id: "v02", category: "noun", translations: { ja: "ドラマ", en: "TV drama", de: "Serie", zh: "电视剧" } },
    { id: "v03", category: "noun", translations: { ja: "しゅつえんしゃ", jaKanji: "出演者", en: "cast, performer", de: "Darsteller(in)", zh: "演员" } },
    { id: "v04", category: "noun", translations: { ja: "かんとく", jaKanji: "監督", en: "director", de: "Regisseur(in)", zh: "导演" } },
    { id: "v05", category: "noun", translations: { ja: "ないよう", jaKanji: "内容", en: "content, plot", de: "Inhalt", zh: "内容" } },
    { id: "v06", category: "noun", translations: { ja: "ひょうばん", jaKanji: "評判", en: "reputation, reviews", de: "Ruf", zh: "评价" } },
    { id: "v07", category: "noun", translations: { ja: "かんそう", jaKanji: "感想", en: "impression, thoughts", de: "Eindruck", zh: "感想" } },
    { id: "v08", category: "noun", translations: { ja: "すじ", jaKanji: "筋", en: "plot, storyline", de: "Handlung", zh: "情节" } },
    { id: "v09", category: "noun", translations: { ja: "しゅじんこう", jaKanji: "主人公", en: "main character", de: "Hauptfigur", zh: "主人公" } },
    { id: "v10", category: "noun", translations: { ja: "えいがかん", jaKanji: "映画館", en: "movie theater", de: "Kino", zh: "电影院" } },
    { id: "v11", category: "noun", translations: { ja: "チケット", en: "ticket", de: "Ticket", zh: "票" } },
    { id: "v12", category: "noun", translations: { ja: "レビュー", en: "review", de: "Rezension", zh: "评论" } },
    { id: "v13", category: "verb", translations: { ja: "みる", jaKanji: "見る", en: "to watch", de: "sehen", zh: "看" } },
    { id: "v14", category: "verb", translations: { ja: "かんしょうする", jaKanji: "鑑賞する", en: "to appreciate, view", de: "genießen (Kunst)", zh: "欣赏" } },
    { id: "v15", category: "verb", translations: { ja: "えんじる", jaKanji: "演じる", en: "to perform, act", de: "spielen (Rolle)", zh: "扮演" } },
    { id: "v16", category: "verb", translations: { ja: "ひょうかする", jaKanji: "評価する", en: "to evaluate", de: "bewerten", zh: "评价" } },
    { id: "v17", category: "verb", translations: { ja: "かんどうする", jaKanji: "感動する", en: "to be moved", de: "gerührt sein", zh: "感动" } },
    { id: "v18", category: "verb", translations: { ja: "わらう", jaKanji: "笑う", en: "to laugh", de: "lachen", zh: "笑" } },
    { id: "v19", category: "verb", translations: { ja: "なく", jaKanji: "泣く", en: "to cry", de: "weinen", zh: "哭" } },
    { id: "v20", category: "verb", translations: { ja: "おどろく", jaKanji: "驚く", en: "to be surprised", de: "überrascht sein", zh: "吃惊" } },
    { id: "v21", category: "verb", translations: { ja: "きんちょうする", jaKanji: "緊張する", en: "to be nervous, tense", de: "nervös sein", zh: "紧张" } },
    { id: "v22", category: "adjective", translations: { ja: "おもしろい", jaKanji: "面白い", en: "interesting, funny", de: "interessant", zh: "有趣" } },
    { id: "v23", category: "adjective", translations: { ja: "つまらない", jaKanji: "つまらない", en: "boring", de: "langweilig", zh: "无聊" } },
    { id: "v24", category: "adjective", translations: { ja: "かんどうてきな", jaKanji: "感動的な", en: "moving, touching", de: "bewegend", zh: "感人的" } },
    { id: "v25", category: "adjective", translations: { ja: "こわい", jaKanji: "怖い", en: "scary", de: "gruselig", zh: "可怕" } },
    { id: "v26", category: "adjective", translations: { ja: "かなしい", jaKanji: "悲しい", en: "sad", de: "traurig", zh: "悲伤" } },
    { id: "v27", category: "adjective", translations: { ja: "たのしい", jaKanji: "楽しい", en: "fun", de: "lustig", zh: "开心" } },
    { id: "v28", category: "adjective", translations: { ja: "にんきの", jaKanji: "人気の", en: "popular", de: "beliebt", zh: "有人气的" } },
    { id: "v29", category: "adverb", translations: { ja: "たぶん", jaKanji: "多分", en: "probably", de: "wahrscheinlich", zh: "大概" } },
    { id: "v30", category: "adverb", translations: { ja: "どうやら", jaKanji: "どうやら", en: "apparently, seemingly", de: "anscheinend", zh: "看来" } }
  ],
  dialogueA: {
    title: { ja: "えいがに ついて はなす", en: "Discussing a Movie", de: "Über einen Film sprechen", zh: "谈论一部电影" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "この えいが、みに いきませんか？ひょうばんが いいみたいです。", jaKanji: "この映画、見に行きませんか？評判がいいみたいです。", en: "Shall we go see this movie? It seems to have good reviews.", de: "Sollen wir uns diesen Film ansehen? Er scheint gute Kritiken zu haben.", zh: "要不要去看这部电影？好像评价不错的样子。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ポスターを みると、こわい えいがの ようですね。", jaKanji: "ポスターを見ると、怖い映画のようですね。", en: "Looking at the poster, it seems like a scary movie.", de: "Wenn man das Poster sieht, scheint es ein gruseliger Film zu sein.", zh: "看海报的话，好像是一部恐怖片呢。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "レビューを よむと、かんどうてきな ないようの ようです。", jaKanji: "レビューを読むと、感動的な内容のようです。", en: "Reading the reviews, the content seems to be moving.", de: "Wenn man die Rezensionen liest, scheint der Inhalt bewegend zu sein.", zh: "看评论的话，内容好像很感人。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しゅじんこうは この かんとくの えいがに よく でて いるみたいです。", jaKanji: "主人公はこの監督の映画によく出ているみたいです。", en: "It seems like the main character often appears in this director's movies.", de: "Es scheint, als würde die Hauptfigur oft in den Filmen dieses Regisseurs auftreten.", zh: "主人公好像经常出演这位导演的电影。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しゅつえんしゃも にんきの ひとたちみたいですね。", jaKanji: "出演者も人気の人たちみたいですね。", en: "The cast also seems to be popular people.", de: "Die Darsteller scheinen auch beliebt zu sein.", zh: "演员们好像也是很有人气的人呢。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "たぶん おもしろいと おもいます。チケットを かいましょう。", jaKanji: "多分面白いと思います。チケットを買いましょう。", en: "I think it's probably interesting. Let's buy tickets.", de: "Ich denke, es ist wahrscheinlich interessant. Lass uns Tickets kaufen.", zh: "我觉得大概会很有趣。买票吧。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "えいがかんは こんで いるようですね。", jaKanji: "映画館は混んでいるようですね。", en: "The movie theater seems to be crowded.", de: "Das Kino scheint überfüllt zu sein.", zh: "电影院好像很拥挤呢。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "にんきの えいがだから、しかたないですね。", jaKanji: "人気の映画だから、仕方ないですね。", en: "Since it's a popular movie, that can't be helped.", de: "Da es ein beliebter Film ist, lässt sich das nicht ändern.", zh: "因为是人气电影，也没办法呢。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "えいがが おわった あと、かんそうを おしえて くださいね。", jaKanji: "映画が終わった後、感想を教えてくださいね。", en: "Please tell me your thoughts after the movie ends.", de: "Sagen Sie mir bitte Ihre Meinung, nachdem der Film zu Ende ist.", zh: "电影结束后请告诉我你的感想哦。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "もちろんです。どうやら なが〜い えいがみたいですよ。", jaKanji: "もちろんです。どうやら長〜い映画みたいですよ。", en: "Of course. It seems like it's apparently a really long movie.", de: "Natürlich. Anscheinend ist es ein sehr langer Film.", zh: "当然。看来好像是一部很长的电影哦。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "だいじょうぶです。たのしそうな えいがだから、わくわくします。", jaKanji: "大丈夫です。楽しそうな映画だから、わくわくします。", en: "It's fine. It looks like a fun movie, so I'm excited.", de: "Kein Problem. Es sieht nach einem lustigen Film aus, also bin ich aufgeregt.", zh: "没关系。看起来是部好玩的电影，我很期待。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "なきそうな シーンも あるみたいですよ。", jaKanji: "泣きそうなシーンもあるみたいですよ。", en: "It seems like there are scenes that might make you cry too.", de: "Es scheint auch Szenen zu geben, bei denen man weinen könnte.", zh: "好像也有会哭的场面哦。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ハンカチを もって いった ほうが いいみたいですね。", jaKanji: "ハンカチを持っていったほうがいいみたいですね。", en: "It seems like it's better to bring a handkerchief.", de: "Es scheint besser zu sein, ein Taschentuch mitzunehmen.", zh: "看来最好带上手帕呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じゃあ、なかに はいりましょう。もう はじまるみたいです。", jaKanji: "じゃあ、中に入りましょう。もう始まるみたいです。", en: "Then let's go inside. It seems like it's about to start.", de: "Dann lass uns reingehen. Es scheint gleich zu beginnen.", zh: "那我们进去吧。好像马上要开始了。" } }
    ]
  },
  dialogueB: {
    title: { ja: "なにかの ようすを いう", en: "Saying What Something Seems Like", de: "Sagen, wie etwas erscheint", zh: "说明某事物给人的印象" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あの ひと、ゆうめいな はいゆうみたいですね。", jaKanji: "あの人、有名な俳優みたいですね。", en: "That person seems to be a famous actor.", de: "Diese Person scheint eine berühmte Schauspieler(in) zu sein.", zh: "那个人好像是有名的演员呢。" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうですね。みんなに にんきが あるようです。", jaKanji: "そうですね。みんなに人気があるようです。", en: "That's right. They seem to be popular with everyone.", de: "Genau. Sie scheinen bei allen beliebt zu sein.", zh: "是啊。好像很受大家欢迎的样子。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あの ドラマ、なんだか つまらなさそうですね。", jaKanji: "あのドラマ、なんだかつまらなさそうですね。", en: "That drama seems somehow boring.", de: "Diese Serie sieht irgendwie langweilig aus.", zh: "那部电视剧好像有点无聊呢。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "レビューを みると、あまり ひょうかが よくないみたいです。", jaKanji: "レビューを見ると、あまり評価がよくないみたいです。", en: "Looking at the reviews, the ratings don't seem very good.", de: "Wenn man die Rezensionen betrachtet, scheinen die Bewertungen nicht sehr gut zu sein.", zh: "看评论的话，评价好像不太好。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "この ないようは まえに みた えいがに にて いるようです。", jaKanji: "この内容は前に見た映画に似ているようです。", en: "This content seems similar to a movie I saw before.", de: "Dieser Inhalt scheint einem Film zu ähneln, den ich früher gesehen habe.", zh: "这个内容好像和之前看过的一部电影很像。" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "どうやら おなじ かんとくの さくひんみたいですよ。", jaKanji: "どうやら同じ監督の作品みたいですよ。", en: "It seems like it's apparently a work by the same director.", de: "Anscheinend ist es ein Werk des gleichen Regisseurs.", zh: "看来好像是同一位导演的作品哦。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "この しゅつえんしゃは きんちょうして いる ようですね。", jaKanji: "この出演者は緊張しているようですね。", en: "This performer seems to be nervous.", de: "Diese Darsteller(in) scheint nervös zu sein.", zh: "这位演员好像很紧张呢。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はじめての えんぎ みたいですから、しかたないですね。", jaKanji: "初めての演技みたいですから、仕方ないですね。", en: "It seems like it's their first performance, so that can't be helped.", de: "Es scheint ihr erster Auftritt zu sein, also lässt es sich nicht ändern.", zh: "好像是第一次演戏，也没办法呢。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "かんきゃくは たのしんで いるようですよ。", jaKanji: "観客は楽しんでいるようですよ。", en: "The audience seems to be enjoying it.", de: "Das Publikum scheint es zu genießen.", zh: "观众好像玩得很开心哦。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わらいごえも きこえるみたいですね。", jaKanji: "笑い声も聞こえるみたいですね。", en: "I can apparently hear laughter too.", de: "Man kann anscheinend auch Lachen hören.", zh: "好像还能听到笑声呢。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あの シーン、かんどうして いる ひとが おおいみたいです。", jaKanji: "あのシーン、感動している人が多いみたいです。", en: "In that scene, there seem to be a lot of people who are moved.", de: "In dieser Szene scheinen viele Menschen bewegt zu sein.", zh: "那个场景好像有很多人很感动。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "たしかに、なみだを ふいて いる ひとが いるようですね。", jaKanji: "確かに、涙を拭いている人がいるようですね。", en: "Indeed, there seem to be people wiping away tears.", de: "Tatsächlich scheint es Leute zu geben, die sich Tränen abwischen.", zh: "确实，好像有人在擦眼泪呢。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "この えいがは しょうを とりそうですね。", jaKanji: "この映画は賞を取りそうですね。", en: "This movie looks like it'll win an award.", de: "Es sieht so aus, als würde dieser Film einen Preis gewinnen.", zh: "这部电影好像会获奖呢。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わたしも そう おもいます。ひょうばんどおりの さくひんみたいです。", jaKanji: "私もそう思います。評判どおりの作品みたいです。", en: "I think so too. It seems to be a work that lives up to its reputation.", de: "Das denke ich auch. Es scheint ein Werk zu sein, das seinem Ruf gerecht wird.", zh: "我也这么觉得。看来是名副其实的作品。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ようだ／〜みたい：すいそくと ようす", en: "~You Da / ~Mitai: Inference and Appearance", de: "~You Da / ~Mitai: Vermutung und Anschein", zh: "〜ようだ／〜みたい：推测与样态" },
      explanation: {
        ja: "「〜ようだ」と「〜みたい」は どちらも「〜のように みえる／かんじる」と、じぶんの かんかくや じょうほうに もとづく すいそくを あらわします。「ようだ」は フォーマルで、かきことばにも つかえます。「みたい」は カジュアルで、はなしことばで よく つかいます。めいしには「〜の ようだ」「〜みたい」、な-けいようしには「〜な ようだ」「〜みたい」、どうし・い-けいようしは ふつうけいに そのまま つけます。",
        en: "Both ~you da and ~mitai express \"it looks/feels like ~\" — an inference based on your own senses or information. ~you da is formal and can be used in writing. ~mitai is casual and commonly used in speech. With nouns: ~no you da / ~mitai; with na-adjectives: ~na you da / ~mitai; with verbs and i-adjectives, attach directly to the plain form.",
        de: "Sowohl ~you da als auch ~mitai drücken \"es sieht/fühlt sich an wie ~\" aus — eine Vermutung basierend auf eigenen Sinneswahrnehmungen oder Informationen. ~you da ist formell und kann auch schriftlich verwendet werden. ~mitai ist locker und wird häufig gesprochen. Bei Nomen: ~no you da / ~mitai; bei na-Adjektiven: ~na you da / ~mitai; bei Verben und i-Adjektiven wird direkt an die Plain-Form angehängt.",
        zh: "〜ようだ和〜みたい都表示\"看起来／感觉像~\"——基于自己的感官或信息的推测。ようだ较正式，也可用于书面语。みたい较随意，常用于口语。接名词时：〜のようだ／みたい；接な形容词时：〜なようだ／みたい；接动词和い形容词时，直接接简体形。"
      },
      chunks: [
        { id: "g1", translations: { ja: "この えいがは おもしろいようです。", jaKanji: "この映画は面白いようです。", en: "This movie seems interesting.", de: "Dieser Film scheint interessant zu sein.", zh: "这部电影好像很有趣。" } },
        { id: "g2", translations: { ja: "あの ひとは ゆうめいな はいゆうみたいです。", jaKanji: "あの人は有名な俳優みたいです。", en: "That person seems to be a famous actor.", de: "Diese Person scheint eine berühmte Schauspieler(in) zu sein.", zh: "那个人好像是有名的演员。" } },
        { id: "g3", translations: { ja: "きょうは あめが ふるようです。", jaKanji: "今日は雨が降るようです。", en: "It seems like it will rain today.", de: "Es sieht so aus, als würde es heute regnen.", zh: "今天好像会下雨。" } },
        { id: "g4", translations: { ja: "かのじょは しんぱいそうな ようすでした。", jaKanji: "彼女は心配そうな様子でした。", en: "She looked worried.", de: "Sie sah besorgt aus.", zh: "她看起来很担心的样子。" } },
        { id: "g5", translations: { ja: "この みちは ちかみちみたいです。", jaKanji: "この道は近道みたいです。", en: "This road seems to be a shortcut.", de: "Diese Straße scheint eine Abkürzung zu sein.", zh: "这条路好像是条近路。" } },
        { id: "g6", translations: { ja: "どうやら でんしゃが おくれて いるようです。", jaKanji: "どうやら電車が遅れているようです。", en: "It seems the train is apparently delayed.", de: "Anscheinend hat der Zug Verspätung.", zh: "看来电车好像晚点了。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        s: { ja: "S", en: "S", de: "S", zh: "S" },
        sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" },
        z: { ja: "Z", en: "Z", de: "Z", zh: "Z" },
        j: { ja: "J", en: "J", de: "J", zh: "J" }
      },
      items: [
        { id: "s1", category: "s", translations: { ja: "さくひん", en: "work, piece (of art)", de: "Werk", zh: "作品" } },
        { id: "s2", category: "s", translations: { ja: "すじ", en: "plot, storyline", de: "Handlung", zh: "情节" } },
        { id: "s3", category: "s", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
        { id: "s4", category: "s", translations: { ja: "そつぎょう", en: "graduation", de: "Abschluss", zh: "毕业" } },
        { id: "sh1", category: "sh", translations: { ja: "しゅつえん", en: "appearance (performance)", de: "Auftritt", zh: "出演" } },
        { id: "sh2", category: "sh", translations: { ja: "しゅじんこう", en: "main character", de: "Hauptfigur", zh: "主人公" } },
        { id: "sh3", category: "sh", translations: { ja: "しょうかい", en: "introduction", de: "Vorstellung", zh: "介绍" } },
        { id: "sh4", category: "sh", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
        { id: "z1", category: "z", translations: { ja: "ざんねん", en: "too bad, regrettable", de: "schade", zh: "遗憾" } },
        { id: "z2", category: "z", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
        { id: "z3", category: "z", translations: { ja: "ぞう", en: "elephant", de: "Elefant", zh: "大象" } },
        { id: "z4", category: "z", translations: { ja: "ざっし", en: "magazine", de: "Zeitschrift", zh: "杂志" } },
        { id: "j1", category: "j", translations: { ja: "じかん", en: "time", de: "Zeit", zh: "时间" } },
        { id: "j2", category: "j", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程" } },
        { id: "j3", category: "j", translations: { ja: "じょうず", en: "skillful", de: "geschickt", zh: "擅长" } },
        { id: "j4", category: "j", translations: { ja: "じこ", en: "accident", de: "Unfall", zh: "事故" } }
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
          s: { ja: "S", en: "S", de: "S", zh: "S" },
          sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" },
          z: { ja: "Z", en: "Z", de: "Z", zh: "Z" },
          j: { ja: "J", en: "J", de: "J", zh: "J" }
        },
        items: [
          { id: "s5", category: "s", translations: { ja: "さくぶん", en: "composition, essay", de: "Aufsatz", zh: "作文" } },
          { id: "s6", category: "s", translations: { ja: "せいかつ", en: "life, lifestyle", de: "Leben", zh: "生活" } },
          { id: "s7", category: "s", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "s8", category: "s", translations: { ja: "すずしい", en: "cool (weather)", de: "kühl", zh: "凉爽" } },
          { id: "s9", category: "s", translations: { ja: "せまい", en: "narrow, cramped", de: "eng", zh: "狭窄" } },
          { id: "s10", category: "s", translations: { ja: "そだてる", en: "to raise, grow", de: "aufziehen", zh: "养育" } },
          { id: "s11", category: "s", translations: { ja: "さがす", en: "to search", de: "suchen", zh: "寻找" } },
          { id: "s12", category: "s", translations: { ja: "すごす", en: "to spend time", de: "verbringen", zh: "度过" } },
          { id: "s13", category: "s", translations: { ja: "そろえる", en: "to arrange, align", de: "ordnen", zh: "备齐" } },
          { id: "s14", category: "s", translations: { ja: "さいふ", en: "wallet", de: "Geldbörse", zh: "钱包" } },
          { id: "s15", category: "s", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
          { id: "s16", category: "s", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },
          { id: "s17", category: "s", translations: { ja: "せなか", en: "back (body)", de: "Rücken", zh: "背部" } },
          { id: "s18", category: "s", translations: { ja: "さか", en: "slope", de: "Hang", zh: "坡" } },

          { id: "sh5", category: "sh", translations: { ja: "しちがつ", en: "July", de: "Juli", zh: "七月" } },
          { id: "sh6", category: "sh", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
          { id: "sh7", category: "sh", translations: { ja: "しょうらい", en: "future", de: "Zukunft", zh: "将来" } },
          { id: "sh8", category: "sh", translations: { ja: "しゅうかん", en: "habit", de: "Gewohnheit", zh: "习惯" } },
          { id: "sh9", category: "sh", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef", zh: "总经理" } },
          { id: "sh10", category: "sh", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "sh11", category: "sh", translations: { ja: "しっぱい", en: "failure", de: "Misserfolg", zh: "失败" } },
          { id: "sh12", category: "sh", translations: { ja: "しゅうしょく", en: "finding employment", de: "Berufseinstieg", zh: "就业" } },
          { id: "sh13", category: "sh", translations: { ja: "しょうぼう", en: "firefighting", de: "Feuerwehr", zh: "消防" } },
          { id: "sh14", category: "sh", translations: { ja: "しゅっせき", en: "attendance", de: "Anwesenheit", zh: "出席" } },
          { id: "sh15", category: "sh", translations: { ja: "しょうたい", en: "invitation", de: "Einladung", zh: "邀请" } },
          { id: "sh16", category: "sh", translations: { ja: "しゅうり", en: "repair", de: "Reparatur", zh: "修理" } },
          { id: "sh17", category: "sh", translations: { ja: "しんぱん", en: "referee, judgment", de: "Schiedsrichter", zh: "裁判" } },
          { id: "sh18", category: "sh", translations: { ja: "しつもん", en: "question", de: "Frage", zh: "问题" } },

          { id: "z5", category: "z", translations: { ja: "ずつう", en: "headache", de: "Kopfschmerzen", zh: "头痛" } },
          { id: "z6", category: "z", translations: { ja: "ぞうきん", en: "floor cloth", de: "Putzlappen", zh: "抹布" } },
          { id: "z7", category: "z", translations: { ja: "ずるい", en: "sly, unfair", de: "gerissen", zh: "狡猾" } },
          { id: "z8", category: "z", translations: { ja: "ぜんたい", en: "the whole", de: "das Ganze", zh: "整体" } },
          { id: "z9", category: "z", translations: { ja: "ぞくする", en: "to belong to", de: "angehören", zh: "属于" } },
          { id: "z10", category: "z", translations: { ja: "ざせき", en: "seat", de: "Sitzplatz", zh: "座位" } },
          { id: "z11", category: "z", translations: { ja: "ぜいきん", en: "tax", de: "Steuer", zh: "税" } },
          { id: "z12", category: "z", translations: { ja: "ぞうか", en: "increase", de: "Zunahme", zh: "增加" } },
          { id: "z13", category: "z", translations: { ja: "ざつおん", en: "noise", de: "Lärm", zh: "噪音" } },
          { id: "z14", category: "z", translations: { ja: "ずかん", en: "illustrated reference book", de: "Bildlexikon", zh: "图鉴" } },
          { id: "z15", category: "z", translations: { ja: "ぞうり", en: "sandals", de: "Sandalen", zh: "草履" } },
          { id: "z16", category: "z", translations: { ja: "ざいさん", en: "property, assets", de: "Vermögen", zh: "财产" } },
          { id: "z17", category: "z", translations: { ja: "ずのう", en: "brain, intellect", de: "Verstand", zh: "头脑" } },
          { id: "z18", category: "z", translations: { ja: "ぞうきばやし", en: "thicket, coppice", de: "Gehölz", zh: "杂木林" } },

          { id: "j5", category: "j", translations: { ja: "じゅうしょ", en: "address", de: "Adresse", zh: "地址" } },
          { id: "j6", category: "j", translations: { ja: "じょうきょう", en: "situation", de: "Situation", zh: "情况" } },
          { id: "j7", category: "j", translations: { ja: "じつは", en: "actually", de: "eigentlich", zh: "其实" } },
          { id: "j8", category: "j", translations: { ja: "じゅんばん", en: "order, turn", de: "Reihenfolge", zh: "顺序" } },
          { id: "j9", category: "j", translations: { ja: "じょうほう", en: "information", de: "Information", zh: "信息" } },
          { id: "j10", category: "j", translations: { ja: "じゅんび", en: "preparation", de: "Vorbereitung", zh: "准备" } },
          { id: "j11", category: "j", translations: { ja: "じょうけん", en: "condition", de: "Bedingung", zh: "条件" } },
          { id: "j12", category: "j", translations: { ja: "じつげん", en: "realization", de: "Verwirklichung", zh: "实现" } },
          { id: "j13", category: "j", translations: { ja: "じゅうたい", en: "traffic jam", de: "Stau", zh: "堵车" } },
          { id: "j14", category: "j", translations: { ja: "じょうしき", en: "common sense", de: "gesunder Menschenverstand", zh: "常识" } },
          { id: "j15", category: "j", translations: { ja: "じゅうぶん", en: "enough", de: "genug", zh: "足够" } },
          { id: "j16", category: "j", translations: { ja: "じゅく", en: "cram school", de: "Nachhilfeschule", zh: "补习班" } },
          { id: "j17", category: "j", translations: { ja: "じまん", en: "pride, boasting", de: "Stolz", zh: "自豪" } },
          { id: "j18", category: "j", translations: { ja: "じゅみょう", en: "lifespan", de: "Lebensdauer", zh: "寿命" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-youda",
        title: { ja: "れんしゅう：〜ようだ", en: "Practice: ~You Da", de: "Übung: ~You Da", zh: "练习：〜ようだ" },
        spokenIntro: {
          ja: "つぎは、「〜ようだ」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~you da.",
          de: "Als Nächstes üben wir Beispielsätze mit ~you da.",
          zh: "接下来，让我们练习使用「〜ようだ」的例句。"
        },
        lines: [
          { id: "yd1", translations: { ja: "この えいがは おもしろいようです。", jaKanji: "この映画は面白いようです。", en: "This movie seems interesting.", de: "Dieser Film scheint interessant zu sein.", zh: "这部电影好像很有趣。" } },
          { id: "yd2", translations: { ja: "きょうは あめが ふるようです。", jaKanji: "今日は雨が降るようです。", en: "It seems like it will rain today.", de: "Es sieht so aus, als würde es heute regnen.", zh: "今天好像会下雨。" } },
          { id: "yd3", translations: { ja: "かのじょは しんぱいそうな ようすでした。", jaKanji: "彼女は心配そうな様子でした。", en: "She looked worried.", de: "Sie sah besorgt aus.", zh: "她看起来很担心的样子。" } },
          { id: "yd4", translations: { ja: "でんしゃが おくれて いるようです。", jaKanji: "電車が遅れているようです。", en: "The train seems to be delayed.", de: "Der Zug scheint Verspätung zu haben.", zh: "电车好像晚点了。" } },
          { id: "yd5", translations: { ja: "この みせは にんきが あるようです。", jaKanji: "この店は人気があるようです。", en: "This shop seems to be popular.", de: "Dieses Geschäft scheint beliebt zu sein.", zh: "这家店好像很受欢迎。" } },
          { id: "yd6", translations: { ja: "かれは つかれて いるようです。", jaKanji: "彼は疲れているようです。", en: "He seems to be tired.", de: "Er scheint müde zu sein.", zh: "他好像很累。" } },
          { id: "yd7", translations: { ja: "この りょうりは からいようです。", jaKanji: "この料理は辛いようです。", en: "This dish seems to be spicy.", de: "Dieses Gericht scheint scharf zu sein.", zh: "这道菜好像很辣。" } },
          { id: "yd8", translations: { ja: "テストは むずかしかったようです。", jaKanji: "テストは難しかったようです。", en: "The test seems to have been difficult.", de: "Der Test scheint schwierig gewesen zu sein.", zh: "考试好像很难。" } },
          { id: "yd9", translations: { ja: "かいぎは もう おわったようです。", jaKanji: "会議はもう終わったようです。", en: "The meeting seems to have already ended.", de: "Die Besprechung scheint bereits beendet zu sein.", zh: "会议好像已经结束了。" } },
          { id: "yd10", translations: { ja: "みちが こんで いるようです。", jaKanji: "道が混んでいるようです。", en: "The road seems to be crowded.", de: "Die Straße scheint überfüllt zu sein.", zh: "路上好像很拥挤。" } }
        ]
      },
      {
        id: "grammar-drill-mitai",
        title: { ja: "れんしゅう：〜みたい", en: "Practice: ~Mitai", de: "Übung: ~Mitai", zh: "练习：〜みたい" },
        spokenIntro: {
          ja: "つぎは、「〜みたい」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~mitai.",
          de: "Als Nächstes üben wir Beispielsätze mit ~mitai.",
          zh: "接下来，让我们练习使用「〜みたい」的例句。"
        },
        lines: [
          { id: "mt1", translations: { ja: "あの ひとは ゆうめいな はいゆうみたいです。", jaKanji: "あの人は有名な俳優みたいです。", en: "That person seems to be a famous actor.", de: "Diese Person scheint eine berühmte Schauspieler(in) zu sein.", zh: "那个人好像是有名的演员。" } },
          { id: "mt2", translations: { ja: "この みちは ちかみちみたいです。", jaKanji: "この道は近道みたいです。", en: "This road seems to be a shortcut.", de: "Diese Straße scheint eine Abkürzung zu sein.", zh: "这条路好像是条近路。" } },
          { id: "mt3", translations: { ja: "きょうは あつく なるみたいです。", jaKanji: "今日は暑くなるみたいです。", en: "It seems like it'll get hot today.", de: "Es scheint, als würde es heute heiß werden.", zh: "今天好像会变热。" } },
          { id: "mt4", translations: { ja: "かのじょは げんきみたいです。", jaKanji: "彼女は元気みたいです。", en: "She seems energetic.", de: "Sie scheint gesund zu sein.", zh: "她看起来很精神。" } },
          { id: "mt5", translations: { ja: "この えいがは こわいみたいです。", jaKanji: "この映画は怖いみたいです。", en: "This movie seems scary.", de: "Dieser Film scheint gruselig zu sein.", zh: "这部电影好像很吓人。" } },
          { id: "mt6", translations: { ja: "きょうは みんな いそがしいみたいです。", jaKanji: "今日はみんな忙しいみたいです。", en: "Everyone seems busy today.", de: "Alle scheinen heute beschäftigt zu sein.", zh: "今天大家好像都很忙。" } },
          { id: "mt7", translations: { ja: "あの みせは しまって いるみたいです。", jaKanji: "あの店は閉まっているみたいです。", en: "That shop seems to be closed.", de: "Das Geschäft scheint geschlossen zu sein.", zh: "那家店好像关门了。" } },
          { id: "mt8", translations: { ja: "かれは なにか かくして いるみたいです。", jaKanji: "彼は何か隠しているみたいです。", en: "He seems to be hiding something.", de: "Er scheint etwas zu verbergen.", zh: "他好像在隐瞒什么。" } },
          { id: "mt9", translations: { ja: "この もんだいは かんたんみたいです。", jaKanji: "この問題は簡単みたいです。", en: "This problem seems easy.", de: "Dieses Problem scheint einfach zu sein.", zh: "这个问题好像很简单。" } },
          { id: "mt10", translations: { ja: "どうやら わたしたちは まちがえたみたいです。", jaKanji: "どうやら私たちは間違えたみたいです。", en: "It seems like we apparently made a mistake.", de: "Anscheinend haben wir einen Fehler gemacht.", zh: "看来我们好像弄错了。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "えいがの ような じんせい", en: "A Life Like a Movie", de: "Ein Leben wie ein Film" },
    lines: [
      { id: "sg1", translations: { ja: "スクリーンの なかの ものがたり", en: "A story inside the screen", de: "Eine Geschichte auf der Leinwand" } },
      { id: "sg2", translations: { ja: "たのしそうな しゅじんこう", en: "The main character seems to be having fun", de: "Die Hauptfigur scheint Spaß zu haben" } },
      { id: "sg3", translations: { ja: "わたしの じんせいも えいがみたい", en: "My life is also like a movie", de: "Auch mein Leben ist wie ein Film" } },
      { id: "sg4", translations: { ja: "どんな ラストが まって いるかな", en: "I wonder what kind of ending is waiting", de: "Ich frage mich, was für ein Ende auf mich wartet" } }
    ]
  }
};
