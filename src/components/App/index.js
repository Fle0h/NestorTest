import React from 'react';

import './styles.scss';

import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';
import ApartmentList from 'src/containers/ApartmentList';

const App = () => (
  <div className="app">
    <Header />
    <Navigation />
    <ApartmentList />
  </div>
);

export default App;
