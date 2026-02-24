function showNotification(message) {
    Swal.fire({
        icon: 'success',
        title: '¡Agregado al carrito!',
        text: message,
        timer: 2000, // Duración en milisegundos (opcional)
        showConfirmButton: false // No mostrar el botón de confirmación
    });
}

// Función para obtener la URL del detalle del producto desde Flask
function getProductDetailURL(productIndex, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/get_barras_detail_url', true);
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            const url = xhr.responseText;
            callback(url, productIndex);
        }
    };
    xhr.send();
}
let products = [
  {
      id: 42,
      name: 'Banco Cantinero',
      image1: './static/img/presentacion/BarrasPeriqueras/BancoCantinero.jpeg',
      image2: './static/img/presentacion/BarrasPeriqueras/BancoCantineroVista1.jpeg',
      old_price: '$4,000',
      curr_price: '$3,800',
      curr_price2: 3800,
      feature: ['Banco Cantinero en Piel de Vaqueta con Pelo']
  }, 
];

let product_list = document.querySelector('#products');
let pagination = document.querySelector('#pagination');
let cart = JSON.parse(localStorage.getItem('cart')) || [];

const itemsPerPage = 9;
let currentPage = 1;

let imagesLoaded = 0;

function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === products.length * 2) {
        displayProducts(0);
    }
}

products.forEach((e, index) => {
    let image1 = new Image();
    image1.src = e.image1;
    image1.addEventListener('load', imageLoaded);

    let image2 = new Image();
    image2.src = e.image2;
    image2.addEventListener('load', imageLoaded);
});

function displayProducts(startIndex) {
    const endIndex = startIndex + itemsPerPage;
    const productsToDisplay = products.slice(startIndex, endIndex);
    updatePagination(currentPage);

    product_list.innerHTML = '';
    productsToDisplay.forEach((e, index) => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <!-- Agregar el atributo data-index y data-product-id al enlace "shop now" -->
                            <a href="/barras-detail?id=${e.id}" class="btn-flat btn-hover btn-shop-now product-link" data-index="${startIndex + index}" data-product-id="${e.id}">Ver Producto</a>
                            <button class="btn-flat btn-hover btn-cart-add" data-product-id="${e.id}">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price || ''}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        product_list.insertAdjacentHTML("beforeend", prod);
    });

    // Actualizar enlaces de paginación
    updatePagination(currentPage);
     // Agregar eventos de clic para agregar al carrito
     addCartEvents();
}

function updatePagination(currentPage) {
    const totalPages = Math.ceil(products.length / itemsPerPage);

    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageLink = document.createElement('li');
        pageLink.innerHTML = `<a href="#" class="${i === currentPage ? 'active' : ''}">${i}</a>`;
        pageLink.addEventListener('click', () => {
            currentPage = i;
            const startIndex = (currentPage - 1) * itemsPerPage;
            displayProducts(startIndex);
            updatePagination(currentPage);
        });
        pagination.appendChild(pageLink);
    }
}

// Ejecutar la función principal al cargar la página
getProductDetailURL(function (url, selectedProductIndex) {
    // Agregamos el evento click para el enlace "shop now"
    document.querySelectorAll(".btn-shop-now").forEach((button) => {
        button.href = url; // Establecer el atributo href con la URL específica del producto
        button.addEventListener("click", (event) => {
            event.preventDefault();

            // Obtener el índice del producto seleccionado del atributo data-index
            const productIndex = parseInt(button.getAttribute("data-index"));
            const product = products[productIndex];

            // Generar el HTML para mostrar los detalles del producto
            const productDetailsHTML = `
                <div class="product-detail">
                    <h1>${product.name}</h1>
                    <div class="product-detail-img">
                        <img src="${product.image1}" alt="">
                        <img src="${product.image2}" alt="">
                    </div>
                    <div class="product-detail-price">
                        <span><del>${product.old_price || ""}</del></span>
                        <span class="curr-price">${product.curr_price}</span>
                    </div>
                    
                    <div class="product-detail-description">
                    <h2>Características del Producto:</h2>
                    ${createFeatureList(product.feature)}
                    </div>
                    
                    <!-- Agrega más detalles del producto aquí si es necesario -->
                    <button class="btn-flat btn-hover btn-cart-add" data-product-id="${product.id}">
                        <i class='bx bxs-cart-add'></i> Agregar al carrito
                    </button>
                </div>
            `;

            // Mostrar los detalles del producto en la sección #product-details
            const productDetailsSection = document.querySelector("#product-details");
            productDetailsSection.innerHTML = productDetailsHTML;
        });
    });

    // Llamamos a displayProducts después de obtener la URL
    displayProducts(currentPage);
});

document.querySelector('#filter-toggle').addEventListener('click', () => {
    document.querySelector('#filter-col').classList.toggle('active');
});

document.querySelector('#filter-close').addEventListener('click', () => {
    document.querySelector('#filter-col').classList.toggle('active');
});

//!Funcion para agregar al carrito

function addCartEvents() {
    document.querySelectorAll('.btn-cart-add').forEach((button) => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const productId = parseInt(button.getAttribute('data-product-id'));
            const product = products.find((p) => p.id === productId);
            const existingProduct = cart.find((p) => p.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartDisplay();
            showNotification(`${product.name} se ha agregado al carrito.`);
        });
    });

    // Agregar evento de clic para el botón de limpiar carrito
    document.getElementById('btn-clear-cart').addEventListener('click', () => {
        // Limpiar el carrito
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        updateCartSummary();
    });
}



function updateCartDisplay() {
    const cartContainer = document.getElementById("cart-container");

    // Verificar si el elemento existe antes de intentar acceder a su propiedad innerHTML
    if (cartContainer) {
        cartContainer.innerHTML = "";

        // Mostrar los productos del carrito en la página
        cart.forEach((product) => {
            const productElement = document.createElement('div');
            // Formatear el precio con comas para separar las centenas
            const formattedPrice = product.curr_price2.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
            productElement.innerHTML = `
        <div class="cart-item">
            <img src="${product.image1}" alt="${product.name}">
            <p>${product.name} - Cantidad: ${product.quantity} - Precio: ${formattedPrice}</p>
        </div>
    `;
            cartContainer.appendChild(productElement);
        });
    } else {
        console.error("El elemento con id 'cart-container' no fue encontrado.");
    }
}


// Al cargar la página, también actualizamos la visualización del carrito
updateCartDisplay();
// Agregar eventos de clic para agregar al carrito
addCartEvents();
updateCartSummary();