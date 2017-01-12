'use strict'

const db = require('APP/db');
const { Cart_Line_Item, User, Product } = require('APP/db/models')
const { expect } = require('chai');

describe('!----- Backend Database Model - Cart_Line_Item -----!', () => {

  before('wait for the db', () => db.didSync
    .then(()=>db.sync({force:true}))
    )

  let data = {
    cart: { quantity: 3, product_id: 1, user_id: 1 },
    user: { name: 'yoyo', email: 'bb@example.com', password: '1234' },
    product: {
      name: 'test',
      sku: 'testpart',
      description: 'this is a product',
      price: 20.00,
      quantity: 1,
      image: 'APP/public/default-photo.png'
    }
  }

  let cart_line_item;
  beforeEach(() => {
    cart_line_item = Cart_Line_Item.build(data.cart);
  });


  describe('Validation data fields', () => {
    it('Data placed appropriate column in table', () => {
      expect(cart_line_item.quantity).to.be.equal(data.cart.quantity);
      expect(cart_line_item.product_id).to.be.equal(data.cart.product_id);
      expect(cart_line_item.user_id).to.be.equal(data.cart.user_id);
    })
  })


  describe('Associate table', () => {

    describe('cart_line_item belongs', () => {

      it('User association', () => {

        return User.create(data.user)
          .then(res => Product.create(data.product))
          .then(res => Cart_Line_Item.create(data.cart))
          .then(res => User.findById(res.user_id))
          .then(res => {
            expect(res.name).to.be.equal(data.user.name)
          })
          .catch(console.error);
      })
    })
  })
})
