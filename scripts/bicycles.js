const bicycles = [
    { image: './images/bicycle-9.jpg', category: 'Шоссе', name: 'Cervelo Caledonia-5', 'link': 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN ' },
    { image: './images/bicycle-6.jpg', category: 'Шоссе', name: 'Cannondale Systemsix Himod', link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J' },
    { image: './images/bicycle-1.jpg', category: 'Шоссе', name: 'Trek Domane SL-7', link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF' },
    { image: './images/bicycle-7.jpg', category: 'Грэвел', name: 'Cervelo Aspero GRX 810', link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE' },
    { image: './images/bicycle-2.jpg', category: 'Грэвел', name: 'Specialized S-Works Diverge', link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9' },
    { image: './images/bicycle-4.jpg', category: 'Грэвел', name: 'Cannondale Topstone Lefty 3', link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8' },
    { image: './images/bicycle-8.jpg', category: 'ТТ', name: 'Specialized S-Works Shiv', link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9 ' },
    { image: './images/bicycle-3.jpg', category: 'ТТ', name: 'BMC Timemachine 01 ONE', link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835' },
    { image: './images/bicycle-5.jpg', category: 'ТТ', name: 'Cervelo P-Series', link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q' }
]

const categories = ['Шоссе', 'Грэвел', 'ТТ'];

const swiperBicycle = new Swiper('.bicycles__slider', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 18
      },
      481: {
        slidesPerView: 1,
        spaceBetween: 60
      }
    },
    pagination: {
        el: '.bicycles__pagination',
    }
});

const createSliderElement = (el) => {
    const bicycleTemplate = document.querySelector('#bicycleTemplate').content;
    const element = bicycleTemplate.cloneNode(true).querySelector('.bicycle-card');
    element.querySelector('.bicycle-card__image').style.backgroundImage = `url(${el.image})`;
    element.querySelector('.bicycle-card__heading').textContent = el.name;
    element.querySelector('.bicycle-card__link').href = el.link;
    return element;
}

const updateBicyclesByCategory = (category) => {

    currentCategory = category;
    
    const bicyclesContainer = document.querySelector('.bicycles__cards');
    const bicyclesSliderContainer = document.querySelector('.bicycles__cards-wrapper');
    
    document.querySelectorAll('.bicycle-card').forEach((el) => el.remove());
    document.querySelector('.bicycles__cards-wrapper').innerHTML = '';

    bicycles.filter((el) => el.category === category).forEach(el => {
        
        bicyclesContainer.append(createSliderElement(el));
        const element = createSliderElement(el);
        element.classList.add('swiper-slide');
        bicyclesSliderContainer.append(element);
    });

    swiperBicycle.update()

}

const createLiElement = (el, index) => {
    const elementLi = document.createElement('li');
    elementLi.classList.add('bicycles__category');
    const elementLink = document.createElement('a');
    elementLink.classList.add('link');
    elementLink.classList.add('bicycles__link');
    elementLink.textContent = el;
    if(index === 0) { elementLink.classList.add('bicycles__link_active'); }

    elementLink.addEventListener('click', (e) => {
        updateBicyclesByCategory(e.target.textContent);
        document.querySelectorAll('.bicycles__link').forEach((link) => {
            if(link.textContent === el) {
                link.classList.add('bicycles__link_active');
            } else {
                link.classList.remove('bicycles__link_active');
            }
        })
        
    })
    elementLi.append(elementLink);
    return elementLi;
}

const createOptionElement = (el, index) => {
    const element = document.createElement('option');
    element.classList.add('select__item');
    element.textContent = el;
    element.value = el;
    element.setAttribute('data-index', index);
    return element;
}

const createCategoties = (categories) => {

    const categoriesContainer = document.querySelector('.bicycles__categories');
    const categoriesSelectContainer = document.querySelector('.bicycles__select');

    categories.forEach((el, index) => {

        const elementLi = createLiElement(el, index);
        categoriesContainer.append(elementLi);

        const elementOption = createOptionElement(el, index);
        categoriesSelectContainer.append(elementOption);

    })

    categoriesSelectContainer.addEventListener('change', (e) => {
        updateBicyclesByCategory(e.target.value);
    })
    
}

createCategoties(categories);
updateBicyclesByCategory(categories[0]);