const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.menu');
const cover = document.querySelector('.menu__cover');

const toggleMenu = () => {
    hamburger.classList.toggle('navbar__hamburger--active');
    menu.classList.toggle('menu--active');
    cover.classList.toggle('menu__cover--visible');
}

hamburger.addEventListener('click', toggleMenu);
cover.addEventListener('click', toggleMenu);
