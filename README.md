# blud

A daily guessing game with three modes — identify the answer before your **7 guesses** run out.

Modes:
- **tiamat** — identify the mythological entity (ocean aesthetic)
- **country** — identify the work of art (desert aesthetic)
- **lexicon** — identify the famous literary work (red, password-protected)

Built with the ABZU-UI aesthetic: animated canvas backgrounds, bioluminescent particles, glass-morphism panels.

## Files

```
blud/
├── index.html      — game shell (layout + modals)
├── styles.css      — all styles
├── script.js       — game logic (all three modes)
├── data.js         — mythology database (tiamat mode)
├── art.js          — art works database (country mode)
└── literature.js   — literature database (lexicon mode, password-protected)
```

> **Rule for data files:** Only ever ADD new entries. Never remove or reorder existing ones — the daily puzzle is seeded by entry index.

---

## How to play

Each mode has a daily puzzle that refreshes every 6 hours. You have **7 guesses** to identify the answer.

### Guessing mechanics

- **Full guess** — type a name in the search box and click **Guess**. Each field in the guess row lights up teal if it matches the answer's attribute, or stays dark if it doesn't.
- **Category guess** — use the two dropdowns below the search box to pick a field (e.g. "Tradition") and a value (e.g. "Greek"), then click **Check**. Uses 1 guess; reveals that field in the path if correct.
- **Hint** — click **💡 hint** to reveal a random unrevealed attribute. Uses 1 guess. Up to **3 hints** per puzzle.

The **path to the answer** panel at the top gradually reveals attributes as you match them. When all five glow, you know exactly what the answer is.

### Modes

| Mode | Toggle | Password |
|------|--------|----------|
| tiamat (mythology) | ⛰ landscape art / 🌊 mythology | none |
| country (art works) | ⛰ landscape art / 🌊 mythology | none |
| lexicon (literature) | 📚 literature | yes |

The **lexicon** mode is password-protected. Click **📚 literature** and enter the password to access it. Click **✕ exit literature** to return.

---

## How to play locally

```bash
# Python 3
cd blud && python3 -m http.server 8080
# then open http://localhost:8080
```

---

## Uploading to GitHub Pages

### Step 1 — Create a GitHub repository

1. Go to [github.com/new](https://github.com/new)
2. Name it `blud` (or anything you like)
3. Set it to **Public** (required for free GitHub Pages)
4. Click **Create repository**

### Step 2 — Push your files

```bash
cd path/to/blud
git init
git add index.html styles.css script.js data.js art.js literature.js README.md
git commit -m "initial commit — blud guessing game"
git remote add origin https://github.com/YOUR_USERNAME/blud.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

1. On your repo page, click **Settings**
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set Branch to `main` and folder to `/ (root)`
5. Click **Save**

After ~60 seconds, your game will be live at:
```
https://YOUR_USERNAME.github.io/blud/
```

---

## Classification quick reference

### tiamat (mythology)

| Field | Values |
|-------|--------|
| Tradition | Greek · Roman · Norse · Hindu · Buddhist |
| Category | God · Titan/Giant · Hero/Mortal · Creature/Beast · Spirit/Demon |
| Domain | Sky · Sea · War · Death · Wisdom · Love · Nature · Craft · Trickery · Creation · Justice · Light |
| Allegiance | Benevolent · Malevolent · Neutral · Ambiguous |
| Form | Humanoid · Animal · Hybrid · Celestial |

### country (art works)

| Field | Values |
|-------|--------|
| Period | BC · 0-1000 · 1000-1500 · 1500-1800 · 1800-1930 · 1930-1970 · 1980-2000 · 2000-2026 |
| Style | Earthwork · Environmental Art · Site-Specific Installation · Monumental Sculpture · Conceptual Land Art · Ecological Art · Renaissance · Baroque · Impressionism · Post-Impressionism · Modernism · Surrealism · Abstract Expressionism |
| Nation | USA · UK · Germany · Netherlands · Japan · France · Australia · Italy · Peru · Chile · Finland · Ireland · Morocco · Mexico · China · Multiple |
| Material | Earth / Rock · Steel / Metal · Stone / Concrete · Natural Elements · Mixed Media · Soil / Mound · Water / Ice · Oil on Canvas · Watercolor · Marble · Bronze · Fresco |
| Setting | Desert · Rural / Plains · Salt Flats · Coastal / Marine · Mountain / Highland · Urban · Forest / Woodland · Multiple Sites · Museum / Gallery · Outdoor / Public · Ruins / Historic Site |

### lexicon (literature) — password-protected

| Field | Values |
|-------|--------|
| Author | Author's last name |
| Period | BC · 0-1000 · 1000-1500 · 1500-1800 · 1800-1930 · 1930-1970 · 1980-2000 · 2000-2026 |
| Nationality | British · American · French · Russian · German · Spanish · Italian · Irish · Norwegian · Greek · Roman · Japanese · Latin American · Other |
| Genre | Tragedy · Comedy · Epic · Romance · Satire · Gothic · Realism · Modernism · Surrealism · Dystopian · Historical · Mystery · Horror · Existential · Adventure · Lyric Poetry |
| Form | Novel · Play · Epic Poem · Poem · Short Story · Novella · Essay |

---

## Adding new entries

### Mythology (data.js)

Open `data.js` and append to the `ENTITIES` array:

```js
{
  name:       "Entity Name",
  tradition:  "Greek",           // Greek | Roman | Norse | Hindu | Buddhist
  category:   "God",             // God | Titan / Giant | Hero / Mortal | Creature / Beast | Spirit / Demon
  domain:     "Wisdom",          // Sky | Sea | War | Death | Wisdom | Love | Nature | Craft | Trickery | Creation | Justice | Light
  allegiance: "Benevolent",      // Benevolent | Malevolent | Neutral | Ambiguous
  form:       "Humanoid",        // Humanoid | Animal | Hybrid | Celestial
  hint:       "One evocative sentence describing this entity."
},
```

### Art works (art.js)

Open `art.js` and append to the `COUNTRY` array:

```js
{
  name:     "Work Title",
  period:   "1930-1970",         // BC | 0-1000 | 1000-1500 | 1500-1800 | 1800-1930 | 1930-1970 | 1980-2000 | 2000-2026
  style:    "Earthwork",         // see country classification table above
  nation:   "USA",               // see country classification table above
  material: "Earth / Rock",      // see country classification table above
  setting:  "Desert",            // see country classification table above
  hint:     "One evocative sentence describing this work."
},
```

### Literature (literature.js)

Open `literature.js` and append to the `LITERATURE` array:

```js
{
  name:        "Work Title",
  author:      "AuthorLastName",
  period:      "1800-1930",      // BC | 0-1000 | 1000-1500 | 1500-1800 | 1800-1930 | 1930-1970 | 1980-2000 | 2000-2026
  nationality: "British",        // see lexicon classification table above
  genre:       "Realism",        // see lexicon classification table above
  form:        "Novel",          // Novel | Play | Epic Poem | Poem | Short Story | Novella | Essay
  hint:        "One evocative sentence describing this work."
},
```
