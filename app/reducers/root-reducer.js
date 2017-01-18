import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  products: require('./products-reducer').default,
  reviews: require('./reviewReducer').default,
  categories: require('./category-reducer').default,
  cart: require('./cart-reducer').default,
  orders: require('./order-reducer').default
});

export default rootReducer;
