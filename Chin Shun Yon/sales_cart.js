
document.addEventListener('DOMContentLoaded', function () {
    // Define an array of products (you can reuse the same products array from your first JavaScript file)
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

    // Load cart data from localStorage
    let shoppingCart = loadCartFromLocalStorage();
    let total = calculateTotal();

    // Function to calculate the total price
    function calculateTotal() {
        return shoppingCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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

    // Function to update the cart display and total price
    function updateCartDisplay() {
        const cartList = document.getElementById('cart-list');
        const totalPrice = document.getElementById('total-price');

        // Clear the existing cart display
        cartList.innerHTML = '';

        total = 0;

        // Populate the cart display with items
        shoppingCart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x${item.quantity}`;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', () => removeItem(item.id));
            listItem.appendChild(removeButton);
            cartList.appendChild(listItem);
        });

        // Update and display the total price
        total = calculateTotal();
        totalPrice.textContent = total.toFixed(2);

        // Save the updated cart data to localStorage
        saveCartToLocalStorage(shoppingCart);
    }

    // Function to remove an item from the cart
    function removeItem(productId) {
        const index = shoppingCart.findIndex(item => item.id === productId);
        if (index !== -1) {
            shoppingCart.splice(index, 1);
            updateCartDisplay();
            saveCartToLocalStorage(shoppingCart); // Save cart data to localStorage after removing a product
        }
    }

    // Initialize the cart display
    updateCartDisplay();

    // Event listener to the purchase form
    const purchaseForm = document.getElementById('purchase-form');
    purchaseForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission

        if (shoppingCart.length === 0) {
            alert('Your cart is empty. Please add items before proceeding.');
            return; // Prevent submission if the cart is empty
        }

        // Retrieve user input from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const deliveryDate = document.getElementById('delivery-date').value;
        const agreeTnc = document.getElementById('agree-tnc').checked;

        // Validation
        if (!name || !email || !address || !deliveryDate || !agreeTnc) {
            alert('Please fill in all required fields and agree to the Terms and Conditions.');
            return; // Prevent submission if validation fails
        }

        // Validate the delivery date (minimum 3 days from today)
        const minDate = new Date();
        minDate.setDate(minDate.getDate() + 3); // Add 3 days to today's date
        const selectedDate = new Date(deliveryDate);

        if (selectedDate < minDate) {
            alert('Fastest delivery takes 3 days. Please select a valid date.');
            return; // Prevent submission if validation fails
        }
        
        // Confirm the purchase 
        const confirmation = confirm('Are you sure you want to finalize the purchase?');

        if (!confirmation) {
            return; // Prevent submission if the user cancels the confirmation
        }

        // Store the purchase data in an object
        const purchaseData = {
            shippingDetails: {
                name,
                email,
                address,
                deliveryDate,
            },
            cart: shoppingCart, 
            total: total.toFixed(2), 
        };

        // Save the purchase data to localStorage
        localStorage.setItem('cartData', JSON.stringify(purchaseData));


        // Clear the form fields after submission
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('address').value = '';
        document.getElementById('delivery-date').value = '';
        document.getElementById('agree-tnc').checked = false;

        // Display a confirmation message to the user
        alert('Thank you for your purchase!');

        // Redirect to the receipt page
        window.location.href = 'sales_receipt.html';

        // Clear cart after complete
        clearCart();

    });

    function clearCart() {
        localStorage.removeItem('shoppingCart');
    }
});





