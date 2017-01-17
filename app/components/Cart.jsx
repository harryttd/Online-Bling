import React from 'react';
import { Link } from 'react-router';
import CartItem from './CartItem';

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log("PROPSPSPPSP", this.props);
		const cartItems = this.props.cartItems, removeItem = this.props.removeItem, updateQuantity = this.props.updateQuantity;
		return (
			<div id="CartContainer" className="shopping-cart">

				<ol className="breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li className="active">Cart</li>
				</ol>

				<section className="cart-list container-fluid">
					<div className="row">
						<div className="col-xs-12 col-md-8 col-md-offset-2">
							<div>
								<table className="cart-table table table-hover">
									<thead>
										<tr>
											<th className="col-xs-2">Image</th>
											<th className="col-xs-4">Name</th>
											<th className="col-xs-2">Qty</th>
											<th className="col-xs-2">Price</th>
											<th className="col-xs-2">Action</th>
										</tr>
									</thead>
									{
										cartItems.map(item =>
											<tbody key={ item.id }>
												<CartItem item={item} removeItem={removeItem} updateQuantity={updateQuantity} />
											</tbody>
										)
									}
								</table>
								<button onClick="" className="submit">check out</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
  }
}
