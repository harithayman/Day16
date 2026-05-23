


let women = document.querySelector('#women');
let rw = new XMLHttpRequest();
rw.open("GET", "https://dummyjson.com/products/category/womens-dresses", true);
rw.onload = function () {
    if (rw.readyState == 4 && rw.status == 200) {
        let response = JSON.parse(rw.responseText);
        let cardData = response.products;

        if (cardData.length > 0) {
            let mainProduct = cardData[0];
            let sideProducts = cardData.slice(1, 4);
            let sideProductsHTML = '';
            sideProducts.map((ele) => {
                sideProductsHTML += `
                <div class="side-card">
                    <img src="${ele.thumbnail}" alt="${ele.title}">
                </div>
                `;
            });

            women.innerHTML = `
            <div class="row g-5 align-items-start">
                <div class="col-lg-7">
                    <div class="main-product">
                        <img src="${mainProduct.thumbnail}" alt="${mainProduct.title}">
                        <div class="product-info">
                            <div class="title-price">
                                <div>
                                    <h2>${mainProduct.title}</h2>
                                    <p>${mainProduct.description.substring(0, 80)}...</p>
                                </div>
                                <span>$${mainProduct.price}</span>
                            </div>
                            <button class="cart-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="side-products">
                        ${sideProductsHTML}
                    </div>
                </div>
            </div>
            `;
        }
    }
}
rw.send();

let man = document.querySelector('#man');
let rm = new XMLHttpRequest();
rm.open("GET", "https://dummyjson.com/products/category/mens-shirts", true);
rm.onload = function () {
    if (rm.readyState == 4 && rm.status == 200) {
        let response = JSON.parse(rm.responseText);
        let cardData = response.products;

        if (cardData.length > 0) {
            let mainProduct = cardData[0]; 
            let sideProducts = cardData.slice(1, 4); 

            let sideProductsHTML = '';
            sideProducts.map((ele) => {
                sideProductsHTML += `
                <div class="side-card">
                    <img src="${ele.thumbnail}" alt="${ele.title}">
                </div>
                `;
            });

            man.innerHTML = `
            <div class="row g-5 align-items-start">
                <div class="col-lg-7">
                    <div class="main-product">
                        <img src="${mainProduct.thumbnail}" alt="${mainProduct.title}">
                        <div class="product-info">
                            <div class="title-price">
                                <div>
                                    <h2>${mainProduct.title}</h2>
                                    <p>${mainProduct.description.substring(0, 80)}...</p>
                                </div>
                                <span>$${mainProduct.price}</span>
                            </div>
                            <button class="cart-btn">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="side-products">
                        ${sideProductsHTML}
                    </div>
                </div>
            </div>
            `;
        }
    }
}
rm.send();