'use strict'

const db = require('APP/db');
const Address = require('APP/db/models/address');
const expect = require('chai').expect;

describe('Address Model', () => {

    before('wait for the db', () => db.didSync)

    describe('Validation data fields', () => {

    		let address;
			  beforeEach(function(){
			    address = Address.build({
			      address1: '22-17 19th street',
            address2: null,
            city: 'New York',
            state: 'NY',
            country: 'United States',
            zipcode: '11105'
			    });
			  });

        describe('Address1 field', () => {
           
            it('should not be null', () => {
                address.address1 = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.address1 = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })


        describe('city field', () => {

            it('should not be null', () => {
                address.city = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.city = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('state field', () => {

            it('should not be null', () => {
                address.state = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.state = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('country field', () => {

            it('should not be null', () => {
                address.country = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.country = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('zipcode field', () => {
            it('should not be null', () => {
                address.zipcode = null
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('zipcode');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                address.zipcode = ''
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('zipcode');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })
    })

});
