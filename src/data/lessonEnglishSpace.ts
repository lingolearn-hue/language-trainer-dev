import type { LessonPlan, Block } from "../types";

// New original lesson (not sourced from any Deutsch_N.pdf) — English for
// advanced learners (~C1), space-travel theme. Same structure/pacing rules
// as lesson2.ts: title -> agenda -> self-intro -> vocab -> grammar(s) ->
// dialogue -> pronunciation -> song (song always closes the lesson).
// courseId: "english-advanced-c1" — see data/trainers.ts for which
// trainers can teach it (any trainer with target language "en").

export const titleBlock: Block = {
  id: "es-title",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 1,
  title: { en: "Voices from Orbit", de: "Stimmen aus dem Orbit", zh: "轨道上的声音" },
  spokenIntro: {
    en: "Welcome back. Today we head into deep space.",
    de: "Willkommen zurück. Heute geht es hinaus in den Weltraum.",
    zh: "欢迎回来。今天我们将前往浩瀚的太空。",
  },
  content: {
    text: {
      en: "Advanced English through the language of space travel — Course introduction",
      de: "Fortgeschrittenes Englisch anhand der Sprache der Raumfahrt — Kurseinführung",
      zh: "通过太空旅行的语言学习高阶英语——课程介绍",
    },
  },
};

export const agendaBlock: Block = {
  id: "es-agenda",
  type: "agenda",
  displayMode: "content",
  estimatedMinutes: 1,
  title: { en: "Agenda", de: "Ablauf", zh: "介绍" },
  spokenIntro: {
    en: "After a quick warm-up, we'll build up some precise vocabulary for space travel, then dig into three grammar points that'll sharpen your formal register: inversion, cleft sentences, and nominalization. We'll put it all to work in a mission control dialogue, sharpen your stress on technical terms, and close, as always, with a song.",
    de: "Nach einem kurzen Aufwärmen bauen wir präzisen Wortschatz zur Raumfahrt auf und vertiefen dann drei Grammatikpunkte, die deinen formellen Sprachstil schärfen: Inversion, Spaltsätze und Nominalisierung. Das alles wenden wir in einem Dialog mit der Missionskontrolle an, üben die Betonung von Fachbegriffen und schließen, wie immer, mit einem Lied.",
    zh: "简短热身之后，我们会积累一些精确的太空旅行词汇，接着深入学习三个能提升你正式语体的语法点：倒装、分裂句和名词化。我们会在一段与任务控制中心的对话中运用这些内容，练习专业术语的重音，并像往常一样以一首歌结束。",
  },
  content: {
    items: [
      { id: "a1", translations: { en: "Introduction", de: "Einführung", zh: "介绍" } },
      { id: "a2", translations: { en: "Vocabulary", de: "Wortschatz", zh: "词汇" } },
      { id: "a3", translations: { en: "Grammar: Inversion", de: "Grammatik: Inversion", zh: "语法：倒装" } },
      { id: "a4", translations: { en: "Grammar: Cleft Sentences", de: "Grammatik: Spaltsätze", zh: "语法：分裂句" } },
      { id: "a5", translations: { en: "Grammar: Nominalization", de: "Grammatik: Nominalisierung", zh: "语法：名词化" } },
      { id: "a6", translations: { en: "Dialogue: Mission Control", de: "Dialog: Missionskontrolle", zh: "对话：任务控制中心" } },
      { id: "a7", translations: { en: "Pronunciation", de: "Aussprache", zh: "发音" } },
      { id: "a8", translations: { en: "Song", de: "Lied", zh: "歌曲" } },
    ],
  },
};

