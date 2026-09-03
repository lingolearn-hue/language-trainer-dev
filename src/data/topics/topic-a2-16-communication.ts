import type { TopicLesson } from "../topicTypes";

// A2 — row 17 of docs/a2-master-lesson-table-v01.md. Grammar: 〜と言う
// / 〜と言っていた / 〜という (reported speech / quoting what
// someone said). Pronunciation 1/2 (B vs P, D vs T) kept exactly as
// assigned.

export const topicCommunication: TopicLesson = {
  id: "topic-a2-16-communication",
  lessonNumber: 16,
  level: "A2",
  topicName: {
    ja: "コミュニケーション",
    en: "Communication",
    de: "Kommunikation",
    zh: "沟通"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "メッセージ", en: "message", de: "Nachricht", zh: "消息" } },
    { id: "v02", category: "noun", translations: { ja: "でんごん", jaKanji: "伝言", en: "message (relayed)", de: "Bestellung (Nachricht)", zh: "留言" } },
    { id: "v03", category: "noun", translations: { ja: "ないよう", jaKanji: "内容", en: "content", de: "Inhalt", zh: "内容" } },
    { id: "v04", category: "noun", translations: { ja: "うわさ", jaKanji: "噂", en: "rumor", de: "Gerücht", zh: "传闻" } },
    { id: "v05", category: "noun", translations: { ja: "しらせ", jaKanji: "知らせ", en: "news, notification", de: "Nachricht, Bescheid", zh: "通知" } },
    { id: "v06", category: "noun", translations: { ja: "かいぎ", jaKanji: "会議", en: "meeting", de: "Besprechung", zh: "会议" } },
    { id: "v07", category: "noun", translations: { ja: "ほうこく", jaKanji: "報告", en: "report", de: "Bericht", zh: "报告" } },
    { id: "v08", category: "noun", translations: { ja: "いけん", jaKanji: "意見", en: "opinion", de: "Meinung", zh: "意见" } },
    { id: "v09", category: "noun", translations: { ja: "やくそく", jaKanji: "約束", en: "promise, appointment", de: "Versprechen, Termin", zh: "约定" } },
    { id: "v10", category: "noun", translations: { ja: "しつもん", jaKanji: "質問", en: "question", de: "Frage", zh: "问题" } },
    { id: "v11", category: "verb", translations: { ja: "つたえる", jaKanji: "伝える", en: "to convey, pass on", de: "mitteilen", zh: "传达" } },
    { id: "v12", category: "verb", translations: { ja: "きく", jaKanji: "聞く", en: "to hear, ask", de: "hören, fragen", zh: "听，问" } },
    { id: "v13", category: "verb", translations: { ja: "はなす", jaKanji: "話す", en: "to speak, talk", de: "sprechen", zh: "说话" } },
    { id: "v14", category: "verb", translations: { ja: "しらせる", jaKanji: "知らせる", en: "to inform", de: "benachrichtigen", zh: "通知" } },
    { id: "v15", category: "verb", translations: { ja: "たずねる", jaKanji: "尋ねる", en: "to ask, inquire", de: "fragen", zh: "询问" } },
    { id: "v16", category: "verb", translations: { ja: "こたえる", jaKanji: "答える", en: "to answer", de: "antworten", zh: "回答" } },
    { id: "v17", category: "verb", translations: { ja: "せつめいする", jaKanji: "説明する", en: "to explain", de: "erklären", zh: "说明" } },
    { id: "v18", category: "verb", translations: { ja: "たのむ", jaKanji: "頼む", en: "to ask a favor, request", de: "bitten", zh: "拜托" } },
    { id: "v19", category: "verb", translations: { ja: "ことわる", jaKanji: "断る", en: "to refuse, decline", de: "ablehnen", zh: "拒绝" } },
    { id: "v20", category: "verb", translations: { ja: "やくそくする", jaKanji: "約束する", en: "to promise", de: "versprechen", zh: "约定" } },
    { id: "v21", category: "verb", translations: { ja: "うわさする", jaKanji: "噂する", en: "to gossip about", de: "über jemanden reden", zh: "议论" } },
    { id: "v22", category: "verb", translations: { ja: "かんちがいする", jaKanji: "勘違いする", en: "to misunderstand", de: "missverstehen", zh: "误解" } },
    { id: "v23", category: "adjective", translations: { ja: "ただしい", jaKanji: "正しい", en: "correct", de: "richtig", zh: "正确的" } },
    { id: "v24", category: "adjective", translations: { ja: "まちがった", jaKanji: "間違った", en: "mistaken, wrong", de: "falsch", zh: "错误的" } },
    { id: "v25", category: "adjective", translations: { ja: "たしかな", jaKanji: "確かな", en: "certain, reliable", de: "sicher, zuverlässig", zh: "确实的" } },
    { id: "v26", category: "noun", translations: { ja: "でんわばんごう", jaKanji: "電話番号", en: "phone number", de: "Telefonnummer", zh: "电话号码" } },
    { id: "v27", category: "noun", translations: { ja: "るすばんでんわ", jaKanji: "留守番電話", en: "answering machine", de: "Anrufbeantworter", zh: "电话答录机" } },
    { id: "v28", category: "noun", translations: { ja: "じょうし", jaKanji: "上司", en: "boss, superior", de: "Vorgesetzte(r)", zh: "上司" } },
    { id: "v29", category: "adverb", translations: { ja: "はっきり", jaKanji: "はっきり", en: "clearly", de: "klar, deutlich", zh: "清楚地" } },
    { id: "v30", category: "adverb", translations: { ja: "たしか", jaKanji: "確か", en: "if I remember correctly", de: "wenn ich mich richtig erinnere", zh: "如果没记错的话" } }
  ],
  dialogueA: {
    title: { ja: "だれかが いった ことを つたえる", en: "Reporting What Someone Said", de: "Berichten, was jemand gesagt hat", zh: "转达某人说的话" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たなかさんが なにか いって いましたか？", jaKanji: "田中さんが何か言っていましたか？", en: "Did Tanaka say anything?", de: "Hat Herr/Frau Tanaka etwas gesagt?", zh: "田中先生说什么了吗？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、あした やすむと いって いました。", jaKanji: "はい、明日休むと言っていました。", en: "Yes, he said he'll be taking tomorrow off.", de: "Ja, er sagte, dass er morgen frei nimmt.", zh: "是的，他说明天要休息。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "りゆうは いって いましたか？", jaKanji: "理由は言っていましたか？", en: "Did he say why?", de: "Hat er den Grund genannt?", zh: "说了理由吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "びょういんに いくと いって いました。", jaKanji: "病院に行くと言っていました。", en: "He said he's going to the hospital.", de: "Er sagte, dass er zum Krankenhaus geht.", zh: "他说要去医院。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かいぎには でられると いって いましたか？", jaKanji: "会議には出られると言っていましたか？", en: "Did he say he could attend the meeting?", de: "Sagte er, dass er zur Besprechung kommen kann?", zh: "他说能出席会议吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいえ、でられないと いって いました。", jaKanji: "いいえ、出られないと言っていました。", en: "No, he said he can't attend.", de: "Nein, er sagte, dass er nicht kommen kann.", zh: "不，他说不能出席。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "「ほうこくしょ」と いう ことばの いみが わかりません。", jaKanji: "「報告書」という言葉の意味が分かりません。", en: "I don't understand the meaning of the word \"houkokusho.\"", de: "Ich verstehe die Bedeutung des Wortes „Houkokusho“ nicht.", zh: "我不明白「报告书」这个词的意思。" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "「ほうこくしょ」と いうのは、しごとの ほうこくを かく しょるいです。", jaKanji: "「報告書」というのは、仕事の報告を書く書類です。", en: "\"Houkokusho\" means a document where you write a work report.", de: "„Houkokusho“ bedeutet ein Dokument, in dem man einen Arbeitsbericht schreibt.", zh: "「报告书」是指写工作报告的文件。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "じょうしは いつまでに ほしいと いって いましたか？", jaKanji: "上司はいつまでに欲しいと言っていましたか？", en: "Did the boss say by when they want it?", de: "Hat der Chef gesagt, bis wann er es haben möchte?", zh: "上司说什么时候之前需要吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きんようびまでに ほしいと いって いました。", jaKanji: "金曜日までに欲しいと言っていました。", en: "They said they want it by Friday.", de: "Er sagte, dass er es bis Freitag haben möchte.", zh: "说星期五之前需要。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "やまださんは なんと いって いましたか？", jaKanji: "山田さんは何と言っていましたか？", en: "What did Yamada say?", de: "Was hat Herr/Frau Yamada gesagt?", zh: "山田先生说了什么？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "しつもんが あると いって いました。", jaKanji: "質問があると言っていました。", en: "He said he had a question.", de: "Er sagte, dass er eine Frage hat.", zh: "他说有问题要问。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はっきり つたえた ほうが いいですね。", jaKanji: "はっきり伝えたほうがいいですね。", en: "It's better to convey it clearly, right?", de: "Es ist besser, es klar mitzuteilen, oder?", zh: "最好清楚地传达吧。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。かんちがいすると こまりますから。", jaKanji: "そうですね。勘違いすると困りますから。", en: "That's right. It's a problem if there's a misunderstanding.", de: "Genau. Es ist ein Problem, wenn es zu einem Missverständnis kommt.", zh: "是啊。要是误解了就麻烦了。" } }
    ]
  },
  dialogueB: {
    title: { ja: "でんごんを つたえる", en: "Passing on a Message", de: "Eine Nachricht weitergeben", zh: "传达留言" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じょうしから でんごんが ありましたか？", jaKanji: "上司から伝言がありましたか？", en: "Was there a message from the boss?", de: "Gab es eine Nachricht vom Chef?", zh: "有上司留言吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、かいぎが へんこうに なったと いって いました。", jaKanji: "はい、会議が変更になったと言っていました。", en: "Yes, they said the meeting has been changed.", de: "Ja, er sagte, dass die Besprechung geändert wurde.", zh: "是的，说会议改期了。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "なんじに なったと いって いましたか？", jaKanji: "何時になったと言っていましたか？", en: "Did they say what time it's changed to?", de: "Hat er gesagt, auf welche Uhrzeit sie geändert wurde?", zh: "说改到几点了吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "さんじからだと いって いました。", jaKanji: "3時からだと言っていました。", en: "They said it's from three o'clock.", de: "Er sagte, dass sie ab drei Uhr ist.", zh: "说是三点开始。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ほかに なにか つたえたい ことは ありましたか？", jaKanji: "他に何か伝えたいことはありましたか？", en: "Was there anything else they wanted to convey?", de: "Gab es noch etwas, das er mitteilen wollte?", zh: "还有什么想传达的事吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、しりょうを もってきて ほしいと いって いました。", jaKanji: "はい、資料を持ってきてほしいと言っていました。", en: "Yes, they said they'd like you to bring the materials.", de: "Ja, er sagte, dass er möchte, dass Sie die Unterlagen mitbringen.", zh: "是的，说希望你把资料带来。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どの しりょうか いって いましたか？", jaKanji: "どの資料か言っていましたか？", en: "Did they say which materials?", de: "Hat er gesagt, welche Unterlagen?", zh: "说是哪份资料了吗？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "せんしゅうの ほうこくしょだと いって いました。", jaKanji: "先週の報告書だと言っていました。", en: "They said it's last week's report.", de: "Er sagte, dass es der Bericht von letzter Woche ist.", zh: "说是上周的报告。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たしか、あの ほうこくしょは もう おくったと おもいます。", jaKanji: "確か、あの報告書はもう送ったと思います。", en: "If I remember correctly, I think I already sent that report.", de: "Wenn ich mich richtig erinnere, glaube ich, dass ich diesen Bericht schon geschickt habe.", zh: "如果没记错的话，那份报告我应该已经发了。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうですか。じゃあ、もう いちど かくにんすると いって おきます。", jaKanji: "そうですか。じゃあ、もう一度確認すると言っておきます。", en: "I see. Then I'll go ahead and say you'll check again.", de: "Verstehe. Dann sage ich ihm, dass Sie noch einmal überprüfen.", zh: "是吗。那我先跟他说会再确认一下。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でんわばんごうは かわったと いって いましたか？", jaKanji: "電話番号は変わったと言っていましたか？", en: "Did they say the phone number changed?", de: "Hat er gesagt, dass sich die Telefonnummer geändert hat?", zh: "说电话号码变了吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、それは いって いませんでした。", jaKanji: "いいえ、それは言っていませんでした。", en: "No, they didn't say that.", de: "Nein, das hat er nicht gesagt.", zh: "不，没说这个。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わかりました。おしえて くれて ありがとうございます。", jaKanji: "分かりました。教えてくれてありがとうございます。", en: "Understood. Thank you for telling me.", de: "Verstanden. Danke, dass Sie es mir gesagt haben.", zh: "明白了。谢谢你告诉我。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、また なにか あったら すぐに つたえますね。", jaKanji: "いいえ、また何かあったらすぐに伝えますね。", en: "No problem, I'll let you know right away if there's anything else.", de: "Kein Problem, ich sage Ihnen sofort Bescheid, wenn es etwas Neues gibt.", zh: "不客气，有什么新情况我会马上告诉你的。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜と言う／〜と言っていた／〜という：ひとの ことばを つたえる", en: "~To Iu / ~To Itteita / ~To Iu: Reporting Someone's Words", de: "~To Iu / ~To Itteita / ~To Iu: Die Worte einer Person wiedergeben", zh: "〜と言う／〜と言っていた／〜という：转述他人的话" },
      explanation: {
        ja: "「〜と言う」は「Aと 言う」（Aと いう ことを いう）で、ひとの はなした ないようを かんせつてきに つたえます。「〜と言っていた」は かこに いった ことを あとで つたえる ときに つかいます（「あした やすむと 言っていました」）。「〜という」は なまえや ことばの せつめいに つかいます（「〜という ことば」＝「the word called ~」）。かぎかっこ「」で ちょくせつの ことばを かこむ ことも できます。",
        en: "~to iu (\"says A\") reports the content of what someone said indirectly. ~to itteita is used when relaying something someone said in the past (\"あした やすむと 言っていました\" = \"they said they'd be off tomorrow\"). ~to iu is also used to explain a name or word (\"〜という ことば\" = \"the word called ~\"). Quotation marks 「」 can wrap a direct quote too.",
        de: "~to iu (\"sagt A\") gibt indirekt den Inhalt dessen wieder, was jemand gesagt hat. ~to itteita wird verwendet, um etwas weiterzugeben, das jemand in der Vergangenheit gesagt hat (\"あした やすむと 言っていました\" = \"er/sie sagte, dass er/sie morgen frei nimmt\"). ~to iu wird auch verwendet, um einen Namen oder ein Wort zu erklären (\"〜という ことば\" = \"das Wort namens ~\"). Anführungszeichen 「」 können auch ein direktes Zitat umschließen.",
        zh: "〜と言う（\"说A\"）间接转述某人说话的内容。〜と言っていた用于转达某人过去说过的话（「あした やすむと 言っていました」＝\"他说明天要休息\"）。〜という也用于解释名字或词语（「〜という ことば」＝\"叫做~的词\"）。也可以用引号「」直接引用原话。"
      },
      chunks: [
        { id: "g1", translations: { ja: "たなかさんは あした やすむと 言っていました。", jaKanji: "田中さんは明日休むと言っていました。", en: "Tanaka said they'd be off tomorrow.", de: "Herr/Frau Tanaka sagte, dass er/sie morgen frei nimmt.", zh: "田中先生说明天要休息。" } },
        { id: "g2", translations: { ja: "せんせいは テストが あると 言っていました。", jaKanji: "先生はテストがあると言っていました。", en: "The teacher said there would be a test.", de: "Der Lehrer sagte, dass es einen Test geben wird.", zh: "老师说有考试。" } },
        { id: "g3", translations: { ja: "「かいぎしつ」と いう ことばを おぼえました。", jaKanji: "「会議室」という言葉を覚えました。", en: "I learned the word \"kaigishitsu\" (meeting room).", de: "Ich habe das Wort „Kaigishitsu“ (Besprechungsraum) gelernt.", zh: "我记住了「会议室」这个词。" } },
        { id: "g4", translations: { ja: "かのじょは いそがしいと 言っています。", jaKanji: "彼女は忙しいと言っています。", en: "She says she's busy.", de: "Sie sagt, dass sie beschäftigt ist.", zh: "她说她很忙。" } },
        { id: "g5", translations: { ja: "じょうしは あした こないと 言っていました。", jaKanji: "上司は明日来ないと言っていました。", en: "The boss said they wouldn't come tomorrow.", de: "Der Chef sagte, dass er morgen nicht kommt.", zh: "上司说明天不来。" } },
        { id: "g6", translations: { ja: "「しゅっちょう」と いうのは、しごとで べつの ばしょに いく ことです。", jaKanji: "「出張」というのは、仕事で別の場所に行くことです。", en: "\"Shutchou\" means going to a different place for work.", de: "„Shutchou“ bedeutet, für die Arbeit an einen anderen Ort zu gehen.", zh: "「出差」是指为了工作去别的地方。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        b: { ja: "B", en: "B", de: "B", zh: "B" },
        p: { ja: "P", en: "P", de: "P", zh: "P" },
        d: { ja: "D", en: "D", de: "D", zh: "D" },
        t: { ja: "T", en: "T", de: "T", zh: "T" }
      },
      items: [
        { id: "b1", category: "b", translations: { ja: "べんきょう", en: "study", de: "Lernen", zh: "学习" } },
        { id: "b2", category: "b", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
        { id: "b3", category: "b", translations: { ja: "ばんごう", en: "number", de: "Nummer", zh: "号码" } },
        { id: "b4", category: "b", translations: { ja: "ぶんしょ", en: "document", de: "Dokument", zh: "文件" } },
        { id: "p1", category: "p", translations: { ja: "ぱそこん", en: "personal computer", de: "PC", zh: "电脑" } },
        { id: "p2", category: "p", translations: { ja: "ぴったり", en: "exactly, perfectly", de: "genau, perfekt", zh: "正好" } },
        { id: "p3", category: "p", translations: { ja: "ぷりんと", en: "printout", de: "Ausdruck", zh: "打印件" } },
        { id: "p4", category: "p", translations: { ja: "ぺらぺら", en: "fluent", de: "fließend", zh: "流利" } },
        { id: "d1", category: "d", translations: { ja: "でんごん", en: "message (relayed, this lesson's own vocab)", de: "Nachricht (eigenes Vokabular dieser Lektion)", zh: "留言（本课词汇）" } },
        { id: "d2", category: "d", translations: { ja: "だいじな", en: "important", de: "wichtig", zh: "重要的" } },
        { id: "d3", category: "d", translations: { ja: "どうりょう", en: "colleague", de: "Kollege/Kollegin", zh: "同事" } },
        { id: "d4", category: "d", translations: { ja: "でんわ", en: "telephone", de: "Telefon", zh: "电话" } },
        { id: "t1", category: "t", translations: { ja: "たしかな", en: "certain, reliable", de: "sicher, zuverlässig", zh: "确实的" } },
        { id: "t2", category: "t", translations: { ja: "つたえる", en: "to convey", de: "mitteilen", zh: "传达" } },
        { id: "t3", category: "t", translations: { ja: "とくべつな", en: "special", de: "besonders", zh: "特别的" } },
        { id: "t4", category: "t", translations: { ja: "てんきん", en: "job transfer", de: "Versetzung", zh: "调职" } }
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
          b: { ja: "B", en: "B", de: "B", zh: "B" },
          p: { ja: "P", en: "P", de: "P", zh: "P" },
          d: { ja: "D", en: "D", de: "D", zh: "D" },
          t: { ja: "T", en: "T", de: "T", zh: "T" }
        },
        items: [
          { id: "b5", category: "b", translations: { ja: "ばんぐみ", en: "TV program", de: "Fernsehprogramm", zh: "节目" } },
          { id: "b6", category: "b", translations: { ja: "びっくりする", en: "to be surprised", de: "überrascht sein", zh: "吃惊" } },
          { id: "b7", category: "b", translations: { ja: "ぶちょう", en: "department head", de: "Abteilungsleiter(in)", zh: "部长" } },
          { id: "b8", category: "b", translations: { ja: "べつべつに", en: "separately", de: "getrennt", zh: "分别" } },
          { id: "b9", category: "b", translations: { ja: "ぼしゅう", en: "recruitment", de: "Ausschreibung", zh: "招募" } },
          { id: "b10", category: "b", translations: { ja: "ばいてん", en: "kiosk, shop stand", de: "Kiosk", zh: "小卖部" } },
          { id: "b11", category: "b", translations: { ja: "びしょう", en: "smile", de: "Lächeln", zh: "微笑" } },
          { id: "b12", category: "b", translations: { ja: "ぶれい", en: "rudeness", de: "Unhöflichkeit", zh: "无礼" } },
          { id: "b13", category: "b", translations: { ja: "べんかい", en: "excuse, explanation", de: "Ausrede", zh: "辩解" } },
          { id: "b14", category: "b", translations: { ja: "ぼうえき", en: "trade (commerce)", de: "Handel", zh: "贸易" } },
          { id: "b15", category: "b", translations: { ja: "ばつ", en: "penalty, cross mark", de: "Strafe, Kreuz", zh: "惩罚，叉号" } },
          { id: "b16", category: "b", translations: { ja: "びじゅつ", en: "art", de: "Kunst", zh: "美术" } },
          { id: "b17", category: "b", translations: { ja: "ぶんめい", en: "civilization", de: "Zivilisation", zh: "文明" } },
          { id: "b18", category: "b", translations: { ja: "べんり", en: "convenient", de: "praktisch", zh: "方便" } },

          { id: "p5", category: "p", translations: { ja: "ぱたぱた", en: "flapping sound", de: "Flattergeräusch", zh: "啪嗒声" } },
          { id: "p6", category: "p", translations: { ja: "ぴかぴか", en: "shiny, sparkling", de: "glänzend", zh: "闪闪发光" } },
          { id: "p7", category: "p", translations: { ja: "ぷかぷか", en: "floating gently", de: "sanft schwebend", zh: "漂浮貌" } },
          { id: "p8", category: "p", translations: { ja: "ぺこぺこ", en: "very hungry", de: "sehr hungrig", zh: "饥饿" } },
          { id: "p9", category: "p", translations: { ja: "ぽかぽか", en: "warm and pleasant", de: "angenehm warm", zh: "暖洋洋" } },
          { id: "p10", category: "p", translations: { ja: "きっぷ", en: "ticket", de: "Fahrkarte", zh: "票" } },
          { id: "p11", category: "p", translations: { ja: "しんぱい", en: "worry", de: "Sorge", zh: "担心" } },
          { id: "p12", category: "p", translations: { ja: "さんぽ", en: "walk, stroll", de: "Spaziergang", zh: "散步" } },
          { id: "p13", category: "p", translations: { ja: "えんぴつ", en: "pencil", de: "Bleistift", zh: "铅笔" } },
          { id: "p14", category: "p", translations: { ja: "ぜんぶ", en: "all, everything", de: "alles", zh: "全部" } },
          { id: "p15", category: "p", translations: { ja: "はっぱ", en: "leaf", de: "Blatt", zh: "叶子" } },
          { id: "p16", category: "p", translations: { ja: "せんぱい", en: "senior (school/work)", de: "Senior", zh: "前辈" } },
          { id: "p17", category: "p", translations: { ja: "きんぱつ", en: "blond hair", de: "blondes Haar", zh: "金发" } },
          { id: "p18", category: "p", translations: { ja: "たんぽぽ", en: "dandelion", de: "Löwenzahn", zh: "蒲公英" } },

          { id: "d5", category: "d", translations: { ja: "だんかい", en: "stage, phase", de: "Phase", zh: "阶段" } },
          { id: "d6", category: "d", translations: { ja: "でんとう", en: "tradition", de: "Tradition", zh: "传统" } },
          { id: "d7", category: "d", translations: { ja: "どりょく", en: "effort", de: "Anstrengung", zh: "努力" } },
          { id: "d8", category: "d", translations: { ja: "だいじょうぶ", en: "okay, alright", de: "in Ordnung", zh: "没关系" } },
          { id: "d9", category: "d", translations: { ja: "でぐち", en: "exit", de: "Ausgang", zh: "出口" } },
          { id: "d10", category: "d", translations: { ja: "どくしん", en: "single, unmarried", de: "ledig", zh: "单身" } },
          { id: "d11", category: "d", translations: { ja: "だんたい", en: "organization, group", de: "Organisation", zh: "团体" } },
          { id: "d12", category: "d", translations: { ja: "でんし", en: "electron, electronic", de: "elektronisch", zh: "电子" } },
          { id: "d13", category: "d", translations: { ja: "どうにゅう", en: "introduction (of a system)", de: "Einführung", zh: "引进" } },
          { id: "d14", category: "d", translations: { ja: "だいひょう", en: "representative", de: "Vertreter(in)", zh: "代表" } },
          { id: "d15", category: "d", translations: { ja: "でむかえ", en: "greeting, pickup", de: "Abholung", zh: "迎接" } },
          { id: "d16", category: "d", translations: { ja: "どうい", en: "agreement, consent", de: "Zustimmung", zh: "同意" } },
          { id: "d17", category: "d", translations: { ja: "だとう", en: "reasonable, appropriate", de: "angemessen", zh: "妥当" } },
          { id: "d18", category: "d", translations: { ja: "でんごんばん", en: "message board", de: "Nachrichtenbrett", zh: "留言板" } },

          { id: "t5", category: "t", translations: { ja: "たいおうする", en: "to respond, handle", de: "reagieren", zh: "应对" } },
          { id: "t6", category: "t", translations: { ja: "てちがい", en: "misstep, blunder", de: "Missgeschick", zh: "失误" } },
          { id: "t7", category: "t", translations: { ja: "とりつぐ", en: "to relay, pass on", de: "weiterleiten", zh: "转达" } },
          { id: "t8", category: "t", translations: { ja: "たんとう", en: "in charge of", de: "zuständig für", zh: "负责" } },
          { id: "t9", category: "t", translations: { ja: "ていねいな", en: "polite, careful", de: "höflich", zh: "礼貌的" } },
          { id: "t10", category: "t", translations: { ja: "とうじつ", en: "the day itself", de: "der betreffende Tag", zh: "当天" } },
          { id: "t11", category: "t", translations: { ja: "たいせつな", en: "important", de: "wichtig", zh: "重要的" } },
          { id: "t12", category: "t", translations: { ja: "てきかくな", en: "accurate, precise", de: "präzise", zh: "准确的" } },
          { id: "t13", category: "t", translations: { ja: "とうぶん", en: "for the time being", de: "vorerst", zh: "暂时" } },
          { id: "t14", category: "t", translations: { ja: "たいしゃ", en: "leaving a company", de: "Firmenaustritt", zh: "离职" } },
          { id: "t15", category: "t", translations: { ja: "てはい", en: "arrangement", de: "Vorkehrung", zh: "安排" } },
          { id: "t16", category: "t", translations: { ja: "とりあえず", en: "for now, first of all", de: "erst einmal", zh: "首先" } },
          { id: "t17", category: "t", translations: { ja: "たずさわる", en: "to be involved in", de: "beteiligt sein", zh: "从事" } },
          { id: "t18", category: "t", translations: { ja: "てんきん", en: "job transfer", de: "Versetzung", zh: "调职" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-toiu",
        title: { ja: "れんしゅう：〜と言う／〜と言っていた", en: "Practice: ~To Iu / ~To Itteita", de: "Übung: ~To Iu / ~To Itteita", zh: "练习：〜と言う／〜と言っていた" },
        spokenIntro: {
          ja: "つぎは、「〜と言う」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~to iu.",
          de: "Als Nächstes üben wir Beispielsätze mit ~to iu.",
          zh: "接下来，让我们练习使用「〜と言う」的例句。"
        },
        lines: [
          { id: "ti1", translations: { ja: "たなかさんは あした やすむと 言っていました。", jaKanji: "田中さんは明日休むと言っていました。", en: "Tanaka said they'd be off tomorrow.", de: "Herr/Frau Tanaka sagte, dass er/sie morgen frei nimmt.", zh: "田中先生说明天要休息。" } },
          { id: "ti2", translations: { ja: "せんせいは テストが あると 言っていました。", jaKanji: "先生はテストがあると言っていました。", en: "The teacher said there would be a test.", de: "Der Lehrer sagte, dass es einen Test geben wird.", zh: "老师说有考试。" } },
          { id: "ti3", translations: { ja: "かのじょは いそがしいと 言っています。", jaKanji: "彼女は忙しいと言っています。", en: "She says she's busy.", de: "Sie sagt, dass sie beschäftigt ist.", zh: "她说她很忙。" } },
          { id: "ti4", translations: { ja: "じょうしは あした こないと 言っていました。", jaKanji: "上司は明日来ないと言っていました。", en: "The boss said they wouldn't come tomorrow.", de: "Der Chef sagte, dass er morgen nicht kommt.", zh: "上司说明天不来。" } },
          { id: "ti5", translations: { ja: "どうりょうは かいぎが あると 言っていました。", jaKanji: "同僚は会議があると言っていました。", en: "My colleague said there's a meeting.", de: "Mein Kollege sagte, dass es eine Besprechung gibt.", zh: "同事说有会议。" } },
          { id: "ti6", translations: { ja: "ともだちは たのしかったと 言っていました。", jaKanji: "友達は楽しかったと言っていました。", en: "My friend said it was fun.", de: "Mein Freund sagte, dass es Spaß gemacht hat.", zh: "朋友说很开心。" } },
          { id: "ti7", translations: { ja: "かちょうは しゅっちょうすると 言っていました。", jaKanji: "課長は出張すると言っていました。", en: "The section chief said they'd be going on a business trip.", de: "Der Abteilungsleiter sagte, dass er auf Geschäftsreise geht.", zh: "科长说要出差。" } },
          { id: "ti8", translations: { ja: "がくせいは わからないと 言っていました。", jaKanji: "学生は分からないと言っていました。", en: "The student said they didn't understand.", de: "Der Student sagte, dass er es nicht versteht.", zh: "学生说不明白。" } },
          { id: "ti9", translations: { ja: "かのじょは しつもんが あると 言いました。", jaKanji: "彼女は質問があると言いました。", en: "She said she had a question.", de: "Sie sagte, dass sie eine Frage hat.", zh: "她说有问题。" } },
          { id: "ti10", translations: { ja: "みんな おなじ いけんだと 言っていました。", jaKanji: "みんな同じ意見だと言っていました。", en: "Everyone said they had the same opinion.", de: "Alle sagten, dass sie derselben Meinung sind.", zh: "大家都说意见相同。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "つたえたい こと", en: "What I Want to Convey", de: "Was ich mitteilen möchte" },
    lines: [
      { id: "sg1", translations: { ja: "きみが 言った ことば", en: "The words you said", de: "Die Worte, die du gesagt hast" } },
      { id: "sg2", translations: { ja: "だいじに おぼえて いる", en: "I remember them dearly", de: "Ich erinnere mich liebevoll daran" } },
      { id: "sg3", translations: { ja: "はっきり つたえたい", en: "I want to convey it clearly", de: "Ich möchte es klar mitteilen" } },
      { id: "sg4", translations: { ja: "きみに いま すぐに", en: "To you, right now", de: "Dir, jetzt sofort" } }
    ]
  }
};
