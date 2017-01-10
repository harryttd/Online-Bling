const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  description: {
    type: Sequelize.JSON
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1 // Create a function that increases quantity.
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'APP/public/default-photo.png'
  }
});

module.exports = Product;
