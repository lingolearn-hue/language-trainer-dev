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
    },
    de: {
      title: {
        de: "Zeitpräpositionen",
        en: "Prepositions of Time",
        ja: "じかんの ぜんちし"
      },
      explanation: {
        de: "um steht bei Uhrzeiten (um neun Uhr). am steht bei Tagen und Tagesabschnitten (am Montag, am Vormittag). im steht bei Monaten und Jahreszeiten (im Winter). vor und nach beschreiben \"before\"/\"after\" einer Zeit oder eines Ereignisses. zwischen ... und beschreibt eine Zeitspanne.",
        en: "um is used with clock times (um neun Uhr). am is used with days and parts of the day (am Montag, am Vormittag). im is used with months and seasons (im Winter). vor and nach describe \"before\"/\"after\" a time or event. zwischen ... und describes a time range.",
        ja: "um は じこくに つかいます（um neun Uhr）。am は ようびや いちにちの じかんたいに つかいます（am Montag、am Vormittag）。im は つきや きせつに つかいます（im Winter）。vor と nach は じこくや できごとの「まえ」「あと」を あらわします。zwischen ... und は きかんを あらわします。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Um neun Uhr beginnt die Besprechung.",
            en: "The meeting starts at nine o'clock. (um + clock time)",
            ja: "くじに かいぎが はじまります。（um + じこく）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Am Wochenende bin ich frei.",
            en: "I'm free on the weekend. (am + day-type period)",
            ja: "しゅうまつは ひまです。（am + きかん）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Am Vormittag habe ich Zeit.",
            en: "I have time in the morning. (am + part of day)",
            ja: "ごぜんちゅうは じかんが あります。（am + いちにちの じかんたい）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Vor der Besprechung bereite ich mich vor.",
            en: "I prepare before the meeting. (vor + noun)",
            ja: "かいぎの まえに じゅんびします。（vor + めいし）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Nach dem Treffen habe ich frei.",
            en: "I'm free after the meeting. (nach + noun)",
            ja: "かいぎの あとは ひまです。（nach + めいし）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Zwischen zwei und drei Uhr habe ich Zeit.",
            en: "I have time between two and three o'clock. (zwischen ... und)",
            ja: "にじから さんじの あいだ じかんが あります。（zwischen ... und）"
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
    },
    de: {
      title: {
        de: "Aussprachetraining",
        en: "Pronunciation Practice",
        ja: "はつおんの れんしゅう"
      },
      groupLabels: {
        h: {
          de: "H gesprochen vs. stumm (Dehnungs-H)",
          en: "H pronounced vs. silent (vowel-lengthening H)",
          ja: "はつおんされる H と むおんの H（ぼいん を のばす H）"
        },
        ch: {
          de: "CH in Buch vs. ich, revisited",
          en: "CH in Buch vs. ich, revisited",
          ja: "Buch と ich の CH（ふくしゅう）"
        }
      },
      items: [
        {
          id: "h1",
          category: "h",
          translations: {
            de: "heute",
            en: "today (H pronounced, syllable-initial)",
            ja: "きょう（H は はつおんされる）"
          }
        },
        {
          id: "h2",
          category: "h",
          translations: {
            de: "Uhr",
            en: "clock, o'clock (H silent, lengthens the U)",
            ja: "とけい（H は むおん、U を のばす）"
          }
        },
        {
          id: "h3",
          category: "h",
          translations: {
            de: "früh",
            en: "early (H silent, lengthens the Ü)",
            ja: "はやい（H は むおん、Ü を のばす）"
          }
        },
        {
          id: "ch1",
          category: "ch",
          translations: {
            de: "Woche",
            en: "week (Ich-laut — CH after e)",
            ja: "しゅう（Ich-Laut — e の あとの CH）"
          }
        },
        {
          id: "ch2",
          category: "ch",
          translations: {
            de: "Buch",
            en: "book (Ach-laut — CH after u, the classic contrast pair with ich)",
            ja: "ほん（Ach-Laut — u の あとの CH、ich との だいひょうてきな たいひ）"
          }
        }
      ]
    }
  },
  pronunciationDrills: {
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
          h_spoken: { de: "H gesprochen", en: "H pronounced", ja: "はつおんされる H", zh: "发音的H" },
          h_silent: { de: "H stumm", en: "H silent", ja: "むおんの H", zh: "不发音的H" },
          ich: { de: "Ich-Laut /ç/", en: "Ich-laut /ç/", ja: "Ich-Laut /ç/", zh: "Ich音 /ç/" },
          ach: { de: "Ach-Laut /x/", en: "Ach-laut /x/", ja: "Ach-Laut /x/", zh: "Ach音 /x/" }
        },
        items: [
          { id: "hs1", category: "h_spoken", translations: { de: "Haus", en: "house", ja: "いえ", zh: "房子" } },
          { id: "hs2", category: "h_spoken", translations: { de: "Hand", en: "hand", ja: "て", zh: "手" } },
          { id: "hs3", category: "h_spoken", translations: { de: "Hund", en: "dog", ja: "いぬ", zh: "狗" } },
          { id: "hs4", category: "h_spoken", translations: { de: "Hals", en: "neck, throat", ja: "くび", zh: "脖子" } },
          { id: "hs5", category: "h_spoken", translations: { de: "Haar", en: "hair", ja: "かみのけ", zh: "头发" } },
          { id: "hs6", category: "h_spoken", translations: { de: "Hase", en: "rabbit, hare", ja: "うさぎ", zh: "兔子" } },
          { id: "hs7", category: "h_spoken", translations: { de: "Hafen", en: "harbor", ja: "みなと", zh: "港口" } },
          { id: "hs8", category: "h_spoken", translations: { de: "haben", en: "to have", ja: "もつ", zh: "拥有" } },
          { id: "hs9", category: "h_spoken", translations: { de: "heute", en: "today", ja: "きょう", zh: "今天" } },
          { id: "hs10", category: "h_spoken", translations: { de: "helfen", en: "to help", ja: "たすける", zh: "帮助" } },
          { id: "hs11", category: "h_spoken", translations: { de: "holen", en: "to fetch, get", ja: "とりにいく", zh: "去取" } },
          { id: "hs12", category: "h_spoken", translations: { de: "hören", en: "to hear", ja: "きく", zh: "听" } },
          { id: "hs13", category: "h_spoken", translations: { de: "Hunger", en: "hunger", ja: "くうふく", zh: "饥饿" } },
          { id: "hs14", category: "h_spoken", translations: { de: "Himmel", en: "sky, heaven", ja: "そら", zh: "天空" } },

          { id: "hst1", category: "h_silent", translations: { de: "sehen", en: "to see", ja: "みる", zh: "看" } },
          { id: "hst2", category: "h_silent", translations: { de: "gehen", en: "to go", ja: "いく", zh: "去" } },
          { id: "hst3", category: "h_silent", translations: { de: "stehen", en: "to stand", ja: "たつ", zh: "站立" } },
          { id: "hst4", category: "h_silent", translations: { de: "zehn", en: "ten", ja: "じゅう", zh: "十" } },
          { id: "hst5", category: "h_silent", translations: { de: "nehmen", en: "to take", ja: "とる", zh: "拿" } },
          { id: "hst6", category: "h_silent", translations: { de: "Zahl", en: "number", ja: "かず", zh: "数字" } },
          { id: "hst7", category: "h_silent", translations: { de: "fahren", en: "to drive, go", ja: "のる、うんてんする", zh: "乘坐；驾驶" } },
          { id: "hst8", category: "h_silent", translations: { de: "wohnen", en: "to live, reside", ja: "すむ", zh: "居住" } },
          { id: "hst9", category: "h_silent", translations: { de: "fühlen", en: "to feel", ja: "かんじる", zh: "感觉" } },
          { id: "hst10", category: "h_silent", translations: { de: "erzählen", en: "to tell, narrate", ja: "はなす", zh: "讲述" } },
          { id: "hst11", category: "h_silent", translations: { de: "fehlen", en: "to be missing", ja: "たりない", zh: "缺少" } },
          { id: "hst12", category: "h_silent", translations: { de: "bezahlen", en: "to pay", ja: "はらう", zh: "支付" } },
          { id: "hst13", category: "h_silent", translations: { de: "verstehen", en: "to understand", ja: "りかいする", zh: "理解" } },
          { id: "hst14", category: "h_silent", translations: { de: "sehen", en: "to see", ja: "みる", zh: "看" } },

          { id: "ic1", category: "ich", translations: { de: "ich", en: "I", ja: "わたし", zh: "我" } },
          { id: "ic2", category: "ich", translations: { de: "nicht", en: "not", ja: "〜ない", zh: "不" } },
          { id: "ic3", category: "ich", translations: { de: "Licht", en: "light", ja: "ひかり", zh: "光" } },
          { id: "ic4", category: "ich", translations: { de: "mich", en: "me", ja: "わたしを", zh: "我（宾格）" } },
          { id: "ic5", category: "ich", translations: { de: "sicher", en: "safe, certain", ja: "あんぜんな、たしかな", zh: "安全的；确定的" } },
          { id: "ic6", category: "ich", translations: { de: "wichtig", en: "important", ja: "じゅうような", zh: "重要的" } },
          { id: "ic7", category: "ich", translations: { de: "richtig", en: "correct", ja: "ただしい", zh: "正确的" } },
          { id: "ic8", category: "ich", translations: { de: "Geschichte", en: "history, story", ja: "れきし、ものがたり", zh: "历史；故事" } },
          { id: "ic9", category: "ich", translations: { de: "Mädchen", en: "girl", ja: "おんなのこ", zh: "女孩" } },
          { id: "ic10", category: "ich", translations: { de: "rechnen", en: "to calculate", ja: "けいさんする", zh: "计算" } },
          { id: "ic11", category: "ich", translations: { de: "sprechen", en: "to speak", ja: "はなす", zh: "说话" } },
          { id: "ic12", category: "ich", translations: { de: "welche", en: "which", ja: "どの、どれ", zh: "哪个" } },
          { id: "ic13", category: "ich", translations: { de: "Milch", en: "milk", ja: "ぎゅうにゅう", zh: "牛奶" } },
          { id: "ic14", category: "ich", translations: { de: "Teich", en: "pond", ja: "いけ", zh: "池塘" } },

          { id: "ac1", category: "ach", translations: { de: "ach", en: "oh (interjection)", ja: "ああ", zh: "啊（感叹词）" } },
          { id: "ac2", category: "ach", translations: { de: "machen", en: "to make, do", ja: "する", zh: "做" } },
          { id: "ac3", category: "ach", translations: { de: "Bach", en: "stream, brook", ja: "おがわ", zh: "小溪" } },
          { id: "ac4", category: "ach", translations: { de: "Dach", en: "roof", ja: "やね", zh: "屋顶" } },
          { id: "ac5", category: "ach", translations: { de: "Nacht", en: "night", ja: "よる", zh: "夜晚" } },
          { id: "ac6", category: "ach", translations: { de: "Sache", en: "thing, matter", ja: "もの、こと", zh: "事情；东西" } },
          { id: "ac7", category: "ach", translations: { de: "lachen", en: "to laugh", ja: "わらう", zh: "笑" } },
          { id: "ac8", category: "ach", translations: { de: "suchen", en: "to search", ja: "さがす", zh: "寻找" } },
          { id: "ac9", category: "ach", translations: { de: "Buch", en: "book", ja: "ほん", zh: "书" } },
          { id: "ac10", category: "ach", translations: { de: "Kuchen", en: "cake", ja: "ケーキ", zh: "蛋糕" } },
          { id: "ac11", category: "ach", translations: { de: "hoch", en: "high", ja: "たかい", zh: "高的" } },
          { id: "ac12", category: "ach", translations: { de: "doch", en: "however, yet", ja: "でも", zh: "但是" } },
          { id: "ac13", category: "ach", translations: { de: "noch", en: "still, yet", ja: "まだ", zh: "还" } },
          { id: "ac14", category: "ach", translations: { de: "kochen", en: "to cook", ja: "りょうりする", zh: "做饭" } }
        ]
      }
    ]
  }
};
