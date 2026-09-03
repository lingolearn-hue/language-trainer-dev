import type { TopicLesson } from "../topicTypes";

// C1 — row 6 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Condense complex information into compact expressions" via
// 四字格／成语／正式书面搭配 (four-character set phrases, chengyu,
// and formal written collocations) — a lexical-grammar point rather
// than a sentence-connective one, since compact idiomatic compression
// is itself the C1 skill being taught here.
//
// Scope note: only `zh`/`en` translated — same deliberate scope
// decision as topic-42-education.ts.
//
// Pronunciation note: table assigns "Stress in compounds" and
// "Chunking" — for this lesson specifically, items are genuinely
// single compact expressions (the four-character idioms themselves)
// for the stress category, and tech noun-phrase chunks for the
// chunking category, rather than full sentences like other C1 lessons
// — a closer fit to what "stress in compounds" and "chunking" actually
// mean at the word/phrase level.

export const topicTechnologyC1: TopicLesson = {
  id: "topic-c1-06-technology",
  lessonNumber: 6,
  level: "C1",
  topicName: {
    zh: "科技",
    en: "Technology"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "人工智能", en: "artificial intelligence" } },
    { id: "v02", category: "noun", translations: { zh: "算法", en: "algorithm" } },
    { id: "v03", category: "noun", translations: { zh: "大数据", en: "big data" } },
    { id: "v04", category: "noun", translations: { zh: "云计算", en: "cloud computing" } },
    { id: "v05", category: "noun", translations: { zh: "数字化", en: "digitalization" } },
    { id: "v06", category: "noun", translations: { zh: "自动化", en: "automation" } },
    { id: "v07", category: "noun", translations: { zh: "智能设备", en: "smart device" } },
    { id: "v08", category: "noun", translations: { zh: "数据隐私", en: "data privacy" } },
    { id: "v09", category: "noun", translations: { zh: "网络安全", en: "cybersecurity" } },
    { id: "v10", category: "noun", translations: { zh: "创新", en: "innovation" } },
    { id: "v11", category: "noun", translations: { zh: "应用程序", en: "application, app" } },
    { id: "v12", category: "noun", translations: { zh: "技术革新", en: "technological innovation" } },
    { id: "v13", category: "noun", translations: { zh: "深度学习", en: "deep learning" } },
    { id: "v14", category: "noun", translations: { zh: "机器学习", en: "machine learning" } },
    { id: "v15", category: "noun", translations: { zh: "数字鸿沟", en: "digital divide" } },
    { id: "v16", category: "noun", translations: { zh: "转型", en: "transformation" } },
    { id: "v17", category: "verb", translations: { zh: "普及", en: "to popularize, become widespread" } },
    { id: "v18", category: "verb", translations: { zh: "依赖", en: "to depend on" } },
    { id: "v19", category: "verb", translations: { zh: "取代", en: "to replace" } },
    { id: "v20", category: "noun", translations: { zh: "效率", en: "efficiency" } },
    { id: "v21", category: "noun", translations: { zh: "突破", en: "breakthrough" } },
    { id: "v22", category: "noun", translations: { zh: "前沿", en: "cutting-edge, frontier" } },
    { id: "v23", category: "verb", translations: { zh: "落后", en: "to fall behind, be backward" } },
    { id: "v24", category: "noun", translations: { zh: "更新换代", en: "upgrade, generational renewal" } },
    { id: "v25", category: "noun", translations: { zh: "潜力", en: "potential" } },
    { id: "v26", category: "noun", translations: { zh: "局限性", en: "limitation" } },
    { id: "v27", category: "noun", translations: { zh: "伦理", en: "ethics" } },
    { id: "v28", category: "noun", translations: { zh: "监管", en: "regulation" } },
    { id: "v29", category: "noun", translations: { zh: "竞争力", en: "competitiveness" } },
    { id: "v30", category: "noun", translations: { zh: "变革", en: "transformation, revolution" } }
  ],
  dialogueA: {
    title: { zh: "人工智能发展", en: "AI Development" },
    lines: [
      { id: "d1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "人工智能技术的发展速度如何？", en: "How fast is AI technology developing?" } },
      { id: "d2", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "可以说是日新月异，几乎每个月都有新突破。", en: "You could say it's changing by the day — there's almost a new breakthrough every month." } },
      { id: "d3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "这对普通人的生活有什么影响？", en: "What impact does this have on ordinary people's lives?" } },
      { id: "d4", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "数据安全问题与每个人息息相关，值得大家关注。", en: "Data security is closely related to everyone, and it's worth people's attention." } },
      { id: "d5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "现在市面上的智能应用是不是特别多？", en: "Are there especially many smart applications on the market now?" } },
      { id: "d6", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "是的，各类应用可谓层出不穷。", en: "Yes, all kinds of applications keep emerging endlessly." } },
      { id: "d7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "企业应该如何应对这种快速变化？", en: "How should companies respond to this rapid change?" } },
      { id: "d8", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "企业必须与时俱进，才能保持竞争力。", en: "Companies must keep pace with the times to stay competitive." } },
      { id: "d9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "人工智能会不会取代大量的工作岗位？", en: "Will AI replace a large number of jobs?" } },
      { id: "d10", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "确实存在这种风险，但也会创造新的岗位。", en: "That risk does exist, but it'll also create new jobs." } },
      { id: "d11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "人工智能现在对生活是不是已经不可或缺了？", en: "Has AI already become indispensable to life?" } },
      { id: "d12", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "在很多领域，人工智能确实已经变得不可或缺。", en: "In many fields, AI has indeed become indispensable." } },
      { id: "d13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "感谢您的分享。", en: "Thanks for sharing your insights." } },
      { id: "d14", speaker: { zh: "专家", en: "Expert" }, translations: { zh: "不客气，希望这些信息对读者有帮助。", en: "You're welcome. I hope this information helps readers." } }
    ]
  },
  dialogueB: {
    title: { zh: "技术采用", en: "Technological Adoption" },
    lines: [
      { id: "e1", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "贵公司考虑引入云计算系统吗？", en: "Is your company considering introducing a cloud-computing system?" } },
      { id: "e2", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "是的，这项技术对提升效率举足轻重。", en: "Yes, this technology is pivotal to improving efficiency." } },
      { id: "e3", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "引入新系统会不会遇到阻力？", en: "Will there be resistance to introducing the new system?" } },
      { id: "e4", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "确实有一些，毕竟员工需要时间适应新技术。", en: "There has been some — employees need time to adapt to the new technology, after all." } },
      { id: "e5", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "公司在数字化转型上投入了多少？", en: "How much has the company invested in digital transformation?" } },
      { id: "e6", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "投入不小，因为这是保持竞争力的关键。", en: "Quite a lot, because it's key to staying competitive." } },
      { id: "e7", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "自动化会不会取代部分岗位？", en: "Will automation replace some positions?" } },
      { id: "e8", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "会有一些调整，但我们也在培训员工掌握新技能。", en: "There will be some adjustments, but we're also training staff in new skills." } },
      { id: "e9", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "公司会不会担心落后于同行？", en: "Is the company worried about falling behind competitors?" } },
      { id: "e10", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "这正是我们加快技术更新换代的原因。", en: "That's exactly why we're speeding up our technology upgrades." } },
      { id: "e11", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "有没有考虑过技术的局限性？", en: "Have you considered the technology's limitations?" } },
      { id: "e12", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "当然，我们也在评估相关的伦理和监管问题。", en: "Of course — we're also evaluating related ethics and regulatory issues." } },
      { id: "e13", speaker: { zh: "顾问", en: "Consultant" }, translations: { zh: "希望转型能顺利进行。", en: "I hope the transformation goes smoothly." } },
      { id: "e14", speaker: { zh: "经理", en: "Manager" }, translations: { zh: "谢谢，我们对未来的潜力很有信心。", en: "Thanks — we're confident about the future potential." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "数字化转型", en: "Digital Transformation" },
      lines: [
        { id: "p1", translations: { zh: "近年来，人工智能技术日新月异，正在深刻改变各行各业的运作方式。", en: "In recent years, AI technology has been advancing rapidly, profoundly changing how every industry operates." } },
        { id: "p2", translations: { zh: "从大数据分析到深度学习，这些技术的应用可谓层出不穷。", en: "From big-data analysis to deep learning, applications of these technologies keep emerging one after another." } },
        { id: "p3", translations: { zh: "企业若想在激烈的市场竞争中立于不败之地，就必须与时俱进，积极拥抱数字化转型。", en: "If companies want to remain undefeated in fierce market competition, they must keep pace with the times and actively embrace digital transformation." } },
        { id: "p4", translations: { zh: "数字化转型不仅涉及技术升级，更关乎组织文化和商业模式的根本变革。", en: "Digital transformation involves not just technology upgrades, but fundamental change in organizational culture and business models." } },
        { id: "p5", translations: { zh: "与此同时，数据隐私和网络安全问题也与每个人息息相关，不容忽视。", en: "At the same time, data privacy and cybersecurity issues are closely related to everyone and cannot be ignored." } },
        { id: "p6", translations: { zh: "许多企业已经意识到，智能设备和自动化系统在提高效率方面举足轻重。", en: "Many companies have already realized that smart devices and automation systems play a pivotal role in improving efficiency." } },
        { id: "p7", translations: { zh: "然而，技术的快速发展也带来了新的挑战，例如数字鸿沟的扩大。", en: "However, the rapid development of technology has also brought new challenges, such as the widening digital divide." } },
        { id: "p8", translations: { zh: "一些地区和群体由于资源有限，难以跟上技术更新换代的步伐，逐渐落后。", en: "Some regions and groups, due to limited resources, struggle to keep up with the pace of technological upgrading and are gradually falling behind." } },
        { id: "p9", translations: { zh: "因此，如何在推动创新的同时，兼顾公平与伦理，成为亟待解决的问题。", en: "Therefore, how to balance fairness and ethics while driving innovation has become an urgent issue to address." } },
        { id: "p10", translations: { zh: "总而言之，数字化转型已经成为不可或缺的发展趋势，各方都需积极应对。", en: "In short, digital transformation has become an indispensable development trend, and all parties need to respond proactively." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，人工智能技术呈现出什么特点？", en: "According to the article, what characteristic does AI technology show?" },
          options: [
            { zh: "日新月异", en: "Advancing rapidly, changing by the day" },
            { zh: "停滞不前", en: "Stagnant, not progressing" },
            { zh: "逐渐消失", en: "Gradually disappearing" },
            { zh: "毫无变化", en: "Completely unchanged" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "文章认为，企业要保持竞争力，应该怎么做？", en: "What does the article say companies should do to stay competitive?" },
          options: [
            { zh: "与时俱进，拥抱数字化转型", en: "Keep pace with the times and embrace digital transformation" },
            { zh: "拒绝任何变化", en: "Reject any change" },
            { zh: "减少技术投入", en: "Reduce technology investment" },
            { zh: "忽略市场竞争", en: "Ignore market competition" }
          ],
          correctIndex: 0
        },
        {
          id: "q3",
          question: { zh: "数字化转型除了技术升级，还涉及什么？", en: "Besides technology upgrades, what else does digital transformation involve?" },
          options: [
            { zh: "组织文化和商业模式的变革", en: "Change in organizational culture and business models" },
            { zh: "只关乎硬件更新", en: "Only hardware updates" },
            { zh: "与文化无关", en: "Nothing to do with culture" },
            { zh: "只影响IT部门", en: "Only affects the IT department" }
          ],
          correctIndex: 0
        },
        {
          id: "q4",
          question: { zh: "文章提到的新挑战是什么？", en: "What new challenge does the article mention?" },
          options: [
            { zh: "数字鸿沟的扩大", en: "The widening digital divide" },
            { zh: "技术完全停止发展", en: "Technology completely stopping development" },
            { zh: "没有任何挑战", en: "No challenges at all" },
            { zh: "人工智能被禁止", en: "AI being banned" }
          ],
          correctIndex: 0
        },
        {
          id: "q5",
          question: { zh: "文章最后强调了什么？", en: "What does the article emphasize at the end?" },
          options: [
            { zh: "数字化转型是不可或缺的发展趋势", en: "Digital transformation is an indispensable development trend" },
            { zh: "应该放弃数字化", en: "Digitalization should be abandoned" },
            { zh: "只有大企业需要转型", en: "Only large companies need to transform" },
            { zh: "转型没有任何意义", en: "Transformation is meaningless" }
          ],
          correctIndex: 0
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "四字格／成语／正式书面搭配：浓缩表达复杂信息", en: "Si Zi Ge / Chengyu / Formal Written Collocations: Condensing Complex Information" },
      explanation: {
        zh: "在正式的书面语和学术、新闻语言中，汉语常用四字格成语来浓缩表达一个复杂的意思，使语言更加简洁有力（C1 水平的重要标志）。这些成语大多来自古代文献，但在现代书面语中依然高频使用。掌握这些固定搭配，能让表达更加地道、精炼，也更符合正式场合的语言风格。",
        en: "In formal written, academic, and journalistic Chinese, four-character chengyu (set idiomatic phrases) are commonly used to condense a complex meaning into a compact, forceful expression — an important marker of C1-level fluency. Most of these idioms originate from classical texts but remain in frequent use in modern written Chinese. Mastering these fixed collocations makes expression more idiomatic, concise, and appropriate to formal settings."
      },
      chunks: [
        { id: "g1", translations: { zh: "人工智能技术日新月异，令人应接不暇。", en: "AI technology is advancing rapidly day by day, almost too fast to keep up with." } },
        { id: "g2", translations: { zh: "数据安全问题与每个人息息相关。", en: "Data security issues are closely related to everyone." } },
        { id: "g3", translations: { zh: "这项技术的应用可谓层出不穷。", en: "Applications of this technology keep emerging one after another." } },
        { id: "g4", translations: { zh: "企业必须与时俱进，才能保持竞争力。", en: "Companies must keep pace with the times to stay competitive." } },
        { id: "g5", translations: { zh: "人工智能在现代生活中已经变得不可或缺。", en: "AI has already become indispensable in modern life." } },
        { id: "g6", translations: { zh: "技术创新对经济发展举足轻重。", en: "Technological innovation plays a pivotal role in economic development." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        compound1: { zh: "复合词重音", en: "Stress in Compounds" },
        compound2: { zh: "复合词重音", en: "Stress in Compounds" },
        chunk1: { zh: "断句", en: "Chunking" },
        chunk2: { zh: "断句", en: "Chunking" }
      },
      items: [
        { id: "cp1_1", category: "compound1", translations: { zh: "日新月异", en: "changing with each passing day (idiom)" } },
        { id: "cp1_2", category: "compound1", translations: { zh: "息息相关", en: "closely related (idiom)" } },
        { id: "cp1_3", category: "compound1", translations: { zh: "层出不穷", en: "emerging one after another endlessly (idiom)" } },
        { id: "cp1_4", category: "compound1", translations: { zh: "与时俱进", en: "keeping pace with the times (idiom)" } },
        { id: "cp2_1", category: "compound2", translations: { zh: "不可或缺", en: "indispensable (idiom)" } },
        { id: "cp2_2", category: "compound2", translations: { zh: "举足轻重", en: "pivotal, decisive (idiom)" } },
        { id: "cp2_3", category: "compound2", translations: { zh: "突飞猛进", en: "advancing by leaps and bounds (idiom)" } },
        { id: "cp2_4", category: "compound2", translations: { zh: "与日俱增", en: "increasing day by day (idiom)" } },
        { id: "ck1_1", category: "chunk1", translations: { zh: "人工智能 / 技术。", en: "Artificial intelligence — [pause] — technology." } },
        { id: "ck1_2", category: "chunk1", translations: { zh: "大数据 / 分析。", en: "Big data — [pause] — analysis." } },
        { id: "ck1_3", category: "chunk1", translations: { zh: "云计算 / 平台。", en: "Cloud computing — [pause] — platform." } },
        { id: "ck1_4", category: "chunk1", translations: { zh: "深度学习 / 模型。", en: "Deep learning — [pause] — model." } },
        { id: "ck2_1", category: "chunk2", translations: { zh: "数据隐私 / 保护问题。", en: "Data privacy — [pause] — protection issue." } },
        { id: "ck2_2", category: "chunk2", translations: { zh: "网络安全 / 防护体系。", en: "Cybersecurity — [pause] — defense system." } },
        { id: "ck2_3", category: "chunk2", translations: { zh: "智能设备 / 使用规范。", en: "Smart devices — [pause] — usage guidelines." } },
        { id: "ck2_4", category: "chunk2", translations: { zh: "数字化转型 / 战略规划。", en: "Digital transformation — [pause] — strategic planning." } }
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
          compound1: { zh: "复合词重音", en: "Stress in Compounds" },
          compound2: { zh: "复合词重音", en: "Stress in Compounds" },
          chunk1: { zh: "断句", en: "Chunking" },
          chunk2: { zh: "断句", en: "Chunking" }
        },
        items: [
          { id: "cp1_5", category: "compound1", translations: { zh: "日积月累", en: "accumulating over time (idiom)" } },
          { id: "cp1_6", category: "compound1", translations: { zh: "精益求精", en: "striving for perfection (idiom)" } },
          { id: "cp1_7", category: "compound1", translations: { zh: "推陈出新", en: "bringing forth the new (idiom)" } },
          { id: "cp1_8", category: "compound1", translations: { zh: "与众不同", en: "unlike the rest, distinctive (idiom)" } },
          { id: "cp1_9", category: "compound1", translations: { zh: "独树一帜", en: "standing out uniquely (idiom)" } },
          { id: "cp1_10", category: "compound1", translations: { zh: "脱颖而出", en: "rising to prominence (idiom)" } },
          { id: "cp1_11", category: "compound1", translations: { zh: "齐头并进", en: "advancing side by side (idiom)" } },
          { id: "cp1_12", category: "compound1", translations: { zh: "顺理成章", en: "following naturally, logical (idiom)" } },
          { id: "cp1_13", category: "compound1", translations: { zh: "事半功倍", en: "getting twice the result with half the effort (idiom)" } },
          { id: "cp1_14", category: "compound1", translations: { zh: "一日千里", en: "advancing swiftly (idiom)" } },
          { id: "cp1_15", category: "compound1", translations: { zh: "蒸蒸日上", en: "thriving, flourishing (idiom)" } },
          { id: "cp1_16", category: "compound1", translations: { zh: "不遗余力", en: "sparing no effort (idiom)" } },
          { id: "cp1_17", category: "compound1", translations: { zh: "举一反三", en: "drawing inferences from one instance (idiom)" } },
          { id: "cp1_18", category: "compound1", translations: { zh: "融会贯通", en: "achieving thorough mastery (idiom)" } },

          { id: "cp2_5", category: "compound2", translations: { zh: "相辅相成", en: "complementing each other (idiom)" } },
          { id: "cp2_6", category: "compound2", translations: { zh: "与生俱来", en: "innate, inborn (idiom)" } },
          { id: "cp2_7", category: "compound2", translations: { zh: "顺其自然", en: "letting things take their course (idiom)" } },
          { id: "cp2_8", category: "compound2", translations: { zh: "一目了然", en: "clear at a glance (idiom)" } },
          { id: "cp2_9", category: "compound2", translations: { zh: "有条不紊", en: "in an orderly manner (idiom)" } },
          { id: "cp2_10", category: "compound2", translations: { zh: "有备无患", en: "being prepared avoids trouble (idiom)" } },
          { id: "cp2_11", category: "compound2", translations: { zh: "未雨绸缪", en: "preparing ahead of time (idiom)" } },
          { id: "cp2_12", category: "compound2", translations: { zh: "力争上游", en: "striving to excel (idiom)" } },
          { id: "cp2_13", category: "compound2", translations: { zh: "精打细算", en: "careful budgeting (idiom)" } },
          { id: "cp2_14", category: "compound2", translations: { zh: "脚踏实地", en: "being down to earth (idiom)" } },
          { id: "cp2_15", category: "compound2", translations: { zh: "集思广益", en: "pooling wisdom (idiom)" } },
          { id: "cp2_16", category: "compound2", translations: { zh: "一如既往", en: "as always, consistently (idiom)" } },
          { id: "cp2_17", category: "compound2", translations: { zh: "日臻完善", en: "becoming increasingly perfected (idiom)" } },
          { id: "cp2_18", category: "compound2", translations: { zh: "革故鼎新", en: "discarding the old, establishing the new (idiom)" } },

          { id: "ck1_5", category: "chunk1", translations: { zh: "机器学习 / 算法。", en: "Machine learning — [pause] — algorithm." } },
          { id: "ck1_6", category: "chunk1", translations: { zh: "自动化 / 生产线。", en: "Automation — [pause] — production line." } },
          { id: "ck1_7", category: "chunk1", translations: { zh: "数字鸿沟 / 现象。", en: "Digital divide — [pause] — phenomenon." } },
          { id: "ck1_8", category: "chunk1", translations: { zh: "技术革新 / 趋势。", en: "Technological innovation — [pause] — trend." } },
          { id: "ck1_9", category: "chunk1", translations: { zh: "智能系统 / 优化。", en: "Intelligent system — [pause] — optimization." } },
          { id: "ck1_10", category: "chunk1", translations: { zh: "前沿科技 / 领域。", en: "Cutting-edge technology — [pause] — field." } },
          { id: "ck1_11", category: "chunk1", translations: { zh: "算法模型 / 训练。", en: "Algorithm model — [pause] — training." } },
          { id: "ck1_12", category: "chunk1", translations: { zh: "应用程序 / 开发。", en: "Application — [pause] — development." } },
          { id: "ck1_13", category: "chunk1", translations: { zh: "数据分析 / 工具。", en: "Data analysis — [pause] — tool." } },
          { id: "ck1_14", category: "chunk1", translations: { zh: "云端服务 / 架构。", en: "Cloud service — [pause] — architecture." } },
          { id: "ck1_15", category: "chunk1", translations: { zh: "网络平台 / 建设。", en: "Online platform — [pause] — construction." } },
          { id: "ck1_16", category: "chunk1", translations: { zh: "数字经济 / 发展。", en: "Digital economy — [pause] — development." } },
          { id: "ck1_17", category: "chunk1", translations: { zh: "信息技术 / 应用。", en: "Information technology — [pause] — application." } },
          { id: "ck1_18", category: "chunk1", translations: { zh: "智能终端 / 普及。", en: "Smart terminal — [pause] — popularization." } },

          { id: "ck2_5", category: "chunk2", translations: { zh: "人工智能 / 伦理规范。", en: "Artificial intelligence — [pause] — ethical guidelines." } },
          { id: "ck2_6", category: "chunk2", translations: { zh: "大数据 / 隐私保护。", en: "Big data — [pause] — privacy protection." } },
          { id: "ck2_7", category: "chunk2", translations: { zh: "云计算 / 安全体系。", en: "Cloud computing — [pause] — security system." } },
          { id: "ck2_8", category: "chunk2", translations: { zh: "深度学习 / 训练模型。", en: "Deep learning — [pause] — training model." } },
          { id: "ck2_9", category: "chunk2", translations: { zh: "机器学习 / 算法优化。", en: "Machine learning — [pause] — algorithm optimization." } },
          { id: "ck2_10", category: "chunk2", translations: { zh: "自动化 / 生产流程。", en: "Automation — [pause] — production process." } },
          { id: "ck2_11", category: "chunk2", translations: { zh: "网络安全 / 防御机制。", en: "Cybersecurity — [pause] — defense mechanism." } },
          { id: "ck2_12", category: "chunk2", translations: { zh: "数字化 / 管理系统。", en: "Digitalization — [pause] — management system." } },
          { id: "ck2_13", category: "chunk2", translations: { zh: "智能设备 / 使用标准。", en: "Smart devices — [pause] — usage standard." } },
          { id: "ck2_14", category: "chunk2", translations: { zh: "技术创新 / 驱动力。", en: "Technological innovation — [pause] — driving force." } },
          { id: "ck2_15", category: "chunk2", translations: { zh: "数据治理 / 框架体系。", en: "Data governance — [pause] — framework system." } },
          { id: "ck2_16", category: "chunk2", translations: { zh: "信息安全 / 保障措施。", en: "Information security — [pause] — safeguard measures." } },
          { id: "ck2_17", category: "chunk2", translations: { zh: "数字基础设施 / 建设。", en: "Digital infrastructure — [pause] — construction." } },
          { id: "ck2_18", category: "chunk2", translations: { zh: "人机协作 / 新模式。", en: "Human-machine collaboration — [pause] — new model." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-sizige-1",
        title: { zh: "练习：四字格（一）", en: "Practice: Si Zi Ge (1)" },
        spokenIntro: {
          zh: "接下来，让我们练习使用四字格的例句。",
          en: "Next, let's practice example sentences using four-character set phrases."
        },
        lines: [
          { id: "sz1", translations: { zh: "人工智能技术日新月异，令人应接不暇。", en: "AI technology is advancing rapidly day by day, almost too fast to keep up with." } },
          { id: "sz2", translations: { zh: "数据安全问题与每个人息息相关。", en: "Data security issues are closely related to everyone." } },
          { id: "sz3", translations: { zh: "这项技术的应用可谓层出不穷。", en: "Applications of this technology keep emerging one after another." } },
          { id: "sz4", translations: { zh: "企业必须与时俱进，才能保持竞争力。", en: "Companies must keep pace with the times to stay competitive." } },
          { id: "sz5", translations: { zh: "人工智能在现代生活中已经变得不可或缺。", en: "AI has already become indispensable in modern life." } },
          { id: "sz6", translations: { zh: "技术创新对经济发展举足轻重。", en: "Technological innovation plays a pivotal role in economic development." } },
          { id: "sz7", translations: { zh: "近年来，云计算技术突飞猛进。", en: "In recent years, cloud-computing technology has advanced by leaps and bounds." } },
          { id: "sz8", translations: { zh: "智能设备的普及率与日俱增。", en: "The adoption rate of smart devices is increasing day by day." } },
          { id: "sz9", translations: { zh: "这个团队的技术积累是日积月累的结果。", en: "This team's technical accumulation is the result of steady buildup over time." } },
          { id: "sz10", translations: { zh: "我们在算法优化上精益求精。", en: "We strive for perfection in algorithm optimization." } }
        ]
      },
      {
        id: "grammar-drill-sizige-2",
        title: { zh: "练习：四字格（二）", en: "Practice: Si Zi Ge (2)" },
        spokenIntro: {
          zh: "接下来，让我们继续练习使用四字格的例句。",
          en: "Next, let's continue practicing example sentences using four-character set phrases."
        },
        lines: [
          { id: "sz11", translations: { zh: "这项发明可谓推陈出新，令业界耳目一新。", en: "This invention truly brings forth the new, giving the industry a fresh perspective." } },
          { id: "sz12", translations: { zh: "这家公司的产品设计与众不同。", en: "This company's product design is distinctive, unlike the rest." } },
          { id: "sz13", translations: { zh: "凭借创新能力，这家初创企业脱颖而出。", en: "Relying on its innovative ability, this startup has risen to prominence." } },
          { id: "sz14", translations: { zh: "各部门齐头并进，共同推进项目。", en: "All departments are advancing side by side, jointly pushing the project forward." } },
          { id: "sz15", translations: { zh: "这个结果顺理成章，并不意外。", en: "This result follows naturally and isn't surprising." } },
          { id: "sz16", translations: { zh: "采用新算法后，效率事半功倍。", en: "After adopting the new algorithm, efficiency doubled with half the effort." } },
          { id: "sz17", translations: { zh: "科技发展一日千里，令人惊叹。", en: "Technological development is advancing swiftly, which is astonishing." } },
          { id: "sz18", translations: { zh: "这家企业近年来发展蒸蒸日上。", en: "This company has been thriving in recent years." } },
          { id: "sz19", translations: { zh: "团队为了这次突破不遗余力。", en: "The team spared no effort for this breakthrough." } },
          { id: "sz20", translations: { zh: "学生要学会举一反三，融会贯通。", en: "Students need to learn to draw inferences from one instance and achieve thorough mastery." } }
        ]
      }
    ]
  }
};
