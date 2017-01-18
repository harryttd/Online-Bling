import React, { Component } from 'react';
import { Link } from 'react-router';
import Categories from './Categories';

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
		console.log('Footer props', this.props);
		return (
      <div className="footer container-fluid">
        <div className="row">
          <div className="col-xs-6 col-lg-4">
            <h4><strong>SHOP</strong></h4>
            <Categories/>
          </div>
          <div className="col-xs-6 col-lg-4">
            <h4><strong>NEED HELP?</strong></h4>
            <ul>
              <li>
                <Link><span>FAQ</span></Link>
              </li>
              <li>
                <Link><span>CONTACT</span></Link>
              </li>
              <li>
                <Link><span>SHIPPING + RETURN</span></Link>
              </li>
              <li>
                <Link><span>TERMS + CONDITION</span></Link>
              </li>
            </ul>
          </div>
          <div className="col-xs-12 col-lg-4">
            <h4><strong>GET LASTED FROM ONLINE BLING</strong></h4>

            <form className="subscription-form" onSubmit={(e)=>(this.onFormSubmit(e))}>
              <div>
                <label>New releases, exclusive promotions + more</label>
                <input type="email" className="form-control" name="email" placeholder="Email" />
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>

            <div className="social-icons">
              <Link><i className="fa fa-facebook" aria-hidden="true"></i></Link>
              <Link><i className="fa fa-twitter" aria-hidden="true"></i></Link>
              <Link><i className="fa fa-instagram" aria-hidden="true"></i></Link>
              <Link><i className="fa fa-pinterest-p" aria-hidden="true"></i></Link>
            </div>

          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 text-center">ONLINE BLING® is registered trademarks of , Drake Shits Gold LLC</div>
        </div>
      </div>
		);
	}
}
