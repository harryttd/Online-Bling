import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Checkout extends Component {
	render() {
		console.log('test time');
		return (
			<div>
				<h1>Online Bling</h1>
				<form className="checkoutForm">
					<div className="container">
						<h2>Customer Information</h2>
						<input type="text" name="customerEmail" placeholder="Email"/>
						<div className="row">
							<h4>Already have an account</h4>
							<a href="/login" className="button">Log In</a>
						</div>
					</div>

					<div className="container">
					</div>
				</form>
			</div>
		)
	}
}