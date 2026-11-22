/* ============================================================
   SERVICE WORKER – Arena Juara (dibuat otomatis oleh tools/build.js)
   Buka website sekali saat online → semua file tersimpan di perangkat → bisa dipakai tanpa internet.
   Versi baru (soal/fitur) terunduh otomatis di latar belakang saat online.
   ============================================================ */
const VERSION = '%VERSION%';
const CACHE = 'arena-juara-' + VERSION;
const FILES = /*FILES*/[];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('arena-juara-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return; // WhatsApp dll. lewat jaringan biasa
  if (req.mode === 'navigate') {
    e.respondWith(caches.match('./', { cacheName: CACHE }).then(r => r || fetch(req)).catch(() => caches.match('./')));
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
