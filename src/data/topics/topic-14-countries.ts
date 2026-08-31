import type { TopicLesson } from "../topicTypes";

// Newly authored — master table row 14 (Countries). No German/English
// grammar or pronunciation authored yet (Japanese-only lesson for now,
// like most topics were before their German pass) — vocab/dialogue/song
// are already fully ja/en/de/zh so a German pass later just needs
// grammar+pronunciation, same pattern as topics 1-13.

export const topicCountries: TopicLesson = {
  id: "topic-14-countries",
  lessonNumber: 14,
  topicName: {
    ja: "くに",
    en: "Countries",
    de: "Länder",
    zh: "国家"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "くに", en: "country", de: "Land", zh: "国家" } },
    { id: "v02", category: "noun", translations: { ja: "にほん", en: "Japan", de: "Japan", zh: "日本" } },
    { id: "v03", category: "noun", translations: { ja: "アメリカ", en: "America, the USA", de: "Amerika, die USA", zh: "美国" } },
    { id: "v04", category: "noun", translations: { ja: "ちゅうごく", en: "China", de: "China", zh: "中国" } },
    { id: "v05", category: "noun", translations: { ja: "かんこく", en: "Korea", de: "Korea", zh: "韩国" } },
    { id: "v06", category: "noun", translations: { ja: "ドイツ", en: "Germany", de: "Deutschland", zh: "德国" } },
    { id: "v07", category: "noun", translations: { ja: "フランス", en: "France", de: "Frankreich", zh: "法国" } },
    { id: "v08", category: "noun", translations: { ja: "イギリス", en: "the UK, England", de: "Großbritannien, England", zh: "英国" } },
    { id: "v09", category: "noun", translations: { ja: "しゅっしん", en: "hometown, place of origin", de: "Herkunftsort, Heimat", zh: "籍贯，出生地" } },
    { id: "v10", category: "noun", translations: { ja: "こくせき", en: "nationality", de: "Staatsangehörigkeit", zh: "国籍" } },
    { id: "v11", category: "noun", translations: { ja: "げんご", en: "language", de: "Sprache", zh: "语言" } },
    { id: "v12", category: "noun", translations: { ja: "えいご", en: "English (language)", de: "Englisch (Sprache)", zh: "英语" } },
    { id: "v13", category: "noun", translations: { ja: "にほんご", en: "Japanese (language)", de: "Japanisch (Sprache)", zh: "日语" } },
    { id: "v14", category: "noun", translations: { ja: "ちゅうごくご", en: "Chinese (language)", de: "Chinesisch (Sprache)", zh: "汉语" } },
    { id: "v15", category: "noun", translations: { ja: "ドイツご", en: "German (language)", de: "Deutsch (Sprache)", zh: "德语" } },
    { id: "v16", category: "noun", translations: { ja: "かいがい", en: "overseas, abroad", de: "im Ausland", zh: "海外" } },
    { id: "v17", category: "verb", translations: { ja: "りょこうする", en: "to travel", de: "reisen", zh: "旅行" } },
    { id: "v18", category: "verb", translations: { ja: "すむ", en: "to live, reside", de: "wohnen", zh: "居住" } },
    { id: "v19", category: "verb", translations: { ja: "うまれる", en: "to be born", de: "geboren werden", zh: "出生" } },
    { id: "v20", category: "verb", translations: { ja: "そだつ", en: "to grow up", de: "aufwachsen", zh: "长大" } },
    { id: "v21", category: "noun", translations: { ja: "ぶんか", en: "culture", de: "Kultur", zh: "文化" } },
    { id: "v22", category: "noun", translations: { ja: "しゅと", en: "capital city", de: "Hauptstadt", zh: "首都" } },
    { id: "v23", category: "noun", translations: { ja: "たいりく", en: "continent", de: "Kontinent", zh: "大陆" } },
    { id: "v24", category: "noun", translations: { ja: "アジア", en: "Asia", de: "Asien", zh: "亚洲" } },
    { id: "v25", category: "noun", translations: { ja: "ヨーロッパ", en: "Europe", de: "Europa", zh: "欧洲" } },
    { id: "v26", category: "noun", translations: { ja: "アフリカ", en: "Africa", de: "Afrika", zh: "非洲" } },
    { id: "v27", category: "noun", translations: { ja: "こっきょう", en: "border", de: "Grenze", zh: "国境" } },
    { id: "v28", category: "noun", translations: { ja: "パスポート", en: "passport", de: "Reisepass", zh: "护照" } },
    { id: "v29", category: "adjective", translations: { ja: "とおい", en: "far", de: "weit entfernt", zh: "远的" } },
    { id: "v30", category: "adjective", translations: { ja: "ちかい", en: "near, close", de: "nah, in der Nähe", zh: "近的" } }
  ],
  dialogueA: {
    title: { ja: "りょこうの インタビュー", en: "Travel Interview", de: "Reise-Interview", zh: "旅行采访" },
    lines: [
      { id: "d1", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "こんにちは。しつもんしても いいですか？", en: "Hello. May I ask you some questions?", de: "Hallo. Darf ich Ihnen ein paar Fragen stellen?", zh: "您好。我可以问您几个问题吗？" } },
      { id: "d2", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "はい、いいですよ。", en: "Yes, that's fine.", de: "Ja, gerne.", zh: "好的，可以。" } },
      { id: "d3", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "どこの くにから きましたか？", en: "Which country are you from?", de: "Aus welchem Land kommen Sie?", zh: "您从哪个国家来？" } },
      { id: "d4", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "フランスから きました。", en: "I'm from France.", de: "Ich komme aus Frankreich.", zh: "我从法国来。" } },
      { id: "d5", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "なんかこくご を はなしますか？", en: "What languages do you speak?", de: "Welche Sprachen sprechen Sie?", zh: "您会说几种语言？" } },
      { id: "d6", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "フランスごと えいごを はなします。", en: "I speak French and English.", de: "Ich spreche Französisch und Englisch.", zh: "我说法语和英语。" } },
      { id: "d7", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "にほんは これで なんかいめですか？", en: "How many times have you been to Japan?", de: "Wie oft waren Sie schon in Japan?", zh: "这是您第几次来日本？" } },
      { id: "d8", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "さんかいめです。", en: "This is my third time.", de: "Das ist mein drittes Mal.", zh: "这是第三次了。" } },
      { id: "d9", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "にほんの ぶんかで なにが すきですか？", en: "What do you like about Japanese culture?", de: "Was gefällt Ihnen an der japanischen Kultur?", zh: "您喜欢日本文化的什么？" } },
      { id: "d10", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "たべものと おんせんが すきです。", en: "I like the food and the hot springs.", de: "Ich mag das Essen und die heißen Quellen.", zh: "我喜欢食物和温泉。" } },
      { id: "d11", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "つぎは どこへ りょこうしますか？", en: "Where will you travel next?", de: "Wohin reisen Sie als Nächstes?", zh: "接下来您要去哪里旅行？" } },
      { id: "d12", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "かんこくへ いくよていです。", en: "I'm planning to go to Korea.", de: "Ich plane, nach Korea zu reisen.", zh: "我打算去韩国。" } },
      { id: "d13", speaker: { ja: "きしゃ", en: "Reporter", de: "Reporter", zh: "记者" }, translations: { ja: "そうですか。たのしい たびを！", en: "I see. Have a great trip!", de: "Verstehe. Gute Reise!", zh: "是这样啊。祝您旅途愉快！" } },
      { id: "d14", speaker: { ja: "たびびと", en: "Traveler", de: "Reisender", zh: "旅行者" }, translations: { ja: "ありがとうございます！", en: "Thank you very much!", de: "Vielen Dank!", zh: "非常感谢！" } }
    ]
  },
  dialogueB: {
    title: { ja: "はじめまして、どこの しゅっしんですか", en: "Nice to Meet You, Where Are You From?", de: "Freut mich, woher kommen Sie?", zh: "初次见面，您是哪里人？" },
    lines: [
      { id: "e1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "はじめまして。あいです。", en: "Nice to meet you. I'm Ai.", de: "Freut mich. Ich bin Ai.", zh: "初次见面，我是爱。" } },
      { id: "e2", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "はじめまして。トムです。", en: "Nice to meet you. I'm Tom.", de: "Freut mich. Ich bin Tom.", zh: "初次见面，我是汤姆。" } },
      { id: "e3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "トムさんは どこの しゅっしんですか？", en: "Where are you from, Tom?", de: "Woher kommen Sie, Tom?", zh: "汤姆先生，您是哪里人？" } },
      { id: "e4", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "イギリスの しゅっしんです。", en: "I'm from the UK.", de: "Ich komme aus Großbritannien.", zh: "我是英国人。" } },
      { id: "e5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "イギリスの どこですか？", en: "Where in the UK?", de: "Wo in Großbritannien?", zh: "英国的哪里？" } },
      { id: "e6", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "ロンドンです。しゅとに すんでいました。", en: "London. I lived in the capital.", de: "London. Ich habe in der Hauptstadt gewohnt.", zh: "伦敦。我以前住在首都。" } },
      { id: "e7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "いつ にほんへ きましたか？", en: "When did you come to Japan?", de: "Wann sind Sie nach Japan gekommen?", zh: "您是什么时候来日本的？" } },
      { id: "e8", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "さんねんまえに きました。", en: "I came three years ago.", de: "Ich bin vor drei Jahren gekommen.", zh: "我三年前来的。" } },
      { id: "e9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "にほんごは じょうずですね！", en: "Your Japanese is great!", de: "Ihr Japanisch ist sehr gut!", zh: "您的日语说得真好！" } },
      { id: "e10", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "ありがとう。まだ べんきょうちゅうです。", en: "Thank you. I'm still studying it.", de: "Danke. Ich lerne noch.", zh: "谢谢。我还在学习。" } },
      { id: "e11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "かぞくは どこに すんでいますか？", en: "Where does your family live?", de: "Wo lebt Ihre Familie?", zh: "您的家人住在哪里？" } },
      { id: "e12", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "かぞくは まだ イギリスに います。", en: "My family is still in the UK.", de: "Meine Familie ist noch in Großbritannien.", zh: "我的家人还在英国。" } },
      { id: "e13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "とおいですね。よく かえりますか？", en: "That's far. Do you go back often?", de: "Das ist weit. Fahren Sie oft zurück?", zh: "真远啊。您常回去吗？" } },
      { id: "e14", speaker: { ja: "トム", en: "Tom", de: "Tom", zh: "汤姆" }, translations: { ja: "いちねんに いっかい くらいです。", en: "About once a year.", de: "Ungefähr einmal im Jahr.", zh: "大概一年一次。" } }
    ]
  },
  song: {
    // Row 14 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song.
    title: { ja: "マクドナルドじいさんの のうじょう", en: "Old MacDonald Had a Farm", de: "Onkel Jörg hat einen Bauernhof" },
    lines: [
      { id: "sg1", translations: { ja: "マクドナルドじいさんの のうじょうで", en: "Old MacDonald had a farm", de: "Onkel Jörg hat einen Bauernhof" } },
      { id: "sg2", translations: { ja: "イーアイ イーアイ オー", en: "E-I-E-I-O", de: "Ija-ija-oh" } },
      { id: "sg3", translations: { ja: "そこには いぬが いて", en: "And on that farm he had a dog", de: "Und auf dem Hof, da hat er einen Hund" } },
      { id: "sg4", translations: { ja: "イーアイ イーアイ オー", en: "E-I-E-I-O", de: "Ija-ija-oh" } },
      { id: "sg5", translations: { ja: "ワンワン ここで、ワンワン そこで", en: "With a woof-woof here and a woof-woof there", de: "Hier wau-wau, da wau-wau" } },
      { id: "sg6", translations: { ja: "マクドナルドじいさんの のうじょうで", en: "Old MacDonald had a farm", de: "Onkel Jörg hat einen Bauernhof" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "はい・いいえ と ぎもんし の しつもん", en: "Yes/No and Wh-Questions", de: "Ja/Nein- und W-Fragen", zh: "是非问句与疑问词问句" },
      explanation: {
        ja: "ぶんの おわりに「か」を つけると、はい・いいえで こたえる しつもんに なります：にほんじんですか？ どこ・なに・だれ・いつ・どう の ような ぎもんしを つかうと、くわしい じょうほうを たずねる しつもんに なります：どこの しゅっしんですか？",
        en: "Adding か to the end of a sentence turns it into a yes/no question: にほんじんですか？ (Are you Japanese?) Using a question word like どこ (where), なに (what), だれ (who), いつ (when), or どう (how) turns it into a question asking for specific information: どこの しゅっしんですか？ (Where are you from?)",
        de: "Fügt man か ans Satzende an, wird der Satz zu einer Ja/Nein-Frage: にほんじんですか？ (Sind Sie Japaner/in?) Mit einem Fragewort wie どこ (wo), なに (was), だれ (wer), いつ (wann) oder どう (wie) wird der Satz zu einer Frage nach konkreten Informationen: どこの しゅっしんですか？ (Woher kommen Sie?)",
        zh: "在句末加上「か」，就变成用「是／不是」回答的问句：にほんじんですか？（你是日本人吗？）使用どこ（哪里）、なに（什么）、だれ（谁）、いつ（什么时候）、どう（怎样）等疑问词，就变成询问具体信息的问句：どこの しゅっしんですか？（你是哪里人？）"
      },
      chunks: [
        { id: "g1", translations: { ja: "にほんじんですか？", en: "Are you Japanese? (yes/no question with か)", de: "Sind Sie Japaner/in? (Ja/Nein-Frage mit か)", zh: "你是日本人吗？（用か构成的是非问句）" } },
        { id: "g2", translations: { ja: "いいえ、ちがいます。かんこくじんです。", en: "No, I'm not. I'm Korean. (negative answer)", de: "Nein, das stimmt nicht. Ich bin Koreaner/in. (verneinte Antwort)", zh: "不是，我是韩国人。（否定回答）" } },
        { id: "g3", translations: { ja: "どこの しゅっしんですか？", en: "Where are you from? (wh-question: どこ)", de: "Woher kommen Sie? (W-Frage: どこ)", zh: "你是哪里人？（疑问词问句：どこ）" } },
        { id: "g4", translations: { ja: "にほんの ぶんかで なにが すきですか？", en: "What do you like about Japanese culture? (wh-question: なに)", de: "Was gefällt Ihnen an der japanischen Kultur? (W-Frage: なに)", zh: "你喜欢日本文化的什么？（疑问词问句：なに）" } },
        { id: "g5", translations: { ja: "いつ にほんへ きましたか？", en: "When did you come to Japan? (wh-question: いつ)", de: "Wann sind Sie nach Japan gekommen? (W-Frage: いつ)", zh: "你是什么时候来日本的？（疑问词问句：いつ）" } },
        { id: "g6", translations: { ja: "にほんごの べんきょうは どうですか？", en: "How is your Japanese study going? (wh-question: どう)", de: "Wie läuft Ihr Japanisch-Lernen? (W-Frage: どう)", zh: "你学日语学得怎么样？（疑问词问句：どう）" } }
      ]
    },
    de: {
      title: { de: "W-Fragen und Herkunft: woher, aus", en: "Wh-Questions and Origin: Woher, Aus", ja: "ぎもんし と しゅっしん：woher と aus", zh: "疑问词与出身：woher与aus" },
      explanation: {
        de: "Deutsche Ja/Nein-Fragen werden durch Umstellung gebildet — das Verb steht an erster Stelle: Sind Sie Japaner/in? (nicht \"Sie sind...?\"). W-Fragen benutzen ein Fragewort wie woher (wo + her, \"von wo\"), was, wer, wann oder wie, ebenfalls mit Verb an zweiter Stelle: Woher kommen Sie? Die Herkunft wird mit aus + Land ausgedrückt: Ich komme aus Frankreich — die meisten Ländernamen brauchen dabei keinen Artikel.",
        en: "German yes/no questions are formed by inversion — the verb comes first: Sind Sie Japaner/in? (not \"Sie sind...?\"). Wh-questions use a question word like woher (wo + her, \"from where\"), was, wer, wann, or wie, with the verb still in second position: Woher kommen Sie? Origin is expressed with aus + country: Ich komme aus Frankreich — most country names need no article.",
        ja: "ドイツごの はい・いいえの しつもんは、どうしを ぶんとうに もってくる ことで つくります：Sind Sie Japaner/in?（「Sie sind...?」では ない）。ぎもんしを つかう しつもんは woher（wo + her、「どこから」）、was、wer、wann、wie などを つかい、どうしは にばんめの いちに きます：Woher kommen Sie?　しゅっしんは aus + くにめいで あらわします：Ich komme aus Frankreich — ほとんどの くにめいには かんしが つきません。",
        zh: "德语的是非疑问句通过倒装构成——动词放在句首：Sind Sie Japaner/in?（而不是「Sie sind...?」）。疑问词问句使用woher（wo+her，「从哪里」）、was、wer、wann或wie等疑问词，动词仍位于第二位：Woher kommen Sie?　出身用aus+国家表示：Ich komme aus Frankreich——大多数国家名不需要冠词。"
      },
      chunks: [
        { id: "g1", translations: { de: "Woher kommen Sie?", en: "Where are you from? (wh-question: woher)", ja: "どこから きましたか？（ぎもんし：woher）", zh: "您从哪里来？（疑问词：woher）" } },
        { id: "g2", translations: { de: "Ich komme aus Frankreich.", en: "I come from France. (aus + country)", ja: "フランスから きました。（aus + くに）", zh: "我从法国来。（aus + 国家）" } },
        { id: "g3", translations: { de: "Sind Sie Japaner?", en: "Are you Japanese? (yes/no, verb-first)", ja: "にほんじんですか？（はい・いいえ、どうしが さいしょ）", zh: "您是日本人吗？（是非问句，动词提前）" } },
        { id: "g4", translations: { de: "Nein, ich bin Koreaner.", en: "No, I'm Korean. (negative answer)", ja: "いいえ、かんこくじんです。（ひていの こたえ）", zh: "不，我是韩国人。（否定回答）" } },
        { id: "g5", translations: { de: "Was gefällt Ihnen an der Kultur?", en: "What do you like about the culture? (wh-question: was)", ja: "ぶんかの なにが すきですか？（ぎもんし：was）", zh: "您喜欢文化中的什么？（疑问词：was）" } },
        { id: "g6", translations: { de: "Wann sind Sie nach Japan gekommen?", en: "When did you come to Japan? (wh-question: wann)", ja: "いつ にほんへ きましたか？（ぎもんし：wann）", zh: "您是什么时候来日本的？（疑问词：wann）" } }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-woher",
        title: { de: "Übung: woher / aus", en: "Practice: Woher / Aus", ja: "れんしゅう：woher と aus", zh: "练习：woher／aus" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit woher und aus.",
          en: "Next, let's practice example sentences using woher and aus.",
          ja: "つぎは、woher と aus を つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用woher和aus的例句。"
        },
        lines: [
          { id: "w1", translations: { de: "Woher kommen Sie?", en: "Where are you from?", ja: "どこから きましたか？", zh: "您从哪里来？" } },
          { id: "w2", translations: { de: "Ich komme aus Deutschland.", en: "I come from Germany.", ja: "ドイツから きました。", zh: "我从德国来。" } },
          { id: "w3", translations: { de: "Er kommt aus China.", en: "He comes from China.", ja: "かれは ちゅうごくから きました。", zh: "他从中国来。" } },
          { id: "w4", translations: { de: "Sie kommt aus Amerika.", en: "She comes from America.", ja: "かのじょは アメリカから きました。", zh: "她从美国来。" } },
          { id: "w5", translations: { de: "Wir kommen aus Großbritannien.", en: "We come from the UK.", ja: "わたしたちは イギリスから きました。", zh: "我们从英国来。" } },
          { id: "w6", translations: { de: "Was ist Ihre Staatsangehörigkeit?", en: "What is your nationality? (wh-question: was)", ja: "こくせきは なんですか？（ぎもんし：was）", zh: "您的国籍是什么？（疑问词：was）" } },
          { id: "w7", translations: { de: "Wo sind Sie geboren?", en: "Where were you born? (wh-question: wo)", ja: "どこで うまれましたか？（ぎもんし：wo）", zh: "您在哪里出生？（疑问词：wo）" } },
          { id: "w8", translations: { de: "Wie heißt die Hauptstadt?", en: "What is the capital called? (wh-question: wie)", ja: "しゅとは なんと いいますか？（ぎもんし：wie）", zh: "首都叫什么名字？（疑问词：wie）" } },
          { id: "w9", translations: { de: "Sprechen Sie Deutsch?", en: "Do you speak German? (yes/no, verb-first)", ja: "ドイツごを はなしますか？（はい・いいえ、どうしが さいしょ）", zh: "您说德语吗？（是非问句，动词提前）" } },
          { id: "w10", translations: { de: "Ja, ich spreche auch Englisch.", en: "Yes, I also speak English. (positive answer)", ja: "はい、えいごも はなします。（ひていでない こたえ）", zh: "是的，我也说英语。（肯定回答）" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        n_r: { ja: "「ん」＋ ら行 → n の おと", en: "ん before the ra-row → sounds like \"n\"", de: "ん vor der ra-Reihe → klingt wie „n\"", zh: "ん在ら行前 → 读作「n」" },
        pitch: { ja: "アクセント（ふくしゅう、あたらしい ペア）", en: "Pitch accent (reinforced, new pairs)", de: "Tonhöhenakzent (vertieft, neue Paare)", zh: "声调重音（巩固，新词对）" }
      },
      items: [
        { id: "nr1", category: "n_r", translations: { ja: "げんご", en: "language (ん before g, review)", de: "Sprache (ん vor g, Wiederholung)", zh: "语言（ん在g前，复习）" } },
        { id: "nr2", category: "n_r", translations: { ja: "こんど", en: "next time (ん before d)", de: "nächstes Mal (ん vor d)", zh: "下次（ん在d前）" } },
        { id: "nr3", category: "n_r", translations: { ja: "べんり", en: "convenient (ん before r — sounds close to \"n\")", de: "praktisch (ん vor r — klingt fast wie „n\")", zh: "方便（ん在r前——接近「n」音）" } },
        { id: "nr4", category: "n_r", translations: { ja: "あんない", en: "guidance, information (ん before n)", de: "Führung, Auskunft (ん vor n)", zh: "向导，指引（ん在n前）" } },
        { id: "p1", category: "pitch", translations: { ja: "くに", en: "country (LH) / — (single reading, new word)", de: "Land (LH) / — (einzelne Lesung, neues Wort)", zh: "国家（低高）/ ——（单一读法，新词）" } },
        { id: "p2", category: "pitch", translations: { ja: "はし", en: "chopsticks (HL) / bridge (LH)", de: "Essstäbchen (HL) / Brücke (LH)", zh: "筷子（高低）／桥（低高）" } },
        { id: "p3", category: "pitch", translations: { ja: "かみ", en: "hair, paper (HL) / god (LH)", de: "Haar, Papier (HL) / Gott (LH)", zh: "头发、纸（高低）／神（低高）" } },
        { id: "p4", category: "pitch", translations: { ja: "すむ", en: "to live, reside (LH) — new word, single pattern", de: "wohnen (LH) — neues Wort, einzelnes Muster", zh: "居住（低高）——新词，单一声调" } }
      ]
    },
    de: {
      title: { de: "Aussprachetraining", en: "Pronunciation Practice", ja: "はつおんの れんしゅう", zh: "发音练习" },
      groupLabels: {
        j_y: { de: "J klingt wie englisches \"Y\"", en: "J sounds like English \"Y\"", ja: "J は えいごの「Y」の おと", zh: "J发音像英语的\"Y\"" },
        stress: { de: "Wortbetonung bei Länder-Lehnwörtern", en: "Word stress in loanword country names", ja: "がいらいごの くにめいの アクセント", zh: "外来语国名的词重音" }
      },
      items: [
        { id: "jy1", category: "j_y", translations: { de: "Jahr", en: "year", ja: "とし、ねん", zh: "年" } },
        { id: "jy2", category: "j_y", translations: { de: "jung", en: "young", ja: "わかい", zh: "年轻" } },
        { id: "jy3", category: "j_y", translations: { de: "Japan", en: "Japan", ja: "にほん", zh: "日本" } },
        { id: "st1", category: "stress", translations: { de: "Amerika", en: "America", ja: "アメリカ", zh: "美国" } },
        { id: "st2", category: "stress", translations: { de: "Europa", en: "Europe", ja: "ヨーロッパ", zh: "欧洲" } },
        { id: "st3", category: "stress", translations: { de: "Kanada", en: "Canada", ja: "カナダ", zh: "加拿大" } }
      ]
    }
  },
  pronunciationDrills: {
    de: [
      {
        id: "sound-drill",
        title: {
          de: "Aussprachetraining 2",
          en: "Pronunciation Practice 2",
          ja: "はつおんの れんしゅう２",
          zh: "发音练习2"
        },
        spokenIntro: {
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          en: "Next, let's practice with a lot more examples.",
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          jy1: { de: "J klingt wie \"Y\"", en: "J sounds like \"Y\"", ja: "J は「Y」の おと", zh: "J发音像\"Y\"" },
          jy2: { de: "J klingt wie \"Y\"", en: "J sounds like \"Y\"", ja: "J は「Y」の おと", zh: "J发音像\"Y\"" },
          stress1: { de: "Wortbetonung (Lehnwörter)", en: "Word stress (loanwords)", ja: "アクセント（がいらいご）", zh: "词重音（外来语）" },
          stress2: { de: "Wortbetonung (Lehnwörter)", en: "Word stress (loanwords)", ja: "アクセント（がいらいご）", zh: "词重音（外来语）" }
        },
        items: [
          { id: "jy1_1", category: "jy1", translations: { de: "Junge", en: "boy", ja: "おとこのこ", zh: "男孩" } },
          { id: "jy1_2", category: "jy1", translations: { de: "jetzt", en: "now", ja: "いま", zh: "现在" } },
          { id: "jy1_3", category: "jy1", translations: { de: "Jacke", en: "jacket", ja: "ジャケット", zh: "夹克" } },
          { id: "jy1_4", category: "jy1", translations: { de: "Juli", en: "July", ja: "しちがつ", zh: "七月" } },
          { id: "jy1_5", category: "jy1", translations: { de: "Juni", en: "June", ja: "ろくがつ", zh: "六月" } },
          { id: "jy1_6", category: "jy1", translations: { de: "Januar", en: "January", ja: "いちがつ", zh: "一月" } },
          { id: "jy1_7", category: "jy1", translations: { de: "jeder", en: "everyone", ja: "みんな", zh: "每个人" } },
          { id: "jy1_8", category: "jy1", translations: { de: "Jugend", en: "youth", ja: "せいしゅん", zh: "青年时期" } },
          { id: "jy1_9", category: "jy1", translations: { de: "Job", en: "job", ja: "しごと", zh: "工作" } },
          { id: "jy1_10", category: "jy1", translations: { de: "Joghurt", en: "yogurt", ja: "ヨーグルト", zh: "酸奶" } },
          { id: "jy1_11", category: "jy1", translations: { de: "jemand", en: "someone", ja: "だれか", zh: "某人" } },
          { id: "jy1_12", category: "jy1", translations: { de: "Jäger", en: "hunter", ja: "りょうし", zh: "猎人" } },
          { id: "jy1_13", category: "jy1", translations: { de: "jagen", en: "to hunt", ja: "かりを する", zh: "打猎" } },
          { id: "jy1_14", category: "jy1", translations: { de: "Journalist", en: "journalist", ja: "きしゃ", zh: "记者" } },

          { id: "jy2_1", category: "jy2", translations: { de: "Juwel", en: "jewel", ja: "ほうせき", zh: "珠宝" } },
          { id: "jy2_2", category: "jy2", translations: { de: "Jubiläum", en: "anniversary", ja: "きねんび", zh: "周年纪念" } },
          { id: "jy2_3", category: "jy2", translations: { de: "jonglieren", en: "to juggle", ja: "ジャグリングする", zh: "玩杂耍" } },
          { id: "jy2_4", category: "jy2", translations: { de: "Jodler", en: "yodeler", ja: "ヨーデルうたい", zh: "约德尔歌手" } },
          { id: "jy2_5", category: "jy2", translations: { de: "Jute", en: "jute", ja: "ジュート", zh: "黄麻" } },
          { id: "jy2_6", category: "jy2", translations: { de: "Joker", en: "joker", ja: "ジョーカー", zh: "小丑牌" } },
          { id: "jy2_7", category: "jy2", translations: { de: "Jupiter", en: "Jupiter", ja: "もくせい", zh: "木星" } },
          { id: "jy2_8", category: "jy2", translations: { de: "Justiz", en: "justice", ja: "しほう", zh: "司法" } },
          { id: "jy2_9", category: "jy2", translations: { de: "jeweils", en: "respectively", ja: "それぞれ", zh: "分别" } },
          { id: "jy2_10", category: "jy2", translations: { de: "jederzeit", en: "anytime", ja: "いつでも", zh: "随时" } },
          { id: "jy2_11", category: "jy2", translations: { de: "Jungfrau", en: "virgin, Virgo", ja: "おとめざ", zh: "处女座" } },
          { id: "jy2_12", category: "jy2", translations: { de: "Jockey", en: "jockey", ja: "きしゅ", zh: "骑师" } },
          { id: "jy2_13", category: "jy2", translations: { de: "Jubel", en: "cheering", ja: "かんせい", zh: "欢呼" } },
          { id: "jy2_14", category: "jy2", translations: { de: "Jargon", en: "jargon", ja: "せんもんようご", zh: "行话" } },

          { id: "st1_1", category: "stress1", translations: { de: "Asien", en: "Asia", ja: "アジア", zh: "亚洲" } },
          { id: "st1_2", category: "stress1", translations: { de: "Australien", en: "Australia", ja: "オーストラリア", zh: "澳大利亚" } },
          { id: "st1_3", category: "stress1", translations: { de: "Kolumbien", en: "Colombia", ja: "コロンビア", zh: "哥伦比亚" } },
          { id: "st1_4", category: "stress1", translations: { de: "Argentinien", en: "Argentina", ja: "アルゼンチン", zh: "阿根廷" } },
          { id: "st1_5", category: "stress1", translations: { de: "Brasilien", en: "Brazil", ja: "ブラジル", zh: "巴西" } },
          { id: "st1_6", category: "stress1", translations: { de: "Mexiko", en: "Mexico", ja: "メキシコ", zh: "墨西哥" } },
          { id: "st1_7", category: "stress1", translations: { de: "Ägypten", en: "Egypt", ja: "エジプト", zh: "埃及" } },
          { id: "st1_8", category: "stress1", translations: { de: "Marokko", en: "Morocco", ja: "モロッコ", zh: "摩洛哥" } },
          { id: "st1_9", category: "stress1", translations: { de: "Tunesien", en: "Tunisia", ja: "チュニジア", zh: "突尼斯" } },
          { id: "st1_10", category: "stress1", translations: { de: "Indonesien", en: "Indonesia", ja: "インドネシア", zh: "印度尼西亚" } },
          { id: "st1_11", category: "stress1", translations: { de: "Malaysia", en: "Malaysia", ja: "マレーシア", zh: "马来西亚" } },
          { id: "st1_12", category: "stress1", translations: { de: "Thailand", en: "Thailand", ja: "タイ", zh: "泰国" } },
          { id: "st1_13", category: "stress1", translations: { de: "Vietnam", en: "Vietnam", ja: "ベトナム", zh: "越南" } },
          { id: "st1_14", category: "stress1", translations: { de: "Kambodscha", en: "Cambodia", ja: "カンボジア", zh: "柬埔寨" } },

          { id: "st2_1", category: "stress2", translations: { de: "Mongolei", en: "Mongolia", ja: "モンゴル", zh: "蒙古" } },
          { id: "st2_2", category: "stress2", translations: { de: "Kasachstan", en: "Kazakhstan", ja: "カザフスタン", zh: "哈萨克斯坦" } },
          { id: "st2_3", category: "stress2", translations: { de: "Usbekistan", en: "Uzbekistan", ja: "ウズベキスタン", zh: "乌兹别克斯坦" } },
          { id: "st2_4", category: "stress2", translations: { de: "Aserbaidschan", en: "Azerbaijan", ja: "アゼルバイジャン", zh: "阿塞拜疆" } },
          { id: "st2_5", category: "stress2", translations: { de: "Georgien", en: "Georgia", ja: "ジョージア", zh: "格鲁吉亚" } },
          { id: "st2_6", category: "stress2", translations: { de: "Armenien", en: "Armenia", ja: "アルメニア", zh: "亚美尼亚" } },
          { id: "st2_7", category: "stress2", translations: { de: "Rumänien", en: "Romania", ja: "ルーマニア", zh: "罗马尼亚" } },
          { id: "st2_8", category: "stress2", translations: { de: "Bulgarien", en: "Bulgaria", ja: "ブルガリア", zh: "保加利亚" } },
          { id: "st2_9", category: "stress2", translations: { de: "Kroatien", en: "Croatia", ja: "クロアチア", zh: "克罗地亚" } },
          { id: "st2_10", category: "stress2", translations: { de: "Slowenien", en: "Slovenia", ja: "スロベニア", zh: "斯洛文尼亚" } },
          { id: "st2_11", category: "stress2", translations: { de: "Albanien", en: "Albania", ja: "アルバニア", zh: "阿尔巴尼亚" } },
          { id: "st2_12", category: "stress2", translations: { de: "Mazedonien", en: "North Macedonia", ja: "マケドニア", zh: "北马其顿" } },
          { id: "st2_13", category: "stress2", translations: { de: "Montenegro", en: "Montenegro", ja: "モンテネグロ", zh: "黑山" } },
          { id: "st2_14", category: "stress2", translations: { de: "Afrika", en: "Africa", ja: "アフリカ", zh: "非洲" } }
        ]
      }
    ]
  }
};
