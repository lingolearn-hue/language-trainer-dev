import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 15 (Landscape). Japanese-only lesson
// for now (grammar/pronunciation), same pattern as topics 1-13 before
// their German pass — vocab/dialogue/song already ja/en/de/zh.

export const topicLandscape: TopicLesson = {
  id: "topic-15-landscape",
  lessonNumber: 15,
  topicName: {
    ja: "しぜん",
    en: "Landscape",
    de: "Landschaft",
    zh: "自然风光"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "やま", en: "mountain", de: "Berg", zh: "山" } },
    { id: "v02", category: "noun", translations: { ja: "かわ", en: "river", de: "Fluss", zh: "河流" } },
    { id: "v03", category: "noun", translations: { ja: "うみ", en: "sea, ocean", de: "Meer", zh: "海" } },
    { id: "v04", category: "noun", translations: { ja: "みずうみ", en: "lake", de: "See", zh: "湖" } },
    { id: "v05", category: "noun", translations: { ja: "もり", en: "forest", de: "Wald", zh: "森林" } },
    { id: "v06", category: "noun", translations: { ja: "はやし", en: "woods, grove", de: "Wäldchen, Gehölz", zh: "树林" } },
    { id: "v07", category: "noun", translations: { ja: "たに", en: "valley", de: "Tal", zh: "山谷" } },
    { id: "v08", category: "noun", translations: { ja: "はま", en: "beach, shore", de: "Strand", zh: "海滩" } },
    { id: "v09", category: "noun", translations: { ja: "しま", en: "island", de: "Insel", zh: "岛屿" } },
    { id: "v10", category: "noun", translations: { ja: "けしき", en: "scenery, view", de: "Landschaft, Aussicht", zh: "风景" } },
    { id: "v11", category: "noun", translations: { ja: "ちへいせん", en: "horizon", de: "Horizont", zh: "地平线" } },
    { id: "v12", category: "noun", translations: { ja: "たいよう", en: "sun", de: "Sonne", zh: "太阳" } },
    { id: "v13", category: "noun", translations: { ja: "そら", en: "sky", de: "Himmel", zh: "天空" } },
    { id: "v14", category: "noun", translations: { ja: "くも", en: "cloud", de: "Wolke", zh: "云" } },
    { id: "v15", category: "verb", translations: { ja: "のぼる", en: "to climb", de: "besteigen, hinaufsteigen", zh: "攀登" } },
    { id: "v16", category: "verb", translations: { ja: "ながめる", en: "to gaze at, look out over", de: "betrachten, hinausblicken", zh: "眺望" } },
    { id: "v17", category: "verb", translations: { ja: "ハイキングする", en: "to go hiking", de: "wandern", zh: "徒步旅行" } },
    { id: "v18", category: "verb", translations: { ja: "キャンプする", en: "to go camping", de: "campen", zh: "露营" } },
    { id: "v19", category: "adjective", translations: { ja: "たかい", en: "high, tall", de: "hoch", zh: "高的" } },
    { id: "v20", category: "adjective", translations: { ja: "ひくい", en: "low", de: "niedrig", zh: "低的" } },
    { id: "v21", category: "adjective", translations: { ja: "ふかい", en: "deep", de: "tief", zh: "深的" } },
    { id: "v22", category: "adjective", translations: { ja: "あさい", en: "shallow", de: "flach", zh: "浅的" } },
    { id: "v23", category: "adjective", translations: { ja: "ひろい", en: "wide, spacious", de: "weit, geräumig", zh: "宽阔的" } },
    { id: "v24", category: "adjective", translations: { ja: "しずかな", en: "quiet, peaceful", de: "ruhig", zh: "安静的" } },
    { id: "v25", category: "adjective", translations: { ja: "うつくしい", en: "beautiful", de: "wunderschön", zh: "美丽的" } },
    { id: "v26", category: "adjective", translations: { ja: "きけんな", en: "dangerous", de: "gefährlich", zh: "危险的" } },
    { id: "v27", category: "noun", translations: { ja: "きゅうか", en: "vacation, holiday", de: "Urlaub", zh: "假期" } },
    { id: "v28", category: "noun", translations: { ja: "たびさき", en: "travel destination", de: "Reiseziel", zh: "旅游目的地" } },
    { id: "v29", category: "noun", translations: { ja: "ちず", en: "map", de: "Karte", zh: "地图" } },
    { id: "v30", category: "noun", translations: { ja: "みち", en: "path, road", de: "Weg", zh: "路" } }
  ],
  dialogueA: {
    title: { ja: "きゅうかの ばしょを えらぶ", en: "Choosing a Vacation Spot", de: "Ein Urlaubsziel auswählen", zh: "选择度假地点" },
    lines: [
      { id: "d1", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きゅうかは どこへ いきたい？", en: "Where do you want to go for vacation?", de: "Wohin möchtest du im Urlaub fahren?", zh: "假期你想去哪里？" } },
      { id: "d2", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "うみか やま、どっちが いい？", en: "The sea or the mountains, which is better?", de: "Meer oder Berge, was ist besser?", zh: "海边还是山里，哪个好？" } },
      { id: "d3", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "やまのほうが うみより すきだよ。", en: "I like the mountains more than the sea.", de: "Ich mag Berge lieber als das Meer.", zh: "比起海边，我更喜欢山里。" } },
      { id: "d4", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どうして？", en: "Why?", de: "Warum?", zh: "为什么？" } },
      { id: "d5", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "やまは うみより しずかだから。", en: "Because the mountains are quieter than the sea.", de: "Weil die Berge ruhiger sind als das Meer.", zh: "因为山里比海边更安静。" } },
      { id: "d6", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "でも けしきは うみのほうが きれいだよ。", en: "But the scenery at the sea is prettier.", de: "Aber die Aussicht am Meer ist schöner.", zh: "但是海边的风景更美。" } },
      { id: "d7", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "この にほんで いちばん たかい やまは どこ？", en: "Where's the tallest mountain in Japan?", de: "Wo ist der höchste Berg in Japan?", zh: "日本最高的山在哪里？" } },
      { id: "d8", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ふじさんが いちばん たかいよ。", en: "Mt. Fuji is the tallest.", de: "Der Fuji ist der höchste.", zh: "富士山最高。" } },
      { id: "d9", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "のぼった こと ある？", en: "Have you ever climbed it?", de: "Bist du schon einmal hochgestiegen?", zh: "你爬过吗？" } },
      { id: "d10", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ううん、まだ。でも いつか のぼりたい。", en: "No, not yet. But I want to climb it someday.", de: "Nein, noch nicht. Aber ich möchte irgendwann hinauf.", zh: "没有，还没有。但我总有一天想爬。" } },
      { id: "d11", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じゃあ、こんどの きゅうかに いこうよ。", en: "Then let's go this next vacation.", de: "Dann lass uns im nächsten Urlaub hingehen.", zh: "那我们下次假期一起去吧。" } },
      { id: "d12", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいね！やまと うみ、りょうほう いこう。", en: "Sounds great! Let's go to both the mountains and the sea.", de: "Klingt gut! Lass uns beides machen, Berge und Meer.", zh: "好啊！山里和海边都去吧。" } },
      { id: "d13", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "それが いちばん いい かんがえだね。", en: "That's the best idea.", de: "Das ist die beste Idee.", zh: "这是最好的主意。" } },
      { id: "d14", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たのしみだね！", en: "I can't wait!", de: "Ich freue mich schon!", zh: "好期待啊！" } }
    ]
  },
  dialogueB: {
    title: { ja: "やまの うえからの けしき", en: "The View from the Mountaintop", de: "Die Aussicht vom Berggipfel", zh: "从山顶眺望的景色" },
    lines: [
      { id: "e1", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "やっと ちょうじょうに ついたね。", en: "We finally reached the summit.", de: "Wir haben endlich den Gipfel erreicht.", zh: "终于到山顶了。" } },
      { id: "e2", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "この けしき、みて！すごい！", en: "Look at this view! Amazing!", de: "Schau dir diese Aussicht an! Fantastisch!", zh: "快看这个景色！太棒了！" } },
      { id: "e3", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "したに もりと かわが みえるよ。", en: "You can see the forest and the river down below.", de: "Man sieht den Wald und den Fluss dort unten.", zh: "下面能看到森林和河流。" } },
      { id: "e4", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "あのみずうみは この へんで いちばん おおきいよ。", en: "That lake is the biggest one in this area.", de: "Der See dort ist der größte in dieser Gegend.", zh: "那个湖是这一带最大的。" } },
      { id: "e5", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "うみより ちいさいけど、きれいだね。", en: "It's smaller than the sea, but it's beautiful.", de: "Er ist kleiner als das Meer, aber wunderschön.", zh: "虽然比海小，但很美。" } },
      { id: "e6", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "そらも きょうは いちばん きれいだと おもう。", en: "I think the sky is the most beautiful I've seen it today too.", de: "Ich finde, der Himmel ist heute auch am schönsten.", zh: "我觉得今天的天空也是最美的。" } },
      { id: "e7", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "くもが ぜんぜん ないね。", en: "There are no clouds at all.", de: "Es gibt überhaupt keine Wolken.", zh: "一点云都没有。" } },
      { id: "e8", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "ちへいせんまで みえる きがする。", en: "I feel like I can even see the horizon.", de: "Ich habe das Gefühl, ich kann sogar den Horizont sehen.", zh: "感觉都能看到地平线了。" } },
      { id: "e9", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "ここまでの みちは たにより らくだったね。", en: "The path here was easier than through the valley.", de: "Der Weg hierher war einfacher als durch das Tal.", zh: "这里的路比走山谷更轻松。" } },
      { id: "e10", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "でも いちばん きけんな ばしょは あそこの がけだよ。", en: "But the most dangerous spot is that cliff over there.", de: "Aber die gefährlichste Stelle ist die Klippe dort drüben.", zh: "但最危险的地方是那边的悬崖。" } },
      { id: "e11", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "きをつけて ながめようね。", en: "Let's be careful while we look.", de: "Lass uns vorsichtig hinschauen.", zh: "我们小心点眺望吧。" } },
      { id: "e12", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "しゃしんを たくさん とりたいな。", en: "I want to take lots of photos.", de: "Ich möchte viele Fotos machen.", zh: "我想拍很多照片。" } },
      { id: "e13", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "この けしきは わすれられないね。", en: "I won't forget this view.", de: "Diese Aussicht werde ich nicht vergessen.", zh: "这个景色真是难忘啊。" } },
      { id: "e14", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "また いっしょに のぼろうね。", en: "Let's climb together again.", de: "Lass uns wieder zusammen hochsteigen.", zh: "我们再一起爬吧。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "ひかくの ひょうげん", en: "Comparatives and Superlatives", de: "Vergleiche und Superlative", zh: "比较句与最高级" },
      explanation: {
        ja: "ふたつを くらべる ときは「Aは Bより 〜」を つかいます：やまは うみより しずかです。どちらが いいか きく ときは「AとB、どちらが 〜ですか」を つかいます。さんかい いじょうを くらべて いちばんを えらぶ ときは「〜で いちばん 〜」を つかいます：にほんで いちばん たかい やま。",
        en: "To compare two things, use \"A は B より 〜\" (A is more ~ than B): やまは うみより しずかです (The mountains are quieter than the sea). To ask which of two is better, use \"A と B、どちらが 〜ですか\" (Between A and B, which is more ~?). To pick the best among three or more, use \"〜で いちばん 〜\" (the most ~ in/among ~): にほんで いちばん たかい やま (the tallest mountain in Japan).",
        de: "Um zwei Dinge zu vergleichen, benutzt man „A は B より 〜\" (A ist 〜er als B): やまは うみより しずかです (Die Berge sind ruhiger als das Meer). Um zu fragen, welches von zweien besser ist, benutzt man „A と B、どちらが 〜ですか\" (Was ist 〜er, A oder B?). Um unter drei oder mehr das Beste auszuwählen, benutzt man „〜で いちばん 〜\" (das 〜este in/unter 〜): にほんで いちばん たかい やま (der höchste Berg in Japan).",
        zh: "比较两个事物时，用「Aは Bより 〜」（A比B更〜）：やまは うみより しずかです（山里比海边更安静）。询问两者中哪个更好时，用「AとB、どちらが 〜ですか」（A和B，哪个更〜？）。在三个或更多中选出最〜的，用「〜で いちばん 〜」（在〜中最〜）：にほんで いちばん たかい やま（日本最高的山）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "やまは うみより しずかです。", en: "The mountains are quieter than the sea. (comparative: より)", de: "Die Berge sind ruhiger als das Meer. (Vergleich: より)", zh: "山里比海边更安静。（比较：より）" } },
        { id: "g2", translations: { ja: "うみのほうが けしきが きれいです。", en: "The sea has the prettier scenery. (のほうが — the ~ one, more so)", de: "Das Meer hat die schönere Aussicht. (のほうが — der/die/das 〜ere)", zh: "海边的风景更美。（のほうが——更〜的那一个）" } },
        { id: "g3", translations: { ja: "やまと うみ、どちらが すきですか？", en: "Which do you like, the mountains or the sea? (asking which of two)", de: "Was mögen Sie lieber, Berge oder Meer? (Frage nach einem von zweien)", zh: "山和海，你更喜欢哪个？（询问两者之一）" } },
        { id: "g4", translations: { ja: "にほんで いちばん たかい やまは ふじさんです。", en: "The tallest mountain in Japan is Mt. Fuji. (superlative: いちばん)", de: "Der höchste Berg in Japan ist der Fuji. (Superlativ: いちばん)", zh: "日本最高的山是富士山。（最高级：いちばん）" } },
        { id: "g5", translations: { ja: "この みずうみは あの みずうみほど おおきくないです。", en: "This lake isn't as big as that lake. (negative comparison: ほど〜ない)", de: "Dieser See ist nicht so groß wie jener See. (negativer Vergleich: ほど〜ない)", zh: "这个湖没有那个湖大。（否定比较：ほど〜ない）" } },
        { id: "g6", translations: { ja: "この みちが いちばん らくです。", en: "This path is the easiest. (superlative: いちばん)", de: "Dieser Weg ist der einfachste. (Superlativ: いちばん)", zh: "这条路最轻松。（最高级：いちばん）" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        long_vowel: { ja: "ながい ぼいん（ー、おう、えい）", en: "Long vowels (ー, おう, えい)", de: "Lange Vokale (ー, おう, えい)", zh: "长元音（ー、おう、えい）" },
        pitch: { ja: "アクセント（ふくしゅう、あたらしい ペア）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)", zh: "声调重音（巩固，新词对）" }
      },
      items: [
        { id: "lv1", category: "long_vowel", translations: { ja: "とおい", en: "far — long お sound written おお", de: "weit — langes お, geschrieben als おお", zh: "远的——长音お，写作おお" } },
        { id: "lv2", category: "long_vowel", translations: { ja: "ちへいせん", en: "horizon — long え sound written えい", de: "Horizont — langes え, geschrieben als えい", zh: "地平线——长音え，写作えい" } },
        { id: "lv3", category: "long_vowel", translations: { ja: "たいよう", en: "sun — long お sound written おう", de: "Sonne — langes お, geschrieben als おう", zh: "太阳——长音お，写作おう" } },
        { id: "lv4", category: "long_vowel", translations: { ja: "きゅうか", en: "vacation — long う sound after a small ゅ", de: "Urlaub — langes う nach kleinem ゅ", zh: "假期——小ゅ后的长音う" } },
        { id: "p1", category: "pitch", translations: { ja: "はし", en: "bridge (LH) / chopsticks (HL) — reviewed from L14, new context", de: "Brücke (LH) / Essstäbchen (HL) — Wiederholung aus L14, neuer Kontext", zh: "桥（低高）／筷子（高低）——L14复习，新语境" } },
        { id: "p2", category: "pitch", translations: { ja: "かわ", en: "river (LH) / — (single reading, new word)", de: "Fluss (LH) / — (einzelne Lesung, neues Wort)", zh: "河流（低高）/ ——（单一读法，新词）" } },
        { id: "p3", category: "pitch", translations: { ja: "あめ", en: "rain (HL) / candy (LH)", de: "Regen (HL) / Süßigkeit (LH)", zh: "雨（高低）／糖果（低高）" } },
        { id: "p4", category: "pitch", translations: { ja: "のぼる", en: "to climb (LHL) — new word, single pattern", de: "besteigen (LHL) — neues Wort, einzelnes Muster", zh: "攀登（低高低）——新词，单一声调" } }
      ]
    }
  },
  extraDrills: {
    ja: [
      {
        id: "grammar-drill",
        title: {
          ja: "ぶんぽうの れんしゅう",
          en: "Grammar Practice",
          de: "Grammatiktraining",
          zh: "语法练习"
        },
        spokenIntro: {
          ja: "つぎは、ひかくの ひょうげんを もっと れんしゅうしましょう。",
          en: "Next, let's practice comparative expressions some more.",
          de: "Als Nächstes üben wir Vergleichsausdrücke noch etwas mehr.",
          zh: "接下来，让我们再多练习一下比较句型。"
        },
        groupLabels: {
          yori: { ja: "より", en: "より (more ~ than)", de: "より (mehr ~ als)", zh: "より（比~更）" },
          nohouga: { ja: "のほうが", en: "のほうが (the ~er one)", de: "のほうが (der/die/das ~ere)", zh: "のほうが（更~的那个）" },
          ichiban: { ja: "いちばん", en: "いちばん (the most ~)", de: "いちばん (der/die/das ~ste)", zh: "いちばん（最~）" },
          hodonai: { ja: "ほど〜ない", en: "ほど〜ない (not as ~ as)", de: "ほど〜ない (nicht so ~ wie)", zh: "ほど〜ない（没有~那么）" }
        },
        items: [
          { id: "y1", category: "yori", translations: { ja: "やまは うみより たかいです。", en: "The mountain is taller than the sea.", de: "Der Berg ist höher als das Meer.", zh: "山比海更高。" } },
          { id: "y2", category: "yori", translations: { ja: "かわは みずうみより ながいです。", en: "The river is longer than the lake.", de: "Der Fluss ist länger als der See.", zh: "河流比湖更长。" } },
          { id: "y3", category: "yori", translations: { ja: "もりは こうえんより おおきいです。", en: "The forest is bigger than the park.", de: "Der Wald ist größer als der Park.", zh: "森林比公园更大。" } },
          { id: "y4", category: "yori", translations: { ja: "しまは たにより ちいさいです。", en: "The island is smaller than the valley.", de: "Die Insel ist kleiner als das Tal.", zh: "岛屿比山谷更小。" } },
          { id: "y5", category: "yori", translations: { ja: "なつは ふゆより あついです。", en: "Summer is hotter than winter.", de: "Der Sommer ist heißer als der Winter.", zh: "夏天比冬天更热。" } },
          { id: "y6", category: "yori", translations: { ja: "とうきょうは きょうとより にぎやかです。", en: "Tokyo is livelier than Kyoto.", de: "Tokio ist lebhafter als Kyoto.", zh: "东京比京都更热闹。" } },
          { id: "y7", category: "yori", translations: { ja: "この みちは あの みちより みじかいです。", en: "This path is shorter than that path.", de: "Dieser Weg ist kürzer als jener Weg.", zh: "这条路比那条路更短。" } },
          { id: "y8", category: "yori", translations: { ja: "うみは かわより ふかいです。", en: "The sea is deeper than the river.", de: "Das Meer ist tiefer als der Fluss.", zh: "海比河更深。" } },
          { id: "y9", category: "yori", translations: { ja: "けさは きのうより さむいです。", en: "This morning is colder than yesterday.", de: "Heute Morgen ist es kälter als gestern.", zh: "今天早上比昨天更冷。" } },
          { id: "y10", category: "yori", translations: { ja: "でんしゃは バスより はやいです。", en: "The train is faster than the bus.", de: "Der Zug ist schneller als der Bus.", zh: "电车比公交车更快。" } },

          { id: "n1", category: "nohouga", translations: { ja: "やまのほうが うみより しずかです。", en: "The mountain is quieter than the sea.", de: "Der Berg ist ruhiger als das Meer.", zh: "山比海更安静。" } },
          { id: "n2", category: "nohouga", translations: { ja: "もりのほうが たにより きけんです。", en: "The forest is more dangerous than the valley.", de: "Der Wald ist gefährlicher als das Tal.", zh: "森林比山谷更危险。" } },
          { id: "n3", category: "nohouga", translations: { ja: "はまのほうが しまより ひろいです。", en: "The beach is wider than the island.", de: "Der Strand ist weitläufiger als die Insel.", zh: "海滩比岛屿更宽阔。" } },
          { id: "n4", category: "nohouga", translations: { ja: "でんしゃのほうが バスより べんりです。", en: "The train is more convenient than the bus.", de: "Der Zug ist praktischer als der Bus.", zh: "电车比公交车更方便。" } },
          { id: "n5", category: "nohouga", translations: { ja: "こっちのほうが あっちより ちかいです。", en: "This one is closer than that one.", de: "Dieses hier ist näher als jenes dort.", zh: "这边比那边更近。" } },
          { id: "n6", category: "nohouga", translations: { ja: "あさのほうが よるより すずしいです。", en: "Morning is cooler than night.", de: "Der Morgen ist kühler als die Nacht.", zh: "早上比晚上更凉爽。" } },
          { id: "n7", category: "nohouga", translations: { ja: "さかなのほうが にくより やすいです。", en: "Fish is cheaper than meat.", de: "Fisch ist billiger als Fleisch.", zh: "鱼比肉更便宜。" } },
          { id: "n8", category: "nohouga", translations: { ja: "とざんのほうが かいすいよくより たいへんです。", en: "Mountain climbing is harder than swimming in the sea.", de: "Bergsteigen ist anstrengender als Meerbaden.", zh: "爬山比海泳更辛苦。" } },
          { id: "n9", category: "nohouga", translations: { ja: "かわのほうが うみより あさいです。", en: "The river is shallower than the sea.", de: "Der Fluss ist flacher als das Meer.", zh: "河比海更浅。" } },
          { id: "n10", category: "nohouga", translations: { ja: "きゅうかのほうが しごとより たのしいです。", en: "Vacation is more fun than work.", de: "Urlaub macht mehr Spaß als Arbeit.", zh: "假期比工作更有趣。" } },

          { id: "i1", category: "ichiban", translations: { ja: "ふじさんは にほんで いちばん たかい やまです。", en: "Mt. Fuji is the tallest mountain in Japan.", de: "Der Fuji ist der höchste Berg in Japan.", zh: "富士山是日本最高的山。" } },
          { id: "i2", category: "ichiban", translations: { ja: "これは いちばん うつくしい けしきです。", en: "This is the most beautiful scenery.", de: "Das ist die schönste Aussicht.", zh: "这是最美的风景。" } },
          { id: "i3", category: "ichiban", translations: { ja: "なつが いちばん あつい きせつです。", en: "Summer is the hottest season.", de: "Der Sommer ist die heißeste Jahreszeit.", zh: "夏天是最热的季节。" } },
          { id: "i4", category: "ichiban", translations: { ja: "あの しまが いちばん ちいさいです。", en: "That island is the smallest.", de: "Jene Insel ist die kleinste.", zh: "那个岛屿最小。" } },
          { id: "i5", category: "ichiban", translations: { ja: "この みちが いちばん あんぜんです。", en: "This path is the safest.", de: "Dieser Weg ist der sicherste.", zh: "这条路最安全。" } },
          { id: "i6", category: "ichiban", translations: { ja: "びわこは にほんで いちばん おおきい みずうみです。", en: "Lake Biwa is the biggest lake in Japan.", de: "Der Biwa-See ist der größte See Japans.", zh: "琵琶湖是日本最大的湖。" } },
          { id: "i7", category: "ichiban", translations: { ja: "あの やまが いちばん きけんです。", en: "That mountain is the most dangerous.", de: "Jener Berg ist der gefährlichste.", zh: "那座山最危险。" } },
          { id: "i8", category: "ichiban", translations: { ja: "けさが いちばん さむかったです。", en: "This morning was the coldest.", de: "Heute Morgen war es am kältesten.", zh: "今天早上最冷。" } },
          { id: "i9", category: "ichiban", translations: { ja: "この たびさきが いちばん にんきです。", en: "This travel destination is the most popular.", de: "Dieses Reiseziel ist am beliebtesten.", zh: "这个旅游目的地最受欢迎。" } },
          { id: "i10", category: "ichiban", translations: { ja: "かれが いちばん はやく はしります。", en: "He runs the fastest.", de: "Er läuft am schnellsten.", zh: "他跑得最快。" } },

          { id: "h1", category: "hodonai", translations: { ja: "この やまは あの やまほど たかくないです。", en: "This mountain isn't as tall as that mountain.", de: "Dieser Berg ist nicht so hoch wie jener Berg.", zh: "这座山没有那座山高。" } },
          { id: "h2", category: "hodonai", translations: { ja: "かわは うみほど ふかくないです。", en: "The river isn't as deep as the sea.", de: "Der Fluss ist nicht so tief wie das Meer.", zh: "河没有海深。" } },
          { id: "h3", category: "hodonai", translations: { ja: "しまは たいりくほど おおきくないです。", en: "The island isn't as big as the continent.", de: "Die Insel ist nicht so groß wie der Kontinent.", zh: "岛屿没有大陆大。" } },
          { id: "h4", category: "hodonai", translations: { ja: "きょうは きのうほど あつくないです。", en: "Today isn't as hot as yesterday.", de: "Heute ist es nicht so heiß wie gestern.", zh: "今天没有昨天热。" } },
          { id: "h5", category: "hodonai", translations: { ja: "この みちは あの みちほど けわしくないです。", en: "This path isn't as steep as that path.", de: "Dieser Weg ist nicht so steil wie jener Weg.", zh: "这条路没有那条路陡。" } },
          { id: "h6", category: "hodonai", translations: { ja: "もりは まちほど にぎやかじゃないです。", en: "The forest isn't as lively as the city.", de: "Der Wald ist nicht so belebt wie die Stadt.", zh: "森林没有城市热闹。" } },
          { id: "h7", category: "hodonai", translations: { ja: "はまは プールほど きれいじゃないです。", en: "The beach isn't as clean as the pool.", de: "Der Strand ist nicht so sauber wie das Schwimmbad.", zh: "海滩没有游泳池干净。" } },
          { id: "h8", category: "hodonai", translations: { ja: "たにの けしきは やまほど うつくしくないです。", en: "The valley's scenery isn't as beautiful as the mountain's.", de: "Die Aussicht des Tals ist nicht so schön wie die des Bergs.", zh: "山谷的风景没有山上美。" } },
          { id: "h9", category: "hodonai", translations: { ja: "でんしゃは ひこうきほど はやくないです。", en: "The train isn't as fast as the airplane.", de: "Der Zug ist nicht so schnell wie das Flugzeug.", zh: "电车没有飞机快。" } },
          { id: "h10", category: "hodonai", translations: { ja: "ことしの ふゆは きょねんほど さむくないです。", en: "This winter isn't as cold as last year.", de: "Dieser Winter ist nicht so kalt wie letztes Jahr.", zh: "今年冬天没有去年冷。" } }
        ]
      }
    ]
  }
};
