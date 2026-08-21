import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese12.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicDirections: TopicLesson = {
  id: "topic-12-directions",
  lessonNumber: 12,
  topicName: {
    ja: "ほうこう",
    en: "Directions",
    de: "Wegbeschreibung"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "みち",
        en: "road, way",
        de: "Straße, Weg"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "かど",
        en: "corner",
        de: "Ecke"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "しんごう",
        en: "traffic light",
        de: "Ampel"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "こうさてん",
        en: "intersection",
        de: "Kreuzung"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "ちず",
        en: "map",
        de: "Karte"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "めじるし",
        en: "landmark",
        de: "Orientierungspunkt"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "ほうこう",
        en: "direction",
        de: "Richtung"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "きた",
        en: "north",
        de: "Norden"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "みなみ",
        en: "south",
        de: "Süden"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "ひがし",
        en: "east",
        de: "Osten"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "にし",
        en: "west",
        de: "Westen"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "まえ",
        en: "front",
        de: "vorne"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "うしろ",
        en: "back",
        de: "hinten"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "となり",
        en: "next to",
        de: "daneben"
      }
    },
    {
      id: "v15",
      category: "verb",
      translations: {
        ja: "まがる",
        en: "to turn",
        de: "abbiegen"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "わたる",
        en: "to cross",
        de: "überqueren"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "すすむ",
        en: "to go straight, proceed",
        de: "vorwärtsgehen"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "もどる",
        en: "to go back",
        de: "zurückgehen"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "つづく",
        en: "to continue",
        de: "sich fortsetzen"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "みつかる",
        en: "to be found",
        de: "gefunden werden"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "まよう",
        en: "to get lost",
        de: "sich verirren"
      }
    },
    {
      id: "v22",
      category: "adjective",
      translations: {
        ja: "ちかい",
        en: "close, near",
        de: "nah"
      }
    },
    {
      id: "v23",
      category: "adjective",
      translations: {
        ja: "とおい",
        en: "far",
        de: "weit"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "まっすぐ",
        en: "straight",
        de: "gerade"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "べんり",
        en: "convenient",
        de: "praktisch"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "わかりやすい",
        en: "easy to understand",
        de: "leicht verständlich"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "ふくざつ",
        en: "complicated",
        de: "kompliziert"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "しずか",
        en: "quiet",
        de: "ruhig"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "にぎやか",
        en: "lively, bustling",
        de: "belebt"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "あんぜん",
        en: "safe",
        de: "sicher"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：みちに まよった かんこうきゃく",
      en: "Dialogue A: A Lost Tourist",
      de: "Dialog A: Ein verirrter Tourist"
    },
    lines: [
      {
        id: "d1",
        speaker: "かんこうきゃく",
        translations: {
          ja: "すみません、みちに まよってしまいました。",
          en: "Excuse me, I've gotten lost.",
          de: "Entschuldigung, ich habe mich verirrt."
        }
      },
      {
        id: "d2",
        speaker: "じゅうみん",
        translations: {
          ja: "だいじょうぶですか？どこへ いきたいですか？",
          en: "Are you okay? Where do you want to go?",
          de: "Geht es Ihnen gut? Wohin möchten Sie?"
        }
      },
      {
        id: "d3",
        speaker: "かんこうきゃく",
        translations: {
          ja: "びじゅつかんを さがしています。",
          en: "I'm looking for the museum.",
          de: "Ich suche das Museum."
        }
      },
      {
        id: "d4",
        speaker: "じゅうみん",
        translations: {
          ja: "ああ、びじゅつかんですね。こうえんの となりに あります。",
          en: "Ah, the museum. It's next to the park.",
          de: "Ah, das Museum. Es ist neben dem Park."
        }
      },
      {
        id: "d5",
        speaker: "かんこうきゃく",
        translations: {
          ja: "こうえんは どこですか？",
          en: "Where's the park?",
          de: "Wo ist der Park?"
        }
      },
      {
        id: "d6",
        speaker: "じゅうみん",
        translations: {
          ja: "このみちを きたへ すすんでください。",
          en: "Please go north along this road.",
          de: "Gehen Sie diese Straße nach Norden."
        }
      },
      {
        id: "d7",
        speaker: "かんこうきゃく",
        translations: {
          ja: "こうさてんで まがりますか？",
          en: "Do I turn at the intersection?",
          de: "Muss ich an der Kreuzung abbiegen?"
        }
      },
      {
        id: "d8",
        speaker: "じゅうみん",
        translations: {
          ja: "はい、こうさてんで みぎに まがってください。",
          en: "Yes, turn right at the intersection.",
          de: "Ja, biegen Sie an der Kreuzung rechts ab."
        }
      },
      {
        id: "d9",
        speaker: "かんこうきゃく",
        translations: {
          ja: "それから まっすぐですか？",
          en: "Then straight ahead?",
          de: "Und dann geradeaus?"
        }
      },
      {
        id: "d10",
        speaker: "じゅうみん",
        translations: {
          ja: "はい、こうえんが みえるまで まっすぐです。",
          en: "Yes, straight until you see the park.",
          de: "Ja, geradeaus, bis Sie den Park sehen."
        }
      },
      {
        id: "d11",
        speaker: "かんこうきゃく",
        translations: {
          ja: "びじゅつかんは わかりやすい ばしょに ありますか？",
          en: "Is the museum in an easy-to-find place?",
          de: "Ist das Museum leicht zu finden?"
        }
      },
      {
        id: "d12",
        speaker: "じゅうみん",
        translations: {
          ja: "はい、おおきい たてものなので すぐ みつかりますよ。",
          en: "Yes, since it's a big building, you'll find it right away.",
          de: "Ja, da es ein großes Gebäude ist, finden Sie es sofort."
        }
      },
      {
        id: "d13",
        speaker: "かんこうきゃく",
        translations: {
          ja: "たすかりました。ありがとうございます。",
          en: "That's a big help. Thank you.",
          de: "Das hilft sehr. Vielen Dank."
        }
      },
      {
        id: "d14",
        speaker: "じゅうみん",
        translations: {
          ja: "どういたしまして。きを つけて！",
          en: "You're welcome. Take care!",
          de: "Gern geschehen. Passen Sie auf sich auf!"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：じむしょの ばしょ",
      en: "Dialogue B: Where the Office Is",
      de: "Dialog B: Wo das Büro ist"
    },
    lines: [
      {
        id: "e1",
        speaker: "けん",
        translations: {
          ja: "あなたの じむしょは どこに ありますか？",
          en: "Where is your office?",
          de: "Wo ist dein Büro?"
        }
      },
      {
        id: "e2",
        speaker: "みか",
        translations: {
          ja: "えきの まえの ビルの なかに あります。",
          en: "It's inside the building in front of the station.",
          de: "Es ist im Gebäude vor dem Bahnhof."
        }
      },
      {
        id: "e3",
        speaker: "けん",
        translations: {
          ja: "なんかいに ありますか？",
          en: "What floor is it on?",
          de: "In welchem Stockwerk ist es?"
        }
      },
      {
        id: "e4",
        speaker: "みか",
        translations: {
          ja: "ごかいです。エレベーターの となりです。",
          en: "The fifth floor. Next to the elevator.",
          de: "Fünfter Stock. Neben dem Fahrstuhl."
        }
      },
      {
        id: "e5",
        speaker: "けん",
        translations: {
          ja: "えきから ちかいですか？",
          en: "Is it close from the station?",
          de: "Ist es nah vom Bahnhof?"
        }
      },
      {
        id: "e6",
        speaker: "みか",
        translations: {
          ja: "はい、あるいて さんぷんぐらいです。",
          en: "Yes, about three minutes on foot.",
          de: "Ja, etwa drei Minuten zu Fuß."
        }
      },
      {
        id: "e7",
        speaker: "けん",
        translations: {
          ja: "べんりな ばしょですね。",
          en: "That's a convenient location.",
          de: "Das ist eine praktische Lage."
        }
      },
      {
        id: "e8",
        speaker: "みか",
        translations: {
          ja: "はい、でも あたりは すこし にぎやかです。",
          en: "Yes, but the area is a bit lively.",
          de: "Ja, aber die Gegend ist etwas belebt."
        }
      },
      {
        id: "e9",
        speaker: "けん",
        translations: {
          ja: "ちかくに レストランは ありますか？",
          en: "Are there restaurants nearby?",
          de: "Gibt es Restaurants in der Nähe?"
        }
      },
      {
        id: "e10",
        speaker: "みか",
        translations: {
          ja: "はい、ビルの したに いくつか あります。",
          en: "Yes, there are a few below the building.",
          de: "Ja, unter dem Gebäude gibt es einige."
        }
      },
      {
        id: "e11",
        speaker: "けん",
        translations: {
          ja: "ちゅうしゃじょうは ありますか？",
          en: "Is there a parking lot?",
          de: "Gibt es einen Parkplatz?"
        }
      },
      {
        id: "e12",
        speaker: "みか",
        translations: {
          ja: "はい、ビルの うしろに あります。",
          en: "Yes, it's behind the building.",
          de: "Ja, er ist hinter dem Gebäude."
        }
      },
      {
        id: "e13",
        speaker: "けん",
        translations: {
          ja: "こんど あそびに いっても いい？",
          en: "Can I come visit sometime?",
          de: "Darf ich dich mal besuchen kommen?"
        }
      },
      {
        id: "e14",
        speaker: "みか",
        translations: {
          ja: "もちろん！いつでも きてね。",
          en: "Of course! Come anytime.",
          de: "Natürlich! Komm jederzeit."
        }
      }
    ]
  },
  song: {
    title: {
      ja: "ロンドンばし",
      en: "London Bridge is Falling Down",
      de: "Die London Bridge fällt herunter"
    },
    lines: [
      {
        id: "sg1",
        translations: {
          ja: "ロンドンばしが おちる",
          en: "London Bridge is falling down",
          de: "Die London Bridge fällt herunter"
        }
      },
      {
        id: "sg2",
        translations: {
          ja: "おちる おちる",
          en: "Falling down, falling down",
          de: "fällt herunter, fällt herunter"
        }
      },
      {
        id: "sg3",
        translations: {
          ja: "ロンドンばしが おちる",
          en: "London Bridge is falling down",
          de: "Die London Bridge fällt herunter"
        }
      },
      {
        id: "sg4",
        translations: {
          ja: "マイ フェア レディー",
          en: "My fair lady",
          de: "meine schöne Dame"
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "ばしょの ひょうげん",
        en: "Expressing Location",
        de: "Ortsangaben"
      },
      explanation: {
        ja: "にほんごには えいごの「in/on/under」のような まえおきしが ありません。かわりに「めいし＋の＋ばしょの めいし＋に」を つかいます。たとえば「つくえの うえに」（つくえ＋の＋うえ＋に）で「つくえの うえで」を あらわします。",
        en: "Japanese doesn't have prepositions like English \"in/on/under.\" Instead, NOUN + の + LOCATION NOUN + に is used. For example, つくえの うえに (desk + の + top + に) expresses \"on the desk.\"",
        de: "Im Japanischen gibt es keine Präpositionen wie im Deutschen „in/auf/unter\". Stattdessen wird NOMEN + の + ORTS-NOMEN + に benutzt. Zum Beispiel drückt つくえの うえに (Tisch + の + oben + に) „auf dem Tisch\" aus."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "ぎんこうは えきの まえに あります。",
            en: "The bank is in front of the station.",
            de: "Die Bank ist vor dem Bahnhof."
          }
        },
        {
          id: "g2",
          translations: {
            ja: "コンビニは ホテルの となりに あります。",
            en: "The convenience store is next to the hotel.",
            de: "Der Convenience-Store ist neben dem Hotel."
          }
        },
        {
          id: "g3",
          translations: {
            ja: "こうえんは がっこうの うしろに あります。",
            en: "The park is behind the school.",
            de: "Der Park ist hinter der Schule."
          }
        },
        {
          id: "g4",
          translations: {
            ja: "ねこは いすの したに います。",
            en: "The cat is under the chair.",
            de: "Die Katze ist unter dem Stuhl."
          }
        },
        {
          id: "g5",
          translations: {
            ja: "じむしょは ビルの なかに あります。",
            en: "The office is inside the building.",
            de: "Das Büro ist im Gebäude."
          }
        },
        {
          id: "g6",
          translations: {
            ja: "しんごうの ちかくで まってください。",
            en: "Please wait near the traffic light.",
            de: "Bitte warten Sie in der Nähe der Ampel."
          }
        }
      ]
    },
    de: {
      title: {
        de: "Wechselpräpositionen (Ort)",
        en: "Two-Way Prepositions (Place)",
        ja: "りょうよう ぜんちし（ばしょ）"
      },
      explanation: {
        de: "Wechselpräpositionen (in, an, auf, unter, über, vor, hinter, neben, zwischen) stehen mit Dativ, wenn sie einen festen Ort beschreiben (wo?), und mit Akkusativ, wenn sie eine Bewegung zu einem Ziel beschreiben (wohin?) — dieselbe wo/wohin-Unterscheidung wie in Lektion 11, jetzt sichtbar an der Endung der Präposition selbst.",
        en: "Two-way prepositions (in, an, auf, unter, über, vor, hinter, neben, zwischen) take dative when describing a fixed location (wo?) and accusative when describing motion toward a destination (wohin?) — the same wo/wohin distinction from Lesson 11, now visible in the preposition's own case ending.",
        ja: "りょうよう ぜんちし（in, an, auf, unter, über, vor, hinter, neben, zwischen）は、きまった ばしょを あらわす とき よかく（wo?）、いどうの もくてきちを あらわす とき たいかく（wohin?）に なります — レッスン11 と おなじ wo/wohin の くべつが、ぜんちしの かくへんかとして あらわれます。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Die Ampel ist an der Ecke.",
            en: "The traffic light is at the corner. (an + dative, fixed location)",
            ja: "しんごうは かどに あります。（an + よかく、きまった ばしょ）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Gehen Sie an die Ecke.",
            en: "Go to the corner. (an + accusative, motion)",
            ja: "かどまで いって ください。（an + たいかく、いどう）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Der Weg ist neben der Straße.",
            en: "The path is next to the street. (neben + dative)",
            ja: "みちは どおりの となりに あります。（neben + よかく）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Das Café ist zwischen der Bank und der Post.",
            en: "The café is between the bank and the post office. (zwischen + dative)",
            ja: "カフェは ぎんこうと ゆうびんきょくの あいだに あります。（zwischen + よかく）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Biegen Sie vor der Kreuzung ab.",
            en: "Turn before the intersection. (vor + dative)",
            ja: "こうさてんの てまえで まがって ください。（vor + よかく）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Der Parkplatz ist hinter dem Gebäude.",
            en: "The parking lot is behind the building. (hinter + dative)",
            ja: "ちゅうしゃじょうは たてものの うしろに あります。（hinter + よかく）"
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
        short: {
          ja: "みじかい い",
          en: "Short い",
          de: "Kurzes い"
        },
        long: {
          ja: "ながい い",
          en: "Long い",
          de: "Langes い"
        },
        pitch: {
          ja: "アクセント（ふくしゅう）",
          en: "Pitch accent (reinforced, new pairs)",
          de: "Tonhöhenakzent (vertieft, neue Paare)"
        }
      },
      items: [
        {
          id: "s1",
          category: "short",
          translations: {
            ja: "おじさん",
            en: "uncle (short じ)",
            de: "Onkel (kurzes じ)"
          }
        },
        {
          id: "s2",
          category: "short",
          translations: {
            ja: "とる",
            en: "to take (unrelated to this pair, kept for symmetry)",
            de: "nehmen (unabhängig, für Symmetrie beibehalten)"
          }
        },
        {
          id: "s3",
          category: "short",
          translations: {
            ja: "きた",
            en: "north (short き)",
            de: "Norden (kurzes き)"
          }
        },
        {
          id: "n1",
          category: "long",
          translations: {
            ja: "おじいさん",
            en: "grandfather (long いい)",
            de: "Großvater (langes いい)"
          }
        },
        {
          id: "n2",
          category: "long",
          translations: {
            ja: "とおい",
            en: "far (long とお)",
            de: "weit (langes とお)"
          }
        },
        {
          id: "n3",
          category: "long",
          translations: {
            ja: "きいろ",
            en: "yellow (long きい)",
            de: "gelb (langes きい)"
          }
        },
        {
          id: "p1",
          category: "pitch",
          translations: {
            ja: "まえ",
            en: "front (LH) — new word, single pattern",
            de: "vorne (LH) — neues Wort, einzelnes Muster"
          }
        },
        {
          id: "p2",
          category: "pitch",
          translations: {
            ja: "みち",
            en: "road (LH) — new word, single pattern",
            de: "Straße (LH) — neues Wort, einzelnes Muster"
          }
        },
        {
          id: "p3",
          category: "pitch",
          translations: {
            ja: "まがる",
            en: "to turn (LHL) — new word, single pattern",
            de: "abbiegen (LHL) — neues Wort, einzelnes Muster"
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
        i_length: {
          de: "I — lang vs. kurz",
          en: "I — long vs. short",
          ja: "I — ながい と みじかい"
        },
        eu: {
          de: "EU/ÄU-Diphthong",
          en: "EU/ÄU diphthong",
          ja: "EU／ÄU の にじゅうぼいん"
        }
      },
      items: [
        {
          id: "i1",
          category: "i_length",
          translations: {
            de: "Linie",
            en: "line, route (long I)",
            ja: "せん、ろせん（ながい I）"
          }
        },
        {
          id: "i2",
          category: "i_length",
          translations: {
            de: "Richtung",
            en: "direction (short I)",
            ja: "ほうこう（みじかい I）"
          }
        },
        {
          id: "i3",
          category: "i_length",
          translations: {
            de: "sich verirren",
            en: "to get lost (short I)",
            ja: "みちに まよう（みじかい I）"
          }
        },
        {
          id: "eu1",
          category: "eu",
          translations: {
            de: "Kreuzung",
            en: "intersection (EU diphthong)",
            ja: "こうさてん（EU の にじゅうぼいん）"
          }
        },
        {
          id: "eu2",
          category: "eu",
          translations: {
            de: "überqueren",
            en: "to cross (ÄU diphthong)",
            ja: "わたる（ÄU の にじゅうぼいん）"
          }
        }
      ]
    }
  }
};
