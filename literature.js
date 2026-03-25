// ─────────────────────────────────────────────────────────────────────────────
//  LITERATURE — literary works dataset
//  Fields: name · author · period · nationality · genre · form · hint
//  Period values:   BC | 0-1000 | 1000-1500 | 1500-1800 | 1800-1930 | 1930-1970 | 1980-2000 | 2000-2026
//  Nationality:     British | American | French | Russian | German | Spanish | Italian |
//                   Irish | Norwegian | Greek | Roman | Japanese | Latin American | Other
//  Genre values:    Tragedy | Comedy | Epic | Romance | Satire | Gothic | Realism |
//                   Modernism | Surrealism | Dystopian | Historical | Mystery |
//                   Horror | Existential | Adventure | Lyric Poetry
//  Form values:     Novel | Play | Epic Poem | Poem | Short Story | Novella | Essay
// ─────────────────────────────────────────────────────────────────────────────
window.LITERATURE = Object.freeze([

  // ── ANCIENT ──────────────────────────────────────────────────────────────
  {
    name: "The Iliad",
    author: "Homer",
    period: "BC",
    nationality: "Greek",
    genre: "Epic",
    form: "Epic Poem",
    hint: "An ancient Greek epic tracing the final weeks of the Trojan War, centering on the wrath of Achilles and his tragic quarrel with Agamemnon — the foundational text of Western literature."
  },
  {
    name: "The Odyssey",
    author: "Homer",
    period: "BC",
    nationality: "Greek",
    genre: "Adventure",
    form: "Epic Poem",
    hint: "The wandering hero Odysseus spends ten years trying to return home to Ithaca after the fall of Troy, encountering Cyclops, Sirens, and the enchantress Circe along the way."
  },
  {
    name: "Oedipus Rex",
    author: "Sophocles",
    period: "BC",
    nationality: "Greek",
    genre: "Tragedy",
    form: "Play",
    hint: "A Theban king investigates the cause of a plague upon his city, only to discover that he himself murdered his father and married his own mother — tragedy as relentless logical inevitability."
  },
  {
    name: "Medea",
    author: "Euripides",
    period: "BC",
    nationality: "Greek",
    genre: "Tragedy",
    form: "Play",
    hint: "A sorceress from Colchis, abandoned by her husband Jason for a Greek princess, exacts terrible revenge by killing their own children — one of antiquity's most disturbing explorations of passion and betrayal."
  },
  {
    name: "The Aeneid",
    author: "Virgil",
    period: "BC",
    nationality: "Roman",
    genre: "Epic",
    form: "Epic Poem",
    hint: "The Trojan hero Aeneas flees the ruins of Troy and travels to Italy, where his descendants will found Rome — Virgil's imperial epic consciously echoes Homer while celebrating Augustus's new world order."
  },
  {
    name: "The Republic",
    author: "Plato",
    period: "BC",
    nationality: "Greek",
    genre: "Historical",
    form: "Essay",
    hint: "Socrates and his companions discuss the nature of justice, the ideal state, and the philosopher-king across ten books, including the famous Allegory of the Cave — philosophy as dramatic dialogue."
  },
  {
    name: "Lysistrata",
    author: "Aristophanes",
    period: "BC",
    nationality: "Greek",
    genre: "Comedy",
    form: "Play",
    hint: "The women of Athens and Sparta withhold conjugal relations from their husbands until they end the Peloponnesian War — a bawdy comic masterpiece that is simultaneously a genuine antiwar satire."
  },

  // ── MEDIEVAL (0-1000 & 1000-1500) ────────────────────────────────────────
  {
    name: "Beowulf",
    author: "Anonymous",
    period: "0-1000",
    nationality: "British",
    genre: "Epic",
    form: "Epic Poem",
    hint: "A Geatish warrior slays the monster Grendel and his mother, then rules for fifty years before dying in battle with a dragon — the oldest surviving work of English literature, composed in alliterative verse."
  },
  {
    name: "The Tale of Genji",
    author: "Murasaki Shikibu",
    period: "0-1000",
    nationality: "Japanese",
    genre: "Romance",
    form: "Novel",
    hint: "A Japanese court lady wrote the story of the radiant 'Shining Prince' and his romantic entanglements at the Heian imperial court — often cited as the world's first novel, composed around 1000 CE."
  },
  {
    name: "The Divine Comedy",
    author: "Dante",
    period: "1000-1500",
    nationality: "Italian",
    genre: "Epic",
    form: "Epic Poem",
    hint: "A Florentine poet travels through Hell, Purgatory, and Paradise guided first by Virgil then by Beatrice, encountering historical figures at every level — the masterwork of medieval Christian imagination."
  },
  {
    name: "The Canterbury Tales",
    author: "Chaucer",
    period: "1000-1500",
    nationality: "British",
    genre: "Comedy",
    form: "Poem",
    hint: "A diverse group of pilgrims traveling to the shrine of Thomas Becket each tell stories ranging from chivalric romance to bawdy fabliau, creating a vivid cross-section of medieval English society."
  },
  {
    name: "Sir Gawain and the Green Knight",
    author: "Anonymous",
    period: "1000-1500",
    nationality: "British",
    genre: "Romance",
    form: "Poem",
    hint: "A mysterious axe-wielding giant challenges King Arthur's court, and Sir Gawain accepts his dare — a year later he must face the return blow in a test of courage, honor, and moral integrity."
  },

  // ── RENAISSANCE / EARLY MODERN (1500-1800) ──────────────────────────────
  {
    name: "Hamlet",
    author: "Shakespeare",
    period: "1500-1800",
    nationality: "British",
    genre: "Tragedy",
    form: "Play",
    hint: "A Danish prince, paralysed by indecision, is commanded by his father's ghost to avenge a murder most foul — Shakespeare's longest and most philosophically restless play, pivoting on the question of action versus thought."
  },
  {
    name: "Macbeth",
    author: "Shakespeare",
    period: "1500-1800",
    nationality: "British",
    genre: "Tragedy",
    form: "Play",
    hint: "Three witches prophecy that a Scottish general will become king; spurred by his wife, he murders the king and unleashes a spiral of tyranny and guilt — Shakespeare's most compressed and violent tragedy."
  },
  {
    name: "A Midsummer Night's Dream",
    author: "Shakespeare",
    period: "1500-1800",
    nationality: "British",
    genre: "Comedy",
    form: "Play",
    hint: "Four young Athenians flee into an enchanted forest where the fairy king Oberon's meddling with a love potion tangles and untangles their affections in a single magical night."
  },
  {
    name: "Don Quixote",
    author: "Cervantes",
    period: "1500-1800",
    nationality: "Spanish",
    genre: "Satire",
    form: "Novel",
    hint: "An elderly Spanish gentleman reads so many chivalric romances that he loses his mind and sets out as a knight-errant with his peasant squire Sancho Panza, tilting at windmills he mistakes for giants."
  },
  {
    name: "Paradise Lost",
    author: "Milton",
    period: "1500-1800",
    nationality: "British",
    genre: "Epic",
    form: "Epic Poem",
    hint: "Satan's rebellion in Heaven and the subsequent Fall of Man in the Garden of Eden are retold in twelve books of blank verse — Milton's grand attempt to 'justify the ways of God to men.'"
  },
  {
    name: "Gulliver's Travels",
    author: "Swift",
    period: "1500-1800",
    nationality: "Irish",
    genre: "Satire",
    form: "Novel",
    hint: "A ship's surgeon visits a land of six-inch people, a land of giants, a flying island of absurd scientists, and finally a country ruled by rational horses — biting satirical allegory disguised as adventure fiction."
  },
  {
    name: "Faust",
    author: "Goethe",
    period: "1500-1800",
    nationality: "German",
    genre: "Tragedy",
    form: "Play",
    hint: "An aging scholar, frustrated by the limits of human knowledge, makes a wager with the devil Mephistopheles, who agrees to serve him in exchange for his soul — Germany's supreme literary monument."
  },
  {
    name: "Candide",
    author: "Voltaire",
    period: "1500-1800",
    nationality: "French",
    genre: "Satire",
    form: "Novella",
    hint: "A naïve young man is expelled from a Westphalian castle and travels the world witnessing earthquakes, wars, and the Inquisition while his tutor insists this is the best of all possible worlds."
  },

  // ── 19TH CENTURY (1800-1930) ─────────────────────────────────────────────
  {
    name: "Pride and Prejudice",
    author: "Austen",
    period: "1800-1930",
    nationality: "British",
    genre: "Romance",
    form: "Novel",
    hint: "The witty and independent Elizabeth Bennet navigates the pressures of marriage in Regency England and gradually overcomes her prejudice toward the proud and initially insufferable Mr Darcy."
  },
  {
    name: "Great Expectations",
    author: "Dickens",
    period: "1800-1930",
    nationality: "British",
    genre: "Realism",
    form: "Novel",
    hint: "An orphan boy named Pip is mysteriously given a fortune and educated as a gentleman, only to discover the true identity of his anonymous benefactor — Dickens's finest study of class, ambition, and moral growth."
  },
  {
    name: "Crime and Punishment",
    author: "Dostoevsky",
    period: "1800-1930",
    nationality: "Russian",
    genre: "Existential",
    form: "Novel",
    hint: "A destitute St Petersburg student convinces himself he is a 'superman' entitled to murder a pawnbroker, then suffers a psychological collapse as guilt, hallucination, and a relentless detective close in."
  },
  {
    name: "Anna Karenina",
    author: "Tolstoy",
    period: "1800-1930",
    nationality: "Russian",
    genre: "Realism",
    form: "Novel",
    hint: "A beautiful aristocratic woman abandons her husband and son for a passionate love affair with Count Vronsky, while a parallel plot follows the search for happiness of the earnest landowner Levin — Tolstoy's supreme novel."
  },
  {
    name: "Madame Bovary",
    author: "Flaubert",
    period: "1800-1930",
    nationality: "French",
    genre: "Realism",
    form: "Novel",
    hint: "A provincial doctor's wife, bored by her dull marriage, pursues a series of romantic affairs and accumulates ruinous debts in pursuit of the glamorous life she has read about in novels."
  },
  {
    name: "Moby-Dick",
    author: "Melville",
    period: "1800-1930",
    nationality: "American",
    genre: "Adventure",
    form: "Novel",
    hint: "The one-legged Captain Ahab leads the whaling ship Pequod on an obsessive, doomed hunt for the white sperm whale that took his leg — an American epic of monomania, cetology, and cosmic defiance."
  },
  {
    name: "The Brothers Karamazov",
    author: "Dostoevsky",
    period: "1800-1930",
    nationality: "Russian",
    genre: "Existential",
    form: "Novel",
    hint: "Three brothers — the passionate Dmitri, the intellectual Ivan, and the saintly Alyosha — are implicated in the murder of their debauched father in Dostoevsky's final and greatest novel of faith and doubt."
  },
  {
    name: "Frankenstein",
    author: "Shelley",
    period: "1800-1930",
    nationality: "British",
    genre: "Gothic",
    form: "Novel",
    hint: "A young Swiss scientist creates a living being from corpse parts and galvanic electricity, then recoils from his creature — whose loneliness and rage at being abandoned by his creator drives the novel's tragedy."
  },
  {
    name: "Adventures of Huckleberry Finn",
    author: "Twain",
    period: "1800-1930",
    nationality: "American",
    genre: "Adventure",
    form: "Novel",
    hint: "A boy fakes his own death to escape his abusive father and floats down the Mississippi River on a raft with the runaway slave Jim — Hemingway called it the source of all American literature."
  },
  {
    name: "The Picture of Dorian Gray",
    author: "Wilde",
    period: "1800-1930",
    nationality: "Irish",
    genre: "Gothic",
    form: "Novel",
    hint: "A beautiful young man wishes that his portrait would age in his place; as decades pass and he descends into moral corruption, only the painting reveals the true cost of his hedonistic existence."
  },
  {
    name: "A Doll's House",
    author: "Ibsen",
    period: "1800-1930",
    nationality: "Norwegian",
    genre: "Realism",
    form: "Play",
    hint: "A wife and mother who has secretly borrowed money to save her husband's life realizes she has lived her whole life as a plaything, and in the final act slams the door and walks out."
  },

  // ── EARLY 20TH CENTURY (1800-1930) ───────────────────────────────────────
  {
    name: "Ulysses",
    author: "Joyce",
    period: "1800-1930",
    nationality: "Irish",
    genre: "Modernism",
    form: "Novel",
    hint: "In a single day in Dublin — June 16, 1904 — an advertisement canvasser, a young aspiring writer, and a woman in bed each become an entire Homeric world in Joyce's stream-of-consciousness reinvention of the novel."
  },
  {
    name: "Mrs Dalloway",
    author: "Woolf",
    period: "1800-1930",
    nationality: "British",
    genre: "Modernism",
    form: "Novel",
    hint: "A society hostess prepares for her evening party while a shell-shocked veteran wanders the same London streets — two interior monologues flowing through a single June day in Virginia Woolf's most concentrated novel."
  },
  {
    name: "In Search of Lost Time",
    author: "Proust",
    period: "1800-1930",
    nationality: "French",
    genre: "Modernism",
    form: "Novel",
    hint: "A dip of a madeleine biscuit in tea triggers a flood of involuntary memory across seven volumes charting French society from the Belle Époque to the aftermath of the First World War."
  },
  {
    name: "The Metamorphosis",
    author: "Kafka",
    period: "1800-1930",
    nationality: "German",
    genre: "Existential",
    form: "Novella",
    hint: "A traveling salesman wakes one morning transformed into a gigantic insect; the remainder of the novella traces his family's revulsion, adjustment, and eventual relief at his death with matter-of-fact precision."
  },
  {
    name: "The Waste Land",
    author: "Eliot",
    period: "1800-1930",
    nationality: "British",
    genre: "Modernism",
    form: "Poem",
    hint: "Five fragmented sections weaving myth, multiple languages, street voices, and pub conversation into a portrait of postwar spiritual desolation — the defining poem of literary Modernism, published in 1922."
  },

  // ── MID 20TH CENTURY (1930-1970) ─────────────────────────────────────────
  {
    name: "Nineteen Eighty-Four",
    author: "Orwell",
    period: "1930-1970",
    nationality: "British",
    genre: "Dystopian",
    form: "Novel",
    hint: "In a totalitarian superstate ruled by Big Brother, a low-ranking Party member secretly rebels by keeping a diary and falling in love, until the Thought Police and Room 101 end his resistance."
  },
  {
    name: "The Stranger",
    author: "Camus",
    period: "1930-1970",
    nationality: "French",
    genre: "Existential",
    form: "Novel",
    hint: "A young Algerian shoots a nameless Arab on a sun-bleached beach without clear motive, then faces trial where his emotional indifference at his mother's funeral is held against him — the defining novel of the absurd."
  },
  {
    name: "For Whom the Bell Tolls",
    author: "Hemingway",
    period: "1930-1970",
    nationality: "American",
    genre: "Historical",
    form: "Novel",
    hint: "An American demolitions expert fights with Republican guerrillas in the Spanish Civil War and falls in love over three intense days, as he prepares to blow up a bridge in a mission he knows is doomed."
  },
  {
    name: "Lolita",
    author: "Nabokov",
    period: "1930-1970",
    nationality: "American",
    genre: "Modernism",
    form: "Novel",
    hint: "A European academic with an obsession for 'nymphets' becomes stepfather to and abducts a twelve-year-old American girl — an unreliable first-person confession of monstrous self-justification in dazzling prose."
  },
  {
    name: "One Hundred Years of Solitude",
    author: "García Márquez",
    period: "1930-1970",
    nationality: "Latin American",
    genre: "Realism",
    form: "Novel",
    hint: "Seven generations of the Buendía family inhabit the fictional Colombian town of Macondo as its history cycles through civil wars, banana fever, and inexplicable wonders woven seamlessly into everyday life — García Márquez's masterwork of Latin American fiction."
  },
  {
    name: "The Trial",
    author: "Kafka",
    period: "1930-1970",
    nationality: "German",
    genre: "Existential",
    form: "Novel",
    hint: "A bank official is arrested without being told his crime, and spends the novel navigating an inaccessible, opaque legal system that slowly destroys him — Kafka's parable of modern bureaucratic helplessness."
  },
  {
    name: "To Kill a Mockingbird",
    author: "Lee",
    period: "1930-1970",
    nationality: "American",
    genre: "Historical",
    form: "Novel",
    hint: "Scout Finch grows up in Depression-era Alabama as her father, a lawyer, defends a Black man falsely accused of rape — a coming-of-age story about racial injustice seen through a child's eyes."
  },
  {
    name: "Catch-22",
    author: "Heller",
    period: "1930-1970",
    nationality: "American",
    genre: "Satire",
    form: "Novel",
    hint: "An American bombardier in World War Two tries to get himself declared insane to avoid flying more missions — but the rule dictating that anyone who wants to avoid danger is sane traps him in an absurd military logic."
  },
  {
    name: "The Sound and the Fury",
    author: "Faulkner",
    period: "1930-1970",
    nationality: "American",
    genre: "Modernism",
    form: "Novel",
    hint: "The decline of the Southern Compson family is narrated four times from four perspectives — including that of Benjy, a man with intellectual disabilities — in Faulkner's fragmented experiment with time and consciousness."
  },
  {
    name: "Waiting for Godot",
    author: "Beckett",
    period: "1930-1970",
    nationality: "Irish",
    genre: "Existential",
    form: "Play",
    hint: "Two tramps wait beside a leafless tree for a figure named Godot who never comes, filling the time with vaudeville routines, philosophical bickering, and desperate attempts to pass the time — theatre of the absurd distilled."
  },
  {
    name: "The Grapes of Wrath",
    author: "Steinbeck",
    period: "1930-1970",
    nationality: "American",
    genre: "Realism",
    form: "Novel",
    hint: "The Joad family, dispossessed Oklahoma farmers, drive Route 66 to California during the Dust Bowl in search of a better life, only to encounter labor exploitation, starvation, and barely suppressed violence."
  },
  {
    name: "Doctor Zhivago",
    author: "Pasternak",
    period: "1930-1970",
    nationality: "Russian",
    genre: "Historical",
    form: "Novel",
    hint: "A Russian physician and poet witnesses the Revolution and Civil War while torn between his wife and his great love Lara — a novel smuggled to the West that won its author the Nobel Prize he was forced to decline."
  },

  // ── LATE 20TH CENTURY (1980-2000) ────────────────────────────────────────
  {
    name: "Beloved",
    author: "Morrison",
    period: "1980-2000",
    nationality: "American",
    genre: "Gothic",
    form: "Novel",
    hint: "A formerly enslaved woman living in post-Civil War Ohio is haunted by the ghost of her infant daughter, whom she killed rather than see returned to slavery — Toni Morrison's Pulitzer Prize-winning meditation on trauma and memory."
  },
  {
    name: "The Name of the Rose",
    author: "Eco",
    period: "1980-2000",
    nationality: "Italian",
    genre: "Mystery",
    form: "Novel",
    hint: "A Franciscan friar and his novice investigate a series of mysterious deaths in a wealthy medieval Italian abbey, following clues through a labyrinthine library that guards a dangerous forbidden text."
  },
  {
    name: "Midnight's Children",
    author: "Rushdie",
    period: "1980-2000",
    nationality: "British",
    genre: "Historical",
    form: "Novel",
    hint: "A child born at the exact moment of Indian independence discovers that all children born in that midnight hour are connected by telepathy — a sprawling magical-realist allegory of postcolonial India."
  },
  {
    name: "The Handmaid's Tale",
    author: "Atwood",
    period: "1980-2000",
    nationality: "Other",
    genre: "Dystopian",
    form: "Novel",
    hint: "In the theocratic Republic of Gilead, which has replaced the United States, fertile women are assigned to powerful men as reproductive slaves called Handmaids — a feminist dystopia narrated by one woman's surviving cassette tapes."
  },
  {
    name: "Blood Meridian",
    author: "McCarthy",
    period: "1980-2000",
    nationality: "American",
    genre: "Historical",
    form: "Novel",
    hint: "A teenage runaway joins a band of scalp hunters on the Texas-Mexico border in the 1850s, where the demonic Judge Holden preaches a philosophy of eternal war in prose that reads like scripture and nightmare."
  },

  // ── CONTEMPORARY (2000-2026) ──────────────────────────────────────────────
  {
    name: "2666",
    author: "Bolaño",
    period: "2000-2026",
    nationality: "Latin American",
    genre: "Mystery",
    form: "Novel",
    hint: "Five interlocking narratives — academic critics pursuing a reclusive German novelist, a Mexican-American detective, and hundreds of murdered women in a border city — form Roberto Bolaño's vast posthumously published masterwork."
  },
  {
    name: "The Road",
    author: "McCarthy",
    period: "2000-2026",
    nationality: "American",
    genre: "Horror",
    form: "Novel",
    hint: "A father and son walk through a grey ash-covered America after an unnamed catastrophe, surviving on scavenged cans and the father's desperate love — a Pulitzer Prize-winning novel stripped of every comfort."
  },
  {
    name: "Never Let Me Go",
    author: "Ishiguro",
    period: "2000-2026",
    nationality: "British",
    genre: "Dystopian",
    form: "Novel",
    hint: "Three friends who grew up at an idyllic English boarding school gradually discover they were raised as organ donors — their quiet acceptance of this fate makes the horror more devastating than any overt horror."
  },
  {
    name: "The Kite Runner",
    author: "Hosseini",
    period: "2000-2026",
    nationality: "Other",
    genre: "Historical",
    form: "Novel",
    hint: "A privileged Afghan boy's failure to defend his best friend and servant Hassan haunts him for decades, driving him back to Taliban-controlled Kabul in a final act of atonement."
  },
  {
    name: "Wolf Hall",
    author: "Mantel",
    period: "2000-2026",
    nationality: "British",
    genre: "Historical",
    form: "Novel",
    hint: "Thomas Cromwell rises from a blacksmith's son to Henry VIII's chief minister in Hilary Mantel's reinvention of Tudor history — narrated in close third-person present tense that makes the past feel urgently alive."
  },

]);
