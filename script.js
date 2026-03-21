/*FOOD DATA (MENU ITEMS) */
const foods = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "images/burger.png",
    price: 199,
    desc: "Juicy grilled chicken burger with cheese.",
  },
  {
    id: 2,
    name: "Cheese Pizza",
    image: "images/pizza.png",
    price: 299,
    desc: "Fresh oven baked pizza with mozzarella.",
  },
  {
    id: 3,
    name: "Chicken Roll",
    image: "images/chicken-roll.png",
    price: 249,
    desc: "Delicious chicken roll with fresh vegetables.",
  },
  {
    id: 4,
    name: "Veg Sandwich",
    image: "images/sandwich.png",
    price: 149,
    desc: "Healthy grilled sandwich with veggies.",
  },
  {
    id: 5,
    name: "Spring Roll",
    image: "images/spring-roll.png",
    price: 99,
    desc: "Crispy spring rolls filled with veggies.",
  },
  {
    id: 6,
    name: "Spaghetti",
    image: "images/spaghetti.png",
    price: 199,
    desc: "Delicious spaghetti with your choice of sauce.",
  },
  {
    id: 7,
    name: "Lasagna",
    image: "images/lasagna.png",
    price: 249,
    desc: "Layered pasta with cheese and sauce.",
  },
  {
    id: 8,
    name: "Fried Chicken",
    image: "images/fried-chicken.png",
    price: 299,
    desc: "Crispy fried chicken with sauce.",
  },
];

/*RENDER FOOD CARDS */
const foodGrid = document.getElementById("foodGrid");

foods.forEach((food) => {
  const card = document.createElement("div");
  card.classList.add("food-card");

  card.innerHTML = `
    <img src="${food.image}" alt="${food.name}">
    
    <div class="food-info">
      <h3>${food.name}</h3>
      <p class="hide">${food.desc}</p>

      <div class="food-bottom">
        <span class="price">₹${food.price}</span>
        <button class="cart-btn">Add to Cart</button>
      </div>
    </div>
  `;

  foodGrid.appendChild(card);

  // Add to Cart button click
  const cartBtn = card.querySelector(".cart-btn");
  cartBtn.addEventListener("click", () => {
    addToCart(food);

    // button animation
    cartBtn.classList.add("bounce");
    setTimeout(() => cartBtn.classList.remove("bounce"), 400);
  });
});

/* CART LOGIC*/
let cartProduct = [];

const addToCart = (food) => {
  // Prevent duplicate items
  const exists = cartProduct.find((item) => item.id === food.id);
  if (exists) {
    alert("Item already in cart!");
    return;
  }

  cartProduct.push(food);

  let quantity = 1;
  let price = food.price;

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");

  const cartList = document.querySelector(".cart-list");

  cartItem.innerHTML = `
    <div class="ima-container">
      <img src="${food.image}">
    </div>

    <div class="h4size">
      <h4>${food.name}</h4>
      <h4 class="total-item">₹${price}</h4>
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
  updateTotals();

  /* Quantity Controls*/
  const plusBtn = cartItem.querySelector(".plus");
  const minusBtn = cartItem.querySelector(".minus");
  const quantityValue = cartItem.querySelector(".quantity-value");
  const itemTotal = cartItem.querySelector(".total-item");
  const cartTotal = document.querySelector('.cart-total');

  // Increase quantity
  plusBtn.addEventListener("click", (e) => {
    e.preventDefault();
    quantity++;
    quantityValue.textContent = quantity;
    itemTotal.textContent = `₹${price * quantity}`;
    updateTotals();
  });



  // Decrease quantity
  minusBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (quantity > 1) {
      quantity--;
      quantityValue.textContent = quantity;
      itemTotal.textContent = `₹${price * quantity}`;
       updateTotals();
    } else {
      cartItem.classList.add("slide-out");

      setTimeout(() => {
        cartItem.remove();
        cartProduct = cartProduct.filter((item) => item.id !== food.id);
        updateTotals();
      }, 300);
    }
    
  });
};

const cartTotal = document.querySelector('.cart-total');
const cartValue = document.querySelector('.cart-value');

const updateTotals = () => {
  let totalPrice = 0;
  let totalQuantity = 0;

  document.querySelectorAll('.item').forEach(item => {

    const quantity = Number(item.querySelector('.quantity-value').textContent);

    const priceText = item.querySelector('.total-item').textContent;
    const price = parseInt(priceText.replace('₹', ''));

    totalPrice += price;
    totalQuantity += quantity;
  });

  cartTotal.textContent = `₹${totalPrice}`;
  cartValue.textContent = totalQuantity;
};



/* HAMBURGER MENU*/
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});


// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});



/*  REVIEW SLIDER */
const reviews = document.querySelectorAll(".review");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let index = 0;

function showReview(i) {
  reviews.forEach((r) => r.classList.remove("active"));
  reviews[i].classList.add("active");
}


// Next
nextBtn.addEventListener("click", () => {
  index = (index + 1) % reviews.length;
  showReview(index);
});



// Previous
prevBtn.addEventListener("click", () => {
  index = (index - 1 + reviews.length) % reviews.length;
  showReview(index);
});

/* CART TOGGLE*/
const cartIcon = document.querySelector(".cart-icon");
const cartTab = document.querySelector(".cart-tab");
const closeCart = document.getElementById("close-btn");



// Open/Close cart
cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cartTab.classList.toggle("active");
});



// Close button
closeCart.addEventListener("click", () => {
  cartTab.classList.remove("active");
});
