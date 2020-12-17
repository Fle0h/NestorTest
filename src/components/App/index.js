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
import CustomerList from 'src/components/CustomerList';
import SingleCustomer from 'src/components/SingleCustomer';

const App = ({
  getAllApartments,
  getAllCustomers,
  apartments,
  customers,
  loading,
}) => {
  useEffect(() => {
    getAllApartments();
    getAllCustomers();
  }, []);

  return (
    <div className="app">
      <Route exact path="/">
        <Page>
          <ApartmentList apartment={apartments} />
        </Page>
      </Route>

      <Route exact path="/customers">
        <Page>
          <CustomerList customers={customers} />
        </Page>
      </Route>

      <Route exact path="/customers/:slug">
        <Page>
          <SingleCustomer customers={customers} />
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
  getAllCustomers: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default App;
