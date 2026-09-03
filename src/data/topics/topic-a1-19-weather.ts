import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 19 (Weather). Japanese-only lesson
// for now. Grammar concept (adjective agreement + comparatives) is
// German-specific in the table but Japanese already has its own
// comparative construction (established in Topic 15 Landscape) — this
// lesson reinforces it with fresh weather-specific examples rather than
// reusing the same identical sentences. Pronunciation concepts ("F vs V",
// "W as V", both reinforced) are German-specific and don't apply to
// Japanese — substituted with reinforced pitch accent and vowel length.
// The master table names "Alouette" as this row's song — adapted here
// into an original Japanese weather-themed song rather than translating
// the French original, which isn't thematically about weather at all.

export const topicWeather: TopicLesson = {
  id: "topic-a1-19-weather",
  lessonNumber: 19,
  topicName: {
    ja: "てんき",
    en: "Weather",
    de: "Wetter",
    zh: "天气"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "てんき", en: "weather", de: "Wetter", zh: "天气" } },
    { id: "v02", category: "noun", translations: { ja: "はれ", en: "sunny", de: "sonnig", zh: "晴天" } },
    { id: "v03", category: "noun", translations: { ja: "くもり", en: "cloudy", de: "bewölkt", zh: "阴天" } },
    { id: "v04", category: "noun", translations: { ja: "あめ", en: "rain", de: "Regen", zh: "雨" } },
    { id: "v05", category: "noun", translations: { ja: "ゆき", en: "snow", de: "Schnee", zh: "雪" } },
    { id: "v06", category: "noun", translations: { ja: "かぜ", en: "wind", de: "Wind", zh: "风" } },
    { id: "v07", category: "noun", translations: { ja: "たいふう", en: "typhoon", de: "Taifun", zh: "台风" } },
    { id: "v08", category: "noun", translations: { ja: "かみなり", en: "thunder", de: "Donner", zh: "雷" } },
    { id: "v09", category: "noun", translations: { ja: "きり", en: "fog", de: "Nebel", zh: "雾" } },
    { id: "v10", category: "noun", translations: { ja: "つゆ", en: "rainy season", de: "Regenzeit", zh: "梅雨季" } },
    { id: "v11", category: "noun", translations: { ja: "きおん", en: "temperature", de: "Temperatur", zh: "气温" } },
    { id: "v12", category: "adjective", translations: { ja: "あつい", en: "hot", de: "heiß", zh: "热的" } },
    { id: "v13", category: "adjective", translations: { ja: "さむい", en: "cold", de: "kalt", zh: "冷的" } },
    { id: "v14", category: "adjective", translations: { ja: "すずしい", en: "cool", de: "kühl", zh: "凉爽的" } },
    { id: "v15", category: "adjective", translations: { ja: "あたたかい", en: "warm", de: "warm", zh: "温暖的" } },
    { id: "v16", category: "adjective", translations: { ja: "むしあつい", en: "humid", de: "schwül", zh: "闷热的" } },
    { id: "v17", category: "adjective", translations: { ja: "かんそうした", en: "dry", de: "trocken", zh: "干燥的" } },
    { id: "v18", category: "noun", translations: { ja: "てんきよほう", en: "weather forecast", de: "Wettervorhersage", zh: "天气预报" } },
    { id: "v19", category: "noun", translations: { ja: "かさ", en: "umbrella", de: "Regenschirm", zh: "雨伞" } },
    { id: "v20", category: "noun", translations: { ja: "にじ", en: "rainbow", de: "Regenbogen", zh: "彩虹" } },
    { id: "v21", category: "noun", translations: { ja: "ひざし", en: "sunlight", de: "Sonnenlicht", zh: "阳光" } },
    { id: "v22", category: "noun", translations: { ja: "くも", en: "cloud", de: "Wolke", zh: "云" } },
    { id: "v23", category: "noun", translations: { ja: "しつど", en: "humidity", de: "Luftfeuchtigkeit", zh: "湿度" } },
    { id: "v24", category: "noun", translations: { ja: "きせつ", en: "season", de: "Jahreszeit", zh: "季节" } },
    { id: "v25", category: "noun", translations: { ja: "はる", en: "spring", de: "Frühling", zh: "春天" } },
    { id: "v26", category: "noun", translations: { ja: "なつ", en: "summer", de: "Sommer", zh: "夏天" } },
    { id: "v27", category: "noun", translations: { ja: "あき", en: "autumn", de: "Herbst", zh: "秋天" } },
    { id: "v28", category: "noun", translations: { ja: "ふゆ", en: "winter", de: "Winter", zh: "冬天" } },
    { id: "v29", category: "adjective", translations: { ja: "つよい", en: "strong", de: "stark", zh: "强的" } },
    { id: "v30", category: "adjective", translations: { ja: "よわい", en: "weak", de: "schwach", zh: "弱的" } }
  ],
  dialogueA: {
    title: { ja: "きょうの てんきの はなし", en: "Small Talk About Today's Weather", de: "Small Talk über das heutige Wetter", zh: "聊聊今天的天气" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きょうは いい てんきですね。", en: "The weather is nice today, isn't it?", de: "Das Wetter ist heute schön, nicht wahr?", zh: "今天天气真好啊。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ほんとうに。きのうより あたたかいですね。", en: "Really. It's warmer than yesterday.", de: "Wirklich. Es ist wärmer als gestern.", zh: "真的。比昨天暖和呢。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "てんきよほうを みましたか？あしたは あめらしいですよ。", en: "Did you check the forecast? It seems like it'll rain tomorrow.", de: "Haben Sie die Vorhersage gesehen? Es scheint, dass es morgen regnet.", zh: "您看天气预报了吗？听说明天会下雨。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ほんとうですか。かさを もっていかないと。", en: "Really? I'll need to bring an umbrella.", de: "Wirklich? Ich muss einen Regenschirm mitnehmen.", zh: "真的吗？那得带伞了。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かぜも つよく なるそうです。", en: "It seems the wind will get strong too.", de: "Es heißt, der Wind wird auch stark.", zh: "听说风也会变强。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "たいふうが きているんですか？", en: "Is a typhoon coming?", de: "Kommt ein Taifun?", zh: "是台风要来了吗？" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいえ、ただの かぜだと おもいます。でも きをつけてくださいね。", en: "No, I think it's just wind. But please be careful.", de: "Nein, ich glaube, es ist nur Wind. Aber bitte seien Sie vorsichtig.", zh: "不是，我觉得只是普通的风。不过还是要小心哦。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "わかりました。しつども たかいですね。", en: "Got it. The humidity is high too, isn't it?", de: "Verstanden. Die Luftfeuchtigkeit ist auch hoch, oder?", zh: "明白了。湿度也很高呢。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "そうですね、むしあついです。", en: "Yeah, it's humid.", de: "Ja, es ist schwül.", zh: "是啊，闷热。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つゆの きせつですからね。", en: "Well, it is rainy season after all.", de: "Nun ja, es ist ja Regenzeit.", zh: "毕竟是梅雨季节嘛。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はやく なつが きてほしいですね。", en: "I hope summer comes soon.", de: "Ich hoffe, der Sommer kommt bald.", zh: "真希望夏天快点到来。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でも なつは あつすぎますよ。", en: "But summer is too hot.", de: "Aber der Sommer ist zu heiß.", zh: "但夏天太热了。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たしかに。あきが いちばん すきです。", en: "True. I like autumn the best.", de: "Stimmt. Der Herbst gefällt mir am besten.", zh: "确实。我最喜欢秋天了。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "わたしも そうです。すずしくて きもちが いいですね。", en: "Me too. It's cool and feels pleasant.", de: "Ich auch. Es ist kühl und fühlt sich angenehm an.", zh: "我也是。凉爽又舒服。" } }
    ]
  },
  dialogueB: {
    title: { ja: "ふたつの まちの てんきを くらべる", en: "Comparing Weather in Two Cities", de: "Das Wetter zweier Städte vergleichen", zh: "比较两座城市的天气" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "とうきょうと さっぽろ、どちらが さむいですか？", en: "Which is colder, Tokyo or Sapporo?", de: "Was ist kälter, Tokio oder Sapporo?", zh: "东京和札幌，哪个更冷？" } },
      { id: "e2", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "さっぽろのほうが とうきょうより さむいですよ。", en: "Sapporo is colder than Tokyo.", de: "Sapporo ist kälter als Tokio.", zh: "札幌比东京更冷。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ゆきも おおいですか？", en: "Does it get a lot of snow too?", de: "Schneit es dort auch viel?", zh: "雪也多吗？" } },
      { id: "e4", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "はい、さっぽろは にほんで いちばん ゆきが おおい まちの ひとつです。", en: "Yes, Sapporo is one of the snowiest cities in Japan.", de: "Ja, Sapporo ist eine der schneereichsten Städte Japans.", zh: "是的，札幌是日本雪最多的城市之一。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "なつは どうですか？", en: "What about summer?", de: "Und wie ist es im Sommer?", zh: "夏天怎么样？" } },
      { id: "e6", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "さっぽろの なつは とうきょうより すずしいです。", en: "Sapporo's summer is cooler than Tokyo's.", de: "Sapporos Sommer ist kühler als der von Tokio.", zh: "札幌的夏天比东京凉爽。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "とうきょうの なつは あつくて むしあついですよね。", en: "Tokyo's summer is hot and humid, isn't it?", de: "Tokios Sommer ist heiß und schwül, nicht wahr?", zh: "东京的夏天又热又闷吧？" } },
      { id: "e8", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "そうですね、とうきょうのほうが しつどが たかいです。", en: "Yeah, Tokyo has higher humidity.", de: "Ja, Tokio hat eine höhere Luftfeuchtigkeit.", zh: "是的，东京的湿度更高。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どちらの きせつが いちばん すきですか？", en: "Which season do you like best?", de: "Welche Jahreszeit gefällt Ihnen am besten?", zh: "您最喜欢哪个季节？" } },
      { id: "e10", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "わたしは はるが いちばん すきです。あたたかくて きれいですから。", en: "I like spring the best. It's warm and beautiful.", de: "Mir gefällt der Frühling am besten. Er ist warm und schön.", zh: "我最喜欢春天。因为温暖又美丽。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "さっぽろの はるは とうきょうほど はやく きませんよね。", en: "Sapporo's spring doesn't come as early as Tokyo's, does it?", de: "Sapporos Frühling kommt nicht so früh wie der von Tokio, oder?", zh: "札幌的春天没有东京来得早吧？" } },
      { id: "e12", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "そのとおりです。にがつは まだ ゆきが のこっています。", en: "That's right. In February, snow still remains.", de: "Genau. Im Februar liegt noch Schnee.", zh: "没错。二月的时候还有积雪。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きせつの ちがいが おもしろいですね。", en: "It's interesting how the seasons differ.", de: "Es ist interessant, wie sich die Jahreszeiten unterscheiden.", zh: "季节的差异真有趣呢。" } },
      { id: "e14", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "ほんとうに。にほんは たてに ながいから、てんきも さまざまですよ。", en: "Really. Since Japan is long from north to south, the weather varies a lot too.", de: "Wirklich. Da Japan von Nord nach Süd lang gestreckt ist, ist auch das Wetter sehr unterschiedlich.", zh: "真的。因为日本南北狭长，天气也各不相同。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "てんきの ひかく（ふくしゅう）", en: "Comparing Weather (Reinforced)", de: "Wetter vergleichen (vertieft)", zh: "天气比较（巩固）" },
      explanation: {
        ja: "レッスン15で ならった ひかくの ひょうげん（より、のほうが、いちばん、ほど〜ない）を、てんきの わだいで もういちど れんしゅうします。",
        en: "This lesson practices the comparative expressions from Lesson 15 (より, のほうが, いちばん, ほど〜ない) again, this time with weather topics.",
        de: "In dieser Lektion werden die Vergleichsausdrücke aus Lektion 15 (より, のほうが, いちばん, ほど〜ない) noch einmal geübt, diesmal anhand des Themas Wetter.",
        zh: "本课再次练习第15课学过的比较表达（より、のほうが、いちばん、ほど〜ない），这次以天气为主题。"
      },
      chunks: [
        { id: "g1", translations: { ja: "きょうは きのうより さむいです。", en: "Today is colder than yesterday. (より)", de: "Heute ist es kälter als gestern. (より)", zh: "今天比昨天冷。（より）" } },
        { id: "g2", translations: { ja: "なつのほうが ふゆより あついです。", en: "Summer is hotter than winter. (のほうが)", de: "Der Sommer ist heißer als der Winter. (のほうが)", zh: "夏天比冬天热。（のほうが）" } },
        { id: "g3", translations: { ja: "とうきょうと おおさか、どちらが あついですか？", en: "Which is hotter, Tokyo or Osaka? (どちらが)", de: "Was ist heißer, Tokio oder Osaka? (どちらが)", zh: "东京和大阪，哪个更热？（どちらが）" } },
        { id: "g4", translations: { ja: "にほんで いちばん さむい きせつは ふゆです。", en: "The coldest season in Japan is winter. (いちばん)", de: "Die kälteste Jahreszeit in Japan ist der Winter. (いちばん)", zh: "日本最冷的季节是冬天。（いちばん）" } },
        { id: "g5", translations: { ja: "きょうは きのうほど あつくないです。", en: "Today isn't as hot as yesterday. (ほど〜ない)", de: "Heute ist es nicht so heiß wie gestern. (ほど〜ない)", zh: "今天没有昨天那么热。（ほど〜ない）" } },
        { id: "g6", translations: { ja: "らいしゅうは こんしゅうより すずしいでしょう。", en: "Next week will probably be cooler than this week. (より + でしょう)", de: "Nächste Woche wird es wahrscheinlich kühler als diese Woche. (より + でしょう)", zh: "下周可能会比这周凉爽。（より + でしょう）" } }
      ]
    },
    de: {
      title: { de: "Komparativ und Superlativ: Wetter (vertieft)", en: "Comparative and Superlative: Weather (Reinforced)", ja: "ひかくきゅう と さいじょうきゅう：てんき（ふくしゅう）", zh: "比较级与最高级：天气（巩固）" },
      explanation: {
        de: "Diese Lektion vertieft den Komparativ und Superlativ aus Lektion 15, diesmal mit Wetterthemen, und ergänzt die Adjektivendung: steht der Komparativ oder Superlativ direkt vor einem Nomen, bekommt er dieselbe Endung wie ein normales Adjektiv — der kälteste Tag (nicht \"der kältest Tag\").",
        en: "This lesson reinforces the comparative and superlative from Lesson 15, this time with weather topics, and adds the adjective ending: when a comparative or superlative stands directly before a noun, it takes the same ending as a regular adjective — der kälteste Tag (not \"der kältest Tag\").",
        ja: "この レッスンは、レッスン15の ひかくきゅうと さいじょうきゅうを てんきの わだいで もういちど れんしゅうし、けいようしの ごびも つけくわえます：ひかくきゅう・さいじょうきゅうが めいしの まえに くる ときは、ふつうの けいようしと おなじ ごびが つきます——der kälteste Tag（「der kältest Tag」では ない）。",
        zh: "本课再次巩固第15课的比较级与最高级，这次以天气为主题，并补充形容词词尾：当比较级或最高级直接放在名词前面时，需要加上和普通形容词一样的词尾——der kälteste Tag（而不是「der kältest Tag」）。"
      },
      chunks: [
        { id: "g1", translations: { de: "Heute ist es kälter als gestern.", en: "Today is colder than yesterday. (comparative, predicate)", ja: "きょうは きのうより さむいです。（ひかくきゅう、じゅつご）", zh: "今天比昨天冷。（比较级，谓语）" } },
        { id: "g2", translations: { de: "Der Sommer ist heißer als der Winter.", en: "Summer is hotter than winter. (comparative, predicate)", ja: "なつのほうが ふゆより あついです。（ひかくきゅう、じゅつご）", zh: "夏天比冬天热。（比较级，谓语）" } },
        { id: "g3", translations: { de: "Was ist heißer, Tokio oder Osaka?", en: "Which is hotter, Tokyo or Osaka? (comparative, question)", ja: "とうきょうと おおさか、どちらが あついですか？（ひかくきゅう、しつもん）", zh: "东京和大阪，哪个更热？（比较级，疑问句）" } },
        { id: "g4", translations: { de: "Der kälteste Tag war im Januar.", en: "The coldest day was in January. (superlative, attributive with agreement)", ja: "いちばん さむい ひは いちがつでした。（さいじょうきゅう、しゅうしょくご、ごびの いっち）", zh: "最冷的一天是在一月。（最高级，定语形式，词尾一致）" } },
        { id: "g5", translations: { de: "Heute ist es nicht so heiß wie gestern.", en: "Today isn't as hot as yesterday. (negative comparison)", ja: "きょうは きのうほど あつくないです。（ひていの ひかく）", zh: "今天没有昨天那么热。（否定比较）" } },
        { id: "g6", translations: { de: "Nächste Woche wird es wahrscheinlich kühler.", en: "Next week will probably be cooler. (comparative + probably)", ja: "らいしゅうは たぶん すずしく なるでしょう。（ひかくきゅう + たぶん）", zh: "下周可能会更凉爽。（比较级 + 可能）" } }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-wetter-komparativ",
        title: { de: "Übung: Wetter vergleichen", en: "Practice: Comparing Weather", ja: "れんしゅう：てんきを くらべる", zh: "练习：比较天气" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze zum Wettervergleich.",
          en: "Next, let's practice example sentences comparing weather.",
          ja: "つぎは、てんきを くらべる れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习比较天气的例句。"
        },
        lines: [
          { id: "wk1", translations: { de: "Sapporo ist kälter als Tokio.", en: "Sapporo is colder than Tokyo.", ja: "さっぽろは とうきょうより さむいです。", zh: "札幌比东京冷。" } },
          { id: "wk2", translations: { de: "Sapporos Sommer ist kühler als der von Tokio.", en: "Sapporo's summer is cooler than Tokyo's.", ja: "さっぽろの なつは とうきょうより すずしいです。", zh: "札幌的夏天比东京凉爽。" } },
          { id: "wk3", translations: { de: "Tokio hat eine höhere Luftfeuchtigkeit.", en: "Tokyo has higher humidity.", ja: "とうきょうのほうが しつどが たかいです。", zh: "东京的湿度更高。" } },
          { id: "wk4", translations: { de: "Der Frühling ist die schönste Jahreszeit.", en: "Spring is the most beautiful season.", ja: "はるが いちばん きれいな きせつです。", zh: "春天是最美的季节。" } },
          { id: "wk5", translations: { de: "Sapporo ist eine der schneereichsten Städte Japans.", en: "Sapporo is one of the snowiest cities in Japan.", ja: "さっぽろは にほんで いちばん ゆきが おおい まちの ひとつです。", zh: "札幌是日本雪最多的城市之一。" } },
          { id: "wk6", translations: { de: "Der Winter ist die kälteste Jahreszeit.", en: "Winter is the coldest season.", ja: "ふゆが いちばん さむい きせつです。", zh: "冬天是最冷的季节。" } },
          { id: "wk7", translations: { de: "Heute ist es wärmer als gestern.", en: "Today is warmer than yesterday.", ja: "きょうは きのうより あたたかいです。", zh: "今天比昨天暖和。" } },
          { id: "wk8", translations: { de: "Dieser Taifun ist stärker als der letzte.", en: "This typhoon is stronger than the last one.", ja: "この たいふうは まえのより つよいです。", zh: "这次台风比上次更强。" } },
          { id: "wk9", translations: { de: "Der Herbst ist nicht so heiß wie der Sommer.", en: "Autumn isn't as hot as summer.", ja: "あきは なつほど あつくないです。", zh: "秋天没有夏天热。" } },
          { id: "wk10", translations: { de: "Morgen wird es wahrscheinlich windiger.", en: "It will probably be windier tomorrow.", ja: "あしたは たぶん かぜが つよく なるでしょう。", zh: "明天可能风会更大。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        pitch: { ja: "アクセント（ふくしゅう、あたらしい ペア）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)", zh: "声调重音（巩固，新词对）" },
        vowel_length: { ja: "ぼいんの ながさ（ふくしゅう）", en: "Vowel length (reinforced)", de: "Vokallänge (vertieft)", zh: "元音长度（巩固）" }
      },
      items: [
        { id: "p1", category: "pitch", translations: { ja: "あめ", en: "rain (HL) / candy (LH) — review", de: "Regen (HL) / Süßigkeit (LH) — Wiederholung", zh: "雨（高低）／糖果（低高）——复习" } },
        { id: "p2", category: "pitch", translations: { ja: "くも", en: "cloud (LH) / spider (HL) — review", de: "Wolke (LH) / Spinne (HL) — Wiederholung", zh: "云（低高）／蜘蛛（高低）——复习" } },
        { id: "p3", category: "pitch", translations: { ja: "かぜ", en: "wind (LHL) — new word, single pattern", de: "Wind (LHL) — neues Wort, einzelnes Muster", zh: "风（低高低）——新词，单一声调" } },
        { id: "p4", category: "pitch", translations: { ja: "にじ", en: "rainbow (LH) — new word, single pattern", de: "Regenbogen (LH) — neues Wort, einzelnes Muster", zh: "彩虹（低高）——新词，单一声调" } },
        { id: "vl1", category: "vowel_length", translations: { ja: "たいふう", en: "typhoon (long う)", de: "Taifun (langes う)", zh: "台风（长音う）" } },
        { id: "vl2", category: "vowel_length", translations: { ja: "てんきよほう", en: "weather forecast (long う)", de: "Wettervorhersage (langes う)", zh: "天气预报（长音う）" } },
        { id: "vl3", category: "vowel_length", translations: { ja: "あつい", en: "hot (short vowels)", de: "heiß (kurze Vokale)", zh: "热的（短元音）" } },
        { id: "vl4", category: "vowel_length", translations: { ja: "さむい", en: "cold (short vowels)", de: "kalt (kurze Vokale)", zh: "冷的（短元音）" } }
      ]
    },
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        o_long: { de: "O — lang", en: "O — long", ja: "O — ながい", zh: "O——长音" },
        o_short: { de: "O — kurz", en: "O — short", ja: "O — みじかい", zh: "O——短音" }
      },
      items: [
        { id: "ol1", category: "o_long", translations: { de: "Brot", en: "bread", ja: "パン", zh: "面包" } },
        { id: "ol2", category: "o_long", translations: { de: "rot", en: "red", ja: "あかい", zh: "红色" } },
        { id: "ol3", category: "o_long", translations: { de: "groß", en: "big", ja: "おおきい", zh: "大的" } },
        { id: "os1", category: "o_short", translations: { de: "Sonne", en: "sun", ja: "たいよう", zh: "太阳" } },
        { id: "os2", category: "o_short", translations: { de: "Donner", en: "thunder", ja: "かみなり", zh: "雷" } },
        { id: "os3", category: "o_short", translations: { de: "Wolke", en: "cloud", ja: "くも", zh: "云" } }
      ]
    }
  },
  pronunciationDrills: {
    de: [
      {
        id: "sound-drill",
        title: {
          de: "Aussprachetraining 2",
          en: "Pronunciation Practice 2",
          ja: "はつおんの れんしゅう２",
          zh: "发音练习2"
        },
        spokenIntro: {
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          en: "Next, let's practice with a lot more examples.",
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          o_long1: { de: "O — lang", en: "O — long", ja: "O — ながい", zh: "O——长音" },
          o_short1: { de: "O — kurz", en: "O — short", ja: "O — みじかい", zh: "O——短音" },
          o_long2: { de: "O — lang", en: "O — long", ja: "O — ながい", zh: "O——长音" },
          o_short2: { de: "O — kurz", en: "O — short", ja: "O — みじかい", zh: "O——短音" }
        },
        pairedColumns: [["o_long1", "o_short1"], ["o_long2", "o_short2"]],
        items: [
          { id: "ol1_1", category: "o_long1", translations: { de: "Boot", en: "boat", ja: "ボート", zh: "小船" } },
          { id: "os1_1", category: "o_short1", translations: { de: "Sommer", en: "summer", ja: "なつ", zh: "夏天" } },
          { id: "ol1_2", category: "o_long1", translations: { de: "Ofen", en: "oven", ja: "オーブン", zh: "烤箱" } },
          { id: "os1_2", category: "o_short1", translations: { de: "Onkel", en: "uncle", ja: "おじ", zh: "叔叔" } },
          { id: "ol1_3", category: "o_long1", translations: { de: "Hose", en: "pants", ja: "ズボン", zh: "裤子" } },
          { id: "os1_3", category: "o_short1", translations: { de: "Kopf", en: "head", ja: "あたま", zh: "头" } },
          { id: "ol1_4", category: "o_long1", translations: { de: "Rose", en: "rose", ja: "バラ", zh: "玫瑰" } },
          { id: "os1_4", category: "o_short1", translations: { de: "Tochter", en: "daughter", ja: "むすめ", zh: "女儿" } },
          { id: "ol1_5", category: "o_long1", translations: { de: "Lohn", en: "wage", ja: "きゅうりょう", zh: "工资" } },
          { id: "os1_5", category: "o_short1", translations: { de: "Bock", en: "buck (goat)", ja: "おすやぎ", zh: "公羊" } },
          { id: "ol1_6", category: "o_long1", translations: { de: "schon", en: "already", ja: "もう", zh: "已经" } },
          { id: "os1_6", category: "o_short1", translations: { de: "Rock", en: "skirt", ja: "スカート", zh: "裙子" } },
          { id: "ol1_7", category: "o_long1", translations: { de: "Mond", en: "moon", ja: "つき", zh: "月亮" } },
          { id: "os1_7", category: "o_short1", translations: { de: "doch", en: "however, yes (contradicting)", ja: "しかし、いや", zh: "然而，是的（反驳）" } },
          { id: "ol1_8", category: "o_long1", translations: { de: "Ton", en: "tone, clay", ja: "おと、ねんど", zh: "音调，粘土" } },
          { id: "os1_8", category: "o_short1", translations: { de: "Loch", en: "hole", ja: "あな", zh: "洞" } },
          { id: "ol1_9", category: "o_long1", translations: { de: "Kohle", en: "coal", ja: "せきたん", zh: "煤炭" } },
          { id: "os1_9", category: "o_short1", translations: { de: "Koch", en: "cook (person)", ja: "コック", zh: "厨师" } },
          { id: "ol1_10", category: "o_long1", translations: { de: "Boden", en: "ground, floor", ja: "じめん、ゆか", zh: "地面，地板" } },
          { id: "os1_10", category: "o_short1", translations: { de: "Post", en: "mail, post office", ja: "ゆうびん", zh: "邮件，邮局" } },
          { id: "ol1_11", category: "o_long1", translations: { de: "Sohn", en: "son", ja: "むすこ", zh: "儿子" } },
          { id: "os1_11", category: "o_short1", translations: { de: "Storch", en: "stork", ja: "こうのとり", zh: "鹳" } },
          { id: "ol1_12", category: "o_long1", translations: { de: "ohne", en: "without", ja: "〜なしで", zh: "没有" } },
          { id: "os1_12", category: "o_short1", translations: { de: "Wolf", en: "wolf", ja: "おおかみ", zh: "狼" } },
          { id: "ol1_13", category: "o_long1", translations: { de: "Krone", en: "crown", ja: "おうかん", zh: "皇冠" } },
          { id: "os1_13", category: "o_short1", translations: { de: "Golf", en: "golf", ja: "ゴルフ", zh: "高尔夫" } },
          { id: "ol1_14", category: "o_long1", translations: { de: "Note", en: "grade, note", ja: "せいせき、メモ", zh: "成绩，笔记" } },
          { id: "os1_14", category: "o_short1", translations: { de: "Motte", en: "moth", ja: "が", zh: "蛾" } },

          { id: "ol2_1", category: "o_long2", translations: { de: "Dose", en: "can (container)", ja: "かん", zh: "罐头" } },
          { id: "os2_1", category: "o_short2", translations: { de: "Otter", en: "otter", ja: "かわうそ", zh: "水獭" } },
          { id: "ol2_2", category: "o_long2", translations: { de: "Vogel", en: "bird", ja: "とり", zh: "鸟" } },
          { id: "os2_2", category: "o_short2", translations: { de: "Roller", en: "scooter", ja: "スクーター", zh: "滑板车" } },
          { id: "ol2_3", category: "o_long2", translations: { de: "oben", en: "above", ja: "うえに", zh: "上面" } },
          { id: "os2_3", category: "o_short2", translations: { de: "Schloss", en: "castle, lock", ja: "しろ、じょうまえ", zh: "城堡，锁" } },
          { id: "ol2_4", category: "o_long2", translations: { de: "Lob", en: "praise", ja: "ほめること", zh: "表扬" } },
          { id: "os2_4", category: "o_short2", translations: { de: "Trott", en: "trot, routine", ja: "はやあし、まんねん", zh: "小跑，例行公事" } },
          { id: "ol2_5", category: "o_long2", translations: { de: "Hof", en: "yard, courtyard", ja: "にわ", zh: "院子" } },
          { id: "os2_5", category: "o_short2", translations: { de: "Zoll", en: "customs, inch", ja: "ぜいかん、インチ", zh: "海关，英寸" } },
          { id: "ol2_6", category: "o_long2", translations: { de: "Zoo", en: "zoo", ja: "どうぶつえん", zh: "动物园" } },
          { id: "os2_6", category: "o_short2", translations: { de: "Moped", en: "moped", ja: "モペット", zh: "小型摩托车" } },
          { id: "ol2_7", category: "o_long2", translations: { de: "froh", en: "happy", ja: "うれしい", zh: "高兴" } },
          { id: "os2_7", category: "o_short2", translations: { de: "Trommel", en: "drum", ja: "たいこ", zh: "鼓" } },
          { id: "ol2_8", category: "o_long2", translations: { de: "Los", en: "lottery ticket, fate", ja: "くじ、うんめい", zh: "彩票，命运" } },
          { id: "os2_8", category: "o_short2", translations: { de: "Bonbon", en: "candy", ja: "あめ", zh: "糖果" } },
          { id: "ol2_9", category: "o_long2", translations: { de: "Kloster", en: "monastery", ja: "しゅうどういん", zh: "修道院" } },
          { id: "os2_9", category: "o_short2", translations: { de: "Konto", en: "account", ja: "こうざ", zh: "账户" } },
          { id: "ol2_10", category: "o_long2", translations: { de: "Motor", en: "engine, motor", ja: "エンジン", zh: "发动机" } },
          { id: "os2_10", category: "o_short2", translations: { de: "Koffer", en: "suitcase", ja: "スーツケース", zh: "行李箱" } },
          { id: "ol2_11", category: "o_long2", translations: { de: "Foto", en: "photo", ja: "しゃしん", zh: "照片" } },
          { id: "os2_11", category: "o_short2", translations: { de: "Trotz", en: "defiance", ja: "はんこう", zh: "反抗" } },
          { id: "ol2_12", category: "o_long2", translations: { de: "Ozean", en: "ocean", ja: "かいよう", zh: "海洋" } },
          { id: "os2_12", category: "o_short2", translations: { de: "Roggen", en: "rye", ja: "ライむぎ", zh: "黑麦" } },
          { id: "ol2_13", category: "o_long2", translations: { de: "Rogen", en: "fish roe", ja: "さかなのたまご", zh: "鱼卵" } },
          { id: "os2_13", category: "o_short2", translations: { de: "Trog", en: "trough", ja: "かいばおけ", zh: "食槽" } },
          { id: "ol2_14", category: "o_long2", translations: { de: "Zone", en: "zone", ja: "ちいき", zh: "区域" } },
          { id: "os2_14", category: "o_short2", translations: { de: "Zopf", en: "braid", ja: "おさげ", zh: "辫子" } }
        ]
      }
    ]
  },
  song: {
    // Per docs/a1-master-lesson-table-v05.md's assignment for row 19:
    // reuses row 3's song exactly, not an original composition.
    title: { ja: "アルエット", en: "Alouette", de: "Alouette", zh: "云雀之歌" },
    lines: [
      { id: "sg1", translations: { ja: "アルエット、やさしい アルエットよ", en: "Alouette, gentle Alouette", de: "Alouette, liebe Alouette", zh: "云雀啊，可爱的云雀啊" } },
      { id: "sg2", translations: { ja: "アルエット、はねを むしってしまうよ", en: "Alouette, I shall pluck your feathers", de: "Alouette, ich werde dich rupfen", zh: "云雀啊，我要拔掉你的羽毛" } },
      { id: "sg3", translations: { ja: "あたまの はねを むしるよ", en: "I shall pluck the feathers from your head", de: "Ich rupfe die Federn von deinem Kopf", zh: "我要拔掉你头上的羽毛" } },
      { id: "sg4", translations: { ja: "あたまを、あたまを", en: "From your head, from your head", de: "Von deinem Kopf, von deinem Kopf", zh: "从你的头上，从你的头上" } },
      { id: "sg5", translations: { ja: "アルエット、アルエット、ああ！", en: "Alouette, Alouette, oh!", de: "Alouette, Alouette, oh!", zh: "云雀啊，云雀啊，哦！" } }
    ]
  }
};
