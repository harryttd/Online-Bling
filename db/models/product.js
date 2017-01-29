const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
  sku: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: { notEmpty: true }
  },
  description: {
    type: Sequelize.JSON
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
    validate: { notEmpty: true }
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: 'APP/public/default-photo.png'
  }
});

module.exports = Product;
