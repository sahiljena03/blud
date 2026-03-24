// ─────────────────────────────────────────────────────────────────────────────
//  tiamat · mythology database
//  IMPORTANT: Only ADD new entries to this file. Never remove or modify
//  existing entries — the puzzle is seeded by index position.
//
//  Classification schema:
//    tradition  : Greek | Roman | Norse | Hindu | Buddhist
//    category   : God | Titan / Giant | Hero / Mortal | Creature / Beast | Spirit / Demon
//    domain     : Sky | Sea | War | Death | Wisdom | Love | Nature | Craft | Trickery | Creation | Justice | Light
//    allegiance : Benevolent | Malevolent | Neutral | Ambiguous
//    form       : Humanoid | Animal | Hybrid | Celestial
// ─────────────────────────────────────────────────────────────────────────────

const ENTITIES = [

  // ── GREEK ──────────────────────────────────────────────────────────────────
  {
    name: "Zeus",
    tradition: "Greek", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "King of Olympus, master of thunder and the sovereign of gods and mortals alike."
  },
  {
    name: "Hera",
    tradition: "Greek", category: "God", domain: "Justice",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Queen of the Olympians, goddess of marriage — and jealous guardian of its sanctity."
  },
  {
    name: "Poseidon",
    tradition: "Greek", category: "God", domain: "Sea",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Ruler of the oceans, shaker of the earth, and master of horses."
  },
  {
    name: "Hades",
    tradition: "Greek", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Silent king of the underworld, lord of all the dead and the riches buried beneath the earth."
  },
  {
    name: "Athena",
    tradition: "Greek", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of wisdom and strategic warfare, born fully armored from her father's skull."
  },
  {
    name: "Ares",
    tradition: "Greek", category: "God", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "God of bloodlust and the chaos of battle — feared even among the Olympians."
  },
  {
    name: "Apollo",
    tradition: "Greek", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of the sun, music, prophecy, and healing — twin brother of Artemis."
  },
  {
    name: "Artemis",
    tradition: "Greek", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of the hunt and the wild, forever roaming the forests by moonlight."
  },
  {
    name: "Aphrodite",
    tradition: "Greek", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of love and beauty, born from sea-foam, irresistible to gods and mortals."
  },
  {
    name: "Hermes",
    tradition: "Greek", category: "God", domain: "Trickery",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Swift messenger of the gods, guide of souls, and patron of travelers and thieves."
  },
  {
    name: "Hephaestus",
    tradition: "Greek", category: "God", domain: "Craft",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Lame god of the forge, divine smith who crafted armor for heroes and thrones for gods."
  },
  {
    name: "Dionysus",
    tradition: "Greek", category: "God", domain: "Nature",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "God of wine, festivity, and ecstatic madness — twice-born, he walks between worlds."
  },
  {
    name: "Persephone",
    tradition: "Greek", category: "God", domain: "Death",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Daughter of harvest, queen of the dead — she divides her time between worlds."
  },
  {
    name: "Demeter",
    tradition: "Greek", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of the harvest and grain; her grief brought the first winter to the earth."
  },
  {
    name: "Hecate",
    tradition: "Greek", category: "God", domain: "Trickery",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Goddess of magic, crossroads, and the night — she who holds torches at the threshold."
  },
  {
    name: "Nemesis",
    tradition: "Greek", category: "God", domain: "Justice",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Goddess of divine retribution, ensuring no mortal escapes the balance of fate."
  },
  {
    name: "Hypnos",
    tradition: "Greek", category: "Spirit / Demon", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Personification of sleep, twin brother of Thanatos, dwelling in eternal darkness."
  },
  {
    name: "Cronos",
    tradition: "Greek", category: "Titan / Giant", domain: "Creation",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Ruler of the Titans, devourer of his own children, dethroned by the generation he feared."
  },
  {
    name: "Atlas",
    tradition: "Greek", category: "Titan / Giant", domain: "Sky",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Titan condemned to bear the weight of the heavens on his shoulders for eternity."
  },
  {
    name: "Prometheus",
    tradition: "Greek", category: "Titan / Giant", domain: "Craft",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Forefather of humanity; stole fire from the gods and paid for it with endless suffering."
  },
  {
    name: "Hercules",
    tradition: "Greek", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Greatest hero of the ancient world, whose twelve labors bent the impossible."
  },
  {
    name: "Achilles",
    tradition: "Greek", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Mightiest warrior of the Trojan War, nearly invulnerable — save for one point of ruin."
  },
  {
    name: "Odysseus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "King of Ithaca, famed for cunning over strength — his journey home took ten years."
  },
  {
    name: "Perseus",
    tradition: "Greek", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Slayer of Medusa, rescuer of Andromeda, armed with a mirrored shield."
  },
  {
    name: "Medusa",
    tradition: "Greek", category: "Creature / Beast", domain: "Death",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Gorgon with serpents for hair — a single glance from her eyes turned men to stone."
  },
  {
    name: "Cerberus",
    tradition: "Greek", category: "Creature / Beast", domain: "Death",
    allegiance: "Neutral", form: "Animal",
    hint: "Three-headed hound standing eternal guard at the gates of the underworld."
  },
  {
    name: "Minotaur",
    tradition: "Greek", category: "Creature / Beast", domain: "War",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Half-man, half-bull, imprisoned in the Labyrinth of Crete, fed on tribute."
  },
  {
    name: "Sphinx",
    tradition: "Greek", category: "Creature / Beast", domain: "Wisdom",
    allegiance: "Neutral", form: "Hybrid",
    hint: "Riddler with a lion's body and a woman's face — answer wrong and be devoured."
  },
  {
    name: "Pegasus",
    tradition: "Greek", category: "Creature / Beast", domain: "Sky",
    allegiance: "Neutral", form: "Animal",
    hint: "Winged white horse sprung from the blood of Medusa, rider of the storms."
  },
  {
    name: "Hydra",
    tradition: "Greek", category: "Creature / Beast", domain: "Nature",
    allegiance: "Malevolent", form: "Animal",
    hint: "Many-headed water serpent; for every head severed, two more rise in its place."
  },

  // ── ROMAN ──────────────────────────────────────────────────────────────────
  {
    name: "Jupiter",
    tradition: "Roman", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Father of gods and men, supreme ruler of Rome's celestial order."
  },
  {
    name: "Juno",
    tradition: "Roman", category: "God", domain: "Justice",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Queen of the gods and protector of the Roman state, ever watchful over women."
  },
  {
    name: "Neptune",
    tradition: "Roman", category: "God", domain: "Sea",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Roman lord of sea and freshwater, shaker of foundations beneath the earth."
  },
  {
    name: "Pluto",
    tradition: "Roman", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Roman ruler of the underworld and all mineral wealth hidden in the deep earth."
  },
  {
    name: "Minerva",
    tradition: "Roman", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of wisdom, strategic war, and craft — patron of Rome's intellectual life."
  },
  {
    name: "Mars",
    tradition: "Roman", category: "God", domain: "War",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "God of war, agriculture, and the Roman state — revered as father of Romulus."
  },
  {
    name: "Venus",
    tradition: "Roman", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of love, beauty, and desire; divine ancestor of the Roman people."
  },
  {
    name: "Mercury",
    tradition: "Roman", category: "God", domain: "Trickery",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Messenger of the gods, god of commerce, thieves, and travelers with winged feet."
  },
  {
    name: "Vulcan",
    tradition: "Roman", category: "God", domain: "Craft",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of fire and the forge, whose workshop lay beneath the volcanic mountains."
  },
  {
    name: "Bacchus",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "God of wine, freedom, and ecstatic ritual — liberator and destroyer in equal measure."
  },
  {
    name: "Janus",
    tradition: "Roman", category: "God", domain: "Creation",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Two-faced god of transitions, doorways, and beginnings — January bears his name."
  },
  {
    name: "Diana",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of the hunt, the moon, and childbirth — virgin huntress of the forest."
  },
  {
    name: "Romulus",
    tradition: "Roman", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Legendary founder and first king of Rome, raised by wolves alongside his twin."
  },
  {
    name: "Fortuna",
    tradition: "Roman", category: "God", domain: "Trickery",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Blind goddess of luck and fate, spinning her wheel without reason or mercy."
  },
  {
    name: "Saturn",
    tradition: "Roman", category: "Titan / Giant", domain: "Creation",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Ancient god of time and agriculture who ruled the golden age before Jupiter's reign."
  },

  // ── NORSE ──────────────────────────────────────────────────────────────────
  {
    name: "Odin",
    tradition: "Norse", category: "God", domain: "Wisdom",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "All-Father, wanderer, seeker of knowledge — he sacrificed an eye for wisdom."
  },
  {
    name: "Thor",
    tradition: "Norse", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of thunder and protector of mankind, whose hammer Mjolnir none can lift unworthy."
  },
  {
    name: "Loki",
    tradition: "Norse", category: "God", domain: "Trickery",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Shape-shifting trickster, father of monsters, the slow architect of Ragnarök."
  },
  {
    name: "Freya",
    tradition: "Norse", category: "God", domain: "Love",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Goddess of love, gold, and war-magic — she claimed half of all warriors slain in battle."
  },
  {
    name: "Tyr",
    tradition: "Norse", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "One-handed god of justice and honorable combat, who gave his hand to bind Fenrir."
  },
  {
    name: "Baldur",
    tradition: "Norse", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Beloved god of light and beauty — every living thing wept at his death, save one."
  },
  {
    name: "Heimdall",
    tradition: "Norse", category: "God", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Eternal watchman of Asgard, whose sight reaches to the ends of all nine realms."
  },
  {
    name: "Hel",
    tradition: "Norse", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Half-living, half-dead ruler of Niflheim, keeper of those who die without glory."
  },
  {
    name: "Freyr",
    tradition: "Norse", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Vanir god of sunshine, harvest, and prosperity — he traded his magic sword for love."
  },
  {
    name: "Fenrir",
    tradition: "Norse", category: "Creature / Beast", domain: "War",
    allegiance: "Malevolent", form: "Animal",
    hint: "Colossal wolf, son of Loki — bound in chains now, but destined to swallow Odin at the end."
  },
  {
    name: "Jormungandr",
    tradition: "Norse", category: "Creature / Beast", domain: "Sea",
    allegiance: "Malevolent", form: "Animal",
    hint: "World Serpent, so vast it encircles the earth and bites its own tail in the ocean deep."
  },
  {
    name: "Ymir",
    tradition: "Norse", category: "Titan / Giant", domain: "Creation",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Primordial frost giant; from his body the gods shaped the world — land, sea, and sky."
  },
  {
    name: "Sleipnir",
    tradition: "Norse", category: "Creature / Beast", domain: "Sky",
    allegiance: "Neutral", form: "Animal",
    hint: "Eight-legged horse of Odin, fastest of all mounts, born of Loki's shapeshifting."
  },
  {
    name: "Nidhogg",
    tradition: "Norse", category: "Creature / Beast", domain: "Death",
    allegiance: "Malevolent", form: "Animal",
    hint: "Corpse-gnawer, dragon at the roots of Yggdrasil, endlessly gnawing toward the end of all things."
  },
  {
    name: "Huginn",
    tradition: "Norse", category: "Creature / Beast", domain: "Wisdom",
    allegiance: "Neutral", form: "Animal",
    hint: "One of Odin's two ravens, embodiment of Thought, flying the nine realms each dawn."
  },
  {
    name: "Valkyrie",
    tradition: "Norse", category: "Spirit / Demon", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Shield-maidens who ride across battlefields choosing who lives, who dies, and who feasts in Valhalla."
  },

  // ── HINDU ──────────────────────────────────────────────────────────────────
  {
    name: "Brahma",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The Creator, first of the Trimurti, born from a lotus blooming in the cosmic ocean."
  },
  {
    name: "Vishnu",
    tradition: "Hindu", category: "God", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The Preserver, who descends in avatar after avatar to restore cosmic order when it falters."
  },
  {
    name: "Shiva",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "The Destroyer and transformer, lord of the dance, whose third eye unmakes what must end."
  },
  {
    name: "Lakshmi",
    tradition: "Hindu", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of wealth, prosperity, and fortune — she rose from the churning of the cosmic ocean."
  },
  {
    name: "Saraswati",
    tradition: "Hindu", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of knowledge, music, and learning, seated on a white lotus with her veena."
  },
  {
    name: "Durga",
    tradition: "Hindu", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Warrior goddess riding a lion, formed from the combined might of all the gods to slay what they could not."
  },
  {
    name: "Kali",
    tradition: "Hindu", category: "God", domain: "Death",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Goddess of time and liberation, dark and fearsome, who dances on the corpse of chaos."
  },
  {
    name: "Ganesha",
    tradition: "Hindu", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Elephant-headed remover of obstacles, patron of beginnings and all who start a journey."
  },
  {
    name: "Hanuman",
    tradition: "Hindu", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Monkey-god of strength and devotion, who leapt across the ocean to Lanka for his lord Rama."
  },
  {
    name: "Indra",
    tradition: "Hindu", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "King of the Devas, god of storms and thunder — his lightning bolt split the cloud-demon asunder."
  },
  {
    name: "Yama",
    tradition: "Hindu", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "First mortal to die, now god of death — he judges the dead with perfect impartial truth."
  },
  {
    name: "Agni",
    tradition: "Hindu", category: "God", domain: "Craft",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of sacred fire, divine messenger carrying oblations from earth to heaven."
  },
  {
    name: "Varuna",
    tradition: "Hindu", category: "God", domain: "Sea",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Lord of cosmic waters and divine law — he sees all sin and forgives those who confess."
  },
  {
    name: "Surya",
    tradition: "Hindu", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The solar deity, eye of the gods, who rides a chariot drawn by seven white horses each dawn."
  },
  {
    name: "Ravana",
    tradition: "Hindu", category: "Titan / Giant", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Ten-headed demon king of Lanka, master of all knowledge — yet undone by his own desire."
  },
  {
    name: "Garuda",
    tradition: "Hindu", category: "Creature / Beast", domain: "Sky",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Divine eagle-king, mount of Vishnu, born with such radiance the gods mistook him for fire."
  },
  {
    name: "Shesha",
    tradition: "Hindu", category: "Creature / Beast", domain: "Sea",
    allegiance: "Neutral", form: "Animal",
    hint: "Infinite cosmic serpent, coiled in the primordial ocean, upon whose body Vishnu rests between worlds."
  },
  {
    name: "Vritra",
    tradition: "Hindu", category: "Creature / Beast", domain: "Sky",
    allegiance: "Malevolent", form: "Animal",
    hint: "Vast serpentine demon who blocked the cosmic rivers, bringing drought, until Indra split him open."
  },

  // ── BUDDHIST ───────────────────────────────────────────────────────────────
  {
    name: "Gautama Buddha",
    tradition: "Buddhist", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The Awakened One — a prince who renounced a kingdom to sit beneath a tree and see through suffering."
  },
  {
    name: "Maitreya",
    tradition: "Buddhist", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The future Buddha, the Loving One — dwelling in Tusita heaven until the world is ready."
  },
  {
    name: "Avalokiteshvara",
    tradition: "Buddhist", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Bodhisattva of infinite compassion who hears every cry of suffering in ten thousand worlds."
  },
  {
    name: "Manjushri",
    tradition: "Buddhist", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Bodhisattva of transcendent wisdom, bearing a flaming sword to cut through ignorance."
  },
  {
    name: "Vajrapani",
    tradition: "Buddhist", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Wrathful guardian of the dharma, bearer of the thunderbolt, protector of the Buddha himself."
  },
  {
    name: "Tara",
    tradition: "Buddhist", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Swift savior, mother of liberation — she rises from the tears of Avalokiteshvara's compassion."
  },
  {
    name: "Mahakala",
    tradition: "Buddhist", category: "Spirit / Demon", domain: "War",
    allegiance: "Ambiguous", form: "Hybrid",
    hint: "Wrathful protector deity in terrifying form — he destroys obstacles and the illusion of self."
  },
  {
    name: "Mara",
    tradition: "Buddhist", category: "Spirit / Demon", domain: "Trickery",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Lord of illusion and desire who assailed the Buddha on the eve of his enlightenment."
  },
  {
    name: "Ksitigarbha",
    tradition: "Buddhist", category: "God", domain: "Death",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Bodhisattva who vowed to remain in hell itself until every last being is freed from suffering."
  },
  {
    name: "Nagarjuna",
    tradition: "Buddhist", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Philosopher-sage who retrieved the Prajnaparamita sutras from the realm of serpent kings."
  },
  {
    name: "Preta",
    tradition: "Buddhist", category: "Spirit / Demon", domain: "Death",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Hungry ghost condemned to roam with a vast belly and a throat too narrow to swallow — eternal craving."
  },
  {
    name: "Asura",
    tradition: "Buddhist", category: "Spirit / Demon", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Jealous demigod forever locked in war with the devas, suffering the poison of envy and pride."
  },

  // ── GREEK (EXPANDED) ───────────────────────────────────────────────────────
  {
    name: "Gaia",
    tradition: "Greek", category: "Titan / Giant", domain: "Creation",
    allegiance: "Neutral", form: "Humanoid",
    hint: "The Earth herself, first-born from Chaos, mother of sky and sea and the Titans."
  },
  {
    name: "Uranus",
    tradition: "Greek", category: "Titan / Giant", domain: "Sky",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Primordial sky god, father of the Titans, overthrown and mutilated by his own son."
  },
  {
    name: "Nyx",
    tradition: "Greek", category: "God", domain: "Death",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Goddess of Night, so ancient and terrible that even Zeus feared to wake her wrath."
  },
  {
    name: "Erebus",
    tradition: "Greek", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Celestial",
    hint: "Primordial darkness who dwells beneath the earth where the dead first pass."
  },
  {
    name: "Thanatos",
    tradition: "Greek", category: "Spirit / Demon", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Gentle personification of Death, twin of Sleep — he carries souls softly away."
  },
  {
    name: "Typhon",
    tradition: "Greek", category: "Titan / Giant", domain: "War",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Greatest monster of Greek myth — a storm-giant of a hundred serpent heads who nearly overthrew Zeus."
  },
  {
    name: "Echidna",
    tradition: "Greek", category: "Creature / Beast", domain: "Nature",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Half-woman, half-serpent, the immortal Mother of Monsters who gave birth to Cerberus, Hydra, and the Sphinx."
  },
  {
    name: "Chimera",
    tradition: "Greek", category: "Creature / Beast", domain: "War",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Fire-breathing terror with the head of a lion, body of a goat, and tail of a serpent."
  },
  {
    name: "Scylla",
    tradition: "Greek", category: "Creature / Beast", domain: "Sea",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Six-headed sea monster clinging to a cliff, snatching sailors from passing ships."
  },
  {
    name: "Charybdis",
    tradition: "Greek", category: "Creature / Beast", domain: "Sea",
    allegiance: "Malevolent", form: "Animal",
    hint: "Vast whirlpool-creature that swallowed the sea three times a day, threatening every ship."
  },
  {
    name: "Circe",
    tradition: "Greek", category: "God", domain: "Trickery",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Sorceress daughter of Helios who transformed Odysseus's crew into swine with a touch of her wand."
  },
  {
    name: "Eros",
    tradition: "Greek", category: "God", domain: "Love",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Winged god of desire, whose golden arrows could make any heart surrender to love."
  },
  {
    name: "Nike",
    tradition: "Greek", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Winged goddess of victory, who swooped down to crown the victors of battle and contest."
  },
  {
    name: "Hestia",
    tradition: "Greek", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Eldest Olympian, goddess of the hearth fire — she renounced her throne to keep peace among the gods."
  },
  {
    name: "Pan",
    tradition: "Greek", category: "God", domain: "Nature",
    allegiance: "Ambiguous", form: "Hybrid",
    hint: "Goat-legged god of wild places, music, and sudden fright — the source of panic itself."
  },
  {
    name: "Helios",
    tradition: "Greek", category: "God", domain: "Light",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Titan of the sun who daily drives his blazing chariot from east to west across the vault of heaven."
  },
  {
    name: "Selene",
    tradition: "Greek", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Titan of the moon who rides silver-horned horses through the night sky, her pale glow illuminating the world."
  },
  {
    name: "Eos",
    tradition: "Greek", category: "God", domain: "Sky",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Rosy-fingered goddess of the dawn who opens the gates of heaven each morning for her brother Helios."
  },
  {
    name: "Iris",
    tradition: "Greek", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of the rainbow, divine messenger who carries the gods' words between sky and earth."
  },
  {
    name: "Eris",
    tradition: "Greek", category: "God", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Goddess of discord, who threw the golden apple marked 'for the fairest' and sparked the Trojan War."
  },
  {
    name: "Psyche",
    tradition: "Greek", category: "Hero / Mortal", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Mortal of surpassing beauty who completed impossible tasks to reunite with Eros and win immortality."
  },
  {
    name: "Theseus",
    tradition: "Greek", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Slayer of the Minotaur, king of Athens, who navigated the Labyrinth guided by a thread."
  },
  {
    name: "Jason",
    tradition: "Greek", category: "Hero / Mortal", domain: "Sea",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Leader of the Argonauts, who sailed to the ends of the earth to claim the Golden Fleece."
  },
  {
    name: "Orpheus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Poet whose lyre-song charmed stones, rivers, and the dead — who descended into Hades to reclaim his love."
  },
  {
    name: "Bellerophon",
    tradition: "Greek", category: "Hero / Mortal", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Hero who tamed Pegasus and slew the Chimera, but was cast down when he dared to ride to Olympus."
  },
  {
    name: "Oedipus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Solver of the Sphinx's riddle — a king undone by a prophecy he could not outrun."
  },
  {
    name: "Sisyphus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Death",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Craftiest of mortals who twice cheated death; condemned for eternity to roll a boulder uphill, forever."
  },
  {
    name: "Tantalus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Death",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "King who betrayed the gods' table and was damned to stand forever in water beneath fruit he could never reach."
  },
  {
    name: "Arachne",
    tradition: "Greek", category: "Hero / Mortal", domain: "Craft",
    allegiance: "Neutral", form: "Hybrid",
    hint: "Weaver whose skill rivaled Athena — transformed into the first spider after her defiant tapestry."
  },
  {
    name: "Medea",
    tradition: "Greek", category: "Hero / Mortal", domain: "Trickery",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Sorceress of Colchis who helped Jason win the Fleece, then destroyed everything he loved in revenge."
  },
  {
    name: "Narcissus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Love",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Youth of unearthly beauty who fell in love with his own reflection and wasted away at the water's edge."
  },
  {
    name: "Daedalus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Craft",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Master craftsman who built the Labyrinth for Minos and fashioned wax wings for himself and his son."
  },
  {
    name: "Icarus",
    tradition: "Greek", category: "Hero / Mortal", domain: "Sky",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Son who flew too close to the sun on wax wings, fell into the sea, and became a lesson in hubris."
  },
  {
    name: "Triton",
    tradition: "Greek", category: "God", domain: "Sea",
    allegiance: "Neutral", form: "Hybrid",
    hint: "Herald of the sea, son of Poseidon, whose conch shell trumpet could calm or rouse the ocean waves."
  },
  {
    name: "Proteus",
    tradition: "Greek", category: "God", domain: "Sea",
    allegiance: "Neutral", form: "Hybrid",
    hint: "Shape-shifting 'Old Man of the Sea' who could see the future — but only spoke truth when firmly held."
  },
  {
    name: "Phobos",
    tradition: "Greek", category: "Spirit / Demon", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Personification of Fear, son of Ares, who routed armies with dread before a single blow was struck."
  },
  {
    name: "Deimos",
    tradition: "Greek", category: "Spirit / Demon", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Personification of Dread, twin of Phobos, who followed Ares into every battle and filled hearts with terror."
  },
  {
    name: "Hecatoncheires",
    tradition: "Greek", category: "Titan / Giant", domain: "War",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Hundred-handed giants of cataclysmic strength who hurled mountains at the Titans and secured Zeus's victory."
  },
  {
    name: "Ladon",
    tradition: "Greek", category: "Creature / Beast", domain: "Nature",
    allegiance: "Neutral", form: "Animal",
    hint: "Immortal serpent-dragon with a hundred heads, coiled eternally around the tree of golden apples at the world's edge."
  },
  {
    name: "Polyphemus",
    tradition: "Greek", category: "Creature / Beast", domain: "Nature",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Cyclops son of Poseidon, whose single eye was blinded by Odysseus's burning stake."
  },
  {
    name: "Calypso",
    tradition: "Greek", category: "God", domain: "Sea",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Nymph of the island Ogygia who kept Odysseus enchanted for seven years, longing for his return home."
  },
  {
    name: "Aeolus",
    tradition: "Greek", category: "God", domain: "Sky",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Keeper of the winds who gifted Odysseus a bag of captive gales to speed his homeward voyage."
  },
  {
    name: "Tyche",
    tradition: "Greek", category: "God", domain: "Trickery",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Goddess of fortune and chance, who steers the destiny of cities with her rudder and cornucopia."
  },
  {
    name: "Asclepius",
    tradition: "Greek", category: "Hero / Mortal", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Divine physician who learned the art of healing from a serpent and grew so skilled he could raise the dead."
  },

  // ── ROMAN (EXPANDED) ───────────────────────────────────────────────────────
  {
    name: "Aeneas",
    tradition: "Roman", category: "Hero / Mortal", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Trojan prince, son of Venus, who carried the gods of his city to Italy and founded the lineage of Rome."
  },
  {
    name: "Remus",
    tradition: "Roman", category: "Hero / Mortal", domain: "War",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Twin brother of Romulus, slain in the dispute over Rome's first walls — his blood consecrated the city."
  },
  {
    name: "Cupid",
    tradition: "Roman", category: "God", domain: "Love",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Winged Roman god of desire, whose arrows — golden for love and leaden for repulsion — made sport of hearts."
  },
  {
    name: "Aurora",
    tradition: "Roman", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Roman goddess of the dawn who opens heaven's gates with rosy fingers each morning."
  },
  {
    name: "Luna",
    tradition: "Roman", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Roman goddess of the moon, who drives a silver two-horse chariot through the night sky."
  },
  {
    name: "Sol",
    tradition: "Roman", category: "God", domain: "Light",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Roman god of the unconquered sun, whose cult was raised to supreme importance by Emperor Aurelian."
  },
  {
    name: "Ceres",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Roman goddess of grain and agriculture, whose grief for her abducted daughter brought the first winter."
  },
  {
    name: "Proserpina",
    tradition: "Roman", category: "God", domain: "Death",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Roman queen of the underworld, daughter of Ceres, who spends half the year in darkness and half in light."
  },
  {
    name: "Vesta",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of the sacred hearth whose eternal flame in the Forum was kept burning by her virgin priestesses."
  },
  {
    name: "Quirinus",
    tradition: "Roman", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Deified Romulus, god of the Roman people in their civic and military unity."
  },
  {
    name: "Bellona",
    tradition: "Roman", category: "God", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Goddess of war and carnage, companion of Mars, who drove the chariot into battle and stirred armies to fury."
  },
  {
    name: "Victoria",
    tradition: "Roman", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Winged Roman goddess of victory whose golden statue presided over the Senate until Christianity removed it."
  },
  {
    name: "Faunus",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Neutral", form: "Hybrid",
    hint: "Roman god of forests, fields, and flocks — prophetic deity who spoke in rustling leaves and the howl of wolves."
  },
  {
    name: "Pomona",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of fruit trees and orchards who tended her blossoming groves and resisted all suitors but Vertumnus."
  },
  {
    name: "Vertumnus",
    tradition: "Roman", category: "God", domain: "Trickery",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Shape-shifting god of seasons and change who disguised himself as an old woman to win Pomona's heart."
  },
  {
    name: "Dis Pater",
    tradition: "Roman", category: "God", domain: "Death",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Roman god of the underworld and mineral wealth, equated with Pluto and Orcus in later tradition."
  },
  {
    name: "Pax",
    tradition: "Roman", category: "God", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of peace whose altar, the Ara Pacis, celebrated the Augustan golden age of stability and prosperity."
  },
  {
    name: "Ops",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Ancient goddess of abundance and the harvest, consort of Saturn, whose festivals celebrated the earth's bounty."
  },
  {
    name: "Terminus",
    tradition: "Roman", category: "God", domain: "Justice",
    allegiance: "Neutral", form: "Humanoid",
    hint: "God of boundaries and border stones who refused to yield his place even to Jupiter — immoveable by law."
  },
  {
    name: "Portunus",
    tradition: "Roman", category: "God", domain: "Sea",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of harbors, keys, and gates who protected ships at port and guided sailors safely to shore."
  },
  {
    name: "Liber",
    tradition: "Roman", category: "God", domain: "Nature",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Ancient Roman god of fertility and freedom, protector of the plebs, associated with wine and Bacchus."
  },
  {
    name: "Concordia",
    tradition: "Roman", category: "God", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of harmony and civic agreement, whose temples were built after times of dangerous public division."
  },
  {
    name: "Orcus",
    tradition: "Roman", category: "God", domain: "Death",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Punisher of broken oaths in the underworld, a death deity feared for his relentless, merciless claim on the wicked."
  },

  // ── HINDU (EXPANDED) ──────────────────────────────────────────────────────
  {
    name: "Rama",
    tradition: "Hindu", category: "Hero / Mortal", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Seventh avatar of Vishnu, ideal king and warrior, whose exile, trials, and war with Ravana fill the Ramayana."
  },
  {
    name: "Krishna",
    tradition: "Hindu", category: "God", domain: "Love",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Eighth avatar of Vishnu — butter-thief, divine lover, warrior, and charioteer who revealed the Bhagavad Gita."
  },
  {
    name: "Parvati",
    tradition: "Hindu", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of power and devotion, beloved wife of Shiva, whose patience and austerities won the great ascetic's heart."
  },
  {
    name: "Kartikeya",
    tradition: "Hindu", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Six-faced son of Shiva, born to slay the demon that the gods could not kill — commander of the celestial army."
  },
  {
    name: "Kubera",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Pot-bellied lord of wealth, regent of the north, guardian of the treasures hidden in the earth and sky."
  },
  {
    name: "Kama",
    tradition: "Hindu", category: "God", domain: "Love",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "God of desire and erotic love who shoots flower-tipped arrows at the hearts of gods and men alike."
  },
  {
    name: "Vayu",
    tradition: "Hindu", category: "God", domain: "Sky",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "God of wind and breath, father of Hanuman and Bhima — his boon sons inherited his boundless speed and strength."
  },
  {
    name: "Chandra",
    tradition: "Hindu", category: "God", domain: "Light",
    allegiance: "Neutral", form: "Humanoid",
    hint: "Lunar deity who rides a silver chariot drawn by white horses, governing the tides and the calendar of the gods."
  },
  {
    name: "Brihaspati",
    tradition: "Hindu", category: "God", domain: "Wisdom",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Guru and preceptor of the gods, lord of Jupiter, whose wisdom guides the Devas in their eternal war with the Asuras."
  },
  {
    name: "Narasimha",
    tradition: "Hindu", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Fourth avatar of Vishnu — half-man, half-lion — who tore apart the tyrant demon king at dusk in the threshold."
  },
  {
    name: "Vamana",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Fifth avatar of Vishnu who appeared as a dwarf, then expanded to measure the three worlds in three cosmic strides."
  },
  {
    name: "Matsya",
    tradition: "Hindu", category: "God", domain: "Sea",
    allegiance: "Benevolent", form: "Animal",
    hint: "First avatar of Vishnu — a giant fish who guided Manu's ark to safety through the great deluge."
  },
  {
    name: "Kurma",
    tradition: "Hindu", category: "God", domain: "Sea",
    allegiance: "Benevolent", form: "Animal",
    hint: "Second avatar of Vishnu — a cosmic tortoise on whose back Mount Mandara rested while the gods churned the ocean."
  },
  {
    name: "Varaha",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Benevolent", form: "Hybrid",
    hint: "Third avatar of Vishnu — a boar who dove into the primordial ocean to rescue the Earth goddess from a demon's grip."
  },
  {
    name: "Kalki",
    tradition: "Hindu", category: "God", domain: "War",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "The tenth avatar of Vishnu yet to come — a white horse rider bearing a blazing sword to end the age of darkness."
  },
  {
    name: "Sita",
    tradition: "Hindu", category: "Hero / Mortal", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Daughter of the Earth, consort of Rama, whose abduction by Ravana and unfailing virtue forms the heart of the Ramayana."
  },
  {
    name: "Narada",
    tradition: "Hindu", category: "Spirit / Demon", domain: "Trickery",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Divine wandering sage who travels between the three worlds sowing news and mischief with his vina at his side."
  },
  {
    name: "Daksha",
    tradition: "Hindu", category: "God", domain: "Creation",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Lord of creation and progenitor who organized the great yagna — but excluded Shiva, triggering cosmic catastrophe."
  },
  {
    name: "Hiranyakashipu",
    tradition: "Hindu", category: "Titan / Giant", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Invincible demon king who forbade the worship of Vishnu and could not be killed by any mortal weapon — until Narasimha."
  },
  {
    name: "Kumbhakarna",
    tradition: "Hindu", category: "Titan / Giant", domain: "War",
    allegiance: "Malevolent", form: "Humanoid",
    hint: "Colossal demon brother of Ravana who slept six months at a time — when woken, his appetite and power were catastrophic."
  },
  {
    name: "Vibhishana",
    tradition: "Hindu", category: "Hero / Mortal", domain: "Justice",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Brother of Ravana who defected to Rama's side, choosing righteousness over kin, and was made king of Lanka."
  },
  {
    name: "Nandi",
    tradition: "Hindu", category: "Creature / Beast", domain: "Nature",
    allegiance: "Benevolent", form: "Animal",
    hint: "Sacred white bull who stands guard at Shiva's gate, the lord of joy and the divine vehicle of the great god."
  },
  {
    name: "Naga",
    tradition: "Hindu", category: "Creature / Beast", domain: "Sea",
    allegiance: "Ambiguous", form: "Hybrid",
    hint: "Divine serpent beings of the deep waters, guardians of treasures, who can take human or cobra form at will."
  },
  {
    name: "Rati",
    tradition: "Hindu", category: "God", domain: "Love",
    allegiance: "Benevolent", form: "Humanoid",
    hint: "Goddess of passion, wife of Kama, whose grief when her husband was incinerated by Shiva moved the god to compassion."
  },
  {
    name: "Parashurama",
    tradition: "Hindu", category: "Hero / Mortal", domain: "War",
    allegiance: "Ambiguous", form: "Humanoid",
    hint: "Sixth avatar of Vishnu — the axe-wielding Brahmin warrior who purged the earth of corrupt warrior-kings twenty-one times."
  },
  {
    name: "Maricha",
    tradition: "Hindu", category: "Spirit / Demon", domain: "Trickery",
    allegiance: "Malevolent", form: "Hybrid",
    hint: "Shape-shifting demon who took the form of a golden deer to lure Rama away from Sita — a decoy that cost him his life."
  },



];

// Freeze to prevent accidental mutation
Object.freeze(ENTITIES);
