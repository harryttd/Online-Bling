import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  constructor(props){
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
	onFormSubmit(event) {
		event.preventDefault();

		// var subscriptionEmail = this.refs.subscriptionEmail.value;
    // Need to build subscription database model and link it to user database model
    // So that inputted email will be saved in our database. 
    var subscriptionEmail = event.target.subscriptionEmail.value    
		if(subscriptionEmail.length > 0) {
      console.log('Entering')
      console.log(typeof(subscriptionEmail));
      if(!subscriptionEmail.includes("@")) {
        window.alert('Please enter valid email address')
        event.target.subscriptionEmail.value = '';
      } else {
        window.alert('Thank you for your subscription ' + subscriptionEmail + '!');
        event.target.subscriptionEmail.value = '';
      }
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
            	<form onSubmit={(e)=>(this.onFormSubmit(e))}>
            		<input type="text" name="subscriptionEmail" placeholder="Your Email" />
            		<button type="submit">Submit</button>
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
