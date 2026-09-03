import type { TopicLesson } from "../topicTypes";

// C1 — row 1 of docs/c1-master-lesson-table-v01.md. Grammar function:
// "Explain complex relationships and qualifications" via 由于／随着／
// 并非；至于……，……
//
// First C1 topic built, and the first to use the new `article`/
// `questions` fields (see topicTypes.ts / types/index.ts) — exercising
// that infrastructure end-to-end for the first time.
//
// Scope note: only `zh` (target) and `en` (source) are translated here.
// `ja`/`de` are left unauthored for this lesson — adding them later is
// pure translation work, not a structural change, but doing all four
// languages for a lesson this size (30 vocab + 28 dialogue lines + a
// 10-sentence article + 5 four-option questions) was more than fit in
// one pass alongside actually building/testing the new article and
// questions block types for the first time.
//
// Pronunciation note: the table assigns "Information focus" and
// "Phrase boundaries" — both are sentence-level prosody concepts
// (where stress falls, where natural pauses fall), not simple
// word-pair phonetic contrasts like the A1/A2 lessons use. So instead
// of single words, every pronunciation item here is a short marked
// phrase demonstrating the concept — still fits the same 4-category
// VocabDrillContent shape, just with phrases instead of words.

export const topicEducation: TopicLesson = {
  id: "topic-c1-01-education",
  lessonNumber: 42,
  level: "C1",
  topicName: {
    zh: "教育",
    en: "Education"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { zh: "教育政策", en: "education policy" } },
    { id: "v02", category: "noun", translations: { zh: "高等教育", en: "higher education" } },
    { id: "v03", category: "noun", translations: { zh: "入学", en: "admission, enrollment" } },
    { id: "v04", category: "verb", translations: { zh: "录取", en: "to admit (a student)" } },
    { id: "v05", category: "noun", translations: { zh: "名额", en: "quota, number of places" } },
    { id: "v06", category: "noun", translations: { zh: "改革", en: "reform" } },
    { id: "v07", category: "noun", translations: { zh: "素质教育", en: "holistic/quality-oriented education" } },
    { id: "v08", category: "noun", translations: { zh: "应试教育", en: "exam-oriented education" } },
    { id: "v09", category: "noun", translations: { zh: "公平", en: "fairness" } },
    { id: "v10", category: "noun", translations: { zh: "资源分配", en: "resource allocation" } },
    { id: "v11", category: "noun", translations: { zh: "学费", en: "tuition fee" } },
    { id: "v12", category: "noun", translations: { zh: "奖学金", en: "scholarship" } },
    { id: "v13", category: "noun", translations: { zh: "竞争", en: "competition" } },
    { id: "v14", category: "noun", translations: { zh: "门槛", en: "threshold, entry requirement" } },
    { id: "v15", category: "verb", translations: { zh: "选拔", en: "to select" } },
    { id: "v16", category: "noun", translations: { zh: "综合评价", en: "comprehensive evaluation" } },
    { id: "v17", category: "noun", translations: { zh: "标准化考试", en: "standardized test" } },
    { id: "v18", category: "noun", translations: { zh: "弱势群体", en: "disadvantaged group" } },
    { id: "v19", category: "noun", translations: { zh: "城乡差距", en: "urban-rural gap" } },
    { id: "v20", category: "noun", translations: { zh: "政策制定者", en: "policymaker" } },
    { id: "v21", category: "verb", translations: { zh: "落实", en: "to implement" } },
    { id: "v22", category: "noun", translations: { zh: "争议", en: "controversy, dispute" } },
    { id: "v23", category: "verb", translations: { zh: "权衡", en: "to weigh (pros and cons)" } },
    { id: "v24", category: "adjective", translations: { zh: "可持续", en: "sustainable" } },
    { id: "v25", category: "verb", translations: { zh: "优化", en: "to optimize" } },
    { id: "v26", category: "verb", translations: { zh: "保障", en: "to guarantee, ensure" } },
    { id: "v27", category: "noun", translations: { zh: "公立", en: "public (school)" } },
    { id: "v28", category: "noun", translations: { zh: "私立", en: "private (school)" } },
    { id: "v29", category: "noun", translations: { zh: "生源", en: "student pool, applicant source" } },
    { id: "v30", category: "noun", translations: { zh: "因材施教", en: "teaching according to aptitude (idiom)" } }
  ],
  dialogueA: {
    title: { zh: "教育政策", en: "Education Policy" },
    lines: [
      { id: "d1", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "请问，这次教育改革的主要目标是什么？", en: "May I ask, what's the main goal of this education reform?" } },
      { id: "d2", speaker: { zh: "官员", en: "Official" }, translations: { zh: "由于城乡教育资源分配不均，我们希望通过这次改革缩小差距。", en: "Because educational resources are unevenly distributed between urban and rural areas, we hope this reform will narrow the gap." } },
      { id: "d3", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "具体来说，会有哪些措施？", en: "Specifically, what measures will there be?" } },
      { id: "d4", speaker: { zh: "官员", en: "Official" }, translations: { zh: "随着政策的推进，我们将逐步增加农村学校的资金投入。", en: "As the policy moves forward, we'll gradually increase funding for rural schools." } },
      { id: "d5", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "有人认为这项改革并非真正解决了公平问题，您怎么看？", en: "Some believe this reform hasn't truly solved the fairness issue. What's your view?" } },
      { id: "d6", speaker: { zh: "官员", en: "Official" }, translations: { zh: "这种说法并非完全没有道理，但改革是一个持续的过程。", en: "That view isn't entirely without merit, but reform is an ongoing process." } },
      { id: "d7", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "至于学费和奖学金政策，是否也会调整？", en: "As for tuition and scholarship policy, will those also be adjusted?" } },
      { id: "d8", speaker: { zh: "官员", en: "Official" }, translations: { zh: "至于这一点，我们会在下个月公布详细方案。", en: "As for that, we'll announce the detailed plan next month." } },
      { id: "d9", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "私立学校会受到什么影响？", en: "How will private schools be affected?" } },
      { id: "d10", speaker: { zh: "官员", en: "Official" }, translations: { zh: "私立学校的招生标准也需要符合新的公平原则。", en: "Private schools' admission standards will also need to align with the new fairness principles." } },
      { id: "d11", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "家长们最关心的应该是入学名额的问题吧？", en: "Parents are probably most concerned about admission quotas, right?" } },
      { id: "d12", speaker: { zh: "官员", en: "Official" }, translations: { zh: "没错，由于名额有限，竞争依然会很激烈。", en: "That's right. Since places are limited, competition will remain fierce." } },
      { id: "d13", speaker: { zh: "记者", en: "Journalist" }, translations: { zh: "感谢您接受采访。", en: "Thank you for the interview." } },
      { id: "d14", speaker: { zh: "官员", en: "Official" }, translations: { zh: "不客气，希望这次改革能让更多学生受益。", en: "You're welcome. I hope this reform benefits more students." } }
    ]
  },
  dialogueB: {
    title: { zh: "大学录取", en: "University Admissions" },
    lines: [
      { id: "e1", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "你觉得综合评价录取真的比标准化考试更公平吗？", en: "Do you think comprehensive-evaluation admission is really fairer than standardized testing?" } },
      { id: "e2", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "随着社会的发展，单一的考试标准已经无法全面评价学生。", en: "As society has developed, a single exam standard can no longer evaluate students comprehensively." } },
      { id: "e3", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "但综合评价会不会给弱势群体带来新的门槛？", en: "But might comprehensive evaluation create new barriers for disadvantaged groups?" } },
      { id: "e4", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "这确实是一个争议，因为综合评价需要更多的资源和信息。", en: "That's indeed a point of controversy, because comprehensive evaluation requires more resources and information." } },
      { id: "e5", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "至于选拔的具体标准，学校是如何权衡的？", en: "As for the specific selection criteria, how do schools weigh them?" } },
      { id: "e6", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "至于这个问题，我们通常会综合成绩、面试和课外活动。", en: "As for that, we usually combine grades, interviews, and extracurricular activities." } },
      { id: "e7", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "由于生源质量参差不齐，学校压力也不小。", en: "Since the quality of applicants varies widely, schools are under considerable pressure too." } },
      { id: "e8", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "没错，由于竞争激烈，学校必须不断优化选拔机制。", en: "Right, since competition is fierce, schools must continually optimize their selection mechanisms." } },
      { id: "e9", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "你认为因材施教在大学录取中真的可行吗？", en: "Do you think teaching-according-to-aptitude is really feasible in university admissions?" } },
      { id: "e10", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "并非完全可行，但至少是一个值得尝试的方向。", en: "Not entirely feasible, but at least it's a direction worth trying." } },
      { id: "e11", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "那弱势群体的保障措施呢？", en: "What about safeguard measures for disadvantaged groups?" } },
      { id: "e12", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "学校会设立专门的名额，保障弱势群体的入学机会。", en: "Schools set aside dedicated quotas to guarantee admission opportunities for disadvantaged groups." } },
      { id: "e13", speaker: { zh: "教授甲", en: "Professor A" }, translations: { zh: "希望这个制度能持续优化下去。", en: "I hope this system keeps being optimized going forward." } },
      { id: "e14", speaker: { zh: "教授乙", en: "Professor B" }, translations: { zh: "我也这么认为，教育公平是一个需要长期努力的目标。", en: "I think so too — educational fairness is a goal that requires long-term effort." } }
    ]
  },
  article: {
    zh: {
      title: { zh: "教育改革", en: "Education Reform" },
      lines: [
        { id: "p1", translations: { zh: "近年来，随着社会经济的快速发展，教育公平问题日益受到关注。", en: "In recent years, as the economy has developed rapidly, the issue of educational fairness has drawn increasing attention." } },
        { id: "p2", translations: { zh: "由于城乡之间教育资源分配不均，许多农村学生在升学过程中面临更大的困难。", en: "Because educational resources are unevenly distributed between urban and rural areas, many rural students face greater difficulties when advancing to higher levels of schooling." } },
        { id: "p3", translations: { zh: "为了解决这一问题，政府近年来推出了一系列教育改革措施。", en: "To address this problem, the government has introduced a series of education reform measures in recent years." } },
        { id: "p4", translations: { zh: "首先，教育部逐步增加了对农村学校的资金投入，改善了基础设施和师资力量。", en: "First, the Ministry of Education has gradually increased funding for rural schools, improving infrastructure and teaching staff." } },
        { id: "p5", translations: { zh: "其次，在大学录取方面，越来越多的高校开始采用综合评价的方式，而不再仅仅依赖标准化考试的成绩。", en: "Second, in university admissions, more and more institutions have begun adopting comprehensive evaluation instead of relying solely on standardized test scores." } },
        { id: "p6", translations: { zh: "这种做法的初衷是希望更全面地评价学生的能力，而非单纯依靠分数进行选拔。", en: "The intent behind this approach is to evaluate students' abilities more holistically, rather than selecting purely by score." } },
        { id: "p7", translations: { zh: "然而，这项改革并非没有争议。", en: "However, this reform is not without controversy." } },
        { id: "p8", translations: { zh: "一些人担心，综合评价可能会给缺乏资源的家庭带来新的门槛，因为面试和课外活动往往需要额外的经济投入。", en: "Some worry that comprehensive evaluation may create new barriers for families lacking resources, since interviews and extracurricular activities often require extra financial investment." } },
        { id: "p9", translations: { zh: "至于这一问题，教育专家们仍在讨论如何在保证公平的同时提升评价体系的科学性。", en: "As for this issue, education experts are still discussing how to improve the rigor of the evaluation system while ensuring fairness." } },
        { id: "p10", translations: { zh: "总的来说，教育改革是一个复杂而持续的过程，需要政策制定者在效率与公平之间不断权衡，才能实现真正可持续的教育发展。", en: "Overall, education reform is a complex and ongoing process — policymakers must continually weigh efficiency against fairness to achieve truly sustainable educational development." } }
      ]
    }
  },
  questions: {
    zh: {
      title: { zh: "理解确认", en: "Comprehension Questions" },
      questions: [
        {
          id: "q1",
          question: { zh: "根据文章，教育公平问题受到关注的原因是什么？", en: "According to the article, why has the issue of educational fairness drawn attention?" },
          options: [
            { zh: "城乡教育资源分配不均", en: "Uneven distribution of educational resources between urban and rural areas" },
            { zh: "大学学费上涨", en: "Rising university tuition fees" },
            { zh: "教师数量减少", en: "A decrease in the number of teachers" },
            { zh: "学生人数增加", en: "An increase in the number of students" }
          ],
          correctIndex: 0
        },
        {
          id: "q2",
          question: { zh: "文章提到，大学录取方式发生了什么变化？", en: "What change does the article mention in university admissions?" },
          options: [
            { zh: "完全取消考试", en: "Exams were abolished entirely" },
            { zh: "越来越多采用综合评价", en: "More institutions are adopting comprehensive evaluation" },
            { zh: "只看课外活动", en: "Only extracurricular activities are considered" },
            { zh: "提高学费", en: "Tuition fees were raised" }
          ],
          correctIndex: 1
        },
        {
          id: "q3",
          question: { zh: "为什么有人担心综合评价制度？", en: "Why are some people worried about the comprehensive evaluation system?" },
          options: [
            { zh: "它太简单", en: "It's too simple" },
            { zh: "它可能给缺乏资源的家庭带来新门槛", en: "It may create new barriers for families lacking resources" },
            { zh: "它成本太低", en: "It costs too little" },
            { zh: "它不需要面试", en: "It doesn't require an interview" }
          ],
          correctIndex: 1
        },
        {
          id: "q4",
          question: { zh: "政府采取的改革措施之一是什么？", en: "What is one of the reform measures the government took?" },
          options: [
            { zh: "减少农村学校资金", en: "Reducing funding for rural schools" },
            { zh: "增加对农村学校的资金投入", en: "Increasing funding for rural schools" },
            { zh: "关闭农村学校", en: "Closing rural schools" },
            { zh: "取消师资培训", en: "Canceling teacher training" }
          ],
          correctIndex: 1
        },
        {
          id: "q5",
          question: { zh: "文章认为教育改革本质上是什么样的过程？", en: "What kind of process does the article say education reform fundamentally is?" },
          options: [
            { zh: "简单快速的", en: "Simple and fast" },
            { zh: "复杂而持续的", en: "Complex and ongoing" },
            { zh: "已经完成的", en: "Already complete" },
            { zh: "与公平无关的", en: "Unrelated to fairness" }
          ],
          correctIndex: 1
        }
      ]
    }
  },
  grammar: {
    zh: {
      title: { zh: "由于／随着／并非；至于……，……：解释复杂的关系和限定条件", en: "You Yu / Sui Zhe / Bing Fei; Zhi Yu...: Explaining Complex Relationships and Qualifications" },
      explanation: {
        zh: "这四个正式连接词常见于学术和政策类书面语（C1 水平）。「由于」引出一个正式的原因（比「因为」更书面）。「随着」引出一个伴随发生的趋势或过程（“随着 A 的变化，B 也随之发生”）。「并非」是「不是」的正式、更有力的说法，常用于纠正误解。「至于……，……」用于转换话题（“说到 A，……”）。",
        en: "These four formal connectives are common in academic and policy-style written Chinese (C1 level). 由于 introduces a formal cause (more written than 因为). 随着 introduces a co-occurring trend or process (\"as A changes, B follows\"). 并非 is a more formal, more emphatic way of saying \"is not,\" often used to correct a misconception. 至于……，…… is used to shift topic (\"as for A, ...\")."
      },
      chunks: [
        { id: "g1", translations: { zh: "由于教育资源分配不均，城乡差距依然存在。", en: "Due to the uneven distribution of educational resources, the urban-rural gap still exists." } },
        { id: "g2", translations: { zh: "随着社会的发展，人们对教育公平的要求越来越高。", en: "As society develops, people's demands for educational fairness are increasingly high." } },
        { id: "g3", translations: { zh: "这项政策并非完美，但确实解决了部分问题。", en: "This policy is not perfect, but it has indeed solved some problems." } },
        { id: "g4", translations: { zh: "至于奖学金的分配标准，教育部将另行公布。", en: "As for the criteria for scholarship distribution, the Ministry of Education will announce it separately." } },
        { id: "g5", translations: { zh: "由于竞争激烈，许多学生选择参加课外辅导。", en: "Due to fierce competition, many students choose to attend extracurricular tutoring." } },
        { id: "g6", translations: { zh: "随着改革的推进，标准化考试的比重逐渐降低。", en: "As the reform progresses, the weight of standardized tests is gradually decreasing." } }
      ]
    }
  },
  pronunciation: {
    zh: {
      title: { zh: "语音练习", en: "Pronunciation Practice" },
      groupLabels: {
        focus1: { zh: "信息焦点", en: "Information Focus" },
        focus2: { zh: "信息焦点", en: "Information Focus" },
        bound1: { zh: "语调组块", en: "Phrase Boundaries" },
        bound2: { zh: "语调组块", en: "Phrase Boundaries" }
      },
      items: [
        { id: "f1_1", category: "focus1", translations: { zh: "我们需要改革。", en: "We need reform. (stress on the new information, 改革)" } },
        { id: "f1_2", category: "focus1", translations: { zh: "这是一个问题。", en: "This is a problem. (stress on 问题)" } },
        { id: "f1_3", category: "focus1", translations: { zh: "政策已经改变。", en: "The policy has already changed. (stress on 改变)" } },
        { id: "f1_4", category: "focus1", translations: { zh: "学生很关心。", en: "Students care a lot. (stress on 关心)" } },
        { id: "f2_1", category: "focus2", translations: { zh: "是政策的问题，不是学生的问题。", en: "It's a problem with the POLICY, not with the students. (contrastive stress shifted earlier)" } },
        { id: "f2_2", category: "focus2", translations: { zh: "我说的是教育，不是经济。", en: "What I'm talking about is EDUCATION, not the economy." } },
        { id: "f2_3", category: "focus2", translations: { zh: "需要改的是标准，不是学生。", en: "What needs to change is the STANDARD, not the students." } },
        { id: "f2_4", category: "focus2", translations: { zh: "关键在于资源，不在于人数。", en: "The key lies in RESOURCES, not in the number of people." } },
        { id: "b1_1", category: "bound1", translations: { zh: "教育资源，分配不均。", en: "Educational resources — [pause] — unevenly distributed." } },
        { id: "b1_2", category: "bound1", translations: { zh: "大学录取，标准不同。", en: "University admissions — [pause] — different standards." } },
        { id: "b1_3", category: "bound1", translations: { zh: "农村学校，资金不足。", en: "Rural schools — [pause] — insufficient funding." } },
        { id: "b1_4", category: "bound1", translations: { zh: "弱势群体，需要保障。", en: "Disadvantaged groups — [pause] — need safeguards." } },
        { id: "b2_1", category: "bound2", translations: { zh: "至于奖学金，将另行公布。", en: "As for scholarships — [pause] — it will be announced separately." } },
        { id: "b2_2", category: "bound2", translations: { zh: "由于竞争激烈，压力很大。", en: "Due to fierce competition — [pause] — the pressure is great." } },
        { id: "b2_3", category: "bound2", translations: { zh: "随着社会发展，需求增加。", en: "As society develops — [pause] — demand increases." } },
        { id: "b2_4", category: "bound2", translations: { zh: "虽然改革复杂，但很必要。", en: "Although reform is complex — [pause] — it is necessary." } }
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
          focus1: { zh: "信息焦点", en: "Information Focus" },
          focus2: { zh: "信息焦点", en: "Information Focus" },
          bound1: { zh: "语调组块", en: "Phrase Boundaries" },
          bound2: { zh: "语调组块", en: "Phrase Boundaries" }
        },
        items: [
          { id: "f1_5", category: "focus1", translations: { zh: "政府发布了新政策。", en: "The government issued a new policy." } },
          { id: "f1_6", category: "focus1", translations: { zh: "学校提高了门槛。", en: "The school raised the threshold." } },
          { id: "f1_7", category: "focus1", translations: { zh: "学生参加了考试。", en: "The students took the exam." } },
          { id: "f1_8", category: "focus1", translations: { zh: "专家提出了建议。", en: "The expert offered a suggestion." } },
          { id: "f1_9", category: "focus1", translations: { zh: "改革解决了争议。", en: "The reform resolved the dispute." } },
          { id: "f1_10", category: "focus1", translations: { zh: "教育部增加了投入。", en: "The Ministry of Education increased investment." } },
          { id: "f1_11", category: "focus1", translations: { zh: "高校采用了新标准。", en: "The university adopted a new standard." } },
          { id: "f1_12", category: "focus1", translations: { zh: "家长表达了担忧。", en: "Parents expressed concern." } },
          { id: "f1_13", category: "focus1", translations: { zh: "社会需要更多公平。", en: "Society needs more fairness." } },
          { id: "f1_14", category: "focus1", translations: { zh: "政策带来了变化。", en: "The policy brought about change." } },
          { id: "f1_15", category: "focus1", translations: { zh: "学校设立了名额。", en: "The school set up quotas." } },
          { id: "f1_16", category: "focus1", translations: { zh: "老师给予了指导。", en: "The teacher gave guidance." } },
          { id: "f1_17", category: "focus1", translations: { zh: "制度需要不断优化。", en: "The system needs continuous optimization." } },
          { id: "f1_18", category: "focus1", translations: { zh: "目标是实现可持续发展。", en: "The goal is to achieve sustainable development." } },

          { id: "f2_5", category: "focus2", translations: { zh: "是资源的问题，不是能力的问题。", en: "It's a problem of RESOURCES, not of ability." } },
          { id: "f2_6", category: "focus2", translations: { zh: "我们要的是公平，不是效率。", en: "What we want is FAIRNESS, not efficiency." } },
          { id: "f2_7", category: "focus2", translations: { zh: "改变的是方式，不是目标。", en: "What's changing is the METHOD, not the goal." } },
          { id: "f2_8", category: "focus2", translations: { zh: "重要的是过程，不是结果。", en: "What matters is the PROCESS, not the result." } },
          { id: "f2_9", category: "focus2", translations: { zh: "需要的是耐心，不是速度。", en: "What's needed is PATIENCE, not speed." } },
          { id: "f2_10", category: "focus2", translations: { zh: "关注的是弱势群体，不是精英。", en: "The focus is on DISADVANTAGED groups, not the elite." } },
          { id: "f2_11", category: "focus2", translations: { zh: "讨论的是政策，不是个人。", en: "What's under discussion is POLICY, not individuals." } },
          { id: "f2_12", category: "focus2", translations: { zh: "影响的是未来，不是现在。", en: "What's affected is the FUTURE, not the present." } },
          { id: "f2_13", category: "focus2", translations: { zh: "强调的是质量，不是数量。", en: "The emphasis is on QUALITY, not quantity." } },
          { id: "f2_14", category: "focus2", translations: { zh: "追求的是平衡，不是极端。", en: "What's pursued is BALANCE, not extremes." } },
          { id: "f2_15", category: "focus2", translations: { zh: "解决的是根本问题，不是表面现象。", en: "What's being solved is the ROOT problem, not surface symptoms." } },
          { id: "f2_16", category: "focus2", translations: { zh: "考虑的是长远利益，不是短期效果。", en: "What's considered is LONG-TERM benefit, not short-term effect." } },
          { id: "f2_17", category: "focus2", translations: { zh: "依据的是事实，不是猜测。", en: "What it's based on is FACT, not speculation." } },
          { id: "f2_18", category: "focus2", translations: { zh: "体现的是原则，不是妥协。", en: "What it reflects is PRINCIPLE, not compromise." } },

          { id: "b1_5", category: "bound1", translations: { zh: "教育改革，涉及方方面面。", en: "Education reform — [pause] — touches every aspect." } },
          { id: "b1_6", category: "bound1", translations: { zh: "城乡差距，依然明显。", en: "The urban-rural gap — [pause] — remains obvious." } },
          { id: "b1_7", category: "bound1", translations: { zh: "入学名额，十分有限。", en: "Admission quotas — [pause] — are very limited." } },
          { id: "b1_8", category: "bound1", translations: { zh: "竞争压力，逐年增加。", en: "Competitive pressure — [pause] — increases yearly." } },
          { id: "b1_9", category: "bound1", translations: { zh: "政策制定者，责任重大。", en: "Policymakers — [pause] — bear great responsibility." } },
          { id: "b1_10", category: "bound1", translations: { zh: "综合评价，标准复杂。", en: "Comprehensive evaluation — [pause] — has complex standards." } },
          { id: "b1_11", category: "bound1", translations: { zh: "弱势群体，需要关注。", en: "Disadvantaged groups — [pause] — need attention." } },
          { id: "b1_12", category: "bound1", translations: { zh: "教育资源，尚待优化。", en: "Educational resources — [pause] — still need optimizing." } },
          { id: "b1_13", category: "bound1", translations: { zh: "学费问题，备受关注。", en: "The tuition issue — [pause] — draws much attention." } },
          { id: "b1_14", category: "bound1", translations: { zh: "奖学金制度，有待完善。", en: "The scholarship system — [pause] — still needs improvement." } },
          { id: "b1_15", category: "bound1", translations: { zh: "私立学校，发展迅速。", en: "Private schools — [pause] — are developing rapidly." } },
          { id: "b1_16", category: "bound1", translations: { zh: "公立教育，基础扎实。", en: "Public education — [pause] — has a solid foundation." } },
          { id: "b1_17", category: "bound1", translations: { zh: "生源质量，参差不齐。", en: "Applicant quality — [pause] — varies widely." } },
          { id: "b1_18", category: "bound1", translations: { zh: "选拔机制，仍需改进。", en: "The selection mechanism — [pause] — still needs improvement." } },

          { id: "b2_5", category: "bound2", translations: { zh: "由于资源有限，学校难以扩招。", en: "Because resources are limited — [pause] — the school can't expand enrollment." } },
          { id: "b2_6", category: "bound2", translations: { zh: "随着改革深入，问题逐渐显现。", en: "As reform deepens — [pause] — problems gradually surface." } },
          { id: "b2_7", category: "bound2", translations: { zh: "虽然目标明确，落实却很困难。", en: "Although the goal is clear — [pause] — implementation is difficult." } },
          { id: "b2_8", category: "bound2", translations: { zh: "尽管争议不断，改革仍在推进。", en: "Despite ongoing controversy — [pause] — reform continues to advance." } },
          { id: "b2_9", category: "bound2", translations: { zh: "因为竞争激烈，学生压力增大。", en: "Because competition is fierce — [pause] — student pressure increases." } },
          { id: "b2_10", category: "bound2", translations: { zh: "既然政策已定，就应尽快落实。", en: "Since the policy is set — [pause] — it should be implemented quickly." } },
          { id: "b2_11", category: "bound2", translations: { zh: "只有持续投入，才能缩小差距。", en: "Only with sustained investment — [pause] — can the gap be narrowed." } },
          { id: "b2_12", category: "bound2", translations: { zh: "即使困难重重，也要坚持改革。", en: "Even with many difficulties — [pause] — reform must continue." } },
          { id: "b2_13", category: "bound2", translations: { zh: "由于标准提高，门槛随之增加。", en: "As standards rise — [pause] — the threshold rises accordingly." } },
          { id: "b2_14", category: "bound2", translations: { zh: "随着需求变化，制度不断调整。", en: "As demand changes — [pause] — the system keeps adjusting." } },
          { id: "b2_15", category: "bound2", translations: { zh: "因为资金不足，项目被迫延后。", en: "Because funding is insufficient — [pause] — the project is delayed." } },
          { id: "b2_16", category: "bound2", translations: { zh: "尽管条件有限，学生依然努力。", en: "Despite limited conditions — [pause] — students still work hard." } },
          { id: "b2_17", category: "bound2", translations: { zh: "只要方法得当，问题就能解决。", en: "As long as the method is right — [pause] — the problem can be solved." } },
          { id: "b2_18", category: "bound2", translations: { zh: "即便进展缓慢，方向依然正确。", en: "Even if progress is slow — [pause] — the direction remains correct." } }
        ]
      }
    ]
  },
  grammarDrills: {
    zh: [
      {
        id: "grammar-drill-youyu-suizhe",
        title: { zh: "练习：由于／随着", en: "Practice: You Yu / Sui Zhe" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「由于」和「随着」的例句。",
          en: "Next, let's practice example sentences using 由于 and 随着."
        },
        lines: [
          { id: "ys1", translations: { zh: "由于教育资源分配不均，城乡差距依然存在。", en: "Due to the uneven distribution of educational resources, the urban-rural gap still exists." } },
          { id: "ys2", translations: { zh: "随着社会的发展，人们对教育公平的要求越来越高。", en: "As society develops, people's demands for educational fairness are increasingly high." } },
          { id: "ys3", translations: { zh: "由于竞争激烈，许多学生选择参加课外辅导。", en: "Due to fierce competition, many students choose to attend extracurricular tutoring." } },
          { id: "ys4", translations: { zh: "随着改革的推进，标准化考试的比重逐渐降低。", en: "As the reform progresses, the weight of standardized tests is gradually decreasing." } },
          { id: "ys5", translations: { zh: "由于资金不足，农村学校的设施相对落后。", en: "Due to insufficient funding, rural school facilities are relatively behind." } },
          { id: "ys6", translations: { zh: "随着政策的实施，入学门槛有所调整。", en: "As the policy is implemented, admission thresholds have been adjusted somewhat." } },
          { id: "ys7", translations: { zh: "由于生源质量参差不齐，学校面临不小压力。", en: "Because applicant quality varies widely, schools face considerable pressure." } },
          { id: "ys8", translations: { zh: "随着社会需求变化，教育制度也在不断调整。", en: "As social needs change, the education system is also constantly adjusting." } },
          { id: "ys9", translations: { zh: "由于城乡资源差异，教育公平问题备受关注。", en: "Due to urban-rural resource disparities, the issue of educational fairness draws much attention." } },
          { id: "ys10", translations: { zh: "随着经济的发展，教育投入逐年增加。", en: "As the economy develops, investment in education increases year by year." } }
        ]
      },
      {
        id: "grammar-drill-bingfei-zhiyu",
        title: { zh: "练习：并非／至于", en: "Practice: Bing Fei / Zhi Yu" },
        spokenIntro: {
          zh: "接下来，让我们练习使用「并非」和「至于」的例句。",
          en: "Next, let's practice example sentences using 并非 and 至于."
        },
        lines: [
          { id: "bz1", translations: { zh: "这项政策并非完美，但确实解决了部分问题。", en: "This policy is not perfect, but it has indeed solved some problems." } },
          { id: "bz2", translations: { zh: "至于奖学金的分配标准，教育部将另行公布。", en: "As for the criteria for scholarship distribution, the Ministry of Education will announce it separately." } },
          { id: "bz3", translations: { zh: "综合评价并非适合所有学生。", en: "Comprehensive evaluation is not suitable for all students." } },
          { id: "bz4", translations: { zh: "至于具体的选拔标准，学校会综合考虑多方面因素。", en: "As for the specific selection criteria, schools consider many factors together." } },
          { id: "bz5", translations: { zh: "这种说法并非完全没有道理。", en: "That view isn't entirely without merit." } },
          { id: "bz6", translations: { zh: "至于弱势群体的保障措施，政府正在研究细则。", en: "As for safeguard measures for disadvantaged groups, the government is working out the details." } },
          { id: "bz7", translations: { zh: "改革的效果并非立竿见影。", en: "The effects of reform are not immediate." } },
          { id: "bz8", translations: { zh: "至于私立学校的招生政策，也需要符合公平原则。", en: "As for private schools' admission policies, they too must align with fairness principles." } },
          { id: "bz9", translations: { zh: "单一的考试标准并非全面评价学生的最好方式。", en: "A single exam standard is not the best way to comprehensively evaluate students." } },
          { id: "bz10", translations: { zh: "至于教育资源的分配，仍需进一步优化。", en: "As for the allocation of educational resources, further optimization is still needed." } }
        ]
      }
    ]
  }
};
