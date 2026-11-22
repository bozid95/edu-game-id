/* GAME: MENARA JUARA – jawaban benar menambah balok, salah menjatuhkan balok teratas */
GAMES.push({
  id: 'menara', time: 100, goal: { def: 10, choices: [5, 8, 10, 15], label: 'Tinggi menara (balok)' }, name: 'Menara Juara', icon: '🏗️', c: ['#38b000', '#007f5f'],
  desc: 'Susun balok setinggi-tingginya. Salah jawab, balok jatuh!',
  tags: ['Campuran PG & B/S', '10 balok', '100 detik'],
  rules: ['Jawaban benar = tambah satu balok ke menaramu.', 'Jawaban salah = balok teratas jatuh!', 'Soal bergantian pilihan ganda dan benar/salah.', 'Tim pertama yang mencapai target tinggi menara menang!'],
  start(ctx) {
    const { h } = E; const GOAL = ctx.opt.goal || 10;
    const COLORS = ['#ef476f', '#ffd166', '#06d6a0', '#118ab2', '#9b5de5', '#f15bb5', '#fee440', '#00bbf9', '#00f5d4', '#ff924c'];
    const H = E.halves(ctx.stage, ctx);
    const hgt = [0, 0];
    const towers = [0, 1].map(t => {
      const wrap = h('div', { class: 'pp-wrap' });
      const col = h('div', { class: 'tw-col' }, h('div', { class: 'tw-flag' }, '🚩'), h('div', { class: 'tw-goal' }), h('div', { class: 'tw-base' }));
      const stack = h('div', { class: 'tw-stack' }); col.append(stack);
      const qcol = h('div', { class: 'pp-q' });
      wrap.append(t === 0 ? col : qcol, t === 0 ? qcol : col);
      H.sides[t].body.append(wrap);
      return { col, stack, qcol };
    });
    const upd = () => [0, 1].forEach(t => H.setScore(t, `🧱 ${hgt[t]} / ${GOAL}`));
    upd();
    const panels = [0, 1].map(t => E.qpanel(towers[t].qcol, {
      ctx, team: t, kind: () => Math.random() < .5 ? 'tf' : 'mc',
      onResult(ok) {
        const T = towers[t];
        if (ok) {
          const b = h('div', { class: 'tw-block', style: `flex-basis:${(100 / GOAL).toFixed(2)}%;background:${COLORS[hgt[t] % COLORS.length]};--dx:${(Math.random() * 16 - 8).toFixed(1)}%` });
          T.stack.append(b); hgt[t]++; SFX.step(); upd();
          if (hgt[t] >= GOAL) ctx.end(t, 'Menara mencapai puncak lebih dulu!');
        } else if (hgt[t] > 0) {
          const top = T.stack.lastElementChild; top.classList.add('fall'); hgt[t]--; upd();
          setTimeout(() => top.remove(), 700);
        }
      }
    }));
    return {
      go() {
        panels.forEach(p => p.next());
        ctx.setTimer(100, () => ctx.end(hgt[0] > hgt[1] ? 0 : hgt[1] > hgt[0] ? 1 : -1, 'Waktu habis! Menara tertinggi menang.'));
      }
    };
  }
});
