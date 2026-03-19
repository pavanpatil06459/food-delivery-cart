// Add Food Items to the Menu

const foods = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "images/burger.png",
    price: 199,
    desc: "Juicy grilled chicken burger with cheese."
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image: "images/pizza.png",
    price: 299,
    desc: "Fresh oven baked pizza with mozzarella."
  },
  {
    id: 3,
    name: "Chicken Roll",
    image: "images/chicken-roll.png",
    price: 249,
    desc: "Delicious chicken roll with fresh vegetables."
  },
  {
    id: 4,
    name: "Veg Sandwich",
    image: "images/sandwich.png",
    price: 149,
    desc: "Healthy grilled sandwich with veggies."
  },
  {
    id: 5,
    name: "Spring Roll",
    image: "images/spring-roll.png",
    price: 99,
    desc: "Crispy spring rolls filled with veggies."
  },
  {
    id: 6,
    name: "Spaghetti",
    image: "images/spaghetti.png",
    price: 199,
    desc: "Delicious spaghetti with your choice of sauce."
  },
  {
    id: 7,
    name: "Lasagna",
    image: "images/lasagna.png",
    price: 249,
    desc: "Delicious layered pasta with cheese and sauce."
  },
  {
    id: 8,
    name: "Fried Chicken",
    image: "images/fried-chicken.png",
    price: 299,
    desc: "Crispy fried chicken with your choice of sauce."
  }
];

const foodGrid = document.getElementById("foodGrid");

foods.forEach(food => {

  const card = document.createElement("div");
  card.classList.add("food-card");

  card.innerHTML = `  
    <img src="${food.image}" alt="${food.name}">
    
    <div class="food-info">

      <h3>${food.name}</h3>

      <p class="hide">${food.desc}</p>

      <div class="food-bottom">

        <span class="price">₹${food.price}</span>

        <button class="cart-btn" data-name="${food.name}">
          Add to Cart
        </button>

      </div>

    </div>
  `;

  foodGrid.appendChild(card);

  // click on add to btn 
  const CartBtn = card.querySelector('.cart-btn')
  CartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addToCart(food);
  });


});

// create empty array for condition check product ID
const cartProduct = [];

const addToCart = (food) => {

  // existing products 
  const existingProducts = cartProduct.find(item => item.id === food.id);
  if (existingProducts) {
    alert('Item Already In Your Cart!');
    return;
  }

  cartProduct.push(food);
  let quantity = 1;
  let price = Number(food.price.replace('$', ''))

  const cartItem = document.createElement('div');
  cartItem.classList.add('item');

  const cartList = document.querySelector('.cart-list');

  cartItem.innerHTML = `
  <div class="ima-container">
                        <img src="${food.image}">
                     </div>
                     <div class="h4size">
                        <h4>${food.name}</h4>
                        <h4 class="total-item">${food.price}</h4>
                     </div>
                     <div class="flex">
                        <a href="#" class="quantity-btn">
                           <i class="fa-solid fa-minus minus"></i>
                        </a>
                        <h4 class="quantity-value">${quantity}</h4>
                        <a href="#" class="quantity-btn">
                           <i class="fa-solid fa-plus plus"></i>
                        </a>
                     </div>
  `;

  cartList.appendChild(cartItem);


  // Quantity Plus And Minus
  const plusBtn = cartItem.querySelector('.plus');
  const quantityValue = cartItem.querySelector('.quantity-value')
  const itemTotal = cartItem.querySelector('.total-item');
  plusBtn.addEventListener('click', (e) => {
    e.preventDefault();

    quantity++
    quantityValue.textContent = quantity;
    itemTotal.textContent = '$${price * quantity}'

  })

}






// hamburger menu toggle

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {

  mobileMenu.classList.toggle("active");
  hamburger.classList.toggle("active");

});


// close menu when clicking outside

document.addEventListener("click", (e) => {

  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {

    mobileMenu.classList.remove("active");
    hamburger.classList.remove("active");

  }

});


//Slider for reviews
const reviews = document.querySelectorAll(".review");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function showReview(i) {

  reviews.forEach((review) => {
    review.classList.remove("active");
  });

  reviews[i].classList.add("active");

}

nextBtn.addEventListener("click", () => {

  index++;

  if (index >= reviews.length) {
    index = 0;
  }

  showReview(index);

});

prevBtn.addEventListener("click", () => {

  index--;

  if (index < 0) {
    index = reviews.length - 1;
  }

  showReview(index);

});


// AUTO SLIDE

// setInterval(()=>{

// index++;

// if(index >= reviews.length){
// index = 0;
// }

// showReview(index);

// },3000);


// bounce effct for add to cart button

const buttons = document.querySelectorAll(".cart-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    btn.classList.add("bounce");

    setTimeout(() => {
      btn.classList.remove("bounce");
    }, 400);

  });
});



// This is for show cart on window (toggle)
const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeCart = document.getElementById("close-btn")

cartIcon.addEventListener("click", (e) => {
  e.preventDefault(); // stop page refresh
  cartTab.classList.toggle("active");
});

// Close Cart - Tab 
closeCart.addEventListener("click", () => cartTab.classList.remove("active"));


