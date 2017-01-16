const Sequelize = require('sequelize');
const db = require('APP/db');

const Product_Review = db.define('product_review', {
  body: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isLongEnough: function(val) {
        if(val.length < 15) {
          throw new Error('Please input more descriptive review for the product.')
        }
      }
    }
  },

  stars: {
    type: Sequelize.ENUM('0','1','2','3','4','5'),
    allowNull: false,
    defaultValue: '0',
    validate: {
      notEmpty: true
    }
  }
});

module.exports = Product_Review;
