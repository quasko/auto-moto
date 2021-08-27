import React from 'react';

function Specifications() {
  return (
    <section className="main__specifications specifications">
      <ul className="specifications__list">
        <li className="specifications__item">
          <h3 className="specifications__header">Трансмиссия</h3>
          <p className="specifications__detail">Роботизированная</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Мощность двигателя, л.с.</h3>
          <p className="specifications__detail">249</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Тип двигателя</h3>
          <p className="specifications__detail">Бензиновый</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Привод</h3>
          <p className="specifications__detail">Полный</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Объем двигателя, л</h3>
          <p className="specifications__detail">2.4</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Макс. крутящий момент</h3>
          <p className="specifications__detail">370/4500</p>
        </li>
        <li className="specifications__item">
          <h3 className="specifications__header">Количество цилиндров</h3>
          <p className="specifications__detail">4</p>
        </li>
      </ul>
    </section>
  )
}

export default Specifications;
