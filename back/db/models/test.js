module.exports = function(sequelize, DataTypes){
    let Test = sequelize.define("Test", {
        testid: {
            filed: "testid",
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        },
        testpw: {
            field: "testpw",
            type: DataTypes.STRING(30),
            allowNull: false
        }
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: "Test"
    });
    return Test;
}