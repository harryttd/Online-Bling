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
			title: e.target.title.value,
			stars: e.target.stars.value,
			body: e.target.body.value,
			product_id: this.props.product.id,
			// user_id: this.props.auth.id
		}

		this.props.addReview(review);
		e.target.stars.value = '';
		e.target.body.value = '';
		e.target.title.value = '';
	}

	// onEditReviewSubmit () {
	// 	// put request
	// 	e.preventDefault()



	// }
	render(){
		const { product, reviews, removeReview } = this.props
		return (
		<div className="singleProductPage">
		  <div className="product">
		  	<section className="product-detail container-fluid">
		  		<div className="row">
		  			<div className="product-info col-xs-12 col-lg-3">
		  				<div className="container-fluid">
		  					<div className="name row">{ product.name }</div>
		  					<div className="price row">${ product.price }</div>
		  					<div className="SKU row">SKU: {product.sku}</div>

		  					<div className="product-image col-xs-12 col-lg-9">
				  				<div className="image-slide">
				  					<img src={ product.image } className="img-thumbnail" />
				  				</div>
				  			</div>

		  					<div className="add-cart- row">
		  						<div className="quantity col-xs-4">
		  							{/* Below input box is not rendering */}
		  							<input type="number" name="quantity" onChange="reactFunction" />
		  						</div>
		  						<div className="add-cart col-xs-8">
		  							<button>Add to cart</button>
		  						</div>
		  					</div>

		  					<div className="row">
		  						<div className="col-xs-12">
			  						{/* This is Bootstrap we might need to consider npm install react-bootstrap */}
			  						{/* Nav Tabs */}
			  						<ul className="nav nav-tabs" role="tablist">
									    <li role="presentation" className="active"><a href="#detail" aria-controls="detail" role="tab" data-toggle="tab">Detail</a></li>
									    <li role="presentation"><a href="#description" aria-controls="description" role="tab" data-toggle="tab">Description</a></li>								
									</ul>

									{/* Tab panes */}
									<div className="tab-content">
										<ProductDescription product={product} />
										<div role="tabpanel" className="tab-pane active" id="detail">
									    	<ul>
						  						<li>Lifetime Warranty</li>
						  						<li>Seafoam Gradient Mirrored Lens - Mirrored Lens Care</li>
						  						<li>Handcrafted, Acetate Frames</li>
						  						<li>100% UVA / UVB protection</li>
						  						<li>Prescription Ready</li>
						  						<li>Size 46-23-145</li>
						  						<li>Premium Hard Case</li>
						  						<li>Microfiber Cleaning Cloth</li>
						  						<li>Free Shipping</li>
						  					</ul>
									    </div>

									    <div role="tabpanel" className="tab-pane" id="description">
									    	<p>
									    		St. Louis derives inspiration from the French Quarter’s iconic 1800's cast iron balconies. Architectural in design, the brushed metal bridge is a bold and structurally significant feature. St. Louis’ adventurous style works best on bold personalities. 	
									    	</p>									    	
									    </div>
									</div>
		  						</div>
		  					</div>
		  				</div>
		  			</div>
		  		</div>
		  	</section>
			</div>

			<div className="product-review">
				<div className="container-fluid">
					<div className="name row">Product Reviews</div>
					{	
			    		reviews && reviews.map(review => {
			    			console.log(reviews)
			    			return (
			    				<div key={review.id} className="row">
			    					<p>Title: { review.title }</p>
			    					<p>Rating: { review.stars }</p>
			    					<p>Review: { review.body }</p>
			    					<p>{/* Created by: { review.user.name } */} Created At: { review.created_at.slice(0,10) } { review.created_at.slice(11,16) }</p>	
			    					
			    					<button onClick={(e)=>{this.onRemoveClick(review.id)}}>Remove</button>
			    				</div>
			    			)
			    		})
			    	}
				</div>

				<div className="row">							
					<form className="review-form" onSubmit={this.onAddReviewSubmit}>
						<div className="form-group">
							<textarea name="title" placeholder="Please enter review"  className="form-control" />
							<textarea name="body" placeholder="Please enter review"  className="form-control" />
							<input type="number" name="stars" className="form-control" min="0" max="5" placeholder="Please enter rating (1 ~ 5)"/>
							<button type="submit">Submit</button>
						</div>
					</form>					
		    	</div>
			</div>
		</div>
		);	
	}
}