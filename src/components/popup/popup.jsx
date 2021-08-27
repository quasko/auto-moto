import React from 'react';

function Popup() {
  return (
    <div className="page__popup popup">
      <h2 className="popup__header">Оставить отзыв</h2>
      <form className="popup__form">
        <fieldset className="popup__field">
          <input className="popup__text-input" type="text" placeholder="Имя" required />
          <label className="popup__text-label"></label>

          <input className="popup__text-input" type="text" placeholder="Достоинства" />
          <label className="popup__text-label"></label>

          <input className="popup__text-input" type="text" placeholder="Недостатки" />
          <label className="popup__text-label"></label>
        </fieldset>
        <fieldset className="popup__field">
          <fieldset className="popup__stars">
            <h3 className="popup__stars-header">Оцените товар:</h3>

            <input className="popup__stars-input visually-hidden" type="radio" name="stars" id="star-1" />
            <label className="popup__stars-label" htmlFor="star-1">
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
              </svg>                
            </label>

            <input className="popup__stars-input visually-hidden" type="radio" name="stars" id="star-2" />
            <label className="popup__stars-label" htmlFor="star-2">
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
              </svg>  
            </label>

            <input className="popup__stars-input visually-hidden" type="radio" name="stars" id="star-3" />
            <label className="popup__stars-label" htmlFor="star-3">
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
              </svg>  
            </label>

            <input className="popup__stars-input visually-hidden" type="radio" name="stars" id="star-4" />
            <label className="popup__stars-label" htmlFor="star-4">
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
              </svg>  
            </label>

            <input className="popup__stars-input visually-hidden" type="radio" name="stars" id="star-5" />
            <label className="popup__stars-label" htmlFor="star-5">
              <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
              </svg>  
            </label>
          </fieldset>

          <textarea className="popup__comment" placeholder="Комментарий" required></textarea>
        </fieldset>

        <button className="popup__submit">Оставить отзыв</button>
        <button className="popup__close"></button>
      </form>
    </div>
  )
};

export default Popup;
