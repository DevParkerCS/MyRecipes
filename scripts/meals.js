const arrowDropFirst = document.querySelector(".first-arw")
const foodItemFirst = document.querySelectorAll(".item-first")
const arrowDropSec = document.querySelector(".sec-arw")
const foodItemSec = document.querySelectorAll(".item-sec")
foodItemFirstActive = true
foodItemSecActive = true


arrowDropFirst.addEventListener("click", () => {
    if (foodItemFirstActive) {
        foodItemFirst.forEach(item => {
            item.style.display = "none"
            arrowDropFirst.innerHTML = "&#62;"
            foodItemFirstActive = false
        })
    } else {
        foodItemFirst.forEach(item => {
            item.style.display = "flex"
            arrowDropFirst.innerHTML = "&or;"
            foodItemFirstActive = true
        })
    }
})

arrowDropSec.addEventListener("click", () => {
    if (foodItemSecActive) {
        foodItemSec.forEach(item => {
            item.style.display = "none"
            arrowDropSec.innerHTML = "&#62;"
            foodItemSecActive = false
        })
    } else {
        foodItemSec.forEach(item => {
            item.style.display = "flex"
            arrowDropSec.innerHTML = "&or;"
            foodItemSecActive = true
        })
    }
})