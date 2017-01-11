const Sequelize = require('sequelize');
const db = require('APP/db');

const OrderProduct = db.define('order_product', {
	quantity:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: { notEmpty: true }
  },
	line_total: {
		type: Sequelize.FLOAT,
		defaultValue: 0
	}
});

module.exports = OrderProduct;
