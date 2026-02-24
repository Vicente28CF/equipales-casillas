// Obtén el carrito almacenado en el almacenamiento local
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para mostrar una notificación
function showNotification(message) {
    // Crea un elemento div para la notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Agrega la notificación al contenedor del carrito en cart.html
    const cartContent = document.querySelector('.cart-content');
    cartContent.appendChild(notification);

    // Configura un temporizador para eliminar la notificación después de unos segundos
    setTimeout(() => {
        notification.remove();
    }, 3000); // La notificación se eliminará después de 3 segundos (ajusta el valor según tus preferencias)
}

// Función para agregar un producto al carrito
function addToCart(productId) {
    console.log('Añadiendo producto al carrito:', productId);
    // Encuentra el producto con el ID correspondiente en tu lista de productos
    const productToAdd = products.find(product => product.id === productId);
    console.log('Producto a agregar:', productToAdd);

    // Verifica si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Si el producto ya está en el carrito, aumenta la cantidad en 1
        existingProduct.quantity++;
        console.log(`Aumentando cantidad de ${productToAdd.name} en el carrito a`, existingProduct.quantity);

        // Muestra una notificación de que se ha agregado una unidad del producto al carrito
        showNotification(`Se ha agregado 1 unidad de ${productToAdd.name} al carrito.`);
    } else {
        // Si el producto no está en el carrito, agrégalo
        cart.push({
            id: productId,
            name: productToAdd.name,
            price: productToAdd.curr_price,
            quantity: 1, // Inicialmente, hay una unidad del producto en el carrito
        });
        console.log('Producto añadido al carrito:', cart);

        // Muestra una notificación de que se ha agregado el producto al carrito
        showNotification(`Se ha agregado ${productToAdd.name} al carrito.`);
    }

    // Actualiza el carrito en el almacenamiento local
    localStorage.setItem('cart', JSON.stringify(cart));

    // Actualiza la interfaz de usuario para reflejar los cambios en el carrito
    updateCartUI();
}


// Función para actualizar la interfaz de usuario del carrito
function updateCartUI() {
    console.log('Actualizando interfaz de usuario del carrito');

    // Obtiene el elemento donde se mostrará el contenido del carrito en cart.html
    const cartContent = document.querySelector('.cart-content');

    if (cartContent) {
        console.log('cartContent:', cartContent);

        // Limpia el contenido existente para evitar duplicaciones
        cartContent.innerHTML = '';

        // Verifica si el carrito está vacío
        if (cart.length === 0) {
            // Muestra un mensaje indicando que el carrito está vacío
            cartContent.innerHTML = '<p>Tu carrito está vacío.</p>';
        } else {
            // Itera a través de los productos en el carrito
            cart.forEach(item => {
                const productHTML = `
                    <div class="cart-item">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price}</div>
                        <div class="cart-item-quantity">${item.quantity}</div>
                    </div>
                `;

                // Agrega el HTML del producto al contenido del carrito
                cartContent.insertAdjacentHTML('beforeend', productHTML);
            });
        }
    }
}

// En tu archivo cart.js, dentro del evento de clic en el botón "Agregar al carrito":
document.addEventListener("DOMContentLoaded", function() {
    // Agrega un evento de clic a los botones "Agregar al carrito" en products.js
    document.querySelectorAll('.btn-cart-add').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-product-id');
            addToCart(productId);

            // Llama a la función para actualizar la interfaz de usuario del carrito
            updateCartUI();
        });
    });

    // Llama a la función para actualizar la interfaz de usuario del carrito
    updateCartUI();
});






