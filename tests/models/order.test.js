'use strict'

const db = require('APP/db');
const { Order, User, Address } = require('APP/db/models');
const { expect } = require('chai');

describe('!----- Backend Database Model - Order -----!', () => {

  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  let data = {
    order: { user_id: 1, shipping_address_id: 1, billing_address_id: 2 },
    user: { name: 'Cookie Monster', email: 'cookie@monster.com', password: '1234' },
    shippingAddress: {
      address1: '22-17 19th street',
      address2: null,
      city: 'New York',
      state: 'NY',
      country: 'United States',
      zipcode: '11105',
      user_id: 1
    },
    billingAddress: {
      address1: '123 Sesame street',
      address2: null,
      city: 'Astoria',
      state: 'NY',
      country: 'United States',
      zipcode: '11105',
      user_id: 1
    }
  }

  let associatedShipingAddress,
    associatedBillingAddres,
    associatedUser,
    createdOrder;

  before('feed data', () => {

    return User.create(data.user)
      .then(res => {
        associatedUser = res;
        return Address.create(data.shippingAddress)
      }).then(res => {
        associatedShipingAddress = res;
        return Address.create(data.billingAddress)
      }).then(res => {
        associatedBillingAddres = res;
        return Order.create(data.order)
      }).then(res => {
        createdOrder = res;
      })
  })

  // after('clear db', () => {
  //   return Promise.all([
  //     Order.truncate({ cascade: true }),
  //     Address.truncate({ cascade: true }),
  //     User.truncate({ cascade: true })
  //   ])
  // })

  describe('model attributes', () => {

    it('should exist', () => {
      expect(Order).to.exist
    });

    it('should have: total, user_id, shipping_address_id, billing_address_id', () => {
      expect(createdOrder.total).to.equal(0);
      expect(createdOrder.user_id).to.equal(1);
      expect(createdOrder.shipping_address_id).to.equal(1);
      expect(createdOrder.billing_address_id).to.equal(2);
    })
  })

  describe('Associate table', () => {

    it('Order belongs to User', () => {
      User.findById(createdOrder.user_id)
        .then(res => expect(res.name).to.be.equal(associatedUser.name))
    })

    it('Order belongs to Address as shipping address', () => {
      Address.findById(createdOrder.shipping_address_id)
        .then(res => expect(res.address1).to.be.equal(associatedShipingAddress.address1))
    })

    it('Order belongs to Address as billing address', () => {
      Address.findById(createdOrder.billing_address_id)
        .then(res => expect(res.address1).to.be.equal(associatedBillingAddres.address1))
    })
  })
})
