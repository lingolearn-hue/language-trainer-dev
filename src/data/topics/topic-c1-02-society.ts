import type { TopicLesson } from "../topicTypes";

// C1 — row 2 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Nominalize propositions as subjects or objects" via ……的／所……
// 的／……这一事实。
//
// Scope note: only `zh` (target) and `en` (source) translated — same
// deliberate scope decision as topic-42-education.ts.
//
// Pronunciation note: the table assigns "Nominal stress" and "Rhythm
// in long noun phrases" — sentence-level prosody concepts again (see
// topic-42's header comment for the full reasoning), so items here
// are short marked phrases, not single words.

export const topicSociety: TopicLesson = {
  id: "topic-c1-02-society",
  lessonNumber: 2,
  level: "C1",
  topicName: {
    zh: "社会",
    en: "Society"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "社会流动", en: "social mobility" } },
    { id: "v02", category: "noun", translations: { zh: "阶层", en: "social class, stratum" } },
    { id: "v03", category: "noun", translations: { zh: "公共服务", en: "public services" } },
    { id: "v04", category: "noun", translations: { zh: "社会保障", en: "social security" } },
    { id: "v05", category: "noun", translations: { zh: "贫富差距", en: "wealth gap" } },
    { id: "v06", category: "noun", translations: { zh: "中产阶级", en: "middle class" } },
    { id: "v07", category: "noun", translations: { zh: "社会结构", en: "social structure" } },
    { id: "v08", category: "noun", translations: { zh: "福利制度", en: "welfare system" } },
    { id: "v09", category: "noun", translations: { zh: "医疗保险", en: "health insurance" } },
    { id: "v10", category: "noun", translations: { zh: "养老金", en: "pension" } },
    { id: "v11", category: "noun", translations: { zh: "失业率", en: "unemployment rate" } },
    { id: "v12", category: "noun", translations: { zh: "收入分配", en: "income distribution" } },
    { id: "v13", category: "noun", translations: { zh: "社区", en: "community" } },
    { id: "v14", category: "noun", translations: { zh: "弱势群体", en: "disadvantaged group" } },
    { id: "v15", category: "noun", translations: { zh: "城市化", en: "urbanization" } },
    { id: "v16", category: "noun", translations: { zh: "户籍制度", en: "household registration system" } },
    { id: "v17", category: "verb", translations: { zh: "提升", en: "to improve, raise" } },
    { id: "v18", category: "verb", translations: { zh: "缩小", en: "to narrow, reduce" } },
    { id: "v19", category: "verb", translations: { zh: "保障", en: "to guarantee" } },
    { id: "v20", category: "verb", translations: { zh: "改善", en: "to improve" } },
    { id: "v21", category: "verb", translations: { zh: "承担", en: "to bear, take on (responsibility)" } },
    { id: "v22", category: "verb", translations: { zh: "依赖", en: "to depend on" } },
    { id: "v23", category: "noun", translations: { zh: "变迁", en: "transformation, change" } },
    { id: "v24", category: "noun", translations: { zh: "转型", en: "transition" } },
    { id: "v25", category: "noun", translations: { zh: "民生", en: "people's livelihood" } },
    { id: "v26", category: "noun", translations: { zh: "公益", en: "public welfare, charity" } },
    { id: "v27", category: "noun", translations: { zh: "平等", en: "equality" } },
    { id: "v28", category: "noun", translations: { zh: "机会", en: "opportunity" } },
    { id: "v29", category: "adjective", translations: { zh: "显著", en: "notable, significant" } },
    { id: "v30", category: "adjective", translations: { zh: "普遍", en: "universal, common" } }
  ],
  dialogueA: {
    title: { zh: "社会变迁", en: "Social Change" },
    lines: [
      { id: "d1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "近年来，中国社会结构发生了哪些显著变化？", en: "In recent years, what notable changes have occurred in China's social structure?" } },
      { id: "d2", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "最明显的是中产阶级的扩大和城市化进程的加快。", en: "The most obvious ones are the growth of the middle class and the acceleration of urbanization." } },
      { id: "d3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "这种变迁给普通家庭带来了什么影响？", en: "What impact has this transformation had on ordinary families?" } },
      { id: "d4", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "他所面对的是机会增多，但同时竞争压力也在加大。", en: "What they face is more opportunity, but also greater competitive pressure at the same time." } },
      { id: "d5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "贫富差距扩大这一事实，是否引起了政府的重视？", en: "Has the fact of the widening wealth gap drawn the government's attention?" } },
      { id: "d6", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "是的，政府所推行的一系列政策，都在试图缩小这一差距。", en: "Yes, the series of policies the government has been implementing are all attempts to narrow this gap." } },
      { id: "d7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "户籍制度所带来的限制，是不是社会流动的一大障碍？", en: "Are the restrictions brought about by the household registration system a major obstacle to social mobility?" } },
      { id: "d8", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "确实如此，这也是学者们所关注的核心问题之一。", en: "Indeed, that's also one of the core issues scholars have been focusing on." } },
      { id: "d9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "那社区在社会转型中扮演什么角色？", en: "So what role does the community play in social transformation?" } },
      { id: "d10", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "社区所承担的，是连接政府与个人之间的桥梁作用。", en: "What the community takes on is the role of a bridge connecting the government and individuals." } },
      { id: "d11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "普通民众能为社会公平做些什么？", en: "What can ordinary people do for social fairness?" } },
      { id: "d12", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "参与公益活动，就是他们所能做出的最直接贡献。", en: "Participating in public-welfare activities is the most direct contribution they can make." } },
      { id: "d13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "感谢您的分享。", en: "Thank you for sharing your views." } },
      { id: "d14", speaker: { zh: "学者", en: "Scholar" }, translations: { zh: "不客气，希望社会能朝着更平等的方向发展。", en: "You're welcome. I hope society develops in a more equal direction." } }
    ]
  },
  dialogueB: {
    title: { zh: "公共服务", en: "Public Services" },
    lines: [
      { id: "e1", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "您觉得目前的公共服务水平怎么样？", en: "What do you think of the current level of public services?" } },
      { id: "e2", speaker: { zh: "官员", en: "Official" }, translations: { zh: "总体上有所提升，但地区之间仍存在明显差距。", en: "Overall it has improved, but there are still notable gaps between regions." } },
      { id: "e3", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "医疗保险的覆盖范围是不是扩大了？", en: "Has the coverage of health insurance expanded?" } },
      { id: "e4", speaker: { zh: "官员", en: "Official" }, translations: { zh: "是的，我们所推行的改革，已经惠及了更多弱势群体。", en: "Yes, the reforms we've been implementing have already benefited more disadvantaged groups." } },
      { id: "e5", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "养老金不足这一问题，未来会怎么解决？", en: "How will the problem of insufficient pensions be solved in the future?" } },
      { id: "e6", speaker: { zh: "官员", en: "Official" }, translations: { zh: "政府正在研究所需的资金来源，以保障养老金的可持续性。", en: "The government is studying the funding sources needed to ensure the sustainability of pensions." } },
      { id: "e7", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "社区所提供的服务，能满足老年人的需求吗？", en: "Can the services provided by the community meet the needs of the elderly?" } },
      { id: "e8", speaker: { zh: "官员", en: "Official" }, translations: { zh: "目前还不够全面，这也是我们所要改善的方向。", en: "It's not comprehensive enough yet — that's also a direction we need to improve." } },
      { id: "e9", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "失业率上升这一现象，会不会影响公共服务的资金？", en: "Will the phenomenon of rising unemployment affect public-service funding?" } },
      { id: "e10", speaker: { zh: "官员", en: "Official" }, translations: { zh: "确实会带来压力，但民生保障始终是我们的优先事项。", en: "It will indeed bring pressure, but ensuring people's livelihood remains our priority." } },
      { id: "e11", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "普通市民能如何参与公共服务的改善？", en: "How can ordinary citizens participate in improving public services?" } },
      { id: "e12", speaker: { zh: "官员", en: "Official" }, translations: { zh: "反馈意见，就是他们所能发挥的重要作用之一。", en: "Providing feedback is one of the important roles they can play." } },
      { id: "e13", speaker: { zh: "居民", en: "Resident" }, translations: { zh: "希望未来能看到更多改善。", en: "I hope to see more improvements in the future." } },
      { id: "e14", speaker: { zh: "官员", en: "Official" }, translations: { zh: "我们也是这样期待的，感谢您的关注。", en: "That's what we're hoping for too. Thank you for your attention to this." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "社会流动", en: "Social Mobility" },
      lines: [
        { id: "p1", translations: { zh: "近年来，社会流动这一话题引发了广泛讨论。", en: "In recent years, the topic of social mobility has sparked widespread discussion." } },
        { id: "p2", translations: { zh: "所谓社会流动，是指个人或家庭在社会阶层中地位上升或下降的过程。", en: "So-called social mobility refers to the process by which an individual or family's status rises or falls within the social hierarchy." } },
        { id: "p3", translations: { zh: "研究显示，教育机会不均等这一事实，是限制社会流动的重要因素之一。", en: "Research shows that the fact of unequal educational opportunity is one of the important factors limiting social mobility." } },
        { id: "p4", translations: { zh: "此外，户籍制度所带来的限制，也使得城乡之间的流动变得困难。", en: "In addition, the restrictions brought about by the household registration system also make movement between urban and rural areas difficult." } },
        { id: "p5", translations: { zh: "一些学者指出，收入分配不均加剧了阶层固化的现象。", en: "Some scholars point out that uneven income distribution has intensified the phenomenon of class rigidification." } },
        { id: "p6", translations: { zh: "与此同时，政府所推行的一系列改革，试图缩小贫富差距，提升社会公平。", en: "At the same time, the series of reforms the government has been implementing attempt to narrow the wealth gap and improve social fairness." } },
        { id: "p7", translations: { zh: "例如，扩大养老金覆盖范围、改善医疗保险制度，都是政府近年来所采取的措施。", en: "For example, expanding pension coverage and improving the health insurance system are measures the government has taken in recent years." } },
        { id: "p8", translations: { zh: "然而，社会保障制度仍不完善这一事实，依然是许多家庭面临的现实问题。", en: "However, the fact that the social security system is still not fully developed remains a real problem facing many families." } },
        { id: "p9", translations: { zh: "因此，如何在经济发展与社会公平之间找到平衡，成为政策制定者所关注的核心问题。", en: "Therefore, how to find a balance between economic development and social fairness has become a core issue that policymakers focus on." } },
        { id: "p10", translations: { zh: "总体而言，促进社会流动不仅关乎个人命运，也关乎整个社会的稳定与发展。", en: "Overall, promoting social mobility concerns not only individual destinies but also the stability and development of society as a whole." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，什么是社会流动？", en: "According to the article, what is social mobility?" },
          options: [
            { zh: "个人或家庭在社会阶层中地位变化的过程", en: "The process by which an individual or family's status changes within the social hierarchy" },
            { zh: "城市人口的迁移", en: "The migration of urban populations" },
            { zh: "政府更换官员的过程", en: "The process of the government replacing officials" },
            { zh: "经济增长的速度", en: "The rate of economic growth" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "文章提到，限制社会流动的因素之一是什么？", en: "The article mentions one factor limiting social mobility — what is it?" },
          options: [
            { zh: "教育机会不均等", en: "Unequal educational opportunity" },
            { zh: "交通不便", en: "Inconvenient transportation" },
            { zh: "气候变化", en: "Climate change" },
            { zh: "人口减少", en: "Population decline" }
          ],
          correctIndex: 0
        },
        {
          id: "q3",
          question: { zh: "政府近年来采取了哪些措施？", en: "What measures has the government taken in recent years?" },
          options: [
            { zh: "减少养老金", en: "Reducing pensions" },
            { zh: "扩大养老金覆盖范围、改善医疗保险", en: "Expanding pension coverage and improving health insurance" },
            { zh: "取消社会保障", en: "Abolishing social security" },
            { zh: "提高税收", en: "Raising taxes" }
          ],
          correctIndex: 1
        },
        {
          id: "q4",
          question: { zh: "文章认为，什么仍然是许多家庭面临的现实问题？", en: "The article says what remains a real problem facing many families?" },
          options: [
            { zh: "社会保障制度不完善", en: "The social security system is not fully developed" },
            { zh: "教育资源过剩", en: "Excess educational resources" },
            { zh: "城市化速度太快", en: "Urbanization is too fast" },
            { zh: "民主制度不健全", en: "The democratic system is flawed" }
          ],
          correctIndex: 0
        },
        {
          id: "q5",
          question: { zh: "文章最后强调，促进社会流动关乎什么？", en: "The article's conclusion says promoting social mobility concerns what?" },
          options: [
            { zh: "只关乎个人命运", en: "Only individual destinies" },
            { zh: "只关乎经济增长", en: "Only economic growth" },
            { zh: "既关乎个人命运也关乎社会稳定", en: "Both individual destinies and social stability" },
            { zh: "与社会稳定无关", en: "Nothing to do with social stability" }
          ],
          correctIndex: 2
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "……的／所……的／……这一事实：将命题名词化", en: "...De / Suo...De / ...Zhe Yi Shishi: Nominalizing Propositions" },
      explanation: {
        zh: "这三种结构常用于将一整个动作、状态或事件转化为名词性成分，作句子的主语或宾语（C1 学术／书面语常见）。「……的」把一个描述性短语变成「……的人／事／情况」的省略形式（省略了中心词）。「所……的」是更正式的书面语版本，常与「是」搭配，强调「……的内容」。「……这一事实」把一整句话变成一个可以被评论的名词短语，常用于引出评论或结论。",
        en: "These three structures are commonly used to turn an entire action, state, or event into a noun-like element that can serve as the subject or object of a sentence (common in C1-level academic/written Chinese). ……的 turns a descriptive phrase into an implied \"the person/thing/situation that...\" (the head noun is omitted). 所……的 is a more formal, written version, often paired with 是, emphasizing \"what... is.\" ……这一事实 turns a whole clause into a noun phrase that can then be commented on — often used to introduce a comment or conclusion."
      },
      chunks: [
        { id: "g1", translations: { zh: "政府所提供的公共服务日益完善。", en: "The public services the government provides are becoming increasingly comprehensive." } },
        { id: "g2", translations: { zh: "收入分配不均是导致社会矛盾的原因之一。", en: "Uneven income distribution is one of the causes of social tension." } },
        { id: "g3", translations: { zh: "越来越多的人开始关注贫富差距扩大这一事实。", en: "More and more people are starting to pay attention to the fact that the wealth gap is widening." } },
        { id: "g4", translations: { zh: "他所关心的是弱势群体的生活状况。", en: "What he cares about is the living conditions of disadvantaged groups." } },
        { id: "g5", translations: { zh: "城市化带来的挑战不容忽视。", en: "The challenges brought by urbanization cannot be ignored." } },
        { id: "g6", translations: { zh: "社会保障制度不完善这一事实，值得我们深思。", en: "The fact that the social security system is not fully developed is worth our deep reflection." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        nom1: { zh: "名词性重音", en: "Nominal Stress" },
        nom2: { zh: "名词性重音", en: "Nominal Stress" },
        rhythm1: { zh: "长名词短语的节奏", en: "Rhythm in Long Noun Phrases" },
        rhythm2: { zh: "长名词短语的节奏", en: "Rhythm in Long Noun Phrases" }
      },
      items: [
        { id: "n1_1", category: "nom1", translations: { zh: "他所说的是事实。", en: "What he said is the truth. (stress on the nominalized head, 事实)" } },
        { id: "n1_2", category: "nom1", translations: { zh: "这是我所关心的。", en: "This is what I care about. (stress on 关心)" } },
        { id: "n1_3", category: "nom1", translations: { zh: "政府所提供的服务。", en: "The services the government provides. (stress on 服务)" } },
        { id: "n1_4", category: "nom1", translations: { zh: "我们所面对的挑战。", en: "The challenges we face. (stress on 挑战)" } },
        { id: "n2_1", category: "nom2", translations: { zh: "社会流动这一现象。", en: "The phenomenon of social mobility. (stress on 现象)" } },
        { id: "n2_2", category: "nom2", translations: { zh: "贫富差距这一问题。", en: "The problem of the wealth gap. (stress on 问题)" } },
        { id: "n2_3", category: "nom2", translations: { zh: "教育公平这一目标。", en: "The goal of educational fairness. (stress on 目标)" } },
        { id: "n2_4", category: "nom2", translations: { zh: "城乡差距这一事实。", en: "The fact of the urban-rural gap. (stress on 事实)" } },
        { id: "r1_1", category: "rhythm1", translations: { zh: "政府所推行的 / 教育改革政策。", en: "The education-reform policy — [pause] — that the government is implementing." } },
        { id: "r1_2", category: "rhythm1", translations: { zh: "社会所面临的 / 贫富差距问题。", en: "The wealth-gap problem — [pause] — that society faces." } },
        { id: "r1_3", category: "rhythm1", translations: { zh: "我们所关注的 / 弱势群体权益。", en: "The disadvantaged-group rights — [pause] — that we focus on." } },
        { id: "r1_4", category: "rhythm1", translations: { zh: "专家所提出的 / 综合评价方案。", en: "The comprehensive-evaluation proposal — [pause] — that experts proposed." } },
        { id: "r2_1", category: "rhythm2", translations: { zh: "由收入分配不均 / 引发的社会矛盾。", en: "The social tension — [pause] — triggered by uneven income distribution." } },
        { id: "r2_2", category: "rhythm2", translations: { zh: "由城乡差距扩大 / 造成的流动困难。", en: "The mobility difficulty — [pause] — caused by the widening urban-rural gap." } },
        { id: "r2_3", category: "rhythm2", translations: { zh: "由教育资源不足 / 导致的机会不均。", en: "The unequal opportunity — [pause] — resulting from insufficient educational resources." } },
        { id: "r2_4", category: "rhythm2", translations: { zh: "由户籍制度限制 / 带来的流动障碍。", en: "The mobility obstacle — [pause] — brought about by household-registration restrictions." } }
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
          nom1: { zh: "名词性重音", en: "Nominal Stress" },
          nom2: { zh: "名词性重音", en: "Nominal Stress" },
          rhythm1: { zh: "长名词短语的节奏", en: "Rhythm in Long Noun Phrases" },
          rhythm2: { zh: "长名词短语的节奏", en: "Rhythm in Long Noun Phrases" }
        },
        items: [
          { id: "n1_5", category: "nom1", translations: { zh: "这是我们所期待的结果。", en: "This is the result we've been hoping for." } },
          { id: "n1_6", category: "nom1", translations: { zh: "他所提到的是重点。", en: "What he mentioned is the key point." } },
          { id: "n1_7", category: "nom1", translations: { zh: "这是政策所要解决的问题。", en: "This is the problem the policy aims to solve." } },
          { id: "n1_8", category: "nom1", translations: { zh: "这是社会所需要的改变。", en: "This is the change society needs." } },
          { id: "n1_9", category: "nom1", translations: { zh: "这是学生所争取的权利。", en: "This is the right students are fighting for." } },
          { id: "n1_10", category: "nom1", translations: { zh: "这是专家所建议的方案。", en: "This is the proposal experts suggested." } },
          { id: "n1_11", category: "nom1", translations: { zh: "这是民众所关心的民生问题。", en: "This is the livelihood issue the public cares about." } },
          { id: "n1_12", category: "nom1", translations: { zh: "这是政府所承诺的改革。", en: "This is the reform the government promised." } },
          { id: "n1_13", category: "nom1", translations: { zh: "这是媒体所报道的事件。", en: "This is the event the media reported." } },
          { id: "n1_14", category: "nom1", translations: { zh: "这是历史所证明的道理。", en: "This is the truth history has proven." } },
          { id: "n1_15", category: "nom1", translations: { zh: "这是制度所保障的权益。", en: "This is the right the system guarantees." } },
          { id: "n1_16", category: "nom1", translations: { zh: "这是社会所反思的问题。", en: "This is the problem society is reflecting on." } },
          { id: "n1_17", category: "nom1", translations: { zh: "这是学者所研究的现象。", en: "This is the phenomenon scholars are researching." } },
          { id: "n1_18", category: "nom1", translations: { zh: "这是公众所期望的公平。", en: "This is the fairness the public hopes for." } },

          { id: "n2_5", category: "nom2", translations: { zh: "收入差距扩大这一现象。", en: "The phenomenon of the widening income gap." } },
          { id: "n2_6", category: "nom2", translations: { zh: "城市化加速这一趋势。", en: "The trend of accelerating urbanization." } },
          { id: "n2_7", category: "nom2", translations: { zh: "人口老龄化这一问题。", en: "The problem of population aging." } },
          { id: "n2_8", category: "nom2", translations: { zh: "教育资源不均这一现实。", en: "The reality of unequal educational resources." } },
          { id: "n2_9", category: "nom2", translations: { zh: "社会阶层固化这一趋势。", en: "The trend of social class rigidification." } },
          { id: "n2_10", category: "nom2", translations: { zh: "贫困代际传递这一现象。", en: "The phenomenon of intergenerational poverty transmission." } },
          { id: "n2_11", category: "nom2", translations: { zh: "户籍制度改革这一议题。", en: "The issue of household-registration-system reform." } },
          { id: "n2_12", category: "nom2", translations: { zh: "养老保障不足这一问题。", en: "The problem of insufficient pension security." } },
          { id: "n2_13", category: "nom2", translations: { zh: "城乡二元结构这一现实。", en: "The reality of the urban-rural dual structure." } },
          { id: "n2_14", category: "nom2", translations: { zh: "社会保障覆盖不全这一事实。", en: "The fact of incomplete social security coverage." } },
          { id: "n2_15", category: "nom2", translations: { zh: "阶层流动放缓这一趋势。", en: "The trend of slowing class mobility." } },
          { id: "n2_16", category: "nom2", translations: { zh: "收入不平等加剧这一现象。", en: "The phenomenon of worsening income inequality." } },
          { id: "n2_17", category: "nom2", translations: { zh: "公共服务不均衡这一问题。", en: "The problem of unbalanced public services." } },
          { id: "n2_18", category: "nom2", translations: { zh: "社会信任缺失这一现实。", en: "The reality of the lack of social trust." } },

          { id: "r1_5", category: "rhythm1", translations: { zh: "政府所颁布的 / 社会保障条例。", en: "The social-security regulation — [pause] — that the government promulgated." } },
          { id: "r1_6", category: "rhythm1", translations: { zh: "专家所提出的 / 收入分配方案。", en: "The income-distribution proposal — [pause] — that experts proposed." } },
          { id: "r1_7", category: "rhythm1", translations: { zh: "学者所研究的 / 社会流动机制。", en: "The social-mobility mechanism — [pause] — that scholars study." } },
          { id: "r1_8", category: "rhythm1", translations: { zh: "民众所期待的 / 公平教育制度。", en: "The fair education system — [pause] — that the public hopes for." } },
          { id: "r1_9", category: "rhythm1", translations: { zh: "媒体所关注的 / 贫富差距问题。", en: "The wealth-gap issue — [pause] — that the media focuses on." } },
          { id: "r1_10", category: "rhythm1", translations: { zh: "社会所面临的 / 结构性挑战。", en: "The structural challenge — [pause] — that society faces." } },
          { id: "r1_11", category: "rhythm1", translations: { zh: "政策所针对的 / 弱势群体需求。", en: "The disadvantaged-group needs — [pause] — that the policy targets." } },
          { id: "r1_12", category: "rhythm1", translations: { zh: "改革所涉及的 / 多方利益关系。", en: "The multi-party interest relations — [pause] — that the reform involves." } },
          { id: "r1_13", category: "rhythm1", translations: { zh: "制度所保障的 / 基本社会权益。", en: "The basic social rights — [pause] — that the system guarantees." } },
          { id: "r1_14", category: "rhythm1", translations: { zh: "城市所推行的 / 户籍改革措施。", en: "The household-registration reform measure — [pause] — that the city implements." } },
          { id: "r1_15", category: "rhythm1", translations: { zh: "家庭所承担的 / 教育经济压力。", en: "The educational financial pressure — [pause] — that families bear." } },
          { id: "r1_16", category: "rhythm1", translations: { zh: "企业所提供的 / 员工福利保障。", en: "The employee welfare guarantee — [pause] — that companies provide." } },
          { id: "r1_17", category: "rhythm1", translations: { zh: "社区所组织的 / 公益互助活动。", en: "The mutual-aid charity activity — [pause] — that the community organizes." } },
          { id: "r1_18", category: "rhythm1", translations: { zh: "国家所实施的 / 养老保险政策。", en: "The pension-insurance policy — [pause] — that the state implements." } },

          { id: "r2_5", category: "rhythm2", translations: { zh: "由贫富差距 / 引发的社会紧张。", en: "The social tension — [pause] — triggered by the wealth gap." } },
          { id: "r2_6", category: "rhythm2", translations: { zh: "由教育不公 / 造成的机会缺失。", en: "The lack of opportunity — [pause] — caused by educational injustice." } },
          { id: "r2_7", category: "rhythm2", translations: { zh: "由户籍限制 / 带来的迁移困难。", en: "The migration difficulty — [pause] — brought about by household-registration restrictions." } },
          { id: "r2_8", category: "rhythm2", translations: { zh: "由老龄化加剧 / 产生的养老压力。", en: "The pension pressure — [pause] — arising from worsening aging." } },
          { id: "r2_9", category: "rhythm2", translations: { zh: "由收入下降 / 导致的生活困境。", en: "The living hardship — [pause] — resulting from falling income." } },
          { id: "r2_10", category: "rhythm2", translations: { zh: "由城乡分割 / 形成的发展失衡。", en: "The development imbalance — [pause] — formed by the urban-rural divide." } },
          { id: "r2_11", category: "rhythm2", translations: { zh: "由制度缺陷 / 引发的社会矛盾。", en: "The social tension — [pause] — triggered by systemic flaws." } },
          { id: "r2_12", category: "rhythm2", translations: { zh: "由资源集中 / 造成的地区差距。", en: "The regional gap — [pause] — caused by concentrated resources." } },
          { id: "r2_13", category: "rhythm2", translations: { zh: "由保障不足 / 带来的生活风险。", en: "The livelihood risk — [pause] — brought about by insufficient security." } },
          { id: "r2_14", category: "rhythm2", translations: { zh: "由竞争加剧 / 导致的心理压力。", en: "The psychological pressure — [pause] — resulting from intensified competition." } },
          { id: "r2_15", category: "rhythm2", translations: { zh: "由政策滞后 / 产生的治理困境。", en: "The governance predicament — [pause] — arising from policy lag." } },
          { id: "r2_16", category: "rhythm2", translations: { zh: "由信息不对称 / 造成的决策失误。", en: "The decision-making error — [pause] — caused by information asymmetry." } },
          { id: "r2_17", category: "rhythm2", translations: { zh: "由结构调整 / 带来的就业变化。", en: "The employment change — [pause] — brought about by structural adjustment." } },
          { id: "r2_18", category: "rhythm2", translations: { zh: "由观念转变 / 引发的社会变革。", en: "The social change — [pause] — triggered by shifting attitudes." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-de-suode",
        title: { zh: "练习：……的／所……的", en: "Practice: ...De / Suo...De" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「……的」和「所……的」的例句。",
          en: "Next, let's practice example sentences using ……的 and 所……的."
        },
        lines: [
          { id: "ds1", translations: { zh: "政府所提供的公共服务日益完善。", en: "The public services the government provides are becoming increasingly comprehensive." } },
          { id: "ds2", translations: { zh: "他所关心的是弱势群体的生活状况。", en: "What he cares about is the living conditions of disadvantaged groups." } },
          { id: "ds3", translations: { zh: "专家所建议的方案已经开始实施。", en: "The proposal experts suggested has already begun to be implemented." } },
          { id: "ds4", translations: { zh: "这是我们所期待的结果。", en: "This is the result we've been hoping for." } },
          { id: "ds5", translations: { zh: "民众所争取的权利终于得到保障。", en: "The rights the public fought for have finally been guaranteed." } },
          { id: "ds6", translations: { zh: "学者所研究的现象引起了广泛关注。", en: "The phenomenon scholars are researching has drawn widespread attention." } },
          { id: "ds7", translations: { zh: "社会所需要的不仅是经济增长。", en: "What society needs is not just economic growth." } },
          { id: "ds8", translations: { zh: "政策所要解决的是收入分配问题。", en: "What the policy aims to solve is the income-distribution problem." } },
          { id: "ds9", translations: { zh: "我们所面对的挑战依然严峻。", en: "The challenges we face remain severe." } },
          { id: "ds10", translations: { zh: "制度所保障的权益应当得到落实。", en: "The rights the system guarantees should be put into practice." } }
        ]
      },
      {
        id: "grammar-drill-zheyi-shishi",
        title: { zh: "练习：……这一事实", en: "Practice: ...Zhe Yi Shishi" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「……这一事实」的例句。",
          en: "Next, let's practice example sentences using ……这一事实."
        },
        lines: [
          { id: "zs1", translations: { zh: "越来越多的人开始关注贫富差距扩大这一事实。", en: "More and more people are starting to pay attention to the fact that the wealth gap is widening." } },
          { id: "zs2", translations: { zh: "社会保障制度不完善这一事实，值得我们深思。", en: "The fact that the social security system is not fully developed is worth our deep reflection." } },
          { id: "zs3", translations: { zh: "收入分配不均这一事实，加剧了社会矛盾。", en: "The fact of uneven income distribution has worsened social tension." } },
          { id: "zs4", translations: { zh: "教育资源不均等这一事实，限制了社会流动。", en: "The fact of unequal educational resources has limited social mobility." } },
          { id: "zs5", translations: { zh: "人口老龄化加剧这一事实，给养老体系带来压力。", en: "The fact of worsening population aging has put pressure on the pension system." } },
          { id: "zs6", translations: { zh: "城乡差距依然存在这一事实，不容忽视。", en: "The fact that the urban-rural gap still exists cannot be ignored." } },
          { id: "zs7", translations: { zh: "阶层固化加深这一现象，引发了广泛讨论。", en: "The phenomenon of deepening class rigidification has sparked widespread discussion." } },
          { id: "zs8", translations: { zh: "社会信任缺失这一问题，需要制度层面的解决。", en: "The problem of a lack of social trust needs a systemic solution." } },
          { id: "zs9", translations: { zh: "户籍制度限制流动这一现实，仍未根本改变。", en: "The reality that the household-registration system restricts mobility has still not fundamentally changed." } },
          { id: "zs10", translations: { zh: "公共服务不均衡这一事实，影响着民众的生活质量。", en: "The fact of unbalanced public services affects people's quality of life." } }
        ]
      }
    ]
  }
};
