// Selecionando todos os elementos com a classe "list" e armazenando em uma variável chamada "list"
const list = document.querySelectorAll(".list");

// Função que remove a classe "active" de todos os elementos da lista e adiciona a classe "active" ao elemento clicado
function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
}

// Adicionando um evento de clique a cada elemento da lista que chama a função "activeLink"
list.forEach((item) => item.addEventListener("click", activeLink));



// Selecionando o elemento com a classe "carousel" e os botões de navegação "prevButton" e "nextButton"
const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.carousel-button.left');
const nextButton = document.querySelector('.carousel-button.right');

// Inicializando as variáveis currentIndex (índice atual) e totalImages (número total de imagens no carousel)
let currentIndex = 0;
const totalImages = carousel.children.length;


// Função que exibe a imagem correspondente ao índice passado como parâmetro
function showImage(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    ocultarBotoes(index);
}


// Função que exibe a próxima imagem no carousel
function nextImage() {

    // Verifica se o índice atual é menor que o número total de imagens menos 1
    if (currentIndex < totalImages - 1) {
        currentIndex++;
        showImage(currentIndex);
    }

    // Verifica se o índice atual é igual ao número total de imagens menos 1 e atualiza a visibilidade do botão "nextButton"
    if (currentIndex === totalImages - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }

    // Atualiza a visibilidade do botão "prevButton"
    prevButton.style.display = 'block';
}

// Função que exibe a imagem anterior no carousel
function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}


// Função que oculta ou exibe os botões de navegação com base no índice passado como parâmetro
function ocultarBotoes(index) {
    // Verifica se o índice é igual a 0 e atualiza a visibilidade do botão "prevButton"
    if (index === 0) {
        prevButton.style.display = 'none';
    } else {
        prevButton.style.display = 'block';
    }

    // Verifica se o índice é igual ao número total de imagens menos 1 e atualiza a visibilidade do botão "nextButton"
    if (index === totalImages - 1) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'block';
    }
}

// Adicionando eventos de clique aos botões de navegação que chamam as funções correspondentes
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);


// Chamando a função showImage inicialmente para exibir corretamente os botões, passando o índice atual
showImage(currentIndex); 
