module.exports = function(sequelize, dataTypes) {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        },
        characteristicOne: {
            type: dataTypes.STRING
        },
        characteristicTwo: {
            type: dataTypes.STRING
        },
        characteristicThree: {
            type: dataTypes.STRING
        },
        description: {
            type: dataTypes.STRING
        },
        mainImage: {
            type: dataTypes.STRING
        },
        imageTwo: {
            type: dataTypes.STRING
        },
        imageThree: {
            type: dataTypes.STRING
        },
        imageFour: {
            type: dataTypes.STRING
        },
        imageFive: {
            type: dataTypes.STRING
        },
        idCategory: {
            type: dataTypes.INTEGER
        },
        idTypeProduct: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.CategoryProduct, {
            as: "categoryProduct",
            foreignKey: "idCategory"
        });

        Product.belongsTo(models.TypeProduct, {
            as: "typeProduct",
            foreignKey: "idTypeProduct"
        });
    }

    return Product;
}