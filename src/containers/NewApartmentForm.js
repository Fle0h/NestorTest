import { connect } from 'react-redux';
import NewApartmentForm from 'src/components/NewApartmentForm';

import {
  changeInputValueApartment,
  submitNewApartment,
} from 'src/actions/newApartmentForm';

const mapStateToProps = (state) => ({
  formValues: state.newApartmentForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValueApartment: (target, value) => {
    dispatch(changeInputValueApartment(target, value));
  },
  submitNewApartment: () => {
    dispatch(submitNewApartment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewApartmentForm);
