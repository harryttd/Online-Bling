import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class OrderList extends Component {

  constructor(props){
    super(props)
  }

  render() {
  	const orders = this.props.allOrders;
  	return (
  		<div className="order-detail container-fluid">
  			<div className="row">
  				<div className="title row">Your Orders</div>
  				<div className="numberOfOrders row">{orders.length} Orders Placed</div>
  				{
  					orders && orders.map(order => (
  						<div className="row" key={order.id}>
  							<div key={order[0].selectedProduct.order_id} className="col-md-12 col-sm-12 col-lg-12">
  								<p>Order Placed On { order[0].selectedProduct.created_at.slice(0, 10) } { order[0].selectedProduct.created_at.slice(11, 16) }</p>
  								<p>{(order.map(product => product.selectedProduct.quantity).reduce((a,b) => a + b))} Total Quantity: </p>
  								{
  									order.map(product => (
  										<div key={product.id} className="col-xs-2 col-md-2 col-lg-2">
  											<p>{ product.name }</p>
											<img style={{ "height": "150px" }}src={ product.imageUrl } />
  										</div>
  									))
  								}
  								<div className="price row">${order.map(product => product.price * product.selectedProduct.quantity).reduce((a, b) => a + b).toFixed(2)} Total </div>
  								<Link to={`/orderList/${order[0].selectedProduct.order_id}`}>Order Details</Link>
  							</div>
  						</div>
  					))
  				}
  			</div>
  		</div>	
  	)
  }

  export default OrderList;