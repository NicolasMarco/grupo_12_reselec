module.exports = function(sequelize, dataTypes) {
    let alias = "CategoryUser";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "category_users",
        timestamps: false
    }

    let CategoryUser = sequelize.define(alias, cols, config);

    CategoryUser.associate = function(models) {
        CategoryUser.hasMany(models.User, {
            as: "users",
            foreignKey: "idCategory"
        });
    }

    return CategoryUser;
}