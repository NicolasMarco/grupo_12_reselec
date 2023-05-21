module.exports = function(sequelize, dataTypes) {
    let alias = "TypeProduct";

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
        tableName: "type_products",
        timestamps: false
    }

    let TypeProduct = sequelize.define(alias, cols, config);

    TypeProduct.associate = function(models) {
        TypeProduct.hasMany(models.Product, {
            as: "products",
            foreignKey: "idTypeProduct"
        });
    }

    return TypeProduct;
}