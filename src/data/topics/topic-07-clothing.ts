import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese7.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicClothing: TopicLesson = {
  id: "topic-07-clothing",
  lessonNumber: 7,
  topicName: {
    ja: "ふく",
    en: "Clothing",
    de: "Kleidung"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "シャツ",
        en: "shirt",
        de: "Hemd"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "ズボン",
        en: "pants",
        de: "Hose"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "スカート",
        en: "skirt",
        de: "Rock"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "ドレス",
        en: "dress",
        de: "Kleid"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "くつ",
        en: "shoes",
        de: "Schuhe"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "くつした",
        en: "socks",
        de: "Socken"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "ぼうし",
        en: "hat",
        de: "Hut, Mütze"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "コート",
        en: "coat",
        de: "Mantel"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "セーター",
        en: "sweater",
        de: "Pullover"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "てぶくろ",
        en: "gloves",
        de: "Handschuhe"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "ネクタイ",
        en: "necktie",
        de: "Krawatte"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "かさ",
        en: "umbrella",
        de: "Regenschirm"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "サイズ",
        en: "size",
        de: "Größe"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "しちゃくしつ",
        en: "fitting room",
        de: "Umkleidekabine"
      }
    },
    {
      id: "v15",
      category: "verb",
      translations: {
        ja: "きる",
        en: "to wear (upper body)",
        de: "tragen (Oberkörper)"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "はく",
        en: "to wear (lower body, shoes)",
        de: "tragen (Beine, Schuhe)"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "ぬぐ",
        en: "to take off (clothes)",
        de: "ausziehen"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "しちゃくする",
        en: "to try on",
        de: "anprobieren"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "かえる",
        en: "to exchange, return",
        de: "umtauschen"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "つける",
        en: "to put on (accessories)",
        de: "anlegen (Accessoires)"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "えらぶ",
        en: "to choose",
        de: "auswählen"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "にあう",
        en: "to suit, look good on",
        de: "gut stehen"
      }
    },
    {
      id: "v23",
      category: "adjective",
      translations: {
        ja: "おおきい",
        en: "big",
        de: "groß"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "ちいさい",
        en: "small",
        de: "klein"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "きつい",
        en: "tight",
        de: "eng"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "ゆるい",
        en: "loose",
        de: "locker"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "はで",
        en: "flashy, showy",
        de: "auffällig"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "じみ",
        en: "plain, subdued",
        de: "schlicht"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "おしゃれ",
        en: "stylish",
        de: "modisch"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "あたたかい",
        en: "warm",
        de: "warm"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：ともだちと ふくを かう",
      en: "Dialogue A: Shopping for Clothes",
      de: "Dialog A: Kleidung kaufen"
    },
    lines: [
      {
        id: "d1",
        speaker: "あい",
        translations: {
          ja: "この シャツ、かわいいね。",
          en: "This shirt is cute.",
          de: "Dieses Hemd ist süß."
        }
      },
      {
        id: "d2",
        speaker: "けん",
        translations: {
          ja: "うん、いろも いいね。",
          en: "Yeah, the color's nice too.",
          de: "Ja, die Farbe ist auch schön."
        }
      },
      {
        id: "d3",
        speaker: "あい",
        translations: {
          ja: "しちゃくしても いいですか？",
          en: "May I try it on?",
          de: "Darf ich es anprobieren?"
        }
      },
      {
        id: "d4",
        speaker: "てんいん",
        translations: {
          ja: "はい、どうぞ。しちゃくしつは あちらです。",
          en: "Yes, please. The fitting room is over there.",
          de: "Ja, bitte. Die Umkleidekabine ist dort drüben."
        }
      },
      {
        id: "d5",
        speaker: "あい",
        translations: {
          ja: "どうかな？すこし きついかも。",
          en: "How is it? Maybe a bit tight.",
          de: "Wie sieht es aus? Vielleicht etwas eng."
        }
      },
      {
        id: "d6",
        speaker: "けん",
        translations: {
          ja: "うん、もう すこし おおきい サイズは ありますか？",
          en: "Yeah, is there a bigger size?",
          de: "Ja, gibt es eine größere Größe?"
        }
      },
      {
        id: "d7",
        speaker: "てんいん",
        translations: {
          ja: "はい、こちらは いかがですか？",
          en: "Yes, how about this one?",
          de: "Ja, wie wäre es mit diesem hier?"
        }
      },
      {
        id: "d8",
        speaker: "あい",
        translations: {
          ja: "あ、これは ちょうど いいです！",
          en: "Oh, this is just right!",
          de: "Oh, das passt genau!"
        }
      },
      {
        id: "d9",
        speaker: "けん",
        translations: {
          ja: "にあってるよ！",
          en: "It suits you!",
          de: "Es steht dir!"
        }
      },
      {
        id: "d10",
        speaker: "あい",
        translations: {
          ja: "ほんとう？ありがとう。",
          en: "Really? Thank you.",
          de: "Wirklich? Danke."
        }
      },
      {
        id: "d11",
        speaker: "あい",
        translations: {
          ja: "これを ください。",
          en: "I'll take this.",
          de: "Ich nehme das hier."
        }
      },
      {
        id: "d12",
        speaker: "てんいん",
        translations: {
          ja: "かしこまりました。げんきんですか、カードですか？",
          en: "Understood. Cash or card?",
          de: "Verstanden. Bar oder Karte?"
        }
      },
      {
        id: "d13",
        speaker: "あい",
        translations: {
          ja: "カードで おねがいします。",
          en: "Card, please.",
          de: "Mit Karte, bitte."
        }
      },
      {
        id: "d14",
        speaker: "けん",
        translations: {
          ja: "たのしい かいものだったね。",
          en: "That was fun shopping.",
          de: "Das war ein schönes Einkaufen."
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：ふくそうを えらぶ",
      en: "Dialogue B: Choosing an Outfit",
      de: "Dialog B: Ein Outfit wählen"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "こんばんの パーティーに なにを きようかな。",
          en: "What should I wear to tonight's party?",
          de: "Was soll ich zur heutigen Party anziehen?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "あの ドレスは どう？",
          en: "How about that dress?",
          de: "Wie wäre es mit dem Kleid dort?"
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "うーん、ちょっと はでかな。",
          en: "Hmm, maybe a bit flashy.",
          de: "Hmm, vielleicht etwas zu auffällig."
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "じゃあ、この セーターは？",
          en: "Then how about this sweater?",
          de: "Und wie wäre es mit diesem Pullover?"
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "それは カジュアルすぎるかも。",
          en: "That might be too casual.",
          de: "Der könnte zu leger sein."
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "パーティーは どんな パーティー？",
          en: "What kind of party is it?",
          de: "Was für eine Party ist es?"
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "しごとの パーティーだから、ちょっと フォーマルが いい。",
          en: "It's a work party, so something a bit formal is good.",
          de: "Es ist eine Arbeitsparty, also wäre etwas Formelleres gut."
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "じみな いろの ドレスは どう？",
          en: "How about a dress in a subdued color?",
          de: "Wie wäre es mit einem Kleid in gedeckter Farbe?"
        }
      },
      {
        id: "e9",
        speaker: "みか",
        translations: {
          ja: "いいね！あの くろい ドレスに する。",
          en: "Good idea! I'll go with that black dress.",
          de: "Gute Idee! Ich nehme das schwarze Kleid."
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "くつは どうする？",
          en: "What about shoes?",
          de: "Was ist mit Schuhen?"
        }
      },
      {
        id: "e11",
        speaker: "みか",
        translations: {
          ja: "この くろい くつが あうと おもう。",
          en: "I think these black shoes will go well.",
          de: "Ich glaube, diese schwarzen Schuhe passen gut."
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "さむいから コートも もっていって。",
          en: "It's cold, so bring a coat too.",
          de: "Es ist kalt, also nimm auch einen Mantel mit."
        }
      },
      {
        id: "e13",
        speaker: "みか",
        translations: {
          ja: "そうだね。あたたかい コートを えらぶよ。",
          en: "Good point. I'll choose a warm coat.",
          de: "Stimmt. Ich wähle einen warmen Mantel."
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "きっと すてきに なるよ！",
          en: "You'll definitely look great!",
          de: "Du wirst bestimmt toll aussehen!"
        }
      }
    ]
  },
  song: {
    title: {
      ja: "ちいさな くも",
      en: "Itsy Bitsy Spider",
      de: "Die kleine Spinne"
    },
    lines: [
      {
        id: "sg1",
        translations: {
          ja: "ちいさな くもが といを のぼる",
          en: "The itsy bitsy spider climbed up the water spout",
          de: "Die kleine Spinne klettert die Regenrinne hoch"
        }
      },
      {
        id: "sg2",
        translations: {
          ja: "あめが ふって くもは おちた",
          en: "Down came the rain and washed the spider out",
          de: "Der Regen kam und spülte die Spinne herunter"
        }
      },
      {
        id: "sg3",
        translations: {
          ja: "おひさま でて みずが かわいた",
          en: "Out came the sun and dried up all the rain",
          de: "Die Sonne kam heraus und trocknete den Regen"
        }
      },
      {
        id: "sg4",
        translations: {
          ja: "ちいさな くもが また のぼる",
          en: "So the itsy bitsy spider climbed up again",
          de: "Also klettert die kleine Spinne wieder hoch"
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "こそあど",
        en: "Demonstratives",
        de: "Demonstrativpronomen"
      },
      explanation: {
        ja: "「これ・それ・あれ・どれ」は もの、「この・その・あの・どの」は めいしの まえで つかいます。こ＝はなしてに ちかい、そ＝あいてに ちかい、あ＝りょうほうから とおい、ど＝しつもん です。",
        en: "これ/それ/あれ/どれ stand alone (\"this one/that one/that one over there/which one\"), while この/その/あの/どの come before a noun (\"this X/that X\"). こ- = near the speaker, そ- = near the listener, あ- = far from both, ど- = the question form.",
        de: "これ/それ/あれ/どれ stehen allein („dieses/jenes/jenes dort/welches\"), während この/その/あの/どの vor einem Nomen stehen („dieses X/jenes X\"). こ- = nah beim Sprecher, そ- = nah beim Zuhörer, あ- = weit von beiden entfernt, ど- = die Frageform."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "これは いくらですか？",
            en: "How much is this? (near the speaker)",
            de: "Wie viel kostet das hier? (nah beim Sprecher)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "それを みせてください。",
            en: "Please show me that. (near the listener)",
            de: "Bitte zeigen Sie mir das. (nah beim Zuhörer)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "あのシャツは すてきです。",
            en: "That shirt over there is nice. (far from both)",
            de: "Das Hemd dort drüben ist schön. (weit von beiden entfernt)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "どのくつが すきですか？",
            en: "Which shoes do you like? (question form)",
            de: "Welche Schuhe magst du? (Frageform)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "この ぼうしは わたしのです。",
            en: "This hat is mine.",
            de: "Dieser Hut ist meiner."
          }
        },
        {
          id: "g6",
          translations: {
            ja: "そのセーターは たかいですか？",
            en: "Is that sweater expensive?",
            de: "Ist dieser Pullover teuer?"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Demonstrativpronomen: dieser / das ... da",
        en: "Demonstratives: this / that",
        ja: "しじ だいめいし：これ／それ"
      },
      explanation: {
        de: "dieser/diese/dieses (\"this\") stimmt im Geschlecht mit dem Nomen überein, genau wie der/die/das: dieser Mantel (m), diese Hose (f), dieses Hemd (n). Für \"that\" fügt man im Deutschen meist einfach da oder dort nach dem Nomen hinzu, statt ein eigenes Wort zu benutzen: die Schuhe da (those shoes).",
        en: "dieser/diese/dieses (\"this\") matches the noun's gender, just like der/die/das: dieser Mantel (m), diese Hose (f), dieses Hemd (n). For \"that\", German usually just adds da or dort after the noun instead of using a separate word: die Schuhe da (those shoes).",
        ja: "dieser/diese/dieses（これ）は、der/die/das と おなじように めいしの せいに あわせます：dieser Mantel（だんせい）、diese Hose（じょせい）、dieses Hemd（ちゅうせい）。「それ」を あらわす ときは、べつの ことばを つかわず、めいしの あとに da や dort を つけるのが ふつうです：die Schuhe da（あの くつ）。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Dieses Hemd ist schön.",
            en: "This shirt is nice. (dieses — neuter)",
            ja: "この シャツは すてきです。（dieses — ちゅうせい）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Diese Hose ist zu eng.",
            en: "These pants are too tight. (diese — feminine)",
            ja: "この ズボンは きつすぎます。（diese — じょせい）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Dieser Mantel ist warm.",
            en: "This coat is warm. (dieser — masculine)",
            ja: "この コートは あたたかいです。（dieser — だんせい）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Das Kleid dort ist schön.",
            en: "That dress (over there) is pretty. (das ... dort)",
            ja: "あの ドレスは すてきです。（das ... dort）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Die Schuhe da sind neu.",
            en: "Those shoes (there) are new. (die ... da, plural)",
            ja: "その くつは あたらしいです。（die ... da、ふくすう）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Ist das dein Hut?",
            en: "Is that your hat? (das as a demonstrative pronoun)",
            ja: "それは きみの ぼうし ですか？（しじ だいめいしの das）"
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
        pitch: {
          ja: "アクセント（ふくしゅう）",
          en: "Pitch accent (reinforced, new pairs)",
          de: "Tonhöhenakzent (vertieft, neue Paare)"
        },
        sokuon: {
          ja: "「っ」（ふくしゅう）",
          en: "Small っ (reinforced, new pairs)",
          de: "Kleines っ (vertieft, neue Paare)"
        }
      },
      items: [
        {
          id: "p1",
          category: "pitch",
          translations: {
            ja: "くも",
            en: "cloud (HL) — reinforced from L2, new sentence context",
            de: "Wolke (HL) — vertieft aus L2, neuer Kontext"
          }
        },
        {
          id: "p2",
          category: "pitch",
          translations: {
            ja: "にあう",
            en: "to suit — new word, single pitch pattern to notice",
            de: "gut stehen — neues Wort, einzelnes Tonmuster"
          }
        },
        {
          id: "p3",
          category: "pitch",
          translations: {
            ja: "かう",
            en: "to buy (LH) — reinforced, clothing context now",
            de: "kaufen (LH) — vertieft, jetzt im Kontext Kleidung"
          }
        },
        {
          id: "p4",
          category: "pitch",
          translations: {
            ja: "きる",
            en: "to wear (HL) / to cut (LH) — reinforced a third time",
            de: "tragen (HL) / schneiden (LH) — zum dritten Mal vertieft"
          }
        },
        {
          id: "s1",
          category: "sokuon",
          translations: {
            ja: "せかい",
            en: "world (no っ)",
            de: "Welt (kein っ)"
          }
        },
        {
          id: "s2",
          category: "sokuon",
          translations: {
            ja: "せっかい",
            en: "unsolicited advice (with っ)",
            de: "ungebetener Rat (mit っ)"
          }
        },
        {
          id: "s3",
          category: "sokuon",
          translations: {
            ja: "がか",
            en: "painter (no っ)",
            de: "Maler(in) (kein っ)"
          }
        },
        {
          id: "s4",
          category: "sokuon",
          translations: {
            ja: "がっか",
            en: "disappointment (with っ)",
            de: "Enttäuschung (mit っ)"
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
        l_r: {
          de: "L vs. R",
          en: "L vs. R",
          ja: "L と R"
        },
        uvular_r: {
          de: "Das deutsche R (Zäpfchen-R, nicht wie im Englischen)",
          en: "The German R (uvular, not like English R)",
          ja: "ドイツごの R（のどおくの R、えいごとは ちがう）"
        }
      },
      items: [
        {
          id: "l1",
          category: "l_r",
          translations: {
            de: "locker",
            en: "loose-fitting (L)",
            ja: "ゆったりした（L）"
          }
        },
        {
          id: "r1",
          category: "l_r",
          translations: {
            de: "Rock",
            en: "skirt (R, contrast with L)",
            ja: "スカート（R、L との たいひ）"
          }
        },
        {
          id: "ur1",
          category: "uvular_r",
          translations: {
            de: "Regenschirm",
            en: "umbrella (uvular R)",
            ja: "かさ（のどおくの R）"
          }
        },
        {
          id: "ur2",
          category: "uvular_r",
          translations: {
            de: "Krawatte",
            en: "necktie (uvular R)",
            ja: "ネクタイ（のどおくの R）"
          }
        },
        {
          id: "ur3",
          category: "uvular_r",
          translations: {
            de: "tragen",
            en: "to wear (uvular R)",
            ja: "きる（のどおくの R）"
          }
        }
      ]
    }
  }
};
