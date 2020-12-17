/* eslint-disable arrow-body-style */
import axios from 'axios';
import {
  CHANGE_INPUT_VALUE_APARTMENT_BOOKING,
  SUBMIT_NEW_BOOKING,
  saveFoundRooms,
} from 'src/actions/newBookingForm';

import {
  getAllApartments,
  getAllRooms,
  getAllBookings,
} from 'src/actions/app';

const newBookingForm = (store) => (next) => (action) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE_APARTMENT_BOOKING: {
      const {
        app: {
          apartments,
          rooms,
        },
      } = store.getState();

      // Je ne trouve pas de solutions pour avoir convenablement accès à l'id d'une room 
      // Je me sers donc de son number
      const foundApart = apartments.find((apartment) => action.value === apartment.id);
      const foundRooms = foundApart.rooms.map((room) => room);
      store.dispatch(saveFoundRooms(foundRooms));
      break;
    }
    // Sauvegarder un nouvel appartement
    case SUBMIT_NEW_BOOKING: {
      const {
        newBookingForm: {
          clientId,
          roomId,
        },
      } = store.getState();
      if (roomId !== '') {
        axios.post('https://app-booking-christ.herokuapp.com/api/booking', {
          clientId,
          roomId,
        })
          .then((res) => {
            console.log(res);
            store.dispatch(getAllApartments());
            store.dispatch(getAllRooms());
            store.dispatch(getAllBookings());
          })
          .catch((error) => {
            console.log(error);
          });
      }
      break;
    }
    default:
      next(action);
  }
};

export default newBookingForm;
