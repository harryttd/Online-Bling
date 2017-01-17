import axios from 'axios';
import { RECEIVE_CART, ADD_TO_CART, UPDATE_QUANTITY, REMOVE_FROM_CART } from '../action-types';

// ACTION CREATORS

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const add = product => ({
  type: ADD_TO_CART,
  product
});

export const remove = id => ({
  type: REMOVE_FROM_CART,
  id
});

// export const update = quantity => ({
//   type: UPDATE_QUANTITY,
//   quantity
// });

// DISPATCHERS

export const getCart = () => dispatch =>
  axios.get('/api/cart')
  .then(response => {
    console.log('RESPONSE', response);
    dispatch(receiveCart(response.data));
  })
  .catch(error => console.error("Could Not Retrieve Cart", error));

export const addToCart = product => dispatch =>
  axios.post('/api/cart', product)

  // .then(x => console.log("FDGS", x.data))
  .then(x => dispatch(add(x.data)))
  .catch(error => console.error(`Could Not add item ${product}`, error));

export const removeItem = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/cart/${id}`)
  .then(() => console.log('successfully deleted'))
 .catch(err => console.error(`Removing item: ${id} unsuccessful`, err));
};

export const updateQuantity = (id, quantity) => () => {
  axios.put(`/api/cart/${id}`, { quantity })
 .then(() => getCart())
 .catch(err => console.error(`Updating product quantity: ${quantity} change unsuccessful`, err));
};
