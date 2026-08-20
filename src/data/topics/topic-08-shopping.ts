import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese8.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from the
// original file. Also carries the lesson's extra number/R-sound drill
// slide via extraDrills — the one lesson that has a slide beyond the
// standard vocab+pronunciation pair, which is what extraDrills was added
// to topicTypes.ts to support. No content was rewritten in this
// migration.

export const topicShopping: TopicLesson = {
  id: "topic-08-shopping",
  lessonNumber: 8,
  topicName: {
    ja: "かいもの",
    de: "Einkaufen",
    en: "Shopping"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "みせ",
        de: "Geschäft, Laden",
        en: "shop, store"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "しじょう",
        de: "Markt",
        en: "market"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "おかね",
        de: "Geld",
        en: "money"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "ねだん",
        de: "Preis",
        en: "price"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "レシート",
        de: "Kassenbon",
        en: "receipt"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "おつり",
        de: "Wechselgeld",
        en: "change (money)"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "ふくろ",
        de: "Tasche, Tüte",
        en: "bag"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "レジ",
        de: "Kasse",
        en: "cash register, checkout"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "てんいん",
        de: "Verkäufer(in)",
        en: "shop clerk"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "きゃく",
        de: "Kunde, Kundin",
        en: "customer"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "セール",
        de: "Sonderangebot",
        en: "sale"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "えん",
        de: "Yen",
        en: "yen"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "やおや",
        de: "Gemüseladen",
        en: "vegetable shop"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "スーパー",
        de: "Supermarkt",
        en: "supermarket"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "かご",
        de: "Einkaufskorb",
        en: "shopping basket"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "わりびき",
        de: "Rabatt",
        en: "discount"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "かう",
        de: "kaufen",
        en: "to buy"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "うる",
        de: "verkaufen",
        en: "to sell"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "はらう",
        de: "bezahlen",
        en: "to pay"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "えらぶ",
        de: "auswählen",
        en: "to choose"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "さがす",
        de: "suchen",
        en: "to look for"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "まける",
        de: "den Preis senken (feilschen)",
        en: "to lower a price (haggling)"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "つつむ",
        de: "einpacken",
        en: "to wrap"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "くらべる",
        de: "vergleichen",
        en: "to compare"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "たかい",
        de: "teuer",
        en: "expensive"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "やすい",
        de: "günstig",
        en: "cheap"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "おおい",
        de: "viel(e)",
        en: "many, a lot"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "すくない",
        de: "wenig(e)",
        en: "few, a little"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "べんり",
        de: "praktisch",
        en: "convenient"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "しんせん",
        de: "frisch",
        en: "fresh"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "やさい",
        de: "Gemüse",
        en: "vegetables"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "トマト",
        de: "Tomate",
        en: "tomato"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "たまご",
        de: "Ei",
        en: "egg"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "かばん",
        de: "Tasche",
        en: "bag"
      }
    },
    {
      id: "v35",
      category: "noun",
      translations: {
        ja: "げんきん",
        de: "Bargeld",
        en: "cash"
      }
    },
    {
      id: "v36",
      category: "noun",
      translations: {
        ja: "カード",
        de: "Karte",
        en: "card"
      }
    },
    {
      id: "v37",
      category: "noun",
      translations: {
        ja: "サービス",
        de: "gratis, aufs Haus",
        en: "complimentary, on the house"
      }
    },
    {
      id: "v38",
      category: "verb",
      translations: {
        ja: "いる",
        de: "brauchen, benötigen",
        en: "to need"
      }
    },
    {
      id: "v39",
      category: "adjective",
      translations: {
        ja: "ほしい",
        de: "möchten, haben wollen (い-Adjektiv)",
        en: "to want (い-adj)"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：しじょうで",
      de: "Dialog A: Auf dem Markt",
      en: "Dialogue A: At the Market"
    },
    lines: [
      {
        id: "d1",
        speaker: "てんいん",
        translations: {
          ja: "いらっしゃいませ！なにか さがしていますか？",
          de: "Willkommen! Suchen Sie etwas Bestimmtes?",
          en: "Welcome! Are you looking for something?"
        }
      },
      {
        id: "d2",
        speaker: "きゃく",
        translations: {
          ja: "はい、しんせんな やさいが ほしいです。",
          de: "Ja, ich möchte etwas frisches Gemüse.",
          en: "Yes, I want some fresh vegetables."
        }
      },
      {
        id: "d3",
        speaker: "てんいん",
        translations: {
          ja: "この トマトは とても しんせんですよ。",
          de: "Diese Tomaten sind sehr frisch.",
          en: "These tomatoes are very fresh."
        }
      },
      {
        id: "d4",
        speaker: "きゃく",
        translations: {
          ja: "いくらですか？",
          de: "Wie viel kostet das?",
          en: "How much is it?"
        }
      },
      {
        id: "d5",
        speaker: "てんいん",
        translations: {
          ja: "ひとつ ひゃくえんです。",
          de: "Hundert Yen pro Stück.",
          en: "One hundred yen each."
        }
      },
      {
        id: "d6",
        speaker: "きゃく",
        translations: {
          ja: "じゃあ、みっつ ください。",
          de: "Dann bitte drei.",
          en: "Then, three please."
        }
      },
      {
        id: "d7",
        speaker: "てんいん",
        translations: {
          ja: "ほかに なにか いかがですか？",
          de: "Möchten Sie noch etwas?",
          en: "Would you like anything else?"
        }
      },
      {
        id: "d8",
        speaker: "きゃく",
        translations: {
          ja: "たまごも ありますか？",
          de: "Haben Sie auch Eier?",
          en: "Do you have eggs too?"
        }
      },
      {
        id: "d9",
        speaker: "てんいん",
        translations: {
          ja: "はい、ろっこで にひゃくえんです。",
          de: "Ja, sechs für zweihundert Yen.",
          en: "Yes, six for two hundred yen."
        }
      },
      {
        id: "d10",
        speaker: "きゃく",
        translations: {
          ja: "それも ください。",
          de: "Das nehme ich auch.",
          en: "I'll take that too."
        }
      },
      {
        id: "d11",
        speaker: "てんいん",
        translations: {
          ja: "ぜんぶで ごひゃくえんです。",
          de: "Insgesamt fünfhundert Yen.",
          en: "Five hundred yen in total."
        }
      },
      {
        id: "d12",
        speaker: "きゃく",
        translations: {
          ja: "はい、どうぞ。",
          de: "Bitte sehr.",
          en: "Here you are."
        }
      },
      {
        id: "d13",
        speaker: "てんいん",
        translations: {
          ja: "おつりは ありません。",
          de: "Es gibt kein Wechselgeld (passend gezahlt).",
          en: "There's no change (exact amount)."
        }
      },
      {
        id: "d14",
        speaker: "きゃく",
        translations: {
          ja: "ありがとうございます！",
          de: "Danke!",
          en: "Thank you!"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：ねだんの こうしょう",
      de: "Dialog B: Über den Preis verhandeln",
      en: "Dialogue B: Haggling Over Price"
    },
    lines: [
      {
        id: "e1",
        speaker: "きゃく",
        translations: {
          ja: "この かばんは いくらですか？",
          de: "Wie viel kostet diese Tasche?",
          en: "How much is this bag?"
        }
      },
      {
        id: "e2",
        speaker: "てんいん",
        translations: {
          ja: "さんぜんえんです。",
          de: "Sie kostet dreitausend Yen.",
          en: "It's three thousand yen."
        }
      },
      {
        id: "e3",
        speaker: "きゃく",
        translations: {
          ja: "ちょっと たかいですね。",
          de: "Das ist etwas teuer.",
          en: "That's a bit expensive."
        }
      },
      {
        id: "e4",
        speaker: "てんいん",
        translations: {
          ja: "そうですか。でも、とても べんりですよ。",
          de: "Ach so? Aber sie ist sehr praktisch.",
          en: "Is that so? But it's very convenient."
        }
      },
      {
        id: "e5",
        speaker: "きゃく",
        translations: {
          ja: "もう すこし やすく できますか？",
          de: "Können Sie es etwas günstiger machen?",
          en: "Can you make it a little cheaper?"
        }
      },
      {
        id: "e6",
        speaker: "てんいん",
        translations: {
          ja: "うーん、にせんごひゃくえんは どうですか？",
          de: "Hmm, wie wäre es mit zweitausendfünfhundert Yen?",
          en: "Hmm, how about two thousand five hundred yen?"
        }
      },
      {
        id: "e7",
        speaker: "きゃく",
        translations: {
          ja: "にせんえんは だめですか？",
          de: "Geht zweitausend Yen nicht?",
          en: "Is two thousand yen no good?"
        }
      },
      {
        id: "e8",
        speaker: "てんいん",
        translations: {
          ja: "うーん、わかりました。にせんえんで いいです。",
          de: "Hmm, gut. Zweitausend Yen sind in Ordnung.",
          en: "Hmm, okay. Two thousand yen is fine."
        }
      },
      {
        id: "e9",
        speaker: "きゃく",
        translations: {
          ja: "ありがとうございます！",
          de: "Danke!",
          en: "Thank you!"
        }
      },
      {
        id: "e10",
        speaker: "てんいん",
        translations: {
          ja: "げんきんですか、カードですか？",
          de: "Bar oder Karte?",
          en: "Cash or card?"
        }
      },
      {
        id: "e11",
        speaker: "きゃく",
        translations: {
          ja: "げんきんで はらいます。",
          de: "Ich zahle bar.",
          en: "I'll pay in cash."
        }
      },
      {
        id: "e12",
        speaker: "てんいん",
        translations: {
          ja: "かしこまりました。",
          de: "Verstanden.",
          en: "Understood."
        }
      },
      {
        id: "e13",
        speaker: "きゃく",
        translations: {
          ja: "ふくろは いりますか？",
          de: "Moment, brauche ich eine Tüte?",
          en: "Wait, do I need a bag?"
        }
      },
      {
        id: "e14",
        speaker: "てんいん",
        translations: {
          ja: "はい、サービスです。どうぞ。",
          de: "Ja, die ist gratis. Bitte sehr.",
          en: "Yes, it's on the house. Here you go."
        }
      }
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
    }
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
    }
  },
  extraDrills: {
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
  }
};
