'use strict'

const db = require('APP/db');
const { Address, User } = require('APP/db/models')
const expect = require('chai').expect;

describe('Address Model', () => {

  before('wait for the db', () => db.didSync)

  after('clear db', () => {
    return User.truncate({ cascade: true })
      .then(()=>Address.truncate({ cascade: true }));
  })

  let data = {
    user: { name: 'so many', email: 'god@example.com', password: '1234' },
    address: {
      address1: '22-17 19th street',
      address2: null,
      city: 'New York',
      state: 'NY',
      country: 'United States',
      zipcode: '11105',
      user_id: 1
    }
  }

  let address;
  beforeEach(function() {
    address = Address.build(data.address);
  });

  describe('Validation data fields', () => {

    it('Data placed appropriate column in table', () => {
      expect(address.address1).to.be.equal(data.address.address1);
      expect(address.address2).to.be.equal(data.address.address2);
      expect(address.city).to.be.equal(data.address.city);
      expect(address.state).to.be.equal(data.address.state);
      expect(address.country).to.be.equal(data.address.country);
      expect(address.zipcode).to.be.equal(data.address.zipcode);
      expect(address.user_id).to.be.equal(data.address.user_id);
    })

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


  describe('Associate table', () => {
    describe('Address belongs', () => {

      let userData = { name: 'so many', email: 'god@example.com', password: '1234' }
      it('User', () => {

        return User.create(data.user)
          .then(res => (User.findAll()))
          .then(res => (address.save()))
          .then(res => (User.findById(res.user_id)))
          .then(res => {
            expect(res.name).to.be.equal(data.user.name)
          });
      })
    })
  })
});
