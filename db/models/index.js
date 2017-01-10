'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');
const Address = require('APP/db/models/address');
const Category = require('APP/db/models/category');

Address.belongsTo(User);
//hasMany / belongsToMany
Product.belongsToMany(Category, {through: 'product_category'});
Category.belongsToMany(Product, {through: 'product_category'});

module.exports = { User, Product, Address, Category };
