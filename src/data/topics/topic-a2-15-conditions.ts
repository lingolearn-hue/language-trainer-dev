import type { TopicLesson } from "../topicTypes";

// A2 — row 16 of docs/a2-master-lesson-table-v01.md. Grammar: 〜ても
// (even if / even though — concessive conditional). Pronunciation
// 1/2 (K vs G, T vs CH) kept exactly as assigned.

export const topicConditions: TopicLesson = {
  id: "topic-a2-15-conditions",
  lessonNumber: 15,
  level: "A2",
  topicName: {
    ja: "じょうけん",
    en: "Conditions",
    de: "Bedingungen",
    zh: "条件"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "きそく", jaKanji: "規則", en: "rule", de: "Regel", zh: "规则" } },
    { id: "v02", category: "noun", translations: { ja: "れいがい", jaKanji: "例外", en: "exception", de: "Ausnahme", zh: "例外" } },
    { id: "v03", category: "noun", translations: { ja: "じょうけん", jaKanji: "条件", en: "condition", de: "Bedingung", zh: "条件" } },
    { id: "v04", category: "noun", translations: { ja: "きんし", jaKanji: "禁止", en: "prohibition", de: "Verbot", zh: "禁止" } },
    { id: "v05", category: "noun", translations: { ja: "きょか", jaKanji: "許可", en: "permission", de: "Erlaubnis", zh: "许可" } },
    { id: "v06", category: "noun", translations: { ja: "りゆう", jaKanji: "理由", en: "reason", de: "Grund", zh: "理由" } },
    { id: "v07", category: "noun", translations: { ja: "ばあい", jaKanji: "場合", en: "case, situation", de: "Fall", zh: "情况" } },
    { id: "v08", category: "noun", translations: { ja: "てんこう", jaKanji: "天候", en: "weather conditions", de: "Wetterlage", zh: "天气状况" } },
    { id: "v09", category: "noun", translations: { ja: "じたい", jaKanji: "事態", en: "situation, state of affairs", de: "Lage", zh: "事态" } },
    { id: "v10", category: "noun", translations: { ja: "へんこう", jaKanji: "変更", en: "change", de: "Änderung", zh: "变更" } },
    { id: "v11", category: "verb", translations: { ja: "まもる", jaKanji: "守る", en: "to follow, protect", de: "einhalten, schützen", zh: "遵守，保护" } },
    { id: "v12", category: "verb", translations: { ja: "やぶる", jaKanji: "破る", en: "to break (a rule)", de: "brechen (Regel)", zh: "违反" } },
    { id: "v13", category: "verb", translations: { ja: "みとめる", jaKanji: "認める", en: "to accept, approve", de: "anerkennen", zh: "承认，批准" } },
    { id: "v14", category: "verb", translations: { ja: "ことわる", jaKanji: "断る", en: "to refuse, decline", de: "ablehnen", zh: "拒绝" } },
    { id: "v15", category: "verb", translations: { ja: "がまんする", jaKanji: "我慢する", en: "to endure, put up with", de: "aushalten", zh: "忍耐" } },
    { id: "v16", category: "verb", translations: { ja: "つづける", jaKanji: "続ける", en: "to continue", de: "fortsetzen", zh: "继续" } },
    { id: "v17", category: "verb", translations: { ja: "あきらめる", jaKanji: "諦める", en: "to give up", de: "aufgeben", zh: "放弃" } },
    { id: "v18", category: "verb", translations: { ja: "がんばる", jaKanji: "頑張る", en: "to try hard, persevere", de: "sich anstrengen", zh: "努力" } },
    { id: "v19", category: "verb", translations: { ja: "きめる", jaKanji: "決める", en: "to decide", de: "entscheiden", zh: "决定" } },
    { id: "v20", category: "verb", translations: { ja: "かわる", jaKanji: "変わる", en: "to change", de: "sich ändern", zh: "改变" } },
    { id: "v21", category: "adjective", translations: { ja: "きびしい", jaKanji: "厳しい", en: "strict", de: "streng", zh: "严格" } },
    { id: "v22", category: "adjective", translations: { ja: "ゆるい", jaKanji: "緩い", en: "lenient, loose", de: "locker", zh: "宽松" } },
    { id: "v23", category: "adjective", translations: { ja: "たいせつな", jaKanji: "大切な", en: "important", de: "wichtig", zh: "重要的" } },
    { id: "v24", category: "adjective", translations: { ja: "ふあんな", jaKanji: "不安な", en: "anxious, uneasy", de: "unsicher", zh: "不安的" } },
    { id: "v25", category: "adjective", translations: { ja: "むりな", jaKanji: "無理な", en: "impossible, unreasonable", de: "unmöglich", zh: "勉强的" } },
    { id: "v26", category: "noun", translations: { ja: "きんえん", jaKanji: "禁煙", en: "no smoking", de: "Rauchverbot", zh: "禁烟" } },
    { id: "v27", category: "noun", translations: { ja: "しゃない", jaKanji: "車内", en: "inside the vehicle", de: "im Fahrzeug", zh: "车内" } },
    { id: "v28", category: "noun", translations: { ja: "けいたい", jaKanji: "携帯", en: "cell phone", de: "Handy", zh: "手机" } },
    { id: "v29", category: "adverb", translations: { ja: "たとえ", jaKanji: "たとえ", en: "even if (used with 〜ても)", de: "selbst wenn", zh: "即使" } },
    { id: "v30", category: "adverb", translations: { ja: "けっして", jaKanji: "決して", en: "never, absolutely not (with negative)", de: "keinesfalls", zh: "绝不" } }
  ],
  dialogueA: {
    title: { ja: "きそくの れいがいに ついて はなす", en: "Discussing Exceptions to Rules", de: "Über Ausnahmen von Regeln sprechen", zh: "讨论规则的例外" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "この としょかんは きびしいですね。", jaKanji: "この図書館は厳しいですね。", en: "This library is strict, isn't it.", de: "Diese Bibliothek ist streng, oder?", zh: "这个图书馆很严格呢。" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "はい。たとえ しずかでも、けいたいを つかっては いけません。", jaKanji: "はい。たとえ静かでも、携帯を使ってはいけません。", en: "Yes. Even if it's quiet, you can't use your cell phone.", de: "Ja. Auch wenn es ruhig ist, darf man das Handy nicht benutzen.", zh: "是的。即使很安静，也不能用手机。" } },
      { id: "d3", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "でも、きんきゅうの ときは どうしますか？", jaKanji: "でも、緊急の時はどうしますか？", en: "But what about in an emergency?", de: "Aber was ist im Notfall?", zh: "但是紧急情况怎么办？" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "きんきゅうでも、そとに でてから でんわします。", jaKanji: "緊急でも、外に出てから電話します。", en: "Even in an emergency, you go outside first, then make a call.", de: "Auch im Notfall geht man erst nach draußen und telefoniert dann.", zh: "即使是紧急情况，也要先出去再打电话。" } },
      { id: "d5", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "たべものは たべても いいですか？", jaKanji: "食べ物は食べてもいいですか？", en: "Is it okay to eat food?", de: "Darf man Essen essen?", zh: "可以吃东西吗？" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいえ、のみものだけは のんでも いいですが、たべものは だめです。", jaKanji: "いいえ、飲み物だけは飲んでもいいですが、食べ物はだめです。", en: "No, drinks are okay, but food isn't.", de: "Nein, nur Getränke sind erlaubt, aber Essen nicht.", zh: "不，只有饮料可以喝，但食物不行。" } },
      { id: "d7", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きびしくても、みんな きそくを まもって いますか？", jaKanji: "厳しくても、みんな規則を守っていますか？", en: "Even though it's strict, does everyone follow the rules?", de: "Auch wenn es streng ist, hält sich jeder an die Regeln?", zh: "虽然严格，但大家都遵守规则吗？" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "ほとんどの ひとは まもって いますが、たまに やぶる ひとも います。", jaKanji: "ほとんどの人は守っていますが、たまに破る人もいます。", en: "Most people follow them, but occasionally someone breaks the rules.", de: "Die meisten halten sich daran, aber manchmal gibt es jemanden, der die Regeln bricht.", zh: "大多数人都遵守，但偶尔也有人违反。" } },
      { id: "d9", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "きんえんの ばしょでも タバコを すう ひとが いますか？", jaKanji: "禁煙の場所でもタバコを吸う人がいますか？", en: "Are there people who smoke even in no-smoking areas?", de: "Gibt es Leute, die auch in Nichtraucherzonen rauchen?", zh: "在禁烟场所也有人抽烟吗？" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "けっして おおくは ないですが、たまに います。", jaKanji: "決して多くはないですが、たまにいます。", en: "There aren't many at all, but occasionally there are.", de: "Es sind absolut nicht viele, aber manchmal gibt es welche.", zh: "绝对不多，但偶尔会有。" } },
      { id: "d11", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "むりな きそくだと おもいますか？", jaKanji: "無理な規則だと思いますか？", en: "Do you think the rules are unreasonable?", de: "Denken Sie, die Regeln sind unvernünftig?", zh: "你觉得这规则不合理吗？" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "いいえ、たいせつな きそくだと おもいます。", jaKanji: "いいえ、大切な規則だと思います。", en: "No, I think they're important rules.", de: "Nein, ich denke, es sind wichtige Regeln.", zh: "不，我觉得是重要的规则。" } },
      { id: "d13", speaker: { ja: "あい", en: "Ai", de: "Ai", zh: "爱" }, translations: { ja: "みんなが がまんすれば、きもちよく つかえますね。", jaKanji: "みんなが我慢すれば、気持ちよく使えますね。", en: "If everyone endures a little, everyone can use it comfortably.", de: "Wenn alle etwas Geduld haben, kann man sie angenehm nutzen.", zh: "只要大家都忍耐一下，就能舒适地使用了呢。" } },
      { id: "d14", speaker: { ja: "けん", en: "Ken", de: "Ken", zh: "健" }, translations: { ja: "そうですね。れいがいを みとめると、きそくの いみが なくなりますから。", jaKanji: "そうですね。例外を認めると、規則の意味がなくなりますから。", en: "That's right. If we allow exceptions, the rules lose their meaning.", de: "Genau. Wenn man Ausnahmen zulässt, verlieren die Regeln ihren Sinn.", zh: "是啊。如果承认例外，规则就失去意义了。" } }
    ]
  },
  dialogueB: {
    title: { ja: "へんこうが あった ときに どう なるか せつめいする", en: "Explaining What Happens if Something Changes", de: "Erklären, was passiert, wenn sich etwas ändert", zh: "说明变化发生时会怎样" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "てんきが わるくても、イベントは ありますか？", jaKanji: "天気が悪くても、イベントはありますか？", en: "Even if the weather is bad, will the event still happen?", de: "Findet die Veranstaltung auch bei schlechtem Wetter statt?", zh: "即使天气不好，活动也会举行吗？" } },
      { id: "e2", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "あめが ふっても、たてものの なかで やります。", jaKanji: "雨が降っても、建物の中でやります。", en: "Even if it rains, we'll hold it inside a building.", de: "Auch wenn es regnet, findet sie in einem Gebäude statt.", zh: "即使下雨，也会在室内举行。" } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "たいふうが きても、ちゅうしに なりませんか？", jaKanji: "台風が来ても、中止になりませんか？", en: "Even if a typhoon comes, won't it be canceled?", de: "Wird sie nicht abgesagt, auch wenn ein Taifun kommt?", zh: "即使台风来了，也不会取消吗？" } },
      { id: "e4", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "たいふうの ばあいだけは、へんこうします。", jaKanji: "台風の場合だけは、変更します。", en: "Only in the case of a typhoon will we change it.", de: "Nur im Fall eines Taifuns wird sie geändert.", zh: "只有台风的情况下才会变更。" } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "さんかしゃが すくなくても、やりますか？", jaKanji: "参加者が少なくても、やりますか？", en: "Even if there are few participants, will you still do it?", de: "Machen Sie es auch, wenn es wenige Teilnehmer gibt?", zh: "即使参加者少，也会举行吗？" } },
      { id: "e6", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、ひとりでも いれば、やります。", jaKanji: "はい、一人でもいれば、やります。", en: "Yes, even if there's just one person, we'll do it.", de: "Ja, auch wenn nur eine Person da ist, machen wir es.", zh: "是的，即使只有一个人，也会举行。" } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じかんが おそくなっても、だいじょうぶですか？", jaKanji: "時間が遅くなっても、大丈夫ですか？", en: "Even if the time runs late, is that okay?", de: "Ist es auch okay, wenn es später wird?", zh: "即使时间晚了也没关系吗？" } },
      { id: "e8", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "すこし おそくなっても、もんだい ないです。", jaKanji: "少し遅くなっても、問題ないです。", en: "Even if it runs a little late, there's no problem.", de: "Auch wenn es etwas später wird, ist es kein Problem.", zh: "即使稍微晚一点也没问题。" } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "よやくを ことわられても、はいれますか？", jaKanji: "予約を断られても、入れますか？", en: "Even if a reservation is declined, can we still get in?", de: "Kann man auch reinkommen, wenn eine Reservierung abgelehnt wird?", zh: "即使预约被拒绝了，也能进去吗？" } },
      { id: "e10", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "よやくが なくても、はいれる ばあいが あります。", jaKanji: "予約がなくても、入れる場合があります。", en: "There are cases where you can get in even without a reservation.", de: "Es gibt Fälle, in denen man auch ohne Reservierung reinkommen kann.", zh: "有时即使没有预约也能进去。" } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "じたいが かわっても、れんらくして くれますか？", jaKanji: "事態が変わっても、連絡してくれますか？", en: "Even if the situation changes, will you contact us?", de: "Werden Sie sich melden, auch wenn sich die Lage ändert?", zh: "即使情况变了，也会联系我们吗？" } },
      { id: "e12", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "はい、なにが あっても、かならず れんらくします。", jaKanji: "はい、何があっても、必ず連絡します。", en: "Yes, no matter what happens, we'll always contact you.", de: "Ja, egal was passiert, wir melden uns auf jeden Fall.", zh: "是的，无论发生什么，一定会联系的。" } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho", de: "Miho", zh: "美穗" }, translations: { ja: "きょかが なくても、さんかできますか？", jaKanji: "許可がなくても、参加できますか？", en: "Can I participate even without permission?", de: "Kann ich auch ohne Erlaubnis teilnehmen?", zh: "即使没有许可也能参加吗？" } },
      { id: "e14", speaker: { ja: "そら", en: "Sora", de: "Sora", zh: "空" }, translations: { ja: "いいえ、きょかが なければ、さんかできません。", jaKanji: "いいえ、許可がなければ、参加できません。", en: "No, without permission, you can't participate.", de: "Nein, ohne Erlaubnis können Sie nicht teilnehmen.", zh: "不，没有许可就不能参加。" } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ても：じょうけんと ぎゃくせつ", en: "~Temo: Concessive Conditions", de: "~Temo: Konzessive Bedingungen", zh: "〜ても：让步条件" },
      explanation: {
        ja: "「〜ても」は どうしの て-けい に「も」を つけて、「たとえ Aでも、Bは かわらない」という いみを あらわします。「あめが ふっても、いきます」（あめが ふる ことは Bに えいきょうしない）。けいようしは「〜くても」（い-けいようし）、「〜でも」（な-けいようし／めいし）に なります。",
        en: "~temo attaches も to the te-form of a verb, meaning \"even if A happens, B doesn't change.\" \"あめが ふっても、いきます\" (even if it rains, I'll go — the rain doesn't affect B). Adjectives take 〜くても (i-adjectives) or 〜でも (na-adjectives/nouns).",
        de: "~temo hängt も an die te-Form eines Verbs an und bedeutet \"selbst wenn A passiert, ändert sich B nicht.\" \"あめが ふっても、いきます\" (auch wenn es regnet, gehe ich — der Regen beeinflusst B nicht). Adjektive nehmen 〜くても (i-Adjektive) oder 〜でも (na-Adjektive/Nomen) an.",
        zh: "〜ても在动词て形后加も，意为\"即使发生A，B也不会改变\"。「あめが ふっても、いきます」（即使下雨也会去——下雨不影响B）。形容词用〜くても（い形容词）或〜でも（な形容词／名词）。"
      },
      chunks: [
        { id: "g1", translations: { ja: "あめが ふっても、いきます。", jaKanji: "雨が降っても、行きます。", en: "Even if it rains, I'll go.", de: "Auch wenn es regnet, gehe ich.", zh: "即使下雨也去。" } },
        { id: "g2", translations: { ja: "いそがしくても、てつだいます。", jaKanji: "忙しくても、手伝います。", en: "Even if I'm busy, I'll help.", de: "Auch wenn ich beschäftigt bin, helfe ich.", zh: "即使忙也会帮忙。" } },
        { id: "g3", translations: { ja: "しずかでも、けいたいは つかえません。", jaKanji: "静かでも、携帯は使えません。", en: "Even if it's quiet, you can't use your cell phone.", de: "Auch wenn es ruhig ist, darf man das Handy nicht benutzen.", zh: "即使安静也不能用手机。" } },
        { id: "g4", translations: { ja: "たかくても、かいます。", jaKanji: "高くても、買います。", en: "Even if it's expensive, I'll buy it.", de: "Auch wenn es teuer ist, kaufe ich es.", zh: "即使贵也会买。" } },
        { id: "g5", translations: { ja: "こどもでも、りかいできます。", jaKanji: "子供でも、理解できます。", en: "Even a child can understand.", de: "Selbst ein Kind kann das verstehen.", zh: "即使是孩子也能理解。" } },
        { id: "g6", translations: { ja: "なんども れんしゅうしても、じょうずに なりません。", jaKanji: "何度も練習しても、上手になりません。", en: "Even if I practice many times, I don't get better.", de: "Auch wenn ich oft übe, werde ich nicht besser.", zh: "即使练习很多次也不会变熟练。" } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice", de: "Aussprachetraining", zh: "发音练习" },
      groupLabels: {
        k: { ja: "K", en: "K", de: "K", zh: "K" },
        g: { ja: "G", en: "G", de: "G", zh: "G" },
        t: { ja: "T", en: "T", de: "T", zh: "T" },
        ch: { ja: "CH", en: "CH", de: "CH", zh: "CH" }
      },
      items: [
        { id: "k1", category: "k", translations: { ja: "きそく", en: "rule", de: "Regel", zh: "规则" } },
        { id: "k2", category: "k", translations: { ja: "きんし", en: "prohibition", de: "Verbot", zh: "禁止" } },
        { id: "k3", category: "k", translations: { ja: "きめる", en: "to decide", de: "entscheiden", zh: "决定" } },
        { id: "k4", category: "k", translations: { ja: "きょか", en: "permission", de: "Erlaubnis", zh: "许可" } },
        { id: "g1", category: "g", translations: { ja: "がまんする", en: "to endure", de: "aushalten", zh: "忍耐" } },
        { id: "g2", category: "g", translations: { ja: "がんばる", en: "to try hard", de: "sich anstrengen", zh: "努力" } },
        { id: "g3", category: "g", translations: { ja: "げんいん", en: "cause", de: "Ursache", zh: "原因" } },
        { id: "g4", category: "g", translations: { ja: "ごうかく", en: "passing (an exam)", de: "Bestehen", zh: "合格" } },
        { id: "t1", category: "t", translations: { ja: "たいせつな", en: "important", de: "wichtig", zh: "重要的" } },
        { id: "t2", category: "t", translations: { ja: "つづける", en: "to continue", de: "fortsetzen", zh: "继续" } },
        { id: "t3", category: "t", translations: { ja: "とくべつな", en: "special", de: "besonders", zh: "特别的" } },
        { id: "t4", category: "t", translations: { ja: "てんこう", en: "weather conditions", de: "Wetterlage", zh: "天气状况" } },
        { id: "ch1", category: "ch", translations: { ja: "ちゅうし", en: "cancellation", de: "Absage", zh: "取消" } },
        { id: "ch2", category: "ch", translations: { ja: "ちがう", en: "to be different, wrong", de: "anders sein", zh: "不同，不对" } },
        { id: "ch3", category: "ch", translations: { ja: "ちいさな", en: "small", de: "klein", zh: "小的" } },
        { id: "ch4", category: "ch", translations: { ja: "ちょきん", en: "savings", de: "Ersparnisse", zh: "存款" } }
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
          k: { ja: "K", en: "K", de: "K", zh: "K" },
          g: { ja: "G", en: "G", de: "G", zh: "G" },
          t: { ja: "T", en: "T", de: "T", zh: "T" },
          ch: { ja: "CH", en: "CH", de: "CH", zh: "CH" }
        },
        items: [
          { id: "k5", category: "k", translations: { ja: "かいけつする", en: "to solve", de: "lösen", zh: "解决" } },
          { id: "k6", category: "k", translations: { ja: "けっか", en: "result", de: "Ergebnis", zh: "结果" } },
          { id: "k7", category: "k", translations: { ja: "こまる", en: "to be in trouble", de: "in Schwierigkeiten sein", zh: "为难" } },
          { id: "k8", category: "k", translations: { ja: "かんがえる", en: "to think, consider", de: "nachdenken", zh: "思考" } },
          { id: "k9", category: "k", translations: { ja: "きんちょうする", en: "to get nervous", de: "nervös werden", zh: "紧张" } },
          { id: "k10", category: "k", translations: { ja: "けいけん", en: "experience", de: "Erfahrung", zh: "经验" } },
          { id: "k11", category: "k", translations: { ja: "こうかい", en: "regret", de: "Bedauern", zh: "后悔" } },
          { id: "k12", category: "k", translations: { ja: "きぼう", en: "hope, wish", de: "Hoffnung, Wunsch", zh: "希望" } },
          { id: "k13", category: "k", translations: { ja: "けっしん", en: "determination", de: "Entschlossenheit", zh: "决心" } },
          { id: "k14", category: "k", translations: { ja: "こうどう", en: "action, behavior", de: "Verhalten", zh: "行动" } },
          { id: "k15", category: "k", translations: { ja: "かんり", en: "management", de: "Verwaltung", zh: "管理" } },
          { id: "k16", category: "k", translations: { ja: "きょうつう", en: "common, shared", de: "gemeinsam", zh: "共同" } },
          { id: "k17", category: "k", translations: { ja: "けんり", en: "right (entitlement)", de: "Recht", zh: "权利" } },
          { id: "k18", category: "k", translations: { ja: "こんなん", en: "difficulty", de: "Schwierigkeit", zh: "困难" } },

          { id: "g5", category: "g", translations: { ja: "がいねん", en: "concept", de: "Konzept", zh: "概念" } },
          { id: "g6", category: "g", translations: { ja: "ぎむ", en: "duty, obligation", de: "Pflicht", zh: "义务" } },
          { id: "g7", category: "g", translations: { ja: "ぐたいてきな", en: "concrete, specific", de: "konkret", zh: "具体的" } },
          { id: "g8", category: "g", translations: { ja: "げんじつ", en: "reality", de: "Realität", zh: "现实" } },
          { id: "g9", category: "g", translations: { ja: "ごかい", en: "misunderstanding", de: "Missverständnis", zh: "误解" } },
          { id: "g10", category: "g", translations: { ja: "がまん", en: "patience, endurance", de: "Geduld", zh: "忍耐" } },
          { id: "g11", category: "g", translations: { ja: "ぎろん", en: "discussion, debate", de: "Diskussion", zh: "讨论" } },
          { id: "g12", category: "g", translations: { ja: "ぐうぜん", en: "coincidence", de: "Zufall", zh: "偶然" } },
          { id: "g13", category: "g", translations: { ja: "げんじょう", en: "current state", de: "aktueller Zustand", zh: "现状" } },
          { id: "g14", category: "g", translations: { ja: "ごうい", en: "agreement, consensus", de: "Einigung", zh: "达成一致" } },
          { id: "g15", category: "g", translations: { ja: "がっかりする", en: "to be disappointed", de: "enttäuscht sein", zh: "失望" } },
          { id: "g16", category: "g", translations: { ja: "ぎじゅつ", en: "technology, skill", de: "Technik", zh: "技术" } },
          { id: "g17", category: "g", translations: { ja: "ぐたい", en: "concreteness", de: "Konkretheit", zh: "具体" } },
          { id: "g18", category: "g", translations: { ja: "げんそく", en: "principle", de: "Prinzip", zh: "原则" } },

          { id: "t5", category: "t", translations: { ja: "たいおう", en: "response, handling", de: "Umgang, Reaktion", zh: "应对" } },
          { id: "t6", category: "t", translations: { ja: "てつづき", en: "procedure", de: "Verfahren", zh: "手续" } },
          { id: "t7", category: "t", translations: { ja: "とうぜん", en: "naturally, of course", de: "natürlich", zh: "当然" } },
          { id: "t8", category: "t", translations: { ja: "たしょう", en: "somewhat, a little", de: "etwas", zh: "多少" } },
          { id: "t9", category: "t", translations: { ja: "てきとうな", en: "suitable, appropriate", de: "geeignet", zh: "合适的" } },
          { id: "t10", category: "t", translations: { ja: "とりけす", en: "to cancel, retract", de: "widerrufen", zh: "取消" } },
          { id: "t11", category: "t", translations: { ja: "たいど", en: "attitude", de: "Haltung", zh: "态度" } },
          { id: "t12", category: "t", translations: { ja: "ていあん", en: "proposal", de: "Vorschlag", zh: "提案" } },
          { id: "t13", category: "t", translations: { ja: "とくてい", en: "specific, particular", de: "bestimmt", zh: "特定" } },
          { id: "t14", category: "t", translations: { ja: "たんじゅんな", en: "simple", de: "einfach", zh: "单纯的" } },
          { id: "t15", category: "t", translations: { ja: "てじゅん", en: "procedure, steps", de: "Ablauf", zh: "步骤" } },
          { id: "t16", category: "t", translations: { ja: "とうろく", en: "registration", de: "Registrierung", zh: "登记" } },
          { id: "t17", category: "t", translations: { ja: "たいしょう", en: "target, subject", de: "Zielgruppe", zh: "对象" } },
          { id: "t18", category: "t", translations: { ja: "ていし", en: "stop, halt", de: "Stopp", zh: "停止" } },

          { id: "ch5", category: "ch", translations: { ja: "ちゅうもく", en: "attention, focus", de: "Aufmerksamkeit", zh: "关注" } },
          { id: "ch6", category: "ch", translations: { ja: "ちからづよい", en: "reassuring, strong", de: "stark, beruhigend", zh: "有力的" } },
          { id: "ch7", category: "ch", translations: { ja: "ちょくせつ", en: "direct, directly", de: "direkt", zh: "直接" } },
          { id: "ch8", category: "ch", translations: { ja: "ちてき", en: "intellectual", de: "intellektuell", zh: "知性的" } },
          { id: "ch9", category: "ch", translations: { ja: "ちゅうもん", en: "order (request)", de: "Bestellung", zh: "订购" } },
          { id: "ch10", category: "ch", translations: { ja: "ちほう", en: "region, area", de: "Region", zh: "地方" } },
          { id: "ch11", category: "ch", translations: { ja: "ちしき", en: "knowledge", de: "Wissen", zh: "知识" } },
          { id: "ch12", category: "ch", translations: { ja: "ちゅうかん", en: "middle, intermediate", de: "mittel", zh: "中间" } },
          { id: "ch13", category: "ch", translations: { ja: "ちょうさ", en: "investigation, survey", de: "Untersuchung", zh: "调查" } },
          { id: "ch14", category: "ch", translations: { ja: "ちょうせい", en: "adjustment, coordination", de: "Abstimmung", zh: "调整" } },
          { id: "ch15", category: "ch", translations: { ja: "ちゅういぶかい", en: "cautious, careful", de: "vorsichtig", zh: "谨慎的" } },
          { id: "ch16", category: "ch", translations: { ja: "ちゃんと", en: "properly, exactly", de: "ordentlich", zh: "好好地" } },
          { id: "ch17", category: "ch", translations: { ja: "ちゅうと", en: "midway, partway", de: "auf halbem Weg", zh: "中途" } },
          { id: "ch18", category: "ch", translations: { ja: "ちょうわ", en: "harmony, balance", de: "Harmonie", zh: "和谐" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-temo",
        title: { ja: "れんしゅう：〜ても", en: "Practice: ~Temo", de: "Übung: ~Temo", zh: "练习：〜ても" },
        spokenIntro: {
          ja: "つぎは、「〜ても」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~temo.",
          de: "Als Nächstes üben wir Beispielsätze mit ~temo.",
          zh: "接下来，让我们练习使用「〜ても」的例句。"
        },
        lines: [
          { id: "tm1", translations: { ja: "あめが ふっても、いきます。", jaKanji: "雨が降っても、行きます。", en: "Even if it rains, I'll go.", de: "Auch wenn es regnet, gehe ich.", zh: "即使下雨也去。" } },
          { id: "tm2", translations: { ja: "いそがしくても、てつだいます。", jaKanji: "忙しくても、手伝います。", en: "Even if I'm busy, I'll help.", de: "Auch wenn ich beschäftigt bin, helfe ich.", zh: "即使忙也会帮忙。" } },
          { id: "tm3", translations: { ja: "たかくても、かいます。", jaKanji: "高くても、買います。", en: "Even if it's expensive, I'll buy it.", de: "Auch wenn es teuer ist, kaufe ich es.", zh: "即使贵也会买。" } },
          { id: "tm4", translations: { ja: "つかれても、がんばります。", jaKanji: "疲れても、頑張ります。", en: "Even if I'm tired, I'll do my best.", de: "Auch wenn ich müde bin, gebe ich mein Bestes.", zh: "即使累也会努力。" } },
          { id: "tm5", translations: { ja: "むずかしくても、あきらめません。", jaKanji: "難しくても、諦めません。", en: "Even if it's difficult, I won't give up.", de: "Auch wenn es schwierig ist, gebe ich nicht auf.", zh: "即使难也不会放弃。" } },
          { id: "tm6", translations: { ja: "こどもでも、わかります。", jaKanji: "子供でも、分かります。", en: "Even a child can understand.", de: "Selbst ein Kind versteht das.", zh: "即使是孩子也能明白。" } },
          { id: "tm7", translations: { ja: "しずかでも、つかえません。", jaKanji: "静かでも、使えません。", en: "Even if it's quiet, you can't use it.", de: "Auch wenn es ruhig ist, kann man es nicht benutzen.", zh: "即使安静也不能用。" } },
          { id: "tm8", translations: { ja: "きらいでも、たべます。", jaKanji: "嫌いでも、食べます。", en: "Even if I dislike it, I'll eat it.", de: "Auch wenn ich es nicht mag, esse ich es.", zh: "即使不喜欢也会吃。" } },
          { id: "tm9", translations: { ja: "れんしゅうしても、じょうずに なりません。", jaKanji: "練習しても、上手になりません。", en: "Even if I practice, I don't get better.", de: "Auch wenn ich übe, werde ich nicht besser.", zh: "即使练习也不会变熟练。" } },
          { id: "tm10", translations: { ja: "きょかが なくても、はいれます。", jaKanji: "許可がなくても、入れます。", en: "Even without permission, I can enter.", de: "Auch ohne Erlaubnis kann ich reinkommen.", zh: "即使没有许可也能进去。" } }
        ]
      }
    ]
  },
  song: {
    title: { ja: "たとえ そうでも", en: "Even If That's So", de: "Selbst wenn es so ist" },
    lines: [
      { id: "sg1", translations: { ja: "あめが ふっても すすもう", en: "Even if it rains, let's keep going", de: "Auch wenn es regnet, lass uns weitergehen" } },
      { id: "sg2", translations: { ja: "むずかしくても あきらめない", en: "Even if it's hard, I won't give up", de: "Auch wenn es schwer ist, gebe ich nicht auf" } },
      { id: "sg3", translations: { ja: "きびしくても まもろう", en: "Even if it's strict, let's follow it", de: "Auch wenn es streng ist, lass uns es befolgen" } },
      { id: "sg4", translations: { ja: "たとえ そうでも がんばろう", en: "Even if that's so, let's do our best", de: "Selbst wenn es so ist, lass uns unser Bestes geben" } }
    ]
  }
};
