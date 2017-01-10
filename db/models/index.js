'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');
const Address = require('APP/db/models/address');
const Product_Review = require('APP/db/models/product_review')

Address.belongsTo(User)
Product_Review.belongsTo(User)
Product_Review.belongsTo(Product)
module.exports = { User, Product, Address };
