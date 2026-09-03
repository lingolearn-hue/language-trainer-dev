import type { TopicLesson } from "../topicTypes";

// A2 — row 12 of docs/a2-master-lesson-table-v01.md. Grammar: relative
// clauses (plain-form verb/adjective directly modifying a following
// noun). Pronunciation 1/2 (ん+K/G, ん+M/B/P) kept exactly as assigned,
// split into 4 genuine phonetic sub-groups (ん+K, ん+G, ん+M, ん+B/P).

export const topicRelationships: TopicLesson = {
  id: "topic-a2-10-relationships",
  lessonNumber: 10,
  level: "A2",
  topicName: {
    ja: "にんげんかんけい", jaKanji: "人間関係",
    en: "Relationships",
    de: "Beziehungen",
    zh: "人际关系"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しりあい", jaKanji: "知り合い", en: "acquaintance", de: "Bekannte(r)", zh: "熟人" } },
    { id: "v02", category: "noun", translations: { ja: "ゆうじん", jaKanji: "友人", en: "friend (formal)", de: "Freund(in) (formell)", zh: "朋友（正式）" } },
    { id: "v03", category: "noun", translations: { ja: "しんゆう", jaKanji: "親友", en: "best friend", de: "bester Freund", zh: "挚友" } },
    { id: "v04", category: "noun", translations: { ja: "どうりょう", jaKanji: "同僚", en: "colleague", de: "Kollege/Kollegin", zh: "同事" } },
    { id: "v05", category: "noun", translations: { ja: "クラスメート", en: "classmate", de: "Klassenkamerad(in)", zh: "同学" } },
    { id: "v06", category: "noun", translations: { ja: "きんじょのひと", jaKanji: "近所の人", en: "neighbor", de: "Nachbar(in)", zh: "邻居" } },
    { id: "v07", category: "noun", translations: { ja: "こいびと", jaKanji: "恋人", en: "romantic partner", de: "Partner(in)", zh: "恋人" } },
    { id: "v08", category: "noun", translations: { ja: "かんけい", jaKanji: "関係", en: "relationship", de: "Beziehung", zh: "关系" } },
    { id: "v09", category: "noun", translations: { ja: "せんぱい", jaKanji: "先輩", en: "senior (school/work)", de: "Senior (Schule/Arbeit)", zh: "前辈" } },
    { id: "v10", category: "noun", translations: { ja: "こうはい", jaKanji: "後輩", en: "junior (school/work)", de: "Junior (Schule/Arbeit)", zh: "后辈" } },
    { id: "v11", category: "noun", translations: { ja: "しんせき", jaKanji: "親戚", en: "relative", de: "Verwandte(r)", zh: "亲戚" } },
    { id: "v12", category: "noun", translations: { ja: "なかま", jaKanji: "仲間", en: "companion", de: "Gefährte, Kamerad", zh: "伙伴" } },
    { id: "v13", category: "verb", translations: { ja: "しりあう", jaKanji: "知り合う", en: "to get acquainted", de: "sich kennenlernen", zh: "相识" } },
    { id: "v14", category: "verb", translations: { ja: "しょうかいする", jaKanji: "紹介する", en: "to introduce", de: "vorstellen", zh: "介绍" } },
    { id: "v15", category: "verb", translations: { ja: "であう", jaKanji: "出会う", en: "to meet by chance", de: "zufällig treffen", zh: "偶遇" } },
    { id: "v16", category: "verb", translations: { ja: "なかよくなる", jaKanji: "仲良くなる", en: "to become close", de: "sich anfreunden", zh: "变得亲近" } },
    { id: "v17", category: "verb", translations: { ja: "しんらいする", jaKanji: "信頼する", en: "to trust", de: "vertrauen", zh: "信任" } },
    { id: "v18", category: "verb", translations: { ja: "れんらくする", jaKanji: "連絡する", en: "to contact", de: "kontaktieren", zh: "联系" } },
    { id: "v19", category: "verb", translations: { ja: "たすけあう", jaKanji: "助け合う", en: "to help each other", de: "sich gegenseitig helfen", zh: "互相帮助" } },
    { id: "v20", category: "verb", translations: { ja: "はなしあう", jaKanji: "話し合う", en: "to talk together, discuss", de: "miteinander sprechen", zh: "一起商谈" } },
    { id: "v21", category: "verb", translations: { ja: "さそう", jaKanji: "誘う", en: "to invite", de: "einladen", zh: "邀请" } },
    { id: "v22", category: "verb", translations: { ja: "わかれる", jaKanji: "別れる", en: "to break up, separate", de: "sich trennen", zh: "分手" } },
    { id: "v23", category: "verb", translations: { ja: "そうだんする", jaKanji: "相談する", en: "to consult, talk over", de: "sich beraten", zh: "商量" } },
    { id: "v24", category: "verb", translations: { ja: "ささえる", jaKanji: "支える", en: "to support", de: "unterstützen", zh: "支持" } },
    { id: "v25", category: "adjective", translations: { ja: "ちかい", jaKanji: "近い", en: "close (relationship)", de: "eng (Beziehung)", zh: "亲近的" } },
    { id: "v26", category: "noun", translations: { ja: "ひさしぶり", jaKanji: "久しぶり", en: "long time no see", de: "lange nicht gesehen", zh: "好久不见" } },
    { id: "v27", category: "adjective", translations: { ja: "なかがいい", jaKanji: "仲がいい", en: "to get along well", de: "gut miteinander auskommen", zh: "关系好" } },
    { id: "v28", category: "verb", translations: { ja: "きがあう", jaKanji: "気が合う", en: "to click, be compatible", de: "gut harmonieren", zh: "投缘" } },
    { id: "v29", category: "adjective", translations: { ja: "たよりになる", jaKanji: "頼りになる", en: "to be reliable", de: "verlässlich sein", zh: "可靠" } },
    { id: "v30", category: "adjective", translations: { ja: "だいじな", jaKanji: "大事な", en: "important, precious", de: "wichtig, kostbar", zh: "重要的" } },
    { id: "v31", category: "adverb", translations: { ja: "おたがいに", jaKanji: "お互いに", en: "mutually", de: "gegenseitig", zh: "互相" } },
    { id: "v32", category: "adverb", translations: { ja: "とくに", jaKanji: "特に", en: "especially", de: "besonders", zh: "特别" } }
  ],
  dialogueA: {
    title: { ja: "しっている ひとに ついて はなす", jaKanji: "知っている人について話す", en: "Describing Someone You Know", de: "Über jemanden sprechen, den man kennt", zh: "说说认识的人" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きのう あった ひとは だれですか？", jaKanji: "昨日会った人は誰ですか？", en: "Who's the person you met yesterday?", de: "Wer ist die Person, die Sie gestern getroffen haben?", zh: "昨天见到的那个人是谁？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "かいしゃで はたらいている どうりょうです。", jaKanji: "会社で働いている同僚です。", en: "It's a colleague who works at my company.", de: "Das ist ein Kollege, der in meiner Firma arbeitet.", zh: "是在公司工作的同事。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "なかがいい ひとですか？", jaKanji: "仲がいい人ですか？", en: "Is it someone you get along well with?", de: "Ist das jemand, mit dem Sie gut auskommen?", zh: "是关系好的人吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、しんらいできる どうりょうです。よく そうだんします。", jaKanji: "はい、信頼できる同僚です。よく相談します。", en: "Yes, it's a colleague I can trust. We talk things over often.", de: "Ja, das ist ein Kollege, dem ich vertrauen kann. Wir beraten uns oft.", zh: "是的，是可以信任的同事。经常商量事情。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どうやって しりあったんですか？", jaKanji: "どうやって知り合ったんですか？", en: "How did you two get acquainted?", de: "Wie haben Sie sich kennengelernt?", zh: "是怎么认识的？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "パーティーで であって、それから なかよくなりました。", jaKanji: "パーティーで出会って、それから仲良くなりました。", en: "We met by chance at a party, and became close after that.", de: "Wir haben uns zufällig auf einer Party getroffen und sind danach enger geworden.", zh: "在派对上偶遇之后就变得亲近了。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しんゆうと よべる ひとは いますか？", jaKanji: "親友と呼べる人はいますか？", en: "Is there someone you'd call a best friend?", de: "Gibt es jemanden, den Sie als besten Freund bezeichnen würden?", zh: "有能称之为挚友的人吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "がっこうで しりあった ともだちが しんゆうです。", jaKanji: "学校で知り合った友達が親友です。", en: "A friend I got acquainted with at school is my best friend.", de: "Ein Freund, den ich in der Schule kennengelernt habe, ist mein bester Freund.", zh: "在学校认识的朋友是我的挚友。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きが あう ひとですね。", jaKanji: "気が合う人ですね。", en: "You two must click well.", de: "Sie müssen gut miteinander harmonieren.", zh: "很投缘呢。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、こまった とき いつも ささえて くれます。", jaKanji: "はい、困った時いつも支えてくれます。", en: "Yes, whenever I'm in trouble, they always support me.", de: "Ja, wenn ich Schwierigkeiten habe, unterstützt er mich immer.", zh: "是的，遇到困难时总是支持我。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きんじょの ひととは なかよく していますか？", jaKanji: "近所の人とは仲良くしていますか？", en: "Do you get along well with your neighbors?", de: "Kommen Sie gut mit Ihren Nachbarn aus?", zh: "和邻居相处得好吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、たすけあって いる かんけいです。", jaKanji: "はい、助け合っている関係です。", en: "Yes, we have a relationship where we help each other.", de: "Ja, wir haben eine Beziehung, in der wir uns gegenseitig helfen.", zh: "是的，是互相帮助的关系。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "だいじな ひとが おおいですね。", jaKanji: "大事な人が多いですね。", en: "You have a lot of important people, don't you.", de: "Sie haben viele wichtige Menschen, oder?", zh: "重要的人挺多的呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、みんな たよりに なる ひとたちです。", jaKanji: "はい、みんな頼りになる人たちです。", en: "Yes, they're all people I can rely on.", de: "Ja, das sind alles Menschen, auf die ich mich verlassen kann.", zh: "是的，都是可以依靠的人。" } }
    ]
  },
  dialogueB: {
    title: { ja: "せつめいから ひとを あてる", jaKanji: "説明から人を当てる", en: "Identifying People from Descriptions", de: "Personen anhand von Beschreibungen erkennen", zh: "根据描述辨认人物" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あそこに いる ひとは だれですか？", jaKanji: "あそこにいる人は誰ですか？", en: "Who's the person standing over there?", de: "Wer ist die Person, die dort steht?", zh: "站在那边的人是谁？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "あかい ふくを きて いる ひとですか？あれは わたしの せんぱいです。", jaKanji: "赤い服を着ている人ですか？あれは私の先輩です。", en: "The one wearing red clothes? That's my senior.", de: "Die Person, die rote Kleidung trägt? Das ist mein Senior.", zh: "穿红色衣服的那个人吗？那是我的前辈。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "まえに はなした ことが ある ひとですか？", jaKanji: "前に話したことがある人ですか？", en: "Is it someone you've talked to before?", de: "Ist das jemand, mit dem Sie schon einmal gesprochen haben?", zh: "是之前说过话的人吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、だいがくで しりあった せんぱいです。", jaKanji: "はい、大学で知り合った先輩です。", en: "Yes, it's a senior I got acquainted with at university.", de: "Ja, das ist ein Senior, den ich an der Universität kennengelernt habe.", zh: "是的，是在大学认识的前辈。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "となりに いる ひとは こうはいですか？", jaKanji: "隣にいる人は後輩ですか？", en: "Is the person next to them a junior?", de: "Ist die Person daneben ein Junior?", zh: "旁边的人是后辈吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、あれは よく しょうかいして もらう しんせきです。", jaKanji: "いいえ、あれはよく紹介してもらう親戚です。", en: "No, that's a relative who often introduces people to me.", de: "Nein, das ist ein Verwandter, der mir oft Leute vorstellt.", zh: "不，那是经常给我介绍人的亲戚。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "みんなを しょうたいした パーティーですね。", jaKanji: "みんなを招待したパーティーですね。", en: "This is a party where everyone was invited, isn't it.", de: "Das ist eine Party, zu der alle eingeladen wurden, oder?", zh: "这是邀请了大家的派对吧。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、さそった ひとは みんな きて くれました。", jaKanji: "はい、誘った人はみんな来てくれました。", en: "Yes, everyone I invited came.", de: "Ja, alle, die ich eingeladen habe, sind gekommen.", zh: "是的，邀请的人都来了。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あの わらって いる ひとは どんな かんけいですか？", jaKanji: "あの笑っている人はどんな関係ですか？", en: "What's your relationship with that laughing person?", de: "Was für eine Beziehung haben Sie zu der lachenden Person?", zh: "那个笑着的人是什么关系？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "むかしから しっている なかまです。きが あう ひとです。", jaKanji: "昔から知っている仲間です。気が合う人です。", en: "A companion I've known for a long time. Someone I click with.", de: "Ein Gefährte, den ich schon lange kenne. Jemand, mit dem ich gut harmoniere.", zh: "很早就认识的伙伴。是投缘的人。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "みんな しんらいできる ひとたちですね。", jaKanji: "みんな信頼できる人たちですね。", en: "They're all people you can trust, aren't they.", de: "Das sind alles Menschen, denen Sie vertrauen können, oder?", zh: "都是可以信任的人呢。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、なかよく なった じゅんばんに ならんで います。", jaKanji: "はい、仲良くなった順番に並んでいます。", en: "Yes, they're lined up in the order I became close with them.", de: "Ja, sie stehen in der Reihenfolge, in der ich ihnen nähergekommen bin.", zh: "是的，按照关系变亲近的顺序排的。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "こいびとは この なかに いますか？", jaKanji: "恋人はこの中にいますか？", en: "Is your romantic partner among them?", de: "Ist Ihr Partner unter ihnen?", zh: "恋人也在里面吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、こんかいは しょうたいして いません。", jaKanji: "いいえ、今回は招待していません。", en: "No, I didn't invite them this time.", de: "Nein, ich habe sie dieses Mal nicht eingeladen.", zh: "不，这次没有邀请。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "れんたいしゅうしょく：ひとや ものを せつめいする", jaKanji: "連体修飾：人や物を説明する", en: "Relative Clauses: Describing People and Things", de: "Relativsätze: Personen und Dinge beschreiben", zh: "定语从句：描述人或事物" },
      explanation: {
        ja: "にほんごの れんたいしゅうしょくは、どうしや けいようしの ふつうけい（じしょけい／た-けい／ない-けい など）を そのまま めいしの まえに おいて つくります。えいごのような かんけいだいめいし（who/which）は ひつようありません。「きのう あった ひと」＝「the person [I] met yesterday」のように、せつめいの ぶぶんが そのまま めいしを しゅうしょくします。", jaKanji: "日本語の連体修飾は、動詞や形容詞の普通形（辞書形／た形／ない形など）をそのまま名詞の前に置いて作ります。英語のような関係代名詞（who/which）は必要ありません。「昨日会った人」＝「the person [I] met yesterday」のように、説明の部分がそのまま名詞を修飾します。",
        en: "Japanese relative clauses are formed by placing a verb or adjective's plain form (dictionary, past, or negative, etc.) directly before the noun it modifies. No relative pronoun (who/which) is needed, unlike English. \"きのう あった ひと\" = \"the person [I] met yesterday\" — the descriptive clause directly modifies the noun that follows.",
        de: "Japanische Relativsätze werden gebildet, indem man die Plain-Form eines Verbs oder Adjektivs (Wörterbuchform, Vergangenheit, Verneinung usw.) direkt vor das Nomen stellt, das es modifiziert. Anders als im Deutschen/Englischen ist kein Relativpronomen nötig. \"きのう あった ひと\" = \"die Person, die [ich] gestern getroffen habe\" — der beschreibende Teil modifiziert direkt das folgende Nomen.",
        zh: "日语的定语从句是把动词或形容词的简体形（辞书形、过去式、否定形等）直接放在所修饰的名词前面构成的。不需要像英语那样使用关系代词（who/which）。「きのう あった ひと」＝「昨天见到的人」——说明部分直接修饰后面的名词。"
      },
      chunks: [
        { id: "g1", translations: { ja: "きのう あった ひとは どうりょうです。", jaKanji: "昨日会った人は同僚です。", en: "The person I met yesterday is a colleague.", de: "Die Person, die ich gestern getroffen habe, ist ein Kollege.", zh: "昨天见到的人是同事。" } },
        { id: "g2", translations: { ja: "これは わたしが かった プレゼントです。", jaKanji: "これは私が買ったプレゼントです。", en: "This is the present I bought.", de: "Das ist das Geschenk, das ich gekauft habe.", zh: "这是我买的礼物。" } },
        { id: "g3", translations: { ja: "あそこに いる ひとは せんぱいです。", jaKanji: "あそこにいる人は先輩です。", en: "The person over there is my senior.", de: "Die Person dort drüben ist mein Senior.", zh: "那边的人是我的前辈。" } },
        { id: "g4", translations: { ja: "かれが はなした ことは ほんとうです。", jaKanji: "彼が話したことは本当です。", en: "What he said is true.", de: "Was er gesagt hat, ist wahr.", zh: "他说的话是真的。" } },
        { id: "g5", translations: { ja: "しんらいできる ともだちが います。", jaKanji: "信頼できる友達がいます。", en: "I have a friend I can trust.", de: "Ich habe einen Freund, dem ich vertrauen kann.", zh: "我有一个可以信任的朋友。" } },
        { id: "g6", translations: { ja: "むかし すんでいた まちに いきました。", jaKanji: "昔住んでいた町に行きました。", en: "I went to the town where I used to live.", de: "Ich bin in die Stadt gefahren, in der ich früher gelebt habe.", zh: "我去了以前住过的城镇。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        nk: { ja: "ん+K", en: "ん+K", de: "ん+K", zh: "ん+K" },
        ng: { ja: "ん+G", en: "ん+G", de: "ん+G", zh: "ん+G" },
        nm: { ja: "ん+M", en: "ん+M", de: "ん+M", zh: "ん+M" },
        nbp: { ja: "ん+B/P", en: "ん+B/P", de: "ん+B/P", zh: "ん+B/P" }
      },
      items: [
        { id: "nk1", category: "nk", translations: { ja: "けんか", en: "quarrel, fight", de: "Streit", zh: "争吵" } },
        { id: "nk2", category: "nk", translations: { ja: "にんき", en: "popularity", de: "Beliebtheit", zh: "人气" } },
        { id: "nk3", category: "nk", translations: { ja: "さんかく", en: "triangle", de: "Dreieck", zh: "三角形" } },
        { id: "nk4", category: "nk", translations: { ja: "てんき", en: "weather", de: "Wetter", zh: "天气" } },
        { id: "ng1", category: "ng", translations: { ja: "さんがつ", en: "March", de: "März", zh: "三月" } },
        { id: "ng2", category: "ng", translations: { ja: "れんが", en: "brick", de: "Ziegelstein", zh: "砖" } },
        { id: "ng3", category: "ng", translations: { ja: "にほんご", en: "Japanese language", de: "japanische Sprache", zh: "日语" } },
        { id: "ng4", category: "ng", translations: { ja: "まんげつ", en: "full moon", de: "Vollmond", zh: "满月" } },
        { id: "nm1", category: "nm", translations: { ja: "しんまい", en: "novice, new rice", de: "Anfänger, neuer Reis", zh: "新手" } },
        { id: "nm2", category: "nm", translations: { ja: "うんめい", en: "destiny", de: "Schicksal", zh: "命运" } },
        { id: "nm3", category: "nm", translations: { ja: "ぶんめい", en: "civilization", de: "Zivilisation", zh: "文明" } },
        { id: "nm4", category: "nm", translations: { ja: "にんむ", en: "duty, mission", de: "Aufgabe, Mission", zh: "任务" } },
        { id: "nbp1", category: "nbp", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
        { id: "nbp2", category: "nbp", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔" } },
        { id: "nbp3", category: "nbp", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
        { id: "nbp4", category: "nbp", translations: { ja: "かんぱい", en: "cheers, toast", de: "Prost", zh: "干杯" } }
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
          nk: { ja: "ん+K", en: "ん+K", de: "ん+K", zh: "ん+K" },
          ng: { ja: "ん+G", en: "ん+G", de: "ん+G", zh: "ん+G" },
          nm: { ja: "ん+M", en: "ん+M", de: "ん+M", zh: "ん+M" },
          nbp: { ja: "ん+B/P", en: "ん+B/P", de: "ん+B/P", zh: "ん+B/P" }
        },
        items: [
          { id: "nk5", category: "nk", translations: { ja: "えんき", en: "postponement", de: "Verschiebung", zh: "延期" } },
          { id: "nk6", category: "nk", translations: { ja: "かんこう", en: "tourism", de: "Tourismus", zh: "观光" } },
          { id: "nk7", category: "nk", translations: { ja: "けんこう", en: "health", de: "Gesundheit", zh: "健康" } },
          { id: "nk8", category: "nk", translations: { ja: "さんこう", en: "reference", de: "Referenz", zh: "参考" } },
          { id: "nk9", category: "nk", translations: { ja: "しんこん", en: "newlywed", de: "frisch verheiratet", zh: "新婚" } },
          { id: "nk10", category: "nk", translations: { ja: "せんこう", en: "major, specialization", de: "Studienfach", zh: "专业" } },
          { id: "nk11", category: "nk", translations: { ja: "ぶんか", en: "culture", de: "Kultur", zh: "文化" } },
          { id: "nk12", category: "nk", translations: { ja: "でんき", en: "electricity", de: "Elektrizität", zh: "电" } },
          { id: "nk13", category: "nk", translations: { ja: "はんこ", en: "seal, stamp", de: "Stempel", zh: "印章" } },
          { id: "nk14", category: "nk", translations: { ja: "ほんき", en: "seriousness", de: "Ernsthaftigkeit", zh: "认真" } },
          { id: "nk15", category: "nk", translations: { ja: "かんきゃく", en: "spectator", de: "Zuschauer", zh: "观众" } },
          { id: "nk16", category: "nk", translations: { ja: "れんきゅう", en: "consecutive holidays", de: "aufeinanderfolgende Feiertage", zh: "连休" } },
          { id: "nk17", category: "nk", translations: { ja: "げんきん", en: "cash", de: "Bargeld", zh: "现金" } },
          { id: "nk18", category: "nk", translations: { ja: "かんこく", en: "Korea", de: "Korea", zh: "韩国" } },

          { id: "ng5", category: "ng", translations: { ja: "かんげい", en: "welcome", de: "Willkommen", zh: "欢迎" } },
          { id: "ng6", category: "ng", translations: { ja: "けんがく", en: "field trip, observation", de: "Besichtigung", zh: "参观" } },
          { id: "ng7", category: "ng", translations: { ja: "さんぎょう", en: "industry", de: "Industrie", zh: "产业" } },
          { id: "ng8", category: "ng", translations: { ja: "にんぎょう", en: "doll", de: "Puppe", zh: "人偶" } },
          { id: "ng9", category: "ng", translations: { ja: "てんごく", en: "heaven", de: "Himmel", zh: "天堂" } },
          { id: "ng10", category: "ng", translations: { ja: "おんがく", en: "music", de: "Musik", zh: "音乐" } },
          { id: "ng11", category: "ng", translations: { ja: "げんご", en: "language", de: "Sprache", zh: "语言" } },
          { id: "ng12", category: "ng", translations: { ja: "そんがい", en: "damage, loss", de: "Schaden", zh: "损失" } },
          { id: "ng13", category: "ng", translations: { ja: "でんごん", en: "message", de: "Nachricht", zh: "留言" } },
          { id: "ng14", category: "ng", translations: { ja: "かんげき", en: "deep emotion", de: "tiefe Rührung", zh: "感动" } },
          { id: "ng15", category: "ng", translations: { ja: "れんごう", en: "union, alliance", de: "Bündnis", zh: "联合" } },
          { id: "ng16", category: "ng", translations: { ja: "しんごう", en: "traffic signal", de: "Ampel", zh: "信号灯" } },
          { id: "ng17", category: "ng", translations: { ja: "かんごし", en: "nurse", de: "Krankenschwester", zh: "护士" } },
          { id: "ng18", category: "ng", translations: { ja: "どんぐり", en: "acorn", de: "Eichel", zh: "橡子" } },

          { id: "nm5", category: "nm", translations: { ja: "かんむり", en: "crown", de: "Krone", zh: "王冠" } },
          { id: "nm6", category: "nm", translations: { ja: "しんみつ", en: "intimate", de: "vertraut", zh: "亲密" } },
          { id: "nm7", category: "nm", translations: { ja: "にんめい", en: "appointment", de: "Ernennung", zh: "任命" } },
          { id: "nm8", category: "nm", translations: { ja: "あんまり", en: "not very", de: "nicht sehr", zh: "不太" } },
          { id: "nm9", category: "nm", translations: { ja: "けんめい", en: "diligently, desperately", de: "eifrig", zh: "拼命" } },
          { id: "nm10", category: "nm", translations: { ja: "せんめんじょ", en: "washroom", de: "Waschraum", zh: "洗漱间" } },
          { id: "nm11", category: "nm", translations: { ja: "ぶんみゃく", en: "context", de: "Kontext", zh: "语境" } },
          { id: "nm12", category: "nm", translations: { ja: "まんまえ", en: "right in front", de: "genau davor", zh: "正前方" } },
          { id: "nm13", category: "nm", translations: { ja: "れんめい", en: "league, federation", de: "Liga, Bund", zh: "联盟" } },
          { id: "nm14", category: "nm", translations: { ja: "さんみゃく", en: "mountain range", de: "Gebirgskette", zh: "山脉" } },
          { id: "nm15", category: "nm", translations: { ja: "てんめつ", en: "blinking", de: "Blinken", zh: "闪烁" } },
          { id: "nm16", category: "nm", translations: { ja: "だんめん", en: "cross-section", de: "Querschnitt", zh: "截面" } },
          { id: "nm17", category: "nm", translations: { ja: "あんまん", en: "steamed bun with bean paste", de: "gedämpfte Bohnenpastete-Brötchen", zh: "豆沙包" } },
          { id: "nm18", category: "nm", translations: { ja: "ほんみょう", en: "real name", de: "richtiger Name", zh: "真名" } },

          { id: "nbp5", category: "nbp", translations: { ja: "しんぶん", en: "newspaper", de: "Zeitung", zh: "报纸" } },
          { id: "nbp6", category: "nbp", translations: { ja: "けんぶつ", en: "sightseeing", de: "Besichtigung", zh: "游览" } },
          { id: "nbp7", category: "nbp", translations: { ja: "さんぱい", en: "worship visit", de: "Schreinbesuch", zh: "参拜" } },
          { id: "nbp8", category: "nbp", translations: { ja: "ぶんぼうぐ", en: "stationery", de: "Schreibwaren", zh: "文具" } },
          { id: "nbp9", category: "nbp", translations: { ja: "れんぽう", en: "federation", de: "Föderation", zh: "联邦" } },
          { id: "nbp10", category: "nbp", translations: { ja: "かんぺき", en: "perfect", de: "perfekt", zh: "完美" } },
          { id: "nbp11", category: "nbp", translations: { ja: "しんぱん", en: "referee, judgment", de: "Schiedsrichter", zh: "裁判" } },
          { id: "nbp12", category: "nbp", translations: { ja: "こんばん", en: "tonight", de: "heute Abend", zh: "今晚" } },
          { id: "nbp13", category: "nbp", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
          { id: "nbp14", category: "nbp", translations: { ja: "さんびゃく", en: "three hundred", de: "dreihundert", zh: "三百" } },
          { id: "nbp15", category: "nbp", translations: { ja: "しんぴ", en: "mystery", de: "Geheimnis", zh: "神秘" } },
          { id: "nbp16", category: "nbp", translations: { ja: "こんぶ", en: "kelp", de: "Seetang", zh: "海带" } },
          { id: "nbp17", category: "nbp", translations: { ja: "てんぷら", en: "tempura", de: "Tempura", zh: "天妇罗" } },
          { id: "nbp18", category: "nbp", translations: { ja: "はんぶん", en: "half", de: "Hälfte", zh: "一半" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-relative",
        title: { ja: "れんしゅう：れんたいしゅうしょく", en: "Practice: Relative Clauses", de: "Übung: Relativsätze", zh: "练习：定语从句" },
        spokenIntro: {
          ja: "つぎは、れんたいしゅうしょくを つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using relative clauses.",
          de: "Als Nächstes üben wir Beispielsätze mit Relativsätzen.",
          zh: "接下来，让我们练习使用定语从句的例句。"
        },
        lines: [
          { id: "rc1", translations: { ja: "きのう あった ひとは どうりょうです。", jaKanji: "昨日会った人は同僚です。", en: "The person I met yesterday is a colleague.", de: "Die Person, die ich gestern getroffen habe, ist ein Kollege.", zh: "昨天见到的人是同事。" } },
          { id: "rc2", translations: { ja: "これは わたしが かった プレゼントです。", jaKanji: "これは私が買ったプレゼントです。", en: "This is the present I bought.", de: "Das ist das Geschenk, das ich gekauft habe.", zh: "这是我买的礼物。" } },
          { id: "rc3", translations: { ja: "あそこに いる ひとは せんぱいです。", jaKanji: "あそこにいる人は先輩です。", en: "The person over there is my senior.", de: "Die Person dort drüben ist mein Senior.", zh: "那边的人是我的前辈。" } },
          { id: "rc4", translations: { ja: "かれが はなした ことは ほんとうです。", jaKanji: "彼が話したことは本当です。", en: "What he said is true.", de: "Was er gesagt hat, ist wahr.", zh: "他说的话是真的。" } },
          { id: "rc5", translations: { ja: "しんらいできる ともだちが います。", jaKanji: "信頼できる友達がいます。", en: "I have a friend I can trust.", de: "Ich habe einen Freund, dem ich vertrauen kann.", zh: "我有一个可以信任的朋友。" } },
          { id: "rc6", translations: { ja: "むかし すんでいた まちに いきました。", jaKanji: "昔住んでいた町に行きました。", en: "I went to the town where I used to live.", de: "Ich bin in die Stadt gefahren, in der ich früher gelebt habe.", zh: "我去了以前住过的城镇。" } },
          { id: "rc7", translations: { ja: "パーティーで しょうかいして もらった ひとです。", jaKanji: "パーティーで紹介してもらった人です。", en: "It's someone I was introduced to at a party.", de: "Das ist jemand, dem ich auf einer Party vorgestellt wurde.", zh: "是在派对上被介绍认识的人。" } },
          { id: "rc8", translations: { ja: "がっこうで であった なかまを たいせつに します。", jaKanji: "学校で出会った仲間を大切にします。", en: "I treasure the companions I met at school.", de: "Ich schätze die Gefährten, die ich in der Schule kennengelernt habe.", zh: "我珍惜在学校遇到的伙伴。" } },
          { id: "rc9", translations: { ja: "そうだんに のって くれた せんぱいに かんしゃして います。", jaKanji: "相談に乗ってくれた先輩に感謝しています。", en: "I'm grateful to the senior who listened to my concerns.", de: "Ich bin dem Senior dankbar, der mir zugehört hat.", zh: "我很感激那位听我倾诉的前辈。" } },
          { id: "rc10", translations: { ja: "ながく はなして いない しんせきに れんらくしました。", jaKanji: "長く話していない親戚に連絡しました。", en: "I contacted a relative I hadn't spoken to in a long time.", de: "Ich habe einen Verwandten kontaktiert, mit dem ich lange nicht gesprochen hatte.", zh: "联系了很久没说过话的亲戚。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "ともだちは たからもの", en: "Friends Are Treasures", de: "Freunde sind Schätze" },
    lines: [
      { id: "sg1", translations: { ja: "であった ひとと なかよくなる", en: "Becoming close with the people I meet", de: "Ich werde eng mit den Menschen, die ich treffe" } },
      { id: "sg2", translations: { ja: "しんらいできる なかまが できる", en: "Making companions I can trust", de: "Ich finde Gefährten, denen ich vertrauen kann" } },
      { id: "sg3", translations: { ja: "こまったときは たすけあおう", en: "When we're in trouble, let's help each other", de: "Wenn wir Schwierigkeiten haben, lass uns einander helfen" } },
      { id: "sg4", translations: { ja: "ともだちは たからもの", en: "Friends are treasures", de: "Freunde sind Schätze" } }
    ]
  }
};
