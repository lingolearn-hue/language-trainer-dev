import type { TopicLesson } from "../topicTypes";

// A2 — row 35 of docs/a2-master-lesson-table-v01.md (new row added this
// session; no existing row covered discourse-level conjunctions).
// Grammar: しかし／だから／それで／それに (sentence-initial
// conjunctions linking two full sentences, distinct from
// sentence-internal connectors like 〜たら/〜ので covered elsewhere).
// Pronunciation: devoicing (母音の無声化) and pitch accent in
// adjectives — both previously unused categories in the A2 table.

export const topicConjunctions: TopicLesson = {
  id: "topic-33-conjunctions",
  lessonNumber: 33,
  level: "A2",
  topicName: {
    ja: "せつぞくし", jaKanji: "接続詞",
    en: "Conjunctions",
    de: "Konjunktionen",
    zh: "接续词"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "てんき", jaKanji: "天気", en: "weather", de: "Wetter", zh: "天气" } },
    { id: "v02", category: "noun", translations: { ja: "よてい", jaKanji: "予定", en: "plan", de: "Plan", zh: "计划" } },
    { id: "v03", category: "noun", translations: { ja: "りゆう", jaKanji: "理由", en: "reason", de: "Grund", zh: "理由" } },
    { id: "v04", category: "noun", translations: { ja: "けっか", jaKanji: "結果", en: "result", de: "Ergebnis", zh: "结果" } },
    { id: "v05", category: "noun", translations: { ja: "じょうきょう", jaKanji: "状況", en: "situation", de: "Situation", zh: "情况" } },
    { id: "v06", category: "noun", translations: { ja: "もんだい", jaKanji: "問題", en: "problem", de: "Problem", zh: "问题" } },
    { id: "v07", category: "noun", translations: { ja: "かいけつ", jaKanji: "解決", en: "solution", de: "Lösung", zh: "解决" } },
    { id: "v08", category: "noun", translations: { ja: "へんこう", jaKanji: "変更", en: "change", de: "Änderung", zh: "变更" } },
    { id: "v09", category: "noun", translations: { ja: "ちゅうし", jaKanji: "中止", en: "cancellation", de: "Absage", zh: "取消" } },
    { id: "v10", category: "noun", translations: { ja: "えんき", jaKanji: "延期", en: "postponement", de: "Verschiebung", zh: "延期" } },
    { id: "v11", category: "noun", translations: { ja: "じこ", jaKanji: "事故", en: "accident", de: "Unfall", zh: "事故" } },
    { id: "v12", category: "noun", translations: { ja: "こしょう", jaKanji: "故障", en: "breakdown, malfunction", de: "Störung, Defekt", zh: "故障" } },
    { id: "v13", category: "noun", translations: { ja: "しゅうり", jaKanji: "修理", en: "repair", de: "Reparatur", zh: "修理" } },
    { id: "v14", category: "noun", translations: { ja: "げんいん", jaKanji: "原因", en: "cause", de: "Ursache", zh: "原因" } },
    { id: "v15", category: "adverb", translations: { ja: "けっきょく", jaKanji: "結局", en: "in the end", de: "letztendlich", zh: "结果，最终" } },
    { id: "v16", category: "adverb", translations: { ja: "とにかく", en: "anyway", de: "jedenfalls", zh: "总之" } },
    { id: "v17", category: "adverb", translations: { ja: "つまり", en: "in other words", de: "das heißt", zh: "也就是说" } },
    { id: "v18", category: "adverb", translations: { ja: "いがい", jaKanji: "意外", en: "unexpected, besides", de: "unerwartet, außer", zh: "意外，除……之外" } },
    { id: "v19", category: "adverb", translations: { ja: "どうじに", jaKanji: "同時に", en: "at the same time", de: "gleichzeitig", zh: "同时" } },
    { id: "v20", category: "adverb", translations: { ja: "いっぽう", jaKanji: "一方", en: "on the other hand", de: "andererseits", zh: "另一方面" } },
    { id: "v21", category: "adverb", translations: { ja: "さらに", jaKanji: "更に", en: "furthermore", de: "außerdem", zh: "此外" } },
    { id: "v22", category: "adverb", translations: { ja: "ただし", jaKanji: "但し", en: "however, provided that", de: "jedoch, vorausgesetzt dass", zh: "但是，只是" } },
    { id: "v23", category: "adverb", translations: { ja: "もちろん", en: "of course", de: "natürlich", zh: "当然" } },
    { id: "v24", category: "adverb", translations: { ja: "たしかに", jaKanji: "確かに", en: "certainly", de: "sicherlich", zh: "确实" } },
    { id: "v25", category: "conjunction", translations: { ja: "なぜなら", en: "because (formal)", de: "denn (formell)", zh: "因为（正式）" } },
    { id: "v26", category: "conjunction", translations: { ja: "したがって", jaKanji: "従って", en: "therefore (formal)", de: "daher (formell)", zh: "因此（正式）" } },
    { id: "v27", category: "conjunction", translations: { ja: "そのため", en: "for that reason", de: "aus diesem Grund", zh: "因此" } },
    { id: "v28", category: "verb", translations: { ja: "かいけつする", jaKanji: "解決する", en: "to solve", de: "lösen", zh: "解决" } },
    { id: "v29", category: "verb", translations: { ja: "えんきする", jaKanji: "延期する", en: "to postpone", de: "verschieben", zh: "延期" } },
    { id: "v30", category: "verb", translations: { ja: "こしょうする", jaKanji: "故障する", en: "to break down, malfunction", de: "kaputtgehen", zh: "故障" } }
  ],
  dialogueA: {
    title: { ja: "よていの へんこうを せつめいする", jaKanji: "予定の変更を説明する", en: "Explaining a Change of Plans", de: "Eine Planänderung erklären", zh: "说明计划变更" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きょうの ハイキングは どうなりましたか？", jaKanji: "今日のハイキングはどうなりましたか？", en: "What happened to today's hike?", de: "Was ist mit der heutigen Wanderung passiert?", zh: "今天的远足怎么样了？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "たいふうが きました。だから、ちゅうしに なりました。", jaKanji: "台風が来ました。だから、中止になりました。", en: "A typhoon came. So it was canceled.", de: "Ein Taifun kam. Deshalb wurde sie abgesagt.", zh: "台风来了。所以取消了。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ざんねんですね。てんきよほうは わるかったんですか？", jaKanji: "残念ですね。天気予報は悪かったんですか？", en: "That's too bad. Was the weather forecast bad?", de: "Wie schade. War die Wettervorhersage schlecht?", zh: "真遗憾。天气预报不好吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい。しかし、げつようびは てんきが よく なるそうです。", jaKanji: "はい。しかし、月曜日は天気が良くなるそうです。", en: "Yes. However, it seems the weather will get better on Monday.", de: "Ja. Allerdings soll das Wetter am Montag besser werden.", zh: "是的。不过，听说星期一天气会转好。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "じゃあ、げつようびに えんきしませんか？", jaKanji: "じゃあ、月曜日に延期しませんか？", en: "Then, shall we postpone it to Monday?", de: "Sollen wir sie dann auf Montag verschieben?", zh: "那要不要延期到星期一？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいですね。それで、みんなに れんらくしましょう。", jaKanji: "いいですね。それで、みんなに連絡しましょう。", en: "Sounds good. So let's contact everyone.", de: "Klingt gut. Also lass uns alle kontaktieren.", zh: "好啊。那我们联系大家吧。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "げつようびは しごとが あります。それに、あさは いそがしいです。", jaKanji: "月曜日は仕事があります。それに、朝は忙しいです。", en: "I have work on Monday. Moreover, mornings are busy.", de: "Am Montag habe ich Arbeit. Außerdem sind die Vormittage stressig.", zh: "星期一我有工作。而且早上很忙。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じゃあ、ごごから でも いいですか？", jaKanji: "じゃあ、午後からでもいいですか？", en: "Then would starting from the afternoon be okay?", de: "Wäre es dann okay, ab dem Nachmittag anzufangen?", zh: "那从下午开始可以吗？" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、だいじょうぶです。ばしょは かわりませんか？", jaKanji: "はい、大丈夫です。場所は変わりませんか？", en: "Yes, that's fine. Does the location stay the same?", de: "Ja, das ist in Ordnung. Bleibt der Ort gleich?", zh: "好的，没问题。地点不变吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、かわりません。ただし、あめが ふったら また かんがえましょう。", jaKanji: "はい、変わりません。ただし、雨が降ったらまた考えましょう。", en: "Yes, it won't change. However, if it rains, let's think again.", de: "Ja, er bleibt gleich. Falls es aber regnet, überlegen wir noch einmal.", zh: "是的，不变。不过如果下雨的话，我们再重新考虑。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "わかりました。とにかく、げつようびを たのしみに して います。", jaKanji: "わかりました。とにかく、月曜日を楽しみにしています。", en: "Understood. Anyway, I'm looking forward to Monday.", de: "Verstanden. Jedenfalls freue ich mich auf Montag.", zh: "明白了。总之，我很期待星期一。" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "わたしも です。もんだいが あったら、すぐに おしえて ください。", jaKanji: "私もです。問題があったら、すぐに教えてください。", en: "Me too. If there's a problem, please tell me right away.", de: "Ich mich auch. Falls es ein Problem gibt, sagen Sie mir bitte sofort Bescheid.", zh: "我也是。如果有问题，请马上告诉我。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "けっきょく、いい けいけんに なりそうですね。", jaKanji: "結局、いい経験になりそうですね。", en: "In the end, it looks like it'll be a good experience.", de: "Letztendlich scheint es eine gute Erfahrung zu werden.", zh: "最终看起来会是一次很好的经历呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。もちろん、てんきが いいことを いのりましょう。", jaKanji: "そうですね。もちろん、天気がいいことを祈りましょう。", en: "That's right. Of course, let's hope for good weather.", de: "Genau. Natürlich hoffen wir auf gutes Wetter.", zh: "是啊。当然，希望天气好。" } }
    ]
  },
  dialogueB: {
    title: { ja: "りゆうと ついかの じょうほうを つたえる", jaKanji: "理由と追加の情報を伝える", en: "Giving Reasons and Additional Information", de: "Gründe und zusätzliche Informationen geben", zh: "说明理由和补充信息" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんしゃが とまって いますね。げんいんは なんですか？", jaKanji: "電車が止まっていますね。原因は何ですか？", en: "The trains have stopped. What's the cause?", de: "Die Züge stehen still. Was ist die Ursache?", zh: "电车停运了呢。原因是什么？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じこが あったそうです。したがって、しばらく うごかないと おもいます。", jaKanji: "事故があったそうです。したがって、しばらく動かないと思います。", en: "It seems there was an accident. Therefore, I think it won't move for a while.", de: "Es soll einen Unfall gegeben haben. Daher glaube ich, dass sie eine Weile stillstehen.", zh: "听说发生了事故。因此，我觉得暂时不会开动。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "こまりましたね。なぜなら、かいぎに ちこくしてしまいます。", jaKanji: "困りましたね。なぜなら、会議に遅刻してしまいます。", en: "That's a problem. Because I'll end up being late for the meeting.", de: "Das ist ein Problem, denn ich werde zu spät zur Besprechung kommen.", zh: "真麻烦。因为我会赶不上会议了。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そのため、バスに のった ほうが いいかもしれません。", jaKanji: "そのため、バスに乗ったほうがいいかもしれません。", en: "For that reason, it might be better to take the bus.", de: "Aus diesem Grund wäre es vielleicht besser, den Bus zu nehmen.", zh: "因此，也许坐公交车会更好。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たしかに、それは いい かんがえですね。", jaKanji: "確かに、それはいい考えですね。", en: "Certainly, that's a good idea.", de: "Sicherlich ist das eine gute Idee.", zh: "确实，那是个好主意。" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いっぽう、バスも こんで いるかもしれません。", jaKanji: "一方、バスも混んでいるかもしれません。", en: "On the other hand, the bus might also be crowded.", de: "Andererseits könnte der Bus auch überfüllt sein.", zh: "另一方面，公交车可能也很挤。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "さらに、じかんも かかりそうです。", jaKanji: "さらに、時間もかかりそうです。", en: "Furthermore, it'll probably take more time too.", de: "Außerdem wird es wahrscheinlich auch länger dauern.", zh: "而且，好像也会更花时间。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "つまり、どちらを えらんでも もんだいが あるんですね。", jaKanji: "つまり、どちらを選んでも問題があるんですね。", en: "In other words, whichever we choose, there's a problem.", de: "Das heißt, egal welche wir wählen, es gibt ein Problem.", zh: "也就是说，不管选哪个都有问题呢。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じょうきょうを かいしゃに でんわで つたえましょう。", jaKanji: "状況を会社に電話で伝えましょう。", en: "Let's tell the company the situation by phone.", de: "Lass uns der Firma die Situation telefonisch mitteilen.", zh: "打电话把情况告诉公司吧。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いがい、しゃちょうは りかいして くれると おもいます。", jaKanji: "意外、社長は理解してくれると思います。", en: "Unexpectedly, I think the president will understand.", de: "Überraschenderweise glaube ich, dass der Chef Verständnis haben wird.", zh: "意外的是，我觉得老板会理解的。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんしゃの こしょうは よく ある もんだいですからね。", jaKanji: "電車の故障はよくある問題ですからね。", en: "Train malfunctions are a common problem, after all.", de: "Zugstörungen sind schließlich ein häufiges Problem.", zh: "电车故障本来就是常见的问题嘛。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "どうじに、しゅうりも はじまって いるみたいです。", jaKanji: "同時に、修理も始まっているみたいです。", en: "At the same time, it seems repairs have also started.", de: "Gleichzeitig scheinen auch die Reparaturen begonnen zu haben.", zh: "同时，好像也开始修理了。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けっか、あんしんしました。", jaKanji: "結果、安心しました。", en: "As a result, I feel relieved.", de: "Im Ergebnis bin ich erleichtert.", zh: "结果，我放心了。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ただし、もう すこし じかんが かかるかもしれませんね。", jaKanji: "ただし、もう少し時間がかかるかもしれませんね。", en: "However, it might still take a bit more time.", de: "Es könnte jedoch noch etwas länger dauern.", zh: "不过，可能还需要再花点时间。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "しかし／だから／それで／それに：ぶんを つなぐ せつぞくし", jaKanji: "しかし／だから／それで／それに：文をつなぐ接続詞", en: "Shikashi / Dakara / Sorede / Sore Ni: Connecting Sentences", de: "Shikashi / Dakara / Sorede / Sore Ni: Sätze verbinden", zh: "しかし／だから／それで／それに：连接句子" },
      explanation: {
        ja: "これらの せつぞくしは、ぶんの さいしょに おいて、まえの ぶんと つぎの ぶんを つなぎます。〜たら や〜ので のように ひとつの ぶんの なかを つなぐのでは なく、ふたつの かんぜんな ぶんを つなぎます。「しかし」は ぎゃくせつ（フォーマル）、「だから」は げんいん・けっか（カジュアルから ちゅうりつ）、「それで」は はなしの ながれの けいぞく、「それに」は つけくわえを あらわします。", jaKanji: "これらの接続詞は、文の最初において、前の文と次の文をつなぎます。〜たらや〜のでのように一つの文の中をつなぐのではなく、二つの完全な文をつなぎます。「しかし」は逆接（フォーマル）、「だから」は原因・結果（カジュアルから中立）、「それで」は話の流れの継続、「それに」は付け加えを表します。",
        en: "These conjunctions go at the start of a sentence and link the previous sentence to the next one. Unlike 〜tara or 〜node, which connect clauses within a single sentence, these connect two complete, independent sentences. しかし expresses contrast (formal), だから expresses cause-and-result (casual-to-neutral), それで continues the flow of a narrative, and それに adds additional information.",
        de: "Diese Konjunktionen stehen am Satzanfang und verbinden den vorherigen Satz mit dem nächsten. Anders als 〜tara oder 〜node, die Teilsätze innerhalb eines Satzes verbinden, verknüpfen diese zwei vollständige, eigenständige Sätze. しかし drückt einen Gegensatz aus (formell), だから drückt Ursache und Wirkung aus (locker bis neutral), それで setzt den Erzählfluss fort, und それに fügt zusätzliche Informationen hinzu.",
        zh: "这些接续词位于句首，连接前一句和后一句。与在一个句子内部连接从句的〜たら或〜ので不同，这些词连接的是两个完整独立的句子。しかし表示转折（正式），だから表示因果（随意到中性），それで延续叙述的流程，それに表示补充信息。"
      },
      chunks: [
        { id: "g1", translations: { ja: "あめが ふりました。しかし、しあいは ちゅうしに なりませんでした。", jaKanji: "雨が降りました。しかし、試合は中止になりませんでした。", en: "It rained. However, the match wasn't canceled.", de: "Es regnete. Das Spiel wurde jedoch nicht abgesagt.", zh: "下雨了。但是比赛没有取消。" } },
        { id: "g2", translations: { ja: "でんしゃが おくれました。だから、ちこくしました。", jaKanji: "電車が遅れました。だから、遅刻しました。", en: "The train was late. So I was late.", de: "Der Zug hatte Verspätung. Deshalb kam ich zu spät.", zh: "电车晚点了。所以我迟到了。" } },
        { id: "g3", translations: { ja: "しごとが おわりました。それで、いえに かえりました。", jaKanji: "仕事が終わりました。それで、家に帰りました。", en: "Work ended. And so I went home.", de: "Die Arbeit war zu Ende. Also ging ich nach Hause.", zh: "工作结束了。于是我回家了。" } },
        { id: "g4", translations: { ja: "この レストランは やすいです。それに、おいしいです。", jaKanji: "このレストランは安いです。それに、おいしいです。", en: "This restaurant is cheap. Moreover, it's delicious.", de: "Dieses Restaurant ist billig. Außerdem ist es lecker.", zh: "这家餐厅便宜。而且很好吃。" } },
        { id: "g5", translations: { ja: "たいふうが きました。それで、でんしゃが とまりました。", jaKanji: "台風が来ました。それで、電車が止まりました。", en: "A typhoon came. So the trains stopped.", de: "Ein Taifun kam. Deshalb hielten die Züge an.", zh: "台风来了。所以电车停了。" } },
        { id: "g6", translations: { ja: "かれは わかいです。しかし、とても けいけんが あります。", jaKanji: "彼は若いです。しかし、とても経験があります。", en: "He is young. However, he has a lot of experience.", de: "Er ist jung. Er hat jedoch viel Erfahrung.", zh: "他很年轻。但是很有经验。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        devoice1: { ja: "むせいか", en: "Devoicing", de: "Stimmlosigkeit", zh: "无声化" },
        devoice2: { ja: "むせいか", en: "Devoicing", de: "Stimmlosigkeit", zh: "无声化" },
        pitch1: { ja: "アクセント（あたまだか）", en: "Pitch (atamadaka)", de: "Tonhöhe (atamadaka)", zh: "声调（头高型）" },
        pitch2: { ja: "アクセント（へいばん）", en: "Pitch (heiban)", de: "Tonhöhe (heiban)", zh: "声调（平板型）" }
      },
      items: [
        { id: "dv1_1", category: "devoice1", translations: { ja: "です", en: "is, am, are (copula)", de: "sein (Kopula)", zh: "是（系词）" } },
        { id: "dv1_2", category: "devoice1", translations: { ja: "ます", en: "(polite verb ending)", de: "(höfliche Verbendung)", zh: "（礼貌动词词尾）" } },
        { id: "dv2_1", category: "devoice2", translations: { ja: "した", en: "below, did", de: "unten, tat", zh: "下面，做了" } },
        { id: "dv2_2", category: "devoice2", translations: { ja: "すき", en: "liked, favorite", de: "beliebt, Lieblings-", zh: "喜欢的" } },
        { id: "pt1_1", category: "pitch1", translations: { ja: "たかい", en: "expensive, tall", de: "teuer, groß", zh: "贵的，高的" } },
        { id: "pt1_2", category: "pitch1", translations: { ja: "ちいさい", en: "small", de: "klein", zh: "小的" } },
        { id: "pt2_1", category: "pitch2", translations: { ja: "やすい", en: "cheap", de: "billig", zh: "便宜的" } },
        { id: "pt2_2", category: "pitch2", translations: { ja: "あかい", en: "red", de: "rot", zh: "红色" } }
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
          devoice1: { ja: "むせいか", en: "Devoicing", de: "Stimmlosigkeit", zh: "无声化" },
          devoice2: { ja: "むせいか", en: "Devoicing", de: "Stimmlosigkeit", zh: "无声化" },
          pitch1: { ja: "アクセント（あたまだか）", en: "Pitch (atamadaka)", de: "Tonhöhe (atamadaka)", zh: "声调（头高型）" },
          pitch2: { ja: "アクセント（へいばん）", en: "Pitch (heiban)", de: "Tonhöhe (heiban)", zh: "声调（平板型）" }
        },
        items: [
          { id: "dv1_3", category: "devoice1", translations: { ja: "ひくい", en: "low", de: "niedrig", zh: "低的" } },
          { id: "dv1_4", category: "devoice1", translations: { ja: "ふたつ", en: "two (things)", de: "zwei (Dinge)", zh: "两个" } },
          { id: "dv1_5", category: "devoice1", translations: { ja: "きた", en: "north, came", de: "Norden, kam", zh: "北方，来了" } },
          { id: "dv1_6", category: "devoice1", translations: { ja: "きしゃ", en: "train (old term)", de: "Zug (alter Begriff)", zh: "火车（旧称）" } },
          { id: "dv1_7", category: "devoice1", translations: { ja: "ひかり", en: "light", de: "Licht", zh: "光" } },
          { id: "dv1_8", category: "devoice1", translations: { ja: "きせつ", en: "season", de: "Jahreszeit", zh: "季节" } },
          { id: "dv1_9", category: "devoice1", translations: { ja: "ちかてつ", en: "subway", de: "U-Bahn", zh: "地铁" } },
          { id: "dv1_10", category: "devoice1", translations: { ja: "くつした", en: "socks", de: "Socken", zh: "袜子" } },
          { id: "dv1_11", category: "devoice1", translations: { ja: "ひとつ", en: "one (thing)", de: "eins (Ding)", zh: "一个" } },
          { id: "dv1_12", category: "devoice1", translations: { ja: "ふつう", en: "usual, normal", de: "normal", zh: "普通" } },
          { id: "dv1_13", category: "devoice1", translations: { ja: "きっさてん", en: "café", de: "Café", zh: "咖啡馆" } },
          { id: "dv1_14", category: "devoice1", translations: { ja: "すこし", en: "a little", de: "ein wenig", zh: "一点" } },
          { id: "dv1_15", category: "devoice1", translations: { ja: "くしゃみ", en: "sneeze", de: "Niesen", zh: "喷嚏" } },
          { id: "dv1_16", category: "devoice1", translations: { ja: "ひしょ", en: "secretary", de: "Sekretär(in)", zh: "秘书" } },

          { id: "dv2_3", category: "devoice2", translations: { ja: "つくる", en: "to make", de: "machen", zh: "制作" } },
          { id: "dv2_4", category: "devoice2", translations: { ja: "きたない", en: "dirty", de: "schmutzig", zh: "脏" } },
          { id: "dv2_5", category: "devoice2", translations: { ja: "ふくざつ", en: "complicated", de: "kompliziert", zh: "复杂的" } },
          { id: "dv2_6", category: "devoice2", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "dv2_7", category: "devoice2", translations: { ja: "すきま", en: "gap", de: "Lücke", zh: "缝隙" } },
          { id: "dv2_8", category: "devoice2", translations: { ja: "ひっこし", en: "moving house", de: "Umzug", zh: "搬家" } },
          { id: "dv2_9", category: "devoice2", translations: { ja: "くつう", en: "pain, agony", de: "Schmerz", zh: "痛苦" } },
          { id: "dv2_10", category: "devoice2", translations: { ja: "きしつ", en: "temperament", de: "Temperament", zh: "气质" } },
          { id: "dv2_11", category: "devoice2", translations: { ja: "ふしぎ", en: "mysterious", de: "geheimnisvoll", zh: "不可思议" } },
          { id: "dv2_12", category: "devoice2", translations: { ja: "ひたい", en: "forehead", de: "Stirn", zh: "额头" } },
          { id: "dv2_13", category: "devoice2", translations: { ja: "きたく", en: "returning home", de: "Heimkehr", zh: "回家" } },
          { id: "dv2_14", category: "devoice2", translations: { ja: "つたえる", en: "to convey", de: "mitteilen", zh: "传达" } },
          { id: "dv2_15", category: "devoice2", translations: { ja: "ふくすう", en: "plural", de: "Plural", zh: "复数" } },
          { id: "dv2_16", category: "devoice2", translations: { ja: "したく", en: "preparation", de: "Vorbereitung", zh: "准备" } },

          { id: "pt1_3", category: "pitch1", translations: { ja: "おおきい", en: "big", de: "groß", zh: "大的" } },
          { id: "pt1_4", category: "pitch1", translations: { ja: "あたらしい", en: "new", de: "neu", zh: "新的" } },
          { id: "pt1_5", category: "pitch1", translations: { ja: "ながい", en: "long", de: "lang", zh: "长的" } },
          { id: "pt1_6", category: "pitch1", translations: { ja: "みじかい", en: "short", de: "kurz", zh: "短的" } },
          { id: "pt1_7", category: "pitch1", translations: { ja: "ひろい", en: "wide, spacious", de: "geräumig", zh: "宽敞的" } },
          { id: "pt1_8", category: "pitch1", translations: { ja: "せまい", en: "narrow, cramped", de: "eng", zh: "狭窄的" } },
          { id: "pt1_9", category: "pitch1", translations: { ja: "あつい", en: "hot, thick", de: "heiß, dick", zh: "热的，厚的" } },
          { id: "pt1_10", category: "pitch1", translations: { ja: "さむい", en: "cold", de: "kalt", zh: "冷的" } },
          { id: "pt1_11", category: "pitch1", translations: { ja: "あまい", en: "sweet", de: "süß", zh: "甜的" } },
          { id: "pt1_12", category: "pitch1", translations: { ja: "からい", en: "spicy", de: "scharf", zh: "辣的" } },
          { id: "pt1_13", category: "pitch1", translations: { ja: "つよい", en: "strong", de: "stark", zh: "强的" } },
          { id: "pt1_14", category: "pitch1", translations: { ja: "よわい", en: "weak", de: "schwach", zh: "弱的" } },
          { id: "pt1_15", category: "pitch1", translations: { ja: "はやい", en: "fast", de: "schnell", zh: "快的" } },
          { id: "pt1_16", category: "pitch1", translations: { ja: "おそい", en: "slow", de: "langsam", zh: "慢的" } },

          { id: "pt2_3", category: "pitch2", translations: { ja: "しろい", en: "white", de: "weiß", zh: "白色的" } },
          { id: "pt2_4", category: "pitch2", translations: { ja: "くろい", en: "black", de: "schwarz", zh: "黑色的" } },
          { id: "pt2_5", category: "pitch2", translations: { ja: "あおい", en: "blue", de: "blau", zh: "蓝色的" } },
          { id: "pt2_6", category: "pitch2", translations: { ja: "きいろい", en: "yellow", de: "gelb", zh: "黄色的" } },
          { id: "pt2_7", category: "pitch2", translations: { ja: "ちゃいろい", en: "brown", de: "braun", zh: "棕色的" } },
          { id: "pt2_8", category: "pitch2", translations: { ja: "かるい", en: "light (weight)", de: "leicht (Gewicht)", zh: "轻的" } },
          { id: "pt2_9", category: "pitch2", translations: { ja: "おもい", en: "heavy", de: "schwer", zh: "重的" } },
          { id: "pt2_10", category: "pitch2", translations: { ja: "やさしい", en: "kind, easy", de: "freundlich, einfach", zh: "亲切的，简单的" } },
          { id: "pt2_11", category: "pitch2", translations: { ja: "むずかしい", en: "difficult", de: "schwierig", zh: "困难的" } },
          { id: "pt2_12", category: "pitch2", translations: { ja: "うれしい", en: "happy", de: "froh", zh: "开心的" } },
          { id: "pt2_13", category: "pitch2", translations: { ja: "かなしい", en: "sad", de: "traurig", zh: "悲伤的" } },
          { id: "pt2_14", category: "pitch2", translations: { ja: "さびしい", en: "lonely", de: "einsam", zh: "孤独的" } },
          { id: "pt2_15", category: "pitch2", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙的" } },
          { id: "pt2_16", category: "pitch2", translations: { ja: "ねむい", en: "sleepy", de: "müde, schläfrig", zh: "困的" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-conjunctions",
        title: { ja: "れんしゅう：せつぞくし", en: "Practice: Conjunctions", de: "Übung: Konjunktionen", zh: "练习：接续词" },
        spokenIntro: {
          ja: "つぎは、せつぞくしを つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using conjunctions.",
          de: "Als Nächstes üben wir Beispielsätze mit Konjunktionen.",
          zh: "接下来，让我们练习使用接续词的例句。"
        },
        lines: [
          { id: "cj1", translations: { ja: "あめが ふりました。しかし、しあいは ちゅうしに なりませんでした。", jaKanji: "雨が降りました。しかし、試合は中止になりませんでした。", en: "It rained. However, the match wasn't canceled.", de: "Es regnete. Das Spiel wurde jedoch nicht abgesagt.", zh: "下雨了。但是比赛没有取消。" } },
          { id: "cj2", translations: { ja: "でんしゃが おくれました。だから、ちこくしました。", jaKanji: "電車が遅れました。だから、遅刻しました。", en: "The train was late. So I was late.", de: "Der Zug hatte Verspätung. Deshalb kam ich zu spät.", zh: "电车晚点了。所以我迟到了。" } },
          { id: "cj3", translations: { ja: "しごとが おわりました。それで、いえに かえりました。", jaKanji: "仕事が終わりました。それで、家に帰りました。", en: "Work ended. And so I went home.", de: "Die Arbeit war zu Ende. Also ging ich nach Hause.", zh: "工作结束了。于是我回家了。" } },
          { id: "cj4", translations: { ja: "この レストランは やすいです。それに、おいしいです。", jaKanji: "このレストランは安いです。それに、おいしいです。", en: "This restaurant is cheap. Moreover, it's delicious.", de: "Dieses Restaurant ist billig. Außerdem ist es lecker.", zh: "这家餐厅便宜。而且很好吃。" } },
          { id: "cj5", translations: { ja: "テストは むずかしかったです。しかし、ごうかくしました。", jaKanji: "テストは難しかったです。しかし、合格しました。", en: "The test was difficult. However, I passed.", de: "Die Prüfung war schwierig. Ich habe sie jedoch bestanden.", zh: "考试很难。但是我通过了。" } },
          { id: "cj6", translations: { ja: "からだの ちょうしが わるいです。だから、やすみます。", jaKanji: "体の調子が悪いです。だから、休みます。", en: "I'm not feeling well. So I'll rest.", de: "Ich fühle mich nicht gut. Deshalb ruhe ich mich aus.", zh: "身体不舒服。所以我要休息。" } },
          { id: "cj7", translations: { ja: "しゅくだいを わすれました。それで、せんせいに あやまりました。", jaKanji: "宿題を忘れました。それで、先生に謝りました。", en: "I forgot my homework. So I apologized to the teacher.", de: "Ich habe meine Hausaufgaben vergessen. Also habe ich mich beim Lehrer entschuldigt.", zh: "忘记带作业了。于是向老师道歉了。" } },
          { id: "cj8", translations: { ja: "この みちは べんりです。それに、けしきも きれいです。", jaKanji: "この道は便利です。それに、景色もきれいです。", en: "This road is convenient. Moreover, the scenery is nice too.", de: "Diese Straße ist praktisch. Außerdem ist die Aussicht auch schön.", zh: "这条路很方便。而且风景也很美。" } },
          { id: "cj9", translations: { ja: "かのじょは いそがしいです。しかし、いつも てつだって くれます。", jaKanji: "彼女は忙しいです。しかし、いつも手伝ってくれます。", en: "She's busy. However, she always helps me.", de: "Sie ist beschäftigt. Sie hilft mir jedoch immer.", zh: "她很忙。但是总是帮助我。" } },
          { id: "cj10", translations: { ja: "でんきが きえました。だから、ろうそくを つけました。", jaKanji: "電気が消えました。だから、ろうそくをつけました。", en: "The power went out. So I lit a candle.", de: "Der Strom fiel aus. Deshalb habe ich eine Kerze angezündet.", zh: "停电了。所以我点了蜡烛。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "しかし だから それで それに", en: "However, So, And So, Moreover", de: "Aber, also, und so, außerdem" },
    lines: [
      { id: "sg1", translations: { ja: "あめが ふった しかし でかけた", en: "It rained, however I went out", de: "Es regnete, aber ich ging trotzdem raus" } },
      { id: "sg2", translations: { ja: "つかれた だから やすんだ", en: "I was tired, so I rested", de: "Ich war müde, also ruhte ich mich aus" } },
      { id: "sg3", translations: { ja: "はれた それで さんぽした", en: "It cleared up, and so I took a walk", de: "Es klarte auf, und so machte ich einen Spaziergang" } },
      { id: "sg4", translations: { ja: "たのしい それに うれしい", en: "It's fun, moreover it makes me happy", de: "Es macht Spaß, außerdem macht es mich froh" } }
    ]
  }
};
