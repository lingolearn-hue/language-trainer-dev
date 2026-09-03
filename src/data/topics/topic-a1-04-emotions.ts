import type { TopicLesson } from "../topicTypes";

// Migrated from lessonJapanese4.ts — see docs/topic-lesson-system.md.
// Vocab/dialogue/song extracted verbatim (already fully multi-language
// data); ja grammar/pronunciation carried over unchanged from
// the original file. No content was rewritten in this migration.

export const topicEmotions: TopicLesson = {
  id: "topic-a1-04-emotions",
  lessonNumber: 4,
  topicName: {
    ja: "きもち",
    zh: "情绪",
    de: "Gefühle",
    en: "Emotions"
  },
  vocab: [
    {
      id: "v01",
      category: "noun",
      translations: {
        ja: "きもち",
        zh: "感觉",
        de: "Gefühl",
        en: "feeling"
      }
    },
    {
      id: "v02",
      category: "noun",
      translations: {
        ja: "げんいん",
        zh: "原因",
        de: "Ursache, Grund",
        en: "cause, reason"
      }
    },
    {
      id: "v03",
      category: "noun",
      translations: {
        ja: "なみだ",
        zh: "泪",
        de: "Tränen",
        en: "tears"
      }
    },
    {
      id: "v04",
      category: "noun",
      translations: {
        ja: "えがお",
        zh: "笑脸",
        de: "lächelndes Gesicht",
        en: "smiling face"
      }
    },
    {
      id: "v05",
      category: "noun",
      translations: {
        ja: "ストレス",
        zh: "压力",
        de: "Stress",
        en: "stress"
      }
    },
    {
      id: "v06",
      category: "noun",
      translations: {
        ja: "しんぱいごと",
        zh: "担心",
        de: "eine Sorge",
        en: "a worry, concern"
      }
    },
    {
      id: "v07",
      category: "verb",
      translations: {
        ja: "なく",
        zh: "哭",
        de: "weinen",
        en: "to cry"
      }
    },
    {
      id: "v08",
      category: "verb",
      translations: {
        ja: "わらう",
        zh: "笑",
        de: "lachen, lächeln",
        en: "to laugh, smile"
      }
    },
    {
      id: "v09",
      category: "verb",
      translations: {
        ja: "おこる",
        zh: "生气",
        de: "wütend werden",
        en: "to get angry"
      }
    },
    {
      id: "v10",
      category: "verb",
      translations: {
        ja: "しんぱいする",
        zh: "担心",
        de: "sich sorgen",
        en: "to worry"
      }
    },
    {
      id: "v11",
      category: "verb",
      translations: {
        ja: "なぐさめる",
        zh: "安慰",
        de: "trösten",
        en: "to comfort"
      }
    },
    {
      id: "v12",
      category: "verb",
      translations: {
        ja: "おちつく",
        zh: "冷静",
        de: "sich beruhigen",
        en: "to calm down"
      }
    },
    {
      id: "v13",
      category: "verb",
      translations: {
        ja: "つかれる",
        zh: "累",
        de: "müde werden",
        en: "to get tired"
      }
    },
    {
      id: "v14",
      category: "verb",
      translations: {
        ja: "きんちょうする",
        zh: "紧张",
        de: "nervös werden",
        en: "to get nervous"
      }
    },
    {
      id: "v15",
      category: "verb",
      translations: {
        ja: "リラックスする",
        zh: "放松",
        de: "entspannen",
        en: "to relax"
      }
    },
    {
      id: "v16",
      category: "verb",
      translations: {
        ja: "がまんする",
        zh: "忍耐",
        de: "aushalten, zurückhalten",
        en: "to endure, hold back"
      }
    },
    {
      id: "v17",
      category: "adjective",
      translations: {
        ja: "うれしい",
        zh: "高兴",
        de: "glücklich, froh",
        en: "happy, glad"
      }
    },
    {
      id: "v18",
      category: "adjective",
      translations: {
        ja: "かなしい",
        zh: "难过",
        de: "traurig",
        en: "sad"
      }
    },
    {
      id: "v19",
      category: "adjective",
      translations: {
        ja: "さびしい",
        zh: "孤独",
        de: "einsam",
        en: "lonely"
      }
    },
    {
      id: "v20",
      category: "adjective",
      translations: {
        ja: "たのしい",
        zh: "开心",
        de: "lustig, angenehm",
        en: "fun, enjoyable"
      }
    },
    {
      id: "v21",
      category: "adjective",
      translations: {
        ja: "こわい",
        zh: "可怕",
        de: "beängstigend, ängstlich",
        en: "scary, afraid"
      }
    },
    {
      id: "v22",
      category: "adjective",
      translations: {
        ja: "はずかしい",
        zh: "尴尬",
        de: "peinlich berührt",
        en: "embarrassed"
      }
    },
    {
      id: "v23",
      category: "adjective",
      translations: {
        ja: "うらやましい",
        zh: "羡慕",
        de: "neidisch",
        en: "envious"
      }
    },
    {
      id: "v24",
      category: "adjective",
      translations: {
        ja: "つらい",
        zh: "难受",
        de: "schmerzhaft, schwer zu ertragen",
        en: "painful, hard to bear"
      }
    },
    {
      id: "v25",
      category: "adjective",
      translations: {
        ja: "ふあん",
        zh: "不安",
        de: "ängstlich, unruhig",
        en: "anxious, uneasy"
      }
    },
    {
      id: "v26",
      category: "adjective",
      translations: {
        ja: "らく",
        zh: "舒服",
        de: "entspannt, bequem",
        en: "at ease, comfortable"
      }
    },
    {
      id: "v27",
      category: "adjective",
      translations: {
        ja: "しんぱい",
        zh: "担心",
        de: "besorgt",
        en: "worried"
      }
    },
    {
      id: "v28",
      category: "adjective",
      translations: {
        ja: "げんき",
        zh: "有精神",
        de: "wohlauf, energisch",
        en: "well, energetic"
      }
    },
    {
      id: "v29",
      category: "adjective",
      translations: {
        ja: "たいへん",
        zh: "艰难",
        de: "hart, schwierig",
        en: "tough, difficult"
      }
    },
    {
      id: "v30",
      category: "adjective",
      translations: {
        ja: "だいじょうぶ",
        zh: "没关系",
        de: "okay, in Ordnung",
        en: "okay, fine"
      }
    },
    {
      id: "v31",
      category: "noun",
      translations: {
        ja: "しごと",
        zh: "工作",
        de: "Arbeit, Job",
        en: "work, job"
      }
    },
    {
      id: "v32",
      category: "noun",
      translations: {
        ja: "たべもの",
        zh: "食物",
        de: "Essen",
        en: "food"
      }
    },
    {
      id: "v33",
      category: "verb",
      translations: {
        ja: "しっぱいする",
        zh: "失败",
        de: "scheitern, einen Fehler machen",
        en: "to fail, make a mistake"
      }
    },
    {
      id: "v34",
      category: "verb",
      translations: {
        ja: "がんばる",
        zh: "努力",
        de: "sich anstrengen, sein Bestes geben",
        en: "to try hard, do one's best"
      }
    },
    {
      id: "v35",
      category: "verb",
      translations: {
        ja: "おもう",
        zh: "想",
        de: "denken",
        en: "to think"
      }
    },
    {
      id: "v36",
      category: "verb",
      translations: {
        ja: "やすむ",
        zh: "休息",
        de: "sich ausruhen",
        en: "to rest"
      }
    },
    {
      id: "v37",
      category: "verb",
      translations: {
        ja: "むりを する",
        zh: "过度",
        de: "sich überanstrengen",
        en: "to overdo it"
      }
    },
    {
      id: "v38",
      category: "verb",
      translations: {
        ja: "きを つける",
        zh: "小心",
        de: "aufpassen, vorsichtig sein",
        en: "to be careful"
      }
    }
  ],
  dialogueA: {
    title: {
      ja: "かいわ：ともだちを なぐさめる",
      zh: "对话A：安慰朋友",
      de: "Dialog A: Einen Freund trösten",
      en: "Dialogue A: Comforting a Friend"
    },
    lines: [
      {
        id: "d1",
        speaker: "あい",
        translations: {
          ja: "だいじょうぶ？かなしそうですね。",
          zh: "你还好吗？看起来很难过。",
          de: "Geht es dir gut? Du siehst traurig aus.",
          en: "Are you okay? You look sad."
        }
      },
      {
        id: "d2",
        speaker: "けん",
        translations: {
          ja: "うん、あまり だいじょうぶじゃないです。",
          zh: "嗯，其实不太好。",
          de: "Ja, mir geht es nicht wirklich gut.",
          en: "Yeah, I'm not really okay."
        }
      },
      {
        id: "d3",
        speaker: "あい",
        translations: {
          ja: "なにが あったんですか？",
          zh: "发生什么事了？",
          de: "Was ist passiert?",
          en: "What happened?"
        }
      },
      {
        id: "d4",
        speaker: "けん",
        translations: {
          ja: "しごとで しっぱいしました。",
          zh: "我工作上出错了。",
          de: "Mir ist bei der Arbeit ein Fehler passiert.",
          en: "I made a mistake at work."
        }
      },
      {
        id: "d5",
        speaker: "あい",
        translations: {
          ja: "そうですか。それは つらいですね。",
          zh: "原来如此。真不容易。",
          de: "Verstehe. Das ist hart.",
          en: "I see. That's tough."
        }
      },
      {
        id: "d6",
        speaker: "けん",
        translations: {
          ja: "はずかしくて、なきたい きもちです。",
          zh: "我很尴尬，都想哭了。",
          de: "Es ist mir peinlich, und ich könnte weinen.",
          en: "I'm embarrassed, and I feel like crying."
        }
      },
      {
        id: "d7",
        speaker: "あい",
        translations: {
          ja: "だれでも しっぱいします。しんぱいしないで。",
          zh: "每个人都会犯错。别担心。",
          de: "Jeder macht Fehler. Mach dir keine Sorgen.",
          en: "Everyone makes mistakes. Don't worry."
        }
      },
      {
        id: "d8",
        speaker: "けん",
        translations: {
          ja: "ありがとう。すこし らくに なりました。",
          zh: "谢谢，我感觉舒服多了。",
          de: "Danke. Ich fühle mich schon etwas entspannter.",
          en: "Thank you. I feel a little more at ease."
        }
      },
      {
        id: "d9",
        speaker: "あい",
        translations: {
          ja: "いっしょに コーヒーでも のみましょう。",
          zh: "我们一起去喝杯咖啡吧。",
          de: "Lass uns zusammen einen Kaffee trinken gehen.",
          en: "Let's go get some coffee together."
        }
      },
      {
        id: "d10",
        speaker: "けん",
        translations: {
          ja: "いいですね。ありがとうございます。",
          zh: "好啊，谢谢。",
          de: "Das klingt gut. Danke.",
          en: "That sounds good. Thank you."
        }
      },
      {
        id: "d11",
        speaker: "あい",
        translations: {
          ja: "つぎは うまく いきますよ。",
          zh: "下次一定会顺利的。",
          de: "Beim nächsten Mal klappt es bestimmt.",
          en: "It'll go well next time."
        }
      },
      {
        id: "d12",
        speaker: "けん",
        translations: {
          ja: "そう おもいたいです。",
          zh: "我很想相信这一点。",
          de: "Das möchte ich gerne glauben.",
          en: "I want to believe that."
        }
      },
      {
        id: "d13",
        speaker: "あい",
        translations: {
          ja: "がんばってる ことは わかっています。",
          zh: "我知道你一直很努力。",
          de: "Ich weiß, dass du dich sehr anstrengst.",
          en: "I know you've been trying hard."
        }
      },
      {
        id: "d14",
        speaker: "けん",
        translations: {
          ja: "うれしいです。ありがとう。",
          zh: "这让我很开心。谢谢。",
          de: "Das macht mich glücklich. Danke.",
          en: "That makes me happy. Thank you."
        }
      }
    ]
  },
  dialogueB: {
    title: {
      ja: "かいわ：ぐあいが わるい りゆう",
      zh: "对话B：解释身体不适",
      de: "Dialog B: Erklären, dass es einem nicht gut geht",
      en: "Dialogue B: Explaining You're Unwell"
    },
    lines: [
      {
        id: "e1",
        speaker: "みか",
        translations: {
          ja: "げんきが ないですね。だいじょうぶですか？",
          zh: "你看起来很沮丧，还好吗？",
          de: "Du wirkst niedergeschlagen. Geht es dir gut?",
          en: "You seem down. Are you okay?"
        }
      },
      {
        id: "e2",
        speaker: "けん",
        translations: {
          ja: "あまり げんきじゃないです。",
          zh: "我不太舒服。",
          de: "Mir geht es nicht wirklich gut.",
          en: "I'm not really well."
        }
      },
      {
        id: "e3",
        speaker: "みか",
        translations: {
          ja: "どうしたんですか？",
          zh: "怎么了？",
          de: "Was ist los?",
          en: "What's wrong?"
        }
      },
      {
        id: "e4",
        speaker: "けん",
        translations: {
          ja: "きのう よく ねませんでした。",
          zh: "我昨天没睡好。",
          de: "Ich habe gestern nicht gut geschlafen.",
          en: "I didn't sleep well yesterday."
        }
      },
      {
        id: "e5",
        speaker: "みか",
        translations: {
          ja: "どうして ねませんでしたか？",
          zh: "你为什么没睡好？",
          de: "Warum hast du nicht geschlafen?",
          en: "Why didn't you sleep?"
        }
      },
      {
        id: "e6",
        speaker: "けん",
        translations: {
          ja: "しごとの ことで きんちょうしていました。",
          zh: "我因为工作的事很紧张。",
          de: "Ich war wegen der Arbeit nervös.",
          en: "I was nervous about work."
        }
      },
      {
        id: "e7",
        speaker: "みか",
        translations: {
          ja: "ストレスが おおいですか？",
          zh: "你压力很大吗？",
          de: "Hast du viel Stress?",
          en: "Do you have a lot of stress?"
        }
      },
      {
        id: "e8",
        speaker: "けん",
        translations: {
          ja: "はい、さいきん ストレスが たまっています。",
          zh: "是的，最近压力一直在积累。",
          de: "Ja, in letzter Zeit baut sich viel Stress bei mir auf.",
          en: "Yes, I've been building up stress recently."
        }
      },
      {
        id: "e9",
        speaker: "みか",
        translations: {
          ja: "たべものは たべましたか？",
          zh: "你吃东西了吗？",
          de: "Hast du etwas gegessen?",
          en: "Did you eat anything?"
        }
      },
      {
        id: "e10",
        speaker: "けん",
        translations: {
          ja: "いいえ、あさから なにも たべませんでした。",
          zh: "没有，从早上到现在什么都没吃。",
          de: "Nein, ich habe seit heute Morgen nichts gegessen.",
          en: "No, I haven't eaten anything since morning."
        }
      },
      {
        id: "e11",
        speaker: "みか",
        translations: {
          ja: "それは よくないですよ。すこし やすんで。",
          zh: "那可不好。请休息一下吧。",
          de: "Das ist nicht gut. Ruh dich ein bisschen aus.",
          en: "That's not good. Please rest a little."
        }
      },
      {
        id: "e12",
        speaker: "けん",
        translations: {
          ja: "そうですね。すこし リラックスします。",
          zh: "你说得对，我会放松一下的。",
          de: "Du hast recht. Ich werde mich etwas entspannen.",
          en: "You're right. I'll relax a bit."
        }
      },
      {
        id: "e13",
        speaker: "みか",
        translations: {
          ja: "むりを しないで くださいね。",
          zh: "请不要太勉强自己。",
          de: "Bitte überanstreng dich nicht.",
          en: "Please don't push yourself too hard."
        }
      },
      {
        id: "e14",
        speaker: "けん",
        translations: {
          ja: "ありがとう。きを つけます。",
          zh: "谢谢，我会小心的。",
          de: "Danke. Ich werde vorsichtig sein.",
          en: "Thank you. I'll be careful."
        }
      }
    ]
  },
  song: {
    // Row 4 is an open slot in docs/a1-master-lesson-table-v05.md —
    // filled with a repeat (not in the original v05 plan) so every
    // lesson has a song; see that doc's changelog for this addition.
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
        ja: "ひていけい",
        zh: "否定形",
        de: "Verneinung",
        en: "Negation"
      },
      explanation: {
        ja: "どうしの ていねいな ひていけいは「〜ません」です。い-けいようしの ひていは「〜くない」、な-けいようしと めいしの ひていは「〜じゃない」です。かこの ひていは「〜ませんでした」に なります。",
        zh: "动词礼貌形的否定是「〜ません」。い形容词的否定是「〜くない」，な形容词和名词的否定是「〜じゃない」。动词过去形的否定是「〜ませんでした」。",
        de: "Die höfliche Verneinung eines Verbs ist 〜ません. い-Adjektive werden mit 〜くない verneint. な-Adjektive und Nomen werden mit 〜じゃない verneint. Die verneinte Vergangenheit eines Verbs wird zu 〜ませんでした.",
        en: "The polite negative of a verb is 〜ません. い-adjectives negate with 〜くない. な-adjectives and nouns negate with 〜じゃない. The past negative of a verb becomes 〜ませんでした."
      },
      chunks: [
        {
          id: "g1",
          translations: {
            ja: "しんぱいしません。",
            zh: "我不会担心的。（动词，礼貌否定）",
            de: "Ich werde mir keine Sorgen machen. (Verb, höfliche Verneinung)",
            en: "I won't worry. (verb, polite negative)"
          }
        },
        {
          id: "g2",
          translations: {
            ja: "さびしくないです。",
            zh: "我不孤独。（い形容词否定）",
            de: "Ich bin nicht einsam. (い-Adjektiv, verneint)",
            en: "I'm not lonely. (い-adj negative)"
          }
        },
        {
          id: "g3",
          translations: {
            ja: "げんきじゃないです。",
            zh: "我状态不好。（な形容词否定）",
            de: "Mir geht es nicht gut. (な-Adjektiv, verneint)",
            en: "I'm not well. (な-adj negative)"
          }
        },
        {
          id: "g4",
          translations: {
            ja: "だいじょうぶじゃないです。",
            zh: "这样不行。（な形容词否定）",
            de: "Es ist nicht in Ordnung. (な-Adjektiv, verneint)",
            en: "It's not okay. (な-adj negative)"
          }
        },
        {
          id: "g5",
          translations: {
            ja: "きのう よく ねませんでした。",
            zh: "我昨天没睡好。（动词，过去否定）",
            de: "Ich habe gestern nicht gut geschlafen. (Verb, verneinte Vergangenheit)",
            en: "I didn't sleep well yesterday. (verb, past negative)"
          }
        },
        {
          id: "g6",
          translations: {
            ja: "なにも たべませんでした。",
            zh: "我什么都没吃。（动词，过去否定）",
            de: "Ich habe nichts gegessen. (Verb, verneinte Vergangenheit)",
            en: "I didn't eat anything. (verb, past negative)"
          }
        }
      ]
    },
    de: {
      title: {
        de: "Verneinung: nicht / kein",
        en: "Negation: nicht / kein",
        ja: "ひてい：nicht と kein",
        zh: "否定：nicht／kein"
      },
      explanation: {
        de: "nicht verneint Verben, Adjektive und Adverbien: Ich bin nicht traurig. kein verneint Nomen, die mit ein/eine stehen oder ganz ohne Artikel: Ich habe keine Sorge. Als Faustregel: gibt es ein Nomen ohne bestimmten Artikel, wird kein benutzt; sonst nicht.",
        en: "nicht negates verbs, adjectives, and adverbs: Ich bin nicht traurig (I am not sad). kein negates nouns that take ein/eine or no article at all: Ich habe keine Sorge (I have no worry). Rule of thumb: if there's a noun without a definite article, use kein; otherwise, use nicht.",
        ja: "nicht は どうし・けいようし・ふくしを ひていします：Ich bin nicht traurig（かなしくない）。kein は ein/eine が つく めいし、または むかんしの めいしを ひていします：Ich habe keine Sorge（しんぱいが ない）。めやす：ふていかんしの めいしが あれば kein、それ いがいは nicht。",
        zh: "nicht否定动词、形容词和副词：Ich bin nicht traurig（我不难过）。kein否定带ein/eine或不带冠词的名词：Ich habe keine Sorge（我没有担心）。经验法则：如果是不带定冠词的名词，用kein；其他情况用nicht。"
      },
      chunks: [
        {
          id: "g1",
          translations: {
            de: "Ich bin nicht traurig.",
            en: "I am not sad. (nicht + adjective)",
            ja: "わたしは かなしく ないです。（nicht + けいようし）",
            zh: "我不难过。（nicht + 形容词）"
          }
        },
        {
          id: "g2",
          translations: {
            de: "Er ist nicht müde.",
            en: "He is not tired. (nicht + adjective)",
            ja: "かれは つかれて いません。（nicht + けいようし）",
            zh: "他不累。（nicht + 形容词）"
          }
        },
        {
          id: "g3",
          translations: {
            de: "Ich habe keine Sorge.",
            en: "I have no worry. (kein + noun)",
            ja: "わたしは しんぱいが ありません。（kein + めいし）",
            zh: "我没有担心。（kein + 名词）"
          }
        },
        {
          id: "g4",
          translations: {
            de: "Sie hat keine Angst.",
            en: "She has no fear. (kein + noun)",
            ja: "かのじょは こわがって いません。（kein + めいし）",
            zh: "她不害怕。（kein + 名词）"
          }
        },
        {
          id: "g5",
          translations: {
            de: "Ich weine nicht.",
            en: "I am not crying. (nicht + verb)",
            ja: "わたしは ないて いません。（nicht + どうし）",
            zh: "我没有哭。（nicht + 动词）"
          }
        },
        {
          id: "g6",
          translations: {
            de: "Das ist nicht schwierig.",
            en: "That is not difficult. (nicht + adjective)",
            ja: "それは むずかしく ないです。（nicht + けいようし）",
            zh: "这不难。（nicht + 形容词）"
          }
        }
      ]
    }
  },
  grammarDrills: {
    de: [
      {
        id: "grammar-drill-verneinung",
        title: { de: "Übung: nicht / kein", en: "Practice: Nicht / Kein", ja: "れんしゅう：nicht と kein", zh: "练习：nicht／kein" },
        spokenIntro: {
          de: "Als Nächstes üben wir Beispielsätze mit nicht und kein.",
          en: "Next, let's practice example sentences using nicht and kein.",
          ja: "つぎは、nicht と kein を つかった れいぶんを れんしゅうしましょう。",
          zh: "接下来，让我们练习使用nicht和kein的例句。"
        },
        lines: [
          { id: "n1", translations: { de: "Ich bin nicht traurig.", en: "I am not sad. (nicht + adjective)", ja: "わたしは かなしく ないです。（nicht + けいようし）", zh: "我不难过。（nicht + 形容词）" } },
          { id: "n2", translations: { de: "Er ist nicht müde.", en: "He is not tired. (nicht + adjective)", ja: "かれは つかれて いません。（nicht + けいようし）", zh: "他不累。（nicht + 形容词）" } },
          { id: "n3", translations: { de: "Sie lacht nicht.", en: "She is not laughing. (nicht + verb)", ja: "かのじょは わらって いません。（nicht + どうし）", zh: "她没有笑。（nicht + 动词）" } },
          { id: "n4", translations: { de: "Wir weinen nicht mehr.", en: "We are not crying anymore. (nicht + verb)", ja: "わたしたちは もう ないて いません。（nicht + どうし）", zh: "我们不再哭了。（nicht + 动词）" } },
          { id: "n5", translations: { de: "Ich habe keine Sorge.", en: "I have no worry. (kein + noun)", ja: "わたしには しんぱいが ありません。（kein + めいし）", zh: "我没有担心。（kein + 名词）" } },
          { id: "n6", translations: { de: "Er hat keinen Stress.", en: "He has no stress. (kein + noun)", ja: "かれには ストレスが ありません。（kein + めいし）", zh: "他没有压力。（kein + 名词）" } },
          { id: "n7", translations: { de: "Wir haben keine Tränen mehr.", en: "We have no more tears. (kein + noun)", ja: "わたしたちには もう なみだが ありません。（kein + めいし）", zh: "我们没有眼泪了。（kein + 名词）" } },
          { id: "n8", translations: { de: "Das ist nicht schwierig.", en: "That is not difficult. (nicht + adjective)", ja: "それは むずかしく ないです。（nicht + けいようし）", zh: "那不难。（nicht + 形容词）" } },
          { id: "n9", translations: { de: "Sie hat keine Angst.", en: "She has no fear. (kein + noun)", ja: "かのじょは こわく ないです。（kein + めいし）", zh: "她不害怕。（kein + 名词）" } },
          { id: "n10", translations: { de: "Wir sind nicht wütend.", en: "We are not angry. (nicht + adjective)", ja: "わたしたちは おこって いません。（nicht + けいようし）", zh: "我们没有生气。（nicht + 形容词）" } }
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
        devoice: {
          ja: "「ません」の むせいか（ふくしゅう）",
          zh: "ません中的清化（巩固，否定形专项）",
          de: "Entstimmhaftung in ません (vertieft, verneinungsspezifisch)",
          en: "Devoicing in ません (reinforced, negation-specific)"
        },
        mora: {
          ja: "はくの リズム",
          zh: "音拍节奏",
          de: "Moratimierter Rhythmus",
          en: "Mora-timed rhythm"
        }
      },
      items: [
        {
          id: "de1",
          category: "devoice",
          translations: {
            ja: "しんぱいしません",
            zh: "读作[...shimasen]，す几乎不发音",
            de: "klingt wie [...shimasen], す fast stumm",
            en: "sounds like [...shimasen], す nearly silent"
          }
        },
        {
          id: "de2",
          category: "devoice",
          translations: {
            ja: "げんきじゃないです",
            zh: "结尾的です被清化，读作[...naides]",
            de: "das abschließende です entstimmt, klingt wie [...naides]",
            en: "final です devoiced, sounds like [...naides]"
          }
        },
        {
          id: "de3",
          category: "devoice",
          translations: {
            ja: "たべませんでした",
            zh: "读作[...masendeshta]",
            de: "klingt wie [...masendeshta]",
            en: "sounds like [...masendeshta]"
          }
        },
        {
          id: "de4",
          category: "devoice",
          translations: {
            ja: "すきじゃないです",
            zh: "开头的す被清化，读作[ski...]",
            de: "す am Anfang entstimmt, klingt wie [ski...]",
            en: "す devoiced at the start, sounds like [ski...]"
          }
        },
        {
          id: "m1",
          category: "mora",
          translations: {
            ja: "きょう",
            zh: "今天——2个音拍（きょ・う），不是1个音节",
            de: "heute — 2 Morae (きょ・う), nicht 1 Silbe",
            en: "today — 2 morae (きょ・う), not 1 syllable"
          }
        },
        {
          id: "m2",
          category: "mora",
          translations: {
            ja: "とうきょう",
            zh: "东京——4个音拍（と・う・きょ・う）",
            de: "Tokio — 4 Morae (と・う・きょ・う)",
            en: "Tokyo — 4 morae (と・う・きょ・う)"
          }
        },
        {
          id: "m3",
          category: "mora",
          translations: {
            ja: "がっこう",
            zh: "学校——4个音拍，小っ算作独立的一拍",
            de: "Schule — 4 Morae, das kleine っ zählt als eigener Schlag",
            en: "school — 4 morae, the small っ counts as its own beat"
          }
        },
        {
          id: "m4",
          category: "mora",
          translations: {
            ja: "しんぱい",
            zh: "担心——4个音拍，ん算作独立的一拍",
            de: "Sorge — 4 Morae, ん zählt als eigener Schlag",
            en: "worry — 4 morae, ん counts as its own beat"
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
        a_length: {
          de: "A — lang vs. kurz",
          en: "A — long vs. short",
          ja: "A — ながい と みじかい",
          zh: "A——长音与短音"
        },
        au: {
          de: "AU-Diphthong",
          en: "AU diphthong",
          ja: "AU の にじゅうぼいん",
          zh: "AU双元音"
        }
      },
      items: [
        {
          id: "a1",
          category: "a_length",
          translations: {
            de: "sagen",
            en: "to say (long A)",
            ja: "いう（ながい A）",
            zh: "说（长音A）"
          }
        },
        {
          id: "a2",
          category: "a_length",
          translations: {
            de: "angenehm",
            en: "pleasant (short A)",
            ja: "こころよい（みじかい A）",
            zh: "愉快的（短音A）"
          }
        },
        {
          id: "a3",
          category: "a_length",
          translations: {
            de: "Angst",
            en: "fear (short A)",
            ja: "きょうふ（みじかい A）",
            zh: "恐惧（短音A）"
          }
        },
        {
          id: "au1",
          category: "au",
          translations: {
            de: "traurig",
            en: "sad (AU diphthong)",
            ja: "かなしい（AU の にじゅうぼいん）",
            zh: "难过的（AU双元音）"
          }
        },
        {
          id: "au2",
          category: "au",
          translations: {
            de: "aushalten",
            en: "to endure (AU diphthong)",
            ja: "たえる（AU の にじゅうぼいん）",
            zh: "忍受（AU双元音）"
          }
        },
        {
          id: "au3",
          category: "au",
          translations: {
            de: "auch",
            en: "also, too (AU diphthong)",
            ja: "〜も（AU の にじゅうぼいん）",
            zh: "也（AU双元音）"
          }
        }
      ]
    }
  }
};