export const introBlock: Block = {
  id: "es-intro",
  type: "intro",
  displayMode: "face",
  estimatedMinutes: 3,
  title: { en: "Warm-up", de: "Aufwärmen", zh: "热身" },
  spokenIntro: {
    en: "Before we start, tell me briefly about your English learning goals.",
    de: "Bevor wir beginnen, erzähl mir kurz von deinen Zielen beim Englischlernen.",
    zh: "在开始之前，先简单说说你学习英语的目标。",
  },
  content: {
    text: {
      en: "I'm aiming for C1 English because ... And you? Tell me briefly why you're learning English.",
      de: "Ich strebe Englisch auf C1-Niveau an, weil ... Und du? Erzähl mir kurz, warum du Englisch lernst.",
      zh: "我想把英语学到C1水平，因为……你呢？简单说说你为什么学英语。",
    },
  },
};

export const vocabBlock: Block = {
  id: "es-vocab",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { en: "Vocabulary", de: "Wortschatz", zh: "词汇" },
  spokenIntro: {
    en: "Let's look at some precise, advanced vocabulary for space travel.",
    de: "Schauen wir uns präzisen, fortgeschrittenen Wortschatz zur Raumfahrt an.",
    zh: "我们来看一些关于太空旅行的高阶精确词汇。",
  },
  content: {
    items: [
      // Nouns (14)
      { id: "n01", category: "noun", translations: { en: "trajectory", de: "Flugbahn", zh: "轨迹" } },
      { id: "n02", category: "noun", translations: { en: "propulsion", de: "Antrieb", zh: "推进" } },
      { id: "n03", category: "noun", translations: { en: "microgravity", de: "Mikrogravitation", zh: "微重力" } },
      { id: "n04", category: "noun", translations: { en: "re-entry", de: "Wiedereintritt", zh: "再入" } },
      { id: "n05", category: "noun", translations: { en: "spacewalk", de: "Weltraumspaziergang", zh: "太空行走" } },
      { id: "n06", category: "noun", translations: { en: "docking", de: "Andocken", zh: "对接" } },
      { id: "n07", category: "noun", translations: { en: "mission control", de: "Missionskontrolle", zh: "任务控制中心" } },
      { id: "n08", category: "noun", translations: { en: "life support system", de: "Lebenserhaltungssystem", zh: "生命维持系统" } },
      { id: "n09", category: "noun", translations: { en: "payload", de: "Nutzlast", zh: "有效载荷" } },
      { id: "n10", category: "noun", translations: { en: "orbital insertion", de: "Bahneinschuss", zh: "轨道入射" } },
      { id: "n11", category: "noun", translations: { en: "thruster", de: "Triebwerk", zh: "推进器" } },
      { id: "n12", category: "noun", translations: { en: "countdown", de: "Startzähler", zh: "倒计时" } },
      { id: "n13", category: "noun", translations: { en: "launch window", de: "Startfenster", zh: "发射窗口" } },
      { id: "n14", category: "noun", translations: { en: "debris", de: "Trümmer", zh: "碎片" } },
      // Verbs (12)
      { id: "v01", category: "verb", translations: { en: "to orbit", de: "umkreisen", zh: "环绕运行" } },
      { id: "v02", category: "verb", translations: { en: "to launch", de: "starten", zh: "发射" } },
      { id: "v03", category: "verb", translations: { en: "to dock", de: "andocken", zh: "对接" } },
      { id: "v04", category: "verb", translations: { en: "to jettison", de: "abwerfen", zh: "抛弃" } },
      { id: "v05", category: "verb", translations: { en: "to recalibrate", de: "neu kalibrieren", zh: "重新校准" } },
      { id: "v06", category: "verb", translations: { en: "to decelerate", de: "abbremsen", zh: "减速" } },
      { id: "v07", category: "verb", translations: { en: "to malfunction", de: "eine Fehlfunktion haben", zh: "发生故障" } },
      { id: "v08", category: "verb", translations: { en: "to abort", de: "abbrechen", zh: "中止" } },
      { id: "v09", category: "verb", translations: { en: "to tether", de: "anseilen", zh: "系绳固定" } },
      { id: "v10", category: "verb", translations: { en: "to splash down", de: "wassern", zh: "溅落" } },
      { id: "v11", category: "verb", translations: { en: "to venture", de: "sich wagen", zh: "冒险前往" } },
      { id: "v12", category: "verb", translations: { en: "to withstand", de: "standhalten", zh: "承受" } },
      // Adjectives (12)
      { id: "a01", category: "adjective", translations: { en: "weightless", de: "schwerelos", zh: "失重的" } },
      { id: "a02", category: "adjective", translations: { en: "uncharted", de: "unerforscht", zh: "未知的" } },
      { id: "a03", category: "adjective", translations: { en: "catastrophic", de: "katastrophal", zh: "灾难性的" } },
      { id: "a04", category: "adjective", translations: { en: "meticulous", de: "akribisch", zh: "一丝不苟的" } },
      { id: "a05", category: "adjective", translations: { en: "unprecedented", de: "beispiellos", zh: "前所未有的" } },
      { id: "a06", category: "adjective", translations: { en: "airtight", de: "luftdicht", zh: "密封的" } },
      { id: "a07", category: "adjective", translations: { en: "autonomous", de: "autonom", zh: "自主的" } },
      { id: "a08", category: "adjective", translations: { en: "volatile", de: "unbeständig", zh: "不稳定的" } },
      { id: "a09", category: "adjective", translations: { en: "resilient", de: "widerstandsfähig", zh: "有韧性的" } },
      { id: "a10", category: "adjective", translations: { en: "hazardous", de: "gefährlich", zh: "危险的" } },
      { id: "a11", category: "adjective", translations: { en: "pressurized", de: "druckbeaufschlagt", zh: "加压的" } },
      { id: "a12", category: "adjective", translations: { en: "disoriented", de: "orientierungslos", zh: "迷失方向的" } },
    ],
  },
};

