const hamburgerBtn = document.querySelector(".hamburger")
const navAWrapper = document.querySelector(".nav-a-wrapper")

let navShown = false

hamburgerBtn.addEventListener("click", () => {
    if (!navShown) {
        navAWrapper.style.right = 0
        navShown = true
    }
    else {
        navAWrapper.style.right = `100%`
        navShown = false
    }
})