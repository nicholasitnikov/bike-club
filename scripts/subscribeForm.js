const subscribeForm = document.querySelector('.subscribe-form');
const subscribeFormInput = subscribeForm.querySelector('.subscribe-form__input');
const subscribeFormSubmit = subscribeForm.querySelector('.subscribe-form__submit');

subscribeFormInput.addEventListener('focus', (e) => {
    subscribeFormSubmit.classList.add('subscribe-form__submit_visible')
    e.target.setAttribute('placeholder', '');
})

subscribeFormInput.addEventListener('focusout', (e) => {
    subscribeFormSubmit.classList.remove('subscribe-form__submit_visible')
    e.target.setAttribute('placeholder', 'Ваш e-mail');
})

subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    subscribeFormInput.value = 'Спасибо за подписку :)';
    console.log('form submitted')
})