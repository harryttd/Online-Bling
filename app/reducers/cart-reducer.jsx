import { RECEIVE_CART, ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from '../action-types';

export default (items = [], action) => {

  switch (action.type) {

    case RECEIVE_CART:
      return items;

    default:
      return items;
  }
};
