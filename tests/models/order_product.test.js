'use strict'

const db = require('APP/db');
const { Order, OrderProduct, User, Product, Address } = require('APP/db/models');
const { expect } = require('chai');

describe('!----- Backend Database Model - OrderProduct -----!', () => {

  let data = {
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
    },
    order: {
      total: 24.00,
      user_id: 1,
      shipping_address_id: 1,
      billing_address_id: 2
    },
    products: [
      { name: 'Diamond Ring', sku: 'GR1', description: { metal: '14K Yellow Gold', design: 'Butterfly', stone: 'diamond', age: 'Teens' }, price: 99.99, quantity: 10 },
      { name: 'Gold Dude Necklace', sku: 'GDN1', description: { metal: '24K Yellow Gold', design: 'chain', stone: 'none', age: 'Adults' }, price: 1000, quantity: 20 },
      { name: 'Drake Bling Stud Diamond Earrings', sku: 'DSD1', description: { metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Adults' }, price: 3000, quantity: 50 },
      { name: 'Baby Emerald Earrings', sku: 'BE1', description: { metal: '14K White Gold', design: 'Diamond Stud', stone: 'diamond', backing: 'Covered Screw Backs', age: 'Baby' }, price: 200, quantity: 50 },
      { name: 'Drake Exclusive Bracelet', sku: 'DEB1', description: { metal: '14K Gold', design: 'Plain', stone: 'none', age: 'Teens' }, price: 99.99, quantity: 10 }
    ],
    orderProducts: [
      { order_id: 1, product_id: 1, quantity: 10, line_total: 10 * 99.99 },
      { order_id: 1, product_id: 2, quantity: 3, line_total: 3 * 1000 },
      { order_id: 1, product_id: 3, quantity: 1, line_total: 1 * 3000 },
      { order_id: 1, product_id: 4, quantity: 2, line_total: 2 * 200 },
      { order_id: 1, product_id: 5, quantity: 1, line_total: 1 * 99.99 }
    ]
  }

  before('wait for the db', () => db.didSync
    .then(()=>db.sync({force:true}))
    )

  

  let associatedUser,
    associatedAddress,
    associatedProducts,
    associatedOrder,
    createdOrderProducts;

  before('feed data', () => {
    return User.create(data.user)
      .then(res => {        
        associatedUser = res
        return Address.bulkCreate([data.shippingAddress, data.billingAddress])
      }).then(res => {
        associatedAddress = res
        return Product.bulkCreate(data.products)
      }).then(res => {
        associatedProducts = res
        return Order.create(data.order)
      }).then(res => {
        associatedOrder = res
        return OrderProduct.bulkCreate(data.orderProducts)
      }).then(res => {
        createdOrderProducts = res
      }).catch(console.error)
  })


  // after('clear db', () => {
  //   return Promise.all([
  //       OrderProduct.truncate({ cascade: true }),
  //       Product.truncate({ cascade: true }),
  //       Order.truncate({ cascade: true }),
  //       Address.truncate({ cascade: true }),
  //       User.truncate({ cascade: true })
  //   ])
  // })

  describe('create rows in database', () => {

    it('Order product belongs to Product', () => {
      OrderProduct.findAll()
        .then(res => {
          expect(res.length).to.be.equal(5)
        })
    })
  })

  describe('Associate table', () => {

    let orderProduct;
    beforeEach('belongs to', () => {
      OrderProduct.findById(1)
        .then(res => { orderProduct = res })
    })


    it('Order', () => {
      OrderProduct.findById(1)
        .then(res => {
          orderProduct = res
          return Order.findById(orderProduct.order_id)
        }).then(res => {
          expect(res.total).to.be.equal(24)
        })
    })

    it('Product', () => {
      OrderProduct.findById(1)
        .then(res => {
          orderProduct = res
          return Product.findById(orderProduct.product_id)
        }).then(res => {
          expect(res.name).to.be.equal('Diamond Ring')
        })
    })
  })

})
