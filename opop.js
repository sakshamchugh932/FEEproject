// Get the cart list element
const cartList = document.getElementById('cart-list');

// Get the total bill element
const totalBill = document.getElementById('total-bill');

// Initialize the cart items and total bill
let itemsInCart = [];
let billTotal = 0;

// Function to add an item to the cart
function addToCart(itemName, price) {
  const item = { name: itemName, price: price };
  itemsInCart.push(item);
  updateCart();
}

// Function to update the cart
function updateCart() {
  // Clear the cart list
  cartList.innerHTML = '';

  // Calculate the new total bill
  billTotal = 0;

  // Loop through the items in the cart
  itemsInCart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item.name}: $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);

    // Add the item price to the total bill
    billTotal += item.price;
  });

  // Update the total bill element
  totalBill.innerText = `$${billTotal.toFixed(2)}`;
}

// Add event listeners for adding items to the cart
document.addEventListener('DOMContentLoaded', () => {
  // Example item: "Men's Smart Watch" with a price of 1900
  addToCart("Men's Smart Watch", 1900);
});

// Function to handle payment method selection
function handlePaymentMethodSelection(event) {
  const selectedMethod = event.target.innerText;
  // Perform actions based on the selected payment method
  // Example: Show a confirmation message
  alert(`Payment method selected: ${selectedMethod}`);
}

// Add event listeners for payment method selection
const paymentMethods = document.querySelectorAll('.payment-methods li');
paymentMethods.forEach(method => {
  method.addEventListener('click', handlePaymentMethodSelection);
});
