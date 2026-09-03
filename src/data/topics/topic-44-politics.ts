import type { TopicLesson } from "../topicTypes";

// C1 — row 3 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Emphasize specific information" via 是……的／正是……／……才是……
//
// Scope note: only `zh` (target) and `en` (source) translated — same
// deliberate scope decision as topic-42-education.ts.
//
// Pronunciation note: the table assigns "Contrastive stress" and
// "Cleft intonation" — this lesson's grammar point (是...的/正是/...
// 才是) IS the cleft/emphatic construction, so pronunciation examples
// naturally reuse the same sentence patterns as the grammar section,
// just focused on where the vocal emphasis falls rather than the
// grammar itself. Items are short marked sentences, not single words
// (see topic-42's header comment for the general reasoning).

export const topicPolitics: TopicLesson = {
  id: "topic-c1-03-politics",
  lessonNumber: 44,
  level: "C1",
  topicName: {
    zh: "政治",
    en: "Politics"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "选举", en: "election" } },
    { id: "v02", category: "noun", translations: { zh: "候选人", en: "candidate" } },
    { id: "v03", category: "verb", translations: { zh: "投票", en: "to vote" } },
    { id: "v04", category: "noun", translations: { zh: "政党", en: "political party" } },
    { id: "v05", category: "verb", translations: { zh: "执政", en: "to be in power, govern" } },
    { id: "v06", category: "noun", translations: { zh: "在野党", en: "opposition party" } },
    { id: "v07", category: "noun", translations: { zh: "政纲", en: "political platform" } },
    { id: "v08", category: "noun", translations: { zh: "民意", en: "public opinion" } },
    { id: "v09", category: "noun", translations: { zh: "议会", en: "parliament" } },
    { id: "v10", category: "noun", translations: { zh: "立法", en: "legislation" } },
    { id: "v11", category: "noun", translations: { zh: "施政", en: "governance, administration" } },
    { id: "v12", category: "noun", translations: { zh: "选民", en: "voter" } },
    { id: "v13", category: "verb", translations: { zh: "竞选", en: "to campaign (for election)" } },
    { id: "v14", category: "noun", translations: { zh: "政治改革", en: "political reform" } },
    { id: "v15", category: "noun", translations: { zh: "权力", en: "power" } },
    { id: "v16", category: "noun", translations: { zh: "制衡", en: "checks and balances" } },
    { id: "v17", category: "noun", translations: { zh: "透明度", en: "transparency" } },
    { id: "v18", category: "noun", translations: { zh: "问责", en: "accountability" } },
    { id: "v19", category: "noun", translations: { zh: "腐败", en: "corruption" } },
    { id: "v20", category: "noun", translations: { zh: "民主", en: "democracy" } },
    { id: "v21", category: "noun", translations: { zh: "优先事项", en: "priority" } },
    { id: "v22", category: "noun", translations: { zh: "支持率", en: "approval rating" } },
    { id: "v23", category: "noun", translations: { zh: "辩论", en: "debate" } },
    { id: "v24", category: "verb", translations: { zh: "表态", en: "to state one's position" } },
    { id: "v25", category: "verb", translations: { zh: "承诺", en: "to promise, commitment" } },
    { id: "v26", category: "verb", translations: { zh: "兑现", en: "to fulfill (a promise)" } },
    { id: "v27", category: "noun", translations: { zh: "妥协", en: "compromise" } },
    { id: "v28", category: "noun", translations: { zh: "联盟", en: "coalition, alliance" } },
    { id: "v29", category: "verb", translations: { zh: "争取", en: "to strive for" } },
    { id: "v30", category: "adjective", translations: { zh: "关键", en: "key, crucial" } }
  ],
  dialogueA: {
    title: { zh: "选举辩论", en: "Election Debate" },
    lines: [
      { id: "d1", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "昨晚的选举辩论，你怎么看两位候选人的表现？", en: "What did you think of the two candidates' performances in last night's election debate?" } },
      { id: "d2", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "是候选人甲更清楚地表明了立场，不是候选人乙。", en: "It was Candidate A who stated their position more clearly, not Candidate B." } },
      { id: "d3", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "他在腐败问题上的表态，是不是赢得了不少支持？", en: "Did his statement on the corruption issue win him quite a lot of support?" } },
      { id: "d4", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "正是这种坦率的态度，打动了不少中立选民。", en: "It was precisely that candid attitude that moved quite a few undecided voters." } },
      { id: "d5", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "候选人乙则更强调施政经验，这是不是他的优势？", en: "Candidate B, on the other hand, emphasized governing experience more — is that his advantage?" } },
      { id: "d6", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "经验固然重要，但真正打动选民的才是具体的政纲。", en: "Experience is certainly important, but what really moves voters is the concrete platform." } },
      { id: "d7", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "这场辩论是在什么背景下举行的？", en: "In what context was this debate held?" } },
      { id: "d8", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "是在支持率胶着的情况下举行的，双方都不敢松懈。", en: "It was held while approval ratings were neck and neck, so neither side dared to let up." } },
      { id: "d9", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "议会里的在野党，会怎么回应这场辩论？", en: "How will the opposition party in parliament respond to this debate?" } },
      { id: "d10", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "他们大概会继续质疑执政党的透明度问题。", en: "They'll probably keep questioning the ruling party's transparency." } },
      { id: "d11", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "你觉得最终决定选情的会是什么？", en: "What do you think will ultimately decide the outcome of the election?" } },
      { id: "d12", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "民意才是最终决定选情的关键因素。", en: "Public opinion is the key factor that will ultimately decide the outcome." } },
      { id: "d13", speaker: { zh: "评论员甲", en: "Commentator A" }, translations: { zh: "感谢你的分析。", en: "Thanks for the analysis." } },
      { id: "d14", speaker: { zh: "评论员乙", en: "Commentator B" }, translations: { zh: "不客气，我们拭目以待最终结果。", en: "You're welcome. Let's wait and see the final result." } }
    ]
  },
  dialogueB: {
    title: { zh: "政策优先事项", en: "Policy Priorities" },
    lines: [
      { id: "e1", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "新政府上任后，应该把什么列为优先事项？", en: "After the new government takes office, what should it list as a priority?" } },
      { id: "e2", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "真正重要的才是民生问题，不是口号。", en: "What's really important is livelihood issues, not slogans." } },
      { id: "e3", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "那这项立法是在什么情况下推动的？", en: "So under what circumstances was this legislation pushed forward?" } },
      { id: "e4", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "是在民众长期呼吁下才推动的。", en: "It was only pushed forward after long-standing public appeals." } },
      { id: "e5", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "正是因为民众的支持，改革才得以推进吗？", en: "Is it precisely because of public support that the reform was able to move forward?" } },
      { id: "e6", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "没错，正是这种支持给了执政党推进改革的底气。", en: "That's right, it's precisely that support that gave the ruling party the confidence to push reform forward." } },
      { id: "e7", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "在野党会不会因此而妥协？", en: "Will the opposition compromise because of this?" } },
      { id: "e8", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "他们可能会在部分议题上妥协，但核心立场不会改变。", en: "They might compromise on some issues, but their core position won't change." } },
      { id: "e9", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "竞选时承诺的政策，能兑现吗？", en: "Can the policies promised during the campaign be fulfilled?" } },
      { id: "e10", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "兑现承诺才是赢得民心的关键。", en: "Fulfilling promises is the key to winning the hearts of the people." } },
      { id: "e11", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "腐败问题会不会被列为优先事项？", en: "Will the corruption issue be listed as a priority?" } },
      { id: "e12", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "正是这个问题，最容易影响支持率。", en: "It's precisely this issue that most easily affects approval ratings." } },
      { id: "e13", speaker: { zh: "顾问甲", en: "Advisor A" }, translations: { zh: "那我们建议把它排在第一位吗？", en: "So should we suggest putting it first?" } },
      { id: "e14", speaker: { zh: "顾问乙", en: "Advisor B" }, translations: { zh: "问责机制的完善，才是解决腐败问题的根本。", en: "Improving the accountability mechanism is truly what will fundamentally solve the corruption issue." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "政治改革", en: "Political Reform" },
      lines: [
        { id: "p1", translations: { zh: "近年来，许多国家都在推动政治改革，以提升治理效率和民众信任。", en: "In recent years, many countries have been pushing political reform to improve governance efficiency and public trust." } },
        { id: "p2", translations: { zh: "这些改革往往是在民意压力和社会变化的双重推动下进行的。", en: "These reforms are often carried out under the dual pressure of public opinion and social change." } },
        { id: "p3", translations: { zh: "正是由于民众对透明度和问责制的要求不断提高，政府才不得不做出相应调整。", en: "It is precisely because the public's demand for transparency and accountability has kept rising that the government has had to make corresponding adjustments." } },
        { id: "p4", translations: { zh: "一些学者认为，真正重要的才是权力制衡机制的完善，而不仅仅是形式上的选举。", en: "Some scholars believe that what's really important is improving the mechanism of checks and balances, not just holding elections in form." } },
        { id: "p5", translations: { zh: "例如，某些国家近期通过的反腐败法案，就是在长期社会压力下才得以实现的。", en: "For example, the anti-corruption bills recently passed in some countries were only made possible under long-term social pressure." } },
        { id: "p6", translations: { zh: "与此同时，反对党也在竞选中提出了各自的政纲，试图赢得选民的支持。", en: "At the same time, opposition parties have also put forward their own platforms during campaigns, trying to win voter support." } },
        { id: "p7", translations: { zh: "然而，政治改革并非一蹴而就，往往需要在不同利益集团之间不断协调与妥协。", en: "However, political reform is not achieved overnight; it often requires continuous coordination and compromise among different interest groups." } },
        { id: "p8", translations: { zh: "正是这种复杂的博弈过程，使得改革的进展常常比预期缓慢。", en: "It is precisely this complex process of maneuvering that often makes reform progress slower than expected." } },
        { id: "p9", translations: { zh: "至于改革的最终效果，还需要通过长期的实践来检验。", en: "As for the ultimate effect of the reform, it still needs to be tested through long-term practice." } },
        { id: "p10", translations: { zh: "无论如何，公众参与和监督才是确保改革真正惠及民众的关键。", en: "In any case, public participation and oversight are truly what's key to ensuring the reform genuinely benefits the people." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，推动政治改革的原因是什么？", en: "According to the article, what drives political reform?" },
          options: [
            { zh: "民意压力和社会变化", en: "Public-opinion pressure and social change" },
            { zh: "经济衰退", en: "Economic recession" },
            { zh: "人口减少", en: "Population decline" },
            { zh: "气候变化", en: "Climate change" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "学者认为，什么才是真正重要的？", en: "What do scholars say is truly important?" },
          options: [
            { zh: "形式上的选举", en: "Elections in form" },
            { zh: "权力制衡机制的完善", en: "Improving the mechanism of checks and balances" },
            { zh: "候选人的形象", en: "The candidate's image" },
            { zh: "竞选经费", en: "Campaign funding" }
          ],
          correctIndex: 1
        },
        {
          id: "q3",
          question: { zh: "文中提到的反腐败法案是如何实现的？", en: "How were the anti-corruption bills mentioned in the article made possible?" },
          options: [
            { zh: "政府主动提出", en: "The government proposed them on its own initiative" },
            { zh: "在长期社会压力下才得以实现", en: "They were only made possible under long-term social pressure" },
            { zh: "反对党强制通过", en: "The opposition forced them through" },
            { zh: "国际组织要求", en: "International organizations demanded them" }
          ],
          correctIndex: 1
        },
        {
          id: "q4",
          question: { zh: "为什么政治改革的进展常常比预期缓慢？", en: "Why does political-reform progress often move slower than expected?" },
          options: [
            { zh: "缺乏资金", en: "Lack of funding" },
            { zh: "复杂的利益博弈过程", en: "The complex process of interest-group maneuvering" },
            { zh: "技术不足", en: "Insufficient technology" },
            { zh: "民众不关心", en: "The public doesn't care" }
          ],
          correctIndex: 1
        },
        {
          id: "q5",
          question: { zh: "文章认为，确保改革真正惠及民众的关键是什么？", en: "What does the article say is key to ensuring reform genuinely benefits the people?" },
          options: [
            { zh: "增加选举次数", en: "Holding more elections" },
            { zh: "公众参与和监督", en: "Public participation and oversight" },
            { zh: "提高竞选经费", en: "Increasing campaign funding" },
            { zh: "减少政党数量", en: "Reducing the number of parties" }
          ],
          correctIndex: 1
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "是……的／正是……／……才是……：强调特定信息", en: "Shi...De / Zhengshi.../ ...Cai Shi...: Emphasizing Specific Information" },
      explanation: {
        zh: "这三种结构是汉语中强调特定信息的常见手段（C1 书面语和口语都常见）。「是……的」把句子焦点放在动作已经发生的时间、地点、方式或施事者上（强调「怎样」发生的，而不是「有没有」发生）。「正是……」用来强调「恰恰就是这个」，常带有反驳或纠正预期的语气。「……才是……」用来指出「真正的答案／重点是……」，常用于对比表面看法与实际重点。",
        en: "These three structures are common ways in Chinese to emphasize specific information (common in both C1 written and spoken registers). 是……的 places the sentence's focus on the time, place, manner, or agent of an action that already happened (emphasizing HOW it happened, not whether it happened). 正是…… emphasizes \"it is precisely this,\" often with a tone of correcting an assumption. ……才是…… points out \"the real answer/point is...,\" often contrasting a surface view with the actual point."
      },
      chunks: [
        { id: "g1", translations: { zh: "这项政策是去年通过的。", en: "This policy was passed last year. (emphasizing when)" } },
        { id: "g2", translations: { zh: "正是因为民众的支持，改革才得以推进。", en: "It is precisely because of public support that the reform was able to move forward." } },
        { id: "g3", translations: { zh: "真正重要的才是民生问题，不是口号。", en: "What's really important is livelihood issues, not slogans." } },
        { id: "g4", translations: { zh: "这次选举是在争议中举行的。", en: "This election was held amid controversy. (emphasizing the circumstances)" } },
        { id: "g5", translations: { zh: "正是这种透明度赢得了选民的信任。", en: "It is precisely this transparency that won the voters' trust." } },
        { id: "g6", translations: { zh: "兑现承诺才是赢得民心的关键。", en: "Fulfilling promises is truly the key to winning the hearts of the people." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        stress1: { zh: "对比重音", en: "Contrastive Stress" },
        stress2: { zh: "对比重音", en: "Contrastive Stress" },
        cleft1: { zh: "分裂句语调", en: "Cleft Intonation" },
        cleft2: { zh: "分裂句语调", en: "Cleft Intonation" }
      },
      items: [
        { id: "s1_1", category: "stress1", translations: { zh: "是他赢得了选举，不是对手。", en: "It was HE who won the election, not his opponent. (contrastive stress)" } },
        { id: "s1_2", category: "stress1", translations: { zh: "是政策问题，不是个人问题。", en: "It's a POLICY problem, not a personal one." } },
        { id: "s1_3", category: "stress1", translations: { zh: "是民众的支持，不是媒体的报道。", en: "It's the PUBLIC's support, not media coverage." } },
        { id: "s1_4", category: "stress1", translations: { zh: "是透明度，不是口号。", en: "It's TRANSPARENCY, not slogans." } },
        { id: "s2_1", category: "stress2", translations: { zh: "正是这次改革，改变了局势。", en: "It was precisely THIS reform that changed the situation." } },
        { id: "s2_2", category: "stress2", translations: { zh: "正是这项法案，赢得了信任。", en: "It was precisely THIS bill that won trust." } },
        { id: "s2_3", category: "stress2", translations: { zh: "正是这种态度，打动了选民。", en: "It was precisely THIS attitude that moved voters." } },
        { id: "s2_4", category: "stress2", translations: { zh: "正是这份坚持，带来了成果。", en: "It was precisely THIS persistence that brought results." } },
        { id: "c1_1", category: "cleft1", translations: { zh: "这项政策是去年通过的。", en: "This policy was passed LAST YEAR. (是...的 cleft, emphasizing time)" } },
        { id: "c1_2", category: "cleft1", translations: { zh: "这次选举是在争议中举行的。", en: "This election was held AMID CONTROVERSY." } },
        { id: "c1_3", category: "cleft1", translations: { zh: "这个决定是经过深思熟虑的。", en: "This decision was made AFTER CAREFUL DELIBERATION." } },
        { id: "c1_4", category: "cleft1", translations: { zh: "这份报告是专家撰写的。", en: "This report was written BY EXPERTS." } },
        { id: "c2_1", category: "cleft2", translations: { zh: "民生问题才是关键。", en: "Livelihood issues are TRULY the key. (...才是 cleft)" } },
        { id: "c2_2", category: "cleft2", translations: { zh: "兑现承诺才是核心。", en: "Fulfilling promises is TRULY the core." } },
        { id: "c2_3", category: "cleft2", translations: { zh: "公众监督才是保障。", en: "Public oversight is TRULY the safeguard." } },
        { id: "c2_4", category: "cleft2", translations: { zh: "制度完善才是根本。", en: "Improving the system is TRULY the root." } }
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
          stress1: { zh: "对比重音", en: "Contrastive Stress" },
          stress2: { zh: "对比重音", en: "Contrastive Stress" },
          cleft1: { zh: "分裂句语调", en: "Cleft Intonation" },
          cleft2: { zh: "分裂句语调", en: "Cleft Intonation" }
        },
        items: [
          { id: "s1_5", category: "stress1", translations: { zh: "是候选人的能力，不是外表。", en: "It's the candidate's ABILITY, not their appearance." } },
          { id: "s1_6", category: "stress1", translations: { zh: "是政策的效果，不是宣传。", en: "It's the policy's EFFECT, not the publicity." } },
          { id: "s1_7", category: "stress1", translations: { zh: "是长期的努力，不是一时的热情。", en: "It's LONG-TERM effort, not momentary enthusiasm." } },
          { id: "s1_8", category: "stress1", translations: { zh: "是制度的保障，不是个人的承诺。", en: "It's SYSTEMIC guarantee, not personal promises." } },
          { id: "s1_9", category: "stress1", translations: { zh: "是民众的信任，不是官员的自信。", en: "It's the PUBLIC's trust, not officials' self-confidence." } },
          { id: "s1_10", category: "stress1", translations: { zh: "是实际的行动，不是空洞的口号。", en: "It's ACTUAL action, not empty slogans." } },
          { id: "s1_11", category: "stress1", translations: { zh: "是透明的程序，不是暗箱操作。", en: "It's a TRANSPARENT process, not backroom dealing." } },
          { id: "s1_12", category: "stress1", translations: { zh: "是集体的智慧，不是个人的决定。", en: "It's COLLECTIVE wisdom, not an individual's decision." } },
          { id: "s1_13", category: "stress1", translations: { zh: "是持续的改革，不是一次性的措施。", en: "It's ONGOING reform, not a one-off measure." } },
          { id: "s1_14", category: "stress1", translations: { zh: "是公平的竞争，不是特权的延续。", en: "It's FAIR competition, not the continuation of privilege." } },
          { id: "s1_15", category: "stress1", translations: { zh: "是真实的数据，不是主观的猜测。", en: "It's REAL data, not subjective guesswork." } },
          { id: "s1_16", category: "stress1", translations: { zh: "是长远的规划，不是短期的应付。", en: "It's LONG-TERM planning, not short-term stopgaps." } },
          { id: "s1_17", category: "stress1", translations: { zh: "是制度的完善，不是表面的调整。", en: "It's SYSTEMIC improvement, not surface-level adjustment." } },
          { id: "s1_18", category: "stress1", translations: { zh: "是全民的参与，不是少数人的决定。", en: "It's participation by ALL citizens, not a decision by the few." } },

          { id: "s2_5", category: "stress2", translations: { zh: "正是这场辩论，让选民看清了立场。", en: "It was precisely this debate that let voters see clearly where things stood." } },
          { id: "s2_6", category: "stress2", translations: { zh: "正是这次改革，缓解了社会矛盾。", en: "It was precisely this reform that eased social tension." } },
          { id: "s2_7", category: "stress2", translations: { zh: "正是这份报告，揭示了问题的根源。", en: "It was precisely this report that revealed the root of the problem." } },
          { id: "s2_8", category: "stress2", translations: { zh: "正是这种坚持，赢得了广泛支持。", en: "It was precisely this persistence that won widespread support." } },
          { id: "s2_9", category: "stress2", translations: { zh: "正是这项法律，保障了公民权利。", en: "It was precisely this law that safeguarded citizens' rights." } },
          { id: "s2_10", category: "stress2", translations: { zh: "正是这次投票，决定了未来方向。", en: "It was precisely this vote that determined the future direction." } },
          { id: "s2_11", category: "stress2", translations: { zh: "正是这种精神，推动了社会进步。", en: "It was precisely this spirit that drove social progress." } },
          { id: "s2_12", category: "stress2", translations: { zh: "正是这份责任感，赢得了尊重。", en: "It was precisely this sense of responsibility that earned respect." } },
          { id: "s2_13", category: "stress2", translations: { zh: "正是这次对话，化解了误解。", en: "It was precisely this dialogue that resolved the misunderstanding." } },
          { id: "s2_14", category: "stress2", translations: { zh: "正是这项政策，改变了民生状况。", en: "It was precisely this policy that changed people's living conditions." } },
          { id: "s2_15", category: "stress2", translations: { zh: "正是这种合作，实现了共同目标。", en: "It was precisely this cooperation that achieved the shared goal." } },
          { id: "s2_16", category: "stress2", translations: { zh: "正是这份透明，重建了公众信任。", en: "It was precisely this transparency that rebuilt public trust." } },
          { id: "s2_17", category: "stress2", translations: { zh: "正是这次尝试，开创了新局面。", en: "It was precisely this attempt that opened up a new situation." } },
          { id: "s2_18", category: "stress2", translations: { zh: "正是这种勇气，推动了变革。", en: "It was precisely this courage that drove change." } },

          { id: "c1_5", category: "cleft1", translations: { zh: "这项法案是经过多次讨论通过的。", en: "This bill was passed AFTER MULTIPLE ROUNDS OF DISCUSSION." } },
          { id: "c1_6", category: "cleft1", translations: { zh: "这次辩论是在电视上直播的。", en: "This debate was broadcast LIVE ON TELEVISION." } },
          { id: "c1_7", category: "cleft1", translations: { zh: "这个方案是专家团队设计的。", en: "This proposal was designed BY A TEAM OF EXPERTS." } },
          { id: "c1_8", category: "cleft1", translations: { zh: "这场选举是全民参与的。", en: "This election involved PARTICIPATION BY ALL CITIZENS." } },
          { id: "c1_9", category: "cleft1", translations: { zh: "这份声明是官方发布的。", en: "This statement was released BY OFFICIAL CHANNELS." } },
          { id: "c1_10", category: "cleft1", translations: { zh: "这次改革是自上而下推动的。", en: "This reform was driven FROM THE TOP DOWN." } },
          { id: "c1_11", category: "cleft1", translations: { zh: "这个决定是集体商议的结果。", en: "This decision was the result of COLLECTIVE DELIBERATION." } },
          { id: "c1_12", category: "cleft1", translations: { zh: "这项调查是独立机构进行的。", en: "This investigation was conducted BY AN INDEPENDENT AGENCY." } },
          { id: "c1_13", category: "cleft1", translations: { zh: "这次会议是紧急召开的。", en: "This meeting was convened ON AN EMERGENCY BASIS." } },
          { id: "c1_14", category: "cleft1", translations: { zh: "这份协议是双方签署的。", en: "This agreement was signed BY BOTH PARTIES." } },
          { id: "c1_15", category: "cleft1", translations: { zh: "这个政策是逐步实施的。", en: "This policy was implemented GRADUALLY." } },
          { id: "c1_16", category: "cleft1", translations: { zh: "这次访问是提前安排的。", en: "This visit was arranged IN ADVANCE." } },
          { id: "c1_17", category: "cleft1", translations: { zh: "这份报告是公开发表的。", en: "This report was published OPENLY." } },
          { id: "c1_18", category: "cleft1", translations: { zh: "这项措施是临时采取的。", en: "This measure was adopted ON A TEMPORARY BASIS." } },

          { id: "c2_5", category: "cleft2", translations: { zh: "真正的民主才是目标。", en: "Genuine democracy is TRULY the goal." } },
          { id: "c2_6", category: "cleft2", translations: { zh: "长期的稳定才是基础。", en: "Long-term stability is TRULY the foundation." } },
          { id: "c2_7", category: "cleft2", translations: { zh: "有效的治理才是根本。", en: "Effective governance is TRULY the root." } },
          { id: "c2_8", category: "cleft2", translations: { zh: "民众的福祉才是宗旨。", en: "The people's wellbeing is TRULY the purpose." } },
          { id: "c2_9", category: "cleft2", translations: { zh: "制度的公正才是保障。", en: "A just system is TRULY the safeguard." } },
          { id: "c2_10", category: "cleft2", translations: { zh: "持续的发展才是方向。", en: "Sustained development is TRULY the direction." } },
          { id: "c2_11", category: "cleft2", translations: { zh: "真实的沟通才是桥梁。", en: "Genuine communication is TRULY the bridge." } },
          { id: "c2_12", category: "cleft2", translations: { zh: "共同的利益才是纽带。", en: "Shared interest is TRULY the bond." } },
          { id: "c2_13", category: "cleft2", translations: { zh: "长远的眼光才是关键。", en: "A long-term perspective is TRULY the key." } },
          { id: "c2_14", category: "cleft2", translations: { zh: "务实的态度才是出路。", en: "A pragmatic attitude is TRULY the way out." } },
          { id: "c2_15", category: "cleft2", translations: { zh: "真诚的合作才是基础。", en: "Sincere cooperation is TRULY the foundation." } },
          { id: "c2_16", category: "cleft2", translations: { zh: "公开的监督才是保证。", en: "Open oversight is TRULY the guarantee." } },
          { id: "c2_17", category: "cleft2", translations: { zh: "全面的改革才是根本。", en: "Comprehensive reform is TRULY the root." } },
          { id: "c2_18", category: "cleft2", translations: { zh: "坚定的决心才是动力。", en: "Firm resolve is TRULY the driving force." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-shide",
        title: { zh: "练习：是……的", en: "Practice: Shi...De" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「是……的」的例句。",
          en: "Next, let's practice example sentences using 是……的."
        },
        lines: [
          { id: "sd1", translations: { zh: "这项政策是去年通过的。", en: "This policy was passed last year." } },
          { id: "sd2", translations: { zh: "这次选举是在争议中举行的。", en: "This election was held amid controversy." } },
          { id: "sd3", translations: { zh: "这个决定是经过深思熟虑的。", en: "This decision was made after careful deliberation." } },
          { id: "sd4", translations: { zh: "这份报告是专家撰写的。", en: "This report was written by experts." } },
          { id: "sd5", translations: { zh: "这项法案是经过多次讨论通过的。", en: "This bill was passed after multiple rounds of discussion." } },
          { id: "sd6", translations: { zh: "这场辩论是在电视上直播的。", en: "This debate was broadcast live on television." } },
          { id: "sd7", translations: { zh: "这个方案是专家团队设计的。", en: "This proposal was designed by a team of experts." } },
          { id: "sd8", translations: { zh: "这次改革是自上而下推动的。", en: "This reform was driven from the top down." } },
          { id: "sd9", translations: { zh: "这份协议是双方签署的。", en: "This agreement was signed by both parties." } },
          { id: "sd10", translations: { zh: "这项措施是临时采取的。", en: "This measure was adopted on a temporary basis." } }
        ]
      },
      {
        id: "grammar-drill-zhengshi-caishi",
        title: { zh: "练习：正是……／……才是……", en: "Practice: Zhengshi... / ...Cai Shi..." },
        spokenIntro: {
          zh: "接下来，让我们练习使用「正是」和「……才是」的例句。",
          en: "Next, let's practice example sentences using 正是 and ……才是."
        },
        lines: [
          { id: "zc1", translations: { zh: "正是因为民众的支持，改革才得以推进。", en: "It is precisely because of public support that the reform was able to move forward." } },
          { id: "zc2", translations: { zh: "真正重要的才是民生问题，不是口号。", en: "What's really important is livelihood issues, not slogans." } },
          { id: "zc3", translations: { zh: "正是这种透明度赢得了选民的信任。", en: "It is precisely this transparency that won the voters' trust." } },
          { id: "zc4", translations: { zh: "兑现承诺才是赢得民心的关键。", en: "Fulfilling promises is truly the key to winning the hearts of the people." } },
          { id: "zc5", translations: { zh: "正是这次改革，缓解了社会矛盾。", en: "It was precisely this reform that eased social tension." } },
          { id: "zc6", translations: { zh: "民生问题才是关键。", en: "Livelihood issues are truly the key." } },
          { id: "zc7", translations: { zh: "正是这份坚持，带来了成果。", en: "It was precisely this persistence that brought results." } },
          { id: "zc8", translations: { zh: "公众监督才是保障。", en: "Public oversight is truly the safeguard." } },
          { id: "zc9", translations: { zh: "正是这场辩论，让选民看清了立场。", en: "It was precisely this debate that let voters see clearly where things stood." } },
          { id: "zc10", translations: { zh: "制度完善才是根本。", en: "Improving the system is truly the root." } }
        ]
      }
    ]
  }
};
