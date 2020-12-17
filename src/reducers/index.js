import { combineReducers } from 'redux';

import app from './app';
import apartmentList from './apartmentList';
import newApartmentForm from './newApartmentForm';

export default combineReducers({
  app,
  apartmentList,
  newApartmentForm,
});
