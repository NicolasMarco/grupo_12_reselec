module.exports = function(sequelize, dataTypes) {
    let alias = "CategoryProduct";

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
        tableName: "category_products",
        timestamps: false
    }

    let CategoryProduct = sequelize.define(alias, cols, config);

    CategoryProduct.associate = function(models) {
        CategoryProduct.hasMany(models.Product, {
            as: "products",
            foreignKey: "idCategory"
        });
    }

    return CategoryProduct;
}