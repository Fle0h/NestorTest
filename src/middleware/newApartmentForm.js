import axios from 'axios';
import {
  SUBMIT_NEW_APARTMENT,
} from 'src/actions/newApartmentForm';

import {
  getAllApartments,
} from 'src/actions/app';

const newApartmentFrm = (store) => (next) => (action) => {
  switch (action.type) {
    // Sauvegarder un nouvel appartement
    case SUBMIT_NEW_APARTMENT: {
      const {
        newApartmentForm: {
          number,
          name,
          street,
          zipcode,
          rooms,
        },
      } = store.getState();
      axios.post('https://app-booking-christ.herokuapp.com/api/apartment', {
        number,
        name,
        street,
        zipcode,
        rooms,
      })
        .then((res) => {
          console.log(res);
          store.dispatch(getAllApartments());
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default newApartmentFrm;
