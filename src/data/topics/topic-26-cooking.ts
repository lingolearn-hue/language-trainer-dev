import type { TopicLesson } from "../topicTypes";

// A2 — row 6 of docs/a2-master-lesson-table-v01.md. Grammar: ~nagara
// (simultaneous action) + ~te miru (try doing). Pronunciation 1/2
// (H vs F, Japanese R vs L) kept exactly as assigned.

export const topicCooking: TopicLesson = {
  id: "topic-26-cooking",
  lessonNumber: 26,
  level: "A2",
  topicName: {
    ja: "りょうり",
    en: "Cooking",
    de: "Kochen",
    zh: "烹饪"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "レシピ", en: "recipe", de: "Rezept", zh: "食谱" } },
    { id: "v02", category: "noun", translations: { ja: "ざいりょう", en: "ingredients", de: "Zutaten", zh: "食材" } },
    { id: "v03", category: "noun", translations: { ja: "なべ", en: "pot", de: "Topf", zh: "锅" } },
    { id: "v04", category: "noun", translations: { ja: "フライパン", en: "frying pan", de: "Pfanne", zh: "平底锅" } },
    { id: "v05", category: "noun", translations: { ja: "ほうちょう", en: "kitchen knife", de: "Küchenmesser", zh: "菜刀" } },
    { id: "v06", category: "noun", translations: { ja: "まないた", en: "cutting board", de: "Schneidebrett", zh: "砧板" } },
    { id: "v07", category: "noun", translations: { ja: "あぶら", en: "oil", de: "Öl", zh: "油" } },
    { id: "v08", category: "noun", translations: { ja: "しお", en: "salt", de: "Salz", zh: "盐" } },
    { id: "v09", category: "noun", translations: { ja: "さとう", en: "sugar", de: "Zucker", zh: "糖" } },
    { id: "v10", category: "noun", translations: { ja: "しょうゆ", en: "soy sauce", de: "Sojasauce", zh: "酱油" } },
    { id: "v11", category: "noun", translations: { ja: "だし", en: "soup stock", de: "Brühe", zh: "高汤" } },
    { id: "v12", category: "noun", translations: { ja: "あじ", en: "taste", de: "Geschmack", zh: "味道" } },
    { id: "v13", category: "verb", translations: { ja: "きる", en: "to cut", de: "schneiden", zh: "切" } },
    { id: "v14", category: "verb", translations: { ja: "まぜる", en: "to mix", de: "mischen", zh: "搅拌" } },
    { id: "v15", category: "verb", translations: { ja: "にる", en: "to simmer, boil", de: "kochen, köcheln", zh: "炖" } },
    { id: "v16", category: "verb", translations: { ja: "やく", en: "to grill, bake, fry", de: "braten, backen", zh: "烤，煎" } },
    { id: "v17", category: "verb", translations: { ja: "いためる", en: "to stir-fry", de: "anbraten", zh: "炒" } },
    { id: "v18", category: "verb", translations: { ja: "あじみする", en: "to taste-test", de: "abschmecken", zh: "尝味道" } },
    { id: "v19", category: "verb", translations: { ja: "はかる", en: "to measure", de: "abmessen", zh: "测量" } },
    { id: "v20", category: "verb", translations: { ja: "あたためる", en: "to warm up", de: "erwärmen", zh: "加热" } },
    { id: "v21", category: "verb", translations: { ja: "ひやす", en: "to cool, chill", de: "kühlen", zh: "冷却" } },
    { id: "v22", category: "verb", translations: { ja: "もりつける", en: "to plate, arrange food", de: "anrichten", zh: "摆盘" } },
    { id: "v23", category: "verb", translations: { ja: "てつだう", en: "to help", de: "helfen", zh: "帮忙" } },
    { id: "v24", category: "verb", translations: { ja: "ためす", en: "to try, test", de: "ausprobieren", zh: "尝试" } },
    { id: "v25", category: "adjective", translations: { ja: "あまい", en: "sweet", de: "süß", zh: "甜的" } },
    { id: "v26", category: "adjective", translations: { ja: "からい", en: "spicy", de: "scharf", zh: "辣的" } },
    { id: "v27", category: "adjective", translations: { ja: "しょっぱい", en: "salty", de: "salzig", zh: "咸的" } },
    { id: "v28", category: "adjective", translations: { ja: "うまい", en: "delicious (casual)", de: "lecker (locker)", zh: "好吃（口语）" } },
    { id: "v29", category: "noun", translations: { ja: "しんメニュー", en: "new menu item", de: "neues Gericht", zh: "新菜品" } },
    { id: "v30", category: "noun", translations: { ja: "かてい", en: "process, procedure", de: "Vorgang", zh: "过程" } },
    { id: "v31", category: "adverb", translations: { ja: "ゆっくり", en: "slowly", de: "langsam", zh: "慢慢地" } },
    { id: "v32", category: "adverb", translations: { ja: "じょうずに", en: "skillfully", de: "geschickt", zh: "熟练地" } }
  ],
  dialogueA: {
    title: { ja: "いっしょに りょうりを する", en: "Cooking Together", de: "Zusammen kochen", zh: "一起做饭" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きょうは なにを つくりますか？", en: "What are we making today?", de: "Was machen wir heute?", zh: "今天做什么？" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "レシピを みながら、あたらしい りょうりを つくって みましょう。", en: "Let's try making a new dish while looking at the recipe.", de: "Lass uns ein neues Gericht ausprobieren, während wir auf das Rezept schauen.", zh: "边看食谱边尝试做新菜吧。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いいですね！まず なにを きりますか？", en: "Sounds good! What do we cut first?", de: "Klingt gut! Was schneiden wir zuerst?", zh: "好啊！先切什么？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "やさいを きりながら、なべに おゆを わかします。", en: "While cutting the vegetables, we'll boil water in the pot.", de: "Während wir das Gemüse schneiden, kochen wir Wasser im Topf.", zh: "一边切菜一边在锅里烧水。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "しおを どのくらい いれますか？", en: "How much salt should we add?", de: "Wie viel Salz sollen wir hinzufügen?", zh: "放多少盐？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "レシピを よみながら、はかって みて ください。", en: "Please try measuring it while reading the recipe.", de: "Bitte versuchen Sie, es abzumessen, während Sie das Rezept lesen.", zh: "边看食谱边试着量一下。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "あじみして みても いいですか？", en: "May I try tasting it?", de: "Darf ich es probieren?", zh: "可以尝一下味道吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい、たべて みて ください。あまいですか？からいですか？", en: "Yes, please try it. Is it sweet? Spicy?", de: "Ja, bitte probieren Sie es. Ist es süß? Scharf?", zh: "好的，尝尝看。甜吗？辣吗？" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "すこし しょっぱいです。しょうゆを へらして みましょう。", en: "It's a bit salty. Let's try reducing the soy sauce.", de: "Es ist etwas salzig. Lass uns weniger Sojasauce ausprobieren.", zh: "有点咸。少放点酱油试试吧。" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はなしながら つくると、たのしいですね。", en: "It's fun to cook while chatting.", de: "Es macht Spaß, beim Kochen zu plaudern.", zh: "一边聊天一边做饭真开心。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "つぎは やさいを いためて みましょうか。", en: "Shall we try stir-frying the vegetables next?", de: "Sollen wir als Nächstes das Gemüse anbraten?", zh: "接下来炒一下蔬菜好吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ええ、あぶらを ひきながら、つよびで やきましょう。", en: "Yes, let's fry it on high heat while adding oil.", de: "Ja, lass uns es bei hoher Hitze braten, während wir Öl hinzufügen.", zh: "好，一边放油一边用大火煎吧。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "さいごに どう もりつけますか？", en: "How should we plate it at the end?", de: "Wie sollen wir es am Ende anrichten?", zh: "最后怎么摆盘？" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "うつわを えらびながら、きれいに もりつけましょう。", en: "Let's plate it nicely while choosing the dish.", de: "Lass uns es schön anrichten, während wir das Geschirr auswählen.", zh: "一边选餐具一边漂亮地摆盘吧。" } }
    ]
  },
  dialogueB: {
    title: { ja: "あたらしい レシピに ちょうせんする", en: "Trying a New Recipe", de: "Ein neues Rezept ausprobieren", zh: "尝试新食谱" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "その レシピは あたらしいですか？", en: "Is that recipe new?", de: "Ist das ein neues Rezept?", zh: "那个食谱是新的吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、しんメニューを つくって みたいと おもって います。", en: "Yes, I've been wanting to try making a new dish.", de: "Ja, ich wollte schon immer ein neues Gericht ausprobieren.", zh: "是的，我一直想做个新菜试试。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "どんな かていで つくりますか？", en: "What's the process for making it?", de: "Wie ist der Vorgang, um es zu machen?", zh: "是什么样的制作过程？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "まず、ざいりょうを はかりながら、じゅんびします。", en: "First, I prepare things while measuring the ingredients.", de: "Zuerst bereite ich alles vor, während ich die Zutaten abmesse.", zh: "首先，一边量食材一边准备。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "むずかしそうな かていは ありますか？", en: "Is there a step that looks difficult?", de: "Gibt es einen Schritt, der schwierig aussieht?", zh: "有看起来很难的步骤吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "だしを とる かていが むずかしそうです。ためして みます。", en: "The step of making soup stock looks difficult. I'll give it a try.", de: "Der Schritt, die Brühe zu machen, sieht schwierig aus. Ich probiere es aus.", zh: "熬高汤的步骤看起来很难。试试看吧。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "しっぱいしても だいじょうぶですよ。", en: "It's okay even if you fail.", de: "Es ist auch okay, wenn es misslingt.", zh: "就算失败了也没关系。" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "そうですね。テレビを みながら、きんちょうせずに つくります。", en: "You're right. I'll make it without being nervous, while watching TV.", de: "Sie haben recht. Ich mache es entspannt, während ich fernsehe.", zh: "说得对。一边看电视一边轻松地做。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "できあがったら、あじみさせて くださいね。", en: "When it's done, please let me taste it.", de: "Wenn es fertig ist, lassen Sie mich bitte probieren.", zh: "做好之后请让我尝尝。" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "もちろん です。かんせいしたら、よんで みます。", en: "Of course. When it's finished, I'll call you.", de: "Natürlich. Wenn es fertig ist, rufe ich Sie.", zh: "当然。做好了会叫你的。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "あじつけは どう するつもりですか？", en: "How are you planning to season it?", de: "Wie planen Sie zu würzen?", zh: "打算怎么调味？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "あじみを しながら、すこしずつ ちょうせいします。", en: "I'll adjust little by little while tasting.", de: "Ich passe es nach und nach an, während ich probiere.", zh: "一边尝味道一边一点点调整。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "がんばって ください。たのしみに して います。", en: "Good luck. I'm looking forward to it.", de: "Viel Erfolg. Ich freue mich darauf.", zh: "加油。很期待呢。" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "ありがとう ございます。おいしく できるように がんばります。", en: "Thank you. I'll do my best to make it delicious.", de: "Danke. Ich werde mein Bestes geben, damit es lecker wird.", zh: "谢谢。我会努力做得好吃的。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ながら／〜てみる：どうじの どうさと ためすこと", en: "~Nagara / ~Te Miru: Simultaneous Actions and Trying", de: "~Nagara / ~Te Miru: Gleichzeitige Handlungen und Ausprobieren", zh: "〜ながら／〜てみる：同时动作与尝试" },
      explanation: {
        ja: "「〜ながら」は どうしの ます-けい の ごびを とって つけ、ふたつの どうさを おなじ ひとが どうじに する ことを あらわします（「テレビを みながら、しょくじを します」）。「〜てみる」は どうしの て-けい に つけて、けっかが わからない ことを ために して みる ことを あらわします（「たべて みます」＝たべた けっかを たしかめる ために たべる）。",
        en: "~nagara attaches to the stem of the masu-form and shows the same person doing two actions at once (\"watching TV while eating\"). ~te miru attaches to the te-form of a verb to mean trying an action to see the result (\"tabete mimasu\" = eating to find out what it's like).",
        de: "~nagara wird an den Stamm der masu-Form angehängt und zeigt, dass dieselbe Person zwei Handlungen gleichzeitig ausführt (\"fernsehen und dabei essen\"). ~te miru wird an die te-Form eines Verbs angehängt und bedeutet, eine Handlung auszuprobieren, um das Ergebnis zu sehen (\"tabete mimasu\" = essen, um herauszufinden, wie es ist).",
        zh: "〜ながら接在ます形词干后，表示同一个人同时做两个动作（\"边看电视边吃饭\"）。〜てみる接在动词て形后，表示尝试做某个动作看看结果（\"たべてみます\"＝吃一下看看怎么样）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "おんがくを ききながら、りょうりを します。", en: "I cook while listening to music.", de: "Ich koche, während ich Musik höre.", zh: "边听音乐边做饭。" } },
        { id: "g2", translations: { ja: "あたらしい みせで たべて みました。", en: "I tried eating at a new restaurant.", de: "Ich habe versucht, in einem neuen Restaurant zu essen.", zh: "尝试在新店吃了饭。" } },
        { id: "g3", translations: { ja: "レシピを よみながら、つくって みます。", en: "I'll try making it while reading the recipe.", de: "Ich versuche es zu machen, während ich das Rezept lese.", zh: "边看食谱边试着做。" } },
        { id: "g4", translations: { ja: "この ふくを きて みても いいですか。", en: "May I try wearing this clothing?", de: "Darf ich diese Kleidung anprobieren?", zh: "可以试穿这件衣服吗？" } },
        { id: "g5", translations: { ja: "はなしながら、あるきます。", en: "I walk while talking.", de: "Ich gehe, während ich rede.", zh: "边走边聊天。" } },
        { id: "g6", translations: { ja: "あたらしい ことばを つかって みました。", en: "I tried using a new word.", de: "Ich habe versucht, ein neues Wort zu verwenden.", zh: "试着用了一个新词。" } }
      ]
    }
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-nagara",
        title: { ja: "れんしゅう：〜ながら", en: "Practice: ~Nagara", de: "Übung: ~Nagara", zh: "练习：〜ながら" },
        spokenIntro: {
          ja: "つぎは、「〜ながら」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~nagara.",
          de: "Als Nächstes üben wir Beispielsätze mit ~nagara.",
          zh: "接下来，让我们练习使用「〜ながら」的例句。"
        },
        lines: [
          { id: "ng1", translations: { ja: "おんがくを ききながら、りょうりを します。", jaKanji: "音楽を聞きながら、料理をします。", en: "I cook while listening to music.", de: "Ich koche, während ich Musik höre.", zh: "边听音乐边做饭。" } },
          { id: "ng2", translations: { ja: "テレビを みながら、しょくじを します。", jaKanji: "テレビを見ながら、食事をします。", en: "I eat while watching TV.", de: "Ich esse, während ich fernsehe.", zh: "边看电视边吃饭。" } },
          { id: "ng3", translations: { ja: "はなしながら、あるきます。", jaKanji: "話しながら、歩きます。", en: "I walk while talking.", de: "Ich gehe, während ich rede.", zh: "边走边聊天。" } },
          { id: "ng4", translations: { ja: "レシピを よみながら、つくります。", jaKanji: "レシピを読みながら、作ります。", en: "I make it while reading the recipe.", de: "Ich mache es, während ich das Rezept lese.", zh: "边看食谱边做。" } },
          { id: "ng5", translations: { ja: "コーヒーを のみながら、しんぶんを よみます。", jaKanji: "コーヒーを飲みながら、新聞を読みます。", en: "I read the newspaper while drinking coffee.", de: "Ich lese die Zeitung, während ich Kaffee trinke.", zh: "边喝咖啡边看报纸。" } },
          { id: "ng6", translations: { ja: "うたを うたいながら、そうじを します。", jaKanji: "歌を歌いながら、掃除をします。", en: "I clean while singing.", de: "Ich putze, während ich singe.", zh: "边唱歌边打扫。" } },
          { id: "ng7", translations: { ja: "でんわで はなしながら、あるいて います。", jaKanji: "電話で話しながら、歩いています。", en: "I'm walking while talking on the phone.", de: "Ich gehe, während ich telefoniere.", zh: "边打电话边走路。" } },
          { id: "ng8", translations: { ja: "おかしを たべながら、えいがを みます。", jaKanji: "お菓子を食べながら、映画を見ます。", en: "I watch a movie while eating snacks.", de: "Ich schaue einen Film, während ich Süßigkeiten esse.", zh: "边吃零食边看电影。" } },
          { id: "ng9", translations: { ja: "ちずを みながら、みちを さがします。", jaKanji: "地図を見ながら、道を探します。", en: "I look for the way while looking at the map.", de: "Ich suche den Weg, während ich auf die Karte schaue.", zh: "边看地图边找路。" } },
          { id: "ng10", translations: { ja: "メモを とりながら、せつめいを ききます。", jaKanji: "メモを取りながら、説明を聞きます。", en: "I take notes while listening to the explanation.", de: "Ich mache Notizen, während ich die Erklärung höre.", zh: "边记笔记边听讲解。" } }
        ]
      },
      {
        id: "grammar-drill-temiru",
        title: { ja: "れんしゅう：〜てみる", en: "Practice: ~Te Miru", de: "Übung: ~Te Miru", zh: "练习：〜てみる" },
        spokenIntro: {
          ja: "つぎは、「〜てみる」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~te miru.",
          de: "Als Nächstes üben wir Beispielsätze mit ~te miru.",
          zh: "接下来，让我们练习使用「〜てみる」的例句。"
        },
        lines: [
          { id: "tm1", translations: { ja: "あたらしい みせで たべて みました。", jaKanji: "新しい店で食べてみました。", en: "I tried eating at a new restaurant.", de: "Ich habe versucht, in einem neuen Restaurant zu essen.", zh: "尝试在新店吃了饭。" } },
          { id: "tm2", translations: { ja: "この ふくを きて みても いいですか。", jaKanji: "この服を着てみてもいいですか。", en: "May I try wearing this clothing?", de: "Darf ich diese Kleidung anprobieren?", zh: "可以试穿这件衣服吗？" } },
          { id: "tm3", translations: { ja: "あたらしい ことばを つかって みました。", jaKanji: "新しい言葉を使ってみました。", en: "I tried using a new word.", de: "Ich habe versucht, ein neues Wort zu verwenden.", zh: "试着用了一个新词。" } },
          { id: "tm4", translations: { ja: "この レシピで つくって みます。", jaKanji: "このレシピで作ってみます。", en: "I'll try making it with this recipe.", de: "Ich werde versuchen, es mit diesem Rezept zu machen.", zh: "试着用这个食谱做做看。" } },
          { id: "tm5", translations: { ja: "そのおんがくを きいて みて ください。", jaKanji: "その音楽を聞いてみてください。", en: "Please try listening to that music.", de: "Bitte versuchen Sie, diese Musik zu hören.", zh: "请试着听听那首音乐。" } },
          { id: "tm6", translations: { ja: "しんかんせんに のって みたいです。", jaKanji: "新幹線に乗ってみたいです。", en: "I want to try riding the shinkansen.", de: "Ich möchte gerne mal den Shinkansen fahren.", zh: "想试着坐一次新干线。" } },
          { id: "tm7", translations: { ja: "からい りょうりを たべて みました。", jaKanji: "辛い料理を食べてみました。", en: "I tried eating spicy food.", de: "Ich habe versucht, scharfes Essen zu essen.", zh: "试着吃了辣的菜。" } },
          { id: "tm8", translations: { ja: "その ほんを よんで みても いいですか。", jaKanji: "その本を読んでみてもいいですか。", en: "May I try reading that book?", de: "Darf ich versuchen, dieses Buch zu lesen?", zh: "可以试着读一下那本书吗？" } },
          { id: "tm9", translations: { ja: "あたらしい みちを あるいて みます。", jaKanji: "新しい道を歩いてみます。", en: "I'll try walking a new path.", de: "Ich werde versuchen, einen neuen Weg zu gehen.", zh: "试着走一条新路。" } },
          { id: "tm10", translations: { ja: "じぶんで しらべて みました。", jaKanji: "自分で調べてみました。", en: "I tried researching it myself.", de: "Ich habe versucht, es selbst herauszufinden.", zh: "自己试着查了一下。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        h: { ja: "H", en: "H", de: "H", zh: "H" },
        f: { ja: "F", en: "F", de: "F", zh: "F" },
        r1: { ja: "R", en: "R", de: "R", zh: "R" },
        r2: { ja: "R", en: "R", de: "R", zh: "R" }
      },
      items: [
        { id: "h1", category: "h", translations: { ja: "ひま", en: "free time", de: "Freizeit", zh: "空闲" } },
        { id: "h2", category: "h", translations: { ja: "ほん", en: "book", de: "Buch", zh: "书" } },
        { id: "h3", category: "h", translations: { ja: "はる", en: "spring", de: "Frühling", zh: "春天" } },
        { id: "h4", category: "h", translations: { ja: "へん", en: "strange", de: "seltsam", zh: "奇怪的" } },
        { id: "f1", category: "f", translations: { ja: "ふゆ", en: "winter", de: "Winter", zh: "冬天" } },
        { id: "f2", category: "f", translations: { ja: "ふうとう", en: "envelope", de: "Umschlag", zh: "信封" } },
        { id: "f3", category: "f", translations: { ja: "ふたり", en: "two people", de: "zwei Personen", zh: "两个人" } },
        { id: "f4", category: "f", translations: { ja: "ふしぎ", en: "mysterious", de: "geheimnisvoll", zh: "不可思议" } },
        { id: "r1_a", category: "r1", translations: { ja: "りっぱ", en: "splendid", de: "prächtig", zh: "出色的" } },
        { id: "r1_b", category: "r1", translations: { ja: "れんあい", en: "romance", de: "Liebe, Romanze", zh: "恋爱" } },
        { id: "r1_c", category: "r1", translations: { ja: "ろうそく", en: "candle", de: "Kerze", zh: "蜡烛" } },
        { id: "r1_d", category: "r1", translations: { ja: "らいひん", en: "guest, visitor", de: "Gast", zh: "来宾" } },
        { id: "r2_a", category: "r2", translations: { ja: "りょうしん", en: "parents", de: "Eltern", zh: "父母" } },
        { id: "r2_b", category: "r2", translations: { ja: "れきだい", en: "successive generations", de: "aufeinanderfolgende Generationen", zh: "历代" } },
        { id: "r2_c", category: "r2", translations: { ja: "ろんぶん", en: "essay, thesis", de: "Aufsatz", zh: "论文" } },
        { id: "r2_d", category: "r2", translations: { ja: "らくだ", en: "camel", de: "Kamel", zh: "骆驼" } }
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
          h: { ja: "H", en: "H", de: "H", zh: "H" },
          f: { ja: "F", en: "F", de: "F", zh: "F" },
          r1: { ja: "R", en: "R", de: "R", zh: "R" },
          r2: { ja: "R", en: "R", de: "R", zh: "R" }
        },
        items: [
          { id: "h5", category: "h", translations: { ja: "はな", en: "flower", de: "Blume", zh: "花" } },
          { id: "h6", category: "h", translations: { ja: "ひる", en: "noon", de: "Mittag", zh: "中午" } },
          { id: "h7", category: "h", translations: { ja: "ひかり", en: "light", de: "Licht", zh: "光" } },
          { id: "h8", category: "h", translations: { ja: "ほし", en: "star", de: "Stern", zh: "星星" } },
          { id: "h9", category: "h", translations: { ja: "はし", en: "bridge", de: "Brücke", zh: "桥" } },
          { id: "h10", category: "h", translations: { ja: "ひと", en: "person", de: "Person", zh: "人" } },
          { id: "h11", category: "h", translations: { ja: "へや", en: "room", de: "Zimmer", zh: "房间" } },
          { id: "h12", category: "h", translations: { ja: "ほか", en: "other", de: "andere", zh: "其他" } },
          { id: "h13", category: "h", translations: { ja: "はく", en: "to put on, wear", de: "anziehen", zh: "穿" } },
          { id: "h14", category: "h", translations: { ja: "ひろい", en: "spacious", de: "geräumig", zh: "宽敞的" } },
          { id: "h15", category: "h", translations: { ja: "はいる", en: "to enter", de: "eintreten", zh: "进入" } },
          { id: "h16", category: "h", translations: { ja: "へる", en: "to decrease", de: "abnehmen", zh: "减少" } },
          { id: "h17", category: "h", translations: { ja: "ほる", en: "to dig", de: "graben", zh: "挖" } },
          { id: "h18", category: "h", translations: { ja: "ひく", en: "to pull, play", de: "ziehen, spielen", zh: "拉，弹奏" } },

          { id: "f5", category: "f", translations: { ja: "ふね", en: "boat", de: "Boot", zh: "船" } },
          { id: "f6", category: "f", translations: { ja: "ふえ", en: "flute", de: "Flöte", zh: "笛子" } },
          { id: "f7", category: "f", translations: { ja: "ふし", en: "tune, joint", de: "Melodie, Gelenk", zh: "调子，关节" } },
          { id: "f8", category: "f", translations: { ja: "ふとん", en: "futon", de: "Futon", zh: "被褥" } },
          { id: "f9", category: "f", translations: { ja: "ふく", en: "clothes", de: "Kleidung", zh: "衣服" } },
          { id: "f10", category: "f", translations: { ja: "ふとい", en: "thick", de: "dick", zh: "粗的" } },
          { id: "f11", category: "f", translations: { ja: "ふやす", en: "to increase", de: "vermehren", zh: "增加" } },
          { id: "f12", category: "f", translations: { ja: "ふかい", en: "deep", de: "tief", zh: "深的" } },
          { id: "f13", category: "f", translations: { ja: "ふく", en: "to blow", de: "wehen, blasen", zh: "吹" } },
          { id: "f14", category: "f", translations: { ja: "ふろ", en: "bath", de: "Bad", zh: "澡堂" } },
          { id: "f15", category: "f", translations: { ja: "ふるい", en: "old", de: "alt", zh: "旧的" } },
          { id: "f16", category: "f", translations: { ja: "ふれる", en: "to touch", de: "berühren", zh: "触碰" } },
          { id: "f17", category: "f", translations: { ja: "ふる", en: "to fall", de: "fallen", zh: "下" } },
          { id: "f18", category: "f", translations: { ja: "ふく", en: "to wipe", de: "abwischen", zh: "擦拭" } },

          { id: "r1_1", category: "r1", translations: { ja: "らく", en: "easy, comfortable", de: "leicht, bequem", zh: "轻松" } },
          { id: "r1_2", category: "r1", translations: { ja: "りんご", en: "apple", de: "Apfel", zh: "苹果" } },
          { id: "r1_3", category: "r1", translations: { ja: "るす", en: "absence", de: "Abwesenheit", zh: "不在家" } },
          { id: "r1_4", category: "r1", translations: { ja: "れきし", en: "history", de: "Geschichte", zh: "历史" } },
          { id: "r1_5", category: "r1", translations: { ja: "ろく", en: "six", de: "sechs", zh: "六" } },
          { id: "r1_6", category: "r1", translations: { ja: "るすばん", en: "house-sitting", de: "Haus hüten", zh: "看家" } },
          { id: "r1_7", category: "r1", translations: { ja: "りょこう", en: "travel", de: "Reise", zh: "旅行" } },
          { id: "r1_8", category: "r1", translations: { ja: "れんしゅう", en: "practice", de: "Übung", zh: "练习" } },
          { id: "r1_9", category: "r1", translations: { ja: "らくご", en: "rakugo", de: "Rakugo", zh: "落语" } },
          { id: "r1_10", category: "r1", translations: { ja: "りかい", en: "understanding", de: "Verständnis", zh: "理解" } },
          { id: "r1_11", category: "r1", translations: { ja: "ろうか", en: "corridor", de: "Flur", zh: "走廊" } },
          { id: "r1_12", category: "r1", translations: { ja: "るすばんでんわ", en: "answering machine", de: "Anrufbeantworter", zh: "电话答录机" } },
          { id: "r1_13", category: "r1", translations: { ja: "れんきゅう", en: "consecutive holidays", de: "aufeinanderfolgende Feiertage", zh: "连休" } },
          { id: "r1_14", category: "r1", translations: { ja: "ランチ", en: "lunch", de: "Mittagessen", zh: "午餐" } },

          { id: "r2_1", category: "r2", translations: { ja: "りえき", en: "profit", de: "Gewinn", zh: "利润" } },
          { id: "r2_2", category: "r2", translations: { ja: "ろうじん", en: "elderly person", de: "alter Mensch", zh: "老人" } },
          { id: "r2_3", category: "r2", translations: { ja: "りく", en: "land", de: "Land", zh: "陆地" } },
          { id: "r2_4", category: "r2", translations: { ja: "らいげつ", en: "next month", de: "nächster Monat", zh: "下个月" } },
          { id: "r2_5", category: "r2", translations: { ja: "りゆう", en: "reason", de: "Grund", zh: "理由" } },
          { id: "r2_6", category: "r2", translations: { ja: "れいぞうこ", en: "refrigerator", de: "Kühlschrank", zh: "冰箱" } },
          { id: "r2_7", category: "r2", translations: { ja: "らいねん", en: "next year", de: "nächstes Jahr", zh: "明年" } },
          { id: "r2_8", category: "r2", translations: { ja: "ろくおん", en: "recording", de: "Aufnahme", zh: "录音" } },
          { id: "r2_9", category: "r2", translations: { ja: "るい", en: "type, kind", de: "Art, Sorte", zh: "种类" } },
          { id: "r2_10", category: "r2", translations: { ja: "れんらく", en: "contact", de: "Kontakt", zh: "联系" } },
          { id: "r2_11", category: "r2", translations: { ja: "らいしゅう", en: "next week", de: "nächste Woche", zh: "下周" } },
          { id: "r2_12", category: "r2", translations: { ja: "りょうり", en: "cooking", de: "Kochen", zh: "烹饪" } },
          { id: "r2_13", category: "r2", translations: { ja: "ろじ", en: "alley", de: "Gasse", zh: "小巷" } },
          { id: "r2_14", category: "r2", translations: { ja: "るいじ", en: "similarity", de: "Ähnlichkeit", zh: "类似" } }
      ]
      }
    ]
  },
  song: {
    title: { ja: "スープを つくろう", en: "Let's Make Soup", de: "Lass uns Suppe kochen" },
    lines: [
      { id: "sg1", translations: { ja: "なべに おみずを いれて", en: "Put water in the pot", de: "Gieß Wasser in den Topf" } },
      { id: "sg2", translations: { ja: "やさいを きって いれよう", en: "Cut the vegetables and add them", de: "Schneide das Gemüse und gib es hinein" } },
      { id: "sg3", translations: { ja: "ぐつぐつ にえたら できあがり", en: "When it's bubbling and cooked, it's done", de: "Wenn es blubbernd gekocht ist, ist es fertig" } },
      { id: "sg4", translations: { ja: "みんなで たべよう", en: "Let's eat it together", de: "Lass es uns zusammen essen" } }
    ]
  }
};
