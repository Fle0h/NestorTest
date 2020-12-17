/* eslint-disable arrow-body-style */
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'react-slugify';

import './styles.scss';

import Page from 'src/components/Page';
import ApartmentList from 'src/containers/ApartmentList';
import SingleApartment from 'src/components/SingleApartment';

const App = ({ apartments }) => {
  return (
    <div className="app">
      <Route exact path="/">
        <Page>
          <ApartmentList />
        </Page>
      </Route>

      {apartments.map((singleApartment) => {
        return (
          <Route key={singleApartment.id} exact path={`/apartment/${slugify(singleApartment.name)}`}>
            <Page>
              <SingleApartment
                key={singleApartment.id}
                apartment={singleApartment}
              />
            </Page>
          </Route>
        );
      })}
    </div>
  );
};

App.propTypes = {
  apartments: PropTypes.array.isRequired,
};

export default App;
