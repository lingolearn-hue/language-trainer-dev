import type { TopicLesson } from "../topicTypes";

// A2 — row 4 of docs/a2-master-lesson-table-v01.md. Grammar: ~te kara
// (after doing) / ~ato de (after). Pronunciation 1/2 (T vs CH, S vs SH)
// kept exactly as assigned.

export const topicTransport: TopicLesson = {
  id: "topic-25-transport",
  lessonNumber: 25,
  level: "A2",
  topicName: {
    ja: "こうつう",
    en: "Transport",
    de: "Transport",
    zh: "交通"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "パスポート", en: "passport", de: "Reisepass", zh: "护照" } },
    { id: "v02", category: "noun", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "车票" } },
    { id: "v03", category: "noun", translations: { ja: "こうくうけん", en: "airline ticket", de: "Flugticket", zh: "机票" } },
    { id: "v04", category: "noun", translations: { ja: "くうこう", en: "airport", de: "Flughafen", zh: "机场" } },
    { id: "v05", category: "noun", translations: { ja: "えき", en: "station", de: "Bahnhof", zh: "车站" } },
    { id: "v06", category: "noun", translations: { ja: "ホーム", en: "platform", de: "Bahnsteig", zh: "站台" } },
    { id: "v07", category: "noun", translations: { ja: "にもつ", en: "luggage", de: "Gepäck", zh: "行李" } },
    { id: "v08", category: "noun", translations: { ja: "スーツケース", en: "suitcase", de: "Koffer", zh: "行李箱" } },
    { id: "v09", category: "noun", translations: { ja: "リュック", en: "backpack", de: "Rucksack", zh: "背包" } },
    { id: "v10", category: "noun", translations: { ja: "チェックイン", en: "check-in", de: "Check-in", zh: "登机手续" } },
    { id: "v11", category: "noun", translations: { ja: "セキュリティチェック", en: "security check", de: "Sicherheitskontrolle", zh: "安检" } },
    { id: "v12", category: "noun", translations: { ja: "のりかえ", en: "transfer, connection", de: "Umsteigen", zh: "换乘" } },
    { id: "v13", category: "noun", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt, Abflug", zh: "出发" } },
    { id: "v14", category: "noun", translations: { ja: "とうちゃく", en: "arrival", de: "Ankunft", zh: "到达" } },
    { id: "v15", category: "noun", translations: { ja: "ちこく", en: "being late", de: "Verspätung", zh: "迟到" } },
    { id: "v16", category: "verb", translations: { ja: "まにあう", en: "to be in time", de: "rechtzeitig kommen", zh: "赶得上" } },
    { id: "v17", category: "verb", translations: { ja: "まつ", en: "to wait", de: "warten", zh: "等待" } },
    { id: "v18", category: "verb", translations: { ja: "いそぐ", en: "to hurry", de: "sich beeilen", zh: "赶紧" } },
    { id: "v19", category: "verb", translations: { ja: "のる", en: "to board, ride", de: "einsteigen", zh: "乘坐" } },
    { id: "v20", category: "verb", translations: { ja: "おりる", en: "to get off", de: "aussteigen", zh: "下车" } },
    { id: "v21", category: "verb", translations: { ja: "じゅんびする", en: "to prepare", de: "vorbereiten", zh: "准备" } },
    { id: "v22", category: "verb", translations: { ja: "つめる", en: "to pack", de: "packen", zh: "装" } },
    { id: "v23", category: "verb", translations: { ja: "わすれる", en: "to forget", de: "vergessen", zh: "忘记" } },
    { id: "v24", category: "verb", translations: { ja: "かくにんする", en: "to confirm", de: "bestätigen", zh: "确认" } },
    { id: "v25", category: "verb", translations: { ja: "よやくする", en: "to reserve", de: "reservieren", zh: "预订" } },
    { id: "v26", category: "noun", translations: { ja: "まどがわのせき", en: "window seat", de: "Fensterplatz", zh: "靠窗座位" } },
    { id: "v27", category: "noun", translations: { ja: "つうろがわのせき", en: "aisle seat", de: "Gangplatz", zh: "靠走廊座位" } },
    { id: "v28", category: "noun", translations: { ja: "あんぜんベルト", en: "seat belt", de: "Sicherheitsgurt", zh: "安全带" } },
    { id: "v29", category: "noun", translations: { ja: "りょこう", en: "trip, travel", de: "Reise", zh: "旅行" } },
    { id: "v30", category: "noun", translations: { ja: "よてい", en: "plan, itinerary", de: "Plan", zh: "计划" } }
  ],
  dialogueA: {
    title: { ja: "りょこうの じゅんびを する", en: "Getting Ready for a Trip", de: "Sich auf eine Reise vorbereiten", zh: "准备旅行" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "にもつは もう つめましたか？", en: "Have you packed your luggage yet?", de: "Haben Sie Ihr Gepäck schon gepackt?", zh: "行李已经收拾好了吗？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "パスポートを かくにんしてから、つめます。", en: "I'll pack after I confirm my passport.", de: "Ich packe, nachdem ich meinen Reisepass bestätigt habe.", zh: "确认好护照之后再收拾。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こうくうけんは よやくしましたか？", en: "Did you reserve the airline ticket?", de: "Haben Sie das Flugticket reserviert?", zh: "机票预订了吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、しゅっぱつの じかんを かくにんしてから、よやくしました。", en: "Yes, I reserved it after confirming the departure time.", de: "Ja, ich habe reserviert, nachdem ich die Abfahrtszeit bestätigt hatte.", zh: "是的，确认出发时间之后就预订了。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "せきは まどがわですか？", en: "Is your seat a window seat?", de: "Ist Ihr Platz ein Fensterplatz?", zh: "座位是靠窗的吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいえ、つうろがわの せきを えらびました。", en: "No, I chose an aisle seat.", de: "Nein, ich habe einen Gangplatz gewählt.", zh: "不，我选了靠走廊的座位。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "くうこうまで どうやって いきますか？", en: "How are you getting to the airport?", de: "Wie kommen Sie zum Flughafen?", zh: "怎么去机场？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "でんしゃに のってから、バスに のりかえます。", en: "After riding the train, I'll transfer to a bus.", de: "Nachdem ich den Zug genommen habe, steige ich in einen Bus um.", zh: "坐了电车之后，再换乘公交车。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ちこくしないように、はやく でたほうが いいですよ。", en: "You'd better leave early so you're not late.", de: "Sie sollten früh losgehen, damit Sie nicht zu spät kommen.", zh: "为了不迟到，最好早点出发。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。じゅんびが おわったあとで、すぐ でます。", en: "You're right. I'll leave right after I finish preparing.", de: "Sie haben recht. Ich gehe gleich los, nachdem ich fertig bin.", zh: "说得对。准备好之后马上出发。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "セキュリティチェックは じかんが かかりますね。", en: "The security check takes time, doesn't it.", de: "Die Sicherheitskontrolle dauert lange, oder?", zh: "安检很花时间呢。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、だから チェックインを してから、はやめに いきます。", en: "Yes, so after checking in, I'll go there early.", de: "Ja, deshalb gehe ich nach dem Check-in früh dorthin.", zh: "是的，所以办完登机手续之后会早点过去。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "あんぜんベルトを わすれないで くださいね。", en: "Please don't forget your seat belt.", de: "Vergessen Sie bitte nicht den Sicherheitsgurt.", zh: "请不要忘记系安全带。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "だいじょうぶです。よい りょこうに なりそうです。", en: "It's fine. It looks like it'll be a good trip.", de: "Alles gut. Es scheint eine schöne Reise zu werden.", zh: "没问题。看起来会是一次不错的旅行。" } }
    ]
  },
  dialogueB: {
    title: { ja: "りょこうの じゅんばんを せつめいする", en: "Explaining the Order of a Journey", de: "Den Ablauf einer Reise erklären", zh: "说明旅行的顺序" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "くうこうまでの よていを おしえて ください。", en: "Please tell me your plan for getting to the airport.", de: "Bitte erzählen Sie mir Ihren Plan für den Flughafen.", zh: "请告诉我去机场的计划。" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "えきに ついてから、きっぷを かいます。", en: "After arriving at the station, I'll buy a ticket.", de: "Nachdem ich am Bahnhof angekommen bin, kaufe ich eine Fahrkarte.", zh: "到车站之后再买票。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そのあとは どうしますか？", en: "What do you do after that?", de: "Was machen Sie danach?", zh: "然后呢？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "きっぷを かったあとで、ホームに いきます。", en: "After buying the ticket, I go to the platform.", de: "Nachdem ich die Fahrkarte gekauft habe, gehe ich zum Bahnsteig.", zh: "买了票之后就去站台。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんしゃに のってから、なにを しますか？", en: "What do you do after boarding the train?", de: "Was machen Sie, nachdem Sie in den Zug eingestiegen sind?", zh: "上了电车之后做什么？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "せきに すわってから、にもつを うえに おきます。", en: "After sitting in my seat, I put my luggage up top.", de: "Nachdem ich mich gesetzt habe, lege ich mein Gepäck nach oben.", zh: "坐下之后把行李放到上面。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "くうこうでは まず なにを しますか？", en: "What do you do first at the airport?", de: "Was machen Sie zuerst am Flughafen?", zh: "在机场首先做什么？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ついたあとで、チェックインを します。", en: "After arriving, I check in.", de: "Nachdem ich angekommen bin, checke ich ein.", zh: "到达之后办理登机手续。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "チェックインの あとは？", en: "What's after check-in?", de: "Was kommt nach dem Check-in?", zh: "登机手续之后呢？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "チェックインしてから、セキュリティチェックを うけます。", en: "After checking in, I go through the security check.", de: "Nach dem Check-in gehe ich durch die Sicherheitskontrolle.", zh: "办理手续之后接受安检。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "とうちゃくしたら、まず なにを しますか？", en: "When you arrive, what do you do first?", de: "Wenn Sie ankommen, was machen Sie zuerst?", zh: "到达之后先做什么？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "にもつを うけとってから、ホテルに むかいます。", en: "After picking up my luggage, I head to the hotel.", de: "Nachdem ich mein Gepäck abgeholt habe, fahre ich zum Hotel.", zh: "取了行李之后前往酒店。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "のりかえは ありますか？", en: "Do you have a transfer?", de: "Haben Sie einen Umstieg?", zh: "有换乘吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、バスに のりかえたあとで、ホテルに つきます。", en: "Yes, after transferring to a bus, I arrive at the hotel.", de: "Ja, nachdem ich in einen Bus umgestiegen bin, komme ich im Hotel an.", zh: "是的，换乘公交车之后就到酒店了。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜てから／〜あとで：じゅんばんを あらわす", en: "~Te Kara / ~Ato De: Expressing Sequence", de: "~Te Kara / ~Ato De: Reihenfolge ausdrücken", zh: "〜てから／〜あとで：表示顺序" },
      explanation: {
        ja: "「〜てから」は どうしの て-けい に つけて、「Aを してから、Bを する」（Aを した あと、すぐに Bを する）を あらわします。「〜あとで」は「Aした あとで、Bする」で、なめし より すこし かたい/ひろい かんかくで つかえます。どちらも、ふたつの どうさの じゅんばんを はっきり しめします。",
        en: "~te kara attaches to the te-form of a verb: \"do A, then do B\" (right after finishing A, B happens). ~ato de is used as \"after doing A, B\" and works with a slightly more formal/flexible nuance. Both clearly mark the order of two actions.",
        de: "~te kara wird an die te-Form eines Verbs angehängt: \"A tun, dann B tun\" (direkt nachdem A beendet ist, geschieht B). ~ato de wird als \"nachdem man A getan hat, B\" verwendet und hat eine etwas formellere/flexiblere Nuance. Beide markieren klar die Reihenfolge zweier Handlungen.",
        zh: "〜てから接在动词て形后：\"做了A之后，再做B\"（A结束后立刻发生B）。〜あとで用作\"做了A之后，B\"，语感稍微正式/宽松一些。两者都清楚地标示了两个动作的先后顺序。"
      },
      chunks: [
        { id: "g1", translations: { ja: "しゅくだいを してから、テレビを みます。", en: "After doing my homework, I watch TV.", de: "Nachdem ich meine Hausaufgaben gemacht habe, sehe ich fern.", zh: "做完作业之后看电视。" } },
        { id: "g2", translations: { ja: "ごはんを たべたあとで、さんぽに いきます。", en: "After eating, I go for a walk.", de: "Nachdem ich gegessen habe, gehe ich spazieren.", zh: "吃完饭之后去散步。" } },
        { id: "g3", translations: { ja: "シャワーを あびてから、ねます。", en: "After taking a shower, I go to bed.", de: "Nachdem ich geduscht habe, gehe ich ins Bett.", zh: "洗完澡之后睡觉。" } },
        { id: "g4", translations: { ja: "かいぎが おわったあとで、れんらくします。", en: "After the meeting ends, I'll contact you.", de: "Nachdem die Besprechung beendet ist, melde ich mich.", zh: "会议结束之后再联系。" } },
        { id: "g5", translations: { ja: "きっぷを かってから、ホームに はいります。", en: "After buying a ticket, I go onto the platform.", de: "Nachdem ich eine Fahrkarte gekauft habe, gehe ich auf den Bahnsteig.", zh: "买了票之后进站台。" } },
        { id: "g6", translations: { ja: "にほんに ついたあとで、れんらくを ください。", en: "Please contact me after you arrive in Japan.", de: "Bitte melden Sie sich, nachdem Sie in Japan angekommen sind.", zh: "到达日本之后请联系我。" } }
      ]
    }
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-tekara",
        title: { ja: "れんしゅう：〜てから", en: "Practice: ~Te Kara", de: "Übung: ~Te Kara", zh: "练习：〜てから" },
        spokenIntro: {
          ja: "つぎは、「〜てから」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~te kara.",
          de: "Als Nächstes üben wir Beispielsätze mit ~te kara.",
          zh: "接下来，让我们练习使用「〜てから」的例句。"
        },
        lines: [
          { id: "tk1", translations: { ja: "きっぷを かってから、ホームに はいります。", jaKanji: "切符を買ってから、ホームに入ります。", en: "After buying the ticket, I go onto the platform.", de: "Nachdem ich die Fahrkarte gekauft habe, gehe ich auf den Bahnsteig.", zh: "买了票之后进站台。" } },
          { id: "tk2", translations: { ja: "パスポートを かくにんしてから、つめます。", jaKanji: "パスポートを確認してから、詰めます。", en: "After confirming my passport, I pack.", de: "Nachdem ich meinen Reisepass bestätigt habe, packe ich.", zh: "确认好护照之后收拾行李。" } },
          { id: "tk3", translations: { ja: "チェックインしてから、セキュリティチェックを うけます。", jaKanji: "チェックインしてから、セキュリティチェックを受けます。", en: "After checking in, I go through security.", de: "Nach dem Check-in gehe ich durch die Sicherheitskontrolle.", zh: "办理手续之后接受安检。" } },
          { id: "tk4", translations: { ja: "でんしゃに のってから、ざせきに すわります。", jaKanji: "電車に乗ってから、座席に座ります。", en: "After boarding the train, I sit in my seat.", de: "Nachdem ich in den Zug eingestiegen bin, setze ich mich auf meinen Platz.", zh: "上了电车之后坐到座位上。" } },
          { id: "tk5", translations: { ja: "しゅっぱつしてから、れんらくします。", jaKanji: "出発してから、連絡します。", en: "After departing, I'll contact you.", de: "Nachdem ich abgefahren bin, melde ich mich.", zh: "出发之后联系你。" } },
          { id: "tk6", translations: { ja: "にもつを うけとってから、ホテルに いきます。", jaKanji: "荷物を受け取ってから、ホテルに行きます。", en: "After picking up my luggage, I go to the hotel.", de: "Nachdem ich mein Gepäck abgeholt habe, fahre ich zum Hotel.", zh: "取了行李之后去酒店。" } },
          { id: "tk7", translations: { ja: "くうこうに ついてから、でんわします。", jaKanji: "空港に着いてから、電話します。", en: "After arriving at the airport, I'll call.", de: "Nachdem ich am Flughafen angekommen bin, rufe ich an.", zh: "到达机场之后打电话。" } },
          { id: "tk8", translations: { ja: "じゅんびしてから、でかけます。", jaKanji: "準備してから、出かけます。", en: "After preparing, I'll go out.", de: "Nachdem ich mich vorbereitet habe, gehe ich raus.", zh: "准备好之后出门。" } },
          { id: "tk9", translations: { ja: "よやくしてから、きっぷを かいます。", jaKanji: "予約してから、切符を買います。", en: "After reserving, I'll buy the ticket.", de: "Nachdem ich reserviert habe, kaufe ich die Fahrkarte.", zh: "预订之后买票。" } },
          { id: "tk10", translations: { ja: "のりかえてから、ホテルに つきます。", jaKanji: "乗り換えてから、ホテルに着きます。", en: "After transferring, I'll arrive at the hotel.", de: "Nachdem ich umgestiegen bin, komme ich im Hotel an.", zh: "换乘之后到达酒店。" } }
        ]
      },
      {
        id: "grammar-drill-atode",
        title: { ja: "れんしゅう：〜あとで", en: "Practice: ~Ato De", de: "Übung: ~Ato De", zh: "练习：〜あとで" },
        spokenIntro: {
          ja: "つぎは、「〜あとで」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~ato de.",
          de: "Als Nächstes üben wir Beispielsätze mit ~ato de.",
          zh: "接下来，让我们练习使用「〜あとで」的例句。"
        },
        lines: [
          { id: "at1", translations: { ja: "かいぎが おわったあとで、れんらくします。", jaKanji: "会議が終わったあとで、連絡します。", en: "After the meeting ends, I'll contact you.", de: "Nachdem die Besprechung beendet ist, melde ich mich.", zh: "会议结束之后再联系。" } },
          { id: "at2", translations: { ja: "ごはんを たべたあとで、さんぽに いきます。", jaKanji: "ご飯を食べたあとで、散歩に行きます。", en: "After eating, I'll go for a walk.", de: "Nachdem ich gegessen habe, gehe ich spazieren.", zh: "吃完饭之后去散步。" } },
          { id: "at3", translations: { ja: "きっぷを かったあとで、ホームに いきます。", jaKanji: "切符を買ったあとで、ホームに行きます。", en: "After buying the ticket, I go to the platform.", de: "Nachdem ich die Fahrkarte gekauft habe, gehe ich zum Bahnsteig.", zh: "买了票之后去站台。" } },
          { id: "at4", translations: { ja: "とうちゃくしたあとで、チェックインします。", jaKanji: "到着したあとで、チェックインします。", en: "After arriving, I'll check in.", de: "Nachdem ich angekommen bin, checke ich ein.", zh: "到达之后办理登机手续。" } },
          { id: "at5", translations: { ja: "にもつを つめたあとで、かくにんします。", jaKanji: "荷物を詰めたあとで、確認します。", en: "After packing, I'll check.", de: "Nachdem ich gepackt habe, überprüfe ich alles.", zh: "收拾好行李之后再确认。" } },
          { id: "at6", translations: { ja: "チェックインの あとで、セキュリティチェックを うけます。", jaKanji: "チェックインのあとで、セキュリティチェックを受けます。", en: "After check-in, I go through security.", de: "Nach dem Check-in gehe ich durch die Sicherheitskontrolle.", zh: "办理手续之后接受安检。" } },
          { id: "at7", translations: { ja: "しゅっぱつの あとで、ねます。", jaKanji: "出発のあとで、寝ます。", en: "After departure, I'll sleep.", de: "Nach der Abfahrt schlafe ich.", zh: "出发之后睡觉。" } },
          { id: "at8", translations: { ja: "じゅんびが おわったあとで、すぐ でます。", jaKanji: "準備が終わったあとで、すぐ出ます。", en: "After finishing preparations, I'll leave right away.", de: "Nachdem die Vorbereitungen fertig sind, gehe ich sofort los.", zh: "准备好之后马上出发。" } },
          { id: "at9", translations: { ja: "にほんに ついたあとで、れんらくを ください。", jaKanji: "日本に着いたあとで、連絡をください。", en: "Please contact me after arriving in Japan.", de: "Bitte melden Sie sich, nachdem Sie in Japan angekommen sind.", zh: "到达日本之后请联系我。" } },
          { id: "at10", translations: { ja: "のりかえた あとで、ホテルに つきます。", jaKanji: "乗り換えたあとで、ホテルに着きます。", en: "After transferring, I'll arrive at the hotel.", de: "Nachdem ich umgestiegen bin, komme ich im Hotel an.", zh: "换乘之后到达酒店。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        t: { ja: "T", en: "T", de: "T", zh: "T" },
        ch: { ja: "CH", en: "CH", de: "CH", zh: "CH" },
        s: { ja: "S", en: "S", de: "S", zh: "S" },
        sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" }
      },
      items: [
        { id: "t1", category: "t", translations: { ja: "とけい", en: "clock", de: "Uhr", zh: "钟表" } },
        { id: "t2", category: "t", translations: { ja: "たまご", en: "egg", de: "Ei", zh: "鸡蛋" } },
        { id: "t3", category: "t", translations: { ja: "つくえ", en: "desk", de: "Schreibtisch", zh: "桌子" } },
        { id: "t4", category: "t", translations: { ja: "てがみ", en: "letter", de: "Brief", zh: "信" } },
        { id: "ch1", category: "ch", translations: { ja: "ちいさい", en: "small", de: "klein", zh: "小的" } },
        { id: "ch2", category: "ch", translations: { ja: "ちかてつ", en: "subway", de: "U-Bahn", zh: "地铁" } },
        { id: "ch3", category: "ch", translations: { ja: "ちゃいろ", en: "brown", de: "braun", zh: "棕色" } },
        { id: "ch4", category: "ch", translations: { ja: "ちず", en: "map", de: "Karte", zh: "地图" } },
        { id: "s1", category: "s", translations: { ja: "さかな", en: "fish", de: "Fisch", zh: "鱼" } },
        { id: "s2", category: "s", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
        { id: "s3", category: "s", translations: { ja: "せかい", en: "world", de: "Welt", zh: "世界" } },
        { id: "s4", category: "s", translations: { ja: "そと", en: "outside", de: "draußen", zh: "外面" } },
        { id: "sh1", category: "sh", translations: { ja: "しゅっぱつ", en: "departure", de: "Abfahrt", zh: "出发" } },
        { id: "sh2", category: "sh", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
        { id: "sh3", category: "sh", translations: { ja: "しんぶん", en: "newspaper", de: "Zeitung", zh: "报纸" } },
        { id: "sh4", category: "sh", translations: { ja: "しょくじ", en: "meal", de: "Mahlzeit", zh: "用餐" } }
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
          t: { ja: "T", en: "T", de: "T", zh: "T" },
          ch: { ja: "CH", en: "CH", de: "CH", zh: "CH" },
          s: { ja: "S", en: "S", de: "S", zh: "S" },
          sh: { ja: "SH", en: "SH", de: "SH", zh: "SH" }
        },
        items: [
          { id: "t5", category: "t", translations: { ja: "たいふう", en: "typhoon", de: "Taifun", zh: "台风" } },
          { id: "t6", category: "t", translations: { ja: "たてもの", en: "building", de: "Gebäude", zh: "建筑物" } },
          { id: "t7", category: "t", translations: { ja: "たんじょうび", en: "birthday", de: "Geburtstag", zh: "生日" } },
          { id: "t8", category: "t", translations: { ja: "つき", en: "moon", de: "Mond", zh: "月亮" } },
          { id: "t9", category: "t", translations: { ja: "つよい", en: "strong", de: "stark", zh: "强壮的" } },
          { id: "t10", category: "t", translations: { ja: "てんき", en: "weather", de: "Wetter", zh: "天气" } },
          { id: "t11", category: "t", translations: { ja: "てら", en: "temple", de: "Tempel", zh: "寺庙" } },
          { id: "t12", category: "t", translations: { ja: "とおい", en: "far", de: "weit", zh: "远的" } },
          { id: "t13", category: "t", translations: { ja: "とまる", en: "to stop", de: "anhalten", zh: "停止" } },
          { id: "t14", category: "t", translations: { ja: "つづく", en: "to continue", de: "fortsetzen", zh: "继续" } },
          { id: "t15", category: "t", translations: { ja: "てつだう", en: "to help", de: "helfen", zh: "帮忙" } },
          { id: "t16", category: "t", translations: { ja: "とどける", en: "to deliver", de: "liefern", zh: "送达" } },
          { id: "t17", category: "t", translations: { ja: "たおれる", en: "to fall over", de: "umfallen", zh: "倒下" } },
          { id: "t18", category: "t", translations: { ja: "とし", en: "year, age", de: "Jahr, Alter", zh: "年，年龄" } },

          { id: "ch5", category: "ch", translations: { ja: "ちかい", en: "near", de: "nah", zh: "近的" } },
          { id: "ch6", category: "ch", translations: { ja: "ちから", en: "strength", de: "Kraft", zh: "力气" } },
          { id: "ch7", category: "ch", translations: { ja: "ちしき", en: "knowledge", de: "Wissen", zh: "知识" } },
          { id: "ch8", category: "ch", translations: { ja: "ちほう", en: "region", de: "Region", zh: "地方" } },
          { id: "ch9", category: "ch", translations: { ja: "ちゃわん", en: "rice bowl", de: "Reisschale", zh: "饭碗" } },
          { id: "ch10", category: "ch", translations: { ja: "ちゅうしゃ", en: "parking", de: "Parken", zh: "停车" } },
          { id: "ch11", category: "ch", translations: { ja: "ちょきん", en: "savings", de: "Ersparnisse", zh: "存款" } },
          { id: "ch12", category: "ch", translations: { ja: "ちょうし", en: "condition", de: "Zustand", zh: "状态" } },
          { id: "ch13", category: "ch", translations: { ja: "ちいき", en: "area", de: "Gebiet", zh: "地区" } },
          { id: "ch14", category: "ch", translations: { ja: "ちゅうい", en: "caution", de: "Vorsicht", zh: "注意" } },
          { id: "ch15", category: "ch", translations: { ja: "ちょうど", en: "exactly", de: "genau", zh: "正好" } },
          { id: "ch16", category: "ch", translations: { ja: "ちかづく", en: "to approach", de: "sich nähern", zh: "靠近" } },
          { id: "ch17", category: "ch", translations: { ja: "ちらす", en: "to scatter", de: "verstreuen", zh: "散开" } },
          { id: "ch18", category: "ch", translations: { ja: "ちこくする", en: "to be late", de: "sich verspäten", zh: "迟到" } },

          { id: "s5", category: "s", translations: { ja: "さとう", en: "sugar", de: "Zucker", zh: "糖" } },
          { id: "s6", category: "s", translations: { ja: "すうがく", en: "math", de: "Mathematik", zh: "数学" } },
          { id: "s7", category: "s", translations: { ja: "すずしい", en: "cool", de: "kühl", zh: "凉爽的" } },
          { id: "s8", category: "s", translations: { ja: "せいと", en: "student", de: "Schüler", zh: "学生" } },
          { id: "s9", category: "s", translations: { ja: "せんもん", en: "specialty", de: "Fachgebiet", zh: "专业" } },
          { id: "s10", category: "s", translations: { ja: "そつぎょう", en: "graduation", de: "Abschluss", zh: "毕业" } },
          { id: "s11", category: "s", translations: { ja: "そんけい", en: "respect", de: "Respekt", zh: "尊敬" } },
          { id: "s12", category: "s", translations: { ja: "さそう", en: "to invite", de: "einladen", zh: "邀请" } },
          { id: "s13", category: "s", translations: { ja: "すすむ", en: "to advance", de: "vorankommen", zh: "前进" } },
          { id: "s14", category: "s", translations: { ja: "せまい", en: "narrow", de: "eng", zh: "狭窄的" } },
          { id: "s15", category: "s", translations: { ja: "そだてる", en: "to raise, grow", de: "aufziehen", zh: "养育" } },
          { id: "s16", category: "s", translations: { ja: "さがす", en: "to search", de: "suchen", zh: "寻找" } },
          { id: "s17", category: "s", translations: { ja: "すごす", en: "to spend time", de: "verbringen", zh: "度过" } },
          { id: "s18", category: "s", translations: { ja: "そろえる", en: "to arrange, align", de: "ordnen", zh: "备齐" } },

          { id: "sh5", category: "sh", translations: { ja: "しあい", en: "match, game", de: "Spiel, Wettkampf", zh: "比赛" } },
          { id: "sh6", category: "sh", translations: { ja: "しかた", en: "way of doing", de: "Art und Weise", zh: "方法" } },
          { id: "sh7", category: "sh", translations: { ja: "しつれい", en: "rudeness", de: "Unhöflichkeit", zh: "失礼" } },
          { id: "sh8", category: "sh", translations: { ja: "しなもの", en: "goods", de: "Ware", zh: "货物" } },
          { id: "sh9", category: "sh", translations: { ja: "しみん", en: "citizen", de: "Bürger", zh: "市民" } },
          { id: "sh10", category: "sh", translations: { ja: "しゅうり", en: "repair", de: "Reparatur", zh: "修理" } },
          { id: "sh11", category: "sh", translations: { ja: "しょうひん", en: "product", de: "Produkt", zh: "商品" } },
          { id: "sh12", category: "sh", translations: { ja: "しゃかいじん", en: "working adult", de: "Berufstätiger", zh: "社会人" } },
          { id: "sh13", category: "sh", translations: { ja: "しゅうしょく", en: "finding employment", de: "Berufseinstieg", zh: "就业" } },
          { id: "sh14", category: "sh", translations: { ja: "しゅっせき", en: "attendance", de: "Anwesenheit", zh: "出席" } },
          { id: "sh15", category: "sh", translations: { ja: "しょうたい", en: "invitation", de: "Einladung", zh: "邀请" } },
          { id: "sh16", category: "sh", translations: { ja: "しょうめい", en: "proof", de: "Nachweis", zh: "证明" } },
          { id: "sh17", category: "sh", translations: { ja: "しょり", en: "processing", de: "Verarbeitung", zh: "处理" } },
          { id: "sh18", category: "sh", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef", zh: "总经理" } }
      ]
      }
    ]
  },
  song: {
    title: { ja: "でんしゃは いく", en: "The Train Goes On", de: "Der Zug fährt" },
    lines: [
      { id: "sg1", translations: { ja: "でんしゃは いく レールの うえ", en: "The train goes on, on the rails", de: "Der Zug fährt auf den Schienen dahin" } },
      { id: "sg2", translations: { ja: "まちを こえて うみを こえて", en: "Past the towns, past the sea", de: "Über die Städte, über das Meer" } },
      { id: "sg3", translations: { ja: "どこまでも どこまでも", en: "Onward and onward", de: "Immer weiter, immer weiter" } },
      { id: "sg4", translations: { ja: "たびは つづく", en: "The journey continues", de: "die Reise geht weiter" } }
    ]
  }
};
