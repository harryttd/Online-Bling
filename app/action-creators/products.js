import axios from 'axios';
import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT, RECEIVE_PRODUCTS_BY_CATEGORY } from '../action-types';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});

export const receiveProductsByCategory = products => ({
    type: RECEIVE_PRODUCTS_BY_CATEGORY,
    products
});


export const getProducts = () => dispatch =>
  axios.get('/api/product')
  .then(response => dispatch(receiveProducts(response.data)))
  .catch(error => console.error("Could Not Retrieve Products", error));

export const getProductById = productId => dispatch =>
  axios.get(`/api/product/${productId}`)
  .then(res => res.data )
  .then(product => dispatch(receiveProduct(product)))
  .catch(error => console.error("Could Not Retrieve Product", error));

  export const getProductsByCategoryId = categoryName => dispatch =>
    axios.get(`/api/product/category/${categoryName}`)
    .then(response => dispatch(receiveProductsByCategory(response.data)))
    .catch(error => console.error("Could Not Retrieve Product by Category", error));
