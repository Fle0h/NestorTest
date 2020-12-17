import {
  SAVE_ALL_APARTMENTS,
  SAVE_ALL_CUSTOMERS,
} from 'src/actions/app';

export const initialState = {
  apartments: [],
  customers: [],
  loading: true,
};

const app = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_APARTMENTS:
      return {
        ...state,
        apartments: action.apartments,
        loading: false,
      };
    case SAVE_ALL_CUSTOMERS:
      return {
        ...state,
        customers: action.customers,
        loading: false,
      };
    default:
      return state;
  }
};

export default app;
