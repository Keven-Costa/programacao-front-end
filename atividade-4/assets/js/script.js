document.addEventListener('DOMContentLoaded', () => {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let cart = [];

    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const productName = event.target.getAttribute('data-product');
            const productPrice = parseFloat(event.target.getAttribute('data-price'));

            addToCart(productName, productPrice);
            updateCartDisplay();
        });
    });

    function addToCart(productName, productPrice) {
        const existingItem = cart.find(item => item.name === productName);
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.totalPrice += productPrice;
        } else {
            cart.push({
                name: productName,
                quantity: 1,
                price: productPrice,
                totalPrice: productPrice
            });
        }
    }

    function updateCartDisplay() {
        cartItemsList.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.totalPrice;
            const li = document.createElement('li');
            li.textContent = `${item.name} - R$ ${item.totalPrice.toFixed(2)} (${item.quantity})`;
            cartItemsList.appendChild(li);
        });
        cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
});
