import type { TopicLesson } from "../topicTypes";

// A2 — row 2 of docs/a2-master-lesson-table-v01.md. Grammar: ~tari~tari
// suru (representative/listing actions). Pronunciation 1/2 (K vs G, S vs
// SH) are both FIRST occurrences in that table — kept exactly as
// assigned, no substitution needed.

export const topicHobbies: TopicLesson = {
  id: "topic-24-hobbies",
  lessonNumber: 24,
  level: "A2",
  topicName: {
    ja: "しゅみ",
    en: "Hobbies",
    de: "Hobbys",
    zh: "爱好"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しゅみ", en: "hobby", de: "Hobby", zh: "爱好" } },
    { id: "v02", category: "noun", translations: { ja: "どくしょ", en: "reading", de: "Lesen", zh: "读书" } },
    { id: "v03", category: "noun", translations: { ja: "えいが", en: "movie", de: "Film", zh: "电影" } },
    { id: "v04", category: "noun", translations: { ja: "おんがく", en: "music", de: "Musik", zh: "音乐" } },
    { id: "v05", category: "noun", translations: { ja: "がっき", en: "musical instrument", de: "Musikinstrument", zh: "乐器" } },
    { id: "v06", category: "noun", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "做饭" } },
    { id: "v07", category: "noun", translations: { ja: "しゃしん", en: "photography", de: "Fotografie", zh: "摄影" } },
    { id: "v08", category: "noun", translations: { ja: "つり", en: "fishing", de: "Angeln", zh: "钓鱼" } },
    { id: "v09", category: "noun", translations: { ja: "とざん", en: "mountain climbing", de: "Bergsteigen", zh: "爬山" } },
    { id: "v10", category: "noun", translations: { ja: "キャンプ", en: "camping", de: "Camping", zh: "露营" } },
    { id: "v11", category: "noun", translations: { ja: "ガーデニング", en: "gardening", de: "Gärtnern", zh: "园艺" } },
    { id: "v12", category: "noun", translations: { ja: "あみもの", en: "knitting", de: "Stricken", zh: "编织" } },
    { id: "v13", category: "noun", translations: { ja: "しょうせつ", en: "novel", de: "Roman", zh: "小说" } },
    { id: "v14", category: "noun", translations: { ja: "まんが", en: "manga", de: "Manga", zh: "漫画" } },
    { id: "v15", category: "noun", translations: { ja: "アウトドア", en: "the outdoors", de: "Outdoor-Aktivitäten", zh: "户外活动" } },
    { id: "v16", category: "noun", translations: { ja: "バランス", en: "balance", de: "Balance", zh: "平衡" } },
    { id: "v17", category: "verb", translations: { ja: "つくる", en: "to make", de: "machen, herstellen", zh: "制作" } },
    { id: "v18", category: "verb", translations: { ja: "えがく", en: "to draw, paint", de: "malen, zeichnen", zh: "绘画" } },
    { id: "v19", category: "verb", translations: { ja: "ひく", en: "to play (string/keyboard instrument)", de: "spielen (Saiten-/Tasteninstrument)", zh: "弹奏（弦乐器/键盘乐器）" } },
    { id: "v20", category: "verb", translations: { ja: "うたう", en: "to sing", de: "singen", zh: "唱歌" } },
    { id: "v21", category: "verb", translations: { ja: "おどる", en: "to dance", de: "tanzen", zh: "跳舞" } },
    { id: "v22", category: "verb", translations: { ja: "よむ", en: "to read", de: "lesen", zh: "读" } },
    { id: "v23", category: "verb", translations: { ja: "とる", en: "to take (a photo)", de: "aufnehmen (Foto)", zh: "拍（照）" } },
    { id: "v24", category: "verb", translations: { ja: "あるく", en: "to walk", de: "gehen, laufen", zh: "走路" } },
    { id: "v25", category: "verb", translations: { ja: "みる", en: "to watch, see", de: "sehen, anschauen", zh: "看" } },
    { id: "v26", category: "verb", translations: { ja: "たのしむ", en: "to enjoy", de: "genießen", zh: "享受" } },
    { id: "v27", category: "verb", translations: { ja: "むちゅうになる", en: "to become absorbed in", de: "in etwas versunken sein", zh: "沉迷于" } },
    { id: "v28", category: "adjective", translations: { ja: "じゆうな", en: "free (time)", de: "frei (Zeit)", zh: "自由的" } },
    { id: "v29", category: "verb", translations: { ja: "のぼる", en: "to climb", de: "besteigen", zh: "攀登" } },
    { id: "v30", category: "verb", translations: { ja: "およぐ", en: "to swim", de: "schwimmen", zh: "游泳" } }
  ],
  dialogueA: {
    title: { ja: "しゅみに ついて はなす", en: "Talking About Hobbies", de: "Über Hobbys sprechen", zh: "聊聊爱好" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しゅみは なんですか？", en: "What's your hobby?", de: "Was ist Ihr Hobby?", zh: "你的爱好是什么？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しゃしんを とったり、りょうりを したり します。", en: "I do things like taking photos and cooking.", de: "Ich mache Dinge wie Fotografieren und Kochen.", zh: "我会拍照、做饭之类的。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいですね！どんな しゃしんを とりますか？", en: "Nice! What kind of photos do you take?", de: "Schön! Was für Fotos machen Sie?", zh: "真好！拍什么样的照片？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しぜんの しゃしんを とったり、まちの しゃしんを とったり します。", en: "I take photos of nature and photos of the city.", de: "Ich mache Fotos von der Natur und Fotos von der Stadt.", zh: "拍自然风光的照片，也拍城市的照片。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "りょうりは どんな りょうりを つくりますか？", en: "What kind of food do you cook?", de: "Was für Essen kochen Sie?", zh: "做什么样的菜？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "にほんりょうりを つくったり、イタリアりょうりを つくったり します。", en: "I make things like Japanese food and Italian food.", de: "Ich koche Dinge wie japanisches und italienisches Essen.", zh: "会做日本料理，也会做意大利菜。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ほかに しゅみは ありますか？", en: "Do you have any other hobbies?", de: "Haben Sie noch andere Hobbys?", zh: "还有别的爱好吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "どくしょも すきです。しょうせつを よんだり、まんがを よんだり します。", en: "I also like reading. I read novels and manga.", de: "Ich lese auch gerne. Ich lese Romane und Mangas.", zh: "我也喜欢读书。会读小说，也会读漫画。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "おんがくは ききますか？", en: "Do you listen to music?", de: "Hören Sie Musik?", zh: "听音乐吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、ギターを ひいたり、うたを うたったり します。", en: "Yes, I play guitar and sing.", de: "Ja, ich spiele Gitarre und singe.", zh: "是的，弹吉他，也唱歌。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たのしそうですね！むちゅうに なりますか？", en: "Sounds fun! Do you get absorbed in it?", de: "Klingt nach Spaß! Vertiefen Sie sich darin?", zh: "听起来很开心！会沉迷进去吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、じかんを わすれて むちゅうに なります。", en: "Yes, I forget the time and get absorbed.", de: "Ja, ich vergesse die Zeit und vertiefe mich völlig.", zh: "是的，会忘记时间，完全沉浸其中。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "わたしも しゅみが ほしいです。", en: "I want a hobby too.", de: "Ich möchte auch ein Hobby haben.", zh: "我也想要个爱好。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いっしょに なにか はじめませんか？", en: "Why don't we start something together?", de: "Sollen wir nicht zusammen etwas anfangen?", zh: "要不要一起开始点什么？" } }
    ]
  },
  dialogueB: {
    title: { ja: "じゆうな しゅうまつに ついて はなす", en: "Describing a Free Weekend", de: "Ein freies Wochenende beschreiben", zh: "描述自由的周末" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じゆうな じかんが あったら、なにを しますか？", en: "If you have free time, what do you do?", de: "Was machen Sie, wenn Sie freie Zeit haben?", zh: "如果有自由时间，你会做什么？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "とざんを したり、キャンプを したり します。", en: "I do things like mountain climbing and camping.", de: "Ich mache Dinge wie Bergsteigen und Camping.", zh: "会爬山，也会露营。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "アウトドアが すきなんですね。", en: "You like the outdoors, huh.", de: "Sie mögen also die Natur.", zh: "你很喜欢户外活动呢。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、しぜんの なかで あるいたり、しゃしんを とったり するのが すきです。", en: "Yes, I like walking in nature and taking photos.", de: "Ja, ich gehe gerne in der Natur spazieren und mache Fotos.", zh: "是的，我喜欢在大自然里散步，也喜欢拍照。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いえの なかでは なにを しますか？", en: "What do you do at home?", de: "Was machen Sie zu Hause?", zh: "在家里做什么？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ガーデニングを したり、あみものを したり します。", en: "I do things like gardening and knitting.", de: "Ich mache Dinge wie Gärtnern und Stricken.", zh: "会做园艺，也会织毛衣。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あみものは むずかしそうですね。", en: "Knitting looks difficult.", de: "Stricken sieht schwierig aus.", zh: "织毛衣看起来很难呢。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "さいしょは むずかしかったですが、いまは たのしんで います。", en: "At first it was hard, but now I enjoy it.", de: "Am Anfang war es schwierig, aber jetzt genieße ich es.", zh: "一开始很难，不过现在很享受。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しゅうまつは いつも いそがしいですか？", en: "Are your weekends always busy?", de: "Sind Ihre Wochenenden immer beschäftigt?", zh: "周末总是很忙吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、のんびり どくしょを したり、テレビを みたり する ひも あります。", en: "No, there are also days when I relax by reading or watching TV.", de: "Nein, es gibt auch Tage, an denen ich entspannt lese oder fernsehe.", zh: "不是，也有悠闲地读书、看电视的日子。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "バランスが いいですね。", en: "That's a good balance.", de: "Das ist eine gute Balance.", zh: "平衡得很好呢。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ええ、うごいたり、やすんだり するのが だいじだと おもいます。", en: "Yeah, I think it's important to both move around and rest.", de: "Ja, ich denke, es ist wichtig, sich sowohl zu bewegen als auch auszuruhen.", zh: "嗯，我觉得动一动、休息一下都很重要。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしも みならいたいです。", en: "I want to learn from that too.", de: "Das möchte ich mir auch zum Vorbild nehmen.", zh: "我也想向你学习。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いっしょに とざんに いきましょう！", en: "Let's go mountain climbing together!", de: "Lassen Sie uns zusammen bergsteigen gehen!", zh: "一起去爬山吧！" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜たり〜たりする：だいひょうてきな どうさ", en: "~Tari~Tari Suru: Representative Actions", de: "~Tari~Tari Suru: Repräsentative Handlungen", zh: "〜たり〜たりする：列举代表性动作" },
      explanation: {
        ja: "いくつかの こうい の なかから、だいひょうてきな もの を いくつか あげる ときは、どうしの た-けい に「り」を つけて、さいごに「する」を つけます。「ほんを よんだり、おんがくを きいたり します」（ほんも よむし、おんがくも きく。ほかの ことも する かもしれない）。ぜんぶを いう わけでは ありません。",
        en: "To list a few representative actions among several, attach り to the plain past (た-form) of each verb, then finish with する. \"ほんを よんだり、おんがくを きいたり します\" (I do things like reading books and listening to music — implying there might be other activities too). This isn't an exhaustive list.",
        de: "Um einige repräsentative Handlungen aus mehreren aufzuzählen, wird り an die Vergangenheitsform (た-Form) jedes Verbs angehängt, gefolgt von する. \"ほんを よんだり、おんがくを きいたり します\" (Ich mache Dinge wie Bücher lesen und Musik hören — es deutet an, dass es noch andere Aktivitäten geben könnte). Das ist keine vollständige Liste.",
        zh: "要从几个动作中列举出几个代表性的动作，在每个动词的过去式（た形）后加り，最后加する。「ほんを よんだり、おんがくを きいたり します」（我会读书、听音乐之类的——暗示可能还有其他活动）。这不是一个完整的列表。"
      },
      chunks: [
        { id: "g1", translations: { ja: "しゅうまつは えいがを みたり、りょうりを したり します。", en: "On weekends, I do things like watching movies and cooking.", de: "Am Wochenende mache ich Dinge wie Filme schauen und kochen.", zh: "周末会看电影、做饭之类的。" } },
        { id: "g2", translations: { ja: "しゅみは しゃしんを とったり、さんぽしたり することです。", en: "My hobby is things like taking photos and taking walks.", de: "Mein Hobby ist es, Fotos zu machen und spazieren zu gehen.", zh: "我的爱好是拍照、散步之类的。" } },
        { id: "g3", translations: { ja: "こどもは えを えがいたり、うたを うたったり します。", en: "Children do things like drawing pictures and singing songs.", de: "Kinder machen Dinge wie Bilder malen und Lieder singen.", zh: "孩子们会画画、唱歌之类的。" } },
        { id: "g4", translations: { ja: "ひまな とき、ほんを よんだり、テレビを みたり します。", en: "In my free time, I do things like reading books and watching TV.", de: "In meiner Freizeit mache ich Dinge wie Bücher lesen und fernsehen.", zh: "空闲的时候，会读书、看电视之类的。" } },
        { id: "g5", translations: { ja: "かれは がっきを ひいたり、おどったり するのが すきです。", en: "He likes doing things like playing instruments and dancing.", de: "Er mag es, Instrumente zu spielen und zu tanzen.", zh: "他喜欢弹乐器、跳舞之类的。" } },
        { id: "g6", translations: { ja: "なつやすみは やまに のぼったり、うみで およいだり しました。", en: "During summer vacation, I did things like climbing mountains and swimming in the sea.", de: "Im Sommerurlaub habe ich Dinge wie Berge besteigen und im Meer schwimmen gemacht.", zh: "暑假的时候，爬了山，也在海里游了泳。" } }
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
        { id: "k2", category: "k", translations: { ja: "き", en: "tree", de: "Baum", zh: "树" } },
        { id: "k3", category: "k", translations: { ja: "かう", en: "to buy", de: "kaufen", zh: "买" } },
        { id: "k4", category: "k", translations: { ja: "くる", en: "to come", de: "kommen", zh: "来" } },
        { id: "g1", category: "g", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
        { id: "g2", category: "g", translations: { ja: "げんき", en: "healthy", de: "gesund", zh: "健康" } },
        { id: "g3", category: "g", translations: { ja: "ごご", en: "afternoon", de: "Nachmittag", zh: "下午" } },
        { id: "g4", category: "g", translations: { ja: "ぎんこう", en: "bank", de: "Bank", zh: "银行" } },
        { id: "s1", category: "s", translations: { ja: "さくら", en: "cherry blossom", de: "Kirschblüte", zh: "樱花" } },
        { id: "s2", category: "s", translations: { ja: "すき", en: "like", de: "mögen", zh: "喜欢" } },
        { id: "s3", category: "s", translations: { ja: "せんせい", en: "teacher", de: "Lehrer", zh: "老师" } },
        { id: "s4", category: "s", translations: { ja: "そら", en: "sky", de: "Himmel", zh: "天空" } },
        { id: "sh1", category: "sh", translations: { ja: "しゃしん", en: "photography (this lesson's own vocab)", de: "Fotografie (eigenes Vokabular dieser Lektion)", zh: "摄影（本课词汇）" } },
        { id: "sh2", category: "sh", translations: { ja: "しゅみ", en: "hobby (this lesson's own vocab)", de: "Hobby (eigenes Vokabular dieser Lektion)", zh: "爱好（本课词汇）" } },
        { id: "sh3", category: "sh", translations: { ja: "まんが", en: "manga (this lesson's own vocab)", de: "Manga (eigenes Vokabular dieser Lektion)", zh: "漫画（本课词汇）" } },
        { id: "sh4", category: "sh", translations: { ja: "しごと", en: "job, work", de: "Arbeit", zh: "工作" } }
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
          k: { ja: "K", en: "K", de: "K", zh: "K" },
          g: { ja: "G", en: "G", de: "G", zh: "G" },
          s: { ja: "S", en: "S", de: "S", zh: "S" },
          sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" }
        },
        items: [
          { id: "k1", category: "k", translations: { ja: "かお", en: "face", de: "Gesicht", zh: "脸" } },
          { id: "k2", category: "k", translations: { ja: "かみ", en: "hair", de: "Haar", zh: "头发" } },
          { id: "k3", category: "k", translations: { ja: "かわ", en: "river", de: "Fluss", zh: "河流" } },
          { id: "k4", category: "k", translations: { ja: "きた", en: "north", de: "Norden", zh: "北方" } },
          { id: "k5", category: "k", translations: { ja: "くつ", en: "shoes", de: "Schuhe", zh: "鞋子" } },
          { id: "k6", category: "k", translations: { ja: "くも", en: "cloud", de: "Wolke", zh: "云" } },
          { id: "k7", category: "k", translations: { ja: "くるま", en: "car", de: "Auto", zh: "车" } },
          { id: "k8", category: "k", translations: { ja: "けさ", en: "this morning", de: "heute Morgen", zh: "今天早上" } },
          { id: "k9", category: "k", translations: { ja: "こえ", en: "voice", de: "Stimme", zh: "声音" } },
          { id: "k10", category: "k", translations: { ja: "ここのつ", en: "nine (things)", de: "neun (Dinge)", zh: "九个" } },
          { id: "k11", category: "k", translations: { ja: "かびん", en: "vase", de: "Vase", zh: "花瓶" } },
          { id: "k12", category: "k", translations: { ja: "きせつ", en: "season", de: "Jahreszeit", zh: "季节" } },
          { id: "k13", category: "k", translations: { ja: "くうき", en: "air", de: "Luft", zh: "空气" } },
          { id: "k14", category: "k", translations: { ja: "かたち", en: "shape", de: "Form", zh: "形状" } },

          { id: "g5", category: "g", translations: { ja: "ぐあい", en: "condition", de: "Zustand", zh: "状态" } },
          { id: "g6", category: "g", translations: { ja: "がいこく", en: "foreign country", de: "Ausland", zh: "外国" } },
          { id: "g7", category: "g", translations: { ja: "ぎゅうにゅう", en: "milk", de: "Milch", zh: "牛奶" } },
          { id: "g8", category: "g", translations: { ja: "ぐうぜん", en: "coincidence", de: "Zufall", zh: "偶然" } },
          { id: "g9", category: "g", translations: { ja: "げつようび", en: "Monday", de: "Montag", zh: "星期一" } },
          { id: "g10", category: "g", translations: { ja: "ごはん", en: "rice, meal", de: "Reis, Mahlzeit", zh: "米饭，饭" } },
          { id: "g11", category: "g", translations: { ja: "がか", en: "painter", de: "Maler", zh: "画家" } },
          { id: "g12", category: "g", translations: { ja: "ぎじゅつ", en: "technology, skill", de: "Technik, Fertigkeit", zh: "技术" } },
          { id: "g13", category: "g", translations: { ja: "ぐたいてきな", en: "concrete, specific", de: "konkret", zh: "具体的" } },
          { id: "g14", category: "g", translations: { ja: "げんかん", en: "entryway", de: "Eingang", zh: "门厅" } },
          { id: "g15", category: "g", translations: { ja: "がまん", en: "patience, endurance", de: "Geduld", zh: "忍耐" } },
          { id: "g16", category: "g", translations: { ja: "げしゅく", en: "boarding house", de: "Pension", zh: "寄宿" } },
          { id: "g17", category: "g", translations: { ja: "ぎもん", en: "question, doubt", de: "Frage, Zweifel", zh: "疑问" } },
          { id: "g18", category: "g", translations: { ja: "ごうかく", en: "passing (an exam)", de: "Bestehen (einer Prüfung)", zh: "合格" } },

          { id: "s5", category: "s", translations: { ja: "さかな", en: "fish", de: "Fisch", zh: "鱼" } },
          { id: "s6", category: "s", translations: { ja: "すいか", en: "watermelon", de: "Wassermelone", zh: "西瓜" } },
          { id: "s7", category: "s", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
          { id: "s8", category: "s", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },
          { id: "s9", category: "s", translations: { ja: "さむい", en: "cold", de: "kalt", zh: "冷的" } },
          { id: "s10", category: "s", translations: { ja: "すわる", en: "to sit", de: "sitzen", zh: "坐" } },
          { id: "s11", category: "s", translations: { ja: "せいかつ", en: "life", de: "Leben", zh: "生活" } },
          { id: "s12", category: "s", translations: { ja: "そうじ", en: "cleaning", de: "Putzen", zh: "打扫" } },
          { id: "s13", category: "s", translations: { ja: "さいふ", en: "wallet", de: "Geldbörse", zh: "钱包" } },
          { id: "s14", category: "s", translations: { ja: "すな", en: "sand", de: "Sand", zh: "沙子" } },
          { id: "s15", category: "s", translations: { ja: "さいきん", en: "recently", de: "kürzlich", zh: "最近" } },
          { id: "s16", category: "s", translations: { ja: "すてき", en: "wonderful, lovely", de: "wunderbar", zh: "很棒的" } },
          { id: "s17", category: "s", translations: { ja: "せんたく", en: "laundry", de: "Wäsche", zh: "洗衣服" } },
          { id: "s18", category: "s", translations: { ja: "そうだん", en: "consultation", de: "Beratung", zh: "商量" } },

          { id: "sh5", category: "sh", translations: { ja: "しんぶん", en: "newspaper", de: "Zeitung", zh: "报纸" } },
          { id: "sh6", category: "sh", translations: { ja: "しゅくだい", en: "homework", de: "Hausaufgabe", zh: "作业" } },
          { id: "sh7", category: "sh", translations: { ja: "しょくじ", en: "meal", de: "Mahlzeit", zh: "用餐" } },
          { id: "sh8", category: "sh", translations: { ja: "しちがつ", en: "July", de: "Juli", zh: "七月" } },
          { id: "sh9", category: "sh", translations: { ja: "しゃかい", en: "society", de: "Gesellschaft", zh: "社会" } },
          { id: "sh10", category: "sh", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt", zh: "出发" } },
          { id: "sh11", category: "sh", translations: { ja: "しょうがっこう", en: "elementary school", de: "Grundschule", zh: "小学" } },
          { id: "sh12", category: "sh", translations: { ja: "しつもん", en: "question", de: "Frage", zh: "问题" } },
          { id: "sh13", category: "sh", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
          { id: "sh14", category: "sh", translations: { ja: "しょうらい", en: "future", de: "Zukunft", zh: "将来" } },
          { id: "sh15", category: "sh", translations: { ja: "しゅうかん", en: "habit", de: "Gewohnheit", zh: "习惯" } },
          { id: "sh16", category: "sh", translations: { ja: "しょうかい", en: "introduction", de: "Vorstellung", zh: "介绍" } },
          { id: "sh17", category: "sh", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef", zh: "总经理" } },
          { id: "sh18", category: "sh", translations: { ja: "しゅじん", en: "husband, master", de: "Ehemann, Herr", zh: "丈夫，主人" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "こげよ マイケル", en: "Row, Row, Row Your Boat", de: "Rudert, rudert" },
    lines: [
      { id: "sg1", translations: { ja: "こげ こげ ボートを", en: "Row, row, row your boat", de: "Rudert, rudert, rudert das Boot" } },
      { id: "sg2", translations: { ja: "しずかに かわを くだる", en: "Gently down the stream", de: "sanft den Fluss hinab" } },
      { id: "sg3", translations: { ja: "たのしく たのしく たのしく たのしく", en: "Merrily, merrily, merrily, merrily", de: "Fröhlich, fröhlich, fröhlich, fröhlich" } },
      { id: "sg4", translations: { ja: "じんせいは ゆめの よう", en: "Life is but a dream", de: "das Leben ist ein Traum" } }
    ]
  }
};
