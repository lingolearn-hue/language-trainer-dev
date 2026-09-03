import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese8.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from the
// original file. Also carries the lesson's extra number/R-sound drill
// slide via pronunciationDrills — the one lesson that has a slide
// beyond the standard vocab+pronunciation pair, which is what this
// field was added to topicTypes.ts to support. No content was
// rewritten in this migration.

export const topicShopping: TopicLesson = {
  id: "topic-a1-08-shopping",
  lessonNumber: 8,
  topicName: {
    ja: "かいもの",
    de: "Einkaufen",
    en: "Shopping",
    zh: "购物"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "みせ",
        de: "Geschäft, Laden",
        en: "shop, store",
        zh: "商店"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "しじょう",
        de: "Markt",
        en: "market",
        zh: "市场"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "おかね",
        de: "Geld",
        en: "money",
        zh: "钱"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "ねだん",
        de: "Preis",
        en: "price",
        zh: "价格"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "レシート",
        de: "Kassenbon",
        en: "receipt",
        zh: "收据"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "おつり",
        de: "Wechselgeld",
        en: "change (money)",
        zh: "找零"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "ふくろ",
        de: "Tasche, Tüte",
        en: "bag",
        zh: "袋子"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "レジ",
        de: "Kasse",
        en: "cash register, checkout",
        zh: "收银台"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "てんいん",
        de: "Verkäufer(in)",
        en: "shop clerk",
        zh: "店员"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "きゃく",
        de: "Kunde, Kundin",
        en: "customer",
        zh: "顾客"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "セール",
        de: "Sonderangebot",
        en: "sale",
        zh: "促销"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "えん",
        de: "Yen",
        en: "yen",
        zh: "日元"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "やおや",
        de: "Gemüseladen",
        en: "vegetable shop",
        zh: "蔬菜店"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "スーパー",
        de: "Supermarkt",
        en: "supermarket",
        zh: "超市"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "かご",
        de: "Einkaufskorb",
        en: "shopping basket",
        zh: "购物篮"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "わりびき",
        de: "Rabatt",
        en: "discount",
        zh: "折扣"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "かう",
        de: "kaufen",
        en: "to buy",
        zh: "买"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "うる",
        de: "verkaufen",
        en: "to sell",
        zh: "卖"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "はらう",
        de: "bezahlen",
        en: "to pay",
        zh: "付款"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "えらぶ",
        de: "auswählen",
        en: "to choose",
        zh: "选择"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "さがす",
        de: "suchen",
        en: "to look for",
        zh: "寻找"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "まける",
        de: "den Preis senken (feilschen)",
        en: "to lower a price (haggling)",
        zh: "降价（讲价）"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "つつむ",
        de: "einpacken",
        en: "to wrap",
        zh: "包装"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "くらべる",
        de: "vergleichen",
        en: "to compare",
        zh: "比较"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "たかい",
        de: "teuer",
        en: "expensive",
        zh: "贵的"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "やすい",
        de: "günstig",
        en: "cheap",
        zh: "便宜的"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "おおい",
        de: "viel(e)",
        en: "many, a lot",
        zh: "多的"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "すくない",
        de: "wenig(e)",
        en: "few, a little",
        zh: "少的"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "べんり",
        de: "praktisch",
        en: "convenient",
        zh: "方便"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "しんせん",
        de: "frisch",
        en: "fresh",
        zh: "新鲜"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "やさい",
        de: "Gemüse",
        en: "vegetables",
        zh: "蔬菜"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "トマト",
        de: "Tomate",
        en: "tomato",
        zh: "西红柿"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "たまご",
        de: "Ei",
        en: "egg",
        zh: "鸡蛋"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "かばん",
        de: "Tasche",
        en: "bag",
        zh: "包"
      }
    },
    {
      id: "v35",
      category: "noun",
      translations: {
        ja: "げんきん",
        de: "Bargeld",
        en: "cash",
        zh: "现金"
      }
    },
    {
      id: "v36",
      category: "noun",
      translations: {
        ja: "カード",
        de: "Karte",
        en: "card",
        zh: "卡"
      }
    },
    {
      id: "v37",
      category: "noun",
      translations: {
        ja: "サービス",
        de: "gratis, aufs Haus",
        en: "complimentary, on the house",
        zh: "赠送，免费"
      }
    },
    {
      id: "v38",
      category: "verb",
      translations: {
        ja: "いる",
        de: "brauchen, benötigen",
        en: "to need",
        zh: "需要"
      }
    },
    {
      id: "v39",
      category: "adjective",
      translations: {
        ja: "ほしい",
        de: "möchten, haben wollen (い-Adjektiv)",
        en: "to want (い-adj)",
        zh: "想要"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：しじょうで",
      de: "Dialog A: Auf dem Markt",
      en: "Dialogue A: At the Market",
      zh: "会话：在市场"
    },
    lines: [
      {
        id: "d1",
        speaker: "てんいん",
        translations: {
          ja: "いらっしゃいませ！なにか さがしていますか？",
          de: "Willkommen! Suchen Sie etwas Bestimmtes?",
          en: "Welcome! Are you looking for something?",
          zh: "欢迎光临！在找什么东西吗？"
        }
      },
      {
        id: "d2",
        speaker: "きゃく",
        translations: {
          ja: "はい、しんせんな やさいが ほしいです。",
          de: "Ja, ich möchte etwas frisches Gemüse.",
          en: "Yes, I want some fresh vegetables.",
          zh: "是的，我想要新鲜的蔬菜。"
        }
      },
      {
        id: "d3",
        speaker: "てんいん",
        translations: {
          ja: "この トマトは とても しんせんですよ。",
          de: "Diese Tomaten sind sehr frisch.",
          en: "These tomatoes are very fresh.",
          zh: "这些西红柿非常新鲜哦。"
        }
      },
      {
        id: "d4",
        speaker: "きゃく",
        translations: {
          ja: "いくらですか？",
          de: "Wie viel kostet das?",
          en: "How much is it?",
          zh: "多少钱？"
        }
      },
      {
        id: "d5",
        speaker: "てんいん",
        translations: {
          ja: "ひとつ ひゃくえんです。",
          de: "Hundert Yen pro Stück.",
          en: "One hundred yen each.",
          zh: "一个一百日元。"
        }
      },
      {
        id: "d6",
        speaker: "きゃく",
        translations: {
          ja: "じゃあ、みっつ ください。",
          de: "Dann bitte drei.",
          en: "Then, three please.",
          zh: "那请给我三个。"
        }
      },
      {
        id: "d7",
        speaker: "てんいん",
        translations: {
          ja: "ほかに なにか いかがですか？",
          de: "Möchten Sie noch etwas?",
          en: "Would you like anything else?",
          zh: "还需要别的吗？"
        }
      },
      {
        id: "d8",
        speaker: "きゃく",
        translations: {
          ja: "たまごも ありますか？",
          de: "Haben Sie auch Eier?",
          en: "Do you have eggs too?",
          zh: "也有鸡蛋吗？"
        }
      },
      {
        id: "d9",
        speaker: "てんいん",
        translations: {
          ja: "はい、ろっこで にひゃくえんです。",
          de: "Ja, sechs für zweihundert Yen.",
          en: "Yes, six for two hundred yen.",
          zh: "有的，六个两百日元。"
        }
      },
      {
        id: "d10",
        speaker: "きゃく",
        translations: {
          ja: "それも ください。",
          de: "Das nehme ich auch.",
          en: "I'll take that too.",
          zh: "那个也请给我。"
        }
      },
      {
        id: "d11",
        speaker: "てんいん",
        translations: {
          ja: "ぜんぶで ごひゃくえんです。",
          de: "Insgesamt fünfhundert Yen.",
          en: "Five hundred yen in total.",
          zh: "一共五百日元。"
        }
      },
      {
        id: "d12",
        speaker: "きゃく",
        translations: {
          ja: "はい、どうぞ。",
          de: "Bitte sehr.",
          en: "Here you are.",
          zh: "好的，给您。"
        }
      },
      {
        id: "d13",
        speaker: "てんいん",
        translations: {
          ja: "おつりは ありません。",
          de: "Es gibt kein Wechselgeld (passend gezahlt).",
          en: "There's no change (exact amount).",
          zh: "不用找零了（刚好）。"
        }
      },
      {
        id: "d14",
        speaker: "きゃく",
        translations: {
          ja: "ありがとうございます！",
          de: "Danke!",
          en: "Thank you!",
          zh: "谢谢！"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：ねだんの こうしょう",
      de: "Dialog B: Über den Preis verhandeln",
      en: "Dialogue B: Haggling Over Price",
      zh: "会话：讲价"
    },
    lines: [
      {
        id: "e1",
        speaker: "きゃく",
        translations: {
          ja: "この かばんは いくらですか？",
          de: "Wie viel kostet diese Tasche?",
          en: "How much is this bag?",
          zh: "这个包多少钱？"
        }
      },
      {
        id: "e2",
        speaker: "てんいん",
        translations: {
          ja: "さんぜんえんです。",
          de: "Sie kostet dreitausend Yen.",
          en: "It's three thousand yen.",
          zh: "三千日元。"
        }
      },
      {
        id: "e3",
        speaker: "きゃく",
        translations: {
          ja: "ちょっと たかいですね。",
          de: "Das ist etwas teuer.",
          en: "That's a bit expensive.",
          zh: "有点贵呢。"
        }
      },
      {
        id: "e4",
        speaker: "てんいん",
        translations: {
          ja: "そうですか。でも、とても べんりですよ。",
          de: "Ach so? Aber sie ist sehr praktisch.",
          en: "Is that so? But it's very convenient.",
          zh: "是吗？不过很方便哦。"
        }
      },
      {
        id: "e5",
        speaker: "きゃく",
        translations: {
          ja: "もう すこし やすく できますか？",
          de: "Können Sie es etwas günstiger machen?",
          en: "Can you make it a little cheaper?",
          zh: "能再便宜一点吗？"
        }
      },
      {
        id: "e6",
        speaker: "てんいん",
        translations: {
          ja: "うーん、にせんごひゃくえんは どうですか？",
          de: "Hmm, wie wäre es mit zweitausendfünfhundert Yen?",
          en: "Hmm, how about two thousand five hundred yen?",
          zh: "嗯……两千五百日元怎么样？"
        }
      },
      {
        id: "e7",
        speaker: "きゃく",
        translations: {
          ja: "にせんえんは だめですか？",
          de: "Geht zweitausend Yen nicht?",
          en: "Is two thousand yen no good?",
          zh: "两千日元不行吗？"
        }
      },
      {
        id: "e8",
        speaker: "てんいん",
        translations: {
          ja: "うーん、わかりました。にせんえんで いいです。",
          de: "Hmm, gut. Zweitausend Yen sind in Ordnung.",
          en: "Hmm, okay. Two thousand yen is fine.",
          zh: "嗯，好吧。两千日元就可以。"
        }
      },
      {
        id: "e9",
        speaker: "きゃく",
        translations: {
          ja: "ありがとうございます！",
          de: "Danke!",
          en: "Thank you!",
          zh: "谢谢！"
        }
      },
      {
        id: "e10",
        speaker: "てんいん",
        translations: {
          ja: "げんきんですか、カードですか？",
          de: "Bar oder Karte?",
          en: "Cash or card?",
          zh: "现金还是刷卡？"
        }
      },
      {
        id: "e11",
        speaker: "きゃく",
        translations: {
          ja: "げんきんで はらいます。",
          de: "Ich zahle bar.",
          en: "I'll pay in cash.",
          zh: "我付现金。"
        }
      },
      {
        id: "e12",
        speaker: "てんいん",
        translations: {
          ja: "かしこまりました。",
          de: "Verstanden.",
          en: "Understood.",
          zh: "明白了。"
        }
      },
      {
        id: "e13",
        speaker: "きゃく",
        translations: {
          ja: "ふくろは いりますか？",
          de: "Moment, brauche ich eine Tüte?",
          en: "Wait, do I need a bag?",
          zh: "等等，需要袋子吗？"
        }
      },
      {
        id: "e14",
        speaker: "てんいん",
        translations: {
          ja: "はい、サービスです。どうぞ。",
          de: "Ja, die ist gratis. Bitte sehr.",
          en: "Yes, it's on the house. Here you go.",
          zh: "好的，这是赠送的。给您。"
        }
      }
    ]
  },
  song: {
    // Per docs/a1-master-lesson-table-v05.md's assignment for row 8 —
    // also a natural fit for this lesson's numbers/quantity grammar.
    title: { ja: "この おじいさん", en: "This Old Man", de: "Der alte Mann", zh: "这位老爷爷" },
    lines: [
      { id: "sg1", translations: { ja: "この おじいさん、いちで あそんだ", en: "This old man, he played one", de: "Der alte Mann, er spielte eins", zh: "这位老爷爷，用一玩耍" } },
      { id: "sg2", translations: { ja: "ゆびで トン トン ならしたよ", en: "He played knick-knack on my thumb", de: "Er klopfte knick-knack auf meinen Daumen", zh: "用手指敲了敲" } },
      { id: "sg3", translations: { ja: "トン トン パディーワック", en: "With a knick-knack paddywhack", de: "Mit einem knick-knack paddywhack", zh: "咚咚，帕迪瓦克" } },
      { id: "sg4", translations: { ja: "いぬに ほねを あげよう", en: "Give a dog a bone", de: "gib dem Hund einen Knochen", zh: "给狗狗一根骨头吧" } },
      { id: "sg5", translations: { ja: "この おじいさん、おうちに かえった", en: "This old man came rolling home", de: "Der alte Mann kam nach Hause gerollt", zh: "这位老爷爷，回家去了" } }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "すうじと かず",
        de: "Zahlen und Mengen",
        en: "Numbers and Quantity"
      },
      explanation: {
        ja: "にほんごの すうじ 1から10は：いち、に、さん、よん、ご、ろく、なな、はち、きゅう、じゅう です。まるい ものや ちいさい ものを かぞえる とき、「〜つ」を つかいます：ひとつ、ふたつ、みっつ、よっつ、いつつ。ねだんは「〜えん」で いいます。",
        de: "Die japanischen Zahlen 1-10 sind: いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. Um runde oder kleine Gegenstände allgemein zu zählen, benutzt man 〜つ: ひとつ (eins), ふたつ (zwei), みっつ (drei), よっつ (vier), いつつ (fünf). Preise werden mit 〜えん (Yen) angegeben.",
        en: "Japanese numbers 1-10 are: いち, に, さん, よん, ご, ろく, なな, はち, きゅう, じゅう. To count round or small objects generically, use 〜つ: ひとつ (one), ふたつ (two), みっつ (three), よっつ (four), いつつ (five). Prices are said with 〜えん (yen)."
      },
      chunks: [
        {
          id: "n1",
          translations: {
            ja: "りんごを ふたつ ください。",
            de: "Zwei Äpfel, bitte. (ふたつ = zwei, allgemeiner Zähler)",
            en: "Two apples, please. (ふたつ = two, generic counter)"
          }
        },
        {
          id: "n2",
          translations: {
            ja: "これは ひゃくえんです。",
            de: "Das kostet hundert Yen.",
            en: "This is one hundred yen."
          }
        },
        {
          id: "n3",
          translations: {
            ja: "たまごを ろくこ ください。",
            de: "Sechs Eier, bitte. (ろっこ/ろくこ — Stückzähler)",
            en: "Six eggs, please. (ろっこ/ろくこ — item counter)"
          }
        },
        {
          id: "n4",
          translations: {
            ja: "ぜんぶで さんびゃくえんです。",
            de: "Das macht insgesamt dreihundert Yen.",
            en: "It's three hundred yen in total."
          }
        },
        {
          id: "n5",
          translations: {
            ja: "もう すこし やすく できますか？",
            de: "Können Sie es etwas günstiger machen?",
            en: "Can you make it a little cheaper?"
          }
        },
        {
          id: "n6",
          translations: {
            ja: "みっつで にひゃくえんです。",
            de: "Drei für zweihundert Yen.",
            en: "Three for two hundred yen."
          }
        }
      ]
    },
    de: {
      title: {
        de: "Zahlen und Mengenangaben",
        en: "Numbers and Quantity",
        ja: "すうじ と りょう"
      },
      explanation: {
        de: "Die Grundzahlen 1-12 sind: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf. Sie stehen direkt vor dem gezählten Nomen, ohne Zählwort wie im Japanischen. Mengenwörter wie viel(e) (\"much/many\") und wenig(e) (\"little/few\") stehen ebenfalls vor dem Nomen — bei zählbaren Nomen im Plural bekommen sie ein -e: viele Äpfel, wenige Äpfel.",
        en: "Cardinal numbers 1-12 are: eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf. They go directly before the counted noun, with no counter word like in Japanese. Quantity words like viel(e) (\"much/many\") and wenig(e) (\"little/few\") also go before the noun — with countable plural nouns they take an -e: viele Äpfel, wenige Äpfel.",
        ja: "きすうし 1〜12は：eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf です。にほんごの じょすうしと ちがい、かぞえる めいしの まえに ちょくせつ おきます。viel(e)（おおい）や wenig(e)（すくない）のような りょうを あらわす ことばも めいしの まえに おきます — ふくすうの かぞえられる めいしには -e が つきます：viele Äpfel、wenige Äpfel。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Das kostet zehn Euro.",
            en: "That costs ten euros. (number)",
            ja: "それは じゅうユーロです。（すうじ）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Ich brauche zwei Tomaten.",
            en: "I need two tomatoes. (number + counted noun, no counter word)",
            ja: "トマトが ふたつ ひつようです。（すうじ、じょすうしなし）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Es gibt viele Sonderangebote.",
            en: "There are many special offers. (viele — plural quantity)",
            ja: "とくばいひんが たくさん あります。（viele — ふくすうの りょう）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Wir haben wenig Geld.",
            en: "We have little money. (wenig — uncountable quantity)",
            ja: "わたしたちは おかねが すくないです。（wenig — かぞえられない りょう）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Der Preis ist hundert Euro.",
            en: "The price is one hundred euros. (number)",
            ja: "ねだんは ひゃくユーロです。（すうじ）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Ich kaufe ein paar Tomaten.",
            en: "I'm buying a few tomatoes. (ein paar — a few)",
            ja: "トマトを すこし かいます。（ein paar — すこし）"
          }
        }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-zahlen",
        title: { de: "Übung: Zahlen und Mengenangaben", en: "Practice: Numbers and Quantity", ja: "れんしゅう：すうじ と りょう", zh: "练习：数字与数量" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit Zahlen und Mengenangaben.",
          en: "Next, let's practice example sentences using numbers and quantities.",
          ja: "つぎは、すうじと りょうを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用数字和数量的例句。"
        },
        lines: [
          { id: "z1", translations: { de: "Ich kaufe drei Tomaten.", en: "I buy three tomatoes. (number before noun)", ja: "トマトを さんこ かいます。（すうじ＋めいし）", zh: "我买三个西红柿。（数字+名词）" } },
          { id: "z2", translations: { de: "Sie hat zwei Eier gekauft.", en: "She bought two eggs. (number before noun)", ja: "かのじょは たまごを にこ かいました。（すうじ＋めいし）", zh: "她买了两个鸡蛋。（数字+名词）" } },
          { id: "z3", translations: { de: "Wir brauchen viele Taschen.", en: "We need many bags. (viele, plural -e)", ja: "たくさんの ふくろが ひつようです。（viele、ふくすう -e）", zh: "我们需要很多袋子。（viele，复数-e）" } },
          { id: "z4", translations: { de: "Er hat wenige Kunden heute.", en: "He has few customers today. (wenige, plural -e)", ja: "きょうは きゃくが すくないです。（wenige、ふくすう -e）", zh: "他今天顾客很少。（wenige，复数-e）" } },
          { id: "z5", translations: { de: "Das Geschäft hat zehn Sonderangebote.", en: "The shop has ten special deals. (number before noun)", ja: "その みせには とくばいひんが じゅっこ あります。（すうじ＋めいし）", zh: "这家店有十个促销商品。（数字+名词）" } },
          { id: "z6", translations: { de: "Ich habe viel Geld gespart.", en: "I have saved a lot of money. (viel, uncountable)", ja: "たくさん おかねを ためました。（viel、すうえられない めいし）", zh: "我攒了很多钱。（viel，不可数名词）" } },
          { id: "z7", translations: { de: "Sie hat wenig Zeit heute.", en: "She has little time today. (wenig, uncountable)", ja: "きょうは じかんが すくないです。（wenig、すうえられない めいし）", zh: "她今天时间很少。（wenig，不可数名词）" } },
          { id: "z8", translations: { de: "Der Markt hat zwölf Verkäufer.", en: "The market has twelve vendors. (number before noun)", ja: "その いちばには てんいんが じゅうにん います。（すうじ＋めいし）", zh: "市场有十二个卖家。（数字+名词）" } },
          { id: "z9", translations: { de: "Wir haben fünf Yen Rabatt bekommen.", en: "We got a five-yen discount. (number before noun)", ja: "ごえん わりびきを もらいました。（すうじ＋めいし）", zh: "我们获得了五日元的折扣。（数字+名词）" } },
          { id: "z10", translations: { de: "Es gibt wenige frische Äpfel.", en: "There are few fresh apples. (wenige, plural -e)", ja: "しんせんな りんごが すくないです。（wenige、ふくすう -e）", zh: "新鲜的苹果很少。（wenige，复数-e）" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: {
        ja: "はつおんの れんしゅう",
        de: "Aussprachetraining",
        en: "Pronunciation Practice"
      },
      groupLabels: {
        rsound: {
          ja: "ら行の おと",
          de: "Der japanische R-Laut (ら-Reihe)",
          en: "The Japanese R-sound (ら row)"
        },
        counter_no: {
          ja: "「ほん」ふつう",
          de: "Zähler ほん — regulär (kein っ)",
          en: "ほん counter — regular (no っ)"
        },
        counter_soku: {
          ja: "「ほん」とくべつ",
          de: "Zähler ほん — unregelmäßig (mit っ)",
          en: "ほん counter — irregular (with っ)"
        }
      },
      items: [
        {
          id: "r1",
          category: "rsound",
          translations: {
            ja: "いくら",
            de: "wie viel",
            en: "how much"
          }
        },
        {
          id: "r2",
          category: "rsound",
          translations: {
            ja: "りんご",
            de: "Apfel",
            en: "apple"
          }
        },
        {
          id: "r3",
          category: "rsound",
          translations: {
            ja: "ください",
            de: "geben Sie mir bitte",
            en: "please give me"
          }
        },
        {
          id: "r4",
          category: "rsound",
          translations: {
            ja: "これ",
            de: "dies, das hier",
            en: "this"
          }
        },
        {
          id: "r5",
          category: "rsound",
          translations: {
            ja: "それ",
            de: "das",
            en: "that"
          }
        },
        {
          id: "r6",
          category: "rsound",
          translations: {
            ja: "あれ",
            de: "das (dort drüben)",
            en: "that (over there)"
          }
        },
        {
          id: "r7",
          category: "rsound",
          translations: {
            ja: "いらっしゃいませ",
            de: "willkommen (Begrüßung des Verkäufers)",
            en: "welcome (shopkeeper's greeting)"
          }
        },
        {
          id: "r8",
          category: "rsound",
          translations: {
            ja: "ありがとう",
            de: "danke",
            en: "thank you"
          }
        },
        {
          id: "c1",
          category: "counter_no",
          translations: {
            ja: "にほん",
            de: "zwei (lange Gegenstände)",
            en: "two (long objects)"
          }
        },
        {
          id: "c2",
          category: "counter_no",
          translations: {
            ja: "さんぼん",
            de: "drei (lange Gegenstände)",
            en: "three (long objects)"
          }
        },
        {
          id: "c3",
          category: "counter_no",
          translations: {
            ja: "ごほん",
            de: "fünf (lange Gegenstände)",
            en: "five (long objects)"
          }
        },
        {
          id: "c4",
          category: "counter_no",
          translations: {
            ja: "ななほん",
            de: "sieben (lange Gegenstände)",
            en: "seven (long objects)"
          }
        },
        {
          id: "s1",
          category: "counter_soku",
          translations: {
            ja: "いっぽん",
            de: "eins (lange Gegenstände)",
            en: "one (long objects)"
          }
        },
        {
          id: "s2",
          category: "counter_soku",
          translations: {
            ja: "ろっぽん",
            de: "sechs (lange Gegenstände)",
            en: "six (long objects)"
          }
        },
        {
          id: "s3",
          category: "counter_soku",
          translations: {
            ja: "はっぽん",
            de: "acht (lange Gegenstände)",
            en: "eight (long objects)"
          }
        },
        {
          id: "s4",
          category: "counter_soku",
          translations: {
            ja: "じゅっぽん",
            de: "zehn (lange Gegenstände)",
            en: "ten (long objects)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Aussprachetraining",
        en: "Pronunciation Practice",
        ja: "はつおんの れんしゅう"
      },
      groupLabels: {
        e_length: {
          de: "E — lang vs. kurz",
          en: "E — long vs. short",
          ja: "E — ながい と みじかい"
        },
        ei: {
          de: "EI-Diphthong",
          en: "EI diphthong",
          ja: "EI の にじゅうぼいん"
        }
      },
      items: [
        {
          id: "e1",
          category: "e_length",
          translations: {
            de: "wenig",
            en: "little, few (short E)",
            ja: "すくない（みじかい E）"
          }
        },
        {
          id: "e2",
          category: "e_length",
          translations: {
            de: "Geld",
            en: "money (short E)",
            ja: "おかね（みじかい E）"
          }
        },
        {
          id: "e3",
          category: "e_length",
          translations: {
            de: "lesen",
            en: "to read (long E)",
            ja: "よむ（ながい E）"
          }
        },
        {
          id: "ei1",
          category: "ei",
          translations: {
            de: "Preis",
            en: "price (EI diphthong)",
            ja: "ねだん（EI の にじゅうぼいん）"
          }
        },
        {
          id: "ei2",
          category: "ei",
          translations: {
            de: "einpacken",
            en: "to pack, wrap (EI diphthong)",
            ja: "つつむ（EI の にじゅうぼいん）"
          }
        },
        {
          id: "ei3",
          category: "ei",
          translations: {
            de: "Ei",
            en: "egg (EI diphthong)",
            ja: "たまご（EI の にじゅうぼいん）"
          }
        }
      ]
    }
  },
  pronunciationDrills: {
    ja: [
      {
        id: "number-drill",
        title: {
          ja: "かず と らぎょう",
          en: "Numbers & R-sound Practice",
          de: "Zahlen und R-Laut-Übung"
        },
        spokenIntro: {
          ja: "つぎは、かずと ら行の れんしゅうです。",
          en: "Next, let's practice numbers and the R-sound.",
          de: "Als Nächstes üben wir Zahlen und den R-Laut."
        },
        groupLabels: {
          rwords: {
            ja: "ら行の たんご",
            en: "R-sound words",
            de: "Wörter mit R-Laut"
          },
          numbers: {
            ja: "かず",
            en: "Numbers",
            de: "Zahlen"
          },
          numbers_hon: {
            ja: "かず ＋ ほん",
            en: "Numbers + ほん (long objects)",
            de: "Zahlen + ほん (lange Gegenstände)"
          }
        },
        items: [
          {
            id: "nr1",
            category: "rwords",
            translations: {
              ja: "これ",
              en: "this",
              de: "dies, das hier"
            }
          },
          {
            id: "nr2",
            category: "rwords",
            translations: {
              ja: "それ",
              en: "that",
              de: "das"
            }
          },
          {
            id: "nr3",
            category: "rwords",
            translations: {
              ja: "あれ",
              en: "that (over there)",
              de: "das (dort drüben)"
            }
          },
          {
            id: "nr4",
            category: "rwords",
            translations: {
              ja: "どれ",
              en: "which (of many)",
              de: "welches"
            }
          },
          {
            id: "nr5",
            category: "rwords",
            translations: {
              ja: "だれ",
              en: "who",
              de: "wer"
            }
          },
          {
            id: "nr6",
            category: "rwords",
            translations: {
              ja: "いくら",
              en: "how much",
              de: "wie viel"
            }
          },
          {
            id: "nr7",
            category: "rwords",
            translations: {
              ja: "ください",
              en: "please give me",
              de: "geben Sie mir bitte"
            }
          },
          {
            id: "nr8",
            category: "rwords",
            translations: {
              ja: "ありがとう",
              en: "thank you",
              de: "danke"
            }
          },
          {
            id: "nr9",
            category: "rwords",
            translations: {
              ja: "さくら",
              en: "cherry blossom",
              de: "Kirschblüte"
            }
          },
          {
            id: "nr10",
            category: "rwords",
            translations: {
              ja: "りんご",
              en: "apple",
              de: "Apfel"
            }
          },
          {
            id: "nr11",
            category: "rwords",
            translations: {
              ja: "わかる",
              en: "to understand",
              de: "verstehen"
            }
          },
          {
            id: "nr12",
            category: "rwords",
            translations: {
              ja: "はいる",
              en: "to enter",
              de: "eintreten"
            }
          },
          {
            id: "nr13",
            category: "rwords",
            translations: {
              ja: "とおり",
              en: "street, avenue",
              de: "Straße"
            }
          },
          {
            id: "nr14",
            category: "rwords",
            translations: {
              ja: "れい",
              en: "example / zero",
              de: "Beispiel / null"
            }
          },
          {
            id: "nr15",
            category: "rwords",
            translations: {
              ja: "らいねん",
              en: "next year",
              de: "nächstes Jahr"
            }
          },
          {
            id: "nb0",
            category: "numbers",
            translations: {
              ja: "ゼロ",
              en: "zero",
              de: "null"
            }
          },
          {
            id: "nb1",
            category: "numbers",
            translations: {
              ja: "いち",
              en: "one",
              de: "eins"
            }
          },
          {
            id: "nb2",
            category: "numbers",
            translations: {
              ja: "に",
              en: "two",
              de: "zwei"
            }
          },
          {
            id: "nb3",
            category: "numbers",
            translations: {
              ja: "さん",
              en: "three",
              de: "drei"
            }
          },
          {
            id: "nb4",
            category: "numbers",
            translations: {
              ja: "よん",
              en: "four",
              de: "vier"
            }
          },
          {
            id: "nb5",
            category: "numbers",
            translations: {
              ja: "ご",
              en: "five",
              de: "fünf"
            }
          },
          {
            id: "nb6",
            category: "numbers",
            translations: {
              ja: "ろく",
              en: "six",
              de: "sechs"
            }
          },
          {
            id: "nb7",
            category: "numbers",
            translations: {
              ja: "なな",
              en: "seven",
              de: "sieben"
            }
          },
          {
            id: "nb8",
            category: "numbers",
            translations: {
              ja: "はち",
              en: "eight",
              de: "acht"
            }
          },
          {
            id: "nb9",
            category: "numbers",
            translations: {
              ja: "きゅう",
              en: "nine",
              de: "neun"
            }
          },
          {
            id: "nb10",
            category: "numbers",
            translations: {
              ja: "じゅう",
              en: "ten",
              de: "zehn"
            }
          },
          {
            id: "nb11",
            category: "numbers",
            translations: {
              ja: "じゅういち",
              en: "eleven",
              de: "elf"
            }
          },
          {
            id: "nb15",
            category: "numbers",
            translations: {
              ja: "じゅうご",
              en: "fifteen",
              de: "fünfzehn"
            }
          },
          {
            id: "nb20",
            category: "numbers",
            translations: {
              ja: "にじゅう",
              en: "twenty",
              de: "zwanzig"
            }
          },
          {
            id: "nb100",
            category: "numbers",
            translations: {
              ja: "ひゃく",
              en: "hundred",
              de: "hundert"
            }
          },
          {
            id: "nh0",
            category: "numbers_hon",
            translations: {
              ja: "ゼロほん",
              en: "zero (long objects)",
              de: "null (lange Gegenstände)"
            }
          },
          {
            id: "nh1",
            category: "numbers_hon",
            translations: {
              ja: "いっぽん",
              en: "one (long objects)",
              de: "eins (lange Gegenstände)"
            }
          },
          {
            id: "nh2",
            category: "numbers_hon",
            translations: {
              ja: "にほん",
              en: "two (long objects)",
              de: "zwei (lange Gegenstände)"
            }
          },
          {
            id: "nh3",
            category: "numbers_hon",
            translations: {
              ja: "さんぼん",
              en: "three (long objects)",
              de: "drei (lange Gegenstände)"
            }
          },
          {
            id: "nh4",
            category: "numbers_hon",
            translations: {
              ja: "よんほん",
              en: "four (long objects)",
              de: "vier (lange Gegenstände)"
            }
          },
          {
            id: "nh5",
            category: "numbers_hon",
            translations: {
              ja: "ごほん",
              en: "five (long objects)",
              de: "fünf (lange Gegenstände)"
            }
          },
          {
            id: "nh6",
            category: "numbers_hon",
            translations: {
              ja: "ろっぽん",
              en: "six (long objects)",
              de: "sechs (lange Gegenstände)"
            }
          },
          {
            id: "nh7",
            category: "numbers_hon",
            translations: {
              ja: "ななほん",
              en: "seven (long objects)",
              de: "sieben (lange Gegenstände)"
            }
          },
          {
            id: "nh8",
            category: "numbers_hon",
            translations: {
              ja: "はっぽん",
              en: "eight (long objects)",
              de: "acht (lange Gegenstände)"
            }
          },
          {
            id: "nh9",
            category: "numbers_hon",
            translations: {
              ja: "きゅうほん",
              en: "nine (long objects)",
              de: "neun (lange Gegenstände)"
            }
          },
          {
            id: "nh10",
            category: "numbers_hon",
            translations: {
              ja: "じゅっぽん",
              en: "ten (long objects)",
              de: "zehn (lange Gegenstände)"
            }
          },
          {
            id: "nh11",
            category: "numbers_hon",
            translations: {
              ja: "じゅういっぽん",
              en: "eleven (long objects)",
              de: "elf (lange Gegenstände)"
            }
          },
          {
            id: "nh15",
            category: "numbers_hon",
            translations: {
              ja: "じゅうごほん",
              en: "fifteen (long objects)",
              de: "fünfzehn (lange Gegenstände)"
            }
          },
          {
            id: "nh20",
            category: "numbers_hon",
            translations: {
              ja: "にじゅっぽん",
              en: "twenty (long objects)",
              de: "zwanzig (lange Gegenstände)"
            }
          },
          {
            id: "nh100",
            category: "numbers_hon",
            translations: {
              ja: "ひゃっぽん",
              en: "hundred (long objects)",
              de: "hundert (lange Gegenstände)"
            }
          }
        ]
      }
    ]
  },
  // Mini-fork: the shared dialogue prices everything in Yen, correctly
  // for the Japanese-target course — but that shouldn't leak into the
  // German course. These overrides swap just the German field of the
  // affected vocab/dialogue items to Euro amounts, keeping the same
  // internal math as the original (3x1 + 2 = 5 in dialogueA; a realistic
  // bag-price negotiation in dialogueB) — everything else about these
  // items, and every other item, is untouched. See topicTypes.ts.
  overrides: {
    de: {
      v12: "Euro",
      d5: "Ein Euro pro Stück.",
      d9: "Ja, sechs für zwei Euro.",
      d11: "Insgesamt fünf Euro.",
      e2: "Sie kostet dreißig Euro.",
      e6: "Hmm, wie wäre es mit fünfundzwanzig Euro?",
      e7: "Geht zwanzig Euro nicht?",
      e8: "Hmm, gut. Zwanzig Euro sind in Ordnung."
    }
  }
};
