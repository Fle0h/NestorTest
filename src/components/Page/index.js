import React from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Navigation from 'src/components/Navigation';

import './style.scss';

const Page = ({ children }) => (
  <div className="page">
    <div className="page__up">
      <Header />
      <Navigation />
      {children}
    </div>
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
