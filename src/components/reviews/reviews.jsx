import React, { useState } from 'react';
import { reviews } from '../../mocks/reviews';
import Popup from '../popup/popup';
import Review from '../review/review';

function Reviews() {
  const [addReview, setAddReview] = useState(false);

  const addNewReviews = () => {
    const review = localStorage.getItem('comment');
    const isPublished = reviews.includes(review);

    if (!isPublished) {
      reviews.push(JSON.parse(review));
    }
  }

  const onClickPopup = (value) => {
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

        <button className="reviews__add-review" onClick={() => onClickPopup(true)}>Оставить отзыв</button>
      </section>

      {addReview && <Popup closePopup={onClickPopup} addNewReviews={addNewReviews} />}
    </React.Fragment>
  )
}

export default Reviews;
