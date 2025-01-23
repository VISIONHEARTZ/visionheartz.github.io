// script.js
gsap.registerPlugin(ScrollTrigger);

// Hero Animations
gsap.from(".hero h1", {
    opacity: 0,
    y: 100,
    duration: 1.2,
    delay: 0.5,
    ease: "power4.out"
});

gsap.from(".hero p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8,
    ease: "power4.out"
});

// Product Card Animations
gsap.from(".product-card", {
    scrollTrigger: {
        trigger: ".products-grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power4.out"
});

// Cart Functionality
const cartBtn = document.querySelector('a[href="#cart"]');
const cartSidebar = document.querySelector('.cart-sidebar');
const closeCart = document.querySelector('.close-cart');
const addToCartBtns = document.querySelectorAll('.add-to-cart');
let cartCount = 0;

// Open cart
cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    cartSidebar.classList.add('open');
});

// Close cart
closeCart.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
});

// Add to cart functionality
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        cartCount++;
        cartBtn.textContent = `CART (${cartCount})`;
        cartSidebar.classList.add('open');
        
        // Add item to cart (example)
        const product = btn.closest('.product-card');
        const title = product.querySelector('.product-title').textContent;
        const price = product.querySelector('.product-price').textContent;
        
        addItemToCart(title, price);
    });
});

// Function to add item to cart
function addItemToCart(title, price) {
    const cartItems = document.querySelector('.cart-items');
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    
    cartItem.innerHTML = `
        <div class="cart-item-image"></div>
        <div class="cart-item-details">
            <div class="cart-item-title">${title}</div>
            <div class="cart-item-price">${price}</div>
        </div>
    `;
    
    cartItems.appendChild(cartItem);
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '1.5rem 4rem';
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        navbar.style.padding = '2rem 4rem';
        navbar.style.background = 'rgba(255, 255, 255, 0.8)';
    }
});