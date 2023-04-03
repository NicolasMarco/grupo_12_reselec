const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const productsController = {
    index: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products/listadoProductos" , {productos});
    },

    editarProducto: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productToSend = productos.find (product => {
            return product.id == id
        })
        res.render("products/editarProducto", {producto: productToSend});
    },

    productCart: (req,res) => {
        res.render("products/productCart");
    },

    productDetail: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productToSend = productos.find (product => {
            return product.id == id
        })
        res.render("products/productDetail", {producto: productToSend});
    },
    
    agregarProducto: function(req,res) {
        res.render("products/agregarProducto");
    },
    
    guardarProducto: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoACargar =  {
            id: (productos[productos.length-1].id + 1),
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            imagen2: req.files[1] ? req.files[1].filename : req.files[0].filename,
            imagen3: req.files[2] ? req.files[2].filename : req.files[0].filename,
            imagen4: req.files[3] ? req.files[3].filename : req.files[0].filename,
            imagen5: req.files[4] ? req.files[4].filename : req.files[0].filename
        };

        productos.push(productoACargar);

		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");

    },

    patchProducto: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

        let productoACargar =  {
            id: productos.id,
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion,
            imagen: req.files[0].filename,
            imagen2: req.files[1] ? req.files[1].filename : req.files[0].filename,
            imagen3: req.files[2] ? req.files[2].filename : req.files[0].filename,
            imagen4: req.files[3] ? req.files[3].filename : req.files[0].filename,
            imagen5: req.files[4] ? req.files[4].filename : req.files[0].filename
        };

        productos.push(productoACargar);

		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");

    }

    
};

module.exports = productsController;