import type { TopicLesson } from "../topicTypes";

// A2 — row 15 of docs/a2-master-lesson-table-v01.md. Grammar: three
// integrated sub-points — ~nara (conditional topic marker), ~to ii
// (it would be good if), ~kamoshirenai (might/maybe). Pronunciation
// 1/2 (S vs Z, SH vs J) kept exactly as assigned.

export const topicRecommendations: TopicLesson = {
  id: "topic-32-recommendations",
  lessonNumber: 32,
  level: "A2",
  topicName: {
    ja: "おすすめ",
    en: "Recommendations",
    de: "Empfehlungen",
    zh: "推荐"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "おすすめ", en: "recommendation", de: "Empfehlung", zh: "推荐" } },
    { id: "v02", category: "noun", translations: { ja: "かんこうち", en: "tourist spot", de: "Touristenort", zh: "旅游景点" } },
    { id: "v03", category: "noun", translations: { ja: "めいしょ", en: "famous place", de: "berühmter Ort", zh: "名胜" } },
    { id: "v04", category: "noun", translations: { ja: "めいぶつ", en: "local specialty", de: "lokale Spezialität", zh: "特产" } },
    { id: "v05", category: "noun", translations: { ja: "とくさんひん", en: "local product", de: "regionales Produkt", zh: "土特产" } },
    { id: "v06", category: "noun", translations: { ja: "やど", en: "lodging", de: "Unterkunft", zh: "住处" } },
    { id: "v07", category: "noun", translations: { ja: "しゅくはく", en: "accommodation", de: "Unterbringung", zh: "住宿" } },
    { id: "v08", category: "noun", translations: { ja: "ちいき", en: "area, region", de: "Region", zh: "地区" } },
    { id: "v09", category: "noun", translations: { ja: "かんこうきゃく", en: "tourist", de: "Tourist(in)", zh: "游客" } },
    { id: "v10", category: "noun", translations: { ja: "ガイドブック", en: "guidebook", de: "Reiseführer", zh: "导游手册" } },
    { id: "v11", category: "noun", translations: { ja: "かんこうあんない", en: "tourist information", de: "Touristeninformation", zh: "旅游咨询" } },
    { id: "v12", category: "noun", translations: { ja: "けしき", en: "scenery", de: "Landschaft", zh: "风景" } },
    { id: "v13", category: "noun", translations: { ja: "よてい", en: "plan", de: "Plan", zh: "计划" } },
    { id: "v14", category: "noun", translations: { ja: "たびさき", en: "travel destination", de: "Reiseziel", zh: "旅行目的地" } },
    { id: "v15", category: "noun", translations: { ja: "きせつ", en: "season", de: "Jahreszeit", zh: "季节" } },
    { id: "v16", category: "verb", translations: { ja: "たずねる", en: "to visit", de: "besuchen", zh: "拜访" } },
    { id: "v17", category: "verb", translations: { ja: "あんないする", en: "to guide", de: "führen", zh: "带路" } },
    { id: "v18", category: "verb", translations: { ja: "さんかする", en: "to participate", de: "teilnehmen", zh: "参加" } },
    { id: "v19", category: "verb", translations: { ja: "たいけんする", en: "to experience", de: "erleben", zh: "体验" } },
    { id: "v20", category: "verb", translations: { ja: "でかける", en: "to go out", de: "ausgehen", zh: "出门" } },
    { id: "v21", category: "verb", translations: { ja: "しらべる", en: "to look up, research", de: "recherchieren", zh: "查找" } },
    { id: "v22", category: "verb", translations: { ja: "えらぶ", en: "to choose", de: "wählen", zh: "选择" } },
    { id: "v23", category: "verb", translations: { ja: "すすめる", en: "to recommend", de: "empfehlen", zh: "推荐" } },
    { id: "v24", category: "verb", translations: { ja: "たのしめる", en: "to be able to enjoy", de: "genießen können", zh: "能享受" } },
    { id: "v25", category: "verb", translations: { ja: "かんどうする", en: "to be moved, touched", de: "gerührt sein", zh: "感动" } },
    { id: "v26", category: "adjective", translations: { ja: "にぎやかな", en: "lively", de: "lebhaft", zh: "热闹" } },
    { id: "v27", category: "adjective", translations: { ja: "しずかな", en: "quiet", de: "ruhig", zh: "安静" } },
    { id: "v28", category: "adjective", translations: { ja: "ゆうめいな", en: "famous", de: "berühmt", zh: "有名" } },
    { id: "v29", category: "adverb", translations: { ja: "かならず", en: "certainly", de: "sicherlich", zh: "一定" } },
    { id: "v30", category: "adverb", translations: { ja: "もしかしたら", en: "maybe, perhaps", de: "vielleicht", zh: "也许" } }
  ],
  dialogueA: {
    title: { ja: "ばしょを すすめる", en: "Recommending Places", de: "Orte empfehlen", zh: "推荐地方" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きょうとに いくなら、どこが いいですか？", en: "If I'm going to Kyoto, where's good to go?", de: "Wenn ich nach Kyoto fahre, wohin sollte ich gehen?", zh: "如果去京都的话，哪里好？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しずかな ばしょが すきなら、あの おてらが いいですよ。", en: "If you like quiet places, that temple is good.", de: "Wenn Sie ruhige Orte mögen, ist der Tempel dort gut.", zh: "如果喜欢安静的地方，那座寺庙不错。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "けしきも きれいですか？", en: "Is the scenery pretty too?", de: "Ist die Landschaft auch schön?", zh: "风景也很漂亮吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、あきに いくと いいですよ。もみじが すばらしいです。", en: "Yes, it's good to go in autumn. The autumn leaves are wonderful.", de: "Ja, es ist gut, im Herbst dorthin zu gehen. Das Herbstlaub ist wunderbar.", zh: "是的，秋天去比较好。红叶很棒。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ひとが おおいかもしれませんね。", en: "There might be a lot of people, though.", de: "Es könnte aber viele Leute geben.", zh: "可能人会很多吧。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。あさ はやく いくと いいですよ。", en: "That's true. It's good to go early in the morning.", de: "Stimmt. Es ist gut, früh am Morgen hinzugehen.", zh: "是啊。早上早点去比较好。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "にぎやかな ばしょも しりたいです。", en: "I'd also like to know a lively place.", de: "Ich möchte auch einen lebhaften Ort kennenlernen.", zh: "也想知道热闹的地方。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "かいものを したいなら、あの しょうてんがいが いいです。", en: "If you want to shop, that shopping street is good.", de: "Wenn Sie einkaufen möchten, ist die Einkaufsstraße dort gut.", zh: "如果想购物的话，那条商店街不错。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "めいぶつは なにが ありますか？", en: "What local specialties are there?", de: "Welche lokalen Spezialitäten gibt es?", zh: "有什么特产？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "おかしが ゆうめいです。かってみると いいですよ。", en: "Sweets are famous. It'd be good to try buying some.", de: "Süßigkeiten sind berühmt. Es wäre gut, welche zu kaufen.", zh: "点心很有名。买来试试看也不错。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "やどは どこが いいと おもいますか？", en: "Where do you think is a good place to stay?", de: "Wo, denken Sie, ist eine gute Unterkunft?", zh: "你觉得住哪儿好？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でんとうてきな やどに とまりたいなら、りょかんが おすすめです。", en: "If you want to stay in a traditional lodging, I recommend a ryokan.", de: "Wenn Sie in einer traditionellen Unterkunft übernachten möchten, empfehle ich ein Ryokan.", zh: "如果想住传统的住处，推荐旅馆。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たかいかもしれませんね。", en: "It might be expensive, though.", de: "Es könnte aber teuer sein.", zh: "可能会很贵吧。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はやく よやくすると いいですよ。やすい プランも ありますから。", en: "It's good to book early. There are cheap plans too.", de: "Es ist gut, früh zu reservieren. Es gibt auch günstige Angebote.", zh: "早点预订比较好。也有便宜的方案。" } }
    ]
  },
  dialogueB: {
    title: { ja: "はじめての ひとに アドバイスする", en: "Advising a Visitor", de: "Einen Besucher beraten", zh: "给游客建议" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はじめて にほんに くる ひとに アドバイスを おねがいします。", en: "Please give some advice to someone coming to Japan for the first time.", de: "Bitte geben Sie einen Rat für jemanden, der zum ersten Mal nach Japan kommt.", zh: "请给第一次来日本的人一些建议。" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "しんかんせんに のるなら、はやめに きっぷを かうと いいですよ。", en: "If you're going to ride the shinkansen, it's good to buy tickets early.", de: "Wenn Sie den Shinkansen nehmen, ist es gut, die Fahrkarten früh zu kaufen.", zh: "如果要坐新干线的话，早点买票比较好。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ガイドブックは ひつようですか？", en: "Is a guidebook necessary?", de: "Ist ein Reiseführer notwendig?", zh: "需要导游手册吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "アプリを つかうなら、ガイドブックは いらないかもしれません。", en: "If you're using an app, you might not need a guidebook.", de: "Wenn Sie eine App verwenden, brauchen Sie vielleicht keinen Reiseführer.", zh: "如果用应用软件的话，可能就不需要导游手册了。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どんな かんこうちが おすすめですか？", en: "What kind of tourist spots do you recommend?", de: "Welche Art von Touristenorten empfehlen Sie?", zh: "推荐什么样的旅游景点？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "しぜんが すきなら、やまが おおい ちいきに いくと いいです。", en: "If you like nature, it's good to go to areas with lots of mountains.", de: "Wenn Sie die Natur mögen, ist es gut, in Gebiete mit vielen Bergen zu fahren.", zh: "如果喜欢自然的话，去多山的地区比较好。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "げんきんは たくさん もっていくべきですか？", en: "Should I bring a lot of cash?", de: "Sollte ich viel Bargeld mitnehmen?", zh: "应该带很多现金吗？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "しょうてんがいなら、カードが つかえないかもしれません。すこし もっていくと いいです。", en: "In shopping streets, cards might not work. It'd be good to bring some.", de: "In Einkaufsstraßen funktionieren Karten vielleicht nicht. Es wäre gut, etwas mitzunehmen.", zh: "在商店街的话，可能不能刷卡。带一点比较好。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しゅくはくは どこが いいですか？", en: "Where's good to stay?", de: "Wo ist es gut zu übernachten?", zh: "住哪里好？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "えきの ちかくに とまると べんりですよ。", en: "It's convenient to stay near the station.", de: "Es ist praktisch, in der Nähe des Bahnhofs zu übernachten.", zh: "住在车站附近很方便。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "かんこうきゃくが おおい きせつは ありますか？", en: "Is there a season with a lot of tourists?", de: "Gibt es eine Saison mit vielen Touristen?", zh: "有游客多的季节吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はるなら、さくらを みに くる ひとが おおいかもしれません。", en: "In spring, there might be a lot of people coming to see the cherry blossoms.", de: "Im Frühling könnte es viele Leute geben, die die Kirschblüten sehen kommen.", zh: "春天的话，可能会有很多人来赏樱。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "さいごに、ひとつ アドバイスを ください。", en: "Lastly, please give one piece of advice.", de: "Zum Schluss, geben Sie mir bitte noch einen Rat.", zh: "最后，请给我一个建议。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "よていを つめすぎないと いいですよ。ゆっくり たのしめますから。", en: "It's good not to over-pack your schedule. You can enjoy it more relaxed that way.", de: "Es ist gut, den Zeitplan nicht zu überladen. So können Sie es entspannter genießen.", zh: "不要把行程排得太满比较好。这样可以悠闲地享受。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜なら／〜といい／〜かもしれない：おすすめと よそく", en: "~Nara / ~To Ii / ~Kamoshirenai: Recommendations and Predictions", de: "~Nara / ~To Ii / ~Kamoshirenai: Empfehlungen und Vermutungen", zh: "〜なら／〜といい／〜かもしれない：推荐与推测" },
      explanation: {
        ja: "「〜なら」は「もし Aの ことなら」と、あいての はなした トピックを うけて じょうけんを しめします。「〜といい」は「Bを すると いい けっかに なる」という アドバイスを あらわします。「〜かもしれない」は「もしかしたら そうかもしれない」と、かくじつでは ない よそくを あらわします。",
        en: "~nara means \"if it's about A\" — it picks up the topic the other person just mentioned and turns it into a condition. ~to ii expresses advice: \"doing B would lead to a good result.\" ~kamoshirenai expresses an uncertain guess: \"it might be the case that...\"",
        de: "~nara bedeutet \"wenn es um A geht\" — es greift das Thema auf, das die andere Person gerade erwähnt hat, und macht daraus eine Bedingung. ~to ii drückt einen Ratschlag aus: \"B zu tun würde zu einem guten Ergebnis führen.\" ~kamoshirenai drückt eine unsichere Vermutung aus: \"es könnte sein, dass...\"",
        zh: "〜なら意为\"如果是关于A的话\"——承接对方刚提到的话题，将其转化为条件。〜といい表示建议：\"做B的话会有好结果\"。〜かもしれない表示不确定的推测：\"也许是这样...\""
      },
      chunks: [
        { id: "g1", translations: { ja: "きょうとに いくなら、あきが いいですよ。", en: "If you're going to Kyoto, autumn is good.", de: "Wenn Sie nach Kyoto fahren, ist der Herbst gut.", zh: "如果去京都的话，秋天比较好。" } },
        { id: "g2", translations: { ja: "たべものが すきなら、この みせを すすめます。", en: "If you like food, I recommend this shop.", de: "Wenn Sie Essen mögen, empfehle ich dieses Geschäft.", zh: "如果喜欢美食的话，推荐这家店。" } },
        { id: "g3", translations: { ja: "はやく でかけると いいですよ。", en: "It would be good to leave early.", de: "Es wäre gut, früh loszugehen.", zh: "早点出发比较好。" } },
        { id: "g4", translations: { ja: "ガイドブックを みると いいです。", en: "It would be good to look at a guidebook.", de: "Es wäre gut, einen Reiseführer anzuschauen.", zh: "看看导游手册比较好。" } },
        { id: "g5", translations: { ja: "あめが ふるかもしれません。", en: "It might rain.", de: "Es könnte regnen.", zh: "可能会下雨。" } },
        { id: "g6", translations: { ja: "その みせは しまって いるかもしれません。", en: "That shop might be closed.", de: "Das Geschäft könnte geschlossen sein.", zh: "那家店可能已经关门了。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        s: { ja: "S", en: "S", de: "S", zh: "S" },
        z: { ja: "Z", en: "Z", de: "Z", zh: "Z" },
        sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" },
        j: { ja: "J", en: "J", de: "J", zh: "J" }
      },
      items: [
        { id: "s1", category: "s", translations: { ja: "さくら", en: "cherry blossom", de: "Kirschblüte", zh: "樱花" } },
        { id: "s2", category: "s", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
        { id: "s3", category: "s", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
        { id: "s4", category: "s", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },
        { id: "z1", category: "z", translations: { ja: "ざっし", en: "magazine", de: "Zeitschrift", zh: "杂志" } },
        { id: "z2", category: "z", translations: { ja: "ずつう", en: "headache", de: "Kopfschmerzen", zh: "头痛" } },
        { id: "z3", category: "z", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
        { id: "z4", category: "z", translations: { ja: "ぞう", en: "elephant", de: "Elefant", zh: "大象" } },
        { id: "sh1", category: "sh", translations: { ja: "しゃかい", en: "society", de: "Gesellschaft", zh: "社会" } },
        { id: "sh2", category: "sh", translations: { ja: "しゅくだい", en: "homework", de: "Hausaufgabe", zh: "作业" } },
        { id: "sh3", category: "sh", translations: { ja: "しょうかい", en: "introduction", de: "Vorstellung", zh: "介绍" } },
        { id: "sh4", category: "sh", translations: { ja: "しつもん", en: "question", de: "Frage", zh: "问题" } },
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
          z: { ja: "Z", en: "Z", de: "Z", zh: "Z" },
          sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" },
          j: { ja: "J", en: "J", de: "J", zh: "J" }
        },
        items: [
          { id: "s5", category: "s", translations: { ja: "さいふ", en: "wallet", de: "Geldbörse", zh: "钱包" } },
          { id: "s6", category: "s", translations: { ja: "すいか", en: "watermelon", de: "Wassermelone", zh: "西瓜" } },
          { id: "s7", category: "s", translations: { ja: "せいかつ", en: "life", de: "Leben", zh: "生活" } },
          { id: "s8", category: "s", translations: { ja: "そうじ", en: "cleaning", de: "Putzen", zh: "打扫" } },
          { id: "s9", category: "s", translations: { ja: "さむい", en: "cold", de: "kalt", zh: "冷的" } },
          { id: "s10", category: "s", translations: { ja: "すわる", en: "to sit", de: "sitzen", zh: "坐" } },
          { id: "s11", category: "s", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "s12", category: "s", translations: { ja: "すずしい", en: "cool", de: "kühl", zh: "凉爽的" } },
          { id: "s13", category: "s", translations: { ja: "さか", en: "slope", de: "Hang", zh: "坡" } },
          { id: "s14", category: "s", translations: { ja: "すな", en: "sand", de: "Sand", zh: "沙子" } },
          { id: "s15", category: "s", translations: { ja: "せなか", en: "back", de: "Rücken", zh: "背部" } },
          { id: "s16", category: "s", translations: { ja: "そんけい", en: "respect", de: "Respekt", zh: "尊敬" } },
          { id: "s17", category: "s", translations: { ja: "さそう", en: "to invite", de: "einladen", zh: "邀请" } },
          { id: "s18", category: "s", translations: { ja: "そだてる", en: "to raise, grow", de: "aufziehen", zh: "养育" } },

          { id: "z5", category: "z", translations: { ja: "ざんねん", en: "too bad, regrettable", de: "schade", zh: "遗憾" } },
          { id: "z6", category: "z", translations: { ja: "ずのう", en: "brain, intellect", de: "Verstand", zh: "头脑" } },
          { id: "z7", category: "z", translations: { ja: "ぜいたく", en: "luxury", de: "Luxus", zh: "奢侈" } },
          { id: "z8", category: "z", translations: { ja: "ぞうきん", en: "floor cloth", de: "Putzlappen", zh: "抹布" } },
          { id: "z9", category: "z", translations: { ja: "ずるい", en: "sly, unfair", de: "gerissen, unfair", zh: "狡猾" } },
          { id: "z10", category: "z", translations: { ja: "ぜんたい", en: "the whole", de: "das Ganze", zh: "整体" } },
          { id: "z11", category: "z", translations: { ja: "ぞくする", en: "to belong to", de: "angehören", zh: "属于" } },
          { id: "z12", category: "z", translations: { ja: "ざせき", en: "seat", de: "Sitzplatz", zh: "座位" } },
          { id: "z13", category: "z", translations: { ja: "ぜいきん", en: "tax", de: "Steuer", zh: "税" } },
          { id: "z14", category: "z", translations: { ja: "ぞうか", en: "increase", de: "Zunahme", zh: "增加" } },
          { id: "z15", category: "z", translations: { ja: "ざつおん", en: "noise", de: "Lärm", zh: "噪音" } },
          { id: "z16", category: "z", translations: { ja: "ずかん", en: "illustrated reference book", de: "Bildlexikon", zh: "图鉴" } },
          { id: "z17", category: "z", translations: { ja: "ぞうり", en: "sandals", de: "Sandalen", zh: "草履" } },
          { id: "z18", category: "z", translations: { ja: "ざいさん", en: "property, assets", de: "Vermögen", zh: "财产" } },

          { id: "sh5", category: "sh", translations: { ja: "しちがつ", en: "July", de: "Juli", zh: "七月" } },
          { id: "sh6", category: "sh", translations: { ja: "しゅうまつ", en: "weekend", de: "Wochenende", zh: "周末" } },
          { id: "sh7", category: "sh", translations: { ja: "しょうらい", en: "future", de: "Zukunft", zh: "将来" } },
          { id: "sh8", category: "sh", translations: { ja: "しゅうかん", en: "habit", de: "Gewohnheit", zh: "习惯" } },
          { id: "sh9", category: "sh", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef", zh: "总经理" } },
          { id: "sh10", category: "sh", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "sh11", category: "sh", translations: { ja: "しんせつ", en: "kind", de: "freundlich", zh: "亲切" } },
          { id: "sh12", category: "sh", translations: { ja: "しゅみ", en: "hobby", de: "Hobby", zh: "爱好" } },
          { id: "sh13", category: "sh", translations: { ja: "しっぱい", en: "failure", de: "Misserfolg", zh: "失败" } },
          { id: "sh14", category: "sh", translations: { ja: "しゅうしょく", en: "finding employment", de: "Berufseinstieg", zh: "就业" } },
          { id: "sh15", category: "sh", translations: { ja: "しょうぼう", en: "firefighting", de: "Feuerwehr", zh: "消防" } },
          { id: "sh16", category: "sh", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
          { id: "sh17", category: "sh", translations: { ja: "しゅっせき", en: "attendance", de: "Anwesenheit", zh: "出席" } },
          { id: "sh18", category: "sh", translations: { ja: "しょうたい", en: "invitation", de: "Einladung", zh: "邀请" } },

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
        id: "grammar-drill-nara",
        title: { ja: "れんしゅう：〜なら", en: "Practice: ~Nara", de: "Übung: ~Nara", zh: "练习：〜なら" },
        spokenIntro: {
          ja: "つぎは、「〜なら」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~nara.",
          de: "Als Nächstes üben wir Beispielsätze mit ~nara.",
          zh: "接下来，让我们练习使用「〜なら」的例句。"
        },
        lines: [
          { id: "nr1", translations: { ja: "きょうとに いくなら、あきが いいですよ。", jaKanji: "京都に行くなら、秋がいいですよ。", en: "If you're going to Kyoto, autumn is good.", de: "Wenn Sie nach Kyoto fahren, ist der Herbst gut.", zh: "如果去京都的话，秋天比较好。" } },
          { id: "nr2", translations: { ja: "たべものが すきなら、この みせを すすめます。", jaKanji: "食べ物が好きなら、この店を勧めます。", en: "If you like food, I recommend this shop.", de: "Wenn Sie Essen mögen, empfehle ich dieses Geschäft.", zh: "如果喜欢美食的话，推荐这家店。" } },
          { id: "nr3", translations: { ja: "しずかな ばしょが すきなら、あの おてらが いいです。", jaKanji: "静かな場所が好きなら、あのお寺がいいです。", en: "If you like quiet places, that temple is good.", de: "Wenn Sie ruhige Orte mögen, ist der Tempel gut.", zh: "如果喜欢安静的地方，那座寺庙不错。" } },
          { id: "nr4", translations: { ja: "かいものを したいなら、あの しょうてんがいが いいです。", jaKanji: "買い物をしたいなら、あの商店街がいいです。", en: "If you want to shop, that shopping street is good.", de: "Wenn Sie einkaufen möchten, ist die Einkaufsstraße gut.", zh: "如果想购物的话，那条商店街不错。" } },
          { id: "nr5", translations: { ja: "でんとうてきな やどに とまりたいなら、りょかんが おすすめです。", jaKanji: "伝統的な宿に泊まりたいなら、旅館がおすすめです。", en: "If you want to stay in a traditional lodging, I recommend a ryokan.", de: "Wenn Sie in einer traditionellen Unterkunft übernachten möchten, empfehle ich ein Ryokan.", zh: "如果想住传统的住处，推荐旅馆。" } },
          { id: "nr6", translations: { ja: "しんかんせんに のるなら、はやめに きっぷを かうと いいです。", jaKanji: "新幹線に乗るなら、早めに切符を買うといいです。", en: "If you're going to ride the shinkansen, it's good to buy tickets early.", de: "Wenn Sie den Shinkansen nehmen, ist es gut, die Fahrkarten früh zu kaufen.", zh: "如果要坐新干线的话，早点买票比较好。" } },
          { id: "nr7", translations: { ja: "アプリを つかうなら、ガイドブックは いりません。", jaKanji: "アプリを使うなら、ガイドブックはいりません。", en: "If you're using an app, you don't need a guidebook.", de: "Wenn Sie eine App verwenden, brauchen Sie keinen Reiseführer.", zh: "如果用应用软件的话，就不需要导游手册。" } },
          { id: "nr8", translations: { ja: "しぜんが すきなら、やまが おおい ちいきに いくと いいです。", jaKanji: "自然が好きなら、山が多い地域に行くといいです。", en: "If you like nature, it's good to go to areas with lots of mountains.", de: "Wenn Sie die Natur mögen, ist es gut, in Gebiete mit vielen Bergen zu fahren.", zh: "如果喜欢自然的话，去多山的地区比较好。" } },
          { id: "nr9", translations: { ja: "しょうてんがいなら、カードが つかえないかもしれません。", jaKanji: "商店街なら、カードが使えないかもしれません。", en: "In shopping streets, cards might not work.", de: "In Einkaufsstraßen funktionieren Karten vielleicht nicht.", zh: "在商店街的话，可能不能刷卡。" } },
          { id: "nr10", translations: { ja: "はるなら、さくらを みに くる ひとが おおいです。", jaKanji: "春なら、桜を見に来る人が多いです。", en: "In spring, there are a lot of people coming to see the cherry blossoms.", de: "Im Frühling gibt es viele Leute, die die Kirschblüten sehen kommen.", zh: "春天的话，会有很多人来赏樱。" } }
        ]
      },
      {
        id: "grammar-drill-toii",
        title: { ja: "れんしゅう：〜といい", en: "Practice: ~To Ii", de: "Übung: ~To Ii", zh: "练习：〜といい" },
        spokenIntro: {
          ja: "つぎは、「〜といい」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~to ii.",
          de: "Als Nächstes üben wir Beispielsätze mit ~to ii.",
          zh: "接下来，让我们练习使用「〜といい」的例句。"
        },
        lines: [
          { id: "ti1", translations: { ja: "はやく でかけると いいですよ。", jaKanji: "早く出かけるといいですよ。", en: "It would be good to leave early.", de: "Es wäre gut, früh loszugehen.", zh: "早点出发比较好。" } },
          { id: "ti2", translations: { ja: "ガイドブックを みると いいです。", jaKanji: "ガイドブックを見るといいです。", en: "It would be good to look at a guidebook.", de: "Es wäre gut, einen Reiseführer anzuschauen.", zh: "看看导游手册比较好。" } },
          { id: "ti3", translations: { ja: "あきに いくと いいですよ。", jaKanji: "秋に行くといいですよ。", en: "It's good to go in autumn.", de: "Es ist gut, im Herbst hinzugehen.", zh: "秋天去比较好。" } },
          { id: "ti4", translations: { ja: "あさ はやく いくと いいですよ。", jaKanji: "朝早く行くといいですよ。", en: "It's good to go early in the morning.", de: "Es ist gut, früh am Morgen hinzugehen.", zh: "早上早点去比较好。" } },
          { id: "ti5", translations: { ja: "かってみると いいですよ。", jaKanji: "買ってみるといいですよ。", en: "It'd be good to try buying it.", de: "Es wäre gut, es zu kaufen.", zh: "买来试试看比较好。" } },
          { id: "ti6", translations: { ja: "はやく よやくすると いいですよ。", jaKanji: "早く予約するといいですよ。", en: "It's good to book early.", de: "Es ist gut, früh zu reservieren.", zh: "早点预订比较好。" } },
          { id: "ti7", translations: { ja: "えきの ちかくに とまると べんりですよ。", jaKanji: "駅の近くに泊まると便利ですよ。", en: "It's convenient to stay near the station.", de: "Es ist praktisch, in der Nähe des Bahnhofs zu übernachten.", zh: "住在车站附近很方便。" } },
          { id: "ti8", translations: { ja: "げんきんを すこし もっていくと いいです。", jaKanji: "現金を少し持っていくといいです。", en: "It'd be good to bring some cash.", de: "Es wäre gut, etwas Bargeld mitzunehmen.", zh: "带一点现金比较好。" } },
          { id: "ti9", translations: { ja: "よていを つめすぎないと いいですよ。", jaKanji: "予定を詰めすぎないといいですよ。", en: "It's good not to over-pack your schedule.", de: "Es ist gut, den Zeitplan nicht zu überladen.", zh: "不要把行程排得太满比较好。" } },
          { id: "ti10", translations: { ja: "ちずを もっていくと いいですよ。", jaKanji: "地図を持っていくといいですよ。", en: "It's good to bring a map.", de: "Es ist gut, eine Karte mitzunehmen.", zh: "带地图比较好。" } }
        ]
      },
      {
        id: "grammar-drill-kamoshirenai",
        title: { ja: "れんしゅう：〜かもしれない", en: "Practice: ~Kamoshirenai", de: "Übung: ~Kamoshirenai", zh: "练习：〜かもしれない" },
        spokenIntro: {
          ja: "つぎは、「〜かもしれない」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~kamoshirenai.",
          de: "Als Nächstes üben wir Beispielsätze mit ~kamoshirenai.",
          zh: "接下来，让我们练习使用「〜かもしれない」的例句。"
        },
        lines: [
          { id: "km1", translations: { ja: "あめが ふるかもしれません。", jaKanji: "雨が降るかもしれません。", en: "It might rain.", de: "Es könnte regnen.", zh: "可能会下雨。" } },
          { id: "km2", translations: { ja: "その みせは しまって いるかもしれません。", jaKanji: "その店は閉まっているかもしれません。", en: "That shop might be closed.", de: "Das Geschäft könnte geschlossen sein.", zh: "那家店可能已经关门了。" } },
          { id: "km3", translations: { ja: "ひとが おおいかもしれません。", jaKanji: "人が多いかもしれません。", en: "There might be a lot of people.", de: "Es könnte viele Leute geben.", zh: "可能人会很多。" } },
          { id: "km4", translations: { ja: "たかいかもしれません。", jaKanji: "高いかもしれません。", en: "It might be expensive.", de: "Es könnte teuer sein.", zh: "可能会很贵。" } },
          { id: "km5", translations: { ja: "ガイドブックは いらないかもしれません。", jaKanji: "ガイドブックはいらないかもしれません。", en: "You might not need a guidebook.", de: "Sie brauchen vielleicht keinen Reiseführer.", zh: "可能不需要导游手册。" } },
          { id: "km6", translations: { ja: "カードが つかえないかもしれません。", jaKanji: "カードが使えないかもしれません。", en: "Cards might not work.", de: "Karten funktionieren vielleicht nicht.", zh: "可能不能刷卡。" } },
          { id: "km7", translations: { ja: "さくらを みに くる ひとが おおいかもしれません。", jaKanji: "桜を見に来る人が多いかもしれません。", en: "There might be a lot of people coming to see the cherry blossoms.", de: "Es könnte viele Leute geben, die die Kirschblüten sehen kommen.", zh: "可能会有很多人来赏樱。" } },
          { id: "km8", translations: { ja: "でんしゃが おくれるかもしれません。", jaKanji: "電車が遅れるかもしれません。", en: "The train might be delayed.", de: "Der Zug könnte sich verspäten.", zh: "电车可能会晚点。" } },
          { id: "km9", translations: { ja: "きょうは いそがしいかもしれません。", jaKanji: "今日は忙しいかもしれません。", en: "I might be busy today.", de: "Ich könnte heute beschäftigt sein.", zh: "今天可能会很忙。" } },
          { id: "km10", translations: { ja: "あの レストランは よやくが ひつようかもしれません。", jaKanji: "あのレストランは予約が必要かもしれません。", en: "That restaurant might need a reservation.", de: "Für dieses Restaurant könnte eine Reservierung nötig sein.", zh: "那家餐厅可能需要预约。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "たびの おすすめ", en: "Travel Recommendations", de: "Reiseempfehlungen" },
    lines: [
      { id: "sg1", translations: { ja: "しずかな ばしょが すきなら", en: "If you like quiet places", de: "Wenn du ruhige Orte magst" } },
      { id: "sg2", translations: { ja: "あの おてらへ いくと いい", en: "It's good to go to that temple", de: "ist es gut, zu jenem Tempel zu gehen" } },
      { id: "sg3", translations: { ja: "ひとが おおいかもしれないから", en: "Since there might be a lot of people", de: "Da es viele Leute geben könnte" } },
      { id: "sg4", translations: { ja: "あさ はやく でかけよう", en: "Let's go out early in the morning", de: "lass uns früh am Morgen aufbrechen" } }
    ]
  }
};
