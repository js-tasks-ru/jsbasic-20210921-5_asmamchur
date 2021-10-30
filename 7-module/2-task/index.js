import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.render();
  }

  render() {
    this.elem = createElement(`
    <div class="modal">
    <div class="modal__overlay"></div>
    <div class="modal__inner">
      <div class="modal__header">
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>
        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>
      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
  </div>
    `);
  }

  open() {
    document.body.append(this.elem);
    document.body.classList.add('is-modal-open');

    const closeButton = this.elem.querySelector('.modal__close');
    closeButton.addEventListener('click', () => {
      this.close();
    });

    document.addEventListener('keydown', event => {
      if (event.code === 'Escape') {
        this.close();
      }
    });
  }

  setTitle(titleName) {
    const modalTitleElem = this.elem.querySelector('.modal__title');
    modalTitleElem.innerHTML = titleName;
  }

  setBody(modalBody) {
    const modalBodyElem = this.elem.querySelector('.modal__body');
    modalBodyElem.innerHTML = '';
    modalBodyElem.append(modalBody);
  }

  close() {
    document.body.classList.remove('is-modal-open');
    this.elem.remove();
  }
}
