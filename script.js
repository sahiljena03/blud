// ═════════════════════════════════════════════════════════════════════════════
//  MODE — current view ('tiamat' | 'country')
// ═════════════════════════════════════════════════════════════════════════════
let currentMode = 'tiamat';

function getModeConfig(mode) {
  if (mode === 'country') {
    return {
      entities:    (typeof COUNTRY !== 'undefined' ? COUNTRY : []),
      fields:      ['period', 'style', 'nation', 'material', 'setting'],
      fieldLabels: { period:'Period', style:'Style', nation:'Nation', material:'Material', setting:'Setting' },
      title:       'country',
      subtitle:    'identify the land art piece',
      placeholder: 'name a land art piece…',
      storageKey:  'country-v2',
      acMeta:      e => `${e.period} · ${e.style}`,
      toastUnknown:'Unknown artwork — choose from the list.',
      toastRepeat: 'Already examined — try another.',
      verdictWon:  n => `✦ identified on guess ${n}`,
      verdictLost: 'the artwork was',
      countdown:   'next artwork surfaces in',
      shareTitle:  'country',
      legendLevels: `
        <div class="level-item">
          <div class="level-key">Period</div>
          <div class="level-vals">BC · 0-1000 · 1000-1500<br>1500-1800 · 1800-1930<br>1930-1970 · 1980-2000<br>2000-2026</div>
        </div>
        <div class="level-item">
          <div class="level-key">Style</div>
          <div class="level-vals">Earthwork · Environmental Art<br>Site-Specific Installation<br>Monumental Sculpture<br>Conceptual Land Art · Ecological Art<br>Renaissance · Baroque<br>Impressionism · Post-Impressionism<br>Modernism · Surrealism<br>Abstract Expressionism</div>
        </div>
        <div class="level-item">
          <div class="level-key">Nation</div>
          <div class="level-vals">USA · UK · Germany<br>Netherlands · Japan · France<br>Australia · Italy · Peru<br>Chile · Finland · Ireland<br>Morocco · Mexico · China<br>Spain · Norway · Greece · Multiple</div>
        </div>
        <div class="level-item">
          <div class="level-key">Material</div>
          <div class="level-vals">Earth / Rock · Steel / Metal<br>Stone / Concrete<br>Natural Elements · Mixed Media<br>Soil / Mound · Water / Ice<br>Oil on Canvas · Watercolor<br>Marble · Bronze · Fresco</div>
        </div>
        <div class="level-item">
          <div class="level-key">Setting</div>
          <div class="level-vals">Desert · Rural / Plains<br>Salt Flats · Coastal / Marine<br>Mountain / Highland · Urban<br>Forest / Woodland · Multiple Sites<br>Museum / Gallery<br>Outdoor / Public<br>Ruins / Historic Site</div>
        </div>`,
    };
  }
  if (mode === 'literature') {
    return {
      entities:    (typeof LITERATURE !== 'undefined' ? LITERATURE : []),
      fields:      ['author', 'period', 'nationality', 'genre', 'form'],
      fieldLabels: { author:'Author', period:'Period', nationality:'Nationality', genre:'Genre', form:'Form' },
      title:       'lexicon',
      subtitle:    'identify the literary work',
      placeholder: 'name a novel, play, or poem…',
      storageKey:  'literature-v1',
      acMeta:      e => `${e.author} · ${e.genre}`,
      toastUnknown:'Unknown work — choose from the list.',
      toastRepeat: 'Already read — try another.',
      verdictWon:  n => `✦ identified on guess ${n}`,
      verdictLost: 'the work was',
      countdown:   'next work surfaces in',
      shareTitle:  'lexicon',
      legendLevels: `
        <div class="level-item">
          <div class="level-key">Author</div>
          <div class="level-vals">Shakespeare · Dickens · Tolstoy<br>Austen · Dostoevsky · Homer<br>Dante · Cervantes · Joyce<br>Kafka · Woolf · Orwell<br>Camus · Morrison · García Márquez</div>
        </div>
        <div class="level-item">
          <div class="level-key">Period</div>
          <div class="level-vals">BC · 0-1000 · 1000-1500<br>1500-1800 · 1800-1930<br>1930-1970 · 1980-2000<br>2000-2026</div>
        </div>
        <div class="level-item">
          <div class="level-key">Nationality</div>
          <div class="level-vals">British · American · French<br>Russian · German · Spanish<br>Italian · Irish · Norwegian<br>Greek · Roman · Japanese<br>Latin American · Other</div>
        </div>
        <div class="level-item">
          <div class="level-key">Genre</div>
          <div class="level-vals">Tragedy · Comedy · Epic<br>Romance · Satire · Gothic<br>Realism · Modernism · Surrealism<br>Dystopian · Historical · Mystery<br>Horror · Existential · Adventure<br>Lyric Poetry</div>
        </div>
        <div class="level-item">
          <div class="level-key">Form</div>
          <div class="level-vals">Novel · Play · Epic Poem<br>Poem · Short Story · Novella · Essay</div>
        </div>`,
    };
  }
  return {
    entities:    (typeof ENTITIES !== 'undefined' ? ENTITIES : []),
    fields:      ['tradition', 'category', 'domain', 'allegiance', 'form'],
    fieldLabels: { tradition:'Tradition', category:'Category', domain:'Domain', allegiance:'Allegiance', form:'Form' },
    title:       'tiamat',
    subtitle:    'identify the mythological entity',
    placeholder: 'name a deity, hero, or creature…',
    storageKey:  'tiamat-v1',
    acMeta:      e => `${e.tradition} · ${e.category}`,
    toastUnknown:'Unknown entity — choose from the list.',
    toastRepeat: 'Already summoned — try another.',
    verdictWon:  n => `✦ identified on guess ${n}`,
    verdictLost: 'the entity was',
    countdown:   'next entity surfaces in',
    shareTitle:  'tiamat',
    legendLevels: `
      <div class="level-item">
        <div class="level-key">Tradition</div>
        <div class="level-vals">Greek · Roman<br>Norse · Hindu · Buddhist</div>
      </div>
      <div class="level-item">
        <div class="level-key">Category</div>
        <div class="level-vals">God · Titan/Giant<br>Hero/Mortal · Creature/Beast<br>Spirit/Demon</div>
      </div>
      <div class="level-item">
        <div class="level-key">Domain</div>
        <div class="level-vals">Sky · Sea · War · Death<br>Wisdom · Love · Nature<br>Craft · Trickery<br>Creation · Justice · Light</div>
      </div>
      <div class="level-item">
        <div class="level-key">Allegiance</div>
        <div class="level-vals">Benevolent · Malevolent<br>Neutral · Ambiguous</div>
      </div>
      <div class="level-item">
        <div class="level-key">Form</div>
        <div class="level-vals">Humanoid · Animal<br>Hybrid · Celestial</div>
      </div>`,
  };
}

