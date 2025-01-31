const CACHE_NAME = 'prime-nevada-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/firm.html',
  '/what-we-do.html',
  '/contact.html',
  '/thank-you.html',
  '/styles/main.css',
  '/js/main.js',
  '/components/navigation/navigation.js',
  '/components/footer/footer.js',
  '/components/footer/footer.css',
];

// Install service worker and cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
