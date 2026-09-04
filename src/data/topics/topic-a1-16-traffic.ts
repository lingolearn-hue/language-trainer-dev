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
    { id: "v01", category: "noun", translations: { ja: "でんしゃ", en: "train", de: "Zug", zh: "电车", fr: "train" } },
    { id: "v02", category: "noun", translations: { ja: "バス", en: "bus", de: "Bus", zh: "公交车", fr: "bus" } },
    { id: "v03", category: "noun", translations: { ja: "タクシー", en: "taxi", de: "Taxi", zh: "出租车", fr: "taxi" } },
    { id: "v04", category: "noun", translations: { ja: "ちかてつ", en: "subway", de: "U-Bahn", zh: "地铁", fr: "métro" } },
    { id: "v05", category: "noun", translations: { ja: "じてんしゃ", en: "bicycle", de: "Fahrrad", zh: "自行车", fr: "vélo" } },
    { id: "v06", category: "noun", translations: { ja: "くるま", en: "car", de: "Auto", zh: "汽车", fr: "voiture" } },
    { id: "v07", category: "noun", translations: { ja: "バイク", en: "motorbike", de: "Motorrad", zh: "摩托车", fr: "moto" } },
    { id: "v08", category: "noun", translations: { ja: "しんごう", en: "traffic light", de: "Ampel", zh: "信号灯", fr: "feu (de circulation)" } },
    { id: "v09", category: "noun", translations: { ja: "じゅうたい", en: "traffic jam", de: "Stau", zh: "堵车", fr: "embouteillage" } },
    { id: "v10", category: "noun", translations: { ja: "じこ", en: "accident", de: "Unfall", zh: "事故", fr: "accident" } },
    { id: "v11", category: "verb", translations: { ja: "うんてんする", en: "to drive", de: "fahren, steuern", zh: "驾驶", fr: "conduire" } },
    { id: "v12", category: "verb", translations: { ja: "のる", en: "to ride, get on", de: "einsteigen, fahren mit", zh: "乘坐", fr: "monter (dans/en)" } },
    { id: "v13", category: "verb", translations: { ja: "おりる", en: "to get off", de: "aussteigen", zh: "下车", fr: "descendre (de)" } },
    { id: "v14", category: "verb", translations: { ja: "のりかえる", en: "to transfer, change trains", de: "umsteigen", zh: "换乘", fr: "changer (de train)" } },
    { id: "v15", category: "verb", translations: { ja: "おくれる", en: "to be late", de: "sich verspäten", zh: "迟到", fr: "être en retard" } },
    { id: "v16", category: "verb", translations: { ja: "いそぐ", en: "to hurry", de: "sich beeilen", zh: "赶紧", fr: "se dépêcher" } },
    { id: "v17", category: "verb", translations: { ja: "こむ", en: "to be crowded", de: "überfüllt sein", zh: "拥挤", fr: "être bondé(e)" } },
    { id: "v18", category: "verb", translations: { ja: "すく", en: "to be empty, uncrowded", de: "leer sein, wenig besucht sein", zh: "空旷，人少", fr: "être vide" } },
    { id: "v19", category: "noun", translations: { ja: "ラッシュアワー", en: "rush hour", de: "Stoßzeit", zh: "高峰时段", fr: "heure de pointe" } },
    { id: "v20", category: "noun", translations: { ja: "つうきん", en: "commute, commuting", de: "Pendeln, Arbeitsweg", zh: "通勤", fr: "trajet domicile-travail" } },
    { id: "v21", category: "noun", translations: { ja: "うんてんしゅ", en: "driver", de: "Fahrer/in", zh: "司机", fr: "chauffeur, conducteur(rice)" } },
    { id: "v22", category: "noun", translations: { ja: "うんちん", en: "fare", de: "Fahrpreis", zh: "车费", fr: "tarif" } },
    { id: "v23", category: "noun", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "车票", fr: "billet" } },
    { id: "v24", category: "noun", translations: { ja: "かいさつぐち", en: "ticket gate", de: "Bahnsteigsperre", zh: "检票口", fr: "portillon" } },
    { id: "v25", category: "noun", translations: { ja: "ホーム", en: "platform", de: "Bahnsteig", zh: "站台", fr: "quai" } },
    { id: "v26", category: "noun", translations: { ja: "しはつ", en: "first train", de: "erster Zug", zh: "首班车", fr: "premier train" } },
    { id: "v27", category: "noun", translations: { ja: "しゅうでん", en: "last train", de: "letzter Zug", zh: "末班车", fr: "dernier train" } },
    { id: "v28", category: "adjective", translations: { ja: "あんぜんな", en: "safe", de: "sicher", zh: "安全的", fr: "sûr(e)" } },
    { id: "v29", category: "adjective", translations: { ja: "べんりな", en: "convenient", de: "praktisch", zh: "方便的", fr: "pratique" } },
    { id: "v30", category: "noun", translations: { ja: "こうつう", en: "traffic (general term)", de: "Verkehr (allgemein)", zh: "交通（总称）", fr: "circulation" } }
  ],
  dialogueA: {
    title: { ja: "タクシーで みちを つたえる", en: "Giving a Taxi Driver Directions", de: "Dem Taxifahrer den Weg erklären", zh: "给出租车司机指路", fr: "Indiquer le chemin au chauffeur de taxi" },
    lines: [
      { id: "d1", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "どちらまで いきますか？", en: "Where would you like to go?", de: "Wohin möchten Sie fahren?", zh: "您要去哪里？", fr: "Où souhaitez-vous aller ?" } },
      { id: "d2", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "えきまで おねがいします。", en: "To the station, please.", de: "Zum Bahnhof, bitte.", zh: "请到车站。", fr: "À la gare, s'il vous plaît." } },
      { id: "d3", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "わかりました。しんごうを みぎに まがりますね。", en: "Understood. I'll turn right at the light.", de: "Verstanden. Ich biege an der Ampel rechts ab.", zh: "明白了。我在信号灯右转。", fr: "Très bien. Je vais tourner à droite au feu." } },
      { id: "d4", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "いま じゅうたいしてますか？", en: "Is there a traffic jam right now?", de: "Gibt es gerade einen Stau?", zh: "现在堵车吗？", fr: "Y a-t-il un embouteillage en ce moment ?" } },
      { id: "d5", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "すこし こんでいますね。", en: "It's a little crowded.", de: "Es ist ein bisschen voll.", zh: "有点堵。", fr: "C'est un peu chargé." } },
      { id: "d6", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "しんぱいです。でんしゃに おくれそうです。", en: "I'm worried. It looks like I'll be late for the train.", de: "Ich mache mir Sorgen. Ich verpasse wohl den Zug.", zh: "我有点担心。看来要赶不上电车了。", fr: "Je suis inquiet(ète). On dirait que je vais rater le train." } },
      { id: "d7", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "だいじょうぶですよ。ちかみちを つかいます。", en: "It'll be fine. I'll take a shortcut.", de: "Kein Problem. Ich nehme eine Abkürzung.", zh: "没问题。我走近路。", fr: "Ça va aller. Je vais prendre un raccourci." } },
      { id: "d8", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "ありがとうございます。いそいで ください。", en: "Thank you. Please hurry.", de: "Danke. Bitte beeilen Sie sich.", zh: "谢谢。请快一点。", fr: "Merci. Dépêchez-vous, s'il vous plaît." } },
      { id: "d9", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "もうすぐ えきに つきますよ。", en: "We'll arrive at the station soon.", de: "Wir sind gleich beim Bahnhof.", zh: "马上就到车站了。", fr: "Nous arriverons bientôt à la gare." } },
      { id: "d10", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "しゅうでんに まにあいそうですか？", en: "Do you think I'll make the last train?", de: "Denken Sie, ich schaffe den letzten Zug?", zh: "能赶上末班车吗？", fr: "Pensez-vous que je vais attraper le dernier train ?" } },
      { id: "d11", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "はい、じかんは まだ あります。", en: "Yes, there's still time.", de: "Ja, es ist noch Zeit.", zh: "还有时间。", fr: "Oui, il reste encore du temps." } },
      { id: "d12", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "ああ、えきが みえてきました。", en: "Oh, I can see the station now.", de: "Oh, ich sehe schon den Bahnhof.", zh: "啊，能看到车站了。", fr: "Ah, je vois la gare maintenant." } },
      { id: "d13", speaker: { ja: "うんてんしゅ", en: "Driver", de: "Fahrer", zh: "司机" }, translations: { ja: "うんちんは せんごひゃくえんです。", en: "The fare is fifteen hundred yen.", de: "Der Fahrpreis beträgt fünfzehnhundert Yen.", zh: "车费是一千五百日元。", fr: "Le tarif est de mille cinq cents yens." } },
      { id: "d14", speaker: { ja: "きゃく", en: "Passenger", de: "Fahrgast", zh: "乘客" }, translations: { ja: "はい、どうぞ。たすかりました！", en: "Here you go. You really helped me out!", de: "Bitte sehr. Sie haben mir sehr geholfen!", zh: "给您。真是帮了我大忙！", fr: "Voilà. Vous m'avez vraiment aidé(e) !" } }
    ]
  },
  dialogueB: {
    title: { ja: "まいにちの つうきん", en: "My Daily Commute", de: "Mein täglicher Arbeitsweg", zh: "我的日常通勤", fr: "Mon trajet quotidien" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "まいあさ どうやって かいしゃに いくの？", en: "How do you get to work every morning?", de: "Wie kommst du jeden Morgen zur Arbeit?", zh: "你每天早上怎么去公司？", fr: "Comment vas-tu au travail tous les matins ?" } },
      { id: "e2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でんしゃで いくよ。それから バスに のりかえる。", en: "I go by train. Then I transfer to a bus.", de: "Ich fahre mit dem Zug. Dann steige ich auf den Bus um.", zh: "我坐电车去。然后换乘公交车。", fr: "Je prends le train. Ensuite, je change pour un bus." } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんしゃは いつも こんでいる？", en: "Is the train always crowded?", de: "Ist der Zug immer voll?", zh: "电车总是很挤吗？", fr: "Le train est-il toujours bondé ?" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ラッシュアワーは すごく こむよ。", en: "It's really crowded during rush hour.", de: "In der Stoßzeit ist er wirklich voll.", zh: "高峰时段特别挤。", fr: "Il est vraiment bondé aux heures de pointe." } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしは じてんしゃで つうきんしてる。", en: "I commute by bicycle.", de: "Ich fahre mit dem Fahrrad zur Arbeit.", zh: "我骑自行车通勤。", fr: "Moi, je fais le trajet à vélo." } },
      { id: "e6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいね！じてんしゃは あんぜん？", en: "Nice! Is cycling safe?", de: "Schön! Ist Fahrradfahren sicher?", zh: "真好！骑自行车安全吗？", fr: "Super ! Faire du vélo, c'est sûr ?" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "まあまあ あんぜんだけど、あめの ひは たいへん。", en: "It's fairly safe, but rainy days are tough.", de: "Es ist einigermaßen sicher, aber Regentage sind hart.", zh: "还算安全，不过下雨天挺难的。", fr: "C'est assez sûr, mais les jours de pluie, c'est difficile." } },
      { id: "e8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そういう ひは バスに のる？", en: "Do you take the bus on days like that?", de: "Nimmst du an solchen Tagen den Bus?", zh: "那种天气你会坐公交车吗？", fr: "Tu prends le bus ces jours-là ?" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "うん、バスのほうが べんりだから。", en: "Yeah, because the bus is more convenient.", de: "Ja, weil der Bus praktischer ist.", zh: "嗯，因为公交车更方便。", fr: "Oui, parce que le bus est plus pratique." } },
      { id: "e10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つうきんに どのくらい じかんが かかる？", en: "How long does your commute take?", de: "Wie lange dauert dein Arbeitsweg?", zh: "你的通勤要花多长时间？", fr: "Combien de temps dure ton trajet ?" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だいたい さんじゅっぷん くらいだよ。", en: "About thirty minutes, I'd say.", de: "Ungefähr dreißig Minuten.", zh: "大概三十分钟左右。", fr: "À peu près trente minutes, je dirais." } },
      { id: "e12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ぼくは いちじかん くらい かかるよ。", en: "Mine takes about an hour.", de: "Meiner dauert ungefähr eine Stunde.", zh: "我的要花大约一个小时。", fr: "Le mien prend environ une heure." } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは ながいね。しんかんせんは つかわないの？", en: "That's long. Don't you use the bullet train?", de: "Das ist lang. Nutzt du nicht den Shinkansen?", zh: "那挺久的。你不坐新干线吗？", fr: "C'est long. Tu n'utilises pas le train à grande vitesse ?" } },
      { id: "e14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "つかいたいけど、うんちんが たかいんだ。", en: "I'd like to, but the fare is expensive.", de: "Ich würde gerne, aber der Fahrpreis ist teuer.", zh: "想坐，但是车费太贵了。", fr: "J'aimerais bien, mais le tarif est cher." } }
    ]
  },
  song: {
    // Row 16 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song (also a thematic
    // fit here, given the vehicle/movement theme).
    title: { ja: "こげよ マイケル", en: "Row, Row, Row Your Boat", de: "Rudert, rudert", fr: "Rame, rame sur ton bateau" },
    lines: [
      { id: "sg1", translations: { ja: "こげ こげ ボートを", en: "Row, row, row your boat", de: "Rudert, rudert, rudert das Boot", fr: "Rame, rame sur ton bateau" } },
      { id: "sg2", translations: { ja: "しずかに かわを くだる", en: "Gently down the stream", de: "sanft den Fluss hinab", fr: "Doucement sur le courant" } },
      { id: "sg3", translations: { ja: "たのしく たのしく たのしく たのしく", en: "Merrily, merrily, merrily, merrily", de: "Fröhlich, fröhlich, fröhlich, fröhlich", fr: "Joyeusement, joyeusement, joyeusement" } },
      { id: "sg4", translations: { ja: "じんせいは ゆめの よう", en: "Life is but a dream", de: "das Leben ist ein Traum", fr: "La vie n'est qu'un rêve" } }
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
    },
    // French uses a genuinely different system from both German's
    // case-marked preposition (mit + dative) and Japanese's particle
    // set (で/へ/に) — most vehicles take "en," but the ones you sit
    // astride or use your own feet for take "à" instead. Paired with
    // "prendre" (to take), the everyday verb for using a means of
    // transport.
    fr: {
      title: { fr: "En / à : les moyens de transport", en: "En / À: Means of Transportation", de: "En / à: Verkehrsmittel", ja: "en／à：こうつうしゅだん", zh: "en／à：交通工具" },
      explanation: {
        fr: "Pour la plupart des moyens de transport, le français utilise « en » : en train, en bus, en voiture, en taxi, en métro. Pour les moyens où l'on est « à califourchon » ou pour aller à pied, on utilise « à » : à vélo, à pied. Le verbe « prendre » (je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent) s'utilise pour dire qu'on emprunte un moyen de transport.",
        en: "For most means of transportation, French uses \"en\": en train, en bus, en voiture, en taxi, en métro. For vehicles you straddle, or for going on foot, French uses \"à\" instead: à vélo (by bike), à pied (on foot). The verb \"prendre\" (to take: je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent) is used to say you're using a means of transport.",
        de: "Für die meisten Verkehrsmittel benutzt das Französische „en\": en train, en bus, en voiture, en taxi, en métro. Für Fahrzeuge, auf denen man rittlings sitzt, oder zu Fuß, benutzt man stattdessen „à\": à vélo (mit dem Rad), à pied (zu Fuß). Das Verb „prendre\" (nehmen: je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent) wird benutzt, um zu sagen, dass man ein Verkehrsmittel benutzt.",
        ja: "ほとんどの こうつうしゅだんには「en」を つかいます：en train（でんしゃで）、en bus（バスで）、en voiture（くるまで）、en taxi（タクシーで）、en métro（ちかてつで）。またがって のる のりものや、あるいて いく ときは「à」を つかいます：à vélo（じてんしゃで）、à pied（あるいて）。「prendre」（のる：je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent）は、のりものを つかう ことを いう ときに つかいます。",
        zh: "对于大多数交通工具，法语使用「en」：en train（坐火车）、en bus（坐公交车）、en voiture（坐车）、en taxi（坐出租车）、en métro（坐地铁）。对于跨坐的交通工具或步行，则使用「à」：à vélo（骑自行车）、à pied（步行）。动词「prendre」（乘坐：je prends, tu prends, il/elle prend, nous prenons, vous prenez, ils/elles prennent）用于表示使用某种交通工具。"
      },
      chunks: [
        { id: "g1", translations: { fr: "Je vais à l'école en train.", en: "I go to school by train. (en — most vehicles)", de: "Ich fahre mit dem Zug zur Schule. (en — die meisten Fahrzeuge)", ja: "でんしゃで がっこうへ いきます。（en——たいていの のりもの）", zh: "我坐电车去学校。（en——大多数交通工具）" } },
        { id: "g2", translations: { fr: "Il va au bureau en bus.", en: "He goes to the office by bus. (en — bus)", de: "Er fährt mit dem Bus ins Büro. (en — Bus)", ja: "かれは バスで かいしゃへ いきます。（en——バス）", zh: "他坐公交车去办公室。（en——公交车）" } },
        { id: "g3", translations: { fr: "Elle va au marché à vélo.", en: "She goes to the market by bicycle. (à — straddled vehicle)", de: "Sie fährt mit dem Fahrrad zum Markt. (à — Fahrzeug zum Rittlingssitzen)", ja: "かのじょは じてんしゃで いちばへ いきます。（à——またがる のりもの）", zh: "她骑自行车去市场。（à——跨坐式交通工具）" } },
        { id: "g4", translations: { fr: "Nous allons à pied.", en: "We go on foot. (à — on foot)", de: "Wir gehen zu Fuß. (à — zu Fuß)", ja: "わたしたちは あるいて いきます。（à——とほ）", zh: "我们步行去。（à——步行）" } },
        { id: "g5", translations: { fr: "Je prends le bus tous les jours.", en: "I take the bus every day. (prendre)", de: "Ich nehme jeden Tag den Bus. (prendre)", ja: "まいにち バスに のります。（prendre）", zh: "我每天坐公交车。（prendre）" } },
        { id: "g6", translations: { fr: "Tu prends un taxi ce soir ?", en: "Are you taking a taxi tonight? (prendre, question)", de: "Nimmst du heute Abend ein Taxi? (prendre, Frage)", ja: "こんばん タクシーに のりますか？（prendre、しつもんけい）", zh: "你今晚坐出租车吗？（prendre，疑问形）" } }
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
    },
    // French pronunciation: the [y] ("u") vs [u] ("ou") vowel
    // distinction — one of the classic hard-to-hear contrasts for
    // English speakers, since English has nothing quite like [y].
    // Several transport words (roue/route/autobus) supply natural
    // examples of the [u] side.
    fr: {
      title: { fr: "Exercice de prononciation", en: "Pronunciation Practice", de: "Aussprachetraining", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        son_u: { fr: "Le son « u »", en: "The \"u\" sound [y]", de: "Der Laut „u\" [y]", ja: "「u」の おん [y]", zh: "「u」音 [y]" },
        son_ou: { fr: "Le son « ou »", en: "The \"ou\" sound [u]", de: "Der Laut „ou\" [u]", ja: "「ou」の おん [u]", zh: "「ou」音 [u]" }
      },
      items: [
        { id: "u1", category: "son_u", translations: { fr: "rue", en: "street", de: "Straße", ja: "とおり", zh: "街道" } },
        { id: "u2", category: "son_u", translations: { fr: "du", en: "some, of the", de: "etwas, vom", ja: "いくらかの", zh: "一些的" } },
        { id: "u3", category: "son_u", translations: { fr: "sur", en: "on", de: "auf", ja: "〜のうえに", zh: "在……上面" } },
        { id: "u4", category: "son_u", translations: { fr: "voiture", en: "car", de: "Auto", ja: "くるま", zh: "汽车" } },
        { id: "ou1", category: "son_ou", translations: { fr: "roue", en: "wheel", de: "Rad", ja: "しゃりん", zh: "轮子" } },
        { id: "ou2", category: "son_ou", translations: { fr: "où", en: "where", de: "wo", ja: "どこ", zh: "哪里" } },
        { id: "ou3", category: "son_ou", translations: { fr: "tout", en: "all, everything", de: "alles", ja: "すべて", zh: "全部" } },
        { id: "ou4", category: "son_ou", translations: { fr: "autobus", en: "bus", de: "Autobus", ja: "バス", zh: "公交车" } }
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
    ],
    fr: [
      {
        id: "sound-drill",
        title: {
          fr: "Exercice de prononciation 2",
          en: "Pronunciation Practice 2",
          de: "Aussprachetraining 2",
          ja: "はつおんの れんしゅう２",
          zh: "发音练习2"
        },
        spokenIntro: {
          fr: "Ensuite, pratiquons avec beaucoup plus d'exemples.",
          en: "Next, let's practice with a lot more examples.",
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          u1: { fr: "Le son « u »", en: "The \"u\" sound [y]", de: "Der Laut „u\" [y]", ja: "「u」の おん [y]", zh: "「u」音 [y]" },
          u2: { fr: "Le son « u »", en: "The \"u\" sound [y]", de: "Der Laut „u\" [y]", ja: "「u」の おん [y]", zh: "「u」音 [y]" },
          ou1: { fr: "Le son « ou »", en: "The \"ou\" sound [u]", de: "Der Laut „ou\" [u]", ja: "「ou」の おん [u]", zh: "「ou」音 [u]" },
          ou2: { fr: "Le son « ou »", en: "The \"ou\" sound [u]", de: "Der Laut „ou\" [u]", ja: "「ou」の おん [u]", zh: "「ou」音 [u]" }
        },
        items: [
          { id: "u1_1", category: "u1", translations: { fr: "mur", en: "wall", de: "Wand", ja: "かべ", zh: "墙" } },
          { id: "u1_2", category: "u1", translations: { fr: "pur", en: "pure", de: "rein", ja: "じゅんすいな", zh: "纯净的" } },
          { id: "u1_3", category: "u1", translations: { fr: "dur", en: "hard", de: "hart", ja: "かたい", zh: "硬的" } },
          { id: "u1_4", category: "u1", translations: { fr: "sud", en: "south", de: "Süden", ja: "みなみ", zh: "南方" } },
          { id: "u1_5", category: "u1", translations: { fr: "but", en: "goal", de: "Ziel", ja: "もくてき", zh: "目标" } },
          { id: "u1_6", category: "u1", translations: { fr: "jus", en: "juice", de: "Saft", ja: "ジュース", zh: "果汁" } },
          { id: "u1_7", category: "u1", translations: { fr: "cru", en: "raw", de: "roh", ja: "なまの", zh: "生的" } },
          { id: "u1_8", category: "u1", translations: { fr: "vu", en: "seen", de: "gesehen", ja: "みた", zh: "看过的" } },
          { id: "u1_9", category: "u1", translations: { fr: "nu", en: "naked, bare", de: "nackt", ja: "はだかの", zh: "裸露的" } },
          { id: "u1_10", category: "u1", translations: { fr: "lu", en: "read (past participle)", de: "gelesen", ja: "よんだ", zh: "读过的" } },
          { id: "u1_11", category: "u1", translations: { fr: "tu", en: "you (informal)", de: "du", ja: "きみ", zh: "你（非正式）" } },
          { id: "u1_12", category: "u1", translations: { fr: "su", en: "known", de: "gewusst", ja: "しっていた", zh: "知道的" } },
          { id: "u1_13", category: "u1", translations: { fr: "élu", en: "elected", de: "gewählt", ja: "せんきょされた", zh: "当选的" } },
          { id: "u1_14", category: "u1", translations: { fr: "aigu", en: "sharp, acute", de: "scharf, spitz", ja: "するどい", zh: "尖锐的" } },

          { id: "u2_1", category: "u2", translations: { fr: "utile", en: "useful", de: "nützlich", ja: "やくにたつ", zh: "有用的" } },
          { id: "u2_2", category: "u2", translations: { fr: "lune", en: "moon", de: "Mond", ja: "つき", zh: "月亮" } },
          { id: "u2_3", category: "u2", translations: { fr: "minute", en: "minute", de: "Minute", ja: "ふん", zh: "分钟" } },
          { id: "u2_4", category: "u2", translations: { fr: "numéro", en: "number", de: "Nummer", ja: "ばんごう", zh: "号码" } },
          { id: "u2_5", category: "u2", translations: { fr: "tunnel", en: "tunnel", de: "Tunnel", ja: "トンネル", zh: "隧道" } },
          { id: "u2_6", category: "u2", translations: { fr: "usine", en: "factory", de: "Fabrik", ja: "こうじょう", zh: "工厂" } },
          { id: "u2_7", category: "u2", translations: { fr: "union", en: "union", de: "Union", ja: "れんごう", zh: "联盟" } },
          { id: "u2_8", category: "u2", translations: { fr: "humain", en: "human", de: "menschlich", ja: "にんげんの", zh: "人类的" } },
          { id: "u2_9", category: "u2", translations: { fr: "juillet", en: "July", de: "Juli", ja: "しちがつ", zh: "七月" } },
          { id: "u2_10", category: "u2", translations: { fr: "juste", en: "fair, just", de: "gerecht", ja: "こうへいな", zh: "公正的" } },
          { id: "u2_11", category: "u2", translations: { fr: "musique", en: "music", de: "Musik", ja: "おんがく", zh: "音乐" } },
          { id: "u2_12", category: "u2", translations: { fr: "municipal", en: "municipal", de: "kommunal", ja: "しの", zh: "市立的" } },
          { id: "u2_13", category: "u2", translations: { fr: "unique", en: "unique", de: "einzigartig", ja: "ゆいいつの", zh: "独特的" } },
          { id: "u2_14", category: "u2", translations: { fr: "minuscule", en: "tiny", de: "winzig", ja: "とても ちいさい", zh: "微小的" } },

          { id: "ou1_1", category: "ou1", translations: { fr: "jour", en: "day", de: "Tag", ja: "ひ", zh: "天" } },
          { id: "ou1_2", category: "ou1", translations: { fr: "cour", en: "courtyard", de: "Hof", ja: "なかにわ", zh: "院子" } },
          { id: "ou1_3", category: "ou1", translations: { fr: "tour", en: "tower, turn", de: "Turm, Runde", ja: "とう、じゅんばん", zh: "塔，轮次" } },
          { id: "ou1_4", category: "ou1", translations: { fr: "amour", en: "love", de: "Liebe", ja: "あい", zh: "爱" } },
          { id: "ou1_5", category: "ou1", translations: { fr: "toujours", en: "always", de: "immer", ja: "いつも", zh: "总是" } },
          { id: "ou1_6", category: "ou1", translations: { fr: "cours", en: "class, course", de: "Kurs", ja: "じゅぎょう", zh: "课程" } },
          { id: "ou1_7", category: "ou1", translations: { fr: "lourd", en: "heavy", de: "schwer", ja: "おもい", zh: "重的" } },
          { id: "ou1_8", category: "ou1", translations: { fr: "sourd", en: "deaf", de: "taub", ja: "みみが きこえない", zh: "耳聋的" } },
          { id: "ou1_9", category: "ou1", translations: { fr: "loup", en: "wolf", de: "Wolf", ja: "おおかみ", zh: "狼" } },
          { id: "ou1_10", category: "ou1", translations: { fr: "coup", en: "hit, blow", de: "Schlag", ja: "うつこと", zh: "打击" } },
          { id: "ou1_11", category: "ou1", translations: { fr: "genou", en: "knee", de: "Knie", ja: "ひざ", zh: "膝盖" } },
          { id: "ou1_12", category: "ou1", translations: { fr: "trou", en: "hole", de: "Loch", ja: "あな", zh: "洞" } },
          { id: "ou1_13", category: "ou1", translations: { fr: "doux", en: "soft, sweet", de: "sanft", ja: "やわらかい", zh: "柔软的" } },
          { id: "ou1_14", category: "ou1", translations: { fr: "bonjour", en: "hello", de: "Hallo", ja: "こんにちは", zh: "你好" } },

          { id: "ou2_1", category: "ou2", translations: { fr: "route", en: "road, route", de: "Straße, Route", ja: "みち", zh: "道路" } },
          { id: "ou2_2", category: "ou2", translations: { fr: "nous", en: "we", de: "wir", ja: "わたしたち", zh: "我们" } },
          { id: "ou2_3", category: "ou2", translations: { fr: "pour", en: "for", de: "für", ja: "〜のために", zh: "为了" } },
          { id: "ou2_4", category: "ou2", translations: { fr: "journée", en: "day (duration)", de: "Tag (Dauer)", ja: "いちにち（けいか）", zh: "一天（时长）" } },
          { id: "ou2_5", category: "ou2", translations: { fr: "couleur", en: "color", de: "Farbe", ja: "いろ", zh: "颜色" } },
          { id: "ou2_6", category: "ou2", translations: { fr: "nouveau", en: "new", de: "neu", ja: "あたらしい", zh: "新的" } },
          { id: "ou2_7", category: "ou2", translations: { fr: "bouche", en: "mouth", de: "Mund", ja: "くち", zh: "嘴" } },
          { id: "ou2_8", category: "ou2", translations: { fr: "douche", en: "shower", de: "Dusche", ja: "シャワー", zh: "淋浴" } },
          { id: "ou2_9", category: "ou2", translations: { fr: "écouter", en: "to listen", de: "zuhören", ja: "きく", zh: "听" } },
          { id: "ou2_10", category: "ou2", translations: { fr: "trouver", en: "to find", de: "finden", ja: "みつける", zh: "找到" } },
          { id: "ou2_11", category: "ou2", translations: { fr: "jouer", en: "to play", de: "spielen", ja: "あそぶ", zh: "玩" } },
          { id: "ou2_12", category: "ou2", translations: { fr: "ouvrir", en: "to open", de: "öffnen", ja: "あける", zh: "打开" } },
          { id: "ou2_13", category: "ou2", translations: { fr: "souvent", en: "often", de: "oft", ja: "よく", zh: "经常" } },
          { id: "ou2_14", category: "ou2", translations: { fr: "toucher", en: "to touch", de: "berühren", ja: "さわる", zh: "触摸" } }
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
    ],
    fr: [
      {
        id: "grammar-drill-en-a",
        title: { fr: "Exercice : en / à / prendre", en: "Practice: En / À / Prendre", de: "Übung: En / à / prendre", ja: "れんしゅう：en／à／prendre", zh: "练习：en／à／prendre" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases sur les moyens de transport.",
          en: "Next, let's practice example sentences using transportation vocabulary.",
          de: "Als Nächstes üben wir Beispielsätze mit Verkehrsmitteln.",
          ja: "つぎは、こうつうしゅだんを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用交通工具的例句。"
        },
        lines: [
          { id: "v1", translations: { fr: "Je vais au travail en bus.", en: "I go to work by bus.", de: "Ich fahre mit dem Bus zur Arbeit.", ja: "バスで しごとへ いきます。", zh: "我坐公交车去上班。" } },
          { id: "v2", translations: { fr: "Il va à l'école à vélo.", en: "He goes to school by bicycle.", de: "Er fährt mit dem Fahrrad zur Schule.", ja: "かれは じてんしゃで がっこうへ いきます。", zh: "他骑自行车去学校。" } },
          { id: "v3", translations: { fr: "Je monte dans le train.", en: "I board the train.", de: "Ich steige in den Zug ein.", ja: "でんしゃに のります。", zh: "我上电车。" } },
          { id: "v4", translations: { fr: "Elle monte dans un taxi.", en: "She gets into a taxi.", de: "Sie steigt in ein Taxi ein.", ja: "かのじょは タクシーに のります。", zh: "她上出租车。" } },
          { id: "v5", translations: { fr: "Nous descendons à la gare.", en: "We get off at the station.", de: "Wir steigen am Bahnhof aus.", ja: "わたしたちは えきで おります。", zh: "我们在车站下车。" } },
          { id: "v6", translations: { fr: "Il descend au prochain arrêt.", en: "He gets off at the next stop.", de: "Er steigt an der nächsten Haltestelle aus.", ja: "かれは つぎの ていりゅうじょで おります。", zh: "他在下一站下车。" } },
          { id: "v7", translations: { fr: "Je change de train à Tokyo.", en: "I transfer in Tokyo.", de: "Ich steige in Tokio um.", ja: "とうきょうで のりかえます。", zh: "我在东京换乘。" } },
          { id: "v8", translations: { fr: "Nous changeons pour un autre bus.", en: "We transfer to a different bus.", de: "Wir steigen in einen anderen Bus um.", ja: "わたしたちは べつの バスに のりかえます。", zh: "我们换乘另一辆公交车。" } },
          { id: "v9", translations: { fr: "Le train arrive à huit heures.", en: "The train arrives at eight o'clock.", de: "Der Zug kommt um acht Uhr an.", ja: "でんしゃは はちじに つきます。", zh: "电车八点到达。" } },
          { id: "v10", translations: { fr: "Je quitte la maison à sept heures.", en: "I leave the house at seven o'clock.", de: "Ich verlasse das Haus um sieben Uhr.", ja: "しちじに いえを でます。", zh: "我七点出门。" } }
        ]
      }
    ]
  }
};
