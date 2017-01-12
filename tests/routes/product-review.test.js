const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const productReview = require('APP/db/models/product_review');
const app = require('APP/server/start');

describe.only('product review route', () => {
	before('wait for the db', () => db.didSync);

	let productReviewData = {
		body: 'Good product',
		stars: '4'
	}

	before('Build Product instance', () => 
		productReview.create(productReviewData)
	);

	after(() => 
		productReview.truncate({cascade: true})
	);

	describe('routings', () => {
		it('Get / should return all product reviews', () => 
			request(app)
			.get(`/api/productReview`)
			.expect(200)
			.then(res => {
				expect(res.body[0].body).to.equal('Good product');
				expect(res.body[0].stars).to.equal('4');
			})

		)

		it('GET /:id should return one product review with corresponding id', () => 
 			request(app)
 				.get(`/api/productReview/1`)
 				.expect(200)
 				.then(res => {
 					expect(res.body.body).to.equal('Good product')
 					expect(res.body.stars).to.equal('4');
 				})
 		)

		it('POST / creates a product review', () => 
 			request(app)
 				.post(`/api/productReview/`)
 				.send({
 					body: 'Awesome', stars: '3'
 				})
 				.expect(201)
 				.then(res => {
 					expect(res.body.body).to.equal('Awesome')
 				})
 		)

 		it('PUT /:id update a product review with corresponding id', () => 
 			request(app)
 				.put(`/api/productReview/1`)
 				.send({
 					body: 'Great', 
 					stars: '3'
 				})
 				.then(updateProductReview => {
 					return productReview.findById(1)
 					.then (productReview => {
 						expect(productReview.body).to.equal('Great');
 						expect(productReview.stars).to.equal('3');
 					})
 				})
 		)

 		it('DELETE /:id removes a product review with corresponding id', () => 
 			request(app)
 				.delete(`/api/productReview/1`)
 				.expect(204)
 		)

	})
})







