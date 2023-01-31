const newsletterBtn = document.querySelector(".newsletter-btn")
const popup = document.querySelector(".popup")
const popupClose = document.querySelector(".popup-exit")
const pageWrapper = document.querySelector(".page-wrapper")
let poopupActive = false

newsletterBtn.addEventListener("click", () => {
    if (poopupActive == false) {
        popup.classList.add("popup-active")
        pageWrapper.classList.add("darken-page")
        document.body.classList.add("body-inactive")
    }
})

popupClose.addEventListener("click", () => {
    popup.classList.remove("popup-active")
    document.body.classList.remove("body-inactive")
    pageWrapper.classList.remove("darken-page")
})