const Sequelize = require('sequelize');
const db = require('APP/db');

const Product_Review = db.define('product_review', {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  stars: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
    validate: {
      is: '/\d(?![0-5]\S)/g',
      notEmpty: true
    }
  }
});

module.exports = Product_Review;
