import React from 'react';
import PropTypes from 'prop-types';

import reviewProp from './review.prop';

function Review({review}) {
  const {name, dignity, disadvantages, comment, rate} = review;

  const starsList = new Array(5).fill('star');

  return (
    <li className="reviews__item item__review review">
      <h3 className="review__header">{name}</h3>
      
      <ul className="review__points">
        <li className="review__item">
          <h4 className="review__item-header">Достоинства</h4>
          <p className="review__item-text">{dignity}</p>
        </li>

        <li className="review__item">
          <h4 className="review__item-header">Недостатки</h4>
          <p className="review__item-text">{disadvantages}</p>
        </li>

        <li className="review__item">
          <h4 className="review__item-header">Комментарий</h4>
          <p className="review__item-text">{comment}</p>
        </li>

        <li className="review__rate">
          <ul className="review__rate-list">
            {starsList.map((item, index) => (
              <li className="review__rate-item" key={item + index}>
                <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                {index < rate
                ? <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#D12136" />
                : <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>}
                </svg>
              </li>
            ))}
          </ul>
          <p className="review__rate-summary">Советует</p>
        </li>

        <li className="review__actions">
          <p className="review__actions-time">1 минуту назад</p>
          <button className="review__actions-answer">Ответить</button>
        </li>
      </ul>
    </li>
  )
}

Review.propTypes = {
  review: PropTypes.shape(reviewProp).isRequired,
}

export default Review;