const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const productsController = {
    index: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products/listadoProductos" , {productos});
    },

    editarProducto: (req,res) => {
        res.render("products/editarProducto");
    },

    productCart: (req,res) => {
        res.render("products/productCart");
    },

    productDetail: (req,res) => {
        res.render("products/productDetail");
    },
    
    agregarProducto: function(req,res) {
        res.render("products/agregarProducto");
    }
};

module.exports = productsController;