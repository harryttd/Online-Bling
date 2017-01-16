import React from 'react';
import { connect } from 'react-redux';
import ReviewList from 'APP/app/components/ReviewList';

const mapState = (state, getState) => {
	return (
		reviews: state.reviews.allReviews
	)
}

const dispatchState = (dispatch, getState) => {
	return {}
}

export default connect(mapState, dispatchState)(ReviewList);