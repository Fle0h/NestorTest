import { SAVE_ALL_APARTMENTS } from 'src/actions/apartmentList';

export const initialState = {
  apartments: [],
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
    default:
      return state;
  }
};

export default app;
