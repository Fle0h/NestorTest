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
import NewCustomerForm from 'src/containers/NewCustomerForm';
import BookingList from 'src/components/BookingList';
import SingleBooking from 'src/components/SingleBooking';
import NewBookingForm from 'src/containers/NewBookingForm';

const App = ({
  getAllApartments,
  getAllCustomers,
  getAllBookings,
  getAllRooms,
  apartments,
  customers,
  bookings,
}) => {
  useEffect(() => {
    getAllApartments();
    getAllCustomers();
    getAllBookings();
    getAllRooms();
  }, []);

  return (
    <div className="app">
      <Switch>
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

        <Route exact path="/bookings">
          <Page>
            <BookingList bookings={bookings} />
          </Page>
        </Route>

        <Route exact path="/bookings/:slug">
          <Page>
            <SingleBooking bookings={bookings} />
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

        <Route exact path="/new-booking">
          <Page>
            <NewBookingForm
              customers={customers}
              apartments={apartments}
            />
          </Page>
        </Route>

        <Route exact path="/new-customer">
          <Page>
            <NewCustomerForm />
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
      </Switch>
    </div>
  );
};

App.propTypes = {
  getAllApartments: PropTypes.func.isRequired,
  getAllCustomers: PropTypes.func.isRequired,
  getAllBookings: PropTypes.func.isRequired,
  getAllRooms: PropTypes.func.isRequired,
  apartments: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  bookings: PropTypes.array.isRequired,
};

export default App;
