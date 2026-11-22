/* GAME: TEBAK KATA BALON – tebak huruf jawaban, jangan sampai balon habis */
GAMES.push({
  id: 'kata', time: 150, goal: { def: 5, choices: [3, 5, 8, 10], label: 'Kata untuk menang' }, name: 'Tebak Kata Balon', icon: '🎈', c: ['#ff5d8f', '#ffb3c6'],
  desc: 'Susun jawaban huruf demi huruf. Salah huruf = balon pecah!',
  tags: ['Mengeja jawaban', 'Kosakata', '5 kata'],
  rules: ['Baca petunjuk, lalu sentuh huruf-huruf jawabannya.', 'Huruf salah = satu balon pecah (ada 4 balon).', 'Semua balon pecah = kata gagal, lanjut ke kata berikutnya.', 'Tim pertama yang mencapai target kata menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 5, LIVES = 4;
    const H = E.halves(ctx.stage, ctx);
    const score = [0, 0];
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🔤 ${score[t]} / ${GOAL}`));
    upd();
    const ALPHA = 'ABCDEFGHIJKLMNOPRSTUWY', DIG = '0123456789';
    const sides = [0, 1].map(t => ({ t, body: H.sides[t].body, panel: null }));
    function win(S) { score[S.t]++; upd(); if (score[S.t] >= GOAL) ctx.end(S.t, `Menebak ${GOAL} kata lebih dulu!`); }
    function next(S) {
      if (ctx.ended) return;
      const w = ctx.q.word();
      S.body.innerHTML = '';
      if (!w) { S.panel = E.qpanel(S.body, { ctx, team: S.t, kind: 'mc', onResult: ok => ok && win(S) }); S.panel.next(); return; }
      const ans = w.a; const isNum = /^\d+$/.test(ans);
      let lives = LIVES, locked = false;
      const qbox = h('div', { class: 'qbox ' + E.lenClass(w.q, 45, 90) }, w.q);
      const balloons = h('div', { class: 'tk-balloons' }, ...Array.from({ length: LIVES }, () => h('span', {}, '🎈')));
      const slots = h('div', { class: 'tk-slots' });
      const slotEls = ans.split('').map(ch => { const s = h('div', { class: 'tk-slot' }); s._c = ch; slots.append(s); return s; });
      const uniq = [...new Set(ans.split(''))];
      const pool = (isNum ? DIG : ALPHA).split('').filter(c => !uniq.includes(c));
      const total = Math.max(isNum ? 10 : 14, uniq.length + 4);
      const letters = E.shuffle([...uniq, ...E.shuffle(pool).slice(0, Math.max(0, total - uniq.length))]);
      if (isNum) letters.sort();
      const kb = h('div', { class: 'tk-keys' });
      kb.style.gridTemplateColumns = `repeat(${Math.ceil(letters.length / 2)}, 1fr)`;
      letters.forEach(ch => {
        const b = h('button', { class: 'key tk-key' }, ch);
        E.tap(b, () => {
          if (locked || ctx.ended || b.disabled) return;
          b.disabled = true;
          if (uniq.includes(ch)) {
            b.classList.add('good'); SFX.click();
            slotEls.forEach(s => { if (s._c === ch) { s.textContent = ch; s.classList.add('on'); } });
            if (slotEls.every(s => s.classList.contains('on'))) { locked = true; ctx.stat(S.t, true); SFX.correct(); slots.classList.add('solved'); win(S); E.after(900, () => next(S)); }
          } else {
            b.classList.add('badk'); SFX.pop(); lives--;
            const bl = balloons.children[lives]; if (bl) bl.classList.add('popped');
            if (lives <= 0) {
              locked = true; ctx.stat(S.t, false); SFX.wrong();
              slotEls.forEach(s => { if (!s.classList.contains('on')) { s.textContent = s._c; s.classList.add('miss'); } });
              E.after(1600, () => next(S));
            }
          }
        });
        kb.append(b);
      });
      S.body.append(qbox, h('div', { class: 'tk-mid' }, slots, balloons), kb);
    }
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(150, () => ctx.end(score[0] > score[1] ? 0 : score[1] > score[0] ? 1 : -1, `Skor akhir ${score[0]} : ${score[1]}`));
      }
    };
  }
});
