const CORE_CACHE_NAME = 'core-cache';
const CORE_ASSETS = [
    '/',
    '/onboarding_1',
    '/onboarding_2',
    '/onboarding_3',
    '/onboarding_4',
    '/tussenscherm_voor_persoonlijke_vragen',
    '/persoonlijke_vragen',
    '/tussenscherm_voor_vragen_voeding',
    '/vragen_over_voeding',
    '/tussenscherm_voor_vragen_beweging',
    '/vragen_over_beweging',
    '/tussenscherm_voor_dashboard',
    '/dashboard',
    '/css/dashboardstyle.css',
    '/css/homestyle.css',
    '/css/style.css',
    '/css/persoonlijke_vragen_style.css',
    '/css/vragen_over_voeding_style.css',
    '/css/vragen_over_beweging_style.css',
    '/images/beweging_icon.png',
    '/images/dashboard_icon.png',
    '/images/empty.png',
    '/images/instructies_icon.png',    
    '/images/invisible_icon.png',
    '/images/logo_so_nuts.png',
    '/images/min_icon.png',
    '/images/onboarding_image_1.png',
    '/images/onboarding_image_2.png',
    '/images/onboarding_image_3.png',
    '/images/onboarding_image_4.png',
    '/images/persoonlijk_icon.png',
    '/images/plus_icon.png',
    '/images/visible_icon.png',
    '/images/voeding_icon.png',
    '/images/vragenlijst_afgerond_icon.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache => cache.addAll(CORE_ASSETS))
        .then(() => self.skipWaiting())
    )
});

self.addEventListener('activate', event => {
    console.log('activated')
}); 

self.addEventListener('fetch', event => {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
        .catch(function(err) {
            console.log('ServiceWorker registration failed: ', err);
            console.log(event)
        })
    )
});
