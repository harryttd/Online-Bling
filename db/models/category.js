const Sequelize = require('sequelize');
const db = require('APP/db');

const Category = db.define('category', {
  name: {
     type: Sequelize.STRING,
     allowNull: false,
     validate: { notEmpty: true }
  },
  parentCategory: {
      type: Sequelize.INTEGER,
      allowNull: true
  }
});

module.exports = Category;
