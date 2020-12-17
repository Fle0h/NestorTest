import axios from 'axios';
import {
  SUBMIT_NEW_APARTMENT,
} from 'src/actions/newApartmentForm';

import {
  getAllApartments,
} from 'src/actions/app';

const newApartmentForm = (store) => (next) => (action) => {
  switch (action.type) {
    // Sauvegarder un nouvel appartement
    case SUBMIT_NEW_APARTMENT: {
      const {
        newApartmentForm: {
          number,
          name,
          street,
          zipcode,
          roomNumber,
          roomArea,
          roomPrice,
        },
      } = store.getState();

      // Construction d'un tableau pour le post de la chambre
      const roomArray = [{
        number: roomNumber,
        area: roomArea,
        price: roomPrice,
      }];

      axios.post('https://app-booking-christ.herokuapp.com/api/apartment', {
        number,
        name,
        street,
        zipcode,
        rooms: roomArray,
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

export default newApartmentForm;
