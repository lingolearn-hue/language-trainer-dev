import type { TopicLesson } from "../topicTypes";

// B1 — row 3 of docs/b1-master-lesson-table-v01.md. Grammar function:
// "Past perfect — sequencing childhood events, then-vs-now contrast."
// Third and final reinforcement row for this shared B1 grammar item
// (see topic-b1-01-travel-mishaps.ts and topic-b1-02-career-
// beginnings.ts for the first two). This row adds a genuinely new
// nuance beyond the previous two: 〜たことが なかった ("had never
// done ~"), the negative-experiential counterpart to 〜ていた, useful
// specifically for the then-vs-now contrast this topic calls for.
//
// Scope note: only `ja`/`en` — same as the other two B1 topics.
// Kanji written inline from the start, matching topic-b1-02's
// (successful) approach rather than topic-b1-01's original
// after-the-fact pass.

export const topicGrowingUp: TopicLesson = {
  id: "topic-b1-03-growing-up",
  lessonNumber: 3,
  level: "B1",
  topicName: {
    ja: "こどもじだいの おもいで",
    jaKanji: "子供時代の思い出",
    en: "Growing Up"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "こどもじだい", jaKanji: "子供時代", en: "childhood" } },
    { id: "v02", category: "verb", translations: { ja: "そだつ", jaKanji: "育つ", en: "to grow up" } },
    { id: "v03", category: "verb", translations: { ja: "そだてる", jaKanji: "育てる", en: "to raise (a child)" } },
    { id: "v04", category: "noun", translations: { ja: "こきょう", jaKanji: "故郷", en: "hometown" } },
    { id: "v05", category: "noun", translations: { ja: "きんじょ", jaKanji: "近所", en: "neighborhood" } },
    { id: "v06", category: "noun", translations: { ja: "あそびば", jaKanji: "遊び場", en: "playground" } },
    { id: "v07", category: "verb", translations: { ja: "そとで あそぶ", jaKanji: "外で遊ぶ", en: "to play outside" } },
    { id: "v08", category: "noun", translations: { ja: "テレビゲーム", en: "video game" } },
    { id: "v09", category: "noun", translations: { ja: "せだい", jaKanji: "世代", en: "generation" } },
    { id: "v10", category: "noun", translations: { ja: "そふぼ", jaKanji: "祖父母", en: "grandparents" } },
    { id: "v11", category: "adjective", translations: { ja: "きびしい", jaKanji: "厳しい", en: "strict" } },
    { id: "v12", category: "adjective", translations: { ja: "あまい", jaKanji: "甘い", en: "lenient" } },
    { id: "v13", category: "noun", translations: { ja: "もんげん", jaKanji: "門限", en: "curfew" } },
    { id: "v14", category: "noun", translations: { ja: "おこづかい", jaKanji: "お小遣い", en: "allowance" } },
    { id: "v15", category: "verb", translations: { ja: "しかられる", jaKanji: "叱られる", en: "to be scolded" } },
    { id: "v16", category: "verb", translations: { ja: "ほめられる", jaKanji: "褒められる", en: "to be praised" } },
    { id: "v17", category: "noun", translations: { ja: "おもいで", jaKanji: "思い出", en: "memory, recollection" } },
    { id: "v18", category: "adjective", translations: { ja: "なつかしい", jaKanji: "懐かしい", en: "nostalgic" } },
    { id: "v19", category: "verb", translations: { ja: "かわる", jaKanji: "変わる", en: "to change (over time)" } },
    { id: "v20", category: "noun", translations: { ja: "テクノロジー", en: "technology" } },
    { id: "v21", category: "noun", translations: { ja: "スマホ", en: "smartphone" } },
    { id: "v22", category: "noun", translations: { ja: "こていでんわ", jaKanji: "固定電話", en: "landline phone" } },
    { id: "v23", category: "verb", translations: { ja: "れんらくを とる", jaKanji: "連絡を取る", en: "to get in touch" } },
    { id: "v24", category: "noun", translations: { ja: "せいかつようしき", jaKanji: "生活様式", en: "lifestyle" } },
    { id: "v25", category: "noun", translations: { ja: "しつけ", en: "upbringing, discipline" } },
    { id: "v26", category: "noun", translations: { ja: "かちかん", jaKanji: "価値観", en: "values, beliefs" } },
    { id: "v27", category: "verb", translations: { ja: "くらべる", jaKanji: "比べる", en: "to compare" } },
    { id: "v28", category: "adverb", translations: { ja: "あのころ", jaKanji: "あの頃", en: "back then, in those days" } },
    { id: "v29", category: "adverb", translations: { ja: "さいきん", jaKanji: "最近", en: "recently, nowadays" } },
    { id: "v30", category: "grammar", translations: { ja: "〜たことが ない", jaKanji: "〜た事がない", en: "to have never (done)" } }
  ],
  dialogueA: {
    title: { ja: "こどもじだいを ふりかえる", jaKanji: "子供時代を振り返る", en: "Reminiscing About Childhood" },
    lines: [
      { id: "d1", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "こどもの ころの いえ、おぼえてる？", jaKanji: "子供の頃の家、覚えてる？", en: "Do you remember your childhood home?" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "もちろん。じゅっさいに なる ころには、すでに さんかい ひっこしていたよ。", jaKanji: "もちろん。10歳になる頃には、既に3回引っ越していたよ。", en: "Of course. By the time I turned ten, I had already moved three times." } },
      { id: "d3", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "けっこう おおいね。きんじょは どんな ところだった？", jaKanji: "結構多いね。近所はどんな所だった？", en: "That's a lot of moving. What was your neighborhood like?" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "ちいさな あそびばが ちかくに あったよ。ひっこす まえは、おおきな まちを みたことが なかったんだ。", jaKanji: "小さな遊び場が近くにあったよ。引っ越す前は、大きな街を見た事がなかったんだ。", en: "There was a small playground nearby. Before we moved, I had never seen a big city." } },
      { id: "d5", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "そとで よく あそんでいたの？", jaKanji: "外でよく遊んでいたの？", en: "Did you play outside a lot?" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "まいにち ね。ちゅうがくせいに なる ころには、きんじょに ともだちが すでに たくさん できていたよ。", jaKanji: "毎日ね。中学生になる頃には、近所に友達が既にたくさんできていたよ。", en: "Every day. By the time I was in middle school, I had already made lots of friends in the neighborhood." } },
      { id: "d7", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "りょうしんは きびしかった？", jaKanji: "両親は厳しかった？", en: "What about your parents? Were they strict?" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "ははは きびしかったけど、こうこうせいに なる ころには、すでに あまく なっていたよ。", jaKanji: "母は厳しかったけど、高校生になる頃には、既に甘くなっていたよ。", en: "My mother was strict, but by the time I was in high school, she had already become more lenient." } },
      { id: "d9", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "もんげんは あったの？", jaKanji: "門限はあったの？", en: "Did you have a curfew?" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、くらく なる まえには かえらないと いけなかった。こどもの ころ、おそくまで そとに いたことが なかったんだ。", jaKanji: "うん、暗くなる前には帰らないといけなかった。子供の頃、遅くまで外にいた事がなかったんだ。", en: "Yes, I had to be home before it got dark. I had never stayed out late as a kid." } },
      { id: "d11", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "そふぼとは なかが よかったの？", jaKanji: "祖父母とは仲が良かったの？", en: "Were you close with your grandparents?" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "すごく。がっこうに はいる まえに、いろいろな ことを すでに おしえて くれていたよ。", jaKanji: "すごく。学校に入る前に、色々な事を既に教えてくれていたよ。", en: "Very. They had already taught me a lot of things before I even started school." } },
      { id: "d13", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "きちょうな おもいでだね。", jaKanji: "貴重な思い出だね。", en: "Those sound like precious memories." } },
      { id: "d14", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、いま かんがえると、ほんとうに なつかしいよ。", jaKanji: "うん、今考えると、本当に懐かしいよ。", en: "Yeah, thinking about it now, it's really nostalgic." } }
    ]
  },
  dialogueB: {
    title: { ja: "せだいを くらべる", jaKanji: "世代を比べる", en: "Comparing Generations" },
    lines: [
      { id: "e1", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "みほさんの こどもじだいは、いまの こどもと どう ちがったの？", jaKanji: "みほさんの子供時代は、今の子供とどう違ったの？", en: "How was your childhood different from kids today?" } },
      { id: "e2", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "そうね、じゅうだいの ころには、スマホに さわったことが なかったよ。", jaKanji: "そうね、10代の頃には、スマホに触った事がなかったよ。", en: "Well, by the time I was a teenager, I had never even touched a smartphone." } },
      { id: "e3", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "ほんとうに？どうやって ともだちと れんらくを とっていたの？", jaKanji: "本当に？どうやって友達と連絡を取っていたの？", en: "Really? How did you stay in touch with friends?" } },
      { id: "e4", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "こていでんわを つかっていたよ。みんなの ばんごうを すでに おぼえていたんだ。", jaKanji: "固定電話を使っていたよ。皆の番号を既に覚えていたんだ。", en: "We used the landline phone. I had already memorized everyone's phone number by heart." } },
      { id: "e5", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "すごいね。いまの こどもは なんでも スマホに たよっているよ。", jaKanji: "すごいね。今の子供は何でもスマホに頼っているよ。", en: "That's impressive. Kids today rely on their phones for everything." } },
      { id: "e6", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "そうだね。あのころから テクノロジーは すごく かわったよ。", jaKanji: "そうだね。あの頃からテクノロジーはすごく変わったよ。", en: "Exactly. Technology has changed so much since then." } },
      { id: "e7", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "りょうしんの せだいは どうだったの？", jaKanji: "両親の世代はどうだったの？", en: "What about your parents' generation?" } },
      { id: "e8", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "りょうしんは テレビが ない じだいに そだっていて、こんな せいかつは けいけんしたことが なかったんだって。", jaKanji: "両親はテレビがない時代に育っていて、こんな生活は経験した事がなかったんだって。", en: "My parents had grown up without television. They had never experienced anything like this." } },
      { id: "e9", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "せだいの ギャップが おおきいね。", jaKanji: "世代のギャップが大きいね。", en: "That's a big gap between generations." } },
      { id: "e10", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "うん。かちかんも あのころに くらべて おおきく かわったよ。", jaKanji: "うん。価値観もあの頃に比べて大きく変わったよ。", en: "It is. Our values have also changed a lot compared to back then." } },
      { id: "e11", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "しつけも かわったと おもう？", jaKanji: "しつけも変わったと思う？", en: "Do you think upbringing has changed too?" } },
      { id: "e12", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "ぜったい。さいきんの おやは むかしより きびしくないと おもうよ。", jaKanji: "絶対。最近の親は昔より厳しくないと思うよ。", en: "Definitely. Parents nowadays seem less strict than they used to be." } },
      { id: "e13", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "むかしと いまを くらべるのは おもしろいね。", jaKanji: "昔と今を比べるのは面白いね。", en: "It's interesting to compare how things used to be." } },
      { id: "e14", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "うん、どれだけ かわったか、あらためて かんじるよ。", jaKanji: "うん、どれだけ変わったか、改めて感じるよ。", en: "Yeah, it makes you really feel how much has changed." } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ていた／〜たことが なかった：じゅんばんと たいひ", jaKanji: "〜ていた／〜た事がなかった：順番と対比", en: "~Te Ita / ~Ta Koto ga Nakatta: Sequencing and Contrast" },
      explanation: {
        ja: "topic-b1-01・b1-02で しょうかいした「〜ていた」に くわえて、この トピックでは「〜たことが なかった」（けいけんが なかった ことを あらわす、けいけん の ひていけい）を つかいます。「じゅっさいに なる ころには、おおきな まちを みたことが なかった」の ように、あるじてんまで けいけんが なかった ことを しめす ときに つかいます。この かたちは とくに、こどもじだいと いまを たいひする ときや、せだいの ちがいを かたる ときに よく つかわれます。",
        jaKanji: "topic-b1-01・b1-02で紹介した「〜ていた」に加えて、このトピックでは「〜た事がなかった」（経験がなかった事を表す、経験の否定形）を使います。「10歳になる頃には、大きな街を見た事がなかった」のように、ある時点まで経験がなかった事を示す時に使います。この形は特に、子供時代と今を対比する時や、世代の違いを語る時によく使われます。",
        en: "In addition to ~te ita (introduced in topic-b1-01 and b1-02), this topic uses ~ta koto ga nakatta — the negative-experiential counterpart, expressing that something had never been experienced by a certain point. As in \"By the time I turned ten, I had never seen a big city,\" this form shows a lack of experience up to a reference point in the past. It's especially common when contrasting childhood with the present or describing generational differences."
      },
      chunks: [
        { id: "g1", translations: { ja: "じゅっさいに なる ころには、すでに さんかい ひっこしていた。", jaKanji: "10歳になる頃には、既に3回引っ越していた。", en: "By the time I turned ten, I had already moved three times." } },
        { id: "g2", translations: { ja: "ひっこす まえは、おおきな まちを みたことが なかった。", jaKanji: "引っ越す前は、大きな街を見た事がなかった。", en: "Before we moved, I had never seen a big city." } },
        { id: "g3", translations: { ja: "こうこうせいに なる ころには、ははは すでに あまく なっていた。", jaKanji: "高校生になる頃には、母は既に甘くなっていた。", en: "By the time I was in high school, my mother had already become more lenient." } },
        { id: "g4", translations: { ja: "こどもの ころ、おそくまで そとに いたことが なかった。", jaKanji: "子供の頃、遅くまで外にいた事がなかった。", en: "As a kid, I had never stayed out late." } },
        { id: "g5", translations: { ja: "がっこうに はいる まえに、そふぼが いろいろな ことを おしえて くれていた。", jaKanji: "学校に入る前に、祖父母が色々な事を教えてくれていた。", en: "Before I started school, my grandparents had already taught me a lot of things." } },
        { id: "g6", translations: { ja: "じゅうだいの ころ、スマホに さわったことが なかった。", jaKanji: "10代の頃、スマホに触った事がなかった。", en: "As a teenager, I had never touched a smartphone." } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
      groupLabels: {
        nostalgia1: { ja: "おもいでに かんする めいしの アクセント", en: "Pitch Accent on Nostalgia Nouns" },
        nostalgia2: { ja: "おもいでに かんする めいしの アクセント", en: "Pitch Accent on Nostalgia Nouns" },
        contrast1: { ja: "「あのころ」の ひょうげん", en: "\"Back Then\" Expressions" },
        contrast2: { ja: "「いま」の ひょうげん", en: "\"Nowadays\" Expressions" }
      },
      items: [
        { id: "n1_1", category: "nostalgia1", translations: { ja: "おもいで", en: "memory, recollection" } },
        { id: "n1_2", category: "nostalgia1", translations: { ja: "こきょう", en: "hometown" } },
        { id: "n1_3", category: "nostalgia1", translations: { ja: "じだい", en: "era, period" } },
        { id: "n1_4", category: "nostalgia1", translations: { ja: "きおく", en: "memory (mental)" } },
        { id: "n2_1", category: "nostalgia2", translations: { ja: "どうよう", en: "children's song" } },
        { id: "n2_2", category: "nostalgia2", translations: { ja: "ゆめ", en: "dream" } },
        { id: "n2_3", category: "nostalgia2", translations: { ja: "きぼう", en: "hope" } },
        { id: "n2_4", category: "nostalgia2", translations: { ja: "せいちょう", en: "growth" } },
        { id: "c1_1", category: "contrast1", translations: { ja: "あのころ", en: "back then" } },
        { id: "c1_2", category: "contrast1", translations: { ja: "むかし", en: "long ago" } },
        { id: "c1_3", category: "contrast1", translations: { ja: "とうじ", en: "at that time" } },
        { id: "c1_4", category: "contrast1", translations: { ja: "いぜん", en: "previously" } },
        { id: "c2_1", category: "contrast2", translations: { ja: "さいきん", en: "recently" } },
        { id: "c2_2", category: "contrast2", translations: { ja: "げんざい", en: "currently" } },
        { id: "c2_3", category: "contrast2", translations: { ja: "いまどき", en: "nowadays" } },
        { id: "c2_4", category: "contrast2", translations: { ja: "いま", en: "now" } }
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
          nostalgia1: { ja: "おもいでに かんする めいしの アクセント", en: "Pitch Accent on Nostalgia Nouns" },
          nostalgia2: { ja: "おもいでに かんする めいしの アクセント", en: "Pitch Accent on Nostalgia Nouns" },
          contrast1: { ja: "「あのころ」の ひょうげん", en: "\"Back Then\" Expressions" },
          contrast2: { ja: "「いま」の ひょうげん", en: "\"Nowadays\" Expressions" }
        },
        items: [
          { id: "n1_5", category: "nostalgia1", translations: { ja: "げんふうけい", en: "old familiar scenery" } },
          { id: "n1_6", category: "nostalgia1", translations: { ja: "しゃしん", en: "photograph" } },
          { id: "n1_7", category: "nostalgia1", translations: { ja: "にっき", en: "diary" } },
          { id: "n1_8", category: "nostalgia1", translations: { ja: "たからもの", en: "treasure, cherished item" } },
          { id: "n1_9", category: "nostalgia1", translations: { ja: "でんとう", en: "tradition" } },
          { id: "n1_10", category: "nostalgia1", translations: { ja: "しゅうかん", en: "custom, habit" } },
          { id: "n1_11", category: "nostalgia1", translations: { ja: "まつり", en: "festival" } },
          { id: "n1_12", category: "nostalgia1", translations: { ja: "きせつ", en: "season" } },
          { id: "n1_13", category: "nostalgia1", translations: { ja: "がっこう", en: "school" } },
          { id: "n1_14", category: "nostalgia1", translations: { ja: "せんせい", en: "teacher" } },
          { id: "n1_15", category: "nostalgia1", translations: { ja: "きょうしつ", en: "classroom" } },
          { id: "n1_16", category: "nostalgia1", translations: { ja: "こうてい", en: "schoolyard" } },
          { id: "n1_17", category: "nostalgia1", translations: { ja: "つうがくろ", en: "route to school" } },
          { id: "n1_18", category: "nostalgia1", translations: { ja: "らんどせる", en: "school backpack" } },

          { id: "n2_5", category: "nostalgia2", translations: { ja: "あこがれ", en: "admiration, longing" } },
          { id: "n2_6", category: "nostalgia2", translations: { ja: "しょうらい", en: "the future" } },
          { id: "n2_7", category: "nostalgia2", translations: { ja: "こうきしん", en: "curiosity" } },
          { id: "n2_8", category: "nostalgia2", translations: { ja: "そうぞうりょく", en: "imagination" } },
          { id: "n2_9", category: "nostalgia2", translations: { ja: "ゆうじょう", en: "friendship" } },
          { id: "n2_10", category: "nostalgia2", translations: { ja: "きずな", en: "bond" } },
          { id: "n2_11", category: "nostalgia2", translations: { ja: "あんしん", en: "peace of mind" } },
          { id: "n2_12", category: "nostalgia2", translations: { ja: "じゆう", en: "freedom" } },
          { id: "n2_13", category: "nostalgia2", translations: { ja: "ぼうけん", en: "adventure" } },
          { id: "n2_14", category: "nostalgia2", translations: { ja: "はっけん", en: "discovery" } },
          { id: "n2_15", category: "nostalgia2", translations: { ja: "どりょく", en: "effort" } },
          { id: "n2_16", category: "nostalgia2", translations: { ja: "じしん", en: "confidence" } },
          { id: "n2_17", category: "nostalgia2", translations: { ja: "えがお", en: "smile" } },
          { id: "n2_18", category: "nostalgia2", translations: { ja: "げんき", en: "energy, health" } },

          { id: "c1_5", category: "contrast1", translations: { ja: "とおい むかし", en: "the distant past" } },
          { id: "c1_6", category: "contrast1", translations: { ja: "せんじつ", en: "the other day" } },
          { id: "c1_7", category: "contrast1", translations: { ja: "かつて", en: "once, formerly" } },
          { id: "c1_8", category: "contrast1", translations: { ja: "ずっと まえ", en: "a long time ago" } },
          { id: "c1_9", category: "contrast1", translations: { ja: "こどもの ころ", en: "when I was a child" } },
          { id: "c1_10", category: "contrast1", translations: { ja: "わかい ころ", en: "in my younger days" } },
          { id: "c1_11", category: "contrast1", translations: { ja: "しょうねんじだい", en: "boyhood days" } },
          { id: "c1_12", category: "contrast1", translations: { ja: "がくせいじだい", en: "one's student days" } },
          { id: "c1_13", category: "contrast1", translations: { ja: "せんぜん", en: "beforehand, previously" } },
          { id: "c1_14", category: "contrast1", translations: { ja: "いぜんは", en: "formerly" } },
          { id: "c1_15", category: "contrast1", translations: { ja: "おさない ころ", en: "when I was little" } },
          { id: "c1_16", category: "contrast1", translations: { ja: "むかしから", en: "since long ago" } },
          { id: "c1_17", category: "contrast1", translations: { ja: "はるか まえ", en: "far in the past" } },
          { id: "c1_18", category: "contrast1", translations: { ja: "そのとうじ", en: "at that particular time" } },

          { id: "c2_5", category: "contrast2", translations: { ja: "きょうび", en: "these days" } },
          { id: "c2_6", category: "contrast2", translations: { ja: "このごろ", en: "recently" } },
          { id: "c2_7", category: "contrast2", translations: { ja: "こんにち", en: "nowadays, today" } },
          { id: "c2_8", category: "contrast2", translations: { ja: "いまでは", en: "these days, now" } },
          { id: "c2_9", category: "contrast2", translations: { ja: "とうじつ", en: "on the day itself" } },
          { id: "c2_10", category: "contrast2", translations: { ja: "みらい", en: "the future" } },
          { id: "c2_11", category: "contrast2", translations: { ja: "こんご", en: "from now on" } },
          { id: "c2_12", category: "contrast2", translations: { ja: "いっぽう", en: "on the other hand" } },
          { id: "c2_13", category: "contrast2", translations: { ja: "たいして", en: "in contrast to" } },
          { id: "c2_14", category: "contrast2", translations: { ja: "それにたいし", en: "in contrast, whereas" } },
          { id: "c2_15", category: "contrast2", translations: { ja: "げんだい", en: "the present age" } },
          { id: "c2_16", category: "contrast2", translations: { ja: "いまや", en: "now, at this point" } },
          { id: "c2_17", category: "contrast2", translations: { ja: "とうめん", en: "for the time being" } },
          { id: "c2_18", category: "contrast2", translations: { ja: "これから さき", en: "from here on" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-teita",
        title: { ja: "れんしゅう：〜ていた", jaKanji: "練習：〜ていた", en: "Practice: ~Te Ita" },
        spokenIntro: {
          ja: "つぎは、「〜ていた」を つかった れいぶんを れんしゅうしましょう。",
          jaKanji: "次は、「〜ていた」を使った例文を練習しましょう。",
          en: "Next, let's practice example sentences using ~te ita."
        },
        lines: [
          { id: "ti1", translations: { ja: "しょうがくせいに なる ころには、じてんしゃに のれるように なっていた。", jaKanji: "小学生になる頃には、自転車に乗れる様になっていた。", en: "By the time I started elementary school, I had already learned to ride a bike." } },
          { id: "ti2", translations: { ja: "ちゅうがくせいに なる まえに、すでに えいごを ならっていた。", jaKanji: "中学生になる前に、既に英語を習っていた。", en: "Before starting middle school, I had already been learning English." } },
          { id: "ti3", translations: { ja: "そのころ、まいにち こうえんで あそんでいた。", jaKanji: "その頃、毎日公園で遊んでいた。", en: "Back then, I had been playing at the park every day." } },
          { id: "ti4", translations: { ja: "そふぼは わたしを かわいがってくれていた。", jaKanji: "祖父母は私をかわいがってくれていた。", en: "My grandparents had been very fond of me." } },
          { id: "ti5", translations: { ja: "こうこうを そつぎょうする ころには、しょうらいの ゆめが きまっていた。", jaKanji: "高校を卒業する頃には、将来の夢が決まっていた。", en: "By the time I graduated high school, my future dream had already been decided." } },
          { id: "ti6", translations: { ja: "あのころ、まいばん かぞくで しょくじを していた。", jaKanji: "あの頃、毎晩家族で食事をしていた。", en: "Back then, we had been eating dinner together as a family every night." } },
          { id: "ti7", translations: { ja: "こどもの ころ、テレビゲームに むちゅうに なっていた。", jaKanji: "子供の頃、テレビゲームに夢中になっていた。", en: "As a kid, I had been absorbed in video games." } },
          { id: "ti8", translations: { ja: "がっこうに つく ころには、あめが やんでいた。", jaKanji: "学校に着く頃には、雨が止んでいた。", en: "By the time I got to school, the rain had already stopped." } },
          { id: "ti9", translations: { ja: "しゅうまつには、いつも きんじょの こどもと あそんでいた。", jaKanji: "週末には、いつも近所の子供と遊んでいた。", en: "On weekends, I had always been playing with the neighborhood kids." } },
          { id: "ti10", translations: { ja: "おとなに なる ころには、こきょうへの きもちが かわっていた。", jaKanji: "大人になる頃には、故郷への気持ちが変わっていた。", en: "By the time I became an adult, my feelings about my hometown had changed." } }
        ]
      },
      {
        id: "grammar-drill-takotoganakatta",
        title: { ja: "れんしゅう：〜たことが なかった", jaKanji: "練習：〜た事がなかった", en: "Practice: ~Ta Koto ga Nakatta" },
        spokenIntro: {
          ja: "つぎは、「〜たことが なかった」を つかった れいぶんを れんしゅうしましょう。",
          jaKanji: "次は、「〜た事がなかった」を使った例文を練習しましょう。",
          en: "Next, let's practice example sentences using ~ta koto ga nakatta."
        },
        lines: [
          { id: "tk1", translations: { ja: "ひっこす まえは、おおきな まちを みたことが なかった。", jaKanji: "引っ越す前は、大きな街を見た事がなかった。", en: "Before we moved, I had never seen a big city." } },
          { id: "tk2", translations: { ja: "こどもの ころ、おそくまで そとに いたことが なかった。", jaKanji: "子供の頃、遅くまで外にいた事がなかった。", en: "As a kid, I had never stayed out late." } },
          { id: "tk3", translations: { ja: "じゅうだいの ころ、スマホに さわったことが なかった。", jaKanji: "10代の頃、スマホに触った事がなかった。", en: "As a teenager, I had never touched a smartphone." } },
          { id: "tk4", translations: { ja: "だいがくに はいる まえ、ひとりで りょこうしたことが なかった。", jaKanji: "大学に入る前、一人で旅行した事がなかった。", en: "Before starting university, I had never traveled alone." } },
          { id: "tk5", translations: { ja: "しゃかいじんに なる まえ、じぶんで りょうりを つくったことが なかった。", jaKanji: "社会人になる前、自分で料理を作った事がなかった。", en: "Before becoming a working adult, I had never cooked for myself." } },
          { id: "tk6", translations: { ja: "そのがっこうに はいる まで、がいこくじんと はなしたことが なかった。", jaKanji: "その学校に入るまで、外国人と話した事がなかった。", en: "Until I entered that school, I had never talked with a foreigner." } },
          { id: "tk7", translations: { ja: "おとなに なる まで、ひこうきに のったことが なかった。", jaKanji: "大人になるまで、飛行機に乗った事がなかった。", en: "Until I became an adult, I had never flown on an airplane." } },
          { id: "tk8", translations: { ja: "そのときまで、そんな けいけんを したことが なかった。", jaKanji: "その時まで、そんな経験をした事がなかった。", en: "Until that time, I had never had such an experience." } },
          { id: "tk9", translations: { ja: "しょうがっこうに はいる まで、じを かいたことが なかった。", jaKanji: "小学校に入るまで、字を書いた事がなかった。", en: "Until I started elementary school, I had never written letters." } },
          { id: "tk10", translations: { ja: "そのばしょに いく まで、うみを みたことが なかった。", jaKanji: "その場所に行くまで、海を見た事がなかった。", en: "Until I went to that place, I had never seen the ocean." } }
        ]
      }
    ]
  }
};
