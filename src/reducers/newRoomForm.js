import {
  CHANGE_INPUT_VALUE,
  CHANGE_APARTMENT_ID,
} from 'src/actions/newRoomForm';

export const initialState = {
  number: '',
  area: '',
  price: '',
  apartmentId: '',
};

const newApartmentForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        [action.target]: action.value,
      };
    case CHANGE_APARTMENT_ID:
      return {
        ...state,
        apartmentId: action.id,
      };
    default:
      return state;
  }
};

export default newApartmentForm;
