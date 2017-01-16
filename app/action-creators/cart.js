import axios from 'axios';
import { RECEIVE_CART, ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from '../action-types';

export const receiveCart = cart => ({
  type: RECEIVE_CART,
  cart
});

export const addItemToCart = product => ({
  type: ADD_TO_CART,
  product
});

export const removeItemFromCart = product => ({
  type: REMOVE_FROM_CART,
  product
});
