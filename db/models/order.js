const Sequelize = require('sequelize');
const db = require('APP/db');

/*
 * DECIMAL?  DOUBLE?  FLOAT?  what to use??
 * http://net-informations.com/q/faq/float.html
 */

const Order = db.define('order', {
	total: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	}
});

/* potential improvements
 * ========================
 * address validation
 * 
 */

module.exports = Order;
