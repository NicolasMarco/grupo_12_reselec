const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const homeController = {
    home: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        const productosDestacados = productos.filter((producto) => {
            return producto.categoria == "destacados";
        });

        res.render("main/index" , {productosDestacados});
    }
};

module.exports = homeController;