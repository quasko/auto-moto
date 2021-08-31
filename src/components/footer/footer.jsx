import React from 'react';

import { FOOTER_LINK_VALUES } from '../../utils/const';

function Footer() {
  return (
    <footer className="page__footer footer">
      <ul className="footer__list">
        {FOOTER_LINK_VALUES.map((linkName) => (
          <li className="footer__item" key={linkName}>
            <a className="footer__link" href="/">{linkName}</a>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default Footer;
