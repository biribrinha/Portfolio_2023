const list = document.querySelectorAll(".list");

function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));




const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

let currentIndex = 0;
const totalImages = carousel.children.length;

function showImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    ocultarBotoes(index);
}

function nextImage() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        showImage(currentIndex);
    }

    if (currentIndex === totalImages - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }

    prevButton.style.display = 'block';
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function ocultarBotoes(index) {
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    if (index === totalImages - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

showImage(currentIndex); // Chamando a função inicialmente para exibir corretamente os botões