const expect = require('chai').expect;
// const Product = require('products');
const Product = require('APP/db/models/product');
const db = require('APP/db');

describe('Product Model', function() {
  it('should exist', function() {
    expect(Product).toExist();
  });
});
