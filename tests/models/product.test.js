'use strict';
const db = require('APP/db');
const { Product } = require('APP/db/models');
const { expect } = require('chai');

describe('!----- Backend Database Model - Product -----!', () => {

  before('wait for the db', () => db.didSync
    .then(() => db.sync({ force: true }))
  )

  // after('clear db', () => 
  //   Product.truncate({ cascade: true })
  // )

  let product;
  beforeEach(function(){
    product = Product.build({
      name: 'Ring',
      sku: 'SKURING',
      description: { main: 'Really Pretty', size: 'baby' },
      price: 1000,
      quantity: 10
    });
  });

  describe('model attributes', function() {

    it('should exist', function() {
      expect(Product).to.exist;
    });

    it('should have: name, sku, description, price, quantity, image', function() {
      expect(product.name).to.equal('Ring');
      expect(product.sku).to.equal('SKURING');
      expect(product.description).to.deep.equal({ main: 'Really Pretty', size: 'baby' });
      expect(product.price).to.equal(1000);
      expect(product.quantity).to.equal(10);
      expect(product.image).to.equal('APP/public/default-photo.png');
      product.name = null;
      product.sku = null;
      product.price = null;
      return product.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].type).to.be.equal('notNull Violation');
          expect(err.errors[1].type).to.be.equal('notNull Violation');
          expect(err.errors[2].type).to.be.equal('notNull Violation');
        });
    });
  });
});
