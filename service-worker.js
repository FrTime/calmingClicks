"use strict";var precacheConfig=[["/calmingClicks/index.html","e55f2117a9c0682e56c8b0f8dcfedb8c"],["/calmingClicks/static/js/main.d37558ef.js","d72283f228cdb21868d31d787d55261e"],["/calmingClicks/static/media/1.17f69b02.jpg","17f69b02618bc21b5026ac6544c86495"],["/calmingClicks/static/media/10.b0aa6dfb.jpg","b0aa6dfb92a948ca05058b0cbafeeb3e"],["/calmingClicks/static/media/11.ed9fa498.jpg","ed9fa49856968c75ec63764e32cd37d4"],["/calmingClicks/static/media/12.e8a32749.jpg","e8a327498909b308febb741e4f5899ae"],["/calmingClicks/static/media/2.3d79f01e.jpg","3d79f01efe6f1bf312bf94610a603719"],["/calmingClicks/static/media/3.c9642652.jpg","c9642652342e313dd7c18ef3782f3f2c"],["/calmingClicks/static/media/4.86e6c0b1.jpg","86e6c0b1747d980d012b16e299038c9b"],["/calmingClicks/static/media/5.5b74157f.jpg","5b74157f7d350e494499eaf9ada294c6"],["/calmingClicks/static/media/6.eaaec824.jpg","eaaec82453164a34a5cf6092bfecfedf"],["/calmingClicks/static/media/7.99605a4f.jpg","99605a4fa967ee0001c112993bd1ebd0"],["/calmingClicks/static/media/8.061847f3.jpg","061847f33891c0b47b4574f96762fd84"],["/calmingClicks/static/media/9.b937fdba.jpg","b937fdba48b8cd3a294f7187f6ac8cff"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var c=new URL(e);return a&&c.pathname.match(a)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),c=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var c="/calmingClicks/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});