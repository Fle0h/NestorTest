import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';
import apartmentList from '../middleware/apartmentList';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
    apartmentList,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
