import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import SingleReview from 'APP/app/components/SingleReview';
import StarRating from 'react-star-rating-component';

//need to figure out how to implement half star
describe('Single Review Component', () => {
	const review1 = {
		rating: 3,
		content: 'great product'
	}
	const rating = 3;
	const content = 'great product';
	let review;
	beforeEach('Create review', () => {
		review = shallow(<SingleReview selectedReview={review1} />)
	})

	it('should have rating and content', () => {
		expect(review.instance().props.selectedReview.rating).to.equal(rating)
		expect(review.instance().props.selectedReview.content).to.equal(content)
	})

	it('should have a StarRating', () => {
		expect(review.find(StarRating)).to.have.length(1)
	})

	it('StarRating should have a value to set to props.rating', () => {
		expect(review.find(StarRating).props().value).to.equal(3)
	})
})
