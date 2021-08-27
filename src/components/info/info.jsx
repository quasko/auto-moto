import React from 'react';

function Info() {
  return (
    <section className="main__info info">
      <h1 className="info__header">Марпех 11</h1>

      <ul className="info__list">
        <li className="info__item info__item--gasoline">бензин</li>
        <li className="info__item info__item--transmission">механика</li>
        <li className="info__item info__item--horsepower">100 л.с.</li>
        <li className="info__item info__item--engine">1.4 л.</li>
      </ul>

      <div className="info__price-wrapper">
        <h2 className="info__current-price">2 300 000 ₽</h2>
        <p className="info__prev-price">2 400 000 ₽</p>
      </div>

      <a className="info__request" href="/">Оставить заявку</a>
      <a className="info__credit" href="/">В кредит от 11 000 ₽</a>
    </section>
  )
};

export default Info;
