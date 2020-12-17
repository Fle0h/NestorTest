import axios from 'axios';
import {
  SUBMIT_NEW_CUSTOMER,
} from 'src/actions/newCustomerForm';

import {
  getAllCustomers,
} from 'src/actions/app';

const newRoomForm = (store) => (next) => (action) => {
  switch (action.type) {
    // Sauvegarder un nouvel appartement
    case SUBMIT_NEW_CUSTOMER: {
      const {
        newCustomerForm: {
          firstName,
          lastName,
          email,
          phone,
          nationality,
          birthDate,
        },
      } = store.getState();
      axios.post('https://app-booking-christ.herokuapp.com/api/client', {
        firstName,
        lastName,
        email,
        phone,
        nationality,
        birthDate,
      })
        .then((res) => {
          // Actualiser la liste de clients
          store.dispatch(getAllCustomers());
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    }
    default:
      next(action);
  }
};

export default newRoomForm;
