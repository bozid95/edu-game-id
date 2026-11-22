/* Efek suara disintesis dengan WebAudio – tanpa file audio, jalan offline */
const SFX = (() => {
  let ac = null, muted = false;
  try { muted = localStorage.getItem('aj_muted') === '1'; } catch (e) {}

  function ctx() {
    if (!ac) {
      try { ac = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ac = null; }
    }
    if (ac && ac.state === 'suspended') ac.resume();
    return ac;
  }
  function tone(freq, dur, type = 'sine', vol = 0.18, delay = 0, slideTo = null) {
    if (muted) return;
    const a = ctx(); if (!a) return;
    const t = a.currentTime + delay;
    const o = a.createOscillator(), g = a.createGain();
    o.type = type; o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(a.destination);
    o.start(t); o.stop(t + dur + 0.02);
  }
  function noise(dur = 0.8, vol = 0.5) {
    if (muted) return;
    const a = ctx(); if (!a) return;
    const len = Math.floor(a.sampleRate * dur);
    const buf = a.createBuffer(1, len, a.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 2);
    const s = a.createBufferSource(), g = a.createGain(), f = a.createBiquadFilter();
    f.type = 'lowpass'; f.frequency.value = 900;
    s.buffer = buf; g.gain.value = vol;
    s.connect(f).connect(g).connect(a.destination); s.start();
  }
  return {
    unlock: ctx,
    correct() { tone(660, .12, 'triangle', .2); tone(990, .2, 'triangle', .2, .09); },
    wrong() { tone(220, .28, 'sawtooth', .12, 0, 110); },
    tick() { tone(1400, .05, 'square', .05); },
    count() { tone(520, .18, 'square', .12); },
    go() { tone(784, .12, 'square', .14); tone(1046, .35, 'square', .14, .12); },
    pop() { tone(420, .12, 'sine', .22, 0, 900); },
    step() { tone(300, .1, 'triangle', .18, 0, 600); },
    whoosh() { tone(900, .25, 'sine', .1, 0, 200); },
    climb() { [523, 659, 784].forEach((f, i) => tone(f, .12, 'triangle', .16, i * .07)); },
    boom() { noise(1, .7); tone(90, .6, 'sine', .4, 0, 40); },
    win() { [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tone(f, i === 5 ? .5 : .16, 'square', .1, i * .13)); },
    click() { tone(700, .05, 'triangle', .1); },
    isMuted: () => muted,
    toggle() { muted = !muted; try { localStorage.setItem('aj_muted', muted ? '1' : '0'); } catch (e) {} return muted; }
  };
})();
