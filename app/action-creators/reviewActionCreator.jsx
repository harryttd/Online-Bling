import axios from 'axios';

export const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
// export const ADD_REVIEW = 'ADD_REVIEW';

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


export const getReview = () => dispatch =>
	  axios.get('/api/review/')
	  .then(response => {
	    console.log('RESPONSE', response);
	    //receiveReviews or receiveReview ??
	    dispatch(receiveReviews(response.data));
	  })
	  .catch(error => console.error("Could Not Retrieve Reviews", error))

export const removeReview = id => dispatch => {
	axios.delete(`/api/review/${id}`)
		.catch(console.error);
}

export const addReview = review => dispatch => {
	axios.post(`/api/review/`, review)
	.then(() => getReview())
	.catch(error => console.error(`Could not add review, ${review}`, error))
}

// export const editReview = (id, review) => dispatch => {
// 	axios.put(`api/review/${id}`, { review })
// 	.then(() => getReview())
// 	.catch(err => console.error('Updating product review was UNSUCCESSFUL', error))
// }







