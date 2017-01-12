const request = require('supertest-as-promised');
const { expect } = require('chai');
const db = require('APP/db');
const { Product, Category } = require('APP/db/models');
const app = require('APP/server/start');

describe('!----- Backend API Route - /api/product -----!', () => {

  before('wait for the db', () => db.didSync);
  after('Synchronize and clear database', () => db.sync({force: true}));

  after('clear db', () => Product.truncate({ cascade: true }));

  let productData = {
    name: 'TEST PRODUCT',
    sku: 'SKURING',
    description: { main: 'Really Pretty', size: 'baby' },
    price: 1000,
    quantity: 10
  };

    let productToPost = {
      name: 'Some dope piece of jewelry',
      sku: 'DPJ1',
      description: { main: 'Super Dope', size: 'whoever wants to wear it' },
      price: 300,
      quantity: 50
    };

    // For the /category/:categoryName spec at the end
    const categoryData = { name: 'Rings' },
      productCategory = { product_id: 1, category_id: 1 },
      categoryName = 'Rings';

    before('Build Product instance', () =>
      Promise.all([Product.create(productData), Category.create(categoryData), db.model('product_category').create(productCategory)])
      .catch(console.error)
    );

    it('GET /product gets all products', () =>
      request(app)
        .get(`/api/product`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
        })
    );

    it('GET /product/:id gets target product by id', () =>
      request(app)
        .get(`/api/product/1`)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
          expect(res.body.sku).to.be.equal(productData.sku);
          expect(res.body.quantity).to.be.equal(productData.quantity);
        })
    );

    it('POST /product posts new product', () =>
      request(app)
        .post(`/api/product`)
        .send(productToPost)
        .expect(201)
        .then(createdProduct => Product.findById(createdProduct.body.id))
        .then(foundProduct => {
          expect(foundProduct).to.be.an('object');
          expect(foundProduct.sku).to.be.equal(productToPost.sku);
          expect(foundProduct.quantity).to.be.equal(productToPost.quantity);
        })
    );

    it('PUT /:productId updates a product', () =>
      request(app)
        .put(`/api/product/1`)
        .send({name: 'Not so dope piece of jewelry anymore'})
        .expect(202)
        .then(updatedProduct => Product.findById(updatedProduct.body.id))
        .then(foundProduct => {
          expect(foundProduct).to.be.an('object');
          expect(foundProduct.name).to.be.equal('Not so dope piece of jewelry anymore');
        })
    );

    it('DELETE /:productId deletes a product', () =>
      request(app)
        .delete(`/api/product/2`)
        .expect(204)
        .then(updatedProduct => Product.findById(updatedProduct.body.id))
        .then(foundProduct => {
          expect(foundProduct).to.be.equal(null);
        })
    );

    it('GET /category/:categoryName gets all products under the category', () =>
      request(app)
        .get(`/api/product/category/${categoryName}`)
        .expect(200)
        .then(category => category.body)
        .then(foundProducts => {
          expect(foundProducts).to.be.an('array');
          expect(foundProducts[0].name).to.be.equal('Not so dope piece of jewelry anymore');
          expect(foundProducts[0].price).to.be.equal(1000);
        })
      );
});
