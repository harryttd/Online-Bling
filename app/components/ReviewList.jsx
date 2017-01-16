import React from 'react';
import SingleReview from './SingleReview';
import { Link } from 'react-router';

const ReviewList = ({ reviews }) => {
	return (
		<div>
			{ reviews && reviews.map(review => {
				return (
					<Link to={`/reviews/${review.id}`}>
						<SingleReview key={review.id} rating={reviews.rating} content={reviews.content} />
					</Link>
				)
			})}
		</div>
	)
}

export default ReviewList;