export const grammarInversionBlock: Block = {
  id: "es-grammar-inversion",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { en: "Inversion After Negative Adverbials", de: "Inversion nach negativen Adverbien", zh: "否定副词后的倒装" },
  spokenIntro: {
    en: "Let's look at a hallmark of formal, dramatic English: inversion.",
    de: "Schauen wir uns ein Merkmal formeller, dramatischer englischer Sprache an: die Inversion.",
    zh: "我们来看看正式而富有戏剧性的英语的一个特征：倒装句。",
  },
  content: {
    explanation: {
      en: "When a negative or limiting adverbial opens a sentence for emphasis, subject and auxiliary invert, as in a question.",
      de: "Wenn ein negatives oder einschränkendes Adverb aus Gründen der Betonung am Satzanfang steht, werden Subjekt und Hilfsverb wie in einer Frage vertauscht.",
      zh: "当否定或限制性状语放在句首以示强调时，主语和助动词像问句一样倒装。",
    },
    chunks: [
      { id: "i1", translations: { en: "Never had the crew experienced such silence.", de: "Nie zuvor hatte die Crew eine solche Stille erlebt.", zh: "机组人员从未经历过如此的寂静。" } },
      { id: "i2", translations: { en: "Not only did the engines fail, but the navigation system also went offline.", de: "Nicht nur fielen die Triebwerke aus, auch das Navigationssystem ging offline.", zh: "不仅引擎失灵，导航系统也离线了。" } },
      { id: "i3", translations: { en: "Rarely does a mission proceed entirely without incident.", de: "Selten verläuft eine Mission völlig ohne Zwischenfall.", zh: "任务很少能完全顺利地进行。" } },
      { id: "i4", translations: { en: "Under no circumstances should the astronauts remove their helmets during the spacewalk.", de: "Unter keinen Umständen sollten die Astronauten während des Weltraumspaziergangs ihre Helme abnehmen.", zh: "在任何情况下，宇航员在太空行走时都不应摘下头盔。" } },
      { id: "i5", translations: { en: "Only after the second attempt did the docking procedure succeed.", de: "Erst nach dem zweiten Versuch gelang das Andockmanöver.", zh: "直到第二次尝试，对接程序才成功。" } },
      { id: "i6", translations: { en: "No sooner had the rocket launched than a warning light appeared.", de: "Kaum war die Rakete gestartet, da erschien ein Warnlicht.", zh: "火箭刚一发射，警示灯就亮了。" } },
    ],
  },
};

