import { connect } from 'react-redux';
import OrderList from 'APP/app/components/orderList';
import store from '../store';

function mapStateToProps(state) {
  return {
    allOrders: state.orders.allOrders
  };
}

// function mapDispatchToProps(state) {
// 	return {}
// }

const OrderListContainer = connect(mapStateToProps)(OrderList);

export default OrderListContainer;