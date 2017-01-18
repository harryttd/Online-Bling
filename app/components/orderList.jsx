import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class OrderList extends Component {

  constructor(props){
    super(props)
    // this.state = {
    //   orders: []
    // }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('shouldComponentUpdate',nextProps, nextState);
  //   this.loadOrders(nextProps)
  // }

  // loadOrders(){
  //   const { orders } = this.props;
  //   console.log('loadOrders', orders)
  //   this.setState({orders})
  // }

  render() {
    console.log("THIS.PROPS", this.props);
  	const {orders} = this.props;
    console.log('OrderList', orders);

  	return (
      <div className="OrderContainer order-list">

        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Order</li>
        </ol>

    		<section className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-8 col-md-offset-2">
              <div>
    				    <h3 className="title">Your Orders</h3>                
        				<div className="numberOfOrders row">
                  {orders && orders.length ?
                    'Orders Placed' : 
                    'No Orders'}
                </div>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Purchased Date</th>
                      <th>Order Total</th>
                      <th>Order Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      orders && orders.map(order => (
                        <tr key={order.id}>
                          <td>{ order.id }</td>
                          <td>{ order.created_at.slice(0, 10) } { order.created_at.slice(11, 16) }</td>
                          <td>{ order.total }</td>   
                          <td><Link to="{`/order/user/${order.user_id}/${order.id}">Order Detail</Link></td>  
                        </tr>
                      ))
                    }                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>    			
    		</section>
      </div>
  	)
  }
}
  export default OrderList;




 

  // <p>{(order.map(product => product.selectedProduct.quantity).reduce((a,b) => a + b))} Total Quantity: </p>
  //                   {
  //                     order.map(product => (
  //                       <div key={product.id} className="col-xs-2 col-md-2 col-lg-2">
  //                         <p>{ product.name }</p>
  //                       <img style={{ "height": "150px" }}src={ product.imageUrl } />
  //                       </div>
  //                     ))
  //                   }
  //                   <div className="price row">${order.map(product => product.price * product.selectedProduct.quantity).reduce((a, b) => a + b).toFixed(2)} Total </div>
  //                   <Link to={`/orderList/${order[0].selectedProduct.order_id}`}>Order Details</Link>