export const grammarCleftBlock: Block = {
  id: "es-grammar-cleft",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 6,
  title: { en: "Cleft Sentences for Emphasis", de: "Spaltsätze zur Betonung", zh: "强调用分裂句" },
  spokenIntro: {
    en: "Now let's split a sentence in two to emphasize exactly what matters.",
    de: "Jetzt teilen wir einen Satz in zwei, um genau das zu betonen, was zählt.",
    zh: "现在我们把一句话拆成两部分，以突出真正重要的信息。",
  },
  content: {
    explanation: {
      en: "Cleft sentences split one idea into two clauses to spotlight a specific piece of information — common in precise, formal reports.",
      de: "Spaltsätze teilen einen Gedanken in zwei Teilsätze, um eine bestimmte Information hervorzuheben — üblich in präzisen, formellen Berichten.",
      zh: "分裂句把一个意思拆成两个分句，以突出特定信息——常见于精确的正式报告中。",
    },
    chunks: [
      { id: "c1", translations: { en: "It was a faulty valve that caused the delay.", de: "Es war ein defektes Ventil, das die Verzögerung verursachte.", zh: "正是一个故障的阀门导致了延误。" } },
      { id: "c2", translations: { en: "It wasn't until re-entry that the true damage became clear.", de: "Erst beim Wiedereintritt wurde das wahre Ausmaß des Schadens klar.", zh: "直到再入大气层，真正的损伤才变得清晰。" } },
      { id: "c3", translations: { en: "What surprised the engineers most was the resilience of the heat shield.", de: "Was die Ingenieure am meisten überraschte, war die Widerstandsfähigkeit des Hitzeschilds.", zh: "最让工程师们惊讶的是隔热罩的韧性。" } },
      { id: "c4", translations: { en: "What the mission truly tested was human endurance, not just technology.", de: "Was die Mission wirklich auf die Probe stellte, war die menschliche Ausdauer, nicht nur die Technik.", zh: "这次任务真正考验的是人类的耐力，而不仅仅是技术。" } },
      { id: "c5", translations: { en: "It is the unpredictability of deep space that makes every launch a risk.", de: "Es ist die Unvorhersehbarkeit des tiefen Weltraums, die jeden Start zu einem Risiko macht.", zh: "正是深空的不可预测性使每次发射都充满风险。" } },
    ],
  },
};

export const grammarNominalizationBlock: Block = {
  id: "es-grammar-nominalization",
  type: "grammar",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { en: "Nominalization: A Formal Register", de: "Nominalisierung: ein formeller Sprachstil", zh: "名词化：正式语体" },
  spokenIntro: {
    en: "One more tool for formal writing: turning verbs into nouns.",
    de: "Noch ein Werkzeug für formelles Schreiben: Verben in Nomen verwandeln.",
    zh: "再学一个正式写作的技巧：把动词变成名词。",
  },
  content: {
    explanation: {
      en: "Advanced and academic English often replaces verbs with abstract nouns to sound more formal and objective — common in mission reports.",
      de: "Fortgeschrittenes und wissenschaftliches Englisch ersetzt Verben oft durch abstrakte Nomen, um formeller und objektiver zu klingen — üblich in Missionsberichten.",
      zh: "高阶及学术英语常用抽象名词替代动词，以显得更正式、更客观——常见于任务报告中。",
    },
    chunks: [
      { id: "m1", translations: { en: "The rocket launched successfully. → The successful launch of the rocket was confirmed.", de: "Die Rakete startete erfolgreich. → Der erfolgreiche Start der Rakete wurde bestätigt.", zh: "火箭成功发射了。→ 火箭的成功发射得到了确认。" } },
      { id: "m2", translations: { en: "Engineers analyzed the debris. → An analysis of the debris was conducted by engineers.", de: "Ingenieure analysierten die Trümmer. → Eine Analyse der Trümmer wurde von Ingenieuren durchgeführt.", zh: "工程师们分析了碎片。→ 工程师对碎片进行了分析。" } },
      { id: "m3", translations: { en: "The satellite failed unexpectedly. → The unexpected failure of the satellite raised concerns.", de: "Der Satellit fiel unerwartet aus. → Der unerwartete Ausfall des Satelliten löste Besorgnis aus.", zh: "卫星意外发生故障。→ 卫星的意外故障引起了担忧。" } },
    ],
  },
};

