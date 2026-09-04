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
  id: "topic-a1-18-school",
  lessonNumber: 18,
  topicName: {
    ja: "がっこう",
    en: "School",
    de: "Schule",
    zh: "学校"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校", fr: "école" } },
    { id: "v02", category: "noun", translations: { ja: "せんせい", en: "teacher", de: "Lehrer/in", zh: "老师", fr: "professeur, enseignant(e)" } },
    { id: "v03", category: "noun", translations: { ja: "がくせい", en: "student", de: "Student/in", zh: "学生", fr: "élève, étudiant(e)" } },
    { id: "v04", category: "noun", translations: { ja: "きょうしつ", en: "classroom", de: "Klassenzimmer", zh: "教室", fr: "salle de classe" } },
    { id: "v05", category: "noun", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程", fr: "cours" } },
    { id: "v06", category: "noun", translations: { ja: "しゅくだい", en: "homework", de: "Hausaufgabe", zh: "作业", fr: "devoirs" } },
    { id: "v07", category: "noun", translations: { ja: "テスト", en: "test", de: "Test", zh: "考试", fr: "examen, contrôle" } },
    { id: "v08", category: "noun", translations: { ja: "せいせき", en: "grades", de: "Noten", zh: "成绩", fr: "notes" } },
    { id: "v09", category: "noun", translations: { ja: "きょうかしょ", en: "textbook", de: "Lehrbuch", zh: "教科书", fr: "manuel" } },
    { id: "v10", category: "noun", translations: { ja: "ノート", en: "notebook", de: "Heft", zh: "笔记本", fr: "cahier" } },
    { id: "v11", category: "noun", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔", fr: "crayon" } },
    { id: "v12", category: "noun", translations: { ja: "けしゴム", en: "eraser", de: "Radiergummi", zh: "橡皮擦", fr: "gomme" } },
    { id: "v13", category: "noun", translations: { ja: "こくばん", en: "blackboard", de: "Tafel", zh: "黑板", fr: "tableau" } },
    { id: "v14", category: "noun", translations: { ja: "としょかん", en: "library", de: "Bibliothek", zh: "图书馆", fr: "bibliothèque" } },
    { id: "v15", category: "noun", translations: { ja: "たいいくかん", en: "gymnasium", de: "Turnhalle", zh: "体育馆", fr: "gymnase" } },
    { id: "v16", category: "noun", translations: { ja: "きゅうしょく", en: "school lunch", de: "Schulessen", zh: "学校午餐", fr: "cantine, déjeuner scolaire" } },
    { id: "v17", category: "noun", translations: { ja: "どうきゅうせい", en: "classmate", de: "Klassenkamerad/in", zh: "同班同学", fr: "camarade de classe" } },
    { id: "v18", category: "noun", translations: { ja: "せんぱい", en: "senior (upperclassman)", de: "Senior/in (ältere/r Mitschüler/in)", zh: "学长；学姐", fr: "aîné(e) (à l'école)" } },
    { id: "v19", category: "noun", translations: { ja: "こうはい", en: "junior (underclassman)", de: "jüngere/r Mitschüler/in", zh: "学弟；学妹", fr: "cadet(te) (à l'école)" } },
    { id: "v20", category: "noun", translations: { ja: "ぶかつ", en: "club activity", de: "Schulclub-Aktivität", zh: "社团活动", fr: "activité de club" } },
    { id: "v21", category: "noun", translations: { ja: "にゅうがくしき", en: "entrance ceremony", de: "Einschulungsfeier", zh: "入学典礼", fr: "cérémonie de rentrée" } },
    { id: "v22", category: "noun", translations: { ja: "そつぎょうしき", en: "graduation ceremony", de: "Abschlussfeier", zh: "毕业典礼", fr: "cérémonie de remise des diplômes" } },
    { id: "v23", category: "verb", translations: { ja: "べんきょうする", en: "to study", de: "lernen", zh: "学习", fr: "étudier" } },
    { id: "v24", category: "verb", translations: { ja: "おしえる", en: "to teach", de: "unterrichten", zh: "教", fr: "enseigner" } },
    { id: "v25", category: "verb", translations: { ja: "しつもんする", en: "to ask a question", de: "eine Frage stellen", zh: "提问", fr: "poser une question" } },
    { id: "v26", category: "verb", translations: { ja: "こたえる", en: "to answer", de: "antworten", zh: "回答", fr: "répondre" } },
    { id: "v27", category: "verb", translations: { ja: "おぼえる", en: "to memorize", de: "sich merken", zh: "记住", fr: "mémoriser" } },
    { id: "v28", category: "verb", translations: { ja: "わすれる", en: "to forget", de: "vergessen", zh: "忘记", fr: "oublier" } },
    { id: "v29", category: "verb", translations: { ja: "ちこくする", en: "to be late", de: "sich verspäten", zh: "迟到", fr: "être en retard" } },
    { id: "v30", category: "verb", translations: { ja: "やすむ", en: "to rest, be absent", de: "sich ausruhen, fehlen", zh: "休息；缺席", fr: "se reposer, être absent(e)" } }
  ],
  dialogueA: {
    title: { ja: "クラスメートと しゅくだいの はなし", en: "Discussing Homework with a Classmate", de: "Über Hausaufgaben mit einem Klassenkameraden sprechen", zh: "和同学讨论作业", fr: "Discuter des devoirs avec un(e) camarade de classe" },
    lines: [
      { id: "d1", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "きょうの しゅくだい、もう おわった？", en: "Have you finished today's homework yet?", de: "Hast du die Hausaufgaben von heute schon fertig?", zh: "今天的作业写完了吗？", fr: "Tu as déjà fini les devoirs d'aujourd'hui ?" } },
      { id: "d2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ううん、まだだよ。むずかしくて わからないんだ。", en: "No, not yet. It's hard and I don't understand it.", de: "Nein, noch nicht. Sie ist schwer und ich verstehe sie nicht.", zh: "还没呢。很难，我看不懂。", fr: "Non, pas encore. C'est difficile et je ne comprends pas." } },
      { id: "d3", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "どの もんだいが わからないの？", en: "Which question don't you understand?", de: "Welche Aufgabe verstehst du nicht?", zh: "哪道题看不懂？", fr: "Quelle question tu ne comprends pas ?" } },
      { id: "d4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "この もんだい。せんせいに しつもんしても いいかな？", en: "This one. Would it be okay to ask the teacher?", de: "Diese hier. Wäre es okay, den Lehrer zu fragen?", zh: "这道题。可以问老师吗？", fr: "Celle-ci. Ce serait bien de demander au professeur ?" } },
      { id: "d5", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "うん、いいと おもうよ。でも きょうは もう かえったよ。", en: "Yeah, I think that's fine. But the teacher already went home today.", de: "Ja, ich denke, das ist in Ordnung. Aber der Lehrer ist heute schon nach Hause gegangen.", zh: "嗯，我觉得可以。不过老师今天已经回去了。", fr: "Oui, je pense que c'est bien. Mais le professeur est déjà rentré aujourd'hui." } },
      { id: "d6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じゃあ、いっしょに かんがえてくれる？", en: "Then can you think about it with me?", de: "Kannst du dann mit mir darüber nachdenken?", zh: "那能和我一起想想吗？", fr: "Alors tu peux réfléchir avec moi ?" } },
      { id: "d7", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "いいよ。としょかんで べんきょうする？", en: "Sure. Should we study at the library?", de: "Klar. Sollen wir in der Bibliothek lernen?", zh: "好啊。要不要在图书馆学习？", fr: "Bien sûr. On étudie à la bibliothèque ?" } },
      { id: "d8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "うん、としょかんで はなしても いいの？", en: "Okay, is it fine to talk in the library?", de: "Okay, ist es in Ordnung, in der Bibliothek zu sprechen?", zh: "好。在图书馆说话可以吗？", fr: "D'accord, c'est bien de parler à la bibliothèque ?" } },
      { id: "d9", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "しずかに はなせば いいよ。", en: "It's fine if we talk quietly.", de: "Es ist okay, wenn wir leise sprechen.", zh: "小声说话就可以。", fr: "C'est bien si on parle doucement." } },
      { id: "d10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "きょうかしょを もってきて。わたしは ノートを もっていくね。", en: "Bring your textbook. I'll bring my notebook.", de: "Bring dein Lehrbuch mit. Ich bringe mein Heft mit.", zh: "带上教科书。我带笔记本去。", fr: "Apporte ton manuel. Moi, j'apporte mon cahier." } },
      { id: "d11", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "えんぴつも わすれないでね。", en: "Don't forget your pencil either.", de: "Vergiss auch nicht deinen Bleistift.", zh: "也别忘了铅笔。", fr: "N'oublie pas ton crayon non plus." } },
      { id: "d12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だいじょうぶ、もっているよ。ありがとう。", en: "It's okay, I have it. Thank you.", de: "Alles gut, ich habe ihn. Danke.", zh: "没问题，我带着呢。谢谢。", fr: "Ça va, je l'ai. Merci." } },
      { id: "d13", speaker: { ja: "ゆき", en: "Yuki", de: "Yuki", zh: "雪" }, translations: { ja: "テストの まえだから、いっしょに がんばろうね。", en: "Since the test is coming up, let's do our best together.", de: "Da die Prüfung bevorsteht, lass uns zusammen unser Bestes geben.", zh: "考试快到了，我们一起加油吧。", fr: "Comme l'examen approche, faisons de notre mieux ensemble." } },
      { id: "d14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "うん、がんばろう！", en: "Yeah, let's do it!", de: "Ja, machen wir das!", zh: "嗯，加油！", fr: "Oui, allons-y !" } }
    ]
  },
  dialogueB: {
    title: { ja: "せんせいと せいせきの はなし", en: "Talking to a Teacher About Grades", de: "Mit dem Lehrer über die Noten sprechen", zh: "和老师谈成绩", fr: "Parler des notes avec le professeur" },
    lines: [
      { id: "e1", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "せんせい、しつもんしても いいですか？", en: "Teacher, may I ask a question?", de: "Herr Lehrer, darf ich eine Frage stellen?", zh: "老师，我可以问个问题吗？", fr: "Professeur, est-ce que je peux poser une question ?" } },
      { id: "e2", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "はい、どうぞ。", en: "Yes, go ahead.", de: "Ja, bitte.", zh: "好的，请说。", fr: "Oui, allez-y." } },
      { id: "e3", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "こんかいの テストの せいせきは どうでしたか？", en: "How were my grades on this test?", de: "Wie waren meine Noten bei dieser Prüfung?", zh: "这次考试的成绩怎么样？", fr: "Comment étaient mes notes à cet examen ?" } },
      { id: "e4", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "まえより よく なりましたよ。がんばりましたね。", en: "They've improved compared to before. You worked hard.", de: "Sie haben sich im Vergleich zu vorher verbessert. Sie haben sich angestrengt.", zh: "比之前有进步了。你很努力呢。", fr: "Elles se sont améliorées par rapport à avant. Vous avez travaillé dur." } },
      { id: "e5", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "ありがとうございます！でも まだ わからない ところが あります。", en: "Thank you! But there are still parts I don't understand.", de: "Danke! Aber es gibt noch Teile, die ich nicht verstehe.", zh: "谢谢老师！但是还有不懂的地方。", fr: "Merci ! Mais il y a encore des parties que je ne comprends pas." } },
      { id: "e6", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "どの ぶぶんが むずかしいですか？", en: "Which part is difficult?", de: "Welcher Teil ist schwierig?", zh: "哪部分比较难？", fr: "Quelle partie est difficile ?" } },
      { id: "e7", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "この もんだいです。もういちど せつめいしても らえますか？", en: "This question. Could you explain it one more time?", de: "Diese Aufgabe. Könnten Sie sie noch einmal erklären?", zh: "这道题。能再讲解一次吗？", fr: "Cette question. Pourriez-vous l'expliquer encore une fois ?" } },
      { id: "e8", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "もちろんです。じゅぎょうの あとで せつめいしましょう。", en: "Of course. Let's go over it after class.", de: "Natürlich. Lassen Sie uns das nach dem Unterricht durchgehen.", zh: "当然可以。下课后我给你讲解吧。", fr: "Bien sûr. Revoyons-la après le cours." } },
      { id: "e9", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "としょかんで まっていても いいですか？", en: "Is it okay if I wait in the library?", de: "Ist es in Ordnung, wenn ich in der Bibliothek warte?", zh: "我可以在图书馆等吗？", fr: "Est-ce que je peux attendre à la bibliothèque ?" } },
      { id: "e10", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "はい、だいじょうぶですよ。", en: "Yes, that's fine.", de: "Ja, das ist in Ordnung.", zh: "可以的，没问题。", fr: "Oui, c'est bien." } },
      { id: "e11", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "しゅくだいを わすれても だいじょうぶですか？", en: "Is it okay if I forget my homework?", de: "Ist es in Ordnung, wenn ich meine Hausaufgaben vergesse?", zh: "忘记带作业没关系吗？", fr: "Est-ce que c'est grave si j'oublie mes devoirs ?" } },
      { id: "e12", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "だめですよ。あしたは わすれないで くださいね。", en: "No, that's not okay. Please don't forget it tomorrow.", de: "Nein, das geht nicht. Bitte vergessen Sie sie morgen nicht.", zh: "不行哦。明天请不要忘记带来。", fr: "Non, ce n'est pas bien. N'oubliez pas demain, s'il vous plaît." } },
      { id: "e13", speaker: { ja: "がくせい", en: "Student", de: "Schüler/in", zh: "学生" }, translations: { ja: "わかりました。ちこくもしないように します。", en: "Understood. I'll also try not to be late.", de: "Verstanden. Ich werde auch versuchen, nicht zu spät zu kommen.", zh: "明白了。我也会尽量不迟到。", fr: "Compris. J'essaierai aussi de ne pas être en retard." } },
      { id: "e14", speaker: { ja: "せんせい", en: "Teacher", de: "Lehrer", zh: "老师" }, translations: { ja: "いいですね。これからも がんばってください。", en: "Good. Keep doing your best from now on too.", de: "Gut. Geben Sie auch weiterhin Ihr Bestes.", zh: "很好。以后也要继续努力哦。", fr: "Bien. Continuez à faire de votre mieux à partir de maintenant aussi." } }
    ]
  },
  song: {
    // Per docs/a1-master-lesson-table-v05.md's assignment for row 18.
    // Confirmed public domain (Good Morning to You Productions Corp. v.
    // Warner/Chappell Music, 2015-2016).
    title: { ja: "ハッピーバースデー トゥー ユー", en: "Happy Birthday to You", de: "Zum Geburtstag viel Glück", fr: "Joyeux anniversaire" },
    lines: [
      { id: "sg1", translations: { ja: "ハッピー バースデー トゥー ユー", en: "Happy birthday to you", de: "Zum Geburtstag viel Glück", fr: "Joyeux anniversaire" } },
      { id: "sg2", translations: { ja: "ハッピー バースデー トゥー ユー", en: "Happy birthday to you", de: "Zum Geburtstag viel Glück", fr: "Joyeux anniversaire" } },
      { id: "sg3", translations: { ja: "ハッピー バースデー ディア［なまえ］", en: "Happy birthday dear [name]", de: "Zum Geburtstag liebe/r ［なまえ］", fr: "Joyeux anniversaire [nom]" } },
      { id: "sg4", translations: { ja: "ハッピー バースデー トゥー ユー", en: "Happy birthday to you", de: "Zum Geburtstag viel Glück", fr: "Joyeux anniversaire" } }
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
    },
    de: {
      title: { de: "Trennbare Verben: eine Einführung", en: "Separable Verbs: An Introduction", ja: "ぶんりどうし：にゅうもん", zh: "可分动词：入门" },
      explanation: {
        de: "Viele deutsche Verben haben ein trennbares Präfix (auf-, an-, mit-, ab-, vor- usw.). Im Präsens und Imperativ wandert das Präfix ans Satzende: aufpassen → Ich passe im Unterricht auf. Im Infinitiv bleibt das Verb zusammen: Ich möchte gut aufpassen. Der Wortakzent liegt immer auf dem Präfix.",
        en: "Many German verbs have a separable prefix (auf-, an-, mit-, ab-, vor-, etc.). In the present tense and imperative, the prefix moves to the end of the sentence: aufpassen (to pay attention) → Ich passe im Unterricht auf. In the infinitive, the verb stays together: Ich möchte gut aufpassen. The word stress always falls on the prefix.",
        ja: "おおくの ドイツごの どうしには ぶんりする せっとうじ（auf-、an-、mit-、ab-、vor- など）が あります。げんざいけいや めいれいけいでは、せっとうじが ぶんの さいごに いどうします：aufpassen → Ich passe im Unterricht auf。ふていしでは どうしは いっしょの ままです：Ich möchte gut aufpassen。ごの アクセントは いつも せっとうじに あります。",
        zh: "许多德语动词带有可分离的前缀（auf-、an-、mit-、ab-、vor-等）。在现在时和命令式中，前缀会移到句末：aufpassen（专心）→ Ich passe im Unterricht auf。在不定式中，动词保持在一起：Ich möchte gut aufpassen。词重音总是落在前缀上。"
      },
      chunks: [
        { id: "g1", translations: { de: "Ich passe im Unterricht auf.", en: "I pay attention in class. (aufpassen, separated)", ja: "じゅぎょうちゅうに きを つけます。（aufpassen、ぶんりした かたち）", zh: "我上课时专心听讲。（aufpassen，分离形式）" } },
        { id: "g2", translations: { de: "Der Unterricht fängt um acht Uhr an.", en: "Class starts at eight o'clock. (anfangen, separated)", ja: "じゅぎょうは はちじに はじまります。（anfangen、ぶんりした かたち）", zh: "课程八点开始。（anfangen，分离形式）" } },
        { id: "g3", translations: { de: "Wir hören um vier Uhr auf.", en: "We finish at four o'clock. (aufhören, separated)", ja: "よじに おわります。（aufhören、ぶんりした かたち）", zh: "我们四点结束。（aufhören，分离形式）" } },
        { id: "g4", translations: { de: "Bring dein Buch mit!", en: "Bring your book! (mitbringen, imperative)", ja: "ほんを もってきて！（mitbringen、めいれいけい）", zh: "把书带来！（mitbringen，命令式）" } },
        { id: "g5", translations: { de: "Ich gebe die Hausaufgabe ab.", en: "I hand in the homework. (abgeben, separated)", ja: "しゅくだいを だします。（abgeben、ぶんりした かたち）", zh: "我交作业。（abgeben，分离形式）" } },
        { id: "g6", translations: { de: "Ich möchte mich gut vorbereiten.", en: "I want to prepare well. (vorbereiten, infinitive stays together)", ja: "よく じゅんびしたいです。（vorbereiten、ふていしは いっしょ）", zh: "我想好好准备。（vorbereiten，不定式保持完整）" } }
      ]
    },
    // French permission/prohibition maps directly onto the same
    // functional slot as Japanese's 〜てもいいですか／〜てはいけません
    // here — "pouvoir" (can/may) for asking or granting permission,
    // and "il ne faut pas" + infinitive for prohibition.
    fr: {
      title: { fr: "Pouvoir et il ne faut pas : permission et interdiction", en: "Pouvoir and Il Ne Faut Pas: Permission and Prohibition", de: "Pouvoir und il ne faut pas: Erlaubnis und Verbot", ja: "pouvoir と il ne faut pas：きょかと きんし", zh: "pouvoir与il ne faut pas：许可与禁止" },
      explanation: {
        fr: "« Pouvoir » (je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent) sert à demander ou donner la permission de faire quelque chose : Est-ce que je peux poser une question ? « Il ne faut pas » + infinitif exprime une interdiction — quelque chose qu'on ne doit pas faire : Il ne faut pas parler dans la bibliothèque.",
        en: "\"Pouvoir\" (can/may: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent) is used to ask for or give permission to do something: Est-ce que je peux poser une question? (May I ask a question?) \"Il ne faut pas\" + infinitive expresses a prohibition — something that must not be done: Il ne faut pas parler dans la bibliothèque (You must not talk in the library).",
        de: "„Pouvoir\" (können/dürfen: je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent) wird benutzt, um um Erlaubnis zu bitten oder sie zu geben: Est-ce que je peux poser une question? (Darf ich eine Frage stellen?) „Il ne faut pas\" + Infinitiv drückt ein Verbot aus — etwas, das nicht getan werden darf: Il ne faut pas parler dans la bibliothèque (Man darf in der Bibliothek nicht sprechen).",
        ja: "「pouvoir」（〜できる／〜してもいい：je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent）は、なにかを する きょかを もとめたり あたえたり する ときに つかいます：Est-ce que je peux poser une question?（しつもんしても いいですか？）。「il ne faut pas」＋ふていしは きんしを あらわします——しては ならない こと：Il ne faut pas parler dans la bibliothèque（としょかんで はなしては いけません）。",
        zh: "「pouvoir」（能／可以：je peux, tu peux, il/elle peut, nous pouvons, vous pouvez, ils/elles peuvent）用于请求或给予做某事的许可：Est-ce que je peux poser une question?（我可以问个问题吗？）。「il ne faut pas」+不定式表示禁止——不可以做的事：Il ne faut pas parler dans la bibliothèque（不可以在图书馆说话）。"
      },
      chunks: [
        { id: "g1", translations: { fr: "Est-ce que je peux poser une question ?", en: "May I ask a question? (asking permission)", de: "Darf ich eine Frage stellen? (um Erlaubnis bitten)", ja: "しつもんしても いいですか？（きょかを もとめる）", zh: "我可以问个问题吗？（请求许可）" } },
        { id: "g2", translations: { fr: "Oui, vous pouvez.", en: "Yes, you may. (granting permission)", de: "Ja, das dürfen Sie. (Erlaubnis geben)", ja: "はい、いいですよ。（きょかを あたえる）", zh: "好的，可以。（给予许可）" } },
        { id: "g3", translations: { fr: "Il ne faut pas manger dans la salle de classe.", en: "You must not eat in the classroom. (prohibition)", de: "Man darf im Klassenzimmer nicht essen. (Verbot)", ja: "きょうしつで たべては いけません。（きんし）", zh: "不可以在教室里吃东西。（禁止）" } },
        { id: "g4", translations: { fr: "Est-ce que je peux m'asseoir ici ?", en: "May I sit here? (asking permission)", de: "Darf ich mich hier hinsetzen? (um Erlaubnis bitten)", ja: "ここに すわっても いいですか？（きょかを もとめる）", zh: "我可以坐在这里吗？（请求许可）" } },
        { id: "g5", translations: { fr: "Il ne faut pas dormir pendant le cours.", en: "You must not sleep during class. (prohibition)", de: "Man darf während des Unterrichts nicht schlafen. (Verbot)", ja: "じゅぎょうちゅうに ねては いけません。（きんし）", zh: "上课时不可以睡觉。（禁止）" } },
        { id: "g6", translations: { fr: "Il ne faut pas parler dans la bibliothèque.", en: "You must not talk in the library. (prohibition)", de: "Man darf in der Bibliothek nicht sprechen. (Verbot)", ja: "としょかんで はなしては いけません。（きんし）", zh: "不可以在图书馆说话。（禁止）" } }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-trennbar",
        title: { de: "Übung: Trennbare Verben", en: "Practice: Separable Verbs", ja: "れんしゅう：ぶんりどうし", zh: "练习：可分动词" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit trennbaren Verben.",
          en: "Next, let's practice example sentences using separable verbs.",
          ja: "つぎは、ぶんりどうしを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用可分动词的例句。"
        },
        lines: [
          { id: "tv1", translations: { de: "Ich passe gut auf.", en: "I pay close attention.", ja: "しっかり きを つけます。", zh: "我很专心。" } },
          { id: "tv2", translations: { de: "Die Prüfung fängt um neun Uhr an.", en: "The exam starts at nine o'clock.", ja: "テストは くじに はじまります。", zh: "考试九点开始。" } },
          { id: "tv3", translations: { de: "Der Lehrer hört mit dem Unterricht auf.", en: "The teacher stops the class.", ja: "せんせいは じゅぎょうを おわります。", zh: "老师结束了课程。" } },
          { id: "tv4", translations: { de: "Bring dein Heft mit!", en: "Bring your notebook!", ja: "ノートを もってきて！", zh: "把笔记本带来！" } },
          { id: "tv5", translations: { de: "Ich gebe den Test ab.", en: "I hand in the test.", ja: "テストを だします。", zh: "我交考卷。" } },
          { id: "tv6", translations: { de: "Wir bereiten uns auf die Prüfung vor.", en: "We prepare for the exam.", ja: "テストの じゅんびを します。", zh: "我们为考试做准备。" } },
          { id: "tv7", translations: { de: "Der Schüler steht auf und antwortet.", en: "The student stands up and answers. (aufstehen)", ja: "がくせいは たちあがって こたえます。（aufstehen）", zh: "学生站起来回答。（aufstehen）" } },
          { id: "tv8", translations: { de: "Ich schreibe die Antwort auf.", en: "I write down the answer. (aufschreiben)", ja: "こたえを かきます。（aufschreiben）", zh: "我写下答案。（aufschreiben）" } },
          { id: "tv9", translations: { de: "Sie macht das Buch zu.", en: "She closes the book. (zumachen)", ja: "かのじょは ほんを とじます。（zumachen）", zh: "她合上书。（zumachen）" } },
          { id: "tv10", translations: { de: "Wir machen die Tür auf.", en: "We open the door. (aufmachen)", ja: "わたしたちは ドアを あけます。（aufmachen）", zh: "我们打开门。（aufmachen）" } }
        ]
      }
    ],
    fr: [
      {
        id: "grammar-drill-pouvoir",
        title: { fr: "Exercice : pouvoir / il ne faut pas", en: "Practice: Pouvoir / Il Ne Faut Pas", de: "Übung: Pouvoir / il ne faut pas", ja: "れんしゅう：pouvoir／il ne faut pas", zh: "练习：pouvoir／il ne faut pas" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases avec pouvoir et il ne faut pas.",
          en: "Next, let's practice example sentences using pouvoir and il ne faut pas.",
          de: "Als Nächstes üben wir Beispielsätze mit pouvoir und il ne faut pas.",
          ja: "つぎは、pouvoir と il ne faut pas を つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用pouvoir和il ne faut pas的例句。"
        },
        lines: [
          { id: "pv1", translations: { fr: "Je peux emprunter ce livre ?", en: "Can I borrow this book?", de: "Kann ich dieses Buch ausleihen?", ja: "この ほんを かりても いいですか？", zh: "我能借这本书吗？" } },
          { id: "pv2", translations: { fr: "Vous ne pouvez pas utiliser votre téléphone ici.", en: "You can't use your phone here.", de: "Sie dürfen Ihr Telefon hier nicht benutzen.", ja: "ここで けいたいを つかっては いけません。", zh: "这里不能用手机。" } },
          { id: "pv3", translations: { fr: "Il ne faut pas être en retard.", en: "You must not be late.", de: "Man darf nicht zu spät kommen.", ja: "ちこくしては いけません。", zh: "不可以迟到。" } },
          { id: "pv4", translations: { fr: "Est-ce que je peux rentrer chez moi maintenant ?", en: "Can I go home now?", de: "Kann ich jetzt nach Hause gehen?", ja: "いま いえに かえっても いいですか？", zh: "我现在可以回家吗？" } },
          { id: "pv5", translations: { fr: "Nous pouvons étudier ensemble.", en: "We can study together.", de: "Wir können zusammen lernen.", ja: "いっしょに べんきょうしても いいです。", zh: "我们可以一起学习。" } },
          { id: "pv6", translations: { fr: "Il ne faut pas oublier ses devoirs.", en: "You must not forget your homework.", de: "Man darf seine Hausaufgaben nicht vergessen.", ja: "しゅくだいを わすれては いけません。", zh: "不可以忘记作业。" } },
          { id: "pv7", translations: { fr: "Tu peux répondre à cette question ?", en: "Can you answer this question?", de: "Kannst du diese Frage beantworten?", ja: "この しつもんに こたえられますか？", zh: "你能回答这个问题吗？" } },
          { id: "pv8", translations: { fr: "Il ne faut pas courir dans les couloirs.", en: "You must not run in the hallways.", de: "Man darf in den Fluren nicht rennen.", ja: "ろうかを はしっては いけません。", zh: "不可以在走廊上跑。" } },
          { id: "pv9", translations: { fr: "Elle peut utiliser le tableau.", en: "She may use the blackboard.", de: "Sie darf die Tafel benutzen.", ja: "かのじょは こくばんを つかっても いいです。", zh: "她可以用黑板。" } },
          { id: "pv10", translations: { fr: "Il ne faut pas parler pendant l'examen.", en: "You must not talk during the exam.", de: "Man darf während der Prüfung nicht sprechen.", ja: "テストちゅうに はなしては いけません。", zh: "考试期间不可以说话。" } }
        ]
      }
    ]
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
    },
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        u_long: { de: "U — lang", en: "U — long", ja: "U — ながい", zh: "U——长音" },
        u_short: { de: "U — kurz", en: "U — short", ja: "U — みじかい", zh: "U——短音" }
      },
      items: [
        { id: "ul1", category: "u_long", translations: { de: "Schule", en: "school", ja: "がっこう", zh: "学校" } },
        { id: "ul2", category: "u_long", translations: { de: "Blume", en: "flower", ja: "はな", zh: "花" } },
        { id: "ul3", category: "u_long", translations: { de: "gut", en: "good", ja: "よい", zh: "好的" } },
        { id: "us1", category: "u_short", translations: { de: "Mutter", en: "mother", ja: "はは", zh: "母亲" } },
        { id: "us2", category: "u_short", translations: { de: "Suppe", en: "soup", ja: "スープ", zh: "汤" } },
        { id: "us3", category: "u_short", translations: { de: "Hund", en: "dog", ja: "いぬ", zh: "狗" } }
      ]
    },
    // French pronunciation: "oi" [wa] and "eu" [ø]/[œ] — two vowel
    // combinations with no real English equivalent, both of which
    // happen to appear right in school vocabulary itself (devoir,
    // histoire; professeur, studieux).
    fr: {
      title: { fr: "Exercice de prononciation", en: "Pronunciation Practice", de: "Aussprachetraining", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        oi: { fr: "Le son « oi » [wa]", en: "The \"oi\" sound [wa]", de: "Der Laut „oi\" [wa]", ja: "「oi」の おん [wa]", zh: "「oi」音 [wa]" },
        eu: { fr: "Le son « eu » [ø]/[œ]", en: "The \"eu\" sound [ø]/[œ]", de: "Der Laut „eu\" [ø]/[œ]", ja: "「eu」の おん [ø]/[œ]", zh: "「eu」音 [ø]/[œ]" }
      },
      items: [
        { id: "oi1", category: "oi", translations: { fr: "devoir", en: "homework, duty", de: "Hausaufgabe, Pflicht", ja: "しゅくだい、ぎむ", zh: "作业，义务" } },
        { id: "oi2", category: "oi", translations: { fr: "histoire", en: "history, story", de: "Geschichte", ja: "れきし、ものがたり", zh: "历史，故事" } },
        { id: "oi3", category: "oi", translations: { fr: "voir", en: "to see", de: "sehen", ja: "みる", zh: "看" } },
        { id: "oi4", category: "oi", translations: { fr: "noir", en: "black", de: "schwarz", ja: "くろ", zh: "黑色" } },
        { id: "eu1", category: "eu", translations: { fr: "professeur", en: "teacher, professor", de: "Lehrer, Professor", ja: "せんせい、きょうじゅ", zh: "老师，教授" } },
        { id: "eu2", category: "eu", translations: { fr: "deux", en: "two", de: "zwei", ja: "に", zh: "二" } },
        { id: "eu3", category: "eu", translations: { fr: "peu", en: "little, few", de: "wenig", ja: "すこし", zh: "一点点" } },
        { id: "eu4", category: "eu", translations: { fr: "studieux", en: "studious", de: "fleißig, lernbegierig", ja: "べんきょうねっしんな", zh: "勤奋好学的" } }
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
          u_long1: { de: "U — lang", en: "U — long", ja: "U — ながい", zh: "U——长音" },
          u_short1: { de: "U — kurz", en: "U — short", ja: "U — みじかい", zh: "U——短音" },
          u_long2: { de: "U — lang", en: "U — long", ja: "U — ながい", zh: "U——长音" },
          u_short2: { de: "U — kurz", en: "U — short", ja: "U — みじかい", zh: "U——短音" }
        },
        pairedColumns: [["u_long1", "u_short1"], ["u_long2", "u_short2"]],
        items: [
          { id: "ul1_1", category: "u_long1", translations: { de: "Stunde", en: "hour", ja: "じかん", zh: "小时" } },
          { id: "us1_1", category: "u_short1", translations: { de: "Butter", en: "butter", ja: "バター", zh: "黄油" } },
          { id: "ul1_2", category: "u_long1", translations: { de: "Kuchen", en: "cake", ja: "ケーキ", zh: "蛋糕" } },
          { id: "us1_2", category: "u_short1", translations: { de: "Nummer", en: "number", ja: "ばんごう", zh: "号码" } },
          { id: "ul1_3", category: "u_long1", translations: { de: "Musik", en: "music", ja: "おんがく", zh: "音乐" } },
          { id: "us1_3", category: "u_short1", translations: { de: "Puppe", en: "doll", ja: "にんぎょう", zh: "玩偶" } },
          { id: "ul1_4", category: "u_long1", translations: { de: "Universität", en: "university", ja: "だいがく", zh: "大学" } },
          { id: "us1_4", category: "u_short1", translations: { de: "Mund", en: "mouth", ja: "くち", zh: "嘴" } },
          { id: "ul1_5", category: "u_long1", translations: { de: "Juli", en: "July", ja: "しちがつ", zh: "七月" } },
          { id: "us1_5", category: "u_short1", translations: { de: "und", en: "and", ja: "そして", zh: "和" } },
          { id: "ul1_6", category: "u_long1", translations: { de: "Juni", en: "June", ja: "ろくがつ", zh: "六月" } },
          { id: "us1_6", category: "u_short1", translations: { de: "bunt", en: "colorful", ja: "カラフルな", zh: "五颜六色的" } },
          { id: "ul1_7", category: "u_long1", translations: { de: "Minute", en: "minute", ja: "ふん", zh: "分钟" } },
          { id: "us1_7", category: "u_short1", translations: { de: "Punkt", en: "point", ja: "てん", zh: "点" } },
          { id: "ul1_8", category: "u_long1", translations: { de: "Natur", en: "nature", ja: "しぜん", zh: "自然" } },
          { id: "us1_8", category: "u_short1", translations: { de: "Luft", en: "air", ja: "くうき", zh: "空气" } },
          { id: "ul1_9", category: "u_long1", translations: { de: "Kultur", en: "culture", ja: "ぶんか", zh: "文化" } },
          { id: "us1_9", category: "u_short1", translations: { de: "Kunst", en: "art", ja: "げいじゅつ", zh: "艺术" } },
          { id: "ul1_10", category: "u_long1", translations: { de: "Ufer", en: "shore, bank", ja: "きしべ", zh: "岸边" } },
          { id: "us1_10", category: "u_short1", translations: { de: "Wunsch", en: "wish", ja: "ねがい", zh: "愿望" } },
          { id: "ul1_11", category: "u_long1", translations: { de: "Ruhe", en: "calm, quiet", ja: "しずけさ", zh: "安静" } },
          { id: "us1_11", category: "u_short1", translations: { de: "Sturm", en: "storm", ja: "あらし", zh: "暴风雨" } },
          { id: "ul1_12", category: "u_long1", translations: { de: "Blut", en: "blood", ja: "ち", zh: "血" } },
          { id: "us1_12", category: "u_short1", translations: { de: "jung", en: "young", ja: "わかい", zh: "年轻" } },
          { id: "ul1_13", category: "u_long1", translations: { de: "Hut", en: "hat", ja: "ぼうし", zh: "帽子" } },
          { id: "us1_13", category: "u_short1", translations: { de: "Nuss", en: "nut", ja: "ナッツ", zh: "坚果" } },
          { id: "ul1_14", category: "u_long1", translations: { de: "Fuß", en: "foot", ja: "あし", zh: "脚" } },
          { id: "us1_14", category: "u_short1", translations: { de: "Busch", en: "bush", ja: "しげみ", zh: "灌木丛" } },

          { id: "ul2_1", category: "u_long2", translations: { de: "Zug", en: "train", ja: "でんしゃ", zh: "火车" } },
          { id: "us2_1", category: "u_short2", translations: { de: "Zunge", en: "tongue", ja: "した", zh: "舌头" } },
          { id: "ul2_2", category: "u_long2", translations: { de: "Mut", en: "courage", ja: "ゆうき", zh: "勇气" } },
          { id: "us2_2", category: "u_short2", translations: { de: "Junge", en: "boy", ja: "おとこのこ", zh: "男孩" } },
          { id: "ul2_3", category: "u_long2", translations: { de: "Bruder", en: "brother", ja: "きょうだい", zh: "兄弟" } },
          { id: "us2_3", category: "u_short2", translations: { de: "Rutsche", en: "slide (playground)", ja: "すべりだい", zh: "滑梯" } },
          { id: "ul2_4", category: "u_long2", translations: { de: "Flug", en: "flight", ja: "ひこう", zh: "飞行" } },
          { id: "us2_4", category: "u_short2", translations: { de: "Wurst", en: "sausage", ja: "ソーセージ", zh: "香肠" } },
          { id: "ul2_5", category: "u_long2", translations: { de: "Juwel", en: "jewel", ja: "ほうせき", zh: "珠宝" } },
          { id: "us2_5", category: "u_short2", translations: { de: "Kummer", en: "sorrow", ja: "なやみ", zh: "忧愁" } },
          { id: "ul2_6", category: "u_long2", translations: { de: "Kuh", en: "cow", ja: "うし", zh: "奶牛" } },
          { id: "us2_6", category: "u_short2", translations: { de: "Trumpf", en: "trump card", ja: "きりふだ", zh: "王牌" } },
          { id: "ul2_7", category: "u_long2", translations: { de: "Buch", en: "book", ja: "ほん", zh: "书" } },
          { id: "us2_7", category: "u_short2", translations: { de: "Sumpf", en: "swamp", ja: "ぬま", zh: "沼泽" } },
          { id: "ul2_8", category: "u_long2", translations: { de: "Uhr", en: "clock", ja: "とけい", zh: "钟表" } },
          { id: "us2_8", category: "u_short2", translations: { de: "Schluss", en: "end", ja: "おわり", zh: "结束" } },
          { id: "ul2_9", category: "u_long2", translations: { de: "Ruf", en: "call, reputation", ja: "よびごえ、ひょうばん", zh: "呼喊，名声" } },
          { id: "us2_9", category: "u_short2", translations: { de: "Kuss", en: "kiss", ja: "キス", zh: "亲吻" } },
          { id: "ul2_10", category: "u_long2", translations: { de: "Kur", en: "spa treatment, cure", ja: "ほうようちりょう", zh: "疗养" } },
          { id: "us2_10", category: "u_short2", translations: { de: "Fluss", en: "river", ja: "かわ", zh: "河流" } },
          { id: "ul2_11", category: "u_long2", translations: { de: "Schuh", en: "shoe", ja: "くつ", zh: "鞋" } },
          { id: "us2_11", category: "u_short2", translations: { de: "Schuss", en: "shot", ja: "しゃげき", zh: "射击" } },
          { id: "ul2_12", category: "u_long2", translations: { de: "Wut", en: "rage", ja: "げきど", zh: "愤怒" } },
          { id: "us2_12", category: "u_short2", translations: { de: "Mutti", en: "mommy", ja: "ママ", zh: "妈妈" } },
          { id: "ul2_13", category: "u_long2", translations: { de: "Ruhm", en: "fame", ja: "めいせい", zh: "名声" } },
          { id: "us2_13", category: "u_short2", translations: { de: "Grund", en: "reason, ground", ja: "りゆう、じばん", zh: "理由，地面" } },
          { id: "ul2_14", category: "u_long2", translations: { de: "Krug", en: "jug", ja: "みずさし", zh: "水壶" } },
          { id: "us2_14", category: "u_short2", translations: { de: "Bund", en: "alliance, league", ja: "どうめい", zh: "联盟" } }
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
          oi1: { fr: "Le son « oi » [wa]", en: "The \"oi\" sound [wa]", de: "Der Laut „oi\" [wa]", ja: "「oi」の おん [wa]", zh: "「oi」音 [wa]" },
          oi2: { fr: "Le son « oi » [wa]", en: "The \"oi\" sound [wa]", de: "Der Laut „oi\" [wa]", ja: "「oi」の おん [wa]", zh: "「oi」音 [wa]" },
          eu1: { fr: "Le son « eu » [ø]/[œ]", en: "The \"eu\" sound [ø]/[œ]", de: "Der Laut „eu\" [ø]/[œ]", ja: "「eu」の おん [ø]/[œ]", zh: "「eu」音 [ø]/[œ]" },
          eu2: { fr: "Le son « eu » [ø]/[œ]", en: "The \"eu\" sound [ø]/[œ]", de: "Der Laut „eu\" [ø]/[œ]", ja: "「eu」の おん [ø]/[œ]", zh: "「eu」音 [ø]/[œ]" }
        },
        items: [
          { id: "oi1_1", category: "oi1", translations: { fr: "loi", en: "law", de: "Gesetz", ja: "ほうりつ", zh: "法律" } },
          { id: "oi1_2", category: "oi1", translations: { fr: "roi", en: "king", de: "König", ja: "おう", zh: "国王" } },
          { id: "oi1_3", category: "oi1", translations: { fr: "soir", en: "evening", de: "Abend", ja: "よる", zh: "晚上" } },
          { id: "oi1_4", category: "oi1", translations: { fr: "poids", en: "weight", de: "Gewicht", ja: "おもさ", zh: "重量" } },
          { id: "oi1_5", category: "oi1", translations: { fr: "choix", en: "choice", de: "Wahl", ja: "せんたく", zh: "选择" } },
          { id: "oi1_6", category: "oi1", translations: { fr: "moitié", en: "half", de: "Hälfte", ja: "はんぶん", zh: "一半" } },
          { id: "oi1_7", category: "oi1", translations: { fr: "froid", en: "cold", de: "kalt", ja: "さむい", zh: "冷的" } },
          { id: "oi1_8", category: "oi1", translations: { fr: "endroit", en: "place", de: "Ort", ja: "ばしょ", zh: "地方" } },
          { id: "oi1_9", category: "oi1", translations: { fr: "miroir", en: "mirror", de: "Spiegel", ja: "かがみ", zh: "镜子" } },
          { id: "oi1_10", category: "oi1", translations: { fr: "tiroir", en: "drawer", de: "Schublade", ja: "ひきだし", zh: "抽屉" } },
          { id: "oi1_11", category: "oi1", translations: { fr: "armoire", en: "wardrobe", de: "Schrank", ja: "たんす", zh: "衣柜" } },
          { id: "oi1_12", category: "oi1", translations: { fr: "victoire", en: "victory", de: "Sieg", ja: "しょうり", zh: "胜利" } },
          { id: "oi1_13", category: "oi1", translations: { fr: "territoire", en: "territory", de: "Territorium", ja: "りょういき", zh: "领土" } },
          { id: "oi1_14", category: "oi1", translations: { fr: "pouvoir", en: "power, to be able", de: "Macht, können", ja: "ちから、〜できる", zh: "权力，能够" } },

          { id: "oi2_1", category: "oi2", translations: { fr: "boire", en: "to drink", de: "trinken", ja: "のむ", zh: "喝" } },
          { id: "oi2_2", category: "oi2", translations: { fr: "moins", en: "less", de: "weniger", ja: "より すくない", zh: "更少" } },
          { id: "oi2_3", category: "oi2", translations: { fr: "soixante", en: "sixty", de: "sechzig", ja: "ろくじゅう", zh: "六十" } },
          { id: "oi2_4", category: "oi2", translations: { fr: "recevoir", en: "to receive", de: "erhalten", ja: "うけとる", zh: "收到" } },
          { id: "oi2_5", category: "oi2", translations: { fr: "apercevoir", en: "to notice", de: "bemerken", ja: "きづく", zh: "察觉" } },
          { id: "oi2_6", category: "oi2", translations: { fr: "décevoir", en: "to disappoint", de: "enttäuschen", ja: "しつぼうさせる", zh: "使失望" } },
          { id: "oi2_7", category: "oi2", translations: { fr: "percevoir", en: "to perceive", de: "wahrnehmen", ja: "ちかくする", zh: "感知" } },
          { id: "oi2_8", category: "oi2", translations: { fr: "conjoint", en: "spouse", de: "Ehepartner", ja: "はいぐうしゃ", zh: "配偶" } },
          { id: "oi2_9", category: "oi2", translations: { fr: "adjoint", en: "assistant, deputy", de: "Assistent", ja: "じょしゅ", zh: "助手" } },
          { id: "oi2_10", category: "oi2", translations: { fr: "rejoindre", en: "to rejoin, meet up with", de: "sich anschließen", ja: "ごうりゅうする", zh: "会合" } },
          { id: "oi2_11", category: "oi2", translations: { fr: "joindre", en: "to join, contact", de: "verbinden, erreichen", ja: "つなぐ、れんらくする", zh: "连接，联系" } },
          { id: "oi2_12", category: "oi2", translations: { fr: "oiseau", en: "bird", de: "Vogel", ja: "とり", zh: "鸟" } },
          { id: "oi2_13", category: "oi2", translations: { fr: "boisson", en: "drink, beverage", de: "Getränk", ja: "のみもの", zh: "饮料" } },
          { id: "oi2_14", category: "oi2", translations: { fr: "voisin", en: "neighbor", de: "Nachbar", ja: "となりのひと", zh: "邻居" } },

          { id: "eu1_1", category: "eu1", translations: { fr: "cheveux", en: "hair", de: "Haare", ja: "かみのけ", zh: "头发" } },
          { id: "eu1_2", category: "eu1", translations: { fr: "neuf", en: "nine, new", de: "neun, neu", ja: "きゅう、あたらしい", zh: "九，新的" } },
          { id: "eu1_3", category: "eu1", translations: { fr: "bleu", en: "blue", de: "blau", ja: "あお", zh: "蓝色" } },
          { id: "eu1_4", category: "eu1", translations: { fr: "feu", en: "fire", de: "Feuer", ja: "ひ", zh: "火" } },
          { id: "eu1_5", category: "eu1", translations: { fr: "lieu", en: "place", de: "Ort", ja: "ばしょ", zh: "地点" } },
          { id: "eu1_6", category: "eu1", translations: { fr: "milieu", en: "middle", de: "Mitte", ja: "まんなか", zh: "中间" } },
          { id: "eu1_7", category: "eu1", translations: { fr: "adieu", en: "farewell", de: "Abschied", ja: "わかれ", zh: "告别" } },
          { id: "eu1_8", category: "eu1", translations: { fr: "neveu", en: "nephew", de: "Neffe", ja: "おい", zh: "侄子" } },
          { id: "eu1_9", category: "eu1", translations: { fr: "vœu", en: "wish", de: "Wunsch", ja: "ねがい", zh: "愿望" } },
          { id: "eu1_10", category: "eu1", translations: { fr: "aveu", en: "confession", de: "Geständnis", ja: "こくはく", zh: "坦白" } },
          { id: "eu1_11", category: "eu1", translations: { fr: "enjeu", en: "stake, issue", de: "Einsatz", ja: "りがい", zh: "利害" } },
          { id: "eu1_12", category: "eu1", translations: { fr: "essieu", en: "axle", de: "Achse", ja: "しゃじく", zh: "车轴" } },
          { id: "eu1_13", category: "eu1", translations: { fr: "pneu", en: "tire", de: "Reifen", ja: "タイヤ", zh: "轮胎" } },
          { id: "eu1_14", category: "eu1", translations: { fr: "jeu", en: "game", de: "Spiel", ja: "ゲーム", zh: "游戏" } },

          { id: "eu2_1", category: "eu2", translations: { fr: "heureux", en: "happy", de: "glücklich", ja: "しあわせな", zh: "幸福的" } },
          { id: "eu2_2", category: "eu2", translations: { fr: "sérieux", en: "serious", de: "ernst", ja: "まじめな", zh: "认真的" } },
          { id: "eu2_3", category: "eu2", translations: { fr: "curieux", en: "curious", de: "neugierig", ja: "こうきしんの ある", zh: "好奇的" } },
          { id: "eu2_4", category: "eu2", translations: { fr: "généreux", en: "generous", de: "großzügig", ja: "きまえの よい", zh: "慷慨的" } },
          { id: "eu2_5", category: "eu2", translations: { fr: "dangereux", en: "dangerous", de: "gefährlich", ja: "きけんな", zh: "危险的" } },
          { id: "eu2_6", category: "eu2", translations: { fr: "nombreux", en: "numerous", de: "zahlreich", ja: "おおくの", zh: "众多的" } },
          { id: "eu2_7", category: "eu2", translations: { fr: "ambitieux", en: "ambitious", de: "ehrgeizig", ja: "やしんてきな", zh: "有野心的" } },
          { id: "eu2_8", category: "eu2", translations: { fr: "silencieux", en: "silent", de: "still", ja: "しずかな", zh: "安静的" } },
          { id: "eu2_9", category: "eu2", translations: { fr: "merveilleux", en: "marvelous", de: "wunderbar", ja: "すばらしい", zh: "美妙的" } },
          { id: "eu2_10", category: "eu2", translations: { fr: "courageux", en: "courageous", de: "mutig", ja: "ゆうかんな", zh: "勇敢的" } },
          { id: "eu2_11", category: "eu2", translations: { fr: "précieux", en: "precious", de: "wertvoll", ja: "きちょうな", zh: "珍贵的" } },
          { id: "eu2_12", category: "eu2", translations: { fr: "ennuyeux", en: "boring", de: "langweilig", ja: "たいくつな", zh: "无聊的" } },
          { id: "eu2_13", category: "eu2", translations: { fr: "nerveux", en: "nervous", de: "nervös", ja: "しんぱいな", zh: "紧张的" } },
          { id: "eu2_14", category: "eu2", translations: { fr: "paresseux", en: "lazy", de: "faul", ja: "なまけものの", zh: "懒惰的" } }
        ]
      }
    ]
  }
};
