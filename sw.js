const C='sp-cqc-v52';
const FILES=['./','index.html','manifest.webmanifest','jspdf.umd.min.js','jszip.min.js','icon-180.png','icon-192.png','icon-512.png','hero.jpg','slats.jpg','marble.jpg','onyx.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x!=='sp-plans').map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  if(e.request.mode==='navigate'){e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{const cp=r.clone();caches.open(C).then(c=>c.put('index.html',cp));return r}).catch(()=>caches.match('index.html')));return}
  if(e.request.url.includes('/plans/')){e.respondWith(caches.open('sp-plans').then(c=>c.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok)c.put(e.request,res.clone());return res}))));return}
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok&&new URL(e.request.url).origin===location.origin){const cp=res.clone();caches.open(C).then(c=>c.put(e.request,cp))}return res})))});
