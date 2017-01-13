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
			<div className="row">
				<div className="column">
					<h6><strong>SHOP</strong></h6>
                    <Link to="/rings">Rings</Link>
                    <Link to="/necklaces">Necklaces</Link>
                    <Link to="/bracelets">Bracelets</Link>
                    <Link to="/earrings">Earrings</Link>
                    <Link to="/sunglasses">Sunglasses</Link>
				</div>

				<div className="column">
                    <h6><strong>NEED HELP?</strong></h6>
                    <h6>FAQ</h6>
                    <h6>CONTACT</h6>
                    <h6>SHIPPING + RETURN</h6>
                    <h6>TERMS + CONDITIONS</h6>
                </div>

                <div className="column">
                    <h6><strong>GET LASTED FROM ONLINE BLING</strong></h6>
                    <h6>New releases, exclusive promotions + more</h6>

                    <div>
                    	<form onSubmit={this.onFormSubmit}>
                    		<input type="submit" ref="subscription" placeholder="Your Email" />
                    		<button type="button">Submit</button>
                    	</form>
               			<ul className="social-icon">
               				<li>
               					<a href="www.facebook.com">
               						<img src="facebook-icon.png" alt="Facebook Icon" />
               					</a>
               				</li>
               				<li>
               					<a href="www.twitter.com">
               						<img src="twitter-icon.png" alt="Twitter Icon" />
               					</a>
               				</li>
               				<li>
               					<a href="www.instagram.com">
               						<img src="instagram-icon.png" alt="Instagram Icon" />
               					</a>
               				</li>
               				<li>
               					<a href="www.pinterest.com">
               						<img src="pinterest-icon.png" alt="Pinterest Icon" />
               					</a>
               				</li>
               			</ul>
                    </div>

                    <div className="row">
                		<div className="column">ONLINE BLING® is registered trademarks of , Drake Shits Gold LLC</div>
              		</div>
                </div>
			</div>	
		);
	}
}
