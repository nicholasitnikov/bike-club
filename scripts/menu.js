
const menuOpenButton = document.querySelector('.header__menu-icon');
const menuCloseButton = document.querySelector('.menu__close');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu__link');

const openMenu = () => { menu.classList.add('menu_opened'); }
const closeMenu = () => { menu.classList.remove('menu_opened'); }

menuOpenButton.addEventListener('click', openMenu)
menuCloseButton.addEventListener('click', closeMenu)

links.forEach((el) => {
    el.addEventListener('click', closeMenu);
})