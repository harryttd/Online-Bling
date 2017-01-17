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
  // Might need class / instance method to updateWhereUser()  
},{
	classMethods:{
		reassignUser(prevUserId, nextUserId){
			return Cart_Line_Item.update({
					user_id: nextUserId
				},{
					where: {
						user_id: prevUserId
					}
				}).then(console.log)
		}
	}
});

module.exports = Cart_Line_Item;
