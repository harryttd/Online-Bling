import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../action-types';

const initialState = {
  list: [],
  selectedProduct: {}
};

export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      newState.list = action.products;
      break;

    case RECEIVE_PRODUCT:
      newState.selectedProduct = action.product;
      break;

    default:
      return state;

  }

  return newState;
};
