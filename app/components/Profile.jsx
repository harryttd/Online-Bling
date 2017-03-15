import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { removeItem, updateQuantity } from '../action-creators/cart';

class UserProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: ''
		}
	}
	componentWillUpdate(nextProps, nextState) {
		console.log(componentWillUpdate, nextProps, nextState)
	}
	handleOnSubmit(e) {
		e.preventDefault()
		console.log('update user information')
	}
	render(){
		return (
			<div className="user-profile">
				<ol className="breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li className="active">User Profile</li>
				</ol>
				<section className="user-info container-fluid">
					<div className="row">
						<form onSubmit={(e) => (this.handleOnSubmit(e))}>
							<div className="form-group">
								<label>Name</label>
								<input type="text" name="name" className="form-control" />
							</div>
							<div className="form-group">
								<label>Email</label>
								<input type="email" name="email" className="form-control" />
							</div>
							<button type="submit">Submit</button>
						</form>
					</div>
				</section>
			</div>
		);
	}
}

const mapState = ({ auth }) => ({ auth });

export default connect(mapState)(UserProfile);
