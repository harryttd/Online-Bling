import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_PRODUCTS_BY_CATEGORY} from '../action-types';

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

    case RECEIVE_PRODUCTS_BY_CATEGORY:
      newState.list = action.products;
      break;

    default:
      return state;

  }

  return newState;
};
