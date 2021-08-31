import React from 'react';

function Logo() {
  return (
    <div className="header__logo logo">
      <img className="logo__image" src="../../img/logo.png" alt="Логотип компании Auto-Moto" width="55" height="55" />
      <div className="logo__inner">
        <p className="logo__text">Auto</p>
        <p className="logo__text">Moto</p>
      </div>
    </div>
  )
}

export default Logo;
