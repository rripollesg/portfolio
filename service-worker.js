self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache01').then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        'style.css',
        'logo.png',
        'index-EN.html',
        '/assets/css/style.css',
        '/assets/js/main.js',
        '/assets/js/index.js',
        '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/bootstrap/css/bootstrap.min.css',
        'assets/js/tagcanvas.min.js'
        // Agrega aquí los archivos que deseas almacenar en caché
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
