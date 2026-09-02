import type { TopicLesson } from "../topicTypes";

// A2 — row 7 of docs/a2-master-lesson-table-v01.md. Grammar: ~shi~shi
// (listing reasons/qualities). Pronunciation 1/2 (B vs P, D vs T) kept
// exactly as assigned.

export const topicSeasons: TopicLesson = {
  id: "topic-27-seasons",
  lessonNumber: 27,
  level: "A2",
  topicName: {
    ja: "きせつ", jaKanji: "季節",
    en: "Seasons",
    de: "Jahreszeiten",
    zh: "季节"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "はる", jaKanji: "春", en: "spring", de: "Frühling", zh: "春天" } },
    { id: "v02", category: "noun", translations: { ja: "なつ", jaKanji: "夏", en: "summer", de: "Sommer", zh: "夏天" } },
    { id: "v03", category: "noun", translations: { ja: "あき", jaKanji: "秋", en: "autumn, fall", de: "Herbst", zh: "秋天" } },
    { id: "v04", category: "noun", translations: { ja: "ふゆ", jaKanji: "冬", en: "winter", de: "Winter", zh: "冬天" } },
    { id: "v05", category: "noun", translations: { ja: "さくら", jaKanji: "桜", en: "cherry blossom", de: "Kirschblüte", zh: "樱花" } },
    { id: "v06", category: "noun", translations: { ja: "もみじ", jaKanji: "紅葉", en: "autumn leaves", de: "Herbstlaub", zh: "红叶" } },
    { id: "v07", category: "noun", translations: { ja: "ゆき", jaKanji: "雪", en: "snow", de: "Schnee", zh: "雪" } },
    { id: "v08", category: "noun", translations: { ja: "はなび", jaKanji: "花火", en: "fireworks", de: "Feuerwerk", zh: "烟花" } },
    { id: "v09", category: "noun", translations: { ja: "きせつ", jaKanji: "季節", en: "season", de: "Jahreszeit", zh: "季节" } },
    { id: "v10", category: "noun", translations: { ja: "きおん", jaKanji: "気温", en: "temperature", de: "Temperatur", zh: "气温" } },
    { id: "v11", category: "adjective", translations: { ja: "あたたかい", jaKanji: "暖かい", en: "warm", de: "warm", zh: "温暖的" } },
    { id: "v12", category: "adjective", translations: { ja: "むしあつい", jaKanji: "蒸し暑い", en: "hot and humid", de: "schwül", zh: "闷热的" } },
    { id: "v13", category: "adjective", translations: { ja: "すずしい", jaKanji: "涼しい", en: "cool", de: "kühl", zh: "凉爽的" } },
    { id: "v14", category: "adjective", translations: { ja: "さむい", jaKanji: "寒い", en: "cold", de: "kalt", zh: "冷的" } },
    { id: "v15", category: "adjective", translations: { ja: "すごしやすい", jaKanji: "過ごしやすい", en: "comfortable (to live/spend time in)", de: "angenehm (zum Leben)", zh: "宜居的" } },
    { id: "v16", category: "verb", translations: { ja: "はなみをする", jaKanji: "花見をする", en: "to view cherry blossoms", de: "Kirschblüten betrachten", zh: "赏花" } },
    { id: "v17", category: "verb", translations: { ja: "およぐ", jaKanji: "泳ぐ", en: "to swim", de: "schwimmen", zh: "游泳" } },
    { id: "v18", category: "verb", translations: { ja: "スキーをする", en: "to ski", de: "Ski fahren", zh: "滑雪" } },
    { id: "v19", category: "verb", translations: { ja: "もみじがりをする", jaKanji: "紅葉狩りをする", en: "to view autumn leaves", de: "Herbstlaub betrachten", zh: "赏红叶" } },
    { id: "v20", category: "verb", translations: { ja: "せんぷうきを つける", jaKanji: "扇風機をつける", en: "to turn on a fan", de: "einen Ventilator anschalten", zh: "开风扇" } },
    { id: "v21", category: "verb", translations: { ja: "だんぼうを つける", jaKanji: "暖房をつける", en: "to turn on the heater", de: "die Heizung anschalten", zh: "开暖气" } },
    { id: "v22", category: "verb", translations: { ja: "れいぼうを つける", jaKanji: "冷房をつける", en: "to turn on the air conditioner", de: "die Klimaanlage anschalten", zh: "开空调" } },
    { id: "v23", category: "verb", translations: { ja: "きせつが かわる", jaKanji: "季節が変わる", en: "the season changes", de: "die Jahreszeit wechselt", zh: "季节变化" } },
    { id: "v24", category: "verb", translations: { ja: "かぜを ひく", jaKanji: "風邪を引く", en: "to catch a cold", de: "sich erkälten", zh: "感冒" } },
    { id: "v25", category: "noun", translations: { ja: "たいふう", jaKanji: "台風", en: "typhoon", de: "Taifun", zh: "台风" } },
    { id: "v26", category: "noun", translations: { ja: "つゆ", jaKanji: "梅雨", en: "rainy season", de: "Regenzeit", zh: "梅雨季" } },
    { id: "v27", category: "noun", translations: { ja: "とくちょう", jaKanji: "特徴", en: "characteristic, feature", de: "Merkmal", zh: "特点" } },
    { id: "v28", category: "adjective", translations: { ja: "すきな", jaKanji: "好きな", en: "favorite, liked", de: "beliebt, mögen", zh: "喜欢的" } },
    { id: "v29", category: "noun", translations: { ja: "しぜん", jaKanji: "自然", en: "nature", de: "Natur", zh: "自然" } },
    { id: "v30", category: "noun", translations: { ja: "けしき", jaKanji: "景色", en: "scenery", de: "Landschaft", zh: "风景" } },
    { id: "v31", category: "adverb", translations: { ja: "だんだん", en: "gradually", de: "allmählich", zh: "逐渐" } },
    { id: "v32", category: "adverb", translations: { ja: "もうすぐ", en: "soon", de: "bald", zh: "快要" } }
  ],
  dialogueA: {
    title: { ja: "すきな きせつに ついて はなす", jaKanji: "好きな季節について話す", en: "Explaining Why You Like a Season", de: "Warum man eine Jahreszeit mag", zh: "说说为什么喜欢一个季节" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どの きせつが いちばん すきですか？", jaKanji: "どの季節が一番好きですか？", en: "Which season do you like the most?", de: "Welche Jahreszeit mögen Sie am meisten?", zh: "你最喜欢哪个季节？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はるが すきです。さくらも きれいだし、あたたかいし。", jaKanji: "春が好きです。桜もきれいだし、暖かいし。", en: "I like spring. The cherry blossoms are beautiful, and it's warm.", de: "Ich mag den Frühling. Die Kirschblüten sind schön, und es ist warm.", zh: "我喜欢春天。樱花漂亮，而且天气暖和。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "わたしは なつが すきです。うみで およげるし、はなびも あるし。", jaKanji: "私は夏が好きです。海で泳げるし、花火もあるし。", en: "I like summer. I can swim in the sea, and there are fireworks too.", de: "Ich mag den Sommer. Man kann im Meer schwimmen, und es gibt Feuerwerk.", zh: "我喜欢夏天。可以在海里游泳，还有烟花。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でも なつは むしあついですよね。", jaKanji: "でも夏は蒸し暑いですよね。", en: "But summer is hot and humid, isn't it.", de: "Aber der Sommer ist schwül, oder?", zh: "不过夏天很闷热吧。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "そうですね。れいぼうを つけるし、みずも たくさん のみます。", jaKanji: "そうですね。冷房をつけるし、水もたくさん飲みます。", en: "That's true. I turn on the air conditioner and drink a lot of water too.", de: "Stimmt. Ich schalte die Klimaanlage an und trinke auch viel Wasser.", zh: "是啊。会开空调，也会多喝水。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "あきは どうですか？", jaKanji: "秋はどうですか？", en: "How about autumn?", de: "Wie ist es mit dem Herbst?", zh: "秋天怎么样？" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "あきは すずしいし、もみじも きれいだし、すごしやすいです。", jaKanji: "秋は涼しいし、紅葉もきれいだし、過ごしやすいです。", en: "Autumn is cool, the autumn leaves are beautiful, and it's comfortable.", de: "Der Herbst ist kühl, das Herbstlaub ist schön, und es ist angenehm.", zh: "秋天凉爽，红叶也很漂亮，很宜居。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ふゆは すきじゃないんですか？", jaKanji: "冬は好きじゃないんですか？", en: "You don't like winter?", de: "Mögen Sie den Winter nicht?", zh: "你不喜欢冬天吗？" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ふゆは さむいし、かぜを ひきやすいし、あまり すきじゃないです。", jaKanji: "冬は寒いし、風邪を引きやすいし、あまり好きじゃないです。", en: "Winter is cold, and I easily catch colds, so I don't like it much.", de: "Der Winter ist kalt, und ich erkälte mich leicht, also mag ich ihn nicht so sehr.", zh: "冬天冷，而且容易感冒，我不太喜欢。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でも ゆきは きれいですよ。スキーも できるし。", jaKanji: "でも雪はきれいですよ。スキーもできるし。", en: "But the snow is pretty. You can ski too.", de: "Aber der Schnee ist schön. Man kann auch Ski fahren.", zh: "不过雪很漂亮呢。也能滑雪。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "それは そうですね。だんぼうを つければ、へやは あたたかいし。", jaKanji: "それはそうですね。暖房をつければ、部屋は暖かいし。", en: "That's true. If I turn on the heater, the room is warm too.", de: "Das stimmt. Wenn ich die Heizung anschalte, ist das Zimmer auch warm.", zh: "说得也是。开了暖气，房间也会暖和。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "けっきょく、どの きせつにも いいところが ありますね。", jaKanji: "結局、どの季節にもいいところがありますね。", en: "In the end, every season has its good points.", de: "Letztendlich hat jede Jahreszeit ihre guten Seiten.", zh: "说到底，每个季节都有好的地方呢。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ほんとうに そうですね。きせつが かわるのは たのしいです。", jaKanji: "本当にそうですね。季節が変わるのは楽しいです。", en: "Truly so. It's fun that the seasons change.", de: "Wirklich wahr. Es macht Spaß, dass sich die Jahreszeiten ändern.", zh: "真的是这样。季节变化很有意思。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つぎの はなみ、いっしょに いきましょう！", jaKanji: "次のお花見、一緒に行きましょう！", en: "Let's go to the next cherry blossom viewing together!", de: "Lass uns beim nächsten Kirschblütenschauen zusammen hingehen!", zh: "下次一起去赏花吧！" } }
    ]
  },
  dialogueB: {
    title: { ja: "きせつごとの アクティビティを くらべる", jaKanji: "季節ごとのアクティビティを比べる", en: "Comparing Seasonal Activities", de: "Saisonale Aktivitäten vergleichen", zh: "比较各季节的活动" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "なつと ふゆ、どちらが すきですか？", jaKanji: "夏と冬、どちらが好きですか？", en: "Which do you like, summer or winter?", de: "Was mögen Sie mehr, Sommer oder Winter?", zh: "夏天和冬天，你更喜欢哪个？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "なつのほうが すきです。うみで およげるし、りょこうも しやすいし。", jaKanji: "夏のほうが好きです。海で泳げるし、旅行もしやすいし。", en: "I like summer more. I can swim in the sea, and it's easy to travel too.", de: "Ich mag den Sommer mehr. Man kann im Meer schwimmen, und man kann auch leicht reisen.", zh: "我更喜欢夏天。可以在海里游泳，也方便旅行。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ふゆは アクティビティが すくないですか？", jaKanji: "冬はアクティビティが少ないですか？", en: "Are there fewer activities in winter?", de: "Gibt es im Winter weniger Aktivitäten?", zh: "冬天的活动比较少吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、スキーも できるし、おんせんも たのしめます。", jaKanji: "いいえ、スキーもできるし、温泉も楽しめます。", en: "No, you can ski, and you can also enjoy hot springs.", de: "Nein, man kann Ski fahren, und man kann auch heiße Quellen genießen.", zh: "不，可以滑雪，还能享受温泉。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はると あき、どちらが すごしやすいですか？", jaKanji: "春と秋、どちらが過ごしやすいですか？", en: "Which is more comfortable, spring or autumn?", de: "Was ist angenehmer, Frühling oder Herbst?", zh: "春天和秋天，哪个更宜居？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "どちらも すごしやすいですが、あきのほうが すずしいし、たべものも おいしいです。", jaKanji: "どちらも過ごしやすいですが、秋のほうが涼しいし、食べ物もおいしいです。", en: "Both are comfortable, but autumn is cooler, and the food is delicious too.", de: "Beide sind angenehm, aber der Herbst ist kühler, und das Essen ist auch lecker.", zh: "两者都很宜居，不过秋天更凉爽，食物也很好吃。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "つゆの きせつは どうですか？", jaKanji: "梅雨の季節はどうですか？", en: "How about the rainy season?", de: "Wie ist die Regenzeit?", zh: "梅雨季怎么样？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "つゆは あめが おおいし、しつども たかいし、あまり すきじゃないです。", jaKanji: "梅雨は雨が多いし、湿度も高いし、あまり好きじゃないです。", en: "The rainy season has a lot of rain, and the humidity is high too, so I don't like it much.", de: "Die Regenzeit hat viel Regen, und die Luftfeuchtigkeit ist auch hoch, also mag ich sie nicht so sehr.", zh: "梅雨季雨多，湿度也高，我不太喜欢。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たいふうの きせつも たいへんですね。", jaKanji: "台風の季節も大変ですね。", en: "The typhoon season is also tough, isn't it.", de: "Die Taifunsaison ist auch anstrengend, oder?", zh: "台风季也很辛苦吧。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうですね。かぜも つよいし、でんしゃも とまることが あります。", jaKanji: "そうですね。風も強いし、電車も止まることがあります。", en: "That's right. The wind is strong, and trains sometimes stop too.", de: "Stimmt. Der Wind ist stark, und manchmal fallen auch Züge aus.", zh: "是的。风很大，电车有时也会停运。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けっきょく、どの きせつが いちばん すきですか？", jaKanji: "結局、どの季節が一番好きですか？", en: "In the end, which season do you like the most?", de: "Letztendlich, welche Jahreszeit mögen Sie am meisten?", zh: "说到底，你最喜欢哪个季节？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "やっぱり あきが いちばん すきです。けしきも きれいだし、たべものも おいしいし。", jaKanji: "やっぱり秋が一番好きです。景色もきれいだし、食べ物もおいしいし。", en: "Autumn is my favorite after all. The scenery is beautiful, and the food is delicious.", de: "Der Herbst ist doch meine liebste Jahreszeit. Die Landschaft ist schön, und das Essen ist lecker.", zh: "果然还是最喜欢秋天。风景漂亮，食物也好吃。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしも あきの しぜんが だいすきです。", jaKanji: "私も秋の自然が大好きです。", en: "I also really love nature in autumn.", de: "Ich liebe auch die Natur im Herbst sehr.", zh: "我也非常喜欢秋天的自然风光。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "こんど いっしょに もみじがりに いきましょう。", jaKanji: "今度一緒に紅葉狩りに行きましょう。", en: "Let's go autumn-leaf viewing together next time.", de: "Lass uns das nächste Mal zusammen Herbstlaub anschauen gehen.", zh: "下次一起去赏红叶吧。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜し〜し：りゆうや とくちょうを あげる", jaKanji: "〜し〜し：理由や特徴を挙げる", en: "~Shi~Shi: Listing Reasons or Qualities", de: "~Shi~Shi: Gründe oder Eigenschaften aufzählen", zh: "〜し〜し：列举理由或特点" },
      explanation: {
        ja: "いくつかの りゆうや とくちょうを ならべて いうときは、ふつうけいの ぶんに「し」を つけます。「あたたかいし、さくらも きれいだし」（あたたかい こと も さくらが きれい な こと も りゆう）。さいごは「〜です／ます」で しめても いいです。ふたつ いじょうの りゆうを つよく つたえる ときに つかいます。", jaKanji: "いくつかの理由や特徴を並べて言うときは、普通形の文に「し」を付けます。「暖かいし、桜もきれいだし」（暖かいことも桜がきれいなことも理由）。最後は「〜です／ます」で締めてもいいです。二つ以上の理由を強く伝えるときに使います。",
        en: "To list several reasons or qualities, attach し to plain-form clauses. \"あたたかいし、さくらも きれいだし\" (it's warm, and also the cherry blossoms are pretty — both are reasons). You can close the sentence with です／ます. Used to emphasize that there are two or more reasons.",
        de: "Um mehrere Gründe oder Eigenschaften aufzuzählen, wird し an Sätze in der Plain-Form angehängt. \"あたたかいし、さくらも きれいだし\" (es ist warm, und außerdem sind die Kirschblüten schön — beides sind Gründe). Man kann den Satz mit です／ます abschließen. Wird verwendet, um zu betonen, dass es zwei oder mehr Gründe gibt.",
        zh: "要列举几个理由或特点，在简体句后加し。「あたたかいし、さくらも きれいだし」（暖和，而且樱花也漂亮——两者都是理由）。句末可以用です／ます结束。用于强调有两个以上的理由。"
      },
      chunks: [
        { id: "g1", translations: { ja: "はるは あたたかいし、さくらも きれいです。", jaKanji: "春は暖かいし、桜もきれいです。", en: "Spring is warm, and the cherry blossoms are pretty too.", de: "Der Frühling ist warm, und die Kirschblüten sind auch schön.", zh: "春天暖和，樱花也漂亮。" } },
        { id: "g2", translations: { ja: "なつは うみで およげるし、はなびも あります。", jaKanji: "夏は海で泳げるし、花火もあります。", en: "In summer you can swim in the sea, and there are fireworks too.", de: "Im Sommer kann man im Meer schwimmen, und es gibt auch Feuerwerk.", zh: "夏天可以在海里游泳，还有烟花。" } },
        { id: "g3", translations: { ja: "あきは すずしいし、たべものも おいしいです。", jaKanji: "秋は涼しいし、食べ物もおいしいです。", en: "Autumn is cool, and the food is delicious too.", de: "Der Herbst ist kühl, und das Essen ist auch lecker.", zh: "秋天凉爽，食物也好吃。" } },
        { id: "g4", translations: { ja: "ふゆは さむいし、かぜも つよいです。", jaKanji: "冬は寒いし、風も強いです。", en: "Winter is cold, and the wind is strong too.", de: "Der Winter ist kalt, und der Wind ist auch stark.", zh: "冬天冷，风也大。" } },
        { id: "g5", translations: { ja: "この まちは しずかだし、しぜんも ゆたかです。", jaKanji: "この町は静かだし、自然も豊かです。", en: "This town is quiet, and nature is abundant too.", de: "Diese Stadt ist ruhig, und die Natur ist auch reichhaltig.", zh: "这个小镇安静，自然也很丰富。" } },
        { id: "g6", translations: { ja: "きょうは じかんも あるし、てんきも いいから、でかけましょう。", jaKanji: "今日は時間もあるし、天気もいいから、出かけましょう。", en: "Today I have time and the weather is nice, so let's go out.", de: "Heute habe ich Zeit und das Wetter ist gut, also lass uns rausgehen.", zh: "今天有时间，天气也好，我们出去玩吧。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        b: { ja: "B", en: "B", de: "B", zh: "B" },
        p: { ja: "P", en: "P", de: "P", zh: "P" },
        d: { ja: "D", en: "D", de: "D", zh: "D" },
        t: { ja: "T", en: "T", de: "T", zh: "T" }
      },
      items: [
        { id: "b1", category: "b", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
        { id: "b2", category: "b", translations: { ja: "べんきょう", en: "study", de: "Lernen", zh: "学习" } },
        { id: "b3", category: "b", translations: { ja: "ばしょ", en: "place", de: "Ort", zh: "地方" } },
        { id: "b4", category: "b", translations: { ja: "ぶんか", en: "culture", de: "Kultur", zh: "文化" } },
        { id: "p1", category: "p", translations: { ja: "ぴあの", en: "piano", de: "Klavier", zh: "钢琴" } },
        { id: "p2", category: "p", translations: { ja: "ぱん", en: "bread", de: "Brot", zh: "面包" } },
        { id: "p3", category: "p", translations: { ja: "ぷうる", en: "pool", de: "Schwimmbad", zh: "游泳池" } },
        { id: "p4", category: "p", translations: { ja: "ぺん", en: "pen", de: "Stift", zh: "笔" } },
        { id: "d1", category: "d", translations: { ja: "だいがく", en: "university", de: "Universität", zh: "大学" } },
        { id: "d2", category: "d", translations: { ja: "でんき", en: "electricity, light", de: "Elektrizität, Licht", zh: "电，电灯" } },
        { id: "d3", category: "d", translations: { ja: "どうぶつ", en: "animal", de: "Tier", zh: "动物" } },
        { id: "d4", category: "d", translations: { ja: "どようび", en: "Saturday", de: "Samstag", zh: "星期六" } },
        { id: "t1", category: "t", translations: { ja: "たいふう", en: "typhoon", de: "Taifun", zh: "台风" } },
        { id: "t2", category: "t", translations: { ja: "てがみ", en: "letter", de: "Brief", zh: "信" } },
        { id: "t3", category: "t", translations: { ja: "とけい", en: "clock", de: "Uhr", zh: "钟表" } },
        { id: "t4", category: "t", translations: { ja: "つき", en: "moon", de: "Mond", zh: "月亮" } }
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
          d: { ja: "D", en: "D", de: "D", zh: "D" },
          t: { ja: "T", en: "T", de: "T", zh: "T" }
        },
        items: [
          { id: "b5", category: "b", translations: { ja: "ばあい", en: "case, situation", de: "Fall, Situation", zh: "情况" } },
          { id: "b6", category: "b", translations: { ja: "びじゅつ", en: "art", de: "Kunst", zh: "美术" } },
          { id: "b7", category: "b", translations: { ja: "ぶどう", en: "grapes", de: "Trauben", zh: "葡萄" } },
          { id: "b8", category: "b", translations: { ja: "べつの", en: "different, another", de: "anderer", zh: "另外的" } },
          { id: "b9", category: "b", translations: { ja: "ぼうし", en: "hat", de: "Hut", zh: "帽子" } },
          { id: "b10", category: "b", translations: { ja: "ばんごう", en: "number", de: "Nummer", zh: "号码" } },
          { id: "b11", category: "b", translations: { ja: "びょうき", en: "illness", de: "Krankheit", zh: "疾病" } },
          { id: "b12", category: "b", translations: { ja: "ぶひん", en: "part, component", de: "Bauteil", zh: "部件" } },
          { id: "b13", category: "b", translations: { ja: "べんり", en: "convenient", de: "praktisch", zh: "方便" } },
          { id: "b14", category: "b", translations: { ja: "ぼうえき", en: "trade", de: "Handel", zh: "贸易" } },
          { id: "b15", category: "b", translations: { ja: "ばい", en: "double, times", de: "Mal", zh: "倍" } },
          { id: "b16", category: "b", translations: { ja: "びじん", en: "beautiful person", de: "schöne Person", zh: "美人" } },
          { id: "b17", category: "b", translations: { ja: "ぶんしょう", en: "sentence, writing", de: "Satz, Text", zh: "文章" } },
          { id: "b18", category: "b", translations: { ja: "ぼうはん", en: "crime prevention", de: "Verbrechensverhütung", zh: "防范犯罪" } },

          { id: "p5", category: "p", translations: { ja: "ぱそこん", en: "personal computer", de: "PC", zh: "电脑" } },
          { id: "p6", category: "p", translations: { ja: "ぴかぴか", en: "shiny, sparkling", de: "glänzend", zh: "闪闪发光" } },
          { id: "p7", category: "p", translations: { ja: "ぷりん", en: "pudding", de: "Pudding", zh: "布丁" } },
          { id: "p8", category: "p", translations: { ja: "ぺらぺら", en: "fluent", de: "fließend", zh: "流利" } },
          { id: "p9", category: "p", translations: { ja: "ぽけっと", en: "pocket", de: "Tasche", zh: "口袋" } },
          { id: "p10", category: "p", translations: { ja: "たんぽぽ", en: "dandelion", de: "Löwenzahn", zh: "蒲公英" } },
          { id: "p11", category: "p", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔" } },
          { id: "p12", category: "p", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "p13", category: "p", translations: { ja: "はっぱ", en: "leaf", de: "Blatt", zh: "叶子" } },
          { id: "p14", category: "p", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "p15", category: "p", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "p16", category: "p", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
          { id: "p17", category: "p", translations: { ja: "きんぱつ", en: "blond hair", de: "blondes Haar", zh: "金发" } },
          { id: "p18", category: "p", translations: { ja: "せんぱい", en: "senior", de: "Senior", zh: "前辈" } },

          { id: "d5", category: "d", translations: { ja: "だんぼう", en: "heating", de: "Heizung", zh: "暖气" } },
          { id: "d6", category: "d", translations: { ja: "でんしゃ", en: "train", de: "Zug", zh: "电车" } },
          { id: "d7", category: "d", translations: { ja: "どりょく", en: "effort", de: "Anstrengung", zh: "努力" } },
          { id: "d8", category: "d", translations: { ja: "だんち", en: "housing complex", de: "Wohnsiedlung", zh: "住宅区" } },
          { id: "d9", category: "d", translations: { ja: "でぐち", en: "exit", de: "Ausgang", zh: "出口" } },
          { id: "d10", category: "d", translations: { ja: "どくしん", en: "single, unmarried", de: "ledig", zh: "单身" } },
          { id: "d11", category: "d", translations: { ja: "だいじな", en: "important", de: "wichtig", zh: "重要的" } },
          { id: "d12", category: "d", translations: { ja: "でんとう", en: "tradition", de: "Tradition", zh: "传统" } },
          { id: "d13", category: "d", translations: { ja: "どうろ", en: "road", de: "Straße", zh: "道路" } },
          { id: "d14", category: "d", translations: { ja: "だいどころ", en: "kitchen", de: "Küche", zh: "厨房" } },
          { id: "d15", category: "d", translations: { ja: "でぱーと", en: "department store", de: "Kaufhaus", zh: "百货商店" } },
          { id: "d16", category: "d", translations: { ja: "どだい", en: "foundation, basis", de: "Grundlage", zh: "基础" } },
          { id: "d17", category: "d", translations: { ja: "だんたい", en: "organization, group", de: "Organisation", zh: "团体" } },
          { id: "d18", category: "d", translations: { ja: "でんち", en: "battery", de: "Batterie", zh: "电池" } },

          { id: "t5", category: "t", translations: { ja: "たいせつな", en: "important, precious", de: "wichtig, kostbar", zh: "重要的" } },
          { id: "t6", category: "t", translations: { ja: "てんき", en: "weather", de: "Wetter", zh: "天气" } },
          { id: "t7", category: "t", translations: { ja: "とし", en: "year, age", de: "Jahr, Alter", zh: "年，年龄" } },
          { id: "t8", category: "t", translations: { ja: "たてもの", en: "building", de: "Gebäude", zh: "建筑物" } },
          { id: "t9", category: "t", translations: { ja: "てら", en: "temple", de: "Tempel", zh: "寺庙" } },
          { id: "t10", category: "t", translations: { ja: "とおい", en: "far", de: "weit", zh: "远的" } },
          { id: "t11", category: "t", translations: { ja: "たんじょうび", en: "birthday", de: "Geburtstag", zh: "生日" } },
          { id: "t12", category: "t", translations: { ja: "てつだう", en: "to help", de: "helfen", zh: "帮忙" } },
          { id: "t13", category: "t", translations: { ja: "とまる", en: "to stop", de: "anhalten", zh: "停止" } },
          { id: "t14", category: "t", translations: { ja: "たおれる", en: "to fall over", de: "umfallen", zh: "倒下" } },
          { id: "t15", category: "t", translations: { ja: "とどける", en: "to deliver", de: "liefern", zh: "送达" } },
          { id: "t16", category: "t", translations: { ja: "つよい", en: "strong", de: "stark", zh: "强壮的" } },
          { id: "t17", category: "t", translations: { ja: "たいふうけいろ", en: "typhoon path", de: "Taifunbahn", zh: "台风路径" } },
          { id: "t18", category: "t", translations: { ja: "とうきょう", en: "Tokyo", de: "Tokio", zh: "东京" } }
      ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-shishi",
        title: { ja: "れんしゅう：〜し〜し", en: "Practice: ~Shi~Shi", de: "Übung: ~Shi~Shi", zh: "练习：〜し〜し" },
        spokenIntro: {
          ja: "つぎは、「〜し〜し」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~shi~shi.",
          de: "Als Nächstes üben wir Beispielsätze mit ~shi~shi.",
          zh: "接下来，让我们练习使用「〜し〜し」的例句。"
        },
        lines: [
          { id: "sh1", translations: { ja: "はるは あたたかいし、さくらも きれいです。", jaKanji: "春は暖かいし、桜もきれいです。", en: "Spring is warm, and the cherry blossoms are pretty too.", de: "Der Frühling ist warm, und die Kirschblüten sind auch schön.", zh: "春天暖和，樱花也漂亮。" } },
          { id: "sh2", translations: { ja: "なつは うみで およげるし、はなびも あります。", jaKanji: "夏は海で泳げるし、花火もあります。", en: "In summer you can swim in the sea, and there are fireworks too.", de: "Im Sommer kann man im Meer schwimmen, und es gibt auch Feuerwerk.", zh: "夏天可以在海里游泳，还有烟花。" } },
          { id: "sh3", translations: { ja: "あきは すずしいし、もみじも きれいです。", jaKanji: "秋は涼しいし、紅葉もきれいです。", en: "Autumn is cool, and the autumn leaves are pretty too.", de: "Der Herbst ist kühl, und das Herbstlaub ist auch schön.", zh: "秋天凉爽，红叶也很漂亮。" } },
          { id: "sh4", translations: { ja: "ふゆは さむいし、かぜも つよいです。", jaKanji: "冬は寒いし、風も強いです。", en: "Winter is cold, and the wind is strong too.", de: "Der Winter ist kalt, und der Wind ist auch stark.", zh: "冬天冷，风也大。" } },
          { id: "sh5", translations: { ja: "この まちは しずかだし、しぜんも ゆたかです。", jaKanji: "この町は静かだし、自然も豊かです。", en: "This town is quiet, and nature is abundant too.", de: "Diese Stadt ist ruhig, und die Natur ist auch reichhaltig.", zh: "这个小镇安静，自然也很丰富。" } },
          { id: "sh6", translations: { ja: "きょうは じかんも あるし、てんきも いいです。", jaKanji: "今日は時間もあるし、天気もいいです。", en: "Today I have time, and the weather is nice too.", de: "Heute habe ich Zeit, und das Wetter ist auch gut.", zh: "今天有时间，天气也好。" } },
          { id: "sh7", translations: { ja: "この りょうりは やすいし、おいしいです。", jaKanji: "この料理は安いし、おいしいです。", en: "This dish is cheap, and it's delicious too.", de: "Dieses Gericht ist billig, und es schmeckt auch gut.", zh: "这道菜便宜又好吃。" } },
          { id: "sh8", translations: { ja: "かれは しんせつだし、あたまも いいです。", jaKanji: "彼は親切だし、頭もいいです。", en: "He is kind, and he's smart too.", de: "Er ist freundlich, und er ist auch klug.", zh: "他很亲切，也很聪明。" } },
          { id: "sh9", translations: { ja: "この ホテルは べんりだし、やすいです。", jaKanji: "このホテルは便利だし、安いです。", en: "This hotel is convenient, and it's cheap too.", de: "Dieses Hotel ist praktisch, und es ist auch günstig.", zh: "这家酒店方便又便宜。" } },
          { id: "sh10", translations: { ja: "この へやは ひろいし、あかるいです。", jaKanji: "この部屋は広いし、明るいです。", en: "This room is spacious, and it's bright too.", de: "Dieses Zimmer ist geräumig, und es ist auch hell.", zh: "这个房间宽敞又明亮。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "はると なつと あきと ふゆ", en: "Spring, Summer, Autumn, and Winter", de: "Frühling, Sommer, Herbst und Winter" },
    lines: [
      { id: "sg1", translations: { ja: "はるに なったら さくら さく", en: "When spring comes, the cherry blossoms bloom", de: "Wenn der Frühling kommt, blühen die Kirschblüten" } },
      { id: "sg2", translations: { ja: "なつに なったら うみへ いこう", en: "When summer comes, let's go to the sea", de: "Wenn der Sommer kommt, lass uns zum Meer gehen" } },
      { id: "sg3", translations: { ja: "あきに なったら もみじが きれい", en: "When autumn comes, the leaves are pretty", de: "Wenn der Herbst kommt, ist das Laub schön" } },
      { id: "sg4", translations: { ja: "ふゆに なったら ゆきが ふる", en: "When winter comes, the snow falls", de: "Wenn der Winter kommt, fällt der Schnee" } }
    ]
  }
};
