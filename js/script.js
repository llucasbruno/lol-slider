const slides = document.querySelector('.slider__slides');//Seleciona o container que segura todos os slides (esse elemento tem 400% de tamanho, pois tem 4 slides)
const buttons = document.querySelectorAll('.slider__manual-btn');//botões de navegação
const slideElements = document.querySelectorAll('.slider__slide');//cada slide individual 
const slideCount = slideElements.length; //colocou a quantidade de todos os slides na variavel (4)
const slideWidth = slideElements[0].offsetWidth //captura a largura do width do slide, no caso o primeiro slide que tem 880px
let currentIndex = 0;                                                                    
let slideInterval;

//console.table( slides.style.transform = `translateX(${-currentIndex * slideWidth/*880px*/}px)`)

function updateSlide() {
    slides.style.transform = `translateX(${-currentIndex * slideWidth/*880px*/}px)`;
    buttons.forEach(btn =>  btn.classList.remove('active-btn'));
    buttons[currentIndex].classList.add('active-btn');
    //buttons.forEach(btn => btn.classList.toggle('active-btn', btn === buttons[currentIndex]));
}
updateSlide()


//Função para avançar para o próximo slide
function nextSlide() {
    // Incrementa o índice atual do slide em 1
    // Usa o operador % de resto da divisão para garantir que o índice volte ao início quando atingir o fim
    currentIndex = (currentIndex + 1) % slideCount;
    // Chama a função updateSlide para atualizar o slide exibido com base no novo índice
    updateSlide();
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updateSlide();
        resetInterval();
    });
});


function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 4000);
}

resetInterval(); // Inicializa o intervalo dos slides


/*
Fluxo do Código

    Inicialização:
        Seleciona e armazena os elementos do DOM.
        Inicializa variáveis para controlar o índice e o intervalo dos slides.
    Funções de Atualização:
        Define updateSlide para atualizar a exibição do slide e os botões de navegação.
        Define nextSlide para avançar o índice do slide e chamar updateSlide.
    Configuração de Eventos:
        Adiciona eventos de clique aos botões de navegação para atualizar o slide com base no botão clicado.

*/




