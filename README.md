# blud

A daily mythology guessing game inspired by Metazooa — identify the mythological entity before your 6 guesses run out.

Built with the ABZU-UI aesthetic: animated ocean background, bioluminescent particles, glass-morphism panels.

## Files

```
blud/
├── index.html   — game (all CSS + JS inline)
└── data.js      — mythology database (load before index.html)
```

> **Rule for `data.js`:** Only ever ADD new entries. Never remove or reorder existing ones — the daily puzzle is seeded by entry index.

---

## How to play locally

Open `index.html` in a browser. Because `data.js` is loaded via `<script src="data.js">`, you need a local server (not just double-clicking the file) to avoid CORS issues in some browsers.

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
# In your terminal, navigate to the blud folder
cd path/to/blud

# Initialize git
git init

# Add all files
git add index.html data.js README.md

# Commit
git commit -m "initial commit — blud mythology game"

# Connect to your GitHub repo (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/blud.git

# Push
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

## Adding new mythology entries

Open `data.js` and append new objects to the `ENTITIES` array **before** the closing `];`. Follow the schema exactly:

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

After adding, commit and push — the daily seed will automatically incorporate new entries as the index grows.

---

## Classification quick reference

| Level | Values |
|-------|--------|
| Tradition | Greek · Roman · Norse · Hindu · Buddhist |
| Category | God · Titan/Giant · Hero/Mortal · Creature/Beast · Spirit/Demon |
| Domain | Sky · Sea · War · Death · Wisdom · Love · Nature · Craft · Trickery · Creation · Justice · Light |
| Allegiance | Benevolent · Malevolent · Neutral · Ambiguous |
| Form | Humanoid · Animal · Hybrid · Celestial |
