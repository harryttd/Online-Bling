import { expect } from 'chai';
import { createStore } from 'redux';

import reviewReducer from 'APP/app/reducers/reviewReducer';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW } from 'APP/app/action-creators/reviewActionCreator';

describe('Review Reducers', () => {
	let testStore;
	beforeEach('Create testing store', () => {
		testStore = createStore(reviewReducer)
	})

	it('has initial state', () => {
		expect(testStore.getState()).to.deep.equal({
			selectedReview: '',
			allReviews: []
		})
	})

	it('RECEIVE_REVIEWS', () => {
		const multipleReviews = [
			{rating: 1, content: 'bad'},
			{rating: 2, content: 'soso'},
			{rating: 3, content: 'good'},
			{rating: 4, content: 'great'}
		]
		testStore.dispatch({type: RECEIVE_REVIEWS, reviews: multipleReviews})

		const newState = testStore.getState();

		expect(newState.allReviews).to.deep.equal(multipleReviews)
		expect(newState.selectedReview).to.equal('')
	})

	it('RECEIVE_REVIEW', () => {
		const singleReview = {rating: 5, content: 'awesome'}
		testStore.dispatch({type: RECEIVE_REVIEW, review: singleReview})

		const newState = testStore.getState();

		expect(newState.allReviews).to.deep.equal([]);
		expect(newState.selectedReview).to.equal(singleReview)
	})
})
