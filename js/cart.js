let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCartUI();
}

function updateQuantity(productId, newQty) {
  if (newQty <= 0) return; // prevent negative or zero
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQty;
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function calculateTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
}
