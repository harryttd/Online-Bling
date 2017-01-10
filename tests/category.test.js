const expect = require('chai').expect;
const Category = require('APP/db/models/category');
const db = require('APP/db');

describe('Category Model', function() {
    before(function() {
        return db.didSync;
    });

    let category;
    beforeEach(function() {
        category = Category.build({
            name: 'Gold Ring',
            parentCategory: 1
        });
    });

    afterEach(function () {
        return Category.truncate({ cascade: true });
    })

    describe('model attributes', function() {
        it('should exist', function() {
            expect(Category).to.exist;
        });

        it('should have: name, parentCategory', function() {
            expect(category.name).to.equal('Gold Ring');
            expect(category.parentCategory).to.equal(1);
            category.name = null;
            category.parentCategory = null;

            return category.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    console.log(err.errors);
                    expect(err.errors[0].type).to.be.equal('notNull Violation');
                     expect(err.errors[1].type).to.be.equal('notNull Violation');
                });
        });
    });
});