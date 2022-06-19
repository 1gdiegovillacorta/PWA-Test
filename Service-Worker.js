//JavaScript

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./styles.css",
                "./manifest.json",
                "./Register.js",
                "./Images/Pic1.jpg",
                "./Images/Pic2.jpg",
                "./Images/Pic3.jpg",
                "./Images/App-Icons/App-Icon-192.png",
                "./Images/Icon.svg",
                "./Images/The-Invisible-Man-Book-Cover.jpg",
                "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
