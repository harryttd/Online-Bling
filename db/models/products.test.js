const expect = require('chai').expect;
const Product = require('products');
const db = require('db');

describe('Product Model', function() {
  it('should exist', function() {
    expect(Product).toExist();
  });
});