// Active config — updated whenever mode changes
let cfg = getModeConfig(currentMode);

// ═════════════════════════════════════════════════════════════════════════════
//  CANVAS — animated background (ocean for tiamat, desert for country)
// ═════════════════════════════════════════════════════════════════════════════
(function() {
  const canvas = document.getElementById('bg');
  const ctx    = canvas.getContext('2d');
  let W, H;
  function resize() { W = canvas.width = innerWidth; H = canvas.height = innerHeight; }
  resize();
  addEventListener('resize', resize);

  // Orbs
  const orbs = [
    { xf:0.12, yf:0.3,  r:0.36, ph:0,   sp:0.00038 },
    { xf:0.82, yf:0.18, r:0.26, ph:2.1, sp:0.00027 },
    { xf:0.52, yf:0.75, r:0.40, ph:1.1, sp:0.00033 },
    { xf:0.90, yf:0.62, r:0.22, ph:3.4, sp:0.00048 },
    { xf:0.28, yf:0.88, r:0.28, ph:0.7, sp:0.00021 },
  ];
  // Rays
  const rays = Array.from({length:7}, () => ({
    x: Math.random(), angle: (Math.random()-0.5)*0.28,
    len: 0.42+Math.random()*0.38, w: 22+Math.random()*55,
    op: 0.022+Math.random()*0.036,
  }));
  // Flow lines
  const lines = Array.from({length:11}, (_, i) => ({
    yf: 0.08+i*0.082, A: (0.012+Math.random()*0.026),
    f: 0.003+Math.random()*0.005, ph: Math.random()*Math.PI*2,
    sp: 0.00022+Math.random()*0.00036, op: 0.03+Math.random()*0.055,
    idx: i,
  }));
  // Particles
  const parts = Array.from({length:240}, (_, i) => {
    const b = i < 70;
    return {
      x: Math.random(), y: Math.random(), r: b ? 0.8+Math.random()*1.7 : 0.25+Math.random()*1.0,
      vx: b ? 0 : (Math.random()-0.5)*0.00008,
      vy: b ? -(0.00018+Math.random()*0.00022) : (Math.random()-0.5)*0.00005,
      wobble: Math.random()*Math.PI*2, op: b ? 0.04+Math.random()*0.08 : 0.03+Math.random()*0.05,
      pulse: 0, bubble: b,
    };
  });
  // Shimmer / glints
  const glints = Array.from({length:22}, () => ({
    x: Math.random(), y: 0.12+Math.random()*0.13, w: 2+Math.random()*7,
    age: Math.random()*1600, dur: 900+Math.random()*1200,
  }));

  // Theme palettes
  const THEME = {
    tiamat: {
      bg:      ['#040c12','#060e18','#08121e','#050a14'],
      orbH:    [175, 185, 165, 195, 170], orbS: '78%', orbL: '44%', orbOp: [0.09,0.07,0.10,0.06,0.08],
      ray:     [160,240,208],
      line0:   '#48d8c8', line1: '#10b8a8',
      bubble:  [180,248,232],
      particle:[16,184,168],
      glint:   '#c0f8f0',
    },
    country: {
      bg:      ['#0a0703','#100c05','#180f06','#0c0802'],
      orbH:    [30, 28, 35, 22, 32], orbS: '70%', orbL: '38%', orbOp: [0.09,0.07,0.10,0.06,0.08],
      ray:     [218,168,64],
      line0:   '#d09038', line1: '#a06820',
      bubble:  [210,168,80],
      particle:[168,104,28],
      glint:   '#e0c060',
    },
    literature: {
      bg:      ['#1a0305','#250508','#2e060a','#1e0406'],
      orbH:    [355, 0, 10, 345, 5], orbS: '75%', orbL: '45%', orbOp: [0.09,0.07,0.10,0.06,0.08],
      ray:     [220,40,40],
      line0:   '#cc2030', line1: '#991525',
      bubble:  [220,180,185],
      particle:[180,40,50],
      glint:   '#f0b0b8',
    },
  };

  function draw(ts) {
    const t = THEME[currentMode] || THEME.tiamat;
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0, t.bg[0]); g.addColorStop(0.35, t.bg[1]);
    g.addColorStop(0.65, t.bg[2]); g.addColorStop(1, t.bg[3]);
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

    for (let oi=0; oi<orbs.length; oi++) {
      const o = orbs[oi];
      const r = o.r*Math.min(W,H)*(1+Math.sin(ts*o.sp+o.ph)*0.11);
      const rg = ctx.createRadialGradient(o.xf*W,o.yf*H,0,o.xf*W,o.yf*H,r);
      rg.addColorStop(0,`hsla(${t.orbH[oi]},${t.orbS},${t.orbL},${t.orbOp[oi]})`); rg.addColorStop(1,'transparent');
      ctx.fillStyle=rg; ctx.beginPath(); ctx.arc(o.xf*W,o.yf*H,r,0,Math.PI*2); ctx.fill();
    }
    for (const ray of rays) {
      ray.x += 0.000075; if(ray.x>1.2) ray.x=-0.2;
      const x0=ray.x*W, dx=Math.sin(ray.angle)*ray.len*H, dy=Math.cos(ray.angle)*ray.len*H;
      const rg=ctx.createLinearGradient(x0,0,x0+dx,dy);
      rg.addColorStop(0,`rgba(${t.ray[0]},${t.ray[1]},${t.ray[2]},0)`);
      rg.addColorStop(0.3,`rgba(${t.ray[0]},${t.ray[1]},${t.ray[2]},${ray.op})`);
      rg.addColorStop(1,`rgba(${t.ray[0]},${t.ray[1]},${t.ray[2]},0)`);
      ctx.save(); ctx.strokeStyle=rg; ctx.lineWidth=ray.w;
      ctx.beginPath(); ctx.moveTo(x0,0); ctx.lineTo(x0+dx,dy); ctx.stroke(); ctx.restore();
    }
    for (const ln of lines) {
      ctx.beginPath();
      ctx.strokeStyle = ln.idx%3===0 ? t.line0 : t.line1;
      ctx.globalAlpha=ln.op; ctx.lineWidth=1;
      for (let px=0; px<=W; px+=3) {
        const A=ln.A*H;
        const y = ln.yf*H + A*Math.sin(px*ln.f+ts*ln.sp+ln.ph)
                          + A*0.4*Math.sin(px*ln.f*1.7+ts*ln.sp*0.8+ln.ph+1.2)
                          + A*0.2*Math.sin(px*ln.f*0.5+ts*ln.sp*1.3+ln.ph+2.8);
        px===0 ? ctx.moveTo(px,y) : ctx.lineTo(px,y);
      }
      ctx.stroke(); ctx.globalAlpha=1;
    }
    for (const p of parts) {
      if (p.bubble) {
        p.y+=p.vy; p.wobble+=0.018; p.x+=Math.sin(p.wobble)*0.0018;
        if(p.y<-0.02) p.y=1.02;
        ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${t.bubble[0]},${t.bubble[1]},${t.bubble[2]},${p.op})`; ctx.fill();
      } else {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0) p.x=1; if(p.x>1) p.x=0; if(p.y<0) p.y=1; if(p.y>1) p.y=0;
        if(p.pulse>0) p.pulse-=16;
        else if(Math.random()<0.0002) p.pulse=500;
        const op = p.pulse>0 ? Math.min(p.op*4,0.4) : p.op;
        ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(${t.particle[0]},${t.particle[1]},${t.particle[2]},${op})`; ctx.fill();
      }
    }
    for (const gl of glints) {
      gl.age+=16;
      if(gl.age>gl.dur){ gl.age=0; gl.x=Math.random(); gl.y=0.12+Math.random()*0.13; gl.w=2+Math.random()*7; gl.dur=900+Math.random()*1200; }
      const prog=gl.age/gl.dur;
      const op=(prog<0.4?prog/0.4:(1-prog)/0.6)*0.52;
      ctx.save(); ctx.globalAlpha=op; ctx.fillStyle=t.glint;
      ctx.beginPath(); ctx.ellipse(gl.x*W,gl.y*H,gl.w,1,0,0,Math.PI*2); ctx.fill(); ctx.restore();
    }
  }
  let last=0;
  function loop(ts){ if(ts-last>16){ draw(ts); last=ts; } requestAnimationFrame(loop); }
  requestAnimationFrame(loop);
})();

