import {RECEIVE_PRODUCTS, RECEIVE_PRODUCT} from '../action-types';

export default (products = [], action) => {

  // const newState = Object.assign({}, products);

  switch (action.type) {

    case RECEIVE_PRODUCTS:
      return action.products;

    case RECEIVE_PRODUCT:
      return products.filter(product => (
        action.product.id === product.id
      ))[0];

    default:
      return products;

  }

  // return newState;
};
