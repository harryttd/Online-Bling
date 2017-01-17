'use strict'
const Sequelize = require('sequelize');
const db = require('APP/db');
const Product = db.Product;

const Cart_Line_Item = db.define('cart_line_item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true }
  }
});

module.exports = Cart_Line_Item;
