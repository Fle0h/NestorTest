/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import slugify from 'react-slugify';

import './styles.scss';

import Page from 'src/components/Page';
import ApartmentList from 'src/containers/ApartmentList';
import SingleApartment from 'src/containers/SingleApartment';
import NewApartmentForm from 'src/containers/NewApartmentForm';
import NewRoomForm from 'src/containers/NewRoomForm';

const App = ({ getAllApartments, apartments, loading }) => {
  useEffect(() => {
    getAllApartments();
  }, []);

  return (
    <div className="app">
      <Route exact path="/">
        <Page>
          <ApartmentList />
        </Page>
      </Route>

      <Route exact path="/new-apartment">
        <Page>
          <NewApartmentForm />
        </Page>
      </Route>

      <Route exact path="/new-room">
        <Page>
          <NewRoomForm />
        </Page>
      </Route>

      {!loading && (
        <Switch>
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
        </Switch>
      )}
    </div>
  );
};

App.propTypes = {
  getAllApartments: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default App;
