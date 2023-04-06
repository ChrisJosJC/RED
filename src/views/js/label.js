let np = document.getElementById('radio_label'),
    listeners = document.getElementById('label_listeners'),
    nexttrack = document.getElementById('label_track'),
    url = 'https://c11.radioboss.fm/w/nowplayinginfo?u=314';

function updateTitle() {
    let req = new XMLHttpRequest();
    req.onload = function (e) {
        if (req.status === 200) {
            np.textContent = req.response.nowplaying;
            if (listeners !== null)
                listeners.innerText = req.response.listeners;
            if (nexttrack !== null)
                nexttrack.innerText = req.response.nexttrack;
        }
    };
    req.open('GET', url + '&_=' + new Date().getTime(), true);
    req.responseType = 'json';
    req.send();
}

export default updateTitle