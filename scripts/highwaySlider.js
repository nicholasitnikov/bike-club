const slides = [
    {
        image: './images/slide-1.jpg',
        heading: 'Шоссе',
        text: 'На&nbsp;шоссейном велосипеде можно ездить по&nbsp;асфальту на&nbsp;разных градиентах: будь&nbsp;то горы или равнины. Гонки проходят в&nbsp;командном пелотоне, но&nbsp;тренироваться можно и&nbsp;самостоятельно.',
        featured: true
    },
    {
        image: './images/slide-2.jpg',
        heading: 'Грэвел',
        text: 'Грэвел похож на&nbsp;шоссейный велосипед, но&nbsp;конструкция рамы немного отличается, и&nbsp;на&nbsp;нём стоят более широкие покрышки, всё для того чтобы проехать по&nbsp;лёгкому бездорожью.'
    },
    {
        image: './images/slide-3.jpg',
        heading: 'TT',
        text: 'ТТ&nbsp;&mdash; это велосипед для триатлона или раздельного старта, гооняют на&nbsp;таком велике только по&nbsp;равнинному асфальту, велик очень быстрые и&nbsp;аэродинамичный.'
    }
]



const sliderWrapper = document.querySelector('.swiper-wrapper');
const slideHeading = document.querySelector('.highway__heading');
const slideText = document.querySelector('.highway__text');

const updateHighwayText = (index) => {

    slideHeading.innerHTML = slides[index].heading;
    slideText.innerHTML = slides[index].text;

}

// add slides

slides.forEach((el) => {
    const element = document.createElement('div');
    element.classList.add('swiper-slide');
    element.classList.add('slider__item')
    if(el.featured) {
        element.classList.add('slider__item_featured');
    }
    element.style.backgroundImage = `url(${el.image})`;
    sliderWrapper.append(element);
})


// init slider

const swiper = new Swiper('.slider', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.slider__arrow_direction_right',
    prevEl: '.slider__arrow_direction_left',
  },
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    791: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }

});

swiper.on('slideChange', () => {
    updateHighwayText(swiper.realIndex);
})
