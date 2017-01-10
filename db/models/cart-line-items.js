const Sequelize = require('sequelize');
const db = require('APP/db');

const Cart_Line_Item = db.define('cart_line_item', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { notEmpty: true }
  },