// ═════════════════════════════════════════════════════════════════════════════
//  GAME
// ═════════════════════════════════════════════════════════════════════════════
const MAX_GUESSES = 7;

// ── Seeded 6-hour-period entity ──────────────────────────────────────────
function getDayNumber() {
  return Math.floor(Date.now() / (6 * 3600 * 1000));
}

function getDailyEntity() {
  const day = getDayNumber();
  let h = day * 2654435761;
  h = (h ^ (h >>> 16)) >>> 0;
  return cfg.entities[h % cfg.entities.length];
}

// ── State ─────────────────────────────────────────────────────────────────
let state = {
  target:    null,
  guesses:   [],
  revealed:  {},
  gameOver:  false,
  won:       false,
  dayNum:    1,
  hintsUsed: 0,
};

function makeInitialRevealed() {
  return Object.fromEntries(cfg.fields.map(f => [f, false]));
}

function compare(guessEntity, target) {
  const c = {};
  for (const f of cfg.fields) c[f] = guessEntity[f] === target[f];
  c.correct = guessEntity.name.toLowerCase() === target.name.toLowerCase();
  return c;
}

function updateRevealed(comparison) {
  for (const f of cfg.fields) {
    if (comparison[f]) state.revealed[f] = true;
  }
}

// ── LocalStorage persistence ──────────────────────────────────────────────
function saveState() {
  const s = {
    dayNum:    state.dayNum,
    guesses:   state.guesses.map(g => {
      if (g.type === 'full')     return { type: 'full',     name: g.entity.name };
      if (g.type === 'category') return { type: 'category', field: g.field, value: g.value, matched: g.matched };
      if (g.type === 'hint')     return { type: 'hint',     revealedField: g.revealedField };
      // legacy fallback
      return { type: 'full', name: g.entity.name };
    }),
    gameOver:  state.gameOver,
    won:       state.won,
    hintsUsed: state.hintsUsed,
  };
  try { localStorage.setItem(cfg.storageKey, JSON.stringify(s)); } catch(_){ }
}

