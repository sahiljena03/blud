// ─────────────────────────────────────────────────────────────────────────────
//  COUNTRY — land art & earthworks dataset
//  Fields: name · period · style · nation · material · setting · hint
//  Period values:  BC | 0-1000 | 1000-1500 | 1500-1800 | 1800-1930 | 1930-1970 | 1980-2000 | 2000-2026
//  Style values:   Earthwork | Environmental Art | Site-Specific Installation |
//                  Monumental Sculpture | Conceptual Land Art | Ecological Art |
//                  Renaissance | Baroque | Impressionism | Post-Impressionism |
//                  Modernism | Surrealism | Abstract Expressionism
//  Nation values:  USA | UK | Germany | Netherlands | Japan | France | Australia |
//                  Italy | Peru | Chile | Finland | Ireland | Morocco | Mexico |
//                  China | Multiple | Spain | Norway | Greece
//  Material values: Earth / Rock | Steel / Metal | Stone / Concrete |
//                   Natural Elements | Mixed Media | Soil / Mound | Water / Ice |
//                   Oil on Canvas | Watercolor | Marble | Bronze | Fresco
//  Setting values: Desert | Rural / Plains | Salt Flats | Coastal / Marine |
//                  Mountain / Highland | Urban | Forest / Woodland | Multiple Sites |
//                  Museum / Gallery | Outdoor / Public | Ruins / Historic Site
// ─────────────────────────────────────────────────────────────────────────────
window.COUNTRY = Object.freeze([

  // ── CORE AMERICAN EARTHWORKS ────────────────────────────────────────────────
  {
    name: "Spiral Jetty",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Salt Flats",
    hint: "A 1,500-foot coil of black basalt and earth that curls into the rose-tinted shallows of Utah's Great Salt Lake, Robert Smithson's most celebrated intervention in raw geology."
  },
  {
    name: "Double Negative",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Michael Heizer displaced 240,000 tons of rhyolite and sandstone across a Nevada mesa to create two facing cuts—a negative form defined entirely by what is removed."
  },
  {
    name: "City",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Spanning a mile and a half of the Nevada Basin and Range, Michael Heizer's monumental complex of mounds, trenches, and plinths took fifty years to build and opened to the public in 2022."
  },
  {
    name: "Lightning Field",
    period: "1930-1970",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Desert",
    hint: "Four hundred stainless-steel poles arranged in a precise grid across a high New Mexico plateau by Walter De Maria, designed to be experienced over an overnight stay as storms electrify the sky."
  },
  {
    name: "Sun Tunnels",
    period: "1930-1970",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Desert",
    hint: "Nancy Holt aligned four massive concrete cylinders in the Utah desert to frame the rising and setting sun at the solstices, each tunnel pierced with holes that cast star-map constellations inside."
  },
  {
    name: "Roden Crater",
    period: "1930-1970",
    style: "Environmental Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "James Turrell has spent decades reshaping an extinct Painted Desert volcano into a naked-eye observatory where tunnels and chambers funnel sky, light, and celestial events into pure perceptual experience."
  },
  {
    name: "Complex One",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "The first completed element of Michael Heizer's City—a massive earthen mound framed by concrete beams, invoking ancient burial tumuli in the silence of Nevada's Garden Valley."
  },
  {
    name: "Amarillo Ramp",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Robert Smithson's final earthwork, a spiraling earthen ramp descending into a Texas reservoir, was completed by his wife Nancy Holt and friends after Smithson died in a plane crash during the survey."
  },
  {
    name: "Partially Buried Woodshed",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Natural Elements",
    setting: "Rural / Plains",
    hint: "Robert Smithson had a backhoe pile earth atop a Kent State woodshed until its central beam cracked, then left it to decay—a monument to entropy that gained new meaning after the 1970 campus shootings."
  },
  {
    name: "Effigy Tumuli",
    period: "1980-2000",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Michael Heizer sculpted five massive earthen mounds shaped like a catfish, turtle, frog, water strider, and snake across a reclaimed Illinois strip-mine as part of a public environmental restoration project."
  },
  {
    name: "Star Axis",
    period: "1930-1970",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Desert",
    hint: "Charles Ross spent five decades carving a solar-and-stellar observatory into a New Mexico mesa, aligning tunnels and chambers to the movements of Polaris and the sun across geological time."
  },
  {
    name: "Cadillac Ranch",
    period: "1930-1970",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Rural / Plains",
    hint: "The Ant Farm collective buried ten Cadillacs nose-first in a Texas Panhandle field, angled to match the slope of the Great Pyramid, as a pop-art meditation on American car culture and the open road."
  },
  {
    name: "Carhenge",
    period: "1980-2000",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Rural / Plains",
    hint: "Jim Reinders arranged thirty-eight spray-painted grey cars in a circle and trilithon pattern on Nebraska prairie to replicate Stonehenge, a playful homage to both ancient ritual and American junk culture."
  },
  {
    name: "Las Vegas Piece",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Walter De Maria used a grader to scribe two parallel chalk lines a mile long and a cross on a Nevada desert flat, creating a work whose documentation was its primary form of existence."
  },
  {
    name: "Mile Long Drawing",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Walter De Maria drew two parallel chalk lines stretching exactly one mile across the Mojave Desert floor—a pure geometric gesture asserting scale, measurement, and intention on uninhabited land."
  },
  {
    name: "NYC Earth Room",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Urban",
    hint: "Walter De Maria filled a SoHo loft floor-to-ceiling with 280,000 pounds of dark earth, creating an enduring olfactory and existential rupture between the agricultural and the urban."
  },
  {
    name: "Broken Kilometer",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Urban",
    hint: "Five hundred polished brass rods totaling exactly one kilometer in length lie in parallel rows across the floor of a New York loft in Walter De Maria's meditation on measurement, material, and perception."
  },
  {
    name: "Rift",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Michael Heizer used a motorcycle to drag a trench across the Nevada desert, one of his earliest raw acts of carving the land itself as sculptural gesture."
  },
  {
    name: "Displaced/Replaced Mass",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Michael Heizer transported three massive granite boulders from the Sierra Nevada to the Silver Springs desert and sank them into shallow trenches—a physical confrontation between geological time and human scale."
  },
  {
    name: "Mirror Displacements",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Mixed Media",
    setting: "Multiple Sites",
    hint: "Robert Smithson placed square mirrors in remote landscapes—Yucatan jungles, quarries, deserts—then photographed them to collapse the boundary between site and non-site, the real and its reflection."
  },
  {
    name: "Time Landscape",
    period: "1930-1970",
    style: "Ecological Art",
    nation: "USA",
    material: "Natural Elements",
    setting: "Urban",
    hint: "Alan Sonfist replanted a corner of Manhattan's Greenwich Village with pre-colonial woodland species, making visible the forest that once existed there and proposing nature's memory as a monumental form."
  },
  {
    name: "Annual Rings",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "Multiple",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Dennis Oppenheim cut concentric rings into the snow of a frozen river that forms the US-Canada border, where the two countries' different time zones meant a single artwork existed in two separate times."
  },
  {
    name: "Whirlpool",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Dennis Oppenheim hired a skywriter to trace a vortex pattern in the air over El Cajon Mountain, documenting the ephemeral spiral as it dissolved—land art translated into sky."
  },
  {
    name: "Amphisculpture",
    period: "1930-1970",
    style: "Earthwork",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Beverly Pepper shaped a broad earthen amphitheater into a New Jersey hillside, blending contoured seating with landscape so that the work functions simultaneously as sculpture, architecture, and terrain."
  },

  // ── CHRISTO & JEANNE-CLAUDE ──────────────────────────────────────────────────
  {
    name: "Running Fence",
    period: "1930-1970",
    style: "Environmental Art",
    nation: "USA",
    material: "Mixed Media",
    setting: "Coastal / Marine",
    hint: "Christo and Jeanne-Claude strung eighteen feet of white nylon fabric across twenty-four miles of Northern California hills until it tumbled into the Pacific, existing for only two weeks before removal."
  },
  {
    name: "Valley Curtain",
    period: "1930-1970",
    style: "Environmental Art",
    nation: "USA",
    material: "Mixed Media",
    setting: "Mountain / Highland",
    hint: "A blazing orange nylon curtain spanning twelve hundred feet was suspended across Rifle Gap, Colorado by Christo and Jeanne-Claude—it tore in high winds two days after installation and was taken down."
  },
  {
    name: "Surrounded Islands",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "USA",
    material: "Mixed Media",
    setting: "Coastal / Marine",
    hint: "Christo and Jeanne-Claude ringed eleven islands in Miami's Biscayne Bay with six million square feet of floating flamingo-pink polypropylene fabric, transforming Biscayne Bay for two weeks into a tropical painting."
  },
  {
    name: "The Gates",
    period: "2000-2026",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Mixed Media",
    setting: "Urban",
    hint: "Christo and Jeanne-Claude installed 7,503 saffron-orange fabric panels along 23 miles of Central Park's footpaths, turning a winter city into a river of warm color visible from surrounding buildings."
  },
  {
    name: "Wrapped Coast",
    period: "1930-1970",
    style: "Environmental Art",
    nation: "Australia",
    material: "Mixed Media",
    setting: "Coastal / Marine",
    hint: "Christo and Jeanne-Claude wrapped one million square feet of Australian coastline at Little Bay near Sydney in erosion-control fabric and rope, draping an entire ocean cliff face as if nature were a gift."
  },
  {
    name: "Wrapped Reichstag",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "Germany",
    material: "Mixed Media",
    setting: "Urban",
    hint: "For two weeks, Christo and Jeanne-Claude shrouded the German parliament in 100,000 square meters of silver fabric and blue rope, transforming a monument of contested history into a shimmering apparition."
  },
  {
    name: "The Umbrellas",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "Multiple",
    material: "Mixed Media",
    setting: "Rural / Plains",
    hint: "Christo and Jeanne-Claude simultaneously opened 1,340 blue umbrellas in Japan and 1,760 yellow ones in California on the same day, connecting two distant valleys in a single transoceanic artwork."
  },
  {
    name: "Floating Piers",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "Italy",
    material: "Mixed Media",
    setting: "Coastal / Marine",
    hint: "Christo covered three kilometers of floating yellow fabric pathways across Italy's Lake Iseo, allowing visitors to walk on water between the shore and an island as if the lake's surface had become solid ground."
  },

  // ── WALTER DE MARIA ──────────────────────────────────────────────────────────
  {
    name: "Vertical Earth Kilometer",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "Germany",
    material: "Steel / Metal",
    setting: "Urban",
    hint: "Walter De Maria drove a brass rod exactly one kilometer straight down into the earth in Kassel—only its polished top inch is visible flush with the ground, making an artwork whose entire existence lies below sight."
  },

  // ── MAYA LIN ─────────────────────────────────────────────────────────────────
  {
    name: "Vietnam Veterans Memorial",
    period: "1980-2000",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Urban",
    hint: "Maya Lin's two polished black granite walls descend into the Washington Mall earth while reflecting visitors' faces alongside 58,000 names, turning grief and landscape into a single incision in public ground."
  },
  {
    name: "Wave Field",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Urban",
    hint: "Maya Lin sculpted a series of undulating grass waves inspired by fluid dynamics across the grounds of the University of Michigan, using topography to freeze motion and make earth move like ocean."
  },
  {
    name: "Storm King Wavefield",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "USA",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Maya Lin shaped eleven acres of Storm King Art Center's meadow into a grid of parallel earth waves eleven feet tall, a monumental grassed seascape that seems to ripple across the Hudson Valley."
  },

  // ── AGNES DENES ──────────────────────────────────────────────────────────────
  {
    name: "Wheatfield: A Confrontation",
    period: "1980-2000",
    style: "Ecological Art",
    nation: "USA",
    material: "Natural Elements",
    setting: "Urban",
    hint: "Agnes Denes planted two acres of wheat on a landfill two blocks from Wall Street, then harvested 1,000 pounds of grain to tour the world—a challenge to priorities of money, hunger, and wastefulness."
  },
  {
    name: "Tree Mountain",
    period: "1980-2000",
    style: "Ecological Art",
    nation: "Finland",
    material: "Natural Elements",
    setting: "Rural / Plains",
    hint: "Agnes Denes designed a conical artificial hill in central Finland planted with 11,000 trees by as many people from 11 countries, its DNA spiraling in a mathematical pattern intended to last 400 years."
  },

  // ── ANDY GOLDSWORTHY ─────────────────────────────────────────────────────────
  {
    name: "Storm King Wall",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Forest / Woodland",
    hint: "Andy Goldsworthy built a dry-stone wall that weaves through the Storm King Art Center's woodland, diving into a pond and emerging on the other side as if the wall itself were a living creature navigating the land."
  },
  {
    name: "Sheepfolds",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "Andy Goldsworthy restored and reimagined nearly 100 derelict sheep enclosures across Cumbrian fields, embedding boulders, arches, and enclosed cairns to honor the agricultural memory of the English countryside."
  },
  {
    name: "Striding Arches",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "Five red sandstone arches stride across the Dumfriesshire hills in Scotland by Andy Goldsworthy, each one seeming to walk the moorland, their spacing calculated to align when seen from a single viewpoint on a ridge."
  },
  {
    name: "Garden of Stones",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Urban",
    hint: "Andy Goldsworthy placed eighteen glacial boulders drilled with cavities at the Museum of Jewish Heritage in New York, planting dwarf oaks that will grow from the stone as a memorial to Holocaust survivors."
  },

  // ── RICHARD LONG ─────────────────────────────────────────────────────────────
  {
    name: "A Line Made By Walking",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "UK",
    material: "Natural Elements",
    setting: "Rural / Plains",
    hint: "Richard Long walked back and forth across a Somerset field until his feet pressed a faint straight line into the grass, photographing the result in the only evidence of an artwork made entirely by walking."
  },
  {
    name: "A Line in Scotland",
    period: "1980-2000",
    style: "Conceptual Land Art",
    nation: "UK",
    material: "Natural Elements",
    setting: "Mountain / Highland",
    hint: "Richard Long walked a straight line across a remote Scottish highland, leaving only bootprints in the peat and a photograph—a solitary traversal of wilderness recorded as pure geographic act."
  },
  {
    name: "Sahara Line",
    period: "1980-2000",
    style: "Conceptual Land Art",
    nation: "Morocco",
    material: "Natural Elements",
    setting: "Desert",
    hint: "Richard Long walked a straight line through the Sahara Desert and photographed it—the work existing as a geographic assertion of presence, the footprints vanished by wind soon after he left."
  },

  // ── RICHARD SERRA ────────────────────────────────────────────────────────────
  {
    name: "Tilted Arc",
    period: "1980-2000",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Urban",
    hint: "Richard Serra's 120-foot weathering-steel wall bisected New York's Federal Plaza for eight years until the government ordered its removal in 1989—the ensuing controversy became a landmark debate about public art and site-specificity."
  },

  // ── ROBERT MORRIS ────────────────────────────────────────────────────────────
  {
    name: "Observatory",
    period: "1930-1970",
    style: "Earthwork",
    nation: "Netherlands",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Robert Morris shaped earthen embankments, granite channels, and a steel-notched mound in a Dutch polder aligned to the solstices and the cardinal directions, a modern Neolithic observatory in a flat coastal plain."
  },

  // ── OTHER SMITHSON WORKS ─────────────────────────────────────────────────────
  {
    name: "Broken Circle / Spiral Hill",
    period: "1930-1970",
    style: "Earthwork",
    nation: "Netherlands",
    material: "Earth / Rock",
    setting: "Coastal / Marine",
    hint: "Robert Smithson dredged a semicircular canal from a Dutch quarry pond and piled a spiral earthen hill on its shore, creating twin positive and negative forms in a landscape of industrial extraction."
  },
  {
    name: "Asphalt Rundown",
    period: "1930-1970",
    style: "Conceptual Land Art",
    nation: "Italy",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "Robert Smithson had a truck of hot asphalt dumped down a Roman quarry slope, photographing its slow dark pour as it obeyed gravity—a meditation on entropy, industrial material, and irreversibility."
  },

  // ── JOSEPH BEUYS ─────────────────────────────────────────────────────────────
  {
    name: "7000 Oaks",
    period: "1980-2000",
    style: "Ecological Art",
    nation: "Germany",
    material: "Natural Elements",
    setting: "Urban",
    hint: "Joseph Beuys launched a project to plant 7,000 oak trees paired with basalt stones across Kassel, Germany—completed after his death by volunteers, it remains the most ambitious urban ecological artwork in history."
  },

  // ── PATRICIA JOHANSON ────────────────────────────────────────────────────────
  {
    name: "Fair Park Lagoon",
    period: "1980-2000",
    style: "Ecological Art",
    nation: "USA",
    material: "Natural Elements",
    setting: "Urban",
    hint: "Patricia Johanson restored a polluted Dallas lagoon by designing serpentine concrete pathways shaped like a giant fern and prehistoric plant, which simultaneously function as habitat, walkway, and living sculpture."
  },

  // ── OLAFUR ELIASSON ──────────────────────────────────────────────────────────
  {
    name: "New York City Waterfalls",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "USA",
    material: "Water / Ice",
    setting: "Urban",
    hint: "Olafur Eliasson constructed four artificial waterfalls up to 90 feet tall beneath Manhattan's bridges and along Brooklyn's waterfront for a summer, flooding the harbor with the sound and sight of wilderness."
  },

  // ── JAMES TURRELL SKYSPACES ──────────────────────────────────────────────────
  {
    name: "Kielder Skyspace",
    period: "2000-2026",
    style: "Site-Specific Installation",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Forest / Woodland",
    hint: "James Turrell embedded a circular stone chamber into the Kielder forest hillside, its oculus framing the Northumbrian sky so the atmosphere overhead appears to take on a solid, hovering, luminous quality."
  },
  {
    name: "Deer Shelter Skyspace",
    period: "2000-2026",
    style: "Site-Specific Installation",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "James Turrell installed this oval roofed aperture in the grounds of the Yorkshire Sculpture Park, where the sky seen through the opening shifts in color and weight as daylight transitions to dusk."
  },

  // ── NOGUCHI ──────────────────────────────────────────────────────────────────
  {
    name: "Moerenuma Park",
    period: "1980-2000",
    style: "Environmental Art",
    nation: "Japan",
    material: "Earth / Rock",
    setting: "Urban",
    hint: "Isamu Noguchi conceived an entire park on a Sapporo landfill as a total sculpture: a pyramid, a glass fountain, a great mound hill, and a cherry grove shaped so every element of the landscape is treated as art."
  },
  {
    name: "California Scenario",
    period: "1980-2000",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Urban",
    hint: "Isamu Noguchi transformed a Costa Mesa corporate courtyard into a compressed landscape of California environments—desert, forest stream, and dunes—using granite, river rocks, and cacti as a meditation on the state's terrain."
  },

  // ── UGO RONDINONE ────────────────────────────────────────────────────────────
  {
    name: "Seven Magic Mountains",
    period: "2000-2026",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Desert",
    hint: "Ugo Rondinone stacked seven totemic columns of fluorescent-painted boulders up to thirty-five feet tall in the Mojave Desert near Las Vegas, a psychedelic counterpoint to the flat ochre landscape."
  },

  // ── MICHAEL HEIZER ADDITIONAL ───────────────────────────────────────────────
  {
    name: "Levitated Mass",
    period: "2000-2026",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Urban",
    hint: "Michael Heizer transported a 340-ton granite boulder from a Riverside quarry to LACMA on an eleven-day overnight journey, suspending it over a slot trench so visitors walk beneath its hovering mass."
  },

  // ── BARNETT NEWMAN ───────────────────────────────────────────────────────────
  {
    name: "Broken Obelisk",
    period: "1930-1970",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Steel / Metal",
    setting: "Urban",
    hint: "Barnett Newman balanced an inverted truncated obelisk on the apex of a pyramid—twenty-six feet of Cor-Ten steel—a monument to spiritual aspiration that Philip Johnson later dedicated to Martin Luther King Jr."
  },

  // ── WALTER DE MARIA / TIME ───────────────────────────────────────────────────
  {
    name: "Time / Timeless / No Time",
    period: "2000-2026",
    style: "Site-Specific Installation",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Urban",
    hint: "Walter De Maria installed a golden sphere and granite columns in the Dia: Beacon museum, bathed in natural light, evoking eternal time in a manner both minimal and overwhelming."
  },

  // ── NAOSHIMA ─────────────────────────────────────────────────────────────────
  {
    name: "Naoshima Island",
    period: "1980-2000",
    style: "Site-Specific Installation",
    nation: "Japan",
    material: "Mixed Media",
    setting: "Coastal / Marine",
    hint: "The Benesse Art Foundation transformed this small Seto Inland Sea island into an open-air museum where buildings by Tadao Ando and permanent works by Turrell, De Maria, and others are absorbed into the coastal landscape."
  },

  // ── TONKIN LIU ───────────────────────────────────────────────────────────────
  {
    name: "Singing Ringing Tree",
    period: "2000-2026",
    style: "Environmental Art",
    nation: "UK",
    material: "Steel / Metal",
    setting: "Rural / Plains",
    hint: "Tonkin Liu's tree-like tower of galvanized steel pipes on a Pennine hilltop generates an eerie, dissonant chord as wind passes through its tuned tubes, making the weather audible as haunting music."
  },

  // ── MOUNT RUSHMORE / CRAZY HORSE ────────────────────────────────────────────
  {
    name: "Mount Rushmore",
    period: "1930-1970",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Mountain / Highland",
    hint: "Gutzon Borglum dynamited and chiseled the faces of four US presidents into a Black Hills granite cliff over fourteen years, creating an 18-story monument that is inseparable from the landscape it permanently alters."
  },
  {
    name: "Crazy Horse Memorial",
    period: "1930-1970",
    style: "Monumental Sculpture",
    nation: "USA",
    material: "Stone / Concrete",
    setting: "Mountain / Highland",
    hint: "Korczak Ziolkowski began blasting a South Dakota mountain into a 563-foot portrait of the Lakota leader in 1948—still unfinished after his death, it is the world's largest mountain carving in progress."
  },

  // ── ANCIENT AMERICAN EARTHWORKS ─────────────────────────────────────────────
  {
    name: "Serpent Mound",
    period: "0-1000",
    style: "Earthwork",
    nation: "USA",
    material: "Soil / Mound",
    setting: "Rural / Plains",
    hint: "A sinuous quarter-mile earthen effigy of an uncoiling serpent built by the Fort Ancient culture on an Ohio plateau, its open jaws aligned to the summer solstice sunset with uncanny precision."
  },
  {
    name: "Monks Mound",
    period: "0-1000",
    style: "Earthwork",
    nation: "USA",
    material: "Soil / Mound",
    setting: "Rural / Plains",
    hint: "The largest prehistoric earthwork north of Mexico, this 100-foot platform mound at Cahokia near St. Louis was built over three centuries, requiring more fill than the Great Pyramid to create a city center for 20,000 people."
  },
  {
    name: "Poverty Point",
    period: "BC",
    style: "Earthwork",
    nation: "USA",
    material: "Soil / Mound",
    setting: "Rural / Plains",
    hint: "A complex of six concentric earthen ridges and a 72-foot bird-shaped mound in Louisiana, built 3,700 years ago by a trade society whose labor and vision rivals any ancient monument in the Americas."
  },
  {
    name: "Effigy Mounds",
    period: "0-1000",
    style: "Earthwork",
    nation: "USA",
    material: "Soil / Mound",
    setting: "Rural / Plains",
    hint: "Hundreds of bear-, bird-, and panther-shaped earthen mounds built by Woodland peoples along the Mississippi River bluffs of Iowa—a ceremonial landscape of animal effigies lying silent in the tall-grass hills."
  },

  // ── ANCIENT WORLD ────────────────────────────────────────────────────────────
  {
    name: "Nazca Lines",
    period: "BC",
    style: "Earthwork",
    nation: "Peru",
    material: "Earth / Rock",
    setting: "Desert",
    hint: "Scratched into the Peruvian coastal desert by removing dark surface stones to reveal pale subsoil, the Nazca geoglyphs include a 1,000-foot hummingbird, a monkey, and dozens of geometric lines visible only from the air."
  },
  {
    name: "Stonehenge",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "Sarsen stones weighing up to fifty tons were dragged to Salisbury Plain and arranged so the central axis aligns with the midsummer sunrise, creating a circular monument that has anchored human ceremony for 4,000 years."
  },
  {
    name: "Avebury",
    period: "BC",
    style: "Earthwork",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "The largest Neolithic stone circle in the world encompasses an entire English village, its massive sarsen megaliths set within a two-mile chalk henge whose ditch was once as deep as a two-story building."
  },
  {
    name: "Silbury Hill",
    period: "BC",
    style: "Earthwork",
    nation: "UK",
    material: "Soil / Mound",
    setting: "Rural / Plains",
    hint: "The largest prehistoric artificial mound in Europe rises 130 feet from the Wiltshire chalk, built in phases over a century around 2400 BC—its purpose still unknown after centuries of archaeological excavation."
  },
  {
    name: "Carnac Stones",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "France",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "More than 3,000 prehistoric standing stones stretch in eleven parallel alignments for over four kilometers across the Breton countryside, the largest such megalithic array on earth, erected beginning around 3300 BC."
  },
  {
    name: "Ring of Brodgar",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "UK",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "A near-perfect circle of sixty original standing stones on the Orkney Islands wind-scoured isthmus, set within a ditch cut from solid rock and aligned to lunar events—Scotland's answer to Stonehenge."
  },
  {
    name: "Newgrange",
    period: "BC",
    style: "Earthwork",
    nation: "Ireland",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "A massive passage tomb older than Stonehenge and the Egyptian pyramids, engineered so that each winter solstice a single shaft of dawn light travels through the roof-box and illuminates the inner chamber for seventeen minutes."
  },
  {
    name: "Cerne Abbas Giant",
    period: "0-1000",
    style: "Earthwork",
    nation: "UK",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "A 180-foot chalk figure carved into a Dorset hillside, wielding a knobbly club and displaying exaggerated fertility, its exact age and meaning remain debated—a provocative human presence inscribed in the English countryside."
  },
  {
    name: "Uffington White Horse",
    period: "BC",
    style: "Earthwork",
    nation: "UK",
    material: "Earth / Rock",
    setting: "Rural / Plains",
    hint: "A highly stylized, galloping chalk horse 374 feet long cut into the Berkshire Downs, created around 1000 BC and visible for miles across the Vale of the White Horse, its abstract elegance feels remarkably modern."
  },
  {
    name: "Easter Island Moai",
    period: "1000-1500",
    style: "Monumental Sculpture",
    nation: "Chile",
    material: "Stone / Concrete",
    setting: "Coastal / Marine",
    hint: "Nearly a thousand volcanic tuff figures averaging 13 feet tall were carved and transported by the Rapa Nui across their remote Pacific island, facing inland to watch over ancestral settlements from coastal promontories."
  },
  {
    name: "Olmec Colossal Heads",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "Mexico",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "Seventeen colossal basalt heads, the largest over nine feet tall and weighing forty tons, were carved by the Olmec and transported fifty miles from quarry to lowland plazas, each wearing a distinctive helmet and commanding presence."
  },
  {
    name: "Chichen Itza",
    period: "0-1000",
    style: "Monumental Sculpture",
    nation: "Mexico",
    material: "Stone / Concrete",
    setting: "Rural / Plains",
    hint: "The great stepped pyramid of El Castillo at this Mayan city was precisely engineered so that on the equinoxes, a shadow serpent descends its stairway—landscape, astronomy, and mythology fused in stone at massive scale."
  },
  {
    name: "Great Wall of China",
    period: "1500-1800",
    style: "Earthwork",
    nation: "China",
    material: "Stone / Concrete",
    setting: "Mountain / Highland",
    hint: "Spanning 13,000 miles of mountain ridge, desert, and plain across northern China, the Wall is the longest earthwork in human history—a continuous fortification that also functions as the world's most ambitious landscape intervention."
  },

  // ── PAINTINGS & SCULPTURES ──────────────────────────────────────────────────
  {
    name: "Mona Lisa",
    period: "1500-1800",
    style: "Renaissance",
    nation: "Italy",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Leonardo da Vinci's small panel portrait of a Florentine woman is distinguished by its sfumato technique, the subject's enigmatic expression, and the atmospheric landscape behind her — the most visited painting on earth."
  },
  {
    name: "The Starry Night",
    period: "1800-1930",
    style: "Post-Impressionism",
    nation: "Netherlands",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Vincent van Gogh painted this swirling nocturnal sky above a sleepy village from memory during his stay at an asylum in Saint-Rémy-de-Provence, the cypress tree piercing upward like a dark flame."
  },
  {
    name: "Girl with a Pearl Earring",
    period: "1500-1800",
    style: "Baroque",
    nation: "Netherlands",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Johannes Vermeer's tronie captures an unknown young woman glancing over her shoulder, the oversized teardrop pearl at her ear luminous against a dark ground — nicknamed the 'Mona Lisa of the North.'"
  },
  {
    name: "The Persistence of Memory",
    period: "1930-1970",
    style: "Surrealism",
    nation: "Spain",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Salvador Dalí painted melting pocket watches draped across a desolate Catalan beach in a dream-like afternoon scene, equating the fluidity of time with the irrational logic of the unconscious mind."
  },
  {
    name: "Guernica",
    period: "1930-1970",
    style: "Modernism",
    nation: "Spain",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Pablo Picasso's vast monochrome canvas of fractured bodies, shrieking women, and a dying horse was painted in response to the Nazi bombing of a Basque town in 1937, becoming the defining anti-war image of the century."
  },
  {
    name: "The Birth of Venus",
    period: "1500-1800",
    style: "Renaissance",
    nation: "Italy",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Sandro Botticelli depicted the goddess of love arriving on the shore of Cyprus atop a giant scallop shell, her long auburn hair stirred by the winds — a secular mythological canvas that shocked and enchanted Renaissance Florence."
  },
  {
    name: "David",
    period: "1500-1800",
    style: "Renaissance",
    nation: "Italy",
    material: "Marble",
    setting: "Museum / Gallery",
    hint: "Michelangelo carved this 17-foot figure of the biblical shepherd from a single block of Carrara marble, capturing the moment before his confrontation with Goliath — the supreme statement of Renaissance humanism and physical idealism."
  },
  {
    name: "Venus de Milo",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "Greece",
    material: "Marble",
    setting: "Museum / Gallery",
    hint: "This marble goddess, believed to be Aphrodite, was discovered on the Aegean island of Milos in 1820 and dated to around 100 BC — her missing arms have sparked centuries of speculation and made her the world's most famous fragment."
  },
  {
    name: "The Thinker",
    period: "1800-1930",
    style: "Modernism",
    nation: "France",
    material: "Bronze",
    setting: "Outdoor / Public",
    hint: "Auguste Rodin's seated nude figure, chin resting on his fist in deep contemplation, was originally conceived as Dante above the Gates of Hell before becoming a freestanding universal symbol of philosophy and creative struggle."
  },
  {
    name: "The Scream",
    period: "1800-1930",
    style: "Modernism",
    nation: "Norway",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Edvard Munch described a walk at sunset when the sky turned blood-red and he sensed an infinite scream passing through nature — his anguished figure on a fjord bridge, hands pressed to hollow cheeks, became the icon of existential dread."
  },
  {
    name: "Water Lilies",
    period: "1800-1930",
    style: "Impressionism",
    nation: "France",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Claude Monet devoted the last decades of his life to painting the pond in his Giverny garden, producing over 250 canvases of floating lilies and reflected sky — the immersive wraparound panels at the Orangerie anticipate abstract painting."
  },
  {
    name: "Las Meninas",
    period: "1500-1800",
    style: "Baroque",
    nation: "Spain",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Diego Velázquez placed himself within this royal court scene, painting the infanta and her ladies-in-waiting while the king and queen are reflected in a mirror — a hall-of-mirrors meditation on looking, representation, and artistic power."
  },
  {
    name: "The Night Watch",
    period: "1500-1800",
    style: "Baroque",
    nation: "Netherlands",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Rembrandt's enormous militia portrait broke with convention by showing Amsterdam's civic guards in dynamic motion emerging from shadow, the brilliant golden figure of the captain's lieutenant catching the light in the midst of controlled chaos."
  },
  {
    name: "Sistine Chapel Ceiling",
    period: "1500-1800",
    style: "Renaissance",
    nation: "Italy",
    material: "Fresco",
    setting: "Ruins / Historic Site",
    hint: "Michelangelo spent four years on his back painting biblical scenes across the Vatican chapel's 5,000 square feet of curved ceiling, culminating in the famous near-touch between God and Adam at the moment of creation."
  },
  {
    name: "A Sunday on La Grande Jatte",
    period: "1800-1930",
    style: "Post-Impressionism",
    nation: "France",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Georges Seurat spent two years applying millions of tiny dots of pure color in strict pointillist method to this enormous scene of Parisians at leisure on an island in the Seine, revolutionizing how optical mixing could replace brushwork."
  },
  {
    name: "Campbell's Soup Cans",
    period: "1930-1970",
    style: "Modernism",
    nation: "USA",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Andy Warhol exhibited thirty-two identical canvases of Campbell's condensed soup cans in a Los Angeles gallery in 1962, presenting commercial packaging as high art and launching Pop Art as a movement that collapsed the boundary between culture and commodity."
  },
  {
    name: "No. 31",
    period: "1930-1970",
    style: "Abstract Expressionism",
    nation: "USA",
    material: "Oil on Canvas",
    setting: "Museum / Gallery",
    hint: "Jackson Pollock laid this vast canvas on the floor and poured, dripped, and flung house paint across it in the technique he called action painting — the resulting web of looping lines records the artist's physical movement as pure gestural energy."
  },
  {
    name: "Winged Victory of Samothrace",
    period: "BC",
    style: "Monumental Sculpture",
    nation: "Greece",
    material: "Marble",
    setting: "Museum / Gallery",
    hint: "This Hellenistic marble figure of Nike alighting on a ship's prow, discovered on a Greek island in 1863, conveys such a sense of rushing wind and forward momentum that it has never been surpassed as a sculptural evocation of triumph."
  },

]);
