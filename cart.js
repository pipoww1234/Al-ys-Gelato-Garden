let cart = JSON.parse(localStorage.getItem("cart")) || [];

// ADD TO CART
function addToCart(name, price) {
    let item = cart.find(i => i.name === name);

    if (item) item.qty++;
    else cart.push({ name, price, qty: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(name + " ditambahkan ke keranjang!");
}

// UPDATE CART COUNT
function updateCartCount() {
    let count = cart.reduce((a, b) => a + b.qty, 0);
    let cc = document.getElementById("cartCount");
    if (cc) cc.innerText = count;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// LOAD CART
function loadCart() {
    let div = document.getElementById("cartList");
    if (!div) return;

    div.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        div.innerHTML += `
            <div class="cart-item">
                <p>${item.name} x${item.qty} — Rp ${item.price.toLocaleString()}</p>
                <button class="btn" onclick="removeItem(${index})">Hapus</button>
            </div>
        `;
    });

    document.getElementById("totalHarga").innerText =
        "Rp " + total.toLocaleString();

    localStorage.setItem("totalHarga", total);
}

updateCartCount();
