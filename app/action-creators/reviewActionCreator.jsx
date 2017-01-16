import axios from 'axios';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
// export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReviews = reviews => {
	return {
		type: RECEIVE_REVIEWS,
		reviews
	}
}

export const receiveReview = review => {
	return {
		type: RECEIVE_REVIEW,
		review
	}
}

// export const removeReview = () => {
// 	return {
// 		type: REMOVE_REVIEW
// 	}
// }

export const getAllReviews = () => dispatch => {
	axios.get('/api/reviews')
		.then(res => res.data)
		.then(data => dispatch(receiveReviews(data)))
}

export const getReviewId = reviewId => dispatch => {
	axios.get(`/api/reviews/${reviewId}`)
		.then(res => res.data)
		.then(data => dispatch(receiveReview(data)))
}

