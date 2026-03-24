// ═════════════════════════════════════════════════════════════════════════════
//  CANVAS — animated ocean background (all 6 layers per ABZU-UI skill)
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
    { xf:0.12, yf:0.3,  r:0.36, h:175, op:0.09, ph:0,   sp:0.00038 },
    { xf:0.82, yf:0.18, r:0.26, h:185, op:0.07, ph:2.1, sp:0.00027 },
    { xf:0.52, yf:0.75, r:0.40, h:165, op:0.10, ph:1.1, sp:0.00033 },
    { xf:0.90, yf:0.62, r:0.22, h:195, op:0.06, ph:3.4, sp:0.00048 },
    { xf:0.28, yf:0.88, r:0.28, h:170, op:0.08, ph:0.7, sp:0.00021 },
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
    col: i%3===0 ? '#48d8c8' : '#10b8a8',
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
  // Shimmer
  const glints = Array.from({length:22}, () => ({
    x: Math.random(), y: 0.12+Math.random()*0.13, w: 2+Math.random()*7,
    age: Math.random()*1600, dur: 900+Math.random()*1200,
  }));

  function draw(ts) {
    const g = ctx.createLinearGradient(0,0,0,H);
    g.addColorStop(0,'#040c12'); g.addColorStop(0.35,'#060e18');
    g.addColorStop(0.65,'#08121e'); g.addColorStop(1,'#050a14');
    ctx.fillStyle = g; ctx.fillRect(0,0,W,H);

    for (const o of orbs) {
      const r = o.r*Math.min(W,H)*(1+Math.sin(ts*o.sp+o.ph)*0.11);
      const rg = ctx.createRadialGradient(o.xf*W,o.yf*H,0,o.xf*W,o.yf*H,r);
      rg.addColorStop(0,`hsla(${o.h},78%,44%,${o.op})`); rg.addColorStop(1,'transparent');
      ctx.fillStyle=rg; ctx.beginPath(); ctx.arc(o.xf*W,o.yf*H,r,0,Math.PI*2); ctx.fill();
    }
    for (const ray of rays) {
      ray.x += 0.000075; if(ray.x>1.2) ray.x=-0.2;
      const x0=ray.x*W, dx=Math.sin(ray.angle)*ray.len*H, dy=Math.cos(ray.angle)*ray.len*H;
      const rg=ctx.createLinearGradient(x0,0,x0+dx,dy);
      rg.addColorStop(0,'rgba(160,240,208,0)'); rg.addColorStop(0.3,`rgba(160,240,208,${ray.op})`); rg.addColorStop(1,'rgba(160,240,208,0)');
      ctx.save(); ctx.strokeStyle=rg; ctx.lineWidth=ray.w;
      ctx.beginPath(); ctx.moveTo(x0,0); ctx.lineTo(x0+dx,dy); ctx.stroke(); ctx.restore();
    }
    for (const ln of lines) {
      ctx.beginPath(); ctx.strokeStyle=ln.col; ctx.globalAlpha=ln.op; ctx.lineWidth=1;
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
        ctx.fillStyle=`rgba(180,248,232,${p.op})`; ctx.fill();
      } else {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0) p.x=1; if(p.x>1) p.x=0; if(p.y<0) p.y=1; if(p.y>1) p.y=0;
        if(p.pulse>0) p.pulse-=16;
        else if(Math.random()<0.0002) p.pulse=500;
        const op = p.pulse>0 ? Math.min(p.op*4,0.4) : p.op;
        ctx.beginPath(); ctx.arc(p.x*W,p.y*H,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(16,184,168,${op})`; ctx.fill();
      }
    }
    for (const gl of glints) {
      gl.age+=16;
      if(gl.age>gl.dur){ gl.age=0; gl.x=Math.random(); gl.y=0.12+Math.random()*0.13; gl.w=2+Math.random()*7; gl.dur=900+Math.random()*1200; }
      const prog=gl.age/gl.dur;
      const op=(prog<0.4?prog/0.4:(1-prog)/0.6)*0.52;
      ctx.save(); ctx.globalAlpha=op; ctx.fillStyle='#c0f8f0';
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
const MAX_GUESSES = 6;
const FIELDS      = ['tradition','category','domain','allegiance','form'];
const FIELD_LABELS = { tradition:'Tradition', category:'Category', domain:'Domain', allegiance:'Allegiance', form:'Form' };

const START_DATE  = new Date('2025-01-01T00:00:00');

// ── Seeded daily entity ───────────────────────────────────────────────────
function getDayNumber() {
  const now = new Date();
  const d   = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(1, Math.floor((d - START_DATE) / 86400000) + 1);
}

function getDailyEntity() {
  const day = getDayNumber();
  // Simple but stable hash over day number
  let h = day * 2654435761;
  h = (h ^ (h >>> 16)) >>> 0;
  return ENTITIES[h % ENTITIES.length];
}

// ── State ─────────────────────────────────────────────────────────────────
let state = {
  target:   null,
  guesses:  [],   // [{ entity, comparison }]
  revealed: { tradition:false, category:false, domain:false, allegiance:false, form:false },
  gameOver: false,
  won:      false,
  dayNum:   1,
};

function compare(guessEntity, target) {
  const c = {};
  for (const f of FIELDS) c[f] = guessEntity[f] === target[f];
  c.correct = guessEntity.name.toLowerCase() === target.name.toLowerCase();
  return c;
}

function updateRevealed(comparison) {
  for (const f of FIELDS) {
    if (comparison[f]) state.revealed[f] = true;
  }
}

// ── LocalStorage persistence ──────────────────────────────────────────────
const LS_KEY = 'blud-v1';

function saveState() {
  const s = {
    dayNum:  state.dayNum,
    guesses: state.guesses.map(g => g.entity.name),
    gameOver: state.gameOver,
    won:      state.won,
  };
  try { localStorage.setItem(LS_KEY, JSON.stringify(s)); } catch(_){ }
}

function loadSavedState() {
  try {
    const raw = JSON.parse(localStorage.getItem(LS_KEY));
    if (!raw || raw.dayNum !== state.dayNum) return;
    for (const name of raw.guesses) {
      const entity = ENTITIES.find(e => e.name === name);
      if (!entity) continue;
      const comparison = compare(entity, state.target);
      state.guesses.push({ entity, comparison });
      updateRevealed(comparison);
    }
    state.gameOver = raw.gameOver;
    state.won      = raw.won;
  } catch(_){ }
}

// ── Core guess logic ──────────────────────────────────────────────────────
function makeGuess(name) {
  if (state.gameOver) return;
  const entity = ENTITIES.find(e => e.name.toLowerCase() === name.toLowerCase());
  if (!entity) { showToast('Unknown entity — choose from the list.'); return; }
  const alreadyGuessed = state.guesses.some(g => g.entity.name === entity.name);
  if (alreadyGuessed) { showToast('Already summoned — try another.'); return; }

  const comparison = compare(entity, state.target);
  state.guesses.push({ entity, comparison });
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
    `day ${state.dayNum}  ·  ${MAX_GUESSES - state.guesses.length} guess${MAX_GUESSES - state.guesses.length !== 1 ? 'es' : ''} remaining`;
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
  const allRevealed = FIELDS.every(f => state.revealed[f]);

  FIELDS.forEach((f, i) => {
    const isRevealed = state.revealed[f];
    const node = document.createElement('div');
    node.className = 'rev-node' + (isRevealed ? ' revealed' : '') + (allRevealed && state.won ? ' all-gold' : '');

    const keyEl = document.createElement('div');
    keyEl.className = 'rev-node-key';
    keyEl.textContent = FIELD_LABELS[f];

    const valEl = document.createElement('div');
    valEl.className = 'rev-node-value';
    valEl.textContent = isRevealed ? state.target[f] : '— — —';

    node.appendChild(keyEl);
    node.appendChild(valEl);
    path.appendChild(node);

    if (i < FIELDS.length - 1) {
      const conn = document.createElement('div');
      conn.className = 'rev-connector' + (isRevealed && state.revealed[FIELDS[i+1]] ? ' lit' : '');
      path.appendChild(conn);
    }
  });
}

function renderBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  // Filled guess rows
  state.guesses.forEach(({ entity, comparison }) => {
    const row = document.createElement('div');
    row.className = 'guess-row entering';

    // Name cell
    const nameCell = document.createElement('div');
    nameCell.className = 'g-cell g-name' + (comparison.correct ? ' won-name' : '');
    nameCell.textContent = entity.name;
    row.appendChild(nameCell);

    // Attribute cells
    FIELDS.forEach(f => {
      const cell = document.createElement('div');
      cell.className = 'g-cell g-attr' + (comparison[f] ? ' match' : '');
      cell.textContent = entity[f];
      row.appendChild(cell);
    });

    board.appendChild(row);
  });

  // Empty placeholder rows
  const remaining = MAX_GUESSES - state.guesses.length;
  for (let i = 0; i < remaining; i++) {
    const row = document.createElement('div');
    row.className = 'guess-row placeholder';
    const cells = 1 + FIELDS.length;
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
  const input = document.getElementById('search-input');
  const btn   = document.getElementById('guess-btn');
  input.disabled = state.gameOver;
  btn.disabled   = state.gameOver;
  if (state.gameOver) {
    document.getElementById('autocomplete').classList.remove('open');
  }
}

// ── Autocomplete ──────────────────────────────────────────────────────────
let activeIdx = -1;

function getFilteredEntities(query) {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return ENTITIES
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

  const guessedNames = new Set(state.guesses.map(g => g.entity.name));
  ac.innerHTML = results.map((e, i) => {
    const alreadyGuessed = guessedNames.has(e.name);
    return `<div class="ac-item${alreadyGuessed ? ' guessed-already' : ''}" data-name="${e.name}" data-idx="${i}">
      <span class="ac-name">${highlightMatch(e.name, query)}</span>
      <span class="ac-meta">${e.tradition} · ${e.category}</span>
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
    state.won ? `✦ identified on guess ${state.guesses.length}` : 'the entity was';
  document.getElementById('modal-verdict').className =
    'modal-verdict ' + (state.won ? 'won' : 'lost');
  document.getElementById('modal-name').textContent = t.name.toLowerCase();
  document.getElementById('modal-meta').textContent =
    `${t.tradition}  ·  ${t.category}  ·  ${t.domain}  ·  ${t.allegiance}  ·  ${t.form}`;
  document.getElementById('modal-hint').textContent = t.hint;
  document.getElementById('modal-score').textContent =
    `blud · day ${state.dayNum} · ${state.won ? state.guesses.length : 'X'}/${MAX_GUESSES}`;

  // Share grid
  const grid = state.guesses.map(({ comparison }) => {
    return FIELDS.map(f => comparison[f] ? '🟩' : '🟥').join('');
  }).join('\n');
  document.getElementById('modal-share-grid').innerHTML =
    state.guesses.map(({ entity, comparison }) =>
      `<span style="color:var(--ocean);opacity:0.7">${entity.name.padEnd(24,' ')}</span> ` +
      FIELDS.map(f => comparison[f] ? '<span style="color:var(--foam)">■</span>' : '<span style="color:rgba(190,70,70,0.5)">■</span>').join(' ')
    ).join('\n');

  // Countdown to next puzzle
  function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const diff = tomorrow - now;
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    document.getElementById('modal-countdown').textContent =
      `next entity surfaces in ${h}h ${m}m ${s}s`;
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
  const grid = state.guesses.map(({ comparison }) =>
    FIELDS.map(f => comparison[f] ? '🟩' : '🟥').join('')
  ).join('\n');
  const text = `blud · day ${state.dayNum}\n${state.won ? state.guesses.length : 'X'}/${MAX_GUESSES}\n\n${grid}\n\nplay at: blud.game`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('Results copied to clipboard.');
  }).catch(() => {
    showToast('Copy failed — try manually.');
  });
}

// ── Legend Modal ──────────────────────────────────────────────────────────
function openLegend()  { document.getElementById('legend-modal').classList.add('open'); }
function closeLegend() { document.getElementById('legend-modal').classList.remove('open'); }
document.getElementById('legend-modal').addEventListener('click', e => {
  if (e.target === document.getElementById('legend-modal')) closeLegend();
});

// ── Init ──────────────────────────────────────────────────────────────────
function init() {
  if (typeof ENTITIES === 'undefined' || !ENTITIES.length) {
    document.getElementById('day-info').textContent = 'error: no entity data found.';
    return;
  }
  state.dayNum = getDayNumber();
  state.target = getDailyEntity();
  loadSavedState();
  render();
  if (state.gameOver) {
    setTimeout(() => openEndModal(), 400);
  }
}

init();
