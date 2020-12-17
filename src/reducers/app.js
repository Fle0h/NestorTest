import {
  SAVE_ALL_APARTMENTS,
  SAVE_ALL_CUSTOMERS,
  SAVE_ALL_BOOKINGS,
  SAVE_ALL_ROOMS,
} from 'src/actions/app';

export const initialState = {
  apartments: [],
  customers: [],
  bookings: [],
  rooms: [],
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_APARTMENTS:
      return {
        ...state,
        apartments: action.apartments,
      };
    case SAVE_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
      };
    case SAVE_ALL_BOOKINGS:
      return {
        ...state,
        bookings: action.bookings,
      };
    case SAVE_ALL_ROOMS:
      return {
        ...state,
        rooms: action.rooms,
      };
    default:
      return state;
  }
};

export default app;
