/* ============================================================
   AVATAR – karakter SVG buatan sendiri (tanpa internet, tanpa lisensi pihak ketiga)
   Avatar.svg(id) → string <svg>, Avatar.list → daftar karakter
   ============================================================ */
const Avatar = (() => {
  // [id, nama, warna latar, warna tubuh, telinga/kepala, mata, mulut, ekstra]
  const LIST = [
    ['kucing', 'Kucing', '#ffd6a5', '#f4a261', 'cat', 'happy', 'cat', 'whisker'],
    ['beruang', 'Beruang', '#e9d5c3', '#a0522d', 'bear', 'dot', 'smile', 'snout'],
    ['panda', 'Panda', '#d8f3dc', '#ffffff', 'bearDark', 'panda', 'smile', ''],
    ['kelinci', 'Kelinci', '#ffd1dc', '#fff0f5', 'bunny', 'shine', 'bunny', 'blush'],
    ['rubah', 'Rubah', '#ffe5b4', '#f77f00', 'fox', 'happy', 'smile', 'foxface'],
    ['harimau', 'Harimau', '#fff3b0', '#ff9f1c', 'cat', 'shine', 'grin', 'stripes'],
    ['singa', 'Singa', '#ffeaa7', '#f6c453', 'mane', 'dot', 'cat', 'snout'],
    ['katak', 'Katak', '#caffbf', '#57cc99', 'frog', 'frog', 'wide', 'blush'],
    ['pinguin', 'Pinguin', '#cde7ff', '#2b2d42', 'none', 'shine', 'beak', 'belly'],
    ['burunghantu', 'Burung Hantu', '#e0c3fc', '#8d6e63', 'owl', 'owl', 'beak', ''],
    ['koala', 'Koala', '#dfe7fd', '#a8a8b3', 'koala', 'dot', 'smile', 'nose'],
    ['robot', 'Robot', '#bde0fe', '#9aa5b1', 'antenna', 'robot', 'robot', 'bolt'],
    ['alien', 'Alien', '#d0f4de', '#7bd389', 'alien', 'alien', 'o', ''],
    ['monster', 'Monster', '#ffc6ff', '#9b5de5', 'horns', 'cyclops', 'teeth', ''],
    ['naga', 'Naga', '#ffadad', '#2a9d8f', 'dragon', 'shine', 'grin', 'blush'],
    ['unicorn', 'Unicorn', '#fde2ff', '#ffffff', 'unicorn', 'happy', 'smile', 'blush'],
    ['raja', 'Si Raja', '#fff1a8', '#ffcc99', 'crown', 'dot', 'grin', 'blush'],
    ['ninja', 'Ninja', '#d6d6d6', '#3d405b', 'ninja', 'ninja', 'none', ''],
    ['astronot', 'Astronot', '#c8e7ff', '#ffe0bd', 'helmet', 'shine', 'smile', ''],
    ['juara', 'Juara', '#ffe066', '#ffcc99', 'cap', 'star', 'grin', 'blush'],
    ['ilmuwan', 'Ilmuwan', '#e2ece9', '#f1c27d', 'hairUp', 'glasses', 'smile', ''],
    ['pelajar', 'Pelajar', '#ffd6e0', '#e0ac69', 'hair', 'happy', 'grin', 'blush'],
    ['bintang', 'Bintang', '#cdb4db', '#ffd60a', 'starShape', 'happy', 'smile', 'blush'],
    ['hantu', 'Hantu Lucu', '#e7ecef', '#ffffff', 'ghost', 'shine', 'o', 'blush']
  ];
  const K = '#2b2d42';
  const ears = (t, c) => ({
    cat: `<path d="M22 40 L26 12 L44 30Z M78 40 L74 12 L56 30Z" fill="${c}" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M27 33 L29 19 L38 29Z M73 33 L71 19 L62 29Z" fill="#ffb3c1"/>`,
    fox: `<path d="M20 44 L22 10 L46 30Z M80 44 L78 10 L54 30Z" fill="${c}" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M25 36 L26 18 L38 29Z M75 36 L74 18 L62 29Z" fill="#fff"/>`,
    bear: `<circle cx="25" cy="27" r="11" fill="${c}" stroke="${K}" stroke-width="2.5"/><circle cx="75" cy="27" r="11" fill="${c}" stroke="${K}" stroke-width="2.5"/><circle cx="25" cy="27" r="5" fill="#f4c7a1"/><circle cx="75" cy="27" r="5" fill="#f4c7a1"/>`,
    bearDark: `<circle cx="25" cy="27" r="11" fill="${K}"/><circle cx="75" cy="27" r="11" fill="${K}"/>`,
    koala: `<circle cx="20" cy="38" r="15" fill="${c}" stroke="${K}" stroke-width="2.5"/><circle cx="80" cy="38" r="15" fill="${c}" stroke="${K}" stroke-width="2.5"/><circle cx="20" cy="38" r="8" fill="#f1e4f3"/><circle cx="80" cy="38" r="8" fill="#f1e4f3"/>`,
    bunny: `<ellipse cx="37" cy="16" rx="8" ry="20" fill="${c}" stroke="${K}" stroke-width="2.5"/><ellipse cx="63" cy="16" rx="8" ry="20" fill="${c}" stroke="${K}" stroke-width="2.5"/><ellipse cx="37" cy="17" rx="3.5" ry="13" fill="#ffb3c1"/><ellipse cx="63" cy="17" rx="3.5" ry="13" fill="#ffb3c1"/>`,
    mane: `<circle cx="50" cy="54" r="40" fill="#e76f51" stroke="${K}" stroke-width="2.5"/>`,
    frog: `<circle cx="34" cy="28" r="12" fill="${c}" stroke="${K}" stroke-width="2.5"/><circle cx="66" cy="28" r="12" fill="${c}" stroke="${K}" stroke-width="2.5"/>`,
    owl: `<path d="M24 34 L22 14 L40 26Z M76 34 L78 14 L60 26Z" fill="${c}" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`,
    antenna: `<line x1="50" y1="22" x2="50" y2="8" stroke="${K}" stroke-width="3"/><circle cx="50" cy="7" r="5" fill="#ef476f" stroke="${K}" stroke-width="2"/><rect x="12" y="44" width="8" height="16" rx="3" fill="#ffd166" stroke="${K}" stroke-width="2"/><rect x="80" y="44" width="8" height="16" rx="3" fill="#ffd166" stroke="${K}" stroke-width="2"/>`,
    alien: `<line x1="36" y1="24" x2="28" y2="8" stroke="${K}" stroke-width="2.5"/><line x1="64" y1="24" x2="72" y2="8" stroke="${K}" stroke-width="2.5"/><circle cx="28" cy="8" r="4.5" fill="#ffd60a" stroke="${K}" stroke-width="2"/><circle cx="72" cy="8" r="4.5" fill="#ffd60a" stroke="${K}" stroke-width="2"/>`,
    horns: `<path d="M28 30 Q20 12 32 8 Q30 20 38 26Z M72 30 Q80 12 68 8 Q70 20 62 26Z" fill="#ffd166" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`,
    dragon: `<path d="M30 28 L24 8 L40 22Z M70 28 L76 8 L60 22Z" fill="#f4a261" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M44 18 L50 6 L56 18Z" fill="#e76f51" stroke="${K}" stroke-width="2" stroke-linejoin="round"/>`,
    unicorn: `<path d="M44 24 L50 0 L56 24Z" fill="#ffd166" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M47 16 L53 13 M46 20 L54 17" stroke="${K}" stroke-width="1.5"/><path d="M22 30 Q14 50 22 70 Q28 50 34 32Z" fill="#c77dff" stroke="${K}" stroke-width="2"/>`,
    crown: `<path d="M28 26 L30 6 L40 18 L50 4 L60 18 L70 6 L72 26Z" fill="#ffd60a" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><circle cx="50" cy="16" r="3" fill="#ef476f"/>`,
    cap: `<path d="M22 38 Q24 14 50 14 Q76 14 78 38Z" fill="#ef476f" stroke="${K}" stroke-width="2.5"/><path d="M60 36 Q84 34 92 40 Q80 44 60 42Z" fill="#d90429" stroke="${K}" stroke-width="2.5"/><circle cx="50" cy="15" r="3" fill="#fff"/>`,
    hair: `<path d="M20 50 Q18 16 50 16 Q82 16 80 50 Q74 30 58 28 Q50 36 34 30 Q24 36 20 50Z" fill="#3d2c2e" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`,
    hairUp: `<path d="M22 44 Q14 30 24 24 Q22 12 36 14 Q42 4 52 10 Q62 2 68 14 Q82 12 78 26 Q88 32 78 44 Q70 30 50 30 Q30 30 22 44Z" fill="#adb5bd" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`,
    ninja: `<rect x="18" y="38" width="64" height="14" fill="#ef233c" stroke="${K}" stroke-width="2"/><path d="M80 42 L94 36 L90 48Z" fill="#ef233c" stroke="${K}" stroke-width="2"/>`,
    helmet: `<circle cx="50" cy="54" r="42" fill="#e9ecef" stroke="${K}" stroke-width="3"/><circle cx="50" cy="54" r="33" fill="#90e0ef" opacity=".35"/>`
  }[t] || '');
  const head = (t, c) => {
    if (t === 'ghost') return `<path d="M20 90 L20 50 Q20 18 50 18 Q80 18 80 50 L80 90 L70 82 L60 90 L50 82 L40 90 L30 82Z" fill="${c}" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`;
    if (t === 'starShape') return `<path d="M50 10 L61 38 L91 38 L67 56 L76 86 L50 68 L24 86 L33 56 L9 38 L39 38Z" fill="${c}" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/>`;
    if (t === 'antenna') return `<rect x="20" y="22" width="60" height="62" rx="14" fill="${c}" stroke="${K}" stroke-width="2.5"/>`;
    if (t === 'alien') return `<ellipse cx="50" cy="54" rx="33" ry="34" fill="${c}" stroke="${K}" stroke-width="2.5"/>`;
    return `<circle cx="50" cy="56" r="31" fill="${c}" stroke="${K}" stroke-width="2.5"/>`;
  };
  const eyes = t => ({
    dot: `<circle cx="39" cy="52" r="4" fill="${K}"/><circle cx="61" cy="52" r="4" fill="${K}"/>`,
    happy: `<path d="M33 53 Q39 46 45 53 M55 53 Q61 46 67 53" stroke="${K}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`,
    shine: `<circle cx="39" cy="52" r="6" fill="${K}"/><circle cx="61" cy="52" r="6" fill="${K}"/><circle cx="41" cy="50" r="2" fill="#fff"/><circle cx="63" cy="50" r="2" fill="#fff"/>`,
    panda: `<ellipse cx="38" cy="52" rx="9" ry="7" fill="${K}" transform="rotate(-20 38 52)"/><ellipse cx="62" cy="52" rx="9" ry="7" fill="${K}" transform="rotate(20 62 52)"/><circle cx="39" cy="51" r="2.5" fill="#fff"/><circle cx="61" cy="51" r="2.5" fill="#fff"/>`,
    frog: `<circle cx="34" cy="28" r="7" fill="#fff" stroke="${K}" stroke-width="2"/><circle cx="66" cy="28" r="7" fill="#fff" stroke="${K}" stroke-width="2"/><circle cx="35" cy="29" r="3.5" fill="${K}"/><circle cx="65" cy="29" r="3.5" fill="${K}"/>`,
    owl: `<circle cx="38" cy="50" r="11" fill="#fff" stroke="${K}" stroke-width="2.5"/><circle cx="62" cy="50" r="11" fill="#fff" stroke="${K}" stroke-width="2.5"/><circle cx="38" cy="50" r="5" fill="${K}"/><circle cx="62" cy="50" r="5" fill="${K}"/>`,
    robot: `<rect x="31" y="44" width="14" height="12" rx="3" fill="#caf0f8" stroke="${K}" stroke-width="2"/><rect x="55" y="44" width="14" height="12" rx="3" fill="#caf0f8" stroke="${K}" stroke-width="2"/><circle cx="38" cy="50" r="3" fill="${K}"/><circle cx="62" cy="50" r="3" fill="${K}"/>`,
    alien: `<ellipse cx="38" cy="50" rx="9" ry="12" fill="${K}" transform="rotate(-15 38 50)"/><ellipse cx="62" cy="50" rx="9" ry="12" fill="${K}" transform="rotate(15 62 50)"/><circle cx="36" cy="46" r="2.5" fill="#fff"/><circle cx="60" cy="46" r="2.5" fill="#fff"/>`,
    cyclops: `<circle cx="50" cy="48" r="12" fill="#fff" stroke="${K}" stroke-width="2.5"/><circle cx="50" cy="49" r="6" fill="${K}"/><circle cx="52" cy="47" r="2" fill="#fff"/>`,
    ninja: `<path d="M32 46 L46 48 M54 48 L68 46" stroke="#fff" stroke-width="2"/><circle cx="40" cy="45" r="3.5" fill="#fff"/><circle cx="60" cy="45" r="3.5" fill="#fff"/><circle cx="40" cy="45" r="1.8" fill="${K}"/><circle cx="60" cy="45" r="1.8" fill="${K}"/>`,
    star: `<path d="M39 45 L41 50 L46 50 L42 53 L43.5 58 L39 55 L34.5 58 L36 53 L32 50 L37 50Z M61 45 L63 50 L68 50 L64 53 L65.5 58 L61 55 L56.5 58 L58 53 L54 50 L59 50Z" fill="#ffd60a" stroke="${K}" stroke-width="1.5" stroke-linejoin="round"/>`,
    glasses: `<circle cx="39" cy="52" r="8" fill="#fff" stroke="${K}" stroke-width="2.5"/><circle cx="61" cy="52" r="8" fill="#fff" stroke="${K}" stroke-width="2.5"/><line x1="47" y1="52" x2="53" y2="52" stroke="${K}" stroke-width="2.5"/><circle cx="39" cy="52" r="3" fill="${K}"/><circle cx="61" cy="52" r="3" fill="${K}"/>`
  }[t] || '');
  const mouth = t => ({
    smile: `<path d="M41 66 Q50 74 59 66" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    grin: `<path d="M38 64 Q50 80 62 64Z" fill="#9d0208" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M44 72 Q50 76 56 72" fill="#ff8fa3"/>`,
    cat: `<path d="M50 63 L47 60 L53 60Z" fill="#ff8fa3"/><path d="M42 66 Q46 70 50 66 Q54 70 58 66" stroke="${K}" stroke-width="2.5" fill="none" stroke-linecap="round"/>`,
    bunny: `<path d="M50 62 L47 59 L53 59Z" fill="#ff8fa3"/><path d="M50 62 L50 67 M46 69 Q50 72 54 69" stroke="${K}" stroke-width="2.2" fill="none" stroke-linecap="round"/><rect x="47" y="67" width="6" height="5" rx="1" fill="#fff" stroke="${K}" stroke-width="1.2"/>`,
    wide: `<path d="M30 64 Q50 80 70 64" stroke="${K}" stroke-width="3" fill="none" stroke-linecap="round"/>`,
    beak: `<path d="M44 62 L56 62 L50 72Z" fill="#ffb703" stroke="${K}" stroke-width="2" stroke-linejoin="round"/>`,
    o: `<ellipse cx="50" cy="68" rx="5" ry="6" fill="#9d0208" stroke="${K}" stroke-width="2"/>`,
    teeth: `<path d="M36 64 Q50 78 64 64Z" fill="#9d0208" stroke="${K}" stroke-width="2.5" stroke-linejoin="round"/><path d="M40 65 L43 70 L46 66 M54 66 L57 70 L60 65" fill="#fff" stroke="${K}" stroke-width="1"/>`,
    robot: `<rect x="38" y="64" width="24" height="8" rx="2" fill="#fff" stroke="${K}" stroke-width="2"/><path d="M44 64 V72 M50 64 V72 M56 64 V72" stroke="${K}" stroke-width="1.5"/>`
  }[t] || '');
  const extra = (t, c) => ({
    whisker: `<path d="M22 60 L34 62 M22 66 L34 65 M78 60 L66 62 M78 66 L66 65" stroke="${K}" stroke-width="1.8" stroke-linecap="round"/>`,
    snout: `<ellipse cx="50" cy="64" rx="11" ry="8" fill="#f4e1c1" stroke="${K}" stroke-width="2"/><ellipse cx="50" cy="60" rx="4" ry="3" fill="${K}"/>`,
    nose: `<ellipse cx="50" cy="61" rx="6" ry="8" fill="#495057"/>`,
    blush: `<ellipse cx="31" cy="63" rx="5" ry="3" fill="#ff8fa3" opacity=".7"/><ellipse cx="69" cy="63" rx="5" ry="3" fill="#ff8fa3" opacity=".7"/>`,
    stripes: `<path d="M50 25 L50 36 M40 27 L43 36 M60 27 L57 36 M20 52 L29 54 M80 52 L71 54" stroke="${K}" stroke-width="3" stroke-linecap="round"/>`,
    foxface: `<path d="M24 58 Q50 92 76 58 Q62 70 50 64 Q38 70 24 58Z" fill="#fff" opacity=".95"/>`,
    belly: `<ellipse cx="50" cy="62" rx="20" ry="22" fill="#fff"/>`,
    bolt: `<circle cx="27" cy="30" r="2.5" fill="${K}"/><circle cx="73" cy="30" r="2.5" fill="${K}"/><circle cx="27" cy="76" r="2.5" fill="${K}"/><circle cx="73" cy="76" r="2.5" fill="${K}"/>`
  }[t] || '');

  const byId = {}; LIST.forEach(a => byId[a[0]] = a);
  function svg(id) {
    const a = byId[id]; if (!a) return '';
    const [, , bg, body, ear, eye, mo, ex] = a;
    const back = ['mane', 'koala', 'bunny', 'cat', 'fox', 'bear', 'bearDark', 'frog', 'owl', 'horns', 'dragon', 'alien', 'antenna'].includes(ear);
    const front = ['crown', 'cap', 'hair', 'hairUp', 'ninja', 'unicorn'].includes(ear);
    const helmet = ear === 'helmet';
    // urutan lapisan: latar → telinga belakang → kepala → ekstra wajah → mata → mulut → aksesori depan
    const exFirst = ['belly', 'foxface', 'snout', 'nose'].includes(ex);
    const faceExtra = extra(ex, body);
    return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="${bg}"/>` +
      (helmet ? ears('helmet', body) : '') + (back ? ears(ear, body) : '') +
      head(['ghost', 'starShape', 'antenna', 'alien'].includes(ear) ? ear : 'round', body) +
      (exFirst ? faceExtra : '') + eyes(eye) + mouth(mo) + (exFirst ? '' : faceExtra) + (front ? ears(ear, body) : '') + '</svg>';
  }
  const list = LIST.map(a => ({ id: a[0], name: a[1] }));
  const isAvatar = id => !!byId[id];
  return { svg, list, isAvatar };
})();
