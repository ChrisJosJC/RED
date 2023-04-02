console.log("Service Worker is working!");
let data
let hourActual 
let dayActual 

function showNotification(title="",body="",image='/assets/bg-mic.jpg') {
    self.registration.showNotification(title, {
        body,
        icon: './assets/favicon.png',
        image
    })
}

self.addEventListener('push', (e)=>{
    data = e.data.json()
    console.log(data);
})


function isTime(hour,day) {
    try {
        return data[`${hour}-${day}`] 
    } catch (error) {
        return
    }
}

setInterval(() => {
    hourActual = new Date().toLocaleTimeString()
    dayActual = new Date().getDay()
    if (isTime(hourActual,dayActual)) {
        console.log("Ya es hora!");
        actual = isTime(hourActual)
        showNotification(actual.title, actual.body, actual.image)
    }
}, 1000);
