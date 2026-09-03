import type { TopicLesson } from "../topicTypes";

// A2 — row 22 of docs/a2-master-lesson-table-v01.md. Grammar: 〜方
// (verb stem + kata — "the way of doing X") + 〜やすい／〜にくい
// (easy/hard to do). Pronunciation 1/2 (Japanese R vs L, H vs F) kept
// exactly as assigned; R/L split into two genuine ら-row sets since
// Japanese has no true L phoneme, same fix as earlier lessons.

export const topicTechnology: TopicLesson = {
  id: "topic-a2-21-technology",
  lessonNumber: 21,
  level: "A2",
  topicName: {
    ja: "テクノロジー",
    en: "Technology",
    de: "Technologie",
    zh: "科技"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "アプリ", en: "app", de: "App", zh: "应用程序" } },
    { id: "v02", category: "noun", translations: { ja: "スマホ", en: "smartphone", de: "Smartphone", zh: "智能手机" } },
    { id: "v03", category: "noun", translations: { ja: "せってい", jaKanji: "設定", en: "settings", de: "Einstellungen", zh: "设置" } },
    { id: "v04", category: "noun", translations: { ja: "きのう", jaKanji: "機能", en: "function", de: "Funktion", zh: "功能" } },
    { id: "v05", category: "noun", translations: { ja: "そうさ", jaKanji: "操作", en: "operation", de: "Bedienung", zh: "操作" } },
    { id: "v06", category: "noun", translations: { ja: "がめん", jaKanji: "画面", en: "screen", de: "Bildschirm", zh: "屏幕" } },
    { id: "v07", category: "noun", translations: { ja: "パスワード", en: "password", de: "Passwort", zh: "密码" } },
    { id: "v08", category: "noun", translations: { ja: "アカウント", en: "account", de: "Konto", zh: "账号" } },
    { id: "v09", category: "noun", translations: { ja: "でんげん", jaKanji: "電源", en: "power (device)", de: "Stromquelle", zh: "电源" } },
    { id: "v10", category: "noun", translations: { ja: "じゅうでん", jaKanji: "充電", en: "charging", de: "Aufladen", zh: "充电" } },
    { id: "v11", category: "noun", translations: { ja: "でんち", jaKanji: "電池", en: "battery", de: "Batterie", zh: "电池" } },
    { id: "v12", category: "noun", translations: { ja: "アップデート", en: "update", de: "Update", zh: "更新" } },
    { id: "v13", category: "verb", translations: { ja: "つかう", jaKanji: "使う", en: "to use", de: "benutzen", zh: "使用" } },
    { id: "v14", category: "verb", translations: { ja: "おす", jaKanji: "押す", en: "to press", de: "drücken", zh: "按" } },
    { id: "v15", category: "verb", translations: { ja: "タップする", en: "to tap", de: "tippen", zh: "点击" } },
    { id: "v16", category: "verb", translations: { ja: "とうろくする", jaKanji: "登録する", en: "to register", de: "registrieren", zh: "注册" } },
    { id: "v17", category: "verb", translations: { ja: "せっていする", jaKanji: "設定する", en: "to set up", de: "einrichten", zh: "设置" } },
    { id: "v18", category: "verb", translations: { ja: "じゅうでんする", jaKanji: "充電する", en: "to charge", de: "aufladen", zh: "充电" } },
    { id: "v19", category: "verb", translations: { ja: "さがす", jaKanji: "探す", en: "to search", de: "suchen", zh: "寻找" } },
    { id: "v20", category: "verb", translations: { ja: "みつける", jaKanji: "見つける", en: "to find", de: "finden", zh: "找到" } },
    { id: "v21", category: "verb", translations: { ja: "わかる", jaKanji: "分かる", en: "to understand", de: "verstehen", zh: "明白" } },
    { id: "v22", category: "verb", translations: { ja: "まよう", jaKanji: "迷う", en: "to be confused, lost", de: "verwirrt sein", zh: "迷惑" } },
    { id: "v23", category: "adjective", translations: { ja: "かんたんな", jaKanji: "簡単な", en: "easy", de: "einfach", zh: "简单的" } },
    { id: "v24", category: "adjective", translations: { ja: "ふくざつな", jaKanji: "複雑な", en: "complicated", de: "kompliziert", zh: "复杂的" } },
    { id: "v25", category: "adjective", translations: { ja: "べんりな", jaKanji: "便利な", en: "convenient", de: "praktisch", zh: "方便的" } },
    { id: "v26", category: "adjective", translations: { ja: "わかりやすい", jaKanji: "分かりやすい", en: "easy to understand", de: "leicht verständlich", zh: "易懂的" } },
    { id: "v27", category: "adjective", translations: { ja: "わかりにくい", jaKanji: "分かりにくい", en: "hard to understand", de: "schwer verständlich", zh: "难懂的" } },
    { id: "v28", category: "adjective", translations: { ja: "あたらしい", jaKanji: "新しい", en: "new", de: "neu", zh: "新的" } },
    { id: "v29", category: "adjective", translations: { ja: "ふるい", jaKanji: "古い", en: "old", de: "alt", zh: "旧的" } },
    { id: "v30", category: "adverb", translations: { ja: "とくに", jaKanji: "特に", en: "especially", de: "besonders", zh: "特别" } }
  ],
  dialogueA: {
    title: { ja: "アプリの つかいかたを きく", en: "Asking How to Use an App", de: "Fragen, wie man eine App benutzt", zh: "询问应用的使用方法" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "この アプリの つかいかたが わかりません。", jaKanji: "このアプリの使い方が分かりません。", en: "I don't understand how to use this app.", de: "Ich verstehe nicht, wie man diese App benutzt.", zh: "我不知道这个应用怎么用。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "どこが わかりにくいですか？", jaKanji: "どこが分かりにくいですか？", en: "Which part is hard to understand?", de: "Welcher Teil ist schwer zu verstehen?", zh: "哪里比较难懂？" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "とうろくの しかたが わかりません。", jaKanji: "登録の仕方が分かりません。", en: "I don't understand how to register.", de: "Ich verstehe nicht, wie man sich registriert.", zh: "我不知道怎么注册。" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "この ボタンを おして、めーるアドレスを いれて ください。", jaKanji: "このボタンを押して、メールアドレスを入れてください。", en: "Press this button and enter your email address.", de: "Drücken Sie diesen Knopf und geben Sie Ihre E-Mail-Adresse ein.", zh: "按这个按钮，然后输入邮箱地址。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "パスワードは どうやって せっていしますか？", jaKanji: "パスワードはどうやって設定しますか？", en: "How do I set up a password?", de: "Wie richte ich ein Passwort ein?", zh: "密码怎么设置？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "がめんに でて くる ところに タップして、うちこんで ください。", jaKanji: "画面に出てくるところにタップして、打ち込んでください。", en: "Tap where it appears on the screen and type it in.", de: "Tippen Sie dort, wo es auf dem Bildschirm erscheint, und geben Sie es ein.", zh: "点击屏幕上出现的地方，然后输入。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "この きのうは どう つかうんですか？", jaKanji: "この機能はどう使うんですか？", en: "How do you use this function?", de: "Wie benutzt man diese Funktion?", zh: "这个功能怎么用？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "これは とても かんたんな そうさですよ。", jaKanji: "これはとても簡単な操作ですよ。", en: "This is a very simple operation.", de: "Das ist eine sehr einfache Bedienung.", zh: "这个操作很简单哦。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "せっていが おおくて まよいます。", jaKanji: "設定が多くて迷います。", en: "There are so many settings, I get confused.", de: "Es gibt so viele Einstellungen, ich bin verwirrt.", zh: "设置太多了，让人困惑。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "さいしょは わかりにくいですが、なれると べんりですよ。", jaKanji: "最初は分かりにくいですが、慣れると便利ですよ。", en: "It's hard to understand at first, but it's convenient once you get used to it.", de: "Am Anfang ist es schwer verständlich, aber sobald man sich daran gewöhnt hat, ist es praktisch.", zh: "刚开始不太好懂，但习惯了就很方便。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "アップデートは ひつようですか？", jaKanji: "アップデートは必要ですか？", en: "Is an update necessary?", de: "Ist ein Update notwendig?", zh: "需要更新吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、あたらしい バージョンの ほうが つかいやすいです。", jaKanji: "はい、新しいバージョンのほうが使いやすいです。", en: "Yes, the newer version is easier to use.", de: "Ja, die neuere Version ist einfacher zu benutzen.", zh: "是的，新版本更好用。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ありがとう ございます。だいぶ わかりました。", jaKanji: "ありがとうございます。だいぶ分かりました。", en: "Thank you. I understand much better now.", de: "Vielen Dank. Ich verstehe es jetzt viel besser.", zh: "谢谢你。我明白多了。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "また わからなかったら、いつでも きいて くださいね。", jaKanji: "また分からなかったら、いつでも聞いてくださいね。", en: "If you don't understand something again, ask me anytime.", de: "Wenn Sie wieder etwas nicht verstehen, fragen Sie mich jederzeit.", zh: "如果还有不明白的，随时问我哦。" } }
    ]
  },
  dialogueB: {
    title: { ja: "つかいやすさに ついて せつめいする", en: "Explaining What Is Easy or Difficult to Use", de: "Erklären, was einfach oder schwierig zu benutzen ist", zh: "说明使用起来的难易程度" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "この スマホは つかいやすいですか？", jaKanji: "このスマホは使いやすいですか？", en: "Is this smartphone easy to use?", de: "Ist dieses Smartphone einfach zu benutzen?", zh: "这部智能手机好用吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、がめんが おおきくて みやすいです。", jaKanji: "はい、画面が大きくて見やすいです。", en: "Yes, the screen is big and easy to see.", de: "Ja, der Bildschirm ist groß und gut zu sehen.", zh: "是的，屏幕大，很容易看清楚。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "もじは うちこみやすいですか？", jaKanji: "文字は打ち込みやすいですか？", en: "Is it easy to type characters?", de: "Ist es einfach, Zeichen einzugeben?", zh: "打字容易吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、キーが おおきいので おしやすいです。", jaKanji: "はい、キーが大きいので押しやすいです。", en: "Yes, the keys are big, so they're easy to press.", de: "Ja, die Tasten sind groß, also einfach zu drücken.", zh: "是的，按键很大，容易按。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "こまかい せっていは かえにくいですか？", jaKanji: "細かい設定は変えにくいですか？", en: "Are the detailed settings hard to change?", de: "Sind die detaillierten Einstellungen schwer zu ändern?", zh: "细节设置难改吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "すこし わかりにくいですが、れんしゅうすれば できます。", jaKanji: "少し分かりにくいですが、練習すればできます。", en: "It's a bit hard to understand, but you can do it with practice.", de: "Es ist etwas schwer zu verstehen, aber mit Übung geht es.", zh: "有点难懂，不过练习一下就能做到。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ふるい モデルとは どう ちがいますか？", jaKanji: "古いモデルとはどう違いますか？", en: "How is it different from the old model?", de: "Wie unterscheidet es sich vom alten Modell?", zh: "和旧型号有什么不同？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "あたらしい モデルの ほうが そうさが かんたんです。", jaKanji: "新しいモデルのほうが操作が簡単です。", en: "The new model has simpler operation.", de: "Das neue Modell hat eine einfachere Bedienung.", zh: "新型号操作更简单。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんちは もちやすいですか？", jaKanji: "電池は持ちやすいですか？", en: "Does the battery last easily?", de: "Hält der Akku gut?", zh: "电池耐用吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、いちにちじゅう つかいやすいです。じゅうでんも はやいです。", jaKanji: "はい、一日中使いやすいです。充電も早いです。", en: "Yes, it's easy to use all day. Charging is fast too.", de: "Ja, es lässt sich den ganzen Tag gut benutzen. Aufladen geht auch schnell.", zh: "是的，可以用一整天。充电也很快。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ほかに つかいにくい ところは ありますか？", jaKanji: "他に使いにくいところはありますか？", en: "Are there any other places that are hard to use?", de: "Gibt es andere Stellen, die schwer zu benutzen sind?", zh: "还有什么不好用的地方吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "アプリの きのうが おおすぎて、さがしにくいです。", jaKanji: "アプリの機能が多すぎて、探しにくいです。", en: "The app has too many functions, so they're hard to find.", de: "Die App hat zu viele Funktionen, sodass sie schwer zu finden sind.", zh: "应用的功能太多，不好找。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それでも ぜんたいてきには つかいやすいですか？", jaKanji: "それでも全体的には使いやすいですか？", en: "Even so, is it easy to use overall?", de: "Ist es trotzdem insgesamt einfach zu benutzen?", zh: "即便如此，整体上还是好用的吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、とくに はじめての ひとには わかりやすいと おもいます。", jaKanji: "はい、特に初めての人には分かりやすいと思います。", en: "Yes, I think it's especially easy for first-time users to understand.", de: "Ja, ich denke, es ist besonders für Erstnutzer leicht verständlich.", zh: "是的，我觉得对初次使用的人来说尤其容易上手。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜かた／〜やすい／〜にくい：そうさの しやすさ", en: "~Kata / ~Yasui / ~Nikui: Ease of Doing Something", de: "~Kata / ~Yasui / ~Nikui: Wie leicht etwas zu tun ist", zh: "〜かた／〜やすい／〜にくい：操作的难易度" },
      explanation: {
        ja: "「〜かた」は どうしの ます-けいの ごびを とって「かた」を つけ、「〜する ほうほう」を あらわします（「つかいかた」＝how to use）。「〜やすい」は「〜するのが かんたん」、「〜にくい」は「〜するのが むずかしい」を あらわします。どちらも どうしの ます-けいに つけます（「つかいやすい」「つかいにくい」）。",
        en: "~kata attaches to a verb's ます-stem (dropping the ます) to mean \"the way of doing ~\" (\"つかいかた\" = how to use). ~yasui means \"~ is easy to do,\" and ~nikui means \"~ is hard to do.\" Both attach to a verb's ます-stem (\"つかいやすい\" = easy to use, \"つかいにくい\" = hard to use).",
        de: "~kata wird an den ます-Stamm eines Verbs angehängt (ます wird weggelassen) und bedeutet \"die Art, ~ zu tun\" (\"つかいかた\" = wie man es benutzt). ~yasui bedeutet \"~ ist leicht zu tun\" und ~nikui bedeutet \"~ ist schwer zu tun\". Beide werden an den ます-Stamm eines Verbs angehängt (\"つかいやすい\" = einfach zu benutzen, \"つかいにくい\" = schwer zu benutzen).",
        zh: "〜かた接在动词ます形词干后（去掉ます），表示\"做~的方法\"（「つかいかた」＝使用方法）。〜やすい表示\"~容易做\"，〜にくい表示\"~难做\"。两者都接在动词ます形词干后（「つかいやすい」＝好用，「つかいにくい」＝难用）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "この アプリの つかいかたが わかりません。", jaKanji: "このアプリの使い方が分かりません。", en: "I don't understand how to use this app.", de: "Ich verstehe nicht, wie man diese App benutzt.", zh: "我不知道这个应用怎么用。" } },
        { id: "g2", translations: { ja: "この りょうりの つくりかたを おしえて ください。", jaKanji: "この料理の作り方を教えてください。", en: "Please teach me how to make this dish.", de: "Bitte zeigen Sie mir, wie man dieses Gericht macht.", zh: "请教我这道菜的做法。" } },
        { id: "g3", translations: { ja: "この ペンは かきやすいです。", jaKanji: "このペンは書きやすいです。", en: "This pen is easy to write with.", de: "Dieser Stift ist einfach zu schreiben.", zh: "这支笔很好写。" } },
        { id: "g4", translations: { ja: "この かんじは おぼえにくいです。", jaKanji: "この漢字は覚えにくいです。", en: "This kanji is hard to remember.", de: "Dieses Kanji ist schwer zu merken.", zh: "这个汉字很难记。" } },
        { id: "g5", translations: { ja: "あたらしい くつは あるきやすいです。", jaKanji: "新しい靴は歩きやすいです。", en: "New shoes are easy to walk in.", de: "Neue Schuhe sind einfach zum Gehen.", zh: "新鞋子走路很舒服。" } },
        { id: "g6", translations: { ja: "この みちは わかりにくいです。", jaKanji: "この道は分かりにくいです。", en: "This road is hard to understand (find one's way).", de: "Diese Straße ist schwer zu verstehen (zu finden).", zh: "这条路很难懂（不好找）。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        r1: { ja: "R", en: "R", de: "R", zh: "R" },
        r2: { ja: "R", en: "R", de: "R", zh: "R" },
        h: { ja: "H", en: "H", de: "H", zh: "H" },
        f: { ja: "F", en: "F", de: "F", zh: "F" }
      },
      items: [
        { id: "r1_1", category: "r1", translations: { ja: "りよう", en: "use, utilization", de: "Nutzung", zh: "利用" } },
        { id: "r1_2", category: "r1", translations: { ja: "れんらく", en: "contact", de: "Kontakt", zh: "联系" } },
        { id: "r1_3", category: "r1", translations: { ja: "りかい", en: "understanding", de: "Verständnis", zh: "理解" } },
        { id: "r1_4", category: "r1", translations: { ja: "ろうか", en: "hallway", de: "Flur", zh: "走廊" } },
        { id: "r2_1", category: "r2", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
        { id: "r2_2", category: "r2", translations: { ja: "りゆう", en: "reason", de: "Grund", zh: "理由" } },
        { id: "r2_3", category: "r2", translations: { ja: "ろんぶん", en: "essay, thesis", de: "Aufsatz", zh: "论文" } },
        { id: "r2_4", category: "r2", translations: { ja: "るいじ", en: "similarity", de: "Ähnlichkeit", zh: "类似" } },
        { id: "h1", category: "h", translations: { ja: "はじめる", en: "to begin", de: "beginnen", zh: "开始" } },
        { id: "h2", category: "h", translations: { ja: "ひつよう", en: "necessary", de: "notwendig", zh: "必要" } },
        { id: "h3", category: "h", translations: { ja: "ほうほう", en: "method", de: "Methode", zh: "方法" } },
        { id: "h4", category: "h", translations: { ja: "へんこう", en: "change", de: "Änderung", zh: "变更" } },
        { id: "f1", category: "f", translations: { ja: "ふくざつ", en: "complicated (this lesson's own vocab)", de: "kompliziert (eigenes Vokabular dieser Lektion)", zh: "复杂（本课词汇）" } },
        { id: "f2", category: "f", translations: { ja: "ふつう", en: "normal, usual", de: "normal", zh: "普通" } },
        { id: "f3", category: "f", translations: { ja: "ふえる", en: "to increase", de: "zunehmen", zh: "增加" } },
        { id: "f4", category: "f", translations: { ja: "ふくすう", en: "plural", de: "Plural", zh: "复数" } }
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
          r1: { ja: "R", en: "R", de: "R", zh: "R" },
          r2: { ja: "R", en: "R", de: "R", zh: "R" },
          h: { ja: "H", en: "H", de: "H", zh: "H" },
          f: { ja: "F", en: "F", de: "F", zh: "F" }
        },
        items: [
          { id: "r1_5", category: "r1", translations: { ja: "らく", en: "easy, comfortable", de: "leicht", zh: "轻松" } },
          { id: "r1_6", category: "r1", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },
          { id: "r1_7", category: "r1", translations: { ja: "るす", en: "absence", de: "Abwesenheit", zh: "不在家" } },
          { id: "r1_8", category: "r1", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
          { id: "r1_9", category: "r1", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
          { id: "r1_10", category: "r1", translations: { ja: "らくご", en: "rakugo", de: "Rakugo", zh: "落语" } },
          { id: "r1_11", category: "r1", translations: { ja: "るすばんでんわ", en: "answering machine", de: "Anrufbeantworter", zh: "电话答录机" } },
          { id: "r1_12", category: "r1", translations: { ja: "れんきゅう", en: "consecutive holidays", de: "aufeinanderfolgende Feiertage", zh: "连休" } },
          { id: "r1_13", category: "r1", translations: { ja: "ランチ", en: "lunch", de: "Mittagessen", zh: "午餐" } },
          { id: "r1_14", category: "r1", translations: { ja: "りっぱ", en: "splendid", de: "prächtig", zh: "出色的" } },
          { id: "r1_15", category: "r1", translations: { ja: "るすばん", en: "house-sitting", de: "Haus hüten", zh: "看家" } },
          { id: "r1_16", category: "r1", translations: { ja: "れいぎ", en: "manners", de: "Manieren", zh: "礼仪" } },
          { id: "r1_17", category: "r1", translations: { ja: "りかいする", en: "to understand", de: "verstehen", zh: "理解" } },
          { id: "r1_18", category: "r1", translations: { ja: "ろくおん", en: "recording", de: "Aufnahme", zh: "录音" } },

          { id: "r2_5", category: "r2", translations: { ja: "りえき", en: "profit", de: "Gewinn", zh: "利润" } },
          { id: "r2_6", category: "r2", translations: { ja: "ろうじん", en: "elderly person", de: "alter Mensch", zh: "老人" } },
          { id: "r2_7", category: "r2", translations: { ja: "りく", en: "land", de: "Land", zh: "陆地" } },
          { id: "r2_8", category: "r2", translations: { ja: "らいげつ", en: "next month", de: "nächster Monat", zh: "下个月" } },
          { id: "r2_9", category: "r2", translations: { ja: "れいぞうこ", en: "refrigerator", de: "Kühlschrank", zh: "冰箱" } },
          { id: "r2_10", category: "r2", translations: { ja: "らいねん", en: "next year", de: "nächstes Jahr", zh: "明年" } },
          { id: "r2_11", category: "r2", translations: { ja: "るい", en: "type, kind", de: "Art", zh: "种类" } },
          { id: "r2_12", category: "r2", translations: { ja: "らいしゅう", en: "next week", de: "nächste Woche", zh: "下周" } },
          { id: "r2_13", category: "r2", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "料理" } },
          { id: "r2_14", category: "r2", translations: { ja: "ろじ", en: "alley", de: "Gasse", zh: "小巷" } },
          { id: "r2_15", category: "r2", translations: { ja: "れつ", en: "row, queue", de: "Reihe, Schlange", zh: "队列" } },
          { id: "r2_16", category: "r2", translations: { ja: "りゅうこう", en: "trend, fashion", de: "Trend", zh: "流行" } },
          { id: "r2_17", category: "r2", translations: { ja: "ろうどう", en: "labor", de: "Arbeit", zh: "劳动" } },
          { id: "r2_18", category: "r2", translations: { ja: "るすちゅう", en: "while away", de: "während der Abwesenheit", zh: "外出期间" } },

          { id: "h5", category: "h", translations: { ja: "はんたい", en: "opposite", de: "Gegenteil", zh: "相反" } },
          { id: "h6", category: "h", translations: { ja: "ひかく", en: "comparison", de: "Vergleich", zh: "比较" } },
          { id: "h7", category: "h", translations: { ja: "ほうこく", en: "report", de: "Bericht", zh: "报告" } },
          { id: "h8", category: "h", translations: { ja: "へいき", en: "fine, calm", de: "gelassen", zh: "没事儿" } },
          { id: "h9", category: "h", translations: { ja: "はんだん", en: "judgment", de: "Urteil", zh: "判断" } },
          { id: "h10", category: "h", translations: { ja: "ひろば", en: "plaza", de: "Platz", zh: "广场" } },
          { id: "h11", category: "h", translations: { ja: "ほけん", en: "insurance", de: "Versicherung", zh: "保险" } },
          { id: "h12", category: "h", translations: { ja: "はっけん", en: "discovery", de: "Entdeckung", zh: "发现" } },
          { id: "h13", category: "h", translations: { ja: "ひてい", en: "negation, denial", de: "Verneinung", zh: "否定" } },
          { id: "h14", category: "h", translations: { ja: "ほんやく", en: "translation", de: "Übersetzung", zh: "翻译" } },
          { id: "h15", category: "h", translations: { ja: "はんい", en: "range, scope", de: "Umfang", zh: "范围" } },
          { id: "h16", category: "h", translations: { ja: "ひみつ", en: "secret", de: "Geheimnis", zh: "秘密" } },
          { id: "h17", category: "h", translations: { ja: "ほうそう", en: "broadcast", de: "Sendung", zh: "广播" } },
          { id: "h18", category: "h", translations: { ja: "はってん", en: "development", de: "Entwicklung", zh: "发展" } },

          { id: "f5", category: "f", translations: { ja: "ふあん", en: "anxiety", de: "Angst", zh: "不安" } },
          { id: "f6", category: "f", translations: { ja: "ふとる", en: "to gain weight", de: "zunehmen", zh: "变胖" } },
          { id: "f7", category: "f", translations: { ja: "ふせぐ", en: "to prevent", de: "verhindern", zh: "预防" } },
          { id: "f8", category: "f", translations: { ja: "ふきゅう", en: "spread, popularization", de: "Verbreitung", zh: "普及" } },
          { id: "f9", category: "f", translations: { ja: "ふまん", en: "dissatisfaction", de: "Unzufriedenheit", zh: "不满" } },
          { id: "f10", category: "f", translations: { ja: "ふたたび", en: "again", de: "wieder", zh: "再次" } },
          { id: "f11", category: "f", translations: { ja: "ふくむ", en: "to include", de: "beinhalten", zh: "包含" } },
          { id: "f12", category: "f", translations: { ja: "ふうふ", en: "married couple", de: "Ehepaar", zh: "夫妻" } },
          { id: "f13", category: "f", translations: { ja: "ふしぎ", en: "mysterious", de: "geheimnisvoll", zh: "不可思议" } },
          { id: "f14", category: "f", translations: { ja: "ふくそう", en: "clothing", de: "Kleidung", zh: "服装" } },
          { id: "f15", category: "f", translations: { ja: "ふくつう", en: "stomachache", de: "Bauchschmerzen", zh: "腹痛" } },
          { id: "f16", category: "f", translations: { ja: "ふくげん", en: "restoration", de: "Wiederherstellung", zh: "恢复" } },
          { id: "f17", category: "f", translations: { ja: "ふろく", en: "appendix, supplement", de: "Anhang", zh: "附录" } },
          { id: "f18", category: "f", translations: { ja: "ふたん", en: "burden", de: "Belastung", zh: "负担" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-kata",
        title: { ja: "れんしゅう：〜かた", en: "Practice: ~Kata", de: "Übung: ~Kata", zh: "练习：〜かた" },
        spokenIntro: {
          ja: "つぎは、「〜かた」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~kata.",
          de: "Als Nächstes üben wir Beispielsätze mit ~kata.",
          zh: "接下来，让我们练习使用「〜かた」的例句。"
        },
        lines: [
          { id: "kt1", translations: { ja: "この アプリの つかいかたが わかりません。", jaKanji: "このアプリの使い方が分かりません。", en: "I don't understand how to use this app.", de: "Ich verstehe nicht, wie man diese App benutzt.", zh: "我不知道这个应用怎么用。" } },
          { id: "kt2", translations: { ja: "この りょうりの つくりかたを おしえて ください。", jaKanji: "この料理の作り方を教えてください。", en: "Please teach me how to make this dish.", de: "Bitte zeigen Sie mir, wie man dieses Gericht macht.", zh: "请教我这道菜的做法。" } },
          { id: "kt3", translations: { ja: "とうろくの しかたが わかりません。", jaKanji: "登録の仕方が分かりません。", en: "I don't understand how to register.", de: "Ich verstehe nicht, wie man sich registriert.", zh: "我不知道怎么注册。" } },
          { id: "kt4", translations: { ja: "かんじの よみかたを おしえて ください。", jaKanji: "漢字の読み方を教えてください。", en: "Please teach me how to read this kanji.", de: "Bitte zeigen Sie mir, wie man dieses Kanji liest.", zh: "请教我这个汉字的读法。" } },
          { id: "kt5", translations: { ja: "でんわの かけかたが わかりません。", jaKanji: "電話のかけ方が分かりません。", en: "I don't know how to make a phone call.", de: "Ich weiß nicht, wie man telefoniert.", zh: "我不知道怎么打电话。" } },
          { id: "kt6", translations: { ja: "せっていの しかたを しって いますか？", jaKanji: "設定の仕方を知っていますか？", en: "Do you know how to change the settings?", de: "Wissen Sie, wie man die Einstellungen ändert?", zh: "你知道怎么设置吗？" } },
          { id: "kt7", translations: { ja: "はしの もちかたが わかりません。", jaKanji: "箸の持ち方が分かりません。", en: "I don't know how to hold chopsticks.", de: "Ich weiß nicht, wie man Stäbchen hält.", zh: "我不知道怎么拿筷子。" } },
          { id: "kt8", translations: { ja: "かんじの かきかたを れんしゅうしました。", jaKanji: "漢字の書き方を練習しました。", en: "I practiced how to write kanji.", de: "Ich habe geübt, wie man Kanji schreibt.", zh: "我练习了汉字的写法。" } },
          { id: "kt9", translations: { ja: "みちの あるきかたに きを つけて ください。", jaKanji: "道の歩き方に気を付けてください。", en: "Please be careful how you walk on the road.", de: "Bitte achten Sie darauf, wie Sie auf der Straße gehen.", zh: "请注意走路的方式。" } },
          { id: "kt10", translations: { ja: "コーヒーの いれかたを ならいました。", jaKanji: "コーヒーの入れ方を習いました。", en: "I learned how to make coffee.", de: "Ich habe gelernt, wie man Kaffee zubereitet.", zh: "我学了咖啡的冲泡方法。" } }
        ]
      },
      {
        id: "grammar-drill-yasuinikui",
        title: { ja: "れんしゅう：〜やすい／〜にくい", en: "Practice: ~Yasui / ~Nikui", de: "Übung: ~Yasui / ~Nikui", zh: "练习：〜やすい／〜にくい" },
        spokenIntro: {
          ja: "つぎは、「〜やすい」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~yasui.",
          de: "Als Nächstes üben wir Beispielsätze mit ~yasui.",
          zh: "接下来，让我们练习使用「〜やすい」的例句。"
        },
        lines: [
          { id: "yn1", translations: { ja: "この ペンは かきやすいです。", jaKanji: "このペンは書きやすいです。", en: "This pen is easy to write with.", de: "Dieser Stift ist einfach zu schreiben.", zh: "这支笔很好写。" } },
          { id: "yn2", translations: { ja: "この かんじは おぼえにくいです。", jaKanji: "この漢字は覚えにくいです。", en: "This kanji is hard to remember.", de: "Dieses Kanji ist schwer zu merken.", zh: "这个汉字很难记。" } },
          { id: "yn3", translations: { ja: "あたらしい くつは あるきやすいです。", jaKanji: "新しい靴は歩きやすいです。", en: "New shoes are easy to walk in.", de: "Neue Schuhe sind einfach zum Gehen.", zh: "新鞋子走路很舒服。" } },
          { id: "yn4", translations: { ja: "この みちは わかりにくいです。", jaKanji: "この道は分かりにくいです。", en: "This road is hard to find one's way.", de: "Diese Straße ist schwer zu finden.", zh: "这条路很难懂。" } },
          { id: "yn5", translations: { ja: "この ほんは よみやすいです。", jaKanji: "この本は読みやすいです。", en: "This book is easy to read.", de: "Dieses Buch ist einfach zu lesen.", zh: "这本书很好读。" } },
          { id: "yn6", translations: { ja: "この もじは よみにくいです。", jaKanji: "この文字は読みにくいです。", en: "This text is hard to read.", de: "Dieser Text ist schwer zu lesen.", zh: "这些字很难读。" } },
          { id: "yn7", translations: { ja: "この いすは すわりやすいです。", jaKanji: "この椅子は座りやすいです。", en: "This chair is easy to sit in.", de: "Dieser Stuhl ist bequem zum Sitzen.", zh: "这把椅子很好坐。" } },
          { id: "yn8", translations: { ja: "この もんだいは とけにくいです。", jaKanji: "この問題は解けにくいです。", en: "This problem is hard to solve.", de: "Dieses Problem ist schwer zu lösen.", zh: "这个问题很难解。" } },
          { id: "yn9", translations: { ja: "この りょうりは つくりやすいです。", jaKanji: "この料理は作りやすいです。", en: "This dish is easy to make.", de: "Dieses Gericht ist einfach zu machen.", zh: "这道菜很容易做。" } },
          { id: "yn10", translations: { ja: "この せつめいは わかりやすいです。", jaKanji: "この説明は分かりやすいです。", en: "This explanation is easy to understand.", de: "Diese Erklärung ist leicht verständlich.", zh: "这个说明很好懂。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "つかいかたを おぼえよう", en: "Let's Learn How to Use It", de: "Lass uns lernen, wie man es benutzt" },
    lines: [
      { id: "sg1", translations: { ja: "あたらしい アプリ つかってみよう", en: "Let's try using the new app", de: "Lass uns die neue App ausprobieren" } },
      { id: "sg2", translations: { ja: "ボタンを おして せっていしよう", en: "Press the button and set it up", de: "Drücke den Knopf und richte es ein" } },
      { id: "sg3", translations: { ja: "さいしょは むずかしいけど", en: "It's difficult at first, but", de: "Am Anfang ist es schwierig, aber" } },
      { id: "sg4", translations: { ja: "なれれば きっと つかいやすい", en: "Once you're used to it, it'll surely be easy to use", de: "Sobald du dich daran gewöhnt hast, wird es bestimmt einfach zu benutzen sein" } }
    ]
  }
};
