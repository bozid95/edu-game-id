/* GAME: TANGKAP GELEMBUNG – sentuh gelembung berisi jawaban benar, raih combo */
GAMES.push({
  id: 'gelembung', time: 75, name: 'Tangkap Gelembung', icon: '🫧', c: ['#4cc9f0', '#4361ee'],
  desc: 'Pecahkan gelembung jawaban yang benar. Combo = poin ganda!',
  tags: ['Pilihan ganda', 'Combo', '75 detik'],
  rules: ['Jawaban melayang di dalam gelembung.', 'Sentuh gelembung yang benar untuk memecahkannya.', '3 benar berturut-turut = COMBO, tiap jawaban bernilai 2 poin!', 'Skor tertinggi saat waktu habis menang.'],
  start(ctx) {
    const { h } = E;
    const H = E.halves(ctx.stage, ctx);
    const score = [0, 0];
    const sides = [0, 1].map(t => {
      const body = H.sides[t].body;
      const qbox = h('div', { class: 'qbox wait' }, 'Bersiap...');
      const arena = h('div', { class: 'tj-arena' });
      body.style.gap = '1.2vh';
      body.append(qbox, arena);
      const S = { t, qbox, arena, bubbles: [], cur: null, locked: true, combo: 0 };
      return S;
    });
    const upd = () => [0, 1].forEach(t => H.setScore(t, `⭐ ${score[t]}${sides[t].combo >= 3 ? ' 🔥' : ''}`));
    upd();

    function next(S) {
      if (ctx.ended) return;
      S.arena.innerHTML = ''; S.cur = ctx.q.mc(); S.locked = false;
      S.qbox.className = 'qbox ' + E.lenClass(S.cur.q, 45, 90); S.qbox.textContent = S.cur.q;
      const quads = E.shuffle([0, 1, 2, 3]);
      S.bubbles = S.cur.opts.map((o, i) => {
        const el = h('button', { class: 'bubble ' + E.lenClass(o, 12, 24) }, o);
        S.arena.append(el);
        const b = { el, o, q: quads[i], ph: Math.random() * 6.28, fx: .6 + Math.random() * .7, fy: .5 + Math.random() * .7 };
        E.tap(el, () => hit(S, b));
        return b;
      });
    }
    function hit(S, b) {
      if (S.locked || ctx.ended) return;
      const ok = b.o === S.cur.a; ctx.stat(S.t, ok);
      if (ok) {
        S.locked = true; S.combo++;
        const pts = S.combo >= 3 ? 2 : 1; score[S.t] += pts; upd();
        SFX.pop(); b.el.classList.add('pop');
        const c = h('div', { class: 'combo' }, S.combo >= 3 ? `+${pts} COMBO x${S.combo}!` : `+${pts}`);
        S.arena.append(c);
        E.after(420, () => next(S));
      } else {
        S.combo = 0; upd(); SFX.wrong(); b.el.classList.add('bad');
        S.bubbles.forEach(x => { if (x.o === S.cur.a) x.el.classList.add('reveal'); });
        S.locked = true;
        E.after(1000, () => next(S));
      }
    }
    E.loop((dt, t) => {
      sides.forEach(S => {
        const W = S.arena.clientWidth, Hh = S.arena.clientHeight; if (!W) return;
        const qw = W / 2, qh = Hh / 2, size = Math.min(qw, qh) * 0.9;
        S.bubbles.forEach(b => {
          const fx = (qw - size), fy = (qh - size);
          const x = (b.q % 2) * qw + fx / 2 + Math.sin(t * b.fx + b.ph) * fx / 2;
          const y = Math.floor(b.q / 2) * qh + fy / 2 + Math.cos(t * b.fy + b.ph) * fy / 2 + Math.sin(t * 2 + b.ph) * size * 0.03;
          const tf = `translate(${x}px,${y}px)`;
          b.el.style.setProperty('--w', size + 'px');
          b.el.style.setProperty('--tf', tf);
          if (!b.el.classList.contains('pop')) b.el.style.transform = tf;
        });
      });
    });
    return {
      go() {
        sides.forEach(next);
        ctx.setTimer(75, () => ctx.end(score[0] > score[1] ? 0 : score[1] > score[0] ? 1 : -1, `Skor akhir ${score[0]} : ${score[1]}`));
      }
    };
  }
});
