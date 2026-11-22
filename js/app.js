/* ============================================================
   APP – menu: Beranda → Jenjang → Kelas → Mapel → Game → Main
   ============================================================ */
const App = (() => {
  const { h, tap } = E;
  const root = document.getElementById('app');
  const JENJANG = {
    SD: { name: 'SD', full: 'Sekolah Dasar', kelas: [1, 2, 3, 4, 5, 6], icon: '🎒', sub: 'Kelas 1–6 · Fase A, B, C', c: ['#ff9f1c', '#ff5e5b'] },
    SMP: { name: 'SMP', full: 'Sekolah Menengah Pertama', kelas: [7, 8, 9], icon: '🏫', sub: 'Kelas 7–9 · Fase D', c: ['#3ec1d3', '#2b5cf0'] },
    SMK: { name: 'SMK', full: 'Sekolah Menengah Kejuruan', kelas: [10, 11, 12], icon: '🛠️', sub: 'Kelas 10–12 · Fase E, F', c: ['#a855f7', '#db2777'] }
  };
  const S = { jenjang: null, kelas: null, mapel: null, teams: ['Tim Merah', 'Tim Biru'] };
  try { const t = JSON.parse(localStorage.getItem('aj_teams')); if (Array.isArray(t) && t.length === 2) S.teams = t; } catch (e) {}
  const saveTeams = () => { try { localStorage.setItem('aj_teams', JSON.stringify(S.teams)); } catch (e) {} };

  function show(el) { E.clearAll(); document.body.classList.remove('game-active'); root.innerHTML = ''; root.append(el); }
  function btn(label, cls, fn) { const b = h('button', { class: 'btn3d ' + (cls || '') }, label); tap(b, () => { SFX.click(); fn(); }); return b; }
  function card(o, fn) {
    const c = h('button', { class: 'card ' + (o.cls || ''), style: `--c1:${o.c[0]};--c2:${o.c[1]}` },
      h('div', { class: 'ic' }, o.icon), h('h3', {}, o.title), o.p ? h('p', {}, o.p) : null,
      o.tags ? h('div', { class: 'tags' }, o.tags.map(t => h('span', {}, t))) : null);
    tap(c, () => { SFX.click(); fn(); });
    return c;
  }
  function menu(title, crumbs, back, body) {
    const head = h('div', { class: 'menu-head' }, back ? btn('◀ Kembali', 'white small', back) : null, h('h2', {}, title),
      h('div', { class: 'crumbs' }, crumbs.map(c => h('span', {}, c))));
    return h('div', { class: 'screen' }, head, h('div', { class: 'menu-body' }, body));
  }

  /* ---------- beranda ---------- */
  function home() {
    const el = h('div', { class: 'screen home' });
    el.append(h('div', { class: 'bunting' }, Array.from({ length: 26 }, () => h('span'))));
    const fl = h('div', { class: 'floaters' });
    [['📚', 8, 25], ['✏️', 85, 20], ['🔬', 12, 70], ['🌏', 88, 65], ['🧮', 50, 85], ['🏆', 75, 40], ['🎨', 25, 45]].forEach(([e, x, y], i) =>
      fl.append(h('span', { style: `left:${x}%;top:${y}%;animation-delay:${-i * .7}s` }, e)));
    el.append(fl);
    el.append(h('div', { class: 'home-center' },
      h('div', { class: 'logo' }, h('span', { class: 'l1' }, 'ARENA'), h('span', { class: 'l2' }, 'JUARA')),
      h('p', { class: 'tag' }, `${GAMES.length} game edukasi versus untuk layar sentuh kelas · SD · SMP · SMK`),
      btn('▶ MAIN SEKARANG', 'big', jenjang),
      btn(`📝 Bank Soal Guru${Guru.count() ? ` (${Guru.count()})` : ''}`, 'white', () => Guru.list(guruApi)),
      h('div', { class: 'vs-badges' }, h('span', { class: 'pill red' }, S.teams[0]), h('b', {}, 'VS'), h('span', { class: 'pill blue' }, S.teams[1]))
    ));
    el.append(h('div', { class: 'home-foot' }, 'Soal mengacu Capaian Pembelajaran Kurikulum Merdeka (Kep. Kepala BSKAP No. 046/H/KR/2025) dengan pendekatan Pembelajaran Mendalam · Berjalan offline'));
    show(el);
  }

  /* ---------- jenjang ---------- */
  function jenjang() {
    const g = h('div', { class: 'grid g3' });
    Object.entries(JENJANG).forEach(([k, j]) => g.append(card({ cls: 'big', icon: j.icon, title: j.name, p: `${j.full}\n${j.sub}`, c: j.c }, () => { S.jenjang = k; kelas(); })));
    show(menu('Pilih Jenjang', [], home, g));
  }

  /* ---------- kelas ---------- */
  function kelas() {
    const j = JENJANG[S.jenjang];
    const g = h('div', { class: 'kelas-grid' });
    j.kelas.forEach(k => {
      const b = h('button', { class: 'kelas-btn' }, h('span', {}, 'Kelas'), h('b', {}, k), h('small', {}, 'Fase ' + QB.fase(k)));
      tap(b, () => { SFX.click(); S.kelas = k; mapel(); });
      g.append(b);
    });
    show(menu('Pilih Kelas', [j.name], jenjang, g));
  }

  /* ---------- mapel ---------- */
  function mapel() {
    const g = h('div', { class: 'grid' });
    QB.mapelFor(S.kelas).forEach(m => {
      const inf = QB.info(m);
      g.append(card({ icon: inf.icon, title: m, p: QB.elemen(S.kelas, m), c: inf.c, tags: [`${QB.count(S.kelas, m)} soal`] }, () => { S.mapel = m; games(); }));
    });
    show(menu('Pilih Mata Pelajaran', [JENJANG[S.jenjang].name, `Kelas ${S.kelas}`, `Fase ${QB.fase(S.kelas)}`], kelas, g));
  }

  /* ---------- pilih game ---------- */
  function games() {
    const inputs = [0, 1].map(t => {
      const i = h('input', { class: 't' + t, value: S.teams[t], maxlength: '16' });
      i.addEventListener('input', () => { S.teams[t] = i.value.trim() || (t ? 'Tim Biru' : 'Tim Merah'); saveTeams(); });
      return i;
    });
    const setup = h('div', { class: 'team-setup' }, inputs[0], h('b', {}, 'VS'), inputs[1]);
    const g = h('div', { class: 'grid', style: 'grid-template-columns:repeat(auto-fit,minmax(20em,1fr))' });
    GAMES.forEach(gm => g.append(card({ icon: gm.icon, title: gm.name, p: gm.desc, c: gm.c, tags: gm.tags }, () => match(gm))));
    const body = h('div', { style: 'display:flex;flex-direction:column;min-height:0' }, setup, g);
    show(menu('Pilih Permainan', [JENJANG[S.jenjang].name, `Kelas ${S.kelas}`, S.mapel], mapel, body));
  }

  /* ---------- pertandingan ---------- */
  function match(game) {
    E.clearAll();
    document.body.classList.add('game-active');
    const timerEl = h('div', { class: 'timer' }, '--:--');
    const quit = btn('✖ Keluar', 'white small', () => confirmQuit());
    const info = h('div', { class: 'ginfo' }, h('span', { class: 'gicon' }, game.icon),
      h('div', {}, h('b', {}, game.name), h('small', {}, `Kelas ${S.kelas} · Fase ${QB.fase(S.kelas)} · ${S.mapel}`)));
    const top = h('div', { class: 'topbar' }, quit, info, timerEl);
    const stage = h('div', { class: 'stage' });
    const scr = h('div', { class: 'screen game-screen' }, top, stage);
    root.innerHTML = ''; root.append(scr);

    // pengaturan waktu & target (tersimpan per game, ada nilai default)
    const OKEY = 'aj_opt_' + game.id;
    const defOpt = () => ({ time: game.time || 90, goal: game.goal ? game.goal.def : null });
    let opt = defOpt();
    try { const o = JSON.parse(localStorage.getItem(OKEY)); if (o) opt = { ...opt, ...o }; } catch (e) {}
    if (game.goal && !game.goal.choices.includes(opt.goal)) opt.goal = game.goal.def;

    const ctx = {
      stage, kelas: S.kelas, mapel: S.mapel, teams: S.teams.slice(), ended: false, opt,
      q: QS.provider(S.kelas, S.mapel),
      stats: [{ b: 0, s: 0 }, { b: 0, s: 0 }],
      stat(t, ok) { ok ? this.stats[t].b++ : this.stats[t].s++; },
      setTimer(sec, onEnd) {
        let left = ctx.opt.time || sec;
        const draw = () => { timerEl.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`; timerEl.classList.toggle('low', left <= 10); };
        draw();
        E.every(1000, () => { if (ctx.ended || left <= 0) return; left--; draw(); if (left <= 10 && left > 0) SFX.tick(); if (left === 0) onEnd(); });
      },
      end(winner, reason) {
        if (ctx.ended) return;
        ctx.ended = true; E.clearAll(); SFX.win();
        E.after(700, () => result(scr, game, ctx, winner, reason));
      }
    };
    function confirmQuit() {
      if (ctx.ended) { games(); return; }
      const ov = h('div', { class: 'overlay' });
      ov.append(h('div', { class: 'panel' }, h('div', { class: 'big-ic' }, '🤔'), h('h2', {}, 'Hentikan permainan?'),
        h('div', { class: 'row', style: 'margin-top:3vh' }, btn('▶ Lanjut main', 'green', () => ov.remove()), btn('✖ Keluar', 'red', games))));
      scr.append(ov);
    }
    let inst = null;
    // layar aturan + pengaturan → hitung mundur → mulai
    const ov = h('div', { class: 'overlay' });
    const fmtT = s => s >= 60 ? `${Math.floor(s / 60)}${s % 60 ? ':' + String(s % 60).padStart(2, '0') : ''} mnt` : `${s} dtk`;
    const settings = h('div', { class: 'settings' });
    function drawSettings() {
      settings.innerHTML = '';
      const times = [...new Set([60, 90, 120, 180, 240, 300, 600, defOpt().time])].sort((a, b) => a - b);
      const row = (label, vals, cur, fmt, set, def) => {
        const chips = h('div', { class: 'chips' });
        vals.forEach(v => {
          const c = h('button', { class: 'chip' + (v === cur ? ' on' : '') }, fmt(v) + (v === def ? ' ★' : ''));
          tap(c, () => { SFX.click(); set(v); try { localStorage.setItem(OKEY, JSON.stringify(opt)); } catch (e) {} drawSettings(); });
          chips.append(c);
        });
        return h('div', { class: 'set-row' }, h('b', {}, label), chips);
      };
      settings.append(row('⏱ Waktu', times, opt.time, fmtT, v => opt.time = v, defOpt().time));
      if (game.goal) settings.append(row('🎯 ' + game.goal.label, game.goal.choices, opt.goal, String, v => opt.goal = v, game.goal.def));
      const reset = h('button', { class: 'chip wide' }, '↺ Default');
      tap(reset, () => { SFX.click(); opt = defOpt(); Object.assign(ctx.opt, opt); ctx.opt = opt; try { localStorage.removeItem(OKEY); } catch (e) {} drawSettings(); });
      settings.append(h('div', { class: 'set-foot' }, h('small', {}, '★ = nilai default'), reset));
    }
    drawSettings();
    const rules = h('div', { class: 'panel' }, h('div', { class: 'big-ic' }, game.icon), h('h2', {}, game.name),
      h('p', { class: 'sub' }, `${ctx.teams[0]} 🆚 ${ctx.teams[1]} · ${S.mapel} kelas ${S.kelas}`),
      h('ol', {}, game.rules.map(r => h('li', {}, r))),
      settings,
      h('div', { class: 'row' }, btn('◀ Ganti game', 'white', games), btn('SIAP! MULAI ▶', 'green big', () => { ctx.opt = opt; inst = game.start(ctx); countdown(); })));
    ov.append(rules); scr.append(ov);
    function countdown() {
      ov.innerHTML = ''; let n = 3;
      const step = () => {
        ov.innerHTML = '';
        if (n > 0) { SFX.count(); ov.append(h('div', { class: 'cd-num' }, String(n))); n--; E.after(850, step); }
        else { SFX.go(); ov.append(h('div', { class: 'cd-num go' }, 'MULAI!')); E.after(650, () => { ov.remove(); inst.go(); }); }
      };
      step();
    }
  }

  function result(scr, game, ctx, winner, reason) {
    const ov = h('div', { class: 'overlay' });
    const acc = st => { const n = st.b + st.s; return n ? Math.round(st.b / n * 100) : 0; };
    const stat = t => h('div', { class: `stat t${t}` + (winner === t ? ' win' : '') }, h('h4', {}, (winner === t ? '👑 ' : '') + ctx.teams[t]),
      h('div', { class: 'nums' }, h('div', {}, h('b', {}, ctx.stats[t].b), '✔ Benar'), h('div', {}, h('b', {}, ctx.stats[t].s), '✘ Salah'), h('div', {}, h('b', {}, acc(ctx.stats[t]) + '%'), 'Akurasi')));
    const panel = h('div', { class: 'panel result' },
      h('div', { class: 'trophy' }, winner < 0 ? '🤝' : '🏆'),
      h('div', { class: 'sub' }, winner < 0 ? 'Hasil pertandingan' : 'PEMENANGNYA'),
      h('div', { class: 'winner ' + (winner < 0 ? 'draw' : 't' + winner) }, winner < 0 ? 'SERI!' : ctx.teams[winner]),
      h('p', { class: 'sub' }, reason || ''),
      h('div', { class: 'stats' }, stat(0), stat(1)),
      h('div', { class: 'row' }, btn('🔁 Main lagi', 'green', () => match(game)), btn('🎮 Game lain', 'blue', games), btn('🏠 Beranda', 'white', home)));
    ov.append(panel); scr.append(ov);
    E.confetti(ov, winner === 0 ? ['#ef4444', '#ffd23f', '#fff'] : winner === 1 ? ['#2f7cf6', '#ffd23f', '#fff'] : ['#ef4444', '#2f7cf6', '#ffd23f', '#22c55e']);
  }

  /* ---------- jembatan ke Bank Soal Guru ---------- */
  const guruApi = {
    show, menu, btn, home,
    play(set) {
      const k = set.kelas[0];
      S.jenjang = k <= 6 ? 'SD' : k <= 9 ? 'SMP' : 'SMK';
      S.kelas = k; S.mapel = QB.CUSTOM_PREFIX + set.name;
      games();
    }
  };

  /* ---------- tombol global ---------- */
  const bs = document.getElementById('btnSound');
  bs.textContent = SFX.isMuted() ? '🔇' : '🔊';
  tap(bs, () => { bs.textContent = SFX.toggle() ? '🔇' : '🔊'; });
  tap(document.getElementById('btnFull'), () => {
    try { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); } catch (e) {}
  });
  document.addEventListener('pointerdown', () => SFX.unlock(), { once: true });
  document.addEventListener('contextmenu', e => e.preventDefault());

  return { home };
})();
App.home();
