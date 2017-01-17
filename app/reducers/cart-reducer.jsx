import { RECEIVE_CART, ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from '../action-types';

export default (cartItems = [], action) => {

  switch (action.type) {

    case RECEIVE_CART:
      return action.cart;

    default:
      return cartItems;
  }
};
