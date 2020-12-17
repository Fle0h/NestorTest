import { connect } from 'react-redux';
import App from 'src/components/App';

const mapStateToProps = (store) => ({
  apartments: store.apartmentList.apartments,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
