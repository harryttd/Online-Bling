const Sequelize = require('sequelize');
const db = require('APP/db');
const OrderProduct = require('APP/db/models/order_product');
/*
 * DECIMAL?  DOUBLE?  FLOAT?  what to use??
 * http://net-informations.com/q/faq/float.html
 */

const Order = db.define('order', {
	total: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	}
},{
	scopes:{
		withProducts:()=>{
			include: [
				{ model: OrderProduct }
			]
		}
	}
});

/* potential improvements
 * ========================
 * address validation
 * 
 */

module.exports = Order;
