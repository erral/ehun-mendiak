import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancer =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export default createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk)),
);
