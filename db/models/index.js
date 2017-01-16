'use strict';

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');
const Address = require('APP/db/models/address');
const Order = require('APP/db/models/order');
const OrderProduct = require('APP/db/models/order_product');
const Category = require('APP/db/models/category');
const Product_Review = require('APP/db/models/product_review')
const Cart_Line_Item = require('APP/db/models/cart_line_item')


Address.belongsTo(User)
//hasMany / belongsToMany
Product.belongsToMany(Category, {through: 'product_category'});
Category.belongsToMany(Product, {through: 'product_category'});

Product_Review.belongsTo(User)
Product_Review.belongsTo(Product)
Product.hasMany(Product_Review)


Cart_Line_Item.belongsTo(User)
Cart_Line_Item.belongsTo(Product)

Order.belongsTo(User)
Order.belongsTo(Address, {as: 'shipping_address'})
Order.belongsTo(Address, {as: 'billing_address'})

OrderProduct.belongsTo(Order)
OrderProduct.belongsTo(Product)

module.exports = { 
	User, 
	Product, 
	Address, 
	Category,
	Product_Review,
	Cart_Line_Item,
	Order,
	OrderProduct 
};
