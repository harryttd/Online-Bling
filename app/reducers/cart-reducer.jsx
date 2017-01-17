import { RECEIVE_CART, ADD_TO_CART, REMOVE_FROM_CART } from '../action-types';

export default (cartItems = [], action) => {

  switch (action.type) {

    case RECEIVE_CART:
      return action.cart;

    // case ADD_TO_CART:
    //   return action.product;

    case REMOVE_FROM_CART:
      return cartItems.filter(item => item.id !== action.id);

    default:
      return cartItems;
  }
};
