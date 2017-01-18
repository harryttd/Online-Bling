import { FETCH_ALL_ORDERS, FETCH_SINGLE_ORDER } from '../action-types';

const initialState = {
  allOrders: [],
  currentOrder: {}
}


const orderReducer = function(state = initialState, action) {
	const newState = Object.assign({}, state);

	switch (action.type) {
	    case FETCH_ALL_ORDERS: // USER
	    	return newState.allOrders = action.orders;
	    	break;

	    case FETCH_SINGLE_ORDER: // USER
	    	return newState.currentOrder = action.currentOrder;
	    	break;
	}
}

export default orderReducer;

// case FETCH_ALL_ORDERS_ADMIN: // ADMIN
// 	    	return newState.allOrders = action.orders;
// 	    	break;
	    
// 	    case FETCH_SINGLE_ORDER_ADMIN: // ADMIN
// 	    	return newState.currentOrder = action.currentOrder;
// 	    	break;