function loadSavedState() {
  try {
    const raw = JSON.parse(localStorage.getItem(cfg.storageKey));
    if (!raw || raw.dayNum !== state.dayNum) return;
    for (const g of raw.guesses) {
      if (!g.type || g.type === 'full') {
        const name = g.name || g; // handle old plain-string format
        const entity = cfg.entities.find(e => e.name === name);
        if (!entity) continue;
        const comparison = compare(entity, state.target);
        state.guesses.push({ type: 'full', entity, comparison });
        updateRevealed(comparison);
      } else if (g.type === 'category') {
        state.guesses.push({ type: 'category', field: g.field, value: g.value, matched: g.matched });
        if (g.matched) state.revealed[g.field] = true;
      } else if (g.type === 'hint') {
        state.guesses.push({ type: 'hint', revealedField: g.revealedField });
        if (g.revealedField) state.revealed[g.revealedField] = true;
      }
    }
    state.gameOver  = raw.gameOver;
    state.won       = raw.won;
    state.hintsUsed = raw.hintsUsed || 0;
  } catch(_){ }
}

// ── Core guess logic ──────────────────────────────────────────────────────
function makeGuess(name) {
  if (state.gameOver) return;
  const entity = cfg.entities.find(e => e.name.toLowerCase() === name.toLowerCase());
  if (!entity) { showToast(cfg.toastUnknown); return; }
  const alreadyGuessed = state.guesses.some(g => g.type === 'full' && g.entity.name === entity.name);
  if (alreadyGuessed) { showToast(cfg.toastRepeat); return; }

  const comparison = compare(entity, state.target);
  state.guesses.push({ type: 'full', entity, comparison });
  updateRevealed(comparison);

  if (comparison.correct) {
    state.gameOver = true;
    state.won = true;
  } else if (state.guesses.length >= MAX_GUESSES) {
    state.gameOver = true;
    state.won = false;
  }

  saveState();
  render();
  clearSearch();

  if (state.gameOver) {
    setTimeout(() => openEndModal(), 800);
  }
}

// ── Category Guess ────────────────────────────────────────────────────────
function makeCategoryGuess(field, value) {
  if (state.gameOver) return;
  if (state.guesses.length >= MAX_GUESSES) return;
  const matched = state.target[field] === value;
  state.guesses.push({ type: 'category', field, value, matched });
  if (matched) state.revealed[field] = true;
  if (state.guesses.length >= MAX_GUESSES) {
    state.gameOver = true; state.won = false;
  }
  saveState(); render(); clearCategoryGuess();
  if (state.gameOver) setTimeout(() => openEndModal(), 800);
}

function handleCategoryGuess() {
  const fieldSel = document.getElementById('cat-field-select');
  const valueSel = document.getElementById('cat-value-select');
  if (!fieldSel || !valueSel) return;
  const field = fieldSel.value;
  const value = valueSel.value;
  if (!field || !value) { showToast('select a field and value'); return; }
  makeCategoryGuess(field, value);
}

