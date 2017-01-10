'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');
const Address = require('APP/db/models/address');
const Order = require('APP/db/models/order');


// User.hasMany(Address)
Address.belongsTo(User)
// User.hasMany(Address)
Order.belongsTo(User)
Order.belongsTo(Address, {as: 'shipping_address'})
Order.belongsTo(Address, {as: 'billing_address'})

module.exports = { User, Product, Address, Order };
