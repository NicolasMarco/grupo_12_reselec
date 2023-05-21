module.exports = function(sequelize, dataTypes) {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        name: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        phoneNumber: {
            type: dataTypes.STRING
        },
        userImage: {
            type: dataTypes.STRING
        },
        idCategory: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    let User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.CategoryUser, {
            as: "categoryUser",
            foreignKey: "idCategory"
        });
    }

    return User;
}