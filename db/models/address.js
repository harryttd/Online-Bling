const Sequelize = require('sequelize');
const db = require('APP/db');

const Address = db.define('address', {
	address1: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {			
			notEmpty: true
		}
	},
	address2: {
		type: Sequelize.STRING,
		allowNull: true		
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
  country: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
  zipcode: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	}
});

/* potential improvements
 * ========================
 * address validation
 * 
 */

module.exports = Address;
