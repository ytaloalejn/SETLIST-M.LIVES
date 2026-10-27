var C="yf-livelist-v1",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
 e.respondWith(fetch(e.request,{cache:"no-cache"}).then(function(x){if(x&&x.ok){var cp=x.clone();caches.open(C).then(function(c){c.put(e.request,cp)})}return x}).catch(function(){return caches.match(e.request)}))});
