const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoMenuIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const shoppingCartContainer = document.querySelector('#shopping-cart-container');
const productDetailContainer = document.querySelector('#product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenu.addEventListener('click', toggleMobileMenu);
carritoMenuIcon.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    shoppingCartContainer.classList.add('inactive'); //Inactive other screens
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    shoppingCartContainer.classList.add('inactive'); //Inactive other screens
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    mobileMenu.classList.add('inactive'); //Inactive other screens
    desktopMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});

productList.push({
    name: 'Pancho',
    price: 120,
    image: 'https://images.pexels.com/photos/3428498/pexels-photo-3428498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
});


function renderProducts(products){
    for(producto of products){
        //Creating elements
        const productCard = document.createElement('div');
        productCard.setAttribute('class', 'product-card');
    
        const image = document.createElement('img');
        image.setAttribute('src', producto.image);
        image.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
    
        const productInfoDiv = document.createElement('div');
        
        const price = document.createElement('p');
        price.innerText = '$' + producto.price;
    
        const name = document.createElement('p');
        name.innerText = producto.name;
    
        const figure = document.createElement('figure');
    
        const cartImage = document.createElement('img');
        cartImage.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        //Inserting elements into another elements
    
        figure.appendChild(cartImage);
        productInfoDiv.append(price, name);
        productInfo.append(productInfoDiv, figure);
        productCard.append(image, productInfo);
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


