const request = require('supertest-as-promised');
const {expect} = require('chai');
const db = require('APP/db');
const app = require('APP/server/start');
const { OrderProduct, Order, Product, User, Address, Category } = require('APP/db/models');


describe('!----- Backend API Route - /api/order-product -----!', () => {

  describe('Routings', () => {

  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  );

  after('Synchronize and clear database', () =>
    OrderProduct.truncate({cascade: true})
    .then(Order.truncate({cascade: true}))
    .then(Product.truncate({cascade: true}))
    .then(User.truncate({cascade: true}))
    .then(() => db.sync({force: true}))
  );

  let data = {
          userData: [
            {name: 'Barack Obama', email: 'barack@example.gov', password: '1234'},
            {name: 'Lida Cannon', email: 'kalo@sokum.com', password: '1234'}
          ],
          addressData: [
            {address1: '150 main street', city: 'Buffalo', state: 'NY', country: 'USA', zipcode: '12345', user_id: 1},
            {address1: '10 Hello World ave.', city: 'Los Angeles', state: 'CA', country: 'USA', zipcode: '12345', user_id: 2}
          ],
          orderData: [
            {total: 1, user_id: 1, shipping_address_id: 1, billing_address_id: 1},
            {total: 2, user_id: 2, shipping_address_id: 2, billing_address_id: 2},
          ],
          productData: [
            {name: 'TEST PRODUCT 2',  sku: 'skuparty', description: { main: 'Really Big Ring', size: 'baby' },
            price: 1000, quantity: 10}
          ],
          orderProductData: [
          { quantity: 1, line_total: 5, order_id: 1, product_id: 1 },
          { quantity: 100, line_total: 25, order_id: 2, product_id: 1 }
          ]
        }

        before( () =>
            User.bulkCreate(data.userData)
            .then(res=>Address.bulkCreate(data.addressData))
            .then(res=>Order.bulkCreate(data.orderData))
            .then(res=>Product.bulkCreate(data.productData))
            .then(res=>OrderProduct.bulkCreate(data.orderProductData))
        );


          it('GET / should return all orderProducts', () =>
            request(app)
              .get(`/api/orderproduct`)
              .expect(200)
              .then(res => {
                expect(res.body.length).to.equal(2)
              })
          )

          it('GET /:id should return one orderProducts with corresponding id', () =>
            request(app)
              .get(`/api/orderproduct/1`)
              .expect(200)
              .then(res => {
                // console.log("this is the res", res.body)
                expect(res.body.order_id).to.equal(1)
              })
          )

          it('GET /order/:orderId should return one orderProducts with corresponding order id', () =>
            request(app)
              .get(`/api/orderproduct/order/1`)
              .expect(200)
              .then(res => {
                // console.log("this is the res", res.body[0])
                expect(res.body[0].order_id).to.equal(1)
                expect(res.body[0].line_total).to.equal(5)
              })
          )

          it('POST / creates an orderProduct', () =>
            request(app)
              .post(`/api/orderproduct/`)
              .send({
                  quantity: 1, line_total: 1000, order_id: 2, product_id: 1
              })
              .expect(201)
              .then(res => {
                expect(res.body.line_total).to.equal(1000)
              })
          )

          it('PUT /:id update an orderProduct with corresponding id', () =>
            request(app)
              .put(`/api/orderproduct/1`)
              .send({
                  quantity: 999, line_total: 999, order_id: 1, product_id: 1
              })
              .then( () => {
                return OrderProduct.findById(1)
                .then( returnedOrderProduct => {
                  expect(returnedOrderProduct.quantity).to.equal(999);
                })
              })
          )

          it('DELETE /:id removes an orderProduct with corresponding id', () =>
            request(app)
              .delete(`/api/orderproduct/2`)
              .expect(204)
          )

      })
})
