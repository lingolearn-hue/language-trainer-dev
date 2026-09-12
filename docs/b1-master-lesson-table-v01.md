# B1 Master Lesson Table — English · Japanese · Chinese · German · French · Spanish

Built from `docs/grammar-items-a1-to-c2-v01.md`'s B1 grammar list (17
items). That list splits into two kinds: six items tagged "All"
(shared across every language, though realized differently in each),
and eleven items tagged to one specific language (German ×3, Japanese
×4, Chinese ×4). Neither French nor Spanish had dedicated B1 items in
that list — both were only present via the "All" items and item 2's
tag ("German, French, Spanish"). Given this project is now actively
building French and has Spanish's `PhraseSet` ready (see
`docs/status.md`'s "Known asymmetry" section), this table adds four
dedicated French/Spanish rows on the same footing as German's and
Japanese's, rather than leaving them as an afterthought the way the
source grammar list did.

**Structure note**: this table follows A1/A2's shape (Topic, Grammar
Function, two dialogues, two pronunciation-focus columns, one
grammar-point cell per language), not C1's richer shape (which adds
Article/Questions columns). B1 is still a speaking/dialogue-driven
level in this app's progression — the jump to reading-passage content
is deliberately reserved for C1. Unlike A1/A2 though, this table uses
six language columns from the start (adding `fr`/`es` alongside
`en`/`ja`/`zh`/`de`), matching C1's format — see the note above on
why.

**Row allocation**: the six "All"-tagged grammar items get 3–4 rows
each (19 rows total) so a B1 learner meets each pattern across several
real-life contexts rather than once — the same "reinforcement across
topics" principle already used for A2 (e.g. its 〜たら reappearing
across multiple rows). The eleven single-language items get one
dedicated row each (11 rows). The four new French/Spanish rows bring
the total to 34, matching A1's and C1's row count (A2 is the one at
35, for its own row-35 reason — see
`docs/a2-master-lesson-table-v01.md`).

**Naming, checked against collisions**: every topic name below was
checked against all 19 built A1 topics *and* all 35 rows of the A2
table (not just the 22 A2 topics actually built — the unbuilt rows are
still reserved names) before being finalized. Where a natural name
would have collided (e.g. plain "Plans," "News," "Opinions," or
"Decisions" are all already taken), a more specific compound name was
used instead — matching how A2 itself already has both "Conditions"
and "Conditional" as two distinct rows despite the similarity.

**Numbering**: per `docs/topic-lesson-system.md`'s "Topic
id/lessonNumber scheme," any topics built from this table should use
the level-relative, level-prefixed pattern from the start —
`topic-b1-NN-name.ts`, `id: "topic-b1-NN-name"`, `lessonNumber: NN`
matching the table row — never a globally-sequential number. This is
the lesson the A1/A2 rename had to apply after the fact; no reason to
repeat it for B1.

