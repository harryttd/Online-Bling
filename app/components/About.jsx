import React, { Component } from 'react';
import { Link } from 'react-router';

export default class About extends Component {
	render() {
		return (
			<div className="about">
				<div className="row">
					<div className="column">
						<img src="https://cdn.shopify.com/s/files/1/0236/9929/files/FlagshipPage_77a3707e-1360-4cf4-b667-50f1408c0780.png?16534521691931141188" alt="New York Office"/>
						<h3>New York</h3>
						<h5>5 Hanover Street | Financial District</h5>
						<h5>504-407-2925</h5>
						<h5>Monday - Wednesday: 10AM - 7PM</h5>
						<h5>Thursday - Sunday: 10AM - 8PM</h5>
					</div>

					<div className="column">
						<img src="https://cdn.shopify.com/s/files/1/0236/9929/files/Savannah.png?67863585231748543455" alt="San Francisco" />
						<h3>San Francisco</h3>
						<h5>809 Royal Street | Historic District</h5>
						<h5>912-495-5676</h5>
						<h5>Monday - Wednesday: 10AM - 7PM</h5>
						<h5>Thursday - Sunday: 10AM - 8PM</h5>
					</div>
				</div>

				<div className="container">
					<h3>About Online Bling</h3>
					<h5>KREWE's first flagship opened August 30, 2015 at 809 Royal Street, in New Orleans' French Quarter. The store is housed in a building dating to the late 19th century, with the historic Jackson Square and St. Louis Cathedral located around the corner. The store includes a small plant gallery, espresso bar, and adjoining courtyard seating. At the heart of the space is the Sun Room, which showcases KREWE's signature modern iconic eyewear. Frames can be individually fitted for optimum comfort and style in the custom fitting area. KREWE's flagship is about a mix of the old and the new, the iconic and the modern. It re-envisions the traditional New Orleans retail experience while celebrating the individual style of the city and its visitors.</h5>
				</div>

				<hr></hr>
			</div>
		)
	}
}

