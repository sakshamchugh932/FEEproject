// script.js
const quantitySelect = document.getElementById('quantity');
const priceElement = document.getElementById('price');
const totalPriceElement = document.getElementById('total-price');

const price = 1900; // Set the initial price of the product

quantitySelect.addEventListener('change', function() {
    const quantity = parseInt(quantitySelect.value);
    const totalPrice = price * quantity;

    priceElement.textContent = `Price: $${price}`;
    totalPriceElement.textContent = `Total Price: $${totalPrice}`;
});
