const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

// navMenu.addEventListener("click", () => {
//     hamburger.classList.remove("active")
//     navMenu.classList.remove("active")
// })

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))

const viewMore = document.getElementById("view-more")
const hidden = document.getElementById("hidden-container") 

viewMore.addEventListener("click", function() {
    hidden.style.display = "block"
})