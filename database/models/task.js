const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priority_level: {
    type: Sequelize.STRING
  },

  
  completion_status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }

});

module.exports = Task;