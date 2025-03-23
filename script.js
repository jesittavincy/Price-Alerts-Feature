let currentPrice = 50;
let alertPrice = 100;

function updatePrice() {
    currentPrice = Math.floor(Math.random() * 200) + 1; 
    document.getElementById("current-price").textContent = currentPrice;

    if (currentPrice >= alertPrice) {
        showNotification(`Price alert! The price hit $${currentPrice}`);
    }
}

function setAlert() {
    const inputPrice = document.getElementById("alert-price").value;
    if (inputPrice) {
        alertPrice = Number(inputPrice);
        showNotification(`Alert set for $${alertPrice}`);
    }
}

function showNotification(message) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");

    setTimeout(() => {
        notification.classList.add("hidden");
    }, 3000);
}

setInterval(updatePrice, 3000);
