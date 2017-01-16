import React from 'react';
import { connect } from 'react-redux';
import SingleReview from 'APP/app/components/SingleReview';

const mapState = (state, getState) => {
	return {
		selectedReview: state.reviews.selectedReview;
	}
}

const dispatchState = (dispatch, getState) => {
	return {}
}

export default connect(mapState, dispatchState)(SingleReview);