import type { TopicLesson } from "../topicTypes";

// A2 — row 18 of docs/a2-master-lesson-table-v01.md. Grammar:
// volitional form (よう/おう — "let's do") + 〜つもり (intend to).
// Pronunciation 1/2 (A vs AA, O vs OO) kept exactly as assigned.

export const topicPlans: TopicLesson = {
  id: "topic-a2-17-plans",
  lessonNumber: 17,
  level: "A2",
  topicName: {
    ja: "けいかく",
    en: "Plans",
    de: "Pläne",
    zh: "计划"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "けいかく", jaKanji: "計画", en: "plan", de: "Plan", zh: "计划" } },
    { id: "v02", category: "noun", translations: { ja: "もくてき", jaKanji: "目的", en: "purpose", de: "Zweck", zh: "目的" } },
    { id: "v03", category: "noun", translations: { ja: "かんがえ", jaKanji: "考え", en: "idea, thought", de: "Idee", zh: "想法" } },
    { id: "v04", category: "noun", translations: { ja: "きぼう", jaKanji: "希望", en: "hope, wish", de: "Hoffnung", zh: "希望" } },
    { id: "v05", category: "noun", translations: { ja: "しんがく", jaKanji: "進学", en: "advancing to higher education", de: "Weiterbildung", zh: "升学" } },
    { id: "v06", category: "noun", translations: { ja: "しゅうしょく", jaKanji: "就職", en: "finding employment", de: "Berufseinstieg", zh: "就业" } },
    { id: "v07", category: "noun", translations: { ja: "りょこうさき", jaKanji: "旅行先", en: "travel destination", de: "Reiseziel", zh: "旅行目的地" } },
    { id: "v08", category: "noun", translations: { ja: "しょうらい", jaKanji: "将来", en: "future", de: "Zukunft", zh: "将来" } },
    { id: "v09", category: "noun", translations: { ja: "らいげつ", jaKanji: "来月", en: "next month", de: "nächster Monat", zh: "下个月" } },
    { id: "v10", category: "noun", translations: { ja: "らいねん", jaKanji: "来年", en: "next year", de: "nächstes Jahr", zh: "明年" } },
    { id: "v11", category: "noun", translations: { ja: "しょうたい", jaKanji: "招待", en: "invitation", de: "Einladung", zh: "邀请" } },
    { id: "v12", category: "noun", translations: { ja: "かんげいかい", jaKanji: "歓迎会", en: "welcome party", de: "Willkommensfeier", zh: "欢迎会" } },
    { id: "v13", category: "noun", translations: { ja: "そうべつかい", jaKanji: "送別会", en: "farewell party", de: "Abschiedsfeier", zh: "送别会" } },
    { id: "v14", category: "verb", translations: { ja: "かんがえる", jaKanji: "考える", en: "to think, consider", de: "nachdenken", zh: "思考" } },
    { id: "v15", category: "verb", translations: { ja: "きめる", jaKanji: "決める", en: "to decide", de: "entscheiden", zh: "决定" } },
    { id: "v16", category: "verb", translations: { ja: "さそう", jaKanji: "誘う", en: "to invite", de: "einladen", zh: "邀请" } },
    { id: "v17", category: "verb", translations: { ja: "さんかする", jaKanji: "参加する", en: "to participate", de: "teilnehmen", zh: "参加" } },
    { id: "v18", category: "verb", translations: { ja: "じゅんびする", jaKanji: "準備する", en: "to prepare", de: "vorbereiten", zh: "准备" } },
    { id: "v19", category: "verb", translations: { ja: "かくにんする", jaKanji: "確認する", en: "to confirm", de: "bestätigen", zh: "确认" } },
    { id: "v20", category: "verb", translations: { ja: "かんがえなおす", jaKanji: "考え直す", en: "to reconsider", de: "überdenken", zh: "重新考虑" } },
    { id: "v21", category: "verb", translations: { ja: "えらぶ", jaKanji: "選ぶ", en: "to choose", de: "wählen", zh: "选择" } },
    { id: "v22", category: "verb", translations: { ja: "きぼうする", jaKanji: "希望する", en: "to hope for, wish", de: "sich wünschen", zh: "希望" } },
    { id: "v23", category: "verb", translations: { ja: "つづける", jaKanji: "続ける", en: "to continue", de: "fortsetzen", zh: "继续" } },
    { id: "v24", category: "verb", translations: { ja: "かわる", jaKanji: "変わる", en: "to change", de: "sich ändern", zh: "改变" } },
    { id: "v25", category: "adjective", translations: { ja: "たしかな", jaKanji: "確かな", en: "certain", de: "sicher", zh: "确实的" } },
    { id: "v26", category: "adjective", translations: { ja: "ふめいな", jaKanji: "不明な", en: "unclear, uncertain", de: "unklar", zh: "不明确的" } },
    { id: "v27", category: "adjective", translations: { ja: "だいがくせい", jaKanji: "大学生", en: "university student", de: "Student(in)", zh: "大学生" } },
    { id: "v28", category: "adverb", translations: { ja: "かならず", jaKanji: "必ず", en: "certainly", de: "sicherlich", zh: "一定" } },
    { id: "v29", category: "adverb", translations: { ja: "まだ", jaKanji: "まだ", en: "still, not yet", de: "noch", zh: "还，仍然" } },
    { id: "v30", category: "adverb", translations: { ja: "とりあえず", jaKanji: "とりあえず", en: "for now, first of all", de: "erst einmal", zh: "首先" } }
  ],
  dialogueA: {
    title: { ja: "しゅうまつの けいかくを たてる", en: "Making Weekend Plans", de: "Wochenendpläne machen", zh: "制定周末计划" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しゅうまつ、なにか けいかくは ある？", jaKanji: "週末、何か計画はある？", en: "Do you have any plans for the weekend?", de: "Hast du Pläne fürs Wochenende?", zh: "周末有什么计划吗？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "まだ きめて いないよ。いっしょに かんがえよう。", jaKanji: "まだ決めていないよ。一緒に考えよう。", en: "I haven't decided yet. Let's think about it together.", de: "Ich habe mich noch nicht entschieden. Lass uns zusammen überlegen.", zh: "还没决定呢。我们一起想想吧。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "うみに いこうか？", jaKanji: "海に行こうか？", en: "Shall we go to the beach?", de: "Sollen wir ans Meer gehen?", zh: "去海边吧？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいね！でも、てんきよほうを かくにんしよう。", jaKanji: "いいね！でも、天気予報を確認しよう。", en: "Sounds good! But let's check the weather forecast.", de: "Klingt gut! Aber lass uns die Wettervorhersage checken.", zh: "好啊！不过我们先确认一下天气预报吧。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "もし あめなら、どう しよう？", jaKanji: "もし雨なら、どうしよう？", en: "If it rains, what shall we do?", de: "Was machen wir, wenn es regnet?", zh: "如果下雨的话，怎么办？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "あめなら、びじゅつかんに いこう。", jaKanji: "雨なら、美術館に行こう。", en: "If it rains, let's go to the art museum.", de: "Wenn es regnet, lass uns ins Kunstmuseum gehen.", zh: "如果下雨，去美术馆吧。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "とりあえず、あさ はやく おきよう。", jaKanji: "とりあえず、朝早く起きよう。", en: "For now, let's wake up early in the morning.", de: "Erst einmal lass uns früh am Morgen aufstehen.", zh: "总之，早上早点起床吧。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うん、そうしよう。おべんとうも つくろうか？", jaKanji: "うん、そうしよう。お弁当も作ろうか？", en: "Yeah, let's do that. Shall we make a lunch box too?", de: "Ja, machen wir das. Sollen wir auch ein Lunchpaket machen?", zh: "嗯，就这么办。要不要也做便当？" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいね。なにを つくろうか？", jaKanji: "いいね。何を作ろうか？", en: "Good idea. What shall we make?", de: "Gute Idee. Was sollen wir machen?", zh: "好主意。做什么呢？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "サンドイッチを つくろう。かんたんだから。", jaKanji: "サンドイッチを作ろう。簡単だから。", en: "Let's make sandwiches. Because they're easy.", de: "Lass uns Sandwiches machen. Weil sie einfach sind.", zh: "做三明治吧。因为简单。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "だれか さそおうか？", jaKanji: "誰か誘おうか？", en: "Shall we invite someone?", de: "Sollen wir jemanden einladen?", zh: "要不要邀请谁？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうだね。みほさんを さそおう。", jaKanji: "そうだね。美穂さんを誘おう。", en: "Good idea. Let's invite Miho.", de: "Gute Idee. Lass uns Miho einladen.", zh: "好啊。邀请美穗吧。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "じゃあ、いま れんらくしよう。", jaKanji: "じゃあ、今連絡しよう。", en: "Then let's contact her now.", de: "Dann lass uns sie jetzt kontaktieren.", zh: "那现在就联系她吧。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "たのしみだね。かならず いい けいかくに なるよ。", jaKanji: "楽しみだね。必ずいい計画になるよ。", en: "I'm looking forward to it. It'll definitely be a good plan.", de: "Ich freue mich darauf. Es wird bestimmt ein guter Plan.", zh: "很期待呢。一定会是个好计划的。" } }
    ]
  },
  dialogueB: {
    title: { ja: "しょうらいの もくひょうに ついて はなす", en: "Discussing Future Intentions", de: "Über zukünftige Absichten sprechen", zh: "谈论未来的打算" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そつぎょうしたら、どう する つもりですか？", jaKanji: "卒業したら、どうするつもりですか？", en: "What do you intend to do after you graduate?", de: "Was haben Sie vor, nach dem Abschluss zu tun?", zh: "毕业以后打算做什么？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だいがくいんに しんがくする つもりです。", jaKanji: "大学院に進学するつもりです。", en: "I intend to advance to graduate school.", de: "Ich habe vor, ins Graduiertenkolleg zu gehen.", zh: "打算继续读研究生院。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しゅうしょくする つもりは ないんですか？", jaKanji: "就職するつもりはないんですか？", en: "You don't intend to find employment?", de: "Sie haben nicht vor, einen Job zu suchen?", zh: "没打算找工作吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いまは まだ そのつもりは ありません。", jaKanji: "今はまだそのつもりはありません。", en: "Right now, I don't intend to yet.", de: "Im Moment habe ich das noch nicht vor.", zh: "现在还没有这个打算。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だいがくいんで なにを けんきゅうする つもりですか？", jaKanji: "大学院で何を研究するつもりですか？", en: "What do you intend to research in graduate school?", de: "Was haben Sie vor, im Graduiertenkolleg zu erforschen?", zh: "打算在研究生院研究什么？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "げんごを けんきゅうする つもりです。", jaKanji: "言語を研究するつもりです。", en: "I intend to research language.", de: "Ich habe vor, Sprache zu erforschen.", zh: "打算研究语言。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しょうらいは どんな しごとを する つもりですか？", jaKanji: "将来はどんな仕事をするつもりですか？", en: "What kind of job do you intend to have in the future?", de: "Was für einen Job haben Sie in Zukunft vor?", zh: "将来打算做什么样的工作？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "せんせいに なる つもりです。", jaKanji: "先生になるつもりです。", en: "I intend to become a teacher.", de: "Ich habe vor, Lehrer(in) zu werden.", zh: "打算当老师。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "がいこくで はたらく つもりは ありますか？", jaKanji: "外国で働くつもりはありますか？", en: "Do you intend to work abroad?", de: "Haben Sie vor, im Ausland zu arbeiten?", zh: "有打算在国外工作吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、いつか りゅうがくする つもりです。", jaKanji: "はい、いつか留学するつもりです。", en: "Yes, I intend to study abroad someday.", de: "Ja, ich habe vor, irgendwann im Ausland zu studieren.", zh: "是的，打算将来去留学。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けっこんする つもりは ありますか？", jaKanji: "結婚するつもりはありますか？", en: "Do you intend to get married?", de: "Haben Sie vor zu heiraten?", zh: "有打算结婚吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "まだ かんがえて いません。しごとに しゅうちゅうする つもりです。", jaKanji: "まだ考えていません。仕事に集中するつもりです。", en: "I haven't thought about it yet. I intend to focus on work.", de: "Ich habe noch nicht darüber nachgedacht. Ich habe vor, mich auf die Arbeit zu konzentrieren.", zh: "还没想过。打算专注于工作。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けいかくを かえる つもりは ないんですか？", jaKanji: "計画を変えるつもりはないんですか？", en: "You don't intend to change your plans?", de: "Sie haben nicht vor, Ihre Pläne zu ändern?", zh: "没打算改变计划吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、いまの ところ かえる つもりは ないです。", jaKanji: "はい、今のところ変えるつもりはないです。", en: "Yes, for now I don't intend to change it.", de: "Ja, im Moment habe ich nicht vor, es zu ändern.", zh: "是的，目前没有打算改变。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "いこうけい／〜つもり：さそいと いと", en: "Volitional Form / ~Tsumori: Suggestions and Intentions", de: "Volitiv / ~Tsumori: Vorschläge und Absichten", zh: "意志形／〜つもり：提议与打算" },
      explanation: {
        ja: "いこうけい（る-どうし：る→よう、う-どうし：う-だん→お-だん+う）は「〜しよう」（let's do）と、じぶんの さそいや ていあんを あらわします（「いこう」「たべよう」）。「〜つもり」は どうしの じしょけいに つけて、まえから きめている いとを あらわします（「いく つもりです」＝I intend to go）。「〜つもりは ない」は「その いとが ない」ことを いいます。",
        en: "The volitional form (る-verbs: る→よう; う-verbs: う-row→お-row+う) means \"let's do ~,\" expressing your own suggestion or proposal (\"いこう\" = let's go, \"たべよう\" = let's eat). ~tsumori attaches to a verb's dictionary form to express a previously-decided intention (\"いく つもりです\" = I intend to go). ~tsumori wa nai means \"I don't intend to.\"",
        de: "Die Volitivform (る-Verben: る→よう; う-Verben: う-Reihe→お-Reihe+う) bedeutet \"lass uns ~ tun\" und drückt einen eigenen Vorschlag aus (\"いこう\" = lass uns gehen, \"たべよう\" = lass uns essen). ~tsumori wird an die Wörterbuchform eines Verbs angehängt, um eine bereits getroffene Absicht auszudrücken (\"いく つもりです\" = ich habe vor zu gehen). ~tsumori wa nai bedeutet \"ich habe nicht vor.\"",
        zh: "意志形（る动词：る→よう；う动词：う段→お段+う）表示\"让我们做~吧\"，用于表达自己的提议（「いこう」＝走吧，「たべよう」＝吃吧）。〜つもり接在动词辞书形后，表示事先决定的打算（「いく つもりです」＝打算去）。〜つもりはない表示\"没有这个打算\"。"
      },
      chunks: [
        { id: "g1", translations: { ja: "うみに いこうか？", jaKanji: "海に行こうか？", en: "Shall we go to the beach?", de: "Sollen wir ans Meer gehen?", zh: "去海边吧？" } },
        { id: "g2", translations: { ja: "いっしょに たべよう。", jaKanji: "一緒に食べよう。", en: "Let's eat together.", de: "Lass uns zusammen essen.", zh: "一起吃吧。" } },
        { id: "g3", translations: { ja: "らいねん りゅうがくする つもりです。", jaKanji: "来年留学するつもりです。", en: "I intend to study abroad next year.", de: "Ich habe vor, nächstes Jahr im Ausland zu studieren.", zh: "打算明年去留学。" } },
        { id: "g4", translations: { ja: "けっこんする つもりは ありません。", jaKanji: "結婚するつもりはありません。", en: "I don't intend to get married.", de: "Ich habe nicht vor zu heiraten.", zh: "没有打算结婚。" } },
        { id: "g5", translations: { ja: "がんばろう！", jaKanji: "頑張ろう！", en: "Let's do our best!", de: "Geben wir unser Bestes!", zh: "加油吧！" } },
        { id: "g6", translations: { ja: "しょうらい せんせいに なる つもりです。", jaKanji: "将来先生になるつもりです。", en: "I intend to become a teacher in the future.", de: "Ich habe vor, in Zukunft Lehrer(in) zu werden.", zh: "将来打算当老师。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        a_short: { ja: "A — みじかい", en: "A — short", de: "A — kurz", zh: "A——短音" },
        a_long: { ja: "A — ながい", en: "A — long", de: "A — lang", zh: "A——长音" },
        o_short: { ja: "O — みじかい", en: "O — short", de: "O — kurz", zh: "O——短音" },
        o_long: { ja: "O — ながい", en: "O — long", de: "O — lang", zh: "O——长音" }
      },
      items: [
        { id: "as1", category: "a_short", translations: { ja: "おばさん", en: "aunt", de: "Tante", zh: "阿姨" } },
        { id: "as2", category: "a_short", translations: { ja: "かど", en: "corner", de: "Ecke", zh: "拐角" } },
        { id: "as3", category: "a_short", translations: { ja: "さか", en: "slope", de: "Hang", zh: "坡" } },
        { id: "as4", category: "a_short", translations: { ja: "たな", en: "shelf", de: "Regal", zh: "架子" } },
        { id: "al1", category: "a_long", translations: { ja: "おばあさん", en: "grandmother", de: "Großmutter", zh: "奶奶" } },
        { id: "al2", category: "a_long", translations: { ja: "かあさん", en: "mom (casual)", de: "Mama (locker)", zh: "妈妈（口语）" } },
        { id: "al3", category: "a_long", translations: { ja: "ばあい", en: "case, situation", de: "Fall", zh: "情况" } },
        { id: "al4", category: "a_long", translations: { ja: "さあ", en: "well then (interjection)", de: "nun denn", zh: "好啦（叹词）" } },
        { id: "os1", category: "o_short", translations: { ja: "とる", en: "to take", de: "nehmen", zh: "拿" } },
        { id: "os2", category: "o_short", translations: { ja: "ほし", en: "star", de: "Stern", zh: "星星" } },
        { id: "os3", category: "o_short", translations: { ja: "こども", en: "child", de: "Kind", zh: "孩子" } },
        { id: "os4", category: "o_short", translations: { ja: "もの", en: "thing", de: "Sache", zh: "东西" } },
        { id: "ol1", category: "o_long", translations: { ja: "とおい", en: "far", de: "weit", zh: "远的" } },
        { id: "ol2", category: "o_long", translations: { ja: "こうこう", en: "high school", de: "Oberschule", zh: "高中" } },
        { id: "ol3", category: "o_long", translations: { ja: "もう", en: "already", de: "schon", zh: "已经" } },
        { id: "ol4", category: "o_long", translations: { ja: "おおきい", en: "big", de: "groß", zh: "大的" } }
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
          a_short: { ja: "A — みじかい", en: "A — short", de: "A — kurz", zh: "A——短音" },
          a_long: { ja: "A — ながい", en: "A — long", de: "A — lang", zh: "A——长音" },
          o_short: { ja: "O — みじかい", en: "O — short", de: "O — kurz", zh: "O——短音" },
          o_long: { ja: "O — ながい", en: "O — long", de: "O — lang", zh: "O——长音" }
        },
        pairedColumns: [["a_short", "a_long"], ["o_short", "o_long"]],
        items: [
          { id: "as5", category: "a_short", translations: { ja: "あさ", en: "morning", de: "Morgen", zh: "早上" } },
          { id: "al5", category: "a_long", translations: { ja: "カード", en: "card", de: "Karte", zh: "卡片" } },
          { id: "as6", category: "a_short", translations: { ja: "あに", en: "older brother", de: "älterer Bruder", zh: "哥哥" } },
          { id: "al6", category: "a_long", translations: { ja: "マーク", en: "mark", de: "Markierung", zh: "标志" } },
          { id: "as7", category: "a_short", translations: { ja: "あね", en: "older sister", de: "ältere Schwester", zh: "姐姐" } },
          { id: "al7", category: "a_long", translations: { ja: "バー", en: "bar", de: "Bar", zh: "酒吧" } },
          { id: "as8", category: "a_short", translations: { ja: "かさ", en: "umbrella", de: "Regenschirm", zh: "雨伞" } },
          { id: "al8", category: "a_long", translations: { ja: "スター", en: "star (celebrity)", de: "Star", zh: "明星" } },
          { id: "as9", category: "a_short", translations: { ja: "はな", en: "flower", de: "Blume", zh: "花" } },
          { id: "al9", category: "a_long", translations: { ja: "ギター", en: "guitar", de: "Gitarre", zh: "吉他" } },
          { id: "as10", category: "a_short", translations: { ja: "たまご", en: "egg", de: "Ei", zh: "鸡蛋" } },
          { id: "al10", category: "a_long", translations: { ja: "カレンダー", en: "calendar", de: "Kalender", zh: "日历" } },
          { id: "as11", category: "a_short", translations: { ja: "やさい", en: "vegetable", de: "Gemüse", zh: "蔬菜" } },
          { id: "al11", category: "a_long", translations: { ja: "サッカー", en: "soccer", de: "Fußball", zh: "足球" } },
          { id: "as12", category: "a_short", translations: { ja: "さかな", en: "fish", de: "Fisch", zh: "鱼" } },
          { id: "al12", category: "a_long", translations: { ja: "ドライバー", en: "driver", de: "Fahrer(in)", zh: "司机" } },
          { id: "as13", category: "a_short", translations: { ja: "かばん", en: "bag", de: "Tasche", zh: "包" } },
          { id: "al13", category: "a_long", translations: { ja: "メンバー", en: "member", de: "Mitglied", zh: "成员" } },
          { id: "as14", category: "a_short", translations: { ja: "あか", en: "red", de: "Rot", zh: "红色" } },
          { id: "al14", category: "a_long", translations: { ja: "カウンター", en: "counter", de: "Theke", zh: "柜台" } },
          { id: "as15", category: "a_short", translations: { ja: "あつい", en: "hot", de: "heiß", zh: "热的" } },
          { id: "al15", category: "a_long", translations: { ja: "タワー", en: "tower", de: "Turm", zh: "塔" } },
          { id: "as16", category: "a_short", translations: { ja: "あまい", en: "sweet", de: "süß", zh: "甜的" } },
          { id: "al16", category: "a_long", translations: { ja: "ソーラー", en: "solar", de: "Solar-", zh: "太阳能" } },
          { id: "as17", category: "a_short", translations: { ja: "あんない", en: "guide, information", de: "Führung", zh: "向导" } },
          { id: "al17", category: "a_long", translations: { ja: "レポーター", en: "reporter", de: "Reporter(in)", zh: "记者" } },
          { id: "as18", category: "a_short", translations: { ja: "さくら", en: "cherry blossom", de: "Kirschblüte", zh: "樱花" } },
          { id: "al18", category: "a_long", translations: { ja: "エレベーター", en: "elevator", de: "Aufzug", zh: "电梯" } },

          { id: "os5", category: "o_short", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },
          { id: "ol5", category: "o_long", translations: { ja: "とうきょう", en: "Tokyo", de: "Tokio", zh: "东京" } },
          { id: "os6", category: "o_short", translations: { ja: "もり", en: "forest", de: "Wald", zh: "森林" } },
          { id: "ol6", category: "o_long", translations: { ja: "ぼうし", en: "hat", de: "Hut", zh: "帽子" } },
          { id: "os7", category: "o_short", translations: { ja: "とり", en: "bird", de: "Vogel", zh: "鸟" } },
          { id: "ol7", category: "o_long", translations: { ja: "そうじ", en: "cleaning", de: "Putzen", zh: "打扫" } },
          { id: "os8", category: "o_short", translations: { ja: "くろ", en: "black", de: "Schwarz", zh: "黑色" } },
          { id: "ol8", category: "o_long", translations: { ja: "べんきょう", en: "study", de: "Lernen", zh: "学习" } },
          { id: "os9", category: "o_short", translations: { ja: "しろ", en: "white", de: "Weiß", zh: "白色" } },
          { id: "ol9", category: "o_long", translations: { ja: "きょう", en: "today", de: "heute", zh: "今天" } },
          { id: "os10", category: "o_short", translations: { ja: "ところ", en: "place", de: "Ort", zh: "地方" } },
          { id: "ol10", category: "o_long", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
          { id: "os11", category: "o_short", translations: { ja: "こと", en: "thing, matter", de: "Sache", zh: "事情" } },
          { id: "ol11", category: "o_long", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
          { id: "os12", category: "o_short", translations: { ja: "もっと", en: "more", de: "mehr", zh: "更多" } },
          { id: "ol12", category: "o_long", translations: { ja: "おうえん", en: "cheering, support", de: "Unterstützung", zh: "加油" } },
          { id: "os13", category: "o_short", translations: { ja: "よこ", en: "side", de: "Seite", zh: "旁边" } },
          { id: "ol13", category: "o_long", translations: { ja: "おうさま", en: "king", de: "König", zh: "国王" } },
          { id: "os14", category: "o_short", translations: { ja: "とこ", en: "bed (short form)", de: "Bett (Kurzform)", zh: "床（简称）" } },
          { id: "ol14", category: "o_long", translations: { ja: "こおり", en: "ice", de: "Eis", zh: "冰" } },
          { id: "os15", category: "o_short", translations: { ja: "どこ", en: "where", de: "wo", zh: "哪里" } },
          { id: "ol15", category: "o_long", translations: { ja: "とおる", en: "to pass through", de: "durchqueren", zh: "通过" } },
          { id: "os16", category: "o_short", translations: { ja: "のこる", en: "to remain", de: "übrig bleiben", zh: "剩下" } },
          { id: "ol16", category: "o_long", translations: { ja: "おおい", en: "many", de: "viele", zh: "多的" } },
          { id: "os17", category: "o_short", translations: { ja: "ほそい", en: "thin", de: "dünn", zh: "细的" } },
          { id: "ol17", category: "o_long", translations: { ja: "とお", en: "ten", de: "zehn", zh: "十" } },
          { id: "os18", category: "o_short", translations: { ja: "もどる", en: "to return", de: "zurückkehren", zh: "返回" } },
          { id: "ol18", category: "o_long", translations: { ja: "ほうそう", en: "broadcast", de: "Sendung", zh: "广播" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-volitional",
        title: { ja: "れんしゅう：いこうけい", en: "Practice: Volitional Form", de: "Übung: Volitiv", zh: "练习：意志形" },
        spokenIntro: {
          ja: "つぎは、いこうけいを つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using the volitional form.",
          de: "Als Nächstes üben wir Beispielsätze mit dem Volitiv.",
          zh: "接下来，让我们练习使用意志形的例句。"
        },
        lines: [
          { id: "vo1", translations: { ja: "うみに いこうか？", jaKanji: "海に行こうか？", en: "Shall we go to the beach?", de: "Sollen wir ans Meer gehen?", zh: "去海边吧？" } },
          { id: "vo2", translations: { ja: "いっしょに たべよう。", jaKanji: "一緒に食べよう。", en: "Let's eat together.", de: "Lass uns zusammen essen.", zh: "一起吃吧。" } },
          { id: "vo3", translations: { ja: "がんばろう！", jaKanji: "頑張ろう！", en: "Let's do our best!", de: "Geben wir unser Bestes!", zh: "加油吧！" } },
          { id: "vo4", translations: { ja: "はやく おきよう。", jaKanji: "早く起きよう。", en: "Let's wake up early.", de: "Lass uns früh aufstehen.", zh: "早点起床吧。" } },
          { id: "vo5", translations: { ja: "てんきよほうを かくにんしよう。", jaKanji: "天気予報を確認しよう。", en: "Let's check the weather forecast.", de: "Lass uns die Wettervorhersage checken.", zh: "确认一下天气预报吧。" } },
          { id: "vo6", translations: { ja: "だれかを さそおう。", jaKanji: "誰かを誘おう。", en: "Let's invite someone.", de: "Lass uns jemanden einladen.", zh: "邀请个人吧。" } },
          { id: "vo7", translations: { ja: "サンドイッチを つくろう。", jaKanji: "サンドイッチを作ろう。", en: "Let's make sandwiches.", de: "Lass uns Sandwiches machen.", zh: "做三明治吧。" } },
          { id: "vo8", translations: { ja: "いま れんらくしよう。", jaKanji: "今連絡しよう。", en: "Let's contact them now.", de: "Lass uns jetzt Bescheid geben.", zh: "现在就联系吧。" } },
          { id: "vo9", translations: { ja: "びじゅつかんに いこう。", jaKanji: "美術館に行こう。", en: "Let's go to the art museum.", de: "Lass uns ins Kunstmuseum gehen.", zh: "去美术馆吧。" } },
          { id: "vo10", translations: { ja: "いっしょに かんがえよう。", jaKanji: "一緒に考えよう。", en: "Let's think about it together.", de: "Lass uns zusammen überlegen.", zh: "一起想想吧。" } }
        ]
      },
      {
        id: "grammar-drill-tsumori",
        title: { ja: "れんしゅう：〜つもり", en: "Practice: ~Tsumori", de: "Übung: ~Tsumori", zh: "练习：〜つもり" },
        spokenIntro: {
          ja: "つぎは、「〜つもり」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~tsumori.",
          de: "Als Nächstes üben wir Beispielsätze mit ~tsumori.",
          zh: "接下来，让我们练习使用「〜つもり」的例句。"
        },
        lines: [
          { id: "ts1", translations: { ja: "らいねん りゅうがくする つもりです。", jaKanji: "来年留学するつもりです。", en: "I intend to study abroad next year.", de: "Ich habe vor, nächstes Jahr im Ausland zu studieren.", zh: "打算明年去留学。" } },
          { id: "ts2", translations: { ja: "けっこんする つもりは ありません。", jaKanji: "結婚するつもりはありません。", en: "I don't intend to get married.", de: "Ich habe nicht vor zu heiraten.", zh: "没有打算结婚。" } },
          { id: "ts3", translations: { ja: "しょうらい せんせいに なる つもりです。", jaKanji: "将来先生になるつもりです。", en: "I intend to become a teacher in the future.", de: "Ich habe vor, in Zukunft Lehrer(in) zu werden.", zh: "将来打算当老师。" } },
          { id: "ts4", translations: { ja: "だいがくいんに しんがくする つもりです。", jaKanji: "大学院に進学するつもりです。", en: "I intend to advance to graduate school.", de: "Ich habe vor, ins Graduiertenkolleg zu gehen.", zh: "打算读研究生院。" } },
          { id: "ts5", translations: { ja: "しゅうしょくする つもりは ありません。", jaKanji: "就職するつもりはありません。", en: "I don't intend to find employment.", de: "Ich habe nicht vor, einen Job zu suchen.", zh: "没有打算就业。" } },
          { id: "ts6", translations: { ja: "げんごを けんきゅうする つもりです。", jaKanji: "言語を研究するつもりです。", en: "I intend to research language.", de: "Ich habe vor, Sprache zu erforschen.", zh: "打算研究语言。" } },
          { id: "ts7", translations: { ja: "がいこくで はたらく つもりです。", jaKanji: "外国で働くつもりです。", en: "I intend to work abroad.", de: "Ich habe vor, im Ausland zu arbeiten.", zh: "打算在国外工作。" } },
          { id: "ts8", translations: { ja: "しごとに しゅうちゅうする つもりです。", jaKanji: "仕事に集中するつもりです。", en: "I intend to focus on work.", de: "Ich habe vor, mich auf die Arbeit zu konzentrieren.", zh: "打算专注于工作。" } },
          { id: "ts9", translations: { ja: "けいかくを かえる つもりは ないです。", jaKanji: "計画を変えるつもりはないです。", en: "I don't intend to change my plans.", de: "Ich habe nicht vor, meine Pläne zu ändern.", zh: "没有打算改变计划。" } },
          { id: "ts10", translations: { ja: "らいげつ ひっこす つもりです。", jaKanji: "来月引っ越すつもりです。", en: "I intend to move house next month.", de: "Ich habe vor, nächsten Monat umzuziehen.", zh: "打算下个月搬家。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "いっしょに いこう", en: "Let's Go Together", de: "Lass uns zusammen gehen" },
    lines: [
      { id: "sg1", translations: { ja: "けいかくを たてよう", en: "Let's make a plan", de: "Lass uns einen Plan machen" } },
      { id: "sg2", translations: { ja: "いっしょに かんがえよう", en: "Let's think about it together", de: "Lass uns zusammen nachdenken" } },
      { id: "sg3", translations: { ja: "しょうらいの ために", en: "For the future", de: "Für die Zukunft" } },
      { id: "sg4", translations: { ja: "いっぽずつ すすもう", en: "Let's move forward step by step", de: "Lass uns Schritt für Schritt vorangehen" } }
    ]
  }
};
