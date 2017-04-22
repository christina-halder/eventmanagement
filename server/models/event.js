'use strict';
module.exports = function(sequelize, DataTypes) {
  var event = sequelize.define('event', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    year: DataTypes.INTEGER,
    month: DataTypes.STRING,
    date: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return event;
};