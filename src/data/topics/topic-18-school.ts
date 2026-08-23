import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 18 (School). Japanese-only lesson for
// now. Master table's German-specific grammar concept ("Separable verbs,
// introductory") doesn't exist in Japanese — substituted with permission/
// prohibition (〜てもいいですか / 〜てはいけません), a natural A1 milestone
// that fits "discussing homework, talking to a teacher about grades" well.
// Pronunciation concepts ("Sh vs Ch", "Ich-laut vs Ach-laut", both
// reinforced) are German-specific too — substituted with the genuinely
// Japanese-native し/ち distinction (a real, commonly confused pair for
// learners) and reinforced sokuon (small っ).

export const topicSchool: TopicLesson = {
  id: "topic-18-school",
  lessonNumber: 18,
  topicName: {
    ja: "がっこう",
    en: "School",
    de: "Schule",
    zh: "学校"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
    { id: "v02", category: "noun", translations: { ja: "せんせい", en: "teacher", de: "Lehrer/in", zh: "老师" } },
    { id: "v03", category: "noun", translations: { ja: "がくせい", en: "student", de: "Student/in", zh: "学生" } },
    { id: "v04", category: "noun", translations: { ja: "きょうしつ", en: "classroom", de: "Klassenzimmer", zh: "教室" } },
    { id: "v05", category: "noun", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程" } },
    { id: "v06", category: "noun", translations: { ja: "しゅくだい", en: "homework", de: "Hausaufgabe", zh: "作业" } },
    { id: "v07", category: "noun", translations: { ja: "テスト", en: "test", de: "Test", zh: "考试" } },
    { id: "v08", category: "noun", translations: { ja: "せいせき", en: "grades", de: "Noten", zh: "成绩" } },
    { id: "v09", category: "noun", translations: { ja: "きょうかしょ", en: "textbook", de: "Lehrbuch", zh: "教科书" } },
    { id: "v10", category: "noun", translations: { ja: "ノート", en: "notebook", de: "Heft", zh: "笔记本" } },
    { id: "v11", category: "noun", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔" } },
    { id: "v12", category: "noun", translations: { ja: "けしゴム", en: "eraser", de: "Radiergummi", zh: "橡皮擦" } },
    { id: "v13", category: "noun", translations: { ja: "こくばん", en: "blackboard", de: "Tafel", zh: "黑板" } },
    { id: "v14", category: "noun", translations: { ja: "としょかん", en: "library", de: "Bibliothek", zh: "图书馆" } },
    { id: "v15", category: "noun", translations: { ja: "たいいくかん", en: "gymnasium", de: "Turnhalle", zh: "体育馆" } },
    { id: "v16", category: "noun", translations: { ja: "きゅうしょく", en: "school lunch", de: "Schulessen", zh: "学校午餐" } },
    { id: "v17", category: "noun", translations: { ja: "どうきゅうせい", en: "classmate", de: "Klassenkamerad/in", zh: "同班同学" } },
    { id: "v18", category: "noun", translations: { ja: "せんぱい", en: "senior (upperclassman)", de: "Senior/in (ältere/r Mitschüler/in)", zh: "学长；学姐" } },
    { id: "v19", category: "noun", translations: { ja: "こうはい", en: "junior (underclassman)", de: "jüngere/r Mitschüler/in", zh: "学弟；学妹" } },
    { id: "v20", category: "noun", translations: { ja: "ぶかつ", en: "club activity", de: "Schulclub-Aktivität", zh: "社团活动" } },
    { id: "v21", category: "noun", translations: { ja: "にゅうがくしき", en: "entrance ceremony", de: "Einschulungsfeier", zh: "入学典礼" } },
    { id: "v22", category: "noun", translations: { ja: "そつぎょうしき", en: "graduation ceremony", de: "Abschlussfeier", zh: "毕业典礼" } },
    { id: "v23", category: "verb", translations: { ja: "べんきょうする", en: "to study", de: "lernen", zh: "学习" } },
    { id: "v24", category: "verb", translations: { ja: "おしえる", en: "to teach", de: "unterrichten", zh: "教" } },
    { id: "v25", category: "verb", translations: { ja: "しつもんする", en: "to ask a question", de: "eine Frage stellen", zh: "提问" } },
    { id: "v26", category: "verb", translations: { ja: "こたえる", en: "to answer", de: "antworten", zh: "回答" } },
    { id: "v27", category: "verb", translations: { ja: "おぼえる", en: "to memorize", de: "sich merken", zh: "记住" } },
    { id: "v28", category: "verb", translations: { ja: "わすれる", en: "to forget", de: "vergessen", zh: "忘记" } },
    { id: "v29", category: "verb", translations: { ja: "ちこくする", en: "to be late", de: "sich verspäten", zh: "迟到" } },
    { id: "v30", category: "verb", translations: { ja: "やすむ", en: "to rest, be absent", de: "sich ausruhen, fehlen", zh: "休息；缺席" } }
  ],
  dialogueA: {
    title: { ja: "クラスメートと しゅくだいの はなし", en: "Discussing Homework with a Classmate", de: "Über Hausaufgaben mit einem Klassenkameraden sprechen", zh: "和同学讨论作业" },
    lines: [
      { id: "d1", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "きょうの しゅくだい、もう おわった？", en: "Have you finished today's homework yet?", de: "Hast du die Hausaufgaben von heute schon fertig?", zh: "今天的作业写完了吗？" } },
      { id: "d2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ううん、まだだよ。むずかしくて わからないんだ。", en: "No, not yet. It's hard and I don't understand it.", de: "Nein, noch nicht. Sie ist schwer und ich verstehe sie nicht.", zh: "还没呢。很难，我看不懂。" } },
      { id: "d3", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "どの もんだいが わからないの？", en: "Which question don't you understand?", de: "Welche Aufgabe verstehst du nicht?", zh: "哪道题看不懂？" } },
      { id: "d4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "この もんだい。せんせいに しつもんしても いいかな？", en: "This one. Would it be okay to ask the teacher?", de: "Diese hier. Wäre es okay, den Lehrer zu fragen?", zh: "这道题。可以问老师吗？" } },
      { id: "d5", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "うん、いいと おもうよ。でも きょうは もう かえったよ。", en: "Yeah, I think that's fine. But the teacher already went home today.", de: "Ja, ich denke, das ist in Ordnung. Aber der Lehrer ist heute schon nach Hause gegangen.", zh: "嗯，我觉得可以。不过老师今天已经回去了。" } },
      { id: "d6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じゃあ、いっしょに かんがえてくれる？", en: "Then can you think about it with me?", de: "Kannst du dann mit mir darüber nachdenken?", zh: "那能和我一起想想吗？" } },
      { id: "d7", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "いいよ。としょかんで べんきょうする？", en: "Sure. Should we study at the library?", de: "Klar. Sollen wir in der Bibliothek lernen?", zh: "好啊。要不要在图书馆学习？" } },
      { id: "d8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "うん、としょかんで はなしても いいの？", en: "Okay, is it fine to talk in the library?", de: "Okay, ist es in Ordnung, in der Bibliothek zu sprechen?", zh: "好。在图书馆说话可以吗？" } },
      { id: "d9", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "しずかに はなせば いいよ。", en: "It's fine if we talk quietly.", de: "Es ist okay, wenn wir leise sprechen.", zh: "小声说话就可以。" } },
      { id: "d10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "きょうかしょを もってきて。わたしは ノートを もっていくね。", en: "Bring your textbook. I'll bring my notebook.", de: "Bring dein Lehrbuch mit. Ich bringe mein Heft mit.", zh: "带上教科书。我带笔记本去。" } },
      { id: "d11", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "えんぴつも わすれないでね。", en: "Don't forget your pencil either.", de: "Vergiss auch nicht deinen Bleistift.", zh: "也别忘了铅笔。" } },
      { id: "d12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だいじょうぶ、もっているよ。ありがとう。", en: "It's okay, I have it. Thank you.", de: "Alles gut, ich habe ihn. Danke.", zh: "没问题，我带着呢。谢谢。" } },
      { id: "d13", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "テストの まえだから、いっしょに がんばろうね。", en: "Since the test is coming up, let's do our best together.", de: "Da die Prüfung bevorsteht, lass uns zusammen unser Bestes geben.", zh: "考试快到了，我们一起加油吧。" } },
      { id: "d14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "うん、がんばろう！", en: "Yeah, let's do it!", de: "Ja, machen wir das!", zh: "嗯，加油！" } }
    ]
  },
  dialogueB: {
    title: { ja: "せんせいと せいせきの はなし", en: "Talking to a Teacher About Grades", de: "Mit dem Lehrer über die Noten sprechen", zh: "和老师谈成绩" },
    lines: [
      { id: "e1", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "せんせい、しつもんしても いいですか？", en: "Teacher, may I ask a question?", de: "Herr Lehrer, darf ich eine Frage stellen?", zh: "老师，我可以问个问题吗？" } },
      { id: "e2", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "はい、どうぞ。", en: "Yes, go ahead.", de: "Ja, bitte.", zh: "好的，请说。" } },
      { id: "e3", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "こんかいの テストの せいせきは どうでしたか？", en: "How were my grades on this test?", de: "Wie waren meine Noten bei dieser Prüfung?", zh: "这次考试的成绩怎么样？" } },
      { id: "e4", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "まえより よく なりましたよ。がんばりましたね。", en: "They've improved compared to before. You worked hard.", de: "Sie haben sich im Vergleich zu vorher verbessert. Sie haben sich angestrengt.", zh: "比之前有进步了。你很努力呢。" } },
      { id: "e5", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "ありがとうございます！でも まだ わからない ところが あります。", en: "Thank you! But there are still parts I don't understand.", de: "Danke! Aber es gibt noch Teile, die ich nicht verstehe.", zh: "谢谢老师！但是还有不懂的地方。" } },
      { id: "e6", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "どの ぶぶんが むずかしいですか？", en: "Which part is difficult?", de: "Welcher Teil ist schwierig?", zh: "哪部分比较难？" } },
      { id: "e7", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "この もんだいです。もういちど せつめいしても らえますか？", en: "This question. Could you explain it one more time?", de: "Diese Aufgabe. Könnten Sie sie noch einmal erklären?", zh: "这道题。能再讲解一次吗？" } },
      { id: "e8", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "もちろんです。じゅぎょうの あとで せつめいしましょう。", en: "Of course. Let's go over it after class.", de: "Natürlich. Lassen Sie uns das nach dem Unterricht durchgehen.", zh: "当然可以。下课后我给你讲解吧。" } },
      { id: "e9", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "としょかんで まっていても いいですか？", en: "Is it okay if I wait in the library?", de: "Ist es in Ordnung, wenn ich in der Bibliothek warte?", zh: "我可以在图书馆等吗？" } },
      { id: "e10", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "はい、だいじょうぶですよ。", en: "Yes, that's fine.", de: "Ja, das ist in Ordnung.", zh: "可以的，没问题。" } },
      { id: "e11", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "しゅくだいを わすれても だいじょうぶですか？", en: "Is it okay if I forget my homework?", de: "Ist es in Ordnung, wenn ich meine Hausaufgaben vergesse?", zh: "忘记带作业没关系吗？" } },
      { id: "e12", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "だめですよ。あしたは わすれないで くださいね。", en: "No, that's not okay. Please don't forget it tomorrow.", de: "Nein, das geht nicht. Bitte vergessen Sie sie morgen nicht.", zh: "不行哦。明天请不要忘记带来。" } },
      { id: "e13", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "わかりました。ちこくもしないように します。", en: "Understood. I'll also try not to be late.", de: "Verstanden. Ich werde auch versuchen, nicht zu spät zu kommen.", zh: "明白了。我也会尽量不迟到。" } },
      { id: "e14", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "いいですね。これからも がんばってください。", en: "Good. Keep doing your best from now on too.", de: "Gut. Geben Sie auch weiterhin Ihr Bestes.", zh: "很好。以后也要继续努力哦。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "きょか と きんし：〜てもいいですか／〜てはいけません", en: "Permission and Prohibition", de: "Erlaubnis und Verbot", zh: "许可与禁止" },
      explanation: {
        ja: "〜てもいいですか は、なにかを して いいか きょかを もとめる ときに つかいます：しつもんしても いいですか？（しつもんして いいですか、と きく）。〜てはいけません は、それを しては ならない ことを つたえます：としょかんで はなしては いけません。",
        en: "〜てもいいですか is used to ask for permission to do something: しつもんしても いいですか？ (May I ask a question?). 〜てはいけません states that something must not be done: としょかんで はなしては いけません (You must not talk in the library).",
        de: "〜てもいいですか wird benutzt, um um Erlaubnis zu bitten, etwas zu tun: しつもんしても いいですか？ (Darf ich eine Frage stellen?). 〜てはいけません drückt aus, dass etwas nicht getan werden darf: としょかんで はなしては いけません (Man darf in der Bibliothek nicht sprechen).",
        zh: "〜てもいいですか用于请求做某事的许可：しつもんしても いいですか？（我可以问个问题吗？）。〜てはいけません表示不可以做某事：としょかんで はなしては いけません（不可以在图书馆说话）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "しつもんしても いいですか？", en: "May I ask a question? (asking permission)", de: "Darf ich eine Frage stellen? (um Erlaubnis bitten)", zh: "我可以问个问题吗？（请求许可）" } },
        { id: "g2", translations: { ja: "はい、いいですよ。", en: "Yes, that's fine. (granting permission)", de: "Ja, das ist in Ordnung. (Erlaubnis geben)", zh: "好的，可以。（给予许可）" } },
        { id: "g3", translations: { ja: "きょうしつで たべては いけません。", en: "You must not eat in the classroom. (prohibition)", de: "Man darf im Klassenzimmer nicht essen. (Verbot)", zh: "不可以在教室里吃东西。（禁止）" } },
        { id: "g4", translations: { ja: "ここに すわっても いいですか？", en: "May I sit here? (asking permission)", de: "Darf ich mich hier hinsetzen? (um Erlaubnis bitten)", zh: "我可以坐在这里吗？（请求许可）" } },
        { id: "g5", translations: { ja: "じゅぎょうちゅうに ねては いけません。", en: "You must not sleep during class. (prohibition)", de: "Man darf während des Unterrichts nicht schlafen. (Verbot)", zh: "上课时不可以睡觉。（禁止）" } },
        { id: "g6", translations: { ja: "としょかんで はなしては いけません。", en: "You must not talk in the library. (prohibition)", de: "Man darf in der Bibliothek nicht sprechen. (Verbot)", zh: "不可以在图书馆说话。（禁止）" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        shi_chi: { ja: "し と ち（ふくしゅう）", en: "し vs ち (reinforced)", de: "し und ち (vertieft)", zh: "し与ち（巩固）" },
        sokuon: { ja: "そくおん「っ」（ふくしゅう）", en: "Sokuon っ (reinforced)", de: "Sokuon っ (vertieft)", zh: "促音っ（巩固）" }
      },
      items: [
        { id: "shi1", category: "shi_chi", translations: { ja: "しつもんする", en: "to ask a question (し)", de: "eine Frage stellen (し)", zh: "提问（し）" } },
        { id: "shi2", category: "shi_chi", translations: { ja: "せいせき", en: "grades (せい, contrast with し)", de: "Noten (せい, Kontrast zu し)", zh: "成绩（せい，与し对比）" } },
        { id: "chi1", category: "shi_chi", translations: { ja: "ちこくする", en: "to be late (ち)", de: "sich verspäten (ち)", zh: "迟到（ち）" } },
        { id: "chi2", category: "shi_chi", translations: { ja: "きょうかしょ", en: "textbook (contrast word, no ち — for comparison)", de: "Lehrbuch (Vergleichswort, kein ち)", zh: "教科书（对比词，无ち）" } },
        { id: "so1", category: "sokuon", translations: { ja: "がっこう", en: "school (っ before k)", de: "Schule (っ vor k)", zh: "学校（っ在k前）" } },
        { id: "so2", category: "sokuon", translations: { ja: "しゅくだい", en: "homework (no っ — reference word)", de: "Hausaufgabe (kein っ — Referenzwort)", zh: "作业（无っ——参考词）" } },
        { id: "so3", category: "sokuon", translations: { ja: "けしゴム", en: "eraser (っ-adjacent cluster, review)", de: "Radiergummi (っ-ähnliche Verbindung, Wiederholung)", zh: "橡皮擦（类似っ的连缀，复习）" } },
        { id: "so4", category: "sokuon", translations: { ja: "にゅうがくしき", en: "entrance ceremony (long word, sokuon-free contrast)", de: "Einschulungsfeier (langes Wort, ohne っ zum Vergleich)", zh: "入学典礼（长词，无促音对比）" } }
      ]
    }
  }
};
