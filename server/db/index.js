//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Property = require("./models/Property");
const Unit = require("./models/Unit");
const Task = require("./models/Task");

//associations could go here!

Unit.belongsTo(Property);
Property.hasMany(Unit);
Property.hasMany(Task);

module.exports = {
  db,
  User,
  Property,
  Unit,
  Task,
};
