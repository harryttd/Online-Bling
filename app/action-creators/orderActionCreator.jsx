import axios from 'axios';
import { browserHistory } from 'react-router'

//***************** CONSTS

//Users
export const FETCH_ALL_ORDERS = 'FETCH_ALL_ORDERS';
export const FETCH_SINGLE_ORDER = 'FETCH_SINGLE_ORDER';

//Admins
export const FETCH_ALL_ORDERS_ADMIN = 'FETCH_ALL_ORDERS_ADMIN';
export const FETCH_SINGLE_ORDER_ADMIN = 'FETCH_SINGLE_ORDER_ADMIN';

//****************** ACTIONS
//Users
export function getAllOrders(orders) {
  return {
    type: FETCH_ALL_ORDERS,
    orders
  }
}

export function getSingleOrder(currentOrder) {
  return {
    type: FETCH_SINGLE_ORDER,
    currentOrder
  }
}

//Admins
export function getSingleOrderAdmin(currentOrder) {
  return {
    type: FETCH_SINGLE_ORDER_ADMIN,
    currentOrder
  }
}

export function getAllOrdersAdmin(orders) {
  return {
    type: FETCH_ALL_ORDERS_ADMIN,
    orders
  }
}

//******************* THUNKS

//Users

//Get all orders for the user
export function fetchAllOrders() {
  return function (dispatch, getState) {
  	//get userId from auth
    const userId = getState().auth.id

    axios.get(`/api/order/user/${userId}`)
      .then(res => res.data)
      .then(foundOrders => {
        dispatch(getAllOrders(foundOrders))
      })
      .catch(console.error)
    }
}

//Get One order for the user
export function fetchSingleOrder(orderId) {
  return function (dispatch, getState) {
    const userId = getState().auth.id

    axios.get(`/api/order/user/${userId}/${orderId}`)
      .then(res => res.data)
      .then(foundOrder => {
        dispatch(getSingleOrder(foundOrder))
      })
      .catch(console.error)
    }
} 

//Admins

//Get all orders for the admin
// export function fetchAllOrdersForAdmin() {
//   return function (dispatch, getState) {
//     axios.get('/api/order/admin')
//       .then(res => res.data)
//       .then(foundOrders => {
//         dispatch(getAllOrdersAdmin(foundOrders))
//       })
//       .catch(console.error)
//     }
// }

// //Get one order for the admin
// export function fetchSingleOrderForAdmin(orderId) {
//   return function (dispatch, getState) {
//     axios.get(`/api/order/admin/${orderId}`)
//       .then(res => res.data)
//       .then(foundOrder => {
//         dispatch(getSingleOrderAdmin(foundOrder))
//       })
//       .catch(console.error)
//     }
// }


















