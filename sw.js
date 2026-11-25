const CACHE_NAME = 'sdm-bridge-v1';
self.addEventListener('install', function (e) {
  self.skipWaiting();
});
self.addEventListener('activate', function (e) {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', function () {
  // Pass-through: always load live Apps Script & bridge assets fresh
});
