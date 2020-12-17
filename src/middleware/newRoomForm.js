import axios from 'axios';
import {
  SUBMIT_NEW_ROOM,
} from 'src/actions/newRoomForm';

import {
  getAllApartments,
} from 'src/actions/app';

const newRoomForm = (store) => (next) => (action) => {
  switch (action.type) {
    // Sauvegarder un nouvel appartement
    case SUBMIT_NEW_ROOM: {
      const {
        newRoomForm: {
          number,
          area,
          price,
          apartmentId,
        },
      } = store.getState();
      axios.post('https://app-booking-christ.herokuapp.com/api/room', {
        number,
        area,
        price,
        apartmentId,
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

export default newRoomForm;
