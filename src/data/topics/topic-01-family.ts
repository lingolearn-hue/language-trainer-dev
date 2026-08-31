import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese1.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicFamily: TopicLesson = {
  id: "topic-01-family",
  lessonNumber: 1,
  topicName: {
    ja: "かぞく",
    zh: "家庭",
    de: "Familie",
    en: "Family"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "かぞく",
        zh: "家庭",
        de: "Familie",
        en: "family"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "おとうさん",
        zh: "爸爸（他人的／称呼自己的）",
        de: "Vater (fremder / eigener, in Anrede)",
        en: "father (someone else's / addressing your own)"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "おかあさん",
        zh: "妈妈（他人的／称呼自己的）",
        de: "Mutter (fremde / eigene, in Anrede)",
        en: "mother (someone else's / addressing your own)"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "おにいさん",
        zh: "哥哥（他人的／称呼自己的）",
        de: "älterer Bruder (fremder / eigener, in Anrede)",
        en: "older brother (someone else's / addressing your own)"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "おねえさん",
        zh: "姐姐（他人的／称呼自己的）",
        de: "ältere Schwester (fremde / eigene, in Anrede)",
        en: "older sister (someone else's / addressing your own)"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "おとうと",
        zh: "弟弟（自己的）",
        de: "jüngerer Bruder (eigener)",
        en: "younger brother (own)"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "いもうと",
        zh: "妹妹（自己的）",
        de: "jüngere Schwester (eigene)",
        en: "younger sister (own)"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "そふ",
        zh: "爷爷（自己的）",
        de: "Großvater (eigener)",
        en: "grandfather (own)"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "そぼ",
        zh: "奶奶（自己的）",
        de: "Großmutter (eigene)",
        en: "grandmother (own)"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "むすこ",
        zh: "儿子",
        de: "Sohn",
        en: "son"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "むすめ",
        zh: "女儿",
        de: "Tochter",
        en: "daughter"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "おっと",
        zh: "丈夫（自己的）",
        de: "Ehemann (eigener)",
        en: "husband (own)"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "つま",
        zh: "妻子（自己的）",
        de: "Ehefrau (eigene)",
        en: "wife (own)"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "きょうだい",
        zh: "兄弟姐妹",
        de: "Geschwister",
        en: "siblings"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "りょうしん",
        zh: "父母",
        de: "Eltern",
        en: "parents"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "ペット",
        zh: "宠物",
        de: "Haustier",
        en: "pet"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "いる",
        zh: "有／存在（有生命）",
        de: "haben / existieren (belebt)",
        en: "to have / to exist (animate)"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "ある",
        zh: "有／存在（无生命）",
        de: "haben / existieren (unbelebt)",
        en: "to have / to exist (inanimate)"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "すむ",
        zh: "居住",
        de: "wohnen",
        en: "to live (reside)"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "しょうかいする",
        zh: "介绍",
        de: "vorstellen",
        en: "to introduce"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "にる",
        zh: "相似",
        de: "ähneln",
        en: "to resemble"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "そだてる",
        zh: "抚养",
        de: "großziehen",
        en: "to raise (a child)"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "あう",
        zh: "见面",
        de: "treffen",
        en: "to meet"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "はなす",
        zh: "说话",
        de: "reden, sprechen",
        en: "to talk"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "おおきい",
        zh: "大（家庭、房子）",
        de: "groß (Familie, Haus)",
        en: "big (family, house)"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "ちいさい",
        zh: "小",
        de: "klein",
        en: "small"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "やさしい",
        zh: "友善",
        de: "freundlich",
        en: "kind"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "きびしい",
        zh: "严格",
        de: "streng",
        en: "strict"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "にぎやか",
        zh: "热闹",
        de: "lebhaft",
        en: "lively"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "しずか",
        zh: "安静",
        de: "ruhig",
        en: "quiet"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "ちち",
        zh: "爸爸（自己的，对外人说时用）",
        de: "Vater (eigener)",
        en: "father (own, used when talking about your own to others)"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "はは",
        zh: "妈妈（自己的，对外人说时用）",
        de: "Mutter (eigene)",
        en: "mother (own, used when talking about your own to others)"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "がくせい",
        zh: "学生",
        de: "Student(in), Schüler(in)",
        en: "student"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "せんせい",
        zh: "老师",
        de: "Lehrer(in)",
        en: "teacher"
      }
    },
    {
      id: "v35",
      category: "noun",
      translations: {
        ja: "なまえ",
        zh: "名字",
        de: "Name",
        en: "name"
      }
    },
    {
      id: "v36",
      category: "noun",
      translations: {
        ja: "いぬ",
        zh: "狗",
        de: "Hund",
        en: "dog"
      }
    },
    {
      id: "v37",
      category: "noun",
      translations: {
        ja: "ねこ",
        zh: "猫",
        de: "Katze",
        en: "cat"
      }
    },
    {
      id: "v38",
      category: "verb",
      translations: {
        ja: "はたらく",
        zh: "工作",
        de: "arbeiten",
        en: "to work"
      }
    },
    {
      id: "v39",
      category: "verb",
      translations: {
        ja: "さんぽする",
        zh: "散步",
        de: "spazieren gehen",
        en: "to take a walk"
      }
    },
    {
      id: "v40",
      category: "adjective",
      translations: {
        ja: "かわいい",
        zh: "可爱",
        de: "süß, niedlich",
        en: "cute"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：かぞくを しょうかいする",
      zh: "对话A：介绍家人",
      de: "Dialog A: Die Familie vorstellen",
      en: "Dialogue A: Introducing Family"
    },
    lines: [
      {
        id: "d1",
        speaker: "あい",
        translations: {
          ja: "これは わたしの かぞくの しゃしんです。",
          zh: "这是我家的照片。",
          de: "Das ist ein Foto meiner Familie.",
          en: "This is a photo of my family."
        }
      },
      {
        id: "d2",
        speaker: "けん",
        translations: {
          ja: "いいですね！なんにん かぞくですか？",
          zh: "真好！你家有几口人？",
          de: "Schön! Wie viele Personen hat deine Familie?",
          en: "Nice! How many people are in your family?"
        }
      },
      {
        id: "d3",
        speaker: "あい",
        translations: {
          ja: "よにんです。ちちと ははと おとうとです。",
          zh: "四口人。我爸爸、我妈妈和我弟弟。",
          de: "Vier Personen. Mein Vater, meine Mutter und mein jüngerer Bruder.",
          en: "Four people. My father, my mother, and my younger brother."
        }
      },
      {
        id: "d4",
        speaker: "けん",
        translations: {
          ja: "おとうとさんは いま なんさいですか？",
          zh: "你弟弟现在多大了？",
          de: "Wie alt ist dein jüngerer Bruder jetzt?",
          en: "How old is your younger brother now?"
        }
      },
      {
        id: "d5",
        speaker: "あい",
        translations: {
          ja: "じゅうごさいです。がくせいです。",
          zh: "他十五岁。他是学生。",
          de: "Er ist fünfzehn. Er ist Schüler.",
          en: "He's fifteen. He's a student."
        }
      },
      {
        id: "d6",
        speaker: "けん",
        translations: {
          ja: "おとうさんは なにを していますか？",
          zh: "你爸爸是做什么工作的？",
          de: "Was macht dein Vater beruflich?",
          en: "What does your father do?"
        }
      },
      {
        id: "d7",
        speaker: "あい",
        translations: {
          ja: "いしゃです。びょういんで はたらいています。",
          zh: "他是医生。他在医院工作。",
          de: "Er ist Arzt. Er arbeitet in einem Krankenhaus.",
          en: "He's a doctor. He works at a hospital."
        }
      },
      {
        id: "d8",
        speaker: "けん",
        translations: {
          ja: "すごいですね。おかあさんは？",
          zh: "真厉害。你妈妈呢？",
          de: "Das ist beeindruckend. Und deine Mutter?",
          en: "That's impressive. What about your mother?"
        }
      },
      {
        id: "d9",
        speaker: "あい",
        translations: {
          ja: "がっこうの せんせいです。とても やさしいです。",
          zh: "她是学校老师。她非常友善。",
          de: "Sie ist Lehrerin. Sie ist sehr freundlich.",
          en: "She's a school teacher. She's very kind."
        }
      },
      {
        id: "d10",
        speaker: "けん",
        translations: {
          ja: "ペットは いますか？",
          zh: "你有宠物吗？",
          de: "Hast du ein Haustier?",
          en: "Do you have a pet?"
        }
      },
      {
        id: "d11",
        speaker: "あい",
        translations: {
          ja: "はい、いぬが いっぴき います。",
          zh: "有，我有一只狗。",
          de: "Ja, ich habe einen Hund.",
          en: "Yes, I have one dog."
        }
      },
      {
        id: "d12",
        speaker: "けん",
        translations: {
          ja: "かわいいですね。なまえは？",
          zh: "真可爱。它叫什么名字？",
          de: "Wie süß. Wie heißt er?",
          en: "That's cute. What's its name?"
        }
      },
      {
        id: "d13",
        speaker: "あい",
        translations: {
          ja: "ももです。とても げんきです。",
          zh: "桃子。她非常有活力。",
          de: "Momo. Sie ist sehr lebhaft.",
          en: "Momo. She's very energetic."
        }
      },
      {
        id: "d14",
        speaker: "けん",
        translations: {
          ja: "たのしそうな かぞくですね！",
          zh: "听起来是个有趣的家庭！",
          de: "Klingt nach einer lustigen Familie!",
          en: "Sounds like a fun family!"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：いえに すんでいる ひと",
      zh: "对话B：谁住在家里",
      de: "Dialog B: Wer zu Hause wohnt",
      en: "Dialogue B: Who Lives at Home"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "けんさんの いえには だれが すんでいますか？",
          zh: "健，谁住在你家？",
          de: "Wer wohnt bei dir zu Hause, Ken?",
          en: "Who lives in your house, Ken?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "りょうしんと そふが すんでいます。",
          zh: "我父母和我爷爷住在那里。",
          de: "Meine Eltern und mein Großvater wohnen dort.",
          en: "My parents and my grandfather live there."
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "そぼは いますか？",
          zh: "你奶奶也在吗？",
          de: "Ist deine Großmutter auch dort?",
          en: "Is your grandmother there too?"
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "いいえ、そぼは いません。もう いません。",
          zh: "不，我奶奶不在了。她已经去世了。",
          de: "Nein, meine Großmutter nicht. Sie ist verstorben.",
          en: "No, my grandmother isn't. She's passed away."
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "そうですか。そふは げんきですか？",
          zh: "原来如此。你爷爷身体好吗？",
          de: "Verstehe. Geht es deinem Großvater gut?",
          en: "I see. Is your grandfather doing well?"
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "はい、とても げんきです。まいにち さんぽします。",
          zh: "很好。他每天都散步。",
          de: "Ja, sehr gut. Er macht jeden Tag einen Spaziergang.",
          en: "Yes, very well. He takes a walk every day."
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "みかさんの いえは どうですか？",
          zh: "美香，你家怎么样？",
          de: "Und wie ist es bei dir zu Hause, Mika?",
          en: "What about your house, Mika?"
        }
      },
      {
        id: "e8",
        speaker: "みか",
        translations: {
          ja: "わたしは おっとと むすめと すんでいます。",
          zh: "我和丈夫、女儿住在一起。",
          de: "Ich wohne mit meinem Mann und meiner Tochter.",
          en: "I live with my husband and daughter."
        }
      },
      {
        id: "e9",
        speaker: "けん",
        translations: {
          ja: "むすめさんは なんさいですか？",
          zh: "你女儿多大了？",
          de: "Wie alt ist deine Tochter?",
          en: "How old is your daughter?"
        }
      },
      {
        id: "e10",
        speaker: "みか",
        translations: {
          ja: "さんさいです。とても にぎやかです。",
          zh: "三岁。她非常活泼。",
          de: "Drei Jahre alt. Sie ist sehr lebhaft.",
          en: "Three years old. She's very lively."
        }
      },
      {
        id: "e11",
        speaker: "けん",
        translations: {
          ja: "ペットも いますか？",
          zh: "你也有宠物吗？",
          de: "Hast du auch ein Haustier?",
          en: "Do you have a pet too?"
        }
      },
      {
        id: "e12",
        speaker: "みか",
        translations: {
          ja: "はい、ねこが にひき います。",
          zh: "有，我有两只猫。",
          de: "Ja, ich habe zwei Katzen.",
          en: "Yes, I have two cats."
        }
      },
      {
        id: "e13",
        speaker: "けん",
        translations: {
          ja: "しずかな いえですか？",
          zh: "你家安静吗？",
          de: "Ist es bei euch ruhig zu Hause?",
          en: "Is your house quiet?"
        }
      },
      {
        id: "e14",
        speaker: "みか",
        translations: {
          ja: "いいえ、むすめが いるので にぎやかです！",
          zh: "不，因为我女儿在，很热闹！",
          de: "Nein, es ist lebhaft wegen meiner Tochter!",
          en: "No, it's lively because of my daughter!"
        }
      }
    ]
  },
  selfIntro: {
    ja: {
      title: {
        ja: "じこしょうかい",
        en: "Self-Introduction",
        de: "Selbstvorstellung",
        zh: "自我介绍"
      },
      template: [
        { id: "si1", translations: { ja: "こんにちは！" } },
        { id: "si2", translations: { ja: "わたしは［なまえ］です。" } },
        { id: "si3", translations: { ja: "［しゅっしんち］から きました。" } },
        { id: "si4", translations: { ja: "［しゅっしんち］は［くに］に あります。" } },
        { id: "si5", translations: { ja: "わたしは［げんご］を はなします。" } },
        { id: "si6", translations: { ja: "にほんごも すこし はなします。" } },
        { id: "si7", translations: { ja: "わたしには［にんずう］にんの きょうだいが います。" } },
        { id: "si8", translations: { ja: "わたしの かぞくは ぜんぶで［にんずう］にんです。" } }
      ],
      optionsIntro: {
        ja: "わたしが にほんごを べんきょうする りゆうは…",
        en: "The reason I'm studying Japanese is…",
        de: "Der Grund, warum ich Japanisch lerne, ist…",
        zh: "我学习日语的原因是…"
      },
      options: [
        { id: "opt1", translations: { ja: "…アニメが すきだから です。", en: "…because I like anime.", de: "…weil ich Anime mag.", zh: "…因为我喜欢动漫。" } },
        { id: "opt2", translations: { ja: "…にほんに りょこうしたいから です。", en: "…because I want to travel to Japan.", de: "…weil ich nach Japan reisen möchte.", zh: "…因为我想去日本旅行。" } },
        { id: "opt3", translations: { ja: "…しごとで ひつようだから です。", en: "…because I need it for work.", de: "…weil ich es für die Arbeit brauche.", zh: "…因为工作需要。" } },
        { id: "opt4", translations: { ja: "…にほんの ぶんかに きょうみが あるから です。", en: "…because I'm interested in Japanese culture.", de: "…weil ich mich für die japanische Kultur interessiere.", zh: "…因为我对日本文化感兴趣。" } }
      ],
      choosePrompt: {
        ja: "さあ、あなたの りゆうを えらんで はなしてみましょう。",
        en: "Now, pick your own reason and try saying it.",
        de: "Wähle jetzt deinen eigenen Grund und versuche, ihn zu sagen.",
        zh: "现在，选一个你自己的理由试着说说看。"
      }
    }
  },
  song: {
    // Per docs/a1-master-lesson-table-v05.md's assignment for row 1.
    // de/en/zh lyrics reused verbatim from lesson2.ts's own Bruder Jakob
    // block (readalongBruderJakobBlock) — same song, not retranslated.
    // ja is new (lesson2 has no ja).
    title: { ja: "フレール・ジャックさん", en: "Brother John", de: "Bruder Jakob", zh: "雅各弟兄" },
    lines: [
      { id: "sg1", translations: { ja: "ねえ ジャックさん、ねえ ジャックさん", en: "Brother John, Brother John,", de: "Bruder Jakob, Bruder Jakob,", zh: "雅各弟兄，雅各弟兄，" } },
      { id: "sg2", translations: { ja: "ねていますか", en: "are you sleeping?", de: "schläfst du noch?", zh: "你还在睡觉吗？" } },
      { id: "sg3", translations: { ja: "ねていますか", en: "are you sleeping?", de: "schläfst du noch?", zh: "你还在睡觉吗？" } },
      { id: "sg4", translations: { ja: "かねが なってるよ", en: "Don't you hear the bells?", de: "Hörst du nicht die Glocken?", zh: "你没听见钟声吗？" } },
      { id: "sg5", translations: { ja: "キン コン カン", en: "Ding, dang, dong.", de: "Ding, dang, dong.", zh: "叮，当，咚。" } },
      { id: "sg6", translations: { ja: "キン コン カン", en: "Ding, dang, dong.", de: "Ding, dang, dong.", zh: "叮，当，咚。" } }
    ]
  },
  grammar: {
    ja: {
      title: {
        ja: "「です」と「います」",
        zh: "是／有",
        de: "Sein / Haben",
        en: "To Be / To Have"
      },
      explanation: {
        ja: "「です」は「〜だ」の ていねいな かたちで、なにかを せつめいする ときに つかいます。「いる」は ひとや どうぶつが いる とき、「ある」は ものが ある ときに つかいます。えいごの「have」は にほんごでは かならず どちらかに わかれます。",
        zh: "です是「〜だ」的礼貌形式，用于说明或描述某事物。います用于人和动物（「拥有／存在」，有生命），あります用于物品（「拥有／存在」，无生命）。英语的「have」在日语中总是要分成这两种情况之一，没有单一的对应词。",
        de: "です ist die höfliche Form von „sein\" und wird benutzt, um etwas zu beschreiben oder zu identifizieren. います wird für Menschen und Tiere benutzt („haben/existieren\", belebt), あります für Gegenstände („haben/existieren\", unbelebt). Das deutsche „haben\" teilt sich im Japanischen immer in eine von diesen beiden auf — es gibt keine einzelne Entsprechung.",
        en: "です is the polite form of \"to be,\" used to describe or identify something. います is used for people and animals (\"to have/exist,\" animate), while あります is used for objects (\"to have/exist,\" inanimate). English \"have\" always splits into one of these two in Japanese — there's no single equivalent."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "これは かぞくの しゃしんです。",
            zh: "这是我家的照片。（です — 是）",
            de: "Das ist ein Foto meiner Familie. (です — sein)",
            en: "This is a photo of my family. (です — to be)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "かぞくは よにんです。",
            zh: "我家有四口人。（です — 描述）",
            de: "Meine Familie hat vier Personen. (です — beschreiben)",
            en: "My family has four people. (です — describing)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "いもうとが います。",
            zh: "我有一个妹妹。（います — 有生命）",
            de: "Ich habe eine jüngere Schwester. (います — belebt)",
            en: "I have a younger sister. (います — animate)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "ねこが います。",
            zh: "我有一只猫。（います — 有生命）",
            de: "Ich habe eine Katze. (います — belebt)",
            en: "I have a cat. (います — animate)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "くるまが あります。",
            zh: "我有一辆车。（あります — 无生命）",
            de: "Ich habe ein Auto. (あります — unbelebt)",
            en: "I have a car. (あります — inanimate)"
          }
        },
        {
          id: "g6",
          translations: {
            ja: "おおきい いえが あります。",
            zh: "我有一栋大房子。（あります — 无生命）",
            de: "Ich habe ein großes Haus. (あります — unbelebt)",
            en: "I have a big house. (あります — inanimate)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Sein / Haben",
        en: "To Be / To Have",
        ja: "sein と haben",
        zh: "sein／haben"
      },
      explanation: {
        de: "sein (\"to be\") wird benutzt, um jemanden oder etwas zu beschreiben oder zu identifizieren: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind. haben (\"to have\") drückt Besitz aus und funktioniert für Menschen, Tiere und Dinge gleichermaßen — anders als im Japanischen, wo います (belebt) und あります (unbelebt) getrennt sind, gibt es im Deutschen nur ein einziges Verb: ich habe, du hast, er/sie/es hat.",
        en: "sein (\"to be\") is used to describe or identify someone or something: ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind. haben (\"to have\") expresses possession and works the same way for people, animals, and things — unlike Japanese, which splits います (animate) and あります (inanimate), German has just one verb: ich habe, du hast, er/sie/es hat.",
        ja: "sein（〜だ）は、だれか・なにかを せつめいしたり とくていしたり する ときに つかいます：ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie sind。haben（もっている）は しょゆうを あらわし、ひとにも どうぶつにも ものにも おなじように つかいます — にほんごの います（せいぶつ）と あります（むせいぶつ）の くべつは ドイツごには なく、どうし ひとつだけです：ich habe, du hast, er/sie/es hat。",
        zh: "sein（是）用于描述或说明某人或某物：ich bin，du bist，er/sie/es ist，wir sind，ihr seid，sie sind。haben（有）表示拥有，对人、动物和物品都一样使用——不像日语区分います（有生命）和あります（无生命），德语只有一个动词：ich habe，du hast，er/sie/es hat。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Das ist mein Vater.",
            en: "This is my father. (sein — identifying)",
            ja: "これは わたしの ちちです。（sein — とくてい）",
            zh: "这是我爸爸。（sein — 说明身份）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Meine Familie ist groß.",
            en: "My family is big. (sein — describing)",
            ja: "わたしの かぞくは おおきいです。（sein — せつめい）",
            zh: "我家很大。（sein — 描述）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Ich habe einen Bruder.",
            en: "I have a brother. (haben — people, same verb as for things)",
            ja: "わたしには あにが います。（haben — ひとも ものも おなじ どうし）",
            zh: "我有一个哥哥。（haben — 对人也用同一个动词）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Wir haben eine Katze.",
            en: "We have a cat. (haben — animals, same verb)",
            ja: "わたしたちには ねこが います。（haben — どうぶつも おなじ どうし）",
            zh: "我们有一只猫。（haben — 动物也用同一个动词）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Meine Eltern haben ein Haus.",
            en: "My parents have a house. (haben — things, same verb again)",
            ja: "わたしの りょうしんには いえが あります。（haben — ものも おなじ どうし）",
            zh: "我父母有一栋房子。（haben — 物品也用同一个动词）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Meine Eltern sind freundlich.",
            en: "My parents are friendly. (sein — plural description)",
            ja: "わたしの りょうしんは しんせつです。（sein — ふくすうの せつめい）",
            zh: "我父母很友善。（sein — 复数描述）"
          }
        }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-sein",
        title: { de: "Übung: sein", en: "Practice: Sein", ja: "れんしゅう：sein", zh: "练习：sein" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit sein.",
          en: "Next, let's practice example sentences using sein.",
          ja: "つぎは、seinを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用sein的例句。"
        },
        lines: [
          { id: "s1", translations: { de: "Das ist mein Vater.", en: "This is my father.", ja: "これは わたしの ちちです。", zh: "这是我爸爸。" } },
          { id: "s2", translations: { de: "Das ist meine Mutter.", en: "This is my mother.", ja: "これは わたしの ははです。", zh: "这是我妈妈。" } },
          { id: "s3", translations: { de: "Meine Familie ist groß.", en: "My family is big.", ja: "わたしの かぞくは おおきいです。", zh: "我家很大。" } },
          { id: "s4", translations: { de: "Mein Bruder ist freundlich.", en: "My brother is friendly.", ja: "わたしの あには しんせつです。", zh: "我哥哥很友善。" } },
          { id: "s5", translations: { de: "Meine Schwester ist ruhig.", en: "My sister is quiet.", ja: "わたしの あねは しずかです。", zh: "我姐姐很安静。" } },
          { id: "s6", translations: { de: "Wir sind Studenten.", en: "We are students.", ja: "わたしたちは がくせいです。", zh: "我们是学生。" } },
          { id: "s7", translations: { de: "Meine Eltern sind streng.", en: "My parents are strict.", ja: "わたしの りょうしんは きびしいです。", zh: "我父母很严格。" } },
          { id: "s8", translations: { de: "Der Hund ist süß.", en: "The dog is cute.", ja: "その いぬは かわいいです。", zh: "那只狗很可爱。" } },
          { id: "s9", translations: { de: "Ich bin Lehrerin.", en: "I am a teacher.", ja: "わたしは せんせいです。", zh: "我是老师。" } },
          { id: "s10", translations: { de: "Meine Großeltern sind lebhaft.", en: "My grandparents are lively.", ja: "わたしの そふぼは げんきです。", zh: "我的祖父母很有活力。" } }
        ]
      },
      {
        id: "grammar-drill-haben",
        title: { de: "Übung: haben", en: "Practice: Haben", ja: "れんしゅう：haben", zh: "练习：haben" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit haben.",
          en: "Next, let's practice example sentences using haben.",
          ja: "つぎは、habenを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用haben的例句。"
        },
        lines: [
          { id: "h1", translations: { de: "Ich habe einen Bruder.", en: "I have a brother.", ja: "わたしには あにが います。", zh: "我有一个哥哥。" } },
          { id: "h2", translations: { de: "Ich habe eine Schwester.", en: "I have a sister.", ja: "わたしには あねが います。", zh: "我有一个姐姐。" } },
          { id: "h3", translations: { de: "Wir haben eine Katze.", en: "We have a cat.", ja: "わたしたちには ねこが います。", zh: "我们有一只猫。" } },
          { id: "h4", translations: { de: "Meine Eltern haben ein Haus.", en: "My parents have a house.", ja: "わたしの りょうしんには いえが あります。", zh: "我父母有一栋房子。" } },
          { id: "h5", translations: { de: "Ich habe zwei Kinder.", en: "I have two children.", ja: "わたしには こどもが ふたり います。", zh: "我有两个孩子。" } },
          { id: "h6", translations: { de: "Meine Großmutter hat einen Hund.", en: "My grandmother has a dog.", ja: "わたしの そぼには いぬが います。", zh: "我奶奶有一只狗。" } },
          { id: "h7", translations: { de: "Wir haben ein Haustier.", en: "We have a pet.", ja: "わたしたちには ペットが います。", zh: "我们有一只宠物。" } },
          { id: "h8", translations: { de: "Ich habe einen Sohn und eine Tochter.", en: "I have a son and a daughter.", ja: "わたしには むすこと むすめが います。", zh: "我有一个儿子和一个女儿。" } },
          { id: "h9", translations: { de: "Meine Familie hat ein großes Auto.", en: "My family has a big car.", ja: "わたしの かぞくには おおきい くるまが あります。", zh: "我家有一辆大车。" } },
          { id: "h10", translations: { de: "Er hat viele Geschwister.", en: "He has many siblings.", ja: "かれには きょうだいが おおぜい います。", zh: "他有很多兄弟姐妹。" } }
        ]
      }
    ]
  },
  pronunciation: {
    ja: {
      title: {
        ja: "はつおんの れんしゅう",
        zh: "发音练习",
        de: "Aussprachetraining",
        en: "Pronunciation Practice"
      },
      groupLabels: {
        dakuten: {
          ja: "だくてん・はんだくてん",
          zh: "浊音／半浊音符号（゛゜）",
          de: "Stimmhafte / halbstimmhafte Zeichen (゛゜)",
          en: "Voiced / semi-voiced marks (゛゜)"
        },
        pitch: {
          ja: "アクセント（ふくしゅう）",
          zh: "声调重音（巩固，新词对）",
          de: "Tonhöhenakzent (vertieft, neue Paare)",
          en: "Pitch accent (reinforced, new pairs)"
        }
      },
      items: [
        {
          id: "dk1",
          category: "dakuten",
          translations: {
            ja: "か → が",
            zh: "ka → ga（清音 → 浊音）",
            de: "ka → ga (stimmlos → stimmhaft)",
            en: "ka → ga (unvoiced → voiced)"
          }
        },
        {
          id: "dk2",
          category: "dakuten",
          translations: {
            ja: "た → だ",
            zh: "ta → da（清音 → 浊音）",
            de: "ta → da (stimmlos → stimmhaft)",
            en: "ta → da (unvoiced → voiced)"
          }
        },
        {
          id: "dk3",
          category: "dakuten",
          translations: {
            ja: "さ → ざ",
            zh: "sa → za（清音 → 浊音）",
            de: "sa → za (stimmlos → stimmhaft)",
            en: "sa → za (unvoiced → voiced)"
          }
        },
        {
          id: "dk4",
          category: "dakuten",
          translations: {
            ja: "は → ば → ぱ",
            zh: "ha → ba → pa（清音 → 浊音 → 半浊音）",
            de: "ha → ba → pa (stimmlos → stimmhaft → halbstimmhaft)",
            en: "ha → ba → pa (unvoiced → voiced → semi-voiced)"
          }
        },
        {
          id: "dk5",
          category: "dakuten",
          translations: {
            ja: "かぞく → がぞう",
            zh: "家庭／图像（最小对立对，か对が）",
            de: "Familie / Bild (Minimalpaar, か vs が)",
            en: "family / image (minimal pair, か vs が)"
          }
        },
        {
          id: "dk6",
          category: "dakuten",
          translations: {
            ja: "たいがく → だいがく",
            zh: "（非单词）／大学（た对だ）",
            de: "(kein Wort) / Universität (た vs だ)",
            en: "(not a word) / university (た vs だ)"
          }
        },
        {
          id: "p1",
          category: "pitch",
          translations: {
            ja: "いま",
            zh: "现在（低高）／客厅（高低）",
            de: "jetzt (LH) / Wohnzimmer (HL)",
            en: "now (LH) / living room (HL)"
          }
        },
        {
          id: "p2",
          category: "pitch",
          translations: {
            ja: "しろ",
            zh: "白色（低高）／城堡（高低）",
            de: "weiß (LH) / Burg (HL)",
            en: "white (LH) / castle (HL)"
          }
        },
        {
          id: "p3",
          category: "pitch",
          translations: {
            ja: "は",
            zh: "牙齿（高低）／叶子（低高）",
            de: "Zahn (HL) / Blatt (LH)",
            en: "tooth (HL) / leaf (LH)"
          }
        },
        {
          id: "p4",
          category: "pitch",
          translations: {
            ja: "あき",
            zh: "秋天（低高）／空闲（高低）",
            de: "Herbst (LH) / leer, frei (HL)",
            en: "autumn (LH) / vacant, empty (HL)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Aussprachetraining",
        en: "Pronunciation Practice",
        ja: "はつおんの れんしゅう",
        zh: "发音练习"
      },
      groupLabels: {
        b_p: {
          de: "B (stimmhaft) vs. P (stimmlos)",
          en: "B (voiced) vs. P (unvoiced)",
          ja: "B（ゆうせいおん）と P（むせいおん）",
          zh: "B（浊音）与P（清音）"
        },
        devoicing: {
          de: "Auslautverhärtung: b/d/g am Wortende klingen wie p/t/k",
          en: "Final devoicing: b/d/g at word end sound like p/t/k",
          ja: "ごびの むせいか：ごびの b/d/g は p/t/k のように きこえる",
          zh: "词尾清化：词尾的b/d/g读作p/t/k"
        }
      },
      items: [
        {
          id: "b1",
          category: "b_p",
          translations: {
            de: "Bruder",
            en: "brother (B voiced)",
            ja: "あに／おとうと（ゆうせいの B）",
            zh: "兄弟（浊音B）"
          }
        },
        {
          id: "b2",
          category: "b_p",
          translations: {
            de: "Bild",
            en: "picture (B voiced)",
            ja: "しゃしん（ゆうせいの B）",
            zh: "照片（浊音B）"
          }
        },
        {
          id: "b3",
          category: "b_p",
          translations: {
            de: "Baby",
            en: "baby (B voiced)",
            ja: "あかちゃん（ゆうせいの B）",
            zh: "婴儿（浊音B）"
          }
        },
        {
          id: "p1",
          category: "b_p",
          translations: {
            de: "Papa",
            en: "dad, informal (P unvoiced)",
            ja: "パパ（むせいの P）",
            zh: "爸爸，非正式（清音P）"
          }
        },
        {
          id: "p2",
          category: "b_p",
          translations: {
            de: "Party",
            en: "party (P unvoiced)",
            ja: "パーティー（むせいの P）",
            zh: "聚会（清音P）"
          }
        },
        {
          id: "dv1",
          category: "devoicing",
          translations: {
            de: "Hund",
            en: "dog (final d sounds like t)",
            ja: "いぬ（ごびの d は t のよう）",
            zh: "狗（词尾d读作t）"
          }
        },
        {
          id: "dv2",
          category: "devoicing",
          translations: {
            de: "Kind",
            en: "child (final d sounds like t)",
            ja: "こども（ごびの d は t のよう）",
            zh: "孩子（词尾d读作t）"
          }
        },
        {
          id: "dv3",
          category: "devoicing",
          translations: {
            de: "Tag",
            en: "day (final g sounds like k)",
            ja: "ひ（ごびの g は k のよう）",
            zh: "天（词尾g读作k）"
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
          b: { de: "B", en: "B", ja: "B", zh: "B" },
          p: { de: "P", en: "P", ja: "P", zh: "P" },
          dt: { de: "d → t", en: "d → t", ja: "d → t", zh: "d → t" },
          gk: { de: "g → k", en: "g → k", ja: "g → k", zh: "g → k" }
        },
        items: [
          { id: "b1", category: "b", translations: { de: "Bruder", en: "brother", ja: "きょうだい（あに・おとうと）", zh: "兄弟" } },
          { id: "b2", category: "b", translations: { de: "Brille", en: "glasses", ja: "めがね", zh: "眼镜" } },
          { id: "b3", category: "b", translations: { de: "Brot", en: "bread", ja: "パン", zh: "面包" } },
          { id: "b4", category: "b", translations: { de: "Buch", en: "book", ja: "ほん", zh: "书" } },
          { id: "b5", category: "b", translations: { de: "Bein", en: "leg", ja: "あし", zh: "腿" } },
          { id: "b6", category: "b", translations: { de: "Ball", en: "ball", ja: "ボール", zh: "球" } },
          { id: "b7", category: "b", translations: { de: "Bett", en: "bed", ja: "ベッド", zh: "床" } },
          { id: "b8", category: "b", translations: { de: "Brot", en: "bread", ja: "パン", zh: "面包" } },
          { id: "b9", category: "b", translations: { de: "Blume", en: "flower", ja: "はな", zh: "花" } },
          { id: "b10", category: "b", translations: { de: "Baum", en: "tree", ja: "き", zh: "树" } },
          { id: "b11", category: "b", translations: { de: "Bahnhof", en: "train station", ja: "えき", zh: "火车站" } },
          { id: "b12", category: "b", translations: { de: "Beruf", en: "profession, job", ja: "しょくぎょう", zh: "职业" } },
          { id: "b13", category: "b", translations: { de: "bleiben", en: "to stay", ja: "とどまる", zh: "留下；停留" } },
          { id: "b14", category: "b", translations: { de: "brauchen", en: "to need", ja: "ひつようとする", zh: "需要" } },

          { id: "p1", category: "p", translations: { de: "Papa", en: "dad", ja: "パパ", zh: "爸爸" } },
          { id: "p2", category: "p", translations: { de: "Park", en: "park", ja: "こうえん", zh: "公园" } },
          { id: "p3", category: "p", translations: { de: "Papier", en: "paper", ja: "かみ", zh: "纸" } },
          { id: "p4", category: "p", translations: { de: "Paket", en: "package", ja: "こづつみ", zh: "包裹" } },
          { id: "p5", category: "p", translations: { de: "Pass", en: "passport", ja: "パスポート", zh: "护照" } },
          { id: "p6", category: "p", translations: { de: "Pizza", en: "pizza", ja: "ピザ", zh: "比萨" } },
          { id: "p7", category: "p", translations: { de: "Plan", en: "plan", ja: "けいかく", zh: "计划" } },
          { id: "p8", category: "p", translations: { de: "Platz", en: "place, square", ja: "ばしょ、ひろば", zh: "地方；广场" } },
          { id: "p9", category: "p", translations: { de: "Polizei", en: "police", ja: "けいさつ", zh: "警察" } },
          { id: "p10", category: "p", translations: { de: "Post", en: "post office, mail", ja: "ゆうびんきょく", zh: "邮局；邮件" } },
          { id: "p11", category: "p", translations: { de: "Problem", en: "problem", ja: "もんだい", zh: "问题" } },
          { id: "p12", category: "p", translations: { de: "Preis", en: "price", ja: "ねだん", zh: "价格" } },
          { id: "p13", category: "p", translations: { de: "Prüfung", en: "exam", ja: "しけん", zh: "考试" } },
          { id: "p14", category: "p", translations: { de: "Person", en: "person", ja: "ひと", zh: "人" } },

          { id: "dt1", category: "dt", translations: { de: "Hund", en: "dog", ja: "いぬ", zh: "狗" } },
          { id: "dt2", category: "dt", translations: { de: "Kind", en: "child", ja: "こども", zh: "孩子" } },
          { id: "dt3", category: "dt", translations: { de: "Bild", en: "picture", ja: "え", zh: "图片" } },
          { id: "dt4", category: "dt", translations: { de: "Geld", en: "money", ja: "おかね", zh: "钱" } },
          { id: "dt5", category: "dt", translations: { de: "Hand", en: "hand", ja: "て", zh: "手" } },
          { id: "dt6", category: "dt", translations: { de: "Wand", en: "wall", ja: "かべ", zh: "墙" } },
          { id: "dt7", category: "dt", translations: { de: "Wind", en: "wind", ja: "かぜ", zh: "风" } },
          { id: "dt8", category: "dt", translations: { de: "Abend", en: "evening", ja: "ゆうがた", zh: "傍晚" } },
          { id: "dt9", category: "dt", translations: { de: "Freund", en: "friend", ja: "ともだち", zh: "朋友" } },
          { id: "dt10", category: "dt", translations: { de: "Stadt", en: "city", ja: "まち", zh: "城市" } },
          { id: "dt11", category: "dt", translations: { de: "und", en: "and", ja: "そして、〜と", zh: "和" } },
          { id: "dt12", category: "dt", translations: { de: "rot", en: "red", ja: "あかい", zh: "红色" } },
          { id: "dt13", category: "dt", translations: { de: "Hemd", en: "shirt", ja: "シャツ", zh: "衬衫" } },
          { id: "dt14", category: "dt", translations: { de: "Bad", en: "bath, bathroom", ja: "おふろ", zh: "浴室；洗澡" } },

          { id: "gk1", category: "gk", translations: { de: "Tag", en: "day", ja: "ひ", zh: "天" } },
          { id: "gk2", category: "gk", translations: { de: "Weg", en: "way, path", ja: "みち", zh: "路" } },
          { id: "gk3", category: "gk", translations: { de: "Berg", en: "mountain", ja: "やま", zh: "山" } },
          { id: "gk4", category: "gk", translations: { de: "Krieg", en: "war", ja: "せんそう", zh: "战争" } },
          { id: "gk5", category: "gk", translations: { de: "Flug", en: "flight", ja: "フライト", zh: "航班" } },
          { id: "gk6", category: "gk", translations: { de: "Zug", en: "train", ja: "でんしゃ", zh: "火车" } },
          { id: "gk7", category: "gk", translations: { de: "Steg", en: "footbridge, jetty", ja: "さんばし", zh: "栈桥" } },
          { id: "gk8", category: "gk", translations: { de: "Teig", en: "dough", ja: "きじ", zh: "面团" } },
          { id: "gk9", category: "gk", translations: { de: "Dialog", en: "dialogue", ja: "たいわ", zh: "对话" } },
          { id: "gk10", category: "gk", translations: { de: "Erfolg", en: "success", ja: "せいこう", zh: "成功" } },
          { id: "gk11", category: "gk", translations: { de: "Anfang", en: "beginning", ja: "はじめ", zh: "开始" } },
          { id: "gk12", category: "gk", translations: { de: "Vertrag", en: "contract", ja: "けいやく", zh: "合同" } },
          { id: "gk13", category: "gk", translations: { de: "Anzug", en: "suit", ja: "スーツ", zh: "西装" } },
          { id: "gk14", category: "gk", translations: { de: "Einzug", en: "move-in", ja: "ひっこし", zh: "搬入；入住" } }
        ]
      }
    ]
  }
};
