const newsletterBtn = document.querySelector(".newsletter-btn")
const popup = document.querySelector(".popup")
const popupClose = document.querySelector(".popup-exit")
let poopupActive = false

newsletterBtn.addEventListener("click", () => {
    if (poopupActive == false) {
        popup.classList.add("popup-active")
        document.body.classList.add("inactive-body")
    }
})

popupClose.addEventListener("click", () => {
    popup.classList.remove("popup-active")
})