/* ============================================================
   ENGINE – utilitas bersama semua game versus
   ============================================================ */
const GAMES = [];

const E = (() => {
  let timers = [], gen = 0;

  function after(ms, fn) { const g = gen; const id = setTimeout(() => { if (g === gen) fn(); }, ms); timers.push(['t', id]); return id; }
  function every(ms, fn) { const g = gen; const id = setInterval(() => { if (g === gen) fn(); }, ms); timers.push(['i', id]); return id; }
  function loop(fn) {
    const g = gen; let last = performance.now();
    function f(t) { if (g !== gen) return; const dt = Math.min(0.05, (t - last) / 1000); last = t; fn(dt, t / 1000); requestAnimationFrame(f); }
    requestAnimationFrame(f);
  }
  function clearAll() { gen++; timers.forEach(([k, id]) => k === 't' ? clearTimeout(id) : clearInterval(id)); timers = []; }

  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) for (const [k, v] of Object.entries(props)) {
      if (v == null) continue;
      if (k === 'class') el.className = v;
      else if (k === 'html') el.innerHTML = v;
      else if (k === 'text') el.textContent = v;
      else if (k === 'style') el.style.cssText = v;
      else el.setAttribute(k, v);
    }
    kids.flat().forEach(c => { if (c == null || c === false) return; el.append(c.nodeType ? c : document.createTextNode(String(c))); });
    return el;
  }
  function tap(el, fn) {
    el.addEventListener('pointerdown', e => {
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault(); fn(e);
    });
    return el;
  }
  function shuffle(a) { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
  function lenClass(s, a = 40, b = 80) { s = String(s); return s.length > b ? 'xlong' : s.length > a ? 'long' : ''; }
  function flash(el, cls, ms = 500) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); setTimeout(() => el.classList.remove(cls), ms); }

  /* ---------- dua sisi tim ---------- */
  function halves(stage, ctx) {
    const wrap = h('div', { class: 'halves' });
    const sides = [0, 1].map(t => {
      const score = h('div', { class: 'hscore' });
      const head = h('div', { class: 'half-head' }, h('div', { class: 'tname' }, ctx.teams[t]), score);
      const body = h('div', { class: 'half-body' });
      const el = h('div', { class: `half t${t}` }, head, body);
      wrap.append(el);
      return { el, head, body, score };
    });
    stage.append(wrap);
    return { wrap, sides, setScore(t, html) { sides[t].score.innerHTML = html; } };
  }

  /* ---------- panel soal (pilihan ganda / benar-salah / isian angka) ---------- */
  function qpanel(host, opt) {
    const { ctx, team } = opt;
    const root = h('div', { class: 'qp' });
    const qbox = h('div', { class: 'qbox wait' }, 'Bersiap...');
    const body = h('div', { class: 'opts' });
    const fb = h('div', { class: 'fb' });
    root.append(qbox, body, fb); host.append(root);
    let cur = null, locked = true, stopped = false;

    function setQ(q) {
      qbox.className = 'qbox ' + lenClass(q.q + (q.c || ''), 45, 90);
      qbox.textContent = q.q;
      if (q.c != null) qbox.append(h('span', { class: 'claim' }, `Jawaban: ${q.c}`));
    }
    function next() {
      if (stopped || ctx.ended) return;
      let q = null;
      const kind = typeof opt.kind === 'function' ? opt.kind() : opt.kind;
      if (kind === 'num') q = ctx.q.num();
      if (!q && kind === 'tf') q = ctx.q.tf();
      if (!q) q = ctx.q.mc();
      cur = q; locked = false; setQ(q); body.innerHTML = '';
      if (q.t === 'mc') {
        body.className = 'opts';
        q.opts.forEach((o, i) => {
          const b = h('button', { class: 'opt ' + lenClass(o, 18, 34) }, h('span', { class: 'let' }, 'ABCD'[i]), h('span', {}, o));
          b._v = o; tap(b, () => resolve(o === q.a, b)); body.append(b);
        });
      } else if (q.t === 'tf') {
        body.className = 'opts tf';
        const bt = h('button', { class: 'opt tt' }, '✔ BENAR'), bf = h('button', { class: 'opt ff' }, '✘ SALAH');
        tap(bt, () => resolve(q.a === true, bt)); tap(bf, () => resolve(q.a === false, bf));
        bt._v = true; bf._v = false; body.append(bt, bf);
      } else if (q.t === 'num') {
        body.className = 'opts num';
        body.style.display = 'flex'; body.style.flexDirection = 'column';
        let val = '';
        const disp = h('div', { class: 'num-disp empty' }, '?');
        const pad = h('div', { class: 'keypad' });
        const draw = () => { disp.textContent = val === '' ? '?' : val.replace('-', '−'); disp.classList.toggle('empty', val === ''); };
        ['7', '8', '9', '⌫', '4', '5', '6', '−', '1', '2', '3', '0', 'OK'].forEach(k => {
          const kb = h('button', { class: 'key' + (k === 'OK' ? ' ok' : /[⌫−]/.test(k) ? ' fn' : '') }, k === 'OK' ? 'OK ✔' : k);
          tap(kb, () => {
            if (locked) return;
            SFX.click();
            if (k === '⌫') val = val.slice(0, -1);
            else if (k === '−') val = val.startsWith('-') ? val.slice(1) : '-' + val;
            else if (k === 'OK') { if (val === '' || val === '-') return; const ok = Number(val) === q.a; if (!ok) disp.textContent = `✘ ${MathGen.fmt(q.a)}`; resolve(ok, kb); return; }
            else if (val.replace('-', '').length < 7) val += k;
            draw();
          });
          pad.append(kb);
        });
        body.append(disp, pad);
      }
      if (q.t !== 'num') { body.style.display = ''; body.style.flexDirection = ''; }
    }
    function resolve(ok, btn) {
      if (locked || stopped || ctx.ended) return;
      locked = true;
      ctx.stat(team, ok);
      if (ok) { SFX.correct(); btn && btn.classList.add('ok'); fb.textContent = '✔'; fb.className = 'fb ok'; }
      else {
        SFX.wrong(); btn && btn.classList.add('bad'); fb.textContent = '✘'; fb.className = 'fb bad';
        body.querySelectorAll('.opt').forEach(b => { if ((cur.t === 'mc' && b._v === cur.a) || (cur.t === 'tf' && b._v === cur.a)) b.classList.add('reveal'); });
        root.classList.add('locked');
      }
      void fb.offsetWidth; fb.classList.add('show');
      opt.onResult && opt.onResult(ok, cur);
      after(ok ? 450 : (opt.penalty ?? 1300), () => { root.classList.remove('locked'); if (!ctx.ended && !stopped) next(); });
    }
    return { next, el: root, stop() { stopped = true; locked = true; }, pause(ms) { locked = true; root.classList.add('locked'); after(ms, () => { root.classList.remove('locked'); locked = false; }); } };
  }

  /* ---------- konfeti ---------- */
  function confetti(host, colors) {
    const cv = h('canvas', { class: 'confetti' }); host.append(cv);
    const W = cv.width = host.clientWidth, H = cv.height = host.clientHeight; const c = cv.getContext('2d');
    const ps = Array.from({ length: 220 }, () => ({ x: Math.random() * W, y: -Math.random() * H * 0.6, vx: (Math.random() - .5) * 220, vy: 120 + Math.random() * 260, r: 5 + Math.random() * 9, a: Math.random() * 6, va: (Math.random() - .5) * 10, col: colors[Math.floor(Math.random() * colors.length)] }));
    let t = 0;
    loop(dt => {
      t += dt; c.clearRect(0, 0, W, H);
      ps.forEach(p => { p.x += p.vx * dt; p.y += p.vy * dt; p.vy += 60 * dt; p.a += p.va * dt; c.save(); c.translate(p.x, p.y); c.rotate(p.a); c.fillStyle = p.col; c.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); c.restore(); });
      if (t > 7) cv.remove();
    });
  }

  return { after, every, loop, clearAll, h, tap, shuffle, lenClass, flash, halves, qpanel, confetti };
})();
