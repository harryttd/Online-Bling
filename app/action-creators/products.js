import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../action-types';

export const receiveProducts = products => ({
    type: RECEIVE_PRODUCTS,
    products
});

export const receiveProduct = product => ({
    type: RECEIVE_PRODUCT,
    product
});
