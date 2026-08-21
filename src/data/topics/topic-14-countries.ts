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
    }
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
    }
  }
};
