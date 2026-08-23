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
  id: "topic-19-weather",
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
    }
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
    }
  },
  song: {
    title: {
      ja: "てんきの うた",
      en: "The Weather Song",
      de: "Das Wetterlied",
      zh: "天气之歌"
    },
    lines: [
      { id: "sg1", translations: { ja: "てんき てんき どんな てんき", en: "Weather, weather, what's the weather", de: "Wetter, Wetter, wie ist das Wetter", zh: "天气，天气，是什么天气" } },
      { id: "sg2", translations: { ja: "きょうは はれ あしたは あめ", en: "Today is sunny, tomorrow is rain", de: "Heute ist es sonnig, morgen regnet es", zh: "今天晴天，明天下雨" } },
      { id: "sg3", translations: { ja: "はれ はれ たいようが でる", en: "Sunny, sunny, the sun comes out", de: "Sonnig, sonnig, die Sonne kommt heraus", zh: "晴天，晴天，太阳出来了" } },
      { id: "sg4", translations: { ja: "あめ あめ かさを さす", en: "Rain, rain, open your umbrella", de: "Regen, Regen, spann deinen Schirm auf", zh: "下雨，下雨，撑起雨伞" } },
      { id: "sg5", translations: { ja: "くもり くもり そらが グレー", en: "Cloudy, cloudy, the sky is grey", de: "Bewölkt, bewölkt, der Himmel ist grau", zh: "阴天，阴天，天空是灰色的" } },
      { id: "sg6", translations: { ja: "ゆき ゆき しろく なる", en: "Snow, snow, it turns white", de: "Schnee, Schnee, es wird weiß", zh: "下雪，下雪，变成白色" } },
      { id: "sg7", translations: { ja: "てんき てんき どんな てんき", en: "Weather, weather, what's the weather", de: "Wetter, Wetter, wie ist das Wetter", zh: "天气，天气，是什么天气" } },
      { id: "sg8", translations: { ja: "きせつが かわる たのしいね", en: "The seasons change, isn't it fun", de: "Die Jahreszeiten wechseln, ist das nicht schön", zh: "季节在变化，真有趣呢" } }
    ]
  }
};
