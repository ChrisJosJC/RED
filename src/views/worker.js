self.data = [];
self.clientId = "";
let dayActual, now, hourActual;

function showNotification(title = "", body = "", image = "/assets/bg-mic.jpg") {
  self.registration.showNotification(title, {
    body,
    icon: "./assets/favicon.png",
    image,
    tag: title,
  });
}

onmessage = function (e) {
  self.clientId = e.data.clientId;
  this.fetch("/getDataUsers")
    .then((res) => res.json())
    .then((res) => (self.data = res))
    .catch((error) => console.error(error));
};

self.addEventListener("push", (e) => {
  self.data.push(e.data.json());
  postMessage(self.data, "*");
});

setInterval(() => {
  hourActual = new Date().toLocaleTimeString();
  dayActual = new Date().getDay();

  if (data.length > 0) return;

  let programas = self?.data[clientId]?.programsUser
  programas?.map(e=>{
    if (e.hour == hourActual && dayActual == e.day) {
      showNotification(
        e.title,
        e.body
      );
    }
  })
}, 1000);

// Staled code

// SW Version
const version = "1.2";
const cacheName = `static-${version}`;
// Static Cache - App Shell
const appAssets = [
  "/index.html",
  "/style/main.css",
  "/style/style.css",
  "/js/main.js",
  "/assets/bg-mic.jpg",
  "/assets/flyers/bk.jpg",
  "/assets/favicon.ico",
  "/assets/fonts/Montserrat.woff2",
  "/assets/fonts/Poppins-Black.woff2",
];

// SW Install
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(appAssets)));
});
