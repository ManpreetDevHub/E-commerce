

// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.querySelector(".cart-items");

//     // Parse product data from URL params
//     // const params = new URLSearchParams(window.location.search);

//     const img = localStorage.getItem("productImage");
//     const name = localStorage.getItem("productName");
//     const price = localStorage.getItem("productPrice");

//    // Extract relative path from the image URL
// const imgPath = new URL(img).pathname;


//     console.log(imgPath);
//     console.log(name);
//     console.log(price);

//     if (imgPath && name && price) {
//         // Create cart item element
//         const listDiv = document.createElement("div");
//         listDiv.classList.add("list");

//         listDiv.innerHTML = `
//             <div class="image">
//                 <img src="${imgPath}" alt="${name}">
//             </div>
//             <div class="description">
//                 <p>${name}</p>
//                 <span class="size-container">
//                     <p class="size-tittle">size: </p>
//                     <span class="size-list">
//                         <p class="size">xs</p>
//                         <p class="size">s</p>
//                         <p class="size">m</p>
//                         <p class="size">l</p>
//                         <p class="size">xl</p>
//                     </span>
//                 </span>
//                 <p>${price}</p>
//             </div>
//             <button class="symbol remove-btn">
//                 <i class="ri-close-line"></i>
//             </button>
//         `;

//         console.log(listDiv);

//         cartItemsContainer.appendChild(listDiv);
//         console.log(cartItemsContainer);
//     }


//         const countElement = document.querySelector(".count");
//         const btns = document.querySelectorAll(".remove-btn");
       
//         let count = parseInt(localStorage.getItem("count")) || 0;
//         countElement.textContent = count;
    
//         if (count > 0) {
//             countElement.style.display = "flex";
//         }
    
    
//         btns.forEach(function (button) {
//             button.addEventListener("click", function () {
//                 if (count > 0) {
//                     count -= 1;
//                 }
//                 localStorage.setItem("count", count);
//                 countElement.textContent = count;
    
//                 const listBox = button.closest(".list");
//                 listBox.remove();
    
//                 if (count === 0) {
//                     countElement.style.display = "none";
//                 } else {
//                     countElement.style.display = "flex";
//                 }
//             });
//         });

// // });
// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.querySelector(".listContainer");

//     // Load cart data from localStorage
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const countElement = document.querySelector(".count");

//     // Display cart count
//     let count = cart.length;
//     countElement.textContent = count;
//     countElement.style.display = count > 0 ? "flex" : "none";

//     // Display all cart items
//     cart.forEach((item, index) => {
//         const listDiv = document.createElement("div");
//         listDiv.classList.add("list");
//         listDiv.dataset.index = index; // Unique identifier for each item

//         const sizeDisplay = item.size && item.size.trim() !== "" ? item.size : "<em style='color:red'>Size not selected</em>";

//         listDiv.innerHTML = `
//             <div class="image">
//                 <img src="${item.image}" alt="${item.name}">
//             </div>
//             <div class="description">
//                 <p>${item.name}</p>
//                 <p class="size-container">Size: <span class="selected-size">${sizeDisplay}</span></p>
//                 <p>${item.price}</p>
//             </div>
//             <button class="symbol remove-btn">
//                 <i class="ri-close-line"></i>
//             </button>
//         `;
//         cartItemsContainer.appendChild(listDiv);
//     });

//     // Remove item functionality
//     cartItemsContainer.addEventListener("click", function (e) {
//         if (e.target.closest(".remove-btn")) {
//             const listDiv = e.target.closest(".list");
//             const index = listDiv.dataset.index;

//             // Remove item from cart array
//             cart.splice(index, 1);
//             localStorage.setItem("cart", JSON.stringify(cart));
//             localStorage.setItem("count", cart.length);

//             // Remove item from DOM
//             listDiv.remove();

//             // Update count display
//             count = cart.length;
//             countElement.textContent = count;
//             countElement.style.display = count > 0 ? "flex" : "none";
//         }
//     });
// // });

// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.querySelector(".listContainer");
//     const totalPriceElement = document.querySelector(".total-price");
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const countElement = document.querySelector(".count");

//     // Display cart count
//     let count = cart.length;
//     countElement.textContent = count;
//     countElement.style.display = count > 0 ? "flex" : "none";

