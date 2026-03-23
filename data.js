// ─────────────────────────────────────────────────────────────────────────────
//  blud · mythology database
//  IMPORTANT: Only ADD new entries to this file. Never remove or modify
//  existing entries — the daily puzzle is seeded by index position.
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

];

// Freeze to prevent accidental mutation
Object.freeze(ENTITIES);
