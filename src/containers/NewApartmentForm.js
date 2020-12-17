import { connect } from 'react-redux';
import NewApartmentForm from 'src/components/NewApartmentForm';

import {
  changeInputValue,
  submitNewApartment,
} from 'src/actions/newApartmentForm';

const mapStateToProps = (state) => ({
  formValues: state.newApartmentForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValue: (target, value) => {
    dispatch(changeInputValue(target, value));
  },
  submitNewApartment: () => {
    dispatch(submitNewApartment());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewApartmentForm);