function clearCategoryGuess() {
  const valueSel = document.getElementById('cat-value-select');
  if (valueSel) valueSel.selectedIndex = 0;
}

function populateCategorySelects() {
  const fieldSel = document.getElementById('cat-field-select');
  const valueSel = document.getElementById('cat-value-select');
  if (!fieldSel || !valueSel) return;

  fieldSel.innerHTML = cfg.fields.map(f =>
    `<option value="${f}">${cfg.fieldLabels[f]}</option>`
  ).join('');

  function refreshValues() {
    const f = fieldSel.value;
    const vals = [...new Set(cfg.entities.map(e => e[f]).filter(Boolean))].sort();
    valueSel.innerHTML = vals.map(v => `<option value="${v}">${v}</option>`).join('');
  }
  refreshValues();
  fieldSel.addEventListener('change', refreshValues);
}

// ── Hint ─────────────────────────────────────────────────────────────────
function handleHint() {
  if (state.gameOver || state.hintsUsed >= 3 || state.guesses.length >= MAX_GUESSES) return;
  const unrevealed = cfg.fields.filter(f => !state.revealed[f]);
  if (!unrevealed.length) { showToast('all categories already revealed'); return; }
  const f = unrevealed[Math.floor(Math.random() * unrevealed.length)];
  state.revealed[f] = true;
  state.hintsUsed++;
  state.guesses.push({ type: 'hint', revealedField: f });
  if (state.guesses.length >= MAX_GUESSES) {
    state.gameOver = true; state.won = false;
  }
  saveState(); render();
  showToast(`hint: ${cfg.fieldLabels[f]} = ${state.target[f]}`);
  if (state.gameOver) setTimeout(() => openEndModal(), 800);
}

// ── Render ───────────────────────────────────────────────────────────────
function render() {
  renderDayInfo();
  renderGuessBadge();
  renderRevelation();
  renderBoard();
  renderInputState();
}

function renderDayInfo() {
  document.getElementById('day-info').textContent =
    `${MAX_GUESSES - state.guesses.length} guess${MAX_GUESSES - state.guesses.length !== 1 ? 'es' : ''} remaining`;
}

function renderGuessBadge() {
  const el = document.getElementById('guesses-badge');
  el.innerHTML = '';
  for (let i = 0; i < MAX_GUESSES; i++) {
    const pip = document.createElement('div');
    pip.className = 'guess-pip';
    if (i < state.guesses.length) pip.classList.add('used');
    else if (i === state.guesses.length && !state.gameOver) pip.classList.add('active');
    el.appendChild(pip);
  }
}

function renderRevelation() {
  const path = document.getElementById('rev-path');
  path.innerHTML = '';
  const allRevealed = cfg.fields.every(f => state.revealed[f]);

  cfg.fields.forEach((f, i) => {
    const isRevealed = state.revealed[f];
    const node = document.createElement('div');
    node.className = 'rev-node' + (isRevealed ? ' revealed' : '') + (allRevealed && state.won ? ' all-gold' : '');

    const keyEl = document.createElement('div');
    keyEl.className = 'rev-node-key';
    keyEl.textContent = cfg.fieldLabels[f];

    const valEl = document.createElement('div');
    valEl.className = 'rev-node-value';
    valEl.textContent = isRevealed ? state.target[f] : '— — —';

    node.appendChild(keyEl);
    node.appendChild(valEl);
    path.appendChild(node);

    if (i < cfg.fields.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'rev-connector' + (isRevealed && state.revealed[cfg.fields[i+1]] ? ' lit' : '');
      path.appendChild(conn);
    }
  });
}

function renderBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  state.guesses.forEach(g => {
    if (g.type === 'category') {
      const row = document.createElement('div');
      row.className = 'guess-row cat-guess entering';
      const cell = document.createElement('div');
      cell.className = 'g-cat-guess ' + (g.matched ? 'match' : 'wrong');
      const label = document.createElement('span');
      label.className = 'g-cat-guess-label';
      label.textContent = cfg.fieldLabels[g.field];
      const valSpan = document.createElement('span');
      valSpan.textContent = g.value;
      const resultSpan = document.createElement('span');
      resultSpan.textContent = g.matched ? '✓' : '✗';
      cell.appendChild(label); cell.appendChild(valSpan); cell.appendChild(resultSpan);
      row.appendChild(cell);
      board.appendChild(row);
      return;
    }

    if (g.type === 'hint') {
      const row = document.createElement('div');
      row.className = 'guess-row hint-row entering';
      const cell = document.createElement('div');
      cell.className = 'g-hint';
      const hintLabel = document.createElement('span');
      hintLabel.className = 'g-hint-label';
      hintLabel.textContent = '💡 hint';
      const hintVal = document.createElement('span');
      hintVal.textContent = `${cfg.fieldLabels[g.revealedField]}: ${state.target[g.revealedField]}`;
      cell.appendChild(hintLabel); cell.appendChild(hintVal);
      row.appendChild(cell);
      board.appendChild(row);
      return;
    }

    // type === 'full' (or legacy)
    const { entity, comparison } = g;
    const row = document.createElement('div');
    row.className = 'guess-row entering';

    const nameCell = document.createElement('div');
    nameCell.className = 'g-cell g-name' + (comparison.correct ? ' won-name' : '');
    nameCell.textContent = entity.name;
    row.appendChild(nameCell);

    cfg.fields.forEach(f => {
      const cell = document.createElement('div');
      cell.className = 'g-cell g-attr' + (comparison[f] ? ' match' : '');
      cell.textContent = entity[f];
      row.appendChild(cell);
    });

    board.appendChild(row);
  });

  const remaining = MAX_GUESSES - state.guesses.length;
  for (let i = 0; i < remaining; i++) {
    const row = document.createElement('div');
    row.className = 'guess-row placeholder';
    const cells = 1 + cfg.fields.length;
    for (let j = 0; j < cells; j++) {
      const cell = document.createElement('div');
      cell.className = j === 0 ? 'g-cell g-name' : 'g-cell g-attr';
      cell.innerHTML = '&nbsp;';
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}

function renderInputState() {
  const input    = document.getElementById('search-input');
  const btn      = document.getElementById('guess-btn');
  const hintBtn  = document.getElementById('hint-btn');
  const catBtn   = document.getElementById('cat-guess-btn');
  const fieldSel = document.getElementById('cat-field-select');
  const valueSel = document.getElementById('cat-value-select');

  input.disabled = state.gameOver;
  btn.disabled   = state.gameOver;

  if (hintBtn) {
    const hintsLeft = 3 - state.hintsUsed;
    hintBtn.textContent = `💡 hint (${hintsLeft} left)`;
    hintBtn.disabled = state.gameOver || state.hintsUsed >= 3 || state.guesses.length >= MAX_GUESSES;
  }
  if (catBtn)   catBtn.disabled   = state.gameOver;
  if (fieldSel) fieldSel.disabled = state.gameOver;
  if (valueSel) valueSel.disabled = state.gameOver;

  if (state.gameOver) {
    document.getElementById('autocomplete').classList.remove('open');
  }
}

function renderColHeaders() {
  const ids = ['col-h-1','col-h-2','col-h-3','col-h-4','col-h-5'];
  cfg.fields.forEach((f, i) => {
    const el = document.getElementById(ids[i]);
    if (el) el.textContent = cfg.fieldLabels[f];
  });
}

// ── Autocomplete ──────────────────────────────────────────────────────────
let activeIdx = -1;

function getFilteredEntities(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return cfg.entities
    .filter(e => e.name.toLowerCase().includes(q))
    .sort((a, b) => {
      const ai = a.name.toLowerCase().indexOf(q);
      const bi = b.name.toLowerCase().indexOf(q);
      return ai - bi || a.name.localeCompare(b.name);
    })
    .slice(0, 9);
}

function renderAutocomplete(query) {
  const ac = document.getElementById('autocomplete');
  if (!query.trim() || state.gameOver) { ac.classList.remove('open'); return; }
  const results = getFilteredEntities(query);
  if (!results.length) { ac.classList.remove('open'); return; }

  const guessedNames = new Set(state.guesses.filter(g => g.type === 'full').map(g => g.entity.name));
  ac.innerHTML = results.map((e, i) => {
    const alreadyGuessed = guessedNames.has(e.name);
    return `<div class="ac-item${alreadyGuessed ? ' guessed-already' : ''}" data-name="${e.name}" data-idx="${i}">
      <span class="ac-name">${highlightMatch(e.name, query)}</span>
      <span class="ac-meta">${cfg.acMeta(e)}</span>
    </div>`;
  }).join('');

  activeIdx = -1;
  ac.classList.add('open');

  ac.querySelectorAll('.ac-item:not(.guessed-already)').forEach(item => {
    item.addEventListener('mousedown', e => {
      e.preventDefault();
      selectAutocomplete(item.dataset.name);
    });
  });
}

function highlightMatch(name, query) {
  const i = name.toLowerCase().indexOf(query.toLowerCase());
  if (i === -1) return name;
  return name.slice(0,i) + `<strong style="color:var(--foam)">${name.slice(i,i+query.length)}</strong>` + name.slice(i+query.length);
}

function selectAutocomplete(name) {
  document.getElementById('search-input').value = name;
  document.getElementById('autocomplete').classList.remove('open');
  activeIdx = -1;
  makeGuess(name);
}

function clearSearch() {
  const input = document.getElementById('search-input');
  input.value = '';
  document.getElementById('autocomplete').classList.remove('open');
  activeIdx = -1;
}

// ── Input events ──────────────────────────────────────────────────────────
document.getElementById('search-input').addEventListener('input', e => {
  renderAutocomplete(e.target.value);
});

document.getElementById('search-input').addEventListener('keydown', e => {
  const ac    = document.getElementById('autocomplete');
  const items = Array.from(ac.querySelectorAll('.ac-item:not(.guessed-already)'));

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    activeIdx = Math.min(activeIdx + 1, items.length - 1);
    items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    activeIdx = Math.max(activeIdx - 1, -1);
    items.forEach((el, i) => el.classList.toggle('active', i === activeIdx));
  } else if (e.key === 'Enter') {
    e.preventDefault();
    if (activeIdx >= 0 && items[activeIdx]) {
      selectAutocomplete(items[activeIdx].dataset.name);
    } else {
      handleGuessBtn();
    }
  } else if (e.key === 'Escape') {
    ac.classList.remove('open');
    activeIdx = -1;
  }
});

