'use strict';
module.exports = (sequelize, DataTypes) => {
  const cli_test = sequelize.define('cli_test', {
    test1: DataTypes.STRING,
    test2: DataTypes.STRING
  }, {});
  cli_test.associate = function(models) {
    // associations can be defined here
  };
  return cli_test;
};