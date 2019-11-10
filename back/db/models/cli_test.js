'use strict';
module.exports = (sequelize, DataTypes) => {
  const cli_test = sequelize.define('cli_test', {
    test1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    test2: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  cli_test.associate = function(models) {
    // associations can be defined here
  };
  return cli_test;
};