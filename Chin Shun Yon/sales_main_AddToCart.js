document.addEventListener('DOMContentLoaded', function () {
    const buyButtons = document.querySelectorAll('.buy-button');
    let shoppingCart = loadCartFromLocalStorage(); // Load cart data from localStorage

    // Define an array of products
    const products = [
        {
            id: "BPV1",
            name: 'Blackpineapple V1',
            price: 430.00,
        },
        {
            id: "BPV2",
            name: 'Blackpineapple V2',
            price: 490.00,
        },
        {
            id: "BPV3",
            name: 'Blackpineapple V3',
            price: 590.00,
        },
        {
            id: "BPV4",
            name: 'Blackpineapple V4',
            price: 690.00,
        },
        {
            id: "BPV5",
            name: 'Blackpineapple V5',
            price: 790.00,
        },
        {
            id: "SWS9",
            name: 'Smartwatch Series9',
            price: 500.00, //idk price yet
        },
        
    ];

    // Add event listeners to "Add to Cart" buttons
    buyButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const quantityInput = document.querySelector(`#quantity${productId}`);
            const quantity = parseInt(quantityInput.value, 10) || 1; // Use 1 as default quantity
            addToCart(productId, quantity);
            saveCartToLocalStorage(shoppingCart); // Save cart data to localStorage after adding a product

            alert(`Successfully added ${quantity} of ${productName} to the cart`);
        });
    });


    // Add a product to the shopping cart with a specified quantity
    function addToCart(productId, quantity) {
        // Find the product with the specified productId
        const product = products.find(p => p.id === productId);

        if (!product) {
            console.error(`Product with ID ${productId} not found.`);
            return;
        }

        // Check if the product is already in the cart
        const existingProduct = shoppingCart.find(item => item.id === productId);

        if (existingProduct) {
            // If the product is already in the cart, increase its quantity
            existingProduct.quantity += quantity;
        } else {
            // Otherwise, add it to the cart with the specified quantity
            shoppingCart.push({ ...product, quantity });
        }

    }

    // Function to load cart data from localStorage
    function loadCartFromLocalStorage() {
        const cartData = localStorage.getItem('shoppingCart');
        return cartData ? JSON.parse(cartData) : [];
    }

    // Function to save cart data to localStorage
    function saveCartToLocalStorage(cart) {
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Initialize the cart display
    //updateCartDisplay();    
});
