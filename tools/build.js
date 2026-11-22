/* ============================================================
   BUILD TERENKODE – membuat folder dist/ untuk dipasang di TV kelas.
   Bank soal (sd.js, smp.js, ... agama.js) digabung lalu dienkode,
   sehingga kunci jawaban tidak terbaca langsung lewat Inspect/View Source.
   Jalankan:  node tools/build.js
   ============================================================ */
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..'), DIST = path.join(ROOT, 'dist');
const BANK_FILES = ['sd.js', 'smp.js', 'smk.js', 'sd-ext.js', 'smp-ext.js', 'smk-ext.js', 'agama.js', 'lainnya.js'];

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
fs.rmSync(DIST, { recursive: true, force: true });
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
fs.writeFileSync(path.join(DIST, 'js', 'questions', 'data.js'), `/* bank soal terenkode – sumber asli ada di folder proyek */\nQB.load("${enc}");\n`);
let html = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
BANK_FILES.forEach((f, i) => {
  html = html.replace(new RegExp(`<script src="js/questions/${f.replace('.', '\\.')}"></script>\\n?`), i === 0 ? '<script src="js/questions/data.js"></script>\n' : '');
});
fs.writeFileSync(path.join(DIST, 'index.html'), html);

const n = JSON.parse(json).reduce((s, b) => s + (b.mc || []).length + (b.tf || []).length + (b.pair || []).length + (b.ord || []).length, 0);
console.log(`dist/ siap: ${JSON.parse(json).length} paket, ${n} butir soal (terenkode, ${Math.round(enc.length / 1024)} KB)`);
