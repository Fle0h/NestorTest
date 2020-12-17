import { CHANGE_INPUT_VALUE_APARTMENT } from 'src/actions/newApartmentForm';

export const initialState = {
  name: '',
  number: '',
  street: '',
  zipcode: '',
  roomNumber: '',
  roomArea: '',
  roomPrice: '',
};

const newApartmentForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_APARTMENT:
      return {
        ...state,
        [action.target]: action.value,
      };
    default:
      return state;
  }
};

export default newApartmentForm;
