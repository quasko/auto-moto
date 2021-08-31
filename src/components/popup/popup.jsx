import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import useOutsideClick from '../../utils/hooks/use-outside-click';
import { makeArray } from '../../utils/common';

function Popup({closePopup}) {
  const [hoverStar, setHoverStar] = useState(0);
  const [starRate, setStarRate] = useState(0);
  const stars = makeArray();

  const popupRef = useRef();
  const nameRef = useRef();
  const dignityRef = useRef();
  const disadvantagesRef = useRef();
  const commentRef = useRef();

  const onCloseClickHandler = (evt) => {
    evt.preventDefault();

    closePopup(false);
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
  
    const formData = {
      'name': nameRef.current.value,
      'dignity': dignityRef.current.value,
      'disadvantages': disadvantagesRef.current.value,
      'comment': commentRef.current.value,
      'rate': starRate,
    };

    localStorage.setItem('comment', JSON.stringify(formData));

    closePopup(false);
  };

  useOutsideClick(popupRef, () => {
    closePopup(false);
  });

  const onMouseOverStarHandler = (evt) => {
    evt.preventDefault();

    setHoverStar(evt.target.dataset.id);
  }

  const onMouseOutStarHandler = (evt) => {
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
            <input ref={nameRef} className="popup__text-input" type="text" placeholder="Имя" required />
            <label className="popup__text-label"></label>

            <input ref={dignityRef} className="popup__text-input" type="text" placeholder="Достоинства" />
            <label className="popup__text-label"></label>

            <input ref={disadvantagesRef} className="popup__text-input" type="text" placeholder="Недостатки" />
            <label className="popup__text-label"></label>
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
                  onMouseOver={onMouseOverStarHandler}
                  onMouseOut={onMouseOutStarHandler}
                  ></label>
                </React.Fragment>
              ))}
            </fieldset>

            <textarea ref={commentRef} className="popup__comment" placeholder="Комментарий" required></textarea>
          </fieldset>

          <button className="popup__submit" onClick={onSubmitHandler}>Оставить отзыв</button>
          <button className="popup__close" onClick={onCloseClickHandler}></button>
        </form>
      </div>
    </div>
  )
}

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default Popup;
