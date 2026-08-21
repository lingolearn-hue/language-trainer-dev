import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese6.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicHome: TopicLesson = {
  id: "topic-06-home",
  lessonNumber: 6,
  topicName: {
    ja: "いえ",
    en: "Home",
    de: "Zuhause"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "へや",
        en: "room",
        de: "Zimmer"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "だいどころ",
        en: "kitchen",
        de: "Küche"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "ふろば",
        en: "bathroom (bath)",
        de: "Badezimmer"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "トイレ",
        en: "toilet",
        de: "Toilette"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "にわ",
        en: "garden, yard",
        de: "Garten"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "ドア",
        en: "door",
        de: "Tür"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "まど",
        en: "window",
        de: "Fenster"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "かぎ",
        en: "key",
        de: "Schlüssel"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "でんき",
        en: "electricity, light",
        de: "Strom, Licht"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "かがみ",
        en: "mirror",
        de: "Spiegel"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "ベッド",
        en: "bed",
        de: "Bett"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "テーブル",
        en: "table",
        de: "Tisch"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "いす",
        en: "chair",
        de: "Stuhl"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "ほんだな",
        en: "bookshelf",
        de: "Bücherregal"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "れいぞうこ",
        en: "refrigerator",
        de: "Kühlschrank"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "すむ",
        en: "to live (reside)",
        de: "wohnen"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "そうじする",
        en: "to clean",
        de: "putzen"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "かたづける",
        en: "to tidy up",
        de: "aufräumen"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "かりる",
        en: "to borrow, rent",
        de: "leihen, mieten"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "かす",
        en: "to lend",
        de: "verleihen"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "もつ",
        en: "to have, hold",
        de: "besitzen, halten"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "さがす",
        en: "to look for",
        de: "suchen"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "なくす",
        en: "to lose (an object)",
        de: "verlieren"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "きれい",
        en: "clean, pretty",
        de: "sauber, hübsch"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "きたない",
        en: "dirty",
        de: "schmutzig"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "ひろい",
        en: "spacious",
        de: "geräumig"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "せまい",
        en: "narrow, cramped",
        de: "eng"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "あかるい",
        en: "bright",
        de: "hell"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "くらい",
        en: "dark",
        de: "dunkel"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "べんり",
        en: "convenient",
        de: "praktisch"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：いえを あんないする",
      en: "Dialogue A: House Tour",
      de: "Dialog A: Hausführung"
    },
    lines: [
      {
        id: "d1",
        speaker: "あい",
        translations: {
          ja: "どうぞ、はいってください。",
          en: "Please, come in.",
          de: "Bitte, kommen Sie herein."
        }
      },
      {
        id: "d2",
        speaker: "けん",
        translations: {
          ja: "おじゃまします。ひろい いえですね。",
          en: "Excuse me for intruding. What a spacious house.",
          de: "Entschuldigen Sie die Störung. Was für ein geräumiges Haus."
        }
      },
      {
        id: "d3",
        speaker: "あい",
        translations: {
          ja: "ありがとう。こちらが リビングです。",
          en: "Thank you. This is the living room.",
          de: "Danke. Hier ist das Wohnzimmer."
        }
      },
      {
        id: "d4",
        speaker: "けん",
        translations: {
          ja: "とても あかるいですね。",
          en: "It's very bright.",
          de: "Es ist sehr hell."
        }
      },
      {
        id: "d5",
        speaker: "あい",
        translations: {
          ja: "はい、まどが おおいです。こちらは だいどころです。",
          en: "Yes, there are a lot of windows. This is the kitchen.",
          de: "Ja, es gibt viele Fenster. Hier ist die Küche."
        }
      },
      {
        id: "d6",
        speaker: "けん",
        translations: {
          ja: "きれいな だいどころですね。",
          en: "What a clean kitchen.",
          de: "Was für eine saubere Küche."
        }
      },
      {
        id: "d7",
        speaker: "あい",
        translations: {
          ja: "いつも そうじしています。",
          en: "I always clean it.",
          de: "Ich putze sie immer."
        }
      },
      {
        id: "d8",
        speaker: "けん",
        translations: {
          ja: "にかいには なにが ありますか？",
          en: "What's upstairs?",
          de: "Was ist im Obergeschoss?"
        }
      },
      {
        id: "d9",
        speaker: "あい",
        translations: {
          ja: "わたしの へやと しんしつが あります。",
          en: "My room and the bedroom are there.",
          de: "Mein Zimmer und das Schlafzimmer sind dort."
        }
      },
      {
        id: "d10",
        speaker: "けん",
        translations: {
          ja: "あなたの へやを みても いいですか？",
          en: "May I see your room?",
          de: "Darf ich dein Zimmer sehen?"
        }
      },
      {
        id: "d11",
        speaker: "あい",
        translations: {
          ja: "もちろん。すこし せまいですが。",
          en: "Of course. Though it's a bit small.",
          de: "Natürlich. Auch wenn es etwas eng ist."
        }
      },
      {
        id: "d12",
        speaker: "けん",
        translations: {
          ja: "でも とても べんりそうです。",
          en: "But it looks very convenient.",
          de: "Aber es sieht sehr praktisch aus."
        }
      },
      {
        id: "d13",
        speaker: "あい",
        translations: {
          ja: "にわも あります。みますか？",
          en: "There's a garden too. Want to see it?",
          de: "Es gibt auch einen Garten. Möchtest du ihn sehen?"
        }
      },
      {
        id: "d14",
        speaker: "けん",
        translations: {
          ja: "はい、ぜひ みたいです！",
          en: "Yes, I'd love to see it!",
          de: "Ja, das möchte ich unbedingt sehen!"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：だれの もの？",
      en: "Dialogue B: Whose Is It?",
      de: "Dialog B: Wem gehört das?"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "これ、だれの かぎ？",
          en: "Whose key is this?",
          de: "Wessen Schlüssel ist das?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "それは ぼくのだよ。",
          en: "That's mine.",
          de: "Das ist meiner."
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "ほんとう？わたしのに にてるね。",
          en: "Really? It looks like mine.",
          de: "Wirklich? Er sieht meinem ähnlich."
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "いや、ぼくのには しるしが あるよ。",
          en: "No, mine has a mark on it.",
          de: "Nein, meiner hat eine Markierung."
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "あ、ほんとうだ。ごめん。",
          en: "Oh, you're right. Sorry.",
          de: "Oh, stimmt. Entschuldigung."
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "だいじょうぶ。これは だれの かばん？",
          en: "It's okay. Whose bag is this?",
          de: "Kein Problem. Wessen Tasche ist das?"
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "それは わたしのよ。",
          en: "That's mine.",
          de: "Die ist meine."
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "じゃあ、この ほんは？",
          en: "Then what about this book?",
          de: "Und was ist mit diesem Buch?"
        }
      },
      {
        id: "e9",
        speaker: "みか",
        translations: {
          ja: "それは たぶん おとうとのよ。",
          en: "That's probably my brother's.",
          de: "Das gehört wahrscheinlich meinem Bruder."
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "なんで ここに あるの？",
          en: "Why is it here?",
          de: "Warum ist es hier?"
        }
      },
      {
        id: "e11",
        speaker: "みか",
        translations: {
          ja: "わからない。かれに きいてみる。",
          en: "I don't know. I'll ask him.",
          de: "Ich weiß nicht. Ich frage ihn."
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "この かさも かれのかな？",
          en: "Is this umbrella his too?",
          de: "Gehört dieser Regenschirm auch ihm?"
        }
      },
      {
        id: "e13",
        speaker: "みか",
        translations: {
          ja: "ううん、それは わたしたちのよ。",
          en: "No, that's ours.",
          de: "Nein, der gehört uns."
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "なるほど。ぜんぶ わかったよ。",
          en: "I see. Now I understand everything.",
          de: "Verstehe. Jetzt habe ich alles verstanden."
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "「の」（しょゆう）",
        en: "の (Possession)",
        de: "の (Besitz)"
      },
      explanation: {
        ja: "にほんごには えいごの「my/your」のような べつの しょゆうだいめいしが ありません。かわりに「めいし＋の＋めいし」を つかいます。だいめいしも おなじ かたちです：わたしの、あなたの、かれの。",
        en: "Japanese doesn't have a separate class of possessive pronouns like English \"my/your.\" Instead, NOUN + の + NOUN expresses possession. Pronouns work the same way: わたしの (my), あなたの (your), かれの (his).",
        de: "Im Japanischen gibt es keine eigene Klasse von Possessivpronomen wie im Deutschen „mein/dein\". Stattdessen drückt NOMEN + の + NOMEN Besitz aus. Pronomen funktionieren genauso: わたしの (mein), あなたの (dein), かれの (sein)."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "これは わたしの ほんです。",
            en: "This is my book.",
            de: "Das ist mein Buch."
          }
        },
        {
          id: "g2",
          translations: {
            ja: "それは だれの かばんですか？",
            en: "Whose bag is that?",
            de: "Wessen Tasche ist das?"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "これは わたしのです。",
            en: "This is mine. (の alone stands in for the noun)",
            de: "Das ist meins. (の allein ersetzt das Nomen)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "これは あなたの かぎですか？",
            en: "Is this your key?",
            de: "Ist das dein Schlüssel?"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "いいえ、それは かれのです。",
            en: "No, that's his.",
            de: "Nein, das ist seins."
          }
        },
        {
          id: "g6",
          translations: {
            ja: "これは たなかさんの いえです。",
            en: "This is Mr. Tanaka's house.",
            de: "Das ist Herrn Tanakas Haus."
          }
        }
      ]
    },
    de: {
      title: {
        de: "Possessivpronomen",
        en: "Possessives",
        ja: "しょゆう だいめいし"
      },
      explanation: {
        de: "Possessivpronomen zeigen, wem etwas gehört: mein(e) (my), dein(e) (your, informal), sein(e) (his), ihr(e) (her), unser(e) (our), euer/eure (your, plural), ihr(e) (their) und Ihr(e) (your, formal). Die Endung -e kommt bei femininen und pluralen Nomen dazu, sonst bleibt die Grundform.",
        en: "Possessive pronouns show who owns something: mein(e) (my), dein(e) (your, informal), sein(e) (his), ihr(e) (her), unser(e) (our), euer/eure (your, plural), ihr(e) (their), and Ihr(e) (your, formal). The -e ending is added for feminine and plural nouns; otherwise the base form is used.",
        ja: "しょゆう だいめいしは、なにが だれの ものかを しめします：mein(e)（わたしの）、dein(e)（きみの）、sein(e)（かれの）、ihr(e)（かのじょの）、unser(e)（わたしたちの）、euer/eure（きみたちの）、ihr(e)（かれらの）、Ihr(e)（ていねいな あなたの）。じょせいけい・ふくすうの めいしには -e が つき、それ いがいは きほんけいの ままです。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Das ist mein Zimmer.",
            en: "This is my room. (mein)",
            ja: "これは わたしの へやです。（mein）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Ist das dein Schlüssel?",
            en: "Is that your key? (dein)",
            ja: "それは きみの かぎ ですか？（dein）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Das ist sein Bett.",
            en: "That is his bed. (sein)",
            ja: "それは かれの ベッドです。（sein）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Das ist ihr Tisch.",
            en: "That is her table. (ihr)",
            ja: "それは かのじょの テーブルです。（ihr）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Das ist unser Haus.",
            en: "That is our house. (unser)",
            ja: "それは わたしたちの いえです。（unser）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Wo ist euer Stuhl?",
            en: "Where is your (plural) chair? (euer)",
            ja: "きみたちの いすは どこ ですか？（euer）"
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
        n_szdnr: {
          ja: "「ん」＋ s/z/t/d/n/r → n の おと",
          en: "ん before s/z/t/d/n/r → sounds like \"n\"",
          de: "ん vor s/z/t/d/n/r → klingt wie „n\""
        },
        pitch: {
          ja: "アクセント（ふくしゅう）",
          en: "Pitch accent (reinforced, new pairs)",
          de: "Tonhöhenakzent (vertieft, neue Paare)"
        }
      },
      items: [
        {
          id: "n1",
          category: "n_szdnr",
          translations: {
            ja: "せんせい",
            en: "teacher (ん before s)",
            de: "Lehrer(in) (ん vor s)"
          }
        },
        {
          id: "n2",
          category: "n_szdnr",
          translations: {
            ja: "かんじ",
            en: "kanji (ん before j)",
            de: "Kanji (ん vor j)"
          }
        },
        {
          id: "n3",
          category: "n_szdnr",
          translations: {
            ja: "ほんだな",
            en: "bookshelf (ん before d)",
            de: "Bücherregal (ん vor d)"
          }
        },
        {
          id: "n4",
          category: "n_szdnr",
          translations: {
            ja: "でんわ",
            en: "telephone (ん before w, nasalized vowel)",
            de: "Telefon (ん vor w, nasalierter Vokal)"
          }
        },
        {
          id: "p1",
          category: "pitch",
          translations: {
            ja: "かう",
            en: "to buy (LH) — reinforced, contrast with next",
            de: "kaufen (LH) — vertieft, Kontrast zum nächsten"
          }
        },
        {
          id: "p2",
          category: "pitch",
          translations: {
            ja: "かみ",
            en: "hair (LH) / paper (HL) — reinforced from L2, new context",
            de: "Haare (LH) / Papier (HL) — vertieft aus L2, neuer Kontext"
          }
        },
        {
          id: "p3",
          category: "pitch",
          translations: {
            ja: "にわ",
            en: "garden (LH) / (counting two, unrelated homophone HL)",
            de: "Garten (LH) / (Zählwort „zwei\", unabhängiges Homophon HL)"
          }
        },
        {
          id: "p4",
          category: "pitch",
          translations: {
            ja: "かぎ",
            en: "key (LH) — new word, single pitch pattern to notice",
            de: "Schlüssel (LH) — neues Wort, einzelnes Tonmuster"
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
        f_v: {
          de: "F und V klingen beide meist wie \"f\"",
          en: "F and V both usually sound like \"f\"",
          ja: "F と V は どちらも たいてい「f」の おと"
        },
        w: {
          de: "W klingt wie englisches V",
          en: "W sounds like English V",
          ja: "W は えいごの V のように きこえる"
        }
      },
      items: [
        {
          id: "f1",
          category: "f_v",
          translations: {
            de: "Fenster",
            en: "window (letter F)",
            ja: "まど（もじ F）"
          }
        },
        {
          id: "f2",
          category: "f_v",
          translations: {
            de: "Vater",
            en: "father (letter V, sounds like F)",
            ja: "ちち（もじ V、f の おと）"
          }
        },
        {
          id: "f3",
          category: "f_v",
          translations: {
            de: "verleihen",
            en: "to lend out (letter V, sounds like F)",
            ja: "かす（もじ V、f の おと）"
          }
        },
        {
          id: "w1",
          category: "w",
          translations: {
            de: "wohnen",
            en: "to live, reside (W sounds like English V)",
            ja: "すむ（W は えいごの V のよう）"
          }
        },
        {
          id: "w2",
          category: "w",
          translations: {
            de: "Wasser",
            en: "water (W sounds like English V)",
            ja: "みず（W は えいごの V のよう）"
          }
        }
      ]
    }
  }
};
