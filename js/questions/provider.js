/* ============================================================
   PENYEDIA SOAL – satu antarmuka untuk semua game
   provider.mc() / tf() / num() / pair() / ord() / word()
   ============================================================ */
const QS = (() => {
  const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = a => a[Math.floor(Math.random() * a.length)];

  function pool(arr) {
    let p = [], i = 0;
    return () => {
      if (!arr.length) return null;
      if (i >= p.length) { p = shuffle(arr.slice()); i = 0; }
      return p[i++];
    };
  }
  const cleanQ = q => q.replace(/\s*\.\.\.\s*$/, '').replace(/\s+adalah$/, '').trim();
  const WORD_RE = /^[A-Za-z]{3,12}$/;

  function fromBank(kelas, mapel) {
    const b = QB.get(kelas, mapel);
    const mcP = pool(b.mc), tfP = pool(b.tf), prP = pool(b.pair), odP = pool(b.ord);
    const wordList = b.mc.filter(r => WORD_RE.test(r[1]));
    const wdP = pool(wordList);
    let pairUsed = 0;
    const api = {
      mc() {
        const r = mcP();
        if (!r) {
          // paket tanpa soal PG: buat dari benar/salah atau pasangan
          const t = tfP();
          if (t) return { t: 'mc', q: t[0], a: t[1] ? 'Benar' : 'Salah', opts: ['Benar', 'Salah'] };
          const p = prP();
          if (p && p.length >= 2) {
            const i = Math.floor(Math.random() * p.length);
            const others = shuffle(p.filter((_, k) => k !== i).map(x => x[1])).slice(0, 3);
            return { t: 'mc', q: `Pasangan dari “${p[i][0]}” adalah...`, a: p[i][1], opts: shuffle([p[i][1], ...others]) };
          }
          return null;
        }
        const [q, a, ...d] = r;
        return { t: 'mc', q, a, opts: shuffle([a, ...d.filter(x => x && x !== a).slice(0, 3)]) };
      },
      tf() {
        if (b.tf.length && (Math.random() < 0.7 || !b.mc.length)) { const [q, a] = tfP(); return { t: 'tf', q, a }; }
        const m = api.mc(); if (!m) return null;
        const wrong = m.opts.filter(x => x !== m.a);
        const truth = !wrong.length || Math.random() < 0.5;
        return { t: 'tf', q: m.q, c: truth ? m.a : pick(wrong), a: truth };
      },
      num() { return null; },
      pair() {
        if (b.pair.length && (pairUsed++ < b.pair.length || Math.random() < 0.5)) {
          return { t: 'pair', pairs: shuffle(prP().slice()).slice(0, 5) };
        }
        // bangun pasangan dari soal pilihan ganda yang pendek
        const cand = shuffle(b.mc.filter(r => r[0].length <= 70 && String(r[1]).length <= 32).slice());
        const out = [], seen = new Set(), seenL = new Set();
        for (const r of cand) {
          const l = cleanQ(r[0]);
          if (seen.has(r[1]) || seenL.has(l)) continue;
          seen.add(r[1]); seenL.add(l); out.push([l, r[1]]); if (out.length === 5) break;
        }
        if (out.length >= 4) return { t: 'pair', pairs: out };
        return b.pair.length ? { t: 'pair', pairs: prP().slice(0, 5) } : null;
      },
      ord() { const r = odP(); return r ? { t: 'ord', q: r[0], items: r[1].slice() } : null; },
      word() {
        const r = wdP(); if (!r) return null;
        return { t: 'word', q: cleanQ(r[0]), a: r[1].toUpperCase() };
      }
    };
    return api;
  }

  function fromMath(kelas) {
    return {
      mc() { const g = MathGen.make(kelas); return { t: 'mc', q: g.q, a: g.as, opts: shuffle([g.as, ...g.d]) }; },
      tf() {
        const g = MathGen.make(kelas); const truth = Math.random() < 0.5;
        const claim = truth ? g.as : pick(g.d);
        return g.e ? { t: 'tf', q: `${g.e} = ${claim}`, a: truth } : { t: 'tf', q: g.q, c: claim, a: truth };
      },
      num() {
        for (let i = 0; i < 25; i++) { const g = MathGen.make(kelas); if (g.num) return { t: 'num', q: g.q, a: g.a }; }
        return null;
      },
      pair() { return { t: 'pair', pairs: MathGen.pair(kelas) }; },
      ord() { return { t: 'ord', ...MathGen.ord(kelas) }; },
      word() {
        for (let i = 0; i < 25; i++) { const g = MathGen.make(kelas); if (g.num && g.a >= 10) return { t: 'word', q: g.q.replace(/ = \?$/, ' = ...'), a: String(g.a) }; }
        return null;
      }
    };
  }

  function provider(kelas, mapel) {
    if (mapel === 'Matematika') return fromMath(kelas);
    if (mapel === 'Campuran') {
      const subs = QB.mapelFor(kelas).filter(m => m !== 'Campuran').map(m => provider(kelas, m));
      const any = fn => () => { for (const p of shuffle(subs.slice())) { const r = p[fn](); if (r) return r; } return null; };
      return { mc: any('mc'), tf: any('tf'), num: () => null, pair: any('pair'), ord: any('ord'), word: any('word') };
    }
    return fromBank(kelas, mapel);
  }

  return { provider };
})();
