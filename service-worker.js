
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

// service-worker.js
self.addEventListener('install', function(event) {
  // Guardar en caché los archivos estáticos
  event.waitUntil(
    caches.open('cache01').then(function(cache) {
      return cache.addAll([
        './',
        'index.html',
        '/assets/img/profile3-img.jpg',
        '/assets/img/EN.png',
        '/assets/img/ES.png',
        '/assets/img/favicon.png',
        'EN.html',
        '/assets/css/style.css',
        '/assets/js/main.js',
        '/assets/js/index.js',
        '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
        '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
        '/assets/vendor/bootstrap/css/bootstrap.min.css',
        '/assets/js/tagcanvas.min.js',
        // Agrega aquí los archivos que deseas almacenar en caché
      ]);
    })
  );
});

// Responder con los archivos en caché cuando no hay conexión
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // Buscar en la caché la solicitud
    caches.match(event.request).then(function(response) {
      // Si hay una respuesta en caché, devolverla
      if (response) {
        return response;
      }
      // Si no, intentar obtenerla de la red
      return fetch(event.request);
    })
  );
});
