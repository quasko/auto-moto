import React, { useState } from 'react';
import { reviews } from '../../mocks/reviews';
import Popup from '../popup/popup';
import Review from '../review/review';

function Reviews() {
  const [addReview, setAddReview] = useState(false);

  const addNewReviews = () => {
    const review = localStorage.getItem('comment');
    const isPublished = reviews.includes(review);

    if (!isPublished && review) {
      reviews.push(JSON.parse(review));
    }
  }

  const onClickPopupHandler = (value) => {
    setAddReview(value)
  }

  return (
    <React.Fragment>
      <section className="main__reviews reviews">
        <ul className="reviews__list">
          {(reviews !== 0) && reviews.map((review, id) => (
            <Review key={`review-${id}`} review={review} />
          ))}
        </ul>

        <button className="reviews__add-review" onClick={() => onClickPopupHandler(true)}>Оставить отзыв</button>
      </section>

      {addReview && <Popup closePopup={onClickPopupHandler} />}

      {addNewReviews()}
    </React.Fragment>
  )
}

export default Reviews;
