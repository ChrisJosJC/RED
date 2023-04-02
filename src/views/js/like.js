// const audio = document.getElementById("miniplayer")
const section = document.querySelector("section")
let isLiked = false

function giveLike(stateOne, stateTwo) {
    section.addEventListener("click", e => {
        isLiked = !isLiked
        // console.log(e.target.classList["like"])
        if (e.target.className == 'fas fa-solid fa-heart fa-beat-fade like') {
            if (isLiked) {
                e.target.style.color ='red' 
            } else {
                e.target.style.color = 'black'
            }
        }
    } )
}

export default giveLike