import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router';
import { render } from 'react-dom';
import { receiveCategories } from '../action-creators/categories';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

export class Categories extends Component {
	constructor(props) {
		super(props);

	}

	render () {
		return (
			<NavDropdown eventKey={1} title="SHOP" id="categories-dropdown">
				{this.props.categories.rootList.map(category => {
					return (
						<MenuItem key={category.id} onClick={(e) => (browserHistory.push(`/products/category/${category.name}`))}>
							{ category.name }
						</MenuItem>
					);
				})
			}
		</NavDropdown>
	);
	}
}

//////////////////// Connector /////////////////////////

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
	return {
		categories: state.categories,
		location: ownProps.location
	};
};

export default connect(mapStateToProps)(Categories);

//old code might be useful
// 			<div className="submenu-wrapper">
// 				<ul>
// 					{this.props.categories.rootList.map(category => {
// 							return (
// 								<li key={category.id}>
// 									<Link to={`/products/category/${category.name}`}>{ category.name }</Link>
// 								</li>
// 							)
// 						})
// 					}
// 				</ul>
// 			</div>
// 		)
// 	}
// }
