var cart = [];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(name) {
 // write your code here
 let item = {
   itemName: name,
   itemPrice: getRandomInt(100)
 };
 cart.push(item);
 return `${item.itemName} has been added to your cart.`;
}

function viewCart() { 
  let message = "Your shopping cart is empty.";
 cart.forEach(function (item, index) {
   if (index === 0) {
     message = `In your cart, you have ${item.itemName} at ${item.itemPrice}, `;
   } else if (index > 0 && index !== -1) { 
   message + `${item.itemName} at ${item.itemPrice}, `;
   } else { 
     message + `and ${item.itemName} at ${item.itemPrice}.`;
   }
  return message
});
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
