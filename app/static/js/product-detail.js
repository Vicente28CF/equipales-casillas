
// Función para agregar la funcionalidad de lupa a una imagen
function addMagnifier(imageId) {
    const image = document.getElementById(imageId);
    if (imageId === 'image1') {
        image.addEventListener('mousemove', function (e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const { clientX, clientY } = e;

            // Ajusta la posición hacia la izquierda solo para 'image1'
            const x = ((clientX - left) / width) * 0; // En este caso, x se establece en 0 para 'image1'
            const y = ((clientY - top) / height) * 100;

            // Aplica la transformación de escala y posición solo para 'image1'
            this.style.transformOrigin = `${x}% ${y}%`;
            this.style.transform = 'scale(2)'; // Cambia la escala al doble solo para 'image1'
        });

        image.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)'; // Restablece la escala original al salir solo para 'image1'
        });
    }
}

// Llama a la función solo para 'image1'
addMagnifier('image1');

// Obtén las referencias a las imágenes
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');

// Agrega un event listener al clic en la imagen 2
image2.addEventListener('click', function () {
    // Obtén la fuente de la imagen 1
    const image1Src = image1.src;

    // Cambia la fuente de la imagen 1 a la fuente de la imagen 2
    image1.src = image2.src;

    // Cambia la fuente de la imagen 2 a la fuente de la imagen 1 original
    image2.src = image1Src;
});
