import {
  CHANGE_INPUT_VALUE_BOOKING,
  SAVE_FOUND_ROOMS,
} from 'src/actions/newBookingForm';

export const initialState = {
  clientId: '',
  foundRooms: '',
  roomId: '',
};

const newBookingForm = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_BOOKING:
      return {
        ...state,
        [action.target]: action.value,
      };
    case SAVE_FOUND_ROOMS:
      return {
        ...state,
        foundRooms: action.rooms,
      };
    default:
      return state;
  }
};

export default newBookingForm;
