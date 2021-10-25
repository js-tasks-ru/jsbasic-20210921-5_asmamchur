import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;

    const ribbonElem = createElement(`<div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner"></nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>
    `);

    const ribbon = ribbonElem.querySelector('.ribbon__inner');

    for (let categoryItem of categories) {
      let ribbonItem = createElement(`
         <a href="#" class="ribbon__item" data-id="${categoryItem.id}">${categoryItem.name}</a>
      `);
      ribbon.append(ribbonItem);
    }

    const rightButton = ribbonElem.querySelector('.ribbon__arrow_right');
    const leftButton = ribbonElem.querySelector('.ribbon__arrow_left');

    rightButton.addEventListener('click', () => {
      ribbon.scrollBy(350, 0);
    });

    leftButton.addEventListener('click', () => {
      ribbon.scrollBy(-350, 0);
    });

    ribbon.addEventListener('scroll', event => {
      if (ribbon.scrollWidth - ribbon.scrollLeft - ribbon.clientWidth < 1) {
        rightButton.classList.remove('ribbon__arrow_visible');
      } else if (screenLeft < 0) {
        leftButton.classList.remove('ribbon__arrow_visible');
      } else {
        leftButton.classList.add('ribbon__arrow_visible');
        rightButton.classList.add('ribbon__arrow_visible');
      }
    });

    ribbon.addEventListener('click', event => {
      if (event.target.className === 'ribbon__item') {
        event.preventDefault();
        let activeItem = ribbon.querySelector('.ribbon__item_active');
        !activeItem || activeItem.classList.remove('ribbon__item_active');
        event.target.classList.add('ribbon__item_active');
        const customEvent = new CustomEvent('ribbon-select', {
          detail: event.target.dataset.id,
          bubbles: true
        });
        ribbonElem.dispatchEvent(customEvent);
      }
    });

    this.elem = ribbonElem;
  }
}
