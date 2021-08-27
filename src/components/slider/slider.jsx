import React from 'react';

function Slider() {
  return (
    <section className="main__slider slider">
      <img className="slider__image" src='./img/slide-1-desktop@1x.jpg' alt='Фотография автомобиля' />

      <form className="slider__preview">
        <fieldset className="slider__wrapper">
          <label className="slider__label" htmlFor="slide-1">
            <input className="slider__input visually-hidden" type="radio" name="slider" id="slide-1" defaultChecked />
            <img src="./img/slide-1-desktop@1x.jpg" width="128" height="80" alt="Первая фотография автомобиля" />
          </label>

          <label className="slider__label" htmlFor="slide-2">
            <input className="slider__input visually-hidden" type="radio" name="slider" id="slide-2" />
            <img src="./img/slide-2-desktop@1x.jpg" width="128" height="80" alt="Вторая фотография автомобиля" />
          </label>

          <label className="slider__label" htmlFor="slide-3">
            <input className="slider__input visually-hidden" type="radio" name="slider" id="slide-3" />
            <img src="./img/slide-3-desktop@1x.jpg" width="128" height="80" alt="Третья фотография автомобиля" />
          </label>
        </fieldset>
      </form>
    </section>
  )
};

export default Slider;
