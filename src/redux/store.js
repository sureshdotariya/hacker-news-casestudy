import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import RootReducer from './root-reducer';

import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const middlewares = [thunk, logger, reduxImmutableStateInvariant()];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
