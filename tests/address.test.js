'use strict'

const db = require('APP/db');
const Address = require('APP/db/models/address');
const expect = require('chai').expect;

describe('Address Model', () => {

    before('wait for the db', () => db.didSync)

    describe('Validation data fields', () => {

        describe('Address1 field', () => {

            const data = {
                address1: '22-17 19th street',
                address2: null,
                city: 'New York',
                state: 'NY',
                country: 'United States',
                zipcode: '11105'
            }
            it('should not be null', () => {
                data.address1 = null

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                data.address1 = ''

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('address1');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })


        describe('city field', () => {

            const data = {
                address1: '22-17 19th street',
                address2: null,
                city: 'New York',
                state: 'NY',
                country: 'United States',
                zipcode: '11105'
            }
            it('should not be null', () => {
                data.city = null

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                data.city = ''

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('city');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('state field', () => {

            const data = {
                address1: '22-17 19th street',
                address2: null,
                city: 'New York',
                state: 'NY',
                country: 'United States',
                zipcode: '11105'
            }
            it('should not be null', () => {
                data.state = null

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                data.state = ''

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('state');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('country field', () => {

            const data = {
                address1: '22-17 19th street',
                address2: null,
                city: 'New York',
                state: 'NY',
                country: 'United States',
                zipcode: '11105'
            }
            it('should not be null', () => {
                data.country = null

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                data.country = ''

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('country');
                        expect(err.errors[0].type).to.be.equal('Validation error');
                    });
            })
        })

        describe('zipcode field', () => {

            const data = {
                address1: '22-17 19th street',
                address2: null,
                city: 'New York',
                state: 'NY',
                country: 'United States',
                zipcode: '11105'
            }
            it('should not be null', () => {
                data.zipcode = null

                const address = Address.build(data);
                return address.validate()
                    .then(err => {
                        expect(err).to.be.an('object');
                        expect(err.errors[0].path).to.be.equal('zipcode');
                        expect(err.errors[0].type).to.be.equal('notNull Violation');
                    });
            })

            it('should not be an empty string', () => {
                data.zipcode = ''

                const address = Address.build(data);
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
