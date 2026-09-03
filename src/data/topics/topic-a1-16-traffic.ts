import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 16 (Traffic). Japanese-only lesson
// for now (grammar/pronunciation), same pattern as topics 1-13 before
// their German pass — vocab/dialogue/song already ja/en/de/zh.

export const topicTraffic: TopicLesson = {
  id: "topic-a1-16-traffic",
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
    },
    de: {
      title: { de: "Verkehrsmittel: mit / einsteigen / aussteigen", en: "Transportation: Mit / Einsteigen / Aussteigen", ja: "こうつうしゅだん：mit／einsteigen／aussteigen", zh: "交通工具：mit／einsteigen／aussteigen" },
      explanation: {
        de: "Um das Verkehrsmittel anzugeben, benutzt man mit + Dativ: mit dem Zug, mit dem Bus. Zum Einsteigen benutzt man einsteigen in + Akkusativ (in den Bus einsteigen), zum Aussteigen aussteigen aus + Dativ (aus dem Bus aussteigen). Beim Umsteigen benutzt man umsteigen in + Akkusativ für das neue Verkehrsmittel oder einfach den Ortsnamen: in Shinjuku umsteigen.",
        en: "To indicate the means of transportation, use mit + dative: mit dem Zug, mit dem Bus. To board, use einsteigen in + accusative (get on the bus), and to get off, aussteigen aus + dative (get off the bus). When transferring, use umsteigen in + accusative for the new vehicle, or just the place name: in Shinjuku umsteigen.",
        ja: "こうつうしゅだんを しめす ときは mit + よかくを つかいます：mit dem Zug、mit dem Bus。のる ときは einsteigen in + たいかく（バスに のる）、おりる ときは aussteigen aus + よかく（バスを おりる）。のりかえる ときは あたらしい のりものに umsteigen in + たいかく、または ばしょめいだけ：in Shinjuku umsteigen。",
        zh: "表示交通方式时用mit+与格：mit dem Zug、mit dem Bus。上车用einsteigen in+宾格（上公交车），下车用aussteigen aus+与格（下公交车）。换乘时对新交通工具用umsteigen in+宾格，或者直接用地名：in Shinjuku umsteigen。"
      },
      chunks: [
        { id: "g1", translations: { de: "Ich fahre mit dem Zug zur Schule.", en: "I go to school by train. (mit + dative — means of transport)", ja: "でんしゃで がっこうへ いきます。（mit + よかく——こうつうしゅだん）", zh: "我坐电车去学校。（mit + 与格——交通方式）" } },
        { id: "g2", translations: { de: "Ich steige in den Bus ein.", en: "I get on the bus. (einsteigen in + accusative)", ja: "バスに のります。（einsteigen in + たいかく）", zh: "我上公交车。（einsteigen in + 宾格）" } },
        { id: "g3", translations: { de: "Ich steige an der nächsten Station aus.", en: "I get off at the next station. (aussteigen — location)", ja: "つぎの えきで おります。（aussteigen——ばしょ）", zh: "我在下一站下车。（aussteigen——地点）" } },
        { id: "g4", translations: { de: "Ich steige in Shinjuku um.", en: "I transfer trains at Shinjuku. (umsteigen — transfer location)", ja: "しんじゅくで でんしゃを のりかえます。（umsteigen——のりかえの ばしょ）", zh: "我在新宿换乘。（umsteigen——换乘地点）" } },
        { id: "g5", translations: { de: "Ich verlasse um sieben Uhr das Haus.", en: "I leave home at seven o'clock. (um + time)", ja: "しちじに いえを でます。（um + じこく）", zh: "我七点出门。（um + 时刻）" } },
        { id: "g6", translations: { de: "Ich komme um sechs Uhr im Büro an.", en: "I arrive at the office at six o'clock. (ankommen + im + dative, time)", ja: "かいしゃに ろくじに つきます。（ankommen + im + よかく、じこく）", zh: "我六点到公司。（ankommen + im + 与格，时间）" } }
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
    },
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        vf: { de: "V klingt wie F", en: "V sounds like F", ja: "V は F の おと", zh: "V发音像F" },
        wv: { de: "W klingt wie V", en: "W sounds like V", ja: "W は V の おと", zh: "W发音像V" }
      },
      items: [
        { id: "vf1", category: "vf", translations: { de: "Vater", en: "father", ja: "ちち", zh: "父亲" } },
        { id: "vf2", category: "vf", translations: { de: "Vogel", en: "bird", ja: "とり", zh: "鸟" } },
        { id: "vf3", category: "vf", translations: { de: "vier", en: "four", ja: "よん", zh: "四" } },
        { id: "wv1", category: "wv", translations: { de: "Wasser", en: "water", ja: "みず", zh: "水" } },
        { id: "wv2", category: "wv", translations: { de: "Woche", en: "week", ja: "しゅう", zh: "周" } },
        { id: "wv3", category: "wv", translations: { de: "warten", en: "to wait", ja: "まつ", zh: "等待" } }
      ]
    }
  },
  pronunciationDrills: {
    de: [
      {
        id: "sound-drill",
        title: {
          de: "Aussprachetraining 2",
          en: "Pronunciation Practice 2",
          ja: "はつおんの れんしゅう２",
          zh: "发音练习2"
        },
        spokenIntro: {
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          en: "Next, let's practice with a lot more examples.",
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          vf1: { de: "V klingt wie F", en: "V sounds like F", ja: "V は F の おと", zh: "V发音像F" },
          vf2: { de: "V klingt wie F", en: "V sounds like F", ja: "V は F の おと", zh: "V发音像F" },
          wv1: { de: "W klingt wie V", en: "W sounds like V", ja: "W は V の おと", zh: "W发音像V" },
          wv2: { de: "W klingt wie V", en: "W sounds like V", ja: "W は V の おと", zh: "W发音像V" }
        },
        items: [
          { id: "vf1_1", category: "vf1", translations: { de: "Verkehr", en: "traffic", ja: "こうつう", zh: "交通" } },
          { id: "vf1_2", category: "vf1", translations: { de: "verstehen", en: "to understand", ja: "りかいする", zh: "理解" } },
          { id: "vf1_3", category: "vf1", translations: { de: "Volk", en: "people, nation", ja: "こくみん", zh: "民族" } },
          { id: "vf1_4", category: "vf1", translations: { de: "voll", en: "full", ja: "いっぱいの", zh: "满的" } },
          { id: "vf1_5", category: "vf1", translations: { de: "vor", en: "before, in front of", ja: "まえに", zh: "在……前面" } },
          { id: "vf1_6", category: "vf1", translations: { de: "verkaufen", en: "to sell", ja: "うる", zh: "卖" } },
          { id: "vf1_7", category: "vf1", translations: { de: "Vorsicht", en: "caution", ja: "ちゅうい", zh: "小心" } },
          { id: "vf1_8", category: "vf1", translations: { de: "vorwärts", en: "forward", ja: "まえへ", zh: "向前" } },
          { id: "vf1_9", category: "vf1", translations: { de: "Vertrag", en: "contract", ja: "けいやく", zh: "合同" } },
          { id: "vf1_10", category: "vf1", translations: { de: "Vergnügen", en: "pleasure", ja: "たのしみ", zh: "乐趣" } },
          { id: "vf1_11", category: "vf1", translations: { de: "verlassen", en: "to leave", ja: "さる", zh: "离开" } },
          { id: "vf1_12", category: "vf1", translations: { de: "vergessen", en: "to forget", ja: "わすれる", zh: "忘记" } },
          { id: "vf1_13", category: "vf1", translations: { de: "verlieren", en: "to lose", ja: "なくす", zh: "丢失" } },
          { id: "vf1_14", category: "vf1", translations: { de: "Vieh", en: "livestock", ja: "かちく", zh: "牲畜" } },

          { id: "vf2_1", category: "vf2", translations: { de: "viel", en: "much, a lot", ja: "たくさん", zh: "很多" } },
          { id: "vf2_2", category: "vf2", translations: { de: "vorbei", en: "past, over", ja: "すぎた", zh: "过去，结束" } },
          { id: "vf2_3", category: "vf2", translations: { de: "Vorname", en: "first name", ja: "したのなまえ", zh: "名字" } },
          { id: "vf2_4", category: "vf2", translations: { de: "Verein", en: "club, association", ja: "クラブ", zh: "俱乐部" } },
          { id: "vf2_5", category: "vf2", translations: { de: "Vorschlag", en: "suggestion", ja: "ていあん", zh: "建议" } },
          { id: "vf2_6", category: "vf2", translations: { de: "vollständig", en: "complete", ja: "かんぜんな", zh: "完整的" } },
          { id: "vf2_7", category: "vf2", translations: { de: "Vorteil", en: "advantage", ja: "りてん", zh: "优点" } },
          { id: "vf2_8", category: "vf2", translations: { de: "verboten", en: "forbidden", ja: "きんしされた", zh: "禁止的" } },
          { id: "vf2_9", category: "vf2", translations: { de: "Vorhang", en: "curtain", ja: "カーテン", zh: "窗帘" } },
          { id: "vf2_10", category: "vf2", translations: { de: "Vormittag", en: "morning, forenoon", ja: "ごぜん", zh: "上午" } },
          { id: "vf2_11", category: "vf2", translations: { de: "Verantwortung", en: "responsibility", ja: "せきにん", zh: "责任" } },
          { id: "vf2_12", category: "vf2", translations: { de: "vertrauen", en: "to trust", ja: "しんらいする", zh: "信任" } },
          { id: "vf2_13", category: "vf2", translations: { de: "vorstellen", en: "to introduce", ja: "しょうかいする", zh: "介绍" } },
          { id: "vf2_14", category: "vf2", translations: { de: "Vorfahrt", en: "right of way", ja: "ゆうせん", zh: "优先通行权" } },

          { id: "wv1_1", category: "wv1", translations: { de: "Wagen", en: "car, wagon", ja: "くるま", zh: "车" } },
          { id: "wv1_2", category: "wv1", translations: { de: "Wetter", en: "weather", ja: "てんき", zh: "天气" } },
          { id: "wv1_3", category: "wv1", translations: { de: "wohnen", en: "to live, reside", ja: "すむ", zh: "居住" } },
          { id: "wv1_4", category: "wv1", translations: { de: "Wein", en: "wine", ja: "ワイン", zh: "葡萄酒" } },
          { id: "wv1_5", category: "wv1", translations: { de: "Winter", en: "winter", ja: "ふゆ", zh: "冬天" } },
          { id: "wv1_6", category: "wv1", translations: { de: "Welt", en: "world", ja: "せかい", zh: "世界" } },
          { id: "wv1_7", category: "wv1", translations: { de: "wichtig", en: "important", ja: "じゅうような", zh: "重要的" } },
          { id: "wv1_8", category: "wv1", translations: { de: "Wort", en: "word", ja: "ことば", zh: "词语" } },
          { id: "wv1_9", category: "wv1", translations: { de: "Weg", en: "way, path", ja: "みち", zh: "路" } },
          { id: "wv1_10", category: "wv1", translations: { de: "Wand", en: "wall", ja: "かべ", zh: "墙" } },
          { id: "wv1_11", category: "wv1", translations: { de: "weiß", en: "white", ja: "しろい", zh: "白色的" } },
          { id: "wv1_12", category: "wv1", translations: { de: "Wunsch", en: "wish", ja: "ねがい", zh: "愿望" } },
          { id: "wv1_13", category: "wv1", translations: { de: "Wolke", en: "cloud", ja: "くも", zh: "云" } },
          { id: "wv1_14", category: "wv1", translations: { de: "Werk", en: "plant, factory", ja: "こうじょう", zh: "工厂" } },

          { id: "wv2_1", category: "wv2", translations: { de: "Wunder", en: "miracle", ja: "きせき", zh: "奇迹" } },
          { id: "wv2_2", category: "wv2", translations: { de: "Wirtschaft", en: "economy", ja: "けいざい", zh: "经济" } },
          { id: "wv2_3", category: "wv2", translations: { de: "Werkzeug", en: "tool", ja: "どうぐ", zh: "工具" } },
          { id: "wv2_4", category: "wv2", translations: { de: "Wahl", en: "choice, election", ja: "せんたく、せんきょ", zh: "选择，选举" } },
          { id: "wv2_5", category: "wv2", translations: { de: "Wetterbericht", en: "weather report", ja: "てんきよほう", zh: "天气预报" } },
          { id: "wv2_6", category: "wv2", translations: { de: "Wiese", en: "meadow", ja: "くさち", zh: "草地" } },
          { id: "wv2_7", category: "wv2", translations: { de: "Wolf", en: "wolf", ja: "おおかみ", zh: "狼" } },
          { id: "wv2_8", category: "wv2", translations: { de: "Warnung", en: "warning", ja: "けいこく", zh: "警告" } },
          { id: "wv2_9", category: "wv2", translations: { de: "Weile", en: "a while", ja: "しばらく", zh: "一会儿" } },
          { id: "wv2_10", category: "wv2", translations: { de: "wach", en: "awake", ja: "めがさめた", zh: "清醒的" } },
          { id: "wv2_11", category: "wv2", translations: { de: "wecken", en: "to wake", ja: "おこす", zh: "叫醒" } },
          { id: "wv2_12", category: "wv2", translations: { de: "Weizen", en: "wheat", ja: "こむぎ", zh: "小麦" } },
          { id: "wv2_13", category: "wv2", translations: { de: "Wende", en: "U-turn, turning point", ja: "ターン、てんかんてん", zh: "转弯，转折点" } },
          { id: "wv2_14", category: "wv2", translations: { de: "Wärter", en: "attendant, keeper", ja: "かんりにん", zh: "看守人" } }
        ]
      }
    ]
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-verkehrsmittel",
        title: { de: "Übung: mit / einsteigen / aussteigen", en: "Practice: Mit / Einsteigen / Aussteigen", ja: "れんしゅう：mit／einsteigen／aussteigen", zh: "练习：mit／einsteigen／aussteigen" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit Verkehrsmitteln.",
          en: "Next, let's practice example sentences using transportation vocabulary.",
          ja: "つぎは、こうつうしゅだんを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用交通工具的例句。"
        },
        lines: [
          { id: "v1", translations: { de: "Ich fahre mit dem Bus zur Arbeit.", en: "I go to work by bus.", ja: "バスで しごとへ いきます。", zh: "我坐公交车去上班。" } },
          { id: "v2", translations: { de: "Er fährt mit dem Fahrrad zur Schule.", en: "He goes to school by bicycle.", ja: "かれは じてんしゃで がっこうへ いきます。", zh: "他骑自行车去学校。" } },
          { id: "v3", translations: { de: "Ich steige in den Zug ein.", en: "I board the train.", ja: "でんしゃに のります。", zh: "我上电车。" } },
          { id: "v4", translations: { de: "Sie steigt in ein Taxi ein.", en: "She gets into a taxi.", ja: "かのじょは タクシーに のります。", zh: "她上出租车。" } },
          { id: "v5", translations: { de: "Wir steigen am Bahnhof aus.", en: "We get off at the station.", ja: "わたしたちは えきで おります。", zh: "我们在车站下车。" } },
          { id: "v6", translations: { de: "Er steigt an der nächsten Haltestelle aus.", en: "He gets off at the next stop.", ja: "かれは つぎの ていりゅうじょで おります。", zh: "他在下一站下车。" } },
          { id: "v7", translations: { de: "Ich steige in Tokio um.", en: "I transfer in Tokyo.", ja: "とうきょうで のりかえます。", zh: "我在东京换乘。" } },
          { id: "v8", translations: { de: "Wir steigen in einen anderen Bus um.", en: "We transfer to a different bus.", ja: "わたしたちは べつの バスに のりかえます。", zh: "我们换乘另一辆公交车。" } },
          { id: "v9", translations: { de: "Der Zug kommt um acht Uhr an.", en: "The train arrives at eight o'clock.", ja: "でんしゃは はちじに つきます。", zh: "电车八点到达。" } },
          { id: "v10", translations: { de: "Ich verlasse das Haus um sieben Uhr.", en: "I leave the house at seven o'clock.", ja: "しちじに いえを でます。", zh: "我七点出门。" } }
        ]
      }
    ]
  }
};
