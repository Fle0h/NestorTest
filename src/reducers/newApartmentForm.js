import { CHANGE_INPUT_VALUE } from 'src/actions/newApartmentForm';

export const initialState = {
  name: '',
  number: '',
  street: '',
  zipcode: '',
  rooms: [],
};

const newApartmentForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.target]: action.value,
      };
    default:
      return state;
  }
};

export default newApartmentForm;
