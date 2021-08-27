import React from 'react';

function Header() {
  return(
    <header className="page__header header">
      <div className="header__inner">
        <div className="header__logo logo">
          <img className="logo__image" src="./img/logo.png" alt="Логотип компании Auto-Moto" width="55" height="55" />
          <div className="logo__inner">
            <p className="logo__text">Auto</p>
            <p className="logo__text">Moto</p>
          </div>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <a className="header__link" href="/">Автомобили</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Контакты</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Услуги</a>
          </li>
          <li className="header__item">
            <a className="header__link" href="/">Вакансии</a>
          </li>
        </ul>
      </div>
    </header>
  )
};

export default Header;
