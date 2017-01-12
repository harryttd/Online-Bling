'use strict'

const db = require('APP/db');
const { Category } = require('APP/db/models');
const expect = require('chai').expect;

describe('!----- Backend Database Model - Category -----!', () => {

  before('wait for the db', () => db.didSync
    .then(()=>db.sync({force:true}))
    )

  
  let category;
  beforeEach(function() {
    category = Category.build({
      name: 'Gold Ring',
      parentCategory: 1
    });
  });

  afterEach(function() {
    return Category.truncate({ cascade: true });
  })

  // after('clear db', () => Category.truncate({ cascade: true }))


  describe('model attributes', function() {
    it('should exist', function() {
      expect(Category).to.exist;
    });

    it('should have: name, parentCategory', function() {
      expect(category.name).to.equal('Gold Ring');
      expect(category.parentCategory).to.equal(1);
      category.name = null;

      return category.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors[0].type).to.be.equal('notNull Violation');
        });
    });
  });
});
