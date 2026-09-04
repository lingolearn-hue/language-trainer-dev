import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 17 (Work). Japanese-only lesson for
// now (grammar/pronunciation), same pattern as earlier topics before
// their German pass. Master table's German-specific grammar concept
// ("Case/declension, introductory") and pronunciation concepts ("L vs R",
// "uvular R", both reinforced) don't map to Japanese, which has neither —
// substituted with a genuinely Japanese-native A1 milestone (て-form
// sequential actions, a natural fit for describing a work routine) and
// Japanese-native pronunciation review (ら-row flap consonant, reinforced
// pitch accent).

export const topicWork: TopicLesson = {
  id: "topic-a1-17-work",
  lessonNumber: 17,
  topicName: {
    ja: "しごと",
    en: "Work",
    de: "Arbeit",
    zh: "工作"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しごと", en: "job, work", de: "Arbeit, Beruf", zh: "工作", fr: "travail, emploi" } },
    { id: "v02", category: "noun", translations: { ja: "かいしゃ", en: "company", de: "Firma", zh: "公司", fr: "entreprise" } },
    { id: "v03", category: "noun", translations: { ja: "かいしゃいん", en: "company employee", de: "Angestellte/r", zh: "公司职员", fr: "employé(e) d'entreprise" } },
    { id: "v04", category: "noun", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef/in", zh: "总经理", fr: "président(e) d'entreprise, PDG" } },
    { id: "v05", category: "noun", translations: { ja: "どうりょう", en: "coworker", de: "Kollege, Kollegin", zh: "同事", fr: "collègue" } },
    { id: "v06", category: "noun", translations: { ja: "ぶちょう", en: "department manager", de: "Abteilungsleiter/in", zh: "部长", fr: "chef de service" } },
    { id: "v07", category: "noun", translations: { ja: "かちょう", en: "section manager", de: "Bereichsleiter/in", zh: "科长", fr: "chef de section" } },
    { id: "v08", category: "noun", translations: { ja: "きゅうりょう", en: "salary", de: "Gehalt", zh: "工资", fr: "salaire" } },
    { id: "v09", category: "verb", translations: { ja: "はたらく", en: "to work", de: "arbeiten", zh: "工作", fr: "travailler" } },
    { id: "v10", category: "noun", translations: { ja: "やすみ", en: "day off", de: "freier Tag", zh: "休息日", fr: "jour de congé" } },
    { id: "v11", category: "noun", translations: { ja: "ざんぎょう", en: "overtime", de: "Überstunden", zh: "加班", fr: "heures supplémentaires" } },
    { id: "v12", category: "noun", translations: { ja: "かいぎ", en: "meeting", de: "Besprechung", zh: "会议", fr: "réunion" } },
    { id: "v13", category: "noun", translations: { ja: "めいし", en: "business card", de: "Visitenkarte", zh: "名片", fr: "carte de visite" } },
    { id: "v14", category: "noun", translations: { ja: "オフィス", en: "office", de: "Büro", zh: "办公室", fr: "bureau" } },
    { id: "v15", category: "noun", translations: { ja: "デスク", en: "desk", de: "Schreibtisch", zh: "办公桌", fr: "bureau (le meuble)" } },
    { id: "v16", category: "noun", translations: { ja: "パソコン", en: "computer", de: "Computer", zh: "电脑", fr: "ordinateur" } },
    { id: "v17", category: "noun", translations: { ja: "メール", en: "email", de: "E-Mail", zh: "邮件", fr: "email, courriel" } },
    { id: "v18", category: "verb", translations: { ja: "でんわする", en: "to make a phone call", de: "telefonieren", zh: "打电话", fr: "téléphoner" } },
    { id: "v19", category: "verb", translations: { ja: "れんらくする", en: "to contact", de: "kontaktieren", zh: "联系", fr: "contacter" } },
    { id: "v20", category: "verb", translations: { ja: "そうだんする", en: "to consult, discuss", de: "besprechen", zh: "商量", fr: "discuter" } },
    { id: "v21", category: "verb", translations: { ja: "てつだう", en: "to help", de: "helfen", zh: "帮忙", fr: "aider" } },
    { id: "v22", category: "verb", translations: { ja: "がんばる", en: "to do one's best", de: "sich anstrengen", zh: "努力", fr: "faire de son mieux" } },
    { id: "v23", category: "verb", translations: { ja: "つかれる", en: "to get tired", de: "müde werden", zh: "累", fr: "se fatiguer" } },
    { id: "v24", category: "adjective", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙碌的", fr: "occupé(e)" } },
    { id: "v25", category: "adjective", translations: { ja: "たいへんな", en: "tough, difficult", de: "anstrengend", zh: "辛苦的", fr: "difficile, pénible" } },
    { id: "v26", category: "adjective", translations: { ja: "きびしい", en: "strict", de: "streng", zh: "严格的", fr: "strict(e)" } },
    { id: "v27", category: "verb", translations: { ja: "やめる", en: "to quit", de: "kündigen, aufhören", zh: "辞职", fr: "démissionner" } },
    { id: "v28", category: "noun", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验", fr: "expérience" } },
    { id: "v29", category: "noun", translations: { ja: "しょうしん", en: "promotion", de: "Beförderung", zh: "晋升", fr: "promotion" } },
    { id: "v30", category: "noun", translations: { ja: "プロジェクト", en: "project", de: "Projekt", zh: "项目", fr: "projet" } }
  ],
  dialogueA: {
    title: { ja: "パーティーで しごとの はなし", en: "Talking About Work at a Party", de: "Über die Arbeit auf einer Party sprechen", zh: "在派对上聊工作", fr: "Parler du travail lors d'une fête" },
    lines: [
      { id: "d1", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "おしごとは なにを していますか？", en: "What kind of work do you do?", de: "Was für eine Arbeit machen Sie?", zh: "您是做什么工作的？", fr: "Vous faites quoi comme travail ?" } },
      { id: "d2", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かいしゃいんです。ぼうえきの かいしゃで はたらいています。", en: "I'm a company employee. I work at a trading company.", de: "Ich bin Angestellte. Ich arbeite bei einer Handelsfirma.", zh: "我是公司职员。我在一家贸易公司工作。", fr: "Je suis employée d'entreprise. Je travaille dans une société de commerce." } },
      { id: "d3", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "そうですか。いそがしいですか？", en: "I see. Are you busy?", de: "Verstehe. Sind Sie beschäftigt?", zh: "是这样啊。忙吗？", fr: "Je vois. Vous êtes occupée ?" } },
      { id: "d4", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、まいにち ざんぎょうしています。", en: "Yes, I work overtime every day.", de: "Ja, ich mache jeden Tag Überstunden.", zh: "是的，我每天都加班。", fr: "Oui, je fais des heures supplémentaires tous les jours." } },
      { id: "d5", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "たいへんですね。どうりょうは いい人ですか？", en: "That sounds tough. Are your coworkers nice?", de: "Das klingt anstrengend. Sind Ihre Kollegen nett?", zh: "真辛苦啊。同事人好吗？", fr: "Ça a l'air difficile. Vos collègues sont sympas ?" } },
      { id: "d6", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、みんな しんせつです。でも ぶちょうは きびしいです。", en: "Yes, everyone is kind. But the department manager is strict.", de: "Ja, alle sind nett. Aber der Abteilungsleiter ist streng.", zh: "是的，大家都很友善。但是部长很严格。", fr: "Oui, tout le monde est gentil. Mais le chef de service est strict." } },
      { id: "d7", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "りくさんは なんの しごとを していますか？", en: "What about you, Riku, what's your job?", de: "Und was machen Sie beruflich, Riku?", zh: "陆先生您是做什么工作的？", fr: "Et vous, Riku, quel est votre métier ?" } },
      { id: "d8", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "エンジニアです。プロジェクトを かんりしています。", en: "I'm an engineer. I manage projects.", de: "Ich bin Ingenieur. Ich leite Projekte.", zh: "我是工程师。我管理项目。", fr: "Je suis ingénieur. Je gère des projets." } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かっこいいですね！けいけんは ながいですか？", en: "That's cool! Do you have a lot of experience?", de: "Das klingt cool! Haben Sie viel Erfahrung?", zh: "真厉害！经验丰富吗？", fr: "C'est cool ! Vous avez beaucoup d'expérience ?" } },
      { id: "d10", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "はい、じゅうねん はたらいています。", en: "Yes, I've been working for ten years.", de: "Ja, ich arbeite seit zehn Jahren.", zh: "是的，我工作十年了。", fr: "Oui, je travaille depuis dix ans." } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しょうしんの チャンスは ありますか？", en: "Are there chances for promotion?", de: "Gibt es Aufstiegsmöglichkeiten?", zh: "有晋升的机会吗？", fr: "Il y a des possibilités de promotion ?" } },
      { id: "d12", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "はい、らいねん かちょうに なるかもしれません。", en: "Yes, I might become a section manager next year.", de: "Ja, nächstes Jahr werde ich vielleicht Bereichsleiter.", zh: "有，明年我可能会当科长。", fr: "Oui, je deviendrai peut-être chef de section l'année prochaine." } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "すごいですね！おめでとうございます。", en: "That's amazing! Congratulations.", de: "Fantastisch! Herzlichen Glückwunsch.", zh: "太棒了！恭喜您。", fr: "C'est incroyable ! Félicitations." } },
      { id: "d14", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "ありがとうございます。がんばります。", en: "Thank you. I'll do my best.", de: "Danke. Ich werde mein Bestes geben.", zh: "谢谢。我会努力的。", fr: "Merci. Je ferai de mon mieux." } }
    ]
  },
  dialogueB: {
    title: { ja: "たいへんな どうりょうの はなし", en: "Complaining About a Difficult Coworker", de: "Über einen schwierigen Kollegen klagen", zh: "抱怨难相处的同事", fr: "Se plaindre d'un collègue difficile" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けんさん、なんだか つかれた かおを していますね。", en: "Ken, you look tired somehow.", de: "Ken, Sie sehen irgendwie müde aus.", zh: "健先生，您看起来有点累啊。", fr: "Ken, vous avez l'air fatigué." } },
      { id: "e2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うん、どうりょうの ことで こまっているんだ。", en: "Yeah, I'm having trouble with a coworker.", de: "Ja, ich habe Ärger mit einem Kollegen.", zh: "嗯，我在为一个同事的事发愁。", fr: "Oui, j'ai un problème avec un collègue." } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どうしたの？", en: "What happened?", de: "Was ist passiert?", zh: "怎么了？", fr: "Qu'est-ce qui s'est passé ?" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しごとを てつだって くれないんだ。", en: "He won't help me with work.", de: "Er hilft mir nicht bei der Arbeit.", zh: "他不帮我做工作。", fr: "Il ne veut pas m'aider avec le travail." } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは たいへんね。かちょうに そうだんした？", en: "That's tough. Did you talk to the section manager?", de: "Das ist schwierig. Haben Sie mit dem Bereichsleiter gesprochen?", zh: "那真是辛苦。你跟科长商量了吗？", fr: "C'est difficile. Vous en avez parlé au chef de section ?" } },
      { id: "e6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "まだ そうだんしていないんだ。こわいから。", en: "I haven't talked to him yet. I'm scared.", de: "Ich habe noch nicht mit ihm gesprochen. Ich habe Angst.", zh: "我还没商量。因为有点害怕。", fr: "Je ne lui ai pas encore parlé. J'ai peur." } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だいじょうぶだよ。れんらくしてみたら？", en: "It'll be fine. Why don't you try contacting him?", de: "Es wird schon gut gehen. Warum versuchen Sie nicht, ihn zu kontaktieren?", zh: "没关系的。要不要试着联系他？", fr: "Ça va aller. Pourquoi ne pas essayer de le contacter ?" } },
      { id: "e8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうだね。メールを かいてみるよ。", en: "You're right. I'll try writing an email.", de: "Sie haben recht. Ich versuche eine E-Mail zu schreiben.", zh: "你说得对。我试着写封邮件吧。", fr: "Vous avez raison. Je vais essayer d'écrire un email." } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ざんぎょうは おおいの？", en: "Do you work a lot of overtime?", de: "Machen Sie viele Überstunden?", zh: "你经常加班吗？", fr: "Vous faites beaucoup d'heures supplémentaires ?" } },
      { id: "e10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うん、まいばん おそくまで オフィスに いるよ。", en: "Yeah, I'm at the office late every night.", de: "Ja, ich bin jeden Abend bis spät im Büro.", zh: "嗯，我每晚都很晚才离开办公室。", fr: "Oui, je suis au bureau tard tous les soirs." } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "やすみは ちゃんと とっているの？", en: "Are you taking your days off properly?", de: "Nehmen Sie sich Ihre freien Tage?", zh: "你有好好休假吗？", fr: "Vous prenez bien vos jours de congé ?" } },
      { id: "e12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "あまり とれていないんだ。", en: "Not really.", de: "Nicht wirklich.", zh: "没怎么休。", fr: "Pas vraiment." } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは からだに よくないよ。きをつけてね。", en: "That's not good for your health. Please take care.", de: "Das ist nicht gut für Ihre Gesundheit. Passen Sie auf sich auf.", zh: "那对身体不好。要多注意啊。", fr: "Ce n'est pas bon pour votre santé. Prenez soin de vous." } },
      { id: "e14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ありがとう。そうするよ。", en: "Thanks. I will.", de: "Danke. Das werde ich.", zh: "谢谢。我会的。", fr: "Merci. Je le ferai." } }
    ]
  },
  song: {
    // Row 17 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song.
    title: { ja: "ロンドンばし", en: "London Bridge is Falling Down", de: "Die London Bridge fällt herunter", fr: "Le pont de Londres s'écroule" },
    lines: [
      { id: "sg1", translations: { ja: "ロンドンばしが おちる", en: "London Bridge is falling down", de: "Die London Bridge fällt herunter", fr: "Le pont de Londres s'écroule" } },
      { id: "sg2", translations: { ja: "おちる おちる", en: "Falling down, falling down", de: "fällt herunter, fällt herunter", fr: "S'écroule, s'écroule" } },
      { id: "sg3", translations: { ja: "ロンドンばしが おちる", en: "London Bridge is falling down", de: "Die London Bridge fällt herunter", fr: "Le pont de Londres s'écroule" } },
      { id: "sg4", translations: { ja: "マイ フェア レディー", en: "My fair lady", de: "meine schöne Dame", fr: "Ma belle demoiselle" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "て-けい：れんぞくした どうさ", en: "Te-Form: Sequential Actions", de: "Te-Form: Aufeinanderfolgende Handlungen", zh: "て形：连续动作" },
      explanation: {
        ja: "どうしの て-けいは、いくつかの どうさを じゅんばんに つなげる ときに つかいます：おきて、たべて、いきます（おきる → たべる → いく の じゅんばん）。ばあいに よっては、りゆうを あらわす こともあります：つかれて、ねます（つかれたから ねる）。",
        en: "The て-form of a verb links a series of actions in order: おきて、たべて、いきます (wake up → eat → go, in that order). Depending on context, it can also express a reason: つかれて、ねます (I'm tired, so I sleep).",
        de: "Die て-Form eines Verbs verbindet mehrere Handlungen in ihrer Reihenfolge: おきて、たべて、いきます (aufstehen → essen → gehen, in dieser Reihenfolge). Je nach Kontext kann sie auch einen Grund ausdrücken: つかれて、ねます (ich bin müde, also schlafe ich).",
        zh: "动词的て形用于按顺序连接几个动作：おきて、たべて、いきます（起床→吃饭→出发，按此顺序）。根据语境，它也可以表示原因：つかれて、ねます（因为累了，所以睡觉）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "あさ おきて、シャワーを あびます。", en: "I wake up in the morning, then take a shower.", de: "Ich stehe morgens auf und dusche dann.", zh: "早上起床后，洗澡。" } },
        { id: "g2", translations: { ja: "あさごはんを たべて、かいしゃに いきます。", en: "I eat breakfast, then go to the office.", de: "Ich esse Frühstück und gehe dann ins Büro.", zh: "吃完早饭后，去公司。" } },
        { id: "g3", translations: { ja: "かいぎに でて、レポートを かきます。", en: "I attend a meeting, then write a report.", de: "Ich nehme an einer Besprechung teil und schreibe dann einen Bericht.", zh: "参加会议后，写报告。" } },
        { id: "g4", translations: { ja: "どうりょうと はなして、しごとを てつだいます。", en: "I talk with a coworker, then help with the work.", de: "Ich spreche mit einem Kollegen und helfe dann bei der Arbeit.", zh: "和同事聊天后，帮忙工作。" } },
        { id: "g5", translations: { ja: "しごとが おわって、いえに かえります。", en: "Work finishes, then I go home.", de: "Die Arbeit ist zu Ende, dann gehe ich nach Hause.", zh: "工作结束后，回家。" } },
        { id: "g6", translations: { ja: "つかれて、はやく ねます。", en: "I'm tired, so I go to sleep early. (て-form expressing reason)", de: "Ich bin müde, also gehe ich früh schlafen. (て-Form als Grundangabe)", zh: "因为累了，所以早点睡觉。（て形表示原因）" } }
      ]
    },
    de: {
      title: { de: "Nominativ und Akkusativ: eine Einführung", en: "Nominative and Accusative: An Introduction", ja: "しゅかく と たいかく：にゅうもん", zh: "主格与宾格：入门" },
      explanation: {
        de: "Der Nominativ markiert das Subjekt eines Satzes (wer/was handelt): der Chef, die Kollegin, das Projekt. Der Akkusativ markiert das direkte Objekt (wen/was betrifft die Handlung): Ich sehe den Chef. Nur bei maskulinen Nomen ändert sich der Artikel (der → den, ein → einen); feminine, neutrale und Plural-Artikel bleiben im Akkusativ unverändert.",
        en: "The nominative marks the subject of a sentence (who/what is doing the action): der Chef, die Kollegin, das Projekt. The accusative marks the direct object (who/what the action affects): Ich sehe den Chef (I see the boss). Only masculine nouns change their article (der → den, ein → einen); feminine, neuter, and plural articles stay the same in the accusative.",
        ja: "しゅかくは ぶんの しゅご（だれが／なにが する か）を しめします：der Chef、die Kollegin、das Projekt。たいかくは ちょくせつもくてきご（だれを／なにを する か）を しめします：Ich sehe den Chef（じょうしを みます）。だんせいめいしだけ かんしが かわります（der → den、ein → einen）。じょせい・ちゅうせい・ふくすうの かんしは たいかくでも かわりません。",
        zh: "主格标记句子的主语（谁/什么在做动作）：der Chef、die Kollegin、das Projekt。宾格标记直接宾语（动作影响谁/什么）：Ich sehe den Chef（我看见老板）。只有阳性名词的冠词会变化（der → den，ein → einen）；阴性、中性和复数冠词在宾格中保持不变。"
      },
      chunks: [
        { id: "g1", translations: { de: "Der Chef ist streng.", en: "The boss is strict. (nominative, subject)", ja: "しゃちょうは きびしいです。（しゅかく、しゅご）", zh: "老板很严格。（主格，主语）" } },
        { id: "g2", translations: { de: "Ich sehe den Chef.", en: "I see the boss. (accusative, der → den)", ja: "しゃちょうを みます。（たいかく、der → den）", zh: "我看见老板。（宾格，der → den）" } },
        { id: "g3", translations: { de: "Die Kollegin hilft mir.", en: "The coworker helps me. (nominative, feminine — unchanged)", ja: "どうりょうが てつだって くれます。（しゅかく、じょせい——へんかなし）", zh: "同事帮助我。（主格，阴性——不变）" } },
        { id: "g4", translations: { de: "Ich sehe die Kollegin.", en: "I see the coworker. (accusative, feminine — unchanged)", ja: "どうりょうを みます。（たいかく、じょせい——へんかなし）", zh: "我看见同事。（宾格，阴性——不变）" } },
        { id: "g5", translations: { de: "Ich schreibe eine E-Mail.", en: "I write an email. (accusative, eine — unchanged)", ja: "メールを かきます。（たいかく、eine——へんかなし）", zh: "我写邮件。（宾格，eine——不变）" } },
        { id: "g6", translations: { de: "Ich habe einen Kollegen getroffen.", en: "I met a coworker. (accusative, ein → einen)", ja: "どうりょうに あいました。（たいかく、ein → einen）", zh: "我遇到了一个同事。（宾格，ein → einen）" } }
      ]
    },
    // French direct object pronouns (le/la/les, me/nous/vous) are the
    // closest A1 French analog to German's accusative case here — both
    // mark "who/what the action affects," but French does it by
    // replacing the noun with a pronoun placed BEFORE the verb, not by
    // changing an article's form.
    fr: {
      title: { fr: "Les pronoms objets directs : le, la, les", en: "Direct Object Pronouns: Le, La, Les", de: "Direkte Objektpronomen: Le, la, les", ja: "ちょくせつもくてきごの だいめいし：le、la、les", zh: "直接宾语代词：le、la、les" },
      explanation: {
        fr: "En français, les pronoms objets directs (le, la, les, ainsi que me, te, nous, vous) remplacent un nom qui est le complément d'objet direct d'un verbe, et se placent AVANT le verbe conjugué — contrairement à l'anglais, qui les place après. « Le » remplace un nom masculin, « la » un nom féminin (l' devant une voyelle), et « les » un nom pluriel.",
        en: "In French, direct object pronouns (le, la, les, as well as me, te, nous, vous) replace a noun that is the direct object of a verb, and are placed BEFORE the conjugated verb — unlike English, which places them after. \"Le\" replaces a masculine noun, \"la\" a feminine noun (l' before a vowel), and \"les\" a plural noun.",
        de: "Im Französischen ersetzen direkte Objektpronomen (le, la, les sowie me, te, nous, vous) ein Nomen, das direktes Objekt eines Verbs ist, und werden VOR das konjugierte Verb gestellt — anders als im Deutschen oder Englischen, wo sie danach stehen. „Le\" ersetzt ein maskulines Nomen, „la\" ein feminines (l' vor Vokal), und „les\" ein Plural-Nomen.",
        ja: "フランスごの ちょくせつもくてきごの だいめいし（le、la、les、そして me、te、nous、vous）は、どうしの ちょくせつもくてきごに あたる めいしを おきかえ、かつようした どうしの まえに おかれます——あとに おく えいごとは ちがいます。「le」は だんせいめいし、「la」は じょせいめいし（ぼいんの まえでは l'）、「les」は ふくすうめいしを おきかえます。",
        zh: "在法语中，直接宾语代词（le、la、les，以及me、te、nous、vous）替代作为动词直接宾语的名词，并且放在变位动词之前——这与放在动词之后的英语不同。「le」替代阳性名词，「la」替代阴性名词（元音前用l'），「les」替代复数名词。"
      },
      chunks: [
        { id: "g1", translations: { fr: "Je le vois tous les jours.", en: "I see him every day. (le — masculine object)", de: "Ich sehe ihn jeden Tag. (le — maskulines Objekt)", ja: "まいにち かれに あいます。（le——だんせいの もくてきご）", zh: "我每天见他。（le——阳性宾语）" } },
        { id: "g2", translations: { fr: "Elle l'aide avec le travail.", en: "She helps her/him with work. (l' — before a vowel)", de: "Sie hilft ihr/ihm bei der Arbeit. (l' — vor Vokal)", ja: "かのじょは しごとを てつだいます。（l'——ぼいんの まえ）", zh: "她帮她/他做工作。（l'——元音前）" } },
        { id: "g3", translations: { fr: "Nous les contactons demain.", en: "We'll contact them tomorrow. (les — plural object)", de: "Wir kontaktieren sie morgen. (les — Plural-Objekt)", ja: "あした かれらに れんらくします。（les——ふくすうの もくてきご）", zh: "我们明天联系他们。（les——复数宾语）" } },
        { id: "g4", translations: { fr: "Le chef me félicite.", en: "The boss congratulates me. (me — first person)", de: "Der Chef gratuliert mir. (me — erste Person)", ja: "しゃちょうが わたしに おめでとうと いいます。（me——いちにんしょう）", zh: "老板祝贺我。（me——第一人称）" } },
        { id: "g5", translations: { fr: "Tu nous aides beaucoup.", en: "You help us a lot. (nous — first person plural)", de: "Du hilfst uns sehr. (nous — erste Person Plural)", ja: "あなたは わたしたちを たすけて くれます。（nous——いちにんしょう ふくすう）", zh: "你帮了我们很多。（nous——第一人称复数）" } },
        { id: "g6", translations: { fr: "Je vous remercie.", en: "I thank you. (vous — polite/plural \"you\")", de: "Ich danke Ihnen. (vous — höflich/Plural „Sie\")", ja: "あなたに かんしゃします。（vous——ていねいな／ふくすうの「あなた」）", zh: "我感谢您。（vous——礼貌／复数的\"您\"）" } }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-akkusativ",
        title: { de: "Übung: Nominativ und Akkusativ", en: "Practice: Nominative and Accusative", ja: "れんしゅう：しゅかく と たいかく", zh: "练习：主格与宾格" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit Nominativ und Akkusativ.",
          en: "Next, let's practice example sentences using nominative and accusative.",
          ja: "つぎは、しゅかくと たいかくを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用主格和宾格的例句。"
        },
        lines: [
          { id: "ak1", translations: { de: "Der Kollege ist nett.", en: "The coworker is nice. (nominative)", ja: "どうりょうは しんせつです。（しゅかく）", zh: "同事很友善。（主格）" } },
          { id: "ak2", translations: { de: "Ich sehe den Kollegen.", en: "I see the coworker. (accusative, der → den)", ja: "どうりょうを みます。（たいかく、der → den）", zh: "我看见同事。（宾格，der → den）" } },
          { id: "ak3", translations: { de: "Die Firma ist groß.", en: "The company is big. (nominative, feminine)", ja: "かいしゃは おおきいです。（しゅかく、じょせい）", zh: "公司很大。（主格，阴性）" } },
          { id: "ak4", translations: { de: "Ich mag die Firma.", en: "I like the company. (accusative, feminine — unchanged)", ja: "かいしゃが すきです。（たいかく、じょせい——へんかなし）", zh: "我喜欢这家公司。（宾格，阴性——不变）" } },
          { id: "ak5", translations: { de: "Das Projekt ist wichtig.", en: "The project is important. (nominative, neuter)", ja: "プロジェクトは じゅうようです。（しゅかく、ちゅうせい）", zh: "项目很重要。（主格，中性）" } },
          { id: "ak6", translations: { de: "Wir beginnen das Projekt.", en: "We start the project. (accusative, neuter — unchanged)", ja: "プロジェクトを はじめます。（たいかく、ちゅうせい——へんかなし）", zh: "我们开始这个项目。（宾格，中性——不变）" } },
          { id: "ak7", translations: { de: "Der Chef schreibt einen Bericht.", en: "The boss writes a report. (accusative, ein → einen)", ja: "しゃちょうは レポートを かきます。（たいかく、ein → einen）", zh: "老板写报告。（宾格，ein → einen）" } },
          { id: "ak8", translations: { de: "Ich habe eine E-Mail bekommen.", en: "I received an email. (accusative, eine — unchanged)", ja: "メールを もらいました。（たいかく、eine——へんかなし）", zh: "我收到了一封邮件。（宾格，eine——不变）" } },
          { id: "ak9", translations: { de: "Die Sekretärin ruft den Chef an.", en: "The secretary calls the boss. (nominative subject + accusative object)", ja: "ひしょが しゃちょうに でんわします。（しゅかくの しゅご + たいかくの もくてきご）", zh: "秘书给老板打电话。（主格主语 + 宾格宾语）" } },
          { id: "ak10", translations: { de: "Ich brauche einen Computer.", en: "I need a computer. (accusative, ein → einen)", ja: "パソコンが ひつようです。（たいかく、ein → einen）", zh: "我需要一台电脑。（宾格，ein → einen）" } }
        ]
      }
    ],
    fr: [
      {
        id: "grammar-drill-pronoms",
        title: { fr: "Exercice : le, la, les", en: "Practice: Le, La, Les", de: "Übung: Le, la, les", ja: "れんしゅう：le、la、les", zh: "练习：le、la、les" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases avec les pronoms objets directs.",
          en: "Next, let's practice example sentences using direct object pronouns.",
          de: "Als Nächstes üben wir Beispielsätze mit direkten Objektpronomen.",
          ja: "つぎは、ちょくせつもくてきごの だいめいしを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用直接宾语代词的例句。"
        },
        lines: [
          { id: "pr1", translations: { fr: "Je le vois au bureau.", en: "I see him at the office.", de: "Ich sehe ihn im Büro.", ja: "オフィスで かれに あいます。", zh: "我在办公室见他。" } },
          { id: "pr2", translations: { fr: "Elle l'aide avec le projet.", en: "She helps him/her with the project.", de: "Sie hilft ihm/ihr beim Projekt.", ja: "かのじょは プロジェクトを てつだいます。", zh: "她帮忙做这个项目。" } },
          { id: "pr3", translations: { fr: "Nous les contactons par email.", en: "We contact them by email.", de: "Wir kontaktieren sie per E-Mail.", ja: "メールで かれらに れんらくします。", zh: "我们用邮件联系他们。" } },
          { id: "pr4", translations: { fr: "Le patron me félicite.", en: "The boss congratulates me.", de: "Der Chef gratuliert mir.", ja: "しゃちょうが おめでとうと いいます。", zh: "老板祝贺我。" } },
          { id: "pr5", translations: { fr: "Tu nous aides souvent.", en: "You help us often.", de: "Du hilfst uns oft.", ja: "あなたは よく たすけて くれます。", zh: "你经常帮助我们。" } },
          { id: "pr6", translations: { fr: "Je vous remercie beaucoup.", en: "I thank you very much.", de: "Ich danke Ihnen sehr.", ja: "とても かんしゃします。", zh: "非常感谢您。" } },
          { id: "pr7", translations: { fr: "Il la voit tous les jours.", en: "He sees her every day.", de: "Er sieht sie jeden Tag.", ja: "かれは まいにち かのじょに あいます。", zh: "他每天见她。" } },
          { id: "pr8", translations: { fr: "Vous me comprenez ?", en: "Do you understand me?", de: "Verstehen Sie mich?", ja: "わたしの ことが わかりますか？", zh: "您理解我吗？" } },
          { id: "pr9", translations: { fr: "Ils nous invitent à la réunion.", en: "They invite us to the meeting.", de: "Sie laden uns zur Besprechung ein.", ja: "かれらは かいぎに しょうたいします。", zh: "他们邀请我们参加会议。" } },
          { id: "pr10", translations: { fr: "Je t'aide avec ça.", en: "I'll help you with that.", de: "Ich helfe dir dabei.", ja: "それを てつだいます。", zh: "我帮你做这个。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        ra_flap: { ja: "ら行の はじきおん（ふくしゅう）", en: "Ra-row flap consonant (reinforced)", de: "Ra-Reihe: Flap-Konsonant (vertieft)", zh: "ら行的闪音（巩固）" },
        pitch: { ja: "アクセント（ふくしゅう、あたらしい ペア）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)", zh: "声调重音（巩固，新词对）" }
      },
      items: [
        { id: "ra1", category: "ra_flap", translations: { ja: "れんらくする", en: "to contact (ら-row flap, twice)", de: "kontaktieren (ら-Reihe, zweimal)", zh: "联系（ら行闪音，两次）" } },
        { id: "ra2", category: "ra_flap", translations: { ja: "プロジェクト", en: "project (ろ — ra-row flap)", de: "Projekt (ろ — ら-Reihen-Flap)", zh: "项目（ろ——ら行闪音）" } },
        { id: "ra3", category: "ra_flap", translations: { ja: "がんばる", en: "to do one's best (る — ra-row flap)", de: "sich anstrengen (る — ら-Reihen-Flap)", zh: "努力（る——ら行闪音）" } },
        { id: "ra4", category: "ra_flap", translations: { ja: "つかれる", en: "to get tired (れ — ra-row flap)", de: "müde werden (れ — ら-Reihen-Flap)", zh: "累（れ——ら行闪音）" } },
        { id: "p1", category: "pitch", translations: { ja: "しごと", en: "job, work (LHL) — new word, single pattern", de: "Arbeit (LHL) — neues Wort, einzelnes Muster", zh: "工作（低高低）——新词，单一声调" } },
        { id: "p2", category: "pitch", translations: { ja: "かいしゃ", en: "company (LHHL) — new word, single pattern", de: "Firma (LHHL) — neues Wort, einzelnes Muster", zh: "公司（低高高低）——新词，单一声调" } },
        { id: "p3", category: "pitch", translations: { ja: "とる", en: "to take (LH) / — new word, single pattern", de: "nehmen (LH) / — neues Wort, einzelnes Muster", zh: "拿（低高）/ ——新词，单一声调" } },
        { id: "p4", category: "pitch", translations: { ja: "やめる", en: "to quit (LHL) — new word, single pattern", de: "kündigen (LHL) — neues Wort, einzelnes Muster", zh: "辞职（低高低）——新词，单一声调" } }
      ]
    },
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        ch_sch: { de: "CH klingt wie SCH (frz. Lehnwörter)", en: "CH sounds like SCH (French loanwords)", ja: "CH は SCH の おと（フランスごの がいらいご）", zh: "CH发音像SCH（法语外来词）" },
        ch_k: { de: "CH klingt wie K (griech./lat. Lehnwörter)", en: "CH sounds like K (Greek/Latin loanwords)", ja: "CH は K の おと（ギリシャ・ラテンごの がいらいご）", zh: "CH发音像K（希腊语/拉丁语外来词）" }
      },
      items: [
        { id: "cs1", category: "ch_sch", translations: { de: "Chef", en: "boss", ja: "しゃちょう", zh: "老板" } },
        { id: "cs2", category: "ch_sch", translations: { de: "Chance", en: "chance", ja: "チャンス", zh: "机会" } },
        { id: "cs3", category: "ch_sch", translations: { de: "Champignon", en: "mushroom", ja: "マッシュルーム", zh: "蘑菇" } },
        { id: "ck1", category: "ch_k", translations: { de: "Charakter", en: "character", ja: "せいかく", zh: "性格" } },
        { id: "ck2", category: "ch_k", translations: { de: "Chor", en: "choir", ja: "がっしょうだん", zh: "合唱团" } },
        { id: "ck3", category: "ch_k", translations: { de: "Chemie", en: "chemistry", ja: "かがく", zh: "化学" } }
      ]
    },
    // French pronunciation: a single "s" between two vowels sounds
    // like [z] (maison, présenter), while a doubled "ss" (or an "s" at
    // the start of a word) sounds like [s] (réussir, stresser) — a
    // genuine spelling-to-sound rule with no English equivalent, and
    // one that trips up learners constantly since the letter looks
    // identical either way.
    fr: {
      title: { fr: "Exercice de prononciation", en: "Pronunciation Practice", de: "Aussprachetraining", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        s_z: { fr: "S simple entre voyelles = [z]", en: "Single s between vowels = [z]", de: "Einfaches s zwischen Vokalen = [z]", ja: "ぼいんの あいだの ひとつの s = [z]", zh: "元音间的单s = [z]" },
        s_s: { fr: "SS ou S initial = [s]", en: "SS or initial s = [s]", de: "SS oder Anfangs-s = [s]", ja: "ss または ごとうの s = [s]", zh: "SS或词首s = [s]" }
      },
      items: [
        { id: "sz1", category: "s_z", translations: { fr: "maison", en: "house (s = [z])", de: "Haus (s = [z])", ja: "いえ（s は [z]）", zh: "房子（s发[z]音）" } },
        { id: "sz2", category: "s_z", translations: { fr: "raison", en: "reason (s = [z])", de: "Grund (s = [z])", ja: "りゆう（s は [z]）", zh: "理由（s发[z]音）" } },
        { id: "sz3", category: "s_z", translations: { fr: "présenter", en: "to present (s = [z])", de: "vorstellen (s = [z])", ja: "しょうかいする（s は [z]）", zh: "介绍（s发[z]音）" } },
        { id: "sz4", category: "s_z", translations: { fr: "choisir", en: "to choose (s = [z])", de: "wählen (s = [z])", ja: "えらぶ（s は [z]）", zh: "选择（s发[z]音）" } },
        { id: "ss1", category: "s_s", translations: { fr: "réussir", en: "to succeed (ss = [s])", de: "gelingen (ss = [s])", ja: "せいこうする（ss は [s]）", zh: "成功（ss发[s]音）" } },
        { id: "ss2", category: "s_s", translations: { fr: "stresser", en: "to stress (ss = [s])", de: "stressen (ss = [s])", ja: "ストレスを あたえる（ss は [s]）", zh: "使有压力（ss发[s]音）" } },
        { id: "ss3", category: "s_s", translations: { fr: "assez", en: "enough (ss = [s])", de: "genug (ss = [s])", ja: "じゅうぶん（ss は [s]）", zh: "足够（ss发[s]音）" } },
        { id: "ss4", category: "s_s", translations: { fr: "poisson", en: "fish (ss = [s])", de: "Fisch (ss = [s])", ja: "さかな（ss は [s]）", zh: "鱼（ss发[s]音）" } }
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
          ch_sch1: { de: "CH klingt wie SCH", en: "CH sounds like SCH", ja: "CH は SCH の おと", zh: "CH发音像SCH" },
          ch_sch2: { de: "CH klingt wie SCH", en: "CH sounds like SCH", ja: "CH は SCH の おと", zh: "CH发音像SCH" },
          ch_k1: { de: "CH klingt wie K", en: "CH sounds like K", ja: "CH は K の おと", zh: "CH发音像K" },
          ch_k2: { de: "CH klingt wie K", en: "CH sounds like K", ja: "CH は K の おと", zh: "CH发音像K" }
        },
        items: [
          { id: "cs1_1", category: "ch_sch1", translations: { de: "Chauffeur", en: "chauffeur", ja: "うんてんしゅ", zh: "司机" } },
          { id: "cs1_2", category: "ch_sch1", translations: { de: "Champagner", en: "champagne", ja: "シャンパン", zh: "香槟" } },
          { id: "cs1_3", category: "ch_sch1", translations: { de: "Charme", en: "charm", ja: "みりょく", zh: "魅力" } },
          { id: "cs1_4", category: "ch_sch1", translations: { de: "chic", en: "chic, stylish", ja: "シックな", zh: "时髦的" } },
          { id: "cs1_5", category: "ch_sch1", translations: { de: "Chalet", en: "chalet", ja: "やまごや", zh: "山间小屋" } },
          { id: "cs1_6", category: "ch_sch1", translations: { de: "Chiffon", en: "chiffon", ja: "シフォン", zh: "雪纺" } },
          { id: "cs1_7", category: "ch_sch1", translations: { de: "Chassis", en: "chassis", ja: "シャーシ", zh: "底盘" } },
          { id: "cs1_8", category: "ch_sch1", translations: { de: "Chicorée", en: "chicory", ja: "チコリ", zh: "菊苣" } },
          { id: "cs1_9", category: "ch_sch1", translations: { de: "Charge", en: "batch, rank", ja: "ロット、かいきゅう", zh: "批次，级别" } },
          { id: "cs1_10", category: "ch_sch1", translations: { de: "Champion", en: "champion", ja: "チャンピオン", zh: "冠军" } },
          { id: "cs1_11", category: "ch_sch1", translations: { de: "Chauvinist", en: "chauvinist", ja: "じこちゅうしんしゅぎしゃ", zh: "沙文主义者" } },
          { id: "cs1_12", category: "ch_sch1", translations: { de: "Charterflug", en: "charter flight", ja: "チャーターびん", zh: "包机" } },
          { id: "cs1_13", category: "ch_sch1", translations: { de: "Chartreuse", en: "chartreuse", ja: "シャルトリューズ", zh: "夏尔特勒酒" } },
          { id: "cs1_14", category: "ch_sch1", translations: { de: "Chinchilla", en: "chinchilla", ja: "チンチラ", zh: "龙猫" } },

          { id: "cs2_1", category: "ch_sch2", translations: { de: "Chartermaschine", en: "charter plane", ja: "チャーターき", zh: "包机" } },
          { id: "cs2_2", category: "ch_sch2", translations: { de: "Charterboot", en: "charter boat", ja: "チャーターボート", zh: "包船" } },
          { id: "cs2_3", category: "ch_sch2", translations: { de: "Charterreise", en: "charter trip", ja: "チャーターりょこう", zh: "包价旅行" } },
          { id: "cs2_4", category: "ch_sch2", translations: { de: "Charterurlaub", en: "charter vacation", ja: "チャーターりょこうの きゅうか", zh: "包价度假" } },
          { id: "cs2_5", category: "ch_sch2", translations: { de: "Charterbus", en: "charter bus", ja: "チャーターバス", zh: "包车大巴" } },
          { id: "cs2_6", category: "ch_sch2", translations: { de: "Chartergesellschaft", en: "charter company", ja: "チャーターがいしゃ", zh: "包机公司" } },
          { id: "cs2_7", category: "ch_sch2", translations: { de: "Charterflotte", en: "charter fleet", ja: "チャーターせんたい", zh: "包机机队" } },
          { id: "cs2_8", category: "ch_sch2", translations: { de: "Charterpreis", en: "charter price", ja: "チャーターりょうきん", zh: "包机价格" } },
          { id: "cs2_9", category: "ch_sch2", translations: { de: "Chartervertrag", en: "charter contract", ja: "チャーターけいやく", zh: "包机合同" } },
          { id: "cs2_10", category: "ch_sch2", translations: { de: "Charterjacht", en: "charter yacht", ja: "チャーターヨット", zh: "包租游艇" } },
          { id: "cs2_11", category: "ch_sch2", translations: { de: "Chartertarif", en: "charter rate", ja: "チャーターりょうきんひょう", zh: "包机费率" } },
          { id: "cs2_12", category: "ch_sch2", translations: { de: "Charteranbieter", en: "charter provider", ja: "チャーターぎょうしゃ", zh: "包机服务商" } },
          { id: "cs2_13", category: "ch_sch2", translations: { de: "Charterkosten", en: "charter costs", ja: "チャーターひよう", zh: "包机费用" } },
          { id: "cs2_14", category: "ch_sch2", translations: { de: "Charterangebot", en: "charter offer", ja: "チャーターの もうしで", zh: "包机报价" } },

          { id: "ck1_1", category: "ch_k1", translations: { de: "Christus", en: "Christ", ja: "キリスト", zh: "基督" } },
          { id: "ck1_2", category: "ch_k1", translations: { de: "Chronik", en: "chronicle", ja: "ねんだいき", zh: "编年史" } },
          { id: "ck1_3", category: "ch_k1", translations: { de: "Orchester", en: "orchestra", ja: "オーケストラ", zh: "管弦乐团" } },
          { id: "ck1_4", category: "ch_k1", translations: { de: "Chaos", en: "chaos", ja: "こんとん", zh: "混乱" } },
          { id: "ck1_5", category: "ch_k1", translations: { de: "Choleriker", en: "choleric person", ja: "たんきなひと", zh: "易怒的人" } },
          { id: "ck1_6", category: "ch_k1", translations: { de: "Christ", en: "Christian", ja: "キリストきょうと", zh: "基督徒" } },
          { id: "ck1_7", category: "ch_k1", translations: { de: "Chirurg", en: "surgeon", ja: "げかい", zh: "外科医生" } },
          { id: "ck1_8", category: "ch_k1", translations: { de: "Cholesterin", en: "cholesterol", ja: "コレステロール", zh: "胆固醇" } },
          { id: "ck1_9", category: "ch_k1", translations: { de: "Chlor", en: "chlorine", ja: "えんそ", zh: "氯" } },
          { id: "ck1_10", category: "ch_k1", translations: { de: "Charisma", en: "charisma", ja: "カリスマせい", zh: "魅力，感召力" } },
          { id: "ck1_11", category: "ch_k1", translations: { de: "Cholera", en: "cholera", ja: "コレラ", zh: "霍乱" } },
          { id: "ck1_12", category: "ch_k1", translations: { de: "Chrom", en: "chrome", ja: "クロム", zh: "铬" } },
          { id: "ck1_13", category: "ch_k1", translations: { de: "Chronologie", en: "chronology", ja: "ねんだいじゅん", zh: "年代顺序" } },
          { id: "ck1_14", category: "ch_k1", translations: { de: "Choreografie", en: "choreography", ja: "ふりつけ", zh: "编舞" } },

          { id: "ck2_1", category: "ch_k2", translations: { de: "Christbaum", en: "Christmas tree", ja: "クリスマスツリー", zh: "圣诞树" } },
          { id: "ck2_2", category: "ch_k2", translations: { de: "Architekt", en: "architect", ja: "けんちくか", zh: "建筑师" } },
          { id: "ck2_3", category: "ch_k2", translations: { de: "Mechanik", en: "mechanics", ja: "きかいこうがく", zh: "机械学" } },
          { id: "ck2_4", category: "ch_k2", translations: { de: "Mechaniker", en: "mechanic", ja: "せいびし", zh: "机械师" } },
          { id: "ck2_5", category: "ch_k2", translations: { de: "Chronometer", en: "chronometer", ja: "せいみつどけい", zh: "精密计时器" } },
          { id: "ck2_6", category: "ch_k2", translations: { de: "Chirurgie", en: "surgery", ja: "げか", zh: "外科" } },
          { id: "ck2_7", category: "ch_k2", translations: { de: "cholerisch", en: "choleric, irascible", ja: "たんきな", zh: "易怒的" } },
          { id: "ck2_8", category: "ch_k2", translations: { de: "Technik", en: "technology, technique", ja: "ぎじゅつ", zh: "技术" } },
          { id: "ck2_9", category: "ch_k2", translations: { de: "Techniker", en: "technician", ja: "ぎじゅつしゃ", zh: "技术员" } },
          { id: "ck2_10", category: "ch_k2", translations: { de: "Christkind", en: "Christ child", ja: "キリストのようじ", zh: "圣婴" } },
          { id: "ck2_11", category: "ch_k2", translations: { de: "Architektur", en: "architecture", ja: "けんちく", zh: "建筑（学）" } },
          { id: "ck2_12", category: "ch_k2", translations: { de: "Chronist", en: "chronicler", ja: "ねんだいきさくしゃ", zh: "编年史作者" } },
          { id: "ck2_13", category: "ch_k2", translations: { de: "Choral", en: "chorale", ja: "コラール", zh: "众赞歌" } },
          { id: "ck2_14", category: "ch_k2", translations: { de: "Chlorophyll", en: "chlorophyll", ja: "ようりょくそ", zh: "叶绿素" } }
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
          s_z1: { fr: "S simple entre voyelles = [z]", en: "Single s between vowels = [z]", de: "Einfaches s zwischen Vokalen = [z]", ja: "ぼいんの あいだの ひとつの s = [z]", zh: "元音间的单s = [z]" },
          s_z2: { fr: "S simple entre voyelles = [z]", en: "Single s between vowels = [z]", de: "Einfaches s zwischen Vokalen = [z]", ja: "ぼいんの あいだの ひとつの s = [z]", zh: "元音间的单s = [z]" },
          s_s1: { fr: "SS ou S initial = [s]", en: "SS or initial s = [s]", de: "SS oder Anfangs-s = [s]", ja: "ss または ごとうの s = [s]", zh: "SS或词首s = [s]" },
          s_s2: { fr: "SS ou S initial = [s]", en: "SS or initial s = [s]", de: "SS oder Anfangs-s = [s]", ja: "ss または ごとうの s = [s]", zh: "SS或词首s = [s]" }
        },
        items: [
          { id: "sz1_1", category: "s_z1", translations: { fr: "oser", en: "to dare", de: "wagen", ja: "あえて〜する", zh: "敢于" } },
          { id: "sz1_2", category: "s_z1", translations: { fr: "poser", en: "to place, to ask", de: "stellen", ja: "おく、たずねる", zh: "放置，提出" } },
          { id: "sz1_3", category: "s_z1", translations: { fr: "user", en: "to wear out", de: "abnutzen", ja: "すりへらす", zh: "磨损" } },
          { id: "sz1_4", category: "s_z1", translations: { fr: "cuisine", en: "kitchen", de: "Küche", ja: "だいどころ", zh: "厨房" } },
          { id: "sz1_5", category: "s_z1", translations: { fr: "musée", en: "museum", de: "Museum", ja: "はくぶつかん", zh: "博物馆" } },
          { id: "sz1_6", category: "s_z1", translations: { fr: "refuser", en: "to refuse", de: "ablehnen", ja: "ことわる", zh: "拒绝" } },
          { id: "sz1_7", category: "s_z1", translations: { fr: "utiliser", en: "to use", de: "benutzen", ja: "つかう", zh: "使用" } },
          { id: "sz1_8", category: "s_z1", translations: { fr: "organiser", en: "to organize", de: "organisieren", ja: "そしきする", zh: "组织" } },
          { id: "sz1_9", category: "s_z1", translations: { fr: "déposer", en: "to deposit, drop off", de: "hinterlegen", ja: "あずける", zh: "存放" } },
          { id: "sz1_10", category: "s_z1", translations: { fr: "proposer", en: "to propose", de: "vorschlagen", ja: "ていあんする", zh: "提议" } },
          { id: "sz1_11", category: "s_z1", translations: { fr: "arroser", en: "to water", de: "gießen", ja: "みずを やる", zh: "浇水" } },
          { id: "sz1_12", category: "s_z1", translations: { fr: "reposer", en: "to rest", de: "ausruhen", ja: "やすむ", zh: "休息" } },
          { id: "sz1_13", category: "s_z1", translations: { fr: "analyser", en: "to analyze", de: "analysieren", ja: "ぶんせきする", zh: "分析" } },
          { id: "sz1_14", category: "s_z1", translations: { fr: "visiter", en: "to visit", de: "besuchen", ja: "ほうもんする", zh: "参观" } },

          { id: "sz2_1", category: "s_z2", translations: { fr: "fusion", en: "fusion, merger", de: "Fusion", ja: "ごうへい", zh: "合并" } },
          { id: "sz2_2", category: "s_z2", translations: { fr: "confusion", en: "confusion", de: "Verwirrung", ja: "こんらん", zh: "混乱" } },
          { id: "sz2_3", category: "s_z2", translations: { fr: "télévision", en: "television", de: "Fernsehen", ja: "テレビ", zh: "电视" } },
          { id: "sz2_4", category: "s_z2", translations: { fr: "division", en: "division", de: "Division, Abteilung", ja: "ぶんかつ、ぶ", zh: "分割，部门" } },
          { id: "sz2_5", category: "s_z2", translations: { fr: "décision", en: "decision", de: "Entscheidung", ja: "けってい", zh: "决定" } },
          { id: "sz2_6", category: "s_z2", translations: { fr: "précision", en: "precision", de: "Präzision", ja: "せいかくさ", zh: "精确" } },
          { id: "sz2_7", category: "s_z2", translations: { fr: "cohésion", en: "cohesion", de: "Zusammenhalt", ja: "けっそくりょく", zh: "凝聚力" } },
          { id: "sz2_8", category: "s_z2", translations: { fr: "invasion", en: "invasion", de: "Invasion", ja: "しんりゃく", zh: "入侵" } },
          { id: "sz2_9", category: "s_z2", translations: { fr: "conclusion", en: "conclusion", de: "Schlussfolgerung", ja: "けつろん", zh: "结论" } },
          { id: "sz2_10", category: "s_z2", translations: { fr: "exclusion", en: "exclusion", de: "Ausschluss", ja: "はいじょ", zh: "排除" } },
          { id: "sz2_11", category: "s_z2", translations: { fr: "inclusion", en: "inclusion", de: "Einbeziehung", ja: "ほうがん", zh: "包含" } },
          { id: "sz2_12", category: "s_z2", translations: { fr: "tension", en: "tension", de: "Spannung", ja: "きんちょう", zh: "紧张" } },
          { id: "sz2_13", category: "s_z2", translations: { fr: "pension", en: "pension", de: "Rente", ja: "ねんきん", zh: "养老金" } },
          { id: "sz2_14", category: "s_z2", translations: { fr: "extension", en: "extension", de: "Verlängerung", ja: "えんちょう", zh: "延期" } },

          { id: "ss1_1", category: "s_s1", translations: { fr: "passer", en: "to pass (time, an exam)", de: "verbringen, bestehen", ja: "すごす、うける", zh: "度过，通过" } },
          { id: "ss1_2", category: "s_s1", translations: { fr: "laisser", en: "to let, leave", de: "lassen", ja: "のこす、させる", zh: "让，留下" } },
          { id: "ss1_3", category: "s_s1", translations: { fr: "discussion", en: "discussion", de: "Diskussion", ja: "ぎろん", zh: "讨论" } },
          { id: "ss1_4", category: "s_s1", translations: { fr: "pression", en: "pressure", de: "Druck", ja: "プレッシャー", zh: "压力" } },
          { id: "ss1_5", category: "s_s1", translations: { fr: "passion", en: "passion", de: "Leidenschaft", ja: "じょうねつ", zh: "热情" } },
          { id: "ss1_6", category: "s_s1", translations: { fr: "session", en: "session", de: "Sitzung", ja: "かいごう", zh: "会议" } },
          { id: "ss1_7", category: "s_s1", translations: { fr: "profession", en: "profession", de: "Beruf", ja: "しょくぎょう", zh: "职业" } },
          { id: "ss1_8", category: "s_s1", translations: { fr: "expression", en: "expression", de: "Ausdruck", ja: "ひょうげん", zh: "表达" } },
          { id: "ss1_9", category: "s_s1", translations: { fr: "impression", en: "impression", de: "Eindruck", ja: "いんしょう", zh: "印象" } },
          { id: "ss1_10", category: "s_s1", translations: { fr: "mission", en: "mission", de: "Mission", ja: "にんむ", zh: "任务" } },
          { id: "ss1_11", category: "s_s1", translations: { fr: "commission", en: "commission", de: "Kommission, Provision", ja: "いいんかい、てすうりょう", zh: "委员会，佣金" } },
          { id: "ss1_12", category: "s_s1", translations: { fr: "permission", en: "permission", de: "Erlaubnis", ja: "きょか", zh: "许可" } },
          { id: "ss1_13", category: "s_s1", translations: { fr: "admission", en: "admission", de: "Zulassung", ja: "にゅうがく、にゅうじょう", zh: "入学，准入" } },
          { id: "ss1_14", category: "s_s1", translations: { fr: "succession", en: "succession", de: "Nachfolge", ja: "けいしょう", zh: "继承" } },

          { id: "ss2_1", category: "s_s2", translations: { fr: "masse", en: "mass", de: "Masse", ja: "しつりょう", zh: "质量，大众" } },
          { id: "ss2_2", category: "s_s2", translations: { fr: "caisse", en: "cash register, box", de: "Kasse, Kiste", ja: "レジ、はこ", zh: "收银台，箱子" } },
          { id: "ss2_3", category: "s_s2", translations: { fr: "presse", en: "press (media)", de: "Presse", ja: "プレス、マスコミ", zh: "媒体，压力机" } },
          { id: "ss2_4", category: "s_s2", translations: { fr: "vitesse", en: "speed", de: "Geschwindigkeit", ja: "そくど", zh: "速度" } },
          { id: "ss2_5", category: "s_s2", translations: { fr: "richesse", en: "wealth", de: "Reichtum", ja: "とみ", zh: "财富" } },
          { id: "ss2_6", category: "s_s2", translations: { fr: "faiblesse", en: "weakness", de: "Schwäche", ja: "よわみ", zh: "弱点" } },
          { id: "ss2_7", category: "s_s2", translations: { fr: "jeunesse", en: "youth", de: "Jugend", ja: "わかさ", zh: "青春" } },
          { id: "ss2_8", category: "s_s2", translations: { fr: "paresse", en: "laziness", de: "Faulheit", ja: "なまけぐせ", zh: "懒惰" } },
          { id: "ss2_9", category: "s_s2", translations: { fr: "politesse", en: "politeness", de: "Höflichkeit", ja: "れいぎただしさ", zh: "礼貌" } },
          { id: "ss2_10", category: "s_s2", translations: { fr: "justesse", en: "accuracy", de: "Genauigkeit", ja: "せいかくさ", zh: "准确性" } },
          { id: "ss2_11", category: "s_s2", translations: { fr: "sagesse", en: "wisdom", de: "Weisheit", ja: "ちえ", zh: "智慧" } },
          { id: "ss2_12", category: "s_s2", translations: { fr: "promesse", en: "promise", de: "Versprechen", ja: "やくそく", zh: "承诺" } },
          { id: "ss2_13", category: "s_s2", translations: { fr: "noblesse", en: "nobility", de: "Adel", ja: "きぞく", zh: "贵族" } },
          { id: "ss2_14", category: "s_s2", translations: { fr: "détresse", en: "distress", de: "Not", ja: "くつう", zh: "困境" } }
        ]
      }
    ]
  }
};
