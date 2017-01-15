import axios from 'axios';
import { receiveProducts, receiveProduct } from '../action-creators/products';

export const getProducts = () => dispatch =>
  axios.get('/api/product')
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(error => console.error("Could Not Retrieve Products", error));

export const getProductById = productId => dispatch => {
  axios.get(`/api/products/${productId}`)
  .then(response => dispatch(receiveProduct(response.data)))
  .catch(error => console.error("Could Not Retrieve Product", error));
};
