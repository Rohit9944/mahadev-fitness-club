self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('gym-cache-v1').then(cache => {
        return cache.addAll([
          'index.html',
          'manifest.json',
          'sw.js',
          'icon-192.png',
          'icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => response || fetch(event.request))
    );
  });
  