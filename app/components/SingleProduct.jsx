import React from 'react';
import ProductDescription from './ProductDescription';
import StarRatingComponent from 'react-star-rating-component';
import SingleReview from './SingleReview';
import newReviewForm from './newReviewForm';
import reviewAction from 'APP/app/action-creators/reviewActionCreator';
import { Link } from 'react-router';

export default class SingleProduct extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			product: {},
			orderQty: 1,
			reviews: []
		}
		this.onRemoveClick = this.onRemoveClick.bind(this);
		this.onAddReviewSubmit = this.onAddReviewSubmit.bind(this);
		this.onStarClick = this.onStarClick.bind(this);
		this.onChangeQty = this.onChangeQty.bind(this);
		this.onClickAddCart = this.onClickAddCart.bind(this);
	}
	onRemoveClick (id) {
		this.props.removeReview(id);
	}
	onStarClick(nextValue, prevValue, name){
		console.log('function for updating the rating value should be dispatched from here');
	}

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

	onChangeQty(e){
		this.setState({orderQty: e.target.value});
	}

	onClickAddCart(product){		
		let cartLineItem = {
			product_id: product.id,
			orderQty: parseInt(this.state.orderQty)
		};
		this.props.addToCart(cartLineItem);
	}

	render(){
		const { product, reviews } = this.props;
		return (
			<div id="ProductContainer">

		  	<ol className="breadcrumb">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/products">Product</Link></li>
				 	<li className="active">{ product.name }</li>
				</ol>

	  		<section className="product-detail container-fluid">
	  			<div className="row">
	  				<div className="product-image col-xs-12 col-lg-8 pull-right">
							<div className="image-slide" style ={ { backgroundImage: `url('${product.image}')` } }></div>
						</div>
						<div className="product-info col-xs-12 col-lg-4 pull-right">
							<div className="container-fluid">
								<div className="name row">{ product.name }</div>
								<div className="price row">${ product.price }</div>
								<div className="add-cart row">
									<div className="quantity col-xs-4">
										{/* Below input box is not rendering */}
										<input type="number" name="quantity" onChange={(e)=>(this.onChangeQty(e))} defaultValue={this.state.orderQty} />
									</div>
									<div className="add-cart col-xs-8">
										<button onClick={(e) => this.onClickAddCart(product, this.state.orderQty) }>Add to cart</button>
									</div>
								</div>
								<div className="row">
									<div className="col-xs-12">
										{/* This is Bootstrap we might need to consider npm install react-bootstrap */}
										{/* Nav Tabs */}
										<ul className="nav nav-tabs" role="tablist">
											<li role="presentation" className="active"><a href="#detail" aria-controls="detail" role="tab" data-toggle="tab">Detail</a></li>
											<li role="presentation"><a href="#product-review-tab" aria-controls="description" role="tab" data-toggle="tab">Reviews</a></li>
										</ul>

										{/* Tab panes */}
										<div className="tab-content">										
											<div role="tabpanel" className="tab-pane active" id="detail">
												<ul>
													{
										        product.description && Object.keys(product.description).map(key =>
										          <li key={key}>{ product.description[key] }</li>
										        )
										      }
												</ul>											
											</div>

											<div role="tabpanel" className="tab-pane" id="product-review-tab">
												<div className="container-fluid">								
													{
														reviews && reviews.map(review => {
															return (
																<form key={review.id} className="row review">
																	<div className="form-group">
																		<div className="title">
																			{ review.title }
																			<input type="text" name="title" className="form-control hide" value={ review.title } />
																		</div>
																		<StarRatingComponent name="stars" 
									                    starCount={5}
									                    editing={false}
									                    value={parseInt(review.stars)}
									                    onStarClick={this.onStarClick.bind(this)} />
								                    <div className="createdAt">{ new Date(review.created_at).toDateString() }</div>
								                    <div className="body"><p>{ review.body }</p></div>
								                    <Link className="removeIcon" onClick={(e) => this.onRemoveClick(review.id)}>
								                    	<i className="fa fa-times"></i>
							                    	</Link>
								                    <textarea className="form-control hide" name="body" value={ review.body } disabled />
																	</div>																	
																</form>
															);
														})
													}
													<form className="row" onSubmit={(e)=>(this.onAddReviewSubmit(e))}>
														<div className="form-group col-xs-12 col-md-8" >
															<input name="title" type="text" placeholder="Subject" className="form-control" />
															<textarea name="body" placeholder="Write a review"  className="form-control" />
															<StarRatingComponent name="stars" starCount={5} />
															<button type="submit">Submit</button>
														</div>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</div>
			
				</section>
				
			</div>
		);
	}
}
