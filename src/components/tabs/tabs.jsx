import React, { useState } from 'react';
import { TabValues, DEFAULT_TAB } from '../../utils/const';

import Contacts from '../contacts/contacts';
import Reviews from '../reviews/reviews';
import Specifications from '../specifications/specifications';

function Tabs() {
  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const tabsArray = Object.values(TabValues);

  const onChangeHandler = (evt) => {
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

        <form className="tabs__form">
          <fieldset className="tabs__inner" onChange={onChangeHandler}>
            {tabsArray.map((item, id) => (
              <React.Fragment key={item + id}>
                {id === 0
                ? <input className="tabs__input visually-hidden" type="radio" name="tabs" id={`tab-${id}`} data-name={item} defaultChecked />
                : <input className="tabs__input visually-hidden" type="radio" name="tabs" id={`tab-${id}`} data-name={item} />}
                <label className="tabs__label" htmlFor={`tab-${id}`}>{item}</label>
              </React.Fragment>
            ))}
          </fieldset>
        </form>
      </section>

      {activeTabHandler()}
    </React.Fragment>
  )
}

export default Tabs;
