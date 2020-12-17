import { createStore, compose, applyMiddleware } from 'redux';

import rootReducer from 'src/reducers';
import logMiddleware from '../middleware/logMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    logMiddleware,
  ),
);

// == Store
const store = createStore(
  rootReducer,
  enhancers,
);

export default store;
