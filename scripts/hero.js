const hero = document.querySelector('.hero');
const heroInfo = document.querySelector('.hero__info');
const heroHeading = document.querySelector('.hero__heading');
const heroImages = document.querySelector('.hero__images');

const moveHeroImages = () => {
    if(window.innerWidth <= 840) {
        if(hero.querySelector('.hero__images')) {
            hero.querySelector('.hero__images').remove();
        }
        heroHeading.after(heroImages);
    } else {
        if(heroInfo.querySelector('.hero__images')) {
            heroInfo.querySelector('.hero__images').remove();
        }
        hero.append(heroImages);
    }
}

window.addEventListener('resize', moveHeroImages);

moveHeroImages();