import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../action-types';

const initialProductsState = {
  selected: {},
  list: []
};

export default (state = initialProductsState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCT:
      newState.selected = action.product;
      break;

    default:
      return state;

  }

  return newState;
};
