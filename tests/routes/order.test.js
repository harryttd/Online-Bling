const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const Order = require('APP/db/models/order');
const app = require('APP/server/start');
const User = require('APP/db/models/user');
const Address = require('APP/db/models/address');

describe('!----- Backend API Route - /api/order -----!', () => {
	before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  let data = {
          users: [
            {name: 'so may', email: 'god@example.com', password: '1234'},
            {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
            {name: 'Lida Cannon', email: 'kalo@sokum.com', password: '1234'}
          ],

          addresses: [
            {address1: '150 main street', city: 'Buffalo', state: 'NY', country: 'USA', zipcode: '12345', user_id: 1},
            {address1: '150 main street', address2: '45 grove lane', city: 'Pittsburgh', state: 'PA', country: 'USA', zipcode: '12345', user_id: 2},
            {address1: '10 Hello World ave.', city: 'Los Angeles', state: 'CA', country: 'USA', zipcode: '12345', user_id: 3}
          ],
          orders: [
            {total: 1, user_id: 1, shipping_address_id: 1, billing_address_id: 1},
            {total: 2, user_id: 2, shipping_address_id: 2, billing_address_id: 2},
            {total: 3, user_id: 3, shipping_address_id: 3, billing_address_id: 3}
          ]
        }
	before( () =>
      User.bulkCreate(data.users)
      .then(res=>Address.bulkCreate(data.addresses))
      .then(res=>Order.bulkCreate(data.orders))
  );

  after(() =>
      Order.truncate({ cascade: true })
        .then(()=>Address.truncate({cascade:true}))
        .then(()=>User.truncate({cascade:true}))
  );

  	describe('routings', () => {

  		it('GET / should return all orders', () =>
  			request(app)
  				.get(`/api/order`)
  				.expect(200)
          .then(res => {
            expect(res.body.length).to.equal(3)
          })
  		)

      it('GET /:id should return one order with corresponding id', () =>
        request(app)
          .get(`/api/order/1`)
          .expect(200)
          .then(res => {
            // console.log("this is the res", res.body)
            expect(res.body.user_id).to.equal(1)
          })
      )

      it('POST / creates an order', () =>
        request(app)
          .post(`/api/order/`)
          .send({
              total: 10, user_id: 3, shipping_address_id: 3, billing_address_id: 3
          })
          .expect(201)
          .then(res => {
            expect(res.body.total).to.equal(10)
          })
      )

      it('PUT /:id update an order with corresponding id', () =>
        request(app)
          .put(`/api/order/1`)
          .send({
              total: 20, user_id: 1, shipping_address_id: 1, billing_address_id: 1
          })
          .then(updatedOrder => {
            return Order.findById(1)
            .then( order => {
              expect(order.total).to.equal(20);
            })
          })
      )

      it('DELETE /:id removes an order with corresponding id', () =>
        request(app)
          .delete(`/api/order/1`)
          .expect(204)
      )
    })
})
