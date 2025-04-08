const immagini = [
    'home1.jpg',
    'home2.jpg',
    'home3.jpg',
    'home4.jpg',
];

const slides = document.querySelectorAll('.slide');
let slideCorrente = 0;

function precaricaImmagini() {
    immagini.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

slides.forEach((slide, index) => {
    slide.style.backgroundImage = `url(${immagini[index % immagini.length]})`;
});

function prossimaSlide() {
    slides[slideCorrente].classList.remove('active');
    slideCorrente = (slideCorrente + 1) % slides.length;
    slides[slideCorrente].classList.add('active');
}

slides[0].classList.add('active');

precaricaImmagini();

setInterval(prossimaSlide, 4000);