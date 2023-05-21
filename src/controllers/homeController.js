const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let db = require("../../database/models");

const homeController = {
    home: function(req,res) {
        /* CODIGO ANTERIOR FUNCIONANDO */
        /*
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        const productosDestacados = productos.filter((producto) => {
            return producto.categoria == "destacados";
        });

        res.render("main/index" , {productosDestacados});*/
        
        db.Product.findAll({
            where: {
                idCategory: 1
            }
        })

            .then(function(productosDestacados) {
                res.render("main/index" , {productosDestacados})
            })

    },
}

module.exports = homeController;