| # | Topic | B1 Grammar Function | Dialogue A | Dialogue B | Pronunciation 1 | Pronunciation 2 | EN | JA | ZH | DE | FR | ES |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Travel Mishaps | Past perfect — narrating what had already happened before another past event | A delayed flight story | A lost-luggage report | Narrative past rhythm | Stress on time-sequence words | had already left/missed | 〜ていた／〜てしまっていた（けっか の きょうちょう） | 已经……了／过，双重时态嵌套 | Plusquamperfekt (hatte verpasst) | plus-que-parfait (j'avais raté) | pluscuamperfecto (había perdido) |
| 2 | Career Beginnings | Past perfect — narrating early work history in sequence | Describing your first job | An interview about career history | Formal register | Emphasis on achievements | had worked/had studied before | 〜ていた（けいれき の せつめい） | 曾经……过，之前已经 | Plusquamperfekt (hatte gearbeitet) | plus-que-parfait (j'avais travaillé) | pluscuamperfecto (había trabajado) |
| 3 | Growing Up | Past perfect — sequencing childhood events, then-vs-now contrast | Reminiscing about childhood | Comparing generations | Nostalgic/reflective tone | Contrastive stress (then vs now) | had never seen/had already learned | 〜たことが なかった（けいけん） | 从来没……过，早就 | Plusquamperfekt (hatte noch nie) | plus-que-parfait (je n'avais jamais) | pluscuamperfecto (nunca había) |
| 4 | Imagining Alternatives | Subjunctive/conditional, basic — hypothetical situations | What would you do with a windfall | Imagining a different career path | Hypothetical intonation | Conditional-clause pausing | if I had... I would | 〜たら／〜なら（かていの じょうきょう） | 如果……的话，就会 | Konjunktiv II (wenn..., würde ich) | conditionnel (si..., je + conditionnel) | condicional (si..., + condicional) |
| 5 | Service Encounters | Subjunctive/conditional, basic — polite requests | At a hotel front desk | Requesting a modification at a restaurant | Politeness-softening tone | Rising request intonation | I would like/could you possibly | 〜ていただけますか（ていねいな いらい） | 能不能麻烦您，可以的话 | Konjunktiv II (könnten Sie, ich hätte gern) | conditionnel de politesse (je voudrais, pourriez-vous) | condicional de cortesía (querría, podría usted) |
| 6 | Future Wishes | Subjunctive/conditional, basic — wishes about the future | Talking about hopes for next year | A wish-list conversation | Wistful/wishful tone | Emphasis on desired outcome | I wish/hope that | 〜といいな／〜たらいいな（きぼう） | 要是……就好了，希望 | Konjunktiv II (ich wünschte) | souhait (j'aimerais que + subjonctif) | deseo (ojalá + subjuntivo) |
| 7 | Dreams & Aspirations | Subjunctive/conditional, basic (extended) — long-term goals | Discussing long-term goals | Encouraging a friend's ambition | Encouraging tone | Stress on aspirational verbs | I'd love to/someday I would | 〜たい／〜ようになりたい（しょうらいの ゆめ） | 希望将来能，梦想着 | Konjunktiv II + Zukunft (ich würde gerne einmal) | souhait futur (j'aimerais un jour) | deseo futuro (me gustaría algún día) |
| 8 | Current Events | Passive voice, expanded — describing news events impersonally | Discussing a news headline | Debating a recent policy change | Neutral reporting tone | Formal news register | it was announced/decided that | 〜が はっぴょうされた（うけみ） | 被宣布，被决定 | Passiv (es wurde bekanntgegeben) | passif (il a été annoncé) | pasiva (fue anunciado) |
| 9 | How Things Are Made | Passive voice, expanded — describing a process | Explaining a manufacturing process | A factory-tour conversation | Step-by-step listing intonation | Technical-term stress | is made from/is assembled by | 〜で つくられる（せいぞう こうてい） | 由……制成，被加工 | Passiv (wird hergestellt aus) | passif (est fabriqué à partir de) | pasiva (está hecho de) |
| 10 | Historical Sites | Passive voice, expanded — describing history | A museum guide's explanation | Discussing a historical landmark | Formal narrative tone | Date/number stress | was built/was founded in | 〜に たてられた（かこの じじつ） | 建于，建造于 | Passiv Präteritum (wurde erbaut) | passif au passé (a été construit) | pasiva pasado (fue construido) |
| 11 | Describing People | Complex relative clauses with prepositions | Describing a mutual friend | Recommending someone for a job | Clause-boundary pausing | Emphasis on defining detail | the person (whom) I talked to | 〜と はなした ひと（せつぞく） | ……的人，我跟他说话的那个人 | Relativsatz mit Präposition (die Person, mit der) | relative avec préposition (la personne à qui) | relativa con preposición (la persona con quien) |
| 12 | Favorite Places | Complex relative clauses with prepositions | Describing a favorite childhood spot | Recommending a place to visit | Descriptive/enthusiastic tone | Preposition stress | the restaurant (where) we ate at | 〜で たべた みせ（ばしょの せつめい） | ……的地方，我们在那里吃饭的餐厅 | Relativsatz (das Restaurant, in dem) | relative de lieu (le restaurant où) | relativa de lugar (el restaurante donde) |
| 13 | Personality Types | Complex relative clauses with prepositions | Describing coworkers' personalities | A personality-quiz conversation | Characterizing tone | Adjective stress | the kind of person who | 〜という ひと（せいかく の せつめい） | ……的那种人，是那种会……的人 | Relativsatz (die Art von Person, die) | relative caractérisante (le genre de personne qui) | relativa caracterizadora (el tipo de persona que) |
| 14 | Relaying a Conversation | Reported speech, expanded — tense shifting | Telling a friend what someone said | Passing along instructions | Reported-speech intonation shift | Tense-shift stress | she said that she had already | 〜と いっていた（でんぶん） | 她说她已经，转述 | indirekte Rede (sie sagte, dass sie schon) | discours indirect (elle a dit qu'elle avait déjà) | estilo indirecto (dijo que ya había) |
| 15 | Breaking News | Reported speech, expanded — tense shifting | Sharing breaking news | Fact-checking a rumor | Urgency/surprise tone | Attribution stress | it's reported that/apparently | 〜らしい／〜ということだ（つたえぎき） | 据说，报道称 | indirekte Rede (es heißt, dass) | discours rapporté (il paraît que) | estilo indirecto (dicen que, según parece) |
| 16 | Office Rumors | Reported speech, expanded — tense shifting | Workplace gossip | Correcting a misunderstanding | Hushed/confiding tone | Hedging intonation | I heard that/word is that | 〜って きいたけど（うわさ） | 听说，听人说 | indirekte Rede (ich habe gehört, dass) | discours rapporté (j'ai entendu dire que) | estilo indirecto (he oído que) |
| 17 | Taking a Stance | Connectors for argumentation — however/therefore | A friendly debate | Disagreeing politely | Assertive tone | Contrastive-connector stress ("however") | however/on the other hand | 〜けれども／〜いっぽうで（たいひ） | 然而，另一方面 | Konnektoren (jedoch, allerdings) | connecteurs (cependant, en revanche) | conectores (sin embargo, en cambio) |
| 18 | Making a Complaint | Connectors for argumentation — although/despite | Complaining about a product | Complaining to a landlord | Frustrated-but-polite tone | Concessive-connector stress ("although") | although/despite the fact that | 〜のに／〜にもかかわらず（じゃっき） | 虽然……但是，尽管如此 | Konnektoren (obwohl, trotzdem) | connecteurs (bien que, malgré) | conectores (aunque, a pesar de) |
| 19 | Pros and Cons | Connectors for argumentation — therefore/consequently | Weighing a job offer | Deciding between two options | Deliberative tone | Causal-connector stress ("therefore") | therefore/as a result | 〜ので／〜だから（りゆう と けつろん） | 因此，所以 | Konnektoren (deshalb, folglich) | connecteurs (donc, par conséquent) | conectores (por lo tanto, en consecuencia) |
| 20 | Family Heirlooms | Genitive case / possessive expanded structures — German only | Asking about a family object's history | Describing an inheritance | Reflective tone | Possessive-phrase stress | whose/belonging to | 〜の もの（しょゆう の せつめい） | ……的东西，属于谁的 | Genitiv (das Erbstück meiner Großmutter) | de + possession (l'héritage de ma grand-mère) | posesivo con "de" (la herencia de mi abuela) |
| 21 | Room Layout | Two-way prepositions, expanded nuance — German only | Describing furniture placement | Giving directions within a house | Spatial-description rhythm | Preposition-contrast stress | in/on/at (location vs. direction) | 〜に／〜で（ばしょ の じょし） | 在……上／里，方位表达 | Wechselpräpositionen (in/an/auf + Dativ/Akkusativ) | prépositions de lieu (dans, sur, contre) | preposiciones de lugar (en, sobre, dentro de) |
| 22 | What If... | Subjunctive II (Konjunktiv II) for hypotheticals — German only | A hypothetical life-change conversation | Imagining a different outcome | Hypothetical/wistful tone | Subjunctive-verb stress | if I were.../I would have | 〜だったら（かていの けっか） | 要是……的话，本来会 | Konjunktiv II (wenn ich... wäre, hätte ich) | conditionnel passé (si j'avais été, j'aurais) | condicional (si hubiera sido, habría) |
| 23 | Workplace Instructions | Causative and passive-causative forms — Japanese only | A manager giving instructions | Being asked to do something reluctantly | Directive tone | Causative-verb stress | to make/let someone do | 〜させる／〜させられる（しえき・しえきうけみ） | 让/使某人做，被迫做 | lassen-Konstruktion (lässt ihn arbeiten) | faire causatif (le fait travailler) | causativo con "hacer/dejar" (le hace trabajar) |
| 24 | Giving Advice | Conditional forms (tara, ba, nara) — Japanese only | Advising a friend on a problem | Discussing what-if scenarios | Advisory/gentle tone | Conditional-clause pausing | if you..., you should | 〜たら／〜ば／〜なら（じょうけん の つかいわけ） | 如果……就，要是……的话 | wenn-Sätze im Vergleich (wenn du... solltest du) | si + conseil (si tu..., tu devrais) | condicional de consejo (si..., deberías) |
| 25 | Caregiving & Support | Giving/receiving verb nuance (age/morau/kureru), expanded — Japanese only | Helping an elderly neighbor | Discussing mutual support among friends | Warm/caring tone | Benefactive-verb stress | to do a favor for/have done for me | 〜てあげる／〜てもらう／〜てくれる（じゅじゅ） | 为……做，得到帮助 | für jemanden tun (ich tue es für dich) | faire pour quelqu'un (je le fais pour toi) | hacer por alguien (lo hago por ti) |
| 26 | Organizing an Event | Volitional form (let's, intend to) — Japanese only | Planning a party with friends | Proposing an activity to a group | Inviting/enthusiastic tone | Volitional-ending stress | let's.../I intend to | 〜（よ）う／〜つもりだ（いこう・いし） | 我们……吧，打算 | wollen wir.../ich habe vor | on va + infinitif (on organise, j'ai l'intention de) | vamos a + infinitivo (organicemos, tengo la intención de) |
| 27 | Getting Things Done | Ba/le combined aspect markers, expanded — Chinese only | Describing completed household chores | Reporting task completion at work | Accomplishment tone | Aspect-marker stress | have finished doing/already done | 〜してしまった（かんりょう） | 把……做完了，已经……了 | Perfekt/Resultativ (habe es fertig gemacht) | passé composé + tout (j'ai tout fini) | pretérito perfecto (ya lo he terminado) |
| 28 | Moving & Arranging | Ba construction (disposal construction) — Chinese only | Instructing someone to move furniture | Organizing a shared space | Directive tone | Object-fronting stress | put the (object) over there | 〜を〜に おく（もくてきごの いどう） | 把……放在，处置式 | Objekt voranstellen (stell den Tisch dahin) | déplacement d'objet (mets la table là-bas) | colocación de objeto (pon la mesa allí) |
| 29 | Mishaps & Accidents | Bei construction (passive voice) — Chinese only | Describing something stolen or broken | Reporting an accident | Sympathetic/concerned tone | Passive-marker stress | had (something) done to me/it got | 〜られた（ひがいの うけみ） | 被偷了，被弄坏了 | Passiv mit Nachteil (mir wurde es gestohlen) | passif subi (je me suis fait voler) | pasiva refleja / se + verbo (se me rompió) |
| 30 | Under Pressure | Complex complement structures (potential complements) — Chinese only | Discussing whether a task can be finished in time | Reassuring a stressed coworker | Reassuring tone | Potential-complement stress | can/can't manage to finish | 〜きれる／〜きれない（かのう） | 来得及／来不及，做得完 | schaffen können/nicht schaffen | arriver à faire/ne pas y arriver | poder terminar / no dar tiempo a |
| 31 | Narrating the Past | Imparfait vs. passé composé nuance — French only | Telling a story about a memorable day | Describing what life used to be like | Narrative background vs. foreground tone | Past-tense-ending stress | was doing (ongoing) vs. did (completed) | 〜していた（けいぞく）／〜した（かんりょう） | 过去经常，那时候在 | Präteritum, erzählend (Register-, nicht Aspektunterschied zum Perfekt) | imparfait vs. passé composé (il pleuvait quand je suis sorti) | imperfecto vs. pretérito (llovía cuando salí) |
| 32 | Errands & Quantities | Y/en pronouns — French only | Running errands around town | Discussing quantities at a market | Efficient/practical tone | Pronoun-placement stress | there/of it, of them | 〜に（それ）／〜の（すこし）（だいめいし） | 在那里，其中一些 | es/davon-Konstruktion (es gibt drei davon) | pronoms y/en (j'y vais, j'en veux trois) | pronombres equivalentes (allí voy, quiero tres de eso) |
| 33 | Character & Condition | Ser/estar nuanced distinction — Spanish only | Describing someone's personality vs. their current mood | Discussing a temporary vs. permanent situation | Descriptive-contrast tone | Ser/estar stress contrast | is (inherently) vs. is (right now) | 〜だ（せいしつ）／〜している（じょうたい） | 本质上是／目前的状态是 | sein (Wesen) vs. sich befinden (Zustand) | être (nature) vs. état passager | ser (esencia) vs. estar (estado) |
| 34 | Doubt & Uncertainty | Subjunctive triggers (doubt, emotion, influence) — Spanish only | Expressing doubt about a plan | Reacting emotionally to news | Doubtful/uncertain tone | Subjunctive-trigger stress | I doubt that/I'm afraid that | 〜かどうか わからない（ふあん） | 我怀疑，我担心 | Zweifel ausdrücken (ich bezweifle, dass) | doute (je doute que + subjonctif) | duda (dudo que + subjuntivo) |
