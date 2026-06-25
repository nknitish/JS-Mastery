// Basic Service Worker registration and fetch handler snippet
// In main page:
if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(reg => {
    console.log('ServiceWorker registered', reg.scope);
  }).catch(err => console.error('SW register failed', err));
}

// sw.js (service worker) example content:
// self.addEventListener('install', event => { self.skipWaiting(); });
// self.addEventListener('activate', event => { self.clients.claim(); });
// self.addEventListener('fetch', event => {
//   if (event.request.method !== 'GET') return;
//   event.respondWith(fetch(event.request).catch(()=>caches.match('/offline.html')));
// });

console.log('Service Worker snippet added (see sw.js comments).');
