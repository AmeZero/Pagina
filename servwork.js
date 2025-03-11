self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'style.css',
                'script.js',
                'manifest.json',
                'multimedia/logo.png',
                'multimedia/logo-512.png',
                'multimedia/splash.png',
                'multimedia/Video.mp4'
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activado');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
