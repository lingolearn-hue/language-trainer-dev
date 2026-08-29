import type { TopicLesson } from "../topicTypes";

// A2 Topic 3 (of 3) — grammar item #8 from the A2 list: conditional /
// hypothetical (たら-form), genuinely new. ja-only for now.

export const topicConditional: TopicLesson = {
  id: "topic-22-conditional",
  lessonNumber: 22,
  level: "A2",
  topicName: {
    ja: "もし〜たら",
    en: "If / When...",
    de: "Wenn / Falls...",
    zh: "如果〜的话"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "けいかく", en: "plan", de: "Plan", zh: "计划" } },
    { id: "v02", category: "noun", translations: { ja: "アドバイス", en: "advice", de: "Ratschlag", zh: "建议" } },
    { id: "v03", category: "verb", translations: { ja: "えらぶ", en: "to choose", de: "wählen", zh: "选择" } },
    { id: "v04", category: "verb", translations: { ja: "きめる", en: "to decide", de: "entscheiden", zh: "决定" } },
    { id: "v05", category: "verb", translations: { ja: "かんがえる", en: "to think, consider", de: "nachdenken", zh: "考虑" } },
    { id: "v06", category: "noun", translations: { ja: "もんだい", en: "problem", de: "Problem", zh: "问题" } },
    { id: "v07", category: "verb", translations: { ja: "かいけつする", en: "to solve", de: "lösen", zh: "解决" } },
    { id: "v08", category: "verb", translations: { ja: "ちこくする", en: "to be late", de: "sich verspäten", zh: "迟到" } },
    { id: "v09", category: "noun", translations: { ja: "びょうき", en: "illness", de: "Krankheit", zh: "疾病" } },
    { id: "v10", category: "noun", translations: { ja: "ねつ", en: "fever", de: "Fieber", zh: "发烧" } },
    { id: "v11", category: "noun", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
    { id: "v12", category: "noun", translations: { ja: "おかね", en: "money", de: "Geld", zh: "钱" } },
    { id: "v13", category: "adjective", translations: { ja: "たりない", en: "insufficient, not enough", de: "unzureichend", zh: "不够的" } },
    { id: "v14", category: "verb", translations: { ja: "やめる", en: "to quit, stop", de: "aufhören", zh: "停止" } },
    { id: "v15", category: "verb", translations: { ja: "しっぱいする", en: "to fail", de: "scheitern", zh: "失败" } },
    { id: "v16", category: "verb", translations: { ja: "せいこうする", en: "to succeed", de: "erfolgreich sein", zh: "成功" } },
    { id: "v17", category: "verb", translations: { ja: "きんちょうする", en: "to get nervous", de: "nervös werden", zh: "紧张" } },
    { id: "v18", category: "verb", translations: { ja: "リラックスする", en: "to relax", de: "sich entspannen", zh: "放松" } },
    { id: "v19", category: "noun", translations: { ja: "じかん", en: "time", de: "Zeit", zh: "时间" } },
    { id: "v20", category: "verb", translations: { ja: "まにあう", en: "to make it in time", de: "rechtzeitig ankommen", zh: "赶得上" } },
    { id: "v21", category: "verb", translations: { ja: "おくれる", en: "to be late, delayed", de: "sich verspäten", zh: "迟到；延误" } },
    { id: "v22", category: "verb", translations: { ja: "れんらくする", en: "to contact", de: "kontaktieren", zh: "联系" } },
    { id: "v23", category: "verb", translations: { ja: "たすける", en: "to help", de: "helfen", zh: "帮助" } },
    { id: "v24", category: "verb", translations: { ja: "こまる", en: "to be in trouble, at a loss", de: "in Schwierigkeiten sein", zh: "为难" } },
    { id: "v25", category: "verb", translations: { ja: "あきらめる", en: "to give up", de: "aufgeben", zh: "放弃" } },
    { id: "v26", category: "noun", translations: { ja: "あめ", en: "rain", de: "Regen", zh: "雨" } },
    { id: "v27", category: "noun", translations: { ja: "ひま", en: "free time", de: "Freizeit", zh: "空闲" } },
    { id: "v28", category: "adjective", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙碌的" } },
    { id: "v29", category: "noun", translations: { ja: "しあい", en: "match, game", de: "Spiel, Wettkampf", zh: "比赛" } },
    { id: "v30", category: "noun", translations: { ja: "てんきよほう", en: "weather forecast", de: "Wettervorhersage", zh: "天气预报" } }
  ],
  dialogueA: {
    title: { ja: "てんきに よって しゅうまつの けいかくを たてる", en: "Making Weekend Plans Depending on the Weather", de: "Wochenendpläne je nach Wetter machen", zh: "根据天气制定周末计划" },
    lines: [
      { id: "d1", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "しゅうまつ、なにか けいかくは ある？", en: "Do you have any plans for the weekend?", de: "Hast du Pläne fürs Wochenende?", zh: "周末有什么计划吗？" } },
      { id: "d2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "てんきよほうを みてから きめる。あめが ふったら、うちに いる。", en: "I'll decide after checking the forecast. If it rains, I'll stay home.", de: "Ich entscheide, nachdem ich die Vorhersage gecheckt habe. Wenn es regnet, bleibe ich zu Hause.", zh: "看了天气预报再决定。如果下雨，就待在家里。" } },
      { id: "d3", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "はれたら どうする？", en: "What will you do if it's sunny?", de: "Was machst du, wenn es sonnig ist?", zh: "如果晴天呢？" } },
      { id: "d4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はれたら、こうえんで しあいを みる。", en: "If it's sunny, I'll watch a match at the park.", de: "Wenn es sonnig ist, schaue ich mir ein Spiel im Park an.", zh: "如果晴天，就去公园看比赛。" } },
      { id: "d5", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "じかんが あったら、いっしょに いく？", en: "If you have time, want to go together?", de: "Wenn du Zeit hast, gehen wir zusammen?", zh: "如果有时间，要一起去吗？" } },
      { id: "d6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいね。ひまだったら、あそびに いくよ。", en: "Sure. If I'm free, I'll come.", de: "Klar. Wenn ich frei habe, komme ich mit.", zh: "好啊。如果有空，就一起去。" } },
      { id: "d7", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "でも いそがしかったら、むりしないでね。", en: "But if you're busy, don't push yourself.", de: "Aber wenn du beschäftigt bist, überanstreng dich nicht.", zh: "不过如果忙的话，不要勉强哦。" } },
      { id: "d8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だいじょうぶ。しごとが おわったら、すぐ いく。", en: "It's fine. Once work is over, I'll go right away.", de: "Kein Problem. Sobald die Arbeit fertig ist, gehe ich sofort.", zh: "没关系。工作一结束我就马上去。" } },
      { id: "d9", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "もし おくれたら、れんらくして。", en: "If you're going to be late, please contact me.", de: "Falls du dich verspätest, melde dich bitte.", zh: "如果迟到的话，请联系我。" } },
      { id: "d10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "わかった。まにあったら、れんらくしないよ。", en: "Got it. If I make it in time, I won't contact you.", de: "Verstanden. Wenn ich es rechtzeitig schaffe, melde ich mich nicht.", zh: "知道了。要是赶得上就不联系了。" } },
      { id: "d11", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "しあいが ちゅうしに なったら どうする？", en: "What if the match gets cancelled?", de: "Was, wenn das Spiel abgesagt wird?", zh: "如果比赛取消了怎么办？" } },
      { id: "d12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ちゅうしに なったら、カフェで はなそう。", en: "If it's cancelled, let's just talk at a café.", de: "Wenn es abgesagt wird, lass uns im Café reden.", zh: "如果取消了，那就在咖啡店聊天吧。" } },
      { id: "d13", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "いいね。それも たのしそう。", en: "Sounds good. That sounds fun too.", de: "Klingt gut. Das klingt auch nach Spaß.", zh: "好啊。那样也挺有趣的。" } },
      { id: "d14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じゃあ、てんきよほうを チェックしておくね。", en: "Okay, I'll check the forecast then.", de: "Also gut, ich checke dann mal die Vorhersage.", zh: "那我先查一下天气预报吧。" } }
    ]
  },
  dialogueB: {
    title: { ja: "しごとの もんだいに ついて アドバイスする", en: "Giving Advice About a Problem at Work", de: "Ratschläge zu einem Problem bei der Arbeit geben", zh: "就工作问题提供建议" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "さいきん しごとで もんだいが あって、こまってるの。", en: "I've had a problem at work lately, and I'm stuck.", de: "Ich habe in letzter Zeit ein Problem bei der Arbeit und weiß nicht weiter.", zh: "最近工作上出了问题，很为难。" } },
      { id: "e2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "どうしたの？アドバイスが ほしかったら、きくよ。", en: "What happened? If you want advice, I'm listening.", de: "Was ist los? Wenn du einen Rat möchtest, höre ich zu.", zh: "怎么了？如果需要建议，我可以听听。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ちこくが おおくて、じょうしに ちゅういされたの。", en: "I've been late a lot, and my boss warned me.", de: "Ich war oft zu spät, und mein Chef hat mich verwarnt.", zh: "经常迟到，被上司提醒了。" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はやく おきたら、ちこくしないと おもうよ。", en: "If you wake up earlier, I don't think you'll be late.", de: "Wenn du früher aufstehst, wirst du wohl nicht mehr zu spät kommen.", zh: "如果早点起床，我觉得就不会迟到了。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でも よるも ねるのが おそいの。", en: "But I also go to sleep late at night.", de: "Aber ich gehe abends auch spät ins Bett.", zh: "但是晚上也睡得晚。" } },
      { id: "e6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じゃあ、はやく ねたら、はやく おきられるよ。", en: "Then if you go to sleep early, you'll be able to wake up early.", de: "Dann kannst du früh aufwachen, wenn du früh ins Bett gehst.", zh: "那如果早点睡，就能早起了。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そうだね。でも しごとが おわらなかったら、おそく なるの。", en: "True. But if work doesn't finish, it gets late.", de: "Stimmt. Aber wenn die Arbeit nicht fertig wird, wird es spät.", zh: "是啊。但工作做不完的话，就会很晚。" } },
      { id: "e8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "もんだいが あったら、ひとりで かかえないで。", en: "If there's a problem, don't carry it alone.", de: "Wenn es ein Problem gibt, trag es nicht allein.", zh: "有问题的话，不要一个人扛。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だれかに たすけて もらったほうが いいかな。", en: "Maybe it's better to have someone help me.", de: "Vielleicht sollte ich mir von jemandem helfen lassen.", zh: "也许还是找人帮忙比较好。" } },
      { id: "e10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうそう。あきらめないで、そうだんしてみて。", en: "Exactly. Don't give up, try talking to someone.", de: "Genau. Gib nicht auf, versuch mal, dich zu beraten.", zh: "对呀。不要放弃，试着找人商量一下。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じょうしに そうだんしたら、どう おもう？", en: "What do you think if I talk to my boss?", de: "Was denkst du, wenn ich mit meinem Chef spreche?", zh: "如果和上司商量，你觉得怎么样？" } },
      { id: "e12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいと おもう。きんちょうしたら、しんこきゅうして。", en: "I think that's good. If you get nervous, take a deep breath.", de: "Ich finde das gut. Wenn du nervös wirst, atme tief durch.", zh: "我觉得可以。要是紧张了，就深呼吸。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ありがとう。すこし リラックスできた。", en: "Thanks. I've relaxed a bit.", de: "Danke. Ich konnte mich etwas entspannen.", zh: "谢谢。稍微放松了一些。" } },
      { id: "e14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うまく かいけつしたら、おしえてね。", en: "If it gets resolved well, let me know.", de: "Wenn es gut gelöst wird, sag mir Bescheid.", zh: "如果顺利解决了，告诉我一声。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "たらけい：もし〜たら", en: "The Tara Conditional: If / When...", de: "Die Tara-Konditionalform: Wenn / Falls...", zh: "たら条件形：如果〜的话" },
      explanation: {
        ja: "「もし〜だったら」を いうときは、どうしや けいようしの た-けいに「ら」を つけます。どうし：いく→いった→いったら。い-けいようし：たかい→たかかった→たかかったら。な-けいようし／めいし：ひまな→ひまだった→ひまだったら。じょうけんや、じかんの じゅんばんを あらわします。",
        en: "To say \"if/when X\", attach ら to the past (た-form) of the verb or adjective. Verb: いく→いった→いったら. I-adjective: たかい→たかかった→たかかったら. Na-adjective/noun: ひまな→ひまだった→ひまだったら. Expresses a condition, or a natural time sequence (\"once X happens, Y\").",
        de: "Um \"wenn/falls X\" zu sagen, wird ら an die Vergangenheitsform (た-Form) des Verbs oder Adjektivs angehängt. Verb: いく→いった→いったら. I-Adjektiv: たかい→たかかった→たかかったら. Na-Adjektiv/Nomen: ひまな→ひまだった→ひまだったら. Drückt eine Bedingung oder eine natürliche zeitliche Abfolge aus (\"sobald X passiert, Y\").",
        zh: "要表达「如果/当X的话」，在动词或形容词的过去式（た形）后加ら。动词：いく→いった→いったら。い形容词：たかい→たかかった→たかかったら。な形容词／名词：ひまな→ひまだった→ひまだったら。表示条件，或自然的时间顺序（「一旦X发生，就Y」）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "あめが ふったら、うちに います。", en: "If it rains, I'll stay home.", de: "Wenn es regnet, bleibe ich zu Hause.", zh: "如果下雨，我就待在家里。" } },
        { id: "g2", translations: { ja: "じかんが あったら、てつだいます。", en: "If I have time, I'll help.", de: "Wenn ich Zeit habe, helfe ich.", zh: "如果有时间，我就帮忙。" } },
        { id: "g3", translations: { ja: "やすかったら、かいます。", en: "If it's cheap, I'll buy it.", de: "Wenn es billig ist, kaufe ich es.", zh: "如果便宜的话，我就买。" } },
        { id: "g4", translations: { ja: "ひまだったら、あそびに きてください。", en: "If you're free, please come hang out.", de: "Wenn du frei hast, komm doch vorbei.", zh: "如果有空的话，请来玩。" } },
        { id: "g5", translations: { ja: "しつもんが あったら、きいてください。", en: "If you have a question, please ask.", de: "Wenn Sie eine Frage haben, fragen Sie bitte.", zh: "如果有问题，请提问。" } },
        { id: "g6", translations: { ja: "うちに ついたら、れんらくします。", en: "When I get home, I'll contact you.", de: "Sobald ich zu Hause ankomme, melde ich mich.", zh: "到家以后，我会联系你。" } }
      ]
    }
  },
  extraReadalongs: {
    ja: [
      {
        id: "grammar-drill-tara",
        title: { ja: "れんしゅう：〜たら", en: "Practice: ~Tara", de: "Übung: ~Tara", zh: "练习：〜たら" },
        spokenIntro: {
          ja: "つぎは、「〜たら」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~tara.",
          de: "Als Nächstes üben wir Beispielsätze mit ~tara.",
          zh: "接下来，让我们练习使用「〜たら」的例句。"
        },
        lines: [
          { id: "ta1", translations: { ja: "あめが ふったら、うちに います。", jaKanji: "雨が降ったら、家にいます。", en: "If it rains, I'll stay home.", de: "Wenn es regnet, bleibe ich zu Hause.", zh: "如果下雨，我就待在家里。" } },
          { id: "ta2", translations: { ja: "じかんが あったら、てつだいます。", jaKanji: "時間があったら、手伝います。", en: "If I have time, I'll help.", de: "Wenn ich Zeit habe, helfe ich.", zh: "如果有时间，我就帮忙。" } },
          { id: "ta3", translations: { ja: "やすかったら、かいます。", jaKanji: "安かったら、買います。", en: "If it's cheap, I'll buy it.", de: "Wenn es billig ist, kaufe ich es.", zh: "如果便宜的话，我就买。" } },
          { id: "ta4", translations: { ja: "ひまだったら、あそびに きてください。", jaKanji: "暇だったら、遊びに来てください。", en: "If you're free, please come hang out.", de: "Wenn du frei hast, komm doch vorbei.", zh: "如果有空的话，请来玩。" } },
          { id: "ta5", translations: { ja: "しつもんが あったら、きいてください。", jaKanji: "質問があったら、聞いてください。", en: "If you have a question, please ask.", de: "Wenn Sie eine Frage haben, fragen Sie bitte.", zh: "如果有问题，请提问。" } },
          { id: "ta6", translations: { ja: "うちに ついたら、れんらくします。", jaKanji: "家に着いたら、連絡します。", en: "When I get home, I'll contact you.", de: "Sobald ich zu Hause ankomme, melde ich mich.", zh: "到家以后，我会联系你。" } },
          { id: "ta7", translations: { ja: "しごとが おわったら、たべに いきましょう。", jaKanji: "仕事が終わったら、食べに行きましょう。", en: "When work is over, let's go eat.", de: "Wenn die Arbeit fertig ist, lass uns essen gehen.", zh: "工作结束以后，一起去吃饭吧。" } },
          { id: "ta8", translations: { ja: "わからなかったら、おしえてください。", jaKanji: "分からなかったら、教えてください。", en: "If you don't understand, please tell me.", de: "Wenn Sie es nicht verstehen, sagen Sie es mir bitte.", zh: "如果不明白的话，请告诉我。" } },
          { id: "ta9", translations: { ja: "てんきが よかったら、さんぽしましょう。", jaKanji: "天気が良かったら、散歩しましょう。", en: "If the weather is good, let's take a walk.", de: "Wenn das Wetter gut ist, lass uns spazieren gehen.", zh: "如果天气好的话，一起去散步吧。" } },
          { id: "ta10", translations: { ja: "なにか あったら、でんわしてください。", jaKanji: "何かあったら、電話してください。", en: "If something happens, please call me.", de: "Wenn etwas passiert, rufen Sie mich bitte an.", zh: "如果发生什么事，请给我打电话。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        suru_verbs: { ja: "〜する どうしの アクセント", en: "~suru compound verb pitch pattern", de: "Tonhöhenmuster von ~suru-Verben", zh: "〜する复合动词的声调模式" },
        other: { ja: "ほかの どうし（さんこう）", en: "Other verbs (for comparison)", de: "Andere Verben (zum Vergleich)", zh: "其他动词（对比参考）" }
      },
      items: [
        { id: "s1", category: "suru_verbs", translations: { ja: "かいけつする", en: "to solve", de: "lösen", zh: "解决" } },
        { id: "s2", category: "suru_verbs", translations: { ja: "きんちょうする", en: "to get nervous", de: "nervös werden", zh: "紧张" } },
        { id: "s3", category: "suru_verbs", translations: { ja: "せいこうする", en: "to succeed", de: "erfolgreich sein", zh: "成功" } },
        { id: "s4", category: "suru_verbs", translations: { ja: "しっぱいする", en: "to fail", de: "scheitern", zh: "失败" } },
        { id: "o1", category: "other", translations: { ja: "こまる", en: "to be in trouble (native verb, no する)", de: "in Schwierigkeiten sein (natives Verb, kein する)", zh: "为难（本土动词，无する）" } },
        { id: "o2", category: "other", translations: { ja: "あきらめる", en: "to give up (native verb, no する)", de: "aufgeben (natives Verb, kein する)", zh: "放弃（本土动词，无する）" } },
        { id: "o3", category: "other", translations: { ja: "たすける", en: "to help (native verb, no する)", de: "helfen (natives Verb, kein する)", zh: "帮助（本土动词，无する）" } },
        { id: "o4", category: "other", translations: { ja: "きめる", en: "to decide (native verb, no する)", de: "entscheiden (natives Verb, kein する)", zh: "决定（本土动词，无する）" } }
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
          shi_chi: { ja: "し と ち（ふくしゅう）", en: "し vs ち (reinforced)", de: "し und ち (vertieft)", zh: "し与ち（巩固）" },
          pitch: { ja: "アクセント", en: "Pitch accent", de: "Tonhöhenakzent", zh: "声调重音" },
          vowel_length: { ja: "ぼいんの ながさ", en: "Vowel length", de: "Vokallänge", zh: "元音长度" },
          sokuon: { ja: "促音（そくおん）（ふくしゅう）", en: "Sokuon (reinforced)", de: "Sokuon (vertieft)", zh: "促音（巩固）" }
        },
        items: [
          { id: "shi1", category: "shi_chi", translations: { ja: "しつもん", en: "question (し)", de: "Frage (し)", zh: "问题（し）" } },
          { id: "shi2", category: "shi_chi", translations: { ja: "しあい", en: "match, game (し)", de: "Spiel (し)", zh: "比赛（し）" } },
          { id: "shi3", category: "shi_chi", translations: { ja: "しっぱいする", en: "to fail (し)", de: "scheitern (し)", zh: "失败（し）" } },
          { id: "shi4", category: "shi_chi", translations: { ja: "しんぱい", en: "worry (し)", de: "Sorge (し)", zh: "担心（し）" } },
          { id: "shi5", category: "shi_chi", translations: { ja: "しごと", en: "job, work (し)", de: "Arbeit (し)", zh: "工作（し）" } },
          { id: "shi6", category: "shi_chi", translations: { ja: "しんせつな", en: "kind (し)", de: "freundlich (し)", zh: "亲切的（し）" } },
          { id: "shi7", category: "shi_chi", translations: { ja: "しんぶん", en: "newspaper (し)", de: "Zeitung (し)", zh: "报纸（し）" } },
          { id: "chi1", category: "shi_chi", translations: { ja: "ちこくする", en: "to be late (ち)", de: "sich verspäten (ち)", zh: "迟到（ち）" } },
          { id: "chi2", category: "shi_chi", translations: { ja: "ちず", en: "map (ち)", de: "Landkarte (ち)", zh: "地图（ち）" } },
          { id: "chi3", category: "shi_chi", translations: { ja: "ちから", en: "strength, power (ち)", de: "Kraft (ち)", zh: "力量（ち）" } },
          { id: "chi4", category: "shi_chi", translations: { ja: "ちいさい", en: "small (ち)", de: "klein (ち)", zh: "小的（ち）" } },
          { id: "chi5", category: "shi_chi", translations: { ja: "ちかてつ", en: "subway (ち)", de: "U-Bahn (ち)", zh: "地铁（ち）" } },
          { id: "chi6", category: "shi_chi", translations: { ja: "ちゃいろ", en: "brown (ち)", de: "braun (ち)", zh: "棕色（ち）" } },
          { id: "chi7", category: "shi_chi", translations: { ja: "ちきゅう", en: "Earth (ち)", de: "Erde (ち)", zh: "地球（ち）" } },

          { id: "p1", category: "pitch", translations: { ja: "けいかく", en: "plan — new word, single pattern", de: "Plan — neues Wort, einzelnes Muster", zh: "计划——新词，单一声调" } },
          { id: "p2", category: "pitch", translations: { ja: "こまる", en: "to be in trouble — new word, single pattern", de: "in Schwierigkeiten sein — neues Wort, einzelnes Muster", zh: "为难——新词，单一声调" } },
          { id: "p3", category: "pitch", translations: { ja: "あきらめる", en: "to give up — new word, single pattern", de: "aufgeben — neues Wort, einzelnes Muster", zh: "放弃——新词，单一声调" } },
          { id: "p4", category: "pitch", translations: { ja: "たすける", en: "to help — new word, single pattern", de: "helfen — neues Wort, einzelnes Muster", zh: "帮助——新词，单一声调" } },
          { id: "p5", category: "pitch", translations: { ja: "えらぶ", en: "to choose — new word, single pattern", de: "wählen — neues Wort, einzelnes Muster", zh: "选择——新词，单一声调" } },
          { id: "p6", category: "pitch", translations: { ja: "きめる", en: "to decide — new word, single pattern", de: "entscheiden — neues Wort, einzelnes Muster", zh: "决定——新词，单一声调" } },
          { id: "p7", category: "pitch", translations: { ja: "かんがえる", en: "to think — new word, single pattern", de: "nachdenken — neues Wort, einzelnes Muster", zh: "考虑——新词，单一声调" } },
          { id: "p8", category: "pitch", translations: { ja: "まにあう", en: "to make it in time — new word, single pattern", de: "rechtzeitig ankommen — neues Wort, einzelnes Muster", zh: "赶得上——新词，单一声调" } },
          { id: "p9", category: "pitch", translations: { ja: "おくれる", en: "to be late, delayed — new word, single pattern", de: "sich verspäten — neues Wort, einzelnes Muster", zh: "迟到——新词，单一声调" } },
          { id: "p10", category: "pitch", translations: { ja: "ひま", en: "free time — new word, single pattern", de: "Freizeit — neues Wort, einzelnes Muster", zh: "空闲——新词，单一声调" } },
          { id: "p11", category: "pitch", translations: { ja: "アドバイス", en: "advice — new word, single pattern", de: "Ratschlag — neues Wort, einzelnes Muster", zh: "建议——新词，单一声调" } },
          { id: "p12", category: "pitch", translations: { ja: "もんだい", en: "problem — new word, single pattern", de: "Problem — neues Wort, einzelnes Muster", zh: "问题——新词，单一声调" } },
          { id: "p13", category: "pitch", translations: { ja: "びょうき", en: "illness — new word, single pattern", de: "Krankheit — neues Wort, einzelnes Muster", zh: "疾病——新词，单一声调" } },
          { id: "p14", category: "pitch", translations: { ja: "たりない", en: "insufficient — new word, single pattern", de: "unzureichend — neues Wort, einzelnes Muster", zh: "不够的——新词，单一声调" } },

          { id: "vl1", category: "vowel_length", translations: { ja: "しょうがっこう", en: "elementary school (long しょう)", de: "Grundschule (langes しょう)", zh: "小学（长音しょう）" } },
          { id: "vl2", category: "vowel_length", translations: { ja: "しょうたい", en: "invitation (long しょう)", de: "Einladung (langes しょう)", zh: "邀请（长音しょう）" } },
          { id: "vl3", category: "vowel_length", translations: { ja: "てんきよほう", en: "weather forecast (long おう)", de: "Wettervorhersage (langes おう)", zh: "天气预报（长音おう）" } },
          { id: "vl4", category: "vowel_length", translations: { ja: "じかん", en: "time (short vowels)", de: "Zeit (kurze Vokale)", zh: "时间（短元音）" } },
          { id: "vl5", category: "vowel_length", translations: { ja: "きんちょうする", en: "to get nervous (long ちょう)", de: "nervös werden (langes ちょう)", zh: "紧张（长音ちょう）" } },
          { id: "vl6", category: "vowel_length", translations: { ja: "せいこうする", en: "to succeed (long せい)", de: "erfolgreich sein (langes せい)", zh: "成功（长音せい）" } },
          { id: "vl7", category: "vowel_length", translations: { ja: "はんこ", en: "stamp, seal (short vowels)", de: "Stempel (kurze Vokale)", zh: "印章（短元音）" } },
          { id: "vl8", category: "vowel_length", translations: { ja: "かいけつする", en: "to solve (long かい)", de: "lösen (langes かい)", zh: "解决（长音かい）" } },
          { id: "vl9", category: "vowel_length", translations: { ja: "れんらくする", en: "to contact (short vowels)", de: "kontaktieren (kurze Vokale)", zh: "联系（短元音）" } },
          { id: "vl10", category: "vowel_length", translations: { ja: "けいけん", en: "experience (long けい)", de: "Erfahrung (langes けい)", zh: "经验（长音けい）" } },
          { id: "vl11", category: "vowel_length", translations: { ja: "からだ", en: "body (short vowels)", de: "Körper (kurze Vokale)", zh: "身体（短元音）" } },
          { id: "vl12", category: "vowel_length", translations: { ja: "おかね", en: "money (short vowels)", de: "Geld (kurze Vokale)", zh: "钱（短元音）" } },
          { id: "vl13", category: "vowel_length", translations: { ja: "サイズ", en: "size (diphthong-like)", de: "Größe (Diphthong-artig)", zh: "尺寸（类似双元音）" } },
          { id: "vl14", category: "vowel_length", translations: { ja: "しんせつ", en: "kind (short vowels)", de: "freundlich (kurze Vokale)", zh: "亲切（短元音）" } },

          { id: "so1", category: "sokuon", translations: { ja: "けっせき", en: "absence", de: "Abwesenheit", zh: "缺席" } },
          { id: "so2", category: "sokuon", translations: { ja: "きっと", en: "surely, certainly", de: "sicherlich", zh: "一定" } },
          { id: "so3", category: "sokuon", translations: { ja: "けっか", en: "result", de: "Ergebnis", zh: "结果" } },
          { id: "so4", category: "sokuon", translations: { ja: "けっこん", en: "marriage", de: "Heirat", zh: "结婚" } },
          { id: "so5", category: "sokuon", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
          { id: "so6", category: "sokuon", translations: { ja: "ゆっくり", en: "slowly", de: "langsam", zh: "慢慢地" } },
          { id: "so7", category: "sokuon", translations: { ja: "やっぱり", en: "as expected, after all", de: "wie erwartet", zh: "果然" } },
          { id: "so8", category: "sokuon", translations: { ja: "ずっと", en: "the whole time, by far", de: "die ganze Zeit, viel", zh: "一直，更加" } },
          { id: "so9", category: "sokuon", translations: { ja: "もっと", en: "more", de: "mehr", zh: "更" } },
          { id: "so10", category: "sokuon", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "so11", category: "sokuon", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt", zh: "出发" } },
          { id: "so12", category: "sokuon", translations: { ja: "せっけん", en: "soap", de: "Seife", zh: "肥皂" } },
          { id: "so13", category: "sokuon", translations: { ja: "ざっし", en: "magazine", de: "Zeitschrift", zh: "杂志" } },
          { id: "so14", category: "sokuon", translations: { ja: "きって", en: "stamp", de: "Briefmarke", zh: "邮票" } }
        ]
      }
    ]
  },
  song: {
    // Real, well-known Japanese localized version of "Mary Had a Little
    // Lamb" (メリーさんのひつじ) — a widely-taught traditional adaptation,
    // not an original translation.
    title: { ja: "メリーさんの ひつじ", en: "Mary Had a Little Lamb", de: "Mary hatte ein kleines Lamm" },
    lines: [
      { id: "sg1", translations: { ja: "メリーさんの ひつじ", en: "Mary's little lamb", de: "Marys kleines Lamm" } },
      { id: "sg2", translations: { ja: "ひつじ ひつじ", en: "Lamb, lamb", de: "Lamm, Lamm" } },
      { id: "sg3", translations: { ja: "メリーさんの ひつじ", en: "Mary's little lamb", de: "Marys kleines Lamm" } },
      { id: "sg4", translations: { ja: "かわいいな", en: "So cute", de: "wie niedlich" } }
    ]
  }
};
