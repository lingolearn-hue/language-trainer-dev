import type { TopicLesson } from "../topicTypes";

// A2 Topic 2 (of 3) — grammar item #17 from the A2 list: potential form
// (~られる/~れる, "can/able to"), genuinely new, not touched at A1.
// ja-only for now, same as every other topic at first.

export const topicAbilities: TopicLesson = {
  id: "topic-21-abilities",
  lessonNumber: 21,
  level: "A2",
  topicName: {
    ja: "とくいな こと", jaKanji: "得意なこと",
    en: "Things You're Good At",
    de: "Dinge, die man gut kann",
    zh: "擅长的事情"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "とくい", jaKanji: "得意", en: "good at, skilled", de: "gut in etwas", zh: "擅长" } },
    { id: "v02", category: "noun", translations: { ja: "にがて", jaKanji: "苦手", en: "bad at, poor at", de: "schlecht in etwas", zh: "不擅长" } },
    { id: "v03", category: "noun", translations: { ja: "のうりょく", jaKanji: "能力", en: "ability", de: "Fähigkeit", zh: "能力" } },
    { id: "v04", category: "noun", translations: { ja: "しゅみ", jaKanji: "趣味", en: "hobby", de: "Hobby", zh: "爱好" } },
    { id: "v05", category: "noun", translations: { ja: "すいえい", jaKanji: "水泳", en: "swimming", de: "Schwimmen", zh: "游泳" } },
    { id: "v06", category: "noun", translations: { ja: "ダンス", en: "dance", de: "Tanz", zh: "舞蹈" } },
    { id: "v07", category: "noun", translations: { ja: "ピアノ", en: "piano", de: "Klavier", zh: "钢琴" } },
    { id: "v08", category: "noun", translations: { ja: "ギター", en: "guitar", de: "Gitarre", zh: "吉他" } },
    { id: "v09", category: "noun", translations: { ja: "うた", jaKanji: "歌", en: "song", de: "Lied", zh: "歌曲" } },
    { id: "v10", category: "noun", translations: { ja: "え", jaKanji: "絵", en: "picture, drawing", de: "Bild, Zeichnung", zh: "画" } },
    { id: "v11", category: "noun", translations: { ja: "スポーツ", en: "sports", de: "Sport", zh: "体育运动" } },
    { id: "v12", category: "noun", translations: { ja: "サッカー", en: "soccer", de: "Fußball", zh: "足球" } },
    { id: "v13", category: "noun", translations: { ja: "やきゅう", jaKanji: "野球", en: "baseball", de: "Baseball", zh: "棒球" } },
    { id: "v14", category: "noun", translations: { ja: "テニス", en: "tennis", de: "Tennis", zh: "网球" } },
    { id: "v15", category: "noun", translations: { ja: "うんてん", jaKanji: "運転", en: "driving", de: "Autofahren", zh: "驾驶" } },
    { id: "v16", category: "noun", translations: { ja: "がいこくご", jaKanji: "外国語", en: "foreign language", de: "Fremdsprache", zh: "外语" } },
    { id: "v17", category: "noun", translations: { ja: "コンピューター", en: "computer", de: "Computer", zh: "电脑" } },
    { id: "v18", category: "noun", translations: { ja: "プログラミング", en: "programming", de: "Programmieren", zh: "编程" } },
    { id: "v19", category: "noun", translations: { ja: "けいさん", jaKanji: "計算", en: "calculation", de: "Rechnen", zh: "计算" } },
    { id: "v20", category: "noun", translations: { ja: "たいそう", jaKanji: "体操", en: "gymnastics", de: "Turnen", zh: "体操" } },
    { id: "v21", category: "adjective", translations: { ja: "じょうずな", jaKanji: "上手な", en: "skillful", de: "geschickt", zh: "擅长的" } },
    { id: "v22", category: "adjective", translations: { ja: "へたな", jaKanji: "下手な", en: "unskillful", de: "ungeschickt", zh: "不擅长的" } },
    { id: "v23", category: "verb", translations: { ja: "がんばる", jaKanji: "頑張る", en: "to try hard", de: "sich anstrengen", zh: "努力" } },
    { id: "v24", category: "verb", translations: { ja: "れんしゅうする", jaKanji: "練習する", en: "to practice", de: "üben", zh: "练习" } },
    { id: "v25", category: "verb", translations: { ja: "つづける", jaKanji: "続ける", en: "to continue", de: "fortsetzen", zh: "继续" } },
    { id: "v26", category: "adjective", translations: { ja: "むずかしい", jaKanji: "難しい", en: "difficult", de: "schwierig", zh: "难的" } },
    { id: "v27", category: "adjective", translations: { ja: "かんたんな", jaKanji: "簡単な", en: "easy, simple", de: "einfach", zh: "简单的" } },
    { id: "v28", category: "verb", translations: { ja: "できる", en: "to be able to do", de: "können, imstande sein", zh: "能，会" } },
    { id: "v29", category: "adjective", translations: { ja: "はやい", jaKanji: "速い", en: "fast", de: "schnell", zh: "快的" } },
    { id: "v30", category: "verb", translations: { ja: "りょうりする", jaKanji: "料理する", en: "to cook", de: "kochen", zh: "做饭" } },
    { id: "v31", category: "adverb", translations: { ja: "とても", en: "very", de: "sehr", zh: "非常" } },
    { id: "v32", category: "adverb", translations: { ja: "ぜんぜん", jaKanji: "全然", en: "not at all (with negative)", de: "überhaupt nicht", zh: "完全不" } }
  ],
  dialogueA: {
    title: { ja: "しんゆうと しゅみの はなし", jaKanji: "親友と趣味の話", en: "Talking About Hobbies with a New Friend", de: "Über Hobbys mit einem neuen Freund sprechen", zh: "和新朋友聊爱好" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しゅみは なんですか？", jaKanji: "趣味は何ですか？", en: "What's your hobby?", de: "Was ist Ihr Hobby?", zh: "你的爱好是什么？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ギターです。すこし ひけます。", jaKanji: "ギターです。少し弾けます。", en: "Guitar. I can play it a little.", de: "Gitarre. Ich kann sie ein wenig spielen.", zh: "吉他。我能弹一点。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "すごい！うたも うたえますか？", jaKanji: "すごい！歌も歌えますか？", en: "Amazing! Can you sing too?", de: "Toll! Können Sie auch singen?", zh: "真厉害！也会唱歌吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うたうのは にがてです。あいさんは？", jaKanji: "歌うのは苦手です。あいさんは？", en: "Singing, I'm not good at. What about you, Ai?", de: "Singen liegt mir nicht. Und Sie, Ai?", zh: "唱歌不太擅长。爱你呢？" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "わたしは すいえいが とくいです。", jaKanji: "私は水泳が得意です。", en: "I'm good at swimming.", de: "Ich bin gut im Schwimmen.", zh: "我擅长游泳。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "どのくらい およげますか？", jaKanji: "どのくらい泳げますか？", en: "How far can you swim?", de: "Wie weit können Sie schwimmen?", zh: "能游多远？" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "にせんメートル およげます。", jaKanji: "2000メートル泳げます。", en: "I can swim two thousand meters.", de: "Ich kann zweitausend Meter schwimmen.", zh: "能游两千米。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "すごいですね！スポーツは ほかに しますか？", jaKanji: "すごいですね！スポーツは他にしますか？", en: "That's amazing! Do you do any other sports?", de: "Erstaunlich! Machen Sie noch andere Sportarten?", zh: "真厉害！还做别的运动吗？" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "テニスも できます。でも やきゅうは できません。", jaKanji: "テニスもできます。でも野球はできません。", en: "I can also play tennis. But I can't play baseball.", de: "Ich kann auch Tennis spielen. Aber Baseball kann ich nicht.", zh: "网球也会。但棒球不会。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "え を かくのは どうですか？", jaKanji: "絵を描くのはどうですか？", en: "How about drawing pictures?", de: "Wie ist es mit Zeichnen?", zh: "画画怎么样？" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "えは あまり じょうずじゃないです。", jaKanji: "絵はあまり上手じゃないです。", en: "I'm not very good at drawing.", de: "Zeichnen kann ich nicht so gut.", zh: "画画不太擅长。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "だいじょうぶ、れんしゅうすれば じょうずに なりますよ。", jaKanji: "大丈夫、練習すれば上手になりますよ。", en: "It's okay, if you practice you'll get good at it.", de: "Kein Problem, wenn Sie üben, werden Sie gut darin.", zh: "没关系，练习了就会擅长的。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "そうですね、がんばって つづけます。", jaKanji: "そうですね、頑張って続けます。", en: "You're right, I'll keep trying.", de: "Stimmt, ich mache weiter und gebe mein Bestes.", zh: "说得对，我会继续努力的。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いっしょに れんしゅうしましょう！", jaKanji: "一緒に練習しましょう！", en: "Let's practice together!", de: "Lassen Sie uns zusammen üben!", zh: "一起练习吧！" } }
    ]
  },
  dialogueB: {
    title: { ja: "めんせつで のうりょくを はなす", jaKanji: "面接で能力を話す", en: "A Job Interview — Discussing Skills", de: "Ein Vorstellungsgespräch — über Fähigkeiten sprechen", zh: "面试——谈论能力" },
    lines: [
      { id: "e1", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "がいこくごが はなせますか？", jaKanji: "外国語が話せますか？", en: "Can you speak a foreign language?", de: "Können Sie eine Fremdsprache sprechen?", zh: "会说外语吗？" } },
      { id: "e2", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "はい、えいごと にほんごが はなせます。", jaKanji: "はい、英語と日本語が話せます。", en: "Yes, I can speak English and Japanese.", de: "Ja, ich kann Englisch und Japanisch sprechen.", zh: "是的，我会说英语和日语。" } },
      { id: "e3", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "コンピューターは つかえますか？", jaKanji: "コンピューターは使えますか？", en: "Can you use a computer?", de: "Können Sie mit einem Computer umgehen?", zh: "会用电脑吗？" } },
      { id: "e4", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "はい、プログラミングも すこし できます。", jaKanji: "はい、プログラミングも少しできます。", en: "Yes, I can also do a bit of programming.", de: "Ja, ich kann auch etwas programmieren.", zh: "是的，也会一点编程。" } },
      { id: "e5", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "けいさんは とくいですか？", jaKanji: "計算は得意ですか？", en: "Are you good at calculations?", de: "Sind Sie gut im Rechnen?", zh: "擅长计算吗？" } },
      { id: "e6", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "はい、けいさんは とくいです。はやく できます。", jaKanji: "はい、計算は得意です。速くできます。", en: "Yes, I'm good at calculations. I can do them quickly.", de: "Ja, ich bin gut im Rechnen. Ich kann es schnell.", zh: "是的，擅长计算。能算得很快。" } },
      { id: "e7", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "うんてんは できますか？", jaKanji: "運転はできますか？", en: "Can you drive?", de: "Können Sie Auto fahren?", zh: "会开车吗？" } },
      { id: "e8", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "すみません、うんてんは できません。", jaKanji: "すみません、運転はできません。", en: "I'm sorry, I can't drive.", de: "Entschuldigung, ich kann nicht Auto fahren.", zh: "对不起，不会开车。" } },
      { id: "e9", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "だいじょうぶです。むずかしい しごとも できますか？", jaKanji: "大丈夫です。難しい仕事もできますか？", en: "That's fine. Can you handle difficult work too?", de: "Kein Problem. Können Sie auch mit schwieriger Arbeit umgehen?", zh: "没关系。也能应付困难的工作吗？" } },
      { id: "e10", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "はい、がんばって つづけられます。", jaKanji: "はい、頑張って続けられます。", en: "Yes, I can keep trying hard.", de: "Ja, ich kann durchhalten und mein Bestes geben.", zh: "是的，我能坚持努力。" } },
      { id: "e11", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "しゅみは なんですか？", jaKanji: "趣味は何ですか？", en: "What's your hobby?", de: "Was ist Ihr Hobby?", zh: "你的爱好是什么？" } },
      { id: "e12", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "ピアノです。まいにち れんしゅうします。", jaKanji: "ピアノです。毎日練習します。", en: "Piano. I practice every day.", de: "Klavier. Ich übe jeden Tag.", zh: "钢琴。每天都练习。" } },
      { id: "e13", speaker: { ja: "めんせつかん", en: "Interviewer", de: "Interviewer", zh: "面试官" }, translations: { ja: "すばらしいですね。ありがとうございました。", jaKanji: "素晴らしいですね。ありがとうございました。", en: "Wonderful. Thank you very much.", de: "Wunderbar. Vielen Dank.", zh: "太棒了。非常感谢。" } },
      { id: "e14", speaker: { ja: "おうぼしゃ", en: "Applicant", de: "Bewerber/in", zh: "应聘者" }, translations: { ja: "こちらこそ、ありがとうございました。", en: "Thank you as well.", de: "Ich danke Ihnen auch.", zh: "也谢谢您。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "かのうけい：〜られる／〜れる", jaKanji: "可能形：〜られる／〜れる", en: "Potential Form: Can / Able To", de: "Potentialform: können", zh: "可能形：能/会" },
      explanation: {
        ja: "「できる」ことを いうときは、どうしを かのうけいに します。る-どうし（いちだんどうし）は「る」を とって「られる」を つけます（たべる→たべられる）。う-どうし（ごだんどうし）は さいごの おとを え-だんに かえて「る」を つけます（およぐ→およげる、はなす→はなせる）。ふきそくどうしは する→できる、くる→こられる です。", jaKanji: "「できる」ことを言うときは、動詞を可能形にします。る-動詞（一段動詞）は「る」を取って「られる」を付けます（食べる→食べられる）。う-動詞（五段動詞）は最後の音をえ段に変えて「る」を付けます（泳ぐ→泳げる、話す→話せる）。不規則動詞はする→できる、来る→来られるです。",
        en: "To say you're able to do something, change the verb into its potential form. Ru-verbs (ichidan): drop る and add られる (たべる→たべられる). U-verbs (godan): change the final sound to its e-row equivalent and add る (およぐ→およげる, はなす→はなせる). Irregular verbs: する→できる, くる→こられる.",
        de: "Um auszudrücken, dass man etwas kann, wird das Verb in die Potentialform gesetzt. Ru-Verben (Ichidan): る entfernen und られる anhängen (たべる→たべられる). U-Verben (Godan): den letzten Laut zur entsprechenden e-Reihe ändern und る anhängen (およぐ→およげる, はなす→はなせる). Unregelmäßige Verben: する→できる, くる→こられる.",
        zh: "要表达「能做某事」，需要把动词变成可能形。る动词（一段动词）：去掉る加上られる（たべる→たべられる）。う动词（五段动词）：把词尾变成え段音再加る（およぐ→およげる，はなす→はなせる）。不规则动词：する→できる，くる→こられる。"
      },
      chunks: [
        { id: "g1", translations: { ja: "わたしは およげます。", jaKanji: "私は泳げます。", en: "I can swim.", de: "Ich kann schwimmen.", zh: "我会游泳。" } },
        { id: "g2", translations: { ja: "わたしは ピアノが ひけます。", jaKanji: "私はピアノが弾けます。", en: "I can play piano.", de: "Ich kann Klavier spielen.", zh: "我会弹钢琴。" } },
        { id: "g3", translations: { ja: "かんじが よめますか？", jaKanji: "漢字が読めますか？", en: "Can you read kanji?", de: "Können Sie Kanji lesen?", zh: "你会读汉字吗？" } },
        { id: "g4", translations: { ja: "にほんごが はなせます。", jaKanji: "日本語が話せます。", en: "I can speak Japanese.", de: "Ich kann Japanisch sprechen.", zh: "我会说日语。" } },
        { id: "g5", translations: { ja: "はやく はしれません。", jaKanji: "速く走れません。", en: "I can't run fast.", de: "Ich kann nicht schnell laufen.", zh: "我不能跑得快。" } },
        { id: "g6", translations: { ja: "りょうりが できます。", jaKanji: "料理ができます。", en: "I can cook.", de: "Ich kann kochen.", zh: "我会做饭。" } }
      ]
    }
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-potential",
        title: { ja: "れんしゅう：かのうけい", en: "Practice: Potential Form", de: "Übung: Potentialform", zh: "练习：可能形" },
        spokenIntro: {
          ja: "つぎは、かのうけいを つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using the potential form.",
          de: "Als Nächstes üben wir Beispielsätze mit der Potentialform.",
          zh: "接下来，让我们练习使用可能形的例句。"
        },
        lines: [
          { id: "po1", translations: { ja: "わたしは およげます。", jaKanji: "私は泳げます。", en: "I can swim.", de: "Ich kann schwimmen.", zh: "我会游泳。" } },
          { id: "po2", translations: { ja: "にほんごが はなせます。", jaKanji: "日本語が話せます。", en: "I can speak Japanese.", de: "Ich kann Japanisch sprechen.", zh: "我会说日语。" } },
          { id: "po3", translations: { ja: "ピアノが ひけます。", jaKanji: "ピアノが弾けます。", en: "I can play piano.", de: "Ich kann Klavier spielen.", zh: "我会弹钢琴。" } },
          { id: "po4", translations: { ja: "かんじが よめますか。", jaKanji: "漢字が読めますか。", en: "Can you read kanji?", de: "Können Sie Kanji lesen?", zh: "你会读汉字吗？" } },
          { id: "po5", translations: { ja: "コンピューターが つかえます。", jaKanji: "コンピューターが使えます。", en: "I can use a computer.", de: "Ich kann einen Computer benutzen.", zh: "我会用电脑。" } },
          { id: "po6", translations: { ja: "うんてんが できません。", jaKanji: "運転ができません。", en: "I can't drive.", de: "Ich kann nicht Auto fahren.", zh: "我不会开车。" } },
          { id: "po7", translations: { ja: "はやく はしれません。", jaKanji: "速く走れません。", en: "I can't run fast.", de: "Ich kann nicht schnell laufen.", zh: "我跑不快。" } },
          { id: "po8", translations: { ja: "りょうりが できます。", jaKanji: "料理ができます。", en: "I can cook.", de: "Ich kann kochen.", zh: "我会做饭。" } },
          { id: "po9", translations: { ja: "がいこくごが はなせますか。", jaKanji: "外国語が話せますか。", en: "Can you speak a foreign language?", de: "Können Sie eine Fremdsprache sprechen?", zh: "你会说外语吗？" } },
          { id: "po10", translations: { ja: "むずかしい しごとも できます。", jaKanji: "難しい仕事もできます。", en: "I can handle difficult work too.", de: "Ich kann auch mit schwieriger Arbeit umgehen.", zh: "我也能应付困难的工作。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        katakana_long: { ja: "カタカナの ながい おん（ー）", en: "Katakana long vowel mark (ー)", de: "Katakana-Langvokalzeichen (ー)", zh: "片假名长音符号（ー）" },
        native_long: { ja: "わごの ながい ぼいん", en: "Native long vowel spelling", de: "Native Langvokal-Schreibweise", zh: "和语的长元音写法" }
      },
      items: [
        { id: "k1", category: "katakana_long", translations: { ja: "ピアノ", en: "piano", de: "Klavier", zh: "钢琴" } },
        { id: "k2", category: "katakana_long", translations: { ja: "ギター", en: "guitar", de: "Gitarre", zh: "吉他" } },
        { id: "k3", category: "katakana_long", translations: { ja: "コンピューター", en: "computer", de: "Computer", zh: "电脑" } },
        { id: "k4", category: "katakana_long", translations: { ja: "スポーツ", en: "sports", de: "Sport", zh: "体育运动" } },
        { id: "n1", category: "native_long", translations: { ja: "のうりょく", en: "ability", de: "Fähigkeit", zh: "能力" } },
        { id: "n2", category: "native_long", translations: { ja: "すいえい", en: "swimming", de: "Schwimmen", zh: "游泳" } },
        { id: "n3", category: "native_long", translations: { ja: "やきゅう", en: "baseball", de: "Baseball", zh: "棒球" } },
        { id: "n4", category: "native_long", translations: { ja: "がんばる", en: "to try hard", de: "sich anstrengen", zh: "努力" } }
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
          ra_flap: { ja: "ら行の はじきおん（ふくしゅう）", en: "Ra-row flap consonant (reinforced)", de: "Ra-Reihe: Flap-Konsonant (vertieft)", zh: "ら行的闪音（巩固）" },
          pitch: { ja: "アクセント", en: "Pitch accent", de: "Tonhöhenakzent", zh: "声调重音" },
          vowel_length: { ja: "ぼいんの ながさ", en: "Vowel length", de: "Vokallänge", zh: "元音长度" },
          sokuon: { ja: "促音（そくおん）（ふくしゅう）", en: "Sokuon (reinforced)", de: "Sokuon (vertieft)", zh: "促音（巩固）" }
        },
        items: [
          { id: "ra1", category: "ra_flap", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
          { id: "ra2", category: "ra_flap", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "做饭" } },
          { id: "ra3", category: "ra_flap", translations: { ja: "がんばる", en: "to try hard", de: "sich anstrengen", zh: "努力" } },
          { id: "ra4", category: "ra_flap", translations: { ja: "のうりょく", en: "ability", de: "Fähigkeit", zh: "能力" } },
          { id: "ra5", category: "ra_flap", translations: { ja: "ダンス", en: "dance", de: "Tanz", zh: "舞蹈" } },
          { id: "ra6", category: "ra_flap", translations: { ja: "ギター", en: "guitar", de: "Gitarre", zh: "吉他" } },
          { id: "ra7", category: "ra_flap", translations: { ja: "テニス", en: "tennis", de: "Tennis", zh: "网球" } },
          { id: "ra8", category: "ra_flap", translations: { ja: "うんてん", en: "driving", de: "Autofahren", zh: "驾驶" } },
          { id: "ra9", category: "ra_flap", translations: { ja: "リラックスする", en: "to relax", de: "sich entspannen", zh: "放松" } },
          { id: "ra10", category: "ra_flap", translations: { ja: "らいねん", en: "next year", de: "nächstes Jahr", zh: "明年" } },
          { id: "ra11", category: "ra_flap", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
          { id: "ra12", category: "ra_flap", translations: { ja: "りゆう", en: "reason", de: "Grund", zh: "理由" } },
          { id: "ra13", category: "ra_flap", translations: { ja: "ろうか", en: "hallway, corridor", de: "Flur, Korridor", zh: "走廊" } },
          { id: "ra14", category: "ra_flap", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },

          { id: "p1", category: "pitch", translations: { ja: "とくい", en: "good at", de: "gut in etwas", zh: "擅长" } },
          { id: "p2", category: "pitch", translations: { ja: "にがて", en: "bad at", de: "schlecht in etwas", zh: "不擅长" } },
          { id: "p3", category: "pitch", translations: { ja: "できる", en: "to be able to", de: "können", zh: "能" } },
          { id: "p4", category: "pitch", translations: { ja: "しゅみ", en: "hobby", de: "Hobby", zh: "爱好" } },
          { id: "p5", category: "pitch", translations: { ja: "すいえい", en: "swimming", de: "Schwimmen", zh: "游泳" } },
          { id: "p6", category: "pitch", translations: { ja: "しっぱいする", en: "to fail", de: "scheitern", zh: "失败" } },
          { id: "p7", category: "pitch", translations: { ja: "せいこうする", en: "to succeed", de: "erfolgreich sein", zh: "成功" } },
          { id: "p8", category: "pitch", translations: { ja: "きんちょうする", en: "to get nervous", de: "nervös werden", zh: "紧张" } },
          { id: "p9", category: "pitch", translations: { ja: "サッカー", en: "soccer", de: "Fußball", zh: "足球" } },
          { id: "p10", category: "pitch", translations: { ja: "やきゅう", en: "baseball", de: "Baseball", zh: "棒球" } },
          { id: "p11", category: "pitch", translations: { ja: "へたな", en: "unskillful", de: "ungeschickt", zh: "不擅长的" } },
          { id: "p12", category: "pitch", translations: { ja: "じょうずな", en: "skillful", de: "geschickt", zh: "擅长的" } },
          { id: "p13", category: "pitch", translations: { ja: "つづける", en: "to continue", de: "fortsetzen", zh: "继续" } },
          { id: "p14", category: "pitch", translations: { ja: "むずかしい", en: "difficult", de: "schwierig", zh: "难的" } },

          { id: "vl1", category: "vowel_length", translations: { ja: "こうこう", en: "high school", de: "Oberschule", zh: "高中" } },
          { id: "vl2", category: "vowel_length", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验" } },
          { id: "vl3", category: "vowel_length", translations: { ja: "きゅうか", en: "vacation, day off", de: "Urlaub", zh: "休假" } },
          { id: "vl4", category: "vowel_length", translations: { ja: "せいかつ", en: "life, lifestyle", de: "Leben", zh: "生活" } },
          { id: "vl5", category: "vowel_length", translations: { ja: "コンピューター", en: "computer", de: "Computer", zh: "电脑" } },
          { id: "vl6", category: "vowel_length", translations: { ja: "がいこくご", en: "foreign language", de: "Fremdsprache", zh: "外语" } },
          { id: "vl7", category: "vowel_length", translations: { ja: "けいさん", en: "calculation", de: "Rechnen", zh: "计算" } },
          { id: "vl8", category: "vowel_length", translations: { ja: "たいそう", en: "gymnastics", de: "Turnen", zh: "体操" } },
          { id: "vl9", category: "vowel_length", translations: { ja: "はしる", en: "to run", de: "laufen", zh: "跑步" } },
          { id: "vl10", category: "vowel_length", translations: { ja: "れんしゅうする", en: "to practice", de: "üben", zh: "练习" } },
          { id: "vl11", category: "vowel_length", translations: { ja: "げんき", en: "healthy, energetic", de: "gesund, energiegeladen", zh: "健康" } },
          { id: "vl12", category: "vowel_length", translations: { ja: "しんせつ", en: "kind", de: "freundlich", zh: "亲切" } },
          { id: "vl13", category: "vowel_length", translations: { ja: "ホテル", en: "hotel", de: "Hotel", zh: "酒店" } },
          { id: "vl14", category: "vowel_length", translations: { ja: "ざっし", en: "magazine", de: "Zeitschrift", zh: "杂志" } },

          { id: "so1", category: "sokuon", translations: { ja: "けっせき", en: "absence", de: "Abwesenheit", zh: "缺席" } },
          { id: "so2", category: "sokuon", translations: { ja: "きって", en: "stamp", de: "Briefmarke", zh: "邮票" } },
          { id: "so3", category: "sokuon", translations: { ja: "けっか", en: "result", de: "Ergebnis", zh: "结果" } },
          { id: "so4", category: "sokuon", translations: { ja: "がっき", en: "musical instrument", de: "Musikinstrument", zh: "乐器" } },
          { id: "so5", category: "sokuon", translations: { ja: "はっぴょう", en: "presentation, announcement", de: "Präsentation", zh: "发表" } },
          { id: "so6", category: "sokuon", translations: { ja: "きっと", en: "surely, certainly", de: "sicherlich", zh: "一定" } },
          { id: "so7", category: "sokuon", translations: { ja: "ゆっくり", en: "slowly", de: "langsam", zh: "慢慢地" } },
          { id: "so8", category: "sokuon", translations: { ja: "もっと", en: "more", de: "mehr", zh: "更" } },
          { id: "so9", category: "sokuon", translations: { ja: "ずっと", en: "the whole time, by far", de: "die ganze Zeit, viel", zh: "一直，更加" } },
          { id: "so10", category: "sokuon", translations: { ja: "やっぱり", en: "as expected, after all", de: "wie erwartet", zh: "果然" } },
          { id: "so11", category: "sokuon", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "so12", category: "sokuon", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt", zh: "出发" } },
          { id: "so13", category: "sokuon", translations: { ja: "けっこん", en: "marriage", de: "Heirat", zh: "结婚" } },
          { id: "so14", category: "sokuon", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } }
      ]
      }
    ]
  },
  song: {
    title: { ja: "バスの タイヤ", en: "The Wheels on the Bus", de: "Die Räder vom Bus" },
    lines: [
      { id: "sg1", translations: { ja: "バスの タイヤは まわるよ", en: "The wheels on the bus go round and round", de: "Die Räder vom Bus drehen sich und drehen sich" } },
      { id: "sg2", translations: { ja: "まわるよ まわるよ", en: "Round and round, round and round", de: "drehen sich und drehen sich" } },
      { id: "sg3", translations: { ja: "バスの タイヤは まわるよ", en: "The wheels on the bus go round and round", de: "Die Räder vom Bus drehen sich und drehen sich" } },
      { id: "sg4", translations: { ja: "まちじゅう ずっと", en: "All through the town", de: "die ganze Stadt hindurch" } }
    ]
  }
};
