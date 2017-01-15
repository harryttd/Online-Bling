import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../action-types';

export default (state = [], action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCT:
      // newState.selected = action.product;
      break;

    default:
      return state;

  }

  return newState;
};
