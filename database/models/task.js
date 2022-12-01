const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  Description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  Priority_level: {
    type: Sequelize.STRING
  },

  
  Completion_status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }

});

module.exports = Task;