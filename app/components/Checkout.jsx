import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Checkout extends Component {
	constructor(props) {
		super(props);
		this.onCheckoutSubmit = this.onCheckoutSubmit.bind(this);
	}

	onCheckoutSubmit(event) {
		event.preventDefault();
		const target = event.target;
		const information = {
			name: target.name,
			shippingAddress1: target.shippingAddress1,
			shippingAddress2: target.shippingAddress2,
			shippingCity: target.shippingCity,
			shippingState: target.shippingState,
			shippingCountry: target.shippingCountry,
			cardHolderName: target.cardHolderName,
			billingAddress1: target.billingAddress1,
			billingAddress2: target.billingAddress2,
			billingCity: target.billingCity,
			billingState: target.billingState,
			billingCountry: target.billingCountry,
			cardType: target.cardType,
			cardNumber: target.cardNumber
		};
		this.props.checkout(information);
	}

	render() {
		return (
			<section className="cart-list container-fluid">
				<div className="row">
					<div className="col-xs-12">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-12 col-md-8">
									<div className="container-fluid">
										<form className="row" onSubmit={this.onCheckoutSubmit}>
											<div className="col-xs-12 col-md-6">
												<h4>Shipping Information</h4>
												<div className="form-group">
													<label>Name</label>
													<input type="text" name="name" className="form-control" />
												</div>
												<div className="form-group">
													<label>Street Address</label>
													<input type="text" name="shippingAddress1" className="form-control" />
												</div>
												<div className="form-group">
													<label>Additional Address(apt, suite, etc)</label>
													<input type="text" name="shippingAddress2" className="form-control" />
												</div>
												<div className="form-group">
													<label>City</label>
													<input type="text" name="shippingCity" className="form-control" />
												</div>
												<div className="form-group">
													<label>State</label>
													<input type="text" name="shippingState" className="form-control" />
												</div>
												<div className="form-group">
													<label>Country</label>
													<select name="shippingCountry" className="form-control">
														<option>United State</option>
														<option>Canada</option>
													</select>
												</div>
											</div>
											<div className="col-xs-12 col-md-6">
												<h4>Billing Information</h4>
												<div className="form-group">
													<label>Card holder Name</label>
													<input type="text" name="cardHolderName" className="form-control" />
												</div>
												<div className="form-group">
													<label>Street Address</label>
													<input type="text" name="billingAddress1" className="form-control" />
												</div>
												<div className="form-group">
													<label>Additional Address(apt, suite, etc)</label>
													<input type="text" name="billingAddress2" className="form-control" />
												</div>
												<div className="form-group">
													<label>City</label>
													<input type="text" name="billingCity" className="form-control" />
												</div>
												<div className="form-group">
													<label>State</label>
													<input type="text" name="billingState" className="form-control" />
												</div>
												<div className="form-group">
													<label>Country</label>
													<select name="billingCountry" className="form-control">
														<option>United State</option>
														<option>Canada</option>
													</select>
												</div>
												{/*<!-- we should take a look at stripe -->*/}
												<div className="form-group">
													<label>Select your card type</label>
													<select name="cardType" className="form-control">
														<option>Visa</option>
														<option>Master</option>
														<option>Discovery</option>
													</select>
												</div>
												<div className="form-group">
													<label>Card Number</label>
													<input type="text" name="cardNumber" className="form-control" />
												</div>
											</div>
										</form>
										<div className="row">
											<button type="submit" className="submit">Confirm Order</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
