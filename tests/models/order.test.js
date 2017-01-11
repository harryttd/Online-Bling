'use strict'

const db = require('APP/db')
const Order = require('APP/db/models/order')
const User = require('APP/db/models/user')
const Address = require('APP/db/models/address')

const { expect } = require('chai');

describe('Order Model', () => {

    before('wait for the db', () => db.didSync
    	.then(() => db.sync({force: true}))
  	)

    let order;

    beforeEach(() => {
    		order = Order.build({
            user_id: 4,
            shipping_address_id: 1,
            billing_address_id: 2,
        });
    });

    describe('model attributes', () => {

        it('should exist', () => {
            expect(Order).to.exist;
        });

        it('should have: total, user_id, shipping_address_id, billing_address_id', () => {
        		// console.log(order)
            expect(order.total).to.equal(0);
            expect(order.user_id).to.equal(4);
            expect(order.shipping_address_id).to.equal(1);
            expect(order.billing_address_id).to.equal(2);
        })
    })

    after('wait for the db', () => db.didSync
    	.then(() => db.sync({force: true}))
  	)

    describe('Associate table', () => {

    	let user = { name: 'Cookie Monster', email: 'cookie@monster.com', password: '1234' };

	    let shippingAddress = {
	        address1: '22-17 19th street',
	        address2: null,
	        city: 'New York',
	        state: 'NY',
	        country: 'United States',
	        zipcode: '11105',
	        user_id: 1
	    };

	    let billingAddress = {
	        address1: '123 Sesame street',
	        address2: null,
	        city: 'Astoria',
	        state: 'NY',
	        country: 'United States',
	        zipcode: '11105',
	        user_id: 1
	    };

	    // beforeEach('seed association', () => {
	    // 	User.create(user)
	    //     .then(res => {
	    //     	// console.log(res)
	    //     	return Address.create(shippingAddress)
	    //     })
	    //     .then(res => {
	    //     	// console.log(res)
	    //     	return Address.create(billingAddress)
	    //     })
	    // })

    	it('Order belongs to User', () => {

    		let shippingAssociation,
    				billingAssociation,
    				userAssociation;

    		User.create(user)
	        .then(res => {
	        	userAssociation = res;
	        	return Address.create(shippingAddress)
	        })
	        .then(res => {
	        	shippingAssociation = res;
	        	return Address.create(billingAddress)
	        })
	        .then(res => {
	        	billingAssociation = res;
	        	return order.save()
	        })
	        .then(res => {
            return User.findById(res.user_id)
          })
	        .then(res => {
            expect(res.name).to.be.equal(userAssociation.name);
          });

    	})

    	it('Order belongs to Address as shipping address', () => {

    		let shippingAssociation,
    				billingAssociation,
    				userAssociation;

    		User.create(user)
	        .then(res => {
	        	userAssociation = res;
	        	return Address.create(shippingAddress)
	        })
	        .then(res => {
	        	shippingAssociation = res;
	        	return Address.create(billingAddress)
	        })
	        .then(res => {
	        	billingAssociation = res;
	        	return order.save()
	        })
	        .then(res => Address.findById(res.shipping_address_id))
	        .then(res => expect(res.address1).to.be.equal(shippingAssociation.address1))

    	})

    	it('Order belongs to Address as billing address', () => {
    		let shippingAssociation,
    				billingAssociation,
    				userAssociation;

    		User.create(user)
	        .then(res => {
	        	userAssociation = res;
	        	return Address.create(shippingAddress)
	        })
	        .then(res => {
	        	shippingAssociation = res;
	        	return Address.create(billingAddress)
	        })
	        .then(res => {
	        	billingAssociation = res;
	        	return order.save()
	        })
	        .then(res => Address.findById(res.billing_address_id))
	        .then(res => expect(res.address1).to.be.equal(billingAssociation.address1))
    	})
    })

})