//     // Function to calculate and display total price
//     function updateTotalPrice() {
//         const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
//         totalPriceElement.textContent = `₹ ${totalPrice.toFixed(2)}`;
//     }

//     // Display all cart items
//     cart.forEach((item, index) => {
//         const listDiv = document.createElement("div");
//         listDiv.classList.add("list");
//         listDiv.dataset.index = index;

//         const sizeDisplay = item.size && item.size.trim() !== "" ? item.size : "<em style='color:red'>Size not selected</em>";

//         listDiv.innerHTML = `
//             <div class="image">
//                 <img src="${item.image}" alt="${item.name}">
//             </div>
//             <div class="description">
//                 <p>${item.name}</p>
//                 <p class="size-container">Size: <span class="selected-size">${sizeDisplay}</span></p>
//                 <p>₹ ${item.price}</p>
//             </div>
//             <button class="symbol remove-btn">
//                 <i class="ri-close-line"></i>
//             </button>
//         `;
//         cartItemsContainer.appendChild(listDiv);
//     });

//     // Initialize total price display
//     updateTotalPrice();

//     // Remove item functionality
//     cartItemsContainer.addEventListener("click", function (e) {
//         if (e.target.closest(".remove-btn")) {
//             const listDiv = e.target.closest(".list");
//             const index = listDiv.dataset.index;

//             // Remove item from cart array
//             cart.splice(index, 1);
//             localStorage.setItem("cart", JSON.stringify(cart));
//             localStorage.setItem("count", cart.length);

//             // Remove item from DOM
//             listDiv.remove();

//             // Update count display
//             count = cart.length;
//             countElement.textContent = count;
//             countElement.style.display = count > 0 ? "flex" : "none";

//             // Update total price
//             updateTotalPrice();
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.querySelector(".listContainer");
    const totalPriceElement = document.querySelector(".total-price");
    const deliveryChargeElement = document.querySelector(".delivery-charge");
    const grandTotalElement = document.querySelector(".grand-total");
    const countElement = document.querySelector(".count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Display cart count
    function updateCartCount() {
        const count = cart.length;
        countElement.textContent = count;
        countElement.style.display = count > 0 ? "flex" : "none";
    }

    // Function to calculate and display total price
    function updateCartSummary() {
        const totalPrice = cart.reduce((acc, item) => {
            const numericPrice = parseFloat(item.price.replace(/[^0-9.]/g, ''));
            return acc + (isNaN(numericPrice) ? 0 : numericPrice);
        }, 0);

        const deliveryCharge = cart.length > 0 ? 50 : 0;
        const grandTotal = totalPrice + deliveryCharge;

        totalPriceElement.textContent = `$ ${totalPrice.toFixed(2)}`;
        deliveryChargeElement.textContent = `$ ${deliveryCharge.toFixed(2)}`;
        grandTotalElement.textContent = `$ ${grandTotal.toFixed(2)}`;
    }

    // Function to render cart items
    function renderCartItems() {
        cartItemsContainer.innerHTML = ""; // Clear existing items

        cart.forEach((item, index) => {
            const listDiv = document.createElement("div");
            listDiv.classList.add("list");
            listDiv.dataset.index = index;

            const sizeDisplay = item.size && item.size.trim() !== "" 
                ? item.size 
                : "<em style='color:red'>Size not selected</em>";

            listDiv.innerHTML = `
                <div class="image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="description">
                    <p>${item.name}</p>
                    <p class="size-container">Size: <span class="selected-size">${sizeDisplay}</span></p>
                    <p>${item.price}</p>
                </div>
                <button class="symbol remove-btn">
                    <i class="ri-close-line"></i>
                </button>
            `;

            cartItemsContainer.appendChild(listDiv);
        });

        updateCartCount();
        updateCartSummary();
    }

    // Initialize cart display
    renderCartItems();

    // Remove item functionality
    cartItemsContainer.addEventListener("click", function (e) {
        if (e.target.closest(".remove-btn")) {
            const listDiv = e.target.closest(".list");
            const index = parseInt(listDiv.dataset.index);

            // Remove item from cart array
            cart.splice(index, 1);

            // Save updated cart in localStorage
            localStorage.setItem("cart", JSON.stringify(cart));

            // Re-render cart items
            renderCartItems();
        }
    });
});

