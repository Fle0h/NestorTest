import { connect } from 'react-redux';
import NewBookingForm from 'src/components/NewBookingForm';

import {
  changeInputValueBooking,
  changeInputValueApartmentBooking,
  submitNewBooking,
} from 'src/actions/newBookingForm';

const mapStateToProps = (state) => ({
  formValues: state.newBookingForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValueBooking: (target, value) => {
    dispatch(changeInputValueBooking(target, value));
  },
  changeInputValueApartmentBooking: (target, value) => {
    dispatch(changeInputValueApartmentBooking(target, value));
  },
  submitNewBooking: () => {
    dispatch(submitNewBooking());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewBookingForm);
