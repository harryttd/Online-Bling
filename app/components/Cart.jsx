import React from 'react';
import { Link } from 'react-router';

export default ({ cartItems, removeItem }) => (

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
								<tbody>
									{
										cartItems && cartItems.map(item => (
											<tr key={ item.id }>
												<td className="col-xs-2">
													<Link to={`/products/${item.product_id}`} className="thumbnail">
														<img src={ item.product.image || 'http://placehold.it/350x150' } alt="..." />
													</Link>
												</td>
												<td className="col-xs-4">{ item.product.name }</td>
												<td className="col-xs-2">{ item.quantity }<input type="number" name="qty" /></td>
												<td className="col-xs-2">${ item.product.price }</td>
												<td className="col-xs-2">
													<div className="lineitem-actions">
														<i onClick={() => removeItem(item.id) } className="fa fa-times" aria-hidden="true" />
													</div>
												</td>
											</tr>
										))
									}
								</tbody>
							</table>
							<button onClick="" className="submit">check out</button>
						</div>
					</div>
				</div>
			</section>
		</div>
);
