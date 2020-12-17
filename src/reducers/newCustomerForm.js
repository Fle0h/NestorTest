import {
  CHANGE_INPUT_VALUE_CUSTOMER,
} from 'src/actions/newCustomerForm';

export const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  nationality: '',
  birthDate: '',
};

const newCustomerForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_CUSTOMER:
      return {
        ...state,
        [action.target]: action.value,
      };
    default:
      return state;
  }
};

export default newCustomerForm;
