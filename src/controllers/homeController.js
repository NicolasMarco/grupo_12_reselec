const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const homeController = {
    home: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        const productosDestacados = productos.filter((producto) => {
            return producto.categoria == "destacados";
        });

        if (req.session.usuarioLoggeado) {
            const nombreUsuario = req.session.usuarioLoggeado.usuario;
            res.render("main/index" , {productosDestacados , nombreUsuario});
        } else {
            const nombreUsuario = "";
            res.render("main/index" , {productosDestacados , nombreUsuario});
        }

    },
}

module.exports = homeController;