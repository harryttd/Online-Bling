import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products-reducer').default,
  reviews: require('./reviewReducer').default
});

export default rootReducer;
