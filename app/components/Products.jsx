import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
	render() {
		return (
			<div className="row">
				<div className="column">
					<img src="https://cdn.shopify.com/s/files/1/0236/9929/files/FlagshipPage_77a3707e-1360-4cf4-b667-50f1408c0780.png?16534521691931141188" alt="New York Office"/>
					<h3>New York</h3>
					<h5>809 Royal Street | French Quarter</h5>
					<h5>504-407-2925</h5>
					<h5>Monday - Wednesday: 10AM - 7PM</h5>
					<h5>Thursday - Sunday: 10AM - 8PM</h5>
				</div>
			</div>
		)
	}
}