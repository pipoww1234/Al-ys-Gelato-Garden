// =====================
// ADMIN PANEL
// =====================

let orders = JSON.parse(localStorage.getItem("orders")) || [];

function loadOrders() {
    let list = document.getElementById("orderList");
    let totalIncome = 0;

    list.innerHTML = "";

    orders.forEach(order => {
        list.innerHTML += `
            <div class="cart-item">
                <p><b>${order.nama}</b> - Rp ${order.total.toLocaleString()}</p>
                <p>${order.items}</p>
                <hr>
            </div>
        `;
        totalIncome += order.total;
    });

    document.getElementById("income").innerText = "Rp " + totalIncome.toLocaleString();
}

function clearOrders() {
    if (confirm("Yakin hapus semua pesanan?")) {
        localStorage.removeItem("orders");
        location.reload();
    }
}

loadOrders();
