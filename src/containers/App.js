import { connect } from 'react-redux';
import App from 'src/components/App';

import {
  getAllApartments,
  getAllCustomers,
} from 'src/actions/app';

const mapStateToProps = (store) => ({
  apartments: store.app.apartments,
  customers: store.app.customers,
  loading: store.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllApartments: () => {
    dispatch(getAllApartments());
  },
  getAllCustomers: () => {
    dispatch(getAllCustomers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
