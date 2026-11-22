/* GAME: BOM WAKTU – benar/salah; jawab benar untuk melempar bom ke lawan */
GAMES.push({
  id: 'bom', time: 180, goal: { def: 3, choices: [1, 2, 3, 5], label: 'Jumlah nyawa' }, name: 'Bom Waktu', icon: '💣', c: ['#3a0ca3', '#f72585'],
  desc: 'Benar atau salah? Lempar bom ke lawan sebelum meledak!',
  tags: ['Benar / Salah', '3 nyawa'],
  rules: ['Bom berada di salah satu sisi. Sumbunya terus terbakar!', 'Pemegang bom: jawab BENAR untuk melempar bom ke lawan.', 'Tim tanpa bom: jawab benar untuk mempercepat sumbu, tapi kalau salah bom pindah ke kamu!', 'Bom meledak = kehilangan 1 nyawa. Nyawa habis = kalah.'],
  start(ctx) {
    const { h } = E;
    const scene = h('div', { class: 'scene bm-scene' });
    const bomb = h('div', { class: 'bomb' }, h('div', { class: 'bm-ic' }, '💣'), h('div', { class: 'fuse' }, h('i')), h('div', { class: 'bm-label' }, ''));
    scene.append(bomb, h('div', { class: 'bm-side l' }, '⬅'), h('div', { class: 'bm-side r' }, '➡'));
    ctx.stage.append(scene);
    const H = E.halves(ctx.stage, ctx);
    const LIVES = ctx.opt.goal || 3; const hearts = [LIVES, LIVES];
    let holder = Math.random() < .5 ? 0 : 1, fuseMax = 14, fuse = 14, paused = true, tickAcc = 0;
    const fuseEl = bomb.querySelector('.fuse i'), label = bomb.querySelector('.bm-label');
    const upd = () => {
      [0, 1].forEach(t => { H.setScore(t, '❤️'.repeat(hearts[t]) + '🤍'.repeat(LIVES - hearts[t])); H.sides[t].el.classList.toggle('danger', t === holder); });
      bomb.style.left = holder === 0 ? '25%' : '75%';
      label.textContent = `Bom di ${ctx.teams[holder]}!`;
    };
    upd();
    function pass(to) { if (holder === to) return; holder = to; SFX.whoosh(); upd(); }
    function explode() {
      paused = true; SFX.boom();
      const b = h('div', { class: 'boom', style: `left:${holder === 0 ? 25 : 75}%` }, '💥'); scene.append(b);
      E.flash(ctx.stage, 'shake', 500);
      hearts[holder]--; upd();
      if (hearts[holder] <= 0) { ctx.end(1 - holder, `Bom meledak ${LIVES} kali di sisi ${ctx.teams[holder]}!`); return; }
      E.after(1300, () => { b.remove(); holder = 1 - holder; fuseMax = fuse = 10 + Math.random() * 7; paused = false; upd(); });
    }
    const panels = [0, 1].map(t => E.qpanel(H.sides[t].body, {
      ctx, team: t, kind: 'tf', penalty: 1100,
      onResult(ok) {
        if (paused) return;
        if (t === holder) { if (ok) pass(1 - t); }
        else if (ok) fuse = Math.max(1, fuse - 1.5);
        else pass(t);
      }
    }));
    E.loop(dt => {
      if (paused || ctx.ended) return;
      fuse -= dt;
      fuseEl.style.setProperty('--f', Math.max(0, fuse / fuseMax));
      bomb.classList.toggle('hot', fuse < 4);
      tickAcc += dt;
      if (tickAcc > (fuse < 4 ? .25 : .7)) { tickAcc = 0; SFX.tick(); }
      if (fuse <= 0) explode();
    });
    return {
      go() {
        fuseMax = fuse = 12 + Math.random() * 6; paused = false;
        panels.forEach(p => p.next());
        ctx.setTimer(180, () => ctx.end(hearts[0] > hearts[1] ? 0 : hearts[1] > hearts[0] ? 1 : -1, 'Waktu habis! Dihitung dari sisa nyawa.'));
      }
    };
  }
});
