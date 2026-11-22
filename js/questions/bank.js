/* ============================================================
   BANK SOAL – registri
   Format tiap paket (QB.add):
   {
     kelas:  [daftar kelas],            // mis. [1,2] = Fase A
     mapel:  "Nama Mata Pelajaran",
     elemen: "Elemen CP yang dicakup",  // ditampilkan di menu
     mc:   [ ["Soal", "Jawaban benar", "pengecoh1", "pengecoh2", "pengecoh3"], ... ],
     tf:   [ ["Pernyataan", true/false], ... ],
     pair: [ [ ["kiri","kanan"], ... 4–5 pasangan ], ... ],
     ord:  [ ["Instruksi", ["urutan1","urutan2", ...]], ... ]  // urutan benar
   }
   Guru dapat menambah paket baru di file sd.js / smp.js / smk.js.
   ============================================================ */
const QB = (() => {
  const banks = [];
  const MAPEL_INFO = {
    'Matematika':           { icon: '🔢', c: ['#ff9f1c', '#f3722c'] },
    'Bahasa Indonesia':     { icon: '📖', c: ['#ef476f', '#c9184a'] },
    'Pendidikan Pancasila': { icon: '🦅', c: ['#e63946', '#9d0208'] },
    'IPAS':                 { icon: '🌱', c: ['#43aa8b', '#2d6a4f'] },
    'IPA':                  { icon: '🔬', c: ['#06d6a0', '#118a7e'] },
    'IPS':                  { icon: '🌏', c: ['#f8961e', '#bc6c25'] },
    'Bahasa Inggris':       { icon: '🔤', c: ['#4361ee', '#3a0ca3'] },
    'Koding & KA':          { icon: '🤖', c: ['#7209b7', '#3c096c'] },
    'Informatika':          { icon: '💻', c: ['#4895ef', '#3f37c9'] },
    'Informatika & KA':     { icon: '💻', c: ['#4895ef', '#3f37c9'] },
    'Projek IPAS':          { icon: '🧪', c: ['#2a9d8f', '#1d6f65'] },
    'K3 & Budaya Kerja':    { icon: '⛑️', c: ['#f9c74f', '#e09f3e'] },
    'Sejarah':              { icon: '🏛️', c: ['#b5838d', '#6d597a'] },
    'PJOK':                 { icon: '⚽', c: ['#38b000', '#007200'] },
    'Seni Budaya':          { icon: '🎨', c: ['#f15bb5', '#9b5de5'] },
    'PKK (Kewirausahaan)':  { icon: '💼', c: ['#ff9f1c', '#bc4749'] },
    'PA Islam':             { icon: '🕌', c: ['#2d6a4f', '#1b4332'] },
    'PA Kristen':           { icon: '✝️', c: ['#3a86ff', '#1d3557'] },
    'PA Katolik':           { icon: '⛪', c: ['#5e60ce', '#3a0ca3'] },
    'PA Hindu':             { icon: '🛕', c: ['#f77f00', '#d62828'] },
    'PA Buddha':            { icon: '☸️', c: ['#e9c46a', '#e76f51'] },
    'PA Khonghucu':         { icon: '🏮', c: ['#d00000', '#9d0208'] },
    'Fisika':               { icon: '⚛️', c: ['#4361ee', '#3a0ca3'] },
    'Kimia':                { icon: '⚗️', c: ['#06d6a0', '#118a7e'] },
    'Biologi':              { icon: '🧬', c: ['#52b788', '#1b4332'] },
    'Ekonomi':              { icon: '📈', c: ['#f8961e', '#bc6c25'] },
    'Sosiologi':            { icon: '👥', c: ['#e76f51', '#9d0208'] },
    'Geografi':             { icon: '🗺️', c: ['#2a9d8f', '#264653'] },
    'Antropologi':          { icon: '🏺', c: ['#b08968', '#7f5539'] },
    "Al-Qur'an Hadis":      { icon: '📗', c: ['#2d6a4f', '#1b4332'] },
    'Akidah Akhlak':        { icon: '🤲', c: ['#40916c', '#1b4332'] },
    'Fikih':                { icon: '🕌', c: ['#52b788', '#2d6a4f'] },
    'Sejarah Kebudayaan Islam': { icon: '🏛️', c: ['#74c69d', '#2d6a4f'] },
    'Bahasa Arab':          { icon: '🔠', c: ['#95d5b2', '#40916c'] },
    'Campuran':             { icon: '🎲', c: ['#ff5e9c', '#8338ec'] }
  };
  const ELEMEN_MTK = {
    1: 'Bilangan sampai 20, penjumlahan & pengurangan', 2: 'Bilangan sampai 100, perkalian dasar',
    3: 'Perkalian, pembagian, bilangan ribuan', 4: 'Pecahan senilai, keliling & luas, pembulatan',
    5: 'Pecahan, desimal, KPK & FPB, luas segitiga', 6: 'Persen, kuadrat & akar, volume',
    7: 'Bilangan bulat, persamaan linear, perbandingan', 8: 'Fungsi, gradien, Pythagoras',
    9: 'Perpangkatan, bangun ruang, statistika', 10: 'Eksponen, logaritma, SPLDV',
    11: 'Barisan & deret, fungsi kuadrat', 12: 'Peluang, statistika, kaidah pencacahan'
  };

  const ELEMEN_MTK_SMA = {
    10: 'Eksponen, logaritma, barisan, fungsi kuadrat, trigonometri dasar',
    11: 'Komposisi fungsi, matriks, vektor, trigonometri, peluang',
    12: 'Limit, turunan, integral, matriks, statistika'
  };

  function add(def) { banks.push(def); }

  /* ---- format teks per BAB (dipakai file js/questions/bab-*.js) ----
     % 10,11            → kelas untuk bab berikutnya
     ## Nama Bab        → paket baru (= satu bab, bisa dipilih guru)
     @ kata kerja | awalan   → mulai blok fakta (default "adalah")
     istilah = keterangan    → 1 fakta → 2 PG + 2 B/S + bahan pasangan
     PG: / BS: / PS: / UR:   → soal biasa (format Tempel Cepat)
     Pengecoh diambil dari fakta lain dalam blok yang sama, jadi isi blok harus sejenis. */
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const shuf = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  // kalimat tanya arah "keterangan → istilah"
  function askA(V, P, d) {
    if (/^The /.test(P)) return V === 'is' ? `${cap(d)} is called...` : `${P} that ${V} ${d} is...`;
    if (V === 'is') return `${cap(d)} is called...`;
    if (V === 'adalah') return `${cap(d)} adalah...`;
    if (/^adalah /.test(V)) return `${cap(V.slice(7))} ${d} adalah...`;   // "adalah surah ke" → "Surah ke 1 adalah..."
    if (!P) return `Yang ${V} ${d} adalah...`;
    return /\byang$/i.test(P) ? `${P} ${V} ${d} adalah...` : `${P} yang ${V} ${d} adalah...`;
  }
  function expandBlock(blk, out) {
    const f = blk.rows; if (f.length < 4) { f.forEach(([t, d]) => out.tf.push([`${t} ${blk.v} ${d}`, true])); return; }
    const V = blk.v, P = blk.p;
    // pengecoh: jangan ambil baris yang juga benar (keterangan/istilah sama → jawaban ganda)
    const others = (i, k) => shuf(f.filter((r, j) => j !== i && r[1 - k] !== f[i][1 - k]).map(r => r[k]).filter(x => x !== f[i][k])).filter((x, j, a) => a.indexOf(x) === j).slice(0, 3);
    f.forEach(([t, d], i) => {
      out.mc.push([askA(V, P, d), t, ...others(i, 0)]);
      out.mc.push([`${t} ${V}...`, d, ...others(i, 1)]);
      out.tf.push([`${t} ${V} ${d}`, true]);
      const wrong = others(i, 1)[0]; if (wrong) out.tf.push([`${t} ${V} ${wrong}`, false]);
    });
    const shortRows = f.filter(([t, d]) => t.length <= 34 && d.length <= 40);
    const seenR = new Set();
    const uniq = shortRows.filter(r => !seenR.has(r[1]) && seenR.add(r[1]));
    for (let i = 0; i + 3 <= uniq.length; i += 4) { const set = uniq.slice(i, i + 4); if (set.length >= 3) out.pair.push(set.map(r => [r[0], r[1]])); }
  }
  function text(meta, src) {
    let kelas = meta.kelas || [], cur = null, blk = null;
    const flush = () => { if (blk && cur) expandBlock(blk, cur); blk = null; };
    const close = () => { flush(); if (cur && (cur.mc.length + cur.tf.length + cur.pair.length + cur.ord.length)) banks.push(cur); cur = null; };
    const open = name => { close(); cur = { jenjang: meta.jenjang, kelas: kelas.slice(), mapel: meta.mapel, elemen: name, bab: 1, mc: [], tf: [], pair: [], ord: [] }; if (!cur.jenjang) delete cur.jenjang; };
    src.split(/\r?\n/).forEach(line => {
      const L = line.trim(); if (!L || L.startsWith('//')) return;
      if (L[0] === '%') { kelas = (L.match(/\d+/g) || []).map(Number); if (cur) { close(); } return; }
      if (L.startsWith('##')) { open(L.replace(/^#+\s*/, '')); return; }
      if (!cur) open(meta.bab || meta.mapel);
      if (L[0] === '@') { flush(); const [v, p] = L.slice(1).split('|').map(s => s.trim()); blk = { v: v || 'adalah', p: p || '', rows: [] }; return; }
      const m = L.match(/^(PG|BS|PS|UR)\s*:\s*(.+)$/);
      if (m) {
        const body = m[2];
        if (m[1] === 'PG') cur.mc.push(body.split('|').map(s => s.trim()).filter(Boolean));
        else if (m[1] === 'BS') { const p = body.split('|').map(s => s.trim()); cur.tf.push([p[0], /^b/i.test(p[1] || '')]); }
        else if (m[1] === 'PS') cur.pair.push(body.split(';').map(x => x.split('=').map(s => s.trim())).filter(x => x[0] && x[1]));
        else { const p = body.split('|'); cur.ord.push([p[0].trim(), p[1].split(';').map(s => s.trim()).filter(Boolean)]); }
        return;
      }
      const eq = L.indexOf(' = ');
      if (eq > 0) { if (!blk) blk = { v: 'adalah', p: '', rows: [] }; blk.rows.push([L.slice(0, eq).trim(), L.slice(eq + 3).trim()]); }
    });
    close();
  }

  /* jenjang aktif (SD/SMP/SMA/SMK): paket bertanda `jenjang` hanya muncul di jenjang itu,
     paket tanpa tanda berlaku untuk semua jenjang pada kelas yang sama */
  let curJ = null;
  function setJenjang(j) { curJ = j; }
  function jenjang() { return curJ; }
  // MA (Madrasah Aliyah) juga memakai paket SMA (peminatan, Matematika SMA, dll.)
  const INCLUDES = { MA: ['MA', 'SMA'] };
  const MADRASAH = ['MI', 'MTs', 'MA'];
  const okJ = b => !b.jenjang || !curJ || (INCLUDES[curJ] || [curJ]).includes(b.jenjang);
  // di madrasah, PA umum diganti mapel rumpun PAI (Al-Qur'an Hadis, Akidah Akhlak, Fikih, SKI)
  const okMapel = m => !(MADRASAH.includes(curJ) && /^PA /.test(m));

  /* ---- filter materi/bab: guru memilih bab yang SUDAH diajarkan ----
     topik = elemen tiap paket; pilihan disimpan per jenjang+kelas+mapel */
  const TKEY = 'aj_topics';
  let topicSel = {};
  try { topicSel = JSON.parse(localStorage.getItem(TKEY)) || {}; } catch (e) { topicSel = {}; }
  const tk = (k, m) => (curJ || '') + '|' + k + '|' + m;
  function selTopics(kelas, mapel) { const v = topicSel[tk(kelas, mapel)]; return Array.isArray(v) && v.length ? v : null; }
  function setTopics(kelas, mapel, arr) {
    if (arr && arr.length) topicSel[tk(kelas, mapel)] = arr; else delete topicSel[tk(kelas, mapel)];
    try { localStorage.setItem(TKEY, JSON.stringify(topicSel)); } catch (e) {}
  }
  const size = b => (b.mc || []).length + (b.tf || []).length + (b.pair || []).length + (b.ord || []).length;
  function topics(kelas, mapel) {
    if (mapel === 'Matematika') return typeof MathGen !== 'undefined' ? MathGen.topics(kelas) : [];
    const map = new Map();
    banks.forEach(b => {
      if (b.mapel !== mapel || !b.kelas.includes(kelas) || !okJ(b)) return;
      const id = b.elemen || 'Umum', o = map.get(id) || { id, n: 0, legacy: !b.bab };
      o.n += size(b); if (b.bab) o.legacy = false; map.set(id, o);
    });
    // paket per bab dulu, paket ringkasan (campuran beberapa bab) di akhir
    const all = [...map.values()];
    return [...all.filter(t => !t.legacy), ...all.filter(t => t.legacy)].map(t => ({ ...t, label: t.legacy && all.some(x => !x.legacy) ? 'Ringkasan campuran: ' + t.id : t.id }));
  }

  function get(kelas, mapel, all) {
    const out = { mc: [], tf: [], pair: [], ord: [], elemen: [] };
    const sel = all ? null : selTopics(kelas, mapel);
    banks.forEach(b => {
      if (b.mapel !== mapel || !b.kelas.includes(kelas) || !okJ(b)) return;
      if (sel && !sel.includes(b.elemen || 'Umum')) return;
      ['mc', 'tf', 'pair', 'ord'].forEach(k => { if (b[k]) out[k].push(...b[k]); });
      if (b.elemen) out.elemen.push(b.elemen);
    });
    return out;
  }

  function mapelFor(kelas) {
    const set = [];
    banks.forEach(b => { if (b.kelas.includes(kelas) && okJ(b) && okMapel(b.mapel) && !set.includes(b.mapel)) set.push(b.mapel); });
    return ['Matematika', ...set, 'Campuran'];
  }

  function info(mapel) {
    if (isCustom(mapel)) return { icon: '✏️', c: ['#ffbe0b', '#fb5607'] };
    if (String(mapel).startsWith('Kejuruan')) return { icon: '🛠️', c: ['#6c757d', '#343a40'] };
    if (/^Bahasa (Jawa|Sunda)/.test(mapel)) return { icon: '🗣️', c: ['#a68a64', '#582f0e'] };
    if (mapel === 'Koding & KA' ) return MAPEL_INFO['Koding & KA'];
    return MAPEL_INFO[mapel] || { icon: '📚', c: ['#888', '#555'] };
  }

  /* ---- paket soal buatan guru ---- */
  const CUSTOM_PREFIX = '📝 ';
  function isCustom(mapel) { return String(mapel).startsWith(CUSTOM_PREFIX); }
  function setCustom(list) {
    for (let i = banks.length - 1; i >= 0; i--) if (banks[i].custom) banks.splice(i, 1);
    (list || []).forEach(s => banks.push({
      custom: true, kelas: s.kelas, mapel: CUSTOM_PREFIX + s.name, elemen: `Soal buatan guru${s.author ? ' · ' + s.author : ''}`,
      mc: s.mc || [], tf: s.tf || [], pair: s.pair || [], ord: s.ord || []
    }));
  }

  function elemen(kelas, mapel) {
    if (mapel === 'Matematika') return ((curJ === 'SMA' || curJ === 'MA') && ELEMEN_MTK_SMA[kelas]) || ELEMEN_MTK[kelas] || '';
    if (mapel === 'Campuran') return 'Soal acak dari semua mata pelajaran';
    const el = get(kelas, mapel, true).elemen;
    return el.length > 3 ? el.slice(0, 3).join(' · ') + ` · +${el.length - 3} bab` : el.join(' · ');
  }

  function count(kelas, mapel) {
    if (mapel === 'Matematika' || mapel === 'Campuran') return '∞';
    const b = get(kelas, mapel);
    return b.mc.length + b.tf.length + b.pair.length + b.ord.length;
  }

  function fase(k) { return k <= 2 ? 'A' : k <= 4 ? 'B' : k <= 6 ? 'C' : k <= 9 ? 'D' : k === 10 ? 'E' : 'F'; }

  /* ---- build terenkode: kunci jawaban tidak tampil sebagai teks biasa ---- */
  const KEYSTR = 'ArenaJuara#2026';
  function xor(bytes) { const k = new TextEncoder().encode(KEYSTR); return bytes.map((b, i) => b ^ k[i % k.length] ^ (i * 7 & 255)); }
  function dump() { return JSON.stringify(banks.filter(b => !b.custom)); }
  function load(b64) {
    const raw = atob(b64); const bytes = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
    JSON.parse(new TextDecoder().decode(xor(bytes))).forEach(b => banks.push(b));
  }
  function encode(json) { // dipakai oleh tools/build.js (Node)
    const bytes = xor(new TextEncoder().encode(json));
    let s = ''; bytes.forEach(b => s += String.fromCharCode(b)); return btoa(s);
  }

  return { add, text, get, mapelFor, info, elemen, count, fase, setCustom, isCustom, CUSTOM_PREFIX, dump, load, encode, setJenjang, jenjang, topics, selTopics, setTopics };
})();
