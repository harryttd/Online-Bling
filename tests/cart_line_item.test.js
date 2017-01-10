'use strict'

const db = require('APP/db');
const Cart_Line_Item = require('APP/db/models/cart_line_item')
const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');
const expect = require('chai').expect;


describe('Cart_Line_Item Model', () => {

    before('wait for the db', () => db.didSync
    .then( () => db.sync({force:true}) )
  )

    let cart_line_item;
    let cartData = {
        quantity: 3,
	      product_id: 1,
        user_id: 1
	    }

	  beforeEach(function(){
	    cart_line_item = Cart_Line_Item.build(cartData);
	  });

    describe('Validation data fields', () => {
      it('Data placed appropriate column in table', () => {
          expect(cart_line_item.quantity).to.be.equal(cartData.quantity);
          expect(cart_line_item.product_id).to.be.equal(cartData.product_id);
          expect(cart_line_item.user_id).to.be.equal(cartData.user_id);
        })
      })


describe('Associate table', () => {

    describe('cart_line_item belongs', () => {

        let users, product;

        let userData = {name: 'yoyo', email: 'bb@example.com', password: '1234'}
        let productData = {
          name: 'test',
          sku: 'testpart',
          description: 'this is a product',
          price: 20.00,
          quantity: 1,
          image: 'APP/public/default-photo.png'
        }

        it('User association', () => {

          return Promise.all([User.create(userData), Product.create(productData)])
              .then(res=>(cart_line_item.save()))
              .then(res=> User.findById(res.user_id))
              .then(res=>{
                expect(res.name).to.be.equal(userData.name)
              })
              .catch(err => console.log(err));
        })

        // it('Product association', () => {
        //
        //   return Product.create(productData)
        //       .then(res=>(cart_line_item.save()))
        //       .then(res=>(Product.findById(res.product_id)))
        //       .then(res=>{
        //         expect(res.name).to.be.equal(productData.name)
        //       });
        // })
    })

  })

})
