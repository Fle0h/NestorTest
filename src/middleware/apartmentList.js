import axios from 'axios';
import
{
  GET_ALL_APARTMENTS,
  saveAllApartments,
} from 'src/actions/app';

const app = (store) => (next) => (action) => {
  switch (action.type) {
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
    default:
      next(action);
  }
};

export default app;
