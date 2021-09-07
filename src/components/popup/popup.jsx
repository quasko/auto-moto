import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from '../../utils/hooks/use-outside-click';
import { makeArray } from '../../utils/common';

function Popup({closePopup, addNewReviews}) {
  const [hoverStar, setHoverStar] = useState(0);
  const [starRate, setStarRate] = useState(0);
  const stars = makeArray();

  const popupRef = useRef();
  const nameRef = useRef();
  const dignityRef = useRef();
  const disadvantagesRef = useRef();
  const commentRef = useRef();

  useEffect(() => {
    const closeByEsc = (evt) => {
      if (evt.keyCode === 27) {
        closePopup(false);
      }
    }

    window.addEventListener('keydown', closeByEsc)

  return () => window.removeEventListener('keydown', closeByEsc)
  }, []);

  const onCloseClick = (evt) => {
    evt.preventDefault();

    closePopup(false);
  };

  const onPopupSubmit = (evt) => {
    evt.preventDefault();
  
    const formData = {
      'name': nameRef.current.value,
      'dignity': dignityRef.current.value,
      'disadvantages': disadvantagesRef.current.value,
      'comment': commentRef.current.value,
      'rate': starRate,
    };

    localStorage.setItem('comment', JSON.stringify(formData));

    addNewReviews();
    closePopup(false);
  };

  useOutsideClick(popupRef, () => {
    closePopup(false);
  });

  const onStarMouseOver = (evt) => {
    evt.preventDefault();

    setHoverStar(evt.target.dataset.id);
  }

  const onStarMouseOut = (evt) => {
    evt.preventDefault();

    setHoverStar(0);
  }

  const onStarClickHandler = (evt) => {
    evt.preventDefault();

    setStarRate(evt.target.dataset.id);
  }

  return (
    <div className="page__popup popup">
      <div ref={popupRef} className="popup__wrapper">
        <h2 className="popup__header">Оставить отзыв</h2>
        <form className="popup__form">
          <fieldset className="popup__field">
            <input ref={nameRef} className="popup__text-input" type="text" placeholder="Имя" id="popup_name" required />
            <label className="popup__text-label visually-hidden" htmlFor="popup_name">Поле имени</label>

            <input ref={dignityRef} className="popup__text-input" type="text" placeholder="Достоинства" id="popup_dignity" />
            <label className="popup__text-label visually-hidden" htmlFor="popup_dignity">Поле достоинств</label>

            <input ref={disadvantagesRef} className="popup__text-input" type="text" placeholder="Недостатки" id="popup_disadvantages" />
            <label className="popup__text-label visually-hidden" htmlFor="popup_disadvantages">Поле недостатков</label>
          </fieldset>
          <fieldset className="popup__field">
            <fieldset className="popup__stars">
              <h3 className="popup__stars-header">Оцените товар:</h3>

              {stars.map((item, index) => (
                <React.Fragment key={`popup-star-${index}`}>
                  <input className="popup__stars-input visually-hidden" type="radio" name="stars" id={`star-${index}`} />
                  <label 
                  className={
                    `popup__stars-label 
                    ${index < hoverStar || index < starRate
                      ? `popup__stars-label--hovered`
                      : ``}`
                  }
                  tabIndex={5}
                  htmlFor={`star-${index}`} 
                  data-id={item}
                  onClick={onStarClickHandler} 
                  onMouseOver={onStarMouseOver}
                  onMouseOut={onStarMouseOut}
                  >Рейтинг</label>
                </React.Fragment>
              ))}
            </fieldset>

            <textarea ref={commentRef} className="popup__comment" placeholder="Комментарий" required></textarea>
          </fieldset>

          <button className="popup__submit" onClick={onPopupSubmit}>Оставить отзыв</button>
          <button className="popup__close" onClick={onCloseClick}></button>
        </form>
      </div>
    </div>
  )
}

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
