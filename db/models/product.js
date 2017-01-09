const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = db.define('product', {
  name: Sequelize.STRING
});

module.exports = Product;
