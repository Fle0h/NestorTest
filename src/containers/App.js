import { connect } from 'react-redux';
import App from 'src/components/App';

import {
  getAllApartments,
  getAllCustomers,
  getAllBookings,
  getAllRooms,
} from 'src/actions/app';

const mapStateToProps = (store) => ({
  apartments: store.app.apartments,
  customers: store.app.customers,
  bookings: store.app.bookings,
  loading: store.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllApartments: () => {
    dispatch(getAllApartments());
  },
  getAllCustomers: () => {
    dispatch(getAllCustomers());
  },
  getAllBookings: () => {
    dispatch(getAllBookings());
  },
  getAllRooms: () => {
    dispatch(getAllRooms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