document.addEventListener('click', e => {
  if (!e.target.closest('#input-area')) {
    document.getElementById('autocomplete').classList.remove('open');
    activeIdx = -1;
  }
});

function handleGuessBtn() {
  const val = document.getElementById('search-input').value.trim();
  if (!val) return;
  makeGuess(val);
}

function ripple(btn, e) {
  const r = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  r.style.cssText = `position:absolute;border-radius:50%;width:4px;height:4px;
    left:${e.clientX-rect.left}px;top:${e.clientY-rect.top}px;
    background:rgba(72,216,200,0.5);transform:scale(0);pointer-events:none;
    animation:ripple 0.5s ease-out forwards;`;
  btn.appendChild(r);
  setTimeout(() => r.remove(), 500);
}
document.getElementById('guess-btn').addEventListener('click', e => ripple(e.currentTarget, e));

// ── Toast ─────────────────────────────────────────────────────────────────
let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), 2200);
}

// ── End Modal ─────────────────────────────────────────────────────────────
function openEndModal() {
  const modal = document.getElementById('end-modal');
  const t = state.target;

  document.getElementById('modal-verdict').textContent =
    state.won ? cfg.verdictWon(state.guesses.length) : cfg.verdictLost;
  document.getElementById('modal-verdict').className =
    'modal-verdict ' + (state.won ? 'won' : 'lost');
  document.getElementById('modal-name').textContent = t.name.toLowerCase();
  document.getElementById('modal-meta').textContent =
    cfg.fields.map(f => t[f]).join('  ·  ');
  document.getElementById('modal-hint').textContent = t.hint;
  document.getElementById('modal-score').textContent =
    `${cfg.shareTitle} · ${state.won ? state.guesses.length : 'X'}/${MAX_GUESSES}`;

  document.getElementById('modal-share-grid').innerHTML =
    state.guesses.filter(g => g.type === 'full').map(({ entity, comparison }) =>
      `<span style="color:var(--ocean);opacity:0.7">${entity.name.padEnd(24,' ')}</span> ` +
      cfg.fields.map(f => comparison[f] ? '<span style="color:var(--foam)">■</span>' : '<span style="color:rgba(190,70,70,0.5)">■</span>').join(' ')
    ).join('\n');

  function updateCountdown() {
    const now = Date.now();
    const periodMs = 6 * 3600 * 1000;
    const next = Math.ceil(now / periodMs) * periodMs;
    const diff = next - now;
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('modal-countdown').textContent =
      `${cfg.countdown} ${h}h ${m}m ${s}s`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  modal.classList.add('open');
}

function closeEndModal() {
  document.getElementById('end-modal').classList.remove('open');
}

// ── Share ─────────────────────────────────────────────────────────────────
function copyShare() {
  const grid = state.guesses.filter(g => g.type === 'full').map(({ comparison }) =>
    cfg.fields.map(f => comparison[f] ? '🟩' : '🟥').join('')
  ).join('\n');
  const text = `${cfg.shareTitle}\n${state.won ? state.guesses.length : 'X'}/${MAX_GUESSES}\n\n${grid}\n\nplay at: homageforenki.dpdns.org`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Results copied to clipboard.');
  }).catch(() => {
    showToast('Copy failed — try manually.');
  });
}

// ── Legend Modal ──────────────────────────────────────────────────────────
function renderLegendLevels() {
  const el = document.getElementById('legend-levels');
  if (el) el.innerHTML = cfg.legendLevels;
}

function openLegend() {
  renderLegendLevels();
  const detail = document.getElementById('legend-counts-detail');
  if (detail) { detail.classList.remove('open'); }
  const btn = document.querySelector('.legend-counts-toggle');
  if (btn) btn.textContent = '▸ category details';
  document.getElementById('legend-modal').classList.add('open');
}
function closeLegend() { document.getElementById('legend-modal').classList.remove('open'); }
document.getElementById('legend-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('legend-modal')) closeLegend();
});

function renderLegendCounts() {
  const container = document.getElementById('legend-counts-detail');
  if (!container) return;
  const html = cfg.fields.map(f => {
    const counts = {};
    cfg.entities.forEach(e => { const v = e[f]; if (v) counts[v] = (counts[v] || 0) + 1; });
    const vals = Object.entries(counts).sort((a,b) => b[1]-a[1])
      .map(([v,n]) => `${v} (${n})`).join(' · ');
    return `<div class="count-item"><div class="count-key">${cfg.fieldLabels[f]}</div><div class="count-vals">${vals}</div></div>`;
  }).join('');
  container.innerHTML = `<div class="counts-grid">${html}</div>`;
}

