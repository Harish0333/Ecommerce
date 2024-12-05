const products = [
    { id: 1, name: 'T-shirt', category: 'clothes', price: 590, image: 'https://5.imimg.com/data5/XA/ZR/BQ/SELLER-11193145/91cd5e21-cacb-4cce-b9c4-c29a3c56c1301569927420112-seven-rocks-men-tshirts-9081569927419182-1.jpg' },
    { id: 2, name: 'Jeans', category: 'clothes', price: 400, image: 'https://static.aceomni.cmsaceturtle.com/prod/product-image/aceomni/Wrangler/Monobrand/WMJN006864/WMJN006864_1.jpg' },
    { id: 3, name: 'Jacket', category: 'clothes', price: 600, image: 'https://i.pinimg.com/474x/52/90/28/5290288fc677dcc2c7098f0f030c5e65.jpg' },
    { id: 4, name: 'Laptop', category: 'electronics', price: 89000, image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/VI/SW/JM/145900632/apple-laptop.jpg' },
    { id: 5, name: 'Smartphone', category: 'electronics', price: 8000, image: 'https://m.media-amazon.com/images/I/41hbeJ-SaUL.jpg' },
    { id: 6, name: 'Headphones', category: 'electronics', price: 1500, image: 'https://www.addmecart.com/wp-content/uploads/2023/11/123-70.png' },
    { id: 7, name: 'Notebook', category: 'stationary', price: 50, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0LOa6CPPPnNExHrMBbjjDIhsleAL9p0HPbg&s' },
    { id: 8, name: 'Pen', category: 'stationary', price: 10, image: 'https://i.etsystatic.com/9672239/r/il/13db4f/688388693/il_570xN.688388693_qo35.jpg' },
    { id: 9, name: 'Markers', category: 'stationary', price: 30, image: 'https://images.pexels.com/photos/19711250/pexels-photo-19711250/free-photo-of-markers-on-a-bag.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 10, name: 'Apple', category: 'groceries', price: 200, image: 'https://t4.ftcdn.net/jpg/00/53/60/57/360_F_53605734_xA37KwQOPUEg1dAA4TF7FxFfdbq8SMnF.jpg' },
    { id: 11, name: 'Bread', category: 'groceries', price: 30, image: 'https://www.melskitchencafe.com/wp-content/uploads/french-bread2.jpg' },
    { id: 12, name: 'Milk', category: 'groceries', price: 50, image: 'https://www.heritagefoods.in/blog/wp-content/uploads/2020/12/shutterstock_539045662.jpg' }
];

const cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts('clothes', 'clothes-products');
    displayProducts('electronics', 'electronics-products');
    displayProducts('stationary', 'stationary-products');
    displayProducts('groceries', 'groceries-products');
    updateCart();
});

function displayProducts(category, elementId) {
    const productsContainer = document.getElementById(elementId);
    products.filter(product => product.category === category).forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: RS :${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}