export const dialogueMissionControlBlock: Block = {
  id: "es-dialogue-mission-control",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 8,
  title: { en: "Dialogue: Mission Control", de: "Dialog: Missionskontrolle", zh: "对话：任务控制中心" },
  spokenIntro: {
    en: "Let's listen to a tense exchange between a commander and mission control.",
    de: "Hören wir uns einen angespannten Austausch zwischen einer Kommandantin und der Missionskontrolle an.",
    zh: "我们来听指挥官与任务控制中心之间一段紧张的对话。",
  },
  content: {
    lines: [
      { id: "d1", speaker: "Commander", translations: { en: "Mission Control, we are experiencing an unexpected fluctuation in cabin pressure.", de: "Missionskontrolle, wir stellen eine unerwartete Schwankung des Kabinendrucks fest.", zh: "任务控制中心，我们的舱内压力出现了意外波动。" } },
      { id: "d2", speaker: "Mission Control", translations: { en: "Copy that. Can you confirm whether the life support system is still stable?", de: "Verstanden. Könnt ihr bestätigen, ob das Lebenserhaltungssystem noch stabil ist?", zh: "收到。能确认生命维持系统是否仍然稳定吗？" } },
      { id: "d3", speaker: "Commander", translations: { en: "Affirmative, life support remains stable. However, not only has the pressure dropped, but a warning light has also activated.", de: "Bestätigt, die Lebenserhaltung bleibt stabil. Allerdings ist nicht nur der Druck gefallen, auch ein Warnlicht hat sich aktiviert.", zh: "确认，生命维持系统仍然稳定。但不仅压力下降了，一个警示灯也亮了。" } },
      { id: "d4", speaker: "Mission Control", translations: { en: "Understood. Under no circumstances should you attempt an unscheduled spacewalk. Stand by for further instructions.", de: "Verstanden. Unter keinen Umständen solltet ihr einen ungeplanten Weltraumspaziergang versuchen. Wartet auf weitere Anweisungen.", zh: "明白。在任何情况下都不要尝试计划外的太空行走。请等待进一步指示。" } },
      { id: "d5", speaker: "Commander", translations: { en: "Roger. We'll hold position and await your assessment.", de: "Roger. Wir halten die Position und warten auf eure Einschätzung.", zh: "收到。我们将保持位置，等待你们的评估。" } },
      { id: "d6", speaker: "Mission Control", translations: { en: "It's likely a sensor malfunction rather than an actual leak, but we're running diagnostics to confirm.", de: "Es ist wahrscheinlich eine Fehlfunktion des Sensors und kein tatsächliches Leck, aber wir führen Diagnosen durch, um das zu bestätigen.", zh: "很可能是传感器故障，而不是真正的泄漏，但我们正在运行诊断以确认。" } },
      { id: "d7", speaker: "Commander", translations: { en: "Copy. Never have I been more grateful for a well-trained crew.", de: "Verstanden. Nie war ich dankbarer für eine gut ausgebildete Crew.", zh: "收到。我从未如此感激拥有训练有素的机组人员。" } },
      { id: "d8", speaker: "Mission Control", translations: { en: "Diagnostics confirm a sensor fault. You are cleared to proceed with the mission.", de: "Die Diagnose bestätigt einen Sensorfehler. Ihr seid freigegeben, die Mission fortzusetzen.", zh: "诊断确认是传感器故障。你们可以继续执行任务。" } },
      { id: "d9", speaker: "Commander", translations: { en: "Copy that, Mission Control. Continuing as planned.", de: "Verstanden, Missionskontrolle. Wir setzen wie geplant fort.", zh: "收到，任务控制中心。按计划继续。" } },
      { id: "d10", speaker: "Mission Control", translations: { en: "Not only is your trajectory nominal, but your fuel margin is also better than projected.", de: "Nicht nur eure Flugbahn ist nominal, auch eure Treibstoffreserve ist besser als vorhergesagt.", zh: "不仅你们的轨迹正常，燃料余量也比预计的要好。" } },
      { id: "d11", speaker: "Commander", translations: { en: "That's excellent news. Rarely have we had such a smooth stretch of the mission.", de: "Das sind hervorragende Neuigkeiten. Selten hatten wir einen so reibungslosen Abschnitt der Mission.", zh: "这是个好消息。我们很少有任务进行得如此顺利的阶段。" } },
      { id: "d12", speaker: "Mission Control", translations: { en: "What remains critical now is the docking sequence in six hours.", de: "Was jetzt entscheidend bleibt, ist die Andocksequenz in sechs Stunden.", zh: "现在关键的是六小时后的对接程序。" } },
      { id: "d13", speaker: "Commander", translations: { en: "Understood. We'll begin final checks well ahead of schedule.", de: "Verstanden. Wir beginnen die letzten Kontrollen deutlich vor dem Zeitplan.", zh: "明白。我们会提前很多开始最后检查。" } },
      { id: "d14", speaker: "Mission Control", translations: { en: "Godspeed.", de: "Gute Reise.", zh: "一路平安。" } },
    ],
  },
};

