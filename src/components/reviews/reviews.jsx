import React from 'react';

function Reviews() {
  return (
    <section className="main__reviews reviews">
      <ul className="reviews__list">
        <li className="reviews__item item__review review">
          <h3 className="review__header">Борис Иванов</h3>
          
          <ul className="review__points">
            <li className="review__item">
              <h4 className="review__item-header">Достоинства</h4>
              <p className="review__item-text">мощность, внешний вид</p>
            </li>

            <li className="review__item">
              <h4 className="review__item-header">Недостатки</h4>
              <p className="review__item-text">Слабые тормозные колодки (пришлось заменить)</p>
            </li>

            <li className="review__item">
              <h4 className="review__item-header">Комментарий</h4>
              <p className="review__item-text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. 
                Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.</p>
            </li>

            <li className="review__rate">
              <ul className="review__rate-list">
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
              </ul>
              <p className="review__rate-summary">Советует</p>
            </li>

            <li className="review__actions">
              <p className="review__actions-time">1 минуту назад</p>
              <button className="review__actions-answer">Ответить</button>
            </li>
          </ul>
        </li>
        <li className="reviews__item item__review review">
          <h3 className="review__header">Марсель Исмагилов</h3>
          
          <ul className="review__points">
            <li className="review__item">
              <h4 className="review__item-header">Достоинства</h4>
              <p className="review__item-text">Cтиль, комфорт, управляемость</p>
            </li>

            <li className="review__item">
              <h4 className="review__item-header">Недостатки</h4>
              <p className="review__item-text"> Дорогой ремонт и обслуживание</p>
            </li>

            <li className="review__item">
              <h4 className="review__item-header">Комментарий</h4>
              <p className="review__item-text">Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. 
                Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.</p>
            </li>

            <li className="review__rate">
              <ul className="review__rate-list">
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
                <li className="review__rate-item">
                  <svg className="review__rate-star" width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.74375 0L10.6227 5.87336L16.7029 5.87336L11.7839 9.50329L13.6628 15.3766L8.74375 11.7467L3.82472 15.3766L5.70362 9.50329L0.784596 5.87336L6.86485 5.87336L8.74375 0Z" fill="#BDBEC2" fillOpacity="0.7"/>
                  </svg>
                </li>
              </ul>
              <p className="review__rate-summary">Советует</p>
            </li>

            <li className="review__actions">
              <p className="review__actions-time">1 минуту назад</p>
              <button className="review__actions-answer">Ответить</button>
            </li>
          </ul>
        </li>
      </ul>

      <button className="reviews__add-review">Оставить отзыв</button>
    </section>
  )
}

export default Reviews;
