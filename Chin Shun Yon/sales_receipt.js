

document.addEventListener('DOMContentLoaded', function () {
    // Retrieve the cart data from local storage
    const cartDataString = localStorage.getItem('cartData');

    // Check if cart data exists
    if (cartDataString) {
        // Convert the JSON string back to an object
        const cartData = JSON.parse(cartDataString);

        // Display shipping details
        document.getElementById('receipt-name').textContent = cartData.shippingDetails.name;
        document.getElementById('receipt-email').textContent = cartData.shippingDetails.email;
        document.getElementById('receipt-address').textContent = cartData.shippingDetails.address;
        document.getElementById('receipt-delivery-date').textContent = cartData.shippingDetails.deliveryDate;


        // Calculate days left until delivery
        const deliveryDate = new Date(cartData.shippingDetails.deliveryDate);
        const today = new Date();
        const daysLeft = Math.ceil((deliveryDate - today) / (1000 * 60 * 60 * 24));

        // Update the delivery status based on days left
        const deliveryStatusElement = document.getElementById('delivery-status');
        if (daysLeft <= 0) {
            deliveryStatusElement.textContent = 'Delivered';
        } else {
            deliveryStatusElement.textContent = `Delivery expected in ${daysLeft} days`;
        }

        // Populate the purchased products
        const productList = document.getElementById('receipt-products');
        cartData.cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} x${item.quantity}`;
            productList.appendChild(listItem);
        });

        // Display total price
        document.getElementById('receipt-total-price').textContent = cartData.total;
    } else {
        // Display an error message n redirect back to the cart page.
        alert('Purchase Error');
        window.location.href = 'sales_cart.html';
    }
});
