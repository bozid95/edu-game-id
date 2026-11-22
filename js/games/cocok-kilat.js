/* GAME: COCOK KILAT – pasangkan istilah dengan artinya secepat mungkin */
GAMES.push({
  id: 'cocok', time: 120, goal: { def: 3, choices: [1, 2, 3, 5], label: 'Papan yang harus dibersihkan' }, name: 'Cocok Kilat', icon: '⚡', c: ['#06d6a0', '#118ab2'],
  desc: 'Pasangkan kartu kiri dengan kartu kanan secepat kilat!',
  tags: ['Menjodohkan', '3 papan', '120 detik'],
  rules: ['Sentuh satu kartu kuning (kiri), lalu pasangannya di kanan.', 'Pasangan benar akan hilang. Salah = terkunci sebentar.', 'Bersihkan papan sesuai target lebih dulu untuk menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 3;
    const H = E.halves(ctx.stage, ctx);
    const sets = [0, 0], matched = [0, 0];
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🧩 ${sets[t]} / ${GOAL} <small style="opacity:.8">(${matched[t]} pasang)</small>`));
    upd();
    const sides = [0, 1].map(t => {
      const board = h('div', { class: 'ck-board' });
      H.sides[t].body.append(board);
      return { t, board };
    });
    function next(S) {
      if (ctx.ended) return;
      const set = ctx.q.pair();
      const pairs = (set && set.pairs.length >= 3) ? set.pairs : [['?', '?']];
      S.board.innerHTML = '';
      const colL = h('div', { class: 'ck-col' }), colR = h('div', { class: 'ck-col' });
      S.board.append(colL, colR);
      let sel = null, left = pairs.length, locked = false;
      const mk = (txt, idx, side) => {
        const c = h('button', { class: `ck-card ${side} ${E.lenClass(txt, 16, 30)}` }, txt);
        c._i = idx; c._s = side;
        E.tap(c, () => {
          if (locked || ctx.ended || c.classList.contains('done')) return;
          if (!sel || sel._s === side) { if (sel) sel.classList.remove('sel'); sel = c; c.classList.add('sel'); SFX.click(); return; }
          const a = sel; sel = null; a.classList.remove('sel');
          if (a._i === c._i) {
            a.classList.add('done'); c.classList.add('done'); ctx.stat(S.t, true); SFX.correct();
            matched[S.t]++; left--; upd();
            if (left === 0) {
              sets[S.t]++; upd();
              if (sets[S.t] >= GOAL) ctx.end(S.t, `Membersihkan ${GOAL} papan lebih dulu!`);
              else E.after(600, () => next(S));
            }
          } else {
            locked = true; ctx.stat(S.t, false); SFX.wrong();
            a.classList.add('bad'); c.classList.add('bad');
            E.after(800, () => { a.classList.remove('bad'); c.classList.remove('bad'); locked = false; });
          }
        });
        return c;
      };
      E.shuffle(pairs.map((p, i) => i)).forEach(i => colL.append(mk(pairs[i][0], i, 'l')));
      E.shuffle(pairs.map((p, i) => i)).forEach(i => colR.append(mk(pairs[i][1], i, 'r')));
    }
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(120, () => {
          const s0 = sets[0] * 100 + matched[0], s1 = sets[1] * 100 + matched[1];
          ctx.end(s0 > s1 ? 0 : s1 > s0 ? 1 : -1, 'Waktu habis! Dihitung dari papan & pasangan.');
        });
      }
    };
  }
});
