import React from 'react';

import MapContainer from '../map-container/map-container';

function Contacts() {
  return (
    <section className="main__contacts contacts">
      <ul className="contacts__list">
        <li className="contacts__item">
          <h3 className="contacts__header">Адрес</h3>
          <p className="contacts__text">Санкт Петербург,</p>
          <p className="contacts__text">набережная реки Карповки, дом 5</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__header">Режим работы</h3>
          <p className="contacts__text">Ежедневно, с 10:00 до 21:00</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__header">Телефон</h3>
          <a className="contacts__text" href="tel:+78003335599">8 (800) 333-55-99</a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__header">E-mail</h3>
          <a className="contacts__text" href="mailto:info@avto-moto.ru">info@avto-moto.ru</a>
        </li>
      </ul>

      <div className="contacts__map">
        <MapContainer />
      </div>
    </section>
  )
}

export default Contacts;
