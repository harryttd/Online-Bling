import { connect } from 'react-redux';
import OrderList from 'APP/app/components/orderList';
import store from '../store';
import {fetchAllOrders} from '../action-creators/orderActionCreator'

const mapStateToProps = ({ orders }) => ({orders: orders.allOrders})

const mapDispatchToProps = ({ fetchAllOrders }) => ({fetchAllOrders})

export default connect(mapStateToProps, mapDispatchToProps)(OrderList);