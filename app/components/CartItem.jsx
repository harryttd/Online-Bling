import React from 'react';
import { Link } from 'react-router';

export default class CartItem extends React.Component {
	constructor(props){
		super(props);
		// console.log("CARTITEM", this.props.item);
		this.state = {
			price: this.props.item.product.price * this.props.item.quantity,
			quantity: this.props.item.quantity
		};
		this.onQuantityChange = this.onQuantityChange.bind(this);
	}

	onQuantityChange(event, item) {
		this.props.updateQuantity(item.id, event.target.value);
		this.setState({
			price: item.product.price * +event.target.value,
			quantity: event.target.value
		});
	}

	render() {
		const item = this.props.item, removeItem = this.props.removeItem;

		return (
			<tr key={ item.id }>
				<td className="col-xs-2">
					<Link to={`/products/${item.product_id}`} className="thumbnail">
						<img src={ item.product.image || 'http://placehold.it/350x150' } alt="..." />
					</Link>
				</td>
				<td className="col-xs-4">{ item.product.name }</td>
				<td className="col-xs-2">
					<input onChange={(event) => this.onQuantityChange(event, item) } min="0" max={ item.product.quantity } type="number" name="qty" defaultValue={ this.state.quantity } />
				</td>
				<td className="col-xs-2">
					<div>Unit price: ${ item.product.price }</div>
					<div>Line total: ${ this.state.price.toFixed(2) }</div>
				</td>
				<td className="col-xs-2">
					<div className="lineitem-actions">
						<i onClick={() => removeItem(item.id) } className="fa fa-times" aria-hidden="true" />
					</div>
				</td>
			</tr>
		);
	}
}
