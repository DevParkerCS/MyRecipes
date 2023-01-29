const arrowDropFirst = document.querySelector(".first-arw")
const foodItemFirst = document.querySelectorAll(".item-first")
const arrowDropSec = document.querySelector(".sec-arw")
const foodItemSec = document.querySelectorAll(".item-sec")
const arrowDropThird = document.querySelector(".third-arw")
const foodItemThird = document.querySelectorAll(".item-third")
foodItemFirstActive = true
foodItemSecActive = true
foodItemThirdActive = true

arrowDropFirst.addEventListener("click", () => {
    if (foodItemFirstActive) {
        foodItemFirst.forEach(item => {
            item.classList.add("inactive")
            arrowDropFirst.innerHTML = "&#62;"
            foodItemFirstActive = false
        })
    } else {
        foodItemFirst.forEach(item => {
            item.classList.remove("inactive")
            arrowDropFirst.innerHTML = "&or;"
            foodItemFirstActive = true
        })
    }
})

arrowDropSec.addEventListener("click", () => {
    if (foodItemSecActive) {
        foodItemSec.forEach(item => {
            item.classList.add("inactive")
            arrowDropSec.innerHTML = "&#62;"
            foodItemSecActive = false
        })
    } else {
        foodItemSec.forEach(item => {
            item.classList.remove("inactive")
            arrowDropSec.innerHTML = "&or;"
            foodItemSecActive = true
        })
    }
})

arrowDropThird.addEventListener("click", () => {
    if (foodItemThirdActive) {
        foodItemThird.forEach(item => {
            item.classList.add("inactive")
            arrowDropThird.innerHTML = "&#62;"
            foodItemThirdActive = false
        })
    } else {
        foodItemThird.forEach(item => {
            item.classList.remove("inactive")
            arrowDropThird.innerHTML = "&or;"
            foodItemThirdActive = true
        })
    }
})