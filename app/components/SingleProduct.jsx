import React from 'react';
import ProductDescription from './ProductDescription';
// import SingleReviewContainer from 'APP/app/containers/SingleReviewContainer';
import SingleReview from './SingleReview';
import newReviewForm from './newReviewForm';
import reviewAction from 'APP/app/action-creators/reviewActionCreator';


export default class SingleProduct extends React.Component {
	constructor(props){
		super(props)
		this.onRemoveClick = this.onRemoveClick.bind(this)
		// this.onEditClick = this.onEditClick.bind(this)
		this.onAddReviewSubmit = this.onAddReviewSubmit.bind(this)
	}
	onRemoveClick (id) {
		console.log('onRemoveClick', id)
		this.props.removeReview(id)
	}
	// onEditClick (id) {
	// 	console.log('onEditClick', id)
	// 	this.props.editReview(id)
	// }
	onAddReviewSubmit (e){
		e.preventDefault()

		const review = {
			stars: e.target.stars.value,
			body: e.target.body.value,
			product_id: this.props.product.id,
			// user_id: this.props.auth.id
		}

		this.props.addReview(review);
		e.target.stars.value = '';
		e.target.body.value = '';
	}

	// onEditReviewSubmit () {
	// 	// put request
	// 	e.preventDefault()



	// }
	render(){
		const { product, reviews, removeReview } = this.props
		return (
		  <div className="product">
		  	<div className="container-fluid">
		  		<div className="row">
		  			<div className="col-xs-12 col-md-8 col-md-offset-2">
			  			<h3>{ product.name }</h3>
					    <img src={ product.image } className="img-thumbnail" />

					    <ProductDescription product={product} />

					    <h5>SKU: {product.sku}</h5>
					    <h4>${product.price}</h4>

					    <div className="container-fluid">
					    	<h3>Product Reviews</h3>
					    	{	
					    		reviews && reviews.map(review => {
					    			console.log(reviews)
					    			return (
					    				<div key={review.id} className="row">
					    					<p>Rating: { review.stars } Review: { review.body } </p>
					    					<p>{/* Created by: { review.user.name } */} Created At: { review.created_at.slice(0,10) } { review.created_at.slice(11,16) }</p>	
					    					
					    					<button onClick={(e)=>{this.onRemoveClick(review.id)}}>Remove</button>
					    				</div>
					    			
					    			)
					    		})
					    	}

					    	<div className="row">					
					    		
								<form className="review-form" onSubmit={this.onAddReviewSubmit}>
									<div className="form-group">
										<textarea name="body" placeholder="Please enter review"  className="form-control" />
										<input type="number" name="stars" className="form-control" min="0" max="5" placeholder="Please enter rating (1 ~ 5)"/>
										<button type="submit">Submit</button>
									</div>
								</form>					
							</div>
					    </div>
		  			</div>
		  		</div>
		    </div>
		  </div>
		);	
	}
}


// <form className="review-form hide" onSubmit={(e)=>{this.onEditReviewSubmit(review.id)}}>
// 		    						<textarea name="body"/>
// 		    						<input type="number" name="stars" hidden />
// 		    						<button type="submit">Submit</button>
// 		    					</form>