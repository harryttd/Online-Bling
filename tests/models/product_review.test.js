'use strict'

const db = require('APP/db');
const { Product_Review } = require('APP/db/models');
const { expect } = require('chai');

describe('Product Model', () => {

  before('wait for the db', () => db.didSync)

  after('clear db', () =>
    Product_Review.truncate({ cascade: true })
  )

  let product_review //, product, user;
  beforeEach(function() {
    product_review = Product_Review.build({
      body: 'This bling is fresh to death!',
      stars: '5'
    });
  });

  describe('record creation', () => {

    it('should have: name, sku, description, price, quantity, image', function() {
      expect(product_review.body).to.equal('This bling is fresh to death!');
      expect(product_review.stars).to.equal('5');
    })

  })

  describe('body validations', () => {

    it('should not be null', () => {
      product_review.body = null
      return product_review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.be.equal('body');
          expect(err.errors[0].type).to.be.equal('notNull Violation');
        });
    })

    it('should not be an empty string', () => {
      product_review.body = ''
      return product_review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.be.equal('body');
          expect(err.errors[0].type).to.be.equal('Validation error');
        });
    })
  })


  describe('stars validations', () => {

    it('should not be null', () => {
      product_review.stars = null
      return product_review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.be.equal('stars');
          expect(err.errors[0].type).to.be.equal('notNull Violation');
        });
    })

    it('should not be an empty string', () => {
      product_review.stars = ''
      return product_review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].path).to.be.equal('stars');
          expect(err.errors[0].type).to.be.equal('Validation error');
        });
    })

    it('should not be possible to save a record where stars number is outside of the range 0 to 5', () => {
      product_review.stars = '6'
      return product_review.save()
        .then()
        .catch(err => expect(err.name).to.equal('SequelizeDatabaseError'));
    })


    it('should not be possible to save a record where stars contains a letter', () => {
      product_review.stars = 'a'
      return product_review.save()
        .then()
        .catch(err => expect(err.name).to.equal('SequelizeDatabaseError'));
    })

  })
})
