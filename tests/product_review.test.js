'use strict'

const db = require('APP/db');
const Product_Review = require('APP/db/models/product_review');
const expect = require('chai').expect;

describe('Product Model', () => {

    before('wait for the db', () => db.didSync)

    describe('Validation data fields', () => {

    		let product_review;
			  beforeEach(function(){
			    product_review = Product_Review.build({
			      body: 'This bling is fresh to death!',
            stars: 5
			    });
			  });

        describe('body', () => {
           
            it('should not be null', () => {
                product_review.body = null
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                product_review.body = ''
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })


        describe('stars', () => {

            it('should not be null', () => {
                product_review.stars = null
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                product_review.stars = ''
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })

            it('should not be a number outside of the range 0 to 5', () => {
                product_review.stars = '6'
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })

            it('should not contain a number', () => {
                product_review.stars = 'a'
                return product_review.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('product_review');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })

        })

    })

});
