import type { TopicLesson } from "../topicTypes";

// B1 — row 2 of docs/b1-master-lesson-table-v01.md. Grammar function:
// "Past perfect — narrating early work history in sequence" via
// 〜ていた — the same core pattern as topic-b1-01-travel-mishaps.ts,
// reinforced here in a career-narration context rather than a
// travel-mishap one, matching the table's own "reinforcement across
// contexts" design for the six shared B1 grammar items (see the
// table's intro).
//
// Scope note: only `ja`/`en` — same as topic-b1-01.
//
// Kanji note: written inline from the start this time. Topic-b1-01
// added kanji as a separate pass afterward and hit a real bug (a
// duplicate-property insertion caught by tsc, took three fixup passes
// to fully resolve) — writing it inline avoids that whole class of
// error rather than relying on a later find-and-patch step.

export const topicCareerBeginnings: TopicLesson = {
  id: "topic-b1-02-career-beginnings",
  lessonNumber: 2,
  level: "B1",
  topicName: {
    ja: "キャリアの はじまり",
    jaKanji: "キャリアの始まり",
    en: "Career Beginnings"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "キャリア", en: "career" } },
    { id: "v02", category: "noun", translations: { ja: "しゅうかつ", jaKanji: "就活", en: "job hunting" } },
    { id: "v03", category: "noun", translations: { ja: "りれきしょ", jaKanji: "履歴書", en: "resume, CV" } },
    { id: "v04", category: "noun", translations: { ja: "めんせつ", jaKanji: "面接", en: "interview" } },
    { id: "v05", category: "verb", translations: { ja: "さいようされる", jaKanji: "採用される", en: "to be hired" } },
    { id: "v06", category: "verb", translations: { ja: "はいぞくされる", jaKanji: "配属される", en: "to be assigned to (a department)" } },
    { id: "v07", category: "noun", translations: { ja: "けんしゅうきかん", jaKanji: "研修期間", en: "training period" } },
    { id: "v08", category: "noun", translations: { ja: "せんぱい", jaKanji: "先輩", en: "senior colleague, mentor" } },
    { id: "v09", category: "noun", translations: { ja: "ぶしょ", jaKanji: "部署", en: "department" } },
    { id: "v10", category: "noun", translations: { ja: "しょうしん", jaKanji: "昇進", en: "promotion" } },
    { id: "v11", category: "verb", translations: { ja: "てんしょくする", jaKanji: "転職する", en: "to change jobs" } },
    { id: "v12", category: "verb", translations: { ja: "きぎょうする", jaKanji: "起業する", en: "to start a business" } },
    { id: "v13", category: "noun", translations: { ja: "インターンシップ", en: "internship" } },
    { id: "v14", category: "noun", translations: { ja: "しかく", jaKanji: "資格", en: "qualification, certificate" } },
    { id: "v15", category: "verb", translations: { ja: "みに つける", jaKanji: "身に付ける", en: "to acquire (a skill)" } },
    { id: "v16", category: "noun", translations: { ja: "けいけん", jaKanji: "経験", en: "experience" } },
    { id: "v17", category: "verb", translations: { ja: "けいけんを つむ", jaKanji: "経験を積む", en: "to gain experience" } },
    { id: "v18", category: "noun", translations: { ja: "しょくば", jaKanji: "職場", en: "workplace" } },
    { id: "v19", category: "noun", translations: { ja: "どうりょう", jaKanji: "同僚", en: "colleague" } },
    { id: "v20", category: "noun", translations: { ja: "じょうし", jaKanji: "上司", en: "supervisor, boss" } },
    { id: "v21", category: "noun", translations: { ja: "せきにん", jaKanji: "責任", en: "responsibility" } },
    { id: "v22", category: "verb", translations: { ja: "たんとうする", jaKanji: "担当する", en: "to be in charge of" } },
    { id: "v23", category: "noun", translations: { ja: "じっせき", jaKanji: "実績", en: "track record, achievement" } },
    { id: "v24", category: "verb", translations: { ja: "くろうする", jaKanji: "苦労する", en: "to struggle, have a hard time" } },
    { id: "v25", category: "verb", translations: { ja: "のりこえる", jaKanji: "乗り越える", en: "to overcome" } },
    { id: "v26", category: "noun", translations: { ja: "せいちょう", jaKanji: "成長", en: "growth" } },
    { id: "v27", category: "verb", translations: { ja: "せいちょうする", jaKanji: "成長する", en: "to grow" } },
    { id: "v28", category: "noun", translations: { ja: "てんきてん", jaKanji: "転機", en: "turning point" } },
    { id: "v29", category: "adverb", translations: { ja: "とうじ", jaKanji: "当時", en: "at that time" } },
    { id: "v30", category: "adverb", translations: { ja: "それいらい", jaKanji: "それ以来", en: "since then" } }
  ],
  dialogueA: {
    title: { ja: "はじめての しごとの はなし", jaKanji: "初めての仕事の話", en: "Talking About Your First Job" },
    lines: [
      { id: "d1", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "はじめての しごとは どうだった？", jaKanji: "初めての仕事はどうだった？", en: "What was your first job like?" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "だいがくを そつぎょうする ころには、しょうしゃに にゅうしゃする ことが すでに きまっていたんだ。", jaKanji: "大学を卒業する頃には、商社に入社する事が既に決まっていたんだ。", en: "By the time I graduated university, I had already decided on a trading company." } },
      { id: "d3", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "どうやって はいったの？", jaKanji: "どうやって入ったの？", en: "How did you get in?" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "だいがく さんねんせいの ときに、すでに そこで インターンシップを けいけんしていたんだ。", jaKanji: "大学三年生の時に、既にそこでインターンシップを経験していたんだ。", en: "I had already done an internship there during my third year of college." } },
      { id: "d5", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "すごい スタートダッシュだね。けんしゅうきかんは どうだった？", jaKanji: "すごいスタートダッシュだね。研修期間はどうだった？", en: "That's a great head start. What was the training period like?" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "けんしゅうが おわる ころには、しごとの きほんを すでに まなんでいたよ。", jaKanji: "研修が終わる頃には、仕事の基本を既に学んでいたよ。", en: "By the time training finished, I had already learned the basics of the job." } },
      { id: "d7", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "せんぱいは いたの？", jaKanji: "先輩はいたの？", en: "Did you have a mentor?" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、ぼくが はじめる まえに、もう ひとりの せんぱいが サポートよういんとして はいぞくされていたんだ。", jaKanji: "うん、僕が始める前に、もう一人の先輩がサポート要員として配属されていたんだ。", en: "Yes, a senior colleague had already been assigned to support me before I even started." } },
      { id: "d9", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "それは すごく たすかったでしょう。", jaKanji: "それはすごく助かったでしょう。", en: "That must have helped a lot." } },
      { id: "d10", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん。いちねんめが おわる ころには、おおきく せいちょうしていたと おもう。", jaKanji: "うん。一年目が終わる頃には、大きく成長していたと思う。", en: "Yeah. By the time my first year ended, I think I had grown a lot." } },
      { id: "d11", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "さいしょは たいへんだった？", jaKanji: "最初は大変だった？", en: "Was it difficult at first?" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "すごく。なれる まえは、しごとりょうに くろうしていたんだ。", jaKanji: "すごく。慣れる前は、仕事量に苦労していたんだ。", en: "Very. Before I got used to it, I had been struggling with the workload." } },
      { id: "d13", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "でも、のりこえたんだね。", jaKanji: "でも、乗り越えたんだね。", en: "But you overcame it." } },
      { id: "d14", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、そのころには、ながく つづけたい ことを すでに みつけていたんだ。", jaKanji: "うん、その頃には、長く続けたい事を既に見つけていたんだ。", en: "Yes, and by then, I had already found what I wanted to do long-term." } }
    ]
  },
  dialogueB: {
    title: { ja: "けいれきに ついての めんせつ", jaKanji: "経歴についての面接", en: "An Interview About Career History" },
    lines: [
      { id: "e1", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "けいれきに ついて おしえて いただけますか？", jaKanji: "経歴について教えていただけますか？", en: "Could you tell me about your career history?" } },
      { id: "e2", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "はい。この かいしゃに はいる まえに、ちいさな かいしゃで ごねんかん すでに はたらいていました。", jaKanji: "はい。この会社に入る前に、小さな会社で五年間既に働いていました。", en: "Of course. Before joining this company, I had already worked at a smaller firm for five years." } },
      { id: "e3", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "そこでの やくわりは なんでしたか？", jaKanji: "そこでの役割は何でしたか？", en: "What was your role there?" } },
      { id: "e4", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "たいしょくする ころには、えいぎょうぶを すでに たんとうしていました。", jaKanji: "退職する頃には、営業部を既に担当していました。", en: "By the time I left, I had already been in charge of the sales department." } },
      { id: "e5", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "それは すばらしいですね。なぜ てんしょくを きめたのですか？", jaKanji: "それは素晴らしいですね。なぜ転職を決めたのですか？", en: "That's impressive. Why did you decide to change jobs?" } },
      { id: "e6", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "じつは、キャリアの てんきてんに ついて すでに しばらく かんがえていたんです。", jaKanji: "実は、キャリアの転機について既にしばらく考えていたんです。", en: "Actually, I had already been thinking about a turning point in my career for a while." } },
      { id: "e7", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "なるほど。そこで どんな けいけんを つみましたか？", jaKanji: "なるほど。そこでどんな経験を積みましたか？", en: "I see. What experience did you gain there?" } },
      { id: "e8", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "つぎに すすむ まえに、いくつかの しかくを すでに みに つけて いました。", jaKanji: "次に進む前に、幾つかの資格を既に身に付けていました。", en: "Before moving on, I had already acquired several qualifications." } },
      { id: "e9", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "いちばん じまんできる じっせきは なんですか？", jaKanji: "一番自慢できる実績は何ですか？", en: "What was your proudest achievement?" } },
      { id: "e10", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "たいしょくする ころには、おもな とりひきさきと すでに つよい かんけいを きずいていました。", jaKanji: "退職する頃には、主な取引先と既に強い関係を築いていました。", en: "By the time I left, I had already built strong relationships with major clients." } },
      { id: "e11", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "じょうしは どのように サポートして くれましたか？", jaKanji: "上司はどのようにサポートしてくれましたか？", en: "How did your supervisor support you?" } },
      { id: "e12", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "じょうしは そうそう から おおきな せきにんを すでに まかせて くれて いました。", jaKanji: "上司は早々から大きな責任を既に任せてくれていました。", en: "My boss had already trusted me with a lot of responsibility early on." } },
      { id: "e13", speaker: { ja: "めんせつかん", en: "Interviewer" }, translations: { ja: "きちょうな けいけんですね。", jaKanji: "貴重な経験ですね。", en: "That sounds like valuable experience." } },
      { id: "e14", speaker: { ja: "おうぼしゃ", en: "Applicant" }, translations: { ja: "はい、それいらい、まなんだ ことを すべて ここでの しごとに いかしています。", jaKanji: "はい、それ以来、学んだ事を全てここでの仕事に生かしています。", en: "Yes, since then, I've applied everything I learned to my work here." } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ていた：けいれきの せつめい", jaKanji: "〜ていた：経歴の説明", en: "~Te Ita: Narrating Career History" },
      explanation: {
        ja: "この ぶんぽうてんは、topic-b1-01（りょこうトラブル）で しょうかいした「〜ていた」と おなじ パターンですが、ここでは しごとの けいれきを じゅんばんに かたる ために つかいます。だいがく そつぎょう・にゅうしゃ・けんしゅう・しょうしんなど、いくつかの かこの できごとが どんな じゅんばんで おきたかを しめす とき、「〜ころには もう」「すでに」を「〜ていた」と いっしょに つかうと、ひとつの できごとが もう ひとつより まえに おきていた ことが はっきり つたわります。",
        jaKanji: "この文法点は、topic-b1-01（旅行トラブル）で紹介した「〜ていた」と同じパターンですが、ここでは仕事の経歴を順番に語る為に使います。大学卒業・入社・研修・昇進など、幾つかの過去の出来事がどんな順番で起きたかを示す時、「〜頃にはもう」「既に」を「〜ていた」と一緒に使うと、一つの出来事がもう一つより前に起きていた事がはっきり伝わります。",
        en: "This grammar point is the same pattern introduced in topic-b1-01 (Travel Mishaps), used here to narrate a work history in sequence. When showing the order in which several past events happened — graduating university, joining a company, training, being promoted — pairing ~koro ni wa mou (\"by the time ~, already\") or sude ni (\"already\") with ~te ita makes it clear that one event had already happened before another."
      },
      chunks: [
        { id: "g1", translations: { ja: "だいがくを そつぎょうする ころには、しょうしゃに にゅうしゃする ことが きまっていた。", jaKanji: "大学を卒業する頃には、商社に入社する事が決まっていた。", en: "By the time I graduated university, I had already decided on joining a trading company." } },
        { id: "g2", translations: { ja: "だいがく さんねんせいの ときに、すでに インターンシップを けいけんしていた。", jaKanji: "大学三年生の時に、既にインターンシップを経験していた。", en: "By my third year of college, I had already done an internship." } },
        { id: "g3", translations: { ja: "けんしゅうが おわる ころには、しごとの きほんを すでに まなんでいた。", jaKanji: "研修が終わる頃には、仕事の基本を既に学んでいた。", en: "By the time training finished, I had already learned the basics of the job." } },
        { id: "g4", translations: { ja: "はじめる まえに、せんぱいが すでに サポートよういんとして はいぞくされていた。", jaKanji: "始める前に、先輩が既にサポート要員として配属されていた。", en: "Before I started, a mentor had already been assigned to support me." } },
        { id: "g5", translations: { ja: "いちねんめが おわる ころには、おおきく せいちょうしていた。", jaKanji: "一年目が終わる頃には、大きく成長していた。", en: "By the time my first year ended, I had grown a lot." } },
        { id: "g6", translations: { ja: "なれる まえは、しごとりょうに くろうしていた。", jaKanji: "慣れる前は、仕事量に苦労していた。", en: "Before I got used to it, I had been struggling with the workload." } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
      groupLabels: {
        vowel_long1: { ja: "ぼいんの ながさ", en: "Vowel Length" },
        vowel_long2: { ja: "ぼいんの ながさ", en: "Vowel Length" },
        pitch1: { ja: "じっせきに かんする めいしの アクセント", en: "Pitch Accent on Achievement Nouns" },
        pitch2: { ja: "じっせきに かんする めいしの アクセント", en: "Pitch Accent on Achievement Nouns" }
      },
      items: [
        { id: "vl1_1", category: "vowel_long1", translations: { ja: "しょうしゃ", en: "trading company (long o)" } },
        { id: "vl1_2", category: "vowel_long1", translations: { ja: "けんしゅう", en: "training (long u)" } },
        { id: "vl1_3", category: "vowel_long1", translations: { ja: "しゅうしょく", en: "finding employment (long u, long o)" } },
        { id: "vl1_4", category: "vowel_long1", translations: { ja: "きぎょう", en: "enterprise, starting a business (long o)" } },
        { id: "vl2_1", category: "vowel_long2", translations: { ja: "とうじ", en: "at that time (long o)" } },
        { id: "vl2_2", category: "vowel_long2", translations: { ja: "こうか", en: "effect (long o)" } },
        { id: "vl2_3", category: "vowel_long2", translations: { ja: "こうけん", en: "contribution (long o)" } },
        { id: "vl2_4", category: "vowel_long2", translations: { ja: "しょうしん", en: "promotion (long o)" } },
        { id: "p1_1", category: "pitch1", translations: { ja: "じっせき", en: "track record" } },
        { id: "p1_2", category: "pitch1", translations: { ja: "せいちょう", en: "growth" } },
        { id: "p1_3", category: "pitch1", translations: { ja: "てんきてん", en: "turning point" } },
        { id: "p1_4", category: "pitch1", translations: { ja: "どりょく", en: "effort" } },
        { id: "p2_1", category: "pitch2", translations: { ja: "けいけん", en: "experience" } },
        { id: "p2_2", category: "pitch2", translations: { ja: "のうりょく", en: "ability" } },
        { id: "p2_3", category: "pitch2", translations: { ja: "せきにん", en: "responsibility" } },
        { id: "p2_4", category: "pitch2", translations: { ja: "しんらい", en: "trust" } }
      ]
    }
  },
  pronunciationDrills: {
    ja: [
      {
        id: "sound-drill",
        title: { ja: "はつおんの れんしゅう２", en: "Pronunciation Practice 2" },
        spokenIntro: {
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          en: "Next, let's practice with a lot more examples."
        },
        groupLabels: {
          vowel_long1: { ja: "ぼいんの ながさ", en: "Vowel Length" },
          vowel_long2: { ja: "ぼいんの ながさ", en: "Vowel Length" },
          pitch1: { ja: "じっせきに かんする めいしの アクセント", en: "Pitch Accent on Achievement Nouns" },
          pitch2: { ja: "じっせきに かんする めいしの アクセント", en: "Pitch Accent on Achievement Nouns" }
        },
        items: [
          { id: "vl1_5", category: "vowel_long1", translations: { ja: "えいぎょう", en: "sales, business" } },
          { id: "vl1_6", category: "vowel_long1", translations: { ja: "こうしょう", en: "negotiation" } },
          { id: "vl1_7", category: "vowel_long1", translations: { ja: "しょうだく", en: "consent" } },
          { id: "vl1_8", category: "vowel_long1", translations: { ja: "ちょうさ", en: "investigation, survey" } },
          { id: "vl1_9", category: "vowel_long1", translations: { ja: "こうりつ", en: "efficiency" } },
          { id: "vl1_10", category: "vowel_long1", translations: { ja: "きょうそう", en: "competition" } },
          { id: "vl1_11", category: "vowel_long1", translations: { ja: "とうし", en: "investment" } },
          { id: "vl1_12", category: "vowel_long1", translations: { ja: "きゅうよ", en: "wages" } },
          { id: "vl1_13", category: "vowel_long1", translations: { ja: "ろうどう", en: "labor" } },
          { id: "vl1_14", category: "vowel_long1", translations: { ja: "せいさん", en: "production" } },
          { id: "vl1_15", category: "vowel_long1", translations: { ja: "きぎょうか", en: "entrepreneur" } },
          { id: "vl1_16", category: "vowel_long1", translations: { ja: "しょうひん", en: "product" } },
          { id: "vl1_17", category: "vowel_long1", translations: { ja: "こうにゅう", en: "purchase" } },
          { id: "vl1_18", category: "vowel_long1", translations: { ja: "こうじょう", en: "factory" } },

          { id: "vl2_5", category: "vowel_long2", translations: { ja: "せいこう", en: "success" } },
          { id: "vl2_6", category: "vowel_long2", translations: { ja: "こうせき", en: "merit, achievement" } },
          { id: "vl2_7", category: "vowel_long2", translations: { ja: "ぎょうせき", en: "business results" } },
          { id: "vl2_8", category: "vowel_long2", translations: { ja: "こうじょうしん", en: "drive for self-improvement" } },
          { id: "vl2_9", category: "vowel_long2", translations: { ja: "とうろん", en: "discussion" } },
          { id: "vl2_10", category: "vowel_long2", translations: { ja: "きゅうそく", en: "rapid" } },
          { id: "vl2_11", category: "vowel_long2", translations: { ja: "こうりつか", en: "efficiency improvement" } },
          { id: "vl2_12", category: "vowel_long2", translations: { ja: "とうしか", en: "investor" } },
          { id: "vl2_13", category: "vowel_long2", translations: { ja: "きょうりょく", en: "cooperation" } },
          { id: "vl2_14", category: "vowel_long2", translations: { ja: "どうにゅう", en: "introduction (of a system)" } },
          { id: "vl2_15", category: "vowel_long2", translations: { ja: "しょうにん", en: "approval" } },
          { id: "vl2_16", category: "vowel_long2", translations: { ja: "りょうしょう", en: "consent (formal)" } },
          { id: "vl2_17", category: "vowel_long2", translations: { ja: "けいぞく", en: "continuation" } },
          { id: "vl2_18", category: "vowel_long2", translations: { ja: "とうごう", en: "merger, integration" } },

          { id: "p1_5", category: "pitch1", translations: { ja: "せいか", en: "result, outcome" } },
          { id: "p1_6", category: "pitch1", translations: { ja: "こうか", en: "effect" } },
          { id: "p1_7", category: "pitch1", translations: { ja: "しんぽ", en: "progress" } },
          { id: "p1_8", category: "pitch1", translations: { ja: "はってん", en: "development" } },
          { id: "p1_9", category: "pitch1", translations: { ja: "たっせい", en: "accomplishment" } },
          { id: "p1_10", category: "pitch1", translations: { ja: "かつやく", en: "active role" } },
          { id: "p1_11", category: "pitch1", translations: { ja: "じゅくれん", en: "proficiency" } },
          { id: "p1_12", category: "pitch1", translations: { ja: "じしん", en: "confidence" } },
          { id: "p1_13", category: "pitch1", translations: { ja: "いし", en: "will, resolve" } },
          { id: "p1_14", category: "pitch1", translations: { ja: "かくご", en: "determination" } },
          { id: "p1_15", category: "pitch1", translations: { ja: "ねっしん", en: "enthusiasm" } },
          { id: "p1_16", category: "pitch1", translations: { ja: "しゅうねん", en: "persistence, tenacity" } },
          { id: "p1_17", category: "pitch1", translations: { ja: "せんもんせい", en: "specialization" } },
          { id: "p1_18", category: "pitch1", translations: { ja: "かつりょく", en: "vitality" } },

          { id: "p2_5", category: "pitch2", translations: { ja: "じっせん", en: "practice, implementation" } },
          { id: "p2_6", category: "pitch2", translations: { ja: "じっし", en: "implementation" } },
          { id: "p2_7", category: "pitch2", translations: { ja: "たんとう", en: "being in charge (of)" } },
          { id: "p2_8", category: "pitch2", translations: { ja: "かつどう", en: "activity" } },
          { id: "p2_9", category: "pitch2", translations: { ja: "ぎむ", en: "duty" } },
          { id: "p2_10", category: "pitch2", translations: { ja: "やくわり", en: "role" } },
          { id: "p2_11", category: "pitch2", translations: { ja: "しめい", en: "mission" } },
          { id: "p2_12", category: "pitch2", translations: { ja: "きたい", en: "expectation" } },
          { id: "p2_13", category: "pitch2", translations: { ja: "ひょうか", en: "evaluation" } },
          { id: "p2_14", category: "pitch2", translations: { ja: "しんさ", en: "screening, review" } },
          { id: "p2_15", category: "pitch2", translations: { ja: "かんとく", en: "supervision" } },
          { id: "p2_16", category: "pitch2", translations: { ja: "こうにん", en: "succession (of a post)" } },
          { id: "p2_17", category: "pitch2", translations: { ja: "てんかい", en: "development, unfolding" } },
          { id: "p2_18", category: "pitch2", translations: { ja: "けんしょう", en: "verification" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-teita-1",
        title: { ja: "れんしゅう：〜ていた（１）", jaKanji: "練習：〜ていた（１）", en: "Practice: ~Te Ita (1)" },
        spokenIntro: {
          ja: "つぎは、「〜ていた」を つかった れいぶんを れんしゅうしましょう。",
          jaKanji: "次は、「〜ていた」を使った例文を練習しましょう。",
          en: "Next, let's practice example sentences using ~te ita."
        },
        lines: [
          { id: "ti1", translations: { ja: "だいがくを そつぎょうする ころには、しんろが きまっていた。", jaKanji: "大学を卒業する頃には、進路が決まっていた。", en: "By the time I graduated university, my path had already been decided." } },
          { id: "ti2", translations: { ja: "にゅうしゃする まえに、きほんてきな しかくを とっていた。", jaKanji: "入社する前に、基本的な資格を取っていた。", en: "Before joining the company, I had already gotten a basic qualification." } },
          { id: "ti3", translations: { ja: "けんしゅうきかんちゅうに、おおくの ことを まなんでいた。", jaKanji: "研修期間中に、多くの事を学んでいた。", en: "During the training period, I had been learning many things." } },
          { id: "ti4", translations: { ja: "はいぞくされる ころには、しょくばに なれていた。", jaKanji: "配属される頃には、職場に慣れていた。", en: "By the time I was assigned, I had already gotten used to the workplace." } },
          { id: "ti5", translations: { ja: "しょうしんする まえは、べつの ぶしょで はたらいていた。", jaKanji: "昇進する前は、別の部署で働いていた。", en: "Before being promoted, I had been working in a different department." } },
          { id: "ti6", translations: { ja: "てんしょくする ころには、じゅうぶんな けいけんを つんでいた。", jaKanji: "転職する頃には、十分な経験を積んでいた。", en: "By the time I changed jobs, I had already gained enough experience." } },
          { id: "ti7", translations: { ja: "きぎょうする まえに、いろいろな しごとを けいけんしていた。", jaKanji: "起業する前に、色々な仕事を経験していた。", en: "Before starting a business, I had experienced various jobs." } },
          { id: "ti8", translations: { ja: "そのころには、じょうしから しんらいされていた。", jaKanji: "その頃には、上司から信頼されていた。", en: "By that time, I had earned my supervisor's trust." } },
          { id: "ti9", translations: { ja: "どうりょうが たすけて くれる まえに、ひとりで がんばっていた。", jaKanji: "同僚が助けてくれる前に、一人で頑張っていた。", en: "Before my colleague helped me, I had been trying hard on my own." } },
          { id: "ti10", translations: { ja: "とうじ、あたらしい ぶんやに きょうみを もっていた。", jaKanji: "当時、新しい分野に興味を持っていた。", en: "At that time, I had already been interested in a new field." } }
        ]
      },
      {
        id: "grammar-drill-teita-2",
        title: { ja: "れんしゅう：〜ていた（２）", jaKanji: "練習：〜ていた（２）", en: "Practice: ~Te Ita (2)" },
        spokenIntro: {
          ja: "つぎは、もっと たくさんの れいぶんで れんしゅうしましょう。",
          jaKanji: "次は、もっと多くの例文で練習しましょう。",
          en: "Next, let's practice with even more example sentences."
        },
        lines: [
          { id: "ti11", translations: { ja: "そつぎょうする ころには、しょうらいの もくひょうを もっていた。", jaKanji: "卒業する頃には、将来の目標を持っていた。", en: "By the time I graduated, I had already had a goal for the future." } },
          { id: "ti12", translations: { ja: "めんせつを うける まえに、かいしゃに ついて しらべていた。", jaKanji: "面接を受ける前に、会社について調べていた。", en: "Before the interview, I had already researched the company." } },
          { id: "ti13", translations: { ja: "さいようされる ころには、なんども れんしゅうしていた。", jaKanji: "採用される頃には、何度も練習していた。", en: "By the time I was hired, I had practiced many times." } },
          { id: "ti14", translations: { ja: "けんしゅうが はじまる まえに、きんちょうしていた。", jaKanji: "研修が始まる前に、緊張していた。", en: "Before the training started, I had been nervous." } },
          { id: "ti15", translations: { ja: "せんぱいに あう まえに、しつもんを かんがえていた。", jaKanji: "先輩に会う前に、質問を考えていた。", en: "Before meeting my mentor, I had already thought of questions." } },
          { id: "ti16", translations: { ja: "じっせきを だす ころには、みずから もくひょうを たてていた。", jaKanji: "実績を出す頃には、自ら目標を立てていた。", en: "By the time I produced results, I had already set my own goals." } },
          { id: "ti17", translations: { ja: "せいちょうする まえは、じしんが なかった。", jaKanji: "成長する前は、自信がなかった。", en: "Before growing, I had lacked confidence." } },
          { id: "ti18", translations: { ja: "てんきてんを むかえる ころには、かくごを きめていた。", jaKanji: "転機を迎える頃には、覚悟を決めていた。", en: "By the time the turning point came, I had already made up my mind." } },
          { id: "ti19", translations: { ja: "それいらい、あたらしい かんがえかたを みに つけていた。", jaKanji: "それ以来、新しい考え方を身に付けていた。", en: "Since then, I had already acquired a new way of thinking." } },
          { id: "ti20", translations: { ja: "とうじを ふりかえると、たくさん くろうしていた。", jaKanji: "当時を振り返ると、たくさん苦労していた。", en: "Looking back at that time, I had struggled a lot." } }
        ]
      }
    ]
  }
};
