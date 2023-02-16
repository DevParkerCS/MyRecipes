const hamburgerBtn = document.querySelector(".hamburger")
const navWrapper = document.querySelector(".nav-wrapper")
const navAWrapper = document.querySelector(".nav-a-wrapper")

let navShown = false

hamburgerBtn.addEventListener("click", () => {
    if (!navShown) {
        navAWrapper.classList.add("nav-shown")
        navWrapper.classList.add("nav-shown")
        navShown = true
    }
    else {
        navAWrapper.classList.remove("nav-shown")
        navWrapper.classList.remove("nav-shown")
        navShown = false
    }
})