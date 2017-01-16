import axios from 'axios';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../action-types';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const getProducts = () => dispatch =>
  axios.get('/api/product')
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(error => console.error("Could Not Retrieve Products", error));

export const getProductById = productId => dispatch =>
  axios.get(`/api/product/${productId}`)
  .then(response => dispatch(receiveProduct(response.data)))
  .catch(error => console.error("Could Not Retrieve Product", error));
