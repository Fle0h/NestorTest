import axios from 'axios';
import
{
  GET_ALL_APARTMENTS,
  GET_ALL_CUSTOMERS,
  GET_ALL_BOOKINGS,
  GET_ALL_ROOMS,
  saveAllApartments,
  saveAllCustomers,
  saveAllBookings,
  saveAllRooms,
} from 'src/actions/app';

const app = (store) => (next) => (action) => {
  switch (action.type) {
    // Stocker tous les appartements dans le store
    case GET_ALL_APARTMENTS: {
      axios.get('https://app-booking-christ.herokuapp.com/api/apartment')
        .then((res) => {
          store.dispatch(saveAllApartments(res.data.apartments));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    // Stocker tous les clients dans le store
    case GET_ALL_CUSTOMERS: {
      axios.get('https://app-booking-christ.herokuapp.com/api/client')
        .then((res) => {
          store.dispatch(saveAllCustomers(res.data.clients));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    // Stocker toutes les réservations
    case GET_ALL_BOOKINGS: {
      axios.get('https://app-booking-christ.herokuapp.com/api/booking')
        .then((res) => {
          store.dispatch(saveAllBookings(res.data.bookings));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    }
    // Stocker toutes les chambres
    case GET_ALL_ROOMS: {
      axios.get('https://app-booking-christ.herokuapp.com/api/room')
        .then((res) => {
          store.dispatch(saveAllRooms(res.data.rooms));
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

export default app;
