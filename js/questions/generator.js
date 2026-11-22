/* ============================================================
   GENERATOR SOAL MATEMATIKA (prosedural, tidak pernah habis)
   Disusun per kelas mengikuti elemen CP Matematika:
   Bilangan, Aljabar, Pengukuran, Geometri, Analisis Data & Peluang
   ============================================================ */
const MathGen = (() => {
  const ri = (a, b) => Math.floor(Math.random() * (b - a + 1)) + a;
  const pick = a => a[Math.floor(Math.random() * a.length)];
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a; };
  const lcm = (a, b) => a / gcd(a, b) * b;
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const SUP = { '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴', '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹', '-': '⁻' };
  const sup = n => String(n).split('').map(c => SUP[c] || c).join('');
  const N = n => n < 0 ? `(−${-n})` : `${n}`;               // bilangan dalam ekspresi
  const sg = n => n < 0 ? `− ${-n}` : `+ ${n}`;             // tanda + / −
  const fmt = n => {
    if (typeof n !== 'number') return n;
    const r = Math.round(n * 100) / 100;
    const s = Number.isInteger(r) ? Math.abs(r).toLocaleString('id-ID') : String(Math.abs(r)).replace('.', ',');
    return (r < 0 ? '−' : '') + s;
  };
  const frac = (n, d) => { const g = gcd(n, d); n /= g; d /= g; return d === 1 ? String(n) : `${n}/${d}`; };

  function near(a) {
    const set = new Set(); const as = fmt(a);
    let c = Number.isInteger(a)
      ? [a + 1, a - 1, a + 2, a - 2, a + 10, a - 10, a + ri(3, 6), a - ri(3, 6), a * 2, Math.round(a / 2), -a]
      : [a + 0.1, a - 0.1, a + 1, a - 1, a * 10, a / 10, a + 0.5, a - 0.5].map(x => Math.round(x * 100) / 100);
    shuffle(c);
    for (const x of c) {
      if (a >= 0 && x < 0) continue;
      const s = fmt(x);
      if (s === as || set.has(s)) continue;
      set.add(s); if (set.size === 3) break;
    }
    let k = 11; while (set.size < 3) { set.add(fmt(a + k)); k += 7; }
    return [...set];
  }
  const fracD = (ans, cands) => [...new Set(cands.filter(x => x !== ans))].slice(0, 3);

  const G = {
    add20() { const a = ri(1, 12), b = ri(1, 20 - a); return { e: `${a} + ${b}`, a: a + b }; },
    sub20() { const a = ri(5, 20), b = ri(1, a); return { e: `${a} − ${b}`, a: a - b }; },
    before() { const n = ri(2, 60); return { q: `Bilangan tepat sebelum ${n} adalah...`, a: n - 1 }; },
    after() { const n = ri(1, 60); return { q: `Bilangan tepat sesudah ${n} adalah...`, a: n + 1 }; },
    count() { const e = pick(['🍎', '⭐', '🐟', '🌸', '⚽']); const n = ri(3, 12); return { q: `Ada berapa? ${e.repeat(n)}`, a: n }; },
    add100() { const a = ri(10, 80), b = ri(2, 99 - a); return { e: `${a} + ${b}`, a: a + b }; },
    sub100() { const a = ri(20, 99), b = ri(2, a - 1); return { e: `${a} − ${b}`, a: a - b }; },
    mul5() { const a = ri(1, 10), b = pick([2, 3, 4, 5]); return { e: `${a} × ${b}`, a: a * b }; },
    mul10() { const a = ri(2, 10), b = ri(2, 10); return { e: `${a} × ${b}`, a: a * b }; },
    div10() { const b = ri(2, 10), a = ri(2, 10); return { e: `${a * b} : ${b}`, a }; },
    add1000() { const a = ri(100, 800), b = ri(50, 999 - a); return { e: `${a} + ${b}`, a: a + b }; },
    sub1000() { const a = ri(300, 999), b = ri(50, a - 50); return { e: `${a} − ${b}`, a: a - b }; },
    mul2d() { const a = ri(11, 99), b = ri(2, 9); return { e: `${a} × ${b}`, a: a * b }; },
    kelilingPP() { const p = ri(4, 15), l = ri(2, p - 1); return { q: `Keliling persegi panjang p = ${p} cm, l = ${l} cm adalah ... cm`, a: 2 * (p + l) }; },
    luasPP() { const p = ri(3, 12), l = ri(2, 10); return { q: `Luas persegi panjang p = ${p} cm, l = ${l} cm adalah ... cm²`, a: p * l }; },
    round10() { let n; do { n = ri(11, 989); } while (n % 10 === 0); return { q: `${n} dibulatkan ke puluhan terdekat adalah...`, a: Math.round(n / 10) * 10 }; },
    fracEq() { const d = pick([2, 3, 4, 5]), n = ri(1, d - 1), k = ri(2, 5); return { q: `${n}/${d} = ... /${d * k}`, a: n * k }; },
    fracAdd() {
      const d = ri(4, 10), a = ri(1, d - 2), b = ri(1, d - a - 1);
      const ans = frac(a + b, d);
      return { e: `${a}/${d} + ${b}/${d}`, a: ans, d: fracD(ans, [`${a + b}/${d * 2}`, `${a + b + 1}/${d}`, `${a * b}/${d}`, `${Math.abs(a - b) || 1}/${d}`, `${a + b}/${d + 1}`]) };
    },
    dec() { const a = ri(1, 50) / 10, b = ri(1, 50) / 10; return { e: `${fmt(a)} + ${fmt(b)}`, a: Math.round((a + b) * 10) / 10 }; },
    kpk() { let a, b; do { a = pick([2, 3, 4, 5, 6, 8, 9, 10, 12]); b = pick([3, 4, 5, 6, 8, 10, 12, 15]); } while (a === b); return { q: `KPK dari ${a} dan ${b} adalah...`, a: lcm(a, b) }; },
    fpb() { let g = ri(2, 9), m, n; do { m = ri(1, 6); n = ri(1, 6); } while (m === n || gcd(m, n) !== 1); return { q: `FPB dari ${g * m} dan ${g * n} adalah...`, a: g }; },
    luasSeg() { const al = ri(2, 12) * 2, t = ri(2, 12); return { q: `Luas segitiga dengan alas ${al} cm dan tinggi ${t} cm adalah ... cm²`, a: al * t / 2 }; },
    persen() { let p, n; do { p = pick([10, 20, 25, 50, 75]); n = pick([20, 40, 60, 80, 100, 120, 200, 400]); } while ((p * n) % 100); return { q: `${p}% dari ${n} adalah...`, a: p * n / 100 }; },
    kuadrat() { const n = ri(2, 20); return { e: `${n}²`, a: n * n }; },
    akar() { const n = ri(2, 15); return { e: `√${n * n}`, a: n }; },
    volKubus() { const s = ri(2, 10); return { q: `Volume kubus dengan rusuk ${s} cm adalah ... cm³`, a: s ** 3 }; },
    volBalok() { const p = ri(2, 10), l = ri(2, 8), t = ri(2, 6); return { q: `Volume balok ${p} cm × ${l} cm × ${t} cm adalah ... cm³`, a: p * l * t }; },
    negAdd() { const a = ri(-20, 20), b = ri(-20, -1); return { e: `${a} + ${N(b)}`, a: a + b }; },
    negSub() { const a = ri(-15, 15), b = ri(-15, -1); return { e: `${a} − ${N(b)}`, a: a - b }; },
    negMul() { let a, b; do { a = ri(-9, 9); b = ri(-9, 9); } while (!a || !b || (a > 0 && b > 0)); return { e: `${N(a)} × ${N(b)}`, a: a * b }; },
    linEq() { const x = ri(-6, 12), a = ri(2, 9), b = ri(-15, 15) || 3, c = a * x + b; return { q: `Jika ${a}x ${sg(b)} = ${c}, maka x = ...`, a: x }; },
    perbandingan() { const m = ri(1, 5), n = ri(1, 5), k = ri(2, 8); return { q: `Perbandingan kelereng A : B = ${m} : ${n}. Jika jumlahnya ${(m + n) * k}, banyak kelereng A adalah...`, a: m * k }; },
    pyth() { const [a, b, c] = pick([[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15], [12, 16, 20], [20, 21, 29]]); return { q: `Segitiga siku-siku dengan sisi tegak ${a} cm dan ${b} cm. Panjang sisi miringnya ... cm`, a: c }; },
    fx() { const a = ri(2, 6), b = ri(-10, 10) || 1, x = ri(-5, 5); return { q: `f(x) = ${a}x ${sg(b)}. Nilai f(${x}) = ...`, a: a * x + b }; },
    gradien() { let m; do { m = ri(-5, 5); } while (!m); const x1 = ri(-5, 5), y1 = ri(-5, 5), dx = ri(1, 4); return { q: `Gradien garis melalui (${x1}, ${y1}) dan (${x1 + dx}, ${y1 + m * dx}) adalah...`, a: m }; },
    pangkat() { const b = ri(2, 5), n = ri(2, b <= 3 ? 5 : 3); return { e: `${b}${sup(n)}`, a: b ** n }; },
    tabung() { const r = pick([7, 14]), t = ri(1, 10); return { q: `Volume tabung r = ${r} cm, t = ${t} cm (π = 22/7) adalah ... cm³`, a: 22 * r * r * t / 7 }; },
    rataRata() { const n = 4, nums = Array.from({ length: n }, () => ri(2, 20)); const r = nums.reduce((s, x) => s + x, 0) % n; nums[n - 1] += (n - r) % n; return { q: `Rata-rata dari ${nums.join(', ')} adalah...`, a: nums.reduce((s, x) => s + x, 0) / n }; },
    median() { const nums = Array.from({ length: 5 }, () => ri(1, 30)); const s = [...nums].sort((a, b) => a - b); return { q: `Median dari ${nums.join(', ')} adalah...`, a: s[2] }; },
    modus() { const m = ri(2, 9); const arr = shuffle([m, m, m, ri(10, 14), ri(15, 19), m + 1 > 9 ? 1 : m + 1]); return { q: `Modus dari ${arr.join(', ')} adalah...`, a: m }; },
    spldv() { const x = ri(1, 12), y = ri(1, x); return { q: `Jika x + y = ${x + y} dan x − y = ${x - y}, maka x = ...`, a: x }; },
    eksponen() { const b = pick([2, 3, 5]), m = ri(2, 6), n = ri(2, 6); return { q: `${b}${sup(m)} × ${b}${sup(n)} = ${b}ⁿ. Nilai n = ...`, a: m + n }; },
    eksponen2() { const b = pick([2, 3, 7]), m = ri(2, 5), n = ri(2, 4); return { q: `(${b}${sup(m)})${sup(n)} = ${b}ᵏ. Nilai k = ...`, a: m * n }; },
    eksponen3() { const b = pick([2, 3, 5]), m = ri(5, 9), n = ri(1, 4); return { q: `${b}${sup(m)} : ${b}${sup(n)} = ${b}ᵏ. Nilai k = ...`, a: m - n }; },
    log() { const b = pick([2, 3, 5, 10]); const n = ri(1, b === 2 ? 6 : b === 10 ? 4 : 3); return { e: `${sup(b)}log ${b ** n}`, a: n }; },
    aritmetika() { const a1 = ri(1, 20), b = ri(2, 9), n = ri(6, 15); return { q: `Barisan ${a1}, ${a1 + b}, ${a1 + 2 * b}, ... Suku ke-${n} adalah...`, a: a1 + (n - 1) * b }; },
    geometri() { const a1 = ri(1, 5), r = pick([2, 3]), n = ri(4, 6); return { q: `Barisan ${a1}, ${a1 * r}, ${a1 * r * r}, ... Suku ke-${n} adalah...`, a: a1 * r ** (n - 1) }; },
    deret() { const a1 = ri(1, 10), b = ri(1, 5), n = ri(4, 10); return { q: `Jumlah ${n} suku pertama barisan ${a1}, ${a1 + b}, ${a1 + 2 * b}, ... adalah...`, a: n * (2 * a1 + (n - 1) * b) / 2 }; },
    quadVal() { const b = ri(-5, 5), c = ri(-9, 9), x = ri(-4, 4); return { q: `f(x) = x² ${sg(b)}x ${sg(c)}. Nilai f(${x}) = ...`, a: x * x + b * x + c }; },
    peluangDadu() {
      const [ev, ans] = pick([['genap', '1/2'], ['ganjil', '1/2'], ['lebih dari 4', '1/3'], ['prima', '1/2'], ['6', '1/6'], ['kurang dari 3', '1/3'], ['faktor dari 6', '2/3'], ['kurang dari 6', '5/6']]);
      return { q: `Sebuah dadu dilempar sekali. Peluang muncul mata dadu ${ev} adalah...`, a: ans, d: fracD(ans, shuffle(['1/6', '1/3', '1/2', '2/3', '5/6', '1/4'])) };
    },
    peluangKoin() { return { q: `Dua koin dilempar bersamaan. Peluang muncul dua angka adalah...`, a: '1/4', d: ['1/2', '1/3', '3/4'] }; },
    permutasi() { const n = ri(3, 5); const f = [1, 1, 2, 6, 24, 120][n]; return { q: `Banyak cara menyusun ${n} buku berbeda dalam satu baris adalah...`, a: f }; },
    kombinasi() { const n = ri(4, 7); return { q: `Dari ${n} siswa dipilih 2 orang sebagai perwakilan. Banyak cara memilih adalah...`, a: n * (n - 1) / 2 }; },
    /* ---- tambahan Matematika SMA (Fase E–F, termasuk tingkat lanjut) ---- */
    trig() {
      const T = [['sin 30°', '1/2'], ['cos 60°', '1/2'], ['tan 45°', '1'], ['sin 90°', '1'], ['cos 0°', '1'], ['sin 0°', '0'], ['cos 90°', '0'],
        ['sin 45°', '½√2'], ['cos 45°', '½√2'], ['cos 30°', '½√3'], ['sin 60°', '½√3'], ['tan 60°', '√3'], ['tan 30°', '⅓√3'], ['cos 180°', '−1']];
      const [e, a] = pick(T);
      return { e, a, d: fracD(a, shuffle(['0', '1/2', '1', '½√2', '½√3', '√3', '⅓√3', '−1', '2'])) };
    },
    det2() { const a = ri(-5, 9), b = ri(-5, 9), c = ri(-5, 9), d = ri(-5, 9); return { q: `Determinan matriks [${a} ${b} ; ${c} ${d}] adalah...`, a: a * d - b * c }; },
    vektor() { const a = ri(-5, 6), b = ri(-5, 6), c = ri(-5, 6), d = ri(-5, 6); return { q: `Jika u = (${a}, ${b}) dan v = (${c}, ${d}), maka u · v = ...`, a: a * c + b * d }; },
    komposisi() { const a = ri(2, 5), b = ri(-6, 6) || 1, c = ri(2, 4), d = ri(-5, 5) || 2, x = ri(-3, 4); return { q: `f(x) = ${a}x ${sg(b)}, g(x) = ${c}x ${sg(d)}. Nilai (f∘g)(${x}) = ...`, a: a * (c * x + d) + b }; },
    limit() { const a = ri(1, 9); return { q: `lim x→${a} (x² − ${a * a}) / (x − ${a}) = ...`, a: 2 * a }; },
    integral() { const n = ri(1, 3), k = ri(1, 5), a = k * (n + 1); return { q: `∫ ${a}x${n === 1 ? '' : sup(n)} dx = kx${sup(n + 1)} + C. Nilai k = ...`, a: k }; },
    integralTentu() { const a = ri(1, 4), b = ri(1, 4); return { q: `∫₀^${b} ${2 * a}x dx = ...`, a: a * b * b }; },
    logSifat() { const [e, v] = pick([['log 2 + log 5', 1], ['log 20 + log 5', 2], ['log 1000', 3], ['²log 4 + ²log 8', 5], ['³log 81 − ³log 3', 3], ['log 500 − log 5', 2]]); return { e, a: v }; },
    turunan() { const a = ri(2, 6), n = ri(2, 4); return { q: `Turunan pertama f(x) = ${a}x${sup(n)} adalah ...x${sup(n - 1 === 1 ? '' : n - 1)}. Koefisiennya adalah...`, a: a * n }; }
  };

  const LEVEL = {
    1: ['add20', 'sub20', 'before', 'after', 'count', 'add20', 'sub20'],
    2: ['add100', 'sub100', 'mul5', 'add20', 'sub20', 'add100'],
    3: ['mul10', 'div10', 'add1000', 'sub1000', 'mul10'],
    4: ['mul2d', 'kelilingPP', 'luasPP', 'round10', 'div10', 'fracEq'],
    5: ['fracAdd', 'dec', 'kpk', 'fpb', 'luasSeg', 'mul2d'],
    6: ['persen', 'kuadrat', 'akar', 'volKubus', 'volBalok', 'negAdd'],
    7: ['negAdd', 'negSub', 'negMul', 'linEq', 'perbandingan', 'persen'],
    8: ['pyth', 'fx', 'gradien', 'linEq', 'kuadrat', 'akar'],
    9: ['pangkat', 'akar', 'tabung', 'pyth', 'rataRata', 'median', 'spldv'],
    10: ['eksponen', 'eksponen2', 'eksponen3', 'log', 'spldv', 'linEq', 'fx'],
    11: ['aritmetika', 'geometri', 'deret', 'quadVal', 'fx', 'log'],
    12: ['peluangDadu', 'peluangKoin', 'rataRata', 'median', 'modus', 'permutasi', 'kombinasi', 'turunan']
  };

  const LEVEL_SMA = {
    10: ['eksponen', 'eksponen2', 'log', 'logSifat', 'aritmetika', 'quadVal', 'spldv', 'trig'],
    11: ['komposisi', 'trig', 'det2', 'vektor', 'peluangDadu', 'kombinasi', 'geometri', 'deret'],
    12: ['limit', 'turunan', 'integral', 'integralTentu', 'det2', 'median', 'rataRata', 'permutasi']
  };

  function make(kelas) {
    const k = Math.max(1, Math.min(12, kelas));
    const sma = k >= 10 && typeof QB !== 'undefined' && QB.jenjang && ['SMA', 'MA'].includes(QB.jenjang());
    const L = sma ? LEVEL_SMA : LEVEL;
    let pool = L[k] || LEVEL[k];
    if (k > 1 && Math.random() < 0.25) pool = L[k - 1] || LEVEL[k - 1];
    const g = G[pick(pool)]();
    const as = fmt(g.a);
    let d = g.d ? g.d.filter(x => x !== as) : near(g.a);
    if (d.length < 3 && typeof g.a === 'number') d = [...new Set([...d, ...near(g.a)])].slice(0, 3);
    return {
      q: g.q || `${g.e} = ?`, e: g.e || null, a: g.a, as, d: d.slice(0, 3),
      num: typeof g.a === 'number' && Number.isInteger(g.a)
    };
  }

  function ord(kelas) {
    const n = kelas <= 2 ? 4 : 5;
    const vals = []; const seen = new Set();
    let guard = 0;
    while (vals.length < n && guard++ < 200) {
      let label, v;
      if (kelas <= 2) { v = ri(0, 99); label = String(v); }
      else if (kelas <= 4) { v = ri(100, 9999); label = fmt(v); }
      else if (kelas <= 6) {
        if (Math.random() < 0.5) { const d = pick([2, 3, 4, 5, 6, 8, 10]); const nu = ri(1, d - 1); v = nu / d; label = `${nu}/${d}`; }
        else { v = ri(1, 30) / 10; label = fmt(v); }
      } else if (kelas <= 9) {
        if (Math.random() < 0.6) { v = ri(-50, 50); label = fmt(v); } else { v = ri(-100, 100) / 10; label = fmt(v); }
      } else {
        const t = ri(0, 3);
        if (t === 0) { const b = ri(2, 5), p = ri(2, b <= 3 ? 4 : 3); v = b ** p; label = `${b}${sup(p)}`; }
        else if (t === 1) { const r = ri(2, 12); v = r; label = `√${r * r}`; }
        else if (t === 2) { const p = ri(1, 6); v = p; label = `²log ${2 ** p}`; }
        else { v = ri(-10, 30); label = fmt(v); }
      }
      const key = Math.round(v * 1000);
      if (seen.has(key)) continue;
      seen.add(key); vals.push({ label, v });
    }
    const desc = Math.random() < 0.35;
    vals.sort((a, b) => desc ? b.v - a.v : a.v - b.v);
    return { q: desc ? 'Urutkan dari yang TERBESAR' : 'Urutkan dari yang TERKECIL', items: vals.map(x => x.label) };
  }

  function pair(kelas) {
    const out = [], seenA = new Set(), seenL = new Set();
    let tries = 0;
    while (out.length < 5 && tries++ < 80) {
      const g = make(kelas);
      let left = g.e || (g.q.length <= 70 ? g.q.replace(/\s*(adalah|=)\s*\.\.\.\s*(cm³|cm²|cm)?$/, '').trim() : null);
      if (!left || seenA.has(g.as) || seenL.has(left)) continue;
      seenA.add(g.as); seenL.add(left); out.push([left, g.as]);
    }
    return out;
  }

  return { make, ord, pair, fmt };
})();
