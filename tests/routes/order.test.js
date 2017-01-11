const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Order = require('APP/db/models/order');
const app = require('APP/server/start');

describe('order route', () => {
	before('wait for the db', () => db.didSync
		.then(() => db.sync({force:true}))
	)

	beforeEach(function() {
      return Order.create({
          products: [
            {id: 1, price: 10.00, quantity: 1},
            {id: 2, price: 20.00, quantity: 2},
            {id: 3, price: 30.00, quantity: 3}
          ]
        })
    });

    afterEach(function () {
    	return Product.truncate({ cascade: true });
  	});

  	describe('routings', () => {
  		it('GET / should return all orders', () => {
  			request(app)
  				.get(`/api/orders`)
  				.expect(200)
  				.then(res => {
  					return expect(res.body.products.length).to.equal(3)
  				})
  			
  		})
  	})
})