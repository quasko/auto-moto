import React from 'react';

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
          <p className="contacts__text">8 (800) 333-55-99</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__header">E-mail</h3>
          <p className="contacts__text">info@avto-moto.ru</p>
        </li>
      </ul>

      <img className="contacts__map" src="./img/map.jpg" alt="Карта с расположением нашего магазина" width="431" height="271" />
    </section>
  )
}

export default Contacts;
