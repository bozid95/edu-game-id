/* GAME: BALAP KARUNG – setiap jawaban benar = satu lompatan menuju piala di tengah */
GAMES.push({
  id: 'balap', time: 120, goal: { def: 10, choices: [5, 8, 10, 15, 20], label: 'Jumlah lompatan' }, name: 'Balap Karung', icon: '🏃', c: ['#f9c74f', '#f3722c'],
  desc: 'Melompat ke piala di tengah. Siapa duluan sampai?',
  tags: ['Pilihan ganda', 'Keypad angka (MTK)', '10 lompatan'],
  rules: ['Setiap jawaban benar = satu lompatan karung.', 'Pada Matematika, ketik jawaban dengan keypad angka.', 'Tim pertama yang mencapai piala (sesuai target lompatan) menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 10;
    const scene = h('div', { class: 'scene bk-scene' });
    scene.innerHTML = `<div class="bk-bunting">${'<span></span>'.repeat(22)}</div><div class="bk-track"></div>
      <div class="bk-finish"><div class="trophy">🏆</div><div class="pole"></div></div>`;
    const X = (t, s) => t === 0 ? 6 + (s / GOAL) * 38 : 94 - (s / GOAL) * 38;
    for (let t = 0; t < 2; t++) for (let s = 1; s <= GOAL; s++) scene.append(h('div', { class: `bk-dot t${t}`, 'data-s': s, style: `left:${X(t, s)}%` }));
    const runners = [0, 1].map(t => {
      const r = h('div', { class: `runner t${t}` }, h('span', { class: 'face' }, t ? '😆' : '😄'), h('span', { class: 'sack' }), h('span', { class: 'band' }));
      r.style.left = X(t, 0) + '%'; scene.append(r); return r;
    });
    ctx.stage.append(scene);
    const H = E.halves(ctx.stage, ctx);
    const steps = [0, 0];
    const upd = () => [0, 1].forEach(t => {
      H.setScore(t, `🦘 ${steps[t]} / ${GOAL}`);
      runners[t].style.left = X(t, steps[t]) + '%';
      scene.querySelectorAll(`.bk-dot.t${t}`).forEach(d => d.classList.toggle('on', +d.dataset.s <= steps[t]));
    });
    upd();
    const kind = ctx.mapel === 'Matematika' ? 'num' : 'mc';
    const panels = [0, 1].map(t => E.qpanel(H.sides[t].body, {
      ctx, team: t, kind,
      onResult(ok) {
        if (!ok) return;
        steps[t]++; SFX.step(); upd(); E.flash(runners[t], 'hop', 450);
        if (steps[t] >= GOAL) ctx.end(t, 'Sampai duluan di piala!');
      }
    }));
    return {
      go() {
        panels.forEach(p => p.next());
        ctx.setTimer(120, () => ctx.end(steps[0] > steps[1] ? 0 : steps[1] > steps[0] ? 1 : -1, 'Waktu habis!'));
      }
    };
  }
});
