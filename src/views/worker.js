let data = [];
let dayActual, now,hourActual;

function showNotification(title = "", body = "", image = "/assets/bg-mic.jpg") {
  self.registration.showNotification(title, {
    body,
    icon: "./assets/favicon.png",
    image,
    tag: title
  });
}

onmessage = function(e) {
  console.log('Worker: Message received from main script', e.data);
  self.clientId = e.data.clientId
  this.fetch("/getDataUsers")
    .then(res => res.json())
    .then(res => data = res)
    .catch(error => console.error(error))

    console.log("Aqui tus datos", data);
}

self.addEventListener("active", ()=>{
  console.log("Service Worker is working!");
})

self.addEventListener("push", (e) => {
  data.push(e.data.json())
  data.flat()
  postMessage(data, "*")
  console.log(data);
});

setInterval(() => {
  hourActual = new Date().toLocaleTimeString();
  dayActual = new Date().getDay();

  if (data.length > 0) return;

  now =false  
  if (now) {
    console.log("Ya es hora!");
    showNotification("actual.title", "actual.body");
  }
}, 1000);

// Staled code

// SW Version
const version = '1.2';

// Static Cache - App Shell
const appAssets = [
  "/index.html",
  "/style/main.css",
  "/style/style.css",
  "/js/main.js",
  "/assets/bg-mic.jpg",
  "/assets/fonts/Montserrat.woff2",
  "/assets/fonts/Poppins-Black.woff2",
];


// SW Install
self.addEventListener( 'install', e => {
    e.waitUntil(
        caches.open( `static-${version}` )
            .then( cache => cache.addAll(appAssets) )
    );
});

