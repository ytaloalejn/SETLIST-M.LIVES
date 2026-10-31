var C="yf-shell",F=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return Promise.all(F.map(function(f){return fetch(new Request(f,{cache:"reload"})).then(function(r){if(!r.ok)throw 0;return c.put(f,r)})}))}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(x){if(x&&x.ok&&new URL(e.request.url).origin===self.location.origin){var cp=x.clone();caches.open(C).then(function(c){c.put(e.request,cp)})}return x}).catch(function(){return caches.match("./")})}))});
