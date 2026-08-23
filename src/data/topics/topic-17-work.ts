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
  id: "topic-17-work",
  lessonNumber: 17,
  topicName: {
    ja: "しごと",
    en: "Work",
    de: "Arbeit",
    zh: "工作"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "しごと", en: "job, work", de: "Arbeit, Beruf", zh: "工作" } },
    { id: "v02", category: "noun", translations: { ja: "かいしゃ", en: "company", de: "Firma", zh: "公司" } },
    { id: "v03", category: "noun", translations: { ja: "かいしゃいん", en: "company employee", de: "Angestellte/r", zh: "公司职员" } },
    { id: "v04", category: "noun", translations: { ja: "しゃちょう", en: "company president", de: "Firmenchef/in", zh: "总经理" } },
    { id: "v05", category: "noun", translations: { ja: "どうりょう", en: "coworker", de: "Kollege, Kollegin", zh: "同事" } },
    { id: "v06", category: "noun", translations: { ja: "ぶちょう", en: "department manager", de: "Abteilungsleiter/in", zh: "部长" } },
    { id: "v07", category: "noun", translations: { ja: "かちょう", en: "section manager", de: "Bereichsleiter/in", zh: "科长" } },
    { id: "v08", category: "noun", translations: { ja: "きゅうりょう", en: "salary", de: "Gehalt", zh: "工资" } },
    { id: "v09", category: "verb", translations: { ja: "はたらく", en: "to work", de: "arbeiten", zh: "工作" } },
    { id: "v10", category: "noun", translations: { ja: "やすみ", en: "day off", de: "freier Tag", zh: "休息日" } },
    { id: "v11", category: "noun", translations: { ja: "ざんぎょう", en: "overtime", de: "Überstunden", zh: "加班" } },
    { id: "v12", category: "noun", translations: { ja: "かいぎ", en: "meeting", de: "Besprechung", zh: "会议" } },
    { id: "v13", category: "noun", translations: { ja: "めいし", en: "business card", de: "Visitenkarte", zh: "名片" } },
    { id: "v14", category: "noun", translations: { ja: "オフィス", en: "office", de: "Büro", zh: "办公室" } },
    { id: "v15", category: "noun", translations: { ja: "デスク", en: "desk", de: "Schreibtisch", zh: "办公桌" } },
    { id: "v16", category: "noun", translations: { ja: "パソコン", en: "computer", de: "Computer", zh: "电脑" } },
    { id: "v17", category: "noun", translations: { ja: "メール", en: "email", de: "E-Mail", zh: "邮件" } },
    { id: "v18", category: "verb", translations: { ja: "でんわする", en: "to make a phone call", de: "telefonieren", zh: "打电话" } },
    { id: "v19", category: "verb", translations: { ja: "れんらくする", en: "to contact", de: "kontaktieren", zh: "联系" } },
    { id: "v20", category: "verb", translations: { ja: "そうだんする", en: "to consult, discuss", de: "besprechen", zh: "商量" } },
    { id: "v21", category: "verb", translations: { ja: "てつだう", en: "to help", de: "helfen", zh: "帮忙" } },
    { id: "v22", category: "verb", translations: { ja: "がんばる", en: "to do one's best", de: "sich anstrengen", zh: "努力" } },
    { id: "v23", category: "verb", translations: { ja: "つかれる", en: "to get tired", de: "müde werden", zh: "累" } },
    { id: "v24", category: "adjective", translations: { ja: "いそがしい", en: "busy", de: "beschäftigt", zh: "忙碌的" } },
    { id: "v25", category: "adjective", translations: { ja: "たいへんな", en: "tough, difficult", de: "anstrengend", zh: "辛苦的" } },
    { id: "v26", category: "adjective", translations: { ja: "きびしい", en: "strict", de: "streng", zh: "严格的" } },
    { id: "v27", category: "verb", translations: { ja: "やめる", en: "to quit", de: "kündigen, aufhören", zh: "辞职" } },
    { id: "v28", category: "noun", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验" } },
    { id: "v29", category: "noun", translations: { ja: "しょうしん", en: "promotion", de: "Beförderung", zh: "晋升" } },
    { id: "v30", category: "noun", translations: { ja: "プロジェクト", en: "project", de: "Projekt", zh: "项目" } }
  ],
  dialogueA: {
    title: { ja: "パーティーで しごとの はなし", en: "Talking About Work at a Party", de: "Über die Arbeit auf einer Party sprechen", zh: "在派对上聊工作" },
    lines: [
      { id: "d1", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "おしごとは なにを していますか？", en: "What kind of work do you do?", de: "Was für eine Arbeit machen Sie?", zh: "您是做什么工作的？" } },
      { id: "d2", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かいしゃいんです。ぼうえきの かいしゃで はたらいています。", en: "I'm a company employee. I work at a trading company.", de: "Ich bin Angestellte. Ich arbeite bei einer Handelsfirma.", zh: "我是公司职员。我在一家贸易公司工作。" } },
      { id: "d3", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "そうですか。いそがしいですか？", en: "I see. Are you busy?", de: "Verstehe. Sind Sie beschäftigt?", zh: "是这样啊。忙吗？" } },
      { id: "d4", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、まいにち ざんぎょうしています。", en: "Yes, I work overtime every day.", de: "Ja, ich mache jeden Tag Überstunden.", zh: "是的，我每天都加班。" } },
      { id: "d5", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "たいへんですね。どうりょうは いい人ですか？", en: "That sounds tough. Are your coworkers nice?", de: "Das klingt anstrengend. Sind Ihre Kollegen nett?", zh: "真辛苦啊。同事人好吗？" } },
      { id: "d6", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はい、みんな しんせつです。でも ぶちょうは きびしいです。", en: "Yes, everyone is kind. But the department manager is strict.", de: "Ja, alle sind nett. Aber der Abteilungsleiter ist streng.", zh: "是的，大家都很友善。但是部长很严格。" } },
      { id: "d7", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "りくさんは なんの しごとを していますか？", en: "What about you, Riku, what's your job?", de: "Und was machen Sie beruflich, Riku?", zh: "陆先生您是做什么工作的？" } },
      { id: "d8", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "エンジニアです。プロジェクトを かんりしています。", en: "I'm an engineer. I manage projects.", de: "Ich bin Ingenieur. Ich leite Projekte.", zh: "我是工程师。我管理项目。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かっこいいですね！けいけんは ながいですか？", en: "That's cool! Do you have a lot of experience?", de: "Das klingt cool! Haben Sie viel Erfahrung?", zh: "真厉害！经验丰富吗？" } },
      { id: "d10", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "はい、じゅうねん はたらいています。", en: "Yes, I've been working for ten years.", de: "Ja, ich arbeite seit zehn Jahren.", zh: "是的，我工作十年了。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しょうしんの チャンスは ありますか？", en: "Are there chances for promotion?", de: "Gibt es Aufstiegsmöglichkeiten?", zh: "有晋升的机会吗？" } },
      { id: "d12", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "はい、らいねん かちょうに なるかもしれません。", en: "Yes, I might become a section manager next year.", de: "Ja, nächstes Jahr werde ich vielleicht Bereichsleiter.", zh: "有，明年我可能会当科长。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "すごいですね！おめでとうございます。", en: "That's amazing! Congratulations.", de: "Fantastisch! Herzlichen Glückwunsch.", zh: "太棒了！恭喜您。" } },
      { id: "d14", speaker: { ja: "りく", en: "Riku", de: "Riku", zh: "陆" }, translations: { ja: "ありがとうございます。がんばります。", en: "Thank you. I'll do my best.", de: "Danke. Ich werde mein Bestes geben.", zh: "谢谢。我会努力的。" } }
    ]
  },
  dialogueB: {
    title: { ja: "たいへんな どうりょうの はなし", en: "Complaining About a Difficult Coworker", de: "Über einen schwierigen Kollegen klagen", zh: "抱怨难相处的同事" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "けんさん、なんだか つかれた かおを していますね。", en: "Ken, you look tired somehow.", de: "Ken, Sie sehen irgendwie müde aus.", zh: "健先生，您看起来有点累啊。" } },
      { id: "e2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うん、どうりょうの ことで こまっているんだ。", en: "Yeah, I'm having trouble with a coworker.", de: "Ja, ich habe Ärger mit einem Kollegen.", zh: "嗯，我在为一个同事的事发愁。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どうしたの？", en: "What happened?", de: "Was ist passiert?", zh: "怎么了？" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しごとを てつだって くれないんだ。", en: "He won't help me with work.", de: "Er hilft mir nicht bei der Arbeit.", zh: "他不帮我做工作。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは たいへんね。かちょうに そうだんした？", en: "That's tough. Did you talk to the section manager?", de: "Das ist schwierig. Haben Sie mit dem Bereichsleiter gesprochen?", zh: "那真是辛苦。你跟科长商量了吗？" } },
      { id: "e6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "まだ そうだんしていないんだ。こわいから。", en: "I haven't talked to him yet. I'm scared.", de: "Ich habe noch nicht mit ihm gesprochen. Ich habe Angst.", zh: "我还没商量。因为有点害怕。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "だいじょうぶだよ。れんらくしてみたら？", en: "It'll be fine. Why don't you try contacting him?", de: "Es wird schon gut gehen. Warum versuchen Sie nicht, ihn zu kontaktieren?", zh: "没关系的。要不要试着联系他？" } },
      { id: "e8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうだね。メールを かいてみるよ。", en: "You're right. I'll try writing an email.", de: "Sie haben recht. Ich versuche eine E-Mail zu schreiben.", zh: "你说得对。我试着写封邮件吧。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ざんぎょうは おおいの？", en: "Do you work a lot of overtime?", de: "Machen Sie viele Überstunden?", zh: "你经常加班吗？" } },
      { id: "e10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うん、まいばん おそくまで オフィスに いるよ。", en: "Yeah, I'm at the office late every night.", de: "Ja, ich bin jeden Abend bis spät im Büro.", zh: "嗯，我每晚都很晚才离开办公室。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "やすみは ちゃんと とっているの？", en: "Are you taking your days off properly?", de: "Nehmen Sie sich Ihre freien Tage?", zh: "你有好好休假吗？" } },
      { id: "e12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "あまり とれていないんだ。", en: "Not really.", de: "Nicht wirklich.", zh: "没怎么休。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "それは からだに よくないよ。きをつけてね。", en: "That's not good for your health. Please take care.", de: "Das ist nicht gut für Ihre Gesundheit. Passen Sie auf sich auf.", zh: "那对身体不好。要多注意啊。" } },
      { id: "e14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ありがとう。そうするよ。", en: "Thanks. I will.", de: "Danke. Das werde ich.", zh: "谢谢。我会的。" } }
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
    }
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
    }
  }
};
