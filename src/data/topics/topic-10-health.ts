import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese10.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicHealth: TopicLesson = {
  id: "topic-10-health",
  lessonNumber: 10,
  topicName: {
    ja: "びょうきと けんこう",
    de: "Gesundheit & Anweisungen",
    en: "Health & Instructions"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "びょうき",
        de: "Krankheit",
        en: "illness, sickness"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "ねつ",
        de: "Fieber",
        en: "fever"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "せき",
        de: "Husten",
        en: "cough"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "あたま",
        de: "Kopf",
        en: "head"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "おなか",
        de: "Bauch",
        en: "stomach"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "のど",
        de: "Hals",
        en: "throat"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "くすり",
        de: "Medikament",
        en: "medicine"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "びょういん",
        de: "Krankenhaus, Klinik",
        en: "hospital, clinic"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "いしゃ",
        de: "Arzt/Ärztin",
        en: "doctor"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "かんごし",
        de: "Krankenpfleger(in)",
        en: "nurse"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "きゅうきゅうしゃ",
        de: "Krankenwagen",
        en: "ambulance"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "けが",
        de: "Verletzung",
        en: "injury"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "ばんそうこう",
        de: "Verband, Pflaster",
        en: "bandage, plaster"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "たいおん",
        de: "Körpertemperatur",
        en: "body temperature"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "アレルギー",
        de: "Allergie",
        en: "allergy"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "びょうしつ",
        de: "Krankenzimmer",
        en: "hospital room"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "いたい",
        de: "wehtun (Adjektiv, verbal gebraucht)",
        en: "to hurt (adjective, used verbally)"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "やすむ",
        de: "sich ausruhen",
        en: "to rest"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "ねる",
        de: "schlafen, sich hinlegen",
        en: "to sleep, lie down"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "くすりを のむ",
        de: "Medikamente einnehmen",
        en: "to take medicine"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "びょういんへ いく",
        de: "ins Krankenhaus gehen",
        en: "to go to the hospital"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "みてもらう",
        de: "sich untersuchen lassen",
        en: "to be examined (by a doctor)"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "しんぱいする",
        de: "sich sorgen",
        en: "to worry"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "なおる",
        de: "genesen, heilen",
        en: "to recover, heal"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "だいじょうぶ",
        de: "okay, in Ordnung",
        en: "okay, fine"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "げんき",
        de: "gesund, wohlauf",
        en: "healthy, well"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "しんぱい",
        de: "besorgt",
        en: "worried"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "つらい",
        de: "schmerzhaft, schwer zu ertragen",
        en: "painful, hard to bear"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "きけん",
        de: "gefährlich",
        en: "dangerous"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "あんぜん",
        de: "sicher",
        en: "safe"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "しごと",
        de: "Arbeit, Job",
        en: "work, job"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "て",
        de: "Hand",
        en: "hand"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "ち",
        de: "Blut",
        en: "blood"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "みず",
        de: "Wasser",
        en: "water"
      }
    },
    {
      id: "v35",
      category: "verb",
      translations: {
        ja: "みせる",
        de: "zeigen",
        en: "to show"
      }
    },
    {
      id: "v36",
      category: "verb",
      translations: {
        ja: "すわる",
        de: "sich setzen",
        en: "to sit"
      }
    },
    {
      id: "v37",
      category: "verb",
      translations: {
        ja: "はる",
        de: "aufkleben, anbringen",
        en: "to apply, stick on"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：びょういんで",
      de: "Dialog A: Beim Arzt",
      en: "Dialogue A: At the Doctor"
    },
    lines: [
      {
        id: "d1",
        speaker: "いしゃ",
        translations: {
          ja: "どうしましたか？",
          de: "Was fehlt Ihnen?",
          en: "What's wrong?"
        }
      },
      {
        id: "d2",
        speaker: "かんじゃ",
        translations: {
          ja: "あたまが いたくて、ねつも あります。",
          de: "Mein Kopf tut weh, und ich habe auch Fieber.",
          en: "My head hurts, and I have a fever too."
        }
      },
      {
        id: "d3",
        speaker: "いしゃ",
        translations: {
          ja: "いつから ですか？",
          de: "Seit wann?",
          en: "Since when?"
        }
      },
      {
        id: "d4",
        speaker: "かんじゃ",
        translations: {
          ja: "きのうの よるから です。",
          de: "Seit gestern Abend.",
          en: "Since last night."
        }
      },
      {
        id: "d5",
        speaker: "いしゃ",
        translations: {
          ja: "せきも ありますか？",
          de: "Haben Sie auch Husten?",
          en: "Do you have a cough too?"
        }
      },
      {
        id: "d6",
        speaker: "かんじゃ",
        translations: {
          ja: "いいえ、せきは ありません。",
          de: "Nein, ich habe keinen Husten.",
          en: "No, I don't have a cough."
        }
      },
      {
        id: "d7",
        speaker: "いしゃ",
        translations: {
          ja: "わかりました。そうですか。この くすりを のんで ください。",
          de: "Verstehe. Bitte nehmen Sie dieses Medikament.",
          en: "I see. Please take this medicine."
        }
      },
      {
        id: "d8",
        speaker: "かんじゃ",
        translations: {
          ja: "はい。いつ のみますか？",
          de: "Gut. Wann soll ich es einnehmen?",
          en: "Okay. When should I take it?"
        }
      },
      {
        id: "d9",
        speaker: "いしゃ",
        translations: {
          ja: "まいにち あさと よる、のんで ください。",
          de: "Nehmen Sie es jeden Tag, morgens und abends.",
          en: "Take it every day, morning and evening."
        }
      },
      {
        id: "d10",
        speaker: "かんじゃ",
        translations: {
          ja: "しごとを やすんだ ほうが いいですか？",
          de: "Soll ich mir bei der Arbeit freinehmen?",
          en: "Should I take a day off work?"
        }
      },
      {
        id: "d11",
        speaker: "いしゃ",
        translations: {
          ja: "はい、きょうは やすんで ください。",
          de: "Ja, ruhen Sie sich heute aus.",
          en: "Yes, please rest today."
        }
      },
      {
        id: "d12",
        speaker: "かんじゃ",
        translations: {
          ja: "わかりました。あした びょういんへ きても いいですか？",
          de: "Verstanden. Darf ich morgen wieder ins Krankenhaus kommen?",
          en: "Understood. May I come back to the hospital tomorrow?"
        }
      },
      {
        id: "d13",
        speaker: "いしゃ",
        translations: {
          ja: "もし まだ ねつが あったら、きて ください。",
          de: "Falls Sie noch Fieber haben, kommen Sie bitte vorbei.",
          en: "If you still have a fever, please come."
        }
      },
      {
        id: "d14",
        speaker: "かんじゃ",
        translations: {
          ja: "はい、わかりました。ありがとうございます。",
          de: "Gut, verstanden. Danke.",
          en: "Okay, understood. Thank you."
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：おうきゅうしょち",
      de: "Dialog B: Erste Hilfe",
      en: "Dialogue B: First Aid"
    },
    lines: [
      {
        id: "e1",
        speaker: "ゆうた",
        translations: {
          ja: "いたい！てを けがしました。",
          de: "Aua! Ich habe mir die Hand verletzt.",
          en: "Ow! I hurt my hand."
        }
      },
      {
        id: "e2",
        speaker: "みか",
        translations: {
          ja: "だいじょうぶ？みせて。",
          de: "Geht es dir gut? Zeig mal.",
          en: "Are you okay? Let me see."
        }
      },
      {
        id: "e3",
        speaker: "ゆうた",
        translations: {
          ja: "ちょっと いたいです。",
          de: "Es tut ein bisschen weh.",
          en: "It hurts a little."
        }
      },
      {
        id: "e4",
        speaker: "みか",
        translations: {
          ja: "ちが でていますね。",
          de: "Du blutest.",
          en: "You're bleeding."
        }
      },
      {
        id: "e5",
        speaker: "ゆうた",
        translations: {
          ja: "ちょっと きけんかもしれません。",
          de: "Das könnte etwas ernst sein.",
          en: "It might be a bit dangerous (serious)."
        }
      },
      {
        id: "e6",
        speaker: "みか",
        translations: {
          ja: "だいじょうぶです。まず、ここに すわって ください。",
          de: "Das ist okay. Setz dich erstmal hierhin.",
          en: "It's okay. First, please sit here."
        }
      },
      {
        id: "e7",
        speaker: "ゆうた",
        translations: {
          ja: "はい、すわりました。",
          de: "Okay, ich sitze.",
          en: "Okay, I'm sitting."
        }
      },
      {
        id: "e8",
        speaker: "みか",
        translations: {
          ja: "それから、みずで あらって ください。",
          de: "Dann wasch es bitte mit Wasser ab.",
          en: "Then, please wash it with water."
        }
      },
      {
        id: "e9",
        speaker: "ゆうた",
        translations: {
          ja: "わかりました。",
          de: "Verstanden.",
          en: "Understood."
        }
      },
      {
        id: "e10",
        speaker: "みか",
        translations: {
          ja: "つぎに、ばんそうこうを はって ください。",
          de: "Als Nächstes, mach bitte ein Pflaster drauf.",
          en: "Next, please put on a bandage."
        }
      },
      {
        id: "e11",
        speaker: "ゆうた",
        translations: {
          ja: "はい。ありがとう。",
          de: "Okay. Danke.",
          en: "Okay. Thank you."
        }
      },
      {
        id: "e12",
        speaker: "みか",
        translations: {
          ja: "まだ いたいですか？",
          de: "Tut es noch weh?",
          en: "Does it still hurt?"
        }
      },
      {
        id: "e13",
        speaker: "ゆうた",
        translations: {
          ja: "すこし いたいです。",
          de: "Ein bisschen.",
          en: "A little."
        }
      },
      {
        id: "e14",
        speaker: "みか",
        translations: {
          ja: "まだ いたかったら、びょういんへ いって ください。",
          de: "Falls es noch wehtut, geh bitte ins Krankenhaus.",
          en: "If it still hurts, please go to the hospital."
        }
      }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "めいれいけい・おねがい",
        de: "Aufforderungen / Bitten",
        en: "Imperatives / Requests"
      },
      explanation: {
        ja: "だれかに なにかを して ほしい とき、どうしの て形に「ください」を つけます。「て形 + ください」は、ていねいな おねがいや めいれいに なります。",
        de: "Wenn man möchte, dass jemand etwas tut, hängt man ください an die te-Form eines Verbs an. „te-Form + ください\" ergibt eine höfliche Bitte oder Anweisung — so geben Ärzte, Krankenpfleger und Freunde im Japanischen tatsächlich Anweisungen, statt der schroffen einfachen Befehlsform.",
        en: "To ask someone to do something, add ください to the te-form of a verb. \"Te-form + ください\" makes a polite request or instruction — this is how doctors, nurses, and friends actually give instructions in Japanese, rather than the blunter plain command form."
      },
      chunks: [
        {
          id: "i1",
          translations: {
            ja: "やすんで ください。",
            de: "Bitte ruhen Sie sich aus.",
            en: "Please rest."
          }
        },
        {
          id: "i2",
          translations: {
            ja: "くすりを のんで ください。",
            de: "Bitte nehmen Sie das Medikament.",
            en: "Please take the medicine."
          }
        },
        {
          id: "i3",
          translations: {
            ja: "びょういんへ いって ください。",
            de: "Bitte gehen Sie ins Krankenhaus.",
            en: "Please go to the hospital."
          }
        },
        {
          id: "i4",
          translations: {
            ja: "ねて ください。",
            de: "Bitte legen Sie sich hin / schlafen Sie.",
            en: "Please lie down / sleep."
          }
        },
        {
          id: "i5",
          translations: {
            ja: "しんぱいしないで ください。",
            de: "Bitte machen Sie sich keine Sorgen. (verneinte Bitte)",
            en: "Please don't worry. (negative request)"
          }
        },
        {
          id: "i6",
          translations: {
            ja: "むりを しないで ください。",
            de: "Bitte überanstrengen Sie sich nicht.",
            en: "Please don't overdo it."
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
        short: {
          ja: "みじかい (短)",
          de: "Kurz",
          en: "Short"
        },
        long: {
          ja: "ながい (長)",
          de: "Lang",
          en: "Long"
        },
        plain: {
          ja: "「っ」なし",
          de: "Ohne っ",
          en: "Without っ"
        },
        sokuon: {
          ja: "「っ」あり",
          de: "Mit っ",
          en: "With っ"
        }
      },
      items: [
        {
          id: "s1",
          category: "short",
          translations: {
            ja: "とる",
            de: "nehmen",
            en: "to take"
          }
        },
        {
          id: "s2",
          category: "short",
          translations: {
            ja: "せき",
            de: "Husten",
            en: "cough"
          }
        },
        {
          id: "s3",
          category: "short",
          translations: {
            ja: "びよういん",
            de: "Schönheitssalon",
            en: "beauty salon"
          }
        },
        {
          id: "n1",
          category: "long",
          translations: {
            ja: "とおる",
            de: "durchqueren, vorbeikommen",
            en: "to pass through"
          }
        },
        {
          id: "n2",
          category: "long",
          translations: {
            ja: "せいき",
            de: "Jahrhundert",
            en: "century"
          }
        },
        {
          id: "n3",
          category: "long",
          translations: {
            ja: "びょういん",
            de: "Krankenhaus",
            en: "hospital"
          }
        },
        {
          id: "p1",
          category: "plain",
          translations: {
            ja: "きて",
            de: "kommen (te-Form)",
            en: "come (te-form)"
          }
        },
        {
          id: "p2",
          category: "plain",
          translations: {
            ja: "かた",
            de: "Schulter / Art und Weise",
            en: "shoulder / way of doing"
          }
        },
        {
          id: "p3",
          category: "plain",
          translations: {
            ja: "おと",
            de: "Geräusch",
            en: "sound"
          }
        },
        {
          id: "p4",
          category: "plain",
          translations: {
            ja: "また",
            de: "wieder",
            en: "again"
          }
        },
        {
          id: "q1",
          category: "sokuon",
          translations: {
            ja: "きって",
            de: "Briefmarke",
            en: "stamp"
          }
        },
        {
          id: "q2",
          category: "sokuon",
          translations: {
            ja: "かった",
            de: "gekauft",
            en: "bought"
          }
        },
        {
          id: "q3",
          category: "sokuon",
          translations: {
            ja: "おっと",
            de: "Ehemann",
            en: "husband"
          }
        },
        {
          id: "q4",
          category: "sokuon",
          translations: {
            ja: "まった",
            de: "gewartet",
            en: "waited"
          }
        }
      ]
    }
  }
};