// Original content — no source PDF exists for this course, so word-stress
// pairs were authored directly rather than reused. Two columns by stress
// pattern, matching the same grouped vocabDrill layout used elsewhere.
export const pronunciationStressBlock: Block = {
  id: "es-pronunciation-stress",
  type: "vocabDrill",
  displayMode: "content",
  estimatedMinutes: 4,
  title: { en: "Word Stress in Technical Terms", de: "Wortbetonung bei Fachbegriffen", zh: "专业术语的重音" },
  spokenIntro: {
    en: "Advanced technical vocabulary often trips learners up on stress, not sounds. Let's practice.",
    de: "Fortgeschrittener Fachwortschatz bereitet oft Schwierigkeiten bei der Betonung, nicht bei den Lauten. Üben wir das.",
    zh: "高阶专业词汇常常在重音上让学习者犯难，而不是发音本身。我们来练习一下。",
  },
  content: {
    groupLabels: {
      first: { en: "Stress on 1st syllable", de: "Betonung auf 1. Silbe", zh: "重音在第一音节" },
      later: { en: "Stress on 2nd+ syllable", de: "Betonung ab der 2. Silbe", zh: "重音在第二音节及以后" },
    },
    items: [
      { id: "s01", category: "first", translations: { en: "ORbit", de: "umkreisen (Betonung 1)", zh: "环绕（重音1）" } },
      { id: "s02", category: "first", translations: { en: "ASTronaut", de: "Astronaut (Betonung 1)", zh: "宇航员（重音1）" } },
      { id: "s03", category: "first", translations: { en: "SATellite", de: "Satellit (Betonung 1)", zh: "卫星（重音1）" } },
      { id: "s04", category: "first", translations: { en: "GRAvity", de: "Schwerkraft (Betonung 1)", zh: "重力（重音1）" } },
      { id: "s05", category: "first", translations: { en: "MODule", de: "Modul (Betonung 1)", zh: "舱段（重音1）" } },
      { id: "s06", category: "first", translations: { en: "VEHicle", de: "Fahrzeug (Betonung 1)", zh: "飞行器（重音1）" } },
      { id: "s07", category: "first", translations: { en: "THRUSter", de: "Triebwerk (Betonung 1)", zh: "推进器（重音1）" } },
      { id: "s08", category: "first", translations: { en: "PAYload", de: "Nutzlast (Betonung 1)", zh: "有效载荷（重音1）" } },
      { id: "s09", category: "later", translations: { en: "proPULsion", de: "Antrieb (Betonung 2)", zh: "推进（重音2）" } },
      { id: "s10", category: "later", translations: { en: "re-ENtry", de: "Wiedereintritt (Betonung 2)", zh: "再入（重音2）" } },
      { id: "s11", category: "later", translations: { en: "deCELerate", de: "abbremsen (Betonung 2)", zh: "减速（重音2）" } },
      { id: "s12", category: "later", translations: { en: "recaLIBrate", de: "neu kalibrieren (Betonung 2)", zh: "重新校准（重音2）" } },
      { id: "s13", category: "later", translations: { en: "coORdinate", de: "koordinieren (Betonung 2)", zh: "协调（重音2）" } },
      { id: "s14", category: "later", translations: { en: "unPRECedented", de: "beispiellos (Betonung 2)", zh: "前所未有（重音2）" } },
      { id: "s15", category: "later", translations: { en: "autoNOMous", de: "autonom (Betonung 2)", zh: "自主（重音2）" } },
      { id: "s16", category: "later", translations: { en: "resILient", de: "widerstandsfähig (Betonung 2)", zh: "有韧性（重音2）" } },
    ],
  },
};

