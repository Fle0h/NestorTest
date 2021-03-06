import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import app from '../middleware/app';
import newApartmentForm from '../middleware/newApartmentForm';
import newRoomForm from '../middleware/newRoomForm';
import newCustomerForm from '../middleware/newCustomerForm';
import newBookingForm from '../middleware/newBookingForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    app,
    newApartmentForm,
    newRoomForm,
    newCustomerForm,
    newBookingForm,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
