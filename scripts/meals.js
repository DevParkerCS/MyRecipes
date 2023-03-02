const arrowDropFirst = document.querySelector(".first-arw")
const foodItemFirst = document.querySelectorAll(".item-first")
const arrowDropSec = document.querySelector(".sec-arw")
const foodItemSec = document.querySelectorAll(".item-sec")
const arrowDropThird = document.querySelector(".third-arw")
const foodItemThird = document.querySelectorAll(".item-third")
let foodItemFirstActive = true
let foodItemSecActive = true
let foodItemThirdActive = true

arrowDropFirst.addEventListener("click", () => {
    if (foodItemFirstActive) {
        setFoodItemsInactive(foodItemFirst, arrowDropFirst)
        foodItemFirstActive = false
    } else {
        setFoodItemsActive(foodItemFirst, arrowDropFirst)
        foodItemFirstActive = true
    }
})

arrowDropSec.addEventListener("click", () => {
    if (foodItemSecActive) {
        setFoodItemsInactive(foodItemSec, arrowDropSec)
        foodItemSecActive = false
    } else {
        setFoodItemsActive(foodItemSec, arrowDropSec)
        foodItemSecActive = true
    }
})

arrowDropThird.addEventListener("click", () => {
    if (foodItemThirdActive) {
        setFoodItemsInactive(foodItemThird, arrowDropThird)
        foodItemThirdActive = false
    } else {
        setFoodItemsActive(foodItemThird, arrowDropThird)
        foodItemThirdActive = true
    }
})

const setFoodItemsInactive = (foodItem, arrowDrop) => {
    foodItem.forEach(item => {
        item.classList.add("inactive")
        arrowDrop.classList.add("rotate")
    })
}

const setFoodItemsActive = (foodItem, arrowDrop) => {
    foodItem.forEach(item => {
        item.classList.remove("inactive")
        arrowDrop.classList.remove("rotate")
    })
}