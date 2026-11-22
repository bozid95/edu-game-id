/* GAME: PANJAT PINANG – susun urutan yang benar untuk memanjat ke hadiah */
GAMES.push({
  id: 'pinang', time: 150, goal: { def: 5, choices: [3, 5, 7, 10], label: 'Tingkat panjatan' }, name: 'Panjat Pinang', icon: '🎋', c: ['#e63946', '#ffb703'],
  desc: 'Susun urutan dengan benar untuk memanjat ke puncak hadiah!',
  tags: ['Mengurutkan', '5 tingkat', '150 detik'],
  rules: ['Sentuh pilihan sesuai URUTAN yang benar (pertama, kedua, dst).', 'Urutan lengkap = naik satu tingkat.', 'Salah sentuh = tergelincir dan terkunci sebentar.', 'Tim pertama yang mencapai hadiah di puncak menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 5;
    const H = E.halves(ctx.stage, ctx);
    const lvl = [0, 0];
    const sides = [0, 1].map(t => {
      const wrap = h('div', { class: 'pp-wrap' });
      const col = h('div', { class: 'pp-pole-col' },
        h('div', { class: 'pp-pole' }),
        h('div', { class: 'pp-top' }, h('div', { class: 'ring' }), h('div', { class: 'gifts' }, '🎁🚲🎁')));
      for (let i = 1; i < GOAL; i++) col.append(h('div', { class: 'pp-mark', style: `bottom:${3 + i * 76 / GOAL}%` }));
      const climber = h('div', { class: 'pp-climber' }, t ? '🧗‍♂️' : '🧗');
      col.append(climber);
      const qcol = h('div', { class: 'pp-q' });
      wrap.append(t === 0 ? col : qcol, t === 0 ? qcol : col);
      H.sides[t].body.append(wrap);
      return { t, qcol, climber, panel: null };
    });
    const upd = () => sides.forEach(S => {
      H.setScore(S.t, `🪜 ${lvl[S.t]} / ${GOAL}`);
      S.climber.style.bottom = (2 + lvl[S.t] * 76 / GOAL) + '%';
    });
    upd();

    function climb(S) {
      lvl[S.t]++; SFX.climb(); upd();
      if (lvl[S.t] >= GOAL) ctx.end(S.t, 'Berhasil meraih hadiah di puncak!');
    }
    function next(S) {
      if (ctx.ended) return;
      const q = ctx.q.ord();
      S.qcol.innerHTML = '';
      if (!q) { // cadangan: pakai pilihan ganda
        if (!S.panel) S.panel = E.qpanel(S.qcol, { ctx, team: S.t, kind: 'mc', onResult: ok => ok && climb(S) });
        S.panel.next(); return;
      }
      let prog = 0, locked = false;
      const qbox = h('div', { class: 'qbox ' + E.lenClass(q.q, 40, 70) }, '🔢 ' + q.q);
      const slots = h('div', { class: 'pp-slots' });
      q.items.forEach(() => slots.append(h('div', { class: 'pp-slot empty' })));
      const grid = h('div', { class: 'pp-items' });
      if (q.items.length <= 3) grid.style.gridTemplateColumns = '1fr';
      const items = E.shuffle(q.items.map((s, i) => ({ s, i })));
      items.forEach((it, k) => {
        const b = h('button', { class: 'opt pp-item ' + E.lenClass(it.s, 16, 30) }, h('span', { class: 'let' }, '•'), h('span', {}, it.s));
        E.tap(b, () => {
          if (locked || ctx.ended) return;
          if (q.items[prog] === it.s) {
            SFX.click(); b.classList.add('used');
            const sl = slots.children[prog]; sl.className = 'pp-slot'; sl.textContent = it.s;
            prog++;
            if (prog === q.items.length) { locked = true; ctx.stat(S.t, true); SFX.correct(); climb(S); E.after(650, () => next(S)); }
          } else {
            locked = true; ctx.stat(S.t, false); SFX.wrong(); b.classList.add('bad');
            E.flash(S.climber, 'slip', 400);
            const ov = h('div', { class: 'locked-ov' }, '⏳'); S.qcol.append(ov);
            E.after(1100, () => { b.classList.remove('bad'); ov.remove(); locked = false; });
          }
        });
        grid.append(b);
      });
      S.qcol.append(qbox, slots, grid);
    }
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(150, () => ctx.end(lvl[0] > lvl[1] ? 0 : lvl[1] > lvl[0] ? 1 : -1, 'Waktu habis!'));
      }
    };
  }
});
