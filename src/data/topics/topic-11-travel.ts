import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese11.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicTravel: TopicLesson = {
  id: "topic-11-travel",
  lessonNumber: 11,
  topicName: {
    ja: "りょこう",
    en: "Travel",
    de: "Reisen"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "りょこう",
        en: "trip, journey",
        de: "Reise"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "でんしゃ",
        en: "train",
        de: "Zug"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "ひこうき",
        en: "airplane",
        de: "Flugzeug"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "きっぷ",
        en: "ticket",
        de: "Fahrkarte"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "スーツケース",
        en: "suitcase",
        de: "Koffer"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "にもつ",
        en: "luggage",
        de: "Gepäck"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "えき",
        en: "station",
        de: "Bahnhof"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "ホテル",
        en: "hotel",
        de: "Hotel"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "パスポート",
        en: "passport",
        de: "Reisepass"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "こっきょう",
        en: "border",
        de: "Grenze"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "ガイドブック",
        en: "travel guidebook",
        de: "Reiseführer"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "とうちゃく",
        en: "arrival",
        de: "Ankunft"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "しゅっぱつ",
        en: "departure",
        de: "Abfahrt"
      }
    },
    {
      id: "v14",
      category: "verb",
      translations: {
        ja: "りょこうする",
        en: "to travel",
        de: "reisen"
      }
    },
    {
      id: "v15",
      category: "verb",
      translations: {
        ja: "よやくする",
        en: "to reserve, book",
        de: "reservieren"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "しゅっぱつする",
        en: "to depart",
        de: "abfahren"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "とうちゃくする",
        en: "to arrive",
        de: "ankommen"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "にづくりする",
        en: "to pack",
        de: "packen"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "とまる",
        en: "to stay overnight",
        de: "übernachten"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "チェックインする",
        en: "to check in",
        de: "einchecken"
      }
    },
    {
      id: "v21",
      category: "adjective",
      translations: {
        ja: "はやい",
        en: "fast",
        de: "schnell"
      }
    },
    {
      id: "v22",
      category: "adjective",
      translations: {
        ja: "おそい",
        en: "slow",
        de: "langsam"
      }
    },
    {
      id: "v23",
      category: "adjective",
      translations: {
        ja: "ちょくつう",
        en: "direct (no transfers)",
        de: "direkt"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "こんざつ",
        en: "crowded",
        de: "überfüllt"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "やすい",
        en: "cheap, affordable",
        de: "günstig"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "じかんどおり",
        en: "punctual, on time",
        de: "pünktlich"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "ちえん",
        en: "delayed",
        de: "verspätet"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：ホテルへの みちを きく",
      en: "Dialogue A: Asking for the Hotel",
      de: "Dialog A: Nach dem Hotel fragen"
    },
    lines: [
      {
        id: "d1",
        speaker: "りょこうしゃ",
        translations: {
          ja: "すみません、さくらホテルへの みちを おしえてください。",
          en: "Excuse me, could you tell me the way to Sakura Hotel?",
          de: "Entschuldigung, können Sie mir den Weg zum Sakura-Hotel zeigen?"
        }
      },
      {
        id: "d2",
        speaker: "つうこうにん",
        translations: {
          ja: "ああ、それなら ここから ちかいですよ。",
          en: "Ah, that's close from here.",
          de: "Ah, das ist von hier aus nah."
        }
      },
      {
        id: "d3",
        speaker: "りょこうしゃ",
        translations: {
          ja: "どう いけば いいですか？",
          en: "How should I go?",
          de: "Wie soll ich gehen?"
        }
      },
      {
        id: "d4",
        speaker: "つうこうにん",
        translations: {
          ja: "この みちを まっすぐ いってください。",
          en: "Go straight along this road.",
          de: "Gehen Sie diese Straße geradeaus."
        }
      },
      {
        id: "d5",
        speaker: "りょこうしゃ",
        translations: {
          ja: "はい、それから？",
          en: "Okay, and then?",
          de: "Gut, und dann?"
        }
      },
      {
        id: "d6",
        speaker: "つうこうにん",
        translations: {
          ja: "えきの まえで みぎに まがってください。",
          en: "Turn right in front of the station.",
          de: "Biegen Sie vor dem Bahnhof rechts ab."
        }
      },
      {
        id: "d7",
        speaker: "りょこうしゃ",
        translations: {
          ja: "えきの まえで みぎ、わかりました。",
          en: "Right in front of the station, understood.",
          de: "Vor dem Bahnhof rechts, verstanden."
        }
      },
      {
        id: "d8",
        speaker: "つうこうにん",
        translations: {
          ja: "ホテルは その さきに あります。",
          en: "The hotel is further ahead from there.",
          de: "Das Hotel ist weiter voraus."
        }
      },
      {
        id: "d9",
        speaker: "りょこうしゃ",
        translations: {
          ja: "あるいて どのくらい かかりますか？",
          en: "How long does it take on foot?",
          de: "Wie lange dauert es zu Fuß?"
        }
      },
      {
        id: "d10",
        speaker: "つうこうにん",
        translations: {
          ja: "じゅっぷんぐらいです。",
          en: "About ten minutes.",
          de: "Etwa zehn Minuten."
        }
      },
      {
        id: "d11",
        speaker: "りょこうしゃ",
        translations: {
          ja: "タクシーで いった ほうが いいですか？",
          en: "Would it be better to go by taxi?",
          de: "Wäre es besser, mit dem Taxi zu fahren?"
        }
      },
      {
        id: "d12",
        speaker: "つうこうにん",
        translations: {
          ja: "いいえ、あるいても だいじょうぶですよ。",
          en: "No, walking is fine.",
          de: "Nein, zu Fuß geht das gut."
        }
      },
      {
        id: "d13",
        speaker: "りょこうしゃ",
        translations: {
          ja: "わかりました。ありがとうございます。",
          en: "Understood. Thank you.",
          de: "Verstanden. Vielen Dank."
        }
      },
      {
        id: "d14",
        speaker: "つうこうにん",
        translations: {
          ja: "どういたしまして。よい たびを！",
          en: "You're welcome. Have a good trip!",
          de: "Gern geschehen. Gute Reise!"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：りょこうの けいかくを たてる",
      en: "Dialogue B: Planning a Trip",
      de: "Dialog B: Eine Reise planen"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "なつやすみに どこかへ りょこうしない？",
          en: "Should we travel somewhere during summer vacation?",
          de: "Sollen wir in den Sommerferien irgendwohin reisen?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "いいね！どこへ いきたい？",
          en: "Sounds good! Where do you want to go?",
          de: "Klingt gut! Wohin möchtest du?"
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "おきなわへ いきたいな。",
          en: "I'd like to go to Okinawa.",
          de: "Ich möchte nach Okinawa."
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "ひこうきで いく？でんしゃで いく？",
          en: "Should we go by plane or by train?",
          de: "Fliegen wir oder fahren wir mit dem Zug?"
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "ひこうきの ほうが はやいよ。",
          en: "The plane is faster.",
          de: "Das Flugzeug ist schneller."
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "じゃあ、きっぷを よやくするね。",
          en: "Then I'll reserve the tickets.",
          de: "Dann reserviere ich die Tickets."
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "ホテルも よやくしたほうが いいね。",
          en: "We should reserve a hotel too.",
          de: "Wir sollten auch ein Hotel reservieren."
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "うみの ちかくの ホテルが いいな。",
          en: "A hotel near the sea would be nice.",
          de: "Ein Hotel in Meeresnähe wäre schön."
        }
      },
      {
        id: "e9",
        speaker: "みか",
        translations: {
          ja: "なんにち とまる よてい？",
          en: "How many days are we planning to stay?",
          de: "Wie viele Tage sind wir geplant zu bleiben?"
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "よっかぐらいは とまりたいな。",
          en: "I'd like to stay about four days.",
          de: "Ich möchte etwa vier Tage bleiben."
        }
      },
      {
        id: "e11",
        speaker: "みか",
        translations: {
          ja: "にもつは なにを もっていく？",
          en: "What luggage should we bring?",
          de: "Welches Gepäck sollen wir mitnehmen?"
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "スーツケースと ガイドブックだね。",
          en: "A suitcase and a guidebook.",
          de: "Einen Koffer und einen Reiseführer."
        }
      },
      {
        id: "e13",
        speaker: "みか",
        translations: {
          ja: "パスポートも わすれないでね。",
          en: "Don't forget your passport either.",
          de: "Vergiss auch deinen Reisepass nicht."
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "うん！たのしみに してるよ。",
          en: "Yeah! I'm looking forward to it.",
          de: "Ja! Ich freue mich darauf."
        }
      }
    ]
  },
  song: {
    title: {
      ja: "こげよ マイケル",
      en: "Row, Row, Row Your Boat",
      de: "Rudert, rudert"
    },
    lines: [
      {
        id: "sg1",
        translations: {
          ja: "こげ こげ ボートを",
          en: "Row, row, row your boat",
          de: "Rudert, rudert, rudert das Boot"
        }
      },
      {
        id: "sg2",
        translations: {
          ja: "しずかに かわを くだる",
          en: "Gently down the stream",
          de: "sanft den Fluss hinab"
        }
      },
      {
        id: "sg3",
        translations: {
          ja: "たのしく たのしく たのしく たのしく",
          en: "Merrily, merrily, merrily, merrily",
          de: "Fröhlich, fröhlich, fröhlich, fröhlich"
        }
      },
      {
        id: "sg4",
        translations: {
          ja: "じんせいは ゆめの よう",
          en: "Life is but a dream",
          de: "das Leben ist ein Traum"
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "に・へ・で",
        en: "に, へ, で",
        de: "に, へ, で"
      },
      explanation: {
        ja: "「に」は そんざいの ばしょ（〜に います/あります）と、いきさきを あらわします。「へ」は「に」より やわらかい「〜の ほうへ」という いみで、いきさきに つかいます。「で」は どうさが おこなわれる ばしょを あらわします。",
        en: "に marks where something exists (〜に います/あります) and also a destination. へ is a softer \"toward\" version used for destinations too. で marks the location where an action takes place.",
        de: "に markiert, wo etwas existiert (〜に います/あります), und auch ein Reiseziel. へ ist eine weichere Version von „in Richtung von\" und wird ebenfalls für Reiseziele benutzt. で markiert den Ort, an dem eine Handlung stattfindet."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "ホテルに とまります。",
            en: "I'll stay at the hotel. (に — existence/location)",
            de: "Ich übernachte im Hotel. (に — Existenz/Ort)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "とうきょうへ いきます。",
            en: "I'm going to Tokyo. (へ — softer direction)",
            de: "Ich fahre nach Tokio. (へ — sanftere Richtung)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "えきに つきました。",
            en: "I arrived at the station. (に — destination reached)",
            de: "Ich bin am Bahnhof angekommen. (に — erreichtes Ziel)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "レストランで たべます。",
            en: "I'll eat at the restaurant. (で — where the action happens)",
            de: "Ich esse im Restaurant. (で — wo die Handlung stattfindet)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "ホテルで やすみます。",
            en: "I'll rest at the hotel. (で — action location)",
            de: "Ich ruhe mich im Hotel aus. (で — Handlungsort)"
          }
        },
        {
          id: "g6",
          translations: {
            ja: "きっぷは どこで かいますか？",
            en: "Where do I buy tickets? (で — action location)",
            de: "Wo kaufe ich Fahrkarten? (で — Handlungsort)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Richtung und Ort: wo / wohin",
        en: "Direction and Location: wo / wohin",
        ja: "ほうこう と ばしょ：wo と wohin"
      },
      explanation: {
        de: "wo fragt nach einem festen Ort (Antwort im Dativ: im Hotel). wohin fragt nach einer Richtung oder einem Ziel (Antwort im Akkusativ: ins Hotel, zum Bahnhof). Für Städte und Länder ohne Artikel benutzt man nach: nach Berlin, nach Deutschland.",
        en: "wo asks about a fixed location (answer in dative: im Hotel). wohin asks about a direction or destination (answer in accusative: ins Hotel, zum Bahnhof). For cities and countries without an article, use nach: nach Berlin, nach Deutschland.",
        ja: "wo は きまった ばしょを たずねます（こたえは よかく：im Hotel）。wohin は ほうこうや もくてきちを たずねます（こたえは たいかく：ins Hotel、zum Bahnhof）。かんしのない とし・くにの ばあいは nach を つかいます：nach Berlin、nach Deutschland。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Wo ist der Bahnhof?",
            en: "Where is the train station? (wo — fixed location)",
            ja: "えきは どこ ですか？（wo — きまった ばしょ）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Wohin fährst du?",
            en: "Where are you going? (wohin — direction)",
            ja: "どこへ いきますか？（wohin — ほうこう）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Ich fahre zum Bahnhof.",
            en: "I'm going to the train station. (zum — direction, dative-fused)",
            ja: "えきへ いきます。（zum — ほうこう）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Ich bin im Hotel.",
            en: "I am at the hotel. (im — fixed location, dative)",
            ja: "ホテルに います。（im — きまった ばしょ、よかく）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Wir fahren nach Berlin.",
            en: "We're going to Berlin. (nach — city, no article)",
            ja: "ベルリンへ いきます。（nach — とし、かんしなし）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Der Zug fährt in die Stadt.",
            en: "The train is going into the city. (in die — direction, accusative)",
            ja: "でんしゃは まちへ いきます。（in die — ほうこう、たいかく）"
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
        ha_wa: {
          ja: "じょしの「は」→ わ",
          en: "Topic particle は → read \"wa\"",
          de: "Themenpartikel は → gelesen „wa\""
        },
        he_e: {
          ja: "じょしの「へ」→ え",
          en: "Direction particle へ → read \"e\"",
          de: "Richtungspartikel へ → gelesen „e\""
        }
      },
      items: [
        {
          id: "hw1",
          category: "ha_wa",
          translations: {
            ja: "わたしは がくせいです。",
            en: "I am a student. (は read as \"wa\")",
            de: "Ich bin Student. (は gelesen als „wa\")"
          }
        },
        {
          id: "hw2",
          category: "ha_wa",
          translations: {
            ja: "これは きっぷです。",
            en: "This is a ticket. (は read as \"wa\")",
            de: "Das ist eine Fahrkarte. (は gelesen als „wa\")"
          }
        },
        {
          id: "hw3",
          category: "ha_wa",
          translations: {
            ja: "ホテルは ちかいです。",
            en: "The hotel is close. (は read as \"wa\")",
            de: "Das Hotel ist nah. (は gelesen als „wa\")"
          }
        },
        {
          id: "hw4",
          category: "ha_wa",
          translations: {
            ja: "はな",
            en: "flower (は here is NOT the particle — normal \"ha\")",
            de: "Blume (は ist hier KEIN Partikel — normales „ha\")"
          }
        },
        {
          id: "he1",
          category: "he_e",
          translations: {
            ja: "とうきょうへ いきます。",
            en: "I'm going to Tokyo. (へ read as \"e\")",
            de: "Ich fahre nach Tokio. (へ gelesen als „e\")"
          }
        },
        {
          id: "he2",
          category: "he_e",
          translations: {
            ja: "えきへ むかいます。",
            en: "I'm heading to the station. (へ read as \"e\")",
            de: "Ich gehe zum Bahnhof. (へ gelesen als „e\")"
          }
        },
        {
          id: "he3",
          category: "he_e",
          translations: {
            ja: "ホテルへの みち",
            en: "the way to the hotel (へ read as \"e\")",
            de: "der Weg zum Hotel (へ gelesen als „e\")"
          }
        },
        {
          id: "he4",
          category: "he_e",
          translations: {
            ja: "へや",
            en: "room (へ here is NOT the particle — normal \"he\")",
            de: "Zimmer (へ ist hier KEIN Partikel — normales „he\")"
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
        cluster: {
          de: "Anlaut-Konsonantencluster vs. Einzelkonsonant",
          en: "Initial consonant cluster vs. single consonant",
          ja: "ごとうの しいん クラスター と たんいつしいん"
        },
        schw_schr: {
          de: "SCHW-/SCHR-Cluster",
          en: "SCHW-/SCHR- clusters",
          ja: "SCHW-／SCHR- クラスター"
        }
      },
      items: [
        {
          id: "c1",
          category: "cluster",
          translations: {
            de: "Flugzeug",
            en: "airplane (initial cluster Fl-)",
            ja: "ひこうき（ごとうクラスター Fl-）"
          }
        },
        {
          id: "c2",
          category: "cluster",
          translations: {
            de: "Grenze",
            en: "border (initial cluster Gr-)",
            ja: "こっきょう（ごとうクラスター Gr-）"
          }
        },
        {
          id: "c3",
          category: "cluster",
          translations: {
            de: "Zug",
            en: "train (single initial consonant Z)",
            ja: "でんしゃ（たんいつしいん Z）"
          }
        },
        {
          id: "c4",
          category: "cluster",
          translations: {
            de: "Koffer",
            en: "suitcase (single initial consonant K)",
            ja: "スーツケース（たんいつしいん K）"
          }
        },
        {
          id: "sw1",
          category: "schw_schr",
          translations: {
            de: "schwer",
            en: "heavy (SCHW- cluster, e.g. heavy luggage)",
            ja: "おもい（SCHW- クラスター、おもい にもつ）"
          }
        },
        {
          id: "sr1",
          category: "schw_schr",
          translations: {
            de: "Schranke",
            en: "barrier, gate (SCHR- cluster, e.g. at a crossing)",
            ja: "しゃだんき（SCHR- クラスター、ふみきりなど）"
          }
        }
      ]
    }
  },
  extraDrills: {
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
          cluster: { de: "Anfangscluster", en: "Initial cluster", ja: "ごとうクラスター", zh: "词首辅音连缀" },
          single: { de: "Einzelkonsonant", en: "Single consonant", ja: "たんいつしいん", zh: "单辅音" },
          schw: { de: "SCHW- = /ʃv/", en: "SCHW- = /ʃv/", ja: "SCHW- = /ʃv/", zh: "SCHW- = /ʃv/" },
          schr: { de: "SCHR- = /ʃʁ/", en: "SCHR- = /ʃʁ/", ja: "SCHR- = /ʃʁ/", zh: "SCHR- = /ʃʁ/" }
        },
        items: [
          { id: "cl1", category: "cluster", translations: { de: "Straße", en: "street", ja: "どうろ", zh: "街道" } },
          { id: "cl2", category: "cluster", translations: { de: "Stadt", en: "city", ja: "まち", zh: "城市" } },
          { id: "cl3", category: "cluster", translations: { de: "sprechen", en: "to speak", ja: "はなす", zh: "说话" } },
          { id: "cl4", category: "cluster", translations: { de: "Spiel", en: "game", ja: "ゲーム", zh: "游戏" } },
          { id: "cl5", category: "cluster", translations: { de: "Stein", en: "stone", ja: "いし", zh: "石头" } },
          { id: "cl6", category: "cluster", translations: { de: "Schule", en: "school", ja: "がっこう", zh: "学校" } },
          { id: "cl7", category: "cluster", translations: { de: "Schrank", en: "closet, cabinet", ja: "たんす", zh: "衣柜" } },
          { id: "cl8", category: "cluster", translations: { de: "Bruder", en: "brother", ja: "きょうだい", zh: "兄弟" } },
          { id: "cl9", category: "cluster", translations: { de: "brauchen", en: "to need", ja: "ひつようとする", zh: "需要" } },
          { id: "cl10", category: "cluster", translations: { de: "trinken", en: "to drink", ja: "のむ", zh: "喝" } },
          { id: "cl11", category: "cluster", translations: { de: "drei", en: "three", ja: "さん", zh: "三" } },
          { id: "cl12", category: "cluster", translations: { de: "Frage", en: "question", ja: "しつもん", zh: "问题" } },
          { id: "cl13", category: "cluster", translations: { de: "Blume", en: "flower", ja: "はな", zh: "花" } },
          { id: "cl14", category: "cluster", translations: { de: "Klasse", en: "class", ja: "クラス", zh: "班级" } },

          { id: "si1", category: "single", translations: { de: "Ball", en: "ball", ja: "ボール", zh: "球" } },
          { id: "si2", category: "single", translations: { de: "Tag", en: "day", ja: "ひ", zh: "天" } },
          { id: "si3", category: "single", translations: { de: "Tisch", en: "table", ja: "テーブル", zh: "桌子" } },
          { id: "si4", category: "single", translations: { de: "Kopf", en: "head", ja: "あたま", zh: "头" } },
          { id: "si5", category: "single", translations: { de: "Kind", en: "child", ja: "こども", zh: "孩子" } },
          { id: "si6", category: "single", translations: { de: "Haus", en: "house", ja: "いえ", zh: "房子" } },
          { id: "si7", category: "single", translations: { de: "Fisch", en: "fish", ja: "さかな", zh: "鱼" } },
          { id: "si8", category: "single", translations: { de: "Mann", en: "man", ja: "おとこ", zh: "男人" } },
          { id: "si9", category: "single", translations: { de: "Nase", en: "nose", ja: "はな", zh: "鼻子" } },
          { id: "si10", category: "single", translations: { de: "Sonne", en: "sun", ja: "たいよう", zh: "太阳" } },
          { id: "si11", category: "single", translations: { de: "Lampe", en: "lamp", ja: "ランプ", zh: "灯" } },
          { id: "si12", category: "single", translations: { de: "Radio", en: "radio", ja: "ラジオ", zh: "收音机" } },
          { id: "si13", category: "single", translations: { de: "Mutter", en: "mother", ja: "はは", zh: "母亲" } },
          { id: "si14", category: "single", translations: { de: "Auto", en: "car", ja: "くるま", zh: "汽车" } },

          { id: "sw1", category: "schw", translations: { de: "schwer", en: "heavy", ja: "おもい", zh: "重的" } },
          { id: "sw2", category: "schw", translations: { de: "Schwester", en: "sister", ja: "しまい（あね・いもうと）", zh: "姐妹" } },
          { id: "sw3", category: "schw", translations: { de: "schwimmen", en: "to swim", ja: "およぐ", zh: "游泳" } },
          { id: "sw4", category: "schw", translations: { de: "Schwein", en: "pig", ja: "ぶた", zh: "猪" } },
          { id: "sw5", category: "schw", translations: { de: "Schweden", en: "Sweden", ja: "スウェーデン", zh: "瑞典" } },
          { id: "sw6", category: "schw", translations: { de: "schwarz", en: "black", ja: "くろ", zh: "黑色" } },
          { id: "sw7", category: "schw", translations: { de: "schwach", en: "weak", ja: "よわい", zh: "弱的" } },
          { id: "sw8", category: "schw", translations: { de: "schwanger", en: "pregnant", ja: "にんしんした", zh: "怀孕的" } },
          { id: "sw9", category: "schw", translations: { de: "schweigen", en: "to be silent", ja: "だまる", zh: "沉默" } },
          { id: "sw10", category: "schw", translations: { de: "schweben", en: "to float, hover", ja: "うかぶ", zh: "漂浮" } },
          { id: "sw11", category: "schw", translations: { de: "schwitzen", en: "to sweat", ja: "あせをかく", zh: "出汗" } },
          { id: "sw12", category: "schw", translations: { de: "Schwamm", en: "sponge", ja: "スポンジ", zh: "海绵" } },
          { id: "sw13", category: "schw", translations: { de: "Schwert", en: "sword", ja: "けん", zh: "剑" } },
          { id: "sw14", category: "schw", translations: { de: "Schweinchen", en: "piglet", ja: "こぶた", zh: "小猪" } },

          { id: "sr2", category: "schr", translations: { de: "schreiben", en: "to write", ja: "かく", zh: "写" } },
          { id: "sr2b", category: "schr", translations: { de: "Schrank", en: "closet, cabinet", ja: "たんす", zh: "衣柜" } },
          { id: "sr3", category: "schr", translations: { de: "Schraube", en: "screw", ja: "ねじ", zh: "螺丝" } },
          { id: "sr4", category: "schr", translations: { de: "Schritt", en: "step", ja: "いっぽ", zh: "步" } },
          { id: "sr5", category: "schr", translations: { de: "Schrift", en: "writing, script", ja: "もじ", zh: "文字" } },
          { id: "sr6", category: "schr", translations: { de: "Schreck", en: "fright, shock", ja: "おどろき", zh: "惊吓" } },
          { id: "sr7", category: "schr", translations: { de: "Schrot", en: "groats, buckshot", ja: "ひきわりこくもつ", zh: "碎谷物；霰弹" } },
          { id: "sr8", category: "schr", translations: { de: "Schraubenzieher", en: "screwdriver", ja: "ドライバー", zh: "螺丝刀" } },
          { id: "sr9", category: "schr", translations: { de: "Schriftsteller", en: "writer, author", ja: "さっか", zh: "作家" } },
          { id: "sr10", category: "schr", translations: { de: "Schreibheft", en: "notebook", ja: "ノート", zh: "笔记本" } },
          { id: "sr11", category: "schr", translations: { de: "Schreibtisch", en: "desk", ja: "つくえ", zh: "书桌" } },
          { id: "sr12", category: "schr", translations: { de: "Schranke", en: "barrier, gate", ja: "しゃだんき", zh: "栏杆；屏障" } },
          { id: "sr13", category: "schr", translations: { de: "Schriftsprache", en: "written language", ja: "もじげんご", zh: "书面语" } },
          { id: "sr14", category: "schr", translations: { de: "Schraube", en: "screw", ja: "ねじ", zh: "螺丝" } }
        ]
      }
    ]
  }
};
