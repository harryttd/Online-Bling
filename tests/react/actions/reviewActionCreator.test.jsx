import { expect } from 'chai';
import { RECEIVE_REVIEWS, RECEIVE_REVIEW, receiveReviews, receiveReview} from 'APP/app/action-creators/reviewActionCreator';

describe('Review Action Creators', () => {
	describe('receiveReviews', () => {
		it('should return the correct object', () => {
			const reviews = [
				{rating: 1, content: 'bad'},
				{rating: 2, content: 'soso'},
				{rating: 3, content: 'good'},
				{rating: 4, content: 'great'}
			]

			const newAction = receiveReviews(reviews);
			expect(newAction.type).to.deep.equal(RECEIVE_REVIEWS)
			expect(newAction.reviews).to.deep.equal(reviews)
		})
	})

	describe('receiveReview', () => {
		it('should return the correct object', () => {
			const review = {
				rating: 5, content: 'Awesome'
			}
			const newAction = receiveReview(review);
			expect(newAction.type).to.deep.equal(RECEIVE_REVIEW)
			expect(newAction.review).to.deep.equal(review)
		})
	})
})
