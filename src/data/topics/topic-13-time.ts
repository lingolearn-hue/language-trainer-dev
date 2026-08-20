import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese13.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicTime: TopicLesson = {
  id: "topic-13-time",
  lessonNumber: 13,
  topicName: {
    ja: "じかん",
    en: "Time",
    de: "Zeit"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "じかん",
        en: "time",
        de: "Zeit"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "よてい",
        en: "schedule, plan",
        de: "Zeitplan"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "かいぎ",
        en: "meeting",
        de: "Besprechung"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "やくそく",
        en: "promise, appointment",
        de: "Verabredung"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "しゅうまつ",
        en: "weekend",
        de: "Wochenende"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "へいじつ",
        en: "weekday",
        de: "Wochentag"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "ごぜん",
        en: "morning, AM",
        de: "Vormittag"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "ごご",
        en: "afternoon, PM",
        de: "Nachmittag"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "いま",
        en: "now",
        de: "jetzt"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "あとで",
        en: "later",
        de: "später"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "きょう",
        en: "today (no particle)",
        de: "heute (kein Partikel)"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "あした",
        en: "tomorrow (no particle)",
        de: "morgen (kein Partikel)"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "きのう",
        en: "yesterday (no particle)",
        de: "gestern (kein Partikel)"
      }
    },
    {
      id: "v14",
      category: "verb",
      translations: {
        ja: "きめる",
        en: "to decide",
        de: "entscheiden"
      }
    },
    {
      id: "v15",
      category: "verb",
      translations: {
        ja: "へんこうする",
        en: "to change (a plan)",
        de: "ändern (Plan)"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "まにあう",
        en: "to be on time",
        de: "rechtzeitig sein"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "おくれる",
        en: "to be late",
        de: "sich verspäten"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "じゅんびする",
        en: "to prepare",
        de: "vorbereiten"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "はじまる",
        en: "to begin (something)",
        de: "beginnen"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "おわる",
        en: "to end",
        de: "enden"
      }
    },
    {
      id: "v21",
      category: "adjective",
      translations: {
        ja: "いそがしい",
        en: "busy",
        de: "beschäftigt"
      }
    },
    {
      id: "v22",
      category: "adjective",
      translations: {
        ja: "ひま",
        en: "free (time available)",
        de: "frei (Zeit verfügbar)"
      }
    },
    {
      id: "v23",
      category: "adjective",
      translations: {
        ja: "はやい",
        en: "early",
        de: "früh"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "おそい",
        en: "late",
        de: "spät"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "みじかい",
        en: "short (duration)",
        de: "kurz (Dauer)"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "ながい",
        en: "long (duration)",
        de: "lang (Dauer)"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "べんり",
        en: "convenient",
        de: "praktisch"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "じゅうよう",
        en: "important",
        de: "wichtig"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "つごうが いい",
        en: "convenient (for scheduling)",
        de: "passend (zeitlich)"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "つごうが わるい",
        en: "inconvenient (for scheduling)",
        de: "unpassend (zeitlich)"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：どうりょうと よていを たてる",
      en: "Dialogue A: Planning a Schedule",
      de: "Dialog A: Einen Zeitplan erstellen"
    },
    lines: [
      {
        id: "d1",
        speaker: "たなか",
        translations: {
          ja: "こんしゅうの よていを かくにんしましょう。",
          en: "Let's confirm this week's schedule.",
          de: "Lass uns den Zeitplan für diese Woche bestätigen."
        }
      },
      {
        id: "d2",
        speaker: "すずき",
        translations: {
          ja: "はい、げつようびは なにが ありますか？",
          en: "Okay, what's on Monday?",
          de: "Gut, was ist am Montag?"
        }
      },
      {
        id: "d3",
        speaker: "たなか",
        translations: {
          ja: "げつようびに かいぎが あります。10じからです。",
          en: "There's a meeting on Monday. It starts at 10.",
          de: "Am Montag gibt es eine Besprechung. Sie beginnt um 10 Uhr."
        }
      },
      {
        id: "d4",
        speaker: "すずき",
        translations: {
          ja: "わかりました。かようびは？",
          en: "Understood. What about Tuesday?",
          de: "Verstanden. Und Dienstag?"
        }
      },
      {
        id: "d5",
        speaker: "たなか",
        translations: {
          ja: "かようびは とくに よていが ありません。",
          en: "There's nothing special planned for Tuesday.",
          de: "Für Dienstag ist nichts Besonderes geplant."
        }
      },
      {
        id: "d6",
        speaker: "すずき",
        translations: {
          ja: "じゃあ、じゅんびの じかんに つかえますね。",
          en: "Then we can use it as time to prepare.",
          de: "Dann können wir es zur Vorbereitung nutzen."
        }
      },
      {
        id: "d7",
        speaker: "たなか",
        translations: {
          ja: "いいですね。すいようびに もういちど かいぎが あります。",
          en: "Good idea. There's another meeting on Wednesday.",
          de: "Gute Idee. Am Mittwoch gibt es noch eine Besprechung."
        }
      },
      {
        id: "d8",
        speaker: "すずき",
        translations: {
          ja: "なんじからですか？",
          en: "What time does it start?",
          de: "Um wie viel Uhr beginnt sie?"
        }
      },
      {
        id: "d9",
        speaker: "たなか",
        translations: {
          ja: "ごごの 2じからです。",
          en: "From 2 in the afternoon.",
          de: "Ab 14 Uhr nachmittags."
        }
      },
      {
        id: "d10",
        speaker: "すずき",
        translations: {
          ja: "きんようびは いそがしいですか？",
          en: "Are you busy on Friday?",
          de: "Bist du am Freitag beschäftigt?"
        }
      },
      {
        id: "d11",
        speaker: "たなか",
        translations: {
          ja: "はい、きんようびに おおきな かいぎが あります。",
          en: "Yes, there's a big meeting on Friday.",
          de: "Ja, am Freitag gibt es eine große Besprechung."
        }
      },
      {
        id: "d12",
        speaker: "すずき",
        translations: {
          ja: "じゅんびは いつしますか？",
          en: "When will we prepare?",
          de: "Wann bereiten wir uns vor?"
        }
      },
      {
        id: "d13",
        speaker: "たなか",
        translations: {
          ja: "もくようびに じゅんびしましょう。",
          en: "Let's prepare on Thursday.",
          de: "Lass uns am Donnerstag vorbereiten."
        }
      },
      {
        id: "d14",
        speaker: "すずき",
        translations: {
          ja: "わかりました。よろしく おねがいします。",
          en: "Understood. Thank you in advance.",
          de: "Verstanden. Vielen Dank im Voraus."
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：ともだちと やくそくを する",
      en: "Dialogue B: Arranging a Meeting",
      de: "Dialog B: Ein Treffen vereinbaren"
    },
    lines: [
      {
        id: "e1",
        speaker: "あい",
        translations: {
          ja: "こんど いつ あえる？",
          en: "When can we meet next?",
          de: "Wann können wir uns als Nächstes treffen?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "しゅうまつは どう？",
          en: "How about the weekend?",
          de: "Wie wäre es am Wochenende?"
        }
      },
      {
        id: "e3",
        speaker: "あい",
        translations: {
          ja: "どようびは つごうが わるいの。",
          en: "Saturday doesn't work for me.",
          de: "Samstag passt mir nicht."
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "にちようびは どう？",
          en: "What about Sunday?",
          de: "Und Sonntag?"
        }
      },
      {
        id: "e5",
        speaker: "あい",
        translations: {
          ja: "にちようびなら だいじょうぶ！なんじが いい？",
          en: "Sunday works! What time is good?",
          de: "Sonntag geht! Welche Uhrzeit passt dir?"
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "ごごの 3じは どう？",
          en: "How about 3 in the afternoon?",
          de: "Wie wäre es um 15 Uhr nachmittags?"
        }
      },
      {
        id: "e7",
        speaker: "あい",
        translations: {
          ja: "いいね。どこで あう？",
          en: "Sounds good. Where should we meet?",
          de: "Klingt gut. Wo treffen wir uns?"
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "えきの まえは どう？",
          en: "How about in front of the station?",
          de: "Wie wäre es vor dem Bahnhof?"
        }
      },
      {
        id: "e9",
        speaker: "あい",
        translations: {
          ja: "わかった。おくれないでね。",
          en: "Got it. Don't be late.",
          de: "Verstanden. Sei nicht zu spät."
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "だいじょうぶ、はやめに いくよ。",
          en: "It's okay, I'll go early.",
          de: "Kein Problem, ich komme früh."
        }
      },
      {
        id: "e11",
        speaker: "あい",
        translations: {
          ja: "もし へんこうが あったら れんらくして。",
          en: "If there's any change, let me know.",
          de: "Falls sich etwas ändert, sag mir Bescheid."
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "うん、わかった。",
          en: "Yeah, got it.",
          de: "Ja, verstanden."
        }
      },
      {
        id: "e13",
        speaker: "あい",
        translations: {
          ja: "たのしみに してるね！",
          en: "I'm looking forward to it!",
          de: "Ich freue mich darauf!"
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "うん、にちようびに ね！",
          en: "Yeah, see you Sunday!",
          de: "Ja, bis Sonntag!"
        }
      }
    ]
  },
  song: {
    title: {
      ja: "きらきら ぼし",
      en: "Twinkle Twinkle Little Star",
      de: "Funkle, funkle kleiner Stern"
    },
    lines: [
      {
        id: "sg1",
        translations: {
          ja: "きらきら ひかる",
          en: "Twinkle, twinkle, little star",
          de: "Funkle, funkle, kleiner Stern"
        }
      },
      {
        id: "sg2",
        translations: {
          ja: "おそらの ほしよ",
          en: "How I wonder what you are",
          de: "wie ich mich frage, was du bist"
        }
      },
      {
        id: "sg3",
        translations: {
          ja: "まちの うえに たかく",
          en: "Up above the world so high",
          de: "hoch über der Welt"
        }
      },
      {
        id: "sg4",
        translations: {
          ja: "ダイヤモンドの ように",
          en: "Like a diamond in the sky",
          de: "wie ein Diamant am Himmel"
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "じかんの じょし",
        en: "Time Particles",
        de: "Zeitpartikel"
      },
      explanation: {
        ja: "はっきりした じかん（なんじ、なんようび）には「に」を つけます。でも「きょう・あした・きのう」のような そうたいてきな じかんの ことばには「に」を つけません。",
        en: "Specific, absolute times (what hour, what day of the week) take に. But relative time words like きょう (today), あした (tomorrow), きのう (yesterday) take NO particle at all.",
        de: "Bei genauen, absoluten Zeitangaben (Uhrzeit, Wochentag) wird に angehängt. Aber bei relativen Zeitwörtern wie きょう (heute), あした (morgen), きのう (gestern) wird KEIN Partikel benutzt."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "かいぎは 3じに はじまります。",
            en: "The meeting starts at 3 o'clock. (specific time — に)",
            de: "Die Besprechung beginnt um 3 Uhr. (genaue Zeit — に)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "げつようびに あいましょう。",
            en: "Let's meet on Monday. (specific day — に)",
            de: "Lass uns am Montag treffen. (genauer Tag — に)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "きょう かいぎが あります。",
            en: "There's a meeting today. (relative time — no particle)",
            de: "Heute gibt es eine Besprechung. (relative Zeit — kein Partikel)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "あした やくそくが あります。",
            en: "I have an appointment tomorrow. (relative time — no particle)",
            de: "Ich habe morgen einen Termin. (relative Zeit — kein Partikel)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "しゅうまつに やすみます。",
            en: "I'll rest on the weekend. (specific period — に)",
            de: "Ich ruhe mich am Wochenende aus. (genauer Zeitraum — に)"
          }
        },
        {
          id: "g6",
          translations: {
            ja: "きのう おそく ねました。",
            en: "I went to bed late yesterday. (relative time — no particle)",
            de: "Ich bin gestern spät ins Bett gegangen. (relative Zeit — kein Partikel)"
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
        spelling: {
          ja: "「おう」／「おお」",
          en: "おう vs おお spelling (same sound)",
          de: "Schreibweise おう vs おお (gleicher Laut)"
        },
        finaln: {
          ja: "ぶんまつの「ん」",
          en: "Word-final ん",
          de: "Wortfinales ん"
        }
      },
      items: [
        {
          id: "sp1",
          category: "spelling",
          translations: {
            ja: "とうきょう",
            en: "Tokyo (おう spelling)",
            de: "Tokio (おう-Schreibweise)"
          }
        },
        {
          id: "sp2",
          category: "spelling",
          translations: {
            ja: "がっこう",
            en: "school (おう spelling)",
            de: "Schule (おう-Schreibweise)"
          }
        },
        {
          id: "sp3",
          category: "spelling",
          translations: {
            ja: "びょういん",
            en: "hospital (おう spelling)",
            de: "Krankenhaus (おう-Schreibweise)"
          }
        },
        {
          id: "sp4",
          category: "spelling",
          translations: {
            ja: "とおい",
            en: "far (おお spelling)",
            de: "weit (おお-Schreibweise)"
          }
        },
        {
          id: "sp5",
          category: "spelling",
          translations: {
            ja: "こおり",
            en: "ice (おお spelling)",
            de: "Eis (おお-Schreibweise)"
          }
        },
        {
          id: "sp6",
          category: "spelling",
          translations: {
            ja: "おおきい",
            en: "big (おお spelling)",
            de: "groß (おお-Schreibweise)"
          }
        },
        {
          id: "fn1",
          category: "finaln",
          translations: {
            ja: "ほん",
            en: "book (ん at the end of the word)",
            de: "Buch (ん am Wortende)"
          }
        },
        {
          id: "fn2",
          category: "finaln",
          translations: {
            ja: "かばん",
            en: "bag (ん at the end of the word)",
            de: "Tasche (ん am Wortende)"
          }
        },
        {
          id: "fn3",
          category: "finaln",
          translations: {
            ja: "せん",
            en: "line, thousand (ん at the end of the word)",
            de: "Linie, Tausend (ん am Wortende)"
          }
        },
        {
          id: "fn4",
          category: "finaln",
          translations: {
            ja: "にほん",
            en: "Japan (ん at the end of the word)",
            de: "Japan (ん am Wortende)"
          }
        }
      ]
    }
  }
};
