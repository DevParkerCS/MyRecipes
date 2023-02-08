const newsletterBtn = document.querySelector(".newsletter-btn")
const popup = document.querySelector(".popup")
const popupClose = document.querySelector(".popup-exit")
const pageWrapper = document.querySelector(".page-wrapper")
const popupForm = document.querySelector(".popup-form-wrapper")
const popupText = document.querySelector(".popup-text-wrap")
const submittedText = document.querySelector(".submitted-text")
const userName = document.querySelector(".user-name")
const userEmail = document.querySelector(".user-email")
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

popupForm.addEventListener("submit", (e) => {
    e.preventDefault()
    popupText.classList.add("submitted")
    submittedText.style.display = "block"
    submittedText.innerHTML = `<p>Thank you ${userName.value} For Joining Our Newsletter!</p><p>We Will Be Sure To Email You When New Exciting Meals Are Posted</p><button class="popup-submit submitted-btn">Enter Another User</button>`
    userName.value = ""
    userEmail.value = ""
    const popupBtn = document.querySelector(".submitted-btn")
    popupBtn.addEventListener("click", () => {
        popupText.classList.remove("submitted")
        submittedText.style.display = "none"
    })
})