import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese10.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicHealth: TopicLesson = {
  id: "topic-a1-10-health",
  lessonNumber: 10,
  topicName: {
    ja: "びょうきと けんこう",
    de: "Gesundheit & Anweisungen",
    en: "Health & Instructions",
    zh: "疾病与健康"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "びょうき",
        de: "Krankheit",
        en: "illness, sickness",
        zh: "疾病"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "ねつ",
        de: "Fieber",
        en: "fever",
        zh: "发烧"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "せき",
        de: "Husten",
        en: "cough",
        zh: "咳嗽"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "あたま",
        de: "Kopf",
        en: "head",
        zh: "头"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "おなか",
        de: "Bauch",
        en: "stomach",
        zh: "肚子"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "のど",
        de: "Hals",
        en: "throat",
        zh: "喉咙"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "くすり",
        de: "Medikament",
        en: "medicine",
        zh: "药"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "びょういん",
        de: "Krankenhaus, Klinik",
        en: "hospital, clinic",
        zh: "医院"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "いしゃ",
        de: "Arzt/Ärztin",
        en: "doctor",
        zh: "医生"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "かんごし",
        de: "Krankenpfleger(in)",
        en: "nurse",
        zh: "护士"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "きゅうきゅうしゃ",
        de: "Krankenwagen",
        en: "ambulance",
        zh: "救护车"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "けが",
        de: "Verletzung",
        en: "injury",
        zh: "受伤"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "ばんそうこう",
        de: "Verband, Pflaster",
        en: "bandage, plaster",
        zh: "创可贴"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "たいおん",
        de: "Körpertemperatur",
        en: "body temperature",
        zh: "体温"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "アレルギー",
        de: "Allergie",
        en: "allergy",
        zh: "过敏"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "びょうしつ",
        de: "Krankenzimmer",
        en: "hospital room",
        zh: "病房"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "いたい",
        de: "wehtun (Adjektiv, verbal gebraucht)",
        en: "to hurt (adjective, used verbally)",
        zh: "疼"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "やすむ",
        de: "sich ausruhen",
        en: "to rest",
        zh: "休息"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "ねる",
        de: "schlafen, sich hinlegen",
        en: "to sleep, lie down",
        zh: "睡觉，躺下"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "くすりを のむ",
        de: "Medikamente einnehmen",
        en: "to take medicine",
        zh: "吃药"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "びょういんへ いく",
        de: "ins Krankenhaus gehen",
        en: "to go to the hospital",
        zh: "去医院"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "みてもらう",
        de: "sich untersuchen lassen",
        en: "to be examined (by a doctor)",
        zh: "接受检查（看医生）"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "しんぱいする",
        de: "sich sorgen",
        en: "to worry",
        zh: "担心"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "なおる",
        de: "genesen, heilen",
        en: "to recover, heal",
        zh: "痊愈"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "だいじょうぶ",
        de: "okay, in Ordnung",
        en: "okay, fine",
        zh: "没事，可以"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "げんき",
        de: "gesund, wohlauf",
        en: "healthy, well",
        zh: "健康，精神好"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "しんぱい",
        de: "besorgt",
        en: "worried",
        zh: "担心的"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "つらい",
        de: "schmerzhaft, schwer zu ertragen",
        en: "painful, hard to bear",
        zh: "痛苦，难受"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "きけん",
        de: "gefährlich",
        en: "dangerous",
        zh: "危险"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "あんぜん",
        de: "sicher",
        en: "safe",
        zh: "安全"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "しごと",
        de: "Arbeit, Job",
        en: "work, job",
        zh: "工作"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "て",
        de: "Hand",
        en: "hand",
        zh: "手"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "ち",
        de: "Blut",
        en: "blood",
        zh: "血"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "みず",
        de: "Wasser",
        en: "water",
        zh: "水"
      }
    },
    {
      id: "v35",
      category: "verb",
      translations: {
        ja: "みせる",
        de: "zeigen",
        en: "to show",
        zh: "给……看"
      }
    },
    {
      id: "v36",
      category: "verb",
      translations: {
        ja: "すわる",
        de: "sich setzen",
        en: "to sit",
        zh: "坐"
      }
    },
    {
      id: "v37",
      category: "verb",
      translations: {
        ja: "はる",
        de: "aufkleben, anbringen",
        en: "to apply, stick on",
        zh: "贴上"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：びょういんで",
      de: "Dialog A: Beim Arzt",
      en: "Dialogue A: At the Doctor",
      zh: "会话：在医院"
    },
    lines: [
      {
        id: "d1",
        speaker: "いしゃ",
        translations: {
          ja: "どうしましたか？",
          de: "Was fehlt Ihnen?",
          en: "What's wrong?",
          zh: "怎么了？"
        }
      },
      {
        id: "d2",
        speaker: "かんじゃ",
        translations: {
          ja: "あたまが いたくて、ねつも あります。",
          de: "Mein Kopf tut weh, und ich habe auch Fieber.",
          en: "My head hurts, and I have a fever too.",
          zh: "头疼，还发烧。"
        }
      },
      {
        id: "d3",
        speaker: "いしゃ",
        translations: {
          ja: "いつから ですか？",
          de: "Seit wann?",
          en: "Since when?",
          zh: "从什么时候开始的？"
        }
      },
      {
        id: "d4",
        speaker: "かんじゃ",
        translations: {
          ja: "きのうの よるから です。",
          de: "Seit gestern Abend.",
          en: "Since last night.",
          zh: "从昨晚开始的。"
        }
      },
      {
        id: "d5",
        speaker: "いしゃ",
        translations: {
          ja: "せきも ありますか？",
          de: "Haben Sie auch Husten?",
          en: "Do you have a cough too?",
          zh: "也咳嗽吗？"
        }
      },
      {
        id: "d6",
        speaker: "かんじゃ",
        translations: {
          ja: "いいえ、せきは ありません。",
          de: "Nein, ich habe keinen Husten.",
          en: "No, I don't have a cough.",
          zh: "不，没有咳嗽。"
        }
      },
      {
        id: "d7",
        speaker: "いしゃ",
        translations: {
          ja: "わかりました。そうですか。この くすりを のんで ください。",
          de: "Verstehe. Bitte nehmen Sie dieses Medikament.",
          en: "I see. Please take this medicine.",
          zh: "我明白了。请吃这个药。"
        }
      },
      {
        id: "d8",
        speaker: "かんじゃ",
        translations: {
          ja: "はい。いつ のみますか？",
          de: "Gut. Wann soll ich es einnehmen?",
          en: "Okay. When should I take it?",
          zh: "好的。什么时候吃？"
        }
      },
      {
        id: "d9",
        speaker: "いしゃ",
        translations: {
          ja: "まいにち あさと よる、のんで ください。",
          de: "Nehmen Sie es jeden Tag, morgens und abends.",
          en: "Take it every day, morning and evening.",
          zh: "请每天早晚各吃一次。"
        }
      },
      {
        id: "d10",
        speaker: "かんじゃ",
        translations: {
          ja: "しごとを やすんだ ほうが いいですか？",
          de: "Soll ich mir bei der Arbeit freinehmen?",
          en: "Should I take a day off work?",
          zh: "要请假不上班比较好吗？"
        }
      },
      {
        id: "d11",
        speaker: "いしゃ",
        translations: {
          ja: "はい、きょうは やすんで ください。",
          de: "Ja, ruhen Sie sich heute aus.",
          en: "Yes, please rest today.",
          zh: "是的，今天请休息。"
        }
      },
      {
        id: "d12",
        speaker: "かんじゃ",
        translations: {
          ja: "わかりました。あした びょういんへ きても いいですか？",
          de: "Verstanden. Darf ich morgen wieder ins Krankenhaus kommen?",
          en: "Understood. May I come back to the hospital tomorrow?",
          zh: "明白了。明天可以再来医院吗？"
        }
      },
      {
        id: "d13",
        speaker: "いしゃ",
        translations: {
          ja: "もし まだ ねつが あったら、きて ください。",
          de: "Falls Sie noch Fieber haben, kommen Sie bitte vorbei.",
          en: "If you still have a fever, please come.",
          zh: "如果还发烧的话，请再来。"
        }
      },
      {
        id: "d14",
        speaker: "かんじゃ",
        translations: {
          ja: "はい、わかりました。ありがとうございます。",
          de: "Gut, verstanden. Danke.",
          en: "Okay, understood. Thank you.",
          zh: "好的，明白了。谢谢您。"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：おうきゅうしょち",
      de: "Dialog B: Erste Hilfe",
      en: "Dialogue B: First Aid",
      zh: "会话：急救"
    },
    lines: [
      {
        id: "e1",
        speaker: "ゆうた",
        translations: {
          ja: "いたい！てを けがしました。",
          de: "Aua! Ich habe mir die Hand verletzt.",
          en: "Ow! I hurt my hand.",
          zh: "疼！我的手受伤了。"
        }
      },
      {
        id: "e2",
        speaker: "みか",
        translations: {
          ja: "だいじょうぶ？みせて。",
          de: "Geht es dir gut? Zeig mal.",
          en: "Are you okay? Let me see.",
          zh: "你没事吧？给我看看。"
        }
      },
      {
        id: "e3",
        speaker: "ゆうた",
        translations: {
          ja: "ちょっと いたいです。",
          de: "Es tut ein bisschen weh.",
          en: "It hurts a little.",
          zh: "有点疼。"
        }
      },
      {
        id: "e4",
        speaker: "みか",
        translations: {
          ja: "ちが でていますね。",
          de: "Du blutest.",
          en: "You're bleeding.",
          zh: "在流血呢。"
        }
      },
      {
        id: "e5",
        speaker: "ゆうた",
        translations: {
          ja: "ちょっと きけんかもしれません。",
          de: "Das könnte etwas ernst sein.",
          en: "It might be a bit dangerous (serious).",
          zh: "可能有点危险。"
        }
      },
      {
        id: "e6",
        speaker: "みか",
        translations: {
          ja: "だいじょうぶです。まず、ここに すわって ください。",
          de: "Das ist okay. Setz dich erstmal hierhin.",
          en: "It's okay. First, please sit here.",
          zh: "没事的。首先，请坐在这里。"
        }
      },
      {
        id: "e7",
        speaker: "ゆうた",
        translations: {
          ja: "はい、すわりました。",
          de: "Okay, ich sitze.",
          en: "Okay, I'm sitting.",
          zh: "好的，坐好了。"
        }
      },
      {
        id: "e8",
        speaker: "みか",
        translations: {
          ja: "それから、みずで あらって ください。",
          de: "Dann wasch es bitte mit Wasser ab.",
          en: "Then, please wash it with water.",
          zh: "然后，请用水冲洗。"
        }
      },
      {
        id: "e9",
        speaker: "ゆうた",
        translations: {
          ja: "わかりました。",
          de: "Verstanden.",
          en: "Understood.",
          zh: "明白了。"
        }
      },
      {
        id: "e10",
        speaker: "みか",
        translations: {
          ja: "つぎに、ばんそうこうを はって ください。",
          de: "Als Nächstes, mach bitte ein Pflaster drauf.",
          en: "Next, please put on a bandage.",
          zh: "接下来，请贴上创可贴。"
        }
      },
      {
        id: "e11",
        speaker: "ゆうた",
        translations: {
          ja: "はい。ありがとう。",
          de: "Okay. Danke.",
          en: "Okay. Thank you.",
          zh: "好的。谢谢。"
        }
      },
      {
        id: "e12",
        speaker: "みか",
        translations: {
          ja: "まだ いたいですか？",
          de: "Tut es noch weh?",
          en: "Does it still hurt?",
          zh: "还疼吗？"
        }
      },
      {
        id: "e13",
        speaker: "ゆうた",
        translations: {
          ja: "すこし いたいです。",
          de: "Ein bisschen.",
          en: "A little.",
          zh: "有点疼。"
        }
      },
      {
        id: "e14",
        speaker: "みか",
        translations: {
          ja: "まだ いたかったら、びょういんへ いって ください。",
          de: "Falls es noch wehtut, geh bitte ins Krankenhaus.",
          en: "If it still hurts, please go to the hospital.",
          zh: "如果还疼的话，请去医院。"
        }
      }
    ]
  },
  song: {
    // Row 10 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat so every lesson has a song.
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
    },
    de: {
      title: {
        de: "Imperativ",
        en: "Imperatives",
        ja: "めいれいけい"
      },
      explanation: {
        de: "Der deutsche Imperativ hat drei Formen, je nachdem, wen man anspricht. du-Form: Pronomen weglassen, oft auch die Endung -st (du ruhst → Ruh dich aus!). ihr-Form: die normale ihr-Form ohne Pronomen (ihr geht → Geht!). Höfliche Sie-Form: Verb und Sie tauschen die Reihenfolge (Sie gehen → Gehen Sie!).",
        en: "German has three imperative forms depending on who you're addressing. du-form: drop the pronoun, often the -st ending too (du ruhst → Ruh dich aus!). ihr-form: the normal ihr-form without the pronoun (ihr geht → Geht!). Polite Sie-form: verb and Sie swap order (Sie gehen → Gehen Sie!).",
        ja: "ドイツごの めいれいけいは、だれに はなすかで 3しゅるい あります。du-けい：だいめいしを はぶき、-st も おおくは はぶきます（du ruhst → Ruh dich aus!）。ihr-けい：だいめいしなしの ふつうの ihr-けい（ihr geht → Geht!）。ていねいな Sie-けい：どうしと Sie の じゅんばんを いれかえます（Sie gehen → Gehen Sie!）。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Ruh dich aus!",
            en: "Rest! (du-imperative)",
            ja: "やすんで ください！（du-けい）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Schlaf gut!",
            en: "Sleep well! (du-imperative)",
            ja: "よく ねて ください！（du-けい）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Legen Sie sich hin!",
            en: "Lie down! (formal Sie-imperative)",
            ja: "よこに なって ください！（ていねいな Sie-けい）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Nehmen Sie die Medikamente ein!",
            en: "Take the medicine! (formal Sie-imperative)",
            ja: "くすりを のんで ください！（ていねいな Sie-けい）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Geht ins Krankenhaus!",
            en: "Go to the hospital! (ihr-imperative, plural)",
            ja: "びょういんに いって ください！（ihr-けい、ふくすう）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Machen Sie sich keine Sorgen!",
            en: "Don't worry! (formal Sie-imperative, negative)",
            ja: "しんぱいしないで ください！（ていねいな Sie-けい、ひてい）"
          }
        }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-imperativ",
        title: { de: "Übung: Imperativ", en: "Practice: Imperatives", ja: "れんしゅう：めいれいけい", zh: "练习：命令式" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze im Imperativ.",
          en: "Next, let's practice example sentences using the imperative.",
          ja: "つぎは、めいれいけいを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用命令式的例句。"
        },
        lines: [
          { id: "im1", translations: { de: "Ruh dich aus!", en: "Rest! (du-form)", ja: "やすんで ください！（du-けい）", zh: "休息一下！（du形）" } },
          { id: "im2", translations: { de: "Nimm das Medikament!", en: "Take the medicine! (du-form)", ja: "くすりを のんで ください！（du-けい）", zh: "吃药！（du形）" } },
          { id: "im3", translations: { de: "Geh ins Krankenhaus!", en: "Go to the hospital! (du-form)", ja: "びょういんへ いって ください！（du-けい）", zh: "去医院！（du形）" } },
          { id: "im4", translations: { de: "Schlaft gut!", en: "Sleep well! (ihr-form)", ja: "よく ねてくださいね！（ihr-けい）", zh: "好好睡觉！（ihr形）" } },
          { id: "im5", translations: { de: "Macht euch keine Sorgen!", en: "Don't worry! (ihr-form)", ja: "しんぱいしないで！（ihr-けい）", zh: "别担心！（ihr形）" } },
          { id: "im6", translations: { de: "Lassen Sie sich untersuchen!", en: "Get examined! (Sie, polite)", ja: "みてもらって ください！（Sie、ていねい）", zh: "请去检查一下！（Sie，礼貌形式）" } },
          { id: "im7", translations: { de: "Zeigen Sie mir Ihre Hand!", en: "Show me your hand! (Sie, polite)", ja: "てを みせて ください！（Sie、ていねい）", zh: "请给我看看您的手！（Sie，礼貌形式）" } },
          { id: "im8", translations: { de: "Setz dich hin!", en: "Sit down! (du-form)", ja: "すわって ください！（du-けい）", zh: "坐下！（du形）" } },
          { id: "im9", translations: { de: "Bleibt sicher!", en: "Stay safe! (ihr-form)", ja: "あんぜんに して くださいね！（ihr-けい）", zh: "保持安全！（ihr形）" } },
          { id: "im10", translations: { de: "Rufen Sie den Krankenwagen!", en: "Call the ambulance! (Sie, polite)", ja: "きゅうきゅうしゃを よんで ください！（Sie、ていねい）", zh: "请叫救护车！（Sie，礼貌形式）" } }
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
    },
    de: {
      title: {
        de: "Aussprachetraining",
        en: "Pronunciation Practice",
        ja: "はつおんの れんしゅう"
      },
      groupLabels: {
        n_ng: {
          de: "N vs. NG",
          en: "N vs. NG",
          ja: "N と NG"
        },
        devoicing: {
          de: "Auslautverhärtung, vertieft: b/d/g am Wortende klingen wie p/t/k",
          en: "Final devoicing, reinforced: b/d/g at word end sound like p/t/k",
          ja: "ごびの むせいか（ふくしゅう）：ごびの b/d/g は p/t/k のように きこえる"
        }
      },
      items: [
        {
          id: "n1",
          category: "n_ng",
          translations: {
            de: "Verband",
            en: "bandage (plain N)",
            ja: "ほうたい（ふつうの N）"
          }
        },
        {
          id: "n2",
          category: "n_ng",
          translations: {
            de: "Medikament",
            en: "medicine (plain N)",
            ja: "くすり（ふつうの N）"
          }
        },
        {
          id: "ng1",
          category: "n_ng",
          translations: {
            de: "Übung",
            en: "exercise, practice (NG)",
            ja: "れんしゅう（NG）"
          }
        },
        {
          id: "ng2",
          category: "n_ng",
          translations: {
            de: "Achtung",
            en: "caution, attention (NG)",
            ja: "ちゅうい（NG）"
          }
        },
        {
          id: "dv1",
          category: "devoicing",
          translations: {
            de: "gesund",
            en: "healthy (final d sounds like t)",
            ja: "けんこうな（ごびの d は t のよう）"
          }
        },
        {
          id: "dv2",
          category: "devoicing",
          translations: {
            de: "Grad",
            en: "degree (final d sounds like t)",
            ja: "ど（おんど）（ごびの d は t のよう）"
          }
        }
      ]
    }
  }
};
