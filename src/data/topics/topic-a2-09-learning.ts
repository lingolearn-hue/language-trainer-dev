import type { TopicLesson } from "../topicTypes";

// A2 — row 11 of docs/a2-master-lesson-table-v01.md. Grammar: ~youni
// naru (coming to be able to / change over time). Pronunciation 1/2
// (Japanese R vs L, H vs F) kept exactly as assigned.

export const topicLearning: TopicLesson = {
  id: "topic-a2-09-learning",
  lessonNumber: 9,
  level: "A2",
  topicName: {
    ja: "がくしゅう", jaKanji: "学習",
    en: "Learning",
    de: "Lernen",
    zh: "学习"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "がくしゅう", jaKanji: "学習", en: "learning, study", de: "Lernen", zh: "学习" } },
    { id: "v02", category: "noun", translations: { ja: "はつおん", jaKanji: "発音", en: "pronunciation", de: "Aussprache", zh: "发音" } },
    { id: "v03", category: "noun", translations: { ja: "ぶんぽう", jaKanji: "文法", en: "grammar", de: "Grammatik", zh: "语法" } },
    { id: "v04", category: "noun", translations: { ja: "たんご", jaKanji: "単語", en: "vocabulary word", de: "Vokabel", zh: "单词" } },
    { id: "v05", category: "noun", translations: { ja: "かいわ", jaKanji: "会話", en: "conversation", de: "Konversation", zh: "会话" } },
    { id: "v06", category: "noun", translations: { ja: "しんぽ", jaKanji: "進歩", en: "progress", de: "Fortschritt", zh: "进步" } },
    { id: "v07", category: "noun", translations: { ja: "もくひょう", jaKanji: "目標", en: "goal", de: "Ziel", zh: "目标" } },
    { id: "v08", category: "noun", translations: { ja: "しけん", jaKanji: "試験", en: "exam, test", de: "Prüfung", zh: "考试" } },
    { id: "v09", category: "noun", translations: { ja: "べんきょうほうほう", jaKanji: "勉強方法", en: "study method", de: "Lernmethode", zh: "学习方法" } },
    { id: "v10", category: "noun", translations: { ja: "きょうざい", jaKanji: "教材", en: "study material, textbook", de: "Lernmaterial", zh: "教材" } },
    { id: "v11", category: "verb", translations: { ja: "ならう", jaKanji: "習う", en: "to learn (from someone)", de: "lernen (von jemandem)", zh: "学习（跟人学）" } },
    { id: "v12", category: "verb", translations: { ja: "おぼえる", jaKanji: "覚える", en: "to memorize, remember", de: "sich merken", zh: "记住" } },
    { id: "v13", category: "verb", translations: { ja: "わすれる", jaKanji: "忘れる", en: "to forget", de: "vergessen", zh: "忘记" } },
    { id: "v14", category: "verb", translations: { ja: "じょうたつする", jaKanji: "上達する", en: "to improve, make progress", de: "sich verbessern", zh: "进步" } },
    { id: "v15", category: "verb", translations: { ja: "なれる", jaKanji: "慣れる", en: "to get used to", de: "sich gewöhnen", zh: "习惯" } },
    { id: "v16", category: "verb", translations: { ja: "りかいする", jaKanji: "理解する", en: "to understand", de: "verstehen", zh: "理解" } },
    { id: "v17", category: "verb", translations: { ja: "くりかえす", jaKanji: "繰り返す", en: "to repeat", de: "wiederholen", zh: "重复" } },
    { id: "v18", category: "verb", translations: { ja: "ちょうせんする", jaKanji: "挑戦する", en: "to challenge oneself, try", de: "sich herausfordern", zh: "挑战" } },
    { id: "v19", category: "verb", translations: { ja: "しっぱいする", jaKanji: "失敗する", en: "to fail", de: "scheitern", zh: "失败" } },
    { id: "v20", category: "verb", translations: { ja: "じしんが つく", jaKanji: "自信が付く", en: "to gain confidence", de: "Selbstvertrauen gewinnen", zh: "有自信" } },
    { id: "v21", category: "adjective", translations: { ja: "むずかしい", jaKanji: "難しい", en: "difficult", de: "schwierig", zh: "难的" } },
    { id: "v22", category: "adjective", translations: { ja: "かんたんな", jaKanji: "簡単な", en: "easy, simple", de: "einfach", zh: "简单的" } },
    { id: "v23", category: "adjective", translations: { ja: "ふくざつな", jaKanji: "複雑な", en: "complicated", de: "kompliziert", zh: "复杂的" } },
    { id: "v24", category: "noun", translations: { ja: "せんせい", jaKanji: "先生", en: "teacher", de: "Lehrer", zh: "老师" } },
    { id: "v25", category: "noun", translations: { ja: "がくせい", jaKanji: "学生", en: "student", de: "Student, Schüler", zh: "学生" } },
    { id: "v26", category: "noun", translations: { ja: "じゅぎょう", jaKanji: "授業", en: "class, lesson", de: "Unterricht", zh: "课程" } },
    { id: "v27", category: "noun", translations: { ja: "しゅくだい", jaKanji: "宿題", en: "homework", de: "Hausaufgabe", zh: "作业" } },
    { id: "v28", category: "noun", translations: { ja: "アプリ", en: "app", de: "App", zh: "应用程序" } },
    { id: "v29", category: "noun", translations: { ja: "どりょく", jaKanji: "努力", en: "effort", de: "Anstrengung", zh: "努力" } },
    { id: "v30", category: "verb", translations: { ja: "つづける", jaKanji: "続ける", en: "to continue", de: "fortsetzen", zh: "继续" } },
    { id: "v31", category: "adverb", translations: { ja: "どんどん", en: "steadily, rapidly", de: "stetig, zügig", zh: "不断地" } },
    { id: "v32", category: "adverb", translations: { ja: "しっかり", en: "firmly, properly", de: "fest, richtig", zh: "牢固地，好好地" } }
  ],
  dialogueA: {
    title: { ja: "がいこくごの しんぽに ついて はなす", jaKanji: "外国語の進歩について話す", en: "Talking About Language Progress", de: "Über Sprachfortschritte sprechen", zh: "聊聊语言学习的进步" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "さいきん にほんごが じょうずに なりましたね。", jaKanji: "最近日本語が上手になりましたね。", en: "You've gotten good at Japanese recently, haven't you.", de: "Sie sind in letzter Zeit gut im Japanischen geworden, oder?", zh: "最近日语说得越来越好了呢。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ありがとうございます。かいわが すこし できるように なりました。", jaKanji: "ありがとうございます。会話が少しできるようになりました。", en: "Thank you. I've become able to do a bit of conversation.", de: "Danke schön. Ich bin nun in der Lage, ein wenig zu konversieren.", zh: "谢谢。已经能进行一点会话了。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どうやって べんきょうして いますか？", jaKanji: "どうやって勉強していますか？", en: "How have you been studying?", de: "Wie haben Sie gelernt?", zh: "是怎么学习的？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "まいにち アプリで たんごを おぼえるように しています。", jaKanji: "毎日アプリで単語を覚えるようにしています。", en: "I'm making sure to memorize vocabulary with an app every day.", de: "Ich achte darauf, jeden Tag mit einer App Vokabeln zu lernen.", zh: "我每天都坚持用应用背单词。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はつおんも よく なりましたね。", jaKanji: "発音もよくなりましたね。", en: "Your pronunciation has also gotten better, hasn't it.", de: "Ihre Aussprache ist auch besser geworden, oder?", zh: "发音也变好了呢。" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、なんども くりかえして れんしゅうしたので、はなせるように なりました。", jaKanji: "はい、何度も繰り返して練習したので、話せるようになりました。", en: "Yes, because I practiced by repeating many times, I became able to speak.", de: "Ja, weil ich viele Male wiederholt geübt habe, konnte ich sprechen lernen.", zh: "是的，因为反复练习了很多次，所以能说了。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "さいしょは むずかしかったですか？", jaKanji: "最初は難しかったですか？", en: "Was it difficult at first?", de: "War es am Anfang schwierig?", zh: "一开始很难吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、とても むずかしかったです。でも、だんだん なれてきました。", jaKanji: "はい、とても難しかったです。でも、だんだん慣れてきました。", en: "Yes, it was very difficult. But I've gradually gotten used to it.", de: "Ja, es war sehr schwierig. Aber ich habe mich allmählich daran gewöhnt.", zh: "是的，一开始特别难。不过渐渐习惯了。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ぶんぽうは どうですか？", jaKanji: "文法はどうですか？", en: "How about grammar?", de: "Wie ist es mit der Grammatik?", zh: "语法怎么样？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "むかしは ふくざつで わからなかったですが、いまは りかいできるように なりました。", jaKanji: "昔は複雑で分からなかったですが、今は理解できるようになりました。", en: "It used to be complicated and I didn't understand, but now I've become able to understand it.", de: "Früher war sie kompliziert und ich verstand sie nicht, aber jetzt kann ich sie verstehen.", zh: "以前很复杂不明白，现在已经能理解了。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "もくひょうは ありますか？", jaKanji: "目標はありますか？", en: "Do you have a goal?", de: "Haben Sie ein Ziel?", zh: "有什么目标吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "らいねん しけんを うけたいと おもって います。", jaKanji: "来年試験を受けたいと思っています。", en: "I'm thinking of taking an exam next year.", de: "Ich denke daran, nächstes Jahr eine Prüfung abzulegen.", zh: "打算明年参加考试。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どりょくして いますね。おうえんして います。", jaKanji: "努力していますね。応援しています。", en: "You're making an effort, aren't you. I'm rooting for you.", de: "Sie geben sich Mühe, oder? Ich drücke Ihnen die Daumen.", zh: "你真努力啊。我支持你。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ありがとうございます。これからも つづけて いきたいです。", jaKanji: "ありがとうございます。これからも続けていきたいです。", en: "Thank you. I want to keep continuing from here on.", de: "Danke schön. Ich möchte auch weiterhin dranbleiben.", zh: "谢谢。今后也想继续坚持。" } }
    ]
  },
  dialogueB: {
    title: { ja: "あたらしい のうりょくに ついて はなす", jaKanji: "新しい能力について話す", en: "Describing a New Ability", de: "Eine neue Fähigkeit beschreiben", zh: "谈论一项新技能" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "なにか あたらしい ことを ならって いますか？", jaKanji: "何か新しいことを習っていますか？", en: "Are you learning anything new?", de: "Lernen Sie gerade etwas Neues?", zh: "最近在学什么新东西吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、さいきん かんじが よめるように なりました。", jaKanji: "はい、最近漢字が読めるようになりました。", en: "Yes, recently I've become able to read kanji.", de: "Ja, kürzlich bin ich in der Lage geworden, Kanji zu lesen.", zh: "是的，最近已经能读汉字了。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "すごいですね！どうやって べんきょうしましたか？", jaKanji: "すごいですね！どうやって勉強しましたか？", en: "That's amazing! How did you study?", de: "Das ist toll! Wie haben Sie gelernt?", zh: "太厉害了！是怎么学的？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "まいにち すこしずつ おぼえるように しました。", jaKanji: "毎日少しずつ覚えるようにしました。", en: "I made sure to memorize a little bit every day.", de: "Ich habe mir vorgenommen, jeden Tag ein bisschen zu lernen.", zh: "每天坚持记一点。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しっぱいした ことは ありますか？", jaKanji: "失敗したことはありますか？", en: "Have you ever failed?", de: "Haben Sie schon einmal versagt?", zh: "有失败过吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "もちろん あります。でも、しっぱいから まなべるように なりました。", jaKanji: "もちろんあります。でも、失敗から学べるようになりました。", en: "Of course I have. But I've become able to learn from failure.", de: "Natürlich habe ich das. Aber ich habe gelernt, aus Fehlern zu lernen.", zh: "当然有过。不过已经能从失败中学习了。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じしんが つきましたか？", jaKanji: "自信が付きましたか？", en: "Have you gained confidence?", de: "Haben Sie Selbstvertrauen gewonnen?", zh: "有自信了吗？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、まえより じしんが つくように なりました。", jaKanji: "はい、前より自信が付くようになりました。", en: "Yes, I've become more confident than before.", de: "Ja, ich bin selbstbewusster geworden als zuvor.", zh: "是的，比以前更有自信了。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きょうざいは なにを つかって いますか？", jaKanji: "教材は何を使っていますか？", en: "What study materials are you using?", de: "Welches Lernmaterial verwenden Sie?", zh: "在用什么教材？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "アプリと ほんを りようしています。", jaKanji: "アプリと本を利用しています。", en: "I'm using an app and books.", de: "Ich nutze eine App und Bücher.", zh: "在用应用软件和书。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "べんきょうほうほうを かえた ことは ありますか？", jaKanji: "勉強方法を変えたことはありますか？", en: "Have you ever changed your study method?", de: "Haben Sie Ihre Lernmethode jemals geändert?", zh: "改变过学习方法吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、いろいろ ためして みて、じぶんに あう ほうほうを みつけました。", jaKanji: "はい、いろいろ試してみて、自分に合う方法を見つけました。", en: "Yes, I tried various things and found a method that suits me.", de: "Ja, ich habe verschiedene Dinge ausprobiert und eine passende Methode gefunden.", zh: "是的，尝试了各种方法，找到了适合自己的。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "つぎの もくひょうは なんですか？", jaKanji: "次の目標は何ですか？", en: "What's your next goal?", de: "Was ist Ihr nächstes Ziel?", zh: "下一个目标是什么？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "もっと ふくざつな ぶんしょうが よめるように なりたいです。", jaKanji: "もっと複雑な文章が読めるようになりたいです。", en: "I want to become able to read more complicated writing.", de: "Ich möchte in der Lage sein, kompliziertere Texte zu lesen.", zh: "想要能读懂更复杂的文章。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ようになる：へんかを あらわす", jaKanji: "〜ようになる：変化を表す", en: "~Youni Naru: Expressing Change Over Time", de: "~Youni Naru: Veränderung im Laufe der Zeit ausdrücken", zh: "〜ようになる：表示变化" },
      explanation: {
        ja: "いぜんは できなかった／しなかった ことが、いまは できる／する ように なった ときに つかいます。どうしの じしょけいや かのうけいに「ように なる」を つけます。「はなせる→はなせるように なる」（はなせなかったが、れんしゅうして、いまは はなせる）。じょじょな へんかを つよく つたえます。", jaKanji: "以前はできなかった／しなかったことが、今はできる／するようになったときに使います。動詞の辞書形や可能形に「ようになる」を付けます。「話せる→話せるようになる」（話せなかったが、練習して、今は話せる）。徐々な変化を強く伝えます。",
        en: "Used when something you couldn't do (or didn't do) before, you now can (or do). Attach ように なる to the dictionary form or potential form of a verb. \"はなせる→はなせるように なる\" (you couldn't speak before, but after practicing, you can now). It emphasizes a gradual change over time.",
        de: "Wird verwendet, wenn man etwas, das man vorher nicht konnte (oder nicht tat), jetzt kann (oder tut). ように なる wird an die Wörterbuchform oder Potentialform eines Verbs angehängt. \"はなせる→はなせるように なる\" (man konnte vorher nicht sprechen, aber nach dem Üben kann man es jetzt). Es betont eine allmähliche Veränderung im Laufe der Zeit.",
        zh: "用于表示以前不能做（或不做）的事，现在能做（或做）了。在动词的辞书形或可能形后加ように なる。「はなせる→はなせるように なる」（以前不会说，但练习之后现在会说了）。强调随着时间逐渐发生的变化。"
      },
      chunks: [
        { id: "g1", translations: { ja: "にほんごが はなせるように なりました。", jaKanji: "日本語が話せるようになりました。", en: "I've become able to speak Japanese.", de: "Ich bin nun in der Lage, Japanisch zu sprechen.", zh: "已经能说日语了。" } },
        { id: "g2", translations: { ja: "かんじが よめるように なりました。", jaKanji: "漢字が読めるようになりました。", en: "I've become able to read kanji.", de: "Ich kann jetzt Kanji lesen.", zh: "已经能读汉字了。" } },
        { id: "g3", translations: { ja: "はやく おきるように なりました。", jaKanji: "早く起きるようになりました。", en: "I've come to wake up early.", de: "Ich bin dazu übergegangen, früh aufzustehen.", zh: "已经变得早起了。" } },
        { id: "g4", translations: { ja: "やさいを たべるように なりました。", jaKanji: "野菜を食べるようになりました。", en: "I've come to eat vegetables.", de: "Ich bin dazu übergegangen, Gemüse zu essen.", zh: "已经开始吃蔬菜了。" } },
        { id: "g5", translations: { ja: "ひとりで りょこうできるように なりました。", jaKanji: "一人で旅行できるようになりました。", en: "I've become able to travel alone.", de: "Ich bin nun in der Lage, allein zu reisen.", zh: "已经能一个人旅行了。" } },
        { id: "g6", translations: { ja: "まえより はやく はしれるように なりました。", jaKanji: "前より速く走れるようになりました。", en: "I've become able to run faster than before.", de: "Ich kann jetzt schneller laufen als zuvor.", zh: "已经能比以前跑得更快了。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        r: { ja: "R", en: "R", de: "R", zh: "R" },
        l: { ja: "L", en: "L", de: "L", zh: "L" },
        h: { ja: "H", en: "H", de: "H", zh: "H" },
        f: { ja: "F", en: "F", de: "F", zh: "F" }
      },
      items: [
        { id: "r1", category: "r", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
        { id: "r2", category: "r", translations: { ja: "りかいする", en: "to understand", de: "verstehen", zh: "理解" } },
        { id: "r3", category: "r", translations: { ja: "りゆう", en: "reason", de: "Grund", zh: "理由" } },
        { id: "r4", category: "r", translations: { ja: "ろうか", en: "hallway", de: "Flur", zh: "走廊" } },
        { id: "l1", category: "l", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },
        { id: "l2", category: "l", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
        { id: "l3", category: "l", translations: { ja: "らいねん", en: "next year", de: "nächstes Jahr", zh: "明年" } },
        { id: "l4", category: "l", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
        { id: "h1", category: "h", translations: { ja: "はつおん", en: "pronunciation", de: "Aussprache", zh: "发音" } },
        { id: "h2", category: "h", translations: { ja: "ひと", en: "person", de: "Person", zh: "人" } },
        { id: "h3", category: "h", translations: { ja: "へや", en: "room", de: "Zimmer", zh: "房间" } },
        { id: "h4", category: "h", translations: { ja: "ほし", en: "star", de: "Stern", zh: "星星" } },
        { id: "f1", category: "f", translations: { ja: "ふくざつな", en: "complicated", de: "kompliziert", zh: "复杂的" } },
        { id: "f2", category: "f", translations: { ja: "ふゆ", en: "winter", de: "Winter", zh: "冬天" } },
        { id: "f3", category: "f", translations: { ja: "ふね", en: "boat", de: "Boot", zh: "船" } },
        { id: "f4", category: "f", translations: { ja: "ふうとう", en: "envelope", de: "Umschlag", zh: "信封" } }
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
          r: { ja: "R", en: "R", de: "R", zh: "R" },
          l: { ja: "L", en: "L", de: "L", zh: "L" },
          h: { ja: "H", en: "H", de: "H", zh: "H" },
          f: { ja: "F", en: "F", de: "F", zh: "F" }
        },
        items: [
          { id: "r5", category: "r", translations: { ja: "りゆうしょ", en: "letter of resignation", de: "Kündigungsschreiben", zh: "辞职信" } },
          { id: "r6", category: "r", translations: { ja: "れんらく", en: "contact", de: "Kontakt", zh: "联系" } },
          { id: "r7", category: "r", translations: { ja: "りっぱ", en: "splendid", de: "prächtig", zh: "出色的" } },
          { id: "r8", category: "r", translations: { ja: "ろんぶん", en: "essay, thesis", de: "Aufsatz", zh: "论文" } },
          { id: "r9", category: "r", translations: { ja: "りそう", en: "ideal", de: "Ideal", zh: "理想" } },
          { id: "r10", category: "r", translations: { ja: "れいぎ", en: "manners", de: "Manieren", zh: "礼仪" } },
          { id: "r11", category: "r", translations: { ja: "ろうじん", en: "elderly person", de: "alter Mensch", zh: "老人" } },
          { id: "r12", category: "r", translations: { ja: "りく", en: "land", de: "Land", zh: "陆地" } },
          { id: "r13", category: "r", translations: { ja: "れきだい", en: "successive generations", de: "aufeinanderfolgende Generationen", zh: "历代" } },
          { id: "r14", category: "r", translations: { ja: "りえき", en: "profit", de: "Gewinn", zh: "利润" } },
          { id: "r15", category: "r", translations: { ja: "ろじ", en: "alley", de: "Gasse", zh: "小巷" } },
          { id: "r16", category: "r", translations: { ja: "るいじ", en: "similarity", de: "Ähnlichkeit", zh: "类似" } },
          { id: "r17", category: "r", translations: { ja: "られつ", en: "enumeration", de: "Aufzählung", zh: "排列" } },
          { id: "r18", category: "r", translations: { ja: "りっし", en: "founding, establishment", de: "Gründung", zh: "立志" } },

          { id: "l5", category: "l", translations: { ja: "りゅうがく", en: "studying abroad", de: "Auslandsstudium", zh: "留学" } },
          { id: "l6", category: "l", translations: { ja: "るすばん", en: "house-sitting", de: "Haus hüten", zh: "看家" } },
          { id: "l7", category: "l", translations: { ja: "れんあい", en: "romance", de: "Liebe, Romanze", zh: "恋爱" } },
          { id: "l8", category: "l", translations: { ja: "ろうそく", en: "candle", de: "Kerze", zh: "蜡烛" } },
          { id: "l9", category: "l", translations: { ja: "らくだ", en: "camel", de: "Kamel", zh: "骆驼" } },
          { id: "l10", category: "l", translations: { ja: "りょうしん", en: "parents", de: "Eltern", zh: "父母" } },
          { id: "l11", category: "l", translations: { ja: "るす", en: "being away from home", de: "Abwesenheit von zu Hause", zh: "不在家" } },
          { id: "l12", category: "l", translations: { ja: "れいとう", en: "freezing", de: "Einfrieren", zh: "冷冻" } },
          { id: "l13", category: "l", translations: { ja: "らいひん", en: "guest, visitor", de: "Gast", zh: "来宾" } },
          { id: "l14", category: "l", translations: { ja: "りょかん", en: "traditional inn", de: "traditionelles Gasthaus", zh: "日式旅馆" } },
          { id: "l15", category: "l", translations: { ja: "るいべつ", en: "classification", de: "Klassifizierung", zh: "分类" } },
          { id: "l16", category: "l", translations: { ja: "れきほう", en: "calendar system", de: "Kalendersystem", zh: "历法" } },
          { id: "l17", category: "l", translations: { ja: "らくご", en: "rakugo", de: "Rakugo", zh: "落语" } },
          { id: "l18", category: "l", translations: { ja: "りんじ", en: "temporary, special", de: "vorübergehend", zh: "临时" } },

          { id: "h5", category: "h", translations: { ja: "はやい", en: "fast, early", de: "schnell, früh", zh: "快的，早的" } },
          { id: "h6", category: "h", translations: { ja: "ひろい", en: "spacious", de: "geräumig", zh: "宽敞的" } },
          { id: "h7", category: "h", translations: { ja: "ひくい", en: "low, short", de: "niedrig, kurz", zh: "低的，矮的" } },
          { id: "h8", category: "h", translations: { ja: "へいき", en: "calm, fine", de: "gelassen, in Ordnung", zh: "没事儿" } },
          { id: "h9", category: "h", translations: { ja: "ほんとう", en: "truth, really", de: "Wahrheit, wirklich", zh: "真的" } },
          { id: "h10", category: "h", translations: { ja: "はたらく", en: "to work", de: "arbeiten", zh: "工作" } },
          { id: "h11", category: "h", translations: { ja: "ひろう", en: "to pick up", de: "aufheben", zh: "捡起" } },
          { id: "h12", category: "h", translations: { ja: "へらす", en: "to reduce", de: "reduzieren", zh: "减少" } },
          { id: "h13", category: "h", translations: { ja: "ほめる", en: "to praise", de: "loben", zh: "夸奖" } },
          { id: "h14", category: "h", translations: { ja: "はこぶ", en: "to carry", de: "tragen", zh: "搬运" } },
          { id: "h15", category: "h", translations: { ja: "ひかる", en: "to shine", de: "leuchten", zh: "发光" } },
          { id: "h16", category: "h", translations: { ja: "へた", en: "unskilled", de: "ungeschickt", zh: "不擅长" } },
          { id: "h17", category: "h", translations: { ja: "ほそい", en: "thin, slender", de: "dünn, schmal", zh: "细的" } },
          { id: "h18", category: "h", translations: { ja: "はんこ", en: "stamp, seal", de: "Stempel", zh: "印章" } },

          { id: "f5", category: "f", translations: { ja: "ふとる", en: "to gain weight", de: "zunehmen", zh: "长胖" } },
          { id: "f6", category: "f", translations: { ja: "ふとん", en: "futon", de: "Futon", zh: "被褥" } },
          { id: "f7", category: "f", translations: { ja: "ふあん", en: "anxiety", de: "Sorge", zh: "不安" } },
          { id: "f8", category: "f", translations: { ja: "ふしぎ", en: "mysterious", de: "geheimnisvoll", zh: "不可思议" } },
          { id: "f9", category: "f", translations: { ja: "ふじさん", en: "Mount Fuji", de: "Fuji-Berg", zh: "富士山" } },
          { id: "f10", category: "f", translations: { ja: "ふまん", en: "dissatisfaction", de: "Unzufriedenheit", zh: "不满" } },
          { id: "f11", category: "f", translations: { ja: "ふつう", en: "usual, normal", de: "normal, üblich", zh: "普通" } },
          { id: "f12", category: "f", translations: { ja: "ふえる", en: "to increase", de: "zunehmen", zh: "增加" } },
          { id: "f13", category: "f", translations: { ja: "ふさぐ", en: "to block, close up", de: "blockieren", zh: "堵住" } },
          { id: "f14", category: "f", translations: { ja: "ふせぐ", en: "to prevent", de: "verhindern", zh: "防止" } },
          { id: "f15", category: "f", translations: { ja: "ふえ", en: "flute", de: "Flöte", zh: "笛子" } },
          { id: "f16", category: "f", translations: { ja: "ふきん", en: "dish towel", de: "Geschirrtuch", zh: "抹布" } },
          { id: "f17", category: "f", translations: { ja: "ふろ", en: "bath", de: "Bad", zh: "澡堂" } },
          { id: "f18", category: "f", translations: { ja: "ふたり", en: "two people", de: "zwei Personen", zh: "两个人" } }
      ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-younininaru",
        title: { ja: "れんしゅう：〜ようになる", en: "Practice: ~Youni Naru", de: "Übung: ~Youni Naru", zh: "练习：〜ようになる" },
        spokenIntro: {
          ja: "つぎは、「〜ようになる」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~youni naru.",
          de: "Als Nächstes üben wir Beispielsätze mit ~youni naru.",
          zh: "接下来，让我们练习使用「〜ようになる」的例句。"
        },
        lines: [
          { id: "yn1", translations: { ja: "にほんごが はなせるように なりました。", jaKanji: "日本語が話せるようになりました。", en: "I've become able to speak Japanese.", de: "Ich bin nun in der Lage, Japanisch zu sprechen.", zh: "已经能说日语了。" } },
          { id: "yn2", translations: { ja: "かんじが よめるように なりました。", jaKanji: "漢字が読めるようになりました。", en: "I've become able to read kanji.", de: "Ich kann jetzt Kanji lesen.", zh: "已经能读汉字了。" } },
          { id: "yn3", translations: { ja: "はやく おきるように なりました。", jaKanji: "早く起きるようになりました。", en: "I've come to wake up early.", de: "Ich bin dazu übergegangen, früh aufzustehen.", zh: "已经变得早起了。" } },
          { id: "yn4", translations: { ja: "やさいを たべるように なりました。", jaKanji: "野菜を食べるようになりました。", en: "I've come to eat vegetables.", de: "Ich bin dazu übergegangen, Gemüse zu essen.", zh: "已经开始吃蔬菜了。" } },
          { id: "yn5", translations: { ja: "ひとりで りょこうできるように なりました。", jaKanji: "一人で旅行できるようになりました。", en: "I've become able to travel alone.", de: "Ich bin nun in der Lage, allein zu reisen.", zh: "已经能一个人旅行了。" } },
          { id: "yn6", translations: { ja: "まえより はやく はしれるように なりました。", jaKanji: "前より速く走れるようになりました。", en: "I've become able to run faster than before.", de: "Ich kann jetzt schneller laufen als zuvor.", zh: "已经能比以前跑得更快了。" } },
          { id: "yn7", translations: { ja: "ぶんぽうが りかいできるように なりました。", jaKanji: "文法が理解できるようになりました。", en: "I've become able to understand grammar.", de: "Ich kann jetzt die Grammatik verstehen.", zh: "已经能理解语法了。" } },
          { id: "yn8", translations: { ja: "からい たべものが たべられるように なりました。", jaKanji: "辛い食べ物が食べられるようになりました。", en: "I've become able to eat spicy food.", de: "Ich kann jetzt scharfes Essen essen.", zh: "已经能吃辣的食物了。" } },
          { id: "yn9", translations: { ja: "ピアノが ひけるように なりました。", jaKanji: "ピアノが弾けるようになりました。", en: "I've become able to play piano.", de: "Ich kann jetzt Klavier spielen.", zh: "已经会弹钢琴了。" } },
          { id: "yn10", translations: { ja: "じぶんで りょうりが できるように なりました。", jaKanji: "自分で料理ができるようになりました。", en: "I've become able to cook by myself.", de: "Ich kann jetzt selbst kochen.", zh: "已经能自己做饭了。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "がんばれば できる", en: "If You Try Hard, You Can Do It", de: "Wenn man sich anstrengt, kann man es schaffen" },
    lines: [
      { id: "sg1", translations: { ja: "すこしずつ おぼえよう", en: "Let's remember little by little", de: "Lass uns Schritt für Schritt lernen" } },
      { id: "sg2", translations: { ja: "まいにち れんしゅうしよう", en: "Let's practice every day", de: "Lass uns jeden Tag üben" } },
      { id: "sg3", translations: { ja: "しっぱいしても だいじょうぶ", en: "Even if we fail, it's okay", de: "Auch wenn wir scheitern, ist es okay" } },
      { id: "sg4", translations: { ja: "がんばれば できるように なる", en: "If we try hard, we'll become able to do it", de: "Wenn wir uns anstrengen, werden wir es können" } }
    ]
  }
};
