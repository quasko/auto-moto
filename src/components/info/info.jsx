import React from 'react';

import { InfoItems, MODEL_NAME, ModelPrice } from '../../utils/const';

function Info() {
  const infoItemValues = Object.values(InfoItems);
  
  return (
    <section className="main__info info">
      <h1 className="info__header">{MODEL_NAME}</h1>

      <ul className="info__list">
        {infoItemValues.map((item, index) => (
          <li 
          className={`info__item info__item--${Object.keys(InfoItems)[index].toLowerCase()}`} 
          key={item}
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="info__price-wrapper">
        <h2 className="info__current-price">{ModelPrice.NEW}</h2>
        <p className="info__prev-price">{ModelPrice.OLD}</p>
      </div>

      <a className="info__request" href="/">Оставить заявку</a>
      <a className="info__credit" href="/">В кредит от 11 000 ₽</a>
    </section>
  )
}

export default Info;
