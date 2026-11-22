/* ============================================================
   BUILD TERENKODE – membuat folder dist/ untuk dipasang di TV kelas.
   Bank soal (sd.js, smp.js, ... agama.js) digabung lalu dienkode,
   sehingga kunci jawaban tidak terbaca langsung lewat Inspect/View Source.
   Jalankan:  node tools/build.js
   ============================================================ */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..'), DIST = path.join(ROOT, 'dist');
const BANK_FILES = ['sd.js', 'smp.js', 'smk.js', 'sd-ext.js', 'smp-ext.js', 'smk-ext.js', 'agama.js', 'lainnya.js', 'sma.js', 'mts.js', 'mi-ma.js', 'bab-sma.js', 'bab-atas.js', 'bab-smk.js', 'bab-islam.js', 'bab-islam2.js', 'bab-agama.js', 'bab-smp.js', 'bab-sd.js', 'bab-mulok.js', 'bab-agama2.js', 'bab-tambahan.js'];

// 1) kumpulkan semua bank soal
const sandbox = { TextEncoder, TextDecoder, btoa, atob, console };
vm.createContext(sandbox);
const qdir = path.join(ROOT, 'js', 'questions');
let code = fs.readFileSync(path.join(qdir, 'bank.js'), 'utf8') + '\n;this.QB = QB;\n';
BANK_FILES.forEach(f => { code += fs.readFileSync(path.join(qdir, f), 'utf8') + '\n;\n'; });
vm.runInContext(code, sandbox);
const json = sandbox.QB.dump();
const enc = sandbox.QB.encode(json);

// 2) salin proyek ke dist/ (tanpa file bank soal mentah)
if (fs.existsSync(DIST)) fs.readdirSync(DIST).forEach(n => fs.rmSync(path.join(DIST, n), { recursive: true, force: true })); // kosongkan isi (folder tetap) agar aman bila dist sedang dibuka
function copy(src, dst) {
  const st = fs.statSync(src);
  if (st.isDirectory()) {
    const name = path.basename(src);
    if (['dist', 'tools', '.git', 'node_modules'].includes(name) && src !== ROOT) return;
    fs.mkdirSync(dst, { recursive: true });
    fs.readdirSync(src).forEach(n => copy(path.join(src, n), path.join(dst, n)));
  } else {
    if (path.dirname(src) === qdir && BANK_FILES.includes(path.basename(src))) return;
    fs.copyFileSync(src, dst);
  }
}
copy(ROOT, DIST);

// 3) tulis data terenkode & ganti tag script
fs.writeFileSync(path.join(DIST, 'js', 'questions', 'data.js'), `/* bank soal terenkode – sumber asli ada di folder proyek */\nQB.load(${JSON.stringify(enc)});\n`);
let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
BANK_FILES.forEach((f, i) => {
  html = html.replace(new RegExp(`<script src="js/questions/${f.replace('.', '\\.')}"></script>\\n?`), '');
});
// 4) SEO: alamat situs untuk canonical, Open Graph, robots, dan sitemap
//    Vercel otomatis menyediakan VERCEL_PROJECT_PRODUCTION_URL saat build; bisa juga diisi manual: SITE_URL=https://domainanda.id
const host = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL || '';
const SITE = host ? (/^https?:\/\//.test(host) ? host : 'https://' + host).replace(/\/$/, '') : '';
if (!SITE) console.warn('⚠️  SITE_URL belum diisi: pratinjau gambar link butuh alamat lengkap. Contoh: SITE_URL=https://arenajuara.vercel.app node tools/build.js');
html = html.split('%SITE_URL%').join(SITE);
// bank soal dimuat setelah aplikasi tampil (tidak menghambat halaman awal)
html = html.replace('</body>', '<script>QB.loadAsync("js/questions/data.js")</script>\n</body>');
fs.writeFileSync(path.join(DIST, 'index.html'), html);
const robots = path.join(DIST, 'robots.txt');
fs.writeFileSync(robots, fs.readFileSync(robots, 'utf8').split('%SITE_URL%').join(SITE));
fs.writeFileSync(path.join(DIST, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE}/</loc><lastmod>${new Date().toISOString().slice(0, 10)}</lastmod><changefreq>weekly</changefreq><priority>1.0</priority></url>
</urlset>
`);

// 5) SERVICE WORKER (PWA): simpan semua file aplikasi di perangkat agar bisa dibuka tanpa internet.
//    VERSION = sidik isi file, jadi setiap ada perubahan soal/fitur, perangkat mengunduh versi baru otomatis saat online.
const crypto = require('crypto');
const SKIP = ['sw.js', 'README.md', 'PANDUAN-GURU.md', 'vercel.json', 'robots.txt', 'sitemap.xml', 'og-image.jpg', 'OFL.txt'];
const files = [];
(function walk(dir) {
  fs.readdirSync(dir).forEach(n => {
    const p = path.join(dir, n);
    if (fs.statSync(p).isDirectory()) return walk(p);
    if (!SKIP.includes(n) && !n.startsWith('.')) files.push(path.relative(DIST, p).split(path.sep).join('/'));
  });
})(DIST);
const hash = crypto.createHash('sha1');
files.sort().forEach(f => hash.update(f).update(fs.readFileSync(path.join(DIST, f))));
const VERSION = hash.digest('hex').slice(0, 10);
fs.writeFileSync(path.join(DIST, 'sw.js'), fs.readFileSync(path.join(ROOT, 'tools', 'sw.template.js'), 'utf8')
  .replace('%VERSION%', VERSION).replace('/*FILES*/[]', JSON.stringify(['./', ...files], null, 1)));
console.log(`service worker: versi ${VERSION}, ${files.length} file disimpan untuk offline`);

const n = JSON.parse(json).reduce((s, b) => s + (b.mc || []).length + (b.tf || []).length + (b.pair || []).length + (b.ord || []).length, 0);
console.log(`dist/ siap: ${JSON.parse(json).length} paket, ${n} butir soal (terenkode, ${Math.round(enc.length / 1024)} KB)`);
