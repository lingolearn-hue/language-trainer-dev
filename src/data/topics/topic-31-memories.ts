import type { TopicLesson } from "../topicTypes";

// A2 — row 14 of docs/a2-master-lesson-table-v01.md. Grammar: ~toki
// (when/at the time that). Pronunciation 1/2 (R-row vs L, Short vs
// long vowels) kept exactly as assigned; R-row/L split into two
// genuine ら-row sets (Japanese has no true L phoneme, same fix as
// topics 26/28).

export const topicMemories: TopicLesson = {
  id: "topic-31-memories",
  lessonNumber: 31,
  level: "A2",
  topicName: {
    ja: "おもいで",
    en: "Memories",
    de: "Erinnerungen",
    zh: "回忆"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "こども", en: "child", de: "Kind", zh: "孩子" } },
    { id: "v02", category: "noun", translations: { ja: "こどものころ", en: "childhood days", de: "Kindheitstage", zh: "小时候" } },
    { id: "v03", category: "noun", translations: { ja: "おもいで", en: "memory", de: "Erinnerung", zh: "回忆" } },
    { id: "v04", category: "noun", translations: { ja: "にっき", en: "diary", de: "Tagebuch", zh: "日记" } },
    { id: "v05", category: "noun", translations: { ja: "たんじょうび", en: "birthday", de: "Geburtstag", zh: "生日" } },
    { id: "v06", category: "noun", translations: { ja: "じてんしゃ", en: "bicycle", de: "Fahrrad", zh: "自行车" } },
    { id: "v07", category: "noun", translations: { ja: "こうえん", en: "park", de: "Park", zh: "公园" } },
    { id: "v08", category: "noun", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程" } },
    { id: "v09", category: "noun", translations: { ja: "なつやすみ", en: "summer vacation", de: "Sommerferien", zh: "暑假" } },
    { id: "v10", category: "noun", translations: { ja: "そつぎょう", en: "graduation", de: "Abschluss", zh: "毕业" } },
    { id: "v11", category: "noun", translations: { ja: "にゅうがく", en: "school entry, enrollment", de: "Schuleintritt", zh: "入学" } },
    { id: "v12", category: "noun", translations: { ja: "ひっこし", en: "moving house", de: "Umzug", zh: "搬家" } },
    { id: "v13", category: "noun", translations: { ja: "じこ", en: "accident", de: "Unfall", zh: "事故" } },
    { id: "v14", category: "noun", translations: { ja: "むかし", en: "long ago", de: "vor langer Zeit", zh: "从前" } },
    { id: "v15", category: "noun", translations: { ja: "おとな", en: "adult", de: "Erwachsene(r)", zh: "成年人" } },
    { id: "v16", category: "verb", translations: { ja: "なく", en: "to cry", de: "weinen", zh: "哭" } },
    { id: "v17", category: "verb", translations: { ja: "わらう", en: "to laugh", de: "lachen", zh: "笑" } },
    { id: "v18", category: "verb", translations: { ja: "あそぶ", en: "to play", de: "spielen", zh: "玩" } },
    { id: "v19", category: "verb", translations: { ja: "そだつ", en: "to grow up", de: "aufwachsen", zh: "长大" } },
    { id: "v20", category: "verb", translations: { ja: "おぼえている", en: "to remember", de: "sich erinnern", zh: "记得" } },
    { id: "v21", category: "verb", translations: { ja: "わすれる", en: "to forget", de: "vergessen", zh: "忘记" } },
    { id: "v22", category: "verb", translations: { ja: "かわる", en: "to change", de: "sich verändern", zh: "改变" } },
    { id: "v23", category: "verb", translations: { ja: "こわれる", en: "to break", de: "kaputtgehen", zh: "坏掉" } },
    { id: "v24", category: "verb", translations: { ja: "ひっこす", en: "to move house", de: "umziehen", zh: "搬家" } },
    { id: "v25", category: "verb", translations: { ja: "そつぎょうする", en: "to graduate", de: "abschließen", zh: "毕业" } },
    { id: "v26", category: "verb", translations: { ja: "にゅうがくする", en: "to enter school", de: "in die Schule eintreten", zh: "入学" } },
    { id: "v27", category: "adjective", translations: { ja: "なつかしい", en: "nostalgic", de: "nostalgisch", zh: "怀念的" } },
    { id: "v28", category: "adjective", translations: { ja: "たのしい", en: "fun", de: "lustig", zh: "开心的" } },
    { id: "v29", category: "adjective", translations: { ja: "こわい", en: "scary", de: "gruselig", zh: "可怕的" } },
    { id: "v30", category: "noun", translations: { ja: "いちばん", en: "the most", de: "am meisten", zh: "最" } }
  ],
  dialogueA: {
    title: { ja: "こどものころに ついて はなす", en: "Talking About Childhood", de: "Über die Kindheit sprechen", zh: "聊聊小时候" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こどもの ときは どんな こどもでしたか？", en: "What kind of child were you when you were young?", de: "Was für ein Kind waren Sie als Sie klein waren?", zh: "小时候是什么样的孩子？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "こうえんで あそぶ ときは、いつも わらって いました。", en: "When I played in the park, I was always laughing.", de: "Wenn ich im Park gespielt habe, habe ich immer gelacht.", zh: "在公园玩的时候，总是笑着的。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "なにか なつかしい おもいでは ありますか？", en: "Do you have any nostalgic memories?", de: "Haben Sie nostalgische Erinnerungen?", zh: "有什么怀念的回忆吗？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、はじめて じてんしゃに のれた ときの ことを おぼえて います。", en: "Yes, I remember when I first learned to ride a bicycle.", de: "Ja, ich erinnere mich daran, als ich zum ersten Mal Fahrrad fahren konnte.", zh: "记得第一次学会骑自行车的时候。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "ひっこした とき、さびしかったですか？", en: "When you moved house, were you lonely?", de: "Als Sie umgezogen sind, waren Sie einsam?", zh: "搬家的时候感到孤单吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、ともだちと わかれる ときは なきました。", en: "Yes, I cried when I had to part with my friends.", de: "Ja, ich habe geweint, als ich mich von meinen Freunden trennen musste.", zh: "是的，和朋友分别的时候哭了。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "がっこうに にゅうがくした ときの ことは おぼえて いますか？", en: "Do you remember when you entered school?", de: "Erinnern Sie sich daran, als Sie in die Schule eingetreten sind?", zh: "还记得入学的时候吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、にゅうがくした ときは、とても きんちょうして いました。", en: "Yes, when I entered school, I was very nervous.", de: "Ja, als ich in die Schule eingetreten bin, war ich sehr nervös.", zh: "是的，入学的时候特别紧张。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こどもの ときの じこは ありましたか？", en: "Did you have any accidents when you were a child?", de: "Hatten Sie als Kind Unfälle?", zh: "小时候有过事故吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "じてんしゃで ころんだ とき、けがを しました。", en: "When I fell off my bicycle, I got hurt.", de: "Als ich vom Fahrrad gefallen bin, habe ich mich verletzt.", zh: "从自行车上摔下来的时候受了伤。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "なつやすみに いちばん たのしかった ことは なんですか？", en: "What was the most fun thing during summer vacation?", de: "Was war das Lustigste in den Sommerferien?", zh: "暑假最开心的事是什么？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "かぞくで りょこうに いった ときの ことです。", en: "It's when I went on a trip with my family.", de: "Das war, als ich mit meiner Familie verreist bin.", zh: "是和家人一起旅行的时候。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "こどもは おとなに なると かわりますね。", en: "Children change when they become adults, don't they.", de: "Kinder verändern sich, wenn sie erwachsen werden, oder?", zh: "孩子长大成人后会发生变化呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。でも、こどもの ころの きもちは わすれたくないです。", en: "That's true. But I don't want to forget how I felt as a child.", de: "Stimmt. Aber ich möchte nicht vergessen, wie ich mich als Kind gefühlt habe.", zh: "是啊。不过不想忘记小时候的心情。" } }
    ]
  },
  dialogueB: {
    title: { ja: "わすれられない できごとを はなす", en: "Describing a Memorable Event", de: "Ein unvergessliches Ereignis beschreiben", zh: "说说难忘的事件" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "いちばん おもいでに のこって いる できごとは なんですか？", en: "What's the event that stands out most in your memory?", de: "Was ist das Ereignis, das sich am meisten in Ihre Erinnerung eingeprägt hat?", zh: "印象最深的事件是什么？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そつぎょうした ときの ことです。みんな なきながら わらって いました。", en: "It's when I graduated. Everyone was laughing while crying.", de: "Das war, als ich meinen Abschluss gemacht habe. Alle haben gelacht, während sie weinten.", zh: "是毕业的时候。大家都是边哭边笑的。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そのとき、どんな きもちでしたか？", en: "How did you feel at that time?", de: "Wie haben Sie sich zu diesem Zeitpunkt gefühlt?", zh: "那时候是什么心情？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "さびしい きもちと、たのしい きもちが いっしょに ありました。", en: "I had feelings of both loneliness and happiness together.", de: "Ich hatte gleichzeitig ein Gefühl der Einsamkeit und der Freude.", zh: "既有寂寞的感觉，也有开心的感觉。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "こわかった きおくは ありますか？", en: "Do you have any scary memories?", de: "Haben Sie gruselige Erinnerungen?", zh: "有可怕的记忆吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じこに あった とき、ほんとうに こわかったです。", en: "When I was in an accident, it was really scary.", de: "Als ich einen Unfall hatte, war das wirklich beängstigend.", zh: "遇到事故的时候，真的很可怕。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "そのあと、どう なりましたか？", en: "What happened after that?", de: "Was ist danach passiert?", zh: "之后怎么样了？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "じてんしゃが こわれた だけで、けがは しませんでした。", en: "Only my bicycle broke, and I wasn't hurt.", de: "Nur mein Fahrrad ist kaputtgegangen, und ich habe mich nicht verletzt.", zh: "只是自行车坏了，我没有受伤。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "ひっこした ときの ことも おぼえて いますか？", en: "Do you also remember when you moved house?", de: "Erinnern Sie sich auch daran, als Sie umgezogen sind?", zh: "还记得搬家的时候吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、あたらしい まちに ひっこした とき、ふあんでした。", en: "Yes, when I moved to a new town, I was anxious.", de: "Ja, als ich in eine neue Stadt gezogen bin, war ich unsicher.", zh: "是的，搬到新城市的时候感到不安。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "でも、いまは いい おもいでですね。", en: "But now it's a good memory, isn't it.", de: "Aber jetzt ist es eine schöne Erinnerung, oder?", zh: "不过现在已经是美好的回忆了呢。" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうですね。おとなに なった いまでも、なつかしく おもいます。", en: "Yes. Even now that I'm an adult, I feel nostalgic about it.", de: "Ja. Auch jetzt, wo ich erwachsen bin, fühle ich mich nostalgisch.", zh: "是啊。即使现在长大成人了，还是觉得很怀念。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "にっきに かいて いる おもいでは ありますか？", en: "Are there memories you've written in your diary?", de: "Gibt es Erinnerungen, die Sie in Ihr Tagebuch geschrieben haben?", zh: "有写在日记里的回忆吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、たんじょうびに かぞくが おいわいして くれた ときの ことを かきました。", en: "Yes, I wrote about when my family celebrated my birthday.", de: "Ja, ich habe darüber geschrieben, als meine Familie meinen Geburtstag gefeiert hat.", zh: "是的，写了家人为我庆祝生日的时候。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜とき：じきを あらわす", en: "~Toki: Expressing 'When'", de: "~Toki: 'Wenn/Als' ausdrücken", zh: "〜とき：表示时间点" },
      explanation: {
        ja: "「〜とき」は「Aの とき、B」で、Aが おこった／おこる じきに Bが おこる ことを あらわします。どうしの じしょけい／た-けい、い-けいようし、な-けいようし＋な、めいし＋の に つけます。「こどもの とき」「たのしい とき」「しずかな とき」「がっこうに いった とき」のように、まえに くる ことばの しゅるいで かたちが かわります。",
        en: "~toki forms \"at the time A happens, B\" — the timing of B is anchored to A. It attaches to a verb's dictionary or ta-form, an i-adjective directly, a na-adjective + な, or a noun + の. The exact form before とき changes depending on the word type: \"こどもの とき\" (when [I was] a child), \"たのしい とき\" (when [it's] fun), \"しずかな とき\" (when [it's] quiet), \"がっこうに いった とき\" (when [I] went to school).",
        de: "~toki bildet \"zu der Zeit, in der A geschieht, geschieht B\" — der Zeitpunkt von B ist an A gebunden. Es wird an die Wörterbuch- oder ta-Form eines Verbs, direkt an ein i-Adjektiv, an ein na-Adjektiv + な, oder an ein Nomen + の angehängt. Die genaue Form vor とき ändert sich je nach Wortart: \"こどもの とき\" (als [ich] Kind war), \"たのしい とき\" (wenn [es] Spaß macht), \"しずかな とき\" (wenn [es] ruhig ist), \"がっこうに いった とき\" (als [ich] zur Schule gegangen bin).",
        zh: "〜とき构成\"发生A的时候，B\"——B的时间点以A为基准。接在动词辞书形或た形、い形容词原形、な形容词+な、或名词+の后面。とき前面的形式会随词性变化：「こどもの とき」（小时候）、「たのしい とき」（开心的时候）、「しずかな とき」（安静的时候）、「がっこうに いった とき」（去学校的时候）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "こどもの とき、よく こうえんで あそびました。", en: "When I was a child, I often played in the park.", de: "Als ich Kind war, habe ich oft im Park gespielt.", zh: "小时候，经常在公园玩。" } },
        { id: "g2", translations: { ja: "たのしい とき、じかんが はやく すぎます。", en: "When it's fun, time passes quickly.", de: "Wenn es Spaß macht, vergeht die Zeit schnell.", zh: "开心的时候，时间过得很快。" } },
        { id: "g3", translations: { ja: "しずかな とき、ほんを よみます。", en: "When it's quiet, I read a book.", de: "Wenn es ruhig ist, lese ich ein Buch.", zh: "安静的时候，我看书。" } },
        { id: "g4", translations: { ja: "がっこうに いった とき、ともだちに あいました。", en: "When I went to school, I met a friend.", de: "Als ich zur Schule gegangen bin, habe ich einen Freund getroffen.", zh: "去学校的时候，遇到了朋友。" } },
        { id: "g5", translations: { ja: "しんぱいな とき、かぞくに でんわします。", en: "When I'm worried, I call my family.", de: "Wenn ich besorgt bin, rufe ich meine Familie an.", zh: "担心的时候，给家人打电话。" } },
        { id: "g6", translations: { ja: "つかれた とき、はやく ねます。", en: "When I'm tired, I go to bed early.", de: "Wenn ich müde bin, gehe ich früh ins Bett.", zh: "累的时候，早点睡觉。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        r1: { ja: "R", en: "R", de: "R", zh: "R" },
        r2: { ja: "R", en: "R", de: "R", zh: "R" },
        short: { ja: "みじかい ぼいん", en: "Short vowels", de: "Kurze Vokale", zh: "短元音" },
        long: { ja: "ながい ぼいん", en: "Long vowels", de: "Lange Vokale", zh: "长元音" }
      },
      items: [
        { id: "r1_1", category: "r1", translations: { ja: "りょこう", en: "trip", de: "Reise", zh: "旅行" } },
        { id: "r1_2", category: "r1", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
        { id: "r1_3", category: "r1", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },
        { id: "r1_4", category: "r1", translations: { ja: "ろうか", en: "hallway", de: "Flur", zh: "走廊" } },
        { id: "r2_1", category: "r2", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
        { id: "r2_2", category: "r2", translations: { ja: "りゆう", en: "reason", de: "Grund", zh: "理由" } },
        { id: "r2_3", category: "r2", translations: { ja: "ろんぶん", en: "essay, thesis", de: "Aufsatz", zh: "论文" } },
        { id: "r2_4", category: "r2", translations: { ja: "るいじ", en: "similarity", de: "Ähnlichkeit", zh: "类似" } },
        { id: "short1", category: "short", translations: { ja: "おじさん", en: "uncle", de: "Onkel", zh: "叔叔" } },
        { id: "short2", category: "short", translations: { ja: "おばさん", en: "aunt", de: "Tante", zh: "阿姨" } },
        { id: "short3", category: "short", translations: { ja: "ここ", en: "here", de: "hier", zh: "这里" } },
        { id: "short4", category: "short", translations: { ja: "とる", en: "to take", de: "nehmen", zh: "拿" } },
        { id: "long1", category: "long", translations: { ja: "おじいさん", en: "grandfather", de: "Großvater", zh: "爷爷" } },
        { id: "long2", category: "long", translations: { ja: "おばあさん", en: "grandmother", de: "Großmutter", zh: "奶奶" } },
        { id: "long3", category: "long", translations: { ja: "こうこう", en: "high school", de: "Oberschule", zh: "高中" } },
        { id: "long4", category: "long", translations: { ja: "とおる", en: "to pass through", de: "durchqueren", zh: "通过" } }
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
          r1: { ja: "R", en: "R", de: "R", zh: "R" },
          r2: { ja: "R", en: "R", de: "R", zh: "R" },
          short: { ja: "みじかい ぼいん", en: "Short vowels", de: "Kurze Vokale", zh: "短元音" },
          long: { ja: "ながい ぼいん", en: "Long vowels", de: "Lange Vokale", zh: "长元音" }
        },
        items: [
          { id: "r1_5", category: "r1", translations: { ja: "るすばん", en: "house-sitting", de: "Haus hüten", zh: "看家" } },
          { id: "r1_6", category: "r1", translations: { ja: "らくご", en: "rakugo", de: "Rakugo", zh: "落语" } },
          { id: "r1_7", category: "r1", translations: { ja: "りかい", en: "understanding", de: "Verständnis", zh: "理解" } },
          { id: "r1_8", category: "r1", translations: { ja: "るすばんでんわ", en: "answering machine", de: "Anrufbeantworter", zh: "电话答录机" } },
          { id: "r1_9", category: "r1", translations: { ja: "れんきゅう", en: "consecutive holidays", de: "aufeinanderfolgende Feiertage", zh: "连休" } },
          { id: "r1_10", category: "r1", translations: { ja: "らく", en: "easy, comfortable", de: "leicht, bequem", zh: "轻松" } },
          { id: "r1_11", category: "r1", translations: { ja: "るす", en: "absence", de: "Abwesenheit", zh: "不在家" } },
          { id: "r1_12", category: "r1", translations: { ja: "ろく", en: "six", de: "sechs", zh: "六" } },
          { id: "r1_13", category: "r1", translations: { ja: "ランチ", en: "lunch", de: "Mittagessen", zh: "午餐" } },
          { id: "r1_14", category: "r1", translations: { ja: "りっぱ", en: "splendid", de: "prächtig", zh: "出色的" } },

          { id: "r2_5", category: "r2", translations: { ja: "りえき", en: "profit", de: "Gewinn", zh: "利润" } },
          { id: "r2_6", category: "r2", translations: { ja: "ろうじん", en: "elderly person", de: "alter Mensch", zh: "老人" } },
          { id: "r2_7", category: "r2", translations: { ja: "りく", en: "land", de: "Land", zh: "陆地" } },
          { id: "r2_8", category: "r2", translations: { ja: "らいげつ", en: "next month", de: "nächster Monat", zh: "下个月" } },
          { id: "r2_9", category: "r2", translations: { ja: "れいぞうこ", en: "refrigerator", de: "Kühlschrank", zh: "冰箱" } },
          { id: "r2_10", category: "r2", translations: { ja: "らいねん", en: "next year", de: "nächstes Jahr", zh: "明年" } },
          { id: "r2_11", category: "r2", translations: { ja: "ろくおん", en: "recording", de: "Aufnahme", zh: "录音" } },
          { id: "r2_12", category: "r2", translations: { ja: "るい", en: "type, kind", de: "Art, Sorte", zh: "种类" } },
          { id: "r2_13", category: "r2", translations: { ja: "らいしゅう", en: "next week", de: "nächste Woche", zh: "下周" } },
          { id: "r2_14", category: "r2", translations: { ja: "ろじ", en: "alley", de: "Gasse", zh: "小巷" } },

          { id: "short5", category: "short", translations: { ja: "かど", en: "corner", de: "Ecke", zh: "拐角" } },
          { id: "short6", category: "short", translations: { ja: "くろ", en: "black", de: "Schwarz", zh: "黑色" } },
          { id: "short7", category: "short", translations: { ja: "とし", en: "year, age", de: "Jahr, Alter", zh: "年，年龄" } },
          { id: "short8", category: "short", translations: { ja: "はな", en: "flower", de: "Blume", zh: "花" } },
          { id: "short9", category: "short", translations: { ja: "みず", en: "water", de: "Wasser", zh: "水" } },
          { id: "short10", category: "short", translations: { ja: "いろ", en: "color", de: "Farbe", zh: "颜色" } },
          { id: "short11", category: "short", translations: { ja: "かさ", en: "umbrella", de: "Regenschirm", zh: "雨伞" } },
          { id: "short12", category: "short", translations: { ja: "つき", en: "moon", de: "Mond", zh: "月亮" } },
          { id: "short13", category: "short", translations: { ja: "ふね", en: "boat", de: "Boot", zh: "船" } },
          { id: "short14", category: "short", translations: { ja: "やま", en: "mountain", de: "Berg", zh: "山" } },
          { id: "short15", category: "short", translations: { ja: "かわ", en: "river", de: "Fluss", zh: "河流" } },
          { id: "short16", category: "short", translations: { ja: "うみ", en: "sea", de: "Meer", zh: "海" } },
          { id: "short17", category: "short", translations: { ja: "はこ", en: "box", de: "Kiste", zh: "盒子" } },
          { id: "short18", category: "short", translations: { ja: "つくえ", en: "desk", de: "Schreibtisch", zh: "桌子" } },

          { id: "long5", category: "long", translations: { ja: "とうきょう", en: "Tokyo", de: "Tokio", zh: "东京" } },
          { id: "long6", category: "long", translations: { ja: "くうき", en: "air", de: "Luft", zh: "空气" } },
          { id: "long7", category: "long", translations: { ja: "こおり", en: "ice", de: "Eis", zh: "冰" } },
          { id: "long8", category: "long", translations: { ja: "ゆうめい", en: "famous", de: "berühmt", zh: "有名" } },
          { id: "long9", category: "long", translations: { ja: "がっこう", en: "school", de: "Schule", zh: "学校" } },
          { id: "long10", category: "long", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
          { id: "long11", category: "long", translations: { ja: "おうえん", en: "cheering, support", de: "Unterstützung", zh: "加油" } },
          { id: "long12", category: "long", translations: { ja: "おおきい", en: "big", de: "groß", zh: "大的" } },
          { id: "long13", category: "long", translations: { ja: "すうがく", en: "math", de: "Mathematik", zh: "数学" } },
          { id: "long14", category: "long", translations: { ja: "とけい", en: "clock", de: "Uhr", zh: "钟表" } },
          { id: "long15", category: "long", translations: { ja: "でんしゃ", en: "train", de: "Zug", zh: "电车" } },
          { id: "long16", category: "long", translations: { ja: "こうつう", en: "traffic", de: "Verkehr", zh: "交通" } },
          { id: "long17", category: "long", translations: { ja: "きょうしつ", en: "classroom", de: "Klassenzimmer", zh: "教室" } },
          { id: "long18", category: "long", translations: { ja: "そうじ", en: "cleaning", de: "Reinigung", zh: "打扫" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-toki",
        title: { ja: "れんしゅう：〜とき", en: "Practice: ~Toki", de: "Übung: ~Toki", zh: "练习：〜とき" },
        spokenIntro: {
          ja: "つぎは、「〜とき」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~toki.",
          de: "Als Nächstes üben wir Beispielsätze mit ~toki.",
          zh: "接下来，让我们练习使用「〜とき」的例句。"
        },
        lines: [
          { id: "tk1", translations: { ja: "こどもの とき、よく こうえんで あそびました。", jaKanji: "子供の時、よく公園で遊びました。", en: "When I was a child, I often played in the park.", de: "Als ich Kind war, habe ich oft im Park gespielt.", zh: "小时候，经常在公园玩。" } },
          { id: "tk2", translations: { ja: "たのしい とき、じかんが はやく すぎます。", jaKanji: "楽しい時、時間が早く過ぎます。", en: "When it's fun, time passes quickly.", de: "Wenn es Spaß macht, vergeht die Zeit schnell.", zh: "开心的时候，时间过得很快。" } },
          { id: "tk3", translations: { ja: "しずかな とき、ほんを よみます。", jaKanji: "静かな時、本を読みます。", en: "When it's quiet, I read a book.", de: "Wenn es ruhig ist, lese ich ein Buch.", zh: "安静的时候，我看书。" } },
          { id: "tk4", translations: { ja: "がっこうに いった とき、ともだちに あいました。", jaKanji: "学校に行った時、友達に会いました。", en: "When I went to school, I met a friend.", de: "Als ich zur Schule gegangen bin, habe ich einen Freund getroffen.", zh: "去学校的时候，遇到了朋友。" } },
          { id: "tk5", translations: { ja: "しんぱいな とき、かぞくに でんわします。", jaKanji: "心配な時、家族に電話します。", en: "When I'm worried, I call my family.", de: "Wenn ich besorgt bin, rufe ich meine Familie an.", zh: "担心的时候，给家人打电话。" } },
          { id: "tk6", translations: { ja: "つかれた とき、はやく ねます。", jaKanji: "疲れた時、早く寝ます。", en: "When I'm tired, I go to bed early.", de: "Wenn ich müde bin, gehe ich früh ins Bett.", zh: "累的时候，早点睡觉。" } },
          { id: "tk7", translations: { ja: "ひっこした とき、あたらしい ともだちが できました。", jaKanji: "引っ越した時、新しい友達ができました。", en: "When I moved house, I made new friends.", de: "Als ich umgezogen bin, habe ich neue Freunde gefunden.", zh: "搬家的时候，交到了新朋友。" } },
          { id: "tk8", translations: { ja: "そつぎょうした とき、なきました。", jaKanji: "卒業した時、泣きました。", en: "When I graduated, I cried.", de: "Als ich meinen Abschluss gemacht habe, habe ich geweint.", zh: "毕业的时候，哭了。" } },
          { id: "tk9", translations: { ja: "こまった とき、いつも たすけて くれました。", jaKanji: "困った時、いつも助けてくれました。", en: "Whenever I was in trouble, they always helped me.", de: "Wenn ich Schwierigkeiten hatte, hat er mir immer geholfen.", zh: "遇到困难的时候，总是帮助我。" } },
          { id: "tk10", translations: { ja: "わかい とき、いろいろな ことに ちょうせんしました。", jaKanji: "若い時、いろいろな事に挑戦しました。", en: "When I was young, I challenged myself with all kinds of things.", de: "Als ich jung war, habe ich mich vielen verschiedenen Dingen gestellt.", zh: "年轻的时候，挑战了各种各样的事情。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "こどもの ころ", en: "When I Was a Child", de: "Als ich Kind war" },
    lines: [
      { id: "sg1", translations: { ja: "こうえんで あそんだ あの ひ", en: "That day we played in the park", de: "Jener Tag, an dem wir im Park spielten" } },
      { id: "sg2", translations: { ja: "じてんしゃに のれた うれしさ", en: "The joy of learning to ride a bike", de: "Die Freude, Fahrrad fahren zu lernen" } },
      { id: "sg3", translations: { ja: "なつやすみの おもいでは", en: "The memories of summer vacation", de: "Die Erinnerungen an die Sommerferien" } },
      { id: "sg4", translations: { ja: "いつまでも なつかしい", en: "Will always be nostalgic", de: "werden für immer nostalgisch bleiben" } }
    ]
  }
};
