
document.addEventListener("DOMContentLoaded", function() {  
    const countElements = document.querySelectorAll(".count");
    const btn = document.querySelectorAll("#btn");
  
    let count = parseInt(localStorage.getItem("count")) || 0;
    countElements.forEach(function(element) {
        element.textContent = count;
    });
    if(count > 0) {
        countElements.forEach(element => {
            element.style.display = "flex";
        });
    }   

    btn.forEach(function(button) {
        button.addEventListener("click", function() {
            count += 1;
            countElements.forEach(function(element) {
                localStorage.setItem("count", count);
                console.log(typeof count);
                element.textContent = count;
            });

            countElements.forEach(element => {
                element.style.display = "flex";
            });

            const card = button.closest('.card');
            const imgSrc = card.querySelector('.main-image').src;
            const name = card.querySelector('.tittle').textContent;
            const price = card.querySelector('.price').textContent;

            let cart = JSON.parse(localStorage.getItem('cart')) || [];

                    cart.push({
                        image: imgSrc,
                        name: name,
                        price: price,
                    });
            
                    localStorage.setItem('cart', JSON.stringify(cart));
            
                    
            alert('Product added to cart!');
            

            
        });
    });
});


