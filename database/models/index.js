// register models, set up associations between tables, and generate barrel file for the models;

const Course  = require('./Task');
const Instructor  = require('./Employee');

Course.belongsTo(Instructor);
Instructor.hasMany(Course);

module.exports = {
  Course,
  Instructor
};