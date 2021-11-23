import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
  constructor({ steps, value = 1 }) {
    this.steps = steps;
    this.value = value;
    this.numberOfSegments = this.steps - 1;
    this.percents = this.value / this.numberOfSegments * 100;
    this.render();
  }

  render() {
    this.elem = createElement(`
    <div class="slider">
      <div class="slider__thumb" style="left: ${this.percents}%;">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress" style="width: ${this.percents}%;"></div>
      <div class="slider__steps">
      </div>
    </div>
    `);

    let sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < this.steps; i++) {
      let slider = (i === this.value) ? createElement(`<span class="slider__step-active"></span>`) : createElement(`<span></span>`);
      sliderSteps.append(slider);
    }

    this.elem.addEventListener('click', event => {
      let thumb = this.elem.querySelector('.slider__thumb');
      let progress = this.elem.querySelector('.slider__progress');
      let sliderValue = this.elem.querySelector('.slider__value');
      let sliderRect = this.elem.getBoundingClientRect();
      let leftX = event.clientX - sliderRect.left;
      this.value = Math.round((leftX / sliderRect.width) * this.numberOfSegments);
      this.percents = this.value / this.numberOfSegments * 100;
      let sliders = this.elem.querySelectorAll('.slider__steps > span');
      for (let i = 0 ; i < sliders.length; i++) {
        if (i === this.value) {
          sliders[i].classList.add('slider__step-active');
        } else {
          sliders[i].removeAttribute('class');
        }
      }
      thumb.style.left = `${this.percents}%`;
      progress.style.width = `${this.percents}%`;
      sliderValue.innerHTML = `${this.value}`;

      const customEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });
    let sliderElem = this.elem.querySelector('.slider');
    console.log(sliderElem);
    let thumb = this.elem.querySelector('.slider__thumb');
    console.log(thumb);
    let progress = this.elem.querySelector('.slider__progress');
    thumb.ondragstart = () => false;
    let steps = this.steps;

    thumb.onpointerdown = function(event) {
      document.addEventListener('pointermove', onPointerMove);
      document.addEventListener('pointerup', onPointerUp);
      let elem = document.body.querySelector('.slider');
      let value;

      function onPointerMove(event) {
        elem.classList.add('slider_dragging');
        let sliderValue = elem.querySelector('.slider__value');
        let left = event.clientX - elem.getBoundingClientRect().left;
        let leftRelative = left / elem.offsetWidth;

        leftRelative < 0 && (leftRelative = 0);
        leftRelative > 1 && (leftRelative = 1);

        let leftPercents = leftRelative * 100;

        thumb.style.left = `${leftPercents}%`;
        progress.style.width = `${leftPercents}%`;

        value = Math.round(leftRelative * (steps - 1));
        sliderValue.innerHTML = `${value}`;

        let sliders = elem.querySelectorAll('.slider__steps > span');
        for (let i = 0 ; i < sliders.length; i++) {
          if (i === value) {
            sliders[i].classList.add('slider__step-active');
          } else {
            sliders[i].removeAttribute('class');
          }
        }
      }

      function onPointerUp() {
        elem.classList.add('slider_dragging');
        document.removeEventListener('pointermove', onPointerMove);
        const customEvent = new CustomEvent('slider-change', {
          detail: value,
          bubbles: true
        });
        elem.dispatchEvent(customEvent);
      }
    };
  }
}
