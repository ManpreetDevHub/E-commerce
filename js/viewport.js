

    document.addEventListener("DOMContentLoaded", function () {
        const countElements = document.querySelectorAll(".count");
        const btn = document.querySelectorAll(".add-to-cart-button");
        let count = parseInt(localStorage.getItem("count")) || 0;

        countElements.forEach(element => {
            element.textContent = count;
            element.style.display = "none";
        });
        if(count > 0) {
        countElements.forEach(element => {
            element.style.display = "flex";
        });
    }   

        btn.forEach(function (button) {
            button.addEventListener("click", function () {
                count += 1;
                countElements.forEach(function (element) {
                    localStorage.setItem("count", count);
                    element.textContent = count;
                   
                });
                countElements.forEach(element => {
                    element.style.display = "flex";
                });
            });
        });
    });

   

    const sizes = document.querySelectorAll('.size');
    sizes.forEach(size => {
        size.addEventListener('click', () => {
            sizes.forEach(s => s.classList.remove('selected'));
            size.classList.add('selected');
        });
    });

// JavaScript code to group image paths by color
const imagePaths = [
        [
            "/images/product1_green_1.jpg",
            "/images/product1_green_2.jpg",
            "/images/product1_green_3.jpg",
            "/images/product1_green_4.jpg"
        ],
        [
            "/images/product1_maroon_1.jpg",
            "/images/product1_maroon_2.jpg",
            "/images/product1_maroon_3.jpg",
            "/images/product1_maroon_4.jpg"
        ],
        [
            "/images/product1_red_1.jpg",
            "/images/product1_red_2.jpg",
            "/images/product1_red_3.jpg",
            "/images/product1_red_4.jpg"
        ],
        [
            "/images/product1_white_1.jpg",
            "/images/product1_white_2.jpg",
            "/images/product1_white_3.jpg",
            "/images/product1_white_4.jpg"
        ],
        [
            "/images/product1_yellow_1.jpg",
            "/images/product1_yellow_2.jpg",
            "/images/product1_yellow_3.jpg",
            "/images/product1_yellow_4.jpg"
        ],
        [
            "/images/product2_blue_1.jpg",
            "/images/product2_blue_2.jpg",
            "/images/product2_blue_3.jpg",
            "/images/product2_blue_4.jpg"

            
        ]
    ];

    const productImageList = [
  "/images/product3_grey_1.jpg",
  "/images/product4_green_1.jpg",
  "/images/product5_black_1.jpg",
  "/images/product6_brown_1.jpg",
  "/images/product5_blue_1.jpg",
  "/images/product6_green_1.jpg"
];


// Extracting Product Names and Prices as Arrays
const productNames = [
    "Men Casual Round Neck T-shirt", "Men Casual Round Neck T-shirt",
    "Men Casual Round Neck T-shirt", "Men Casual Round Neck T-shirt",
    "Men Casual Round Neck T-shirt", "Stylish Men Polyester Tshirts",
    "EyeBogler Men's Tshirts", "Full Sleeve Tshirt for Boys",
    "Jeans Shirt Classy Designer Shirt", "Best T-shirt",
    "Polo T-shirt", "Printed Round Neck T-shirt"
];

const productPrices = [
    "$19.99", "$29.99", "$39.99", "$19.99",
    "$29.99", "$39.99", "$19.99", "$29.99",
    "$39.99", "$25.99", "$33.99", "$15.99"
];

const urlParams = new URLSearchParams(window.location.search);
        let productId = urlParams.get('id');

        productId=parseInt(productId);
        
 let mainImage=document.querySelector('.main-image');
 const thumbnail1 = document.querySelector('.first');
 const thumbnail2 = document.querySelector('.second');
 const thumbnail3 = document.querySelector('.third');

 // Displaying Product Name and Price
const heading = document.querySelector('.heading');
const price = document.querySelector('.price');
heading.textContent = productNames[productId];
price.textContent = productPrices[productId];


console.log("Product Name:", heading.textContent);
console.log("Product Price:", price.textContent);


// Displaying Product Images
 
 if(productId<=5){
    mainImage.src=imagePaths[productId][0];
        
        thumbnail1.src=imagePaths[productId][1];
      
        thumbnail2.src=imagePaths[productId][2];
       
        thumbnail3.src=imagePaths[productId][3];

 }

        if(productId>5){
            productId=productId-6;
            mainImage.src=productImageList[productId];
            thumbnail1.src=productImageList[productId];
            thumbnail2.src=productImageList[productId];
            thumbnail3.src=productImageList[productId];

            console.log(productImageList[productId]);
        }


    let thumbnails = document.querySelectorAll('.thumbnail');
 mainImage = document.querySelector('.main-image');
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            let previousSrc = mainImage.src;
            mainImage.src = thumbnail.src;
            thumbnail.src = previousSrc;

        });
    });


document.querySelectorAll('.add-to-cart-button').forEach(button => {
    button.addEventListener('click', () => {
        // Get product data from the current product container
        const listBox = button.closest(".product-container");
        const imgSrc = listBox.querySelector('.main-image').src;
        const name = listBox.querySelector('.heading').textContent;
        const price = listBox.querySelector('.price').textContent;
        
        // Check for selected size
        const selectedSize = listBox.querySelector('.size.selected');
        if (!selectedSize) {
            alert("Please select a size before adding to cart.");
            return; // Exit if no size is selected
        }

        const size = selectedSize.textContent;

        // Add product to cart (in localStorage)
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        cart.push({
            image: imgSrc,
            name: name,
            price: price,
            size: size
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        // Update count
        let count = cart.length;
        localStorage.setItem("count", count);

        // Update cart count in the navbar
        document.querySelectorAll(".count").forEach(countElement => {
            countElement.textContent = count;
            countElement.style.display = count > 0 ? "flex" : "none";
        });

        alert("Product added to cart!");
    });
});
