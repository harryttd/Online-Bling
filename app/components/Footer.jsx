import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
	onFormSubmit(event) {
		event.preventDefault();

		var subscription = this.refs.subscription.value;
		if(subscription.length > 0) {
			this.refs.subscription.value = '';
			//Need to create onSubscribe function in Homepage.jsx
			this.props.onSubscribe(subscription);
		}
	}

	render() {
		console.log('test time');
		return (
			<div className="footer" role="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<ul className="footer-list">
								<li><strong>Shop</strong></li>
								<li>
									<Link to="/rings">Rings</Link>
								</li>
								<li>
									<Link to="/necklaces">Necklaces</Link>
								</li>
								<li>
									<Link to="/bracelets">Bracelets</Link>
								</li>
								<li>
									<Link to="/earrings">Earrings</Link>
								</li>
								<li>
									<Link to="/sunglasses">Sunglasses</Link>
								</li>
							</ul>
						</div>

						<div className="col-md-4">
							<ul className="footer-list">
								<li><strong>Need Help?</strong></li>
								<li>
									<Link to="/faq">FAQ</Link>
								</li>
								<li>
									<Link to="/careers">Careers</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/shipping-returns">Shipping & Returns</Link>
								</li>
							</ul>
						</div>

						<div className="col-md-4">
							<h3>GET THE LATEST FROM MACHO</h3>
							<h4>New releases, exclusive promotions + more</h4>
							<h4><i>Welcome to the MACHO!</i></h4>
							<form onSubmit={this.onFormSubmit}>
								<input type="submit" ref="subscription" placeholder="Your Email" />
								<button type="button">Submit</button>
							</form>
							<ul className="social-icon">
								<li id="facebook-icon">
									<a href="www.facebook.com">
										<img src="facebook-icon.png" alt="Facebook Icon" />
									</a>
								</li>
								<li id="twitter-icon">
									<a href="www.twitter.com">
										<img src="twitter-icon.png" alt="Twitter Icon" />
									</a>
								</li>
								<li id="instagram-icon">
									<a href="www.instagram.com">
										<img src="instagram-icon.png" alt="Instagram Icon" />
									</a>
								</li>
								<li id="pinterest-icon">
									<a href="www.pinterest.com">
										<img src="pinterest-icon.png" alt="Pinterest Icon" />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
