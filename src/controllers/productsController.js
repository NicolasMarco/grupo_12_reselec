const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const productsController = {
    //Todos los productos
    index: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        res.render("products/listadoProductos" , {productos});
    },
    //Edicion de producto
    editarProducto: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productToSend = productos.find (product => {
            return product.id == id
        })
        res.render("products/editarProducto", {producto: productToSend});
    },
    //Carga de producto editado
    updateProducto: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        
        let productWithoutEdit = productos.find (producto =>  producto.id == id);

        let productoEditado =  {
            id: id,
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion,
            imagen: productWithoutEdit.imagen
        };

        let indice = productos.findIndex(producto => {
            return producto.id == id;
        });

        productos[indice] = productoEditado;
        
		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");
    },
    //Carrito de compras
    productCart: (req,res) => {
        res.render("products/productCart");
    },
    //Detalle de producto
    productDetail: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productToSend = productos.find (producto => {
            return producto.id == id
        })
        res.render("products/productDetail", {producto: productToSend});
    },
    //Agregar producto nuevo
    agregarProducto: function(req,res) {
        res.render("products/agregarProducto");
    },
    //Guardado de producto nuevo
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
        let id = req.params.id;

        let productoSinEditar = productos.find((producto) => {
            return producto.id == id;
        });

        let productoEditado =  {
            id: id,
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion ? req.body.descripcion : productoSinEditar.descripcion,
            imagen: req.files[0] ? req.files[0].filename : productoSinEditar.imagen,
            imagen2: req.files[1] ? req.files[1].filename : productoSinEditar.imagen2,
            imagen3: req.files[2] ? req.files[2].filename : productoSinEditar.imagen3,
            imagen4: req.files[3] ? req.files[3].filename : productoSinEditar.imagen4,
            imagen5: req.files[4] ? req.files[4].filename : productoSinEditar.imagen5
        };

        let indice = productos.findIndex((producto) => {
            return producto.id == id;
        })

        productos[indice] = productoEditado;

		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");

    },

    borrarProducto: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let id = req.params.id;

        let productosFinales = productos.filter((producto) => {
            return producto.id != id;
        });

        let productosJSON = JSON.stringify(productosFinales, null, " ");

        fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");
    }
    
};


module.exports = productsController;