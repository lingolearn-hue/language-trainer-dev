import type { TopicLesson } from "../topicTypes";

// C1 — row 4 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Hedge and qualify claims" via 可能／似乎／未必／恐怕／不排除……
// 的可能性
//
// Scope note: only `zh`/`en` translated — same deliberate scope
// decision as topic-42-education.ts.
//
// Pronunciation note: table assigns "Modal prominence" and
// "Intonation of uncertainty" — sentence-level prosody again, so
// items are short marked phrases (see topic-42's header comment).

export const topicEconomy: TopicLesson = {
  id: "topic-c1-04-economy",
  lessonNumber: 4,
  level: "C1",
  topicName: {
    zh: "经济",
    en: "Economy"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "经济增长", en: "economic growth" } },
    { id: "v02", category: "noun", translations: { zh: "通货膨胀", en: "inflation" } },
    { id: "v03", category: "noun", translations: { zh: "利率", en: "interest rate" } },
    { id: "v04", category: "noun", translations: { zh: "股市", en: "stock market" } },
    { id: "v05", category: "noun", translations: { zh: "汇率", en: "exchange rate" } },
    { id: "v06", category: "noun", translations: { zh: "衰退", en: "recession" } },
    { id: "v07", category: "noun", translations: { zh: "复苏", en: "recovery" } },
    { id: "v08", category: "noun", translations: { zh: "投资", en: "investment" } },
    { id: "v09", category: "noun", translations: { zh: "消费", en: "consumption" } },
    { id: "v10", category: "noun", translations: { zh: "供需", en: "supply and demand" } },
    { id: "v11", category: "noun", translations: { zh: "波动", en: "fluctuation" } },
    { id: "v12", category: "noun", translations: { zh: "预测", en: "forecast" } },
    { id: "v13", category: "noun", translations: { zh: "风险", en: "risk" } },
    { id: "v14", category: "noun", translations: { zh: "前景", en: "outlook, prospect" } },
    { id: "v15", category: "noun", translations: { zh: "数据", en: "data" } },
    { id: "v16", category: "noun", translations: { zh: "指标", en: "indicator" } },
    { id: "v17", category: "noun", translations: { zh: "就业市场", en: "job market" } },
    { id: "v18", category: "noun", translations: { zh: "财政政策", en: "fiscal policy" } },
    { id: "v19", category: "noun", translations: { zh: "货币政策", en: "monetary policy" } },
    { id: "v20", category: "noun", translations: { zh: "贸易", en: "trade" } },
    { id: "v21", category: "noun", translations: { zh: "出口", en: "export" } },
    { id: "v22", category: "noun", translations: { zh: "进口", en: "import" } },
    { id: "v23", category: "noun", translations: { zh: "债务", en: "debt" } },
    { id: "v24", category: "noun", translations: { zh: "泡沫", en: "bubble (economic)" } },
    { id: "v25", category: "adjective", translations: { zh: "稳定", en: "stable, stability" } },
    { id: "v26", category: "adjective", translations: { zh: "疲软", en: "weak, sluggish" } },
    { id: "v27", category: "adjective", translations: { zh: "强劲", en: "strong, robust" } },
    { id: "v28", category: "verb", translations: { zh: "调整", en: "to adjust" } },
    { id: "v29", category: "verb", translations: { zh: "刺激", en: "to stimulate" } },
    { id: "v30", category: "adjective", translations: { zh: "谨慎", en: "cautious" } }
  ],
  dialogueA: {
    title: { zh: "经济预测", en: "Economic Forecast" },
    lines: [
      { id: "d1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "您对明年的经济增长有什么预测？", en: "What's your forecast for next year's economic growth?" } },
      { id: "d2", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "明年的经济增长可能会放缓，但不会出现严重衰退。", en: "Growth next year may slow down, but there won't be a severe recession." } },
      { id: "d3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "通货膨胀率会怎么变化？", en: "How will the inflation rate change?" } },
      { id: "d4", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "通货膨胀率未必会像预期那样快速下降。", en: "The inflation rate won't necessarily fall as quickly as expected." } },
      { id: "d5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "那利率政策会有调整吗？", en: "So will there be adjustments to interest-rate policy?" } },
      { id: "d6", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "我们不排除利率进一步上调的可能性。", en: "We can't rule out the possibility of further interest-rate hikes." } },
      { id: "d7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "股市似乎已经出现了波动，这说明什么？", en: "The stock market seems to have started fluctuating — what does that indicate?" } },
      { id: "d8", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "股市的波动似乎反映了投资者的谨慎态度。", en: "The stock market's fluctuation seems to reflect investors' cautious attitude." } },
      { id: "d9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "就业市场的前景怎么样？", en: "What's the outlook for the job market?" } },
      { id: "d10", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "恐怕就业市场也会受到一定影响。", en: "I'm afraid the job market will be affected to some extent too." } },
      { id: "d11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "消费者会如何应对这种不确定性？", en: "How will consumers respond to this uncertainty?" } },
      { id: "d12", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "消费者可能会更加谨慎地安排支出。", en: "Consumers may arrange their spending more cautiously." } },
      { id: "d13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "感谢您的分析。", en: "Thank you for the analysis." } },
      { id: "d14", speaker: { zh: "经济学家", en: "Economist" }, translations: { zh: "不客气，希望这些信息对大家有帮助。", en: "You're welcome. I hope this information is helpful to everyone." } }
    ]
  },
  dialogueB: {
    title: { zh: "市场不确定性", en: "Market Uncertainty" },
    lines: [
      { id: "e1", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "你觉得目前的市场波动会持续多久？", en: "How long do you think the current market fluctuation will last?" } },
      { id: "e2", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "恐怕短期内很难判断，情况似乎还在变化。", en: "I'm afraid it's hard to tell in the short term — the situation still seems to be changing." } },
      { id: "e3", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "汇率的波动是不是也会影响贸易？", en: "Will the exchange-rate fluctuation also affect trade?" } },
      { id: "e4", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "很可能会，尤其是对出口企业的影响更大。", en: "Very likely, especially a greater impact on exporting companies." } },
      { id: "e5", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "你会不会担心出现经济泡沫？", en: "Are you worried about an economic bubble forming?" } },
      { id: "e6", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "不排除某些领域已经存在泡沫的可能性。", en: "We can't rule out the possibility that a bubble already exists in some sectors." } },
      { id: "e7", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "政府会不会出台刺激政策？", en: "Will the government roll out stimulus policies?" } },
      { id: "e8", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "似乎已经有一些相关的讨论在进行。", en: "There seem to already be some related discussions underway." } },
      { id: "e9", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "债务水平会不会成为一个问题？", en: "Could debt levels become an issue?" } },
      { id: "e10", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "恐怕这是一个不容忽视的风险。", en: "I'm afraid this is a risk that can't be ignored." } },
      { id: "e11", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "投资者应该怎么应对这种不确定性？", en: "How should investors respond to this uncertainty?" } },
      { id: "e12", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "谨慎分散投资可能是比较稳妥的做法。", en: "Cautiously diversifying investments is probably a fairly safe approach." } },
      { id: "e13", speaker: { zh: "分析师甲", en: "Analyst A" }, translations: { zh: "希望市场能尽快稳定下来。", en: "I hope the market stabilizes soon." } },
      { id: "e14", speaker: { zh: "分析师乙", en: "Analyst B" }, translations: { zh: "我也这么希望，但恐怕还需要一些时间。", en: "I hope so too, but I'm afraid it'll still take some time." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "经济前景", en: "Economic Outlook" },
      lines: [
        { id: "p1", translations: { zh: "展望未来一年，全球经济前景仍存在诸多不确定性。", en: "Looking ahead to the coming year, the global economic outlook still has many uncertainties." } },
        { id: "p2", translations: { zh: "一些经济学家认为，通货膨胀率可能会逐渐回落，但速度未必如预期那样快。", en: "Some economists believe the inflation rate may gradually decline, but the pace won't necessarily be as fast as expected." } },
        { id: "p3", translations: { zh: "与此同时，利率政策似乎正在经历一个关键的转折点。", en: "At the same time, interest-rate policy seems to be going through a key turning point." } },
        { id: "p4", translations: { zh: "恐怕货币政策的调整会对就业市场产生一定影响。", en: "I'm afraid monetary-policy adjustments will have some impact on the job market." } },
        { id: "p5", translations: { zh: "分析人士指出，不排除某些行业出现衰退的可能性，尤其是依赖出口的企业。", en: "Analysts point out that a recession can't be ruled out in some industries, especially export-dependent companies." } },
        { id: "p6", translations: { zh: "然而，也有专家认为，消费者支出的韧性似乎比预期更强。", en: "However, some experts believe consumer spending's resilience seems stronger than expected." } },
        { id: "p7", translations: { zh: "股市的波动反映了投资者对未来走势的谨慎态度。", en: "Stock market fluctuations reflect investors' cautious attitude toward future trends." } },
        { id: "p8", translations: { zh: "至于贸易政策的变化，其影响恐怕需要更长时间才能显现。", en: "As for changes in trade policy, their effects will probably take longer to become apparent." } },
        { id: "p9", translations: { zh: "总体而言，经济复苏的进程可能是不均衡的，一些行业将比其他行业恢复得更快。", en: "Overall, the pace of economic recovery may be uneven, with some industries recovering faster than others." } },
        { id: "p10", translations: { zh: "因此，政策制定者在制定财政和货币政策时，需要格外谨慎，以应对这种不确定性。", en: "Therefore, policymakers need to be especially cautious when formulating fiscal and monetary policy, to deal with this uncertainty." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，通货膨胀率可能会怎样变化？", en: "According to the article, how might the inflation rate change?" },
          options: [
            { zh: "逐渐回落，但速度未必如预期快", en: "Gradually decline, but not necessarily as fast as expected" },
            { zh: "持续大幅上升", en: "Continue to rise sharply" },
            { zh: "保持不变", en: "Remain unchanged" },
            { zh: "立即降为零", en: "Immediately drop to zero" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "文章提到，哪类企业可能面临衰退风险？", en: "Which type of company might face recession risk, according to the article?" },
          options: [
            { zh: "依赖出口的企业", en: "Export-dependent companies" },
            { zh: "只做国内业务的企业", en: "Domestic-only companies" },
            { zh: "所有企业", en: "All companies" },
            { zh: "没有企业", en: "No companies" }
          ],
          correctIndex: 0
        },
        {
          id: "q3",
          question: { zh: "专家认为，消费者支出的表现如何？", en: "What do experts think about consumer spending's performance?" },
          options: [
            { zh: "韧性比预期更强", en: "Its resilience is stronger than expected" },
            { zh: "完全崩溃", en: "It has completely collapsed" },
            { zh: "没有任何变化", en: "There's been no change at all" },
            { zh: "无法预测", en: "It's unpredictable" }
          ],
          correctIndex: 0
        },
        {
          id: "q4",
          question: { zh: "股市波动反映了什么？", en: "What does stock-market volatility reflect?" },
          options: [
            { zh: "投资者的谨慎态度", en: "Investors' cautious attitude" },
            { zh: "经济已经完全复苏", en: "The economy has fully recovered" },
            { zh: "通货膨胀已经消失", en: "Inflation has disappeared" },
            { zh: "政府失去了控制", en: "The government has lost control" }
          ],
          correctIndex: 0
        },
        {
          id: "q5",
          question: { zh: "文章认为，经济复苏的进程会是怎样的？", en: "What does the article say the pace of economic recovery will be like?" },
          options: [
            { zh: "完全均衡的", en: "Completely even" },
            { zh: "可能是不均衡的", en: "Possibly uneven" },
            { zh: "已经完成", en: "Already complete" },
            { zh: "与政策无关", en: "Unrelated to policy" }
          ],
          correctIndex: 1
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "可能／似乎／未必／恐怕／不排除……的可能性：委婉表达和限定说法", en: "Keneng / Sihu / Weibi / Kongpa / Bu Paichu...De Kenengxing: Hedging and Qualifying Claims" },
      explanation: {
        zh: "这些词语让说话人在不完全确定的情况下，仍能表达自己的判断（C1 学术和分析性语言常见）。「可能」表示一般的可能性。「似乎」表示根据观察或迹象得出的印象，而非确定的事实。「未必」表示「不一定」，常用于反驳一个假设。「恐怕」表示说话人对不好的结果感到担忧或推测。「不排除……的可能性」是正式的说法，表示「虽然不确定，但也不能完全否定这种可能」。",
        en: "These words let a speaker express a judgment while not being fully certain (common in C1 academic and analytical language). 可能 expresses general possibility. 似乎 expresses an impression drawn from observation or signs, not a confirmed fact. 未必 means \"not necessarily,\" often used to push back on an assumption. 恐怕 expresses the speaker's worry or guess about an unwelcome outcome. 不排除……的可能性 is a formal way of saying \"while uncertain, this possibility can't be entirely ruled out.\""
      },
      chunks: [
        { id: "g1", translations: { zh: "明年的经济增长可能会放缓。", en: "Economic growth next year may slow down." } },
        { id: "g2", translations: { zh: "市场似乎已经开始出现复苏迹象。", en: "The market seems to have already started showing signs of recovery." } },
        { id: "g3", translations: { zh: "通货膨胀率未必会像预期那样下降。", en: "The inflation rate won't necessarily fall as expected." } },
        { id: "g4", translations: { zh: "恐怕这次衰退会持续更长时间。", en: "I'm afraid this recession will last longer." } },
        { id: "g5", translations: { zh: "我们不排除利率进一步上调的可能性。", en: "We can't rule out the possibility of further interest-rate hikes." } },
        { id: "g6", translations: { zh: "股市的波动似乎反映了投资者的谨慎态度。", en: "The stock market's fluctuation seems to reflect investors' cautious attitude." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        modal1: { zh: "情态重音", en: "Modal Prominence" },
        modal2: { zh: "情态重音", en: "Modal Prominence" },
        uncert1: { zh: "不确定语调", en: "Intonation of Uncertainty" },
        uncert2: { zh: "不确定语调", en: "Intonation of Uncertainty" }
      },
      items: [
        { id: "m1_1", category: "modal1", translations: { zh: "这可能是个好机会。", en: "This might be a good opportunity. (stress on 可能)" } },
        { id: "m1_2", category: "modal1", translations: { zh: "他似乎不太满意。", en: "He seems not very satisfied. (stress on 似乎)" } },
        { id: "m1_3", category: "modal1", translations: { zh: "这未必是坏事。", en: "This isn't necessarily a bad thing. (stress on 未必)" } },
        { id: "m1_4", category: "modal1", translations: { zh: "恐怕情况更复杂。", en: "I'm afraid the situation is more complex. (stress on 恐怕)" } },
        { id: "m2_1", category: "modal2", translations: { zh: "不排除失败的可能性。", en: "The possibility of failure can't be ruled out." } },
        { id: "m2_2", category: "modal2", translations: { zh: "也许还有转机。", en: "Perhaps there's still a chance for things to turn around." } },
        { id: "m2_3", category: "modal2", translations: { zh: "说不定会有变化。", en: "There might well be a change." } },
        { id: "m2_4", category: "modal2", translations: { zh: "或许需要更多时间。", en: "It may need more time." } },
        { id: "u1_1", category: "uncert1", translations: { zh: "会不会出问题呢？", en: "Could something go wrong, I wonder? (rising uncertain intonation)" } },
        { id: "u1_2", category: "uncert1", translations: { zh: "是不是太晚了？", en: "Is it too late, I wonder?" } },
        { id: "u1_3", category: "uncert1", translations: { zh: "能不能成功呢？", en: "Will it succeed, I wonder?" } },
        { id: "u1_4", category: "uncert1", translations: { zh: "有没有别的办法？", en: "Is there another way, I wonder?" } },
        { id: "u2_1", category: "uncert2", translations: { zh: "大概是这样吧。", en: "It's probably like this, I suppose. (tentative falling tone)" } },
        { id: "u2_2", category: "uncert2", translations: { zh: "应该没问题吧。", en: "It should be fine, I suppose." } },
        { id: "u2_3", category: "uncert2", translations: { zh: "差不多可以了吧。", en: "It's probably good enough, I suppose." } },
        { id: "u2_4", category: "uncert2", translations: { zh: "也许是对的吧。", en: "Maybe it's right, I suppose." } }
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
          modal1: { zh: "情态重音", en: "Modal Prominence" },
          modal2: { zh: "情态重音", en: "Modal Prominence" },
          uncert1: { zh: "不确定语调", en: "Intonation of Uncertainty" },
          uncert2: { zh: "不确定语调", en: "Intonation of Uncertainty" }
        },
        items: [
          { id: "m1_5", category: "modal1", translations: { zh: "这项政策可能会调整。", en: "This policy might be adjusted." } },
          { id: "m1_6", category: "modal1", translations: { zh: "情况似乎在好转。", en: "The situation seems to be improving." } },
          { id: "m1_7", category: "modal1", translations: { zh: "结果未必如此。", en: "The result isn't necessarily like that." } },
          { id: "m1_8", category: "modal1", translations: { zh: "恐怕问题没那么简单。", en: "I'm afraid the problem isn't that simple." } },
          { id: "m1_9", category: "modal1", translations: { zh: "这可能只是暂时的。", en: "This might only be temporary." } },
          { id: "m1_10", category: "modal1", translations: { zh: "市场似乎趋于稳定。", en: "The market seems to be stabilizing." } },
          { id: "m1_11", category: "modal1", translations: { zh: "计划未必能实现。", en: "The plan won't necessarily be achieved." } },
          { id: "m1_12", category: "modal1", translations: { zh: "恐怕时间不够了。", en: "I'm afraid there isn't enough time." } },
          { id: "m1_13", category: "modal1", translations: { zh: "这可能带来新的挑战。", en: "This might bring new challenges." } },
          { id: "m1_14", category: "modal1", translations: { zh: "局势似乎逐渐清晰。", en: "The situation seems to be gradually becoming clear." } },
          { id: "m1_15", category: "modal1", translations: { zh: "数据未必准确。", en: "The data isn't necessarily accurate." } },
          { id: "m1_16", category: "modal1", translations: { zh: "恐怕影响会更大。", en: "I'm afraid the impact will be greater." } },
          { id: "m1_17", category: "modal1", translations: { zh: "这可能是转折点。", en: "This might be a turning point." } },
          { id: "m1_18", category: "modal1", translations: { zh: "情况似乎超出预期。", en: "The situation seems to have exceeded expectations." } },

          { id: "m2_5", category: "modal2", translations: { zh: "不排除进一步下跌的可能性。", en: "The possibility of a further decline can't be ruled out." } },
          { id: "m2_6", category: "modal2", translations: { zh: "也许情况会有所改善。", en: "Perhaps the situation will improve somewhat." } },
          { id: "m2_7", category: "modal2", translations: { zh: "说不定明天就会好转。", en: "It might well improve by tomorrow." } },
          { id: "m2_8", category: "modal2", translations: { zh: "或许还需要再观察。", en: "It may still need further observation." } },
          { id: "m2_9", category: "modal2", translations: { zh: "不排除政策调整的可能性。", en: "The possibility of a policy adjustment can't be ruled out." } },
          { id: "m2_10", category: "modal2", translations: { zh: "也许这只是暂时现象。", en: "Perhaps this is just a temporary phenomenon." } },
          { id: "m2_11", category: "modal2", translations: { zh: "说不定结果会出人意料。", en: "The result might well be surprising." } },
          { id: "m2_12", category: "modal2", translations: { zh: "或许该重新评估风险。", en: "Perhaps the risk should be reassessed." } },
          { id: "m2_13", category: "modal2", translations: { zh: "不排除出现反弹的可能性。", en: "The possibility of a rebound can't be ruled out." } },
          { id: "m2_14", category: "modal2", translations: { zh: "也许市场会自我修正。", en: "Perhaps the market will self-correct." } },
          { id: "m2_15", category: "modal2", translations: { zh: "说不定会有新的机会。", en: "There might well be new opportunities." } },
          { id: "m2_16", category: "modal2", translations: { zh: "或许应该更谨慎一些。", en: "Perhaps we should be more cautious." } },
          { id: "m2_17", category: "modal2", translations: { zh: "不排除风险扩大的可能性。", en: "The possibility of expanding risk can't be ruled out." } },
          { id: "m2_18", category: "modal2", translations: { zh: "也许现在还不是最坏的时候。", en: "Perhaps now isn't even the worst point yet." } },

          { id: "u1_5", category: "uncert1", translations: { zh: "是不是该调整策略了？", en: "Should the strategy be adjusted, I wonder?" } },
          { id: "u1_6", category: "uncert1", translations: { zh: "会不会影响就业？", en: "Could it affect employment, I wonder?" } },
          { id: "u1_7", category: "uncert1", translations: { zh: "能不能控制住风险？", en: "Can the risk be controlled, I wonder?" } },
          { id: "u1_8", category: "uncert1", translations: { zh: "有没有更好的选择？", en: "Is there a better option, I wonder?" } },
          { id: "u1_9", category: "uncert1", translations: { zh: "是不是太乐观了？", en: "Is that too optimistic, I wonder?" } },
          { id: "u1_10", category: "uncert1", translations: { zh: "会不会引发连锁反应？", en: "Could it trigger a chain reaction, I wonder?" } },
          { id: "u1_11", category: "uncert1", translations: { zh: "能不能应对这种波动？", en: "Can this volatility be handled, I wonder?" } },
          { id: "u1_12", category: "uncert1", translations: { zh: "有没有别的解决方案？", en: "Is there another solution, I wonder?" } },
          { id: "u1_13", category: "uncert1", translations: { zh: "是不是低估了风险？", en: "Was the risk underestimated, I wonder?" } },
          { id: "u1_14", category: "uncert1", translations: { zh: "会不会持续更久？", en: "Could it last even longer, I wonder?" } },
          { id: "u1_15", category: "uncert1", translations: { zh: "能不能恢复正常？", en: "Can it return to normal, I wonder?" } },
          { id: "u1_16", category: "uncert1", translations: { zh: "有没有预警信号？", en: "Are there any warning signs, I wonder?" } },
          { id: "u1_17", category: "uncert1", translations: { zh: "是不是需要干预？", en: "Is intervention needed, I wonder?" } },
          { id: "u1_18", category: "uncert1", translations: { zh: "会不会造成损失？", en: "Could it cause losses, I wonder?" } },

          { id: "u2_5", category: "uncert2", translations: { zh: "可能没那么严重吧。", en: "It's probably not that serious, I suppose." } },
          { id: "u2_6", category: "uncert2", translations: { zh: "应该会慢慢好起来吧。", en: "It should slowly get better, I suppose." } },
          { id: "u2_7", category: "uncert2", translations: { zh: "大概还要等一段时间吧。", en: "It'll probably take a while longer, I suppose." } },
          { id: "u2_8", category: "uncert2", translations: { zh: "差不多是这个方向吧。", en: "It's roughly this direction, I suppose." } },
          { id: "u2_9", category: "uncert2", translations: { zh: "也许影响不会太大吧。", en: "Maybe the impact won't be too great, I suppose." } },
          { id: "u2_10", category: "uncert2", translations: { zh: "应该能挺过去吧。", en: "It should be able to pull through, I suppose." } },
          { id: "u2_11", category: "uncert2", translations: { zh: "大概率会稳定下来吧。", en: "It'll most likely stabilize, I suppose." } },
          { id: "u2_12", category: "uncert2", translations: { zh: "差不多该有转机了吧。", en: "There's probably about to be a turnaround, I suppose." } },
          { id: "u2_13", category: "uncert2", translations: { zh: "可能只是短期波动吧。", en: "It's probably just short-term fluctuation, I suppose." } },
          { id: "u2_14", category: "uncert2", translations: { zh: "应该不至于崩溃吧。", en: "It probably won't collapse, I suppose." } },
          { id: "u2_15", category: "uncert2", translations: { zh: "大概会有所缓解吧。", en: "It'll probably ease up somewhat, I suppose." } },
          { id: "u2_16", category: "uncert2", translations: { zh: "差不多接近底部了吧。", en: "It's probably close to the bottom, I suppose." } },
          { id: "u2_17", category: "uncert2", translations: { zh: "可能很快会反弹吧。", en: "It'll probably rebound soon, I suppose." } },
          { id: "u2_18", category: "uncert2", translations: { zh: "应该在可控范围内吧。", en: "It should be within a manageable range, I suppose." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-keneng-sihu",
        title: { zh: "练习：可能／似乎", en: "Practice: Keneng / Sihu" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「可能」和「似乎」的例句。",
          en: "Next, let's practice example sentences using 可能 and 似乎."
        },
        lines: [
          { id: "ks1", translations: { zh: "明年的经济增长可能会放缓。", en: "Economic growth next year may slow down." } },
          { id: "ks2", translations: { zh: "市场似乎已经开始出现复苏迹象。", en: "The market seems to have already started showing signs of recovery." } },
          { id: "ks3", translations: { zh: "这项政策可能会调整。", en: "This policy might be adjusted." } },
          { id: "ks4", translations: { zh: "情况似乎在好转。", en: "The situation seems to be improving." } },
          { id: "ks5", translations: { zh: "通货膨胀可能持续一段时间。", en: "Inflation may continue for a while." } },
          { id: "ks6", translations: { zh: "投资者情绪似乎有所改善。", en: "Investor sentiment seems to have improved somewhat." } },
          { id: "ks7", translations: { zh: "利率可能进一步上调。", en: "Interest rates may be raised further." } },
          { id: "ks8", translations: { zh: "局势似乎逐渐趋于稳定。", en: "The situation seems to be gradually stabilizing." } },
          { id: "ks9", translations: { zh: "这次衰退可能比预期更严重。", en: "This recession may be more severe than expected." } },
          { id: "ks10", translations: { zh: "消费信心似乎正在恢复。", en: "Consumer confidence seems to be recovering." } }
        ]
      },
      {
        id: "grammar-drill-weibi-kongpa",
        title: { zh: "练习：未必／恐怕／不排除……的可能性", en: "Practice: Weibi / Kongpa / Bu Paichu...De Kenengxing" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「未必」「恐怕」和「不排除……的可能性」的例句。",
          en: "Next, let's practice example sentences using 未必, 恐怕, and 不排除……的可能性."
        },
        lines: [
          { id: "wk1", translations: { zh: "通货膨胀率未必会像预期那样下降。", en: "The inflation rate won't necessarily fall as expected." } },
          { id: "wk2", translations: { zh: "恐怕这次衰退会持续更长时间。", en: "I'm afraid this recession will last longer." } },
          { id: "wk3", translations: { zh: "我们不排除利率进一步上调的可能性。", en: "We can't rule out the possibility of further interest-rate hikes." } },
          { id: "wk4", translations: { zh: "结果未必如预测那样乐观。", en: "The result won't necessarily be as optimistic as predicted." } },
          { id: "wk5", translations: { zh: "恐怕问题比表面看起来更复杂。", en: "I'm afraid the problem is more complex than it looks on the surface." } },
          { id: "wk6", translations: { zh: "不排除市场出现大幅波动的可能性。", en: "The possibility of major market swings can't be ruled out." } },
          { id: "wk7", translations: { zh: "复苏未必会均衡地发生在所有行业。", en: "Recovery won't necessarily happen evenly across all industries." } },
          { id: "wk8", translations: { zh: "恐怕消费者信心短期内难以恢复。", en: "I'm afraid consumer confidence will be hard to recover in the short term." } },
          { id: "wk9", translations: { zh: "不排除进一步紧缩政策的可能性。", en: "The possibility of further tightening policy can't be ruled out." } },
          { id: "wk10", translations: { zh: "这个目标未必能如期实现。", en: "This goal won't necessarily be achieved on schedule." } }
        ]
      }
    ]
  }
};
