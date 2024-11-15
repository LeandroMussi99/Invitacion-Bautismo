// script.js

document.addEventListener('DOMContentLoaded', () => {
    function initializeSlider(sliderContainer) {
        const slides = sliderContainer.querySelector('.slides');
        const images = sliderContainer.querySelectorAll('.slides img');
        const prevButton = sliderContainer.querySelector('.prev');
        const nextButton = sliderContainer.querySelector('.next');
        let currentIndex = 0;
        const totalImages = images.length;

        // Configurar el ancho del contenedor de las imágenes (slides) en función del número de imágenes
        slides.style.width = `${totalImages * 100}%`;

        // Ajustar el ancho de cada imagen para que ocupe el tamaño del slider
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
    }

    // Inicializar todos los sliders con la clase `.slider-container`
    document.querySelectorAll('.slider-container').forEach(sliderContainer => {
        initializeSlider(sliderContainer);
    });


    const musicControl = document.getElementById("music-control");
    const backgroundMusic = document.getElementById("background-music");

    musicControl.addEventListener("click", () => {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicControl.innerHTML = '<i class="fas fa-pause"></i>'; // Cambia al ícono de pausa
        } else {
            backgroundMusic.pause();
            musicControl.innerHTML = '<i class="fas fa-play"></i>'; // Cambia al ícono de play
        }
    });

    

});
