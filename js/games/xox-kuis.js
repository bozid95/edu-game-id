/* GAME: XOX KUIS – jawab benar untuk menaruh tanda di papan 3×3 */
GAMES.push({
  id: 'xox', time: 240, goal: { def: 3, choices: [1, 2, 3, 5], label: 'Ronde untuk juara' }, name: 'XOX Kuis', icon: '❌', c: ['#ef476f', '#118ab2'],
  desc: 'Jawab benar, lalu pasang ❌ atau ⭕. Buat 3 sejajar!',
  tags: ['Pilihan ganda', 'Strategi', 'Best of 5'],
  rules: ['Jawaban benar = 1 kesempatan memasang tanda di papan.', 'Pilih kotak dari papan kecil di sisi timmu.', 'Tiga tanda sejajar (mendatar, menurun, diagonal) = menang ronde.', 'Tim pertama yang mencapai target ronde jadi juara!'],
  start(ctx) {
    const { h } = E; const WIN = ctx.opt.goal || 3;
    const MARK = ['❌', '⭕'];
    const LINES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    const H = E.halves(ctx.stage, ctx);
    H.wrap.classList.add('with-center');
    const center = h('div', { class: 'center-col xo-center' });
    const big = h('div', { class: 'xo-board' });
    const bigCells = Array.from({ length: 9 }, () => { const c = h('div', { class: 'xo-cell' }); big.append(c); return c; });
    const roundLbl = h('div', { class: 'xo-round' }, 'Ronde 1');
    center.append(roundLbl, big);
    H.wrap.insertBefore(center, H.sides[1].el);
    let cells = Array(9).fill(-1), round = 1, frozen = false;
    const wins = [0, 0], tokens = [0, 0];

    const picks = [0, 1].map(t => {
      const ov = h('div', { class: 'xo-pick' });
      const title = h('div', { class: 'xo-pick-title' });
      const grid = h('div', { class: 'xo-board mini' });
      const minis = Array.from({ length: 9 }, (_, i) => { const c = h('button', { class: 'xo-cell' }); E.tap(c, () => placeAt(t, i)); grid.append(c); return c; });
      ov.append(title, grid); H.sides[t].body.append(ov);
      return { ov, title, minis };
    });
    function render() {
      cells.forEach((v, i) => {
        bigCells[i].textContent = v < 0 ? '' : MARK[v]; bigCells[i].className = 'xo-cell' + (v >= 0 ? ' f t' + v : '');
        picks.forEach(p => { p.minis[i].textContent = v < 0 ? '' : MARK[v]; p.minis[i].className = 'xo-cell' + (v >= 0 ? ' f t' + v : ''); });
      });
      [0, 1].forEach(t => {
        H.setScore(t, `🏅 ${wins[t]} / ${WIN}`);
        picks[t].ov.classList.toggle('show', tokens[t] > 0 && !frozen);
        picks[t].title.textContent = `Pilih kotak untuk ${MARK[t]}${tokens[t] > 1 ? ` (×${tokens[t]})` : ''}`;
      });
      roundLbl.textContent = `Ronde ${round}`;
    }
    function placeAt(t, i) {
      if (frozen || ctx.ended || tokens[t] <= 0 || cells[i] >= 0) return;
      cells[i] = t; tokens[t]--; SFX.pop(); render();
      const line = LINES.find(L => L.every(k => cells[k] === t));
      if (line) {
        frozen = true; wins[t]++; SFX.climb(); line.forEach(k => bigCells[k].classList.add('win')); render();
        if (wins[t] >= WIN) { E.after(900, () => ctx.end(t, `Menang ${WIN} ronde XOX!`)); return; }
        E.after(1600, reset);
      } else if (cells.every(v => v >= 0)) { frozen = true; render(); E.after(1200, reset); }
    }
    function reset() { cells = Array(9).fill(-1); tokens[0] = tokens[1] = 0; frozen = false; round++; render(); }
    render();
    const panels = [0, 1].map(t => E.qpanel(H.sides[t].body, { ctx, team: t, kind: 'mc', onResult(ok) { if (ok && !frozen) { tokens[t]++; render(); } } }));
    return {
      go() {
        panels.forEach(p => p.next());
        ctx.setTimer(240, () => ctx.end(wins[0] > wins[1] ? 0 : wins[1] > wins[0] ? 1 : -1, 'Waktu habis! Dihitung dari ronde yang dimenangkan.'));
      }
    };
  }
});
