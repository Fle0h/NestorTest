import { connect } from 'react-redux';
import App from 'src/components/App';

import { getAllApartments } from 'src/actions/app';

const mapStateToProps = (store) => ({
  apartments: store.app.apartments,
  loading: store.app.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllApartments: () => {
    dispatch(getAllApartments());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
