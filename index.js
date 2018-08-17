var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemAdded = {};
 
 itemAdded.itemName = item;
 itemAdded.itemPrice = Math.floor(Math.random() * 100 + 1);
 
 cart.push(itemAdded);
 
 return `${item} has been added to your cart.`;
 
}

function viewCart() {
  var itemsInCart = [];
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  } else {
    
    for (let i=0; i < cart.length; i++) {
      var item;
      item = `${cart[i].itemName} at $${cart[i].itemPrice}`;
      itemsInCart.push(item);
      }
    // itemsInCart.join();
    if (cart.length > 1) {
    var lastItem = itemsInCart.splice(-1);
    lastItem = `, and ${lastItem}`;
    itemsInCart = `${itemsInCart.join(', ')}${lastItem}`;
    }
  return `In your cart, you have ${itemsInCart}.`;
}
}
function total() {
  var cartTotal = 0;
  for (let i=0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice;
  }
  
  return cartTotal;
}

function removeFromCart(item) {
  var find;
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName !== item) {
      find = false;
    } else {
      find = true;
    }
  }
  
  if (find === true) {
  
  for (let i=0; i < cart.length; i++) {
    if (cart[i].itemName === item) {
      cart.splice(i,1);
      return cart;
    } 
  } 
  } else {
    return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
