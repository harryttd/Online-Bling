import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router';
import Products from './Products';

const Home = (props) => {
	console.log('#####', props)
	return(
	<div className="home">

		  	<div className="image-slide">
		  		<div className="image-info">
		  			
		  		</div>
		  	</div>
		  	

		  	<Products products={props.products}/>

		  	<section className="container-fluid promo-wrapper">
		  		<div className="row">
		  			<div className="col-xs-12 col-lg-6 our-story">
		  				<span>OUR STORY</span>		  			
		  			</div>	
		  			<div className="col-xs-12 col-lg-6 new-arrival">
		  				<span>SHOP ARRIVALS</span>		  			
		  			</div>	
		  		</div>			    
			  </section>			  
		  </div>
)};

const mapState = ({ products }) => ({ products: products.list });

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);