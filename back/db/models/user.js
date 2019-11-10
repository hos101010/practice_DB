module.exports = function (sequelize, DataTypes) {
    const User = sequelize.define('user', {
        id: {
            field: 'id', 
            type: DataTypes.STRING(50), 
            allowNull: false ,
            primaryKey: true,
        },
        name: {
            field: 'name', 
            type: DataTypes.STRING(50), 
            allowNull: true 
        },
    }, {
      // don't use camelcase for automatically added attributes but underscore style
      // so updatedAt will be updated_at
      underscored: true,
      // disable the modification of tablenames; By default, sequelize will automatically
      // transform all passed model names (first parameter of define) into plural.
      // if you don't want that, set the following
      freezeTableName: true,
   
      // define the table's name
      tableName: 'user'
    });
   
    return User;
  };
  