/* ============================================================
   APP – menu: Beranda → Jenjang → Kelas → Mapel → Game → Main
   ============================================================ */
const App = (() => {
  const { h, tap } = E;
  const root = document.getElementById('app');
  const JENJANG = {
    SD: { name: 'SD', full: 'Sekolah Dasar', kelas: [1, 2, 3, 4, 5, 6], icon: '🎒', sub: 'Kelas 1–6 · Fase A, B, C', c: ['#ff9f1c', '#ff5e5b'] },
    SMP: { name: 'SMP', full: 'Sekolah Menengah Pertama', kelas: [7, 8, 9], icon: '🏫', sub: 'Kelas 7–9 · Fase D', c: ['#3ec1d3', '#2b5cf0'] },
    SMA: { name: 'SMA', full: 'Sekolah Menengah Atas', kelas: [10, 11, 12], icon: '🎓', sub: 'Kelas 10–12 · Fase E, F', c: ['#06d6a0', '#0f766e'] },
    SMK: { name: 'SMK', full: 'Sekolah Menengah Kejuruan', kelas: [10, 11, 12], icon: '🛠️', sub: 'Kelas 10–12 · Fase E, F', c: ['#a855f7', '#db2777'] },
    MI: { name: 'MI', full: 'Madrasah Ibtidaiyah', kelas: [1, 2, 3, 4, 5, 6], icon: '🌙', sub: 'Kelas 1–6 · setara SD', c: ['#52b788', '#2d6a4f'], madrasah: true },
    MTs: { name: 'MTs', full: 'Madrasah Tsanawiyah', kelas: [7, 8, 9], icon: '🕌', sub: 'Kelas 7–9 · setara SMP', c: ['#40916c', '#1b4332'], madrasah: true },
    MA: { name: 'MA', full: 'Madrasah Aliyah', kelas: [10, 11, 12], icon: '📿', sub: 'Kelas 10–12 · setara SMA', c: ['#2d6a4f', '#081c15'], madrasah: true }
  };
  const MAPEL_MADRASAH = ["Al-Qur'an Hadis", 'Akidah Akhlak', 'Fikih', 'Sejarah Kebudayaan Islam', 'Bahasa Arab'];
  const setJ = k => { S.jenjang = k; QB.setJenjang(k); };
  const PILIHAN = ['Fisika', 'Kimia', 'Biologi', 'Ekonomi', 'Sosiologi', 'Geografi', 'Antropologi', 'Koding & KA', 'PKK (Kewirausahaan)', 'Projek IPAS', 'K3 & Budaya Kerja', 'Informatika & KA'];
  const S = { jenjang: null, kelas: null, mapel: null, teams: ['Tim Merah', 'Tim Biru'] };
  /* tim: maskot + nama + anggota (opsional) + skor seri pertandingan */
  const MASKOT = ['🐯', '🦅', '🦁', '🐉', '🦈', '🐺', '🦊', '🐼', '🦄', '🐘', '🦖', '🐝', '🚀', '⚡', '🔥', '🌟', '🌊', '🍉'];
  const NAMA_ACAK = ['Garuda', 'Harimau Sakti', 'Komodo', 'Elang Jawa', 'Badak Cula', 'Anoa', 'Cendrawasih', 'Bintang Timur', 'Pelangi', 'Halilintar',
    'Rajawali', 'Ksatria', 'Pejuang Ilmu', 'Si Cerdas', 'Juara Sejati', 'Kilat', 'Matahari', 'Merapi', 'Samudra', 'Nusantara', 'Pendekar', 'Macan Tutul'];
  let TEAM = [{ ic: 'harimau', name: 'Tim Merah', members: '' }, { ic: 'burunghantu', name: 'Tim Biru', members: '' }], SERIES = [0, 0];
  try { const t = JSON.parse(localStorage.getItem('aj_team2')); if (Array.isArray(t.team) && t.team.length === 2) { TEAM = t.team; SERIES = t.series || [0, 0]; } } catch (e) {}
  // ic = id karakter SVG (Avatar) atau emoji; emoji ikut tampil di nama tim dalam game
  const syncTeams = () => { S.teams = TEAM.map(t => (t.ic && !Avatar.isAvatar(t.ic) ? t.ic + ' ' : '') + (t.name || 'Tim')); };
  const avatarEl = (ic, cls) => { const s = h('span', { class: 'av ' + (cls || '') }); if (Avatar.isAvatar(ic)) s.innerHTML = Avatar.svg(ic); else { s.textContent = ic || '⭐'; s.classList.add('emo'); } return s; };
  const saveTeams = () => { syncTeams(); try { localStorage.setItem('aj_team2', JSON.stringify({ team: TEAM, series: SERIES })); } catch (e) {} };
  syncTeams();

  function show(el) { E.clearAll(); document.body.classList.remove('game-active'); root.innerHTML = ''; root.append(el); }
  function btn(label, cls, fn) { const b = h('button', { class: 'btn3d ' + (cls || '') }, label); tap(b, () => { SFX.click(); fn(); }); return b; }
  function card(o, fn) {
    const inner = [h('h3', {}, o.title), o.p ? h('p', {}, o.p) : null, o.tags ? h('div', { class: 'tags' }, o.tags.map(t => h('span', {}, t))) : null];
    const c = h('button', { class: 'card ' + (o.cls || ''), style: `--c1:${o.c[0]};--c2:${o.c[1]}`, title: o.p || '' },
      h('div', { class: 'ic' }, o.icon), ...(o.compact ? [h('div', { class: 'body' }, ...inner)] : inner));
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
      h('p', { class: 'tag' }, `${GAMES.length} game edukasi versus untuk layar sentuh kelas · SD/MI · SMP/MTs · SMA/MA · SMK`),
      btn('▶ MAIN SEKARANG', 'big', jenjang),
      btn(`📝 Buat Bank Soal Sendiri${Guru.count() ? ` (${Guru.count()})` : ''}`, 'white', () => Guru.list(guruApi)),
      h('div', { class: 'vs-badges' }, h('span', { class: 'pill red' }, avatarEl(TEAM[0].ic), S.teams[0]), h('b', {}, 'VS'), h('span', { class: 'pill blue' }, avatarEl(TEAM[1].ic), S.teams[1]))
    ));
    el.append(contactBtn());
    el.append(h('div', { class: 'home-foot' }, 'Soal mengacu Capaian Pembelajaran Kurikulum Merdeka (Kep. Kepala BSKAP No. 046/H/KR/2025) dengan pendekatan Pembelajaran Mendalam'));
    show(el);
  }

  /* ---------- jenjang ---------- */
  function jenjang() {
    const wrap = h('div', { class: 'mapel-wrap' });
    [['🏫 Sekolah', false], ['🕌 Madrasah', true]].forEach(([title, mad]) => {
      const g = h('div', { class: 'grid g4' });
      Object.entries(JENJANG).filter(([, j]) => !!j.madrasah === mad)
        .forEach(([k, j]) => g.append(card({ cls: 'big', icon: j.icon, title: j.name, p: `${j.full}\n${j.sub}`, c: j.c }, () => { setJ(k); kelas(); })));
      wrap.append(h('div', { class: 'mapel-sec' }, h('h4', {}, title), g));
    });
    show(menu('Pilih Jenjang', [], home, wrap));
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
    // kelompokkan mapel agar mudah dicari di layar besar
    const GROUPS = [
      ['📘 Mata Pelajaran Umum', m => !/^(PA |Kejuruan|Bahasa (Jawa|Sunda)|📝)/.test(m) && !PILIHAN.includes(m) && !MAPEL_MADRASAH.includes(m) && m !== 'Campuran'],
      ['🕌 Mapel Keagamaan Madrasah', m => MAPEL_MADRASAH.includes(m)],
      [S.jenjang === 'SMK' ? '🛠️ Kejuruan & Pilihan' : '🧪 Peminatan & Pilihan', m => /^Kejuruan/.test(m) || PILIHAN.includes(m)],
      ['🕊️ Pendidikan Agama & Budi Pekerti', m => /^PA /.test(m)],
      ['🗣️ Muatan Lokal', m => /^Bahasa (Jawa|Sunda)/.test(m)],
      ['✏️ Soal Buatan Guru & Campuran', m => /^📝/.test(m) || m === 'Campuran']
    ];
    const list = QB.mapelFor(S.kelas);
    const wrap = h('div', { class: 'mapel-wrap' });
    GROUPS.forEach(([title, fn]) => {
      const ms = list.filter(fn); if (!ms.length) return;
      const g = h('div', { class: 'grid compact' });
      ms.forEach(m => {
        const inf = QB.info(m);
        g.append(card({ compact: true, icon: inf.icon, title: m.replace(/^Kejuruan: /, ''), p: QB.elemen(S.kelas, m), c: inf.c, tags: [`${QB.count(S.kelas, m)} soal`] }, () => { S.mapel = m; games(); }));
      });
      wrap.append(h('div', { class: 'mapel-sec' }, h('h4', {}, title, h('span', {}, `${ms.length}`)), g));
    });
    show(menu('Pilih Mata Pelajaran', [JENJANG[S.jenjang].name, `Kelas ${S.kelas}`, `Fase ${QB.fase(S.kelas)}`], kelas, wrap));
  }

  /* ---------- pilih game ---------- */
  function games() {
    const setup = teamSetup();
    const g = h('div', { class: 'grid', style: 'grid-template-columns:repeat(auto-fit,minmax(20em,1fr))' });
    GAMES.forEach(gm => g.append(card({ icon: gm.icon, title: gm.name, p: gm.desc, c: gm.c, tags: gm.tags }, () => match(gm))));
    const body = h('div', { style: 'display:flex;flex-direction:column;min-height:0' }, materiBar(), setup, g);
    show(menu('Pilih Permainan', [JENJANG[S.jenjang].name, `Kelas ${S.kelas}`, S.mapel], mapel, body));
  }

  /* ---------- pengaturan tim: maskot, nama, anggota, skor seri ---------- */
  function teamSetup() {
    const wrap = h('div', { class: 'team-setup2' });
    const draw = () => {
      wrap.innerHTML = '';
      const card = t => {
        const T = TEAM[t];
        const ic = h('button', { class: 'ts-ic', title: 'Pilih avatar' }, avatarEl(T.ic), h('i', {}, '✏️'));
        tap(ic, () => { SFX.pop(); avatarPicker(t, draw); });
        const name = h('input', { class: 'ts-name', value: T.name, maxlength: '16', placeholder: t ? 'Nama Tim Biru' : 'Nama Tim Merah' });
        name.addEventListener('input', () => { T.name = name.value.trim() || (t ? 'Tim Biru' : 'Tim Merah'); saveTeams(); });
        const mem = h('input', { class: 'ts-mem', value: T.members || '', maxlength: '80', placeholder: '👥 Anggota (opsional): Andi, Sari, Budi' });
        mem.addEventListener('input', () => { T.members = mem.value; saveTeams(); });
        const rnd = btn('🎲', 'white small', () => { let n; do { n = NAMA_ACAK[Math.floor(Math.random() * NAMA_ACAK.length)]; } while (n === TEAM[1 - t].name); T.name = n; const al = Avatar.list.filter(a => a.id !== TEAM[1 - t].ic); T.ic = al[Math.floor(Math.random() * al.length)].id; saveTeams(); draw(); });
        return h('div', { class: 'ts-card t' + t }, ic, h('div', { class: 'ts-f' }, h('div', { class: 'ts-row' }, name, rnd), mem));
      };
      const mid = h('div', { class: 'ts-mid' }, h('b', {}, 'VS'),
        h('div', { class: 'ts-series', title: 'Skor kemenangan antar-ronde' }, h('span', { class: 'r' }, SERIES[0]), ' : ', h('span', { class: 'bl' }, SERIES[1])),
        h('small', {}, 'skor ronde'),
        btn('↺', 'white small', () => { SERIES = [0, 0]; saveTeams(); draw(); }));
      wrap.append(card(0), mid, card(1));
    };
    draw();
    return h('div', {}, wrap, h('p', { class: 'ts-hint' }, '✏️ Ketuk nama untuk mengganti · ketuk avatar untuk memilih karakter/emoji · 🎲 nama & avatar acak · skor ronde bertambah tiap menang (↺ mulai dari 0)'));
  }
  function avatarPicker(t, done) {
    const ov = h('div', { class: 'overlay' });
    let tab = Avatar.isAvatar(TEAM[t].ic) || !TEAM[t].ic ? 'kar' : 'emo';
    const grid = h('div', { class: 'av-grid' });
    const tabs = h('div', { class: 'chips', style: 'justify-content:center' });
    const pick = id => { SFX.pop(); TEAM[t].ic = id; saveTeams(); ov.remove(); done(); };
    const draw = () => {
      tabs.innerHTML = ''; grid.innerHTML = '';
      [['kar', '🧸 Karakter'], ['emo', '😀 Emoji']].forEach(([k, l]) => { const b = h('button', { class: 'chip wide' + (tab === k ? ' on' : '') }, l); tap(b, () => { tab = k; draw(); }); tabs.append(b); });
      const items = tab === 'kar' ? Avatar.list.map(a => [a.id, a.name]) : MASKOT.map(e => [e, '']);
      items.forEach(([id, name]) => {
        const used = TEAM[1 - t].ic === id;
        const b = h('button', { class: 'av-item' + (TEAM[t].ic === id ? ' on' : '') + (used ? ' used' : '') }, avatarEl(id), name ? h('small', {}, name) : null);
        tap(b, () => { if (used) { alert('Avatar ini sudah dipakai tim lawan.'); return; } pick(id); });
        grid.append(b);
      });
    };
    draw();
    ov.append(h('div', { class: 'panel av-panel' }, h('h2', {}, `Pilih Avatar ${t ? 'Tim Biru' : 'Tim Merah'}`), tabs, grid,
      h('div', { class: 'row' }, btn('Tutup', 'white', () => ov.remove()))));
    root.querySelector('.screen').append(ov);
  }

  /* ---------- filter materi/bab: hanya soal dari bab yang sudah diajarkan ---------- */
  function materiBar() {
    const all = QB.topics(S.kelas, S.mapel);
    if (all.length < 2) return null;
    const sel = QB.selTopics(S.kelas, S.mapel);
    const on = sel ? all.filter(t => sel.includes(t.id)) : all;
    const n = S.mapel === 'Matematika' ? '' : ` · ${QB.count(S.kelas, S.mapel)} soal`;
    return h('div', { class: 'materi-bar' + (sel ? ' filtered' : '') },
      h('span', { class: 'mb-ic' }, '📚'),
      h('div', { class: 'mb-txt' }, h('b', {}, sel ? `Materi dipilih: ${on.length} dari ${all.length} bab${n}` : `Materi: semua bab (${all.length})${n}`),
        h('small', {}, sel ? on.map(t => t.label).join(' · ') : 'Belum sampai bab tertentu? Pilih hanya bab yang sudah diajarkan.')),
      btn('🎯 Pilih Bab', 'yellow small', () => materiPicker(all)));
  }
  function materiPicker(all) {
    const cur = new Set(QB.selTopics(S.kelas, S.mapel) || all.map(t => t.id));
    const list = h('div', { class: 'mp-list' });
    const draw = () => {
      list.innerHTML = '';
      all.forEach((t, i) => {
        const r = h('button', { class: 'mp-item' + (cur.has(t.id) ? ' on' : '') },
          h('span', { class: 'mp-box' }, cur.has(t.id) ? '✔' : ''), h('span', { class: 'mp-no' }, t.legacy ? '📦' : `Bab ${i + 1}`), h('span', { class: 'mp-lbl' }, t.label), h('span', { class: 'mp-n' }, `${t.n} soal`));
        tap(r, () => { SFX.click(); cur.has(t.id) ? cur.delete(t.id) : cur.add(t.id); draw(); });
        list.append(r);
      });
    };
    draw();
    const upTo = h('div', { class: 'chips mp-upto' }, h('span', {}, 'Cepat: sampai bab'),
      ...all.filter(t => !t.legacy).map((t, i) => { const c = h('button', { class: 'chip' }, String(i + 1)); tap(c, () => { cur.clear(); all.filter(x => !x.legacy).slice(0, i + 1).forEach(x => cur.add(x.id)); draw(); }); return c; }));
    const ov = h('div', { class: 'overlay' });
    ov.append(h('div', { class: 'panel mp-panel' },
      h('h2', {}, '🎯 Pilih Materi / Bab'),
      h('p', { class: 'sub' }, `${S.mapel} · Kelas ${S.kelas}. Soal hanya diambil dari bab yang dicentang. Pilihan tersimpan untuk kelas ini.${all.some(t => t.legacy) ? " 📦 = paket ringkasan berisi campuran beberapa bab, hilangkan centangnya jika ada bab yang belum diajarkan." : ""}`),
      upTo, list,
      h('div', { class: 'row' },
        btn('☑ Semua', 'white', () => { all.forEach(t => cur.add(t.id)); draw(); }),
        btn('✅ Simpan', 'green', () => {
          if (!cur.size) { alert('Centang minimal satu bab.'); return; }
          QB.setTopics(S.kelas, S.mapel, cur.size === all.length ? null : all.filter(t => cur.has(t.id)).map(t => t.id));
          games();
        }),
        btn('Batal', 'white', () => ov.remove()))));
    root.querySelector('.screen').append(ov);
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
    if (winner === 0 || winner === 1) { SERIES[winner]++; saveTeams(); }
    const members = t => TEAM[t].members && TEAM[t].members.trim() ? h('div', { class: 'members' }, '👥 ' + TEAM[t].members.trim()) : null;
    const acc = st => { const n = st.b + st.s; return n ? Math.round(st.b / n * 100) : 0; };
    const stat = t => h('div', { class: `stat t${t}` + (winner === t ? ' win' : '') }, avatarEl(TEAM[t].ic, 'av-res'), h('h4', {}, (winner === t ? '👑 ' : '') + ctx.teams[t]), members(t),
      h('div', { class: 'nums' }, h('div', {}, h('b', {}, ctx.stats[t].b), '✔ Benar'), h('div', {}, h('b', {}, ctx.stats[t].s), '✘ Salah'), h('div', {}, h('b', {}, acc(ctx.stats[t]) + '%'), 'Akurasi')));
    const panel = h('div', { class: 'panel result' },
      winner >= 0 ? h('div', { class: 'trophy av-win' }, avatarEl(TEAM[winner].ic), h('span', {}, '🏆')) : h('div', { class: 'trophy' }, '🤝'),
      h('div', { class: 'sub' }, winner < 0 ? 'Hasil pertandingan' : 'PEMENANGNYA'),
      h('div', { class: 'winner ' + (winner < 0 ? 'draw' : 't' + winner) }, winner < 0 ? 'SERI!' : ctx.teams[winner]),
      h('p', { class: 'sub' }, reason || ''),
      winner >= 0 && TEAM[winner].members && TEAM[winner].members.trim() ? h('p', { class: 'congrats' }, `🎉 Selamat ${TEAM[winner].members.trim()}!`) : null,
      h('div', { class: 'stats' }, stat(0), stat(1)),
      h('div', { class: 'series-line' }, '🏅 Skor ronde: ', h('b', { class: 'r' }, `${S.teams[0]} ${SERIES[0]}`), ' – ', h('b', { class: 'bl' }, `${SERIES[1]} ${S.teams[1]}`)),
      h('div', { class: 'row' }, btn('🔁 Main lagi', 'green', () => match(game)), btn('🎮 Game lain', 'blue', games), btn('🏠 Beranda', 'white', home)),
      h('div', { class: 'row' }, btn('🚩 Ada soal yang keliru? Laporkan', 'white small', () => contact('soal', `${game.name} · ${JENJANG[S.jenjang] ? JENJANG[S.jenjang].name : ''} kelas ${S.kelas} · ${S.mapel}`))));
    ov.append(panel); scr.append(ov);
    E.confetti(ov, winner === 0 ? ['#ef4444', '#ffd23f', '#fff'] : winner === 1 ? ['#2f7cf6', '#ffd23f', '#fff'] : ['#ef4444', '#2f7cf6', '#ffd23f', '#22c55e']);
  }

  /* ---------- hubungi pengembang via WhatsApp (gratis) ---------- */
  const WA = '6289623346046';
  function contactBtn() {
    const b = h('button', { class: 'contact-fab', title: 'Hubungi kami gratis lewat WhatsApp' }, h('span', { class: 'wa-ic' }, '💬'), h('span', {}, h('b', {}, 'Hubungi Kami'), h('small', {}, 'Gratis · lapor soal & request fitur')));
    tap(b, () => { SFX.click(); contact(); });
    return b;
  }
  function contact(pre, info) {
    const ov = h('div', { class: 'overlay' });
    const TOPIK = [
      ['soal', '🚩', 'Laporkan soal keliru', 'Kunci jawaban salah, soal ambigu, atau salah ketik'],
      ['bab', '📚', 'Minta tambah soal / bab', 'Mapel, kelas, atau bab yang belum ada'],
      ['fitur', '💡', 'Request fitur', 'Ide game baru atau fitur yang dibutuhkan'],
      ['bantuan', '🙋', 'Bantuan & pertanyaan', 'Cara pakai di TV kelas, deploy, dan lainnya']
    ];
    let sel = pre || 'soal';
    const where = h('textarea', { class: 'fld', rows: '3', placeholder: 'Tulis singkat di sini (opsional), mis. soal "..." jawabannya seharusnya "..."' });
    const sekolah = h('input', { class: 'fld', placeholder: 'Nama & sekolah (opsional)' });
    const list = h('div', { class: 'ct-list' });
    const draw = () => { list.innerHTML = ''; TOPIK.forEach(([k, ic, t, d]) => { const r = h('button', { class: 'ct-item' + (sel === k ? ' on' : '') }, h('span', { class: 'ct-ic' }, ic), h('span', {}, h('b', {}, t), h('small', {}, d))); tap(r, () => { sel = k; draw(); }); list.append(r); }); };
    draw();
    const send = () => {
      const t = TOPIK.find(x => x[0] === sel);
      const msg = [`Halo Arena Juara, saya ingin: ${t[2]}`, info ? `Konteks: ${info}` : (S.mapel ? `Konteks: ${JENJANG[S.jenjang] ? JENJANG[S.jenjang].name : ''} kelas ${S.kelas} · ${S.mapel}` : ''), where.value.trim() ? `Detail: ${where.value.trim()}` : '', sekolah.value.trim() ? `Dari: ${sekolah.value.trim()}` : ''].filter(Boolean).join(String.fromCharCode(10));
      window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank');
    };
    ov.append(h('div', { class: 'panel ct-panel' },
      h('div', { class: 'big-ic' }, '💬'), h('h2', {}, 'Hubungi Kami'),
      h('p', { class: 'sub' }, 'Gratis! Laporkan soal yang keliru, minta tambahan bab, atau usulkan fitur baru lewat WhatsApp.'),
      list, where, sekolah,
      h('div', { class: 'row' }, btn('📲 Kirim via WhatsApp', 'green', send), btn('Tutup', 'white', () => ov.remove())),
      h('p', { class: 'ct-num' }, 'Membuka WhatsApp · perlu koneksi internet')));
    (root.querySelector('.screen') || root).append(ov);
  }

  /* ---------- jembatan ke Bank Soal Guru ---------- */
  const guruApi = {
    show, menu, btn, home,
    play(set) {
      const k = set.kelas[0];
      setJ(k <= 6 ? 'SD' : k <= 9 ? 'SMP' : 'SMA');
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
