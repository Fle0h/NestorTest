import { combineReducers } from 'redux';

import app from './app';
import newApartmentForm from './newApartmentForm';
import newRoomForm from './newRoomForm';
import newCustomerForm from './newCustomerForm';
import newBookingForm from './newBookingForm';

export default combineReducers({
  app,
  newApartmentForm,
  newRoomForm,
  newCustomerForm,
  newBookingForm,
});