// Original short closing song, written for this lesson (not reused/quoted
// from any existing copyrighted work) — matches the "song always closes
// the lesson" rule and the same 3-phase readalong treatment as Bruder Jakob.
export const songVoyageBlock: Block = {
  id: "es-song-voyage",
  type: "readalong",
  displayMode: "face",
  estimatedMinutes: 8,
  isSong: true, // see types/index.ts — explicit flag, not positional inference
  title: { en: "Voyage to the Stars", de: "Reise zu den Sternen", zh: "星际航行" },
  spokenIntro: {
    en: "To close today's lesson, an original song about venturing into the unknown.",
    de: "Zum Abschluss der heutigen Stunde ein Original-Lied über den Aufbruch ins Unbekannte.",
    zh: "为了结束今天的课程，来一首关于探索未知的原创歌曲。",
  },
  content: {
    lines: [
      { id: "sv1", translations: { en: "Beyond the blue, where silence flies,", de: "Jenseits des Blaus, wo Stille fliegt,", zh: "越过蓝天，寂静飞翔之处，" } },
      { id: "sv2", translations: { en: "we chase the dark and endless skies.", de: "jagen wir dem dunklen, endlosen Himmel nach.", zh: "我们追逐无尽的黑暗天空。" } },
      { id: "sv3", translations: { en: "Through fields of stars, our engines hum,", de: "Durch Sternenfelder summen unsere Triebwerke,", zh: "穿过星海，引擎低鸣，" } },
      { id: "sv4", translations: { en: "into the vast unknown we come.", de: "hinein ins weite Unbekannte kommen wir.", zh: "我们驶向浩瀚的未知。" } },
      { id: "sv5", translations: { en: "No borders here, no earthly wall,", de: "Keine Grenzen hier, keine irdische Mauer,", zh: "这里没有边界，没有尘世的墙，" } },
      { id: "sv6", translations: { en: "just space and hope, and that is all.", de: "nur Weltraum und Hoffnung, das ist alles.", zh: "只有太空与希望，如此而已。" } },
    ],
  },
};

export const lessonEnglishSpace: LessonPlan = {
  id: "lesson-en-space-c1",
  courseId: "english-advanced-c1",
  title: { en: "Voices from Orbit", de: "Stimmen aus dem Orbit", zh: "轨道上的声音" },
  // framingLanguage omitted (defaults to "target") — C1 learners can follow
  // trainer framing directly in English, unlike the beginner course.
  blocks: [
    titleBlock,
    agendaBlock,
    introBlock,
    vocabBlock,
    grammarInversionBlock,
    grammarCleftBlock,
    grammarNominalizationBlock,
    dialogueMissionControlBlock,
    pronunciationStressBlock,
    songVoyageBlock, // song always closes the lesson
  ],
};
