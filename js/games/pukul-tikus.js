/* GAME: PUKUL TIKUS – pukul tikus yang membawa jawaban benar */
GAMES.push({
  id: 'tikus', time: 75, name: 'Pukul Tikus', icon: '🔨', c: ['#8d6e63', '#ff9f1c'],
  desc: 'Tikus muncul membawa jawaban. Pukul yang benar!',
  tags: ['Pilihan ganda', 'Refleks', '75 detik'],
  rules: ['Tikus muncul dari lubang membawa papan jawaban.', 'Pukul (sentuh) tikus dengan jawaban yang BENAR.', 'Salah pukul = palu terkunci sebentar.', 'Poin terbanyak saat waktu habis menang!'],
  start(ctx) {
    const { h } = E;
    const H = E.halves(ctx.stage, ctx);
    const score = [0, 0];
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🔨 ${score[t]}`));
    upd();
    const sides = [0, 1].map(t => {
      const qbox = h('div', { class: 'qbox wait' }, 'Bersiap...');
      const field = h('div', { class: 'wm-field' });
      const holes = Array.from({ length: 6 }, () => {
        const sign = h('div', { class: 'wm-sign' });
        const mole = h('button', { class: 'wm-mole' }, sign, h('span', { class: 'wm-face' }, '🐹'));
        const hole = h('div', { class: 'wm-hole' }, h('div', { class: 'wm-pit' }), mole);
        field.append(hole);
        const H0 = { hole, mole, sign, up: false, val: null, timer: null };
        E.tap(mole, () => whack(S, H0));
        return H0;
      });
      H.sides[t].body.style.gap = '1.2vh';
      H.sides[t].body.append(qbox, field);
      const S = { t, qbox, holes, cur: null, locked: true, spawns: 0 };
      return S;
    });
    function down(Ho) { Ho.up = false; Ho.mole.classList.remove('up', 'bad', 'hit'); clearTimeout(Ho.timer); }
    function next(S) {
      if (ctx.ended) return;
      S.holes.forEach(down);
      S.cur = ctx.q.mc(); S.locked = false; S.spawns = 0;
      S.qbox.className = 'qbox ' + E.lenClass(S.cur.q, 45, 90); S.qbox.textContent = S.cur.q;
      spawn(S); spawn(S);
    }
    function spawn(S) {
      if (ctx.ended || !S.cur || S.locked) return;
      const free = S.holes.filter(x => !x.up); if (!free.length) return;
      const Ho = free[Math.floor(Math.random() * free.length)];
      const shown = S.holes.filter(x => x.up).map(x => x.val);
      let val;
      if (!shown.includes(S.cur.a) && (S.spawns % 2 === 0 || Math.random() < .4)) val = S.cur.a;
      else { const w = S.cur.opts.filter(o => o !== S.cur.a && !shown.includes(o)); val = w.length ? w[Math.floor(Math.random() * w.length)] : S.cur.a; }
      if (shown.includes(val)) return;
      S.spawns++;
      Ho.val = val; Ho.sign.textContent = val; Ho.sign.className = 'wm-sign ' + E.lenClass(val, 10, 22);
      Ho.up = true; Ho.mole.classList.add('up');
      const stay = 2300 + Math.random() * 900;
      Ho.timer = setTimeout(() => { if (Ho.up && !Ho.mole.classList.contains('hit')) down(Ho); }, stay);
    }
    function whack(S, Ho) {
      if (!Ho.up || S.locked || ctx.ended) return;
      const ok = Ho.val === S.cur.a; ctx.stat(S.t, ok);
      if (ok) { S.locked = true; score[S.t]++; upd(); SFX.pop(); Ho.mole.classList.add('hit'); E.after(500, () => next(S)); }
      else {
        S.locked = true; SFX.wrong(); Ho.mole.classList.add('bad');
        const ov = h('div', { class: 'locked-ov' }, '⏳'); H.sides[S.t].body.append(ov);
        E.after(900, () => { ov.remove(); down(Ho); S.locked = false; });
      }
    }
    E.every(650, () => sides.forEach(S => { if (S.holes.filter(x => x.up).length < 3) spawn(S); }));
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(75, () => ctx.end(score[0] > score[1] ? 0 : score[1] > score[0] ? 1 : -1, `Skor akhir ${score[0]} : ${score[1]}`));
      }
    };
  }
});
