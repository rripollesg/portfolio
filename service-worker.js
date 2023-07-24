  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('service-worker.js')
        .then(function(registration) {
          console.log('Service Worker registrado con éxito:', registration);
        })
        .catch(function(error) {
          console.log('Error al registrar el Service Worker:', error);
        });
    });
  }

// Escucha el evento 'install' del Service Worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('cache-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/assets/css/style.css',
        '/assets/js/main.js',
        '/assets/js/index.js',
        '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/bootstrap/css/bootstrap.min.css',
        // Agrega aquí los archivos que deseas almacenar en caché
      ]);
    })
  );
});

// Escucha el evento 'fetch' del Service Worker
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Si el archivo está en caché, lo devuelve
      if (response) {
        return response;
      }

      // Si el archivo no está en caché, lo busca en la red
      return fetch(event.request);
    })
  );
});