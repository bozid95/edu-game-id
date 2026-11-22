/* GAME: KARTU INGAT – buka dua kartu, temukan pasangannya (memori) */
GAMES.push({
  id: 'memori', time: 150, goal: { def: 2, choices: [1, 2, 3, 4], label: 'Papan memori' }, name: 'Kartu Ingat', icon: '🃏', c: ['#9d4edd', '#ff6d00'],
  desc: 'Buka kartu tertutup dan temukan pasangannya. Uji daya ingat!',
  tags: ['Memori', 'Menjodohkan', '2 papan'],
  rules: ['Sentuh dua kartu untuk membukanya.', 'Kartu kuning = istilah, kartu putih = pasangannya.', 'Jika cocok, kartu tetap terbuka. Jika tidak, kartu tertutup lagi.', 'Bersihkan papan sesuai target lebih dulu untuk menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 2;
    const H = E.halves(ctx.stage, ctx);
    const boards = [0, 0], found = [0, 0];
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🃏 ${boards[t]} / ${GOAL} <small style="opacity:.8">(${found[t]} pasang)</small>`));
    upd();
    const sides = [0, 1].map(t => { const g = h('div', { class: 'mm-grid' }); H.sides[t].body.append(g); return { t, g }; });
    function next(S) {
      if (ctx.ended) return;
      const set = ctx.q.pair();
      const pairs = (set && set.pairs.length >= 3 ? set.pairs : [['?', '?'], ['!', '!'], ['#', '#']]).slice(0, 5);
      S.g.innerHTML = '';
      S.g.style.gridTemplateColumns = `repeat(${pairs.length}, 1fr)`;
      let open = [], left = pairs.length, locked = false;
      const cards = [];
      pairs.forEach((p, i) => { cards.push({ txt: p[0], i, s: 'l' }); cards.push({ txt: p[1], i, s: 'r' }); });
      E.shuffle(cards).forEach(c => {
        const el = h('button', { class: `mm-card ${c.s}` }, h('div', { class: 'mm-back' }, '❓'), h('div', { class: 'mm-front ' + E.lenClass(c.txt, 14, 26) }, c.txt));
        c.el = el;
        E.tap(el, () => {
          if (locked || ctx.ended || el.classList.contains('open')) return;
          el.classList.add('open'); SFX.click(); open.push(c);
          if (open.length < 2) return;
          const [a, b] = open; open = [];
          if (a.i === b.i && a.s !== b.s) {
            ctx.stat(S.t, true); SFX.correct(); a.el.classList.add('done'); b.el.classList.add('done');
            found[S.t]++; left--; upd();
            if (left === 0) { boards[S.t]++; upd(); if (boards[S.t] >= GOAL) ctx.end(S.t, `Membersihkan ${GOAL} papan memori lebih dulu!`); else E.after(700, () => next(S)); }
          } else {
            locked = true; ctx.stat(S.t, false); SFX.wrong(); a.el.classList.add('bad'); b.el.classList.add('bad');
            E.after(1000, () => { a.el.classList.remove('open', 'bad'); b.el.classList.remove('open', 'bad'); locked = false; });
          }
        });
        S.g.append(el);
      });
      // intip sebentar di awal
      S.g.querySelectorAll('.mm-card').forEach(el => el.classList.add('open'));
      locked = true;
      E.after(1500, () => { S.g.querySelectorAll('.mm-card:not(.done)').forEach(el => el.classList.remove('open')); locked = false; });
    }
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(150, () => { const a = boards[0] * 100 + found[0], b = boards[1] * 100 + found[1]; ctx.end(a > b ? 0 : b > a ? 1 : -1, 'Waktu habis! Dihitung dari papan & pasangan.'); });
      }
    };
  }
});
