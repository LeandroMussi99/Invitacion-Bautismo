// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Slider de Imágenes
    const slides = document.querySelector('.slides');
    const images = document.querySelectorAll('.slides img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;
    const totalImages = images.length;

    // Establecer el ancho total del contenedor de slides
    slides.style.width = `${totalImages * 100}%`;

    // Asignar a cada imagen su ancho proporcional
    images.forEach(img => {
        img.style.width = `${100 / totalImages}%`;
    });

    // Función para actualizar la posición del slider
    function updateSlider() {
        slides.style.transform = `translateX(-${currentIndex * (100 / totalImages)}%)`;
    }

    // Función para ir a la siguiente imagen
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateSlider();
    }

    // Función para ir a la imagen anterior
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateSlider();
    }

    // Eventos de los botones
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    // Intervalo para el slider automático
    let sliderInterval = setInterval(nextSlide, 5000); // Cambia cada 5 segundos

    // Reiniciar el intervalo cuando se usa manualmente
    function resetInterval() {
        clearInterval(sliderInterval);
        sliderInterval = setInterval(nextSlide, 5000);
    }

    console.log('Página cargada correctamente');
    // Aquí puedes agregar más funcionalidades en el futuro
});

