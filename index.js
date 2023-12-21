let menuArray = []
let currentItem
let bagCount = document.querySelector("#number-in-cart")


document.addEventListener("DOMContentLoaded", () => {
   console.log("DOM LOADED")
  
})


fetch("http://localhost:3000/menu")
   .then (response => response.json())
   .then (menuData => {
       buildSpan(menuData)
       showDetails(menuData[0])
       addFoodToCart()
   })


   function buildSpan (menuData) {
       let menuList = document.querySelector("#menu-items")
       menuData.forEach(menuItem => {
           let spanItem = document.createElement("span")
           spanItem.textContent = menuItem.name
           menuList.appendChild(spanItem)
           spanItem.addEventListener("click", (e) => {
               console.log(menuItem)
               showDetails(menuItem)
           })
       })
   }


   function showDetails(menuData) {
       currentItem = menuData
       console.log(menuData)


       const detailImage = document.querySelector("#dish-image")
       detailImage.src = menuData.image


       const detailName = document.querySelector("#dish-name")
       detailName.textContent = menuData.name


       const detailDescription = document.querySelector("#dish-description")
       detailDescription.textContent = menuData.description


       const detailPrice = document.querySelector("#dish-price")
       detailPrice.textContent = menuData.price


       bagCount.textContent = menuData.number_in_bag
   }


   function addFoodToCart () {
       let userInput = document.querySelector("#cart-form")
       userInput.addEventListener("submit", (e) => {
           e.preventDefault()
           currentItem.number_in_bag += parseInt(e.target["cart-amount"].value)
           console.log(currentItem)
           showDetails(currentItem)
           e.target.reset()
       })
   }






   //GITHUB SOLUTION
// let currentDish;


// fetch("http://localhost:3000/menu")
// .then(response => response.json())
// .then(menuData => {
//     buildMenu(menuData);
//     setDish(menuData[0])
//     setupCart();
// });


// function buildMenu(menuData) {
//     let menuList = document.querySelector("#menu-items");
//     menuData.forEach(item => {
//         let menuListItem = document.createElement("span");
//         menuListItem.textContent = item.name;
//         menuList.appendChild(menuListItem);


//         menuListItem.addEventListener('click', () => {
//             setDish(item)
//         })
//     });
// }


// function setDish(dish) {
//     currentDish = dish;


//     let dishImage = document.querySelector("#dish-image");
//     let dishName = document.querySelector("#dish-name");
//     let dishDescription = document.querySelector("#dish-description");
//     let dishPrice = document.querySelector("#dish-price");
//     let numberInCart = document.querySelector("#number-in-cart");
  
//     dishImage.src = dish.image;
//     dishName.textContent = dish.name;
//     dishDescription.textContent = dish.description;
//     dishPrice.textContent = `$${dish.price}`;
//     numberInCart.textContent = dish.number_in_bag;
// }


// function setupCart() {
//     let addToCartForm = document.querySelector("#cart-form")
//     addToCartForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         currentDish.number_in_bag += parseInt(event.target["cart-amount"].value);
//         setDish(currentDish);
//         addToCartForm.reset();
//     });
// }





