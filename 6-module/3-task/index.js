import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
  constructor(slides) {
    this.slides = slides;

    const carouselElem = createElement(`
    <div class="carousel">

    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner"></div>`);
    let carousel = carouselElem.querySelector('.carousel__inner');

    for (let slide of slides) {
      let innerSlide = createElement(`<div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`);
        carousel.append(innerSlide);
    }
    
    const rightButton = carouselElem.querySelector('.carousel__arrow_right');
    const leftButton = carouselElem.querySelector('.carousel__arrow_left');
    const slideCount = slides.length;
    let count = 0;
    leftButton.style.display = 'none';

    rightButton.addEventListener('click', () => {
      const width = carousel.offsetWidth;
      count++;
      carousel.style.transform = `translateX(-${width * count}px)`;
      if (count === slideCount - 1) {
        (rightButton.style.display = 'none');
      } else {
        rightButton.style.display = '';
        leftButton.style.display = '';
      }
    });
    
    leftButton.addEventListener('click', () => {
      const width = carousel.offsetWidth;
      count--;
      carousel.style.transform = `translateX(-${width * count}px)`;
      if (count === 0) {
        (leftButton.style.display = 'none');
      } else {
        rightButton.style.display = '';
        leftButton.style.display = '';
      }
    });

    carousel.addEventListener('click', (event) => {
      if (event.target.closest('.carousel__button').tagName === 'BUTTON') {
          const customEvent = new CustomEvent('product-add', {
          detail: event.target.closest('[data-id]').dataset.id,
          bubbles: true
        })
        carouselElem.dispatchEvent(customEvent)
      }
        
    })

    this.elem = carouselElem;

  }


}
