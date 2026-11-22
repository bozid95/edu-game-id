/* GAME: ULAR TANGGA KUIS – jawab benar untuk mengocok dadu */
GAMES.push({
  id: 'ular', time: 180, name: 'Ular Tangga Kuis', icon: '🐍', c: ['#2a9d8f', '#e9c46a'],
  desc: 'Jawab benar untuk lempar dadu. Naik tangga, awas ular!',
  tags: ['Pilihan ganda', 'Papan 30 kotak'],
  rules: ['Setiap jawaban benar = lempar dadu otomatis.', 'Bidak maju sesuai angka dadu.', 'Tangga membawamu naik, ular membuatmu turun!', 'Tim pertama yang mencapai kotak 30 menang.'],
  start(ctx) {
    const { h } = E; const COLS = 6, ROWS = 5, END = 30;
    const LADDER = { 3: 12, 8: 17, 14: 23, 19: 28 };
    const SNAKE = { 16: 5, 22: 11, 26: 15, 29: 20 };
    const H = E.halves(ctx.stage, ctx);
    H.wrap.classList.add('with-center');
    const center = h('div', { class: 'center-col' });
    const board = h('div', { class: 'ul-board' });
    const xy = n => { const r = Math.floor((n - 1) / COLS); let c = (n - 1) % COLS; if (r % 2) c = COLS - 1 - c; return { x: (c + .5) * 100, y: (ROWS - 1 - r + .5) * 100, r, c }; };
    for (let r = ROWS - 1; r >= 0; r--) for (let c = 0; c < COLS; c++) {
      const n = r * COLS + (r % 2 ? COLS - c : c + 1);
      const cell = h('div', { class: 'ul-cell' + ((r + c) % 2 ? ' alt' : '') + (n === END ? ' end' : '') }, n === END ? '🏆' : String(n));
      board.append(cell);
    }
    // gambar tangga & ular
    let svg = `<svg class="ul-svg" viewBox="0 0 600 500" preserveAspectRatio="none">`;
    Object.entries(LADDER).forEach(([a, b]) => {
      const p = xy(+a), q = xy(+b); const dx = q.x - p.x, dy = q.y - p.y, L = Math.hypot(dx, dy), nx = -dy / L * 14, ny = dx / L * 14;
      svg += `<line x1="${p.x + nx}" y1="${p.y + ny}" x2="${q.x + nx}" y2="${q.y + ny}" stroke="#8d5524" stroke-width="7" stroke-linecap="round"/>`;
      svg += `<line x1="${p.x - nx}" y1="${p.y - ny}" x2="${q.x - nx}" y2="${q.y - ny}" stroke="#8d5524" stroke-width="7" stroke-linecap="round"/>`;
      for (let k = 1; k < 6; k++) { const t = k / 6, X = p.x + dx * t, Y = p.y + dy * t; svg += `<line x1="${X + nx}" y1="${Y + ny}" x2="${X - nx}" y2="${Y - ny}" stroke="#c68642" stroke-width="5"/>`; }
    });
    Object.entries(SNAKE).forEach(([a, b]) => {
      const p = xy(+a), q = xy(+b); const dx = q.x - p.x, dy = q.y - p.y, L = Math.hypot(dx, dy), nx = -dy / L * 30, ny = dx / L * 30;
      const d = `M${p.x},${p.y} C${p.x + dx * .33 + nx},${p.y + dy * .33 + ny} ${p.x + dx * .66 - nx},${p.y + dy * .66 - ny} ${q.x},${q.y}`;
      svg += `<path d="${d}" stroke="#14532d" stroke-width="20" fill="none" stroke-linecap="round"/><path d="${d}" stroke="#4ade80" stroke-width="13" fill="none" stroke-linecap="round" stroke-dasharray="10 9"/>`;
      svg += `<circle cx="${p.x}" cy="${p.y}" r="15" fill="#16a34a" stroke="#14532d" stroke-width="4"/><circle cx="${p.x - 5}" cy="${p.y - 4}" r="3" fill="#fff"/><circle cx="${p.x + 5}" cy="${p.y - 4}" r="3" fill="#fff"/>`;
    });
    board.insertAdjacentHTML('beforeend', svg + '</svg>');
    const tokens = [0, 1].map(t => { const el = h('div', { class: `ul-token t${t}` }, t ? '🔵' : '🔴'); board.append(el); return el; });
    const dice = [0, 1].map(t => h('div', { class: `ul-dice t${t}` }, '🎲'));
    center.append(board, ...dice);
    H.wrap.insertBefore(center, H.sides[1].el);

    const pos = [0, 0]; const queue = [0, 0]; const busy = [false, false];
    const place = t => {
      if (pos[t] === 0) { tokens[t].style.left = t ? '60%' : '40%'; tokens[t].style.top = '108%'; return; }
      const p = xy(pos[t]); tokens[t].style.left = (p.x / 6 + (t ? 3 : -3)) + '%'; tokens[t].style.top = (p.y / 5 + (t ? 3 : -3)) + '%';
    };
    const upd = () => [0, 1].forEach(t => { H.setScore(t, `📍 ${pos[t]} / ${END}`); place(t); });
    upd();
    const FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    function roll(t) {
      if (busy[t] || !queue[t] || ctx.ended) return;
      busy[t] = true; queue[t]--;
      const n = 1 + Math.floor(Math.random() * 6); let k = 0;
      dice[t].classList.add('rolling');
      const spin = E.every(80, () => { dice[t].textContent = FACES[Math.floor(Math.random() * 6)]; });
      E.after(700, () => {
        clearInterval(spin); dice[t].classList.remove('rolling'); dice[t].textContent = FACES[n - 1];
        const stepF = () => {
          if (ctx.ended) return;
          if (k < n && pos[t] < END) { pos[t]++; k++; SFX.step(); upd(); E.after(230, stepF); return; }
          const jump = LADDER[pos[t]] || SNAKE[pos[t]];
          const fin = () => {
            if (pos[t] >= END) { ctx.end(t, 'Sampai di kotak 30 lebih dulu!'); return; }
            busy[t] = false; roll(t);
          };
          if (jump) { E.after(250, () => { const up = jump > pos[t]; pos[t] = jump; up ? SFX.climb() : SFX.wrong(); tokens[t].classList.add(up ? 'up' : 'down'); upd(); E.after(600, () => { tokens[t].classList.remove('up', 'down'); fin(); }); }); }
          else fin();
        };
        stepF();
      });
    }
    const panels = [0, 1].map(t => E.qpanel(H.sides[t].body, { ctx, team: t, kind: 'mc', onResult(ok) { if (ok) { queue[t]++; roll(t); } } }));
    return {
      go() {
        panels.forEach(p => p.next());
        ctx.setTimer(180, () => ctx.end(pos[0] > pos[1] ? 0 : pos[1] > pos[0] ? 1 : -1, 'Waktu habis! Dihitung dari posisi bidak.'));
      }
    };
  }
});
