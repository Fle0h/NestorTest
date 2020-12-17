import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import app from '../middleware/app';
import apartmentList from '../middleware/apartmentList';
import newApartmentForm from '../middleware/newApartmentForm';
import newRoomForm from '../middleware/newRoomForm';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    app,
    apartmentList,
    newApartmentForm,
    newRoomForm,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
