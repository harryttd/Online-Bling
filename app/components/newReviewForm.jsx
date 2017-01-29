//DUMMY FROM NOT GOING TO USE

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import store from '../store';

export default class NewReviewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			rating: 0,
			body: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		axios.post('/api/reviews', {
			rating: this.state.rating,
			body: this.state.body,
			productId: this.props.product.id
		});
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<fieldSet>
					<legend>Add a New Review</legend>
					<div className="form-group">
						<label className="col-xs-2 control-label">Rating</label>
						<div className="col-xs-10">
							<input type="number" name="quantity" min="1" max="5" onChange={e => this.setState({ rating: e.target.value })}/>
						</div>
					</div>

					<div className="form-group">
						<label className="col-xs-2 control-label">body</label>
						<div className="col-xs-10">
							<input className="form-control" type="text" onChange={e => this.setState({ body: e.target.value })} />
						</div>
					</div>

					<div className="form-group">
						<div className="col-xs-10 col-xs-offset-2">
							<button type="submit" className="btn btn-success">Add Review</button>
						</div>
					</div>

				</fieldSet>
			</form>
		);
	}
}
