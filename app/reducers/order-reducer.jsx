import { FETCH_ALL_ORDERS, FETCH_SINGLE_ORDER } from '../action-types';

const initialState = {
	allOrders: [],
	currentOrder: {}
};


export default (state = initialState, action) => {
	const newState = Object.assign({}, state);

	switch (action.type) {
			case FETCH_ALL_ORDERS: // USER
				newState.allOrders = action.orders;
				break;

			case FETCH_SINGLE_ORDER: // USER
				newState.currentOrder = action.currentOrder;
				break;

			default:
					return state;
	}

	return newState;
};


// case FETCH_ALL_ORDERS_ADMIN: // ADMIN
// 	    	return newState.allOrders = action.orders;
// 	    	break;

// 	    case FETCH_SINGLE_ORDER_ADMIN: // ADMIN
// 	    	return newState.currentOrder = action.currentOrder;
// 	    	break;
