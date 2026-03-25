# blud

A daily guessing game with three modes — identify the answer before your **7 guesses** run out.

Modes:
- **tiamat** — identify the mythological entity (ocean aesthetic)
- **country** — identify the work of art (desert aesthetic)
- **lexicon** — identify the famous literary work (red, password-protected)

Built with the ABZU-UI aesthetic: animated canvas backgrounds, bioluminescent particles, glass-morphism panels.

## Classification quick reference

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
