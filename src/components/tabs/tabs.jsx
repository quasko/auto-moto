import React, { useState } from 'react';
import { TabValues, DEFAULT_TAB } from '../../utils/const';

import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
import Specifications from '../specifications/specifications';

function Tabs() {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const tabsArray = Object.values(TabValues);

  const onClick = (evt) => {
    setActiveTab(evt.target.dataset.name);
  }

  const activeTabHandler = () => {
    switch (activeTab) {
      case TabValues.SPECIFICATONS:
        return <Specifications />;
      case TabValues.REVIEWS:
        return <Reviews />;
      case TabValues.CONTACTS:
        return <Contacts />;
      default:
        return 'Error';
    }
  };
  
  return (
    <React.Fragment>
      <section className="main__tabs tabs">
        <h2 className="tabs__header visually-hidden">Меню товара</h2>

        <ul className="tabs__inner" onClick={onClick}>
          {tabsArray.map((item, id) => (
            <li 
              className={`tabs__item ${item === activeTab ? `tabs__item--checked` : ``}`} 
              key={item + id} 
              data-name={item}
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {activeTabHandler()}
    </React.Fragment>
  )
}

export default Tabs;
