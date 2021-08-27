import React from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import Info from '../info/info';
import Slider from '../slider/slider';
import Tabs from '../tabs/tabs';

function MainScreen() {
  return (
    <React.Fragment>
      <Header />

      <main className="page__main main">
        <Slider />

        <Info />

        <Tabs />

      </main>

      <Footer />
    </React.Fragment>
  );
};

export default MainScreen;
