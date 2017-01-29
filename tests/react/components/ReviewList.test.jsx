import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Link } from 'react-router';

import ReviewList from 'APP/app/components/ReviewList';
import SingleReview from 'APP/app/components/SingleReview';

describe('Review List Component', () => {
	const reviewListSample = [
		{id: 0, rating: 1, content: 'bad'},
		{id: 1, rating: 2, content: 'soso'},
		{id: 2, rating: 3, content: 'good'},
		{id: 3, rating: 4, content: 'great'},
	]

	let reviewList;
	beforeEach('Create reviewList', () => {
		reviewList = shallow(<ReviewList reviews={reviewListSample} />)
	})

	it('should have reviews', () => {
		expect(reviewList.instance().props.reviews).to.equal(reviewListSample)
	})

	it('should have 4 links and 4 single reviews', () => {
		expect(reviewList.find(Link)).to.have.length(4);
		expect(reviewList.find(SingleReview)).to.have.length(4);
	})
})
