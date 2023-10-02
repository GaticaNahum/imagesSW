//Los archivos propios que tengamos en nuestra aplicación, como html, css, js, etc.
const APP_SHELL = [
    '/',
    '/index.html',
    'js/app.js',
    'img/flash.webp',
    'css/style.css',
];

const APP_SHELL_INMUTABLE = [
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js'
];
self.addEventListener('install', (e) => {
    console.log('Instalando...');
});

self.addEventListener('activate', (e) => {
    console.log('Activado');
});

self.addEventListener('fetch', (e) => {
    console.log(e.request);
    if(e.request.url.includes('flash.webp'))
        e.respondWith(fetch('img/batman.avif'));
    else
        e.respondWith(fetch(e.request));
    
});