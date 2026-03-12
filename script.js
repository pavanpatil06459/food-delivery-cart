const cartButtons = document.querySelectorAll(".cart-btn")
const cartValue = document.querySelector(".cart-value")

let count = 0

cartButtons.forEach(button => {

button.addEventListener("click", () => {

count++
cartValue.innerText = count

})

})