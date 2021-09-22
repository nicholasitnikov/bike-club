const themeSwitcher = document.querySelector('.switcher');

const darkElements = [
    'header',
    'hero',
    'quote',
    'highway',
    'bicycles',
    'workout',
    'footer',
    'heading',
    'paragraph',
    'header__link',
    'hero__caption',
    'quote__author-name',
    'quote__author-sport',
    'slider__arrow',
    'bicycles__link',
    'bicycles__link_active',
    'bicycle-card__heading',
    'workout__app-link',
    'footer__copyright',
    'subscribe-form__input',
    'subscribe-form__submit',
    'select',
    'header__menu-icon',
    'menu',
    'menu__link',
    'menu__close',
    'footer__logo',
    'root'
]

document.querySelectorAll('.switcher').forEach((el) => {
    el.addEventListener('click', (e) => {
        e.target.classList.toggle('switcher_theme_dark');
        darkElements.forEach((el) => {
            const elements = document.querySelectorAll(`.${el}`);
            elements.forEach((ell) => ell.classList.toggle(el + '_theme_dark'));
        })
    })
})