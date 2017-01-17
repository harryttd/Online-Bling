import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router'
import {render} from 'react-dom'
import { receiveCategories } from '../action-creators/categories'


export class Categories extends Component {


	render () {

		return (
			<div className="submenu-wrapper">
				<ul>
					{this.props.categories.rootList.map(category => {
							return (
								<li key={category.id}>
									<Link to={`/products/category/${category.name}`}>{ category.name }</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		)
	}
}

//////////////////// Connector /////////////////////////

import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};


export default connect(
	mapStateToProps
)(Categories);
