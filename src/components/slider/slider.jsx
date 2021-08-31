import React, { useState } from 'react';

function Slider() {
  const [mainPicture, setMainPicture] = useState(0);
  const [leftButtonDisabled, setLeftButtonDisabled] = useState(true);
  const [rightButtonDisabled, setRightButtonDisabled] = useState(false);

  const sliderImageList = new Array(3).fill('slider');

  const onChangeHandler = (evt) => {
    setMainPicture(evt.target.dataset.id);
  }

  const setButtons = (currentPicture) => {
    switch (currentPicture) {
      case 0:
        setLeftButtonDisabled(true);
        break
      case sliderImageList.length - 1:
        setRightButtonDisabled(true);
        break
      default:
        setLeftButtonDisabled(false);
        setRightButtonDisabled(false);
    }
  }

  const onLeftButtonClickHandler = (evt) => {
    evt.preventDefault();
    const currentPic = mainPicture - 1;

    setMainPicture(currentPic);
    setButtons(currentPic);
  }

  const onRightButtonClickHandler = (evt) => {
    evt.preventDefault();
    const currentPic = mainPicture + 1;

    setMainPicture(currentPic);
    setButtons(currentPic);
  }

  return (
    <section className="main__slider slider">
      <h2 className="slider__header visually-hidden">Слайдер с фотографиями товара</h2>

      <img className="slider__image" src={`../../img/slide-${mainPicture}-desktop@1x.jpg`} alt='Фотография автомобиля' />

      <form className="slider__preview">
        <fieldset className="slider__wrapper" onChange={onChangeHandler}>
          {sliderImageList.map((item, id) => (
            <React.Fragment key={item + id}>
              <input 
              className="slider__input visually-hidden" 
              type="radio" 
              name="slider" 
              id={`slide-${id}`} 
              data-id={Number(id)} 
              defaultChecked 
              />

              <label className="slider__label" htmlFor={`slide-${id}`} >
                <img src={`../../img/slide-${id}-desktop@1x.jpg`} width="128" height="80" alt="Фотография автомобиля" />
              </label>
            </React.Fragment>
          ))}
        </fieldset>

        <button 
        className={`slider__button slider__button--left ${leftButtonDisabled ? `slider__button--disabled`: ''}`} 
        aria-label="Левая кнопка слайдера"
        onClick={onLeftButtonClickHandler} 
        disabled={leftButtonDisabled}
        >
        </button>
        <button 
        className={`slider__button slider__button--right ${rightButtonDisabled ? `slider__button--disabled`: ''}`} 
        aria-label="Правая кнопка слайдера"
        onClick={onRightButtonClickHandler} 
        disabled={rightButtonDisabled}
        >
        </button>
      </form>
    </section>
  )
}

export default Slider;
