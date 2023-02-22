const formPassword = document.querySelector(".form-password")
const formPasswordConfirm = document.querySelector(".password-conf")
const formWrapper = document.querySelector(".signup-wrapper")
const formBtn = document.querySelector(".form-btn")
const signupThanks = document.querySelector(".signup-thanks")
const signupBtn = document.querySelector(".signup-btn")
const signInChoiceWrapper = document.querySelector(".signin-choice-wrap")
const signinTitle = document.querySelector(".signin-title")

formWrapper.addEventListener("change", (e) => {
    if (formPassword.value == formPasswordConfirm.value) {
        formPasswordConfirm.setCustomValidity("")
    }
    else {
        formPasswordConfirm.setCustomValidity("Passwords Don't Match")
    }
})

formWrapper.addEventListener("submit", (e) => {
    e.preventDefault()
    formWrapper.classList.add("hidden")
    signupThanks.classList.remove("hidden")
})

signupBtn.addEventListener("click", () => {
    formWrapper.classList.remove("hidden")
    signInChoiceWrapper.classList.add("hidden")
    signinTitle.innerHTML = "Sign Up"
})