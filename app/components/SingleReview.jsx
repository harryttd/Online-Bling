import React from 'react';
//react star rating package
//https://github.com/voronianski/react-star-rating-component/blob/master/README.md
import StarRating from 'react-star-rating-component';

//render a single review for products
const SingleReview = ({ selectedReview }) => {
	return (
		<div>
			<StarRating
				name="rate1"
				editing={false}
				starCount={5}
				defaultValue={selectedReview.rating}
				renderStarIcon={() => <span>*</span>}
				/>
			<prev>{ selectedReview }</prev>
			<p>{ selectedReview.body }</p>
		</div>
	);
};

export default SingleReview;
