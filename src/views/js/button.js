const audio = document.getElementById("miniplayer")
const button = document.getElementById("playButton")
let isPlaying = false

function changeButton() {
    button.addEventListener("click", ( ) => {
        if (isPlaying) {
            button.classList.remove('fa-pause')
            button.classList.add('fa-play')
            audio.pause()
        } else {
            button.classList.remove('fa-play')
            button.classList.add('fa-pause')
            audio.play()
        }
        isPlaying = !isPlaying
    } )
}

export default changeButton