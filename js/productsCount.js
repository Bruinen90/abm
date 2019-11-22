const number = document.querySelector('.productsCount__number');
const text = document.querySelector('.productsCount__text');

const getElScroll = (el) => {
    const windowHeight = window.innerHeight;
    const elPos = el.getBoundingClientRect().top+el.getBoundingClientRect().height/2;
    if(elPos < windowHeight && elPos > 0) {
        return 100*(elPos - windowHeight/2)/windowHeight;
    }
}

const animateCounter = () => {
    number.style.transform = `translateX(${getElScroll(number)}%)`
    text.style.transform = `translateX(${-1*getElScroll(number)}%)`
}

window.addEventListener('scroll', animateCounter);