const productList = document.getElementById("product-list");
const cartModal = document.getElementById("cart-modal");
const cartItemsDiv = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const viewCartBtn = document.getElementById("view-cart");
const closeCartBtn = document.getElementById("close-cart");
const clearCartBtn = document.getElementById("clear-cart");
const checkoutBtn = document.getElementById("checkout");

// Render products
function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "bg-white shadow p-4 rounded transition transform hover:shadow-lg hover:scale-105";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover mb-3 rounded">
      <h3 class="text-lg font-semibold">${product.name}</h3>
      <p class="text-sm text-gray-500">${product.description}</p>
      <p class="mt-2 font-bold">$${product.price}</p>
      <button onclick="addToCart(${product.id})" class="mt-3 bg-blue-500 text-white px-4 py-2 rounded flex items-center justify-center space-x-2 transition transform hover:bg-blue-600 hover:scale-105 active:scale-95">
        <i class="fa-solid fa-cart-plus"></i>
        <span>Add to Cart</span>
      </button>
    `;
    productList.appendChild(div);
  });
}

// Update cart UI
function updateCartUI() {
  cartItemsDiv.innerHTML = "";
  cart.forEach(item => {
    const div = document.createElement("div");
    div.className = "flex justify-between items-center";
    div.innerHTML = `
      <span>${item.name} (x${item.quantity})</span>
      <div>
        <input type="number" min="1" value="${item.quantity}" class="w-12 text-center border rounded" onchange="updateQuantity(${item.id}, parseInt(this.value))">
        <span class="ml-2">$${(item.price * item.quantity).toFixed(2)}</span>
      </div>
    `;
    cartItemsDiv.appendChild(div);
  });

  cartTotal.textContent = calculateTotal();
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Cart animation functions
function openCart() {
  cartModal.classList.remove("hidden");
  const modalContent = cartModal.firstElementChild;
  modalContent.style.transform = "translateY(-20px)";
  modalContent.style.opacity = "0";
  modalContent.style.transition = "all 0.3s ease";
  setTimeout(() => {
    modalContent.style.transform = "translateY(0)";
    modalContent.style.opacity = "1";
  }, 10);
}

function closeCart() {
  const modalContent = cartModal.firstElementChild;
  modalContent.style.transform = "translateY(-20px)";
  modalContent.style.opacity = "0";
  setTimeout(() => cartModal.classList.add("hidden"), 300);
}

// Event listeners
viewCartBtn.addEventListener("click", openCart);
closeCartBtn.addEventListener("click", closeCart);
clearCartBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", () => {
  alert("Thank you for your purchase!");
  clearCart();
  closeCart();
});

// Initial render
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCartUI();
});
