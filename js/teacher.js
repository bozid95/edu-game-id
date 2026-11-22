/* ============================================================
   BANK SOAL GURU – guru membuat paket soal sendiri
   Disimpan di perangkat (localStorage) + ekspor/impor file .json
   ============================================================ */
const Guru = (() => {
  const { h, tap } = E;
  const KEY = 'aj_custom';
  let sets = [];
  try { sets = JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { sets = []; }
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(sets)); } catch (e) { alert('Gagal menyimpan di perangkat ini. Gunakan tombol Ekspor untuk menyimpan file.'); } QB.setCustom(sets); };
  QB.setCustom(sets);

  const uid = () => 'p' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const total = s => s.mc.length + s.tf.length + s.pair.length + s.ord.length;
  const clean = v => String(v || '').trim();

  function normalize(s) {
    return {
      id: s.id || uid(), name: clean(s.name).slice(0, 40) || 'Paket Soal', author: clean(s.author).slice(0, 40),
      kelas: (Array.isArray(s.kelas) ? s.kelas : []).map(Number).filter(k => k >= 1 && k <= 12),
      mc: (s.mc || []).filter(r => Array.isArray(r) && clean(r[0]) && clean(r[1])).map(r => r.map(clean).filter((x, i) => i < 2 || x)),
      tf: (s.tf || []).filter(r => Array.isArray(r) && clean(r[0])).map(r => [clean(r[0]), !!r[1]]),
      pair: (s.pair || []).filter(p => Array.isArray(p) && p.length >= 2).map(p => p.filter(x => clean(x[0]) && clean(x[1])).map(x => [clean(x[0]), clean(x[1])]).slice(0, 5)).filter(p => p.length >= 2),
      ord: (s.ord || []).filter(r => Array.isArray(r) && Array.isArray(r[1]) && r[1].length >= 2).map(r => [clean(r[0]) || 'Urutkan dengan benar', r[1].map(clean).filter(Boolean)])
    };
  }

  /* ---------- format tempel cepat ---------- */
  function parseQuick(text) {
    const out = { mc: [], tf: [], pair: [], ord: [] }, bad = [];
    text.split(/\r?\n/).forEach((line, i) => {
      const L = line.trim(); if (!L || L.startsWith('#')) return;
      const m = L.match(/^(PG|BS|PS|UR)\s*[:.]\s*(.+)$/i);
      if (!m) { bad.push(i + 1); return; }
      const kind = m[1].toUpperCase(), body = m[2];
      if (kind === 'PG') { const p = body.split('|').map(clean).filter(Boolean); if (p.length >= 2) out.mc.push(p.slice(0, 5)); else bad.push(i + 1); }
      else if (kind === 'BS') { const p = body.split('|').map(clean); if (p[0] && p[1]) out.tf.push([p[0], /^(b|benar|true|ya|y)$/i.test(p[1])]); else bad.push(i + 1); }
      else if (kind === 'PS') { const p = body.split(';').map(x => x.split('=').map(clean)).filter(x => x[0] && x[1]); if (p.length >= 2) out.pair.push(p.slice(0, 5)); else bad.push(i + 1); }
      else if (kind === 'UR') { const p = body.split('|'); const items = (p[1] || '').split(';').map(clean).filter(Boolean); if (items.length >= 2) out.ord.push([clean(p[0]) || 'Urutkan dengan benar', items]); else bad.push(i + 1); }
    });
    return { out, bad };
  }
  function toQuick(s) {
    const L = [];
    s.mc.forEach(r => L.push('PG: ' + r.join(' | ')));
    s.tf.forEach(r => L.push(`BS: ${r[0]} | ${r[1] ? 'B' : 'S'}`));
    s.pair.forEach(p => L.push('PS: ' + p.map(x => x[0] + ' = ' + x[1]).join(' ; ')));
    s.ord.forEach(r => L.push(`UR: ${r[0]} | ${r[1].join(' ; ')}`));
    return L.join('\n');
  }

  /* ---------- file ---------- */
  function download(name, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = h('a', { href: URL.createObjectURL(blob), download: name });
    document.body.append(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function importFile(done) {
    const inp = h('input', { type: 'file', accept: '.json,application/json,.txt', style: 'display:none' });
    inp.addEventListener('change', () => {
      const f = inp.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        let added = 0;
        try {
          const txt = String(rd.result);
          if (/\.txt$/i.test(f.name)) {
            const { out } = parseQuick(txt);
            sets.push(normalize({ name: f.name.replace(/\.txt$/i, ''), kelas: [], ...out })); added = 1;
          } else {
            const data = JSON.parse(txt);
            const list = Array.isArray(data) ? data : (data.paket || [data]);
            list.forEach(s => { const n = normalize(s); const ex = sets.findIndex(x => x.id === n.id); if (ex >= 0) sets[ex] = n; else sets.push(n); added++; });
          }
          persist(); alert(`Berhasil mengimpor ${added} paket soal.`);
        } catch (e) { alert('File tidak dapat dibaca. Pastikan file hasil Ekspor dari Arena Juara (.json) atau teks format cepat (.txt).'); }
        done();
      };
      rd.readAsText(f);
    });
    document.body.append(inp); inp.click(); setTimeout(() => inp.remove(), 60000);
  }

  /* ---------- layar daftar paket ---------- */
  function list(api) {
    const wrap = h('div', { class: 'guru' });
    const bar = h('div', { class: 'guru-bar' },
      api.btn('➕ Buat Paket Soal', 'green', () => editor(api, null)),
      api.btn('📂 Impor File', 'blue', () => importFile(() => list(api))),
      sets.length ? api.btn('💾 Ekspor Semua', 'white', () => download('arena-juara-soal-guru.json', { app: 'Arena Juara', versi: 1, paket: sets })) : null);
    wrap.append(bar);
    if (!sets.length) {
      wrap.append(h('div', { class: 'guru-empty' }, h('div', { class: 'big-ic' }, '📝'),
        h('h3', {}, 'Belum ada paket soal buatan guru'),
        h('p', {}, 'Buat paket soal sendiri sesuai materi di kelas Anda. Paket yang dibuat akan muncul sebagai mata pelajaran baru (✏️) dan dapat dimainkan di semua game.')));
    } else {
      const g = h('div', { class: 'grid' });
      sets.forEach(s => {
        const c = h('div', { class: 'card guru-card', style: '--c1:#ffbe0b;--c2:#fb5607' },
          h('div', { class: 'ic' }, '✏️'), h('h3', {}, s.name),
          h('p', {}, `${s.kelas.length ? 'Kelas ' + s.kelas.join(', ') : '⚠️ Belum memilih kelas'}${s.author ? ' · ' + s.author : ''}`),
          h('div', { class: 'tags' }, h('span', {}, `${s.mc.length} PG`), h('span', {}, `${s.tf.length} B/S`), h('span', {}, `${s.pair.length} pasangan`), h('span', {}, `${s.ord.length} urutan`)),
          h('div', { class: 'guru-actions' },
            s.kelas.length && total(s) ? api.btn('▶ Main', 'green small', () => api.play(s)) : null,
            api.btn('✏️ Ubah', 'white small', () => editor(api, s)),
            api.btn('💾', 'white small', () => download(`soal-${s.name.replace(/\W+/g, '-').toLowerCase()}.json`, { app: 'Arena Juara', versi: 1, paket: [s] })),
            api.btn('🗑', 'red small', () => { if (confirm(`Hapus paket “${s.name}”?`)) { sets = sets.filter(x => x.id !== s.id); persist(); list(api); } })));
        g.append(c);
      });
      wrap.append(g);
    }
    wrap.append(h('p', { class: 'guru-note' }, '💡 Paket disimpan di browser perangkat ini. Gunakan Ekspor untuk cadangan atau memindahkan soal ke TV/laptop lain, lalu Impor di perangkat tujuan.'));
    api.show(api.menu('Bank Soal Guru', ['Buat soal sendiri'], api.home, wrap));
  }

  /* ---------- editor ---------- */
  function editor(api, src) {
    const d = normalize(src ? JSON.parse(JSON.stringify(src)) : { name: '', kelas: [] });
    let tab = 'mc';
    const root = h('div', { class: 'guru-ed' });

    const name = h('input', { class: 'fld', placeholder: 'Nama paket, mis. “Ekosistem Kelas 5”', value: d.name, maxlength: '40' });
    name.addEventListener('input', () => d.name = name.value);
    const author = h('input', { class: 'fld', placeholder: 'Nama guru (opsional)', value: d.author, maxlength: '40' });
    author.addEventListener('input', () => d.author = author.value);
    const chips = h('div', { class: 'chips' });
    for (let k = 1; k <= 12; k++) {
      const c = h('button', { class: 'chip' + (d.kelas.includes(k) ? ' on' : '') }, String(k));
      tap(c, () => { d.kelas = d.kelas.includes(k) ? d.kelas.filter(x => x !== k) : [...d.kelas, k].sort((a, b) => a - b); c.classList.toggle('on'); });
      chips.append(c);
    }
    const quickSel = h('div', { class: 'chips' },
      ...[['SD', [1, 2, 3, 4, 5, 6]], ['SMP', [7, 8, 9]], ['SMK', [10, 11, 12]]].map(([l, ks]) => {
        const b = h('button', { class: 'chip wide' }, 'Semua ' + l);
        tap(b, () => { d.kelas = [...new Set([...d.kelas, ...ks])].sort((a, b) => a - b); [...chips.children].forEach((c, i) => c.classList.toggle('on', d.kelas.includes(i + 1))); });
        return b;
      }));
    const meta = h('div', { class: 'form-card' },
      h('label', {}, 'Nama paket soal'), name, h('label', {}, 'Pembuat'), author,
      h('label', {}, 'Untuk kelas'), chips, quickSel);

    const tabs = h('div', { class: 'tabs' });
    const pane = h('div', { class: 'form-card pane' });
    const TABS = [['mc', '🅰 Pilihan Ganda'], ['tf', '✔✘ Benar/Salah'], ['pair', '🧩 Pasangan'], ['ord', '🔢 Urutan'], ['quick', '⚡ Tempel Cepat']];
    function drawTabs() {
      tabs.innerHTML = '';
      TABS.forEach(([k, l]) => {
        const n = k === 'quick' ? '' : ` (${d[k].length})`;
        const b = h('button', { class: 'tab' + (tab === k ? ' on' : '') }, l + n);
        tap(b, () => { tab = k; drawTabs(); drawPane(); }); tabs.append(b);
      });
    }
    const inp = (ph, v = '') => h('input', { class: 'fld', placeholder: ph, value: v });
    const item = (txt, onDel) => { const r = h('div', { class: 'qitem' }, h('div', { class: 'qtxt' }, txt), api.btn('🗑', 'red small', () => { onDel(); drawTabs(); drawPane(); })); return r; };

    function drawPane() {
      pane.innerHTML = '';
      if (tab === 'mc') {
        const q = h('textarea', { class: 'fld', rows: '2', placeholder: 'Tulis soal...' }), a = inp('✔ Jawaban BENAR'), w = [inp('✘ Pengecoh 1'), inp('✘ Pengecoh 2'), inp('✘ Pengecoh 3')];
        pane.append(h('label', {}, 'Soal pilihan ganda'), q, h('div', { class: 'row2' }, a, ...w),
          api.btn('➕ Tambah soal', 'green', () => {
            if (!clean(q.value) || !clean(a.value)) { alert('Soal dan jawaban benar wajib diisi.'); return; }
            if (w.every(x => !clean(x.value))) { alert('Isi minimal 1 pengecoh (jawaban salah).'); return; }
            d.mc.push([clean(q.value), clean(a.value), ...w.map(x => clean(x.value)).filter(Boolean)]); drawTabs(); drawPane();
          }));
        d.mc.slice().reverse().forEach((r, ri) => pane.append(item(`${r[0]} → ✔ ${r[1]} · ✘ ${r.slice(2).join(', ')}`, () => d.mc.splice(d.mc.length - 1 - ri, 1))));
      } else if (tab === 'tf') {
        const q = h('textarea', { class: 'fld', rows: '2', placeholder: 'Tulis pernyataan...' });
        let val = true;
        const bT = h('button', { class: 'chip wide on' }, '✔ BENAR'), bF = h('button', { class: 'chip wide' }, '✘ SALAH');
        tap(bT, () => { val = true; bT.classList.add('on'); bF.classList.remove('on'); }); tap(bF, () => { val = false; bF.classList.add('on'); bT.classList.remove('on'); });
        pane.append(h('label', {}, 'Pernyataan benar/salah'), q, h('div', { class: 'chips' }, bT, bF),
          api.btn('➕ Tambah pernyataan', 'green', () => { if (!clean(q.value)) { alert('Pernyataan wajib diisi.'); return; } d.tf.push([clean(q.value), val]); drawTabs(); drawPane(); }));
        d.tf.slice().reverse().forEach((r, ri) => pane.append(item(`${r[1] ? '✔' : '✘'} ${r[0]}`, () => d.tf.splice(d.tf.length - 1 - ri, 1))));
      } else if (tab === 'pair') {
        const rows = Array.from({ length: 5 }, (_, i) => [inp(`Kiri ${i + 1} (istilah)`), inp(`Kanan ${i + 1} (pasangan)`)]);
        pane.append(h('label', {}, 'Satu set pasangan (minimal 3, maksimal 5) — dipakai di Cocok Kilat & Kartu Ingat'), h('div', { class: 'row2 pairs' }, rows.flat()),
          api.btn('➕ Tambah set', 'green', () => {
            const p = rows.map(([l, r]) => [clean(l.value), clean(r.value)]).filter(x => x[0] && x[1]);
            if (p.length < 3) { alert('Isi minimal 3 pasangan.'); return; }
            if (new Set(p.map(x => x[1])).size !== p.length) { alert('Isi kolom kanan tidak boleh sama.'); return; }
            d.pair.push(p); drawTabs(); drawPane();
          }));
        d.pair.slice().reverse().forEach((p, ri) => pane.append(item(p.map(x => `${x[0]} = ${x[1]}`).join(' · '), () => d.pair.splice(d.pair.length - 1 - ri, 1))));
      } else if (tab === 'ord') {
        const q = inp('Instruksi, mis. “Urutkan daur air”');
        const its = h('textarea', { class: 'fld', rows: '5', placeholder: 'Tulis langkah sesuai URUTAN BENAR, satu per baris\nPenguapan\nPengembunan\nHujan' });
        pane.append(h('label', {}, 'Soal mengurutkan — dipakai di Panjat Pinang'), q, its,
          api.btn('➕ Tambah soal urutan', 'green', () => {
            const items = its.value.split(/\r?\n/).map(clean).filter(Boolean);
            if (items.length < 2 || items.length > 6) { alert('Isi 2 sampai 6 langkah.'); return; }
            if (new Set(items).size !== items.length) { alert('Langkah tidak boleh ada yang sama.'); return; }
            d.ord.push([clean(q.value) || 'Urutkan dengan benar', items]); drawTabs(); drawPane();
          }));
        d.ord.slice().reverse().forEach((r, ri) => pane.append(item(`${r[0]}: ${r[1].join(' → ')}`, () => d.ord.splice(d.ord.length - 1 - ri, 1))));
      } else {
        const ta = h('textarea', { class: 'fld mono', rows: '10', placeholder: 'Tempel soal di sini...' });
        ta.value = toQuick(d);
        pane.append(h('label', {}, 'Tempel cepat — cocok disiapkan dulu di Word/Excel/Notepad. Satu soal per baris:'),
          h('pre', { class: 'help' },
            'PG: Ibu kota Jawa Barat adalah... | Bandung | Semarang | Surabaya | Serang\n' +
            'BS: Matahari terbit dari timur | B\n' +
            'BS: Ikan bernapas dengan paru-paru | S\n' +
            'PS: Akar = menyerap air ; Daun = fotosintesis ; Batang = menopang\n' +
            'UR: Urutkan daur air | Penguapan ; Pengembunan ; Hujan\n' +
            '(PG: soal | jawaban benar | pengecoh…   BS: … | B/S   PS: kiri = kanan ; …   UR: instruksi | langkah ; langkah)'),
          ta,
          h('div', { class: 'row' }, api.btn('✅ Terapkan (ganti semua soal)', 'green', () => {
            const { out, bad } = parseQuick(ta.value);
            Object.assign(d, out); drawTabs();
            alert(`Terbaca: ${out.mc.length} PG, ${out.tf.length} B/S, ${out.pair.length} set pasangan, ${out.ord.length} urutan.` + (bad.length ? `\nBaris tidak terbaca: ${bad.join(', ')}` : ''));
            drawPane();
          })));
      }
    }
    drawTabs(); drawPane();

    const save = () => {
      const n = normalize(d);
      if (!clean(n.name)) { alert('Nama paket wajib diisi.'); return; }
      if (!n.kelas.length) { alert('Pilih minimal satu kelas.'); return; }
      if (!n.mc.length && !n.tf.length && !n.pair.length) { alert('Tambahkan minimal satu soal (PG, Benar/Salah, atau Pasangan).'); return; }
      const dup = sets.find(x => x.name.toLowerCase() === n.name.toLowerCase() && x.id !== n.id);
      if (dup) { alert('Sudah ada paket dengan nama yang sama. Gunakan nama lain.'); return; }
      const i = sets.findIndex(x => x.id === n.id);
      if (i >= 0) sets[i] = n; else sets.push(n);
      persist(); list(api);
    };
    const tips = h('div', { class: 'guru-tips' },
      '💡 Saran: minimal 10 soal PG agar game tidak cepat berulang. Pasangan dipakai di Cocok Kilat & Kartu Ingat, Urutan di Panjat Pinang, jawaban satu kata di Tebak Kata. Jika format tertentu kosong, game memakai soal PG/BS sebagai gantinya.');
    root.append(h('div', { class: 'guru-cols' }, h('div', { class: 'guru-left' }, meta, tips, h('div', { class: 'row' }, api.btn('💾 Simpan paket', 'green big-ish', save), api.btn('Batal', 'white', () => list(api)))),
      h('div', { class: 'guru-right' }, tabs, pane)));
    api.show(api.menu(src ? 'Ubah Paket Soal' : 'Buat Paket Soal', ['Bank Soal Guru'], () => list(api), root));
  }

  return { list, count: () => sets.length, sets: () => sets };
})();
