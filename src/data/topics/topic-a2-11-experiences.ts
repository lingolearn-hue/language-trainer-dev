import type { TopicLesson } from "../topicTypes";

// A2 — row 13 of docs/a2-master-lesson-table-v01.md. Grammar: ~ta koto
// ga aru (past experience). Pronunciation 1/2 (ん+N, ん+S) kept exactly
// as assigned, split into 4 groups (ん+N ×2, ん+S ×2 — Japanese has no
// further natural 4-way split for these two concepts, same approach as
// topic-26's R1/R2).

export const topicExperiences: TopicLesson = {
  id: "topic-a2-11-experiences",
  lessonNumber: 11,
  level: "A2",
  topicName: {
    ja: "けいけん", jaKanji: "経験",
    en: "Experiences",
    de: "Erfahrungen",
    zh: "经历"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "けいけん", jaKanji: "経験", en: "experience", de: "Erfahrung", zh: "经验" } },
    { id: "v02", category: "noun", translations: { ja: "たいけん", jaKanji: "体験", en: "hands-on experience", de: "praktische Erfahrung", zh: "体验" } },
    { id: "v03", category: "noun", translations: { ja: "ぼうけん", jaKanji: "冒険", en: "adventure", de: "Abenteuer", zh: "冒险" } },
    { id: "v04", category: "noun", translations: { ja: "かいがい", jaKanji: "海外", en: "abroad", de: "Ausland", zh: "海外" } },
    { id: "v05", category: "noun", translations: { ja: "りゅうがく", jaKanji: "留学", en: "studying abroad", de: "Auslandsstudium", zh: "留学" } },
    { id: "v06", category: "noun", translations: { ja: "ちょうせん", jaKanji: "挑戦", en: "challenge", de: "Herausforderung", zh: "挑战" } },
    { id: "v07", category: "noun", translations: { ja: "しっぱい", jaKanji: "失敗", en: "failure", de: "Misserfolg", zh: "失败" } },
    { id: "v08", category: "noun", translations: { ja: "せいこう", jaKanji: "成功", en: "success", de: "Erfolg", zh: "成功" } },
    { id: "v09", category: "noun", translations: { ja: "おどろき", jaKanji: "驚き", en: "surprise", de: "Überraschung", zh: "惊讶" } },
    { id: "v10", category: "noun", translations: { ja: "かんどう", jaKanji: "感動", en: "being moved, touched", de: "Rührung", zh: "感动" } },
    { id: "v11", category: "noun", translations: { ja: "きおく", jaKanji: "記憶", en: "memory", de: "Erinnerung", zh: "记忆" } },
    { id: "v12", category: "verb", translations: { ja: "けいけんする", jaKanji: "経験する", en: "to experience", de: "erfahren", zh: "经历" } },
    { id: "v13", category: "verb", translations: { ja: "たいけんする", jaKanji: "体験する", en: "to have a hands-on experience", de: "praktisch erleben", zh: "体验" } },
    { id: "v14", category: "verb", translations: { ja: "ちょうせんする", jaKanji: "挑戦する", en: "to challenge oneself", de: "sich herausfordern", zh: "挑战" } },
    { id: "v15", category: "verb", translations: { ja: "せいこうする", jaKanji: "成功する", en: "to succeed", de: "erfolgreich sein", zh: "成功" } },
    { id: "v16", category: "verb", translations: { ja: "しっぱいする", jaKanji: "失敗する", en: "to fail", de: "scheitern", zh: "失败" } },
    { id: "v17", category: "verb", translations: { ja: "おどろく", jaKanji: "驚く", en: "to be surprised", de: "überrascht sein", zh: "惊讶" } },
    { id: "v18", category: "verb", translations: { ja: "かんどうする", jaKanji: "感動する", en: "to be moved, touched", de: "gerührt sein", zh: "感动" } },
    { id: "v19", category: "verb", translations: { ja: "りゅうがくする", jaKanji: "留学する", en: "to study abroad", de: "im Ausland studieren", zh: "留学" } },
    { id: "v20", category: "verb", translations: { ja: "のぼる", jaKanji: "登る", en: "to climb", de: "besteigen", zh: "攀登" } },
    { id: "v21", category: "verb", translations: { ja: "とまる", jaKanji: "泊まる", en: "to stay overnight", de: "übernachten", zh: "住宿" } },
    { id: "v22", category: "verb", translations: { ja: "ためす", jaKanji: "試す", en: "to try, test", de: "ausprobieren", zh: "尝试" } },
    { id: "v23", category: "adjective", translations: { ja: "わすれられない", jaKanji: "忘れられない", en: "unforgettable", de: "unvergesslich", zh: "难忘的" } },
    { id: "v24", category: "adjective", translations: { ja: "めずらしい", jaKanji: "珍しい", en: "rare, unusual", de: "selten, ungewöhnlich", zh: "稀奇的" } },
    { id: "v25", category: "adjective", translations: { ja: "すばらしい", jaKanji: "素晴らしい", en: "wonderful", de: "wunderbar", zh: "精彩的" } },
    { id: "v26", category: "adjective", translations: { ja: "こわい", jaKanji: "怖い", en: "scary", de: "gruselig", zh: "可怕的" } },
    { id: "v27", category: "adjective", translations: { ja: "たのしい", jaKanji: "楽しい", en: "fun", de: "lustig", zh: "开心的" } },
    { id: "v28", category: "noun", translations: { ja: "いちど", jaKanji: "一度", en: "once, one time", de: "einmal", zh: "一次" } },
    { id: "v29", category: "noun", translations: { ja: "はじめて", jaKanji: "初めて", en: "for the first time", de: "zum ersten Mal", zh: "第一次" } },
    { id: "v30", category: "noun", translations: { ja: "いどう", jaKanji: "移動", en: "moving, transfer", de: "Umzug, Versetzung", zh: "调动" } },
    { id: "v31", category: "adverb", translations: { ja: "なんと", jaKanji: "何と", en: "what a... (exclamatory)", de: "was für... (ausrufend)", zh: "多么……（感叹）" } },
    { id: "v32", category: "adverb", translations: { ja: "いがいと", jaKanji: "意外と", en: "surprisingly", de: "überraschenderweise", zh: "出乎意料地" } }
  ],
  dialogueA: {
    title: { ja: "してみた ことを はなす", jaKanji: "してみたことを話す", en: "Talking About Things You've Done", de: "Über Dinge sprechen, die man getan hat", zh: "聊聊做过的事情" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "がいこくに いったことが ありますか？", jaKanji: "外国に行ったことがありますか？", en: "Have you ever been abroad?", de: "Waren Sie schon einmal im Ausland?", zh: "去过国外吗？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、いちど りゅうがくした ことが あります。", jaKanji: "はい、一度留学したことがあります。", en: "Yes, I've studied abroad once.", de: "Ja, ich habe einmal im Ausland studiert.", zh: "是的，留过一次学。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "どんな けいけんでしたか？", jaKanji: "どんな経験でしたか？", en: "What kind of experience was it?", de: "Was für eine Erfahrung war das?", zh: "是什么样的经历？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はじめて ひとりで くらして、たいへんな ことも ありましたが、わすれられない けいけんです。", jaKanji: "初めて一人で暮らして、大変なこともありましたが、忘れられない経験です。", en: "It was my first time living alone, and there were tough moments, but it's an unforgettable experience.", de: "Es war das erste Mal, dass ich allein gelebt habe, und es gab schwierige Momente, aber es ist eine unvergessliche Erfahrung.", zh: "第一次一个人生活，虽然也有很辛苦的时候，但是是难忘的经历。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しっぱいした ことも ありますか？", jaKanji: "失敗したこともありますか？", en: "Have you had failures too?", de: "Hatten Sie auch Misserfolge?", zh: "也有失败过吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、あります。でも、しっぱいから おおくの ことを まなびました。", jaKanji: "はい、あります。でも、失敗から多くのことを学びました。", en: "Yes, I have. But I learned a lot from the failures.", de: "Ja, das hatte ich. Aber ich habe viel aus den Misserfolgen gelernt.", zh: "是的，有过。不过从失败中学到了很多东西。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "やまに のぼった ことは ありますか？", jaKanji: "山に登ったことはありますか？", en: "Have you ever climbed a mountain?", de: "Haben Sie schon einmal einen Berg bestiegen?", zh: "爬过山吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、りゅうがくちゅうに たかい やまに のぼった ことが あります。すばらしい けしきでした。", jaKanji: "はい、留学中に高い山に登ったことがあります。素晴らしい景色でした。", en: "Yes, I climbed a tall mountain while studying abroad. The scenery was wonderful.", de: "Ja, ich habe während meines Auslandsstudiums einen hohen Berg bestiegen. Die Landschaft war wunderbar.", zh: "是的，留学期间爬过一座高山。风景很棒。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こわい けいけんは ありましたか？", jaKanji: "怖い経験はありましたか？", en: "Did you have any scary experiences?", de: "Hatten Sie auch gruselige Erfahrungen?", zh: "有过可怕的经历吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ひとりで やまに とまった とき、すこし こわかったです。", jaKanji: "一人で山に泊まった時、少し怖かったです。", en: "When I stayed overnight alone in the mountains, it was a bit scary.", de: "Als ich allein in den Bergen übernachtet habe, war es etwas gruselig.", zh: "一个人在山里过夜的时候，有点可怕。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "めずらしい たべものを たべた ことは ありますか？", jaKanji: "珍しい食べ物を食べたことはありますか？", en: "Have you eaten any unusual foods?", de: "Haben Sie schon einmal ungewöhnliches Essen probiert?", zh: "吃过稀奇的食物吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、たくさん ためして みました。おどろく あじも ありました。", jaKanji: "はい、たくさん試してみました。驚く味もありました。", en: "Yes, I tried a lot of things. There were surprising flavors too.", de: "Ja, ich habe viele Dinge ausprobiert. Es gab auch überraschende Geschmäcker.", zh: "是的，尝试了很多。也有令人惊讶的味道。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "また ちょうせんして みたい ことは ありますか？", jaKanji: "また挑戦してみたいことはありますか？", en: "Is there anything you'd like to challenge yourself with again?", de: "Gibt es etwas, das Sie sich noch einmal zutrauen möchten?", zh: "还有想再挑战的事情吗？" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、べつの くにでも たいけんして みたいです。", jaKanji: "はい、別の国でも体験してみたいです。", en: "Yes, I'd like to have experiences in another country too.", de: "Ja, ich möchte auch in einem anderen Land Erfahrungen sammeln.", zh: "是的，也想在别的国家体验一下。" } }
    ]
  },
  dialogueB: {
    title: { ja: "けいけんを くらべる", jaKanji: "経験を比べる", en: "Comparing Experiences", de: "Erfahrungen vergleichen", zh: "比较经历" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "うみで およいだ ことが ありますか？", jaKanji: "海で泳いだことがありますか？", en: "Have you ever swum in the sea?", de: "Sind Sie schon einmal im Meer geschwommen?", zh: "在海里游过泳吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、なんども あります。あなたは？", jaKanji: "はい、何度もあります。あなたは？", en: "Yes, many times. What about you?", de: "Ja, mehrmals. Und Sie?", zh: "是的，很多次了。你呢？" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "わたしは いちども ありません。おやまでは のぼった ことが あります。", jaKanji: "私は一度もありません。お山では登ったことがあります。", en: "I've never done it. But I have climbed mountains.", de: "Ich habe das noch nie gemacht. Aber ich bin schon Berge bestiegen.", zh: "我一次也没有。不过爬过山。" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "どんな やまに のぼった ことが ありますか？", jaKanji: "どんな山に登ったことがありますか？", en: "What kind of mountains have you climbed?", de: "Was für Berge haben Sie bestiegen?", zh: "爬过什么样的山？" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たかい やまに いちど のぼった ことが あります。とても つかれましたが、かんどうしました。", jaKanji: "高い山に一度登ったことがあります。とても疲れましたが、感動しました。", en: "I've climbed a tall mountain once. It was very tiring, but I was moved.", de: "Ich habe einmal einen hohen Berg bestiegen. Es war sehr anstrengend, aber ich war bewegt.", zh: "曾经爬过一次高山。虽然很累，但很感动。" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "かいがいに いった ことは ありますか？", jaKanji: "海外に行ったことはありますか？", en: "Have you been abroad?", de: "Waren Sie schon im Ausland?", zh: "去过国外吗？" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "はい、りゅうがくした ことが あります。あなたの ほうが けいけんが おおいですね。", jaKanji: "はい、留学したことがあります。あなたのほうが経験が多いですね。", en: "Yes, I've studied abroad. You seem to have more experiences than me.", de: "Ja, ich habe im Ausland studiert. Sie scheinen mehr Erfahrungen zu haben als ich.", zh: "是的，留过学。你的经历好像更多呢。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そんな ことは ないですよ。しっぱいした ことも たくさん あります。", jaKanji: "そんなことはないですよ。失敗したこともたくさんあります。", en: "That's not true. I've had a lot of failures too.", de: "Das stimmt nicht. Ich hatte auch viele Misserfolge.", zh: "没有的事。也有过很多失败。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "こわい けいけんを した ことは ありますか？", jaKanji: "怖い経験をしたことはありますか？", en: "Have you had a scary experience?", de: "Hatten Sie eine gruselige Erfahrung?", zh: "有过可怕的经历吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、たいふうに あった ことが あります。ほんとうに こわかったです。", jaKanji: "はい、台風に遭ったことがあります。本当に怖かったです。", en: "Yes, I've experienced a typhoon. It was really scary.", de: "Ja, ich habe einen Taifun erlebt. Das war wirklich gruselig.", zh: "是的，遇到过台风。真的很可怕。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たのしかった きおくは ありますか？", jaKanji: "楽しかった記憶はありますか？", en: "Do you have any fun memories?", de: "Haben Sie schöne Erinnerungen?", zh: "有开心的记忆吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、ぼうけんの ような りょこうを した ことが あります。とても たのしかったです。", jaKanji: "はい、冒険のような旅行をしたことがあります。とても楽しかったです。", en: "Yes, I've had a trip that felt like an adventure. It was very fun.", de: "Ja, ich hatte eine Reise, die sich wie ein Abenteuer anfühlte. Es war sehr lustig.", zh: "是的，有过像冒险一样的旅行。非常开心。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "せいこうしたと おもう けいけんは？", jaKanji: "成功したと思う経験は？", en: "What experience do you think was a success?", de: "Welche Erfahrung war Ihrer Meinung nach ein Erfolg?", zh: "你觉得成功的经历是什么？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "あたらしい ことに ちょうせんして、せいこうした ときです。", jaKanji: "新しいことに挑戦して、成功した時です。", en: "It was when I challenged myself with something new and succeeded.", de: "Es war, als ich mich einer neuen Sache gestellt habe und erfolgreich war.", zh: "是挑战新事物并成功的时候。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜たことがある：けいけんを あらわす", jaKanji: "〜たことがある：経験を表す", en: "~Ta Koto Ga Aru: Expressing Past Experience", de: "~Ta Koto Ga Aru: Vergangene Erfahrung ausdrücken", zh: "〜たことがある：表示经历" },
      explanation: {
        ja: "「〜たことがある」は どうしの た-けい（ふつうけいの かこけい）に つけて、「いままでに その けいけんが ある」ことを あらわします。「〜たことが ない」は「その けいけんが ない」ことを いいます。ひとの けいけんの ゆうむを たずねたり つたえたり する ときに つかいます。", jaKanji: "「〜たことがある」は動詞のた形（普通形の過去形）に付けて、「今までにその経験がある」ことを表します。「〜たことがない」は「その経験がない」ことを言います。人の経験の有無を尋ねたり伝えたりするときに使います。",
        en: "~ta koto ga aru attaches to a verb's ta-form (plain past) to express \"I have the experience of having done that before.\" ~ta koto ga nai negates it — \"I've never had that experience.\" Used to ask about or state someone's past experiences.",
        de: "~ta koto ga aru wird an die ta-Form eines Verbs (Plain-Vergangenheit) angehängt, um auszudrücken: \"Ich habe die Erfahrung gemacht, das schon einmal getan zu haben.\" ~ta koto ga nai verneint dies — \"Ich habe diese Erfahrung noch nie gemacht.\" Wird verwendet, um nach vergangenen Erfahrungen zu fragen oder sie zu erzählen.",
        zh: "〜たことがある接在动词た形（简体过去式）后，表示\"以前有过做那件事的经历\"。〜たことがない是否定形式——\"从来没有过那样的经历\"。用于询问或陈述某人过去的经历。"
      },
      chunks: [
        { id: "g1", translations: { ja: "にほんに いったことが あります。", jaKanji: "日本に行ったことがあります。", en: "I have been to Japan.", de: "Ich war schon einmal in Japan.", zh: "我去过日本。" } },
        { id: "g2", translations: { ja: "うまに のったことが ありますか。", jaKanji: "馬に乗ったことがありますか。", en: "Have you ever ridden a horse?", de: "Sind Sie schon einmal auf einem Pferd geritten?", zh: "你骑过马吗？" } },
        { id: "g3", translations: { ja: "さしみを たべたことが ありません。", jaKanji: "刺身を食べたことがありません。", en: "I have never eaten sashimi.", de: "Ich habe noch nie Sashimi gegessen.", zh: "我从来没吃过生鱼片。" } },
        { id: "g4", translations: { ja: "とうきょうタワーに のぼったことが あります。", jaKanji: "東京タワーに登ったことがあります。", en: "I have climbed Tokyo Tower.", de: "Ich bin schon auf den Tokyo Tower gestiegen.", zh: "我登过东京塔。" } },
        { id: "g5", translations: { ja: "がいこくで はたらいたことが あります。", jaKanji: "外国で働いたことがあります。", en: "I have worked abroad.", de: "Ich habe schon im Ausland gearbeitet.", zh: "我在国外工作过。" } },
        { id: "g6", translations: { ja: "そんな けいけんは したことが ありません。", jaKanji: "そんな経験はしたことがありません。", en: "I have never had such an experience.", de: "Eine solche Erfahrung habe ich noch nie gemacht.", zh: "我从来没有过那样的经历。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        nn1: { ja: "ん+N", en: "ん+N", de: "ん+N", zh: "ん+N" },
        nn2: { ja: "ん+N", en: "ん+N", de: "ん+N", zh: "ん+N" },
        ns1: { ja: "ん+S", en: "ん+S", de: "ん+S", zh: "ん+S" },
        ns2: { ja: "ん+S", en: "ん+S", de: "ん+S", zh: "ん+S" }
      },
      items: [
        { id: "nn1_1", category: "nn1", translations: { ja: "おんな", en: "woman", de: "Frau", zh: "女人" } },
        { id: "nn1_2", category: "nn1", translations: { ja: "こんな", en: "this kind of", de: "so eine Art von", zh: "这种" } },
        { id: "nn1_3", category: "nn1", translations: { ja: "みんな", en: "everyone", de: "alle", zh: "大家" } },
        { id: "nn1_4", category: "nn1", translations: { ja: "あんない", en: "guide, information", de: "Führung, Information", zh: "向导，介绍" } },
        { id: "nn2_1", category: "nn2", translations: { ja: "きんにく", en: "muscle", de: "Muskel", zh: "肌肉" } },
        { id: "nn2_2", category: "nn2", translations: { ja: "かんねん", en: "concept, idea", de: "Konzept", zh: "观念" } },
        { id: "nn2_3", category: "nn2", translations: { ja: "ほんにん", en: "the person themself", de: "die Person selbst", zh: "本人" } },
        { id: "nn2_4", category: "nn2", translations: { ja: "にんにく", en: "garlic", de: "Knoblauch", zh: "大蒜" } },
        { id: "ns1_1", category: "ns1", translations: { ja: "おんせん", en: "hot spring", de: "heiße Quelle", zh: "温泉" } },
        { id: "ns1_2", category: "ns1", translations: { ja: "さんせい", en: "agreement", de: "Zustimmung", zh: "赞成" } },
        { id: "ns1_3", category: "ns1", translations: { ja: "てんさい", en: "genius", de: "Genie", zh: "天才" } },
        { id: "ns1_4", category: "ns1", translations: { ja: "せんせい", en: "teacher", de: "Lehrer(in)", zh: "老师" } },
        { id: "ns2_1", category: "ns2", translations: { ja: "かんそう", en: "impression, dryness", de: "Eindruck, Trockenheit", zh: "感想，干燥" } },
        { id: "ns2_2", category: "ns2", translations: { ja: "さんすう", en: "arithmetic", de: "Rechnen", zh: "算术" } },
        { id: "ns2_3", category: "ns2", translations: { ja: "えんそく", en: "school trip, excursion", de: "Schulausflug", zh: "郊游" } },
        { id: "ns2_4", category: "ns2", translations: { ja: "しんせつ", en: "kind", de: "freundlich", zh: "亲切" } }
      ]
    }
  },
  pronunciationDrills: {
    ja: [
      {
        id: "sound-drill",
        title: {
          ja: "はつおんの れんしゅう２",
          en: "Pronunciation Practice 2",
          de: "Aussprachetraining 2",
          zh: "发音练习2"
        },
        spokenIntro: {
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          en: "Next, let's practice with a lot more examples.",
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          nn1: { ja: "ん+N", en: "ん+N", de: "ん+N", zh: "ん+N" },
          nn2: { ja: "ん+N", en: "ん+N", de: "ん+N", zh: "ん+N" },
          ns1: { ja: "ん+S", en: "ん+S", de: "ん+S", zh: "ん+S" },
          ns2: { ja: "ん+S", en: "ん+S", de: "ん+S", zh: "ん+S" }
        },
        items: [
          { id: "nn1_5", category: "nn1", translations: { ja: "たんにん", en: "homeroom teacher", de: "Klassenlehrer(in)", zh: "班主任" } },
          { id: "nn1_6", category: "nn1", translations: { ja: "しんねん", en: "New Year", de: "Neujahr", zh: "新年" } },
          { id: "nn1_7", category: "nn1", translations: { ja: "かんぬし", en: "Shinto priest", de: "Shinto-Priester", zh: "神主" } },
          { id: "nn1_8", category: "nn1", translations: { ja: "あんのじょう", en: "as expected", de: "wie erwartet", zh: "果然" } },
          { id: "nn1_9", category: "nn1", translations: { ja: "たんのう", en: "proficient, satisfied", de: "versiert, zufrieden", zh: "满足，擅长" } },
          { id: "nn1_10", category: "nn1", translations: { ja: "きんねん", en: "recent years", de: "letzte Jahre", zh: "近年" } },
          { id: "nn1_11", category: "nn1", translations: { ja: "れんにゅう", en: "condensed milk", de: "Kondensmilch", zh: "炼乳" } },
          { id: "nn1_12", category: "nn1", translations: { ja: "がんねん", en: "first year of an era", de: "erstes Jahr einer Ära", zh: "元年" } },
          { id: "nn1_13", category: "nn1", translations: { ja: "なんにん", en: "how many people", de: "wie viele Personen", zh: "几个人" } },
          { id: "nn1_14", category: "nn1", translations: { ja: "はんにん", en: "culprit", de: "Täter(in)", zh: "犯人" } },

          { id: "nn2_5", category: "nn2", translations: { ja: "だんな", en: "husband, master", de: "Ehemann, Herr", zh: "丈夫" } },
          { id: "nn2_6", category: "nn2", translations: { ja: "けんない", en: "within the zone", de: "innerhalb des Bereichs", zh: "范围内" } },
          { id: "nn2_7", category: "nn2", translations: { ja: "えんにち", en: "festival day", de: "Festtag", zh: "庙会日" } },
          { id: "nn2_8", category: "nn2", translations: { ja: "さんにん", en: "three people", de: "drei Personen", zh: "三个人" } },
          { id: "nn2_9", category: "nn2", translations: { ja: "なんの", en: "what kind of", de: "was für ein", zh: "什么样的" } },
          { id: "nn2_10", category: "nn2", translations: { ja: "そんな", en: "that kind of", de: "so eine Art von", zh: "那种" } },
          { id: "nn2_11", category: "nn2", translations: { ja: "あんな", en: "that kind of", de: "so eine Art von", zh: "那样的" } },
          { id: "nn2_12", category: "nn2", translations: { ja: "まんなか", en: "middle, center", de: "Mitte", zh: "正中间" } },
          { id: "nn2_13", category: "nn2", translations: { ja: "うんのいい", en: "lucky", de: "glücklich", zh: "运气好" } },
          { id: "nn2_14", category: "nn2", translations: { ja: "さんねん", en: "three years", de: "drei Jahre", zh: "三年" } },

          { id: "ns1_5", category: "ns1", translations: { ja: "けんさ", en: "inspection, test", de: "Untersuchung", zh: "检查" } },
          { id: "ns1_6", category: "ns1", translations: { ja: "たんさん", en: "carbonation", de: "Kohlensäure", zh: "碳酸" } },
          { id: "ns1_7", category: "ns1", translations: { ja: "かんそうき", en: "dryer", de: "Trockner", zh: "烘干机" } },
          { id: "ns1_8", category: "ns1", translations: { ja: "えんそう", en: "musical performance", de: "musikalische Darbietung", zh: "演奏" } },
          { id: "ns1_9", category: "ns1", translations: { ja: "かんせい", en: "completion", de: "Fertigstellung", zh: "完成" } },
          { id: "ns1_10", category: "ns1", translations: { ja: "れんそう", en: "association", de: "Assoziation", zh: "联想" } },
          { id: "ns1_11", category: "ns1", translations: { ja: "さんそ", en: "oxygen", de: "Sauerstoff", zh: "氧气" } },
          { id: "ns1_12", category: "ns1", translations: { ja: "かんしゃ", en: "gratitude", de: "Dankbarkeit", zh: "感谢" } },
          { id: "ns1_13", category: "ns1", translations: { ja: "にんしき", en: "recognition, awareness", de: "Erkenntnis", zh: "认识" } },
          { id: "ns1_14", category: "ns1", translations: { ja: "はんせい", en: "reflection, regret", de: "Reflexion, Reue", zh: "反省" } },

          { id: "ns2_5", category: "ns2", translations: { ja: "せんそう", en: "war", de: "Krieg", zh: "战争" } },
          { id: "ns2_6", category: "ns2", translations: { ja: "おんし", en: "respected teacher", de: "geschätzter Lehrer", zh: "恩师" } },
          { id: "ns2_7", category: "ns2", translations: { ja: "かんそく", en: "observation", de: "Beobachtung", zh: "观测" } },
          { id: "ns2_8", category: "ns2", translations: { ja: "かんしん", en: "interest, admiration", de: "Interesse, Bewunderung", zh: "关心，佩服" } },
          { id: "ns2_9", category: "ns2", translations: { ja: "にんしょう", en: "authentication", de: "Authentifizierung", zh: "认证" } },
          { id: "ns2_10", category: "ns2", translations: { ja: "げんそ", en: "element", de: "Element", zh: "元素" } },
          { id: "ns2_11", category: "ns2", translations: { ja: "げんさく", en: "original work", de: "Originalwerk", zh: "原作" } },
          { id: "ns2_12", category: "ns2", translations: { ja: "ほんしつ", en: "essence", de: "Wesen, Essenz", zh: "本质" } },
          { id: "ns2_13", category: "ns2", translations: { ja: "せんしゅ", en: "athlete", de: "Sportler(in)", zh: "运动员" } },
          { id: "ns2_14", category: "ns2", translations: { ja: "たんしゅく", en: "shortening", de: "Verkürzung", zh: "缩短" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-takotogaaru",
        title: { ja: "れんしゅう：〜たことがある", en: "Practice: ~Ta Koto Ga Aru", de: "Übung: ~Ta Koto Ga Aru", zh: "练习：〜たことがある" },
        spokenIntro: {
          ja: "つぎは、「〜たことがある」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~ta koto ga aru.",
          de: "Als Nächstes üben wir Beispielsätze mit ~ta koto ga aru.",
          zh: "接下来，让我们练习使用「〜たことがある」的例句。"
        },
        lines: [
          { id: "tk1", translations: { ja: "にほんに いったことが あります。", jaKanji: "日本に行ったことがあります。", en: "I have been to Japan.", de: "Ich war schon einmal in Japan.", zh: "我去过日本。" } },
          { id: "tk2", translations: { ja: "うまに のったことが ありますか。", jaKanji: "馬に乗ったことがありますか。", en: "Have you ever ridden a horse?", de: "Sind Sie schon einmal auf einem Pferd geritten?", zh: "你骑过马吗？" } },
          { id: "tk3", translations: { ja: "さしみを たべたことが ありません。", jaKanji: "刺身を食べたことがありません。", en: "I have never eaten sashimi.", de: "Ich habe noch nie Sashimi gegessen.", zh: "我从来没吃过生鱼片。" } },
          { id: "tk4", translations: { ja: "とうきょうタワーに のぼったことが あります。", jaKanji: "東京タワーに登ったことがあります。", en: "I have climbed Tokyo Tower.", de: "Ich bin schon auf den Tokyo Tower gestiegen.", zh: "我登过东京塔。" } },
          { id: "tk5", translations: { ja: "がいこくで はたらいたことが あります。", jaKanji: "外国で働いたことがあります。", en: "I have worked abroad.", de: "Ich habe schon im Ausland gearbeitet.", zh: "我在国外工作过。" } },
          { id: "tk6", translations: { ja: "そんな けいけんは したことが ありません。", jaKanji: "そんな経験はしたことがありません。", en: "I have never had such an experience.", de: "Eine solche Erfahrung habe ich noch nie gemacht.", zh: "我从来没有过那样的经历。" } },
          { id: "tk7", translations: { ja: "たいふうを たいけんしたことが あります。", jaKanji: "台風を体験したことがあります。", en: "I have experienced a typhoon.", de: "Ich habe einen Taifun erlebt.", zh: "我经历过台风。" } },
          { id: "tk8", translations: { ja: "りゅうがくを ちょうせんしたことが あります。", jaKanji: "留学に挑戦したことがあります。", en: "I have taken on the challenge of studying abroad.", de: "Ich habe die Herausforderung eines Auslandsstudiums angenommen.", zh: "我挑战过留学。" } },
          { id: "tk9", translations: { ja: "しごとで しっぱいしたことが あります。", jaKanji: "仕事で失敗したことがあります。", en: "I have failed at work.", de: "Ich bin bei der Arbeit gescheitert.", zh: "我在工作中失败过。" } },
          { id: "tk10", translations: { ja: "めずらしい たべものを たべたことが あります。", jaKanji: "珍しい食べ物を食べたことがあります。", en: "I have eaten unusual food.", de: "Ich habe schon ungewöhnliches Essen probiert.", zh: "我吃过稀奇的食物。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "けいけんの うた", en: "The Experience Song", de: "Das Erfahrungslied" },
    lines: [
      { id: "sg1", translations: { ja: "いろんな くにへ いったことがある", en: "I've been to various countries", de: "Ich war schon in verschiedenen Ländern" } },
      { id: "sg2", translations: { ja: "しっぱいも せいこうも けいけんした", en: "I've experienced both failure and success", de: "Ich habe sowohl Misserfolg als auch Erfolg erlebt" } },
      { id: "sg3", translations: { ja: "わすれられない きおくが たくさん", en: "So many unforgettable memories", de: "So viele unvergessliche Erinnerungen" } },
      { id: "sg4", translations: { ja: "これからも ちょうせんしよう", en: "Let's keep challenging ourselves from here on", de: "Lass uns uns auch weiterhin herausfordern" } }
    ]
  }
};
