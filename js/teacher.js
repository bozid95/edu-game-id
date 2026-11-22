/* ============================================================
   BANK SOAL GURU – guru membuat paket soal sendiri
   Disimpan di perangkat (localStorage) + ekspor/impor file .json
   ============================================================ */
const Guru = (() => {
  const { h } = E, tap = E.press;
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
      if (/^(NAMA|KELAS|GURU)\s*:/i.test(L)) return; // baris info paket (templat .txt)
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
    const isTxt = typeof data === 'string';
    const blob = new Blob([isTxt ? '﻿' + data : JSON.stringify(data, null, 2)], { type: isTxt ? 'text/plain;charset=utf-8' : 'application/json' });
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
            const { out, bad } = parseQuick(txt.replace(/^﻿/, ''));
            // baris opsional di templat: "NAMA: ...", "KELAS: 4, 5", "GURU: ..."
            const meta = k => { const m = txt.match(new RegExp('^\\s*' + k + '\\s*:\\s*(.+)$', 'im')); return m ? clean(m[1]) : ''; };
            const kelas = (meta('KELAS').match(/\d+/g) || []).map(Number);
            sets.push(normalize({ name: meta('NAMA') || f.name.replace(/\.txt$/i, ''), author: meta('GURU'), kelas, ...out })); added = 1;
            if (bad.length) alert(`Catatan: baris ${bad.join(', ')} tidak terbaca dan dilewati. Periksa awalan PG:/BS:/PS:/UR: pada baris tersebut.`);
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

  /* ---------- templat & panduan ---------- */
  const TEMPLATE = [
    '# ===== TEMPLAT SOAL ARENA JUARA =====',
    '# Baris yang diawali tanda # adalah catatan dan tidak dibaca.',
    '# Isi 3 baris info di bawah, lalu ganti contoh soal dengan soal Anda.',
    '# Simpan sebagai .txt (Notepad: File > Save As > Encoding UTF-8), lalu Impor File di Bank Soal Guru.',
    '',
    'NAMA: Ekosistem Kelas 5',
    'KELAS: 5',
    'GURU: Bu Sari',
    '',
    '# --- PILIHAN GANDA ---  PG: soal | jawaban BENAR | pengecoh 1 | pengecoh 2 | pengecoh 3',
    'PG: Makhluk hidup yang dapat membuat makanan sendiri disebut... | Produsen | Konsumen | Pengurai | Predator',
    'PG: Contoh hewan pemakan tumbuhan adalah... | Kambing | Harimau | Elang | Ular',
    'PG: Jamur dan bakteri dalam ekosistem berperan sebagai... | Pengurai | Produsen | Konsumen | Pemangsa',
    '',
    '# --- BENAR / SALAH ---  BS: pernyataan | B   (atau S)',
    'BS: Tumbuhan hijau termasuk produsen | B',
    'BS: Harimau termasuk herbivora | S',
    '',
    '# --- PASANGAN (3-5 pasang per baris) ---  PS: kiri = kanan ; kiri = kanan ; ...',
    'PS: Produsen = Padi ; Konsumen I = Tikus ; Konsumen II = Ular ; Pengurai = Jamur',
    '',
    '# --- URUTAN (2-6 langkah, tulis sesuai urutan BENAR) ---  UR: instruksi | langkah 1 ; langkah 2 ; ...',
    'UR: Urutkan rantai makanan | Padi ; Tikus ; Ular ; Elang',
    ''
  ].join('\n');

  function guide(api, back) {
    const sec = (ic, title, ...body) => h('section', { class: 'gd-sec' }, h('h3', {}, ic + ' ' + title), ...body);
    const p = t => h('p', {}, t);
    const ul = items => h('ul', {}, items.map(t => h('li', {}, t)));
    const ol = items => h('ol', {}, items.map(t => h('li', {}, t)));
    const code = t => h('pre', { class: 'help' }, t);
    const tbl = (head, rows) => h('table', { class: 'gd-tbl' }, h('tr', {}, head.map(x => h('th', {}, x))), rows.map(r => h('tr', {}, r.map(x => h('td', {}, x)))));
    const nav = h('div', { class: 'gd-nav' });
    const body = h('div', { class: 'gd' }, nav,
      sec('🚀', 'Langkah cepat (5 menit)', ol([
        'Di beranda, ketuk 📝 Bank Soal Guru → ➕ Buat Paket Soal.',
        'Isi Nama paket (mis. “Ekosistem Kelas 5”), nama Anda, lalu pilih kelas. Boleh lebih dari satu kelas.',
        'Tambah soal lewat tab 🅰 Pilihan Ganda, ✔✘ Benar/Salah, 🧩 Pasangan, 🔢 Urutan, atau tempel sekaligus di ⚡ Tempel Cepat.',
        'Ketuk 💾 Simpan paket.',
        'Ketuk ▶ Main pada kartu paket, pilih game, atur waktu & target, lalu MULAI.',
        'Paket juga muncul sebagai mapel ✏️ di bagian “Guru & Campuran” saat memilih jenjang → kelas yang sesuai.'
      ])),
      sec('🧩', 'Empat jenis soal & game yang memakainya',
        tbl(['Jenis', 'Isi', 'Dipakai di game'], [
          ['🅰 Pilihan Ganda', 'Soal + 1 jawaban benar + 1–3 pengecoh. Pilihan diacak otomatis.', 'Tarik Tambang, Balap Karung, Tangkap Gelembung, Ular Tangga, XOX, Pukul Tikus, Cerdas Cermat, Menara'],
          ['✔✘ Benar/Salah', 'Pernyataan + kunci Benar atau Salah.', 'Bom Waktu, Cerdas Cermat, Menara'],
          ['🧩 Pasangan', '1 set = 3–5 pasang (istilah ↔ arti). Isi kanan tidak boleh kembar.', 'Cocok Kilat, Kartu Ingat'],
          ['🔢 Urutan', 'Instruksi + 2–6 langkah ditulis sesuai urutan BENAR. Game yang mengacak.', 'Panjat Pinang'],
          ['🎈 (otomatis)', 'Soal PG yang jawabannya SATU kata huruf saja (3–12 huruf, tanpa spasi/angka).', 'Tebak Kata Balon']
        ]),
        p('Tidak wajib mengisi semua jenis. Jika satu jenis kosong, game memakai pengganti: Benar/Salah dibuat dari PG, pasangan dibuat dari PG berjawaban pendek, dan sebaliknya. Agar hasilnya paling bagus, isi jenis yang sesuai game yang ingin dimainkan.')),
      sec('⚡', 'Tempel Cepat: menyiapkan soal di Word / Excel / Notepad',
        p('Satu soal per baris, diawali kode jenisnya. Pemisah: | (garis tegak) antarbagian, ; (titik koma) antarpasangan/langkah, = untuk pasangan kiri–kanan.'),
        code('PG: Ibu kota Jawa Barat adalah... | Bandung | Semarang | Surabaya | Serang\n' +
          'BS: Matahari terbit dari timur | B\n' +
          'BS: Ikan bernapas dengan paru-paru | S\n' +
          'PS: Akar = menyerap air ; Daun = fotosintesis ; Batang = menopang\n' +
          'UR: Urutkan daur air | Penguapan ; Pengembunan ; Hujan\n' +
          '# baris catatan diawali # tidak dibaca'),
        ul([
          'PG: bagian kedua SELALU jawaban benar. Urutan pilihan di layar diacak, jadi tidak perlu khawatir jawaban selalu di posisi A.',
          'BS: tulis B / Benar / Ya untuk benar; selain itu dianggap salah.',
          'Tombol ✅ Terapkan MENGGANTI semua soal di paket dengan isi kotak. Isi kotak sudah berisi soal lama, jadi cukup tambahkan baris baru di bawahnya.',
          'Setelah Terapkan muncul ringkasan jumlah soal terbaca dan nomor baris yang salah format.',
          'Tanda | dan ; jangan dipakai di dalam teks soal.'
        ]),
        h('p', {}, h('b', {}, 'Excel: '), 'buat kolom A = Soal, B = Jawaban benar, C–E = Pengecoh. Di kolom F ketik rumus ',
          h('code', {}, '="PG: "&A2&" | "&B2&" | "&C2&" | "&D2&" | "&E2'), ', tarik ke bawah, salin kolom F, lalu tempel ke kotak Tempel Cepat.'),
        h('p', {}, h('b', {}, 'File templat: '), 'ketuk 📄 Unduh Templat .txt di bawah, isi di Notepad (baris NAMA:, KELAS:, GURU: ikut terbaca), simpan, lalu ', h('b', {}, '📂 Impor File'), '. Paket langsung jadi tanpa mengetik ulang di TV.')),
      sec('✅', 'Tips membuat soal yang seru dan adil', ul([
        'Jumlah ideal per paket: minimal 15–20 PG dan 10 Benar/Salah. Satu ronde game memakai 10–40 soal; soal yang kurang akan diulang.',
        'Tulis singkat (maks. ±120 huruf) agar terbaca dari belakang kelas dan cepat dijawab saat balapan.',
        'Pengecoh harus masuk akal dan sejenis dengan jawaban (semua nama kota, semua angka, dll.), dengan panjang yang mirip.',
        'Hindari pilihan “semua benar” atau “A dan B”, karena pilihan diacak.',
        'Benar/Salah: buat seimbang antara pernyataan benar dan salah; hindari kata mutlak seperti “selalu/tidak pernah” yang mudah ditebak.',
        'Pasangan: isi kiri dan kanan pendek (1–4 kata), karena tampil sebagai kartu.',
        'Untuk Tebak Kata, buat beberapa PG yang jawabannya satu kata, mis. “Organ pemompa darah adalah...” → JANTUNG.',
        'Pakai kata kerja HOTS sesekali (bandingkan, simpulkan, mengapa) agar tidak sekadar hafalan, selaras Pembelajaran Mendalam.'
      ])),
      sec('💾', 'Menyimpan, mencadangkan, memindahkan', ul([
        'Paket tersimpan otomatis di browser TV/laptop ini. Membersihkan data browser atau memakai mode Incognito akan menghapusnya.',
        '💾 Ekspor Semua = cadangan semua paket ke satu file .json (simpan di flashdisk/Drive). Ikon 💾 di kartu = ekspor satu paket.',
        'Di perangkat lain: buka Arena Juara → Bank Soal Guru → 📂 Impor File → pilih file .json atau .txt.',
        'Impor paket yang sama dua kali akan memperbarui paket lama, tidak menggandakan.',
        'Berbagi antarguru: kirim file .json lewat WhatsApp/Drive, guru lain tinggal Impor.'
      ])),
      sec('❓', 'Masalah yang sering terjadi',
        tbl(['Masalah', 'Penyebab & solusi'], [
          ['Tombol ▶ Main tidak muncul', 'Paket belum memilih kelas atau belum berisi soal. Ketuk ✏️ Ubah.'],
          ['Paket tidak muncul di daftar mapel', 'Pilih kelas yang sama dengan kelas paket. Paket ada di kelompok “Guru & Campuran”.'],
          ['Baris tidak terbaca di Tempel Cepat', 'Awalan harus PG:, BS:, PS:, atau UR: diikuti teks. PG perlu minimal soal | jawaban. PS minimal 2 pasang dengan tanda =.'],
          ['Panjat Pinang memakai soal lain', 'Paket belum punya soal Urutan, sehingga diambil soal urutan bawaan/otomatis. Tambahkan soal di tab 🔢 Urutan.'],
          ['Huruf aneh (Ã©, â€) setelah impor .txt', 'Simpan file .txt dengan Encoding UTF-8.'],
          ['Soal hilang setelah browser diperbarui/dibersihkan', 'Impor kembali file cadangan .json. Biasakan Ekspor setelah membuat soal.'],
          ['Butuh bantuan, soal bawaan keliru, atau ingin fitur baru?', 'Ketuk tombol hijau 💬 Hubungi Kami di pojok kanan bawah untuk mengirim pesan WhatsApp.']
        ]))
    );
    // navigasi cepat antarbagian
    body.querySelectorAll('.gd-sec').forEach(s => {
      const b = h('button', { class: 'chip wide' }, s.querySelector('h3').textContent);
      tap(b, () => s.scrollIntoView({ behavior: 'smooth', block: 'start' })); nav.append(b);
    });
    body.append(h('div', { class: 'row gd-foot' },
      api.btn('📄 Unduh Templat .txt', 'blue', () => download('templat-soal-arena-juara.txt', TEMPLATE)),
      api.btn('➕ Buat Paket Soal', 'green', () => editor(api, null)),
      api.btn('◀ Kembali', 'white', back)));
    api.show(api.menu('Panduan Membuat Soal', ['Bank Soal Guru'], back, body));
  }

  /* ---------- layar daftar paket ---------- */
  function list(api) {
    const wrap = h('div', { class: 'guru' });
    const bar = h('div', { class: 'guru-bar' },
      api.btn('➕ Buat Paket Soal', 'green', () => editor(api, null)),
      api.btn('📂 Impor File', 'blue', () => importFile(() => list(api))),
      api.btn('📘 Panduan', 'white', () => guide(api, () => list(api))),
      api.btn('📄 Templat .txt', 'white', () => download('templat-soal-arena-juara.txt', TEMPLATE)),
      sets.length ? api.btn('💾 Ekspor Semua', 'white', () => download('arena-juara-soal-guru.json', { app: 'Arena Juara', versi: 1, paket: sets })) : null);
    wrap.append(bar);
    if (!sets.length) {
      wrap.append(h('div', { class: 'guru-empty' }, h('div', { class: 'big-ic' }, '📝'),
        h('h3', {}, 'Belum ada paket soal buatan guru'),
        h('p', {}, 'Buat paket soal sendiri sesuai materi di kelas Anda. Paket yang dibuat akan muncul sebagai mata pelajaran baru (✏️) dan dapat dimainkan di semua game.'),
        h('div', { class: 'row', style: 'justify-content:center;margin-top:2vh' }, api.btn('📘 Baca Panduan dulu', 'blue', () => guide(api, () => list(api))))));
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
      ...[['SD/MI', [1, 2, 3, 4, 5, 6]], ['SMP/MTs', [7, 8, 9]], ['SMA/MA/SMK', [10, 11, 12]]].map(([l, ks]) => {
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
    root.append(h('div', { class: 'guru-cols' }, h('div', { class: 'guru-left' }, meta, tips, h('div', { class: 'row' }, api.btn('💾 Simpan paket', 'green big-ish', save), api.btn('📘 Panduan', 'white small', () => guide(api, () => editor(api, d))), api.btn('Batal', 'white', () => list(api)))),
      h('div', { class: 'guru-right' }, tabs, pane)));
    api.show(api.menu(src ? 'Ubah Paket Soal' : 'Buat Paket Soal', ['Bank Soal Guru'], () => list(api), root));
  }

  return { list, count: () => sets.length, sets: () => sets };
})();
