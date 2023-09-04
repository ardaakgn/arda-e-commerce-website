import headerFunc from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

// ! add product to localStorage

(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  searchFunc(data);
  
})();




const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
// ! add product to localStorage //.data

