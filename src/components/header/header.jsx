import React from 'react';

import Logo from '../../logo/logo';
import { HEADER_LINK_VALUES } from '../../utils/const';

function Header() {
  return(
    <header className="page__header header">
      <div className="header__inner">
        <Logo />

        <ul className="header__list">
          {HEADER_LINK_VALUES.map((item) => (
            <li className="header__item" key={item}>
              <a className="header__link" href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Header;
