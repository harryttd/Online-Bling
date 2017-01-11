const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Category = require('APP/db/models/category');
const app = require('APP/server/start');

describe('category route', () => {
	before('wait for the db', () => db.didSync);

	let categoryData = {
		name: 'Engagement Ring',
		parentCategory: 1
	}

	before('Build Product instance', () =>
		Category.create(categoryData)
	);

	after(() =>
		Category.truncate({ cascade: true })
	);

	describe('routings', () => {
		it('GET / should return all orders', () => 
			request(app)
			.get(`/api/category`)
			.expect(200)
			.then(res => {
				expect(res.body[0].parentCategory).to.equal(1);
				expect(res.body[0].name).to.equal('Engagement Ring');
			})
		)

		it('GET /:id should return one category with corresponding id', () => 
			request(app)
				.get(`/api/category/1`)
				.expect(200)
				.then(res => {
					expect(res.body.parentCategory).to.equal(1)
					expect(res.body.name).to.equal('Engagement Ring');
				})
		)

		it('POST / creates a category', () => 
			request(app)
				.post(`/api/category/`)
				.send({
					name: 'Diamond Ring', parentCategory: 2
				})
				.expect(201)
				.then(res => {
					expect(res.body.parentCategory).to.equal(2)
				})
		)

		it('PUT /:id update a category with corresponding id', () => 
			request(app)
				.put(`/api/category/1`)
				.send({
					name: 'Divorce Ring', parentCategory: 1
				})
				.then(updateCategory => {
					return Category.findById(1)
					.then (category => {
						expect(category.name).to.equal('Divorce Ring');
						expect(category.parentCategory).to.equal(1);
					})
				})
		)

		it('DELETE /:id removes a category with corresponding id', () => 
			request(app)
				.delete(`/api/category/1`)
				.expect(204)
		)
	})
})