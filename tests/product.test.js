const expect = require('chai').expect;
const Product = require('APP/db/models/product');
const db = require('APP/db');

describe('Product Model', function() {

  before(function () {
    return db.didSync;
  });

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

  //  We empty the tables after each spec
  afterEach(function () {
    return Product.truncate({ cascade: true });
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
    });
  });

});
