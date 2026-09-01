import type { TopicLesson } from "../topicTypes";

// A2 — row 1 of docs/a2-master-lesson-table-v01.md. Grammar: ~teiru
// (present progressive / habitual / resultant state). Pronunciation 1/2
// (short vs long vowels, おう vs おお) are both FIRST occurrences in that
// table — no repeat, so no substitution needed per the "better
// pronunciation drill proposals" discussion; kept exactly as assigned.

export const topicRoutine: TopicLesson = {
  id: "topic-23-routine",
  lessonNumber: 23,
  level: "A2",
  topicName: {
    ja: "にちじょう", jaKanji: "日常",
    en: "Daily Routine",
    de: "Alltag",
    zh: "日常生活"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "まいあさ", jaKanji: "毎朝", en: "every morning", de: "jeden Morgen", zh: "每天早上" } },
    { id: "v02", category: "noun", translations: { ja: "はやおき", jaKanji: "早起き", en: "getting up early", de: "frühes Aufstehen", zh: "早起" } },
    { id: "v03", category: "verb", translations: { ja: "めざめる", jaKanji: "目覚める", en: "to wake up", de: "aufwachen", zh: "醒来" } },
    { id: "v04", category: "noun", translations: { ja: "はみがき", jaKanji: "歯磨き", en: "tooth-brushing", de: "Zähneputzen", zh: "刷牙" } },
    { id: "v05", category: "verb", translations: { ja: "あらう", jaKanji: "洗う", en: "to wash", de: "waschen", zh: "洗" } },
    { id: "v06", category: "noun", translations: { ja: "ちょうしょく", jaKanji: "朝食", en: "breakfast", de: "Frühstück", zh: "早餐" } },
    { id: "v07", category: "noun", translations: { ja: "ゆうしょく", jaKanji: "夕食", en: "dinner", de: "Abendessen", zh: "晚餐" } },
    { id: "v08", category: "noun", translations: { ja: "しょくじ", jaKanji: "食事", en: "meal", de: "Mahlzeit", zh: "用餐" } },
    { id: "v09", category: "noun", translations: { ja: "つうきん", jaKanji: "通勤", en: "commuting to work", de: "Arbeitsweg", zh: "通勤" } },
    { id: "v10", category: "verb", translations: { ja: "でる", jaKanji: "出る", en: "to leave, go out", de: "hinausgehen", zh: "出门" } },
    { id: "v11", category: "verb", translations: { ja: "とる", jaKanji: "取る", en: "to take (a break, time)", de: "nehmen (Pause, Zeit)", zh: "休（假），花（时间）" } },
    { id: "v12", category: "noun", translations: { ja: "きゅうけい", jaKanji: "休憩", en: "break, rest period", de: "Pause", zh: "休息时间" } },
    { id: "v13", category: "noun", translations: { ja: "すいみん", jaKanji: "睡眠", en: "sleep", de: "Schlaf", zh: "睡眠" } },
    { id: "v14", category: "noun", translations: { ja: "おふろ", jaKanji: "お風呂", en: "bath", de: "Bad", zh: "洗澡" } },
    { id: "v15", category: "noun", translations: { ja: "しゅうかん", jaKanji: "習慣", en: "habit", de: "Gewohnheit", zh: "习惯" } },
    { id: "v16", category: "noun", translations: { ja: "かじ", jaKanji: "家事", en: "housework", de: "Hausarbeit", zh: "家务" } },
    { id: "v17", category: "noun", translations: { ja: "せわ", jaKanji: "世話", en: "care, looking after", de: "Fürsorge, Pflege", zh: "照顾" } },
    { id: "v18", category: "noun", translations: { ja: "ペット", en: "pet", de: "Haustier", zh: "宠物" } },
    { id: "v19", category: "noun", translations: { ja: "にっき", jaKanji: "日記", en: "diary", de: "Tagebuch", zh: "日记" } },
    { id: "v20", category: "verb", translations: { ja: "すごす", jaKanji: "過ごす", en: "to spend (time)", de: "verbringen", zh: "度过" } },
    { id: "v21", category: "noun", translations: { ja: "リズム", en: "rhythm", de: "Rhythmus", zh: "节奏" } },
    { id: "v22", category: "noun", translations: { ja: "よてい", jaKanji: "予定", en: "plan, schedule", de: "Vorhaben, Plan", zh: "计划，安排" } },
    { id: "v23", category: "verb", translations: { ja: "のる", jaKanji: "乗る", en: "to ride, board", de: "einsteigen", zh: "乘坐" } },
    { id: "v24", category: "verb", translations: { ja: "おりる", jaKanji: "降りる", en: "to get off (a vehicle)", de: "aussteigen", zh: "下车" } },
    { id: "v25", category: "verb", translations: { ja: "しゅっぱつする", jaKanji: "出発する", en: "to depart", de: "abfahren", zh: "出发" } },
    { id: "v26", category: "verb", translations: { ja: "とうちゃくする", jaKanji: "到着する", en: "to arrive", de: "ankommen", zh: "到达" } },
    { id: "v27", category: "verb", translations: { ja: "ふる", jaKanji: "降る", en: "to fall (rain, snow)", de: "fallen (Regen, Schnee)", zh: "下（雨/雪）" } },
    { id: "v28", category: "verb", translations: { ja: "けっこんする", jaKanji: "結婚する", en: "to get married", de: "heiraten", zh: "结婚" } },
    { id: "v29", category: "adverb", translations: { ja: "いつも", en: "always", de: "immer", zh: "总是" } },
    { id: "v30", category: "adverb", translations: { ja: "たいてい", jaKanji: "大抵", en: "usually", de: "meistens", zh: "通常" } }
  ],
  dialogueA: {
    title: { ja: "にちじょうの りずむを はなす", jaKanji: "日常のリズムを話す", en: "Describing Your Daily Routine", de: "Über den eigenen Tagesablauf sprechen", zh: "介绍日常生活" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "まいあさ なんじに めざめますか？", jaKanji: "毎朝何時に目覚めますか？", en: "What time do you wake up every morning?", de: "Um wie viel Uhr wachen Sie jeden Morgen auf?", zh: "每天早上几点醒来？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "たいてい ろくじに めざめています。はやおきです。", jaKanji: "大抵6時に目覚めています。早起きです。", en: "I usually wake up at six. I'm an early riser.", de: "Ich wache meistens um sechs auf. Ich bin ein Frühaufsteher.", zh: "通常六点醒。我起得很早。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "めざめてから、なにを しますか？", jaKanji: "目覚めてから、何をしますか？", en: "What do you do after waking up?", de: "Was machen Sie, nachdem Sie aufgewacht sind?", zh: "醒来之后做什么？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はみがきを して、かおを あらって、ちょうしょくを たべています。", jaKanji: "歯磨きをして、顔を洗って、朝食を食べています。", en: "I brush my teeth, wash my face, and eat breakfast.", de: "Ich putze mir die Zähne, wasche mein Gesicht und esse Frühstück.", zh: "刷牙、洗脸，然后吃早餐。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "そのあと、つうきんしますか？", jaKanji: "その後、通勤しますか？", en: "After that, do you commute to work?", de: "Danach fahren Sie zur Arbeit?", zh: "之后就去上班吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、でんしゃに のって、かいしゃに とうちゃくします。", jaKanji: "はい、電車に乗って、会社に到着します。", en: "Yes, I ride the train and arrive at the office.", de: "Ja, ich fahre mit dem Zug und komme im Büro an.", zh: "是的，坐电车到公司。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しごとちゅうに きゅうけいは ありますか？", jaKanji: "仕事中に休憩はありますか？", en: "Do you take a break during work?", de: "Machen Sie während der Arbeit eine Pause?", zh: "工作中有休息时间吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、ひるに きゅうけいを とっています。", jaKanji: "はい、昼に休憩を取っています。", en: "Yes, I take a break at noon.", de: "Ja, ich mache mittags eine Pause.", zh: "有，中午会休息。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いえに かえってから、なにを しますか？", jaKanji: "家に帰ってから、何をしますか？", en: "What do you do after you get home?", de: "Was machen Sie, nachdem Sie nach Hause gekommen sind?", zh: "回家之后做什么？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "おふろに はいってから、かじを します。ペットの せわも しています。", jaKanji: "お風呂に入ってから、家事をします。ペットの世話もしています。", en: "I take a bath, then do housework. I also take care of my pet.", de: "Ich nehme ein Bad und mache dann Hausarbeit. Ich kümmere mich auch um mein Haustier.", zh: "先洗澡，然后做家务。也照顾宠物。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "まいにち にっきを かいていますか？", jaKanji: "毎日日記を書いていますか？", en: "Do you write in a diary every day?", de: "Schreiben Sie jeden Tag Tagebuch?", zh: "每天写日记吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、ねるまえに かいています。", jaKanji: "はい、寝る前に書いています。", en: "Yes, I write before going to sleep.", de: "Ja, ich schreibe vor dem Schlafengehen.", zh: "对，睡前会写。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しゅうかんが しっかり ありますね。しょくじも きちんと していますね。", jaKanji: "習慣がしっかりありますね。食事もきちんとしていますね。", en: "You really have solid habits. You handle meals properly too.", de: "Sie haben wirklich gute Gewohnheiten. Sie kümmern sich auch gut um Ihre Mahlzeiten.", zh: "习惯真的很好呢。用餐也很规律呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いつも おなじ リズムで すごしています。すいみんも だいじですね。", jaKanji: "いつも同じリズムで過ごしています。睡眠も大事ですね。", en: "I always spend my days with the same rhythm. Sleep is important too.", de: "Ich verbringe meine Tage immer im gleichen Rhythmus. Schlaf ist auch wichtig.", zh: "我总是按照同样的节奏生活。睡眠也很重要呢。" } }
    ]
  },
  dialogueB: {
    title: { ja: "でんわで いま なにを しているか きく", jaKanji: "電話で今何をしているか聞く", en: "Asking What Someone Is Doing (by Phone)", de: "Am Telefon fragen, was jemand gerade macht", zh: "打电话问对方在做什么" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "もしもし、いま なにを していますか？", jaKanji: "もしもし、今何をしていますか？", en: "Hello, what are you doing right now?", de: "Hallo, was machen Sie gerade?", zh: "喂，你现在在做什么？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ゆうしょくを たべています。", jaKanji: "夕食を食べています。", en: "I'm eating dinner.", de: "Ich esse gerade zu Abend.", zh: "在吃晚饭。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あ、ごめんなさい。あとで れんらくします。", jaKanji: "あ、ごめんなさい。後で連絡します。", en: "Oh, sorry. I'll contact you later.", de: "Oh, Entschuldigung. Ich melde mich später.", zh: "啊，抱歉。我稍后再联系你。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だいじょうぶですよ。もう すぐ おわります。", jaKanji: "大丈夫ですよ。もうすぐ終わります。", en: "It's fine. I'll be done soon.", de: "Kein Problem. Ich bin gleich fertig.", zh: "没关系。马上就吃完了。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そとで あめが ふっていますよ。", jaKanji: "外で雨が降っていますよ。", en: "It's raining outside, you know.", de: "Draußen regnet es übrigens.", zh: "外面正在下雨呢。" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ほんとうですか。かさを もっていきます。", jaKanji: "本当ですか。傘を持っていきます。", en: "Really? I'll bring an umbrella.", de: "Wirklich? Ich nehme einen Regenschirm mit.", zh: "真的吗？我带伞出门吧。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きょう なにか よていが ありますか？", jaKanji: "今日何か予定がありますか？", en: "Do you have any plans today?", de: "Haben Sie heute etwas vor?", zh: "今天有什么安排吗？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、ともだちが けっこんしているので、パーティーに いきます。", jaKanji: "はい、友達が結婚しているので、パーティーに行きます。", en: "Yes, my friend is married, so I'm going to a party.", de: "Ja, mein Freund ist verheiratet, also gehe ich auf eine Party.", zh: "是的，朋友结婚了，我要去参加派对。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いいですね！なんじに しゅっぱつしますか？", jaKanji: "いいですね！何時に出発しますか？", en: "Nice! What time are you departing?", de: "Schön! Um wie viel Uhr fahren Sie los?", zh: "真好！几点出发？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "しちじに でます。でんしゃに のって いきます。", jaKanji: "7時に出ます。電車に乗って行きます。", en: "I'll leave at seven. I'll go by train.", de: "Ich gehe um sieben. Ich fahre mit dem Zug.", zh: "七点出门。坐电车去。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どこの えきで おりますか？", jaKanji: "どこの駅で降りますか？", en: "Which station do you get off at?", de: "An welcher Station steigen Sie aus?", zh: "在哪个车站下车？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ちゅうおうえきで おります。", jaKanji: "中央駅で降ります。", en: "I get off at Central Station.", de: "Ich steige an der Central Station aus.", zh: "在中央站下车。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たのしんで きてくださいね。", jaKanji: "楽しんできてくださいね。", en: "Have a good time!", de: "Viel Spaß dabei!", zh: "祝你玩得开心！" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ありがとう。あとで れんらくしますね。", jaKanji: "ありがとう。後で連絡しますね。", en: "Thanks. I'll contact you later.", de: "Danke. Ich melde mich später.", zh: "谢谢。我稍后联系你。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ている：しんこうけい・しゅうかん・けっか", jaKanji: "〜ている：進行形・習慣・結果", en: "~Teiru: Progressive, Habitual, and Resultant State", de: "~Teiru: Verlaufsform, Gewohnheit und Zustand", zh: "〜ている：进行、习惯、结果状态" },
      explanation: {
        ja: "「て-けい＋いる」には みっつの いみが あります。①いま している こと（たべています＝いま たべている）。②いつもの しゅうかん（まいあさ はしっています＝まいあさ はしる しゅうかんが ある）。③けっかの じょうたい（けっこんしています＝けっこんして、いまも その じょうたい）。ぶんみゃくで どの いみか わかります。", jaKanji: "「て形＋いる」には三つの意味があります。①今している事（食べています＝今食べている）。②いつもの習慣（毎朝走っています＝毎朝走る習慣がある）。③結果の状態（結婚しています＝結婚して、今もその状態）。文脈でどの意味か分かります。",
        en: "\"Te-form + いる\" has three meanings. (1) An action happening right now (たべています = is eating right now). (2) A habitual, repeated action (まいあさ はしっています = has a habit of running every morning). (3) A resultant state (けっこんしています = got married, and is still in that state now). Context tells you which meaning applies.",
        de: "\"Te-Form + いる\" hat drei Bedeutungen. (1) Eine Handlung, die gerade jetzt passiert (たべています = isst gerade). (2) Eine gewohnheitsmäßige, wiederholte Handlung (まいあさ はしっています = hat die Gewohnheit, jeden Morgen zu laufen). (3) Ein resultierender Zustand (けっこんしています = hat geheiratet und befindet sich noch in diesem Zustand). Der Kontext zeigt, welche Bedeutung gemeint ist.",
        zh: "「て形+いる」有三种含义。①正在进行的动作（たべています=正在吃）。②习惯性、重复性的动作（まいあさ はしっています=有每天早上跑步的习惯）。③结果状态（けっこんしています=已经结婚，现在仍处于这个状态）。根据语境判断具体含义。"
      },
      chunks: [
        { id: "g1", translations: { ja: "いま ごはんを たべています。", jaKanji: "今ご飯を食べています。", en: "I'm eating right now. (progressive)", de: "Ich esse gerade. (Verlaufsform)", zh: "我现在正在吃饭。（进行）" } },
        { id: "g2", translations: { ja: "まいあさ はしっています。", jaKanji: "毎朝走っています。", en: "I run every morning. (habitual)", de: "Ich laufe jeden Morgen. (Gewohnheit)", zh: "我每天早上跑步。（习惯）" } },
        { id: "g3", translations: { ja: "なにを していますか？", jaKanji: "何をしていますか？", en: "What are you doing? (progressive question)", de: "Was machen Sie? (Frage zur Verlaufsform)", zh: "你在做什么？（进行时提问）" } },
        { id: "g4", translations: { ja: "かれは けっこんしています。", jaKanji: "彼は結婚しています。", en: "He is married. (resultant state)", de: "Er ist verheiratet. (Zustand)", zh: "他已经结婚了。（结果状态）" } },
        { id: "g5", translations: { ja: "あめが ふっています。", jaKanji: "雨が降っています。", en: "It's raining. (progressive)", de: "Es regnet. (Verlaufsform)", zh: "正在下雨。（进行）" } },
        { id: "g6", translations: { ja: "まいにち にっきを かいています。", jaKanji: "毎日日記を書いています。", en: "I write in a diary every day. (habitual)", de: "Ich schreibe jeden Tag Tagebuch. (Gewohnheit)", zh: "我每天写日记。（习惯）" } }
      ]
    }
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-progressive",
        title: { ja: "れんしゅう：しんこうけい", en: "Practice: Progressive", de: "Übung: Verlaufsform", zh: "练习：进行时" },
        spokenIntro: {
          ja: "つぎは、いま している ことを あらわす れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice sentences expressing what's happening right now.",
          de: "Als Nächstes üben wir Sätze, die ausdrücken, was gerade passiert.",
          zh: "接下来，让我们练习表示正在发生的事情的例句。"
        },
        lines: [
          { id: "pr1", translations: { ja: "いま ごはんを たべています。", jaKanji: "今ご飯を食べています。", en: "I'm eating right now.", de: "Ich esse gerade.", zh: "我现在正在吃饭。" } },
          { id: "pr2", translations: { ja: "いま べんきょうしています。", jaKanji: "今勉強しています。", en: "I'm studying right now.", de: "Ich lerne gerade.", zh: "我现在正在学习。" } },
          { id: "pr3", translations: { ja: "あめが ふっています。", jaKanji: "雨が降っています。", en: "It's raining.", de: "Es regnet.", zh: "正在下雨。" } },
          { id: "pr4", translations: { ja: "こどもが あそんでいます。", jaKanji: "子供が遊んでいます。", en: "The child is playing.", de: "Das Kind spielt.", zh: "孩子在玩。" } },
          { id: "pr5", translations: { ja: "なにを していますか。", jaKanji: "何をしていますか。", en: "What are you doing?", de: "Was machen Sie?", zh: "你在做什么？" } },
          { id: "pr6", translations: { ja: "でんわで はなしています。", jaKanji: "電話で話しています。", en: "I'm talking on the phone.", de: "Ich telefoniere gerade.", zh: "我正在打电话。" } },
          { id: "pr7", translations: { ja: "しゃしんを とっています。", jaKanji: "写真を撮っています。", en: "I'm taking a photo.", de: "Ich mache gerade ein Foto.", zh: "我正在拍照。" } },
          { id: "pr8", translations: { ja: "かいぎで はなしています。", jaKanji: "会議で話しています。", en: "I'm speaking at the meeting.", de: "Ich spreche gerade auf der Besprechung.", zh: "我正在会议上发言。" } },
          { id: "pr9", translations: { ja: "おんがくを ききながら はたらいています。", jaKanji: "音楽を聞きながら働いています。", en: "I'm working while listening to music.", de: "Ich arbeite, während ich Musik höre.", zh: "我正边听音乐边工作。" } },
          { id: "pr10", translations: { ja: "いま でかけています。", jaKanji: "今出かけています。", en: "I'm out right now.", de: "Ich bin gerade unterwegs.", zh: "我现在正在外面。" } }
        ]
      },
      {
        id: "grammar-drill-habitual",
        title: { ja: "れんしゅう：しゅうかん", en: "Practice: Habitual", de: "Übung: Gewohnheit", zh: "练习：习惯" },
        spokenIntro: {
          ja: "つぎは、いつもの しゅうかんを あらわす れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice sentences expressing habitual actions.",
          de: "Als Nächstes üben wir Sätze, die gewohnheitsmäßige Handlungen ausdrücken.",
          zh: "接下来，让我们练习表示习惯性动作的例句。"
        },
        lines: [
          { id: "ha1", translations: { ja: "まいあさ はしっています。", jaKanji: "毎朝走っています。", en: "I run every morning.", de: "Ich laufe jeden Morgen.", zh: "我每天早上跑步。" } },
          { id: "ha2", translations: { ja: "まいにち にっきを かいています。", jaKanji: "毎日日記を書いています。", en: "I write in a diary every day.", de: "Ich schreibe jeden Tag Tagebuch.", zh: "我每天写日记。" } },
          { id: "ha3", translations: { ja: "まいしゅう にほんごを べんきょうしています。", jaKanji: "毎週日本語を勉強しています。", en: "I study Japanese every week.", de: "Ich lerne jede Woche Japanisch.", zh: "我每周学习日语。" } },
          { id: "ha4", translations: { ja: "まいばん ほんを よんでいます。", jaKanji: "毎晩本を読んでいます。", en: "I read a book every night.", de: "Ich lese jeden Abend ein Buch.", zh: "我每晚读书。" } },
          { id: "ha5", translations: { ja: "しゅうまつごとに テニスを しています。", jaKanji: "週末ごとにテニスをしています。", en: "I play tennis every weekend.", de: "Ich spiele jedes Wochenende Tennis.", zh: "我每个周末打网球。" } },
          { id: "ha6", translations: { ja: "まいつき びじゅつかんに いっています。", jaKanji: "毎月美術館に行っています。", en: "I go to the art museum every month.", de: "Ich gehe jeden Monat ins Kunstmuseum.", zh: "我每月去美术馆。" } },
          { id: "ha7", translations: { ja: "まいあさ コーヒーを のんでいます。", jaKanji: "毎朝コーヒーを飲んでいます。", en: "I drink coffee every morning.", de: "Ich trinke jeden Morgen Kaffee.", zh: "我每天早上喝咖啡。" } },
          { id: "ha8", translations: { ja: "しごとの あとで ジムに かよっています。", jaKanji: "仕事の後でジムに通っています。", en: "I go to the gym after work.", de: "Ich gehe nach der Arbeit ins Fitnessstudio.", zh: "我下班后去健身房。" } },
          { id: "ha9", translations: { ja: "まいねん りょこうを しています。", jaKanji: "毎年旅行をしています。", en: "I travel every year.", de: "Ich reise jedes Jahr.", zh: "我每年都去旅行。" } },
          { id: "ha10", translations: { ja: "まいばん シャワーを あびています。", jaKanji: "毎晩シャワーを浴びています。", en: "I take a shower every night.", de: "Ich dusche jeden Abend.", zh: "我每晚洗澡。" } }
        ]
      },
      {
        id: "grammar-drill-resultant",
        title: { ja: "れんしゅう：けっかの じょうたい", en: "Practice: Resultant State", de: "Übung: Zustand", zh: "练习：结果状态" },
        spokenIntro: {
          ja: "つぎは、けっかの じょうたいを あらわす れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice sentences expressing a resultant state.",
          de: "Als Nächstes üben wir Sätze, die einen resultierenden Zustand ausdrücken.",
          zh: "接下来，让我们练习表示结果状态的例句。"
        },
        lines: [
          { id: "re1", translations: { ja: "かれは けっこんしています。", jaKanji: "彼は結婚しています。", en: "He is married.", de: "Er ist verheiratet.", zh: "他已经结婚了。" } },
          { id: "re2", translations: { ja: "わたしは とうきょうに すんでいます。", jaKanji: "私は東京に住んでいます。", en: "I live in Tokyo.", de: "Ich wohne in Tokio.", zh: "我住在东京。" } },
          { id: "re3", translations: { ja: "まどが あいています。", jaKanji: "窓が開いています。", en: "The window is open.", de: "Das Fenster ist offen.", zh: "窗户开着。" } },
          { id: "re4", translations: { ja: "みせが しまっています。", jaKanji: "店が閉まっています。", en: "The store is closed.", de: "Das Geschäft ist geschlossen.", zh: "商店关着门。" } },
          { id: "re5", translations: { ja: "でんきが ついています。", jaKanji: "電気がついています。", en: "The light is on.", de: "Das Licht ist an.", zh: "灯开着。" } },
          { id: "re6", translations: { ja: "くるまが とまっています。", jaKanji: "車が止まっています。", en: "The car is parked.", de: "Das Auto steht.", zh: "车停着。" } },
          { id: "re7", translations: { ja: "かべに えが かかっています。", jaKanji: "壁に絵がかかっています。", en: "A picture is hanging on the wall.", de: "An der Wand hängt ein Bild.", zh: "墙上挂着一幅画。" } },
          { id: "re8", translations: { ja: "かのじょは めがねを かけています。", jaKanji: "彼女はめがねをかけています。", en: "She is wearing glasses.", de: "Sie trägt eine Brille.", zh: "她戴着眼镜。" } },
          { id: "re9", translations: { ja: "つくえの うえに ほんが のっています。", jaKanji: "机の上に本が乗っています。", en: "A book is on the desk.", de: "Auf dem Schreibtisch liegt ein Buch.", zh: "桌子上放着一本书。" } },
          { id: "re10", translations: { ja: "かれは しごとを やめています。", jaKanji: "彼は仕事を辞めています。", en: "He has quit his job.", de: "Er hat seinen Job aufgegeben.", zh: "他已经辞职了。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        vowel_length: { ja: "ぼいんの ながさ", en: "Short vs long vowels", de: "Kurze vs. lange Vokale", zh: "短元音与长元音" },
        ou_oo: { ja: "おう と おお", en: "おう vs おお", de: "おう vs おお", zh: "おう与おお" }
      },
      items: [
        { id: "vl1", category: "vowel_length", translations: { ja: "かふん", en: "pollen", de: "Blütenstaub", zh: "花粉" } },
        { id: "vl2", category: "vowel_length", translations: { ja: "スカーフ", en: "scarf", de: "Schal", zh: "围巾" } },
        { id: "vl3", category: "vowel_length", translations: { ja: "かじ", en: "housework", de: "Hausarbeit", zh: "家务" } },
        { id: "vl4", category: "vowel_length", translations: { ja: "すうじ", en: "number", de: "Zahl", zh: "数字" } },
        { id: "ou1", category: "ou_oo", translations: { ja: "もう", en: "already, now", de: "schon, jetzt", zh: "已经" } },
        { id: "ou2", category: "ou_oo", translations: { ja: "おおきい", en: "big", de: "groß", zh: "大的" } },
        { id: "ou3", category: "ou_oo", translations: { ja: "こう", en: "like this, this way", de: "so, auf diese Weise", zh: "这样" } },
        { id: "ou4", category: "ou_oo", translations: { ja: "こおり", en: "ice", de: "Eis", zh: "冰" } }
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
          short_vowel: { ja: "たんぼいん（みじかい）", en: "Short vowel", de: "Kurzer Vokal", zh: "短元音" },
          long_vowel: { ja: "ちょうぼいん（ながい）", en: "Long vowel", de: "Langer Vokal", zh: "长元音" },
          ou: { ja: "おう", en: "おう", de: "おう", zh: "おう" },
          oo: { ja: "おお", en: "おお", de: "おお", zh: "おお" }
        },
        pairedColumns: [["short_vowel", "long_vowel"]],
        items: [
          { id: "s1", category: "short_vowel", translations: { ja: "おじさん", en: "uncle", de: "Onkel", zh: "叔叔，伯伯" } },
          { id: "s2", category: "short_vowel", translations: { ja: "おばさん", en: "aunt", de: "Tante", zh: "阿姨，姑姑" } },
          { id: "s3", category: "short_vowel", translations: { ja: "ビル", en: "building", de: "Gebäude", zh: "大楼" } },
          { id: "s4", category: "short_vowel", translations: { ja: "ゆき", en: "snow", de: "Schnee", zh: "雪" } },
          { id: "s5", category: "short_vowel", translations: { ja: "ここ", en: "here", de: "hier", zh: "这里" } },
          { id: "s6", category: "short_vowel", translations: { ja: "きて", en: "come", de: "komm", zh: "来" } },
          { id: "s7", category: "short_vowel", translations: { ja: "え", en: "picture", de: "Bild", zh: "画" } },
          { id: "s8", category: "short_vowel", translations: { ja: "おば", en: "aunt", de: "Tante", zh: "阿姨" } },
          { id: "s9", category: "short_vowel", translations: { ja: "おじ", en: "uncle", de: "Onkel", zh: "叔叔" } },
          { id: "s10", category: "short_vowel", translations: { ja: "とる", en: "to take", de: "nehmen", zh: "拿，取" } },
          { id: "s11", category: "short_vowel", translations: { ja: "くき", en: "stem", de: "Stängel", zh: "茎" } },
          { id: "s12", category: "short_vowel", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
          { id: "s13", category: "short_vowel", translations: { ja: "かど", en: "corner", de: "Ecke", zh: "角落" } },
          { id: "s14", category: "short_vowel", translations: { ja: "ゆめ", en: "dream", de: "Traum", zh: "梦" } },

          { id: "l1", category: "long_vowel", translations: { ja: "おじいさん", en: "grandfather", de: "Großvater", zh: "爷爷，外公" } },
          { id: "l2", category: "long_vowel", translations: { ja: "おばあさん", en: "grandmother", de: "Großmutter", zh: "奶奶，外婆" } },
          { id: "l3", category: "long_vowel", translations: { ja: "ビール", en: "beer", de: "Bier", zh: "啤酒" } },
          { id: "l4", category: "long_vowel", translations: { ja: "ゆうき", en: "courage", de: "Mut", zh: "勇气" } },
          { id: "l5", category: "long_vowel", translations: { ja: "とけい", en: "clock, watch", de: "Uhr", zh: "钟表" } },
          { id: "l6", category: "long_vowel", translations: { ja: "きいて", en: "listen, ask", de: "hör zu, frag", zh: "听，问" } },
          { id: "l7", category: "long_vowel", translations: { ja: "ええ", en: "yes, indeed", de: "ja, genau", zh: "是，嗯" } },
          { id: "l8", category: "long_vowel", translations: { ja: "おばあちゃん", en: "grandma", de: "Oma", zh: "奶奶" } },
          { id: "l9", category: "long_vowel", translations: { ja: "おじいちゃん", en: "grandpa", de: "Opa", zh: "爷爷" } },
          { id: "l10", category: "long_vowel", translations: { ja: "ゆうびん", en: "mail, postal service", de: "Post", zh: "邮件" } },
          { id: "l11", category: "long_vowel", translations: { ja: "くうき", en: "air", de: "Luft", zh: "空气" } },
          { id: "l12", category: "long_vowel", translations: { ja: "すうじ", en: "number", de: "Zahl", zh: "数字" } },
          { id: "l13", category: "long_vowel", translations: { ja: "カード", en: "card", de: "Karte", zh: "卡片" } },
          { id: "l14", category: "long_vowel", translations: { ja: "ゆうめい", en: "famous", de: "berühmt", zh: "有名" } },

          { id: "ou1", category: "ou", translations: { ja: "こうこう", en: "high school", de: "Oberschule", zh: "高中" } },
          { id: "ou2", category: "ou", translations: { ja: "とうきょう", en: "Tokyo", de: "Tokio", zh: "东京" } },
          { id: "ou3", category: "ou", translations: { ja: "こうえん", en: "park", de: "Park", zh: "公园" } },
          { id: "ou4", category: "ou", translations: { ja: "どうぶつ", en: "animal", de: "Tier", zh: "动物" } },
          { id: "ou5", category: "ou", translations: { ja: "しょうがっこう", en: "elementary school", de: "Grundschule", zh: "小学" } },
          { id: "ou6", category: "ou", translations: { ja: "おとうさん", en: "father", de: "Vater", zh: "爸爸" } },
          { id: "ou7", category: "ou", translations: { ja: "おとうと", en: "younger brother", de: "jüngerer Bruder", zh: "弟弟" } },
          { id: "ou8", category: "ou", translations: { ja: "こうちゃ", en: "black tea", de: "Schwarztee", zh: "红茶" } },
          { id: "ou9", category: "ou", translations: { ja: "そうじ", en: "cleaning", de: "Putzen", zh: "打扫" } },
          { id: "ou10", category: "ou", translations: { ja: "ほうき", en: "broom", de: "Besen", zh: "扫帚" } },
          { id: "ou11", category: "ou", translations: { ja: "ほうほう", en: "method, way", de: "Methode", zh: "方法" } },
          { id: "ou12", category: "ou", translations: { ja: "しょうたい", en: "invitation", de: "Einladung", zh: "邀请" } },
          { id: "ou13", category: "ou", translations: { ja: "こうちょう", en: "principal", de: "Schulleiter", zh: "校长" } },
          { id: "ou14", category: "ou", translations: { ja: "きょう", en: "today", de: "heute", zh: "今天" } },

          { id: "oo1", category: "oo", translations: { ja: "おおきい", en: "big", de: "groß", zh: "大的" } },
          { id: "oo2", category: "oo", translations: { ja: "おおい", en: "many", de: "viele", zh: "多的" } },
          { id: "oo3", category: "oo", translations: { ja: "おおきな", en: "big", de: "groß", zh: "大的" } },
          { id: "oo4", category: "oo", translations: { ja: "とおい", en: "far", de: "weit", zh: "远的" } },
          { id: "oo5", category: "oo", translations: { ja: "とおる", en: "to pass through", de: "durchqueren", zh: "通过" } },
          { id: "oo6", category: "oo", translations: { ja: "おおむかし", en: "long, long ago", de: "vor langer Zeit", zh: "很久以前" } },
          { id: "oo7", category: "oo", translations: { ja: "おおあめ", en: "heavy rain", de: "heftiger Regen", zh: "大雨" } },
          { id: "oo8", category: "oo", translations: { ja: "おおゆき", en: "heavy snow", de: "heftiger Schnee", zh: "大雪" } },
          { id: "oo9", category: "oo", translations: { ja: "おおごえ", en: "loud voice", de: "laute Stimme", zh: "大声" } },
          { id: "oo10", category: "oo", translations: { ja: "おおぞら", en: "sky", de: "weiter Himmel", zh: "天空" } },
          { id: "oo11", category: "oo", translations: { ja: "おおよそ", en: "approximately", de: "ungefähr", zh: "大概" } },
          { id: "oo12", category: "oo", translations: { ja: "おおやけ", en: "public, official", de: "öffentlich", zh: "公开的，官方的" } },
          { id: "oo13", category: "oo", translations: { ja: "おおどおり", en: "main street", de: "Hauptstraße", zh: "大街" } },
          { id: "oo14", category: "oo", translations: { ja: "おおさか", en: "Osaka", de: "Osaka", zh: "大阪" } }
      ]
      }
    ]
  },
  song: {
    title: { ja: "きらきら ぼし", en: "Twinkle Twinkle Little Star", de: "Funkle, funkle kleiner Stern" },
    lines: [
      { id: "sg1", translations: { ja: "きらきら ひかる", en: "Twinkle, twinkle, little star", de: "Funkle, funkle, kleiner Stern" } },
      { id: "sg2", translations: { ja: "おそらの ほしよ", en: "How I wonder what you are", de: "wie ich mich frage, was du bist" } },
      { id: "sg3", translations: { ja: "まちの うえに たかく", en: "Up above the world so high", de: "hoch über der Welt" } },
      { id: "sg4", translations: { ja: "ダイヤモンドの ように", en: "Like a diamond in the sky", de: "wie ein Diamant am Himmel" } }
    ]
  }
};