function toggleLegendCounts() {
  const el = document.getElementById('legend-counts-detail');
  if (!el) return;
  const isOpen = el.classList.toggle('open');
  const btn = document.querySelector('.legend-counts-toggle');
  if (btn) btn.textContent = isOpen ? '▾ category details' : '▸ category details';
  if (isOpen) renderLegendCounts();
}

// ── View Toggle ───────────────────────────────────────────────────────────
function toggleView() {
  if (currentMode === 'literature') {
    openLiteraturePrompt();
    return;
  }
  const veil = document.getElementById('theme-veil');
  veil.classList.add('visible');

  setTimeout(() => {
    currentMode = currentMode === 'tiamat' ? 'country' : 'tiamat';
    cfg = getModeConfig(currentMode);

    if (currentMode === 'country') {
      document.body.classList.add('country-mode');
    } else {
      document.body.classList.remove('country-mode');
    }

    const btn = document.getElementById('view-toggle-btn');
    if (btn) btn.textContent = currentMode === 'tiamat' ? '⛰ landscape art' : '🌊 mythology';

    document.title = currentMode === 'tiamat' ? 'tiamat · mythology' : 'country · land art';

    initMode();

    setTimeout(() => veil.classList.remove('visible'), 50);
  }, 450);
}

// ── Literature Mode ───────────────────────────────────────────────────────
function openLiteraturePrompt() {
  if (currentMode === 'literature') {
    const veil = document.getElementById('theme-veil');
    veil.classList.add('visible');
    setTimeout(() => {
      currentMode = 'tiamat';
      cfg = getModeConfig(currentMode);
      document.body.classList.remove('country-mode', 'literature-mode');
      const viewBtn = document.getElementById('view-toggle-btn');
      if (viewBtn) viewBtn.textContent = '⛰ landscape art';
      const litBtn = document.getElementById('lit-toggle-btn');
      if (litBtn) litBtn.textContent = '📚 literature';
      document.title = 'tiamat · mythology';
      initMode();
      setTimeout(() => veil.classList.remove('visible'), 50);
    }, 450);
    return;
  }
  const modal = document.getElementById('lit-password-modal');
  if (!modal) return;
  modal.classList.add('open');
  document.getElementById('lit-pw-input').value = '';
  document.getElementById('lit-pw-error').textContent = '';
  setTimeout(() => document.getElementById('lit-pw-input').focus(), 50);
}

function closeLiteraturePrompt() {
  const modal = document.getElementById('lit-password-modal');
  if (modal) modal.classList.remove('open');
}

function submitLiteraturePassword() {
  const pw = document.getElementById('lit-pw-input').value;
  // Password is intentionally simple — this mode is lightly gated, not security-critical.
  if (pw === 'password') {
    closeLiteraturePrompt();
    const veil = document.getElementById('theme-veil');
    veil.classList.add('visible');
    setTimeout(() => {
      currentMode = 'literature';
      cfg = getModeConfig(currentMode);
      document.body.classList.remove('country-mode');
      document.body.classList.add('literature-mode');
      const viewBtn = document.getElementById('view-toggle-btn');
      if (viewBtn) viewBtn.textContent = '🌊 mythology';
      const litBtn = document.getElementById('lit-toggle-btn');
      if (litBtn) litBtn.textContent = '✕ exit literature';
      document.title = 'lexicon · literature';
      initMode();
      setTimeout(() => veil.classList.remove('visible'), 50);
    }, 450);
  } else {
    document.getElementById('lit-pw-error').textContent = 'incorrect password';
    document.getElementById('lit-pw-input').value = '';
    document.getElementById('lit-pw-input').focus();
  }
}

// ── Init ──────────────────────────────────────────────────────────────────
function initMode() {
  if (!cfg.entities.length) {
    document.getElementById('day-info').textContent = 'error: no data found.';
    return;
  }

  // Reset state
  state = {
    target:    null,
    guesses:   [],
    revealed:  makeInitialRevealed(),
    gameOver:  false,
    won:       false,
    dayNum:    getDayNumber(),
    hintsUsed: 0,
  };

  state.target = getDailyEntity();

  // Close any open modals
  document.getElementById('end-modal').classList.remove('open');
  closeLegend();
  clearSearch();
  populateCategorySelects();

  // Update UI text
  document.getElementById('game-title').textContent = cfg.title;
  document.getElementById('game-subtitle').textContent = cfg.subtitle;
  document.getElementById('search-input').placeholder = cfg.placeholder;
  renderColHeaders();

  loadSavedState();
  render();

  if (state.gameOver) {
    setTimeout(() => openEndModal(), 400);
  }
}

function init() {
  cfg = getModeConfig(currentMode);
  if (!cfg.entities.length) {
    document.getElementById('day-info').textContent = 'error: no entity data found.';
    return;
  }
  state.dayNum    = getDayNumber();
  state.revealed  = makeInitialRevealed();
  state.hintsUsed = 0;
  state.target    = getDailyEntity();
  populateCategorySelects();
  loadSavedState();
  render();
  if (state.gameOver) {
    setTimeout(() => openEndModal(), 400);
  }
}

const _pwInput = document.getElementById('lit-pw-input');
if (_pwInput) {
  _pwInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') submitLiteraturePassword();
  });
}

init();
