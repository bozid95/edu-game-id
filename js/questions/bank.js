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

  function add(def) { banks.push(def); }

  function get(kelas, mapel) {
    const out = { mc: [], tf: [], pair: [], ord: [], elemen: [] };
    banks.forEach(b => {
      if (b.mapel !== mapel || !b.kelas.includes(kelas)) return;
      ['mc', 'tf', 'pair', 'ord'].forEach(k => { if (b[k]) out[k].push(...b[k]); });
      if (b.elemen) out.elemen.push(b.elemen);
    });
    return out;
  }

  function mapelFor(kelas) {
    const set = [];
    banks.forEach(b => { if (b.kelas.includes(kelas) && !set.includes(b.mapel)) set.push(b.mapel); });
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
    if (mapel === 'Matematika') return ELEMEN_MTK[kelas] || '';
    if (mapel === 'Campuran') return 'Soal acak dari semua mata pelajaran';
    return get(kelas, mapel).elemen.join(' · ');
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

  return { add, get, mapelFor, info, elemen, count, fase, setCustom, isCustom, CUSTOM_PREFIX, dump, load, encode };
})();
