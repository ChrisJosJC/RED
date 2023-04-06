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

self.addEventListener('message', (event) => {
  console.log("Tu id de cliente es:",event.data)
});

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

// Cache

caches.open("cache-v1.1").then((cache) => {
  cache.add("/index.html");
  cache.add("/style/style.css");
  cache.add("/assets/bg-mic.jpg");
  cache.addAll([
    "/index.html",
    "/style/style.css",
    "/js/main.js",
    "/assets/bg-mic.jpg",
    "/assets/fonts/Montserrat.woff2",
    "/assets/fonts/Poppins-Black.woff2",
  ]);
});
