import type { TopicLesson } from "../topicTypes";

// B1 — row 1 of docs/b1-master-lesson-table-v01.md. Grammar function:
// "Past perfect — narrating what had already happened before another
// past event" via 〜ていた／〜てしまっていた.
//
// Scope note: only `ja` (target) and `en` (source) are translated
// here — same deliberate scope decision as the C1 Chinese topics
// (topic-c1-01-education.ts etc.): keep the first B1 lesson
// manageable while the level's content shape is still being figured
// out, rather than 4x-ing translation effort immediately. See
// docs/status.md's "Known asymmetry" section once more B1 topics
// exist.
//
// Grammar note: Japanese has no single grammaticalized "pluperfect"
// tense the way English/German/French/Spanish do. 〜ていた and
// 〜てしまっていた are the two most natural resultative-aspect forms
// that do the same narrative job — establishing that one past event
// had already happened before another past event — which is why the
// table's B1 Grammar Function column describes this row as Japanese's
// functional equivalent rather than claiming an identical grammatical
// mechanism (see docs/b1-master-lesson-table-v01.md's own review note
// on Row 31 for the same kind of "functional equivalent, not identical
// mechanism" caution applied to German there).

export const topicTravelMishaps: TopicLesson = {
  id: "topic-b1-01-travel-mishaps",
  lessonNumber: 1,
  level: "B1",
  topicName: {
    ja: "りょこうトラブル",
    jaKanji: "旅行トラブル",
    en: "Travel Mishaps"
  },
  vocab: [
    { id: "v01", category: "noun", translations: { ja: "びん", jaKanji: "便", en: "flight" } },
    { id: "v02", category: "noun", translations: { ja: "くうこう", jaKanji: "空港", en: "airport" } },
    { id: "v03", category: "noun", translations: { ja: "ちえん", jaKanji: "遅延", en: "delay" } },
    { id: "v04", category: "noun", translations: { ja: "けっこう", jaKanji: "欠航", en: "cancellation" } },
    { id: "v05", category: "noun", translations: { ja: "とうじょうぐち", jaKanji: "搭乗口", en: "boarding gate" } },
    { id: "v06", category: "noun", translations: { ja: "にもつ", jaKanji: "荷物", en: "luggage, baggage" } },
    { id: "v07", category: "noun", translations: { ja: "スーツケース", en: "suitcase" } },
    { id: "v08", category: "verb", translations: { ja: "なくす", en: "to lose (an item)" } },
    { id: "v09", category: "verb", translations: { ja: "みつける", jaKanji: "見つける", en: "to find" } },
    { id: "v10", category: "noun", translations: { ja: "いしつぶつがかり", jaKanji: "遺失物係", en: "lost and found" } },
    { id: "v11", category: "noun", translations: { ja: "のりつぎびん", jaKanji: "乗り継ぎ便", en: "connecting flight" } },
    { id: "v12", category: "noun", translations: { ja: "けいゆ", jaKanji: "経由", en: "layover" } },
    { id: "v13", category: "verb", translations: { ja: "のりおくれる", jaKanji: "乗り遅れる", en: "to miss (a flight/train)" } },
    { id: "v14", category: "verb", translations: { ja: "よやくを とりなおす", jaKanji: "予約を取り直す", en: "to rebook" } },
    { id: "v15", category: "noun", translations: { ja: "はらいもどし", jaKanji: "払い戻し", en: "refund" } },
    { id: "v16", category: "noun", translations: { ja: "おわび", jaKanji: "お詫び", en: "apology" } },
    { id: "v17", category: "noun", translations: { ja: "こうくうがいしゃ", jaKanji: "航空会社", en: "airline" } },
    { id: "v18", category: "noun", translations: { ja: "チケット", en: "ticket" } },
    { id: "v19", category: "noun", translations: { ja: "パスポート", en: "passport" } },
    { id: "v20", category: "noun", translations: { ja: "ぜいかん", jaKanji: "税関", en: "customs" } },
    { id: "v21", category: "noun", translations: { ja: "にゅうこくしんさ", jaKanji: "入国審査", en: "immigration" } },
    { id: "v22", category: "noun", translations: { ja: "アナウンス", en: "announcement" } },
    { id: "v23", category: "verb", translations: { ja: "あしどめされる", jaKanji: "足止めされる", en: "to be stranded" } },
    { id: "v24", category: "noun", translations: { ja: "てんこうによる ちえん", jaKanji: "天候による遅延", en: "weather delay" } },
    { id: "v25", category: "noun", translations: { ja: "だいたいルート", jaKanji: "代替ルート", en: "alternative route" } },
    { id: "v26", category: "verb", translations: { ja: "くじょうを いう", jaKanji: "苦情を言う", en: "to complain" } },
    { id: "v27", category: "noun", translations: { ja: "ほしょう", jaKanji: "補償", en: "compensation" } },
    { id: "v28", category: "adverb", translations: { ja: "すでに", jaKanji: "既に", en: "already" } },
    { id: "v29", category: "adverb", translations: { ja: "〜たときには もう", jaKanji: "〜た時にはもう", en: "by the time ~, already" } },
    { id: "v30", category: "adverb", translations: { ja: "やっと", jaKanji: "やっと", en: "finally" } }
  ],
  dialogueA: {
    title: { ja: "フライトちえんの はなし", en: "A Delayed Flight Story", jaKanji: "フライト遅延の話" },
    lines: [
      { id: "d1", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "おおさかへの りょこう、どうだった？", jaKanji: "大阪への旅行、どうだった？", en: "How was your trip to Osaka?" } },
      { id: "d2", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "きかないで。くうこうに ついたときには、フライトは すでに ちえんしていたんだ。", jaKanji: "聞かないで。空港に着いた時には、フライトは既に遅延していたんだ。", en: "Don't even ask. My flight had already been delayed by the time I got to the airport." } },
      { id: "d3", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "ほんとう？なにが あったの？", jaKanji: "本当？何があったの？", en: "Really? What happened?" } },
      { id: "d4", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "まえのばん あらしが あって、おおくの びんが えいきょうを うけていたんだ。", jaKanji: "前の晩嵐があって、多くの便が影響を受けていたんだ。", en: "There had been a storm the night before, so many flights were affected." } },
      { id: "d5", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "たいへんだったね。どのくらい ちえんしたの？", jaKanji: "大変だったね。どのくらい遅延したの？", en: "That's rough. How long was the delay?" } },
      { id: "d6", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "とうじょうする ころには、もう さんじかん たっていたよ。", jaKanji: "搭乗する頃には、もう3時間経っていたよ。", en: "By the time we boarded, three hours had already passed." } },
      { id: "d7", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "のりつぎびんには のりおくれたの？", jaKanji: "乗り継ぎ便には乗り遅れたの？", en: "Did you miss your connecting flight?" } },
      { id: "d8", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、ざんねんながら。とうちゃくしたときには、もう しゅっぱつしてしまっていたんだ。", jaKanji: "うん、残念ながら。到着した時には、もう出発してしまっていたんだ。", en: "Yes, unfortunately. It had already left by the time we landed." } },
      { id: "d9", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "どう したの？", jaKanji: "どうしたの？", en: "What did you do?" } },
      { id: "d10", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "こうくうがいしゃが すでに つぎの びんに よやくを とりなおしていて くれたんだ。", jaKanji: "航空会社が既に次の便に予約を取り直していてくれたんだ。", en: "The airline had already rebooked us onto the next available flight." } },
      { id: "d11", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "すぐに たいおうして くれて よかったね。", jaKanji: "すぐに対応してくれてよかったね。", en: "That's good they took care of it quickly." } },
      { id: "d12", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "ながく まっていたから、しょくじけんも よういして くれていたよ。", jaKanji: "長く待っていたから、食事券も用意してくれていたよ。", en: "They had also prepared a meal voucher for us, since we'd been waiting so long." } },
      { id: "d13", speaker: { ja: "みほ", en: "Miho" }, translations: { ja: "せめて きちんと おわびが あって よかった。", jaKanji: "せめてきちんとお詫びがあってよかった。", en: "At least they apologized properly." } },
      { id: "d14", speaker: { ja: "けん", en: "Ken" }, translations: { ja: "うん、やっと ついたけど、すごく おそく なっちゃった。", jaKanji: "うん、やっと着いたけど、すごく遅くなっちゃった。", en: "Yes, finally we arrived, though it was very late." } }
    ]
  },
  dialogueB: {
    title: { ja: "にもつの ふんしつとどけ", en: "A Lost-Luggage Report", jaKanji: "荷物の紛失届" },
    lines: [
      { id: "e1", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "すみません、スーツケースが みつからないんです。", jaKanji: "すみません、スーツケースが見つからないんです。", en: "Excuse me, I can't find my suitcase." } },
      { id: "e2", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "それは たいへんですね。さいごに みたのは いつですか？", jaKanji: "それは大変ですね。最後に見たのはいつですか？", en: "I'm sorry to hear that. When did you last see it?" } },
      { id: "e3", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "とうきょうの カウンターで すでに あずけていました。", jaKanji: "東京のカウンターで既に預けていました。", en: "I had already checked it in at the counter in Tokyo." } },
      { id: "e4", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "わかりました。システムを かくにんします。", jaKanji: "分かりました。システムを確認します。", en: "I see. Let me check the system." } },
      { id: "e5", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "スーツケースは のりつぎびんに つみこまれていなかった ようです。", jaKanji: "スーツケースは乗り継ぎ便に積み込まれていなかったようです。", en: "It seems your suitcase hadn't been loaded onto the connecting flight." } },
      { id: "e6", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "そんな。いま どこに あるんですか？", jaKanji: "そんな。今どこにあるんですか？", en: "Oh no. Where is it now?" } },
      { id: "e7", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "まだ けいゆちの くうこうに あります。わかったときには もう のりつぎに まにあっていなかったんです。", jaKanji: "まだ経由地の空港にあります。分かった時にはもう乗り継ぎに間に合っていなかったんです。", en: "It's still at the layover airport. It had already missed the connection by the time we found this out." } },
      { id: "e8", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "いつ もどって きますか？", jaKanji: "いつ戻ってきますか？", en: "When will I get it back?" } },
      { id: "e9", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "とうちゃくしだい、ホテルへ おおくりします。たぶん あしたに なります。", jaKanji: "到着次第、ホテルへお送りします。多分明日になります。", en: "We'll send it to your hotel once it arrives, probably tomorrow." } },
      { id: "e10", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "だいじな しょるいを すでに つめてしまっていたんです。", jaKanji: "大事な書類を既に詰めてしまっていたんです。", en: "I had already packed important documents in there." } },
      { id: "e11", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "わかりました。ゆうせんてきに たいおうして、とうちゃくしだい すぐ ごれんらくします。", jaKanji: "分かりました。優先的に対応して、到着次第すぐご連絡します。", en: "I understand. We'll prioritize it and contact you as soon as it arrives." } },
      { id: "e12", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "なにか ほしょうは ありますか？", jaKanji: "何か補償はありますか？", en: "Is there any compensation for this?" } },
      { id: "e13", speaker: { ja: "たんとうしゃ", en: "Staff" }, translations: { ja: "はい、ごふべんを おかけした ぶん、いちぶ はらいもどしを ごあんないできます。", jaKanji: "はい、ご不便をおかけした分、一部払い戻しをご案内できます。", en: "Yes, we can offer a partial refund for the inconvenience." } },
      { id: "e14", speaker: { ja: "きゃく", en: "Traveler" }, translations: { ja: "ありがとうございます。はやく たいおうして いただけて たすかります。", jaKanji: "ありがとうございます。早く対応していただけて助かります。", en: "Thank you. I appreciate you handling this so quickly." } }
    ]
  },
  grammar: {
    ja: {
      title: { ja: "〜ていた／〜てしまっていた：かこの かこ", en: "~Te Ita / ~Te Shimatte Ita: Narrating a Past-Before-Past", jaKanji: "〜ていた／〜てしまっていた：過去の過去" },
      explanation: {
        ja: "にほんごには えいご・ドイツご・フランスご・スペインごの ような「かこかんりょう（かこの かこ）」の けいしきは ありません。かわりに「〜ていた」を つかって、ある じてんで すでに かんりょう または つづいている じょうたいだった ことを あらわし、ひとつの できごとが もう ひとつの かこの できごとより まえに おきていた ことを しめします。「〜てしまっていた」は かんりょうを つよめ、しばしば ざんねんな タイミングの ニュアンスを くわえます。どちらも「〜ときには もう」「すでに」のような ひょうげんと いっしょに つかわれ、まえあとかんけいを はっきり させます。",
        jaKanji: "日本語には英語・ドイツ語・フランス語・スペイン語のような「過去完了（過去の過去）」の形式はありません。代わりに「〜ていた」を使って、ある時点で既に完了または続いている状態だった事を表し、一つの出来事がもう一つの過去の出来事より前に起きていた事を示します。「〜てしまっていた」は完了を強め、しばしば残念なタイミングのニュアンスを加えます。どちらも「〜時にはもう」「既に」のような表現と一緒に使われ、前後関係をはっきりさせます。",
        en: "Japanese has no single grammaticalized \"past perfect\" tense the way English, German, French, or Spanish do. Instead, ~te ita expresses that something was already completed or ongoing at a certain point in the past, showing that one event had already happened before another past event took place. ~te shimatte ita adds emphasis on completion, often with a nuance of unfortunate timing. Both are typically paired with expressions like ~toki ni wa mou (\"by the time ~, already\") or sude ni (\"already\") to make the before/after sequencing explicit."
      },
      chunks: [
        { id: "g1", translations: { ja: "くうこうに ついたときには、フライトは すでに ちえんしていた。", jaKanji: "空港に着いた時には、フライトは既に遅延していた。", en: "By the time I arrived at the airport, the flight had already been delayed." } },
        { id: "g2", translations: { ja: "のりつぎびんは もう しゅっぱつしてしまっていた。", jaKanji: "乗り継ぎ便はもう出発してしまっていた。", en: "The connecting flight had already left." } },
        { id: "g3", translations: { ja: "わたしが きづいたときには、にもつは のせられていなかった。", jaKanji: "私が気づいた時には、荷物は乗せられていなかった。", en: "By the time I noticed, the luggage hadn't been loaded." } },
        { id: "g4", translations: { ja: "こうくうがいしゃは すでに よやくを とりなおしていた。", jaKanji: "航空会社は既に予約を取り直していた。", en: "The airline had already rebooked us." } },
        { id: "g5", translations: { ja: "わたしたちが とうちゃくしたときには、みんな もう まっていた。", jaKanji: "私たちが到着した時には、皆もう待っていた。", en: "By the time we arrived, everyone had already been waiting." } },
        { id: "g6", translations: { ja: "だいじな しょるいを すでに つめてしまっていた。", jaKanji: "大事な書類を既に詰めてしまっていた。", en: "I had already packed important documents (in there)." } }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: { ja: "はつおんの れんしゅう", en: "Pronunciation Practice" },
      groupLabels: {
        vowel_long1: { ja: "ぼいんの ながさ", en: "Vowel Length" },
        vowel_long2: { ja: "ぼいんの ながさ", en: "Vowel Length" },
        pitch1: { ja: "じかんの ふくしの アクセント", en: "Pitch Accent on Time Adverbs" },
        pitch2: { ja: "じかんの ふくしの アクセント", en: "Pitch Accent on Time Adverbs" }
      },
      items: [
        { id: "vl1_1", category: "vowel_long1", translations: { ja: "くうこう", en: "airport (long u, long o)" } },
        { id: "vl1_2", category: "vowel_long1", translations: { ja: "りょこう", en: "travel (long o)" } },
        { id: "vl1_3", category: "vowel_long1", translations: { ja: "とうじょう", en: "boarding (long o, long o)" } },
        { id: "vl1_4", category: "vowel_long1", translations: { ja: "くうき", en: "air (long u)" } },
        { id: "vl2_1", category: "vowel_long2", translations: { ja: "つうか", en: "transit, passage (long u)" } },
        { id: "vl2_2", category: "vowel_long2", translations: { ja: "こうくう", en: "aviation (long o, long u)" } },
        { id: "vl2_3", category: "vowel_long2", translations: { ja: "とうちゃく", en: "arrival (long o)" } },
        { id: "vl2_4", category: "vowel_long2", translations: { ja: "しゅっぱつ", en: "departure (contrast: sokuon, no long vowel)" } },
        { id: "p1_1", category: "pitch1", translations: { ja: "すでに", en: "already" } },
        { id: "p1_2", category: "pitch1", translations: { ja: "もう", en: "already, now" } },
        { id: "p1_3", category: "pitch1", translations: { ja: "やっと", en: "finally" } },
        { id: "p1_4", category: "pitch1", translations: { ja: "まず", en: "first" } },
        { id: "p2_1", category: "pitch2", translations: { ja: "あとで", en: "later" } },
        { id: "p2_2", category: "pitch2", translations: { ja: "まえに", en: "before" } },
        { id: "p2_3", category: "pitch2", translations: { ja: "そのとき", en: "at that time" } },
        { id: "p2_4", category: "pitch2", translations: { ja: "とうとう", en: "finally, eventually" } }
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
          pitch1: { ja: "じかんの ふくしの アクセント", en: "Pitch Accent on Time Adverbs" },
          pitch2: { ja: "じかんの ふくしの アクセント", en: "Pitch Accent on Time Adverbs" }
        },
        items: [
          { id: "vl1_5", category: "vowel_long1", translations: { ja: "ほうこう", en: "direction" } },
          { id: "vl1_6", category: "vowel_long1", translations: { ja: "こうえん", en: "park" } },
          { id: "vl1_7", category: "vowel_long1", translations: { ja: "とうろく", en: "registration" } },
          { id: "vl1_8", category: "vowel_long1", translations: { ja: "こうがい", en: "suburbs" } },
          { id: "vl1_9", category: "vowel_long1", translations: { ja: "ぼうえき", en: "trade" } },
          { id: "vl1_10", category: "vowel_long1", translations: { ja: "こうじょう", en: "factory" } },
          { id: "vl1_11", category: "vowel_long1", translations: { ja: "じゅうしょ", en: "address" } },
          { id: "vl1_12", category: "vowel_long1", translations: { ja: "きゅうりょう", en: "salary" } },
          { id: "vl1_13", category: "vowel_long1", translations: { ja: "こうつうひ", en: "transportation cost" } },
          { id: "vl1_14", category: "vowel_long1", translations: { ja: "りゅうがく", en: "studying abroad" } },
          { id: "vl1_15", category: "vowel_long1", translations: { ja: "ちゅうもん", en: "order (request)" } },
          { id: "vl1_16", category: "vowel_long1", translations: { ja: "きょうつう", en: "common, shared" } },
          { id: "vl1_17", category: "vowel_long1", translations: { ja: "りょこうさき", en: "travel destination" } },
          { id: "vl1_18", category: "vowel_long1", translations: { ja: "くうらん", en: "blank space" } },

          { id: "vl2_5", category: "vowel_long2", translations: { ja: "とうじつ", en: "that (very) day" } },
          { id: "vl2_6", category: "vowel_long2", translations: { ja: "しゅっこく", en: "departure from a country" } },
          { id: "vl2_7", category: "vowel_long2", translations: { ja: "にゅうこく", en: "entry into a country" } },
          { id: "vl2_8", category: "vowel_long2", translations: { ja: "きこく", en: "returning to one's home country" } },
          { id: "vl2_9", category: "vowel_long2", translations: { ja: "たいざい", en: "staying (a period)" } },
          { id: "vl2_10", category: "vowel_long2", translations: { ja: "しゅくはく", en: "lodging" } },
          { id: "vl2_11", category: "vowel_long2", translations: { ja: "こうくうけん", en: "air ticket" } },
          { id: "vl2_12", category: "vowel_long2", translations: { ja: "めんぜい", en: "duty-free" } },
          { id: "vl2_13", category: "vowel_long2", translations: { ja: "とうじょうけん", en: "boarding pass" } },
          { id: "vl2_14", category: "vowel_long2", translations: { ja: "しゅつにゅうこく", en: "immigration and emigration" } },
          { id: "vl2_15", category: "vowel_long2", translations: { ja: "くうろ", en: "air route" } },
          { id: "vl2_16", category: "vowel_long2", translations: { ja: "こうろ", en: "sea route" } },
          { id: "vl2_17", category: "vowel_long2", translations: { ja: "りょこうがいしゃ", en: "travel company" } },
          { id: "vl2_18", category: "vowel_long2", translations: { ja: "よやくしゃ", en: "reservation holder" } },

          { id: "p1_5", category: "pitch1", translations: { ja: "さきに", en: "ahead, first" } },
          { id: "p1_6", category: "pitch1", translations: { ja: "のちほど", en: "later (formal)" } },
          { id: "p1_7", category: "pitch1", translations: { ja: "いぜん", en: "previously" } },
          { id: "p1_8", category: "pitch1", translations: { ja: "いらい", en: "since (a point in time)" } },
          { id: "p1_9", category: "pitch1", translations: { ja: "とたんに", en: "the moment that" } },
          { id: "p1_10", category: "pitch1", translations: { ja: "やがて", en: "soon, eventually" } },
          { id: "p1_11", category: "pitch1", translations: { ja: "しばらく", en: "for a while" } },
          { id: "p1_12", category: "pitch1", translations: { ja: "ようやく", en: "finally, at last" } },
          { id: "p1_13", category: "pitch1", translations: { ja: "ひとまず", en: "for now" } },
          { id: "p1_14", category: "pitch1", translations: { ja: "いよいよ", en: "at last, finally" } },
          { id: "p1_15", category: "pitch1", translations: { ja: "まもなく", en: "soon" } },
          { id: "p1_16", category: "pitch1", translations: { ja: "じきに", en: "soon" } },
          { id: "p1_17", category: "pitch1", translations: { ja: "ついに", en: "finally" } },
          { id: "p1_18", category: "pitch1", translations: { ja: "ひきつづき", en: "continuously" } },

          { id: "p2_5", category: "pitch2", translations: { ja: "それから", en: "after that" } },
          { id: "p2_6", category: "pitch2", translations: { ja: "そのご", en: "after that (formal)" } },
          { id: "p2_7", category: "pitch2", translations: { ja: "いままで", en: "until now" } },
          { id: "p2_8", category: "pitch2", translations: { ja: "これから", en: "from now on" } },
          { id: "p2_9", category: "pitch2", translations: { ja: "さっき", en: "a moment ago" } },
          { id: "p2_10", category: "pitch2", translations: { ja: "いまごろ", en: "around now" } },
          { id: "p2_11", category: "pitch2", translations: { ja: "そのうち", en: "eventually" } },
          { id: "p2_12", category: "pitch2", translations: { ja: "いつのまにか", en: "before one knows it" } },
          { id: "p2_13", category: "pitch2", translations: { ja: "とっくに", en: "long since, already" } },
          { id: "p2_14", category: "pitch2", translations: { ja: "ちょうど", en: "just then, exactly" } },
          { id: "p2_15", category: "pitch2", translations: { ja: "たったいま", en: "just now" } },
          { id: "p2_16", category: "pitch2", translations: { ja: "かねてから", en: "for a while now, previously" } },
          { id: "p2_17", category: "pitch2", translations: { ja: "あらかじめ", en: "in advance" } },
          { id: "p2_18", category: "pitch2", translations: { ja: "じぜんに", en: "beforehand" } }
        ]
      }
    ]
  },
  grammarDrills: {
    ja: [
      {
        id: "grammar-drill-teita",
        title: { ja: "れんしゅう：〜ていた", en: "Practice: ~Te Ita", jaKanji: "練習：〜ていた" },
        spokenIntro: {
          ja: "つぎは、「〜ていた」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~te ita.",
          jaKanji: "次は、「〜ていた」を使った例文を練習しましょう。"
        },
        lines: [
          { id: "ti1", translations: { ja: "フライトは すでに ちえんしていた。", jaKanji: "フライトは既に遅延していた。", en: "The flight had already been delayed." } },
          { id: "ti2", translations: { ja: "わたしが とうちゃくしたときには、あめが ふっていた。", jaKanji: "私が到着した時には、雨が降っていた。", en: "By the time I arrived, it had already been raining." } },
          { id: "ti3", translations: { ja: "かのじょは もう しゅっぱつの じゅんびを していた。", jaKanji: "彼女はもう出発の準備をしていた。", en: "She had already been preparing to depart." } },
          { id: "ti4", translations: { ja: "こうくうがいしゃは じょうきょうを せつめいしていた。", jaKanji: "航空会社は状況を説明していた。", en: "The airline had already been explaining the situation." } },
          { id: "ti5", translations: { ja: "わたしたちが きづいたときには、もう おそかった。", jaKanji: "私たちが気づいた時には、もう遅かった。", en: "By the time we noticed, it was already too late." } },
          { id: "ti6", translations: { ja: "かれは そのとき すでに ねていた。", jaKanji: "彼はその時既に寝ていた。", en: "He had already been asleep by that time." } },
          { id: "ti7", translations: { ja: "でんしゃは もう ホームを でていた。", jaKanji: "電車はもうホームを出ていた。", en: "The train had already left the platform." } },
          { id: "ti8", translations: { ja: "わたしが でんわしたときには、かのじょは もう ねていた。", jaKanji: "私が電話した時には、彼女はもう寝ていた。", en: "By the time I called, she had already gone to bed." } },
          { id: "ti9", translations: { ja: "みせは もう しまっていた。", jaKanji: "店はもう閉まっていた。", en: "The store had already been closed." } },
          { id: "ti10", translations: { ja: "かいぎは もう はじまっていた。", jaKanji: "会議はもう始まっていた。", en: "The meeting had already started." } }
        ]
      },
      {
        id: "grammar-drill-teshimatteita",
        title: { ja: "れんしゅう：〜てしまっていた", en: "Practice: ~Te Shimatte Ita", jaKanji: "練習：〜てしまっていた" },
        spokenIntro: {
          ja: "つぎは、「〜てしまっていた」を つかった れいぶんを れんしゅうしましょう。",
          en: "Next, let's practice example sentences using ~te shimatte ita.",
          jaKanji: "次は、「〜てしまっていた」を使った例文を練習しましょう。"
        },
        lines: [
          { id: "tsi1", translations: { ja: "のりつぎびんは もう しゅっぱつしてしまっていた。", jaKanji: "乗り継ぎ便はもう出発してしまっていた。", en: "The connecting flight had already left." } },
          { id: "tsi2", translations: { ja: "だいじな しょるいを すでに つめてしまっていた。", jaKanji: "大事な書類を既に詰めてしまっていた。", en: "I had already packed important documents (in there)." } },
          { id: "tsi3", translations: { ja: "きっぷを なくしてしまっていた。", jaKanji: "切符をなくしてしまっていた。", en: "I had already lost my ticket." } },
          { id: "tsi4", translations: { ja: "パスポートを かばんの そこに いれてしまっていた。", jaKanji: "パスポートをかばんの底に入れてしまっていた。", en: "I had already put my passport at the bottom of my bag." } },
          { id: "tsi5", translations: { ja: "さいごの でんしゃに のりおくれてしまっていた。", jaKanji: "最後の電車に乗り遅れてしまっていた。", en: "I had already missed the last train." } },
          { id: "tsi6", translations: { ja: "よやくを キャンセルしてしまっていた。", jaKanji: "予約をキャンセルしてしまっていた。", en: "I had already canceled the reservation." } },
          { id: "tsi7", translations: { ja: "だいじな メールを けしてしまっていた。", jaKanji: "大事なメールを消してしまっていた。", en: "I had already deleted an important email." } },
          { id: "tsi8", translations: { ja: "あんないを みのがしてしまっていた。", jaKanji: "案内を見逃してしまっていた。", en: "I had already missed the announcement." } },
          { id: "tsi9", translations: { ja: "じかんを まちがえてしまっていた。", jaKanji: "時間を間違えてしまっていた。", en: "I had already gotten the time wrong." } },
          { id: "tsi10", translations: { ja: "みちに まよってしまっていた。", jaKanji: "道に迷ってしまっていた。", en: "I had already gotten lost." } }
        ]
      }
    ]
  }
};
