import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 16 (Traffic). Japanese-only lesson
// for now (grammar/pronunciation), same pattern as topics 1-13 before
// their German pass — vocab/dialogue/song already ja/en/de/zh.

export const topicTraffic: TopicLesson = {
  id: "topic-16-traffic",
  lessonNumber: 16,
  topicName: {
    ja: "こうつう",
    en: "Traffic",
    de: "Verkehr",
    zh: "交通"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "でんしゃ", en: "train", de: "Zug", zh: "电车" } },
    { id: "v02", category: "noun", translations: { ja: "バス", en: "bus", de: "Bus", zh: "公交车" } },
    { id: "v03", category: "noun", translations: { ja: "タクシー", en: "taxi", de: "Taxi", zh: "出租车" } },
    { id: "v04", category: "noun", translations: { ja: "ちかてつ", en: "subway", de: "U-Bahn", zh: "地铁" } },
    { id: "v05", category: "noun", translations: { ja: "じてんしゃ", en: "bicycle", de: "Fahrrad", zh: "自行车" } },
    { id: "v06", category: "noun", translations: { ja: "くるま", en: "car", de: "Auto", zh: "汽车" } },
    { id: "v07", category: "noun", translations: { ja: "バイク", en: "motorbike", de: "Motorrad", zh: "摩托车" } },
    { id: "v08", category: "noun", translations: { ja: "しんごう", en: "traffic light", de: "Ampel", zh: "信号灯" } },
    { id: "v09", category: "noun", translations: { ja: "じゅうたい", en: "traffic jam", de: "Stau", zh: "堵车" } },
    { id: "v10", category: "noun", translations: { ja: "じこ", en: "accident", de: "Unfall", zh: "事故" } },
    { id: "v11", category: "verb", translations: { ja: "うんてんする", en: "to drive", de: "fahren, steuern", zh: "驾驶" } },
    { id: "v12", category: "verb", translations: { ja: "のる", en: "to ride, get on", de: "einsteigen, fahren mit", zh: "乘坐" } },
    { id: "v13", category: "verb", translations: { ja: "おりる", en: "to get off", de: "aussteigen", zh: "下车" } },
    { id: "v14", category: "verb", translations: { ja: "のりかえる", en: "to transfer, change trains", de: "umsteigen", zh: "换乘" } },
    { id: "v15", category: "verb", translations: { ja: "おくれる", en: "to be late", de: "sich verspäten", zh: "迟到" } },
    { id: "v16", category: "verb", translations: { ja: "いそぐ", en: "to hurry", de: "sich beeilen", zh: "赶紧" } },
    { id: "v17", category: "verb", translations: { ja: "こむ", en: "to be crowded", de: "überfüllt sein", zh: "拥挤" } },
    { id: "v18", category: "verb", translations: { ja: "すく", en: "to be empty, uncrowded", de: "leer sein, wenig besucht sein", zh: "空旷，人少" } },
    { id: "v19", category: "noun", translations: { ja: "ラッシュアワー", en: "rush hour", de: "Stoßzeit", zh: "高峰时段" } },
    { id: "v20", category: "noun", translations: { ja: "つうきん", en: "commute, commuting", de: "Pendeln, Arbeitsweg", zh: "通勤" } },
    { id: "v21", category: "noun", translations: { ja: "うんてんしゅ", en: "driver", de: "Fahrer/in", zh: "司机" } },
    { id: "v22", category: "noun", translations: { ja: "うんちん", en: "fare", de: "Fahrpreis", zh: "车费" } },
    { id: "v23", category: "noun", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "车票" } },
    { id: "v24", category: "noun", translations: { ja: "かいさつぐち", en: "ticket gate", de: "Bahnsteigsperre", zh: "检票口" } },
    { id: "v25", category: "noun", translations: { ja: "ホーム", en: "platform", de: "Bahnsteig", zh: "站台" } },
    { id: "v26", category: "noun", translations: { ja: "しはつ", en: "first train", de: "erster Zug", zh: "首班车" } },
    { id: "v27", category: "noun", translations: { ja: "しゅうでん", en: "last train", de: "letzter Zug", zh: "末班车" } },
    { id: "v28", category: "adjective", translations: { ja: "あんぜんな", en: "safe", de: "sicher", zh: "安全的" } },
    { id: "v29", category: "adjective", translations: { ja: "べんりな", en: "convenient", de: "praktisch", zh: "方便的" } },
    { id: "v30", category: "noun", translations: { ja: "こうつう", en: "traffic (general term)", de: "Verkehr (allgemein)", zh: "交通（总称）" } }
  ],
  dialogueA: {
    title: { ja: "タクシーで みちを つたえる", en: "Giving a Taxi Driver Directions", de: "Dem Taxifahrer den Weg erklären", zh: "给出租车司机指路" },
    lines: [
      { id: "d1", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "どちらまで いきますか？", en: "Where would you like to go?", de: "Wohin möchten Sie fahren?", zh: "您要去哪里？" } },
      { id: "d2", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "えきまで おねがいします。", en: "To the station, please.", de: "Zum Bahnhof, bitte.", zh: "请到车站。" } },
      { id: "d3", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "わかりました。しんごうを みぎに まがりますね。", en: "Understood. I'll turn right at the light.", de: "Verstanden. Ich biege an der Ampel rechts ab.", zh: "明白了。我在信号灯右转。" } },
      { id: "d4", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "いま じゅうたいしてますか？", en: "Is there a traffic jam right now?", de: "Gibt es gerade einen Stau?", zh: "现在堵车吗？" } },
      { id: "d5", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "すこし こんでいますね。", en: "It's a little crowded.", de: "Es ist ein bisschen voll.", zh: "有点堵。" } },
      { id: "d6", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "しんぱいです。でんしゃに おくれそうです。", en: "I'm worried. It looks like I'll be late for the train.", de: "Ich mache mir Sorgen. Ich verpasse wohl den Zug.", zh: "我有点担心。看来要赶不上电车了。" } },
      { id: "d7", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "だいじょうぶですよ。ちかみちを つかいます。", en: "It'll be fine. I'll take a shortcut.", de: "Kein Problem. Ich nehme eine Abkürzung.", zh: "没问题。我走近路。" } },
      { id: "d8", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "ありがとうございます。いそいで ください。", en: "Thank you. Please hurry.", de: "Danke. Bitte beeilen Sie sich.", zh: "谢谢。请快一点。" } },
      { id: "d9", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "もうすぐ えきに つきますよ。", en: "We'll arrive at the station soon.", de: "Wir sind gleich beim Bahnhof.", zh: "马上就到车站了。" } },
      { id: "d10", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "しゅうでんに まにあいそうですか？", en: "Do you think I'll make the last train?", de: "Denken Sie, ich schaffe den letzten Zug?", zh: "能赶上末班车吗？" } },
      { id: "d11", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "はい、じかんは まだ あります。", en: "Yes, there's still time.", de: "Ja, es ist noch Zeit.", zh: "还有时间。" } },
      { id: "d12", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "ああ、えきが みえてきました。", en: "Oh, I can see the station now.", de: "Oh, ich sehe schon den Bahnhof.", zh: "啊，能看到车站了。" } },
      { id: "d13", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "うんちんは せんごひゃくえんです。", en: "The fare is fifteen hundred yen.", de: "Der Fahrpreis beträgt fünfzehnhundert Yen.", zh: "车费是一千五百日元。" } },
      { id: "d14", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "はい、どうぞ。たすかりました！", en: "Here you go. You really helped me out!", de: "Bitte sehr. Sie haben mir sehr geholfen!", zh: "给您。真是帮了我大忙！" } }
    ]
  },
  dialogueB: {
    title: { ja: "まいにちの つうきん", en: "My Daily Commute", de: "Mein täglicher Arbeitsweg", zh: "我的日常通勤" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "まいあさ どうやって かいしゃに いくの？", en: "How do you get to work every morning?", de: "Wie kommst du jeden Morgen zur Arbeit?", zh: "你每天早上怎么去公司？" } },
      { id: "e2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でんしゃで いくよ。それから バスに のりかえる。", en: "I go by train. Then I transfer to a bus.", de: "Ich fahre mit dem Zug. Dann steige ich auf den Bus um.", zh: "我坐电车去。然后换乘公交车。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんしゃは いつも こんでいる？", en: "Is the train always crowded?", de: "Ist der Zug immer voll?", zh: "电车总是很挤吗？" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ラッシュアワーは すごく こむよ。", en: "It's really crowded during rush hour.", de: "In der Stoßzeit ist er wirklich voll.", zh: "高峰时段特别挤。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしは じてんしゃで つうきんしてる。", en: "I commute by bicycle.", de: "Ich fahre mit dem Fahrrad zur Arbeit.", zh: "我骑自行车通勤。" } },
      { id: "e6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいね！じてんしゃは あんぜん？", en: "Nice! Is cycling safe?", de: "Schön! Ist Fahrradfahren sicher?", zh: "真好！骑自行车安全吗？" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "まあまあ あんぜんだけど、あめの ひは たいへん。", en: "It's fairly safe, but rainy days are tough.", de: "Es ist einigermaßen sicher, aber Regentage sind hart.", zh: "还算安全，不过下雨天挺难的。" } },
      { id: "e8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そういう ひは バスに のる？", en: "Do you take the bus on days like that?", de: "Nimmst du an solchen Tagen den Bus?", zh: "那种天气你会坐公交车吗？" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "うん、バスのほうが べんりだから。", en: "Yeah, because the bus is more convenient.", de: "Ja, weil der Bus praktischer ist.", zh: "嗯，因为公交车更方便。" } },
      { id: "e10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つうきんに どのくらい じかんが かかる？", en: "How long does your commute take?", de: "Wie lange dauert dein Arbeitsweg?", zh: "你的通勤要花多长时间？" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だいたい さんじゅっぷん くらいだよ。", en: "About thirty minutes, I'd say.", de: "Ungefähr dreißig Minuten.", zh: "大概三十分钟左右。" } },
      { id: "e12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ぼくは いちじかん くらい かかるよ。", en: "Mine takes about an hour.", de: "Meiner dauert ungefähr eine Stunde.", zh: "我的要花大约一个小时。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは ながいね。しんかんせんは つかわないの？", en: "That's long. Don't you use the bullet train?", de: "Das ist lang. Nutzt du nicht den Shinkansen?", zh: "那挺久的。你不坐新干线吗？" } },
      { id: "e14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つかいたいけど、うんちんが たかいんだ。", en: "I'd like to, but the fare is expensive.", de: "Ich würde gerne, aber der Fahrpreis ist teuer.", zh: "想坐，但是车费太贵了。" } }
    ]
  },
  song: {
    // Row 16 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song (also a thematic
    // fit here, given the vehicle/movement theme).
    title: { ja: "こげよ マイケル", en: "Row, Row, Row Your Boat", de: "Rudert, rudert" },
    lines: [
      { id: "sg1", translations: { ja: "こげ こげ ボートを", en: "Row, row, row your boat", de: "Rudert, rudert, rudert das Boot" } },
      { id: "sg2", translations: { ja: "しずかに かわを くだる", en: "Gently down the stream", de: "sanft den Fluss hinab" } },
      { id: "sg3", translations: { ja: "たのしく たのしく たのしく たのしく", en: "Merrily, merrily, merrily, merrily", de: "Fröhlich, fröhlich, fröhlich, fröhlich" } },
      { id: "sg4", translations: { ja: "じんせいは ゆめの よう", en: "Life is but a dream", de: "das Leben ist ein Traum" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "いどうの どうしと じょし", en: "Movement Verbs and Direction Particles", de: "Bewegungsverben und Richtungspartikel", zh: "移动动词与方向助词" },
      explanation: {
        ja: "のりものを つかう ときは「で」を つかいます：でんしゃで いきます（でんしゃ を つかって いく）。むかう ばしょには「へ」か「に」を つかいます：えきへ いきます。のる・おりる・のりかえる の あとの ばしょには「で」か「に」を つかいます：つぎの えきで おります。",
        en: "To indicate the means of transportation, use で: でんしゃで いきます (go by train). To indicate the destination, use へ or に: えきへ いきます (go to the station). For the location where you get off, get on, or transfer, use で or に: つぎの えきで おります (get off at the next station).",
        de: "Um das Verkehrsmittel anzugeben, benutzt man で: でんしゃで いきます (mit dem Zug fahren). Um das Ziel anzugeben, benutzt man へ oder に: えきへ いきます (zum Bahnhof fahren). Für den Ort, an dem man aussteigt, einsteigt oder umsteigt, benutzt man で oder に: つぎの えきで おります (an der nächsten Station aussteigen).",
        zh: "表示交通方式时用で：でんしゃで いきます（坐电车去）。表示目的地时用へ或に：えきへ いきます（去车站）。表示上车、下车、换乘的地点时用で或に：つぎの えきで おります（在下一站下车）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "でんしゃで がっこうへ いきます。", en: "I go to school by train. (で — means of transport)", de: "Ich fahre mit dem Zug zur Schule. (で — Verkehrsmittel)", zh: "我坐电车去学校。（で——交通方式）" } },
        { id: "g2", translations: { ja: "バスに のります。", en: "I get on the bus. (に — boarding a vehicle)", de: "Ich steige in den Bus. (に — Einsteigen in ein Fahrzeug)", zh: "我上公交车。（に——搭乘交通工具）" } },
        { id: "g3", translations: { ja: "つぎの えきで おります。", en: "I get off at the next station. (で — location of the action)", de: "Ich steige an der nächsten Station aus. (で — Ort der Handlung)", zh: "我在下一站下车。（で——动作发生的地点）" } },
        { id: "g4", translations: { ja: "しんじゅくで でんしゃを のりかえます。", en: "I transfer trains at Shinjuku. (で — transfer location)", de: "Ich steige in Shinjuku in einen anderen Zug um. (で — Umsteigeort)", zh: "我在新宿换乘电车。（で——换乘地点）" } },
        { id: "g5", translations: { ja: "しちじに いえを でます。", en: "I leave home at seven o'clock. (に — time marker)", de: "Ich verlasse um sieben Uhr das Haus. (に — Zeitmarkierung)", zh: "我七点出门。（に——时间标记）" } },
        { id: "g6", translations: { ja: "かいしゃに ろくじに つきます。", en: "I arrive at the office at six o'clock. (に — destination and time together)", de: "Ich komme um sechs Uhr im Büro an. (に — Ziel und Zeit zusammen)", zh: "我六点到公司。（に——目的地与时间同时使用）" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        o_length: { ja: "お — ながい と みじかい", en: "O — long vs. short", de: "O — lang vs. kurz", zh: "O——长音与短音" },
        pitch: { ja: "アクセント（ふくしゅう、あたらしい ペア）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)", zh: "声调重音（巩固，新词对）" }
      },
      items: [
        { id: "lo1", category: "o_length", translations: { ja: "しんごう", en: "traffic light — long お sound written ごう", de: "Ampel — langes お, geschrieben als ごう", zh: "信号灯——长音お，写作ごう" } },
        { id: "lo2", category: "o_length", translations: { ja: "こうつう", en: "traffic (general) — long お sound written こう", de: "Verkehr (allgemein) — langes お, geschrieben als こう", zh: "交通（总称）——长音お，写作こう" } },
        { id: "so1", category: "o_length", translations: { ja: "のる", en: "to ride, get on — short お sound", de: "einsteigen — kurzes お", zh: "乘坐——短音お" } },
        { id: "so2", category: "o_length", translations: { ja: "おりる", en: "to get off — short お sound", de: "aussteigen — kurzes お", zh: "下车——短音お" } },
        { id: "p1", category: "pitch", translations: { ja: "のる", en: "to ride (LH) — new word, single pattern", de: "einsteigen (LH) — neues Wort, einzelnes Muster", zh: "乘坐（低高）——新词，单一声调" } },
        { id: "p2", category: "pitch", translations: { ja: "はな", en: "flower (LH) / nose (HL) — classic contrast pair", de: "Blume (LH) / Nase (HL) — klassisches Kontrastpaar", zh: "花（低高）／鼻子（高低）——经典对比词对" } },
        { id: "p3", category: "pitch", translations: { ja: "かき", en: "persimmon (LH) / oyster (HL) — classic contrast pair", de: "Kaki (LH) / Auster (HL) — klassisches Kontrastpaar", zh: "柿子（低高）／牡蛎（高低）——经典对比词对" } },
        { id: "p4", category: "pitch", translations: { ja: "いそぐ", en: "to hurry (LHL) — new word, single pattern", de: "sich beeilen (LHL) — neues Wort, einzelnes Muster", zh: "赶紧（低高低）——新词，单一声调" } }
      ]
    }
  }
};
