const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const productsController = {
    //Todos los productos
    index: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let nombreUsuario = "";
        
        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }

        res.render("products/listadoProductos" , {productos , nombreUsuario});
    },
    //Edicion de producto
    editarProducto: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        const productToSend = productos.find (product => {
            return product.id == id
        })

        let nombreUsuario = "";

        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }

        res.render("products/editarProducto", {producto: productToSend , nombreUsuario});
    },
   
    //Carrito de compras
    productCart: (req,res) => {
        let nombreUsuario = "";

        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }

        res.render("products/productCart" , {nombreUsuario});
    },
    //Detalle de producto
    productDetail: (req,res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        let nombreUsuario = "";
        const productToSend = productos.find (producto => {
            return producto.id == id
        })

        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }

        res.render("products/productDetail", {producto: productToSend , nombreUsuario});
    },
    //Agregar producto nuevo
    agregarProducto: function(req,res) {
        let nombreUsuario = "";

        if (req.session.usuarioLoggeado) {
            nombreUsuario = req.session.usuarioLoggeado.usuario;
        }
        
        res.render("products/agregarProducto" , {nombreUsuario});
    },
    //Guardado de producto nuevo
    guardarProducto: function(req,res) {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        
        let imagenPrincipal = "";
        let imagenSecundaria1 = "";
        let imagenSecundaria2 = "";
        let imagenSecundaria3 = "";
        let imagenSecundaria4 = ""

        if (req.files[0]) {
            if (req.files[0].fieldname == "imagenPrincipal") {
                imagenPrincipal = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria1") {
                imagenSecundaria1 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria2") {
                imagenSecundaria2 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria3") {
                imagenSecundaria3 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria4") {
                imagenSecundaria4 = req.files[0].filename;
            }

            if (req.files[1]) {
                if (req.files[1].fieldname == "imagenSecundaria1") {
                    imagenSecundaria1 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria2") {
                    imagenSecundaria2 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria3") {
                    imagenSecundaria3 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria4") {
                    imagenSecundaria4 = req.files[1].filename;
                }

                if (req.files[2]) {
                    if (req.files[2].fieldname == "imagenSecundaria2") {
                        imagenSecundaria2 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria3") {
                        imagenSecundaria3 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria4") {
                        imagenSecundaria4 = req.files[2].filename;
                    }

                    if (req.files[3]) {
                        if (req.files[3].fieldname == "imagenSecundaria3") {
                            imagenSecundaria3 = req.files[3].filename;
                        } else if (req.files[3].fieldname == "imagenSecundaria4") {
                            imagenSecundaria4 = req.files[3].filename;
                        }
                    }
                }
            }
        }

        let productoACargar =  {
            id: (productos[productos.length-1].id + 1),
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion,
            imagen: imagenPrincipal,
            imagen2: imagenSecundaria1 == "" ? imagenPrincipal : imagenSecundaria1,
            imagen3: imagenSecundaria2 == "" ? imagenPrincipal : imagenSecundaria2,
            imagen4: imagenSecundaria3 == "" ? imagenPrincipal : imagenSecundaria3,
            imagen5: imagenSecundaria4 == "" ? imagenPrincipal : imagenSecundaria4
        };

        productos.push(productoACargar);

		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");

    },

    //Editar un producto
    updateProducto: (req, res) => {
        const productos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
        let id = req.params.id;
        
        let productWithoutEdit = productos.find ((producto) => {
            return producto.id == id;
        });

        let imagenPrincipal = productWithoutEdit.imagen;
        let imagenSecundaria1 = productWithoutEdit.imagen2;
        let imagenSecundaria2 = productWithoutEdit.imagen3;
        let imagenSecundaria3 = productWithoutEdit.imagen4;
        let imagenSecundaria4 = productWithoutEdit.imagen5;

        if (req.files[0]) {
            if (req.files[0].fieldname == "imagenPrincipal") {
                imagenPrincipal = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria1") {
                imagenSecundaria1 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria2") {
                imagenSecundaria2 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria3") {
                imagenSecundaria3 = req.files[0].filename;
            } else if (req.files[0].fieldname == "imagenSecundaria4") {
                imagenSecundaria4 = req.files[0].filename;
            }

            if (req.files[1]) {
                if (req.files[1].fieldname == "imagenSecundaria1") {
                    imagenSecundaria1 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria2") {
                    imagenSecundaria2 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria3") {
                    imagenSecundaria3 = req.files[1].filename;
                } else if (req.files[1].fieldname == "imagenSecundaria4") {
                    imagenSecundaria4 = req.files[1].filename;
                }

                if (req.files[2]) {
                    if (req.files[2].fieldname == "imagenSecundaria2") {
                        imagenSecundaria2 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria3") {
                        imagenSecundaria3 = req.files[2].filename;
                    } else if (req.files[2].fieldname == "imagenSecundaria4") {
                        imagenSecundaria4 = req.files[2].filename;
                    }

                    if (req.files[3]) {
                        if (req.files[3].fieldname == "imagenSecundaria3") {
                            imagenSecundaria3 = req.files[3].filename;
                        } else if (req.files[3].fieldname == "imagenSecundaria4") {
                            imagenSecundaria4 = req.files[3].filename;
                        }
                    }
                }
            }
        }

        let productoEditado =  {
            id: id,
            nombre: req.body.nombre,
            precio: parseInt(req.body.precio),
            categoria: req.body.categoria,
            tipoEquipo: req.body.tipoEquipo,
            caracteristicas : [req.body.caracteristicaUno , req.body.caracteristicaDos , req.body.caracteristicaTres],
            descripcion: req.body.descripcion ? req.body.descripcion : productWithoutEdit.descripcion,
            imagen: imagenPrincipal,
            imagen2: imagenSecundaria1,
            imagen3: imagenSecundaria2,
            imagen4: imagenSecundaria3,
            imagen5: imagenSecundaria4
        };

        console.log(imagenPrincipal , imagenSecundaria1 , imagenSecundaria2 , imagenSecundaria3 , imagenSecundaria4);

        let indice = productos.findIndex((producto) => {
            return producto.id == id;
        });

        productos[indice] = productoEditado;
        
		let productosJSON = JSON.stringify(productos, null, " ");

		fs.writeFileSync(productsFilePath , productosJSON);
        

		res.redirect("/products");
    },

    //Borrar un producto
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