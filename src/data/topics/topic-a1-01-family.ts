import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese1.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicFamily: TopicLesson = {
  id: "topic-a1-01-family",
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
        en: "family",
        fr: "la famille"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "おとうさん",
        zh: "爸爸（他人的／称呼自己的）",
        de: "Vater (fremder / eigener, in Anrede)",
        en: "father (someone else's / addressing your own)",
        fr: "papa (de quelqu'un d'autre / pour s'adresser au sien)"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "おかあさん",
        zh: "妈妈（他人的／称呼自己的）",
        de: "Mutter (fremde / eigene, in Anrede)",
        en: "mother (someone else's / addressing your own)",
        fr: "maman (de quelqu'un d'autre / pour s'adresser à la sienne)"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "おにいさん",
        zh: "哥哥（他人的／称呼自己的）",
        de: "älterer Bruder (fremder / eigener, in Anrede)",
        en: "older brother (someone else's / addressing your own)",
        fr: "grand frère (de quelqu'un d'autre / pour s'adresser au sien)"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "おねえさん",
        zh: "姐姐（他人的／称呼自己的）",
        de: "ältere Schwester (fremde / eigene, in Anrede)",
        en: "older sister (someone else's / addressing your own)",
        fr: "grande sœur (de quelqu'un d'autre / pour s'adresser à la sienne)"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "おとうと",
        zh: "弟弟（自己的）",
        de: "jüngerer Bruder (eigener)",
        en: "younger brother (own)",
        fr: "petit frère (le sien)"
      }
    },
    {
      id: "v07",
      category: "noun",
      translations: {
        ja: "いもうと",
        zh: "妹妹（自己的）",
        de: "jüngere Schwester (eigene)",
        en: "younger sister (own)",
        fr: "petite sœur (la sienne)"
      }
    },
    {
      id: "v08",
      category: "noun",
      translations: {
        ja: "そふ",
        zh: "爷爷（自己的）",
        de: "Großvater (eigener)",
        en: "grandfather (own)",
        fr: "grand-père (le sien)"
      }
    },
    {
      id: "v09",
      category: "noun",
      translations: {
        ja: "そぼ",
        zh: "奶奶（自己的）",
        de: "Großmutter (eigene)",
        en: "grandmother (own)",
        fr: "grand-mère (la sienne)"
      }
    },
    {
      id: "v10",
      category: "noun",
      translations: {
        ja: "むすこ",
        zh: "儿子",
        de: "Sohn",
        en: "son",
        fr: "fils"
      }
    },
    {
      id: "v11",
      category: "noun",
      translations: {
        ja: "むすめ",
        zh: "女儿",
        de: "Tochter",
        en: "daughter",
        fr: "fille"
      }
    },
    {
      id: "v12",
      category: "noun",
      translations: {
        ja: "おっと",
        zh: "丈夫（自己的）",
        de: "Ehemann (eigener)",
        en: "husband (own)",
        fr: "mari (le sien)"
      }
    },
    {
      id: "v13",
      category: "noun",
      translations: {
        ja: "つま",
        zh: "妻子（自己的）",
        de: "Ehefrau (eigene)",
        en: "wife (own)",
        fr: "femme, épouse (la sienne)"
      }
    },
    {
      id: "v14",
      category: "noun",
      translations: {
        ja: "きょうだい",
        zh: "兄弟姐妹",
        de: "Geschwister",
        en: "siblings",
        fr: "frères et sœurs"
      }
    },
    {
      id: "v15",
      category: "noun",
      translations: {
        ja: "りょうしん",
        zh: "父母",
        de: "Eltern",
        en: "parents",
        fr: "parents"
      }
    },
    {
      id: "v16",
      category: "noun",
      translations: {
        ja: "ペット",
        zh: "宠物",
        de: "Haustier",
        en: "pet",
        fr: "animal de compagnie"
      }
    },
    {
      id: "v17",
      category: "verb",
      translations: {
        ja: "いる",
        zh: "有／存在（有生命）",
        de: "haben / existieren (belebt)",
        en: "to have / to exist (animate)",
        fr: "avoir / il y a (pour les êtres vivants)"
      }
    },
    {
      id: "v18",
      category: "verb",
      translations: {
        ja: "ある",
        zh: "有／存在（无生命）",
        de: "haben / existieren (unbelebt)",
        en: "to have / to exist (inanimate)",
        fr: "avoir / il y a (pour les objets)"
      }
    },
    {
      id: "v19",
      category: "verb",
      translations: {
        ja: "すむ",
        zh: "居住",
        de: "wohnen",
        en: "to live (reside)",
        fr: "habiter"
      }
    },
    {
      id: "v20",
      category: "verb",
      translations: {
        ja: "しょうかいする",
        zh: "介绍",
        de: "vorstellen",
        en: "to introduce",
        fr: "présenter"
      }
    },
    {
      id: "v21",
      category: "verb",
      translations: {
        ja: "にる",
        zh: "相似",
        de: "ähneln",
        en: "to resemble",
        fr: "ressembler"
      }
    },
    {
      id: "v22",
      category: "verb",
      translations: {
        ja: "そだてる",
        zh: "抚养",
        de: "großziehen",
        en: "to raise (a child)",
        fr: "élever (un enfant)"
      }
    },
    {
      id: "v23",
      category: "verb",
      translations: {
        ja: "あう",
        zh: "见面",
        de: "treffen",
        en: "to meet",
        fr: "rencontrer"
      }
    },
    {
      id: "v24",
      category: "verb",
      translations: {
        ja: "はなす",
        zh: "说话",
        de: "reden, sprechen",
        en: "to talk",
        fr: "parler"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "おおきい",
        zh: "大（家庭、房子）",
        de: "groß (Familie, Haus)",
        en: "big (family, house)",
        fr: "grand(e) (famille, maison)"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "ちいさい",
        zh: "小",
        de: "klein",
        en: "small",
        fr: "petit(e)"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "やさしい",
        zh: "友善",
        de: "freundlich",
        en: "kind",
        fr: "gentil(le)"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "きびしい",
        zh: "严格",
        de: "streng",
        en: "strict",
        fr: "strict(e)"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "にぎやか",
        zh: "热闹",
        de: "lebhaft",
        en: "lively",
        fr: "animé(e)"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "しずか",
        zh: "安静",
        de: "ruhig",
        en: "quiet",
        fr: "calme"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "ちち",
        zh: "爸爸（自己的，对外人说时用）",
        de: "Vater (eigener)",
        en: "father (own, used when talking about your own to others)",
        fr: "père (le sien, en parlant à d'autres)"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "はは",
        zh: "妈妈（自己的，对外人说时用）",
        de: "Mutter (eigene)",
        en: "mother (own, used when talking about your own to others)",
        fr: "mère (la sienne, en parlant à d'autres)"
      }
    },
    {
      id: "v33",
      category: "noun",
      translations: {
        ja: "がくせい",
        zh: "学生",
        de: "Student(in), Schüler(in)",
        en: "student",
        fr: "étudiant(e)"
      }
    },
    {
      id: "v34",
      category: "noun",
      translations: {
        ja: "せんせい",
        zh: "老师",
        de: "Lehrer(in)",
        en: "teacher",
        fr: "professeur, enseignant(e)"
      }
    },
    {
      id: "v35",
      category: "noun",
      translations: {
        ja: "なまえ",
        zh: "名字",
        de: "Name",
        en: "name",
        fr: "nom"
      }
    },
    {
      id: "v36",
      category: "noun",
      translations: {
        ja: "いぬ",
        zh: "狗",
        de: "Hund",
        en: "dog",
        fr: "chien"
      }
    },
    {
      id: "v37",
      category: "noun",
      translations: {
        ja: "ねこ",
        zh: "猫",
        de: "Katze",
        en: "cat",
        fr: "chat"
      }
    },
    {
      id: "v38",
      category: "verb",
      translations: {
        ja: "はたらく",
        zh: "工作",
        de: "arbeiten",
        en: "to work",
        fr: "travailler"
      }
    },
    {
      id: "v39",
      category: "verb",
      translations: {
        ja: "さんぽする",
        zh: "散步",
        de: "spazieren gehen",
        en: "to take a walk",
        fr: "se promener"
      }
    },
    {
      id: "v40",
      category: "adjective",
      translations: {
        ja: "かわいい",
        zh: "可爱",
        de: "süß, niedlich",
        en: "cute",
        fr: "mignon(ne)"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：かぞくを しょうかいする",
      zh: "对话A：介绍家人",
      de: "Dialog A: Die Familie vorstellen",
      en: "Dialogue A: Introducing Family",
      fr: "Dialogue A : Présenter sa famille"
    },
    lines: [
      {
        id: "d1",
        speaker: "あい",
        translations: {
          ja: "これは わたしの かぞくの しゃしんです。",
          zh: "这是我家的照片。",
          de: "Das ist ein Foto meiner Familie.",
          en: "This is a photo of my family.",
          fr: "Voici une photo de ma famille."
        }
      },
      {
        id: "d2",
        speaker: "けん",
        translations: {
          ja: "いいですね！なんにん かぞくですか？",
          zh: "真好！你家有几口人？",
          de: "Schön! Wie viele Personen hat deine Familie?",
          en: "Nice! How many people are in your family?",
          fr: "Super ! Combien de personnes y a-t-il dans ta famille ?"
        }
      },
      {
        id: "d3",
        speaker: "あい",
        translations: {
          ja: "よにんです。ちちと ははと おとうとです。",
          zh: "四口人。我爸爸、我妈妈和我弟弟。",
          de: "Vier Personen. Mein Vater, meine Mutter und mein jüngerer Bruder.",
          en: "Four people. My father, my mother, and my younger brother.",
          fr: "Quatre personnes. Mon père, ma mère et mon petit frère."
        }
      },
      {
        id: "d4",
        speaker: "けん",
        translations: {
          ja: "おとうとさんは いま なんさいですか？",
          zh: "你弟弟现在多大了？",
          de: "Wie alt ist dein jüngerer Bruder jetzt?",
          en: "How old is your younger brother now?",
          fr: "Quel âge a ton petit frère maintenant ?"
        }
      },
      {
        id: "d5",
        speaker: "あい",
        translations: {
          ja: "じゅうごさいです。がくせいです。",
          zh: "他十五岁。他是学生。",
          de: "Er ist fünfzehn. Er ist Schüler.",
          en: "He's fifteen. He's a student.",
          fr: "Il a quinze ans. Il est étudiant."
        }
      },
      {
        id: "d6",
        speaker: "けん",
        translations: {
          ja: "おとうさんは なにを していますか？",
          zh: "你爸爸是做什么工作的？",
          de: "Was macht dein Vater beruflich?",
          en: "What does your father do?",
          fr: "Qu'est-ce que ton père fait comme métier ?"
        }
      },
      {
        id: "d7",
        speaker: "あい",
        translations: {
          ja: "いしゃです。びょういんで はたらいています。",
          zh: "他是医生。他在医院工作。",
          de: "Er ist Arzt. Er arbeitet in einem Krankenhaus.",
          en: "He's a doctor. He works at a hospital.",
          fr: "Il est médecin. Il travaille dans un hôpital."
        }
      },
      {
        id: "d8",
        speaker: "けん",
        translations: {
          ja: "すごいですね。おかあさんは？",
          zh: "真厉害。你妈妈呢？",
          de: "Das ist beeindruckend. Und deine Mutter?",
          en: "That's impressive. What about your mother?",
          fr: "C'est impressionnant. Et ta mère ?"
        }
      },
      {
        id: "d9",
        speaker: "あい",
        translations: {
          ja: "がっこうの せんせいです。とても やさしいです。",
          zh: "她是学校老师。她非常友善。",
          de: "Sie ist Lehrerin. Sie ist sehr freundlich.",
          en: "She's a school teacher. She's very kind.",
          fr: "Elle est professeure. Elle est très gentille."
        }
      },
      {
        id: "d10",
        speaker: "けん",
        translations: {
          ja: "ペットは いますか？",
          zh: "你有宠物吗？",
          de: "Hast du ein Haustier?",
          en: "Do you have a pet?",
          fr: "As-tu un animal de compagnie ?"
        }
      },
      {
        id: "d11",
        speaker: "あい",
        translations: {
          ja: "はい、いぬが いっぴき います。",
          zh: "有，我有一只狗。",
          de: "Ja, ich habe einen Hund.",
          en: "Yes, I have one dog.",
          fr: "Oui, j'ai un chien."
        }
      },
      {
        id: "d12",
        speaker: "けん",
        translations: {
          ja: "かわいいですね。なまえは？",
          zh: "真可爱。它叫什么名字？",
          de: "Wie süß. Wie heißt er?",
          en: "That's cute. What's its name?",
          fr: "C'est mignon. Comment s'appelle-t-il ?"
        }
      },
      {
        id: "d13",
        speaker: "あい",
        translations: {
          ja: "ももです。とても げんきです。",
          zh: "桃子。她非常有活力。",
          de: "Momo. Sie ist sehr lebhaft.",
          en: "Momo. She's very energetic.",
          fr: "Momo. Elle est très pleine d'énergie."
        }
      },
      {
        id: "d14",
        speaker: "けん",
        translations: {
          ja: "たのしそうな かぞくですね！",
          zh: "听起来是个有趣的家庭！",
          de: "Klingt nach einer lustigen Familie!",
          en: "Sounds like a fun family!",
          fr: "On dirait une famille joyeuse !"
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：いえに すんでいる ひと",
      zh: "对话B：谁住在家里",
      de: "Dialog B: Wer zu Hause wohnt",
      en: "Dialogue B: Who Lives at Home",
      fr: "Dialogue B : Qui habite à la maison"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "けんさんの いえには だれが すんでいますか？",
          zh: "健，谁住在你家？",
          de: "Wer wohnt bei dir zu Hause, Ken?",
          en: "Who lives in your house, Ken?",
          fr: "Qui habite chez toi, Ken ?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "りょうしんと そふが すんでいます。",
          zh: "我父母和我爷爷住在那里。",
          de: "Meine Eltern und mein Großvater wohnen dort.",
          en: "My parents and my grandfather live there.",
          fr: "Mes parents et mon grand-père y habitent."
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "そぼは いますか？",
          zh: "你奶奶也在吗？",
          de: "Ist deine Großmutter auch dort?",
          en: "Is your grandmother there too?",
          fr: "Ta grand-mère aussi ?"
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "いいえ、そぼは いません。もう いません。",
          zh: "不，我奶奶不在了。她已经去世了。",
          de: "Nein, meine Großmutter nicht. Sie ist verstorben.",
          en: "No, my grandmother isn't. She's passed away.",
          fr: "Non, pas ma grand-mère. Elle est décédée."
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "そうですか。そふは げんきですか？",
          zh: "原来如此。你爷爷身体好吗？",
          de: "Verstehe. Geht es deinem Großvater gut?",
          en: "I see. Is your grandfather doing well?",
          fr: "Je vois. Ton grand-père va bien ?"
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "はい、とても げんきです。まいにち さんぽします。",
          zh: "很好。他每天都散步。",
          de: "Ja, sehr gut. Er macht jeden Tag einen Spaziergang.",
          en: "Yes, very well. He takes a walk every day.",
          fr: "Oui, très bien. Il se promène tous les jours."
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "みかさんの いえは どうですか？",
          zh: "美香，你家怎么样？",
          de: "Und wie ist es bei dir zu Hause, Mika?",
          en: "What about your house, Mika?",
          fr: "Et chez toi, Mika ?"
        }
      },
      {
        id: "e8",
        speaker: "みか",
        translations: {
          ja: "わたしは おっとと むすめと すんでいます。",
          zh: "我和丈夫、女儿住在一起。",
          de: "Ich wohne mit meinem Mann und meiner Tochter.",
          en: "I live with my husband and daughter.",
          fr: "J'habite avec mon mari et ma fille."
        }
      },
      {
        id: "e9",
        speaker: "けん",
        translations: {
          ja: "むすめさんは なんさいですか？",
          zh: "你女儿多大了？",
          de: "Wie alt ist deine Tochter?",
          en: "How old is your daughter?",
          fr: "Quel âge a ta fille ?"
        }
      },
      {
        id: "e10",
        speaker: "みか",
        translations: {
          ja: "さんさいです。とても にぎやかです。",
          zh: "三岁。她非常活泼。",
          de: "Drei Jahre alt. Sie ist sehr lebhaft.",
          en: "Three years old. She's very lively.",
          fr: "Trois ans. Elle est très animée."
        }
      },
      {
        id: "e11",
        speaker: "けん",
        translations: {
          ja: "ペットも いますか？",
          zh: "你也有宠物吗？",
          de: "Hast du auch ein Haustier?",
          en: "Do you have a pet too?",
          fr: "As-tu aussi un animal de compagnie ?"
        }
      },
      {
        id: "e12",
        speaker: "みか",
        translations: {
          ja: "はい、ねこが にひき います。",
          zh: "有，我有两只猫。",
          de: "Ja, ich habe zwei Katzen.",
          en: "Yes, I have two cats.",
          fr: "Oui, j'ai deux chats."
        }
      },
      {
        id: "e13",
        speaker: "けん",
        translations: {
          ja: "しずかな いえですか？",
          zh: "你家安静吗？",
          de: "Ist es bei euch ruhig zu Hause?",
          en: "Is your house quiet?",
          fr: "Chez toi, c'est calme ?"
        }
      },
      {
        id: "e14",
        speaker: "みか",
        translations: {
          ja: "いいえ、むすめが いるので にぎやかです！",
          zh: "不，因为我女儿在，很热闹！",
          de: "Nein, es ist lebhaft wegen meiner Tochter!",
          en: "No, it's lively because of my daughter!",
          fr: "Non, c'est animé à cause de ma fille !"
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
    title: { ja: "フレール・ジャックさん", en: "Brother John", de: "Bruder Jakob", zh: "雅各弟兄", fr: "Frère Jacques" },
    lines: [
      { id: "sg1", translations: { ja: "ねえ ジャックさん、ねえ ジャックさん", en: "Brother John, Brother John,", de: "Bruder Jakob, Bruder Jakob,", zh: "雅各弟兄，雅各弟兄，", fr: "Frère Jacques, Frère Jacques," } },
      { id: "sg2", translations: { ja: "ねていますか", en: "are you sleeping?", de: "schläfst du noch?", zh: "你还在睡觉吗？", fr: "Dormez-vous ?" } },
      { id: "sg3", translations: { ja: "ねていますか", en: "are you sleeping?", de: "schläfst du noch?", zh: "你还在睡觉吗？", fr: "Dormez-vous ?" } },
      { id: "sg4", translations: { ja: "かねが なってるよ", en: "Don't you hear the bells?", de: "Hörst du nicht die Glocken?", zh: "你没听见钟声吗？", fr: "Sonnez les matines," } },
      { id: "sg5", translations: { ja: "キン コン カン", en: "Ding, dang, dong.", de: "Ding, dang, dong.", zh: "叮，当，咚。", fr: "Ding, dang, dong." } },
      { id: "sg6", translations: { ja: "キン コン カン", en: "Ding, dang, dong.", de: "Ding, dang, dong.", zh: "叮，当，咚。", fr: "Ding, dang, dong." } }
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
    },
    fr: {
      title: {
        fr: "Être / Avoir",
        en: "To Be / To Have",
        de: "Sein / Haben",
        ja: "être と avoir",
        zh: "être／avoir"
      },
      explanation: {
        fr: "« être » (je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont) sert à décrire ou identifier quelqu'un ou quelque chose. « avoir » (j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont) sert à exprimer la possession — contrairement au japonais, le français utilise le même verbe « avoir » pour les personnes, les animaux et les objets, sans distinction.",
        en: "\"être\" (to be: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont) describes or identifies someone or something. \"avoir\" (to have: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont) expresses possession — unlike Japanese, French uses the same verb \"avoir\" for people, animals, and objects alike, with no distinction.",
        de: "„être\" (sein: je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont) beschreibt oder identifiziert jemanden oder etwas. „avoir\" (haben: j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont) drückt Besitz aus — anders als im Japanischen benutzt Französisch dasselbe Verb „avoir\" für Menschen, Tiere und Gegenstände, ohne Unterschied.",
        ja: "「être」（〜だ／〜です：je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont）は、ひとや ものを せつめいしたり とくていしたり する ときに つかいます。「avoir」（もつ：j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont）は しょゆうを あらわします。にほんごと ちがって、フランスごは ひと・どうぶつ・ものの すべてに おなじ「avoir」を つかい、くべつしません。",
        zh: "「être」（是：je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont）用于描述或确认某人或某物。「avoir」（有：j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont）用于表达拥有——与日语不同，法语对人、动物和物品都使用同一个动词「avoir」，没有区分。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            fr: "C'est une photo de ma famille.",
            en: "This is a photo of my family. (être — identifying)",
            de: "Das ist ein Foto meiner Familie. (être — identifizieren)",
            ja: "これは かぞくの しゃしんです。（être — とくてい）",
            zh: "这是我家的照片。（être — 确认）"
          }
        },
        {
          id: "g2",
          translations: {
            fr: "Nous sommes quatre dans ma famille.",
            en: "There are four of us in my family. (être — describing)",
            de: "Wir sind vier in meiner Familie. (être — beschreiben)",
            ja: "かぞくは よにんです。（être — せつめい）",
            zh: "我家有四口人。（être — 描述）"
          }
        },
        {
          id: "g3",
          translations: {
            fr: "J'ai une petite sœur.",
            en: "I have a younger sister. (avoir — same verb for people)",
            de: "Ich habe eine jüngere Schwester. (avoir — dasselbe Verb für Personen)",
            ja: "いもうとが います。（avoir — ひとにも おなじ どうし）",
            zh: "我有一个妹妹。（avoir — 人也用同一个动词）"
          }
        },
        {
          id: "g4",
          translations: {
            fr: "J'ai un chat.",
            en: "I have a cat. (avoir — animals, same verb)",
            de: "Ich habe eine Katze. (avoir — Tiere, dasselbe Verb)",
            ja: "ねこが います。（avoir — どうぶつも おなじ どうし）",
            zh: "我有一只猫。（avoir — 动物也用同一个动词）"
          }
        },
        {
          id: "g5",
          translations: {
            fr: "Mes parents ont une grande maison.",
            en: "My parents have a big house. (avoir — things, same verb again)",
            de: "Meine Eltern haben ein großes Haus. (avoir — Dinge, wieder dasselbe Verb)",
            ja: "わたしの りょうしんには おおきい いえが あります。（avoir — ものも おなじ どうし）",
            zh: "我父母有一栋大房子。（avoir — 物品也用同一个动词）"
          }
        },
        {
          id: "g6",
          translations: {
            fr: "Mes parents sont gentils.",
            en: "My parents are kind. (être — plural description)",
            de: "Meine Eltern sind freundlich. (être — Pluralbeschreibung)",
            ja: "わたしの りょうしんは やさしいです。（être — ふくすうの せつめい）",
            zh: "我父母很友善。（être — 复数描述）"
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
    ],
    fr: [
      {
        id: "grammar-drill-etre",
        title: { fr: "Exercice : être", en: "Practice: Être", de: "Übung: Être", ja: "れんしゅう：être", zh: "练习：être" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases avec être.",
          en: "Next, let's practice example sentences using être.",
          de: "Als Nächstes üben wir Beispielsätze mit être.",
          ja: "つぎは、êtreを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用être的例句。"
        },
        lines: [
          { id: "s1", translations: { fr: "Je suis étudiant.", en: "I am a student.", de: "Ich bin Student.", ja: "わたしは がくせいです。", zh: "我是学生。" } },
          { id: "s2", translations: { fr: "Tu es gentil.", en: "You are kind.", de: "Du bist freundlich.", ja: "あなたは やさしいです。", zh: "你很友善。" } },
          { id: "s3", translations: { fr: "Il est médecin.", en: "He is a doctor.", de: "Er ist Arzt.", ja: "かれは いしゃです。", zh: "他是医生。" } },
          { id: "s4", translations: { fr: "Elle est professeure.", en: "She is a teacher.", de: "Sie ist Lehrerin.", ja: "かのじょは せんせいです。", zh: "她是老师。" } },
          { id: "s5", translations: { fr: "Ma sœur est calme.", en: "My sister is quiet.", de: "Meine Schwester ist ruhig.", ja: "わたしの あねは しずかです。", zh: "我姐姐很安静。" } },
          { id: "s6", translations: { fr: "Nous sommes étudiants.", en: "We are students.", de: "Wir sind Studenten.", ja: "わたしたちは がくせいです。", zh: "我们是学生。" } },
          { id: "s7", translations: { fr: "Mes parents sont stricts.", en: "My parents are strict.", de: "Meine Eltern sind streng.", ja: "わたしの りょうしんは きびしいです。", zh: "我父母很严格。" } },
          { id: "s8", translations: { fr: "Le chien est mignon.", en: "The dog is cute.", de: "Der Hund ist süß.", ja: "その いぬは かわいいです。", zh: "那只狗很可爱。" } },
          { id: "s9", translations: { fr: "Je suis professeur.", en: "I am a teacher.", de: "Ich bin Lehrerin.", ja: "わたしは せんせいです。", zh: "我是老师。" } },
          { id: "s10", translations: { fr: "Mes grands-parents sont animés.", en: "My grandparents are lively.", de: "Meine Großeltern sind lebhaft.", ja: "わたしの そふぼは げんきです。", zh: "我的祖父母很有活力。" } }
        ]
      },
      {
        id: "grammar-drill-avoir",
        title: { fr: "Exercice : avoir", en: "Practice: Avoir", de: "Übung: Avoir", ja: "れんしゅう：avoir", zh: "练习：avoir" },
        spokenIntro: {
          fr: "Ensuite, pratiquons des phrases avec avoir.",
          en: "Next, let's practice example sentences using avoir.",
          de: "Als Nächstes üben wir Beispielsätze mit avoir.",
          ja: "つぎは、avoirを つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用avoir的例句。"
        },
        lines: [
          { id: "h1", translations: { fr: "J'ai un frère.", en: "I have a brother.", de: "Ich habe einen Bruder.", ja: "わたしには あにが います。", zh: "我有一个哥哥。" } },
          { id: "h2", translations: { fr: "J'ai une sœur.", en: "I have a sister.", de: "Ich habe eine Schwester.", ja: "わたしには あねが います。", zh: "我有一个姐姐。" } },
          { id: "h3", translations: { fr: "Nous avons un chat.", en: "We have a cat.", de: "Wir haben eine Katze.", ja: "わたしたちには ねこが います。", zh: "我们有一只猫。" } },
          { id: "h4", translations: { fr: "Mes parents ont une maison.", en: "My parents have a house.", de: "Meine Eltern haben ein Haus.", ja: "わたしの りょうしんには いえが あります。", zh: "我父母有一栋房子。" } },
          { id: "h5", translations: { fr: "J'ai deux enfants.", en: "I have two children.", de: "Ich habe zwei Kinder.", ja: "わたしには こどもが ふたり います。", zh: "我有两个孩子。" } },
          { id: "h6", translations: { fr: "Ma grand-mère a un chien.", en: "My grandmother has a dog.", de: "Meine Großmutter hat einen Hund.", ja: "わたしの そぼには いぬが います。", zh: "我奶奶有一只狗。" } },
          { id: "h7", translations: { fr: "Nous avons un animal de compagnie.", en: "We have a pet.", de: "Wir haben ein Haustier.", ja: "わたしたちには ペットが います。", zh: "我们有一只宠物。" } },
          { id: "h8", translations: { fr: "J'ai un fils et une fille.", en: "I have a son and a daughter.", de: "Ich habe einen Sohn und eine Tochter.", ja: "わたしには むすこと むすめが います。", zh: "我有一个儿子和一个女儿。" } },
          { id: "h9", translations: { fr: "Ma famille a une grande voiture.", en: "My family has a big car.", de: "Meine Familie hat ein großes Auto.", ja: "わたしの かぞくには おおきい くるまが あります。", zh: "我家有一辆大车。" } },
          { id: "h10", translations: { fr: "Il a beaucoup de frères et sœurs.", en: "He has many siblings.", de: "Er hat viele Geschwister.", ja: "かれには きょうだいが おおぜい います。", zh: "他有很多兄弟姐妹。" } }
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
    },
    fr: {
      title: {
        fr: "Exercice de prononciation",
        en: "Pronunciation Practice",
        de: "Aussprachetraining",
        ja: "はつおんの れんしゅう",
        zh: "发音练习"
      },
      groupLabels: {
        nasal_on: { fr: "Voyelle nasale on/om", en: "Nasal vowel on/om", de: "Nasalvokal on/om", ja: "びおん on/om", zh: "鼻化元音on/om" },
        nasal_an: { fr: "Voyelle nasale an/en", en: "Nasal vowel an/en", de: "Nasalvokal an/en", ja: "びおん an/en", zh: "鼻化元音an/en" },
        nasal_in: { fr: "Voyelle nasale in/ain", en: "Nasal vowel in/ain", de: "Nasalvokal in/ain", ja: "びおん in/ain", zh: "鼻化元音in/ain" },
        liaison: { fr: "Liaison", en: "Liaison (linking)", de: "Liaison (Verbindung)", ja: "リエゾン（つなげる はつおん）", zh: "连音" }
      },
      items: [
        { id: "on1", category: "nasal_on", translations: { fr: "maison", en: "house", de: "Haus", ja: "いえ", zh: "房子" } },
        { id: "on2", category: "nasal_on", translations: { fr: "oncle", en: "uncle", de: "Onkel", ja: "おじ", zh: "叔叔／舅舅" } },
        { id: "on3", category: "nasal_on", translations: { fr: "bonjour", en: "hello", de: "Hallo", ja: "こんにちは", zh: "你好" } },
        { id: "on4", category: "nasal_on", translations: { fr: "mon", en: "my (masc.)", de: "mein", ja: "わたしの（だんせい）", zh: "我的（阳性）" } },
        { id: "an1", category: "nasal_an", translations: { fr: "grand-père", en: "grandfather", de: "Großvater", ja: "そふ", zh: "爷爷" } },
        { id: "an2", category: "nasal_an", translations: { fr: "enfant", en: "child", de: "Kind", ja: "こども", zh: "孩子" } },
        { id: "an3", category: "nasal_an", translations: { fr: "maman", en: "mom", de: "Mama", ja: "ママ", zh: "妈妈" } },
        { id: "an4", category: "nasal_an", translations: { fr: "tante", en: "aunt", de: "Tante", ja: "おば", zh: "阿姨／姑姑" } },
        { id: "in1", category: "nasal_in", translations: { fr: "cousin", en: "cousin", de: "Cousin", ja: "いとこ", zh: "表兄弟" } },
        { id: "in2", category: "nasal_in", translations: { fr: "fin", en: "end", de: "Ende", ja: "おわり", zh: "结束" } },
        { id: "in3", category: "nasal_in", translations: { fr: "matin", en: "morning", de: "Morgen", ja: "あさ", zh: "早上" } },
        { id: "in4", category: "nasal_in", translations: { fr: "invité", en: "guest", de: "Gast", ja: "きゃく", zh: "客人" } },
        { id: "li1", category: "liaison", translations: { fr: "les enfants", en: "the children (liaison: s→z)", de: "die Kinder (Liaison: s→z)", ja: "こどもたち（リエゾン：s→z）", zh: "孩子们（连音：s→z）" } },
        { id: "li2", category: "liaison", translations: { fr: "mes amis", en: "my friends (liaison: s→z)", de: "meine Freunde (Liaison: s→z)", ja: "わたしの ともだち（リエゾン：s→z）", zh: "我的朋友们（连音：s→z）" } },
        { id: "li3", category: "liaison", translations: { fr: "un grand ami", en: "a great friend (liaison: d→t)", de: "ein guter Freund (Liaison: d→t)", ja: "しんゆう（リエゾン：d→t）", zh: "一个好朋友（连音：d→t）" } },
        { id: "li4", category: "liaison", translations: { fr: "nous avons", en: "we have (liaison: s→z)", de: "wir haben (Liaison: s→z)", ja: "わたしたちは もっている（リエゾン：s→z）", zh: "我们有（连音：s→z）" } }
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
          { id: "b8", category: "b", translations: { de: "Boden", en: "floor, ground", ja: "ゆか、じめん", zh: "地板，地面" } },
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
    ],
    fr: [
      {
        id: "sound-drill",
        title: {
          fr: "Exercice de prononciation 2",
          en: "Pronunciation Practice 2",
          de: "Aussprachetraining 2",
          ja: "はつおんの れんしゅう２",
          zh: "发音练习2"
        },
        spokenIntro: {
          fr: "Ensuite, pratiquons avec beaucoup plus d'exemples.",
          en: "Next, let's practice with a lot more examples.",
          de: "Als Nächstes üben wir mit vielen weiteren Beispielen.",
          ja: "つぎは、もっと たくさんの れいで れんしゅうしましょう。",
          zh: "接下来，让我们用更多的例子来练习。"
        },
        groupLabels: {
          nasal_on: { fr: "Voyelle nasale on/om", en: "Nasal vowel on/om", de: "Nasalvokal on/om", ja: "びおん on/om", zh: "鼻化元音on/om" },
          nasal_an: { fr: "Voyelle nasale an/en", en: "Nasal vowel an/en", de: "Nasalvokal an/en", ja: "びおん an/en", zh: "鼻化元音an/en" },
          nasal_in: { fr: "Voyelle nasale in/ain", en: "Nasal vowel in/ain", de: "Nasalvokal in/ain", ja: "びおん in/ain", zh: "鼻化元音in/ain" },
          liaison: { fr: "Liaison", en: "Liaison (linking)", de: "Liaison (Verbindung)", ja: "リエゾン（つなげる はつおん）", zh: "连音" }
        },
        items: [
          { id: "on5", category: "nasal_on", translations: { fr: "mouton", en: "sheep", de: "Schaf", ja: "ひつじ", zh: "绵羊" } },
          { id: "on6", category: "nasal_on", translations: { fr: "bonbon", en: "candy", de: "Bonbon", ja: "あめ", zh: "糖果" } },
          { id: "on7", category: "nasal_on", translations: { fr: "ballon", en: "ball", de: "Ball", ja: "ボール", zh: "球" } },
          { id: "on8", category: "nasal_on", translations: { fr: "poisson", en: "fish", de: "Fisch", ja: "さかな", zh: "鱼" } },
          { id: "on9", category: "nasal_on", translations: { fr: "saison", en: "season", de: "Jahreszeit", ja: "きせつ", zh: "季节" } },
          { id: "on10", category: "nasal_on", translations: { fr: "garçon", en: "boy", de: "Junge", ja: "おとこのこ", zh: "男孩" } },
          { id: "on11", category: "nasal_on", translations: { fr: "chanson", en: "song", de: "Lied", ja: "うた", zh: "歌曲" } },
          { id: "on12", category: "nasal_on", translations: { fr: "montagne", en: "mountain", de: "Berg", ja: "やま", zh: "山" } },
          { id: "on13", category: "nasal_on", translations: { fr: "onze", en: "eleven", de: "elf", ja: "じゅういち", zh: "十一" } },
          { id: "on14", category: "nasal_on", translations: { fr: "non", en: "no", de: "nein", ja: "いいえ", zh: "不" } },
          { id: "on15", category: "nasal_on", translations: { fr: "avion", en: "airplane", de: "Flugzeug", ja: "ひこうき", zh: "飞机" } },
          { id: "on16", category: "nasal_on", translations: { fr: "melon", en: "melon", de: "Melone", ja: "メロン", zh: "甜瓜" } },
          { id: "on17", category: "nasal_on", translations: { fr: "salon", en: "living room", de: "Wohnzimmer", ja: "リビング", zh: "客厅" } },
          { id: "on18", category: "nasal_on", translations: { fr: "pardon", en: "excuse me", de: "Entschuldigung", ja: "すみません", zh: "对不起" } },

          { id: "an5", category: "nasal_an", translations: { fr: "grand-mère", en: "grandmother", de: "Großmutter", ja: "そぼ", zh: "奶奶" } },
          { id: "an6", category: "nasal_an", translations: { fr: "dimanche", en: "Sunday", de: "Sonntag", ja: "にちようび", zh: "星期天" } },
          { id: "an7", category: "nasal_an", translations: { fr: "restaurant", en: "restaurant", de: "Restaurant", ja: "レストラン", zh: "餐厅" } },
          { id: "an8", category: "nasal_an", translations: { fr: "chambre", en: "bedroom", de: "Schlafzimmer", ja: "しんしつ", zh: "卧室" } },
          { id: "an9", category: "nasal_an", translations: { fr: "orange", en: "orange", de: "Orange", ja: "オレンジ", zh: "橙子" } },
          { id: "an10", category: "nasal_an", translations: { fr: "blanc", en: "white", de: "weiß", ja: "しろ", zh: "白色" } },
          { id: "an11", category: "nasal_an", translations: { fr: "grand", en: "big, tall", de: "groß", ja: "おおきい", zh: "大的" } },
          { id: "an12", category: "nasal_an", translations: { fr: "sans", en: "without", de: "ohne", ja: "〜なしで", zh: "没有" } },
          { id: "an13", category: "nasal_an", translations: { fr: "dans", en: "in, inside", de: "in", ja: "〜のなかに", zh: "在……里面" } },
          { id: "an14", category: "nasal_an", translations: { fr: "quarante", en: "forty", de: "vierzig", ja: "よんじゅう", zh: "四十" } },
          { id: "an15", category: "nasal_an", translations: { fr: "cent", en: "hundred", de: "hundert", ja: "ひゃく", zh: "一百" } },
          { id: "an16", category: "nasal_an", translations: { fr: "vent", en: "wind", de: "Wind", ja: "かぜ", zh: "风" } },
          { id: "an17", category: "nasal_an", translations: { fr: "lent", en: "slow", de: "langsam", ja: "おそい", zh: "慢的" } },
          { id: "an18", category: "nasal_an", translations: { fr: "enfin", en: "finally", de: "endlich", ja: "ついに", zh: "终于" } },

          { id: "in5", category: "nasal_in", translations: { fr: "cinq", en: "five", de: "fünf", ja: "ご", zh: "五" } },
          { id: "in6", category: "nasal_in", translations: { fr: "vin", en: "wine", de: "Wein", ja: "ワイン", zh: "葡萄酒" } },
          { id: "in7", category: "nasal_in", translations: { fr: "pain", en: "bread", de: "Brot", ja: "パン", zh: "面包" } },
          { id: "in8", category: "nasal_in", translations: { fr: "main", en: "hand", de: "Hand", ja: "て", zh: "手" } },
          { id: "in9", category: "nasal_in", translations: { fr: "jardin", en: "garden", de: "Garten", ja: "にわ", zh: "花园" } },
          { id: "in10", category: "nasal_in", translations: { fr: "magasin", en: "store", de: "Geschäft", ja: "みせ", zh: "商店" } },
          { id: "in11", category: "nasal_in", translations: { fr: "lapin", en: "rabbit", de: "Hase", ja: "うさぎ", zh: "兔子" } },
          { id: "in12", category: "nasal_in", translations: { fr: "chemin", en: "path", de: "Weg", ja: "みち", zh: "路" } },
          { id: "in13", category: "nasal_in", translations: { fr: "dessin", en: "drawing", de: "Zeichnung", ja: "え", zh: "图画" } },
          { id: "in14", category: "nasal_in", translations: { fr: "voisin", en: "neighbor", de: "Nachbar", ja: "となりのひと", zh: "邻居" } },
          { id: "in15", category: "nasal_in", translations: { fr: "américain", en: "American", de: "amerikanisch", ja: "アメリカの", zh: "美国的" } },
          { id: "in16", category: "nasal_in", translations: { fr: "demain", en: "tomorrow", de: "morgen", ja: "あした", zh: "明天" } },
          { id: "in17", category: "nasal_in", translations: { fr: "bien", en: "well, good", de: "gut", ja: "よく、げんきに", zh: "好，很好" } },
          { id: "in18", category: "nasal_in", translations: { fr: "rien", en: "nothing", de: "nichts", ja: "なにも（〜ない）", zh: "什么都（不）" } },

          { id: "li5", category: "liaison", translations: { fr: "vous êtes", en: "you are (liaison: s→z)", de: "Sie sind (Liaison: s→z)", ja: "あなたは 〜です（リエゾン：s→z）", zh: "你是（连音：s→z）" } },
          { id: "li6", category: "liaison", translations: { fr: "ils ont", en: "they have (liaison: s→z)", de: "sie haben (Liaison: s→z)", ja: "かれらは もっている（リエゾン：s→z）", zh: "他们有（连音：s→z）" } },
          { id: "li7", category: "liaison", translations: { fr: "elles habitent", en: "they live (fem., liaison: s→z)", de: "sie wohnen (fem., Liaison: s→z)", ja: "かのじょたちは すんでいる（リエゾン：s→z）", zh: "她们住（连音：s→z）" } },
          { id: "li8", category: "liaison", translations: { fr: "deux enfants", en: "two children (liaison: x→z)", de: "zwei Kinder (Liaison: x→z)", ja: "こども ふたり（リエゾン：x→z）", zh: "两个孩子（连音：x→z）" } },
          { id: "li9", category: "liaison", translations: { fr: "trois amis", en: "three friends (liaison: s→z)", de: "drei Freunde (Liaison: s→z)", ja: "ともだち さんにん（リエゾン：s→z）", zh: "三个朋友（连音：s→z）" } },
          { id: "li10", category: "liaison", translations: { fr: "dix ans", en: "ten years (liaison: x→z)", de: "zehn Jahre (Liaison: x→z)", ja: "じゅっさい（リエゾン：x→z）", zh: "十岁（连音：x→z）" } },
          { id: "li11", category: "liaison", translations: { fr: "quand il", en: "when he (liaison: d→t)", de: "wenn er (Liaison: d→t)", ja: "かれが 〜するとき（リエゾン：d→t）", zh: "当他……时（连音：d→t）" } },
          { id: "li12", category: "liaison", translations: { fr: "très heureux", en: "very happy (liaison: s→z)", de: "sehr glücklich (Liaison: s→z)", ja: "とても うれしい（リエゾン：s→z）", zh: "非常高兴（连音：s→z）" } },
          { id: "li13", category: "liaison", translations: { fr: "tout à fait", en: "absolutely (liaison: t audible)", de: "absolut (Liaison: t hörbar)", ja: "まったく（リエゾン：tが きこえる）", zh: "完全（连音：t发音）" } },
          { id: "li14", category: "liaison", translations: { fr: "petit ami", en: "boyfriend (liaison: t audible)", de: "Freund (Liaison: t hörbar)", ja: "かれし（リエゾン：tが きこえる）", zh: "男朋友（连音：t发音）" } },
          { id: "li15", category: "liaison", translations: { fr: "grand oncle", en: "great-uncle (liaison: d→t)", de: "Großonkel (Liaison: d→t)", ja: "おおおじ（リエゾン：d→t）", zh: "叔公（连音：d→t）" } },
          { id: "li16", category: "liaison", translations: { fr: "mon ami", en: "my friend (liaison: n audible)", de: "mein Freund (Liaison: n hörbar)", ja: "わたしの ともだち（リエゾン：nが きこえる）", zh: "我的朋友（连音：n发音）" } },
          { id: "li17", category: "liaison", translations: { fr: "son école", en: "his/her school (liaison: n audible)", de: "seine/ihre Schule (Liaison: n hörbar)", ja: "かれ／かのじょの がっこう（リエゾン：nが きこえる）", zh: "他／她的学校（连音：n发音）" } },
          { id: "li18", category: "liaison", translations: { fr: "les amis", en: "the friends (liaison: s→z)", de: "die Freunde (Liaison: s→z)", ja: "ともだちたち（リエゾン：s→z）", zh: "朋友们（连音：s→z）" } }
        ]
      }
    ]
  }
};
