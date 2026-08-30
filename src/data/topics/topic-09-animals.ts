import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese9.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicAnimals: TopicLesson = {
  id: "topic-09-animals",
  lessonNumber: 9,
  topicName: {
    ja: "どうぶつ",
    en: "Animals",
    de: "Tiere"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "いぬ",
        en: "dog",
        de: "Hund"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "ねこ",
        en: "cat",
        de: "Katze"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "とり",
        en: "bird",
        de: "Vogel"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "うさぎ",
        en: "rabbit",
        de: "Kaninchen"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "ぞう",
        en: "elephant",
        de: "Elefant"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "ライオン",
        en: "lion",
        de: "Löwe"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "さる",
        en: "monkey",
        de: "Affe"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "くま",
        en: "bear",
        de: "Bär"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "うま",
        en: "horse",
        de: "Pferd"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "ひつじ",
        en: "sheep",
        de: "Schaf"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "ぶた",
        en: "pig",
        de: "Schwein"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "にわとり",
        en: "chicken",
        de: "Huhn"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "きりん",
        en: "giraffe",
        de: "Giraffe"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "パンダ",
        en: "panda",
        de: "Panda"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "どうぶつえん",
        en: "zoo",
        de: "Zoo"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "かう",
        en: "to keep (a pet)",
        de: "halten (Haustier)"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "えさを やる",
        en: "to feed (an animal)",
        de: "füttern"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "なつく",
        en: "to become attached, tame",
        de: "zutraulich werden"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "ほえる",
        en: "to bark",
        de: "bellen"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "なく",
        en: "to cry, make an animal sound",
        de: "Laute von sich geben"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "そだてる",
        en: "to raise",
        de: "aufziehen"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "さわる",
        en: "to touch",
        de: "berühren"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "みる",
        en: "to look at, watch",
        de: "ansehen"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "かわいい",
        en: "cute",
        de: "süß"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "こわい",
        en: "scary",
        de: "gruselig"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "おとなしい",
        en: "gentle, docile",
        de: "sanft, zahm"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "げんき",
        en: "energetic, healthy",
        de: "energisch, gesund"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "おおきい",
        en: "big",
        de: "groß"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "ちいさい",
        en: "small",
        de: "klein"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "はやい",
        en: "fast",
        de: "schnell"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：こどもと どうぶつえんへ",
      en: "Dialogue A: Visiting the Zoo",
      de: "Dialog A: Zoobesuch"
    },
    lines: [
      {
        id: "d1",
        speaker: "こども",
        translations: {
          ja: "ぞうを みたい！",
          en: "I want to see the elephants!",
          de: "Ich möchte die Elefanten sehen!"
        }
      },
      {
        id: "d2",
        speaker: "おかあさん",
        translations: {
          ja: "いいよ。あっちに いるよ。",
          en: "Okay. They're over there.",
          de: "Gut. Sie sind dort drüben."
        }
      },
      {
        id: "d3",
        speaker: "こども",
        translations: {
          ja: "わあ、おおきいね！",
          en: "Wow, they're big!",
          de: "Wow, sie sind groß!"
        }
      },
      {
        id: "d4",
        speaker: "おかあさん",
        translations: {
          ja: "そうだね。つぎは ライオンを みようか。",
          en: "That's right. Should we see the lions next?",
          de: "Genau. Sollen wir als Nächstes die Löwen sehen?"
        }
      },
      {
        id: "d5",
        speaker: "こども",
        translations: {
          ja: "うん！ライオンは こわい？",
          en: "Yeah! Are lions scary?",
          de: "Ja! Sind Löwen gruselig?"
        }
      },
      {
        id: "d6",
        speaker: "おかあさん",
        translations: {
          ja: "だいじょうぶ、ガラスの むこうに いるよ。",
          en: "It's okay, they're behind glass.",
          de: "Kein Problem, sie sind hinter Glas."
        }
      },
      {
        id: "d7",
        speaker: "こども",
        translations: {
          ja: "うさぎたちも みたい。",
          en: "I want to see the rabbits too.",
          de: "Ich möchte auch die Kaninchen sehen."
        }
      },
      {
        id: "d8",
        speaker: "おかあさん",
        translations: {
          ja: "うさぎは さわっても いいんだよ。",
          en: "You're allowed to touch the rabbits.",
          de: "Du darfst die Kaninchen berühren."
        }
      },
      {
        id: "d9",
        speaker: "こども",
        translations: {
          ja: "ほんとう？やってみたい！",
          en: "Really? I want to try!",
          de: "Wirklich? Das möchte ich probieren!"
        }
      },
      {
        id: "d10",
        speaker: "おかあさん",
        translations: {
          ja: "とても おとなしい どうぶつだよ。",
          en: "They're very gentle animals.",
          de: "Es sind sehr sanfte Tiere."
        }
      },
      {
        id: "d11",
        speaker: "こども",
        translations: {
          ja: "パンダも いる？",
          en: "Are there pandas too?",
          de: "Gibt es auch Pandas?"
        }
      },
      {
        id: "d12",
        speaker: "おかあさん",
        translations: {
          ja: "うん、あの たてものの なかに いるよ。",
          en: "Yes, they're inside that building.",
          de: "Ja, sie sind in diesem Gebäude."
        }
      },
      {
        id: "d13",
        speaker: "こども",
        translations: {
          ja: "はやく みたい！",
          en: "I want to see them quickly!",
          de: "Ich möchte sie schnell sehen!"
        }
      },
      {
        id: "d14",
        speaker: "おかあさん",
        translations: {
          ja: "いこうか。きょうは たのしい ひだね。",
          en: "Shall we go? Today's a fun day.",
          de: "Sollen wir gehen? Heute ist ein schöner Tag."
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：かってた ペット",
      en: "Dialogue B: Pets You've Had",
      de: "Dialog B: Frühere Haustiere"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "ペットを かったことが ある？",
          en: "Have you ever had a pet?",
          de: "Hattest du schon mal ein Haustier?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "うん、いぬを かっていたよ。",
          en: "Yeah, I had a dog.",
          de: "Ja, ich hatte einen Hund."
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "どんな いぬだった？",
          en: "What kind of dog was it?",
          de: "Was für ein Hund war es?"
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "ちいさくて、とても げんきな いぬだったよ。",
          en: "It was small and a very energetic dog.",
          de: "Er war klein und ein sehr energischer Hund."
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "なまえは なんだったの？",
          en: "What was its name?",
          de: "Wie hieß er?"
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "ポチだったよ。みかさんは？",
          en: "Pochi. What about you, Mika?",
          de: "Pochi. Und du, Mika?"
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "わたしは ねこを にひき かっていたの。",
          en: "I had two cats.",
          de: "Ich hatte zwei Katzen."
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "なかは よかった？",
          en: "Did they get along?",
          de: "Haben sie sich gut verstanden?"
        }
      },
      {
        id: "e9",
        speaker: "みか",
        translations: {
          ja: "うん、しまいの ねこたちだったから。",
          en: "Yes, because they were sister cats.",
          de: "Ja, weil es Schwesterkatzen waren."
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "とりを かったことは ある？",
          en: "Have you ever had a bird?",
          de: "Hattest du schon mal einen Vogel?"
        }
      },
      {
        id: "e11",
        speaker: "みか",
        translations: {
          ja: "ううん、ないよ。とりは かわいい？",
          en: "No, never. Are birds cute?",
          de: "Nein, noch nie. Sind Vögel süß?"
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "うん、とても かわいいよ。よく なくけどね。",
          en: "Yeah, very cute. Though they make noise a lot.",
          de: "Ja, sehr süß. Auch wenn sie viel Lärm machen."
        }
      },
      {
        id: "e13",
        speaker: "みか",
        translations: {
          ja: "また ペットを かいたい？",
          en: "Do you want another pet?",
          de: "Möchtest du wieder ein Haustier?"
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "うん、いつか また いぬを かいたいな。",
          en: "Yeah, I'd like another dog someday.",
          de: "Ja, irgendwann möchte ich wieder einen Hund."
        }
      }
    ]
  },
  song: {
    title: {
      ja: "マクドナルドじいさんの のうじょう",
      en: "Old MacDonald Had a Farm",
      de: "Onkel Jörg hat einen Bauernhof"
    },
    lines: [
      {
        id: "sg1",
        translations: {
          ja: "マクドナルドじいさんの のうじょうで",
          en: "Old MacDonald had a farm",
          de: "Onkel Jörg hat einen Bauernhof"
        }
      },
      {
        id: "sg2",
        translations: {
          ja: "イーアイ イーアイ オー",
          en: "E-I-E-I-O",
          de: "Ija-ija-oh"
        }
      },
      {
        id: "sg3",
        translations: {
          ja: "そこには いぬが いて",
          en: "And on that farm he had a dog",
          de: "Und auf dem Hof, da hat er einen Hund"
        }
      },
      {
        id: "sg4",
        translations: {
          ja: "イーアイ イーアイ オー",
          en: "E-I-E-I-O",
          de: "Ija-ija-oh"
        }
      },
      {
        id: "sg5",
        translations: {
          ja: "ワンワン ここで、ワンワン そこで",
          en: "With a woof-woof here and a woof-woof there",
          de: "Hier wau-wau, da wau-wau"
        }
      },
      {
        id: "sg6",
        translations: {
          ja: "マクドナルドじいさんの のうじょうで",
          en: "Old MacDonald had a farm",
          de: "Onkel Jörg hat einen Bauernhof"
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "ふくすうけい",
        en: "Plurals",
        de: "Plural"
      },
      explanation: {
        ja: "にほんごの めいしは えいごの「-s」のような きまった ふくすうけいが ありません。「いぬ」は「1ぴきの いぬ」にも「たくさんの いぬ」にも つかえます。ひとや どうぶつには「たち」を つけて ふくすうを あらわす ことも あります：こどもたち、いぬたち。",
        en: "Japanese nouns don't have a fixed plural form like English \"-s.\" いぬ (dog) can mean \"one dog\" or \"dogs\" — context or a number+counter makes it clear. For people and animals, たち can be added to explicitly show plurality: こどもたち (children), いぬたち (dogs).",
        de: "Japanische Nomen haben keine feste Pluralform wie das deutsche „-e/-en\". いぬ (Hund) kann „ein Hund\" oder „Hunde\" bedeuten — der Kontext oder eine Zahl mit Zähler macht es klar. Bei Personen und Tieren kann たち angehängt werden, um den Plural explizit zu zeigen: こどもたち (Kinder), いぬたち (Hunde)."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "いぬが います。",
            en: "There is a dog. / There are dogs. (number-neutral)",
            de: "Es gibt einen Hund. / Es gibt Hunde. (zahlneutral)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "いぬが さんびき います。",
            en: "There are three dogs. (number+counter makes it explicit)",
            de: "Es gibt drei Hunde. (Zahl+Zähler macht es eindeutig)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "こどもたちが どうぶつを みています。",
            en: "The children are looking at the animals. (たち — explicit plural, people)",
            de: "Die Kinder schauen sich die Tiere an. (たち — expliziter Plural, Personen)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "いぬたちが ほえています。",
            en: "The dogs are barking. (たち — explicit plural, animals)",
            de: "Die Hunde bellen. (たち — expliziter Plural, Tiere)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "つくえが みっつ あります。",
            en: "There are three desks. (objects use number+counter, not たち)",
            de: "Es gibt drei Tische. (Gegenstände: Zahl+Zähler, nicht たち)"
          }
        },
        {
          id: "g6",
          translations: {
            ja: "せんせいたちは やさしいです。",
            en: "The teachers are kind. (たち on a person-noun)",
            de: "Die Lehrer sind freundlich. (たち bei einem Personen-Nomen)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Pluralbildung",
        en: "Plural Formation",
        ja: "ふくすうけいの つくりかた"
      },
      explanation: {
        de: "Deutsche Pluralformen folgen keiner einzigen Regel wie das englische -s. Häufige Muster sind: -e (der Hund → die Hunde), -en/-n (die Katze → die Katzen), Umlaut ohne Endung oder mit -er (der Vogel → die Vögel), und -s meist bei Lehnwörtern (der Panda → die Pandas). Die Pluralform wird am besten zusammen mit jedem Nomen gelernt.",
        en: "German plurals don't follow one single rule like English -s. Common patterns include: -e (der Hund → die Hunde), -en/-n (die Katze → die Katzen), umlaut with no ending or with -er (der Vogel → die Vögel), and -s mostly for loanwords (der Panda → die Pandas). It's best to learn the plural form together with each noun.",
        ja: "ドイツごの ふくすうけいは、えいごの -s のような ひとつの ルールに したがいません。よく ある パターンは：-e（der Hund → die Hunde）、-en/-n（die Katze → die Katzen）、うむらうと＋ごびなし または -er（der Vogel → die Vögel）、そして がいらいごに おおい -s（der Panda → die Pandas）です。ふくすうけいは、めいしごとに いっしょに おぼえるのが いちばんです。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "ein Hund, zwei Hunde",
            en: "one dog, two dogs (-e plural)",
            ja: "いぬ いっぴき、いぬ にひき（-e の ふくすう）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "eine Katze, zwei Katzen",
            en: "one cat, two cats (-n plural)",
            ja: "ねこ いっぴき、ねこ にひき（-n の ふくすう）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "ein Vogel, zwei Vögel",
            en: "one bird, two birds (umlaut, no ending)",
            ja: "とり いちわ、とり にわ（うむらうと、ごびなし）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "ein Schaf, zwei Schafe",
            en: "one sheep, two sheep (-e plural)",
            ja: "ひつじ いっぴき、ひつじ にひき（-e の ふくすう）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "ein Pferd, zwei Pferde",
            en: "one horse, two horses (-e plural)",
            ja: "うま いっとう、うま にとう（-e の ふくすう）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "ein Panda, zwei Pandas",
            en: "one panda, two pandas (-s plural, loanword)",
            ja: "パンダ いっとう、パンダ にとう（-s の ふくすう、がいらいご）"
          }
        }
      ]
    }
  },
  pronunciation: {
    ja: {
      title: {
        ja: "はつおんの れんしゅう",
        en: "Pronunciation Practice",
        de: "Aussprachetraining"
      },
      groupLabels: {
        youon: {
          ja: "ようおん（ゃゅょ）",
          en: "Contracted sounds (ゃゅょ)",
          de: "Zusammengezogene Laute (ゃゅょ)"
        },
        pitch: {
          ja: "アクセント（ふくしゅう）",
          en: "Pitch accent (reinforced, new pairs)",
          de: "Tonhöhenakzent (vertieft, neue Paare)"
        }
      },
      items: [
        {
          id: "y1",
          category: "youon",
          translations: {
            ja: "きゃ",
            en: "kya (one mora, not \"ki-ya\")",
            de: "kya (eine Mora, nicht „ki-ya\")"
          }
        },
        {
          id: "y2",
          category: "youon",
          translations: {
            ja: "しゃしん",
            en: "photo (しゃ = one mora)",
            de: "Foto (しゃ = eine Mora)"
          }
        },
        {
          id: "y3",
          category: "youon",
          translations: {
            ja: "しゅくだい",
            en: "homework (しゅ = one mora)",
            de: "Hausaufgabe (しゅ = eine Mora)"
          }
        },
        {
          id: "y4",
          category: "youon",
          translations: {
            ja: "びょういん",
            en: "hospital (びょ = one mora)",
            de: "Krankenhaus (びょ = eine Mora)"
          }
        },
        {
          id: "y5",
          category: "youon",
          translations: {
            ja: "ちょきん",
            en: "savings (ちょ = one mora)",
            de: "Ersparnisse (ちょ = eine Mora)"
          }
        },
        {
          id: "y6",
          category: "youon",
          translations: {
            ja: "きょう",
            en: "today (きょ = one mora)",
            de: "heute (きょ = eine Mora)"
          }
        },
        {
          id: "p1",
          category: "pitch",
          translations: {
            ja: "とり",
            en: "bird (LH) — new word, single pattern",
            de: "Vogel (LH) — neues Wort, einzelnes Muster"
          }
        },
        {
          id: "p2",
          category: "pitch",
          translations: {
            ja: "くま",
            en: "bear (LH) — new word, single pattern",
            de: "Bär (LH) — neues Wort, einzelnes Muster"
          }
        },
        {
          id: "p3",
          category: "pitch",
          translations: {
            ja: "なく",
            en: "to cry / animal sound (LH) — new word",
            de: "weinen / Tierlaut (LH) — neues Wort"
          }
        },
        {
          id: "p4",
          category: "pitch",
          translations: {
            ja: "かう",
            en: "to keep a pet (HL) / to buy (LH) — reinforced a third time, contrast now with L5",
            de: "ein Haustier halten (HL) / kaufen (LH) — zum dritten Mal vertieft, Kontrast zu L5"
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
        sh_s_ch: {
          de: "SCH vs. S vs. CH (dreifacher Kontrast)",
          en: "SCH vs. S vs. CH (three-way contrast)",
          ja: "SCH と S と CH（さんしゅの たいひ）"
        },
        ich_ach: {
          de: "Ich-Laut vs. Ach-Laut",
          en: "Ich-laut vs. Ach-laut",
          ja: "Ich-Laut と Ach-Laut"
        }
      },
      items: [
        {
          id: "sch1",
          category: "sh_s_ch",
          translations: {
            de: "Schaf",
            en: "sheep (SCH → \"sh\")",
            ja: "ひつじ（SCH → 「sh」）"
          }
        },
        {
          id: "sch2",
          category: "sh_s_ch",
          translations: {
            de: "Schwein",
            en: "pig (SCH → \"sh\")",
            ja: "ぶた（SCH → 「sh」）"
          }
        },
        {
          id: "s1",
          category: "sh_s_ch",
          translations: {
            de: "süß",
            en: "cute, sweet (plain S)",
            ja: "かわいい（ふつうの S）"
          }
        },
        {
          id: "s2",
          category: "sh_s_ch",
          translations: {
            de: "sanft",
            en: "gentle (plain S)",
            ja: "おだやかな（ふつうの S）"
          }
        },
        {
          id: "ich1",
          category: "ich_ach",
          translations: {
            de: "Kaninchen",
            en: "rabbit (Ich-laut — CH after i/n)",
            ja: "うさぎ（Ich-Laut — i/n の あとの CH）"
          }
        },
        {
          id: "ach1",
          category: "ich_ach",
          translations: {
            de: "Bauch",
            en: "belly (Ach-laut — CH after a/o/u)",
            ja: "おなか（Ach-Laut — a/o/u の あとの CH）"
          }
        }
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
          youon: { ja: "拗音（ようおん）", en: "Youon (contracted sounds)", de: "Youon (zusammengezogene Laute)", zh: "拗音" },
          hiyouon: { ja: "非拗音（ひようおん）", en: "Non-youon (plain sounds)", de: "Nicht-Youon (einfache Laute)", zh: "非拗音" },
          pitch_hl: { ja: "HL（高→低）", en: "HL (high→low)", de: "HL (hoch→tief)", zh: "高低（HL）" },
          pitch_lh: { ja: "LH（低→高）", en: "LH (low→high)", de: "LH (tief→hoch)", zh: "低高（LH）" }
        },
        pairedColumns: [["pitch_hl", "pitch_lh"]],
        items: [
          { id: "yo1", category: "youon", translations: { ja: "きゃく", en: "customer, guest", de: "Kunde, Gast", zh: "客；客人" } },
          { id: "yo2", category: "youon", translations: { ja: "きゅう", en: "nine", de: "neun", zh: "九；休" } },
          { id: "yo3", category: "youon", translations: { ja: "きょう", en: "today", de: "heute", zh: "今天" } },
          { id: "yo4", category: "youon", translations: { ja: "しゃしん", en: "photo", de: "Foto", zh: "照片" } },
          { id: "yo5", category: "youon", translations: { ja: "しゅくだい", en: "homework", de: "Hausaufgabe", zh: "作业" } },
          { id: "yo6", category: "youon", translations: { ja: "しょくどう", en: "cafeteria", de: "Kantine, Speisesaal", zh: "食堂" } },
          { id: "yo7", category: "youon", translations: { ja: "ちゃわん", en: "rice bowl", de: "Reisschale, Teeschale", zh: "茶碗；饭碗" } },
          { id: "yo8", category: "youon", translations: { ja: "ちゅうごく", en: "China", de: "China", zh: "中国" } },
          { id: "yo9", category: "youon", translations: { ja: "にゅうがく", en: "school enrollment", de: "Schuleintritt, Einschulung", zh: "入学" } },
          { id: "yo10", category: "youon", translations: { ja: "ひゃく", en: "hundred", de: "hundert", zh: "一百" } },
          { id: "yo11", category: "youon", translations: { ja: "びょういん", en: "hospital", de: "Krankenhaus", zh: "医院" } },
          { id: "yo12", category: "youon", translations: { ja: "りょこう", en: "travel", de: "Reise", zh: "旅行" } },
          { id: "yo13", category: "youon", translations: { ja: "りゅうがく", en: "studying abroad", de: "Auslandsstudium", zh: "留学" } },
          { id: "yo14", category: "youon", translations: { ja: "じゅぎょう", en: "class, lesson", de: "Unterricht", zh: "课程；上课" } },

          { id: "hy1", category: "hiyouon", translations: { ja: "かく", en: "to write, to draw", de: "schreiben, zeichnen", zh: "写；画" } },
          { id: "hy2", category: "hiyouon", translations: { ja: "きのう", en: "yesterday", de: "gestern", zh: "昨天" } },
          { id: "hy3", category: "hiyouon", translations: { ja: "すし", en: "sushi", de: "Sushi", zh: "寿司" } },
          { id: "hy4", category: "hiyouon", translations: { ja: "しごと", en: "work, job", de: "Arbeit", zh: "工作" } },
          { id: "hy5", category: "hiyouon", translations: { ja: "しょく", en: "food, meal", de: "Essen, Mahlzeit", zh: "食；饮食" } },
          { id: "hy6", category: "hiyouon", translations: { ja: "たび", en: "trip, journey", de: "Reise", zh: "旅行；旅途" } },
          { id: "hy7", category: "hiyouon", translations: { ja: "ちゃ", en: "tea", de: "Tee", zh: "茶" } },
          { id: "hy8", category: "hiyouon", translations: { ja: "ちこく", en: "being late", de: "Verspätung", zh: "迟到" } },
          { id: "hy9", category: "hiyouon", translations: { ja: "にほん", en: "Japan", de: "Japan", zh: "日本" } },
          { id: "hy10", category: "hiyouon", translations: { ja: "はく", en: "to put on (shoes/pants), to vomit", de: "anziehen (Schuhe/Hose), erbrechen", zh: "穿；吐" } },
          { id: "hy11", category: "hiyouon", translations: { ja: "びょう", en: "second (time); illness", de: "Sekunde; Krankheit", zh: "秒；病" } },
          { id: "hy12", category: "hiyouon", translations: { ja: "りこう", en: "clever, smart", de: "klug", zh: "聪明；乖巧" } },
          { id: "hy13", category: "hiyouon", translations: { ja: "りか", en: "science (school subject)", de: "Naturwissenschaften (Schulfach)", zh: "理科" } },
          { id: "hy14", category: "hiyouon", translations: { ja: "じゆう", en: "freedom", de: "Freiheit", zh: "自由" } },

          { id: "hl1", category: "pitch_hl", translations: { ja: "はし（箸）", en: "chopsticks", de: "Essstäbchen", zh: "筷子" } },
          { id: "hl2", category: "pitch_hl", translations: { ja: "あめ（雨）", en: "rain", de: "Regen", zh: "雨" } },
          { id: "hl3", category: "pitch_hl", translations: { ja: "かき（牡蠣）", en: "oyster", de: "Auster", zh: "牡蛎" } },
          { id: "hl4", category: "pitch_hl", translations: { ja: "かみ（紙）", en: "paper", de: "Papier", zh: "纸" } },
          { id: "hl5", category: "pitch_hl", translations: { ja: "かぜ（風）", en: "wind", de: "Wind", zh: "风" } },
          { id: "hl6", category: "pitch_hl", translations: { ja: "かわ（川）", en: "river", de: "Fluss", zh: "河；河流" } },
          { id: "hl7", category: "pitch_hl", translations: { ja: "いま（今）", en: "now", de: "jetzt", zh: "现在" } },
          { id: "hl8", category: "pitch_hl", translations: { ja: "ねこ", en: "cat", de: "Katze", zh: "猫" } },
          { id: "hl9", category: "pitch_hl", translations: { ja: "いぬ", en: "dog", de: "Hund", zh: "狗" } },
          { id: "hl10", category: "pitch_hl", translations: { ja: "とり", en: "bird", de: "Vogel", zh: "鸟" } },
          { id: "hl11", category: "pitch_hl", translations: { ja: "やま", en: "mountain", de: "Berg", zh: "山" } },
          { id: "hl12", category: "pitch_hl", translations: { ja: "そら", en: "sky", de: "Himmel", zh: "天空" } },
          { id: "hl13", category: "pitch_hl", translations: { ja: "はな（花）", en: "flower", de: "Blume", zh: "花" } },
          { id: "hl14", category: "pitch_hl", translations: { ja: "ふゆ", en: "winter", de: "Winter", zh: "冬天" } },

          { id: "lh1", category: "pitch_lh", translations: { ja: "はし（橋）", en: "bridge", de: "Brücke", zh: "桥" } },
          { id: "lh2", category: "pitch_lh", translations: { ja: "あめ（飴）", en: "candy", de: "Süßigkeit", zh: "糖；糖果" } },
          { id: "lh3", category: "pitch_lh", translations: { ja: "かき（柿）", en: "persimmon", de: "Kaki (Frucht)", zh: "柿子" } },
          { id: "lh4", category: "pitch_lh", translations: { ja: "かみ（髪）", en: "hair", de: "Haar", zh: "头发" } },
          { id: "lh5", category: "pitch_lh", translations: { ja: "かぜ（風邪）", en: "cold (illness)", de: "Erkältung", zh: "感冒" } },
          { id: "lh6", category: "pitch_lh", translations: { ja: "かわ（皮）", en: "skin, peel", de: "Haut, Schale", zh: "皮；外皮" } },
          { id: "lh7", category: "pitch_lh", translations: { ja: "いま（居間）", en: "living room", de: "Wohnzimmer", zh: "客厅" } },
          { id: "lh8", category: "pitch_lh", translations: { ja: "うみ", en: "sea", de: "Meer", zh: "海" } },
          { id: "lh9", category: "pitch_lh", translations: { ja: "さかな", en: "fish", de: "Fisch", zh: "鱼" } },
          { id: "lh10", category: "pitch_lh", translations: { ja: "ともだち", en: "friend", de: "Freund/in", zh: "朋友" } },
          { id: "lh11", category: "pitch_lh", translations: { ja: "さくら", en: "cherry blossom", de: "Kirschblüte", zh: "樱花" } },
          { id: "lh12", category: "pitch_lh", translations: { ja: "なまえ", en: "name", de: "Name", zh: "名字" } },
          { id: "lh13", category: "pitch_lh", translations: { ja: "おとこ", en: "man", de: "Mann", zh: "男人" } },
          { id: "lh14", category: "pitch_lh", translations: { ja: "こころ", en: "heart, mind", de: "Herz", zh: "心；内心" } }
        ]
      }
    ]
  }
};
