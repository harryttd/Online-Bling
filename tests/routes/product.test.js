const request = require('supertest-as-promised');
const { expect } = require('chai');
const db = require('APP/db');
const { Product } = require('APP/db/models');
const app = require('APP/server/start');

describe('!----- Backend API Route - /api/product -----!', () => {

  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  after('clear db', () => Product.truncate({ cascade: true }));

  let productData = {
    name: 'TEST PRODUCT',
    sku: 'SKURING',
    description: { main: 'Really Pretty', size: 'baby' },
    price: 1000,
    quantity: 10
  };

  before('Build Product instance', () =>
    Product.create(productData)
    // .then(res => console.log(res))
    // .catch(err => console.log('ERR', err))
  );

  it('GET /product gets all products', () =>
    request(app)
    .get(`/api/product`)
    .expect(200)
    .then(res => {
      // console.log('res response');
      // console.log(res.body);
      expect(res.body).to.be.an('array');
    })
  );

  it('GET /product/:id gets target product by id', () =>
    request(app)
    .get(`/api/product/1`)
    .expect(200)
    .then(res => {
      // console.log(res.data);
      expect(res.body).to.be.an('object');
      expect(res.body.sku).to.be.equal(productData.sku);
    })
  );
});
