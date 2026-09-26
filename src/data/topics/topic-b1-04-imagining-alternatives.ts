import type { TopicLesson } from "../topicTypes";

// B1 — row 4 of docs/b1-master-lesson-table-v01.md. Grammar function:
// "Subjunctive/conditional, basic — hypothetical situations" via
// 〜たら／〜なら. First of four rows reinforcing this shared B1
// grammar item across different real-life contexts (rows 4–7 in the
// table — see its intro for the "reinforcement across contexts"
// design, same principle already used for the past-perfect rows
// 1–3).
//
// Scope note: only `ja`/`en`. Kanji written inline from the start.

export const topicImaginingAlternatives: TopicLesson = {
  id: "topic-b1-04-imagining-alternatives",
  lessonNumber: 4,
  level: "B1",
  topicName: {
    ja: "べつの みちを そうぞうする",
    jaKanji: "別の道を想像する",
    en: "Imagining Alternatives",
    fr: "Imaginer d'autres possibilités"
  },
  vocab: [
    { id: "v01", category: "grammar", translations: { ja: "もし", en: "if", fr: "si" } },
    { id: "v02", category: "noun", translations: { ja: "りんじしゅうにゅう", jaKanji: "臨時収入", en: "windfall, unexpected money", fr: "rentrée d'argent inattendue" } },
    { id: "v03", category: "noun", translations: { ja: "たからくじ", jaKanji: "宝くじ", en: "lottery", fr: "loterie" } },
    { id: "v04", category: "verb", translations: { ja: "あたる", jaKanji: "当たる", en: "to win (a prize)", fr: "gagner" } },
    { id: "v05", category: "noun", translations: { ja: "ひゃくまん", jaKanji: "百万", en: "million", fr: "million" } },
    { id: "v06", category: "verb", translations: { ja: "そうぞうする", jaKanji: "想像する", en: "to imagine", fr: "imaginer" } },
    { id: "v07", category: "noun", translations: { ja: "だいあん", jaKanji: "代案", en: "alternative", fr: "alternative" } },
    { id: "v08", category: "noun", translations: { ja: "みち", jaKanji: "道", en: "path (in life)", fr: "chemin (de vie)" } },
    { id: "v09", category: "noun", translations: { ja: "せんたく", jaKanji: "選択", en: "choice", fr: "choix" } },
    { id: "v10", category: "verb", translations: { ja: "えらぶ", jaKanji: "選ぶ", en: "to choose", fr: "choisir" } },
    { id: "v11", category: "noun", translations: { ja: "きかい", jaKanji: "機会", en: "opportunity", fr: "opportunité" } },
    { id: "v12", category: "verb", translations: { ja: "のがす", jaKanji: "逃す", en: "to miss (an opportunity)", fr: "manquer, rater" } },
    { id: "v13", category: "noun", translations: { ja: "こうかい", jaKanji: "後悔", en: "regret", fr: "regret" } },
    { id: "v14", category: "verb", translations: { ja: "こうかいする", jaKanji: "後悔する", en: "to regret", fr: "regretter" } },
    { id: "v15", category: "noun", translations: { ja: "あこがれの しごと", jaKanji: "憧れの仕事", en: "dream job", fr: "travail de rêve" } },
    { id: "v16", category: "verb", translations: { ja: "とうしする", jaKanji: "投資する", en: "to invest", fr: "investir" } },
    { id: "v17", category: "noun", translations: { ja: "ちょきん", jaKanji: "貯金", en: "savings", fr: "économies" } },
    { id: "v18", category: "verb", translations: { ja: "ちょきんする", jaKanji: "貯金する", en: "to save (money)", fr: "économiser" } },
    { id: "v19", category: "verb", translations: { ja: "きふする", jaKanji: "寄付する", en: "to donate", fr: "faire un don" } },
    { id: "v20", category: "noun", translations: { ja: "じぜんだんたい", jaKanji: "慈善団体", en: "charity", fr: "association caritative" } },
    { id: "v21", category: "verb", translations: { ja: "やめる", jaKanji: "辞める", en: "to quit (a job)", fr: "démissionner" } },
    { id: "v22", category: "verb", translations: { ja: "ついきゅうする", jaKanji: "追求する", en: "to pursue (a goal, dream)", fr: "poursuivre (un objectif, un rêve)" } },
    { id: "v23", category: "noun", translations: { ja: "リスク", en: "risk", fr: "risque" } },
    { id: "v24", category: "verb", translations: { ja: "リスクを おかす", jaKanji: "リスクを冒す", en: "to take a risk", fr: "prendre un risque" } },
    { id: "v25", category: "noun", translations: { ja: "あんてい", jaKanji: "安定", en: "stability", fr: "stabilité" } },
    { id: "v26", category: "noun", translations: { ja: "ぼうけん", jaKanji: "冒険", en: "adventure", fr: "aventure" } },
    { id: "v27", category: "noun", translations: { ja: "かのうせい", jaKanji: "可能性", en: "possibility", fr: "possibilité" } },
    { id: "v28", category: "grammar", translations: { ja: "もし〜だったら", en: "what if ~", fr: "et si..." } },
    { id: "v29", category: "adverb", translations: { ja: "げんじつてきに", jaKanji: "現実的に", en: "realistically", fr: "de manière réaliste" } },
    { id: "v30", category: "adverb", translations: { ja: "りそうてきに", jaKanji: "理想的に", en: "ideally", fr: "idéalement" } }
  ],
  dialogueA: {
    title: { ja: "おもいがけない おかねの はなし", jaKanji: "思いがけないお金の話", en: "What Would You Do With a Windfall" },
    lines: [
      { id: "d1", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "たからくじに あたったら、なにを する？", jaKanji: "宝くじに当たったら、何をする？", en: "If you won the lottery, what would you do?", fr: "Si tu gagnais à la loterie, qu'est-ce que tu ferais ?" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "ひゃくまんドル あたったら、たぶん さいしょに せかいじゅうを りょこうすると おもう。", jaKanji: "百万ドル当たったら、たぶん最初に世界中を旅行すると思う。", en: "If I won a million dollars, I would probably travel the world first.", fr: "Si je gagnais un million de dollars, je voyagerais probablement dans le monde entier d'abord." } },
      { id: "d3", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "すごいね。しごとは つづける？", jaKanji: "すごいね。仕事は続ける？", en: "That sounds amazing. Would you keep working?", fr: "C'est génial. Tu continuerais à travailler ?" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "そんなに おかねが あったら、もう はたらく ひつようは ないと おもう。", jaKanji: "そんなにお金があったら、もう働く必要はないと思う。", en: "If I had that much money, I wouldn't need to work anymore.", fr: "Si j'avais autant d'argent, je pense que je n'aurais plus besoin de travailler." } },
      { id: "d5", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "ほんとう？わたしは しごとが なかったら たいくつすると おもう。", jaKanji: "本当？私は仕事がなかったら退屈すると思う。", en: "Really? I think I'd get bored without a job.", fr: "Vraiment ? Moi, je pense que je m'ennuierais sans travail." } },
      { id: "d6", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "じゆうな じかんが あったら、えを かくのに つかいたいな。", jaKanji: "自由な時間があったら、絵を描くのに使いたいな。", en: "If I had free time, I would spend it painting.", fr: "Si j'avais du temps libre, j'aimerais le passer à peindre." } },
      { id: "d7", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "すてきな ゆめだね。きふも する？", jaKanji: "素敵な夢だね。寄付もする？", en: "That's a nice dream. Would you donate any of it?", fr: "Quel joli rêve. Tu ferais aussi des dons ?" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "よぶんな おかねが あったら、ぜったい じぜんだんたいに きふすると おもう。", jaKanji: "余分なお金があったら、絶対慈善団体に寄付すると思う。", en: "If I had extra money, I would definitely donate to a charity.", fr: "Si j'avais de l'argent en plus, je ferais sûrement un don à une association caritative." } },
      { id: "d9", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "どの だんたいを えらぶ？", jaKanji: "どの団体を選ぶ？", en: "Which charity would you choose?", fr: "Quelle association choisirais-tu ?" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "えらべるなら、きょういく プログラムを ささえたいな。", jaKanji: "選べるなら、教育プログラムを支えたいな。", en: "If I could choose, I would support education programs.", fr: "Si je pouvais choisir, je voudrais soutenir des programmes éducatifs." } },
      { id: "d11", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "かぞくには どう する？", jaKanji: "家族にはどうする？", en: "What about your family?", fr: "Et pour ta famille ?" } },
      { id: "d12", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "かぞくが たすけを ひつようとしたら、まず かぞくの めんどうを みたいな。", jaKanji: "家族が助けを必要としたら、まず家族の面倒を見たいな。", en: "If my family needed help, I would take care of them first.", fr: "Si ma famille avait besoin d'aide, je m'occuperais d'elle en premier." } },
      { id: "d13", speaker: { ja: "あい", en: "Ai" }, translations: { ja: "やさしい けいかくだね。", jaKanji: "優しい計画だね。", en: "That's a thoughtful plan.", fr: "C'est un plan très attentionné." } },
      { id: "d14", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "まあ、ただの そうぞうだけど、かんがえるのは たのしいね。", jaKanji: "まあ、ただの想像だけど、考えるのは楽しいね。", en: "Well, it's just imagination, but it's fun to think about.", fr: "Bon, ce n'est qu'une idée, mais c'est amusant d'y penser." } }
    ]
  },
  dialogueB: {
    title: { ja: "べつの キャリアを そうぞうする", jaKanji: "別のキャリアを想像する", en: "Imagining a Different Career Path" },
    lines: [
      { id: "e1", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "やりなおせるなら、どんな しごとを えらぶ？", jaKanji: "やり直せるなら、どんな仕事を選ぶ？", en: "If you could start over, what career would you choose?", fr: "Si tu pouvais recommencer, quel métier choisirais-tu ?" } },
      { id: "e2", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "もういちど わかかったら、たぶん いしゃに なると おもう。", jaKanji: "もう一度若かったら、たぶん医者になると思う。", en: "If I were young again, I would probably become a doctor.", fr: "Si j'étais à nouveau jeune, je deviendrais probablement médecin." } },
      { id: "e3", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "どうして いしゃなの？", jaKanji: "どうして医者なの？", en: "Why a doctor?", fr: "Pourquoi médecin ?" } },
      { id: "e4", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "ひとを ちょくせつ たすけられたら、もっと じゅうじつすると おもうんだ。", jaKanji: "人を直接助けられたら、もっと充実すると思うんだ。", en: "If I could help people directly, I think I would feel more fulfilled.", fr: "Si je pouvais aider les gens directement, je pense que je me sentirais plus épanoui." } },
      { id: "e5", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "なるほどね。いまの しごとは どう？", jaKanji: "なるほどね。今の仕事はどう？", en: "That makes sense. What about your current job?", fr: "Ça se comprend. Et ton travail actuel ?" } },
      { id: "e6", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "いま やめるなら、あんていを うしなうから、きめるのは むずかしいな。", jaKanji: "今辞めるなら、安定を失うから、決めるのは難しいな。", en: "If I quit now, I would lose my stability, so it's hard to decide.", fr: "Si je démissionnais maintenant, je perdrais ma stabilité, donc c'est difficile de décider." } },
      { id: "e7", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "その みちを えらばなかった ことを こうかいしてる？", jaKanji: "その道を選ばなかった事を後悔してる？", en: "Do you regret not choosing that path?", fr: "Tu regrettes de ne pas avoir choisi cette voie ?" } },
      { id: "e8", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "この しごとを えらんでいなかったら、ほかの きかいも のがしていたかもしれない。", jaKanji: "この仕事を選んでいなかったら、他の機会も逃していたかもしれない。", en: "If I hadn't chosen this job, I might have missed other opportunities too.", fr: "Si je n'avais pas choisi ce travail, j'aurais peut-être manqué d'autres opportunités aussi." } },
      { id: "e9", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "そうだね。どの せんたくにも トレードオフが あるよね。", jaKanji: "そうだね。どの選択にもトレードオフがあるよね。", en: "That's true. Every choice has trade-offs.", fr: "C'est vrai. Chaque choix a ses compromis." } },
      { id: "e10", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "いま リスクを おかしたら、じんせいが まったく かわるかもしれない。", jaKanji: "今リスクを冒したら、人生が全く変わるかもしれない。", en: "If I took a risk now, my life could be completely different.", fr: "Si je prenais un risque maintenant, ma vie pourrait complètement changer." } },
      { id: "e11", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "その リスクを おかす？", jaKanji: "そのリスクを冒す？", en: "Would you take that risk?", fr: "Tu prendrais ce risque ?" } },
      { id: "e12", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "もっと ゆうきが あったら、たぶん おかすと おもう。", jaKanji: "もっと勇気があったら、たぶん冒すと思う。", en: "If I were braver, I probably would.", fr: "Si j'étais plus courageux, je pense que je le prendrais." } },
      { id: "e13", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "べつの みちを そうぞうするのは おもしろいね。", jaKanji: "別の道を想像するのは面白いね。", en: "It's interesting to imagine an alternative path.", fr: "C'est intéressant d'imaginer un autre chemin." } },
      { id: "e14", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、もし ちがう ことに なっていたら、どう なっていたか わからないね。", jaKanji: "うん、もし違う事になっていたら、どうなっていたか分からないね。", en: "Yeah, if things had gone differently, who knows what would have happened.", fr: "Oui, si les choses s'étaient passées différemment, on ne sait pas ce qui serait arrivé." } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜たら／〜なら：かていの じょうきょう", jaKanji: "〜たら／〜なら：仮定の状況", en: "~Tara / ~Nara: Hypothetical Situations" },
      explanation: {
        ja: "「〜たら」は どうし・けいようしの た-けいに つけて、「もし〜したら」「〜が おきたら」の ような かていを あらわします。とくに、じっさいに おこりそうにない、そうぞうじょうの じょうきょうを かたる ときに よく つかわれます。「〜なら」は、あいてが すでに はなした トピックや じょうきょうに たいして「それが ほんとうなら」「それに ついて いうと」と はんのうする ときに つかいます。どちらも「たら」より すこし ニュアンスが ちがいますが、この レッスンでは かていの じょうきょうを そうぞうする ばめんで りょうほうを れんしゅうします。",
        jaKanji: "「〜たら」は動詞・形容詞の た形に付けて、「もし〜したら」「〜が起きたら」の様な仮定を表します。特に、実際に起こりそうにない、想像上の状況を語る時によく使われます。「〜なら」は、相手が既に話したトピックや状況に対して「それが本当なら」「それについて言うと」と反応する時に使います。どちらも「たら」より少しニュアンスが違いますが、このレッスンでは仮定の状況を想像する場面で両方を練習します。",
        en: "~tara attaches to the ta-form of a verb or adjective to express a hypothetical: \"if ~ happens\" or \"if ~ were to happen.\" It's especially common for imaginative, unlikely-to-actually-happen scenarios. ~nara is used to react to a topic or situation the other person has already mentioned — \"if that's true...\" or \"speaking of that...\" Both differ slightly in nuance from ~tara, but this lesson practices both in the context of imagining hypothetical situations."
      },
      chunks: [
        { id: "g1", translations: { ja: "たからくじに あたったら、なにを しますか？", jaKanji: "宝くじに当たったら、何をしますか？", en: "If you won the lottery, what would you do?" } },
        { id: "g2", translations: { ja: "ひゃくまんえん あったら、せかいじゅうを りょこうすると おもいます。", jaKanji: "百万円あったら、世界中を旅行すると思います。", en: "If I had a million yen, I think I would travel the world." } },
        { id: "g3", translations: { ja: "もし じゆうな じかんが あったら、えを かくのに つかいたいです。", jaKanji: "もし自由な時間があったら、絵を描くのに使いたいです。", en: "If I had free time, I would want to spend it painting." } },
        { id: "g4", translations: { ja: "てんしょくするなら、いま きめた ほうが いい。", jaKanji: "転職するなら、今決めた方がいい。", en: "If it's about changing jobs, you'd better decide now." } },
        { id: "g5", translations: { ja: "わかい ころに もどれるなら、いしゃに なりたい。", jaKanji: "若い頃に戻れるなら、医者になりたい。", en: "If I could go back to being young, I would want to become a doctor." } },
        { id: "g6", translations: { ja: "リスクを おかすなら、じゅうぶん かんがえた ほうが いい。", jaKanji: "リスクを冒すなら、十分考えた方がいい。", en: "If it's about taking a risk, you should think it through carefully." } }
      ]
    },
    fr: {
      title: { fr: "Le conditionnel : imaginer des situations hypothétiques", en: "The Conditional: Imagining Hypothetical Situations" },
      explanation: {
        fr: "Le conditionnel se forme avec l'infinitif du verbe (ou une base irrégulière) suivi des terminaisons -ais, -ais, -ait, -ions, -iez, -aient. Associé à si + imparfait, il exprime une situation hypothétique et peu probable : si je gagnais à la loterie, je voyagerais. C'est l'équivalent français du 〜たら／〜なら japonais utilisé dans cette leçon pour imaginer des situations alternatives. On l'utilise aussi seul, sans si, pour adoucir une suggestion ou réagir à ce que quelqu'un vient de dire.",
        en: "The conditional is formed with the verb's infinitive (or an irregular stem) followed by the endings -ais, -ais, -ait, -ions, -iez, -aient. Paired with si + imperfect, it expresses an unlikely hypothetical situation: si je gagnais à la loterie, je voyagerais (\"if I won the lottery, I would travel\"). It's the French equivalent of the Japanese ~tara/~nara used in this lesson to imagine alternative situations. It's also used on its own, without si, to soften a suggestion or react to something someone just said."
      },
      chunks: [
        { id: "g1", translations: { fr: "Si tu gagnais à la loterie, qu'est-ce que tu ferais ?", en: "If you won the lottery, what would you do?" } },
        { id: "g2", translations: { fr: "Si j'avais un million de dollars, je pense que je voyagerais dans le monde entier.", en: "If I had a million dollars, I think I would travel the world." } },
        { id: "g3", translations: { fr: "Si j'avais du temps libre, j'aimerais le passer à peindre.", en: "If I had free time, I would want to spend it painting." } },
        { id: "g4", translations: { fr: "Si tu veux changer d'emploi, tu ferais mieux de décider maintenant.", en: "If it's about changing jobs, you'd better decide now." } },
        { id: "g5", translations: { fr: "Si je pouvais revenir à ma jeunesse, je voudrais devenir médecin.", en: "If I could go back to being young, I would want to become a doctor." } },
        { id: "g6", translations: { fr: "Si tu prends un risque, tu devrais bien y réfléchir.", en: "If it's about taking a risk, you should think it through carefully." } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
      groupLabels: {
        hyp1: { ja: "かていを あらわす ひょうげん", en: "Hypothetical Markers" },
        hyp2: { ja: "かていを あらわす ひょうげん", en: "Hypothetical Markers" },
        link1: { ja: "せつぞくの ひょうげん", en: "Clause-Linking Words" },
        link2: { ja: "せつぞくの ひょうげん", en: "Clause-Linking Words" }
      },
      items: [
        { id: "h1_1", category: "hyp1", translations: { ja: "もし", en: "if" } },
        { id: "h1_2", category: "hyp1", translations: { ja: "たとえば", en: "for example" } },
        { id: "h1_3", category: "hyp1", translations: { ja: "かりに", en: "hypothetically" } },
        { id: "h1_4", category: "hyp1", translations: { ja: "まんいち", en: "in the rare case" } },
        { id: "h2_1", category: "hyp2", translations: { ja: "ひょっとして", en: "perhaps" } },
        { id: "h2_2", category: "hyp2", translations: { ja: "ばあいによっては", en: "depending on the case" } },
        { id: "h2_3", category: "hyp2", translations: { ja: "もしかすると", en: "possibly" } },
        { id: "h2_4", category: "hyp2", translations: { ja: "いちおう", en: "just in case" } },
        { id: "l1_1", category: "link1", translations: { ja: "それなら", en: "if so" } },
        { id: "l1_2", category: "link1", translations: { ja: "そうしたら", en: "if that happens" } },
        { id: "l1_3", category: "link1", translations: { ja: "だとしたら", en: "if that's the case" } },
        { id: "l1_4", category: "link1", translations: { ja: "そうであれば", en: "if that's so" } },
        { id: "l2_1", category: "link2", translations: { ja: "ということは", en: "that means" } },
        { id: "l2_2", category: "link2", translations: { ja: "というわけで", en: "that's why" } },
        { id: "l2_3", category: "link2", translations: { ja: "したがって", en: "therefore" } },
        { id: "l2_4", category: "link2", translations: { ja: "ゆえに", en: "hence" } }
      ]
    },
    fr: {
      title: { fr: "Entraînement à la prononciation", en: "Pronunciation Practice" },
      groupLabels: {
        cond1: { fr: "Terminaisons du conditionnel", en: "Conditional Endings" },
        liaison1: { fr: "Liaison dans les phrases avec « si »", en: "Liaison in si-clauses" }
      },
      items: [
        { id: "co_1", category: "cond1", translations: { fr: "je choisirais", en: "I would choose (conditional -ais)" } },
        { id: "co_2", category: "cond1", translations: { fr: "il investirait", en: "he would invest (conditional -ait)" } },
        { id: "co_3", category: "cond1", translations: { fr: "ils imagineraient", en: "they would imagine (conditional -aient)" } },
        { id: "co_4", category: "cond1", translations: { fr: "nous économiserions", en: "we would save (conditional -ions)" } },
        { id: "li_1", category: "liaison1", translations: { fr: "si on avait", en: "if we had (liaison: o_n_avait)" } },
        { id: "li_2", category: "liaison1", translations: { fr: "si vous étiez", en: "if you were (liaison: vou_z_étiez)" } },
        { id: "li_3", category: "liaison1", translations: { fr: "si elles imaginaient", en: "if they imagined (liaison: elle_z_imaginaient)" } },
        { id: "li_4", category: "liaison1", translations: { fr: "si nous investissions", en: "if we invested (liaison: nou_z_investissions)" } }
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
          hyp1: { ja: "かていを あらわす ひょうげん", en: "Hypothetical Markers" },
          hyp2: { ja: "かていを あらわす ひょうげん", en: "Hypothetical Markers" },
          link1: { ja: "せつぞくの ひょうげん", en: "Clause-Linking Words" },
          link2: { ja: "せつぞくの ひょうげん", en: "Clause-Linking Words" }
        },
        items: [
          { id: "h1_5", category: "hyp1", translations: { ja: "あるいは", en: "or perhaps" } },
          { id: "h1_6", category: "hyp1", translations: { ja: "もしくは", en: "or" } },
          { id: "h1_7", category: "hyp1", translations: { ja: "ないし", en: "or (formal)" } },
          { id: "h1_8", category: "hyp1", translations: { ja: "よしんば", en: "even if (formal)" } },
          { id: "h1_9", category: "hyp1", translations: { ja: "まさか", en: "surely not, by any chance" } },
          { id: "h1_10", category: "hyp1", translations: { ja: "ひょっとしたら", en: "by any chance" } },
          { id: "h1_11", category: "hyp1", translations: { ja: "もしも", en: "if (emphatic)" } },
          { id: "h1_12", category: "hyp1", translations: { ja: "いざという とき", en: "in case of emergency" } },
          { id: "h1_13", category: "hyp1", translations: { ja: "たとえ〜でも", en: "even if ~" } },
          { id: "h1_14", category: "hyp1", translations: { ja: "どうしても", en: "no matter what" } },
          { id: "h1_15", category: "hyp1", translations: { ja: "かならずしも", en: "not necessarily" } },
          { id: "h1_16", category: "hyp1", translations: { ja: "あくまでも", en: "strictly speaking" } },
          { id: "h1_17", category: "hyp1", translations: { ja: "まかりまちがえば", en: "if things go wrong (idiom)" } },
          { id: "h1_18", category: "hyp1", translations: { ja: "ひとまず", en: "for now" } },

          { id: "h2_5", category: "hyp2", translations: { ja: "ことによると", en: "possibly" } },
          { id: "h2_6", category: "hyp2", translations: { ja: "もしかして", en: "perhaps" } },
          { id: "h2_7", category: "hyp2", translations: { ja: "まれに", en: "rarely" } },
          { id: "h2_8", category: "hyp2", translations: { ja: "たまに", en: "occasionally" } },
          { id: "h2_9", category: "hyp2", translations: { ja: "ふだんは", en: "normally" } },
          { id: "h2_10", category: "hyp2", translations: { ja: "いがいにも", en: "unexpectedly" } },
          { id: "h2_11", category: "hyp2", translations: { ja: "あんのじょう", en: "as expected" } },
          { id: "h2_12", category: "hyp2", translations: { ja: "やはり", en: "as expected, after all" } },
          { id: "h2_13", category: "hyp2", translations: { ja: "どうやら", en: "apparently" } },
          { id: "h2_14", category: "hyp2", translations: { ja: "てっきり", en: "I was sure that" } },
          { id: "h2_15", category: "hyp2", translations: { ja: "まさに", en: "exactly" } },
          { id: "h2_16", category: "hyp2", translations: { ja: "ちょうど", en: "just, exactly" } },
          { id: "h2_17", category: "hyp2", translations: { ja: "あたかも", en: "as if" } },
          { id: "h2_18", category: "hyp2", translations: { ja: "げんに", en: "actually, in fact" } },

          { id: "l1_5", category: "link1", translations: { ja: "それでは", en: "well then" } },
          { id: "l1_6", category: "link1", translations: { ja: "では", en: "then" } },
          { id: "l1_7", category: "link1", translations: { ja: "じゃあ", en: "then (casual)" } },
          { id: "l1_8", category: "link1", translations: { ja: "そうなると", en: "if that becomes the case" } },
          { id: "l1_9", category: "link1", translations: { ja: "そうすると", en: "then, as a result" } },
          { id: "l1_10", category: "link1", translations: { ja: "そのばあい", en: "in that case" } },
          { id: "l1_11", category: "link1", translations: { ja: "かていして", en: "hypothetically speaking" } },
          { id: "l1_12", category: "link1", translations: { ja: "ぎゃくに", en: "conversely" } },
          { id: "l1_13", category: "link1", translations: { ja: "それとも", en: "or else" } },
          { id: "l1_14", category: "link1", translations: { ja: "そのかわり", en: "instead" } },
          { id: "l1_15", category: "link1", translations: { ja: "かわりに", en: "instead of" } },
          { id: "l1_16", category: "link1", translations: { ja: "あるいはまた", en: "or else, alternatively" } },
          { id: "l1_17", category: "link1", translations: { ja: "そのうえで", en: "on top of that" } },
          { id: "l1_18", category: "link1", translations: { ja: "ちなみに", en: "by the way" } },

          { id: "l2_5", category: "link2", translations: { ja: "つまり", en: "in other words" } },
          { id: "l2_6", category: "link2", translations: { ja: "すなわち", en: "namely" } },
          { id: "l2_7", category: "link2", translations: { ja: "いいかえると", en: "in other words" } },
          { id: "l2_8", category: "link2", translations: { ja: "けっきょく", en: "in the end" } },
          { id: "l2_9", category: "link2", translations: { ja: "さいごに", en: "finally" } },
          { id: "l2_10", category: "link2", translations: { ja: "むしろ", en: "rather" } },
          { id: "l2_11", category: "link2", translations: { ja: "かえって", en: "on the contrary" } },
          { id: "l2_12", category: "link2", translations: { ja: "いずれにせよ", en: "in any case" } },
          { id: "l2_13", category: "link2", translations: { ja: "どのみち", en: "either way" } },
          { id: "l2_14", category: "link2", translations: { ja: "とにかく", en: "anyway" } },
          { id: "l2_15", category: "link2", translations: { ja: "ようするに", en: "in short" } },
          { id: "l2_16", category: "link2", translations: { ja: "じっさいに", en: "in reality" } },
          { id: "l2_17", category: "link2", translations: { ja: "とはいえ", en: "that said" } },
          { id: "l2_18", category: "link2", translations: { ja: "とりわけ", en: "especially" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-tara",
        title: { ja: "れんしゅう：〜たら", jaKanji: "練習：〜たら", en: "Practice: ~Tara" },
        spokenIntro: {
          ja: "つぎは、「〜たら」を つかった れいぶんを れんしゅうしましょう。",
          jaKanji: "次は、「〜たら」を使った例文を練習しましょう。",
          en: "Next, let's practice example sentences using ~tara."
        },
        lines: [
          { id: "tr1", translations: { ja: "たからくじに あたったら、なにを しますか？", jaKanji: "宝くじに当たったら、何をしますか？", en: "If you won the lottery, what would you do?" } },
          { id: "tr2", translations: { ja: "ひゃくまんえん あったら、せかいじゅうを りょこうすると おもいます。", jaKanji: "百万円あったら、世界中を旅行すると思います。", en: "If I had a million yen, I think I would travel the world." } },
          { id: "tr3", translations: { ja: "じゆうな じかんが あったら、えを かきたいです。", jaKanji: "自由な時間があったら、絵を描きたいです。", en: "If I had free time, I would want to paint." } },
          { id: "tr4", translations: { ja: "よぶんな おかねが あったら、きふすると おもいます。", jaKanji: "余分なお金があったら、寄付すると思います。", en: "If I had extra money, I think I would donate." } },
          { id: "tr5", translations: { ja: "もし わかかったら、ちがう しごとを えらんだかもしれません。", jaKanji: "もし若かったら、違う仕事を選んだかもしれません。", en: "If I were young, I might have chosen a different job." } },
          { id: "tr6", translations: { ja: "もっと じかんが あったら、りょこうに いきたいです。", jaKanji: "もっと時間があったら、旅行に行きたいです。", en: "If I had more time, I would want to go traveling." } },
          { id: "tr7", translations: { ja: "リスクを おかしたら、じんせいが かわるかもしれません。", jaKanji: "リスクを冒したら、人生が変わるかもしれません。", en: "If I took a risk, my life might change." } },
          { id: "tr8", translations: { ja: "もし かれに あったら、しつもんしたいです。", jaKanji: "もし彼に会ったら、質問したいです。", en: "If I met him, I would want to ask a question." } },
          { id: "tr9", translations: { ja: "そつぎょうしたら、りゅうがくを かんがえています。", jaKanji: "卒業したら、留学を考えています。", en: "If I graduate, I'm thinking about studying abroad." } },
          { id: "tr10", translations: { ja: "きかいが あったら、ぜひ ちょうせんしたいです。", jaKanji: "機会があったら、ぜひ挑戦したいです。", en: "If I had the opportunity, I would definitely want to try it." } }
        ]
      },
      {
        id: "grammar-drill-nara",
        title: { ja: "れんしゅう：〜なら", jaKanji: "練習：〜なら", en: "Practice: ~Nara" },
        spokenIntro: {
          ja: "つぎは、「〜なら」を つかった れいぶんを れんしゅうしましょう。",
          jaKanji: "次は、「〜なら」を使った例文を練習しましょう。",
          en: "Next, let's practice example sentences using ~nara."
        },
        lines: [
          { id: "nr1", translations: { ja: "てんしょくするなら、いま きめた ほうが いい。", jaKanji: "転職するなら、今決めた方がいい。", en: "If it's about changing jobs, you'd better decide now." } },
          { id: "nr2", translations: { ja: "わかい ころに もどれるなら、いしゃに なりたい。", jaKanji: "若い頃に戻れるなら、医者になりたい。", en: "If I could go back to being young, I would want to become a doctor." } },
          { id: "nr3", translations: { ja: "リスクを おかすなら、じゅうぶん かんがえた ほうが いい。", jaKanji: "リスクを冒すなら、十分考えた方がいい。", en: "If it's about taking a risk, you should think it through carefully." } },
          { id: "nr4", translations: { ja: "えらべるなら、あんていした しごとを えらびたい。", jaKanji: "選べるなら、安定した仕事を選びたい。", en: "If I could choose, I would want to choose a stable job." } },
          { id: "nr5", translations: { ja: "きふするなら、きょういくの ぶんやが いいと おもう。", jaKanji: "寄付するなら、教育の分野がいいと思う。", en: "If it's about donating, I think the education field would be good." } },
          { id: "nr6", translations: { ja: "そんなに たいへんなら、やめても いいと おもう。", jaKanji: "そんなに大変なら、辞めてもいいと思う。", en: "If it's that difficult, I think it's fine to quit." } },
          { id: "nr7", translations: { ja: "ほんきで ついきゅうするなら、じかんを かけた ほうが いい。", jaKanji: "本気で追求するなら、時間をかけた方がいい。", en: "If you're seriously pursuing it, you should take your time." } },
          { id: "nr8", translations: { ja: "こうかいしているなら、いまからでも かえられる。", jaKanji: "後悔しているなら、今からでも変えられる。", en: "If you regret it, you can still change it starting now." } },
          { id: "nr9", translations: { ja: "しんぱいなら、まえもって そうだんした ほうが いい。", jaKanji: "心配なら、前もって相談した方がいい。", en: "If you're worried, you should consult someone beforehand." } },
          { id: "nr10", translations: { ja: "ぼうけんしたいなら、いっしょに いこう。", jaKanji: "冒険したいなら、一緒に行こう。", en: "If you want an adventure, let's go together." } }
        ]
      }
    ]
  }
};
