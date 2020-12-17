import { connect } from 'react-redux';
import NewCustomerForm from 'src/components/NewCustomerForm';

import {
  changeInputValueCustomer,
  submitNewCustomer,
} from 'src/actions/newCustomerForm';

const mapStateToProps = (state) => ({
  formValues: state.newRoomForm,
});

const mapDispatchToProps = (dispatch) => ({
  changeInputValueCustomer: (target, value) => {
    dispatch(changeInputValueCustomer(target, value));
  },
  submitNewCustomer: () => {
    dispatch(submitNewCustomer());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomerForm);
