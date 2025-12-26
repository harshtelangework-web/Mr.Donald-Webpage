function openLogin() {
    document.getElementById("loginPopup").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginPopup").style.display = "none";
}

function openCart() {
    alert("Cart clicked!");
    // You can redirect instead:
    // window.location.href = "cart.html";
}
