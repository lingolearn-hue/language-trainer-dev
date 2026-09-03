import type { TopicLesson } from "../topicTypes";

// C1 — row 5 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Express formal cause and consequence" via 鉴于／据此／由此／为此
//
// Scope note: only `zh`/`en` translated — same deliberate scope
// decision as topic-42-education.ts.
//
// Pronunciation note: table assigns "Cause–effect phrasing" and
// "Falling/rising contours" — sentence-level prosody again, so items
// are short marked phrases (see topic-42's header comment).

export const topicEnvironment: TopicLesson = {
  id: "topic-c1-05-environment",
  lessonNumber: 5,
  level: "C1",
  topicName: {
    zh: "环境",
    en: "Environment"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "环境保护", en: "environmental protection" } },
    { id: "v02", category: "noun", translations: { zh: "污染", en: "pollution" } },
    { id: "v03", category: "noun", translations: { zh: "排放", en: "emissions" } },
    { id: "v04", category: "noun", translations: { zh: "温室气体", en: "greenhouse gas" } },
    { id: "v05", category: "noun", translations: { zh: "气候变化", en: "climate change" } },
    { id: "v06", category: "noun", translations: { zh: "可再生能源", en: "renewable energy" } },
    { id: "v07", category: "noun", translations: { zh: "碳中和", en: "carbon neutrality" } },
    { id: "v08", category: "noun", translations: { zh: "法规", en: "regulation" } },
    { id: "v09", category: "noun", translations: { zh: "环保标准", en: "environmental standard" } },
    { id: "v10", category: "noun", translations: { zh: "生态系统", en: "ecosystem" } },
    { id: "v11", category: "noun", translations: { zh: "可持续性", en: "sustainability" } },
    { id: "v12", category: "noun", translations: { zh: "企业责任", en: "corporate responsibility" } },
    { id: "v13", category: "noun", translations: { zh: "罚款", en: "fine, penalty" } },
    { id: "v14", category: "noun", translations: { zh: "监管", en: "supervision, regulation" } },
    { id: "v15", category: "noun", translations: { zh: "治理", en: "governance, treatment" } },
    { id: "v16", category: "noun", translations: { zh: "减排", en: "emission reduction" } },
    { id: "v17", category: "noun", translations: { zh: "循环利用", en: "recycling" } },
    { id: "v18", category: "noun", translations: { zh: "污染源", en: "pollution source" } },
    { id: "v19", category: "noun", translations: { zh: "环评", en: "environmental impact assessment" } },
    { id: "v20", category: "noun", translations: { zh: "生态保护", en: "ecological conservation" } },
    { id: "v21", category: "noun", translations: { zh: "违规", en: "violation" } },
    { id: "v22", category: "noun", translations: { zh: "整改", en: "rectification" } },
    { id: "v23", category: "noun", translations: { zh: "转型", en: "transformation" } },
    { id: "v24", category: "noun", translations: { zh: "节能", en: "energy conservation" } },
    { id: "v25", category: "noun", translations: { zh: "清洁能源", en: "clean energy" } },
    { id: "v26", category: "noun", translations: { zh: "环境影响", en: "environmental impact" } },
    { id: "v27", category: "verb", translations: { zh: "应对", en: "to respond, cope with" } },
    { id: "v28", category: "verb", translations: { zh: "遵守", en: "to comply with" } },
    { id: "v29", category: "verb", translations: { zh: "履行", en: "to fulfill (an obligation)" } },
    { id: "v30", category: "verb", translations: { zh: "采取措施", en: "to take measures" } }
  ],
  dialogueA: {
    title: { zh: "环境法规", en: "Environmental Regulation" },
    lines: [
      { id: "d1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "政府为什么要出台新的环保法规？", en: "Why is the government rolling out new environmental regulations?" } },
      { id: "d2", speaker: { zh: "官员", en: "Official" }, translations: { zh: "鉴于污染问题日益严重，我们必须采取更严格的措施。", en: "Given that pollution problems are becoming increasingly severe, we must take stricter measures." } },
      { id: "d3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "这些法规具体要求企业做什么？", en: "What exactly do these regulations require companies to do?" } },
      { id: "d4", speaker: { zh: "官员", en: "Official" }, translations: { zh: "据此，各企业必须在明年前完成排放整改。", en: "Accordingly, all companies must complete emissions rectification by next year." } },
      { id: "d5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "如果企业不遵守，会有什么后果？", en: "What are the consequences if companies don't comply?" } },
      { id: "d6", speaker: { zh: "官员", en: "Official" }, translations: { zh: "违规企业将面临罚款，情节严重的甚至可能被关停。", en: "Non-compliant companies will face fines, and in serious cases, may even be shut down." } },
      { id: "d7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "由此可见，政府的执法力度在加强？", en: "So this shows the government's enforcement is being strengthened?" } },
      { id: "d8", speaker: { zh: "官员", en: "Official" }, translations: { zh: "没错，由此可见，环保已经成为不可忽视的优先事项。", en: "That's right — this shows that environmental protection has become a priority that can't be ignored." } },
      { id: "d9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "政府会为企业提供支持吗？", en: "Will the government provide support for companies?" } },
      { id: "d10", speaker: { zh: "官员", en: "Official" }, translations: { zh: "为此，我们设立了专项基金，帮助企业转型。", en: "For this reason, we've set up a dedicated fund to help companies transition." } },
      { id: "d11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "这项政策会影响生态系统吗？", en: "Will this policy affect the ecosystem?" } },
      { id: "d12", speaker: { zh: "官员", en: "Official" }, translations: { zh: "鉴于生态保护的重要性，我们也同步加强了相关工作。", en: "Given the importance of ecological conservation, we've also strengthened related work in parallel." } },
      { id: "d13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "感谢您的介绍。", en: "Thank you for the explanation." } },
      { id: "d14", speaker: { zh: "官员", en: "Official" }, translations: { zh: "不客气，希望大家共同努力，保护我们的环境。", en: "You're welcome. I hope everyone works together to protect our environment." } }
    ]
  },
  dialogueB: {
    title: { zh: "企业的应对", en: "Corporate Response" },
    lines: [
      { id: "e1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "贵公司如何应对新的环保法规？", en: "How is your company responding to the new environmental regulations?" } },
      { id: "e2", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "鉴于法规要求提高，我们已经开始投资清洁能源。", en: "Given that the regulatory requirements have risen, we've already started investing in clean energy." } },
      { id: "e3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "转型的成本会不会很高？", en: "Will the cost of transitioning be very high?" } },
      { id: "e4", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "确实不低，但由此带来的长期效益也很可观。", en: "It's indeed not low, but the long-term benefits it brings are also considerable." } },
      { id: "e5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "公司会不会因此裁员？", en: "Will the company lay off staff because of this?" } },
      { id: "e6", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "据此制定的转型计划，反而会创造新的岗位。", en: "The transition plan formulated accordingly will instead create new jobs." } },
      { id: "e7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "公司是否遵守了所有的环评要求？", en: "Has the company complied with all the environmental-impact-assessment requirements?" } },
      { id: "e8", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "是的，我们严格履行了每一项环评义务。", en: "Yes, we've strictly fulfilled every environmental-impact-assessment obligation." } },
      { id: "e9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "为此，公司做了哪些具体准备？", en: "For this purpose, what specific preparations has the company made?" } },
      { id: "e10", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "为此，我们成立了专门的团队负责减排和循环利用。", en: "For this purpose, we've set up a dedicated team responsible for emission reduction and recycling." } },
      { id: "e11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "客户对这些改变有什么反馈？", en: "What kind of feedback have customers given about these changes?" } },
      { id: "e12", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "由此可见，越来越多客户开始重视企业责任。", en: "This shows that more and more customers are starting to value corporate responsibility." } },
      { id: "e13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "谢谢您接受采访。", en: "Thank you for the interview." } },
      { id: "e14", speaker: { zh: "企业代表", en: "Company Rep" }, translations: { zh: "不客气，我们会继续努力履行企业的环保责任。", en: "You're welcome. We'll keep working to fulfill our corporate environmental responsibility." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "环境影响", en: "Environmental Impact" },
      lines: [
        { id: "p1", translations: { zh: "鉴于全球气候变化日益严峻，各国政府纷纷出台更严格的环境法规。", en: "Given that global climate change is becoming increasingly severe, governments around the world have successively introduced stricter environmental regulations." } },
        { id: "p2", translations: { zh: "这些法规通常要求企业大幅减少温室气体排放，并采用更清洁的生产方式。", en: "These regulations typically require companies to substantially reduce greenhouse-gas emissions and adopt cleaner production methods." } },
        { id: "p3", translations: { zh: "据此，许多企业开始投资可再生能源，以降低对化石燃料的依赖。", en: "Accordingly, many companies have begun investing in renewable energy to reduce their reliance on fossil fuels." } },
        { id: "p4", translations: { zh: "由此带来的转型压力，对一些传统行业来说无疑是巨大的挑战。", en: "The resulting transition pressure is undoubtedly a huge challenge for some traditional industries." } },
        { id: "p5", translations: { zh: "为此，政府设立了专项基金，帮助企业完成绿色转型。", en: "For this reason, the government has set up dedicated funds to help companies complete a green transition." } },
        { id: "p6", translations: { zh: "与此同时，监管机构也加强了对违规排放企业的处罚力度。", en: "At the same time, regulatory bodies have also stepped up penalties for companies violating emissions rules." } },
        { id: "p7", translations: { zh: "鉴于罚款金额的提高，越来越多的企业开始重视环评和合规问题。", en: "Given the increase in fine amounts, more and more companies have started paying attention to environmental assessment and compliance issues." } },
        { id: "p8", translations: { zh: "由此可见，环境保护已经从道德责任转变为企业必须履行的法律义务。", en: "This shows that environmental protection has shifted from a moral responsibility to a legal obligation companies must fulfill." } },
        { id: "p9", translations: { zh: "然而，转型的成本和速度因行业而异，一些中小企业面临更大的资金压力。", en: "However, the cost and pace of transition vary by industry, and some small and medium-sized enterprises face greater financial pressure." } },
        { id: "p10", translations: { zh: "为此，专家建议政府应提供更多支持，以确保转型过程公平且可持续。", en: "For this reason, experts suggest the government should provide more support to ensure the transition process is fair and sustainable." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，各国政府为什么出台更严格的环境法规？", en: "Why have governments introduced stricter environmental regulations, according to the article?" },
          options: [
            { zh: "鉴于全球气候变化日益严峻", en: "Given that global climate change is increasingly severe" },
            { zh: "因为经济增长过快", en: "Because economic growth is too fast" },
            { zh: "为了增加税收", en: "To increase tax revenue" },
            { zh: "因为人口减少", en: "Because of population decline" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "许多企业开始投资什么？", en: "What have many companies started investing in?" },
          options: [
            { zh: "可再生能源", en: "Renewable energy" },
            { zh: "房地产", en: "Real estate" },
            { zh: "传统燃料", en: "Traditional fuels" },
            { zh: "娱乐产业", en: "The entertainment industry" }
          ],
          correctIndex: 0
        },
        {
          id: "q3",
          question: { zh: "政府设立专项基金的目的是什么？", en: "What is the purpose of the government's dedicated funds?" },
          options: [
            { zh: "帮助企业完成绿色转型", en: "To help companies complete a green transition" },
            { zh: "增加政府收入", en: "To increase government revenue" },
            { zh: "支持传统能源产业", en: "To support the traditional energy industry" },
            { zh: "减少企业数量", en: "To reduce the number of companies" }
          ],
          correctIndex: 0
        },
        {
          id: "q4",
          question: { zh: "文章提到，监管机构做了什么？", en: "What does the article say regulatory bodies have done?" },
          options: [
            { zh: "取消了所有法规", en: "Abolished all regulations" },
            { zh: "加强了对违规排放企业的处罚力度", en: "Stepped up penalties for companies violating emissions rules" },
            { zh: "减少了环保投入", en: "Reduced environmental investment" },
            { zh: "停止了执法", en: "Stopped enforcement" }
          ],
          correctIndex: 1
        },
        {
          id: "q5",
          question: { zh: "哪类企业面临更大的资金压力？", en: "Which type of company faces greater financial pressure?" },
          options: [
            { zh: "大型跨国企业", en: "Large multinational corporations" },
            { zh: "中小企业", en: "Small and medium-sized enterprises" },
            { zh: "政府机构", en: "Government agencies" },
            { zh: "所有企业压力相同", en: "All companies face the same pressure" }
          ],
          correctIndex: 1
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "鉴于／据此／由此／为此：正式表达因果关系", en: "Jianyu / Juci / Youci / Weici: Expressing Formal Cause and Consequence" },
      explanation: {
        zh: "这四个正式连接词常用于书面和分析性语言中，表达因果关系（C1 水平）。「鉴于」引出一个作为背景或依据的原因（“考虑到……”）。「据此」表示「根据这一点」，引出基于前面所述而采取的行动。「由此」表示「从这一点出发」，常用于引出结论（“由此可见”）。「为此」表示「为了这个目的」，引出为解决前述问题而采取的行动。",
        en: "These four formal connectives are commonly used in written and analytical language to express cause and effect (C1 level). 鉴于 introduces a reason serving as background or basis (\"considering that...\"). 据此 means \"based on this,\" introducing an action taken based on what was just stated. 由此 means \"from this point,\" often used to introduce a conclusion (\"由此可见\" = \"from this it can be seen that\"). 为此 means \"for this purpose,\" introducing an action taken to address the issue just mentioned."
      },
      chunks: [
        { id: "g1", translations: { zh: "鉴于污染问题日益严重，政府出台了新的排放标准。", en: "Given that pollution problems are becoming increasingly severe, the government has introduced new emissions standards." } },
        { id: "g2", translations: { zh: "据此，各企业必须在明年前完成整改。", en: "Accordingly, all companies must complete rectification by next year." } },
        { id: "g3", translations: { zh: "由此可见，环保政策的执行力度正在加强。", en: "This shows that enforcement of environmental policy is being strengthened." } },
        { id: "g4", translations: { zh: "为此，政府设立了专项基金支持清洁能源发展。", en: "For this reason, the government has set up a dedicated fund to support clean-energy development." } },
        { id: "g5", translations: { zh: "鉴于气候变化的紧迫性，各国正加快减排步伐。", en: "Given the urgency of climate change, countries are accelerating their pace of emission reduction." } },
        { id: "g6", translations: { zh: "由此产生的环境效益，将惠及子孙后代。", en: "The environmental benefits this produces will benefit future generations." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        cause1: { zh: "因果表达", en: "Cause–Effect Phrasing" },
        cause2: { zh: "因果表达", en: "Cause–Effect Phrasing" },
        contour1: { zh: "降升调型", en: "Falling/Rising Contours" },
        contour2: { zh: "降升调型", en: "Falling/Rising Contours" }
      },
      items: [
        { id: "c1_1", category: "cause1", translations: { zh: "鉴于情况紧急，我们必须立即行动。", en: "Given the urgency of the situation, we must act immediately." } },
        { id: "c1_2", category: "cause1", translations: { zh: "据此，公司调整了生产计划。", en: "Accordingly, the company adjusted its production plan." } },
        { id: "c1_3", category: "cause1", translations: { zh: "由此可见，问题的根源在于管理。", en: "This shows the root of the problem lies in management." } },
        { id: "c1_4", category: "cause1", translations: { zh: "为此，我们制定了新的方案。", en: "For this reason, we've drawn up a new plan." } },
        { id: "c2_1", category: "cause2", translations: { zh: "由于污染加剧，环境质量下降。", en: "Because pollution has intensified, environmental quality has declined." } },
        { id: "c2_2", category: "cause2", translations: { zh: "因此，政府加强了监管。", en: "Therefore, the government has strengthened regulation." } },
        { id: "c2_3", category: "cause2", translations: { zh: "从而导致企业成本上升。", en: "Thereby causing companies' costs to rise." } },
        { id: "c2_4", category: "cause2", translations: { zh: "于是，行业开始转型。", en: "So, the industry has begun to transform." } },
        { id: "ct1_1", category: "contour1", translations: { zh: "鉴于污染严重，↘政府采取了行动。", en: "Given serious pollution, [falling] the government took action." } },
        { id: "ct1_2", category: "contour1", translations: { zh: "由于排放超标，↘企业受到处罚。", en: "Because emissions exceeded standards, [falling] the company was penalized." } },
        { id: "ct1_3", category: "contour1", translations: { zh: "因为技术落后，↘产量受到影响。", en: "Because the technology is outdated, [falling] output was affected." } },
        { id: "ct1_4", category: "contour1", translations: { zh: "由于资金不足，↘项目被迫延后。", en: "Because funding is insufficient, [falling] the project was delayed." } },
        { id: "ct2_1", category: "contour2", translations: { zh: "为什么要减排？↗因为气候变化。↘", en: "Why reduce emissions? [rising] Because of climate change. [falling]" } },
        { id: "ct2_2", category: "contour2", translations: { zh: "为什么要转型？↗因为法规要求。↘", en: "Why transition? [rising] Because regulations require it. [falling]" } },
        { id: "ct2_3", category: "contour2", translations: { zh: "为什么要处罚？↗因为违反规定。↘", en: "Why penalize? [rising] Because rules were violated. [falling]" } },
        { id: "ct2_4", category: "contour2", translations: { zh: "为什么要投资？↗因为长远发展。↘", en: "Why invest? [rising] For long-term development. [falling]" } }
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
          cause1: { zh: "因果表达", en: "Cause–Effect Phrasing" },
          cause2: { zh: "因果表达", en: "Cause–Effect Phrasing" },
          contour1: { zh: "降升调型", en: "Falling/Rising Contours" },
          contour2: { zh: "降升调型", en: "Falling/Rising Contours" }
        },
        items: [
          { id: "c1_5", category: "cause1", translations: { zh: "鉴于市场变化，公司调整了战略。", en: "Given market changes, the company adjusted its strategy." } },
          { id: "c1_6", category: "cause1", translations: { zh: "据此，管理层做出了新的决策。", en: "Accordingly, management made a new decision." } },
          { id: "c1_7", category: "cause1", translations: { zh: "由此产生的连锁反应值得关注。", en: "The chain reaction this produces deserves attention." } },
          { id: "c1_8", category: "cause1", translations: { zh: "为此，企业加大了研发投入。", en: "For this reason, the company increased R&D investment." } },
          { id: "c1_9", category: "cause1", translations: { zh: "鉴于风险上升，投资者变得谨慎。", en: "Given rising risk, investors have become cautious." } },
          { id: "c1_10", category: "cause1", translations: { zh: "据此，专家提出了应对建议。", en: "Accordingly, experts have proposed response recommendations." } },
          { id: "c1_11", category: "cause1", translations: { zh: "由此可见，政策效果正在显现。", en: "This shows the policy's effects are becoming apparent." } },
          { id: "c1_12", category: "cause1", translations: { zh: "为此设立的机制正在发挥作用。", en: "The mechanism set up for this purpose is now taking effect." } },
          { id: "c1_13", category: "cause1", translations: { zh: "鉴于形势严峻，各方加强了合作。", en: "Given the severe situation, all parties have strengthened cooperation." } },
          { id: "c1_14", category: "cause1", translations: { zh: "据此制定的方案已经开始实施。", en: "The plan formulated on this basis has already begun to be implemented." } },
          { id: "c1_15", category: "cause1", translations: { zh: "由此带来的变化影响深远。", en: "The resulting change has a far-reaching impact." } },
          { id: "c1_16", category: "cause1", translations: { zh: "为此，政府修订了相关法规。", en: "For this reason, the government revised the relevant regulations." } },
          { id: "c1_17", category: "cause1", translations: { zh: "鉴于问题复杂，需要多方参与。", en: "Given the complexity of the problem, multiple parties need to be involved." } },
          { id: "c1_18", category: "cause1", translations: { zh: "据此形成的共识值得肯定。", en: "The consensus formed on this basis deserves recognition." } },

          { id: "c2_5", category: "cause2", translations: { zh: "由于成本上升，产品价格上涨。", en: "Because costs have risen, product prices have gone up." } },
          { id: "c2_6", category: "cause2", translations: { zh: "因此，消费者的购买力下降。", en: "Therefore, consumers' purchasing power has declined." } },
          { id: "c2_7", category: "cause2", translations: { zh: "从而导致市场需求减少。", en: "Thereby causing market demand to decrease." } },
          { id: "c2_8", category: "cause2", translations: { zh: "于是，企业开始寻找新的出路。", en: "So, companies have started looking for new solutions." } },
          { id: "c2_9", category: "cause2", translations: { zh: "由于监管加强，违规行为减少。", en: "Because regulation has strengthened, violations have decreased." } },
          { id: "c2_10", category: "cause2", translations: { zh: "因此，企业合规意识提高。", en: "Therefore, companies' compliance awareness has risen." } },
          { id: "c2_11", category: "cause2", translations: { zh: "从而促进了行业的健康发展。", en: "Thereby promoting the healthy development of the industry." } },
          { id: "c2_12", category: "cause2", translations: { zh: "于是，更多资金流向清洁能源。", en: "So, more capital has flowed toward clean energy." } },
          { id: "c2_13", category: "cause2", translations: { zh: "由于技术进步，成本逐渐降低。", en: "Because of technological progress, costs have gradually decreased." } },
          { id: "c2_14", category: "cause2", translations: { zh: "因此，清洁能源变得更具竞争力。", en: "Therefore, clean energy has become more competitive." } },
          { id: "c2_15", category: "cause2", translations: { zh: "从而加快了能源结构的转型。", en: "Thereby accelerating the transformation of the energy mix." } },
          { id: "c2_16", category: "cause2", translations: { zh: "于是，传统能源的地位受到挑战。", en: "So, the position of traditional energy has been challenged." } },
          { id: "c2_17", category: "cause2", translations: { zh: "由于政策支持，投资意愿增强。", en: "Because of policy support, investment willingness has increased." } },
          { id: "c2_18", category: "cause2", translations: { zh: "因此，绿色产业发展迅速。", en: "Therefore, green industry has developed rapidly." } },

          { id: "ct1_5", category: "contour1", translations: { zh: "鉴于成本过高，↘项目被迫暂停。", en: "Given excessive cost, [falling] the project was forced to pause." } },
          { id: "ct1_6", category: "contour1", translations: { zh: "由于监管趋严，↘企业加快整改。", en: "Because regulation is tightening, [falling] companies sped up rectification." } },
          { id: "ct1_7", category: "contour1", translations: { zh: "因为需求下降，↘产量相应减少。", en: "Because demand has fallen, [falling] output decreased accordingly." } },
          { id: "ct1_8", category: "contour1", translations: { zh: "由于技术突破，↘效率大幅提升。", en: "Because of a technological breakthrough, [falling] efficiency rose sharply." } },
          { id: "ct1_9", category: "contour1", translations: { zh: "鉴于风险增加，↘投资更加谨慎。", en: "Given increased risk, [falling] investment became more cautious." } },
          { id: "ct1_10", category: "contour1", translations: { zh: "由于合规压力，↘企业调整流程。", en: "Because of compliance pressure, [falling] the company adjusted its processes." } },
          { id: "ct1_11", category: "contour1", translations: { zh: "因为资源有限，↘项目优先排序。", en: "Because resources are limited, [falling] projects were prioritized." } },
          { id: "ct1_12", category: "contour1", translations: { zh: "由于市场饱和，↘竞争更加激烈。", en: "Because the market is saturated, [falling] competition intensified." } },
          { id: "ct1_13", category: "contour1", translations: { zh: "鉴于形势变化，↘策略随之调整。", en: "Given the changing situation, [falling] the strategy was adjusted accordingly." } },
          { id: "ct1_14", category: "contour1", translations: { zh: "由于成效显著，↘政策得以延续。", en: "Because the results were notable, [falling] the policy was continued." } },
          { id: "ct1_15", category: "contour1", translations: { zh: "因为压力增大，↘企业寻求转型。", en: "Because pressure has increased, [falling] companies are seeking transformation." } },
          { id: "ct1_16", category: "contour1", translations: { zh: "由于反馈积极，↘计划得以推广。", en: "Because feedback was positive, [falling] the plan was rolled out further." } },
          { id: "ct1_17", category: "contour1", translations: { zh: "鉴于教训深刻，↘制度更加完善。", en: "Given the profound lesson, [falling] the system was further improved." } },
          { id: "ct1_18", category: "contour1", translations: { zh: "由于合作顺利，↘项目提前完成。", en: "Because cooperation went smoothly, [falling] the project was completed ahead of schedule." } },

          { id: "ct2_5", category: "contour2", translations: { zh: "为什么要合规？↗因为法律要求。↘", en: "Why comply? [rising] Because the law requires it. [falling]" } },
          { id: "ct2_6", category: "contour2", translations: { zh: "为什么要节能？↗因为资源有限。↘", en: "Why conserve energy? [rising] Because resources are limited. [falling]" } },
          { id: "ct2_7", category: "contour2", translations: { zh: "为什么要治理？↗因为污染严重。↘", en: "Why remediate? [rising] Because pollution is severe. [falling]" } },
          { id: "ct2_8", category: "contour2", translations: { zh: "为什么要监管？↗因为风险存在。↘", en: "Why regulate? [rising] Because risk exists. [falling]" } },
          { id: "ct2_9", category: "contour2", translations: { zh: "为什么要整改？↗因为发现问题。↘", en: "Why rectify? [rising] Because a problem was found. [falling]" } },
          { id: "ct2_10", category: "contour2", translations: { zh: "为什么要循环利用？↗因为资源宝贵。↘", en: "Why recycle? [rising] Because resources are precious. [falling]" } },
          { id: "ct2_11", category: "contour2", translations: { zh: "为什么要评估？↗因为影响未知。↘", en: "Why assess? [rising] Because the impact is unknown. [falling]" } },
          { id: "ct2_12", category: "contour2", translations: { zh: "为什么要转型？↗因为形势所迫。↘", en: "Why transition? [rising] Because circumstances demand it. [falling]" } },
          { id: "ct2_13", category: "contour2", translations: { zh: "为什么要支持？↗因为负担过重。↘", en: "Why support? [rising] Because the burden is too heavy. [falling]" } },
          { id: "ct2_14", category: "contour2", translations: { zh: "为什么要合作？↗因为挑战共同。↘", en: "Why cooperate? [rising] Because the challenge is shared. [falling]" } },
          { id: "ct2_15", category: "contour2", translations: { zh: "为什么要公开？↗因为公众关切。↘", en: "Why disclose? [rising] Because the public is concerned. [falling]" } },
          { id: "ct2_16", category: "contour2", translations: { zh: "为什么要加快？↗因为时间紧迫。↘", en: "Why speed up? [rising] Because time is short. [falling]" } },
          { id: "ct2_17", category: "contour2", translations: { zh: "为什么要坚持？↗因为意义重大。↘", en: "Why persist? [rising] Because it matters greatly. [falling]" } },
          { id: "ct2_18", category: "contour2", translations: { zh: "为什么要反思？↗因为教训深刻。↘", en: "Why reflect? [rising] Because the lesson was profound. [falling]" } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-jianyu-juci",
        title: { zh: "练习：鉴于／据此", en: "Practice: Jianyu / Juci" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「鉴于」和「据此」的例句。",
          en: "Next, let's practice example sentences using 鉴于 and 据此."
        },
        lines: [
          { id: "jc1", translations: { zh: "鉴于污染问题日益严重，政府出台了新的排放标准。", en: "Given that pollution problems are becoming increasingly severe, the government has introduced new emissions standards." } },
          { id: "jc2", translations: { zh: "据此，各企业必须在明年前完成整改。", en: "Accordingly, all companies must complete rectification by next year." } },
          { id: "jc3", translations: { zh: "鉴于市场变化，公司调整了战略。", en: "Given market changes, the company adjusted its strategy." } },
          { id: "jc4", translations: { zh: "据此，管理层做出了新的决策。", en: "Accordingly, management made a new decision." } },
          { id: "jc5", translations: { zh: "鉴于风险上升，投资者变得谨慎。", en: "Given rising risk, investors have become cautious." } },
          { id: "jc6", translations: { zh: "据此，专家提出了应对建议。", en: "Accordingly, experts have proposed response recommendations." } },
          { id: "jc7", translations: { zh: "鉴于气候变化的紧迫性，各国正加快减排步伐。", en: "Given the urgency of climate change, countries are accelerating their pace of emission reduction." } },
          { id: "jc8", translations: { zh: "据此制定的方案已经开始实施。", en: "The plan formulated on this basis has already begun to be implemented." } },
          { id: "jc9", translations: { zh: "鉴于形势严峻，各方加强了合作。", en: "Given the severe situation, all parties have strengthened cooperation." } },
          { id: "jc10", translations: { zh: "据此，政府修订了相关法规。", en: "Accordingly, the government revised the relevant regulations." } }
        ]
      },
      {
        id: "grammar-drill-youci-weici",
        title: { zh: "练习：由此／为此", en: "Practice: Youci / Weici" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「由此」和「为此」的例句。",
          en: "Next, let's practice example sentences using 由此 and 为此."
        },
        lines: [
          { id: "yw1", translations: { zh: "由此可见，环保政策的执行力度正在加强。", en: "This shows that enforcement of environmental policy is being strengthened." } },
          { id: "yw2", translations: { zh: "为此，政府设立了专项基金支持清洁能源发展。", en: "For this reason, the government has set up a dedicated fund to support clean-energy development." } },
          { id: "yw3", translations: { zh: "由此产生的环境效益，将惠及子孙后代。", en: "The environmental benefits this produces will benefit future generations." } },
          { id: "yw4", translations: { zh: "为此，企业加大了研发投入。", en: "For this reason, the company increased R&D investment." } },
          { id: "yw5", translations: { zh: "由此可见，问题的根源在于管理。", en: "This shows the root of the problem lies in management." } },
          { id: "yw6", translations: { zh: "为此，我们制定了新的方案。", en: "For this reason, we've drawn up a new plan." } },
          { id: "yw7", translations: { zh: "由此带来的变化影响深远。", en: "The resulting change has a far-reaching impact." } },
          { id: "yw8", translations: { zh: "为此设立的机制正在发挥作用。", en: "The mechanism set up for this purpose is now taking effect." } },
          { id: "yw9", translations: { zh: "由此产生的连锁反应值得关注。", en: "The chain reaction this produces deserves attention." } },
          { id: "yw10", translations: { zh: "为此，专家建议政府应提供更多支持。", en: "For this reason, experts suggest the government should provide more support." } }
        ]
      }
    ]
  }
};
