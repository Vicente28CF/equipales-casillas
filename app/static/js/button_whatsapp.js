function addWhatsAppButton() {
    var phoneNumber = "3312199844"; // Reemplaza con tu número de teléfono
    var businessName = "Equipales Casillas"; // Reemplaza con el nombre de tu empresa
    var message = "Hola, me gustaría recibir más información sobre sus servicios y precios."; // Mensaje predeterminado
    var whatsappLink = "https://wa.me/" + phoneNumber + "/?text=" + encodeURIComponent(message) + "&via=" + encodeURIComponent(businessName);

    var whatsappButton = document.createElement("a");
    whatsappButton.href = whatsappLink;
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";

    var whatsappIcon = document.createElement("img");
    whatsappIcon.src = "/static/img/whatsapp-icon2.png"; // Reemplaza con la ruta de tu ícono
    whatsappIcon.alt = "WhatsApp";
    whatsappIcon.width = 40; // Reduce el ancho del ícono
    whatsappIcon.height = 40; // Reduce la altura del ícono

    whatsappButton.appendChild(whatsappIcon);
    whatsappButton.style.position = "fixed";
    whatsappButton.style.bottom = "90px"; // Ajusta la distancia desde abajo
    whatsappButton.style.right = "20px"; // Ajusta la distancia desde la derecha
    whatsappButton.style.zIndex = "1000";
    whatsappButton.style.transition = "transform 0.3s ease-in-out"; // Agrega una transición de transformación

    // Estilos adicionales para hacer que el botón sea más pequeño y atractivo
    whatsappButton.style.backgroundColor = "#25d366"; // Cambia el color de fondo
    whatsappButton.style.borderRadius = "50%"; // Hace que el botón sea circular
    whatsappButton.style.padding = "8px"; // Reduce el espacio interno

    // Escala el botón al hacer hover
    whatsappButton.addEventListener("mouseenter", function () {
        whatsappButton.style.transform = "scale(1.1)";
    });

    // Restablece el tamaño del botón al quitar el hover
    whatsappButton.addEventListener("mouseleave", function () {
        whatsappButton.style.transform = "scale(1)";
    });

    document.body.appendChild(whatsappButton);
}

// Llama a la función para agregar el botón cuando se cargue la página
window.onload = addWhatsAppButton;
