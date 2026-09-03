import type { TopicLesson } from "../topicTypes";

// C1 — row 7 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Interpret and reproduce formal register" via 之／其／于／乃／遂
// (classical-derived function words that remain common in modern
// formal/journalistic Chinese, despite their classical origin).
//
// Scope note: only `zh`/`en` translated — same deliberate scope
// decision as topic-42-education.ts.
//
// Pronunciation note: table assigns "Formal vs conversational
// prosody" and "Reduction in unstressed speech." Items pair a formal
// (classical-particle) phrasing against its conversational equivalent
// side by side, and separately contrast fully-articulated formal
// connectives against their casual reduced counterparts — both
// genuinely about register/prosody contrast, not single-word pairs.

export const topicMedia: TopicLesson = {
  id: "topic-c1-07-media",
  lessonNumber: 7,
  level: "C1",
  topicName: {
    zh: "媒体",
    en: "Media"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "媒体", en: "media" } },
    { id: "v02", category: "noun", translations: { zh: "新闻", en: "news" } },
    { id: "v03", category: "noun", translations: { zh: "报道", en: "report, to report" } },
    { id: "v04", category: "noun", translations: { zh: "社论", en: "editorial" } },
    { id: "v05", category: "noun", translations: { zh: "评论", en: "commentary" } },
    { id: "v06", category: "noun", translations: { zh: "立场", en: "stance, position" } },
    { id: "v07", category: "adjective", translations: { zh: "客观", en: "objective" } },
    { id: "v08", category: "adjective", translations: { zh: "主观", en: "subjective" } },
    { id: "v09", category: "noun", translations: { zh: "舆论", en: "public opinion" } },
    { id: "v10", category: "noun", translations: { zh: "记者", en: "reporter" } },
    { id: "v11", category: "noun", translations: { zh: "编辑", en: "editor" } },
    { id: "v12", category: "noun", translations: { zh: "采访", en: "interview" } },
    { id: "v13", category: "noun", translations: { zh: "头条", en: "headline" } },
    { id: "v14", category: "noun", translations: { zh: "时事", en: "current affairs" } },
    { id: "v15", category: "verb", translations: { zh: "传播", en: "to disseminate, spread" } },
    { id: "v16", category: "noun", translations: { zh: "受众", en: "audience" } },
    { id: "v17", category: "noun", translations: { zh: "公信力", en: "credibility" } },
    { id: "v18", category: "noun", translations: { zh: "偏见", en: "bias" } },
    { id: "v19", category: "adjective", translations: { zh: "中立", en: "neutral" } },
    { id: "v20", category: "noun", translations: { zh: "深度报道", en: "in-depth report" } },
    { id: "v21", category: "noun", translations: { zh: "消息来源", en: "news source" } },
    { id: "v22", category: "verb", translations: { zh: "核实", en: "to verify" } },
    { id: "v23", category: "noun", translations: { zh: "争议", en: "controversy" } },
    { id: "v24", category: "noun", translations: { zh: "舆论导向", en: "public-opinion guidance, direction" } },
    { id: "v25", category: "noun", translations: { zh: "社会责任", en: "social responsibility" } },
    { id: "v26", category: "noun", translations: { zh: "影响力", en: "influence" } },
    { id: "v27", category: "noun", translations: { zh: "传统媒体", en: "traditional media" } },
    { id: "v28", category: "noun", translations: { zh: "新媒体", en: "new media" } },
    { id: "v29", category: "noun", translations: { zh: "分析", en: "analysis" } },
    { id: "v30", category: "verb", translations: { zh: "立论", en: "to establish an argument" } }
  ],
  dialogueA: {
    title: { zh: "新闻分析", en: "News Analysis" },
    lines: [
      { id: "d1", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "这篇报道的可信度如何评估？", en: "How should the credibility of this report be assessed?" } },
      { id: "d2", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "报道的可信度乃在于消息来源的可靠性。", en: "The report's credibility lies in the reliability of its news sources." } },
      { id: "d3", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "记者在报道时应该注意什么？", en: "What should reporters pay attention to when reporting?" } },
      { id: "d4", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "保持客观，不带偏见，此乃新闻工作者之基本准则。", en: "Staying objective and unbiased is a basic principle for journalists." } },
      { id: "d5", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "媒体的公信力从何而来？", en: "Where does a media outlet's credibility come from?" } },
      { id: "d6", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "长期的准确报道有助于其公信力的建立。", en: "Consistently accurate reporting helps build its credibility." } },
      { id: "d7", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "如果发现消息有疑点，编辑会怎么做？", en: "If doubts arise about a piece of information, what will the editor do?" } },
      { id: "d8", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "编辑核实消息后，遂决定是否刊发这篇报道。", en: "After the editor verifies the information, they then decide whether to publish the report." } },
      { id: "d9", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "舆论导向对社会有什么影响？", en: "What impact does public-opinion guidance have on society?" } },
      { id: "d10", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "舆论导向关乎社会稳定，其影响不容小觑。", en: "Public-opinion guidance affects social stability, and its influence should not be underestimated." } },
      { id: "d11", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "新媒体的兴起改变了什么？", en: "What has the rise of new media changed?" } },
      { id: "d12", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "新媒体的兴起改变了传统媒体之生态。", en: "The rise of new media has changed the ecosystem of traditional media." } },
      { id: "d13", speaker: { zh: "主持人", en: "Host" }, translations: { zh: "感谢您的分析。", en: "Thank you for the analysis." } },
      { id: "d14", speaker: { zh: "分析师", en: "Analyst" }, translations: { zh: "不客气，希望对观众有所帮助。", en: "You're welcome. I hope it's helpful to viewers." } }
    ]
  },
  dialogueB: {
    title: { zh: "社论讨论", en: "Editorial Discussion" },
    lines: [
      { id: "e1", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "这篇社论的立场是不是太主观了？", en: "Isn't this editorial's stance too subjective?" } },
      { id: "e2", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "确实有这个问题，其中一些论点需要更客观的证据支持。", en: "That's indeed an issue — some of its arguments need more objective evidence to support them." } },
      { id: "e3", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "作者的消息来源核实过了吗？", en: "Has the author's news source been verified?" } },
      { id: "e4", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "记者发现疑点后，遂展开了进一步调查。", en: "After the reporter found some doubtful points, they went on to conduct further investigation." } },
      { id: "e5", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "这篇文章会不会引发争议？", en: "Could this article spark controversy?" } },
      { id: "e6", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "很有可能，其观点比较尖锐。", en: "Quite possibly — its viewpoint is fairly sharp." } },
      { id: "e7", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "我们该如何保持中立？", en: "How should we maintain neutrality?" } },
      { id: "e8", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "呈现多方观点，乃保持中立的关键。", en: "Presenting multiple perspectives is key to staying neutral." } },
      { id: "e9", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "这篇社论对舆论的影响力大吗？", en: "Will this editorial have a big influence on public opinion?" } },
      { id: "e10", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "考虑到我们的受众规模，其影响力不容小觑。", en: "Given the size of our audience, its influence shouldn't be underestimated." } },
      { id: "e11", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "我们对读者有社会责任吧？", en: "We have a social responsibility to our readers, right?" } },
      { id: "e12", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "当然，这正是新闻工作之根本。", en: "Of course — that's exactly the foundation of journalism." } },
      { id: "e13", speaker: { zh: "编辑甲", en: "Editor A" }, translations: { zh: "那我们再修改一下措辞吧。", en: "Then let's revise the wording a bit more." } },
      { id: "e14", speaker: { zh: "编辑乙", en: "Editor B" }, translations: { zh: "好，修改后遂交由主编最终审核。", en: "Sure. After revision, we'll then submit it to the editor-in-chief for final review." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "媒体评论", en: "Media Commentary" },
      lines: [
        { id: "p1", translations: { zh: "当今社会，媒体之影响力已远超以往，其触角深入社会生活的方方面面。", en: "In today's society, the influence of media far exceeds that of the past, its reach extending deep into every aspect of social life." } },
        { id: "p2", translations: { zh: "新闻报道的客观性，乃新闻工作者应恪守之基本原则。", en: "The objectivity of news reporting is a basic principle journalists must uphold." } },
        { id: "p3", translations: { zh: "然而，随着新媒体的兴起，信息传播的速度大大加快，核实消息来源之难度亦随之增加。", en: "However, as new media has risen, the speed of information dissemination has greatly increased, and the difficulty of verifying news sources has also risen accordingly." } },
        { id: "p4", translations: { zh: "一些媒体为追求点击率，往往忽视了报道的准确性，此举有损其公信力。", en: "Some media outlets, in pursuit of clicks, often neglect reporting accuracy, and this practice damages their credibility." } },
        { id: "p5", translations: { zh: "相比之下，传统媒体在深度报道方面仍具优势，其严谨的采访流程有助于保证内容质量。", en: "By comparison, traditional media still has an advantage in in-depth reporting, and its rigorous interview process helps ensure content quality." } },
        { id: "p6", translations: { zh: "值得注意的是，舆论导向对社会稳定至关重要，媒体应审慎行使其影响力。", en: "It's worth noting that public-opinion guidance is crucial to social stability, and media should exercise its influence with prudence." } },
        { id: "p7", translations: { zh: "编辑在审核报道时，若发现消息来源存疑，遂应要求记者进一步核实。", en: "When editors review reports, if a news source is found to be in doubt, they should then require the reporter to verify it further." } },
        { id: "p8", translations: { zh: "唯有坚持客观中立，媒体方能赢得受众之信任，维护自身之公信力。", en: "Only by upholding objectivity and neutrality can media win the audience's trust and maintain their own credibility." } },
        { id: "p9", translations: { zh: "于此背景下，媒体行业亟需建立更完善的自律机制，以应对新时代之挑战。", en: "Against this backdrop, the media industry urgently needs to establish a more sound self-regulation mechanism to meet the challenges of this new era." } },
        { id: "p10", translations: { zh: "总之，媒体之社会责任重大，其一言一行皆关乎公众利益，不可轻忽。", en: "In short, media bears a heavy social responsibility — its every word and action concerns the public interest and cannot be taken lightly." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，新闻工作者应恪守什么基本原则？", en: "According to the article, what basic principle should journalists uphold?" },
          options: [
            { zh: "客观性", en: "Objectivity" },
            { zh: "追求点击率", en: "Pursuing clicks" },
            { zh: "忽视消息来源", en: "Ignoring news sources" },
            { zh: "只报道好消息", en: "Only reporting good news" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "文章提到，一些媒体为追求点击率会怎样？", en: "What does the article say some media outlets do in pursuit of clicks?" },
          options: [
            { zh: "忽视报道的准确性", en: "Neglect reporting accuracy" },
            { zh: "提高报道质量", en: "Improve reporting quality" },
            { zh: "增加核实环节", en: "Add verification steps" },
            { zh: "减少报道数量", en: "Reduce the number of reports" }
          ],
          correctIndex: 0
        },
        {
          id: "q3",
          question: { zh: "传统媒体在哪方面仍具优势？", en: "In what area does traditional media still have an advantage?" },
          options: [
            { zh: "深度报道", en: "In-depth reporting" },
            { zh: "传播速度", en: "Dissemination speed" },
            { zh: "点击率", en: "Click-through rate" },
            { zh: "娱乐性", en: "Entertainment value" }
          ],
          correctIndex: 0
        },
        {
          id: "q4",
          question: { zh: "编辑在审核报道时，如果发现消息来源存疑应该怎么做？", en: "When reviewing a report, if the editor finds the news source doubtful, what should they do?" },
          options: [
            { zh: "要求记者进一步核实", en: "Require the reporter to verify it further" },
            { zh: "直接刊发", en: "Publish it directly" },
            { zh: "忽略问题", en: "Ignore the issue" },
            { zh: "删除报道", en: "Delete the report" }
          ],
          correctIndex: 0
        },
        {
          id: "q5",
          question: { zh: "文章认为，媒体如何才能赢得受众信任？", en: "How does the article say media can win the audience's trust?" },
          options: [
            { zh: "坚持客观中立", en: "Uphold objectivity and neutrality" },
            { zh: "追求点击率", en: "Pursue clicks" },
            { zh: "忽视核实", en: "Neglect verification" },
            { zh: "只报道争议话题", en: "Only report controversial topics" }
          ],
          correctIndex: 0
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "之／其／于／乃／遂：识别与理解", en: "Zhi / Qi / Yu / Nai / Sui: Recognizing and Understanding Classical-Derived Function Words" },
      explanation: {
        zh: "这几个字虽然源自古代汉语，但至今仍高频出现在现代新闻、社论等正式书面语中。「之」相当于「的」（新闻工作者之基本准则）或代词「它」（使之更客观）。「其」相当于「它的／他的／她的」（其影响力）。「于」相当于「在」（于此背景下）或「对……而言」（有助于……）。「乃」相当于「是」，常用于强调或总结（此乃关键）。「遂」相当于「于是」「就」，用于承接前文，表示随后发生的动作（遂决定）。",
        en: "Although these characters originate from classical Chinese, they still appear frequently in modern formal written Chinese, such as news and editorials. 之 is roughly equivalent to 的 (\"新闻工作者之基本准则\" = journalists' basic principle) or the pronoun \"it\" (使之更客观 = make it more objective). 其 is roughly \"its/his/her\" (其影响力 = its influence). 于 is roughly \"at/in\" (于此背景下 = against this backdrop) or \"to\" (有助于... = helpful to...). 乃 is roughly \"is,\" often used for emphasis or summary (此乃关键 = this is the key). 遂 is roughly \"thereupon/then,\" used to connect to what came before and show a subsequent action (遂决定 = then decided)."
      },
      chunks: [
        { id: "g1", translations: { zh: "这篇报道的可信度乃在于消息来源的可靠性。", en: "The report's credibility lies in the reliability of its news sources." } },
        { id: "g2", translations: { zh: "记者应保持客观，不应带有偏见，此乃新闻工作者之基本准则。", en: "Reporters should stay objective and not be biased — this is a basic principle for journalists." } },
        { id: "g3", translations: { zh: "媒体的公信力有助于其长期发展。", en: "A media outlet's credibility helps its long-term development." } },
        { id: "g4", translations: { zh: "编辑核实消息后，遂决定刊发这篇报道。", en: "After the editor verified the information, they then decided to publish the report." } },
        { id: "g5", translations: { zh: "舆论导向关乎社会稳定，其影响不容小觑。", en: "Public-opinion guidance affects social stability, and its influence should not be underestimated." } },
        { id: "g6", translations: { zh: "新媒体的兴起改变了传统媒体之生态。", en: "The rise of new media has changed the ecosystem of traditional media." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        formal1: { zh: "正式语域", en: "Formal Register" },
        formal2: { zh: "口语对照", en: "Conversational Equivalent" },
        reduce1: { zh: "完整发音（正式）", en: "Full Articulation (Formal)" },
        reduce2: { zh: "弱化发音（口语）", en: "Reduced Articulation (Casual)" }
      },
      items: [
        { id: "f1_1", category: "formal1", translations: { zh: "此乃基本原则。", en: "This is the basic principle. (formal)" } },
        { id: "f2_1", category: "formal2", translations: { zh: "这就是基本原则。", en: "This is the basic principle. (conversational)" } },
        { id: "f1_2", category: "formal1", translations: { zh: "其言不虚。", en: "Their words are not unfounded. (formal)" } },
        { id: "f2_2", category: "formal2", translations: { zh: "他说的没错。", en: "What he said is right. (conversational)" } },
        { id: "f1_3", category: "formal1", translations: { zh: "于此可见一斑。", en: "From this, one can glimpse the whole. (formal)" } },
        { id: "f2_3", category: "formal2", translations: { zh: "从这就能看出来。", en: "You can tell from this. (conversational)" } },
        { id: "f1_4", category: "formal1", translations: { zh: "乃是关键所在。", en: "This is precisely where the key lies. (formal)" } },
        { id: "f2_4", category: "formal2", translations: { zh: "这才是关键。", en: "This is the key. (conversational)" } },
        { id: "r1_1", category: "reduce1", translations: { zh: "的确如此。", en: "Indeed so. (fully articulated, formal)" } },
        { id: "r2_1", category: "reduce2", translations: { zh: "是这样的。", en: "It's like this. (casual, reduced)" } },
        { id: "r1_2", category: "reduce1", translations: { zh: "了解情况后。", en: "After understanding the situation. (fully articulated, formal)" } },
        { id: "r2_2", category: "reduce2", translations: { zh: "知道了之后。", en: "After finding out. (casual, reduced)" } },
        { id: "r1_3", category: "reduce1", translations: { zh: "着重强调。", en: "To particularly emphasize. (fully articulated, formal)" } },
        { id: "r2_3", category: "reduce2", translations: { zh: "特别强调。", en: "Especially stress. (casual, reduced)" } },
        { id: "r1_4", category: "reduce1", translations: { zh: "之所以如此。", en: "The reason it's this way. (fully articulated, formal)" } },
        { id: "r2_4", category: "reduce2", translations: { zh: "因为这样。", en: "Because of this. (casual, reduced)" } }
      ]
    }
  },
  pronunciationDrills: {
    zh: [
      {
        id: "sound-drill",
        title: { zh: "语音练习2", en: "Pronunciation Practice 2" },
        spokenIntro: {
          zh: "接下来，让我们用更多的例子来练习。",
          en: "Next, let's practice with a lot more examples."
        },
        groupLabels: {
          formal1: { zh: "正式语域", en: "Formal Register" },
          formal2: { zh: "口语对照", en: "Conversational Equivalent" },
          reduce1: { zh: "完整发音（正式）", en: "Full Articulation (Formal)" },
          reduce2: { zh: "弱化发音（口语）", en: "Reduced Articulation (Casual)" }
        },
        pairedColumns: [["formal1", "formal2"], ["reduce1", "reduce2"]],
        items: [
          { id: "f1_5", category: "formal1", translations: { zh: "其中原因值得深思。", en: "The reason among them is worth deep thought." } },
          { id: "f2_5", category: "formal2", translations: { zh: "这个原因值得想想。", en: "This reason is worth thinking about." } },
          { id: "f1_6", category: "formal1", translations: { zh: "于情于理皆说得通。", en: "It's justifiable both emotionally and rationally." } },
          { id: "f2_6", category: "formal2", translations: { zh: "从道理上也说得通。", en: "It also makes sense logically." } },
          { id: "f1_7", category: "formal1", translations: { zh: "乃是不争的事实。", en: "This is an undeniable fact." } },
          { id: "f2_7", category: "formal2", translations: { zh: "这是没法否认的事实。", en: "This is a fact that can't be denied." } },
          { id: "f1_8", category: "formal1", translations: { zh: "遂作出如下决定。", en: "Thereupon made the following decision." } },
          { id: "f2_8", category: "formal2", translations: { zh: "于是就这么决定了。", en: "So it was decided this way." } },
          { id: "f1_9", category: "formal1", translations: { zh: "其实力不容小觑。", en: "Its strength should not be underestimated." } },
          { id: "f2_9", category: "formal2", translations: { zh: "他的实力不能小看。", en: "His ability can't be looked down on." } },
          { id: "f1_10", category: "formal1", translations: { zh: "于此过程中获益良多。", en: "Gained a great deal during this process." } },
          { id: "f2_10", category: "formal2", translations: { zh: "在这个过程中学到不少。", en: "Learned quite a lot during this process." } },
          { id: "f1_11", category: "formal1", translations: { zh: "乃当务之急。", en: "This is the pressing priority." } },
          { id: "f2_11", category: "formal2", translations: { zh: "这是现在最重要的事。", en: "This is the most important thing right now." } },
          { id: "f1_12", category: "formal1", translations: { zh: "遂展开深入调查。", en: "Thereupon launched an in-depth investigation." } },
          { id: "f2_12", category: "formal2", translations: { zh: "于是开始深入调查。", en: "So began an in-depth investigation." } },
          { id: "f1_13", category: "formal1", translations: { zh: "其成效显而易见。", en: "Its effectiveness is plain to see." } },
          { id: "f2_13", category: "formal2", translations: { zh: "效果很明显。", en: "The effect is obvious." } },
          { id: "f1_14", category: "formal1", translations: { zh: "于细节处见真章。", en: "The true measure is seen in the details." } },
          { id: "f2_14", category: "formal2", translations: { zh: "细节上能看出来。", en: "You can tell from the details." } },
          { id: "f1_15", category: "formal1", translations: { zh: "乃大势所趋。", en: "This is the inevitable trend of the times." } },
          { id: "f2_15", category: "formal2", translations: { zh: "这是大趋势。", en: "This is the big trend." } },
          { id: "f1_16", category: "formal1", translations: { zh: "遂着手制定方案。", en: "Thereupon set about drafting the plan." } },
          { id: "f2_16", category: "formal2", translations: { zh: "于是开始做方案。", en: "So started making the plan." } },
          { id: "f1_17", category: "formal1", translations: { zh: "其意义深远。", en: "Its significance is far-reaching." } },
          { id: "f2_17", category: "formal2", translations: { zh: "这件事意义很大。", en: "This matter is very significant." } },
          { id: "f1_18", category: "formal1", translations: { zh: "于无形中产生影响。", en: "Produces influence imperceptibly." } },
          { id: "f2_18", category: "formal2", translations: { zh: "不知不觉产生了影响。", en: "Produced an influence without noticing." } },

          { id: "r1_5", category: "reduce1", translations: { zh: "由此可知。", en: "From this it can be known." } },
          { id: "r2_5", category: "reduce2", translations: { zh: "所以知道了。", en: "So now I know." } },
          { id: "r1_6", category: "reduce1", translations: { zh: "据此判断。", en: "Judging based on this." } },
          { id: "r2_6", category: "reduce2", translations: { zh: "照这么看的话。", en: "Looking at it this way." } },
          { id: "r1_7", category: "reduce1", translations: { zh: "依此类推。", en: "By analogy from this." } },
          { id: "r2_7", category: "reduce2", translations: { zh: "就这么类推吧。", en: "Let's just go by that logic." } },
          { id: "r1_8", category: "reduce1", translations: { zh: "因此而论。", en: "Reasoning from this." } },
          { id: "r2_8", category: "reduce2", translations: { zh: "就这么说吧。", en: "Let's just put it this way." } },
          { id: "r1_9", category: "reduce1", translations: { zh: "有鉴于此。", en: "In light of this." } },
          { id: "r2_9", category: "reduce2", translations: { zh: "就是因为这样。", en: "It's just because of this." } },
          { id: "r1_10", category: "reduce1", translations: { zh: "职是之故。", en: "For this very reason." } },
          { id: "r2_10", category: "reduce2", translations: { zh: "所以才这样。", en: "That's why it's like this." } },
          { id: "r1_11", category: "reduce1", translations: { zh: "是以如此。", en: "This is why it's so." } },
          { id: "r2_11", category: "reduce2", translations: { zh: "所以是这样。", en: "So it's like this." } },
          { id: "r1_12", category: "reduce1", translations: { zh: "故而如是。", en: "Hence it is thus." } },
          { id: "r2_12", category: "reduce2", translations: { zh: "所以才这么做。", en: "That's why it's done this way." } },
          { id: "r1_13", category: "reduce1", translations: { zh: "综上所述。", en: "In summary of the above." } },
          { id: "r2_13", category: "reduce2", translations: { zh: "总的来说吧。", en: "So, generally speaking." } },
          { id: "r1_14", category: "reduce1", translations: { zh: "据实以告。", en: "To report according to the facts." } },
          { id: "r2_14", category: "reduce2", translations: { zh: "老实告诉你。", en: "Honestly telling you." } },
          { id: "r1_15", category: "reduce1", translations: { zh: "依理而行。", en: "To act according to reason." } },
          { id: "r2_15", category: "reduce2", translations: { zh: "按道理来做。", en: "Doing it the way it makes sense." } },
          { id: "r1_16", category: "reduce1", translations: { zh: "循序渐进。", en: "Proceeding step by step." } },
          { id: "r2_16", category: "reduce2", translations: { zh: "一步一步来。", en: "Taking it one step at a time." } },
          { id: "r1_17", category: "reduce1", translations: { zh: "按部就班。", en: "Following the proper order." } },
          { id: "r2_17", category: "reduce2", translations: { zh: "按规矩来做。", en: "Doing it by the rules." } },
          { id: "r1_18", category: "reduce1", translations: { zh: "一以贯之。", en: "Consistently applying the same principle." } },
          { id: "r2_18", category: "reduce2", translations: { zh: "一直这样做。", en: "Always doing it this way." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-zhi-qi",
        title: { zh: "练习：之／其", en: "Practice: Zhi / Qi" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「之」和「其」的例句。",
          en: "Next, let's practice example sentences using 之 and 其."
        },
        lines: [
          { id: "zq1", translations: { zh: "新媒体的兴起改变了传统媒体之生态。", en: "The rise of new media has changed the ecosystem of traditional media." } },
          { id: "zq2", translations: { zh: "舆论导向关乎社会稳定，其影响不容小觑。", en: "Public-opinion guidance affects social stability, and its influence should not be underestimated." } },
          { id: "zq3", translations: { zh: "媒体的公信力有助于其长期发展。", en: "A media outlet's credibility helps its long-term development." } },
          { id: "zq4", translations: { zh: "记者应保持客观，此乃新闻工作者之基本准则。", en: "Reporters should stay objective — this is a basic principle for journalists." } },
          { id: "zq5", translations: { zh: "其言论引发了广泛讨论。", en: "Their remarks sparked widespread discussion." } },
          { id: "zq6", translations: { zh: "新闻工作者之责任重大。", en: "Journalists bear a heavy responsibility." } },
          { id: "zq7", translations: { zh: "其报道方式值得借鉴。", en: "Their way of reporting is worth learning from." } },
          { id: "zq8", translations: { zh: "媒体之影响力不容忽视。", en: "The influence of media cannot be ignored." } },
          { id: "zq9", translations: { zh: "其分析角度颇具深度。", en: "Its analytical perspective has considerable depth." } },
          { id: "zq10", translations: { zh: "编辑之职责在于把关内容质量。", en: "An editor's duty lies in gatekeeping content quality." } }
        ]
      },
      {
        id: "grammar-drill-yu-nai-sui",
        title: { zh: "练习：于／乃／遂", en: "Practice: Yu / Nai / Sui" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「于」「乃」和「遂」的例句。",
          en: "Next, let's practice example sentences using 于, 乃, and 遂."
        },
        lines: [
          { id: "yns1", translations: { zh: "这篇报道的可信度乃在于消息来源的可靠性。", en: "The report's credibility lies in the reliability of its news sources." } },
          { id: "yns2", translations: { zh: "编辑核实消息后，遂决定刊发这篇报道。", en: "After the editor verified the information, they then decided to publish the report." } },
          { id: "yns3", translations: { zh: "于此背景下，媒体行业亟需建立自律机制。", en: "Against this backdrop, the media industry urgently needs to establish a self-regulation mechanism." } },
          { id: "yns4", translations: { zh: "客观性乃新闻工作者应恪守之原则。", en: "Objectivity is a principle journalists must uphold." } },
          { id: "yns5", translations: { zh: "记者发现疑点后，遂展开深入调查。", en: "After the reporter found doubtful points, they then launched an in-depth investigation." } },
          { id: "yns6", translations: { zh: "于细节之处，方见报道之用心。", en: "It's in the details that a report's care truly shows." } },
          { id: "yns7", translations: { zh: "此乃当务之急，不容拖延。", en: "This is the pressing priority and cannot be delayed." } },
          { id: "yns8", translations: { zh: "编辑发现问题后，遂要求记者核实。", en: "After the editor found a problem, they then asked the reporter to verify it." } },
          { id: "yns9", translations: { zh: "于公于私，媒体都应保持中立。", en: "Both publicly and privately, media should remain neutral." } },
          { id: "yns10", translations: { zh: "事实乃报道之根本，不可动摇。", en: "Facts are the foundation of reporting and cannot be shaken." } }
        ]
      }
    ]
  }
};
