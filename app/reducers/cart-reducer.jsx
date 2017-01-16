import { RECEIVE_CART, ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from '../action-types';

export default (items = [], action) => {

  switch (action.type) {

    case RECEIVE_CART:
      return action.cart;

    case ADD_TO_CART:
      return [...items, action.product];

    // case UPDATE_QUANTITY:

    case REMOVE_FROM_CART:
      return items.filter(item => item !== action.product);

    default:
      return items;
  }
};
