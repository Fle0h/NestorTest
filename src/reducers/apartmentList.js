import { SAVE_ALL_APARTMENTS } from 'src/actions/apartmentList';

export const initialState = {
  apartments: [],
};

const apartmentList = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_ALL_APARTMENTS:
      return {
        ...state,
        apartments: action.apartments,
      };
    default:
      return state;
  }
};

export default apartmentList;
