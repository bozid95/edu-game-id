/* GAME: TARIK TAMBANG – jawaban benar menarik tali */
GAMES.push({
  id: 'tarik', time: 90, goal: { def: 10, choices: [6, 8, 10, 15], label: 'Tarikan untuk menang' }, name: 'Tarik Tambang', icon: '🪢', c: ['#ff8a3d', '#e8590c'],
  desc: 'Jawab benar untuk menarik tali ke arah timmu!',
  tags: ['Pilihan ganda', '90 detik'],
  rules: ['Jawab soal di sisi timmu secepat mungkin.', 'Benar = tali tertarik ke arahmu. Salah = tim terkunci sebentar.', 'Tarik bendera melewati garis finis, atau unggul saat waktu habis!'],
  start(ctx) {
    const { h } = E;
    const kids = n => Array.from({ length: n }, (_, i) => `<span>${['🧒', '👧', '🧑', '👦'][i % 4]}</span>`).join('');
    const scene = h('div', { class: 'scene tt-scene' });
    scene.innerHTML = `<div class="tt-cloud" style="top:6%">☁️</div><div class="tt-cloud" style="top:18%;animation-delay:-14s">☁️</div>
      <div class="tt-sun">☀️</div><div class="tt-goal l"></div><div class="tt-goal r"></div><div class="tt-mid"></div>
      <div class="tt-rope"><div class="tt-team t0">${kids(4)}</div><div class="tt-knot"></div><div class="tt-flag">🚩</div><div class="tt-team t1">${kids(4)}</div></div>`;
    ctx.stage.append(scene);
    const H = E.halves(ctx.stage, ctx);
    const rope = scene.querySelector('.tt-rope');
    const teamEl = [scene.querySelector('.tt-team.t0'), scene.querySelector('.tt-team.t1')];
    let pos = 0; const pulls = [0, 0]; const STEP = 100 / (ctx.opt.goal || 10);
    const upd = () => { rope.style.setProperty('--p', pos / 100); [0, 1].forEach(t => H.setScore(t, `💪 ${pulls[t]}`)); };
    upd();
    const panels = [0, 1].map(t => E.qpanel(H.sides[t].body, {
      ctx, team: t, kind: 'mc',
      onResult(ok) {
        if (!ok) return;
        pulls[t]++; pos = Math.max(-100, Math.min(100, pos + (t === 0 ? -STEP : STEP)));
        upd(); E.flash(teamEl[t], 'pull', 350);
        if (Math.abs(pos) >= 100) ctx.end(t, 'Bendera berhasil ditarik melewati garis finis!');
      }
    }));
    return {
      go() {
        panels.forEach(p => p.next());
        ctx.setTimer(90, () => ctx.end(pos < 0 ? 0 : pos > 0 ? 1 : -1, 'Waktu habis! Pemenang ditentukan dari posisi bendera.'));
      }
    };
  }
});
