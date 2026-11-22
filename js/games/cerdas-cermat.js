/* GAME: CERDAS CERMAT REBUTAN – pilih kotak poin, soal sama untuk dua tim, cepat-cepatan menjawab */
GAMES.push({
  id: 'cermat', time: 360, goal: { def: 12, choices: [8, 12, 16], label: 'Jumlah kotak soal' }, name: 'Cerdas Cermat', icon: '🎤', c: ['#ffb703', '#fb8500'],
  desc: 'Pilih kotak poin, lalu rebutan menjawab soal yang sama!',
  tags: ['Rebutan', 'Soal sama', '12 kotak'],
  rules: ['Tim yang mendapat giliran memilih satu kotak poin di tengah.', 'Soal yang SAMA muncul untuk kedua tim. Siapa cepat dia dapat!', 'Jawaban salah = tim itu tidak bisa menjawab lagi pada soal tersebut.', 'Semua kotak habis → poin terbanyak menang.'],
  start(ctx) {
    const { h } = E;
    const H = E.halves(ctx.stage, ctx);
    H.wrap.classList.add('with-center');
    const center = h('div', { class: 'center-col cc-center' });
    H.wrap.insertBefore(center, H.sides[1].el);
    const pts = [0, 0];
    let turn = Math.random() < .5 ? 0 : 1, cur = null, out = [false, false], qTimer = null, answering = false;
    let cols;
    if (ctx.mapel === 'Campuran') cols = E.shuffle(QB.mapelFor(ctx.kelas).filter(m => m !== 'Campuran')).slice(0, 4);
    else cols = [ctx.mapel, ctx.mapel, ctx.mapel, ctx.mapel];
    const provs = cols.map(m => QS.provider(ctx.kelas, m));
    const VALUES = [100, 200, 300, 400].slice(0, Math.round((ctx.opt.goal || 12) / 4));
    const used = new Set();
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🏅 ${pts[t]}`));
    upd();
    const sideBox = [0, 1].map(t => { const b = h('div', { class: 'cc-side' }); H.sides[t].body.append(b); return b; });

    function showBoard() {
      answering = false; center.innerHTML = '';
      if (used.size >= VALUES.length * cols.length) { ctx.end(pts[0] > pts[1] ? 0 : pts[1] > pts[0] ? 1 : -1, `Semua kotak terjawab! Skor ${pts[0]} : ${pts[1]}`); return; }
      const head = h('div', { class: 'cc-turn t' + turn }, `Giliran ${ctx.teams[turn]} memilih kotak`);
      const grid = h('div', { class: 'cc-grid', style: `grid-template-rows:auto repeat(${VALUES.length},1fr)` });
      cols.forEach((m, c) => grid.append(h('div', { class: 'cc-head' }, ctx.mapel === 'Campuran' ? `${QB.info(m).icon} ${m}` : `Babak ${c + 1}`)));
      VALUES.forEach(v => cols.forEach((m, c) => {
        const id = `${c}-${v}`;
        const tile = h('button', { class: 'cc-tile' + (used.has(id) ? ' used' : '') }, used.has(id) ? '' : String(v));
        E.tap(tile, () => { if (used.has(id) || answering || ctx.ended) return; used.add(id); SFX.click(); openQ(c, v); });
        grid.append(tile);
      }));
      center.append(head, grid);
      sideBox.forEach((b, t) => { b.innerHTML = ''; b.append(h('div', { class: 'cc-wait' }, t === turn ? '👉 Pilih kotak di papan tengah!' : '⏳ Tunggu lawan memilih...')); });
    }
    function openQ(c, v) {
      answering = true; out = [false, false];
      const vari = Math.random();
      cur = (v === 100 && vari < .5) ? (provs[c].tf() || provs[c].mc()) : provs[c].mc();
      cur.v = v;
      center.innerHTML = '';
      const tl = h('div', { class: 'cc-timer' }, h('i'));
      center.append(h('div', { class: 'cc-val' }, `⭐ ${v} poin`), h('div', { class: 'qbox cc-q ' + E.lenClass(cur.q + (cur.c || ''), 60, 110) }, cur.q, cur.c != null ? h('span', { class: 'claim' }, `Jawaban: ${cur.c}`) : null), tl);
      const opts = cur.t === 'tf' ? [true, false] : cur.opts;
      sideBox.forEach((b, t) => {
        b.innerHTML = '';
        const grid = h('div', { class: 'opts' + (cur.t === 'tf' ? ' tf' : '') });
        (t ? E.shuffle(opts.slice()) : opts).forEach((o, i) => {
          const label = cur.t === 'tf' ? (o ? '✔ BENAR' : '✘ SALAH') : o;
          const btn = h('button', { class: 'opt ' + (cur.t === 'tf' ? (o ? 'tt' : 'ff') : E.lenClass(o, 18, 34)) }, cur.t === 'tf' ? label : [h('span', { class: 'let' }, 'ABCD'[i]), h('span', {}, label)]);
          btn._v = o;
          E.tap(btn, () => answer(t, o, btn, grid));
          grid.append(btn);
        });
        b.append(h('div', { class: 'cc-buzz' }, '⚡ REBUTAN! Jawab cepat!'), grid);
      });
      const T = 20; let left = T;
      const bar = tl.querySelector('i');
      qTimer = E.every(100, () => { left -= .1; bar.style.transform = `scaleX(${Math.max(0, left / T)})`; if (left <= 0) { clearInterval(qTimer); finish(-1); } });
    }
    function answer(t, o, btn, grid) {
      if (!answering || out[t] || ctx.ended) return;
      const ok = o === cur.a; ctx.stat(t, ok);
      if (ok) { SFX.correct(); btn.classList.add('ok'); pts[t] += cur.v; upd(); finish(t); }
      else {
        SFX.wrong(); btn.classList.add('bad'); out[t] = true;
        grid.append(h('div', { class: 'locked-ov' }, '🚫'));
        if (out[0] && out[1]) finish(-1);
      }
    }
    function finish(winner) {
      if (!answering) return;
      answering = false; clearInterval(qTimer);
      sideBox.forEach(b => b.querySelectorAll('.opt').forEach(x => { if (x._v === cur.a) x.classList.add('reveal'); }));
      const msg = winner >= 0 ? `${ctx.teams[winner]} +${cur.v}!` : 'Tidak ada yang benar';
      center.append(h('div', { class: 'cc-result' + (winner >= 0 ? ' t' + winner : '') }, msg));
      turn = 1 - turn;
      E.after(1800, showBoard);
    }
    return { go() { showBoard(); ctx.setTimer(360, () => ctx.end(pts[0] > pts[1] ? 0 : pts[1] > pts[0] ? 1 : -1, 'Waktu habis!')); } };
  }
});
