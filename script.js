const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")
const viewMoreBtn = document.querySelector('#view-more')

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

navMenu.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
})

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
//     hamburger.classList.remove("active")
//     navMenu.classList.remove("active")
// }))

let currentItem = 3

viewMoreBtn.onclick = () => {
    let blogs = [...document.querySelectorAll('.grid-container .blog')]
    for (let i = currentItem; i < currentItem + 3; i++) {
        blogs[i].style.display = 'block'
    }

    currentItem += 3

    if (currentItem >= blogs.length) {
        viewMoreBtn.style.display = 'none'
    }
}